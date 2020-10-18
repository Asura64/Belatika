(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["app"],{

/***/ "./assets/css/app.scss":
/*!*****************************!*\
  !*** ./assets/css/app.scss ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./assets/js/app.js":
/*!**************************!*\
  !*** ./assets/js/app.js ***!
  \**************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var core_js_modules_es_array_for_each__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.array.for-each */ "./node_modules/core-js/modules/es.array.for-each.js");
/* harmony import */ var core_js_modules_es_array_for_each__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_for_each__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_array_slice__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.array.slice */ "./node_modules/core-js/modules/es.array.slice.js");
/* harmony import */ var core_js_modules_es_array_slice__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_slice__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_web_dom_collections_for_each__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/web.dom-collections.for-each */ "./node_modules/core-js/modules/web.dom-collections.for-each.js");
/* harmony import */ var core_js_modules_web_dom_collections_for_each__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_for_each__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _class_Lazyloader__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./class/_Lazyloader */ "./assets/js/class/_Lazyloader.js");
/* harmony import */ var _class_Cart__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./class/_Cart */ "./assets/js/class/_Cart.js");
/* harmony import */ var _class_Popup__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./class/_Popup */ "./assets/js/class/_Popup.js");
/* harmony import */ var _class_Search__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./class/_Search */ "./assets/js/class/_Search.js");
/* harmony import */ var _class_Navigation__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./class/_Navigation */ "./assets/js/class/_Navigation.js");
/* harmony import */ var _class_BackInStock__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./class/_BackInStock */ "./assets/js/class/_BackInStock.js");




/*
 * Welcome to your app's main JavaScript file!
 *
 * We recommend including the built version of this JavaScript file
 * (and its CSS file) in your base layout (base.html.twig).
 */
// any CSS you require will output into a single css file (app.css in this case)
__webpack_require__(/*! ../css/app.scss */ "./assets/css/app.scss"); // Need jQuery? Install it with "yarn add jquery", then uncomment to require it.
// const $ = require('jquery');








document.addEventListener('DOMContentLoaded', function () {
  new _class_Lazyloader__WEBPACK_IMPORTED_MODULE_3__["default"]();
  var cartPopup = document.getElementById('add-to-cart-popup');

  if (cartPopup) {
    var popup = new _class_Popup__WEBPACK_IMPORTED_MODULE_5__["default"](cartPopup, {
      buttons: [{
        element: document.getElementById('continue-shopping')
      }],
      display: false
    });
    new _class_Cart__WEBPACK_IMPORTED_MODULE_4__["default"]({
      popup: popup
    });
  } else {
    new _class_Cart__WEBPACK_IMPORTED_MODULE_4__["default"]();
  }

  new _class_Search__WEBPACK_IMPORTED_MODULE_6__["default"]();
  new _class_Navigation__WEBPACK_IMPORTED_MODULE_7__["default"]({
    toggleButton: document.getElementById('navbarToggle'),
    navContent: document.getElementById('navbarContent'),
    collapseOnOuterClick: false
  });
  var womanToggle = document.getElementById('womanToggle');
  new _class_Navigation__WEBPACK_IMPORTED_MODULE_7__["default"]({
    toggleButton: womanToggle,
    navContent: womanToggle
  });
  var manToggle = document.getElementById('manToggle');
  new _class_Navigation__WEBPACK_IMPORTED_MODULE_7__["default"]({
    toggleButton: manToggle,
    navContent: manToggle
  });
  var nav = document.getElementById('bt-navbar');
  var YOffset = window.pageYOffset;
  window.addEventListener('scroll', function () {
    if (window.pageYOffset > YOffset) {
      nav.classList.add('hide');
    } else {
      nav.classList.remove('hide');
    }

    YOffset = window.pageYOffset;
  });
  var backinstockElts = [].slice.call(document.getElementsByClassName('backinstock'));
  backinstockElts.forEach(function (backinstockElt) {
    return new _class_BackInStock__WEBPACK_IMPORTED_MODULE_8__["default"](backinstockElt);
  });
});

/***/ }),

/***/ "./assets/js/class/_BackInStock.js":
/*!*****************************************!*\
  !*** ./assets/js/class/_BackInStock.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return BackInStock; });
/* harmony import */ var core_js_modules_es_function_bind__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.function.bind */ "./node_modules/core-js/modules/es.function.bind.js");
/* harmony import */ var core_js_modules_es_function_bind__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_function_bind__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_object_define_property__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.object.define-property */ "./node_modules/core-js/modules/es.object.define-property.js");
/* harmony import */ var core_js_modules_es_object_define_property__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_define_property__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Popup__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./_Popup */ "./assets/js/class/_Popup.js");
/* harmony import */ var _functions_ajax__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../functions/_ajax */ "./assets/js/functions/_ajax.js");



function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }




var BackInStock =
/*#__PURE__*/
function () {
  /**
   * @param {HTMLElement} button
   */
  function BackInStock(button) {
    _classCallCheck(this, BackInStock);

    this.button = button;
    this.spinner = button.querySelector('.fas.fa-spinner');
    this.itemId = button.dataset.id;
    this.callbackText = button.dataset.callbackText;
    this.url = button.dataset.url;
    this.email = button.dataset.email;
    this.popupElt = this.buildPopup();
    this.registered = false;
    this.button.addEventListener('click', this.onButtonClick.bind(this));
  }

  _createClass(BackInStock, [{
    key: "buildPopup",
    value: function buildPopup() {
      var popupElt = document.createElement('div');
      popupElt.classList.add('popup');
      popupElt.innerHTML = "\n            <i class=\"fas fa-times-circle\"></i>\n            <div class=\"popup__heading\">\n                Votre email\n            </div>\n            <div class=\"popup__text\">\n                <input class=\"input-email form-control\" type=\"email\">\n            </div>\n            <div class=\"my-3 text-center\">\n                <button class=\"valid-email btn btn-success float-sm-right\"><i class=\"d-none fas fa-spinner\"></i> Valider</button>\n            </div>\n        ";
      return popupElt;
    }
  }, {
    key: "onButtonClick",
    value: function onButtonClick() {
      if (this.registered) return;

      if (this.email === undefined) {
        return this.askEmail();
      } else {
        if (this.spinner) this.spinner.classList.remove('d-none');
        Object(_functions_ajax__WEBPACK_IMPORTED_MODULE_3__["default"])(this.url, this.callback.bind(this), {
          method: 'POST',
          datas: {
            id: this.itemId,
            email: this.email
          }
        });
      }
    }
  }, {
    key: "askEmail",
    value: function askEmail() {
      var actionButton = {
        element: this.popupElt.querySelector('.valid-email'),
        url: this.url,
        callback: this.callback.bind(this),
        datas: {
          id: this.itemId,
          email: this.popupElt.querySelector('.input-email')
        }
      };
      new _Popup__WEBPACK_IMPORTED_MODULE_2__["default"](this.popupElt, {
        buttons: [actionButton]
      });
    }
  }, {
    key: "callback",
    value: function callback(response) {
      if (response.success) {
        this.button.innerText = this.callbackText;
        this.registered = true;
      } else {
        console.error(response.error);
        if (this.spinner) this.spinner.classList.add('d-none');
      }
    }
  }]);

  return BackInStock;
}();



/***/ }),

/***/ "./assets/js/class/_Cart.js":
/*!**********************************!*\
  !*** ./assets/js/class/_Cart.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Cart; });
/* harmony import */ var core_js_modules_es_symbol__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.symbol */ "./node_modules/core-js/modules/es.symbol.js");
/* harmony import */ var core_js_modules_es_symbol__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_symbol_description__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.symbol.description */ "./node_modules/core-js/modules/es.symbol.description.js");
/* harmony import */ var core_js_modules_es_symbol_description__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_description__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_symbol_iterator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.symbol.iterator */ "./node_modules/core-js/modules/es.symbol.iterator.js");
/* harmony import */ var core_js_modules_es_symbol_iterator__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_iterator__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_array_for_each__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.array.for-each */ "./node_modules/core-js/modules/es.array.for-each.js");
/* harmony import */ var core_js_modules_es_array_for_each__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_for_each__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es_array_is_array__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es.array.is-array */ "./node_modules/core-js/modules/es.array.is-array.js");
/* harmony import */ var core_js_modules_es_array_is_array__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_is_array__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_es_array_iterator__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/es.array.iterator */ "./node_modules/core-js/modules/es.array.iterator.js");
/* harmony import */ var core_js_modules_es_array_iterator__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_iterator__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var core_js_modules_es_array_slice__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! core-js/modules/es.array.slice */ "./node_modules/core-js/modules/es.array.slice.js");
/* harmony import */ var core_js_modules_es_array_slice__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_slice__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var core_js_modules_es_function_bind__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! core-js/modules/es.function.bind */ "./node_modules/core-js/modules/es.function.bind.js");
/* harmony import */ var core_js_modules_es_function_bind__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_function_bind__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var core_js_modules_es_function_name__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! core-js/modules/es.function.name */ "./node_modules/core-js/modules/es.function.name.js");
/* harmony import */ var core_js_modules_es_function_name__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_function_name__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var core_js_modules_es_object_assign__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! core-js/modules/es.object.assign */ "./node_modules/core-js/modules/es.object.assign.js");
/* harmony import */ var core_js_modules_es_object_assign__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_assign__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var core_js_modules_es_object_define_property__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! core-js/modules/es.object.define-property */ "./node_modules/core-js/modules/es.object.define-property.js");
/* harmony import */ var core_js_modules_es_object_define_property__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_define_property__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var core_js_modules_es_object_to_string__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! core-js/modules/es.object.to-string */ "./node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var core_js_modules_es_object_values__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! core-js/modules/es.object.values */ "./node_modules/core-js/modules/es.object.values.js");
/* harmony import */ var core_js_modules_es_object_values__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_values__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var core_js_modules_es_parse_float__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! core-js/modules/es.parse-float */ "./node_modules/core-js/modules/es.parse-float.js");
/* harmony import */ var core_js_modules_es_parse_float__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_parse_float__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var core_js_modules_es_parse_int__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! core-js/modules/es.parse-int */ "./node_modules/core-js/modules/es.parse-int.js");
/* harmony import */ var core_js_modules_es_parse_int__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_parse_int__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var core_js_modules_es_string_iterator__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! core-js/modules/es.string.iterator */ "./node_modules/core-js/modules/es.string.iterator.js");
/* harmony import */ var core_js_modules_es_string_iterator__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_iterator__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var core_js_modules_es_string_link__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! core-js/modules/es.string.link */ "./node_modules/core-js/modules/es.string.link.js");
/* harmony import */ var core_js_modules_es_string_link__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_link__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var core_js_modules_web_dom_collections_for_each__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! core-js/modules/web.dom-collections.for-each */ "./node_modules/core-js/modules/web.dom-collections.for-each.js");
/* harmony import */ var core_js_modules_web_dom_collections_for_each__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_for_each__WEBPACK_IMPORTED_MODULE_17__);
/* harmony import */ var core_js_modules_web_dom_collections_iterator__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! core-js/modules/web.dom-collections.iterator */ "./node_modules/core-js/modules/web.dom-collections.iterator.js");
/* harmony import */ var core_js_modules_web_dom_collections_iterator__WEBPACK_IMPORTED_MODULE_18___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_iterator__WEBPACK_IMPORTED_MODULE_18__);
/* harmony import */ var _functions_ajax__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ../functions/_ajax */ "./assets/js/functions/_ajax.js");




















function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }



var Cart =
/*#__PURE__*/
function () {
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
  function Cart() {
    var _this = this;

    var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

    _classCallCheck(this, Cart);

    //Settings
    this.options = Object.assign({
      button_class: 'cart-button',
      navcart_class: 'navcart',
      navcart_button_class: 'navcart__hover',
      shopping_bag_class: 'cart-hover',
      shopping_bag_item_class: 'cart-hover__item',
      cart_quantity_class: 'navcart',
      cart_url: '/panier/',
      popup: null
    }, options);
    this.processing = false;
    this.cartContent = {};
    this.onSales = false;
    this.gaIsInitialized = false; //DOM handling

    this.buttons = [].slice.call(document.getElementsByClassName(this.options.button_class));
    this.navcart = document.querySelector('.' + this.options.navcart_class);
    this.navcartToggle = document.querySelector('.' + this.options.navcart_button_class);
    this.shoppingBag = document.querySelector('.' + this.options.shopping_bag_class);
    this.shoppingBagQuantity = document.querySelector('.' + this.options.cart_quantity_class);
    this.shoppingBagItemButtons = [].slice.call(document.querySelectorAll('.' + this.options.shopping_bag_item_class + ' .remove-item')); //Events

    this.navcartToggle.addEventListener('click', this.onNavcartToggleClick.bind(this));
    this.buttons.forEach(function (button) {
      button.addEventListener('click', _this.onButtonClick.bind(_this, button));
    });
    this.shoppingBagItemButtons.forEach(function (button) {
      button.addEventListener('click', _this.onShoppingBagButtonClick.bind(_this, button));
    });
  }

  _createClass(Cart, [{
    key: "onNavcartToggleClick",
    value: function onNavcartToggleClick(e) {
      e.preventDefault();
    }
  }, {
    key: "onButtonClick",
    value: function onButtonClick(button) {
      var _this2 = this;

      if (this.processing) {
        return;
      }

      this.processing = true;
      var spinner = button.querySelector('.fa-spinner');
      spinner.classList.remove('hidden');
      var added = button.dataset.added !== undefined;
      var url = added ? button.dataset.remove_item_url : button.dataset.add_item_url;
      Object(_functions_ajax__WEBPACK_IMPORTED_MODULE_19__["default"])(url, function (response) {
        spinner.classList.add('hidden');

        _this2.setButtonMode(button, added);

        _this2.onSales = response.onSales === true;

        _this2.updateCart(response.cart);

        button.blur();

        if (_this2.options.popup && !added) {
          _this2.options.popup.show();
        }

        _this2.processing = false;

        _this2.analytics(!added, JSON.parse(response.item));
      }, {
        method: 'POST'
      });
    }
  }, {
    key: "onShoppingBagButtonClick",
    value: function onShoppingBagButtonClick(button) {
      var _this3 = this;

      if (this.processing) {
        return;
      }

      this.processing = true;
      button.classList.remove('far');
      button.classList.remove('fa-window-close');
      button.classList.add('fas');
      button.classList.add('fa-spinner');
      var url = button.dataset.remove_item_url;
      var addToCartButton = document.getElementById('cart-button-' + button.dataset.item_id);
      Object(_functions_ajax__WEBPACK_IMPORTED_MODULE_19__["default"])(url, function (response) {
        button.classList.remove('fas');
        button.classList.remove('fa-spinner');
        button.classList.add('far');
        button.classList.add('fa-window-close');

        if (addToCartButton instanceof HTMLElement) {
          _this3.setButtonMode(addToCartButton, true);
        }

        _this3.onSales = response.onSales === true;

        _this3.updateCart(response.cart);

        _this3.processing = false;
      }, {
        method: 'POST'
      });
    }
  }, {
    key: "updateCart",
    value: function updateCart(jsonResponse) {
      var _this4 = this;

      try {
        this.cartContent = JSON.parse(jsonResponse);

        if (_typeof(this.cartContent) !== 'object') {
          this.cartContent = {};
        }
      } catch (e) {
        console.error('Format JSON panier non valide');
        return;
      }

      this.shoppingBag.innerHTML = '';
      var count = 0;
      var total = 0;

      if (this.options.popup) {
        this.options.popup.resetImport();
      }

      Object.values(this.cartContent).forEach(function (item) {
        var itemListElt = _this4.createShoppingBagItem(item);

        var price = _this4.onSales ? item.discountPrice : item.price;
        var quantity = parseInt(item.quantity);
        total += quantity * parseFloat(price);

        _this4.shoppingBag.appendChild(itemListElt);

        count += item.quantity;
      });
      var shippingFeeListElt = this.createShoppingBagItem({
        isShippingFee: true,
        name: 'Frais de port'
      });
      this.shoppingBag.appendChild(shippingFeeListElt);

      if (total > 0) {
        var shoppingBagTotal = this.createShoppingBagTotal(total);
        this.shoppingBag.appendChild(shoppingBagTotal);
        var cartLinkElt = this.createElementWithClasses('div', this.options.shopping_bag_class + '__link');
        var cartLink = this.createElementWithClasses('a', ['btn', 'btn-sm', 'bt-btn--primary', 'text-light']);
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

  }, {
    key: "createShoppingBagItem",
    value: function createShoppingBagItem(item) {
      var itemContainer = this.createElementWithClasses('div', this.options.shopping_bag_item_class);

      if (item.isShippingFee) {
        var span = this.createElementWithClasses('span', this.options.shopping_bag_item_class + '__link');
        var itemImage = this.createElementWithClasses('i', ['fas', 'fa-shipping-fast']);
        span.appendChild(itemImage);
        span.appendChild(document.createTextNode(' ' + item.name));
        itemContainer.appendChild(span);
      } else {
        var _itemImage = this.createElementWithClasses('img');

        _itemImage.src = item.images[0].cachePath;
        _itemImage.alt = item.images[0].alt;
        var itemLink = this.createElementWithClasses('a', this.options.shopping_bag_item_class + '__link');
        itemLink.href = item.link;
        itemLink.setAttribute('title', item.name);
        itemLink.appendChild(_itemImage);
        itemLink.appendChild(document.createTextNode(' ' + item.name));
        itemContainer.appendChild(itemLink);
      }

      var itemPrice = this.createElementWithClasses('span', this.options.shopping_bag_item_class + '__price');
      var price = item.isShippingFee ? 0 : this.onSales ? item.discountPrice : item.price;
      itemPrice.innerText = new Intl.NumberFormat('fr-FR', {
        style: 'currency',
        currency: 'EUR'
      }).format(price);
      var itemRemove = this.createElementWithClasses('i', ['remove-item', 'far', 'fa-window-close']);
      itemRemove.setAttribute('data-item_id', item.id);
      itemRemove.setAttribute('data-remove_item_url', item.removeLink);
      itemRemove.addEventListener('click', this.onShoppingBagButtonClick.bind(this, itemRemove));
      itemContainer.appendChild(itemPrice);

      if (this.options.popup) {
        var clonedItem = itemContainer.cloneNode(true);

        if (!item.isShippingFee) {
          var clonedItemRemove = itemRemove.cloneNode(true);
          clonedItemRemove.addEventListener('click', this.onShoppingBagButtonClick.bind(this, clonedItemRemove));
          clonedItem.appendChild(clonedItemRemove);
        }

        this.options.popup["import"](clonedItem);
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

  }, {
    key: "createShoppingBagTotal",
    value: function createShoppingBagTotal(total) {
      var totalContainer = this.createElementWithClasses('div', this.options.shopping_bag_class + '__total');
      var totalHeading = this.createElementWithClasses('span');
      totalHeading.innerText = 'Total:';
      var totalAmount = this.createElementWithClasses('span', this.options.shopping_bag_class + '__total__amount');
      totalAmount.innerText = new Intl.NumberFormat('fr-FR', {
        style: 'currency',
        currency: 'EUR'
      }).format(total);
      totalContainer.appendChild(totalHeading);
      totalContainer.appendChild(totalAmount);
      return totalContainer;
    }
    /**
     * @param {string} tag
     * @param {string|array} classes
     * @return HTMLElement
     */

  }, {
    key: "createElementWithClasses",
    value: function createElementWithClasses(tag) {
      var classes = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];

      if (!Array.isArray(classes)) {
        classes = [classes];
      }

      var element = document.createElement(tag);
      var _iteratorNormalCompletion = true;
      var _didIteratorError = false;
      var _iteratorError = undefined;

      try {
        for (var _iterator = classes[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
          var className = _step.value;
          element.classList.add(className);
        }
      } catch (err) {
        _didIteratorError = true;
        _iteratorError = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion && _iterator["return"] != null) {
            _iterator["return"]();
          }
        } finally {
          if (_didIteratorError) {
            throw _iteratorError;
          }
        }
      }

      return element;
    }
  }, {
    key: "setButtonMode",
    value: function setButtonMode(button, added) {
      var addText = button.querySelector('.add-item');
      var removeText = button.querySelector('.remove-item');

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
  }, {
    key: "analytics",
    value: function analytics(add, item) {
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
        'quantity': 1
      });
      ga('ec:setAction', add ? 'add' : 'remove');
      ga('send', 'event', 'UX', 'click', 'add to cart'); // Send data using an event.
    }
  }]);

  return Cart;
}();



/***/ }),

