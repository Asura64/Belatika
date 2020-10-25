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
/* harmony import */ var _class_ScrollAnimation__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./class/_ScrollAnimation */ "./assets/js/class/_ScrollAnimation.js");




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
  //Chargement différé des images
  new _class_Lazyloader__WEBPACK_IMPORTED_MODULE_3__["default"](); //Popup panier

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
  } //Module de recherche


  new _class_Search__WEBPACK_IMPORTED_MODULE_6__["default"](); //Sticky navbar masquée au scroll descendant, visible au scroll montant

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
  }); //Gestion de la remise en stock

  var backinstockElts = [].slice.call(document.getElementsByClassName('backinstock'));
  backinstockElts.forEach(function (backinstockElt) {
    return new _class_BackInStock__WEBPACK_IMPORTED_MODULE_8__["default"](backinstockElt);
  }); //Gestion des animations au scroll

  var animatedElts = [].slice.call(document.getElementsByClassName('animated'));
  animatedElts.forEach(function (animatedElt) {
    return new _class_ScrollAnimation__WEBPACK_IMPORTED_MODULE_9__["default"](animatedElt);
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

/***/ "./assets/js/class/_ScrollAnimation.js":
/*!*********************************************!*\
  !*** ./assets/js/class/_ScrollAnimation.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return ScrollAnimation; });
/* harmony import */ var core_js_modules_es_function_bind__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.function.bind */ "./node_modules/core-js/modules/es.function.bind.js");
/* harmony import */ var core_js_modules_es_function_bind__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_function_bind__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_object_define_property__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.object.define-property */ "./node_modules/core-js/modules/es.object.define-property.js");
/* harmony import */ var core_js_modules_es_object_define_property__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_define_property__WEBPACK_IMPORTED_MODULE_1__);



