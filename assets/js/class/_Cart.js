import ajax from "../functions/_ajax";

export default class Cart {
    /**
     * @param {Object} options
     * @param {string} [options.button_class=cart-button] Classe CSS des boutons d'ajout au panier
     * @param {string} [options.navcart_class=navcart] Classe CSS du menu panier
     * @param {string} [options.navcart_button_class=navcart__hover] Classe CSS du bouton du menu panier
     * @param {string} [options.shopping_bag_class=cart-hover] Classe CSS du menu panier
     * @param {string} [options.shopping_bag_item_class=cart-hover__item] Classe CSS des items du menu panier
     * @param {string} [options.cart_quantity_class=navcart] Classe CSS quantité dans le panier
     * @param {string} [options.cart_url=/panier/] Lien vers le panier
     * @param {Popup} [options.popup=null] popup
     */
    constructor(options = {})
    {
        //Settings
        this.options = Object.assign({
            button_class: 'cart-button',
            navcart_class: 'navcart',
            navcart_button_class: 'navcart__hover',
            shopping_bag_class: 'cart-hover',
            shopping_bag_item_class: 'cart-hover__item',
            cart_quantity_class: 'navcart',
            cart_url: '/panier/',
            popup: null,
        }, options);
        this.processing = false;
        this.cartContent = {};
        this.onSales = false;
        this.gaIsInitialized = false;

        //DOM handling
        this.buttons = [].slice.call(document.getElementsByClassName(this.options.button_class));
        this.navcart = document.querySelector('.'+this.options.navcart_class);
        this.navcartToggle = document.querySelector('.'+this.options.navcart_button_class);
        this.shoppingBag = document.querySelector('.'+this.options.shopping_bag_class);
        this.shoppingBagQuantity = document.querySelector('.'+this.options.cart_quantity_class);
        this.shoppingBagItemButtons = [].slice.call(document.querySelectorAll('.'+this.options.shopping_bag_item_class+' .remove-item'));

        //Events
        this.navcartToggle.addEventListener('click', this.onNavcartToggleClick.bind(this));
        this.buttons.forEach(button => {
            button.addEventListener('click', this.onButtonClick.bind(this, button));
        });
        this.shoppingBagItemButtons.forEach(button => {
            button.addEventListener('click', this.onShoppingBagButtonClick.bind(this, button));
        });
    }

    onNavcartToggleClick(e)
    {
        // e.preventDefault();
    }

    onButtonClick(button)
    {
        if (this.processing) {
            return;
        }
        this.processing = true;
        let spinner = button.querySelector('.fa-spinner');
        spinner.classList.remove('hidden');
        let added = button.dataset.added !== undefined;
        let url = added ? button.dataset.remove_item_url : button.dataset.add_item_url;
        ajax(url, (response) => {
            spinner.classList.add('hidden');
            this.setButtonMode(button, added);
            this.onSales = response.onSales === true;
            this.updateCart(response.cart);
            button.blur();
            if (this.options.popup && !added) {
                this.options.popup.show();
            }
            this.processing = false;
            this.analytics(!added, JSON.parse(response.item));
        }, {method: 'POST'});
    }

    onShoppingBagButtonClick(button)
    {
        if (this.processing) {
            return;
        }
        this.processing = true;
        button.classList.remove('far');
        button.classList.remove('fa-window-close');
        button.classList.add('fas');
        button.classList.add('fa-spinner');
        let url = button.dataset.remove_item_url;
        let addToCartButton = document.getElementById('cart-button-'+button.dataset.item_id);
        ajax(url, (response) => {
            button.classList.remove('fas');
            button.classList.remove('fa-spinner');
            button.classList.add('far');
            button.classList.add('fa-window-close');
            if (addToCartButton instanceof HTMLElement) {
                this.setButtonMode(addToCartButton, true);
            }
            this.onSales = response.onSales === true;
            this.updateCart(response.cart);
            this.processing = false;
        }, {method: 'POST'});
    }

    updateCart(jsonResponse)
    {
        try {
            this.cartContent = JSON.parse(jsonResponse);
            if (typeof this.cartContent !== 'object') {
                this.cartContent = {};
            }
        } catch (e) {
            console.error('Format JSON panier non valide');
            return;
        }

        this.shoppingBag.innerHTML = '';

        let count = 0;
        let total = 0;
        if (this.options.popup) {
            this.options.popup.resetImport();
        }
        Object.values(this.cartContent).forEach(item => {
            let itemListElt = this.createShoppingBagItem(item);
            let price = this.onSales ? item.discountPrice : item.price;
            let quantity = parseInt(item.quantity);
            total += quantity * parseFloat(price);
            this.shoppingBag.appendChild(itemListElt);
            count += item.quantity;
        });
        let shippingFeeListElt = this.createShoppingBagItem({isShippingFee: true, name: 'Frais de port'});
        this.shoppingBag.appendChild(shippingFeeListElt);
        if (total > 0) {
            let shoppingBagTotal = this.createShoppingBagTotal(total);
            this.shoppingBag.appendChild(shoppingBagTotal);
            let cartLinkElt = this.createElementWithClasses('div', this.options.shopping_bag_class+'__link');
            let cartLink = this.createElementWithClasses('a', ['btn', 'btn-sm', 'bt-btn--primary', 'text-light']);
            cartLink.href = this.options.cart_url;
            cartLink.innerText = this.shoppingBag.dataset.cart_link_text;
            cartLinkElt.appendChild(cartLink);
            this.shoppingBag.appendChild(cartLinkElt);
            this.navcart.classList.remove('empty');
        } else {
            this.navcart.classList.add('empty');
        }
        this.shoppingBagQuantity.dataset.quantity = count;
    }

