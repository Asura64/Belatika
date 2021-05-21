import ajax from "../functions/_ajax";

export default class Popup {

    /**
     * @callback ajaxCallback
     * @param {Object} response
     */

    /**
     * @param {HTMLElement} element
     * @param {Object} options
     * @param {{element: HTMLElement, url: string, callback: ajaxCallback, datas: Object}[]} options.buttons
     * @param {Boolean} options.display
     * @param {Boolean} options.closeOnOverlayClick
     * @param {Object} options.customEvents
     */
    constructor(element, options = {})
    {
        //Options
        this.options = Object.assign({
            buttons: [],
            display: true,
            closeOnOverlayClick: true,
            customEvents: {}
        }, options);

        //Gestion du DOM
        this.popup = element;
        this.setOverlay();
        this.close = element.querySelector('.fas.fa-times-circle');
        this.importElt = this.popup.querySelector('.import');

        //Gestion des evenements
        if (this.close) {
            this.close.addEventListener('click', this.onOverlayClick.bind(this));
        }
        this.popup.addEventListener('click', this.onPopupClick.bind(this));
        if (this.options.closeOnOverlayClick) {
            this.overlay.addEventListener('click', this.onOverlayClick.bind(this));
        }
        this.options.buttons.forEach((button) => {
            this.setButtonEvent(button);
        });
        for (const [selector, callback] of Object.entries(this.options.customEvents)) {
            let elements = [].slice.call(document.querySelectorAll(selector));
            elements.forEach(element => element.addEventListener('click', () => {
                callback();
                this.onOverlayClick();
            }));
        }
    }

    setOverlay()
    {
        const overlay = document.createElement('div');
        this.setStyles(overlay, {
            backgroundColor: 'rgba(0,0,0,.7)',
            position: 'fixed',
            width: '100%',
            height: '100vh',
            top: '0',
            left: '0',
            zIndex: '999',
            display: this.options.display ? 'flex' : 'none',
            justifyContent: 'center',
            alignItems: 'center',
        })
        this.body = document.querySelector('body');
        overlay.appendChild(this.popup);
        this.body.appendChild(overlay);
        this.overlay = overlay;
    }

    /**
     * Applique des styles CSS à un élément HTML
     * @param {HTMLElement} element
     * @param {Object} styles
     */
    setStyles(element, styles)
    {
        Object.keys(styles).forEach((property) => {
            element.style[property] = styles[property];
        })
    }

    onOverlayClick()
    {
        // this.body.removeChild(this.overlay);
        this.overlay.style.display = 'none';
    }

    onPopupClick(e)
    {
        e.stopPropagation();
    }

    /**
     * @param {Object} button
     * @param {HTMLElement} button.element
     * @param {string} button.url
     * @param {ajaxCallback} button.callback
     * @param {Object} button.datas
     */
    setButtonEvent(button)
    {
        if (!button.datas) {
            button.datas = {}
        }
        const spinner = button.element.querySelector('.fas.fa-spinner');
        button.element.addEventListener('click', () => {
            if (spinner) spinner.classList.remove('d-none');
            //Récupération dynamique valeur si la data est un input
            for (let [key, value] of Object.entries(button.datas)) {
                if(value instanceof HTMLElement) {
                    button.datas[key] = value.value;
                }
            }

            if (button.element.dataset.cancel !== undefined) {
                this.onOverlayClick();
            } else {
                ajax(button.url, (response) => {
                    if (spinner) spinner.classList.add('d-none');
                    if (button.callback) {
                        button.callback(response);
                    }
                    this.onOverlayClick();
                }, {method: 'POST', datas: button.datas});
            }
        });
    }

    show()
    {
        this.overlay.style.display = 'flex';
    }

    import(element)
    {
        if (this.importElt) {
            this.importElt.appendChild(element);
        }
    }

    resetImport()
    {
        if (this.importElt) {
            this.importElt.innerHTML = '';
        }
    }
}