/***/ "./assets/js/class/_Lazyloader.js":
/*!****************************************!*\
  !*** ./assets/js/class/_Lazyloader.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Lazyloader; });
/* harmony import */ var core_js_modules_es_array_for_each__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.array.for-each */ "./node_modules/core-js/modules/es.array.for-each.js");
/* harmony import */ var core_js_modules_es_array_for_each__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_for_each__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_array_slice__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.array.slice */ "./node_modules/core-js/modules/es.array.slice.js");
/* harmony import */ var core_js_modules_es_array_slice__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_slice__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_object_define_property__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.object.define-property */ "./node_modules/core-js/modules/es.object.define-property.js");
/* harmony import */ var core_js_modules_es_object_define_property__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_define_property__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_web_dom_collections_for_each__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/web.dom-collections.for-each */ "./node_modules/core-js/modules/web.dom-collections.for-each.js");
/* harmony import */ var core_js_modules_web_dom_collections_for_each__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_for_each__WEBPACK_IMPORTED_MODULE_3__);





function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Lazyloader =
/*#__PURE__*/
function () {
  function Lazyloader() {
    _classCallCheck(this, Lazyloader);

    this.lazyImages = [].slice.call(document.getElementsByClassName('lazyload'));

    if ("IntersectionObserver" in window) {
      this.observe();
    } else {
      this.fallBack();
    }
  }
  /**
   * Use the observer to load lazy images when viewport in range
   */


  _createClass(Lazyloader, [{
    key: "observe",
    value: function observe() {
      var _this = this;

      var lazyImageObserver = new IntersectionObserver(function (entries) {
        entries.forEach(function (entry) {
          var lazyImage = entry.target;

          if (entry.isIntersecting && lazyImage instanceof HTMLImageElement) {
            _this.load(lazyImage);

            lazyImageObserver.unobserve(lazyImage);
          }
        });
      });
      this.lazyImages.forEach(function (image) {
        lazyImageObserver.observe(image);
      });
    }
    /**
     * If intersectionObserver not supported
     */

  }, {
    key: "fallBack",
    value: function fallBack() {
      var _this2 = this;

      this.lazyImages.forEach(function (lazyImage) {
        _this2.load(lazyImage);
      });
    }
    /**
     * Load the lazy image
     * @param {HTMLImageElement} lazyImage
     */

  }, {
    key: "load",
    value: function load(lazyImage) {
      lazyImage.addEventListener('load', function () {
        lazyImage.classList.remove('lazyload');

        if (lazyImage.classList.length === 0) {
          lazyImage.removeAttribute('class');
        }
      });
      lazyImage.src = lazyImage.dataset.src;
    }
  }]);

  return Lazyloader;
}();



/***/ }),

/***/ "./assets/js/class/_Navigation.js":
/*!****************************************!*\
  !*** ./assets/js/class/_Navigation.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Navigation; });
/* harmony import */ var core_js_modules_es_function_bind__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.function.bind */ "./node_modules/core-js/modules/es.function.bind.js");
/* harmony import */ var core_js_modules_es_function_bind__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_function_bind__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_object_assign__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.object.assign */ "./node_modules/core-js/modules/es.object.assign.js");
/* harmony import */ var core_js_modules_es_object_assign__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_assign__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_object_define_property__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.object.define-property */ "./node_modules/core-js/modules/es.object.define-property.js");
/* harmony import */ var core_js_modules_es_object_define_property__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_define_property__WEBPACK_IMPORTED_MODULE_2__);




function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Navigation =
/*#__PURE__*/
function () {
  /**
   * @param {Object} options
   * @param {HTMLElement} options.toggleButton
   * @param {HTMLElement} options.navContent
   * @param {String} [options.showClass=show]
   * @param {Boolean} [options.collapseOnOuterClick=true]
   */
  function Navigation() {
    var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

    _classCallCheck(this, Navigation);

    this.options = Object.assign({
      toggleButton: null,
      navContent: null,
      showClass: 'show',
      collapseOnOuterClick: true
    }, options);

    if (!(this.options.toggleButton instanceof HTMLElement && this.options.navContent instanceof HTMLElement)) {
      console.error('Paramètres incorrects');
      return;
    }

    this.options.toggleButton.addEventListener('click', this.onToggleButtonClick.bind(this));

    if (this.options.collapseOnOuterClick) {
      document.addEventListener('click', this.onOuterClick.bind(this));
    }
  }

  _createClass(Navigation, [{
    key: "onToggleButtonClick",
    value: function onToggleButtonClick() {
      if (this.options.navContent.classList.contains(this.options.showClass)) {
        this.options.navContent.classList.remove(this.options.showClass);
      } else {
        this.options.navContent.classList.add(this.options.showClass);
      }
    }
  }, {
    key: "onOuterClick",
    value: function onOuterClick(e) {
      var element = e.target;
      var isToggleElt = element === this.options.toggleButton;

      while (element && !isToggleElt) {
        element = element.parentNode;
        isToggleElt = element === this.options.toggleButton;
      }

      if (!isToggleElt) {
        this.options.navContent.classList.remove(this.options.showClass);
      }
    }
  }]);

  return Navigation;
}();



/***/ }),

/***/ "./assets/js/class/_Search.js":
/*!************************************!*\
  !*** ./assets/js/class/_Search.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Search; });
/* harmony import */ var core_js_modules_es_function_bind__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.function.bind */ "./node_modules/core-js/modules/es.function.bind.js");
/* harmony import */ var core_js_modules_es_function_bind__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_function_bind__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_object_define_property__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.object.define-property */ "./node_modules/core-js/modules/es.object.define-property.js");
/* harmony import */ var core_js_modules_es_object_define_property__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_define_property__WEBPACK_IMPORTED_MODULE_1__);



function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Search =
/*#__PURE__*/
function () {
  function Search() {
    _classCallCheck(this, Search);

    this.searchForm = document.getElementById('search-form');
    this.searchTrigger = document.getElementById('search-trigger');
    this.searchInput = document.getElementById('search-input');
    this.searchButton = document.getElementById('search-button');
    this.searchTrigger.addEventListener('click', this.onSearchTriggerClick.bind(this));
    document.body.addEventListener('click', this.onOuterClick.bind(this));
  }

  _createClass(Search, [{
    key: "onSearchTriggerClick",
    value: function onSearchTriggerClick() {
      var hasSearchRequest = this.searchInput.value.length > 0;

      if (this.searchForm.classList.contains('expanded')) {
        if (hasSearchRequest) {
          this.searchButton.dispatchEvent(new MouseEvent('click'));
        } else {
          this.searchForm.classList.remove('expanded');
        }
      } else {
        this.searchForm.classList.add('expanded');
      }
    }
  }, {
    key: "onOuterClick",
    value: function onOuterClick(e) {
      if (e.target === this.searchTrigger || e.target === this.searchInput || e.target === this.searchButton) {
        return;
      }

      this.searchForm.classList.remove('expanded');
      this.searchInput.value = '';
    }
  }]);

  return Search;
}();



/***/ }),

/***/ "./node_modules/core-js/internals/create-html.js":
/*!*******************************************************!*\
  !*** ./node_modules/core-js/internals/create-html.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var requireObjectCoercible = __webpack_require__(/*! ../internals/require-object-coercible */ "./node_modules/core-js/internals/require-object-coercible.js");

var quot = /"/g;

// B.2.3.2.1 CreateHTML(string, tag, attribute, value)
// https://tc39.github.io/ecma262/#sec-createhtml
module.exports = function (string, tag, attribute, value) {
  var S = String(requireObjectCoercible(string));
  var p1 = '<' + tag;
  if (attribute !== '') p1 += ' ' + attribute + '="' + String(value).replace(quot, '&quot;') + '"';
  return p1 + '>' + S + '</' + tag + '>';
};


/***/ }),

/***/ "./node_modules/core-js/internals/forced-string-html-method.js":
/*!*********************************************************************!*\
  !*** ./node_modules/core-js/internals/forced-string-html-method.js ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var fails = __webpack_require__(/*! ../internals/fails */ "./node_modules/core-js/internals/fails.js");

// check the existence of a method, lowercase
// of a tag and escaping quotes in arguments
module.exports = function (METHOD_NAME) {
  return fails(function () {
    var test = ''[METHOD_NAME]('"');
    return test !== test.toLowerCase() || test.split('"').length > 3;
  });
};


/***/ }),

/***/ "./node_modules/core-js/modules/es.object.values.js":
/*!**********************************************************!*\
  !*** ./node_modules/core-js/modules/es.object.values.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var $ = __webpack_require__(/*! ../internals/export */ "./node_modules/core-js/internals/export.js");
var $values = __webpack_require__(/*! ../internals/object-to-array */ "./node_modules/core-js/internals/object-to-array.js").values;

// `Object.values` method
// https://tc39.github.io/ecma262/#sec-object.values
$({ target: 'Object', stat: true }, {
  values: function values(O) {
    return $values(O);
  }
});


/***/ }),

/***/ "./node_modules/core-js/modules/es.string.link.js":
/*!********************************************************!*\
  !*** ./node_modules/core-js/modules/es.string.link.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__(/*! ../internals/export */ "./node_modules/core-js/internals/export.js");
var createHTML = __webpack_require__(/*! ../internals/create-html */ "./node_modules/core-js/internals/create-html.js");
var forcedStringHTMLMethod = __webpack_require__(/*! ../internals/forced-string-html-method */ "./node_modules/core-js/internals/forced-string-html-method.js");

// `String.prototype.link` method
// https://tc39.github.io/ecma262/#sec-string.prototype.link
$({ target: 'String', proto: true, forced: forcedStringHTMLMethod('link') }, {
  link: function link(url) {
    return createHTML(this, 'a', 'href', url);
  }
});