    /**
     * @param {Object} item
     * @return HTMLElement
     */
    createShoppingBagItem(item)
    {
        let itemContainer = this.createElementWithClasses('div', this.options.shopping_bag_item_class);
        if (item.isShippingFee) {
            let span = this.createElementWithClasses('span', this.options.shopping_bag_item_class+'__link');
            let itemImage = this.createElementWithClasses('i', ['fas', 'fa-shipping-fast']);
            span.appendChild(itemImage);
            span.appendChild(document.createTextNode(' '+item.name));
            itemContainer.appendChild(span);
        } else {
            let itemImage = this.createElementWithClasses('img');
            itemImage.src = item.images[0].cachePath;
            itemImage.alt = item.images[0].alt;

            let itemLink = this.createElementWithClasses('a', this.options.shopping_bag_item_class+'__link');
            itemLink.href = item.link;
            itemLink.setAttribute('title', item.name);
            itemLink.appendChild(itemImage);
            itemLink.appendChild(document.createTextNode(' '+item.name));
            itemContainer.appendChild(itemLink);
        }
        let itemPrice = this.createElementWithClasses('span', this.options.shopping_bag_item_class+'__price');
        let price = item.isShippingFee ? 0 : this.onSales ? item.discountPrice : item.price;
        itemPrice.innerText = new Intl.NumberFormat('fr-FR', {style: 'currency', currency: 'EUR'}).format(price);
        if (this.onSales && item.discount) {
            let crossedOutPrice = this.createElementWithClasses('span', this.options.shopping_bag_item_class+'__price--crossed-out');
            crossedOutPrice.innerText = new Intl.NumberFormat('fr-FR', {style: 'currency', currency: 'EUR'}).format(item.price);
            itemPrice.appendChild(crossedOutPrice);
        }

        let itemRemove = this.createElementWithClasses('i', ['remove-item', 'far', 'fa-window-close']);
        itemRemove.setAttribute('data-item_id', item.id);
        itemRemove.setAttribute('data-remove_item_url', item.removeLink);
        itemRemove.addEventListener('click', this.onShoppingBagButtonClick.bind(this, itemRemove));

        itemContainer.appendChild(itemPrice);
        if (this.options.popup) {
            let clonedItem = itemContainer.cloneNode(true);
            if (!item.isShippingFee) {
                let clonedItemRemove = itemRemove.cloneNode(true);
                clonedItemRemove.addEventListener('click', this.onShoppingBagButtonClick.bind(this, clonedItemRemove));
                clonedItem.appendChild(clonedItemRemove);
            }
            this.options.popup.import(clonedItem);
        }
        if (!item.isShippingFee) {
            itemContainer.appendChild(itemRemove);
        }
        return itemContainer;
    }

    /**
     * @param {float} total
     * @return HTMLElement
     */
    createShoppingBagTotal(total)
    {
        let totalContainer = this.createElementWithClasses('div', this.options.shopping_bag_class+'__total');
        let totalHeading = this.createElementWithClasses('span');
        totalHeading.innerText = 'Total:';
        let totalAmount = this.createElementWithClasses('span', this.options.shopping_bag_class+'__total__amount');
        totalAmount.innerText = new Intl.NumberFormat('fr-FR', {style: 'currency', currency: 'EUR'}).format(total);
        totalContainer.appendChild(totalHeading);
        totalContainer.appendChild(totalAmount);
        return totalContainer;
    }

    /**
     * @param {string} tag
     * @param {string|array} classes
     * @return HTMLElement
     */
    createElementWithClasses(tag, classes = [])
    {
        if (!Array.isArray(classes)) {
            classes = [classes];
        }

        let element = document.createElement(tag);
        for (let className of classes) {
            element.classList.add(className);
        }

        return element;
    }

    setButtonMode(button, added)
    {
        let addText = button.querySelector('.add-item');
        let removeText = button.querySelector('.remove-item');
        if (added) {
            addText.classList.remove('hidden');
            removeText.classList.add('hidden');
            button.removeAttribute('data-added');
        } else {
            addText.classList.add('hidden');
            removeText.classList.remove('hidden');
            button.setAttribute('data-added', '');
        }
    }

    analytics(add, item)
    {
        if (!this.gaIsInitialized) {
            ga("create", "UA-XXXXX-Y");
            ga("require", "ec");
            this.gaIsInitialized = true;
        }

        ga('ec:addProduct', {
            'id': item.id,
            'name': item.name,
            'category': item.category.slug,
            'price': item.price,
            'quantity': 1,
        });
        ga('ec:setAction', add ? 'add' : 'remove');
        ga('send', 'event', 'UX', 'click', 'add to cart');     // Send data using an event.
    }
}