function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var ScrollAnimation =
/*#__PURE__*/
function () {
  /**
   * @param {HTMLElement} element
   */
  function ScrollAnimation(element) {
    _classCallCheck(this, ScrollAnimation);

    if (!(element instanceof HTMLElement)) {
      return console.error("Aucun élément du DOM.");
    }

    element.classList.remove('animated');
    this.element = element;
    this.start = element.dataset.start === undefined ? 25 : element.dataset.start;
    this.end = element.dataset.end === undefined ? 75 : element.dataset.end;
    this.mobileOnly = element.dataset.mobileOnly !== undefined;
    this.isMobile = false;
    this.onScroll();
    window.addEventListener('scroll', this.onScroll.bind(this));
    document.addEventListener('touchstart', this.onTouchEvent.bind(this));
    document.addEventListener('touchmove', this.onTouchEvent.bind(this));
    document.addEventListener('touchend', this.onTouchEvent.bind(this));
    document.addEventListener('touchcancel', this.onTouchEvent.bind(this));
  }

  _createClass(ScrollAnimation, [{
    key: "onScroll",
    value: function onScroll() {
      if (this.mobileOnly && !this.isMobile) return;
      var windowHeight = window.innerHeight;
      var elementY = Math.round(this.element.getBoundingClientRect().y);
      var inWindowRange = elementY >= 0 && elementY <= windowHeight;
      var ratePos = Math.round(100 * elementY / windowHeight);

      if (inWindowRange && ratePos >= this.start && ratePos <= this.end) {
        this.element.classList.add('animate');
      } else {
        this.element.classList.remove('animate');
      }
    }
  }, {
    key: "onTouchEvent",
    value: function onTouchEvent() {
      this.isMobile = true;
    }
  }]);

  return ScrollAnimation;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hc3NldHMvY3NzL2FwcC5zY3NzIiwid2VicGFjazovLy8uL2Fzc2V0cy9qcy9hcHAuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzL2NsYXNzL19CYWNrSW5TdG9jay5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvY2xhc3MvX0NhcnQuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzL2NsYXNzL19MYXp5bG9hZGVyLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9qcy9jbGFzcy9fTmF2aWdhdGlvbi5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvY2xhc3MvX1Njcm9sbEFuaW1hdGlvbi5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvY2xhc3MvX1NlYXJjaC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvY3JlYXRlLWh0bWwuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL2ZvcmNlZC1zdHJpbmctaHRtbC1tZXRob2QuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9lcy5vYmplY3QudmFsdWVzLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvZXMuc3RyaW5nLmxpbmsuanMiXSwibmFtZXMiOlsicmVxdWlyZSIsImRvY3VtZW50IiwiYWRkRXZlbnRMaXN0ZW5lciIsIkxhenlsb2FkZXIiLCJjYXJ0UG9wdXAiLCJnZXRFbGVtZW50QnlJZCIsInBvcHVwIiwiUG9wdXAiLCJidXR0b25zIiwiZWxlbWVudCIsImRpc3BsYXkiLCJDYXJ0IiwiU2VhcmNoIiwiTmF2aWdhdGlvbiIsInRvZ2dsZUJ1dHRvbiIsIm5hdkNvbnRlbnQiLCJjb2xsYXBzZU9uT3V0ZXJDbGljayIsIndvbWFuVG9nZ2xlIiwibWFuVG9nZ2xlIiwibmF2IiwiWU9mZnNldCIsIndpbmRvdyIsInBhZ2VZT2Zmc2V0IiwiY2xhc3NMaXN0IiwiYWRkIiwicmVtb3ZlIiwiYmFja2luc3RvY2tFbHRzIiwic2xpY2UiLCJjYWxsIiwiZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSIsImZvckVhY2giLCJiYWNraW5zdG9ja0VsdCIsIkJhY2tJblN0b2NrIiwiYW5pbWF0ZWRFbHRzIiwiYW5pbWF0ZWRFbHQiLCJTY3JvbGxBbmltYXRpb24iLCJidXR0b24iLCJzcGlubmVyIiwicXVlcnlTZWxlY3RvciIsIml0ZW1JZCIsImRhdGFzZXQiLCJpZCIsImNhbGxiYWNrVGV4dCIsInVybCIsImVtYWlsIiwicG9wdXBFbHQiLCJidWlsZFBvcHVwIiwicmVnaXN0ZXJlZCIsIm9uQnV0dG9uQ2xpY2siLCJiaW5kIiwiY3JlYXRlRWxlbWVudCIsImlubmVySFRNTCIsInVuZGVmaW5lZCIsImFza0VtYWlsIiwiYWpheCIsImNhbGxiYWNrIiwibWV0aG9kIiwiZGF0YXMiLCJhY3Rpb25CdXR0b24iLCJyZXNwb25zZSIsInN1Y2Nlc3MiLCJpbm5lclRleHQiLCJjb25zb2xlIiwiZXJyb3IiLCJvcHRpb25zIiwiT2JqZWN0IiwiYXNzaWduIiwiYnV0dG9uX2NsYXNzIiwibmF2Y2FydF9jbGFzcyIsIm5hdmNhcnRfYnV0dG9uX2NsYXNzIiwic2hvcHBpbmdfYmFnX2NsYXNzIiwic2hvcHBpbmdfYmFnX2l0ZW1fY2xhc3MiLCJjYXJ0X3F1YW50aXR5X2NsYXNzIiwiY2FydF91cmwiLCJwcm9jZXNzaW5nIiwiY2FydENvbnRlbnQiLCJvblNhbGVzIiwiZ2FJc0luaXRpYWxpemVkIiwibmF2Y2FydCIsIm5hdmNhcnRUb2dnbGUiLCJzaG9wcGluZ0JhZyIsInNob3BwaW5nQmFnUXVhbnRpdHkiLCJzaG9wcGluZ0JhZ0l0ZW1CdXR0b25zIiwicXVlcnlTZWxlY3RvckFsbCIsIm9uTmF2Y2FydFRvZ2dsZUNsaWNrIiwib25TaG9wcGluZ0JhZ0J1dHRvbkNsaWNrIiwiZSIsInByZXZlbnREZWZhdWx0IiwiYWRkZWQiLCJyZW1vdmVfaXRlbV91cmwiLCJhZGRfaXRlbV91cmwiLCJzZXRCdXR0b25Nb2RlIiwidXBkYXRlQ2FydCIsImNhcnQiLCJibHVyIiwic2hvdyIsImFuYWx5dGljcyIsIkpTT04iLCJwYXJzZSIsIml0ZW0iLCJhZGRUb0NhcnRCdXR0b24iLCJpdGVtX2lkIiwiSFRNTEVsZW1lbnQiLCJqc29uUmVzcG9uc2UiLCJjb3VudCIsInRvdGFsIiwicmVzZXRJbXBvcnQiLCJ2YWx1ZXMiLCJpdGVtTGlzdEVsdCIsImNyZWF0ZVNob3BwaW5nQmFnSXRlbSIsInByaWNlIiwiZGlzY291bnRQcmljZSIsInF1YW50aXR5IiwicGFyc2VJbnQiLCJwYXJzZUZsb2F0IiwiYXBwZW5kQ2hpbGQiLCJzaGlwcGluZ0ZlZUxpc3RFbHQiLCJpc1NoaXBwaW5nRmVlIiwibmFtZSIsInNob3BwaW5nQmFnVG90YWwiLCJjcmVhdGVTaG9wcGluZ0JhZ1RvdGFsIiwiY2FydExpbmtFbHQiLCJjcmVhdGVFbGVtZW50V2l0aENsYXNzZXMiLCJjYXJ0TGluayIsImhyZWYiLCJjYXJ0X2xpbmtfdGV4dCIsIml0ZW1Db250YWluZXIiLCJzcGFuIiwiaXRlbUltYWdlIiwiY3JlYXRlVGV4dE5vZGUiLCJzcmMiLCJpbWFnZXMiLCJjYWNoZVBhdGgiLCJhbHQiLCJpdGVtTGluayIsImxpbmsiLCJzZXRBdHRyaWJ1dGUiLCJpdGVtUHJpY2UiLCJJbnRsIiwiTnVtYmVyRm9ybWF0Iiwic3R5bGUiLCJjdXJyZW5jeSIsImZvcm1hdCIsIml0ZW1SZW1vdmUiLCJyZW1vdmVMaW5rIiwiY2xvbmVkSXRlbSIsImNsb25lTm9kZSIsImNsb25lZEl0ZW1SZW1vdmUiLCJ0b3RhbENvbnRhaW5lciIsInRvdGFsSGVhZGluZyIsInRvdGFsQW1vdW50IiwidGFnIiwiY2xhc3NlcyIsIkFycmF5IiwiaXNBcnJheSIsImNsYXNzTmFtZSIsImFkZFRleHQiLCJyZW1vdmVUZXh0IiwicmVtb3ZlQXR0cmlidXRlIiwiZ2EiLCJjYXRlZ29yeSIsInNsdWciLCJsYXp5SW1hZ2VzIiwib2JzZXJ2ZSIsImZhbGxCYWNrIiwibGF6eUltYWdlT2JzZXJ2ZXIiLCJJbnRlcnNlY3Rpb25PYnNlcnZlciIsImVudHJpZXMiLCJlbnRyeSIsImxhenlJbWFnZSIsInRhcmdldCIsImlzSW50ZXJzZWN0aW5nIiwiSFRNTEltYWdlRWxlbWVudCIsImxvYWQiLCJ1bm9ic2VydmUiLCJpbWFnZSIsImxlbmd0aCIsInNob3dDbGFzcyIsIm9uVG9nZ2xlQnV0dG9uQ2xpY2siLCJvbk91dGVyQ2xpY2siLCJjb250YWlucyIsImlzVG9nZ2xlRWx0IiwicGFyZW50Tm9kZSIsInN0YXJ0IiwiZW5kIiwibW9iaWxlT25seSIsImlzTW9iaWxlIiwib25TY3JvbGwiLCJvblRvdWNoRXZlbnQiLCJ3aW5kb3dIZWlnaHQiLCJpbm5lckhlaWdodCIsImVsZW1lbnRZIiwiTWF0aCIsInJvdW5kIiwiZ2V0Qm91bmRpbmdDbGllbnRSZWN0IiwieSIsImluV2luZG93UmFuZ2UiLCJyYXRlUG9zIiwic2VhcmNoRm9ybSIsInNlYXJjaFRyaWdnZXIiLCJzZWFyY2hJbnB1dCIsInNlYXJjaEJ1dHRvbiIsIm9uU2VhcmNoVHJpZ2dlckNsaWNrIiwiYm9keSIsImhhc1NlYXJjaFJlcXVlc3QiLCJ2YWx1ZSIsImRpc3BhdGNoRXZlbnQiLCJNb3VzZUV2ZW50Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQSx1Qzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDQUE7Ozs7OztBQU9BO0FBQ0FBLG1CQUFPLENBQUMsOENBQUQsQ0FBUCxDLENBRUE7QUFDQTs7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQUMsUUFBUSxDQUFDQyxnQkFBVCxDQUEwQixrQkFBMUIsRUFBOEMsWUFBTTtBQUNoRDtBQUNBLE1BQUlDLHlEQUFKLEdBRmdELENBSWhEOztBQUNBLE1BQU1DLFNBQVMsR0FBR0gsUUFBUSxDQUFDSSxjQUFULENBQXdCLG1CQUF4QixDQUFsQjs7QUFDQSxNQUFJRCxTQUFKLEVBQWU7QUFDWCxRQUFNRSxLQUFLLEdB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QUNBO0FBQ0E7QUFDQSwwRkFBMEY7QUFDMUY7QUFDQTs7Ozs7Ozs7Ozs7O0FDWEEsWUFBWSxtQkFBTyxDQUFDLHFFQUFvQjs7QUFFeEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIOzs7Ozs7Ozs7Ozs7QUNUQSxRQUFRLG1CQUFPLENBQUMsdUVBQXFCO0FBQ3JDLGNBQWMsbUJBQU8sQ0FBQyx5RkFBOEI7O0FBRXBEO0FBQ0E7QUFDQSxHQUFHLCtCQUErQjtBQUNsQztBQUNBO0FBQ0E7QUFDQSxDQUFDOzs7Ozs7Ozs7Ozs7O0FDVFk7QUFDYixRQUFRLG1CQUFPLENBQUMsdUVBQXFCO0FBQ3JDLGlCQUFpQixtQkFBTyxDQUFDLGlGQUEwQjtBQUNuRCw2QkFBNkIsbUJBQU8sQ0FBQyw2R0FBd0M7O0FBRTdFO0FBQ0E7QUFDQSxHQUFHLHdFQUF3RTtBQUMzRTtBQUNBO0FBQ0E7QUFDQSxDQUFDIiwiZmlsZSI6ImFwcC5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpbiIsIi8qXHJcbiAqIFdlbGNvbWUgdG8geW91ciBhcHAncyBtYWluIEphdmFTY3JpcHQgZmlsZSFcclxuICpcclxuICogV2UgcmVjb21tZW5kIGluY2x1ZGluZyB0aGUgYnVpbHQgdmVyc2lvbiBvZiB0aGlzIEphdmFTY3JpcHQgZmlsZVxyXG4gKiAoYW5kIGl0cyBDU1MgZmlsZSkgaW4geW91ciBiYXNlIGxheW91dCAoYmFzZS5odG1sLnR3aWcpLlxyXG4gKi9cclxuXHJcbi8vIGFueSBDU1MgeW91IHJlcXVpcmUgd2lsbCBvdXRwdXQgaW50byBhIHNpbmdsZSBjc3MgZmlsZSAoYXBwLmNzcyBpbiB0aGlzIGNhc2UpXHJcbnJlcXVpcmUoJy4uL2Nzcy9hcHAuc2NzcycpO1xyXG5cclxuLy8gTmVlZCBqUXVlcnk/IEluc3RhbGwgaXQgd2l0aCBcInlhcm4gYWRkIGpxdWVyeVwiLCB0aGVuIHVuY29tbWVudCB0byByZXF1aXJlIGl0LlxyXG4vLyBjb25zdCAkID0gcmVxdWlyZSgnanF1ZXJ5Jyk7XHJcblxyXG5pbXBvcnQgTGF6eWxvYWRlciBmcm9tIFwiLi9jbGFzcy9fTGF6eWxvYWRlclwiO1xyXG5pbXBvcnQgQ2FydCBmcm9tIFwiLi9jbGFzcy9fQ2FydFwiO1xyXG5pbXBvcnQgUG9wdXAgZnJvbSBcIi4vY2xhc3MvX1BvcHVwXCI7XHJcbmltcG9ydCBTZWFyY2ggZnJvbSBcIi4vY2xhc3MvX1NlYXJjaFwiO1xyXG5pbXBvcnQgTmF2aWdhdGlvbiBmcm9tIFwiLi9jbGFzcy9fTmF2aWdhdGlvblwiO1xyXG5pbXBvcnQgQmFja0luU3RvY2sgZnJvbSBcIi4vY2xhc3MvX0JhY2tJblN0b2NrXCI7XHJcbmltcG9ydCBTY3JvbGxBbmltYXRpb24gZnJvbSBcIi4vY2xhc3MvX1Njcm9sbEFuaW1hdGlvblwiO1xyXG5cclxuZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignRE9NQ29udGVudExvYWRlZCcsICgpID0+IHtcclxuICAgIC8vQ2hhcmdlbWVudCBkaWZmw6lyw6kgZGVzIGltYWdlc1xyXG4gICAgbmV3IExhenlsb2FkZXIoKTtcclxuXHJcbiAgICAvL1BvcHVwIHBhbmllclxyXG4gICAgY29uc3QgY2FydFBvcHVwID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2FkZC10by1jYXJ0LXBvcHVwJyk7XHJcbiAgICBpZiAoY2FydFBvcHVwKSB7XHJcbiAgICAgICAgY29uc3QgcG9wdXAgPSBuZXcgUG9wdXAoY2FydFBvcHVwLCB7XHJcbiAgICAgICAgICAgIGJ1dHRvbnM6IFtcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICBlbGVtZW50OiBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY29udGludWUtc2hvcHBpbmcnKVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBdLFxyXG4gICAgICAgICAgICBkaXNwbGF5OiBmYWxzZVxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIG5ldyBDYXJ0KHsgcG9wdXAgfSlcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgICAgbmV3IENhcnQoKTtcclxuICAgIH1cclxuXHJcbiAgICAvL01vZHVsZSBkZSByZWNoZXJjaGVcclxuICAgIG5ldyBTZWFyY2goKTtcclxuXHJcbiAgICAvL1N0aWNreSBuYXZiYXIgbWFzcXXDqWUgYXUgc2Nyb2xsIGRlc2NlbmRhbnQsIHZpc2libGUgYXUgc2Nyb2xsIG1vbnRhbnRcclxuICAgIG5ldyBOYXZpZ2F0aW9uKHtcclxuICAgICAgICB0b2dnbGVCdXR0b246IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCduYXZiYXJUb2dnbGUnKSxcclxuICAgICAgICBuYXZDb250ZW50OiBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbmF2YmFyQ29udGVudCcpLFxyXG4gICAgICAgIGNvbGxhcHNlT25PdXRlckNsaWNrOiBmYWxzZSxcclxuICAgIH0pO1xyXG4gICAgY29uc3Qgd29tYW5Ub2dnbGUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnd29tYW5Ub2dnbGUnKTtcclxuICAgIG5ldyBOYXZpZ2F0aW9uKHt0b2dnbGVCdXR0b246IHdvbWFuVG9nZ2xlLCBuYXZDb250ZW50OiB3b21hblRvZ2dsZX0pO1xyXG4gICAgY29uc3QgbWFuVG9nZ2xlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ21hblRvZ2dsZScpO1xyXG4gICAgbmV3IE5hdmlnYXRpb24oe3RvZ2dsZUJ1dHRvbjogbWFuVG9nZ2xlLCBuYXZDb250ZW50OiBtYW5Ub2dnbGV9KTtcclxuICAgIGNvbnN0IG5hdiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdidC1uYXZiYXInKTtcclxuICAgIGxldCBZT2Zmc2V0ID0gd2luZG93LnBhZ2VZT2Zmc2V0O1xyXG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3Njcm9sbCcsICgpID0+IHtcclxuICAgICAgICBpZiAod2luZG93LnBhZ2VZT2Zmc2V0ID4gWU9mZnNldCkge1xyXG4gICAgICAgICAgICBuYXYuY2xhc3NMaXN0LmFkZCgnaGlkZScpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIG5hdi5jbGFzc0xpc3QucmVtb3ZlKCdoaWRlJyk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFlPZmZzZXQgPSB3aW5kb3cucGFnZVlPZmZzZXQ7XHJcbiAgICB9KTtcclxuXHJcbiAgICAvL0dlc3Rpb24gZGUgbGEgcmVtaXNlIGVuIHN0b2NrXHJcbiAgICBjb25zdCBiYWNraW5zdG9ja0VsdHMgPSBbXS5zbGljZS5jYWxsKGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ2JhY2tpbnN0b2NrJykpO1xyXG4gICAgYmFja2luc3RvY2tFbHRzLmZvckVhY2goYmFja2luc3RvY2tFbHQgPT4gbmV3IEJhY2tJblN0b2NrKGJhY2tpbnN0b2NrRWx0KSk7XHJcblxyXG4gICAgLy9HZXN0aW9uIGRlcyBhbmltYXRpb25zIGF1IHNjcm9sbFxyXG4gICAgY29uc3QgYW5pbWF0ZWRFbHRzID0gW10uc2xpY2UuY2FsbChkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCdhbmltYXRlZCcpKTtcclxuICAgIGFuaW1hdGVkRWx0cy5mb3JFYWNoKGFuaW1hdGVkRWx0ID0+IG5ldyBTY3JvbGxBbmltYXRpb24oYW5pbWF0ZWRFbHQpKTtcclxufSk7XHJcbiIsImltcG9ydCBQb3B1cCBmcm9tICcuL19Qb3B1cCc7XHJcbmltcG9ydCBhamF4IGZyb20gXCIuLi9mdW5jdGlvbnMvX2FqYXhcIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEJhY2tJblN0b2NrXHJcbntcclxuICAgIC8qKlxyXG4gICAgICogQHBhcmFtIHtIVE1MRWxlbWVudH0gYnV0dG9uXHJcbiAgICAgKi9cclxuICAgIGNvbnN0cnVjdG9yKGJ1dHRvbilcclxuICAgIHtcclxuICAgICAgICB0aGlzLmJ1dHRvbiA9IGJ1dHRvbjtcclxuICAgICAgICB0aGlzLnNwaW5uZXIgPSBidXR0b24ucXVlcnlTZWxlY3RvcignLmZhcy5mYS1zcGlubmVyJyk7XHJcbiAgICAgICAgdGhpcy5pdGVtSWQgPSBidXR0b24uZGF0YXNldC5pZDtcclxuICAgICAgICB0aGlzLmNhbGxiYWNrVGV4dCA9IGJ1dHRvbi5kYXRhc2V0LmNhbGxiYWNrVGV4dDtcclxuICAgICAgICB0aGlzLnVybCA9IGJ1dHRvbi5kYXRhc2V0LnVybDtcclxuICAgICAgICB0aGlzLmVtYWlsID0gYnV0dG9uLmRhdGFzZXQuZW1haWw7XHJcbiAgICAgICAgdGhpcy5wb3B1cEVsdCA9IHRoaXMuYnVpbGRQb3B1cCgpO1xyXG4gICAgICAgIHRoaXMucmVnaXN0ZXJlZCA9IGZhbHNlO1xyXG5cclxuICAgICAgICB0aGlzLmJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHRoaXMub25CdXR0b25DbGljay5iaW5kKHRoaXMpKTtcclxuICAgIH1cclxuXHJcbiAgICBidWlsZFBvcHVwKClcclxuICAgIHtcclxuICAgICAgICBjb25zdCBwb3B1cEVsdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgICAgIHBvcHVwRWx0LmNsYXNzTGlzdC5hZGQoJ3BvcHVwJyk7XHJcbiAgICAgICAgcG9wdXBFbHQuaW5uZXJIVE1MID0gYFxyXG4gICAgICAgICAgICA8aSBjbGFzcz1cImZhcyBmYS10aW1lcy1jaXJjbGVcIj48L2k+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJwb3B1cF9faGVhZGluZ1wiPlxyXG4gICAgICAgICAgICAgICAgVm90cmUgZW1haWxcclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJwb3B1cF9fdGV4dFwiPlxyXG4gICAgICAgICAgICAgICAgPGlucHV0IGNsYXNzPVwiaW5wdXQtZW1haWwgZm9ybS1jb250cm9sXCIgdHlwZT1cImVtYWlsXCI+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwibXktMyB0ZXh0LWNlbnRlclwiPlxyXG4gICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzcz1cInZhbGlkLWVtYWlsIGJ0biBidG4tc3VjY2VzcyBmbG9hdC1zbS1yaWdodFwiPjxpIGNsYXNzPVwiZC1ub25lIGZhcyBmYS1zcGlubmVyXCI+PC9pPiBWYWxpZGVyPC9idXR0b24+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIGA7XHJcbiAgICAgICAgcmV0dXJuIHBvcHVwRWx0O1xyXG4gICAgfVxyXG5cclxuICAgIG9uQnV0dG9uQ2xpY2soKVxyXG4gICAge1xyXG4gICAgICAgIGlmICh0aGlzLnJlZ2lzdGVyZWQpIHJldHVybjtcclxuXHJcbiAgICAgICAgaWYgKHRoaXMuZW1haWwgPT09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5hc2tFbWFpbCgpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLnNwaW5uZXIpIHRoaXMuc3Bpbm5lci5jbGFzc0xpc3QucmVtb3ZlKCdkLW5vbmUnKTtcclxuICAgICAgICAgICAgYWpheChcclxuICAgICAgICAgICAgICAgIHRoaXMudXJsLFxyXG4gICAgICAgICAgICAgICAgdGhpcy5jYWxsYmFjay5iaW5kKHRoaXMpLFxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIG1ldGhvZDogJ1BPU1QnLFxyXG4gICAgICAgICAgICAgICAgICAgIGRhdGFzOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlkOiB0aGlzLml0ZW1JZCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgZW1haWw6IHRoaXMuZW1haWxcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGFza0VtYWlsKClcclxuICAgIHtcclxuICAgICAgICBjb25zdCBhY3Rpb25CdXR0b24gPSB7XHJcbiAgICAgICAgICAgIGVsZW1lbnQ6IHRoaXMucG9wdXBFbHQucXVlcnlTZWxlY3RvcignLnZhbGlkLWVtYWlsJyksXHJcbiAgICAgICAgICAgIHVybDogdGhpcy51cmwsXHJcbiAgICAgICAgICAgIGNhbGxiYWNrOiB0aGlzLmNhbGxiYWNrLmJpbmQodGhpcyksXHJcbiAgICAgICAgICAgIGRhdGFzOiB7XHJcbiAgICAgICAgICAgICAgICBpZDogdGhpcy5pdGVtSWQsXHJcbiAgICAgICAgICAgICAgICBlbWFpbDogdGhpcy5wb3B1cEVsdC5xdWVyeVNlbGVjdG9yKCcuaW5wdXQtZW1haWwnKVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBuZXcgUG9wdXAodGhpcy5wb3B1cEVsdCwge2J1dHRvbnM6IFthY3Rpb25CdXR0b25dfSk7XHJcbiAgICB9XHJcblxyXG4gICAgY2FsbGJhY2socmVzcG9uc2UpXHJcbiAgICB7XHJcbiAgICAgICAgaWYgKHJlc3BvbnNlLnN1Y2Nlc3MpIHtcclxuICAgICAgICAgICAgdGhpcy5idXR0b24uaW5uZXJUZXh0ID0gdGhpcy5jYWxsYmFja1RleHQ7XHJcbiAgICAgICAgICAgIHRoaXMucmVnaXN0ZXJlZCA9IHRydWU7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgY29uc29sZS5lcnJvcihyZXNwb25zZS5lcnJvcik7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLnNwaW5uZXIpIHRoaXMuc3Bpbm5lci5jbGFzc0xpc3QuYWRkKCdkLW5vbmUnKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn0iLCJpbXBvcnQgYWpheCBmcm9tIFwiLi4vZnVuY3Rpb25zL19hamF4XCI7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBDYXJ0IHtcclxuICAgIC8qKlxyXG4gICAgICogQHBhcmFtIHtPYmplY3R9IG9wdGlvbnNcclxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSBbb3B0aW9ucy5idXR0b25fY2xhc3M9Y2FydC1idXR0b25dIENsYXNzZSBDU1MgZGVzIGJvdXRvbnMgZCdham91dCBhdSBwYW5pZXJcclxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSBbb3B0aW9ucy5uYXZjYXJ0X2NsYXNzPW5hdmNhcnRdIENsYXNzZSBDU1MgZHUgbWVudSBwYW5pZXJcclxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSBbb3B0aW9ucy5uYXZjYXJ0X2J1dHRvbl9jbGFzcz1uYXZjYXJ0X19ob3Zlcl0gQ2xhc3NlIENTUyBkdSBib3V0b24gZHUgbWVudSBwYW5pZXJcclxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSBbb3B0aW9ucy5zaG9wcGluZ19iYWdfY2xhc3M9Y2FydC1ob3Zlcl0gQ2xhc3NlIENTUyBkdSBtZW51IHBhbmllclxyXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IFtvcHRpb25zLnNob3BwaW5nX2JhZ19pdGVtX2NsYXNzPWNhcnQtaG92ZXJfX2l0ZW1dIENsYXNzZSBDU1MgZGVzIGl0ZW1zIGR1IG1lbnUgcGFuaWVyXHJcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gW29wdGlvbnMuY2FydF9xdWFudGl0eV9jbGFzcz1uYXZjYXJ0XSBDbGFzc2UgQ1NTIHF1YW50aXTDqSBkYW5zIGxlIHBhbmllclxyXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IFtvcHRpb25zLmNhcnRfdXJsPS9wYW5pZXIvXSBMaWVuIHZlcnMgbGUgcGFuaWVyXHJcbiAgICAgKiBAcGFyYW0ge1BvcHVwfSBbb3B0aW9ucy5wb3B1cD1udWxsXSBwb3B1cFxyXG4gICAgICovXHJcbiAgICBjb25zdHJ1Y3RvcihvcHRpb25zID0ge30pXHJcbiAgICB7XHJcbiAgICAgICAgLy9TZXR0aW5nc1xyXG4gICAgICAgIHRoaXMub3B0aW9ucyA9IE9iamVjdC5hc3NpZ24oe1xyXG4gICAgICAgICAgICBidXR0b25fY2xhc3M6ICdjYXJ0LWJ1dHRvbicsXHJcbiAgICAgICAgICAgIG5hdmNhcnRfY2xhc3M6ICduYXZjYXJ0JyxcclxuICAgICAgICAgICAgbmF2Y2FydF9idXR0b25fY2xhc3M6ICduYXZjYXJ0X19ob3ZlcicsXHJcbiAgICAgICAgICAgIHNob3BwaW5nX2JhZ19jbGFzczogJ2NhcnQtaG92ZXInLFxyXG4gICAgICAgICAgICBzaG9wcGluZ19iYWdfaXRlbV9jbGFzczogJ2NhcnQtaG92ZXJfX2l0ZW0nLFxyXG4gICAgICAgICAgICBjYXJ0X3F1YW50aXR5X2NsYXNzOiAnbmF2Y2FydCcsXHJcbiAgICAgICAgICAgIGNhcnRfdXJsOiAnL3Bhbmllci8nLFxyXG4gICAgICAgICAgICBwb3B1cDogbnVsbCxcclxuICAgICAgICB9LCBvcHRpb25zKTtcclxuICAgICAgICB0aGlzLnByb2Nlc3NpbmcgPSBmYWxzZTtcclxuICAgICAgICB0aGlzLmNhcnRDb250ZW50ID0ge307XHJcbiAgICAgICAgdGhpcy5vblNhbGVzID0gZmFsc2U7XHJcbiAgICAgICAgdGhpcy5nYUlzSW5pdGlhbGl6ZWQgPSBmYWxzZTtcclxuXHJcbiAgICAgICAgLy9ET00gaGFuZGxpbmdcclxuICAgICAgICB0aGlzLmJ1dHRvbnMgPSBbXS5zbGljZS5jYWxsKGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUodGhpcy5vcHRpb25zLmJ1dHRvbl9jbGFzcykpO1xyXG4gICAgICAgIHRoaXMubmF2Y2FydCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy4nK3RoaXMub3B0aW9ucy5uYXZjYXJ0X2NsYXNzKTtcclxuICAgICAgICB0aGlzLm5hdmNhcnRUb2dnbGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuJyt0aGlzLm9wdGlvbnMubmF2Y2FydF9idXR0b25fY2xhc3MpO1xyXG4gICAgICAgIHRoaXMuc2hvcHBpbmdCYWcgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuJyt0aGlzLm9wdGlvbnMuc2hvcHBpbmdfYmFnX2NsYXNzKTtcclxuICAgICAgICB0aGlzLnNob3BwaW5nQmFnUXVhbnRpdHkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuJyt0aGlzLm9wdGlvbnMuY2FydF9xdWFudGl0eV9jbGFzcyk7XHJcbiAgICAgICAgdGhpcy5zaG9wcGluZ0JhZ0l0ZW1CdXR0b25zID0gW10uc2xpY2UuY2FsbChkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuJyt0aGlzLm9wdGlvbnMuc2hvcHBpbmdfYmFnX2l0ZW1fY2xhc3MrJyAucmVtb3ZlLWl0ZW0nKSk7XHJcblxyXG4gICAgICAgIC8vRXZlbnRzXHJcbiAgICAgICAgdGhpcy5uYXZjYXJ0VG9nZ2xlLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgdGhpcy5vbk5hdmNhcnRUb2dnbGVDbGljay5iaW5kKHRoaXMpKTtcclxuICAgICAgICB0aGlzLmJ1dHRvbnMuZm9yRWFjaChidXR0b24gPT4ge1xyXG4gICAgICAgICAgICBidXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCB0aGlzLm9uQnV0dG9uQ2xpY2suYmluZCh0aGlzLCBidXR0b24pKTtcclxuICAgICAgICB9KTtcclxuICAgICAgICB0aGlzLnNob3BwaW5nQmFnSXRlbUJ1dHRvbnMuZm9yRWFjaChidXR0b24gPT4ge1xyXG4gICAgICAgICAgICBidXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCB0aGlzLm9uU2hvcHBpbmdCYWdCdXR0b25DbGljay5iaW5kKHRoaXMsIGJ1dHRvbikpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIG9uTmF2Y2FydFRvZ2dsZUNsaWNrKGUpXHJcbiAgICB7XHJcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgfVxyXG5cclxuICAgIG9uQnV0dG9uQ2xpY2soYnV0dG9uKVxyXG4gICAge1xyXG4gICAgICAgIGlmICh0aGlzLnByb2Nlc3NpbmcpIHtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLnByb2Nlc3NpbmcgPSB0cnVlO1xyXG4gICAgICAgIGxldCBzcGlubmVyID0gYnV0dG9uLnF1ZXJ5U2VsZWN0b3IoJy5mYS1zcGlubmVyJyk7XHJcbiAgICAgICAgc3Bpbm5lci5jbGFzc0xpc3QucmVtb3ZlKCdoaWRkZW4nKTtcclxuICAgICAgICBsZXQgYWRkZWQgPSBidXR0b24uZGF0YXNldC5hZGRlZCAhPT0gdW5kZWZpbmVkO1xyXG4gICAgICAgIGxldCB1cmwgPSBhZGRlZCA/IGJ1dHRvbi5kYXRhc2V0LnJlbW92ZV9pdGVtX3VybCA6IGJ1dHRvbi5kYXRhc2V0LmFkZF9pdGVtX3VybDtcclxuICAgICAgICBhamF4KHVybCwgKHJlc3BvbnNlKSA9PiB7XHJcbiAgICAgICAgICAgIHNwaW5uZXIuY2xhc3NMaXN0LmFkZCgnaGlkZGVuJyk7XHJcbiAgICAgICAgICAgIHRoaXMuc2V0QnV0dG9uTW9kZShidXR0b24sIGFkZGVkKTtcclxuICAgICAgICAgICAgdGhpcy5vblNhbGVzID0gcmVzcG9uc2Uub25TYWxlcyA9PT0gdHJ1ZTtcclxuICAgICAgICAgICAgdGhpcy51cGRhdGVDYXJ0KHJlc3BvbnNlLmNhcnQpO1xyXG4gICAgICAgICAgICBidXR0b24uYmx1cigpO1xyXG4gICAgICAgICAgICBpZiAodGhpcy5vcHRpb25zLnBvcHVwICYmICFhZGRlZCkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5vcHRpb25zLnBvcHVwLnNob3coKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB0aGlzLnByb2Nlc3NpbmcgPSBmYWxzZTtcclxuICAgICAgICAgICAgdGhpcy5hbmFseXRpY3MoIWFkZGVkLCBKU09OLnBhcnNlKHJlc3BvbnNlLml0ZW0pKTtcclxuICAgICAgICB9LCB7bWV0aG9kOiAnUE9TVCd9KTtcclxuICAgIH1cclxuXHJcbiAgICBvblNob3BwaW5nQmFnQnV0dG9uQ2xpY2soYnV0dG9uKVxyXG4gICAge1xyXG4gICAgICAgIGlmICh0aGlzLnByb2Nlc3NpbmcpIHtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLnByb2Nlc3NpbmcgPSB0cnVlO1xyXG4gICAgICAgIGJ1dHRvbi5jbGFzc0xpc3QucmVtb3ZlKCdmYXInKTtcclxuICAgICAgICBidXR0b24uY2xhc3NMaXN0LnJlbW92ZSgnZmEtd2luZG93LWNsb3NlJyk7XHJcbiAgICAgICAgYnV0dG9uLmNsYXNzTGlzdC5hZGQoJ2ZhcycpO1xyXG4gICAgICAgIGJ1dHRvbi5jbGFzc0xpc3QuYWRkKCdmYS1zcGlubmVyJyk7XHJcbiAgICAgICAgbGV0IHVybCA9IGJ1dHRvbi5kYXRhc2V0LnJlbW92ZV9pdGVtX3VybDtcclxuICAgICAgICBsZXQgYWRkVG9DYXJ0QnV0dG9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NhcnQtYnV0dG9uLScrYnV0dG9uLmRhdGFzZXQuaXRlbV9pZCk7XHJcbiAgICAgICAgYWpheCh1cmwsIChyZXNwb25zZSkgPT4ge1xyXG4gICAgICAgICAgICBidXR0b24uY2xhc3NMaXN0LnJlbW92ZSgnZmFzJyk7XHJcbiAgICAgICAgICAgIGJ1dHRvbi5jbGFzc0xpc3QucmVtb3ZlKCdmYS1zcGlubmVyJyk7XHJcbiAgICAgICAgICAgIGJ1dHRvbi5jbGFzc0xpc3QuYWRkKCdmYXInKTtcclxuICAgICAgICAgICAgYnV0dG9uLmNsYXNzTGlzdC5hZGQoJ2ZhLXdpbmRvdy1jbG9zZScpO1xyXG4gICAgICAgICAgICBpZiAoYWRkVG9DYXJ0QnV0dG9uIGluc3RhbmNlb2YgSFRNTEVsZW1lbnQpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuc2V0QnV0dG9uTW9kZShhZGRUb0NhcnRCdXR0b24sIHRydWUpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHRoaXMub25TYWxlcyA9IHJlc3BvbnNlLm9uU2FsZXMgPT09IHRydWU7XHJcbiAgICAgICAgICAgIHRoaXMudXBkYXRlQ2FydChyZXNwb25zZS5jYXJ0KTtcclxuICAgICAgICAgICAgdGhpcy5wcm9jZXNzaW5nID0gZmFsc2U7XHJcbiAgICAgICAgfSwge21ldGhvZDogJ1BPU1QnfSk7XHJcbiAgICB9XHJcblxyXG4gICAgdXBkYXRlQ2FydChqc29uUmVzcG9uc2UpXHJcbiAgICB7XHJcbiAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgdGhpcy5jYXJ0Q29udGVudCA9IEpTT04ucGFyc2UoanNvblJlc3BvbnNlKTtcclxuICAgICAgICAgICAgaWYgKHR5cGVvZiB0aGlzLmNhcnRDb250ZW50ICE9PSAnb2JqZWN0Jykge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5jYXJ0Q29udGVudCA9IHt9O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSBjYXRjaCAoZSkge1xyXG4gICAgICAgICAgICBjb25zb2xlLmVycm9yKCdGb3JtYXQgSlNPTiBwYW5pZXIgbm9uIHZhbGlkZScpO1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB0aGlzLnNob3BwaW5nQmFnLmlubmVySFRNTCA9ICcnO1xyXG5cclxuICAgICAgICBsZXQgY291bnQgPSAwO1xyXG4gICAgICAgIGxldCB0b3RhbCA9IDA7XHJcbiAgICAgICAgaWYgKHRoaXMub3B0aW9ucy5wb3B1cCkge1xyXG4gICAgICAgICAgICB0aGlzLm9wdGlvbnMucG9wdXAucmVzZXRJbXBvcnQoKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgT2JqZWN0LnZhbHVlcyh0aGlzLmNhcnRDb250ZW50KS5mb3JFYWNoKGl0ZW0gPT4ge1xyXG4gICAgICAgICAgICBsZXQgaXRlbUxpc3RFbHQgPSB0aGlzLmNyZWF0ZVNob3BwaW5nQmFnSXRlbShpdGVtKTtcclxuICAgICAgICAgICAgbGV0IHByaWNlID0gdGhpcy5vblNhbGVzID8gaXRlbS5kaXNjb3VudFByaWNlIDogaXRlbS5wcmljZTtcclxuICAgICAgICAgICAgbGV0IHF1YW50aXR5ID0gcGFyc2VJbnQoaXRlbS5xdWFudGl0eSk7XHJcbiAgICAgICAgICAgIHRvdGFsICs9IHF1YW50aXR5ICogcGFyc2VGbG9hdChwcmljZSk7XHJcbiAgICAgICAgICAgIHRoaXMuc2hvcHBpbmdCYWcuYXBwZW5kQ2hpbGQoaXRlbUxpc3RFbHQpO1xyXG4gICAgICAgICAgICBjb3VudCArPSBpdGVtLnF1YW50aXR5O1xyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIGxldCBzaGlwcGluZ0ZlZUxpc3RFbHQgPSB0aGlzLmNyZWF0ZVNob3BwaW5nQmFnSXRlbSh7aXNTaGlwcGluZ0ZlZTogdHJ1ZSwgbmFtZTogJ0ZyYWlzIGRlIHBvcnQnfSk7XHJcbiAgICAgICAgdGhpcy5zaG9wcGluZ0JhZy5hcHBlbmRDaGlsZChzaGlwcGluZ0ZlZUxpc3RFbHQpO1xyXG4gICAgICAgIGlmICh0b3RhbCA+IDApIHtcclxuICAgICAgICAgICAgbGV0IHNob3BwaW5nQmFnVG90YWwgPSB0aGlzLmNyZWF0ZVNob3BwaW5nQmFnVG90YWwodG90YWwpO1xyXG4gICAgICAgICAgICB0aGlzLnNob3BwaW5nQmFnLmFwcGVuZENoaWxkKHNob3BwaW5nQmFnVG90YWwpO1xyXG4gICAgICAgICAgICBsZXQgY2FydExpbmtFbHQgPSB0aGlzLmNyZWF0ZUVsZW1lbnRXaXRoQ2xhc3NlcygnZGl2JywgdGhpcy5vcHRpb25zLnNob3BwaW5nX2JhZ19jbGFzcysnX19saW5rJyk7XHJcbiAgICAgICAgICAgIGxldCBjYXJ0TGluayA9IHRoaXMuY3JlYXRlRWxlbWVudFdpdGhDbGFzc2VzKCdhJywgWydidG4nLCAnYnRuLXNtJywgJ2J0LWJ0bi0tcHJpbWFyeScsICd0ZXh0LWxpZ2h0J10pO1xyXG4gICAgICAgICAgICBjYXJ0TGluay5ocmVmID0gdGhpcy5vcHRpb25zLmNhcnRfdXJsO1xyXG4gICAgICAgICAgICBjYXJ0TGluay5pbm5lclRleHQgPSB0aGlzLnNob3BwaW5nQmFnLmRhdGFzZXQuY2FydF9saW5rX3RleHQ7XHJcbiAgICAgICAgICAgIGNhcnRMaW5rRWx0LmFwcGVuZENoaWxkKGNhcnRMaW5rKTtcclxuICAgICAgICAgICAgdGhpcy5zaG9wcGluZ0JhZy5hcHBlbmRDaGlsZChjYXJ0TGlua0VsdCk7XHJcbiAgICAgICAgICAgIHRoaXMubmF2Y2FydC5jbGFzc0xpc3QucmVtb3ZlKCdlbXB0eScpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHRoaXMubmF2Y2FydC5jbGFzc0xpc3QuYWRkKCdlbXB0eScpO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLnNob3BwaW5nQmFnUXVhbnRpdHkuZGF0YXNldC5xdWFudGl0eSA9IGNvdW50O1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogQHBhcmFtIHtPYmplY3R9IGl0ZW1cclxuICAgICAqIEByZXR1cm4gSFRNTEVsZW1lbnRcclxuICAgICAqL1xyXG4gICAgY3JlYXRlU2hvcHBpbmdCYWdJdGVtKGl0ZW0pXHJcbiAgICB7XHJcbiAgICAgICAgbGV0IGl0ZW1Db250YWluZXIgPSB0aGlzLmNyZWF0ZUVsZW1lbnRXaXRoQ2xhc3NlcygnZGl2JywgdGhpcy5vcHRpb25zLnNob3BwaW5nX2JhZ19pdGVtX2NsYXNzKTtcclxuICAgICAgICBpZiAoaXRlbS5pc1NoaXBwaW5nRmVlKSB7XHJcbiAgICAgICAgICAgIGxldCBzcGFuID0gdGhpcy5jcmVhdGVFbGVtZW50V2l0aENsYXNzZXMoJ3NwYW4nLCB0aGlzLm9wdGlvbnMuc2hvcHBpbmdfYmFnX2l0ZW1fY2xhc3MrJ19fbGluaycpO1xyXG4gICAgICAgICAgICBsZXQgaXRlbUltYWdlID0gdGhpcy5jcmVhdGVFbGVtZW50V2l0aENsYXNzZXMoJ2knLCBbJ2ZhcycsICdmYS1zaGlwcGluZy1mYXN0J10pO1xyXG4gICAgICAgICAgICBzcGFuLmFwcGVuZENoaWxkKGl0ZW1JbWFnZSk7XHJcbiAgICAgICAgICAgIHNwYW4uYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoJyAnK2l0ZW0ubmFtZSkpO1xyXG4gICAgICAgICAgICBpdGVtQ29udGFpbmVyLmFwcGVuZENoaWxkKHNwYW4pO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIGxldCBpdGVtSW1hZ2UgPSB0aGlzLmNyZWF0ZUVsZW1lbnRXaXRoQ2xhc3NlcygnaW1nJyk7XHJcbiAgICAgICAgICAgIGl0ZW1JbWFnZS5zcmMgPSBpdGVtLmltYWdlc1swXS5jYWNoZVBhdGg7XHJcbiAgICAgICAgICAgIGl0ZW1JbWFnZS5hbHQgPSBpdGVtLmltYWdlc1swXS5hbHQ7XHJcblxyXG4gICAgICAgICAgICBsZXQgaXRlbUxpbmsgPSB0aGlzLmNyZWF0ZUVsZW1lbnRXaXRoQ2xhc3NlcygnYScsIHRoaXMub3B0aW9ucy5zaG9wcGluZ19iYWdfaXRlbV9jbGFzcysnX19saW5rJyk7XHJcbiAgICAgICAgICAgIGl0ZW1MaW5rLmhyZWYgPSBpdGVtLmxpbms7XHJcbiAgICAgICAgICAgIGl0ZW1MaW5rLnNldEF0dHJpYnV0ZSgndGl0bGUnLCBpdGVtLm5hbWUpO1xyXG4gICAgICAgICAgICBpdGVtTGluay5hcHBlbmRDaGlsZChpdGVtSW1hZ2UpO1xyXG4gICAgICAgICAgICBpdGVtTGluay5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZSgnICcraXRlbS5uYW1lKSk7XHJcbiAgICAgICAgICAgIGl0ZW1Db250YWluZXIuYXBwZW5kQ2hpbGQoaXRlbUxpbmspO1xyXG4gICAgICAgIH1cclxuICAgICAgICBsZXQgaXRlbVByaWNlID0gdGhpcy5jcmVhdGVFbGVtZW50V2l0aENsYXNzZXMoJ3NwYW4nLCB0aGlzLm9wdGlvbnMuc2hvcHBpbmdfYmFnX2l0ZW1fY2xhc3MrJ19fcHJpY2UnKTtcclxuICAgICAgICBsZXQgcHJpY2UgPSBpdGVtLmlzU2hpcHBpbmdGZWUgPyAwIDogdGhpcy5vblNhbGVzID8gaXRlbS5kaXNjb3VudFByaWNlIDogaXRlbS5wcmljZTtcclxuICAgICAgICBpdGVtUHJpY2UuaW5uZXJUZXh0ID0gbmV3IEludGwuTnVtYmVyRm9ybWF0KCdmci1GUicsIHtzdHlsZTogJ2N1cnJlbmN5JywgY3VycmVuY3k6ICdFVVInfSkuZm9ybWF0KHByaWNlKTtcclxuICAgICAgICBsZXQgaXRlbVJlbW92ZSA9IHRoaXMuY3JlYXRlRWxlbWVudFdpdGhDbGFzc2VzKCdpJywgWydyZW1vdmUtaXRlbScsICdmYXInLCAnZmEtd2luZG93LWNsb3NlJ10pO1xyXG4gICAgICAgIGl0ZW1SZW1vdmUuc2V0QXR0cmlidXRlKCdkYXRhLWl0ZW1faWQnLCBpdGVtLmlkKTtcclxuICAgICAgICBpdGVtUmVtb3ZlLnNldEF0dHJpYnV0ZSgnZGF0YS1yZW1vdmVfaXRlbV91cmwnLCBpdGVtLnJlbW92ZUxpbmspO1xyXG4gICAgICAgIGl0ZW1SZW1vdmUuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCB0aGlzLm9uU2hvcHBpbmdCYWdCdXR0b25DbGljay5iaW5kKHRoaXMsIGl0ZW1SZW1vdmUpKTtcclxuXHJcbiAgICAgICAgaXRlbUNvbnRhaW5lci5hcHBlbmRDaGlsZChpdGVtUHJpY2UpO1xyXG4gICAgICAgIGlmICh0aGlzLm9wdGlvbnMucG9wdXApIHtcclxuICAgICAgICAgICAgbGV0IGNsb25lZEl0ZW0gPSBpdGVtQ29udGFpbmVyLmNsb25lTm9kZSh0cnVlKTtcclxuICAgICAgICAgICAgaWYgKCFpdGVtLmlzU2hpcHBpbmdGZWUpIHtcclxuICAgICAgICAgICAgICAgIGxldCBjbG9uZWRJdGVtUmVtb3ZlID0gaXRlbVJlbW92ZS5jbG9uZU5vZGUodHJ1ZSk7XHJcbiAgICAgICAgICAgICAgICBjbG9uZWRJdGVtUmVtb3ZlLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgdGhpcy5vblNob3BwaW5nQmFnQnV0dG9uQ2xpY2suYmluZCh0aGlzLCBjbG9uZWRJdGVtUmVtb3ZlKSk7XHJcbiAgICAgICAgICAgICAgICBjbG9uZWRJdGVtLmFwcGVuZENoaWxkKGNsb25lZEl0ZW1SZW1vdmUpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHRoaXMub3B0aW9ucy5wb3B1cC5pbXBvcnQoY2xvbmVkSXRlbSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICghaXRlbS5pc1NoaXBwaW5nRmVlKSB7XHJcbiAgICAgICAgICAgIGl0ZW1Db250YWluZXIuYXBwZW5kQ2hpbGQoaXRlbVJlbW92ZSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBpdGVtQ29udGFpbmVyO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogQHBhcmFtIHtmbG9hdH0gdG90YWxcclxuICAgICAqIEByZXR1cm4gSFRNTEVsZW1lbnRcclxuICAgICAqL1xyXG4gICAgY3JlYXRlU2hvcHBpbmdCYWdUb3RhbCh0b3RhbClcclxuICAgIHtcclxuICAgICAgICBsZXQgdG90YWxDb250YWluZXIgPSB0aGlzLmNyZWF0ZUVsZW1lbnRXaXRoQ2xhc3NlcygnZGl2JywgdGhpcy5vcHRpb25zLnNob3BwaW5nX2JhZ19jbGFzcysnX190b3RhbCcpO1xyXG4gICAgICAgIGxldCB0b3RhbEhlYWRpbmcgPSB0aGlzLmNyZWF0ZUVsZW1lbnRXaXRoQ2xhc3Nlcygnc3BhbicpO1xyXG4gICAgICAgIHRvdGFsSGVhZGluZy5pbm5lclRleHQgPSAnVG90YWw6JztcclxuICAgICAgICBsZXQgdG90YWxBbW91bnQgPSB0aGlzLmNyZWF0ZUVsZW1lbnRXaXRoQ2xhc3Nlcygnc3BhbicsIHRoaXMub3B0aW9ucy5zaG9wcGluZ19iYWdfY2xhc3MrJ19fdG90YWxfX2Ftb3VudCcpO1xyXG4gICAgICAgIHRvdGFsQW1vdW50LmlubmVyVGV4dCA9IG5ldyBJbnRsLk51bWJlckZvcm1hdCgnZnItRlInLCB7c3R5bGU6ICdjdXJyZW5jeScsIGN1cnJlbmN5OiAnRVVSJ30pLmZvcm1hdCh0b3RhbCk7XHJcbiAgICAgICAgdG90YWxDb250YWluZXIuYXBwZW5kQ2hpbGQodG90YWxIZWFkaW5nKTtcclxuICAgICAgICB0b3RhbENvbnRhaW5lci5hcHBlbmRDaGlsZCh0b3RhbEFtb3VudCk7XHJcbiAgICAgICAgcmV0dXJuIHRvdGFsQ29udGFpbmVyO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IHRhZ1xyXG4gICAgICogQHBhcmFtIHtzdHJpbmd8YXJyYXl9IGNsYXNzZXNcclxuICAgICAqIEByZXR1cm4gSFRNTEVsZW1lbnRcclxuICAgICAqL1xyXG4gICAgY3JlYXRlRWxlbWVudFdpdGhDbGFzc2VzKHRhZywgY2xhc3NlcyA9IFtdKVxyXG4gICAge1xyXG4gICAgICAgIGlmICghQXJyYXkuaXNBcnJheShjbGFzc2VzKSkge1xyXG4gICAgICAgICAgICBjbGFzc2VzID0gW2NsYXNzZXNdO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgbGV0IGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KHRhZyk7XHJcbiAgICAgICAgZm9yIChsZXQgY2xhc3NOYW1lIG9mIGNsYXNzZXMpIHtcclxuICAgICAgICAgICAgZWxlbWVudC5jbGFzc0xpc3QuYWRkKGNsYXNzTmFtZSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZXR1cm4gZWxlbWVudDtcclxuICAgIH1cclxuXHJcbiAgICBzZXRCdXR0b25Nb2RlKGJ1dHRvbiwgYWRkZWQpXHJcbiAgICB7XHJcbiAgICAgICAgbGV0IGFkZFRleHQgPSBidXR0b24ucXVlcnlTZWxlY3RvcignLmFkZC1pdGVtJyk7XHJcbiAgICAgICAgbGV0IHJlbW92ZVRleHQgPSBidXR0b24ucXVlcnlTZWxlY3RvcignLnJlbW92ZS1pdGVtJyk7XHJcbiAgICAgICAgaWYgKGFkZGVkKSB7XHJcbiAgICAgICAgICAgIGFkZFRleHQuY2xhc3NMaXN0LnJlbW92ZSgnaGlkZGVuJyk7XHJcbiAgICAgICAgICAgIHJlbW92ZVRleHQuY2xhc3NMaXN0LmFkZCgnaGlkZGVuJyk7XHJcbiAgICAgICAgICAgIGJ1dHRvbi5yZW1vdmVBdHRyaWJ1dGUoJ2RhdGEtYWRkZWQnKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBhZGRUZXh0LmNsYXNzTGlzdC5hZGQoJ2hpZGRlbicpO1xyXG4gICAgICAgICAgICByZW1vdmVUZXh0LmNsYXNzTGlzdC5yZW1vdmUoJ2hpZGRlbicpO1xyXG4gICAgICAgICAgICBidXR0b24uc2V0QXR0cmlidXRlKCdkYXRhLWFkZGVkJywgJycpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBhbmFseXRpY3MoYWRkLCBpdGVtKVxyXG4gICAge1xyXG4gICAgICAgIGlmICghdGhpcy5nYUlzSW5pdGlhbGl6ZWQpIHtcclxuICAgICAgICAgICAgZ2EoXCJjcmVhdGVcIiwgXCJVQS1YWFhYWC1ZXCIpO1xyXG4gICAgICAgICAgICBnYShcInJlcXVpcmVcIiwgXCJlY1wiKTtcclxuICAgICAgICAgICAgdGhpcy5nYUlzSW5pdGlhbGl6ZWQgPSB0cnVlO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgZ2EoJ2VjOmFkZFByb2R1Y3QnLCB7XHJcbiAgICAgICAgICAgICdpZCc6IGl0ZW0uaWQsXHJcbiAgICAgICAgICAgICduYW1lJzogaXRlbS5uYW1lLFxyXG4gICAgICAgICAgICAnY2F0ZWdvcnknOiBpdGVtLmNhdGVnb3J5LnNsdWcsXHJcbiAgICAgICAgICAgICdwcmljZSc6IGl0ZW0ucHJpY2UsXHJcbiAgICAgICAgICAgICdxdWFudGl0eSc6IDEsXHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgZ2EoJ2VjOnNldEFjdGlvbicsIGFkZCA/ICdhZGQnIDogJ3JlbW92ZScpO1xyXG4gICAgICAgIGdhKCdzZW5kJywgJ2V2ZW50JywgJ1VYJywgJ2NsaWNrJywgJ2FkZCB0byBjYXJ0Jyk7ICAgICAvLyBTZW5kIGRhdGEgdXNpbmcgYW4gZXZlbnQuXHJcbiAgICB9XHJcbn0iLCJleHBvcnQgZGVmYXVsdCBjbGFzcyBMYXp5bG9hZGVyIHtcclxuICAgIGNvbnN0cnVjdG9yKClcclxuICAgIHtcclxuICAgICAgICB0aGlzLmxhenlJbWFnZXMgPSBbXS5zbGljZS5jYWxsKGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ2xhenlsb2FkJykpO1xyXG4gICAgICAgIGlmIChcIkludGVyc2VjdGlvbk9ic2VydmVyXCIgaW4gd2luZG93KSB7XHJcbiAgICAgICAgICAgIHRoaXMub2JzZXJ2ZSgpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHRoaXMuZmFsbEJhY2soKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBVc2UgdGhlIG9ic2VydmVyIHRvIGxvYWQgbGF6eSBpbWFnZXMgd2hlbiB2aWV3cG9ydCBpbiByYW5nZVxyXG4gICAgICovXHJcbiAgICBvYnNlcnZlKClcclxuICAgIHtcclxuICAgICAgICBsZXQgbGF6eUltYWdlT2JzZXJ2ZXIgPSBuZXcgSW50ZXJzZWN0aW9uT2JzZXJ2ZXIoKGVudHJpZXMpID0+IHtcclxuICAgICAgICAgICAgZW50cmllcy5mb3JFYWNoKChlbnRyeSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgbGV0IGxhenlJbWFnZSA9IGVudHJ5LnRhcmdldDtcclxuICAgICAgICAgICAgICAgIGlmIChlbnRyeS5pc0ludGVyc2VjdGluZyAmJiBsYXp5SW1hZ2UgaW5zdGFuY2VvZiBIVE1MSW1hZ2VFbGVtZW50KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5sb2FkKGxhenlJbWFnZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgbGF6eUltYWdlT2JzZXJ2ZXIudW5vYnNlcnZlKGxhenlJbWFnZSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICB0aGlzLmxhenlJbWFnZXMuZm9yRWFjaCgoaW1hZ2UpID0+IHtcclxuICAgICAgICAgICAgbGF6eUltYWdlT2JzZXJ2ZXIub2JzZXJ2ZShpbWFnZSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBJZiBpbnRlcnNlY3Rpb25PYnNlcnZlciBub3Qgc3VwcG9ydGVkXHJcbiAgICAgKi9cclxuICAgIGZhbGxCYWNrKClcclxuICAgIHtcclxuICAgICAgICB0aGlzLmxhenlJbWFnZXMuZm9yRWFjaCgobGF6eUltYWdlKSA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMubG9hZChsYXp5SW1hZ2UpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogTG9hZCB0aGUgbGF6eSBpbWFnZVxyXG4gICAgICogQHBhcmFtIHtIVE1MSW1hZ2VFbGVtZW50fSBsYXp5SW1hZ2VcclxuICAgICAqL1xyXG4gICAgbG9hZChsYXp5SW1hZ2UpXHJcbiAgICB7XHJcbiAgICAgICAgbGF6eUltYWdlLmFkZEV2ZW50TGlzdGVuZXIoJ2xvYWQnLCAoKSA9PiB7XHJcbiAgICAgICAgICAgIGxhenlJbWFnZS5jbGFzc0xpc3QucmVtb3ZlKCdsYXp5bG9hZCcpO1xyXG4gICAgICAgICAgICBpZiAobGF6eUltYWdlLmNsYXNzTGlzdC5sZW5ndGggPT09IDApIHtcclxuICAgICAgICAgICAgICAgIGxhenlJbWFnZS5yZW1vdmVBdHRyaWJ1dGUoJ2NsYXNzJyk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgICAgICBsYXp5SW1hZ2Uuc3JjID0gbGF6eUltYWdlLmRhdGFzZXQuc3JjO1xyXG4gICAgfVxyXG59IiwiZXhwb3J0IGRlZmF1bHQgY2xhc3MgTmF2aWdhdGlvblxyXG57XHJcbiAgICAvKipcclxuICAgICAqIEBwYXJhbSB7T2JqZWN0fSBvcHRpb25zXHJcbiAgICAgKiBAcGFyYW0ge0hUTUxFbGVtZW50fSBvcHRpb25zLnRvZ2dsZUJ1dHRvblxyXG4gICAgICogQHBhcmFtIHtIVE1MRWxlbWVudH0gb3B0aW9ucy5uYXZDb250ZW50XHJcbiAgICAgKiBAcGFyYW0ge1N0cmluZ30gW29wdGlvbnMuc2hvd0NsYXNzPXNob3ddXHJcbiAgICAgKiBAcGFyYW0ge0Jvb2xlYW59IFtvcHRpb25zLmNvbGxhcHNlT25PdXRlckNsaWNrPXRydWVdXHJcbiAgICAgKi9cclxuICAgIGNvbnN0cnVjdG9yKG9wdGlvbnMgPSB7fSlcclxuICAgIHtcclxuICAgICAgICB0aGlzLm9wdGlvbnMgPSBPYmplY3QuYXNzaWduKHtcclxuICAgICAgICAgICAgdG9nZ2xlQnV0dG9uOiBudWxsLFxyXG4gICAgICAgICAgICBuYXZDb250ZW50OiBudWxsLFxyXG4gICAgICAgICAgICBzaG93Q2xhc3M6ICdzaG93JyxcclxuICAgICAgICAgICAgY29sbGFwc2VPbk91dGVyQ2xpY2s6IHRydWUsXHJcbiAgICAgICAgfSwgb3B0aW9ucyk7XHJcblxyXG4gICAgICAgIGlmICghKHRoaXMub3B0aW9ucy50b2dnbGVCdXR0b24gaW5zdGFuY2VvZiBIVE1MRWxlbWVudCAmJiB0aGlzLm9wdGlvbnMubmF2Q29udGVudCBpbnN0YW5jZW9mIEhUTUxFbGVtZW50KSkge1xyXG4gICAgICAgICAgICBjb25zb2xlLmVycm9yKCdQYXJhbcOodHJlcyBpbmNvcnJlY3RzJyk7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHRoaXMub3B0aW9ucy50b2dnbGVCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCB0aGlzLm9uVG9nZ2xlQnV0dG9uQ2xpY2suYmluZCh0aGlzKSk7XHJcbiAgICAgICAgaWYgKHRoaXMub3B0aW9ucy5jb2xsYXBzZU9uT3V0ZXJDbGljaykge1xyXG4gICAgICAgICAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHRoaXMub25PdXRlckNsaWNrLmJpbmQodGhpcykpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBvblRvZ2dsZUJ1dHRvbkNsaWNrKClcclxuICAgIHtcclxuICAgICAgICBpZiAodGhpcy5vcHRpb25zLm5hdkNvbnRlbnQuY2xhc3NMaXN0LmNvbnRhaW5zKHRoaXMub3B0aW9ucy5zaG93Q2xhc3MpKSB7XHJcbiAgICAgICAgICAgIHRoaXMub3B0aW9ucy5uYXZDb250ZW50LmNsYXNzTGlzdC5yZW1vdmUodGhpcy5vcHRpb25zLnNob3dDbGFzcyk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgdGhpcy5vcHRpb25zLm5hdkNvbnRlbnQuY2xhc3NMaXN0LmFkZCh0aGlzLm9wdGlvbnMuc2hvd0NsYXNzKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgb25PdXRlckNsaWNrKGUpXHJcbiAgICB7XHJcbiAgICAgICAgbGV0IGVsZW1lbnQgPSBlLnRhcmdldDtcclxuICAgICAgICBsZXQgaXNUb2dnbGVFbHQgPSBlbGVtZW50ID09PSB0aGlzLm9wdGlvbnMudG9nZ2xlQnV0dG9uO1xyXG4gICAgICAgIHdoaWxlKGVsZW1lbnQgJiYgIWlzVG9nZ2xlRWx0KSB7XHJcbiAgICAgICAgICAgIGVsZW1lbnQgPSBlbGVtZW50LnBhcmVudE5vZGU7XHJcbiAgICAgICAgICAgIGlzVG9nZ2xlRWx0ID0gZWxlbWVudCA9PT0gdGhpcy5vcHRpb25zLnRvZ2dsZUJ1dHRvbjtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKCFpc1RvZ2dsZUVsdCkge1xyXG4gICAgICAgICAgICB0aGlzLm9wdGlvbnMubmF2Q29udGVudC5jbGFzc0xpc3QucmVtb3ZlKHRoaXMub3B0aW9ucy5zaG93Q2xhc3MpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufSIsImV4cG9ydCBkZWZhdWx0IGNsYXNzIFNjcm9sbEFuaW1hdGlvbiB7XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBAcGFyYW0ge0hUTUxFbGVtZW50fSBlbGVtZW50XHJcbiAgICAgKi9cclxuICAgIGNvbnN0cnVjdG9yKGVsZW1lbnQpIHtcclxuICAgICAgICBpZiAoIShlbGVtZW50IGluc3RhbmNlb2YgSFRNTEVsZW1lbnQpKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBjb25zb2xlLmVycm9yKFwiQXVjdW4gw6lsw6ltZW50IGR1IERPTS5cIik7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZSgnYW5pbWF0ZWQnKTtcclxuICAgICAgICB0aGlzLmVsZW1lbnQgPSBlbGVtZW50O1xyXG4gICAgICAgIHRoaXMuc3RhcnQgPSBlbGVtZW50LmRhdGFzZXQuc3RhcnQgPT09IHVuZGVmaW5lZCA/IDI1IDogZWxlbWVudC5kYXRhc2V0LnN0YXJ0O1xyXG4gICAgICAgIHRoaXMuZW5kID0gZWxlbWVudC5kYXRhc2V0LmVuZCA9PT0gdW5kZWZpbmVkID8gNzUgOiBlbGVtZW50LmRhdGFzZXQuZW5kO1xyXG4gICAgICAgIHRoaXMubW9iaWxlT25seSA9IGVsZW1lbnQuZGF0YXNldC5tb2JpbGVPbmx5ICE9PSB1bmRlZmluZWQ7XHJcbiAgICAgICAgdGhpcy5pc01vYmlsZSA9IGZhbHNlO1xyXG5cclxuICAgICAgICB0aGlzLm9uU2Nyb2xsKCk7XHJcbiAgICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3Njcm9sbCcsIHRoaXMub25TY3JvbGwuYmluZCh0aGlzKSk7XHJcbiAgICAgICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcigndG91Y2hzdGFydCcsIHRoaXMub25Ub3VjaEV2ZW50LmJpbmQodGhpcykpO1xyXG4gICAgICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ3RvdWNobW92ZScsIHRoaXMub25Ub3VjaEV2ZW50LmJpbmQodGhpcykpO1xyXG4gICAgICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ3RvdWNoZW5kJywgdGhpcy5vblRvdWNoRXZlbnQuYmluZCh0aGlzKSk7XHJcbiAgICAgICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcigndG91Y2hjYW5jZWwnLCB0aGlzLm9uVG91Y2hFdmVudC5iaW5kKHRoaXMpKTtcclxuICAgIH1cclxuXHJcbiAgICBvblNjcm9sbCgpXHJcbiAgICB7XHJcbiAgICAgICAgaWYgKHRoaXMubW9iaWxlT25seSAmJiAhdGhpcy5pc01vYmlsZSkgcmV0dXJuO1xyXG5cclxuICAgICAgICBjb25zdCB3aW5kb3dIZWlnaHQgPSB3aW5kb3cuaW5uZXJIZWlnaHQ7XHJcbiAgICAgICAgY29uc3QgZWxlbWVudFkgPSBNYXRoLnJvdW5kKHRoaXMuZWxlbWVudC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKS55KTtcclxuXHJcbiAgICAgICAgY29uc3QgaW5XaW5kb3dSYW5nZSA9IGVsZW1lbnRZID49IDAgJiYgZWxlbWVudFkgPD0gd2luZG93SGVpZ2h0O1xyXG5cclxuICAgICAgICBjb25zdCByYXRlUG9zID0gTWF0aC5yb3VuZCgxMDAgKiBlbGVtZW50WSAvIHdpbmRvd0hlaWdodCk7XHJcblxyXG4gICAgICAgIGlmIChpbldpbmRvd1JhbmdlICYmIHJhdGVQb3MgPj0gdGhpcy5zdGFydCAmJiByYXRlUG9zIDw9IHRoaXMuZW5kKSB7XHJcbiAgICAgICAgICAgIHRoaXMuZWxlbWVudC5jbGFzc0xpc3QuYWRkKCdhbmltYXRlJyk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgdGhpcy5lbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUoJ2FuaW1hdGUnKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgb25Ub3VjaEV2ZW50KClcclxuICAgIHtcclxuICAgICAgICB0aGlzLmlzTW9iaWxlID0gdHJ1ZTtcclxuICAgIH1cclxufSIsImV4cG9ydCBkZWZhdWx0IGNsYXNzIFNlYXJjaFxyXG57XHJcbiAgICBjb25zdHJ1Y3RvcigpXHJcbiAgICB7XHJcbiAgICAgICAgdGhpcy5zZWFyY2hGb3JtID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3NlYXJjaC1mb3JtJyk7XHJcbiAgICAgICAgdGhpcy5zZWFyY2hUcmlnZ2VyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3NlYXJjaC10cmlnZ2VyJyk7XHJcbiAgICAgICAgdGhpcy5zZWFyY2hJbnB1dCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdzZWFyY2gtaW5wdXQnKTtcclxuICAgICAgICB0aGlzLnNlYXJjaEJ1dHRvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdzZWFyY2gtYnV0dG9uJyk7XHJcblxyXG4gICAgICAgIHRoaXMuc2VhcmNoVHJpZ2dlci5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHRoaXMub25TZWFyY2hUcmlnZ2VyQ2xpY2suYmluZCh0aGlzKSk7XHJcbiAgICAgICAgZG9jdW1lbnQuYm9keS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHRoaXMub25PdXRlckNsaWNrLmJpbmQodGhpcykpO1xyXG4gICAgfVxyXG5cclxuICAgIG9uU2VhcmNoVHJpZ2dlckNsaWNrKClcclxuICAgIHtcclxuICAgICAgICBjb25zdCBoYXNTZWFyY2hSZXF1ZXN0ID0gdGhpcy5zZWFyY2hJbnB1dC52YWx1ZS5sZW5ndGggPiAwO1xyXG4gICAgICAgIGlmICh0aGlzLnNlYXJjaEZvcm0uY2xhc3NMaXN0LmNvbnRhaW5zKCdleHBhbmRlZCcpKSB7XHJcbiAgICAgICAgICAgIGlmIChoYXNTZWFyY2hSZXF1ZXN0KSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnNlYXJjaEJ1dHRvbi5kaXNwYXRjaEV2ZW50KG5ldyBNb3VzZUV2ZW50KCdjbGljaycpKTtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuc2VhcmNoRm9ybS5jbGFzc0xpc3QucmVtb3ZlKCdleHBhbmRlZCcpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgdGhpcy5zZWFyY2hGb3JtLmNsYXNzTGlzdC5hZGQoJ2V4cGFuZGVkJyk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIG9uT3V0ZXJDbGljayhlKVxyXG4gICAge1xyXG4gICAgICAgIGlmIChlLnRhcmdldCA9PT0gdGhpcy5zZWFyY2hUcmlnZ2VyIHx8IGUudGFyZ2V0ID09PSB0aGlzLnNlYXJjaElucHV0IHx8IGUudGFyZ2V0ID09PSB0aGlzLnNlYXJjaEJ1dHRvbikge1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuc2VhcmNoRm9ybS5jbGFzc0xpc3QucmVtb3ZlKCdleHBhbmRlZCcpO1xyXG4gICAgICAgIHRoaXMuc2VhcmNoSW5wdXQudmFsdWUgPSAnJztcclxuICAgIH1cclxufSIsInZhciByZXF1aXJlT2JqZWN0Q29lcmNpYmxlID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3JlcXVpcmUtb2JqZWN0LWNvZXJjaWJsZScpO1xuXG52YXIgcXVvdCA9IC9cIi9nO1xuXG4vLyBCLjIuMy4yLjEgQ3JlYXRlSFRNTChzdHJpbmcsIHRhZywgYXR0cmlidXRlLCB2YWx1ZSlcbi8vIGh0dHBzOi8vdGMzOS5naXRodWIuaW8vZWNtYTI2Mi8jc2VjLWNyZWF0ZWh0bWxcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKHN0cmluZywgdGFnLCBhdHRyaWJ1dGUsIHZhbHVlKSB7XG4gIHZhciBTID0gU3RyaW5nKHJlcXVpcmVPYmplY3RDb2VyY2libGUoc3RyaW5nKSk7XG4gIHZhciBwMSA9ICc8JyArIHRhZztcbiAgaWYgKGF0dHJpYnV0ZSAhPT0gJycpIHAxICs9ICcgJyArIGF0dHJpYnV0ZSArICc9XCInICsgU3RyaW5nKHZhbHVlKS5yZXBsYWNlKHF1b3QsICcmcXVvdDsnKSArICdcIic7XG4gIHJldHVybiBwMSArICc+JyArIFMgKyAnPC8nICsgdGFnICsgJz4nO1xufTtcbiIsInZhciBmYWlscyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9mYWlscycpO1xuXG4vLyBjaGVjayB0aGUgZXhpc3RlbmNlIG9mIGEgbWV0aG9kLCBsb3dlcmNhc2Vcbi8vIG9mIGEgdGFnIGFuZCBlc2NhcGluZyBxdW90ZXMgaW4gYXJndW1lbnRzXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChNRVRIT0RfTkFNRSkge1xuICByZXR1cm4gZmFpbHMoZnVuY3Rpb24gKCkge1xuICAgIHZhciB0ZXN0ID0gJydbTUVUSE9EX05BTUVdKCdcIicpO1xuICAgIHJldHVybiB0ZXN0ICE9PSB0ZXN0LnRvTG93ZXJDYXNlKCkgfHwgdGVzdC5zcGxpdCgnXCInKS5sZW5ndGggPiAzO1xuICB9KTtcbn07XG4iLCJ2YXIgJCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9leHBvcnQnKTtcbnZhciAkdmFsdWVzID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL29iamVjdC10by1hcnJheScpLnZhbHVlcztcblxuLy8gYE9iamVjdC52YWx1ZXNgIG1ldGhvZFxuLy8gaHR0cHM6Ly90YzM5LmdpdGh1Yi5pby9lY21hMjYyLyNzZWMtb2JqZWN0LnZhbHVlc1xuJCh7IHRhcmdldDogJ09iamVjdCcsIHN0YXQ6IHRydWUgfSwge1xuICB2YWx1ZXM6IGZ1bmN0aW9uIHZhbHVlcyhPKSB7XG4gICAgcmV0dXJuICR2YWx1ZXMoTyk7XG4gIH1cbn0pO1xuIiwiJ3VzZSBzdHJpY3QnO1xudmFyICQgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZXhwb3J0Jyk7XG52YXIgY3JlYXRlSFRNTCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9jcmVhdGUtaHRtbCcpO1xudmFyIGZvcmNlZFN0cmluZ0hUTUxNZXRob2QgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZm9yY2VkLXN0cmluZy1odG1sLW1ldGhvZCcpO1xuXG4vLyBgU3RyaW5nLnByb3RvdHlwZS5saW5rYCBtZXRob2Rcbi8vIGh0dHBzOi8vdGMzOS5naXRodWIuaW8vZWNtYTI2Mi8jc2VjLXN0cmluZy5wcm90b3R5cGUubGlua1xuJCh7IHRhcmdldDogJ1N0cmluZycsIHByb3RvOiB0cnVlLCBmb3JjZWQ6IGZvcmNlZFN0cmluZ0hUTUxNZXRob2QoJ2xpbmsnKSB9LCB7XG4gIGxpbms6IGZ1bmN0aW9uIGxpbmsodXJsKSB7XG4gICAgcmV0dXJuIGNyZWF0ZUhUTUwodGhpcywgJ2EnLCAnaHJlZicsIHVybCk7XG4gIH1cbn0pO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==