/***/ })

},[["./assets/js/app.js","runtime","vendors~app~app_blog_article~app_order_index~app_shop_index~app_user_address~app_user_profile","vendors~app~app_blog_article~app_shop_index~app_user_address","vendors~app~app_shop_index~app_user_address","app~app_shop_index"]]]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hc3NldHMvY3NzL2FwcC5zY3NzIiwid2VicGFjazovLy8uL2Fzc2V0cy9qcy9hcHAuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzL2NsYXNzL19CYWNrSW5TdG9jay5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvY2xhc3MvX0NhcnQuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzL2NsYXNzL19MYXp5bG9hZGVyLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9qcy9jbGFzcy9fTmF2aWdhdGlvbi5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvY2xhc3MvX1NlYXJjaC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvY3JlYXRlLWh0bWwuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL2ZvcmNlZC1zdHJpbmctaHRtbC1tZXRob2QuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9lcy5vYmplY3QudmFsdWVzLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvZXMuc3RyaW5nLmxpbmsuanMiXSwibmFtZXMiOlsicmVxdWlyZSIsImRvY3VtZW50IiwiYWRkRXZlbnRMaXN0ZW5lciIsIkxhenlsb2FkZXIiLCJjYXJ0UG9wdXAiLCJnZXRFbGVtZW50QnlJZCIsInBvcHVwIiwiUG9wdXAiLCJidXR0b25zIiwiZWxlbWVudCIsImRpc3BsYXkiLCJDYXJ0IiwiU2VhcmNoIiwiTmF2aWdhdGlvbiIsInRvZ2dsZUJ1dHRvbiIsIm5hdkNvbnRlbnQiLCJjb2xsYXBzZU9uT3V0ZXJDbGljayIsIndvbWFuVG9nZ2xlIiwibWFuVG9nZ2xlIiwibmF2IiwiWU9mZnNldCIsIndpbmRvdyIsInBhZ2VZT2Zmc2V0IiwiY2xhc3NMaXN0IiwiYWRkIiwicmVtb3ZlIiwiYmFja2luc3RvY2tFbHRzIiwic2xpY2UiLCJjYWxsIiwiZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSIsImZvckVhY2giLCJiYWNraW5zdG9ja0VsdCIsIkJhY2tJblN0b2NrIiwiYnV0dG9uIiwic3Bpbm5lciIsInF1ZXJ5U2VsZWN0b3IiLCJpdGVtSWQiLCJkYXRhc2V0IiwiaWQiLCJjYWxsYmFja1RleHQiLCJ1cmwiLCJlbWFpbCIsInBvcHVwRWx0IiwiYnVpbGRQb3B1cCIsInJlZ2lzdGVyZWQiLCJvbkJ1dHRvbkNsaWNrIiwiYmluZCIsImNyZWF0ZUVsZW1lbnQiLCJpbm5lckhUTUwiLCJ1bmRlZmluZWQiLCJhc2tFbWFpbCIsImFqYXgiLCJjYWxsYmFjayIsIm1ldGhvZCIsImRhdGFzIiwiYWN0aW9uQnV0dG9uIiwicmVzcG9uc2UiLCJzdWNjZXNzIiwiaW5uZXJUZXh0IiwiY29uc29sZSIsImVycm9yIiwib3B0aW9ucyIsIk9iamVjdCIsImFzc2lnbiIsImJ1dHRvbl9jbGFzcyIsIm5hdmNhcnRfY2xhc3MiLCJuYXZjYXJ0X2J1dHRvbl9jbGFzcyIsInNob3BwaW5nX2JhZ19jbGFzcyIsInNob3BwaW5nX2JhZ19pdGVtX2NsYXNzIiwiY2FydF9xdWFudGl0eV9jbGFzcyIsImNhcnRfdXJsIiwicHJvY2Vzc2luZyIsImNhcnRDb250ZW50Iiwib25TYWxlcyIsImdhSXNJbml0aWFsaXplZCIsIm5hdmNhcnQiLCJuYXZjYXJ0VG9nZ2xlIiwic2hvcHBpbmdCYWciLCJzaG9wcGluZ0JhZ1F1YW50aXR5Iiwic2hvcHBpbmdCYWdJdGVtQnV0dG9ucyIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJvbk5hdmNhcnRUb2dnbGVDbGljayIsIm9uU2hvcHBpbmdCYWdCdXR0b25DbGljayIsImUiLCJwcmV2ZW50RGVmYXVsdCIsImFkZGVkIiwicmVtb3ZlX2l0ZW1fdXJsIiwiYWRkX2l0ZW1fdXJsIiwic2V0QnV0dG9uTW9kZSIsInVwZGF0ZUNhcnQiLCJjYXJ0IiwiYmx1ciIsInNob3ciLCJhbmFseXRpY3MiLCJKU09OIiwicGFyc2UiLCJpdGVtIiwiYWRkVG9DYXJ0QnV0dG9uIiwiaXRlbV9pZCIsIkhUTUxFbGVtZW50IiwianNvblJlc3BvbnNlIiwiY291bnQiLCJ0b3RhbCIsInJlc2V0SW1wb3J0IiwidmFsdWVzIiwiaXRlbUxpc3RFbHQiLCJjcmVhdGVTaG9wcGluZ0JhZ0l0ZW0iLCJwcmljZSIsImRpc2NvdW50UHJpY2UiLCJxdWFudGl0eSIsInBhcnNlSW50IiwicGFyc2VGbG9hdCIsImFwcGVuZENoaWxkIiwic2hpcHBpbmdGZWVMaXN0RWx0IiwiaXNTaGlwcGluZ0ZlZSIsIm5hbWUiLCJzaG9wcGluZ0JhZ1RvdGFsIiwiY3JlYXRlU2hvcHBpbmdCYWdUb3RhbCIsImNhcnRMaW5rRWx0IiwiY3JlYXRlRWxlbWVudFdpdGhDbGFzc2VzIiwiY2FydExpbmsiLCJocmVmIiwiY2FydF9saW5rX3RleHQiLCJpdGVtQ29udGFpbmVyIiwic3BhbiIsIml0ZW1JbWFnZSIsImNyZWF0ZVRleHROb2RlIiwic3JjIiwiaW1hZ2VzIiwiY2FjaGVQYXRoIiwiYWx0IiwiaXRlbUxpbmsiLCJsaW5rIiwic2V0QXR0cmlidXRlIiwiaXRlbVByaWNlIiwiSW50bCIsIk51bWJlckZvcm1hdCIsInN0eWxlIiwiY3VycmVuY3kiLCJmb3JtYXQiLCJpdGVtUmVtb3ZlIiwicmVtb3ZlTGluayIsImNsb25lZEl0ZW0iLCJjbG9uZU5vZGUiLCJjbG9uZWRJdGVtUmVtb3ZlIiwidG90YWxDb250YWluZXIiLCJ0b3RhbEhlYWRpbmciLCJ0b3RhbEFtb3VudCIsInRhZyIsImNsYXNzZXMiLCJBcnJheSIsImlzQXJyYXkiLCJjbGFzc05hbWUiLCJhZGRUZXh0IiwicmVtb3ZlVGV4dCIsInJlbW92ZUF0dHJpYnV0ZSIsImdhIiwiY2F0ZWdvcnkiLCJzbHVnIiwibGF6eUltYWdlcyIsIm9ic2VydmUiLCJmYWxsQmFjayIsImxhenlJbWFnZU9ic2VydmVyIiwiSW50ZXJzZWN0aW9uT2JzZXJ2ZXIiLCJlbnRyaWVzIiwiZW50cnkiLCJsYXp5SW1hZ2UiLCJ0YXJnZXQiLCJpc0ludGVyc2VjdGluZyIsIkhUTUxJbWFnZUVsZW1lbnQiLCJsb2FkIiwidW5vYnNlcnZlIiwiaW1hZ2UiLCJsZW5ndGgiLCJzaG93Q2xhc3MiLCJvblRvZ2dsZUJ1dHRvbkNsaWNrIiwib25PdXRlckNsaWNrIiwiY29udGFpbnMiLCJpc1RvZ2dsZUVsdCIsInBhcmVudE5vZGUiLCJzZWFyY2hGb3JtIiwic2VhcmNoVHJpZ2dlciIsInNlYXJjaElucHV0Iiwic2VhcmNoQnV0dG9uIiwib25TZWFyY2hUcmlnZ2VyQ2xpY2siLCJib2R5IiwiaGFzU2VhcmNoUmVxdWVzdCIsInZhbHVlIiwiZGlzcGF0Y2hFdmVudCIsIk1vdXNlRXZlbnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFBLHVDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ0FBOzs7Ozs7QUFPQTtBQUNBQSxtQkFBTyxDQUFDLDhDQUFELENBQVAsQyxDQUVBO0FBQ0E7OztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBQyxRQUFRLENBQUNDLGdCQUFULENBQTBCLGtCQUExQixFQUE4QyxZQUFNO0FBQ2hELE1BQUlDLHlEQUFKO0FBQ0EsTUFBTUMsU0FBUyxHQUFHSCxRQUFRLENBQUNJLGNBQVQsQ0FBd0IsbUJBQXhCLENBQWxCOztBQUNBLE1BQUlELFNBQUosRUFBZTtBQUNYLFFBQU1FLEtBQUssR0FBRyxJQUFJQyxvREFBSixDQUFVSCxTQUFWLEVBQXFCO0FBQy9CSSxhQUFPLEVBQUUsQ0FDTDtBQUNJQyxlQUFPLEVBQUVSLFFBQVEsQ0FBQ0ksY0FBVCxDQUF3QixtQkFBeEI7QUFEYixPQURLLENBRHNCO0FBTS9CSyxhQUFPLEVBQUU7QUFOc0IsS0FBckIsQ0FBZDtBQVFBLFFBQUlDLG1EQUFKLENBQVM7QUFBRUwsV0FBSyxFQUFMQTtBQUFGLEtBQVQ7QUFDSCxHQVZELE1BVU87QUFDSCxRQUFJSyxtREFBSjtBQUNIOztBQUNELE1BQUlDLHFEQUFKO0FBQ0EsTUFBSUMseURBQUosQ0FBZTtBQUNYQyxnQkFBWSxFQUFFYixRQUFRLENBQUNJLGNBQVQsQ0FBd0IsY0FBeEIsQ0FESDtBQUVYVSxjQUFVLEVBQUVkLFFBQVEsQ0FBQ0ksY0FBVCxDQUF3QixlQUF4QixDQUZEO0FBR1hXLHdCQUFvQixFQUFFO0FBSFgsR0FBZjtBQUtBLE1BQU1DLFdBQVcsR0FBR2hCLFFBQVEsQ0FBQ0ksY0FBVCxDQUF3QixhQUF4QixDQUFwQjtBQUNBLE1BQUlRLHlEQUFKLENBQWU7QUFBQ0MsZ0JBQVksRUFBRUcsV0FBZjtBQUE0QkYsY0FBVSxFQUFFRTtBQUF4QyxHQUFmO0FBQ0EsTUFBTUMsU0FBUyxHQUFHakIsUUFBUSxDQUFDSSxjQUFULENBQXdCLFdBQXhCLENBQWxCO0FBQ0EsTUFBSVEseURBQUosQ0FBZTtBQUFDQyxnQkFBWSxFQUFFSSxTQUFmO0FBQTBCSCxjQUFVLEVBQUVHO0FBQXRDLEdBQWY7QUFDQSxNQUFNQyxHQUFHLEdBQUdsQixRQUFRLENBQUNJLGNBQVQsQ0FBd0IsV0FBeEIsQ0FBWjtBQUNBLE1BQUllLE9BQU8sR0FBR0MsTUFBTSxDQUFDQyxXQUFyQjtBQUNBRCxRQUFNLENBQUNuQixnQkFBUCxDQUF3QixRQUF4QixFQUFrQyxZQUFNO0FBQ3BDLFFBQUltQixNQUFNLENBQUNDLFdBQVAsR0FBcUJGLE9BQXpCLEVBQWtDO0FBQzlCRCxTQUFHLENBQUNJLFNBQUosQ0FBY0MsR0FBZCxDQUFrQixNQUFsQjtBQUNILEtBRkQsTUFFTztBQUNITCxTQUFHLENBQUNJLFNBQUosQ0FBY0UsTUFBZCxDQUFxQixNQUFyQjtBQUNIOztBQUNETCxXQUFPLEdBQUdDLE1BQU0sQ0FBQ0MsV0FBakI7QUFDSCxHQVBEO0FBUUEsTUFBTUksZUFBZSxHQUFHLEdBQUdDLEtBQUgsQ0FBU0MsSUFBVCxDQUFjM0IsUUFBUSxDQUFDNEIsc0JBQVQsQ0FBZ0MsYUFBaEMsQ0FBZCxDQUF4QjtBQUNBSCxpQkFBZSxDQUFDSSxPQUFoQixDQUF3QixVQUFBQyxjQUFjO0FBQUEsV0FBSSxJQUFJQywwREFBSixDQUFnQkQsY0FBaEIsQ0FBSjtBQUFBLEdBQXRDO0FBQ0gsQ0F0Q0QsRTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNwQkE7QUFDQTs7SUFFcUJDLFc7OztBQUVqQjs7O0FBR0EsdUJBQVlDLE1BQVosRUFDQTtBQUFBOztBQUNJLFNBQUtBLE1BQUwsR0FBY0EsTUFBZDtBQUNBLFNBQUtDLE9BQUwsR0FBZUQsTUFBTSxDQUFDRSxhQUFQLENBQXFCLGlCQUFyQixDQUFmO0FBQ0EsU0FBS0MsTUFBTCxHQUFjSCxNQUFNLENBQUNJLE9BQVAsQ0FBZUMsRUFBN0I7QUFDQSxTQUFLQyxZQUFMLEdBQW9CTixNQUFNLENBQUNJLE9BQVAsQ0FBZUUsWUFBbkM7QUFDQSxTQUFLQyxHQUFMLEdBQVdQLE1BQU0sQ0FBQ0ksT0FBUCxDQUFlRyxHQUExQjtBQUNBLFNBQUtDLEtBQUwsR0FBYVIsTUFBTSxDQUFDSSxPQUFQLENBQWVJLEtBQTVCO0FBQ0EsU0FBS0MsUUFBTCxHQUFnQixLQUFLQyxVQUFMLEVBQWhCO0FBQ0EsU0FBS0MsVUFBTCxHQUFrQixLQUFsQjtBQUVBLFNBQUtYLE1BQUwsQ0FBWS9CLGdCQUFaLENBQTZCLE9BQTdCLEVBQXNDLEtBQUsyQyxhQUFMLENBQW1CQyxJQUFuQixDQUF3QixJQUF4QixDQUF0QztBQUNIOzs7O2lDQUdEO0FBQ0ksVUFBTUosUUFBUSxHQUFHekMsUUFBUSxDQUFDOEMsYUFBVCxDQUF1QixLQUF2QixDQUFqQjtBQUNBTCxjQUFRLENBQUNuQixTQUFULENBQW1CQyxHQUFuQixDQUF1QixPQUF2QjtBQUNBa0IsY0FBUSxDQUFDTSxTQUFUO0FBWUEsYUFBT04sUUFBUDtBQUNIOzs7b0NBR0Q7QUFDSSxVQUFJLEtBQUtFLFVBQVQsRUFBcUI7O0FBRXJCLFVBQUksS0FBS0gsS0FBTCxLQUFlUSxTQUFuQixFQUE4QjtBQUMxQixlQUFPLEtBQUtDLFFBQUwsRUFBUDtBQUNILE9BRkQsTUFFTztBQUNILFlBQUksS0FBS2hCLE9BQVQsRUFBa0IsS0FBS0EsT0FBTCxDQUFhWCxTQUFiLENBQXVCRSxNQUF2QixDQUE4QixRQUE5QjtBQUNsQjBCLHVFQUFJLENBQ0EsS0FBS1gsR0FETCxFQUVBLEtBQUtZLFFBQUwsQ0FBY04sSUFBZCxDQUFtQixJQUFuQixDQUZBLEVBR0E7QUFDSU8sZ0JBQU0sRUFBRSxNQURaO0FBRUlDLGVBQUssRUFBRTtBQUNIaEIsY0FBRSxFQUFFLEtBQUtGLE1BRE47QUFFSEssaUJBQUssRUFBRSxLQUFLQTtBQUZUO0FBRlgsU0FIQSxDQUFKO0FBV0g7QUFDSjs7OytCQUdEO0FBQ0ksVUFBTWMsWUFBWSxHQUFHO0FBQ2pCOUMsZUFBTyxFQUFFLEtBQUtpQyxRQUFMLENBQWNQLGFBQWQsQ0FBNEIsY0FBNUIsQ0FEUTtBQUVqQkssV0FBRyxFQUFFLEtBQUtBLEdBRk87QUFHakJZLGdCQUFRLEVBQUUsS0FBS0EsUUFBTCxDQUFjTixJQUFkLENBQW1CLElBQW5CLENBSE87QUFJakJRLGFBQUssRUFBRTtBQUNIaEIsWUFBRSxFQUFFLEtBQUtGLE1BRE47QUFFSEssZUFBSyxFQUFFLEtBQUtDLFFBQUwsQ0FBY1AsYUFBZCxDQUE0QixjQUE1QjtBQUZKO0FBSlUsT0FBckI7QUFVQSxVQUFJNUIsOENBQUosQ0FBVSxLQUFLbUMsUUFBZixFQUF5QjtBQUFDbEMsZUFBTyxFQUFFLENBQUMrQyxZQUFEO0FBQVYsT0FBekI7QUFDSDs7OzZCQUVRQyxRLEVBQ1Q7QUFDSSxVQUFJQSxRQUFRLENBQUNDLE9BQWIsRUFBc0I7QUFDbEIsYUFBS3hCLE1BQUwsQ0FBWXlCLFNBQVosR0FBd0IsS0FBS25CLFlBQTdCO0FBQ0EsYUFBS0ssVUFBTCxHQUFrQixJQUFsQjtBQUNILE9BSEQsTUFHTztBQUNIZSxlQUFPLENBQUNDLEtBQVIsQ0FBY0osUUFBUSxDQUFDSSxLQUF2QjtBQUNBLFlBQUksS0FBSzFCLE9BQVQsRUFBa0IsS0FBS0EsT0FBTCxDQUFhWCxTQUFiLENBQXVCQyxHQUF2QixDQUEyQixRQUEzQjtBQUNyQjtBQUNKOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUN2Rkw7O0lBRXFCYixJOzs7QUFDakI7Ozs7Ozs7Ozs7O0FBV0Esa0JBQ0E7QUFBQTs7QUFBQSxRQURZa0QsT0FDWix1RUFEc0IsRUFDdEI7O0FBQUE7O0FBQ0k7QUFDQSxTQUFLQSxPQUFMLEdBQWVDLE1BQU0sQ0FBQ0MsTUFBUCxDQUFjO0FBQ3pCQyxrQkFBWSxFQUFFLGFBRFc7QUFFekJDLG1CQUFhLEVBQUUsU0FGVTtBQUd6QkMsMEJBQW9CLEVBQUUsZ0JBSEc7QUFJekJDLHdCQUFrQixFQUFFLFlBSks7QUFLekJDLDZCQUF1QixFQUFFLGtCQUxBO0FBTXpCQyx5QkFBbUIsRUFBRSxTQU5JO0FBT3pCQyxjQUFRLEVBQUUsVUFQZTtBQVF6QmhFLFdBQUssRUFBRTtBQVJrQixLQUFkLEVBU1p1RCxPQVRZLENBQWY7QUFVQSxTQUFLVSxVQUFMLEdBQWtCLEtBQWxCO0FBQ0EsU0FBS0MsV0FBTCxHQUFtQixFQUFuQjtBQUNBLFNBQUtDLE9BQUwsR0FBZSxLQUFmO0FBQ0EsU0FBS0MsZUFBTCxHQUF1QixLQUF2QixDQWZKLENBaUJJOztBQUNBLFNBQUtsRSxPQUFMLEdBQWUsR0FBR21CLEtBQUgsQ0FBU0MsSUFBVCxDQUFjM0IsUUFBUSxDQUFDNEIsc0JBQVQsQ0FBZ0MsS0FBS2dDLE9BQUwsQ0FBYUcsWUFBN0MsQ0FBZCxDQUFmO0FBQ0EsU0FBS1csT0FBTCxHQUFlMUUsUUFBUSxDQUFDa0MsYUFBVCxDQUF1QixNQUFJLEtBQUswQixPQUFMLENBQWFJLGFBQXhDLENBQWY7QUFDQSxTQUFLVyxhQUFMLEdBQXFCM0UsUUFBUSxDQUFDa0MsYUFBVCxDQUF1QixNQUFJLEtBQUswQixPQUFMLENBQWFLLG9CQUF4QyxDQUFyQjtBQUNBLFNBQUtXLFdBQUwsR0FBbUI1RSxRQUFRLENBQUNrQyxhQUFULENBQXVCLE1BQUksS0FBSzBCLE9BQUwsQ0FBYU0sa0JBQXhDLENBQW5CO0FBQ0EsU0FBS1csbUJBQUwsR0FBMkI3RSxRQUFRLENBQUNrQyxhQUFULENBQXVCLE1BQUksS0FBSzBCLE9BQUwsQ0FBYVEsbUJBQXhDLENBQTNCO0FBQ0EsU0FBS1Usc0JBQUwsR0FBOEIsR0FBR3BELEtBQUgsQ0FBU0MsSUFBVCxDQUFjM0IsUUFBUSxDQUFDK0UsZ0JBQVQsQ0FBMEIsTUFBSSxLQUFLbkIsT0FBTCxDQUFhTyx1QkFBakIsR0FBeUMsZUFBbkUsQ0FBZCxDQUE5QixDQXZCSixDQXlCSTs7QUFDQSxTQUFLUSxhQUFMLENBQW1CMUUsZ0JBQW5CLENBQW9DLE9BQXBDLEVBQTZDLEtBQUsrRSxvQkFBTCxDQUEwQm5DLElBQTFCLENBQStCLElBQS9CLENBQTdDO0FBQ0EsU0FBS3RDLE9BQUwsQ0FBYXNCLE9BQWIsQ0FBcUIsVUFBQUcsTUFBTSxFQUFJO0FBQzNCQSxZQUFNLENBQUMvQixnQkFBUCxDQUF3QixPQUF4QixFQUFpQyxLQUFJLENBQUMyQyxhQUFMLENBQW1CQyxJQUFuQixDQUF3QixLQUF4QixFQUE4QmIsTUFBOUIsQ0FBakM7QUFDSCxLQUZEO0FBR0EsU0FBSzhDLHNCQUFMLENBQTRCakQsT0FBNUIsQ0FBb0MsVUFBQUcsTUFBTSxFQUFJO0FBQzFDQSxZQUFNLENBQUMvQixnQkFBUCxDQUF3QixPQUF4QixFQUFpQyxLQUFJLENBQUNnRix3QkFBTCxDQUE4QnBDLElBQTlCLENBQW1DLEtBQW5DLEVBQXlDYixNQUF6QyxDQUFqQztBQUNILEtBRkQ7QUFHSDs7Ozt5Q0FFb0JrRCxDLEVBQ3JCO0FBQ0lBLE9BQUMsQ0FBQ0MsY0FBRjtBQUNIOzs7a0NBRWFuRCxNLEVBQ2Q7QUFBQTs7QUFDSSxVQUFJLEtBQUtzQyxVQUFULEVBQXFCO0FBQ2pCO0FBQ0g7O0FBQ0QsV0FBS0EsVUFBTCxHQUFrQixJQUFsQjtBQUNBLFVBQUlyQyxPQUFPLEdBQUdELE1BQU0sQ0FBQ0UsYUFBUCxDQUFxQixhQUFyQixDQUFkO0FBQ0FELGFBQU8sQ0FBQ1gsU0FBUixDQUFrQkUsTUFBbEIsQ0FBeUIsUUFBekI7QUFDQSxVQUFJNEQsS0FBSyxHQUFHcEQsTUFBTSxDQUFDSSxPQUFQLENBQWVnRCxLQUFmLEtBQXlCcEMsU0FBckM7QUFDQSxVQUFJVCxHQUFHLEdBQUc2QyxLQUFLLEdBQUdwRCxNQUFNLENBQUNJLE9BQVAsQ0FBZWlELGVBQWxCLEdBQW9DckQsTUFBTSxDQUFDSSxPQUFQLENBQWVrRCxZQUFsRTtBQUNBcEMsc0VBQUksQ0FBQ1gsR0FBRCxFQUFNLFVBQUNnQixRQUFELEVBQWM7QUFDcEJ0QixlQUFPLENBQUNYLFNBQVIsQ0FBa0JDLEdBQWxCLENBQXNCLFFBQXRCOztBQUNBLGNBQUksQ0FBQ2dFLGFBQUwsQ0FBbUJ2RCxNQUFuQixFQUEyQm9ELEtBQTNCOztBQUNBLGNBQUksQ0FBQ1osT0FBTCxHQUFlakIsUUFBUSxDQUFDaUIsT0FBVCxLQUFxQixJQUFwQzs7QUFDQSxjQUFJLENBQUNnQixVQUFMLENBQWdCakMsUUFBUSxDQUFDa0MsSUFBekI7O0FBQ0F6RCxjQUFNLENBQUMwRCxJQUFQOztBQUNBLFlBQUksTUFBSSxDQUFDOUIsT0FBTCxDQUFhdkQsS0FBYixJQUFzQixDQUFDK0UsS0FBM0IsRUFBa0M7QUFDOUIsZ0JBQUksQ0FBQ3hCLE9BQUwsQ0FBYXZELEtBQWIsQ0FBbUJzRixJQUFuQjtBQUNIOztBQUNELGNBQUksQ0FBQ3JCLFVBQUwsR0FBa0IsS0FBbEI7O0FBQ0EsY0FBSSxDQUFDc0IsU0FBTCxDQUFlLENBQUNSLEtBQWhCLEVBQXVCUyxJQUFJLENBQUNDLEtBQUwsQ0FBV3ZDLFFBQVEsQ0FBQ3dDLElBQXBCLENBQXZCO0FBQ0gsT0FYRyxFQVdEO0FBQUMzQyxjQUFNLEVBQUU7QUFBVCxPQVhDLENBQUo7QUFZSDs7OzZDQUV3QnBCLE0sRUFDekI7QUFBQTs7QUFDSSxVQUFJLEtBQUtzQyxVQUFULEVBQXFCO0FBQ2pCO0FBQ0g7O0FBQ0QsV0FBS0EsVUFBTCxHQUFrQixJQUFsQjtBQUNBdEMsWUFBTSxDQUFDVixTQUFQLENBQWlCRSxNQUFqQixDQUF3QixLQUF4QjtBQUNBUSxZQUFNLENBQUNWLFNBQVAsQ0FBaUJFLE1BQWpCLENBQXdCLGlCQUF4QjtBQUNBUSxZQUFNLENBQUNWLFNBQVAsQ0FBaUJDLEdBQWpCLENBQXFCLEtBQXJCO0FBQ0FTLFlBQU0sQ0FBQ1YsU0FBUCxDQUFpQkMsR0FBakIsQ0FBcUIsWUFBckI7QUFDQSxVQUFJZ0IsR0FBRyxHQUFHUCxNQUFNLENBQUNJLE9BQVAsQ0FBZWlELGVBQXpCO0FBQ0EsVUFBSVcsZUFBZSxHQUFHaEcsUUFBUSxDQUFDSSxjQUFULENBQXdCLGlCQUFlNEIsTUFBTSxDQUFDSSxPQUFQLENBQWU2RCxPQUF0RCxDQUF0QjtBQUNBL0Msc0VBQUksQ0FBQ1gsR0FBRCxFQUFNLFVBQUNnQixRQUFELEVBQWM7QUFDcEJ2QixjQUFNLENBQUNWLFNBQVAsQ0FBaUJFLE1BQWpCLENBQXdCLEtBQXhCO0FBQ0FRLGNBQU0sQ0FBQ1YsU0FBUCxDQUFpQkUsTUFBakIsQ0FBd0IsWUFBeEI7QUFDQVEsY0FBTSxDQUFDVixTQUFQLENBQWlCQyxHQUFqQixDQUFxQixLQUFyQjtBQUNBUyxjQUFNLENBQUNWLFNBQVAsQ0FBaUJDLEdBQWpCLENBQXFCLGlCQUFyQjs7QUFDQSxZQUFJeUUsZUFBZSxZQUFZRSxXQUEvQixFQUE0QztBQUN4QyxnQkFBSSxDQUFDWCxhQUFMLENBQW1CUyxlQUFuQixFQUFvQyxJQUFwQztBQUNIOztBQUNELGNBQUksQ0FBQ3hCLE9BQUwsR0FBZWpCLFFBQVEsQ0FBQ2lCLE9BQVQsS0FBcUIsSUFBcEM7O0FBQ0EsY0FBSSxDQUFDZ0IsVUFBTCxDQUFnQmpDLFFBQVEsQ0FBQ2tDLElBQXpCOztBQUNBLGNBQUksQ0FBQ25CLFVBQUwsR0FBa0IsS0FBbEI7QUFDSCxPQVhHLEVBV0Q7QUFBQ2xCLGNBQU0sRUFBRTtBQUFULE9BWEMsQ0FBSjtBQVlIOzs7K0JBRVUrQyxZLEVBQ1g7QUFBQTs7QUFDSSxVQUFJO0FBQ0EsYUFBSzVCLFdBQUwsR0FBbUJzQixJQUFJLENBQUNDLEtBQUwsQ0FBV0ssWUFBWCxDQUFuQjs7QUFDQSxZQUFJLFFBQU8sS0FBSzVCLFdBQVosTUFBNEIsUUFBaEMsRUFBMEM7QUFDdEMsZUFBS0EsV0FBTCxHQUFtQixFQUFuQjtBQUNIO0FBQ0osT0FMRCxDQUtFLE9BQU9XLENBQVAsRUFBVTtBQUNSeEIsZUFBTyxDQUFDQyxLQUFSLENBQWMsK0JBQWQ7QUFDQTtBQUNIOztBQUVELFdBQUtpQixXQUFMLENBQWlCN0IsU0FBakIsR0FBNkIsRUFBN0I7QUFFQSxVQUFJcUQsS0FBSyxHQUFHLENBQVo7QUFDQSxVQUFJQyxLQUFLLEdBQUcsQ0FBWjs7QUFDQSxVQUFJLEtBQUt6QyxPQUFMLENBQWF2RCxLQUFqQixFQUF3QjtBQUNwQixhQUFLdUQsT0FBTCxDQUFhdkQsS0FBYixDQUFtQmlHLFdBQW5CO0FBQ0g7O0FBQ0R6QyxZQUFNLENBQUMwQyxNQUFQLENBQWMsS0FBS2hDLFdBQW5CLEVBQWdDMUMsT0FBaEMsQ0FBd0MsVUFBQWtFLElBQUksRUFBSTtBQUM1QyxZQUFJUyxXQUFXLEdBQUcsTUFBSSxDQUFDQyxxQkFBTCxDQUEyQlYsSUFBM0IsQ0FBbEI7O0FBQ0EsWUFBSVcsS0FBSyxHQUFHLE1BQUksQ0FBQ2xDLE9BQUwsR0FBZXVCLElBQUksQ0FBQ1ksYUFBcEIsR0FBb0NaLElBQUksQ0FBQ1csS0FBckQ7QUFDQSxZQUFJRSxRQUFRLEdBQUdDLFFBQVEsQ0FBQ2QsSUFBSSxDQUFDYSxRQUFOLENBQXZCO0FBQ0FQLGFBQUssSUFBSU8sUUFBUSxHQUFHRSxVQUFVLENBQUNKLEtBQUQsQ0FBOUI7O0FBQ0EsY0FBSSxDQUFDOUIsV0FBTCxDQUFpQm1DLFdBQWpCLENBQTZCUCxXQUE3Qjs7QUFDQUosYUFBSyxJQUFJTCxJQUFJLENBQUNhLFFBQWQ7QUFDSCxPQVBEO0FBUUEsVUFBSUksa0JBQWtCLEdBQUcsS0FBS1AscUJBQUwsQ0FBMkI7QUFBQ1EscUJBQWEsRUFBRSxJQUFoQjtBQUFzQkMsWUFBSSxFQUFFO0FBQTVCLE9BQTNCLENBQXpCO0FBQ0EsV0FBS3RDLFdBQUwsQ0FBaUJtQyxXQUFqQixDQUE2QkMsa0JBQTdCOztBQUNBLFVBQUlYLEtBQUssR0FBRyxDQUFaLEVBQWU7QUFDWCxZQUFJYyxnQkFBZ0IsR0FBRyxLQUFLQyxzQkFBTCxDQUE0QmYsS0FBNUIsQ0FBdkI7QUFDQSxhQUFLekIsV0FBTCxDQUFpQm1DLFdBQWpCLENBQTZCSSxnQkFBN0I7QUFDQSxZQUFJRSxXQUFXLEdBQUcsS0FBS0Msd0JBQUwsQ0FBOEIsS0FBOUIsRUFBcUMsS0FBSzFELE9BQUwsQ0FBYU0sa0JBQWIsR0FBZ0MsUUFBckUsQ0FBbEI7QUFDQSxZQUFJcUQsUUFBUSxHQUFHLEtBQUtELHdCQUFMLENBQThCLEdBQTlCLEVBQW1DLENBQUMsS0FBRCxFQUFRLFFBQVIsRUFBa0IsaUJBQWxCLEVBQXFDLFlBQXJDLENBQW5DLENBQWY7QUFDQUMsZ0JBQVEsQ0FBQ0MsSUFBVCxHQUFnQixLQUFLNUQsT0FBTCxDQUFhUyxRQUE3QjtBQUNBa0QsZ0JBQVEsQ0FBQzlELFNBQVQsR0FBcUIsS0FBS21CLFdBQUwsQ0FBaUJ4QyxPQUFqQixDQUF5QnFGLGNBQTlDO0FBQ0FKLG1CQUFXLENBQUNOLFdBQVosQ0FBd0JRLFFBQXhCO0FBQ0EsYUFBSzNDLFdBQUwsQ0FBaUJtQyxXQUFqQixDQUE2Qk0sV0FBN0I7QUFDQSxhQUFLM0MsT0FBTCxDQUFhcEQsU0FBYixDQUF1QkUsTUFBdkIsQ0FBOEIsT0FBOUI7QUFDSCxPQVZELE1BVU87QUFDSCxhQUFLa0QsT0FBTCxDQUFhcEQsU0FBYixDQUF1QkMsR0FBdkIsQ0FBMkIsT0FBM0I7QUFDSDs7QUFDRCxXQUFLc0QsbUJBQUwsQ0FBeUJ6QyxPQUF6QixDQUFpQ3dFLFFBQWpDLEdBQTRDUixLQUE1QztBQUNIO0FBRUQ7Ozs7Ozs7MENBSXNCTCxJLEVBQ3RCO0FBQ0ksVUFBSTJCLGFBQWEsR0FBRyxLQUFLSix3QkFBTCxDQUE4QixLQUE5QixFQUFxQyxLQUFLMUQsT0FBTCxDQUFhTyx1QkFBbEQsQ0FBcEI7O0FBQ0EsVUFBSTRCLElBQUksQ0FBQ2tCLGFBQVQsRUFBd0I7QUFDcEIsWUFBSVUsSUFBSSxHQUFHLEtBQUtMLHdCQUFMLENBQThCLE1BQTlCLEVBQXNDLEtBQUsxRCxPQUFMLENBQWFPLHVCQUFiLEdBQXFDLFFBQTNFLENBQVg7QUFDQSxZQUFJeUQsU0FBUyxHQUFHLEtBQUtOLHdCQUFMLENBQThCLEdBQTlCLEVBQW1DLENBQUMsS0FBRCxFQUFRLGtCQUFSLENBQW5DLENBQWhCO0FBQ0FLLFlBQUksQ0FBQ1osV0FBTCxDQUFpQmEsU0FBakI7QUFDQUQsWUFBSSxDQUFDWixXQUFMLENBQWlCL0csUUFBUSxDQUFDNkgsY0FBVCxDQUF3QixNQUFJOUIsSUFBSSxDQUFDbUIsSUFBakMsQ0FBakI7QUFDQVEscUJBQWEsQ0FBQ1gsV0FBZCxDQUEwQlksSUFBMUI7QUFDSCxPQU5ELE1BTU87QUFDSCxZQUFJQyxVQUFTLEdBQUcsS0FBS04sd0JBQUwsQ0FBOEIsS0FBOUIsQ0FBaEI7O0FBQ0FNLGtCQUFTLENBQUNFLEdBQVYsR0FBZ0IvQixJQUFJLENBQUNnQyxNQUFMLENBQVksQ0FBWixFQUFlQyxTQUEvQjtBQUNBSixrQkFBUyxDQUFDSyxHQUFWLEdBQWdCbEMsSUFBSSxDQUFDZ0MsTUFBTCxDQUFZLENBQVosRUFBZUUsR0FBL0I7QUFFQSxZQUFJQyxRQUFRLEdBQUcsS0FBS1osd0JBQUwsQ0FBOEIsR0FBOUIsRUFBbUMsS0FBSzFELE9BQUwsQ0FBYU8sdUJBQWIsR0FBcUMsUUFBeEUsQ0FBZjtBQUNBK0QsZ0JBQVEsQ0FBQ1YsSUFBVCxHQUFnQnpCLElBQUksQ0FBQ29DLElBQXJCO0FBQ0FELGdCQUFRLENBQUNFLFlBQVQsQ0FBc0IsT0FBdEIsRUFBK0JyQyxJQUFJLENBQUNtQixJQUFwQztBQUNBZ0IsZ0JBQVEsQ0FBQ25CLFdBQVQsQ0FBcUJhLFVBQXJCO0FBQ0FNLGdCQUFRLENBQUNuQixXQUFULENBQXFCL0csUUFBUSxDQUFDNkgsY0FBVCxDQUF3QixNQUFJOUIsSUFBSSxDQUFDbUIsSUFBakMsQ0FBckI7QUFDQVEscUJBQWEsQ0FBQ1gsV0FBZCxDQUEwQm1CLFFBQTFCO0FBQ0g7O0FBQ0QsVUFBSUcsU0FBUyxHQUFHLEtBQUtmLHdCQUFMLENBQThCLE1BQTlCLEVBQXNDLEtBQUsxRCxPQUFMLENBQWFPLHVCQUFiLEdBQXFDLFNBQTNFLENBQWhCO0FBQ0EsVUFBSXVDLEtBQUssR0FBR1gsSUFBSSxDQUFDa0IsYUFBTCxHQUFxQixDQUFyQixHQUF5QixLQUFLekMsT0FBTCxHQUFldUIsSUFBSSxDQUFDWSxhQUFwQixHQUFvQ1osSUFBSSxDQUFDVyxLQUE5RTtBQUNBMkIsZUFBUyxDQUFDNUUsU0FBVixHQUFzQixJQUFJNkUsSUFBSSxDQUFDQyxZQUFULENBQXNCLE9BQXRCLEVBQStCO0FBQUNDLGFBQUssRUFBRSxVQUFSO0FBQW9CQyxnQkFBUSxFQUFFO0FBQTlCLE9BQS9CLEVBQXFFQyxNQUFyRSxDQUE0RWhDLEtBQTVFLENBQXRCO0FBQ0EsVUFBSWlDLFVBQVUsR0FBRyxLQUFLckIsd0JBQUwsQ0FBOEIsR0FBOUIsRUFBbUMsQ0FBQyxhQUFELEVBQWdCLEtBQWhCLEVBQXVCLGlCQUF2QixDQUFuQyxDQUFqQjtBQUNBcUIsZ0JBQVUsQ0FBQ1AsWUFBWCxDQUF3QixjQUF4QixFQUF3Q3JDLElBQUksQ0FBQzFELEVBQTdDO0FBQ0FzRyxnQkFBVSxDQUFDUCxZQUFYLENBQXdCLHNCQUF4QixFQUFnRHJDLElBQUksQ0FBQzZDLFVBQXJEO0FBQ0FELGdCQUFVLENBQUMxSSxnQkFBWCxDQUE0QixPQUE1QixFQUFxQyxLQUFLZ0Ysd0JBQUwsQ0FBOEJwQyxJQUE5QixDQUFtQyxJQUFuQyxFQUF5QzhGLFVBQXpDLENBQXJDO0FBRUFqQixtQkFBYSxDQUFDWCxXQUFkLENBQTBCc0IsU0FBMUI7O0FBQ0EsVUFBSSxLQUFLekUsT0FBTCxDQUFhdkQsS0FBakIsRUFBd0I7QUFDcEIsWUFBSXdJLFVBQVUsR0FBR25CLGFBQWEsQ0FBQ29CLFNBQWQsQ0FBd0IsSUFBeEIsQ0FBakI7O0FBQ0EsWUFBSSxDQUFDL0MsSUFBSSxDQUFDa0IsYUFBVixFQUF5QjtBQUNyQixjQUFJOEIsZ0JBQWdCLEdBQUdKLFVBQVUsQ0FBQ0csU0FBWCxDQUFxQixJQUFyQixDQUF2QjtBQUNBQywwQkFBZ0IsQ0FBQzlJLGdCQUFqQixDQUFrQyxPQUFsQyxFQUEyQyxLQUFLZ0Ysd0JBQUwsQ0FBOEJwQyxJQUE5QixDQUFtQyxJQUFuQyxFQUF5Q2tHLGdCQUF6QyxDQUEzQztBQUNBRixvQkFBVSxDQUFDOUIsV0FBWCxDQUF1QmdDLGdCQUF2QjtBQUNIOztBQUNELGFBQUtuRixPQUFMLENBQWF2RCxLQUFiLFdBQTBCd0ksVUFBMUI7QUFDSDs7QUFDRCxVQUFJLENBQUM5QyxJQUFJLENBQUNrQixhQUFWLEVBQXlCO0FBQ3JCUyxxQkFBYSxDQUFDWCxXQUFkLENBQTBCNEIsVUFBMUI7QUFDSDs7QUFDRCxhQUFPakIsYUFBUDtBQUNIO0FBRUQ7Ozs7Ozs7MkNBSXVCckIsSyxFQUN2QjtBQUNJLFVBQUkyQyxjQUFjLEdBQUcsS0FBSzFCLHdCQUFMLENBQThCLEtBQTlCLEVBQXFDLEtBQUsxRCxPQUFMLENBQWFNLGtCQUFiLEdBQWdDLFNBQXJFLENBQXJCO0FBQ0EsVUFBSStFLFlBQVksR0FBRyxLQUFLM0Isd0JBQUwsQ0FBOEIsTUFBOUIsQ0FBbkI7QUFDQTJCLGtCQUFZLENBQUN4RixTQUFiLEdBQXlCLFFBQXpCO0FBQ0EsVUFBSXlGLFdBQVcsR0FBRyxLQUFLNUIsd0JBQUwsQ0FBOEIsTUFBOUIsRUFBc0MsS0FBSzFELE9BQUwsQ0FBYU0sa0JBQWIsR0FBZ0MsaUJBQXRFLENBQWxCO0FBQ0FnRixpQkFBVyxDQUFDekYsU0FBWixHQUF3QixJQUFJNkUsSUFBSSxDQUFDQyxZQUFULENBQXNCLE9BQXRCLEVBQStCO0FBQUNDLGFBQUssRUFBRSxVQUFSO0FBQW9CQyxnQkFBUSxFQUFFO0FBQTlCLE9BQS9CLEVBQXFFQyxNQUFyRSxDQUE0RXJDLEtBQTVFLENBQXhCO0FBQ0EyQyxvQkFBYyxDQUFDakMsV0FBZixDQUEyQmtDLFlBQTNCO0FBQ0FELG9CQUFjLENBQUNqQyxXQUFmLENBQTJCbUMsV0FBM0I7QUFDQSxhQUFPRixjQUFQO0FBQ0g7QUFFRDs7Ozs7Ozs7NkNBS3lCRyxHLEVBQ3pCO0FBQUEsVUFEOEJDLE9BQzlCLHVFQUR3QyxFQUN4Qzs7QUFDSSxVQUFJLENBQUNDLEtBQUssQ0FBQ0MsT0FBTixDQUFjRixPQUFkLENBQUwsRUFBNkI7QUFDekJBLGVBQU8sR0FBRyxDQUFDQSxPQUFELENBQVY7QUFDSDs7QUFFRCxVQUFJNUksT0FBTyxHQUFHUixRQUFRLENBQUM4QyxhQUFULENBQXVCcUcsR0FBdkIsQ0FBZDtBQUxKO0FBQUE7QUFBQTs7QUFBQTtBQU1JLDZCQUFzQkMsT0FBdEIsOEhBQStCO0FBQUEsY0FBdEJHLFNBQXNCO0FBQzNCL0ksaUJBQU8sQ0FBQ2MsU0FBUixDQUFrQkMsR0FBbEIsQ0FBc0JnSSxTQUF0QjtBQUNIO0FBUkw7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTs7QUFVSSxhQUFPL0ksT0FBUDtBQUNIOzs7a0NBRWF3QixNLEVBQVFvRCxLLEVBQ3RCO0FBQ0ksVUFBSW9FLE9BQU8sR0FBR3hILE1BQU0sQ0FBQ0UsYUFBUCxDQUFxQixXQUFyQixDQUFkO0FBQ0EsVUFBSXVILFVBQVUsR0FBR3pILE1BQU0sQ0FBQ0UsYUFBUCxDQUFxQixjQUFyQixDQUFqQjs7QUFDQSxVQUFJa0QsS0FBSixFQUFXO0FBQ1BvRSxlQUFPLENBQUNsSSxTQUFSLENBQWtCRSxNQUFsQixDQUF5QixRQUF6QjtBQUNBaUksa0JBQVUsQ0FBQ25JLFNBQVgsQ0FBcUJDLEdBQXJCLENBQXlCLFFBQXpCO0FBQ0FTLGNBQU0sQ0FBQzBILGVBQVAsQ0FBdUIsWUFBdkI7QUFDSCxPQUpELE1BSU87QUFDSEYsZUFBTyxDQUFDbEksU0FBUixDQUFrQkMsR0FBbEIsQ0FBc0IsUUFBdEI7QUFDQWtJLGtCQUFVLENBQUNuSSxTQUFYLENBQXFCRSxNQUFyQixDQUE0QixRQUE1QjtBQUNBUSxjQUFNLENBQUNvRyxZQUFQLENBQW9CLFlBQXBCLEVBQWtDLEVBQWxDO0FBQ0g7QUFDSjs7OzhCQUVTN0csRyxFQUFLd0UsSSxFQUNmO0FBQ0ksVUFBSSxDQUFDLEtBQUt0QixlQUFWLEVBQTJCO0FBQ3ZCa0YsVUFBRSxDQUFDLFFBQUQsRUFBVyxZQUFYLENBQUY7QUFDQUEsVUFBRSxDQUFDLFNBQUQsRUFBWSxJQUFaLENBQUY7QUFDQSxhQUFLbEYsZUFBTCxHQUF1QixJQUF2QjtBQUNIOztBQUVEa0YsUUFBRSxDQUFDLGVBQUQsRUFBa0I7QUFDaEIsY0FBTTVELElBQUksQ0FBQzFELEVBREs7QUFFaEIsZ0JBQVEwRCxJQUFJLENBQUNtQixJQUZHO0FBR2hCLG9CQUFZbkIsSUFBSSxDQUFDNkQsUUFBTCxDQUFjQyxJQUhWO0FBSWhCLGlCQUFTOUQsSUFBSSxDQUFDVyxLQUpFO0FBS2hCLG9CQUFZO0FBTEksT0FBbEIsQ0FBRjtBQU9BaUQsUUFBRSxDQUFDLGNBQUQsRUFBaUJwSSxHQUFHLEdBQUcsS0FBSCxHQUFXLFFBQS9CLENBQUY7QUFDQW9JLFFBQUUsQ0FBQyxNQUFELEVBQVMsT0FBVCxFQUFrQixJQUFsQixFQUF3QixPQUF4QixFQUFpQyxhQUFqQyxDQUFGLENBZkosQ0FlMkQ7QUFDMUQ7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztJQzFRZ0J6SixVOzs7QUFDakIsd0JBQ0E7QUFBQTs7QUFDSSxTQUFLNEosVUFBTCxHQUFrQixHQUFHcEksS0FBSCxDQUFTQyxJQUFULENBQWMzQixRQUFRLENBQUM0QixzQkFBVCxDQUFnQyxVQUFoQyxDQUFkLENBQWxCOztBQUNBLFFBQUksMEJBQTBCUixNQUE5QixFQUFzQztBQUNsQyxXQUFLMkksT0FBTDtBQUNILEtBRkQsTUFFTztBQUNILFdBQUtDLFFBQUw7QUFDSDtBQUNKO0FBRUQ7Ozs7Ozs7OEJBSUE7QUFBQTs7QUFDSSxVQUFJQyxpQkFBaUIsR0FBRyxJQUFJQyxvQkFBSixDQUF5QixVQUFDQyxPQUFELEVBQWE7QUFDMURBLGVBQU8sQ0FBQ3RJLE9BQVIsQ0FBZ0IsVUFBQ3VJLEtBQUQsRUFBVztBQUN2QixjQUFJQyxTQUFTLEdBQUdELEtBQUssQ0FBQ0UsTUFBdEI7O0FBQ0EsY0FBSUYsS0FBSyxDQUFDRyxjQUFOLElBQXdCRixTQUFTLFlBQVlHLGdCQUFqRCxFQUFtRTtBQUMvRCxpQkFBSSxDQUFDQyxJQUFMLENBQVVKLFNBQVY7O0FBQ0FKLDZCQUFpQixDQUFDUyxTQUFsQixDQUE0QkwsU0FBNUI7QUFDSDtBQUNKLFNBTkQ7QUFPSCxPQVJ1QixDQUF4QjtBQVVBLFdBQUtQLFVBQUwsQ0FBZ0JqSSxPQUFoQixDQUF3QixVQUFDOEksS0FBRCxFQUFXO0FBQy9CVix5QkFBaUIsQ0FBQ0YsT0FBbEIsQ0FBMEJZLEtBQTFCO0FBQ0gsT0FGRDtBQUdIO0FBRUQ7Ozs7OzsrQkFJQTtBQUFBOztBQUNJLFdBQUtiLFVBQUwsQ0FBZ0JqSSxPQUFoQixDQUF3QixVQUFDd0ksU0FBRCxFQUFlO0FBQ25DLGNBQUksQ0FBQ0ksSUFBTCxDQUFVSixTQUFWO0FBQ0gsT0FGRDtBQUdIO0FBRUQ7Ozs7Ozs7eUJBSUtBLFMsRUFDTDtBQUNJQSxlQUFTLENBQUNwSyxnQkFBVixDQUEyQixNQUEzQixFQUFtQyxZQUFNO0FBQ3JDb0ssaUJBQVMsQ0FBQy9JLFNBQVYsQ0FBb0JFLE1BQXBCLENBQTJCLFVBQTNCOztBQUNBLFlBQUk2SSxTQUFTLENBQUMvSSxTQUFWLENBQW9Cc0osTUFBcEIsS0FBK0IsQ0FBbkMsRUFBc0M7QUFDbENQLG1CQUFTLENBQUNYLGVBQVYsQ0FBMEIsT0FBMUI7QUFDSDtBQUNKLE9BTEQ7QUFNQVcsZUFBUyxDQUFDdkMsR0FBVixHQUFnQnVDLFNBQVMsQ0FBQ2pJLE9BQVYsQ0FBa0IwRixHQUFsQztBQUNIOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7SUN0RGdCbEgsVTs7O0FBRWpCOzs7Ozs7O0FBT0Esd0JBQ0E7QUFBQSxRQURZZ0QsT0FDWix1RUFEc0IsRUFDdEI7O0FBQUE7O0FBQ0ksU0FBS0EsT0FBTCxHQUFlQyxNQUFNLENBQUNDLE1BQVAsQ0FBYztBQUN6QmpELGtCQUFZLEVBQUUsSUFEVztBQUV6QkMsZ0JBQVUsRUFBRSxJQUZhO0FBR3pCK0osZUFBUyxFQUFFLE1BSGM7QUFJekI5SiwwQkFBb0IsRUFBRTtBQUpHLEtBQWQsRUFLWjZDLE9BTFksQ0FBZjs7QUFPQSxRQUFJLEVBQUUsS0FBS0EsT0FBTCxDQUFhL0MsWUFBYixZQUFxQ3FGLFdBQXJDLElBQW9ELEtBQUt0QyxPQUFMLENBQWE5QyxVQUFiLFlBQW1Db0YsV0FBekYsQ0FBSixFQUEyRztBQUN2R3hDLGFBQU8sQ0FBQ0MsS0FBUixDQUFjLHVCQUFkO0FBQ0E7QUFDSDs7QUFFRCxTQUFLQyxPQUFMLENBQWEvQyxZQUFiLENBQTBCWixnQkFBMUIsQ0FBMkMsT0FBM0MsRUFBb0QsS0FBSzZLLG1CQUFMLENBQXlCakksSUFBekIsQ0FBOEIsSUFBOUIsQ0FBcEQ7O0FBQ0EsUUFBSSxLQUFLZSxPQUFMLENBQWE3QyxvQkFBakIsRUFBdUM7QUFDbkNmLGNBQVEsQ0FBQ0MsZ0JBQVQsQ0FBMEIsT0FBMUIsRUFBbUMsS0FBSzhLLFlBQUwsQ0FBa0JsSSxJQUFsQixDQUF1QixJQUF2QixDQUFuQztBQUNIO0FBQ0o7Ozs7MENBR0Q7QUFDSSxVQUFJLEtBQUtlLE9BQUwsQ0FBYTlDLFVBQWIsQ0FBd0JRLFNBQXhCLENBQWtDMEosUUFBbEMsQ0FBMkMsS0FBS3BILE9BQUwsQ0FBYWlILFNBQXhELENBQUosRUFBd0U7QUFDcEUsYUFBS2pILE9BQUwsQ0FBYTlDLFVBQWIsQ0FBd0JRLFNBQXhCLENBQWtDRSxNQUFsQyxDQUF5QyxLQUFLb0MsT0FBTCxDQUFhaUgsU0FBdEQ7QUFDSCxPQUZELE1BRU87QUFDSCxhQUFLakgsT0FBTCxDQUFhOUMsVUFBYixDQUF3QlEsU0FBeEIsQ0FBa0NDLEdBQWxDLENBQXNDLEtBQUtxQyxPQUFMLENBQWFpSCxTQUFuRDtBQUNIO0FBQ0o7OztpQ0FFWTNGLEMsRUFDYjtBQUNJLFVBQUkxRSxPQUFPLEdBQUcwRSxDQUFDLENBQUNvRixNQUFoQjtBQUNBLFVBQUlXLFdBQVcsR0FBR3pLLE9BQU8sS0FBSyxLQUFLb0QsT0FBTCxDQUFhL0MsWUFBM0M7O0FBQ0EsYUFBTUwsT0FBTyxJQUFJLENBQUN5SyxXQUFsQixFQUErQjtBQUMzQnpLLGVBQU8sR0FBR0EsT0FBTyxDQUFDMEssVUFBbEI7QUFDQUQsbUJBQVcsR0FBR3pLLE9BQU8sS0FBSyxLQUFLb0QsT0FBTCxDQUFhL0MsWUFBdkM7QUFDSDs7QUFDRCxVQUFJLENBQUNvSyxXQUFMLEVBQWtCO0FBQ2QsYUFBS3JILE9BQUwsQ0FBYTlDLFVBQWIsQ0FBd0JRLFNBQXhCLENBQWtDRSxNQUFsQyxDQUF5QyxLQUFLb0MsT0FBTCxDQUFhaUgsU0FBdEQ7QUFDSDtBQUNKOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7SUNqRGdCbEssTTs7O0FBRWpCLG9CQUNBO0FBQUE7O0FBQ0ksU0FBS3dLLFVBQUwsR0FBa0JuTCxRQUFRLENBQUNJLGNBQVQsQ0FBd0IsYUFBeEIsQ0FBbEI7QUFDQSxTQUFLZ0wsYUFBTCxHQUFxQnBMLFFBQVEsQ0FBQ0ksY0FBVCxDQUF3QixnQkFBeEIsQ0FBckI7QUFDQSxTQUFLaUwsV0FBTCxHQUFtQnJMLFFBQVEsQ0FBQ0ksY0FBVCxDQUF3QixjQUF4QixDQUFuQjtBQUNBLFNBQUtrTCxZQUFMLEdBQW9CdEwsUUFBUSxDQUFDSSxjQUFULENBQXdCLGVBQXhCLENBQXBCO0FBRUEsU0FBS2dMLGFBQUwsQ0FBbUJuTCxnQkFBbkIsQ0FBb0MsT0FBcEMsRUFBNkMsS0FBS3NMLG9CQUFMLENBQTBCMUksSUFBMUIsQ0FBK0IsSUFBL0IsQ0FBN0M7QUFDQTdDLFlBQVEsQ0FBQ3dMLElBQVQsQ0FBY3ZMLGdCQUFkLENBQStCLE9BQS9CLEVBQXdDLEtBQUs4SyxZQUFMLENBQWtCbEksSUFBbEIsQ0FBdUIsSUFBdkIsQ0FBeEM7QUFDSDs7OzsyQ0FHRDtBQUNJLFVBQU00SSxnQkFBZ0IsR0FBRyxLQUFLSixXQUFMLENBQWlCSyxLQUFqQixDQUF1QmQsTUFBdkIsR0FBZ0MsQ0FBekQ7O0FBQ0EsVUFBSSxLQUFLTyxVQUFMLENBQWdCN0osU0FBaEIsQ0FBMEIwSixRQUExQixDQUFtQyxVQUFuQyxDQUFKLEVBQW9EO0FBQ2hELFlBQUlTLGdCQUFKLEVBQXNCO0FBQ2xCLGVBQUtILFlBQUwsQ0FBa0JLLGFBQWxCLENBQWdDLElBQUlDLFVBQUosQ0FBZSxPQUFmLENBQWhDO0FBQ0gsU0FGRCxNQUVPO0FBQ0gsZUFBS1QsVUFBTCxDQUFnQjdKLFNBQWhCLENBQTBCRSxNQUExQixDQUFpQyxVQUFqQztBQUNIO0FBQ0osT0FORCxNQU1PO0FBQ0gsYUFBSzJKLFVBQUwsQ0FBZ0I3SixTQUFoQixDQUEwQkMsR0FBMUIsQ0FBOEIsVUFBOUI7QUFDSDtBQUNKOzs7aUNBRVkyRCxDLEVBQ2I7QUFDSSxVQUFJQSxDQUFDLENBQUNvRixNQUFGLEtBQWEsS0FBS2MsYUFBbEIsSUFBbUNsRyxDQUFDLENBQUNvRixNQUFGLEtBQWEsS0FBS2UsV0FBckQsSUFBb0VuRyxDQUFDLENBQUNvRixNQUFGLEtBQWEsS0FBS2dCLFlBQTFGLEVBQXdHO0FBQ3BHO0FBQ0g7O0FBQ0QsV0FBS0gsVUFBTCxDQUFnQjdKLFNBQWhCLENBQTBCRSxNQUExQixDQUFpQyxVQUFqQztBQUNBLFdBQUs2SixXQUFMLENBQWlCSyxLQUFqQixHQUF5QixFQUF6QjtBQUNIOzs7Ozs7Ozs7Ozs7Ozs7OztBQ2xDTCw2QkFBNkIsbUJBQU8sQ0FBQywyR0FBdUM7O0FBRTVFOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwwRkFBMEY7QUFDMUY7QUFDQTs7Ozs7Ozs7Ozs7O0FDWEEsWUFBWSxtQkFBTyxDQUFDLHFFQUFvQjs7QUFFeEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIOzs7Ozs7Ozs7Ozs7QUNUQSxRQUFRLG1CQUFPLENBQUMsdUVBQXFCO0FBQ3JDLGNBQWMsbUJBQU8sQ0FBQyx5RkFBOEI7O0FBRXBEO0FBQ0E7QUFDQSxHQUFHLCtCQUErQjtBQUNsQztBQUNBO0FBQ0E7QUFDQSxDQUFDOzs7Ozs7Ozs7Ozs7O0FDVFk7QUFDYixRQUFRLG1CQUFPLENBQUMsdUVBQXFCO0FBQ3JDLGlCQUFpQixtQkFBTyxDQUFDLGlGQUEwQjtBQUNuRCw2QkFBNkIsbUJBQU8sQ0FBQyw2R0FBd0M7O0FBRTdFO0FBQ0E7QUFDQSxHQUFHLHdFQUF3RTtBQUMzRTtBQUNBO0FBQ0E7QUFDQSxDQUFDIiwiZmlsZSI6ImFwcC5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpbiIsIi8qXHJcbiAqIFdlbGNvbWUgdG8geW91ciBhcHAncyBtYWluIEphdmFTY3JpcHQgZmlsZSFcclxuICpcclxuICogV2UgcmVjb21tZW5kIGluY2x1ZGluZyB0aGUgYnVpbHQgdmVyc2lvbiBvZiB0aGlzIEphdmFTY3JpcHQgZmlsZVxyXG4gKiAoYW5kIGl0cyBDU1MgZmlsZSkgaW4geW91ciBiYXNlIGxheW91dCAoYmFzZS5odG1sLnR3aWcpLlxyXG4gKi9cclxuXHJcbi8vIGFueSBDU1MgeW91IHJlcXVpcmUgd2lsbCBvdXRwdXQgaW50byBhIHNpbmdsZSBjc3MgZmlsZSAoYXBwLmNzcyBpbiB0aGlzIGNhc2UpXHJcbnJlcXVpcmUoJy4uL2Nzcy9hcHAuc2NzcycpO1xyXG5cclxuLy8gTmVlZCBqUXVlcnk/IEluc3RhbGwgaXQgd2l0aCBcInlhcm4gYWRkIGpxdWVyeVwiLCB0aGVuIHVuY29tbWVudCB0byByZXF1aXJlIGl0LlxyXG4vLyBjb25zdCAkID0gcmVxdWlyZSgnanF1ZXJ5Jyk7XHJcblxyXG5pbXBvcnQgTGF6eWxvYWRlciBmcm9tIFwiLi9jbGFzcy9fTGF6eWxvYWRlclwiO1xyXG5pbXBvcnQgQ2FydCBmcm9tIFwiLi9jbGFzcy9fQ2FydFwiO1xyXG5pbXBvcnQgUG9wdXAgZnJvbSBcIi4vY2xhc3MvX1BvcHVwXCI7XHJcbmltcG9ydCBTZWFyY2ggZnJvbSBcIi4vY2xhc3MvX1NlYXJjaFwiO1xyXG5pbXBvcnQgTmF2aWdhdGlvbiBmcm9tIFwiLi9jbGFzcy9fTmF2aWdhdGlvblwiO1xyXG5pbXBvcnQgQmFja0luU3RvY2sgZnJvbSBcIi4vY2xhc3MvX0JhY2tJblN0b2NrXCI7XHJcblxyXG5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdET01Db250ZW50TG9hZGVkJywgKCkgPT4ge1xyXG4gICAgbmV3IExhenlsb2FkZXIoKTtcclxuICAgIGNvbnN0IGNhcnRQb3B1cCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdhZGQtdG8tY2FydC1wb3B1cCcpO1xyXG4gICAgaWYgKGNhcnRQb3B1cCkge1xyXG4gICAgICAgIGNvbnN0IHBvcHVwID0gbmV3IFBvcHVwKGNhcnRQb3B1cCwge1xyXG4gICAgICAgICAgICBidXR0b25zOiBbXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgZWxlbWVudDogZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NvbnRpbnVlLXNob3BwaW5nJylcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgXSxcclxuICAgICAgICAgICAgZGlzcGxheTogZmFsc2VcclxuICAgICAgICB9KTtcclxuICAgICAgICBuZXcgQ2FydCh7IHBvcHVwIH0pXHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICAgIG5ldyBDYXJ0KCk7XHJcbiAgICB9XHJcbiAgICBuZXcgU2VhcmNoKCk7XHJcbiAgICBuZXcgTmF2aWdhdGlvbih7XHJcbiAgICAgICAgdG9nZ2xlQnV0dG9uOiBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbmF2YmFyVG9nZ2xlJyksXHJcbiAgICAgICAgbmF2Q29udGVudDogZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ25hdmJhckNvbnRlbnQnKSxcclxuICAgICAgICBjb2xsYXBzZU9uT3V0ZXJDbGljazogZmFsc2UsXHJcbiAgICB9KTtcclxuICAgIGNvbnN0IHdvbWFuVG9nZ2xlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3dvbWFuVG9nZ2xlJyk7XHJcbiAgICBuZXcgTmF2aWdhdGlvbih7dG9nZ2xlQnV0dG9uOiB3b21hblRvZ2dsZSwgbmF2Q29udGVudDogd29tYW5Ub2dnbGV9KTtcclxuICAgIGNvbnN0IG1hblRvZ2dsZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdtYW5Ub2dnbGUnKTtcclxuICAgIG5ldyBOYXZpZ2F0aW9uKHt0b2dnbGVCdXR0b246IG1hblRvZ2dsZSwgbmF2Q29udGVudDogbWFuVG9nZ2xlfSk7XHJcbiAgICBjb25zdCBuYXYgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYnQtbmF2YmFyJyk7XHJcbiAgICBsZXQgWU9mZnNldCA9IHdpbmRvdy5wYWdlWU9mZnNldDtcclxuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdzY3JvbGwnLCAoKSA9PiB7XHJcbiAgICAgICAgaWYgKHdpbmRvdy5wYWdlWU9mZnNldCA+IFlPZmZzZXQpIHtcclxuICAgICAgICAgICAgbmF2LmNsYXNzTGlzdC5hZGQoJ2hpZGUnKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBuYXYuY2xhc3NMaXN0LnJlbW92ZSgnaGlkZScpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBZT2Zmc2V0ID0gd2luZG93LnBhZ2VZT2Zmc2V0O1xyXG4gICAgfSk7XHJcbiAgICBjb25zdCBiYWNraW5zdG9ja0VsdHMgPSBbXS5zbGljZS5jYWxsKGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ2JhY2tpbnN0b2NrJykpO1xyXG4gICAgYmFja2luc3RvY2tFbHRzLmZvckVhY2goYmFja2luc3RvY2tFbHQgPT4gbmV3IEJhY2tJblN0b2NrKGJhY2tpbnN0b2NrRWx0KSk7XHJcbn0pO1xyXG4iLCJpbXBvcnQgUG9wdXAgZnJvbSAnLi9fUG9wdXAnO1xyXG5pbXBvcnQgYWpheCBmcm9tIFwiLi4vZnVuY3Rpb25zL19hamF4XCI7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBCYWNrSW5TdG9ja1xyXG57XHJcbiAgICAvKipcclxuICAgICAqIEBwYXJhbSB7SFRNTEVsZW1lbnR9IGJ1dHRvblxyXG4gICAgICovXHJcbiAgICBjb25zdHJ1Y3RvcihidXR0b24pXHJcbiAgICB7XHJcbiAgICAgICAgdGhpcy5idXR0b24gPSBidXR0b247XHJcbiAgICAgICAgdGhpcy5zcGlubmVyID0gYnV0dG9uLnF1ZXJ5U2VsZWN0b3IoJy5mYXMuZmEtc3Bpbm5lcicpO1xyXG4gICAgICAgIHRoaXMuaXRlbUlkID0gYnV0dG9uLmRhdGFzZXQuaWQ7XHJcbiAgICAgICAgdGhpcy5jYWxsYmFja1RleHQgPSBidXR0b24uZGF0YXNldC5jYWxsYmFja1RleHQ7XHJcbiAgICAgICAgdGhpcy51cmwgPSBidXR0b24uZGF0YXNldC51cmw7XHJcbiAgICAgICAgdGhpcy5lbWFpbCA9IGJ1dHRvbi5kYXRhc2V0LmVtYWlsO1xyXG4gICAgICAgIHRoaXMucG9wdXBFbHQgPSB0aGlzLmJ1aWxkUG9wdXAoKTtcclxuICAgICAgICB0aGlzLnJlZ2lzdGVyZWQgPSBmYWxzZTtcclxuXHJcbiAgICAgICAgdGhpcy5idXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCB0aGlzLm9uQnV0dG9uQ2xpY2suYmluZCh0aGlzKSk7XHJcbiAgICB9XHJcblxyXG4gICAgYnVpbGRQb3B1cCgpXHJcbiAgICB7XHJcbiAgICAgICAgY29uc3QgcG9wdXBFbHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgICAgICBwb3B1cEVsdC5jbGFzc0xpc3QuYWRkKCdwb3B1cCcpO1xyXG4gICAgICAgIHBvcHVwRWx0LmlubmVySFRNTCA9IGBcclxuICAgICAgICAgICAgPGkgY2xhc3M9XCJmYXMgZmEtdGltZXMtY2lyY2xlXCI+PC9pPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwicG9wdXBfX2hlYWRpbmdcIj5cclxuICAgICAgICAgICAgICAgIFZvdHJlIGVtYWlsXHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwicG9wdXBfX3RleHRcIj5cclxuICAgICAgICAgICAgICAgIDxpbnB1dCBjbGFzcz1cImlucHV0LWVtYWlsIGZvcm0tY29udHJvbFwiIHR5cGU9XCJlbWFpbFwiPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cIm15LTMgdGV4dC1jZW50ZXJcIj5cclxuICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3M9XCJ2YWxpZC1lbWFpbCBidG4gYnRuLXN1Y2Nlc3MgZmxvYXQtc20tcmlnaHRcIj48aSBjbGFzcz1cImQtbm9uZSBmYXMgZmEtc3Bpbm5lclwiPjwvaT4gVmFsaWRlcjwvYnV0dG9uPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICBgO1xyXG4gICAgICAgIHJldHVybiBwb3B1cEVsdDtcclxuICAgIH1cclxuXHJcbiAgICBvbkJ1dHRvbkNsaWNrKClcclxuICAgIHtcclxuICAgICAgICBpZiAodGhpcy5yZWdpc3RlcmVkKSByZXR1cm47XHJcblxyXG4gICAgICAgIGlmICh0aGlzLmVtYWlsID09PSB1bmRlZmluZWQpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuYXNrRW1haWwoKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBpZiAodGhpcy5zcGlubmVyKSB0aGlzLnNwaW5uZXIuY2xhc3NMaXN0LnJlbW92ZSgnZC1ub25lJyk7XHJcbiAgICAgICAgICAgIGFqYXgoXHJcbiAgICAgICAgICAgICAgICB0aGlzLnVybCxcclxuICAgICAgICAgICAgICAgIHRoaXMuY2FsbGJhY2suYmluZCh0aGlzKSxcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICBtZXRob2Q6ICdQT1NUJyxcclxuICAgICAgICAgICAgICAgICAgICBkYXRhczoge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZDogdGhpcy5pdGVtSWQsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGVtYWlsOiB0aGlzLmVtYWlsXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICApO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBhc2tFbWFpbCgpXHJcbiAgICB7XHJcbiAgICAgICAgY29uc3QgYWN0aW9uQnV0dG9uID0ge1xyXG4gICAgICAgICAgICBlbGVtZW50OiB0aGlzLnBvcHVwRWx0LnF1ZXJ5U2VsZWN0b3IoJy52YWxpZC1lbWFpbCcpLFxyXG4gICAgICAgICAgICB1cmw6IHRoaXMudXJsLFxyXG4gICAgICAgICAgICBjYWxsYmFjazogdGhpcy5jYWxsYmFjay5iaW5kKHRoaXMpLFxyXG4gICAgICAgICAgICBkYXRhczoge1xyXG4gICAgICAgICAgICAgICAgaWQ6IHRoaXMuaXRlbUlkLFxyXG4gICAgICAgICAgICAgICAgZW1haWw6IHRoaXMucG9wdXBFbHQucXVlcnlTZWxlY3RvcignLmlucHV0LWVtYWlsJylcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgbmV3IFBvcHVwKHRoaXMucG9wdXBFbHQsIHtidXR0b25zOiBbYWN0aW9uQnV0dG9uXX0pO1xyXG4gICAgfVxyXG5cclxuICAgIGNhbGxiYWNrKHJlc3BvbnNlKVxyXG4gICAge1xyXG4gICAgICAgIGlmIChyZXNwb25zZS5zdWNjZXNzKSB7XHJcbiAgICAgICAgICAgIHRoaXMuYnV0dG9uLmlubmVyVGV4dCA9IHRoaXMuY2FsbGJhY2tUZXh0O1xyXG4gICAgICAgICAgICB0aGlzLnJlZ2lzdGVyZWQgPSB0cnVlO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IocmVzcG9uc2UuZXJyb3IpO1xyXG4gICAgICAgICAgICBpZiAodGhpcy5zcGlubmVyKSB0aGlzLnNwaW5uZXIuY2xhc3NMaXN0LmFkZCgnZC1ub25lJyk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59IiwiaW1wb3J0IGFqYXggZnJvbSBcIi4uL2Z1bmN0aW9ucy9fYWpheFwiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ2FydCB7XHJcbiAgICAvKipcclxuICAgICAqIEBwYXJhbSB7T2JqZWN0fSBvcHRpb25zXHJcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gW29wdGlvbnMuYnV0dG9uX2NsYXNzPWNhcnQtYnV0dG9uXSBDbGFzc2UgQ1NTIGRlcyBib3V0b25zIGQnYWpvdXQgYXUgcGFuaWVyXHJcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gW29wdGlvbnMubmF2Y2FydF9jbGFzcz1uYXZjYXJ0XSBDbGFzc2UgQ1NTIGR1IG1lbnUgcGFuaWVyXHJcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gW29wdGlvbnMubmF2Y2FydF9idXR0b25fY2xhc3M9bmF2Y2FydF9faG92ZXJdIENsYXNzZSBDU1MgZHUgYm91dG9uIGR1IG1lbnUgcGFuaWVyXHJcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gW29wdGlvbnMuc2hvcHBpbmdfYmFnX2NsYXNzPWNhcnQtaG92ZXJdIENsYXNzZSBDU1MgZHUgbWVudSBwYW5pZXJcclxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSBbb3B0aW9ucy5zaG9wcGluZ19iYWdfaXRlbV9jbGFzcz1jYXJ0LWhvdmVyX19pdGVtXSBDbGFzc2UgQ1NTIGRlcyBpdGVtcyBkdSBtZW51IHBhbmllclxyXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IFtvcHRpb25zLmNhcnRfcXVhbnRpdHlfY2xhc3M9bmF2Y2FydF0gQ2xhc3NlIENTUyBxdWFudGl0w6kgZGFucyBsZSBwYW5pZXJcclxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSBbb3B0aW9ucy5jYXJ0X3VybD0vcGFuaWVyL10gTGllbiB2ZXJzIGxlIHBhbmllclxyXG4gICAgICogQHBhcmFtIHtQb3B1cH0gW29wdGlvbnMucG9wdXA9bnVsbF0gcG9wdXBcclxuICAgICAqL1xyXG4gICAgY29uc3RydWN0b3Iob3B0aW9ucyA9IHt9KVxyXG4gICAge1xyXG4gICAgICAgIC8vU2V0dGluZ3NcclxuICAgICAgICB0aGlzLm9wdGlvbnMgPSBPYmplY3QuYXNzaWduKHtcclxuICAgICAgICAgICAgYnV0dG9uX2NsYXNzOiAnY2FydC1idXR0b24nLFxyXG4gICAgICAgICAgICBuYXZjYXJ0X2NsYXNzOiAnbmF2Y2FydCcsXHJcbiAgICAgICAgICAgIG5hdmNhcnRfYnV0dG9uX2NsYXNzOiAnbmF2Y2FydF9faG92ZXInLFxyXG4gICAgICAgICAgICBzaG9wcGluZ19iYWdfY2xhc3M6ICdjYXJ0LWhvdmVyJyxcclxuICAgICAgICAgICAgc2hvcHBpbmdfYmFnX2l0ZW1fY2xhc3M6ICdjYXJ0LWhvdmVyX19pdGVtJyxcclxuICAgICAgICAgICAgY2FydF9xdWFudGl0eV9jbGFzczogJ25hdmNhcnQnLFxyXG4gICAgICAgICAgICBjYXJ0X3VybDogJy9wYW5pZXIvJyxcclxuICAgICAgICAgICAgcG9wdXA6IG51bGwsXHJcbiAgICAgICAgfSwgb3B0aW9ucyk7XHJcbiAgICAgICAgdGhpcy5wcm9jZXNzaW5nID0gZmFsc2U7XHJcbiAgICAgICAgdGhpcy5jYXJ0Q29udGVudCA9IHt9O1xyXG4gICAgICAgIHRoaXMub25TYWxlcyA9IGZhbHNlO1xyXG4gICAgICAgIHRoaXMuZ2FJc0luaXRpYWxpemVkID0gZmFsc2U7XHJcblxyXG4gICAgICAgIC8vRE9NIGhhbmRsaW5nXHJcbiAgICAgICAgdGhpcy5idXR0b25zID0gW10uc2xpY2UuY2FsbChkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKHRoaXMub3B0aW9ucy5idXR0b25fY2xhc3MpKTtcclxuICAgICAgICB0aGlzLm5hdmNhcnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuJyt0aGlzLm9wdGlvbnMubmF2Y2FydF9jbGFzcyk7XHJcbiAgICAgICAgdGhpcy5uYXZjYXJ0VG9nZ2xlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLicrdGhpcy5vcHRpb25zLm5hdmNhcnRfYnV0dG9uX2NsYXNzKTtcclxuICAgICAgICB0aGlzLnNob3BwaW5nQmFnID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLicrdGhpcy5vcHRpb25zLnNob3BwaW5nX2JhZ19jbGFzcyk7XHJcbiAgICAgICAgdGhpcy5zaG9wcGluZ0JhZ1F1YW50aXR5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLicrdGhpcy5vcHRpb25zLmNhcnRfcXVhbnRpdHlfY2xhc3MpO1xyXG4gICAgICAgIHRoaXMuc2hvcHBpbmdCYWdJdGVtQnV0dG9ucyA9IFtdLnNsaWNlLmNhbGwoZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLicrdGhpcy5vcHRpb25zLnNob3BwaW5nX2JhZ19pdGVtX2NsYXNzKycgLnJlbW92ZS1pdGVtJykpO1xyXG5cclxuICAgICAgICAvL0V2ZW50c1xyXG4gICAgICAgIHRoaXMubmF2Y2FydFRvZ2dsZS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHRoaXMub25OYXZjYXJ0VG9nZ2xlQ2xpY2suYmluZCh0aGlzKSk7XHJcbiAgICAgICAgdGhpcy5idXR0b25zLmZvckVhY2goYnV0dG9uID0+IHtcclxuICAgICAgICAgICAgYnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgdGhpcy5vbkJ1dHRvbkNsaWNrLmJpbmQodGhpcywgYnV0dG9uKSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgdGhpcy5zaG9wcGluZ0JhZ0l0ZW1CdXR0b25zLmZvckVhY2goYnV0dG9uID0+IHtcclxuICAgICAgICAgICAgYnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgdGhpcy5vblNob3BwaW5nQmFnQnV0dG9uQ2xpY2suYmluZCh0aGlzLCBidXR0b24pKTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBvbk5hdmNhcnRUb2dnbGVDbGljayhlKVxyXG4gICAge1xyXG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgIH1cclxuXHJcbiAgICBvbkJ1dHRvbkNsaWNrKGJ1dHRvbilcclxuICAgIHtcclxuICAgICAgICBpZiAodGhpcy5wcm9jZXNzaW5nKSB7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5wcm9jZXNzaW5nID0gdHJ1ZTtcclxuICAgICAgICBsZXQgc3Bpbm5lciA9IGJ1dHRvbi5xdWVyeVNlbGVjdG9yKCcuZmEtc3Bpbm5lcicpO1xyXG4gICAgICAgIHNwaW5uZXIuY2xhc3NMaXN0LnJlbW92ZSgnaGlkZGVuJyk7XHJcbiAgICAgICAgbGV0IGFkZGVkID0gYnV0dG9uLmRhdGFzZXQuYWRkZWQgIT09IHVuZGVmaW5lZDtcclxuICAgICAgICBsZXQgdXJsID0gYWRkZWQgPyBidXR0b24uZGF0YXNldC5yZW1vdmVfaXRlbV91cmwgOiBidXR0b24uZGF0YXNldC5hZGRfaXRlbV91cmw7XHJcbiAgICAgICAgYWpheCh1cmwsIChyZXNwb25zZSkgPT4ge1xyXG4gICAgICAgICAgICBzcGlubmVyLmNsYXNzTGlzdC5hZGQoJ2hpZGRlbicpO1xyXG4gICAgICAgICAgICB0aGlzLnNldEJ1dHRvbk1vZGUoYnV0dG9uLCBhZGRlZCk7XHJcbiAgICAgICAgICAgIHRoaXMub25TYWxlcyA9IHJlc3BvbnNlLm9uU2FsZXMgPT09IHRydWU7XHJcbiAgICAgICAgICAgIHRoaXMudXBkYXRlQ2FydChyZXNwb25zZS5jYXJ0KTtcclxuICAgICAgICAgICAgYnV0dG9uLmJsdXIoKTtcclxuICAgICAgICAgICAgaWYgKHRoaXMub3B0aW9ucy5wb3B1cCAmJiAhYWRkZWQpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMub3B0aW9ucy5wb3B1cC5zaG93KCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgdGhpcy5wcm9jZXNzaW5nID0gZmFsc2U7XHJcbiAgICAgICAgICAgIHRoaXMuYW5hbHl0aWNzKCFhZGRlZCwgSlNPTi5wYXJzZShyZXNwb25zZS5pdGVtKSk7XHJcbiAgICAgICAgfSwge21ldGhvZDogJ1BPU1QnfSk7XHJcbiAgICB9XHJcblxyXG4gICAgb25TaG9wcGluZ0JhZ0J1dHRvbkNsaWNrKGJ1dHRvbilcclxuICAgIHtcclxuICAgICAgICBpZiAodGhpcy5wcm9jZXNzaW5nKSB7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5wcm9jZXNzaW5nID0gdHJ1ZTtcclxuICAgICAgICBidXR0b24uY2xhc3NMaXN0LnJlbW92ZSgnZmFyJyk7XHJcbiAgICAgICAgYnV0dG9uLmNsYXNzTGlzdC5yZW1vdmUoJ2ZhLXdpbmRvdy1jbG9zZScpO1xyXG4gICAgICAgIGJ1dHRvbi5jbGFzc0xpc3QuYWRkKCdmYXMnKTtcclxuICAgICAgICBidXR0b24uY2xhc3NMaXN0LmFkZCgnZmEtc3Bpbm5lcicpO1xyXG4gICAgICAgIGxldCB1cmwgPSBidXR0b24uZGF0YXNldC5yZW1vdmVfaXRlbV91cmw7XHJcbiAgICAgICAgbGV0IGFkZFRvQ2FydEJ1dHRvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjYXJ0LWJ1dHRvbi0nK2J1dHRvbi5kYXRhc2V0Lml0ZW1faWQpO1xyXG4gICAgICAgIGFqYXgodXJsLCAocmVzcG9uc2UpID0+IHtcclxuICAgICAgICAgICAgYnV0dG9uLmNsYXNzTGlzdC5yZW1vdmUoJ2ZhcycpO1xyXG4gICAgICAgICAgICBidXR0b24uY2xhc3NMaXN0LnJlbW92ZSgnZmEtc3Bpbm5lcicpO1xyXG4gICAgICAgICAgICBidXR0b24uY2xhc3NMaXN0LmFkZCgnZmFyJyk7XHJcbiAgICAgICAgICAgIGJ1dHRvbi5jbGFzc0xpc3QuYWRkKCdmYS13aW5kb3ctY2xvc2UnKTtcclxuICAgICAgICAgICAgaWYgKGFkZFRvQ2FydEJ1dHRvbiBpbnN0YW5jZW9mIEhUTUxFbGVtZW50KSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnNldEJ1dHRvbk1vZGUoYWRkVG9DYXJ0QnV0dG9uLCB0cnVlKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB0aGlzLm9uU2FsZXMgPSByZXNwb25zZS5vblNhbGVzID09PSB0cnVlO1xyXG4gICAgICAgICAgICB0aGlzLnVwZGF0ZUNhcnQocmVzcG9uc2UuY2FydCk7XHJcbiAgICAgICAgICAgIHRoaXMucHJvY2Vzc2luZyA9IGZhbHNlO1xyXG4gICAgICAgIH0sIHttZXRob2Q6ICdQT1NUJ30pO1xyXG4gICAgfVxyXG5cclxuICAgIHVwZGF0ZUNhcnQoanNvblJlc3BvbnNlKVxyXG4gICAge1xyXG4gICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgIHRoaXMuY2FydENvbnRlbnQgPSBKU09OLnBhcnNlKGpzb25SZXNwb25zZSk7XHJcbiAgICAgICAgICAgIGlmICh0eXBlb2YgdGhpcy5jYXJ0Q29udGVudCAhPT0gJ29iamVjdCcpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuY2FydENvbnRlbnQgPSB7fTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0gY2F0Y2ggKGUpIHtcclxuICAgICAgICAgICAgY29uc29sZS5lcnJvcignRm9ybWF0IEpTT04gcGFuaWVyIG5vbiB2YWxpZGUnKTtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdGhpcy5zaG9wcGluZ0JhZy5pbm5lckhUTUwgPSAnJztcclxuXHJcbiAgICAgICAgbGV0IGNvdW50ID0gMDtcclxuICAgICAgICBsZXQgdG90YWwgPSAwO1xyXG4gICAgICAgIGlmICh0aGlzLm9wdGlvbnMucG9wdXApIHtcclxuICAgICAgICAgICAgdGhpcy5vcHRpb25zLnBvcHVwLnJlc2V0SW1wb3J0KCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIE9iamVjdC52YWx1ZXModGhpcy5jYXJ0Q29udGVudCkuZm9yRWFjaChpdGVtID0+IHtcclxuICAgICAgICAgICAgbGV0IGl0ZW1MaXN0RWx0ID0gdGhpcy5jcmVhdGVTaG9wcGluZ0JhZ0l0ZW0oaXRlbSk7XHJcbiAgICAgICAgICAgIGxldCBwcmljZSA9IHRoaXMub25TYWxlcyA/IGl0ZW0uZGlzY291bnRQcmljZSA6IGl0ZW0ucHJpY2U7XHJcbiAgICAgICAgICAgIGxldCBxdWFudGl0eSA9IHBhcnNlSW50KGl0ZW0ucXVhbnRpdHkpO1xyXG4gICAgICAgICAgICB0b3RhbCArPSBxdWFudGl0eSAqIHBhcnNlRmxvYXQocHJpY2UpO1xyXG4gICAgICAgICAgICB0aGlzLnNob3BwaW5nQmFnLmFwcGVuZENoaWxkKGl0ZW1MaXN0RWx0KTtcclxuICAgICAgICAgICAgY291bnQgKz0gaXRlbS5xdWFudGl0eTtcclxuICAgICAgICB9KTtcclxuICAgICAgICBsZXQgc2hpcHBpbmdGZWVMaXN0RWx0ID0gdGhpcy5jcmVhdGVTaG9wcGluZ0JhZ0l0ZW0oe2lzU2hpcHBpbmdGZWU6IHRydWUsIG5hbWU6ICdGcmFpcyBkZSBwb3J0J30pO1xyXG4gICAgICAgIHRoaXMuc2hvcHBpbmdCYWcuYXBwZW5kQ2hpbGQoc2hpcHBpbmdGZWVMaXN0RWx0KTtcclxuICAgICAgICBpZiAodG90YWwgPiAwKSB7XHJcbiAgICAgICAgICAgIGxldCBzaG9wcGluZ0JhZ1RvdGFsID0gdGhpcy5jcmVhdGVTaG9wcGluZ0JhZ1RvdGFsKHRvdGFsKTtcclxuICAgICAgICAgICAgdGhpcy5zaG9wcGluZ0JhZy5hcHBlbmRDaGlsZChzaG9wcGluZ0JhZ1RvdGFsKTtcclxuICAgICAgICAgICAgbGV0IGNhcnRMaW5rRWx0ID0gdGhpcy5jcmVhdGVFbGVtZW50V2l0aENsYXNzZXMoJ2RpdicsIHRoaXMub3B0aW9ucy5zaG9wcGluZ19iYWdfY2xhc3MrJ19fbGluaycpO1xyXG4gICAgICAgICAgICBsZXQgY2FydExpbmsgPSB0aGlzLmNyZWF0ZUVsZW1lbnRXaXRoQ2xhc3NlcygnYScsIFsnYnRuJywgJ2J0bi1zbScsICdidC1idG4tLXByaW1hcnknLCAndGV4dC1saWdodCddKTtcclxuICAgICAgICAgICAgY2FydExpbmsuaHJlZiA9IHRoaXMub3B0aW9ucy5jYXJ0X3VybDtcclxuICAgICAgICAgICAgY2FydExpbmsuaW5uZXJUZXh0ID0gdGhpcy5zaG9wcGluZ0JhZy5kYXRhc2V0LmNhcnRfbGlua190ZXh0O1xyXG4gICAgICAgICAgICBjYXJ0TGlua0VsdC5hcHBlbmRDaGlsZChjYXJ0TGluayk7XHJcbiAgICAgICAgICAgIHRoaXMuc2hvcHBpbmdCYWcuYXBwZW5kQ2hpbGQoY2FydExpbmtFbHQpO1xyXG4gICAgICAgICAgICB0aGlzLm5hdmNhcnQuY2xhc3NMaXN0LnJlbW92ZSgnZW1wdHknKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICB0aGlzLm5hdmNhcnQuY2xhc3NMaXN0LmFkZCgnZW1wdHknKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5zaG9wcGluZ0JhZ1F1YW50aXR5LmRhdGFzZXQucXVhbnRpdHkgPSBjb3VudDtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIEBwYXJhbSB7T2JqZWN0fSBpdGVtXHJcbiAgICAgKiBAcmV0dXJuIEhUTUxFbGVtZW50XHJcbiAgICAgKi9cclxuICAgIGNyZWF0ZVNob3BwaW5nQmFnSXRlbShpdGVtKVxyXG4gICAge1xyXG4gICAgICAgIGxldCBpdGVtQ29udGFpbmVyID0gdGhpcy5jcmVhdGVFbGVtZW50V2l0aENsYXNzZXMoJ2RpdicsIHRoaXMub3B0aW9ucy5zaG9wcGluZ19iYWdfaXRlbV9jbGFzcyk7XHJcbiAgICAgICAgaWYgKGl0ZW0uaXNTaGlwcGluZ0ZlZSkge1xyXG4gICAgICAgICAgICBsZXQgc3BhbiA9IHRoaXMuY3JlYXRlRWxlbWVudFdpdGhDbGFzc2VzKCdzcGFuJywgdGhpcy5vcHRpb25zLnNob3BwaW5nX2JhZ19pdGVtX2NsYXNzKydfX2xpbmsnKTtcclxuICAgICAgICAgICAgbGV0IGl0ZW1JbWFnZSA9IHRoaXMuY3JlYXRlRWxlbWVudFdpdGhDbGFzc2VzKCdpJywgWydmYXMnLCAnZmEtc2hpcHBpbmctZmFzdCddKTtcclxuICAgICAgICAgICAgc3Bhbi5hcHBlbmRDaGlsZChpdGVtSW1hZ2UpO1xyXG4gICAgICAgICAgICBzcGFuLmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKCcgJytpdGVtLm5hbWUpKTtcclxuICAgICAgICAgICAgaXRlbUNvbnRhaW5lci5hcHBlbmRDaGlsZChzcGFuKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBsZXQgaXRlbUltYWdlID0gdGhpcy5jcmVhdGVFbGVtZW50V2l0aENsYXNzZXMoJ2ltZycpO1xyXG4gICAgICAgICAgICBpdGVtSW1hZ2Uuc3JjID0gaXRlbS5pbWFnZXNbMF0uY2FjaGVQYXRoO1xyXG4gICAgICAgICAgICBpdGVtSW1hZ2UuYWx0ID0gaXRlbS5pbWFnZXNbMF0uYWx0O1xyXG5cclxuICAgICAgICAgICAgbGV0IGl0ZW1MaW5rID0gdGhpcy5jcmVhdGVFbGVtZW50V2l0aENsYXNzZXMoJ2EnLCB0aGlzLm9wdGlvbnMuc2hvcHBpbmdfYmFnX2l0ZW1fY2xhc3MrJ19fbGluaycpO1xyXG4gICAgICAgICAgICBpdGVtTGluay5ocmVmID0gaXRlbS5saW5rO1xyXG4gICAgICAgICAgICBpdGVtTGluay5zZXRBdHRyaWJ1dGUoJ3RpdGxlJywgaXRlbS5uYW1lKTtcclxuICAgICAgICAgICAgaXRlbUxpbmsuYXBwZW5kQ2hpbGQoaXRlbUltYWdlKTtcclxuICAgICAgICAgICAgaXRlbUxpbmsuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoJyAnK2l0ZW0ubmFtZSkpO1xyXG4gICAgICAgICAgICBpdGVtQ29udGFpbmVyLmFwcGVuZENoaWxkKGl0ZW1MaW5rKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgbGV0IGl0ZW1QcmljZSA9IHRoaXMuY3JlYXRlRWxlbWVudFdpdGhDbGFzc2VzKCdzcGFuJywgdGhpcy5vcHRpb25zLnNob3BwaW5nX2JhZ19pdGVtX2NsYXNzKydfX3ByaWNlJyk7XHJcbiAgICAgICAgbGV0IHByaWNlID0gaXRlbS5pc1NoaXBwaW5nRmVlID8gMCA6IHRoaXMub25TYWxlcyA/IGl0ZW0uZGlzY291bnRQcmljZSA6IGl0ZW0ucHJpY2U7XHJcbiAgICAgICAgaXRlbVByaWNlLmlubmVyVGV4dCA9IG5ldyBJbnRsLk51bWJlckZvcm1hdCgnZnItRlInLCB7c3R5bGU6ICdjdXJyZW5jeScsIGN1cnJlbmN5OiAnRVVSJ30pLmZvcm1hdChwcmljZSk7XHJcbiAgICAgICAgbGV0IGl0ZW1SZW1vdmUgPSB0aGlzLmNyZWF0ZUVsZW1lbnRXaXRoQ2xhc3NlcygnaScsIFsncmVtb3ZlLWl0ZW0nLCAnZmFyJywgJ2ZhLXdpbmRvdy1jbG9zZSddKTtcclxuICAgICAgICBpdGVtUmVtb3ZlLnNldEF0dHJpYnV0ZSgnZGF0YS1pdGVtX2lkJywgaXRlbS5pZCk7XHJcbiAgICAgICAgaXRlbVJlbW92ZS5zZXRBdHRyaWJ1dGUoJ2RhdGEtcmVtb3ZlX2l0ZW1fdXJsJywgaXRlbS5yZW1vdmVMaW5rKTtcclxuICAgICAgICBpdGVtUmVtb3ZlLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgdGhpcy5vblNob3BwaW5nQmFnQnV0dG9uQ2xpY2suYmluZCh0aGlzLCBpdGVtUmVtb3ZlKSk7XHJcblxyXG4gICAgICAgIGl0ZW1Db250YWluZXIuYXBwZW5kQ2hpbGQoaXRlbVByaWNlKTtcclxuICAgICAgICBpZiAodGhpcy5vcHRpb25zLnBvcHVwKSB7XHJcbiAgICAgICAgICAgIGxldCBjbG9uZWRJdGVtID0gaXRlbUNvbnRhaW5lci5jbG9uZU5vZGUodHJ1ZSk7XHJcbiAgICAgICAgICAgIGlmICghaXRlbS5pc1NoaXBwaW5nRmVlKSB7XHJcbiAgICAgICAgICAgICAgICBsZXQgY2xvbmVkSXRlbVJlbW92ZSA9IGl0ZW1SZW1vdmUuY2xvbmVOb2RlKHRydWUpO1xyXG4gICAgICAgICAgICAgICAgY2xvbmVkSXRlbVJlbW92ZS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHRoaXMub25TaG9wcGluZ0JhZ0J1dHRvbkNsaWNrLmJpbmQodGhpcywgY2xvbmVkSXRlbVJlbW92ZSkpO1xyXG4gICAgICAgICAgICAgICAgY2xvbmVkSXRlbS5hcHBlbmRDaGlsZChjbG9uZWRJdGVtUmVtb3ZlKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB0aGlzLm9wdGlvbnMucG9wdXAuaW1wb3J0KGNsb25lZEl0ZW0pO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoIWl0ZW0uaXNTaGlwcGluZ0ZlZSkge1xyXG4gICAgICAgICAgICBpdGVtQ29udGFpbmVyLmFwcGVuZENoaWxkKGl0ZW1SZW1vdmUpO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gaXRlbUNvbnRhaW5lcjtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIEBwYXJhbSB7ZmxvYXR9IHRvdGFsXHJcbiAgICAgKiBAcmV0dXJuIEhUTUxFbGVtZW50XHJcbiAgICAgKi9cclxuICAgIGNyZWF0ZVNob3BwaW5nQmFnVG90YWwodG90YWwpXHJcbiAgICB7XHJcbiAgICAgICAgbGV0IHRvdGFsQ29udGFpbmVyID0gdGhpcy5jcmVhdGVFbGVtZW50V2l0aENsYXNzZXMoJ2RpdicsIHRoaXMub3B0aW9ucy5zaG9wcGluZ19iYWdfY2xhc3MrJ19fdG90YWwnKTtcclxuICAgICAgICBsZXQgdG90YWxIZWFkaW5nID0gdGhpcy5jcmVhdGVFbGVtZW50V2l0aENsYXNzZXMoJ3NwYW4nKTtcclxuICAgICAgICB0b3RhbEhlYWRpbmcuaW5uZXJUZXh0ID0gJ1RvdGFsOic7XHJcbiAgICAgICAgbGV0IHRvdGFsQW1vdW50ID0gdGhpcy5jcmVhdGVFbGVtZW50V2l0aENsYXNzZXMoJ3NwYW4nLCB0aGlzLm9wdGlvbnMuc2hvcHBpbmdfYmFnX2NsYXNzKydfX3RvdGFsX19hbW91bnQnKTtcclxuICAgICAgICB0b3RhbEFtb3VudC5pbm5lclRleHQgPSBuZXcgSW50bC5OdW1iZXJGb3JtYXQoJ2ZyLUZSJywge3N0eWxlOiAnY3VycmVuY3knLCBjdXJyZW5jeTogJ0VVUid9KS5mb3JtYXQodG90YWwpO1xyXG4gICAgICAgIHRvdGFsQ29udGFpbmVyLmFwcGVuZENoaWxkKHRvdGFsSGVhZGluZyk7XHJcbiAgICAgICAgdG90YWxDb250YWluZXIuYXBwZW5kQ2hpbGQodG90YWxBbW91bnQpO1xyXG4gICAgICAgIHJldHVybiB0b3RhbENvbnRhaW5lcjtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSB0YWdcclxuICAgICAqIEBwYXJhbSB7c3RyaW5nfGFycmF5fSBjbGFzc2VzXHJcbiAgICAgKiBAcmV0dXJuIEhUTUxFbGVtZW50XHJcbiAgICAgKi9cclxuICAgIGNyZWF0ZUVsZW1lbnRXaXRoQ2xhc3Nlcyh0YWcsIGNsYXNzZXMgPSBbXSlcclxuICAgIHtcclxuICAgICAgICBpZiAoIUFycmF5LmlzQXJyYXkoY2xhc3NlcykpIHtcclxuICAgICAgICAgICAgY2xhc3NlcyA9IFtjbGFzc2VzXTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGxldCBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCh0YWcpO1xyXG4gICAgICAgIGZvciAobGV0IGNsYXNzTmFtZSBvZiBjbGFzc2VzKSB7XHJcbiAgICAgICAgICAgIGVsZW1lbnQuY2xhc3NMaXN0LmFkZChjbGFzc05hbWUpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuIGVsZW1lbnQ7XHJcbiAgICB9XHJcblxyXG4gICAgc2V0QnV0dG9uTW9kZShidXR0b24sIGFkZGVkKVxyXG4gICAge1xyXG4gICAgICAgIGxldCBhZGRUZXh0ID0gYnV0dG9uLnF1ZXJ5U2VsZWN0b3IoJy5hZGQtaXRlbScpO1xyXG4gICAgICAgIGxldCByZW1vdmVUZXh0ID0gYnV0dG9uLnF1ZXJ5U2VsZWN0b3IoJy5yZW1vdmUtaXRlbScpO1xyXG4gICAgICAgIGlmIChhZGRlZCkge1xyXG4gICAgICAgICAgICBhZGRUZXh0LmNsYXNzTGlzdC5yZW1vdmUoJ2hpZGRlbicpO1xyXG4gICAgICAgICAgICByZW1vdmVUZXh0LmNsYXNzTGlzdC5hZGQoJ2hpZGRlbicpO1xyXG4gICAgICAgICAgICBidXR0b24ucmVtb3ZlQXR0cmlidXRlKCdkYXRhLWFkZGVkJyk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgYWRkVGV4dC5jbGFzc0xpc3QuYWRkKCdoaWRkZW4nKTtcclxuICAgICAgICAgICAgcmVtb3ZlVGV4dC5jbGFzc0xpc3QucmVtb3ZlKCdoaWRkZW4nKTtcclxuICAgICAgICAgICAgYnV0dG9uLnNldEF0dHJpYnV0ZSgnZGF0YS1hZGRlZCcsICcnKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgYW5hbHl0aWNzKGFkZCwgaXRlbSlcclxuICAgIHtcclxuICAgICAgICBpZiAoIXRoaXMuZ2FJc0luaXRpYWxpemVkKSB7XHJcbiAgICAgICAgICAgIGdhKFwiY3JlYXRlXCIsIFwiVUEtWFhYWFgtWVwiKTtcclxuICAgICAgICAgICAgZ2EoXCJyZXF1aXJlXCIsIFwiZWNcIik7XHJcbiAgICAgICAgICAgIHRoaXMuZ2FJc0luaXRpYWxpemVkID0gdHJ1ZTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGdhKCdlYzphZGRQcm9kdWN0Jywge1xyXG4gICAgICAgICAgICAnaWQnOiBpdGVtLmlkLFxyXG4gICAgICAgICAgICAnbmFtZSc6IGl0ZW0ubmFtZSxcclxuICAgICAgICAgICAgJ2NhdGVnb3J5JzogaXRlbS5jYXRlZ29yeS5zbHVnLFxyXG4gICAgICAgICAgICAncHJpY2UnOiBpdGVtLnByaWNlLFxyXG4gICAgICAgICAgICAncXVhbnRpdHknOiAxLFxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIGdhKCdlYzpzZXRBY3Rpb24nLCBhZGQgPyAnYWRkJyA6ICdyZW1vdmUnKTtcclxuICAgICAgICBnYSgnc2VuZCcsICdldmVudCcsICdVWCcsICdjbGljaycsICdhZGQgdG8gY2FydCcpOyAgICAgLy8gU2VuZCBkYXRhIHVzaW5nIGFuIGV2ZW50LlxyXG4gICAgfVxyXG59IiwiZXhwb3J0IGRlZmF1bHQgY2xhc3MgTGF6eWxvYWRlciB7XHJcbiAgICBjb25zdHJ1Y3RvcigpXHJcbiAgICB7XHJcbiAgICAgICAgdGhpcy5sYXp5SW1hZ2VzID0gW10uc2xpY2UuY2FsbChkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCdsYXp5bG9hZCcpKTtcclxuICAgICAgICBpZiAoXCJJbnRlcnNlY3Rpb25PYnNlcnZlclwiIGluIHdpbmRvdykge1xyXG4gICAgICAgICAgICB0aGlzLm9ic2VydmUoKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICB0aGlzLmZhbGxCYWNrKCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogVXNlIHRoZSBvYnNlcnZlciB0byBsb2FkIGxhenkgaW1hZ2VzIHdoZW4gdmlld3BvcnQgaW4gcmFuZ2VcclxuICAgICAqL1xyXG4gICAgb2JzZXJ2ZSgpXHJcbiAgICB7XHJcbiAgICAgICAgbGV0IGxhenlJbWFnZU9ic2VydmVyID0gbmV3IEludGVyc2VjdGlvbk9ic2VydmVyKChlbnRyaWVzKSA9PiB7XHJcbiAgICAgICAgICAgIGVudHJpZXMuZm9yRWFjaCgoZW50cnkpID0+IHtcclxuICAgICAgICAgICAgICAgIGxldCBsYXp5SW1hZ2UgPSBlbnRyeS50YXJnZXQ7XHJcbiAgICAgICAgICAgICAgICBpZiAoZW50cnkuaXNJbnRlcnNlY3RpbmcgJiYgbGF6eUltYWdlIGluc3RhbmNlb2YgSFRNTEltYWdlRWxlbWVudCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMubG9hZChsYXp5SW1hZ2UpO1xyXG4gICAgICAgICAgICAgICAgICAgIGxhenlJbWFnZU9ic2VydmVyLnVub2JzZXJ2ZShsYXp5SW1hZ2UpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgdGhpcy5sYXp5SW1hZ2VzLmZvckVhY2goKGltYWdlKSA9PiB7XHJcbiAgICAgICAgICAgIGxhenlJbWFnZU9ic2VydmVyLm9ic2VydmUoaW1hZ2UpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogSWYgaW50ZXJzZWN0aW9uT2JzZXJ2ZXIgbm90IHN1cHBvcnRlZFxyXG4gICAgICovXHJcbiAgICBmYWxsQmFjaygpXHJcbiAgICB7XHJcbiAgICAgICAgdGhpcy5sYXp5SW1hZ2VzLmZvckVhY2goKGxhenlJbWFnZSkgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLmxvYWQobGF6eUltYWdlKTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIExvYWQgdGhlIGxhenkgaW1hZ2VcclxuICAgICAqIEBwYXJhbSB7SFRNTEltYWdlRWxlbWVudH0gbGF6eUltYWdlXHJcbiAgICAgKi9cclxuICAgIGxvYWQobGF6eUltYWdlKVxyXG4gICAge1xyXG4gICAgICAgIGxhenlJbWFnZS5hZGRFdmVudExpc3RlbmVyKCdsb2FkJywgKCkgPT4ge1xyXG4gICAgICAgICAgICBsYXp5SW1hZ2UuY2xhc3NMaXN0LnJlbW92ZSgnbGF6eWxvYWQnKTtcclxuICAgICAgICAgICAgaWYgKGxhenlJbWFnZS5jbGFzc0xpc3QubGVuZ3RoID09PSAwKSB7XHJcbiAgICAgICAgICAgICAgICBsYXp5SW1hZ2UucmVtb3ZlQXR0cmlidXRlKCdjbGFzcycpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgbGF6eUltYWdlLnNyYyA9IGxhenlJbWFnZS5kYXRhc2V0LnNyYztcclxuICAgIH1cclxufSIsImV4cG9ydCBkZWZhdWx0IGNsYXNzIE5hdmlnYXRpb25cclxue1xyXG4gICAgLyoqXHJcbiAgICAgKiBAcGFyYW0ge09iamVjdH0gb3B0aW9uc1xyXG4gICAgICogQHBhcmFtIHtIVE1MRWxlbWVudH0gb3B0aW9ucy50b2dnbGVCdXR0b25cclxuICAgICAqIEBwYXJhbSB7SFRNTEVsZW1lbnR9IG9wdGlvbnMubmF2Q29udGVudFxyXG4gICAgICogQHBhcmFtIHtTdHJpbmd9IFtvcHRpb25zLnNob3dDbGFzcz1zaG93XVxyXG4gICAgICogQHBhcmFtIHtCb29sZWFufSBbb3B0aW9ucy5jb2xsYXBzZU9uT3V0ZXJDbGljaz10cnVlXVxyXG4gICAgICovXHJcbiAgICBjb25zdHJ1Y3RvcihvcHRpb25zID0ge30pXHJcbiAgICB7XHJcbiAgICAgICAgdGhpcy5vcHRpb25zID0gT2JqZWN0LmFzc2lnbih7XHJcbiAgICAgICAgICAgIHRvZ2dsZUJ1dHRvbjogbnVsbCxcclxuICAgICAgICAgICAgbmF2Q29udGVudDogbnVsbCxcclxuICAgICAgICAgICAgc2hvd0NsYXNzOiAnc2hvdycsXHJcbiAgICAgICAgICAgIGNvbGxhcHNlT25PdXRlckNsaWNrOiB0cnVlLFxyXG4gICAgICAgIH0sIG9wdGlvbnMpO1xyXG5cclxuICAgICAgICBpZiAoISh0aGlzLm9wdGlvbnMudG9nZ2xlQnV0dG9uIGluc3RhbmNlb2YgSFRNTEVsZW1lbnQgJiYgdGhpcy5vcHRpb25zLm5hdkNvbnRlbnQgaW5zdGFuY2VvZiBIVE1MRWxlbWVudCkpIHtcclxuICAgICAgICAgICAgY29uc29sZS5lcnJvcignUGFyYW3DqHRyZXMgaW5jb3JyZWN0cycpO1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB0aGlzLm9wdGlvbnMudG9nZ2xlQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgdGhpcy5vblRvZ2dsZUJ1dHRvbkNsaWNrLmJpbmQodGhpcykpO1xyXG4gICAgICAgIGlmICh0aGlzLm9wdGlvbnMuY29sbGFwc2VPbk91dGVyQ2xpY2spIHtcclxuICAgICAgICAgICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCB0aGlzLm9uT3V0ZXJDbGljay5iaW5kKHRoaXMpKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgb25Ub2dnbGVCdXR0b25DbGljaygpXHJcbiAgICB7XHJcbiAgICAgICAgaWYgKHRoaXMub3B0aW9ucy5uYXZDb250ZW50LmNsYXNzTGlzdC5jb250YWlucyh0aGlzLm9wdGlvbnMuc2hvd0NsYXNzKSkge1xyXG4gICAgICAgICAgICB0aGlzLm9wdGlvbnMubmF2Q29udGVudC5jbGFzc0xpc3QucmVtb3ZlKHRoaXMub3B0aW9ucy5zaG93Q2xhc3MpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHRoaXMub3B0aW9ucy5uYXZDb250ZW50LmNsYXNzTGlzdC5hZGQodGhpcy5vcHRpb25zLnNob3dDbGFzcyk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIG9uT3V0ZXJDbGljayhlKVxyXG4gICAge1xyXG4gICAgICAgIGxldCBlbGVtZW50ID0gZS50YXJnZXQ7XHJcbiAgICAgICAgbGV0IGlzVG9nZ2xlRWx0ID0gZWxlbWVudCA9PT0gdGhpcy5vcHRpb25zLnRvZ2dsZUJ1dHRvbjtcclxuICAgICAgICB3aGlsZShlbGVtZW50ICYmICFpc1RvZ2dsZUVsdCkge1xyXG4gICAgICAgICAgICBlbGVtZW50ID0gZWxlbWVudC5wYXJlbnROb2RlO1xyXG4gICAgICAgICAgICBpc1RvZ2dsZUVsdCA9IGVsZW1lbnQgPT09IHRoaXMub3B0aW9ucy50b2dnbGVCdXR0b247XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICghaXNUb2dnbGVFbHQpIHtcclxuICAgICAgICAgICAgdGhpcy5vcHRpb25zLm5hdkNvbnRlbnQuY2xhc3NMaXN0LnJlbW92ZSh0aGlzLm9wdGlvbnMuc2hvd0NsYXNzKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn0iLCJleHBvcnQgZGVmYXVsdCBjbGFzcyBTZWFyY2hcclxue1xyXG4gICAgY29uc3RydWN0b3IoKVxyXG4gICAge1xyXG4gICAgICAgIHRoaXMuc2VhcmNoRm9ybSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdzZWFyY2gtZm9ybScpO1xyXG4gICAgICAgIHRoaXMuc2VhcmNoVHJpZ2dlciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdzZWFyY2gtdHJpZ2dlcicpO1xyXG4gICAgICAgIHRoaXMuc2VhcmNoSW5wdXQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnc2VhcmNoLWlucHV0Jyk7XHJcbiAgICAgICAgdGhpcy5zZWFyY2hCdXR0b24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnc2VhcmNoLWJ1dHRvbicpO1xyXG5cclxuICAgICAgICB0aGlzLnNlYXJjaFRyaWdnZXIuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCB0aGlzLm9uU2VhcmNoVHJpZ2dlckNsaWNrLmJpbmQodGhpcykpO1xyXG4gICAgICAgIGRvY3VtZW50LmJvZHkuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCB0aGlzLm9uT3V0ZXJDbGljay5iaW5kKHRoaXMpKTtcclxuICAgIH1cclxuXHJcbiAgICBvblNlYXJjaFRyaWdnZXJDbGljaygpXHJcbiAgICB7XHJcbiAgICAgICAgY29uc3QgaGFzU2VhcmNoUmVxdWVzdCA9IHRoaXMuc2VhcmNoSW5wdXQudmFsdWUubGVuZ3RoID4gMDtcclxuICAgICAgICBpZiAodGhpcy5zZWFyY2hGb3JtLmNsYXNzTGlzdC5jb250YWlucygnZXhwYW5kZWQnKSkge1xyXG4gICAgICAgICAgICBpZiAoaGFzU2VhcmNoUmVxdWVzdCkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5zZWFyY2hCdXR0b24uZGlzcGF0Y2hFdmVudChuZXcgTW91c2VFdmVudCgnY2xpY2snKSk7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnNlYXJjaEZvcm0uY2xhc3NMaXN0LnJlbW92ZSgnZXhwYW5kZWQnKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHRoaXMuc2VhcmNoRm9ybS5jbGFzc0xpc3QuYWRkKCdleHBhbmRlZCcpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBvbk91dGVyQ2xpY2soZSlcclxuICAgIHtcclxuICAgICAgICBpZiAoZS50YXJnZXQgPT09IHRoaXMuc2VhcmNoVHJpZ2dlciB8fCBlLnRhcmdldCA9PT0gdGhpcy5zZWFyY2hJbnB1dCB8fCBlLnRhcmdldCA9PT0gdGhpcy5zZWFyY2hCdXR0b24pIHtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLnNlYXJjaEZvcm0uY2xhc3NMaXN0LnJlbW92ZSgnZXhwYW5kZWQnKTtcclxuICAgICAgICB0aGlzLnNlYXJjaElucHV0LnZhbHVlID0gJyc7XHJcbiAgICB9XHJcbn0iLCJ2YXIgcmVxdWlyZU9iamVjdENvZXJjaWJsZSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9yZXF1aXJlLW9iamVjdC1jb2VyY2libGUnKTtcblxudmFyIHF1b3QgPSAvXCIvZztcblxuLy8gQi4yLjMuMi4xIENyZWF0ZUhUTUwoc3RyaW5nLCB0YWcsIGF0dHJpYnV0ZSwgdmFsdWUpXG4vLyBodHRwczovL3RjMzkuZ2l0aHViLmlvL2VjbWEyNjIvI3NlYy1jcmVhdGVodG1sXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChzdHJpbmcsIHRhZywgYXR0cmlidXRlLCB2YWx1ZSkge1xuICB2YXIgUyA9IFN0cmluZyhyZXF1aXJlT2JqZWN0Q29lcmNpYmxlKHN0cmluZykpO1xuICB2YXIgcDEgPSAnPCcgKyB0YWc7XG4gIGlmIChhdHRyaWJ1dGUgIT09ICcnKSBwMSArPSAnICcgKyBhdHRyaWJ1dGUgKyAnPVwiJyArIFN0cmluZyh2YWx1ZSkucmVwbGFjZShxdW90LCAnJnF1b3Q7JykgKyAnXCInO1xuICByZXR1cm4gcDEgKyAnPicgKyBTICsgJzwvJyArIHRhZyArICc+Jztcbn07XG4iLCJ2YXIgZmFpbHMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZmFpbHMnKTtcblxuLy8gY2hlY2sgdGhlIGV4aXN0ZW5jZSBvZiBhIG1ldGhvZCwgbG93ZXJjYXNlXG4vLyBvZiBhIHRhZyBhbmQgZXNjYXBpbmcgcXVvdGVzIGluIGFyZ3VtZW50c1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoTUVUSE9EX05BTUUpIHtcbiAgcmV0dXJuIGZhaWxzKGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgdGVzdCA9ICcnW01FVEhPRF9OQU1FXSgnXCInKTtcbiAgICByZXR1cm4gdGVzdCAhPT0gdGVzdC50b0xvd2VyQ2FzZSgpIHx8IHRlc3Quc3BsaXQoJ1wiJykubGVuZ3RoID4gMztcbiAgfSk7XG59O1xuIiwidmFyICQgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZXhwb3J0Jyk7XG52YXIgJHZhbHVlcyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9vYmplY3QtdG8tYXJyYXknKS52YWx1ZXM7XG5cbi8vIGBPYmplY3QudmFsdWVzYCBtZXRob2Rcbi8vIGh0dHBzOi8vdGMzOS5naXRodWIuaW8vZWNtYTI2Mi8jc2VjLW9iamVjdC52YWx1ZXNcbiQoeyB0YXJnZXQ6ICdPYmplY3QnLCBzdGF0OiB0cnVlIH0sIHtcbiAgdmFsdWVzOiBmdW5jdGlvbiB2YWx1ZXMoTykge1xuICAgIHJldHVybiAkdmFsdWVzKE8pO1xuICB9XG59KTtcbiIsIid1c2Ugc3RyaWN0JztcbnZhciAkID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2V4cG9ydCcpO1xudmFyIGNyZWF0ZUhUTUwgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvY3JlYXRlLWh0bWwnKTtcbnZhciBmb3JjZWRTdHJpbmdIVE1MTWV0aG9kID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2ZvcmNlZC1zdHJpbmctaHRtbC1tZXRob2QnKTtcblxuLy8gYFN0cmluZy5wcm90b3R5cGUubGlua2AgbWV0aG9kXG4vLyBodHRwczovL3RjMzkuZ2l0aHViLmlvL2VjbWEyNjIvI3NlYy1zdHJpbmcucHJvdG90eXBlLmxpbmtcbiQoeyB0YXJnZXQ6ICdTdHJpbmcnLCBwcm90bzogdHJ1ZSwgZm9yY2VkOiBmb3JjZWRTdHJpbmdIVE1MTWV0aG9kKCdsaW5rJykgfSwge1xuICBsaW5rOiBmdW5jdGlvbiBsaW5rKHVybCkge1xuICAgIHJldHVybiBjcmVhdGVIVE1MKHRoaXMsICdhJywgJ2hyZWYnLCB1cmwpO1xuICB9XG59KTtcbiJdLCJzb3VyY2VSb290IjoiIn0=