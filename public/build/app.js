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
    this.onScroll();
    window.addEventListener('scroll', this.onScroll.bind(this));
  }

  _createClass(ScrollAnimation, [{
    key: "onScroll",
    value: function onScroll() {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hc3NldHMvY3NzL2FwcC5zY3NzIiwid2VicGFjazovLy8uL2Fzc2V0cy9qcy9hcHAuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzL2NsYXNzL19CYWNrSW5TdG9jay5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvY2xhc3MvX0NhcnQuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzL2NsYXNzL19MYXp5bG9hZGVyLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9qcy9jbGFzcy9fTmF2aWdhdGlvbi5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvY2xhc3MvX1Njcm9sbEFuaW1hdGlvbi5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvY2xhc3MvX1NlYXJjaC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvY3JlYXRlLWh0bWwuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL2ZvcmNlZC1zdHJpbmctaHRtbC1tZXRob2QuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9lcy5vYmplY3QudmFsdWVzLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvZXMuc3RyaW5nLmxpbmsuanMiXSwibmFtZXMiOlsicmVxdWlyZSIsImRvY3VtZW50IiwiYWRkRXZlbnRMaXN0ZW5lciIsIkxhenlsb2FkZXIiLCJjYXJ0UG9wdXAiLCJnZXRFbGVtZW50QnlJZCIsInBvcHVwIiwiUG9wdXAiLCJidXR0b25zIiwiZWxlbWVudCIsImRpc3BsYXkiLCJDYXJ0IiwiU2VhcmNoIiwiTmF2aWdhdGlvbiIsInRvZ2dsZUJ1dHRvbiIsIm5hdkNvbnRlbnQiLCJjb2xsYXBzZU9uT3V0ZXJDbGljayIsIndvbWFuVG9nZ2xlIiwibWFuVG9nZ2xlIiwibmF2IiwiWU9mZnNldCIsIndpbmRvdyIsInBhZ2VZT2Zmc2V0IiwiY2xhc3NMaXN0IiwiYWRkIiwicmVtb3ZlIiwiYmFja2luc3RvY2tFbHRzIiwic2xpY2UiLCJjYWxsIiwiZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSIsImZvckVhY2giLCJiYWNraW5zdG9ja0VsdCIsIkJhY2tJblN0b2NrIiwiYW5pbWF0ZWRFbHRzIiwiYW5pbWF0ZWRFbHQiLCJTY3JvbGxBbmltYXRpb24iLCJidXR0b24iLCJzcGlubmVyIiwicXVlcnlTZWxlY3RvciIsIml0ZW1JZCIsImRhdGFzZXQiLCJpZCIsImNhbGxiYWNrVGV4dCIsInVybCIsImVtYWlsIiwicG9wdXBFbHQiLCJidWlsZFBvcHVwIiwicmVnaXN0ZXJlZCIsIm9uQnV0dG9uQ2xpY2siLCJiaW5kIiwiY3JlYXRlRWxlbWVudCIsImlubmVySFRNTCIsInVuZGVmaW5lZCIsImFza0VtYWlsIiwiYWpheCIsImNhbGxiYWNrIiwibWV0aG9kIiwiZGF0YXMiLCJhY3Rpb25CdXR0b24iLCJyZXNwb25zZSIsInN1Y2Nlc3MiLCJpbm5lclRleHQiLCJjb25zb2xlIiwiZXJyb3IiLCJvcHRpb25zIiwiT2JqZWN0IiwiYXNzaWduIiwiYnV0dG9uX2NsYXNzIiwibmF2Y2FydF9jbGFzcyIsIm5hdmNhcnRfYnV0dG9uX2NsYXNzIiwic2hvcHBpbmdfYmFnX2NsYXNzIiwic2hvcHBpbmdfYmFnX2l0ZW1fY2xhc3MiLCJjYXJ0X3F1YW50aXR5X2NsYXNzIiwiY2FydF91cmwiLCJwcm9jZXNzaW5nIiwiY2FydENvbnRlbnQiLCJvblNhbGVzIiwiZ2FJc0luaXRpYWxpemVkIiwibmF2Y2FydCIsIm5hdmNhcnRUb2dnbGUiLCJzaG9wcGluZ0JhZyIsInNob3BwaW5nQmFnUXVhbnRpdHkiLCJzaG9wcGluZ0JhZ0l0ZW1CdXR0b25zIiwicXVlcnlTZWxlY3RvckFsbCIsIm9uTmF2Y2FydFRvZ2dsZUNsaWNrIiwib25TaG9wcGluZ0JhZ0J1dHRvbkNsaWNrIiwiZSIsInByZXZlbnREZWZhdWx0IiwiYWRkZWQiLCJyZW1vdmVfaXRlbV91cmwiLCJhZGRfaXRlbV91cmwiLCJzZXRCdXR0b25Nb2RlIiwidXBkYXRlQ2FydCIsImNhcnQiLCJibHVyIiwic2hvdyIsImFuYWx5dGljcyIsIkpTT04iLCJwYXJzZSIsIml0ZW0iLCJhZGRUb0NhcnRCdXR0b24iLCJpdGVtX2lkIiwiSFRNTEVsZW1lbnQiLCJqc29uUmVzcG9uc2UiLCJjb3VudCIsInRvdGFsIiwicmVzZXRJbXBvcnQiLCJ2YWx1ZXMiLCJpdGVtTGlzdEVsdCIsImNyZWF0ZVNob3BwaW5nQmFnSXRlbSIsInByaWNlIiwiZGlzY291bnRQcmljZSIsInF1YW50aXR5IiwicGFyc2VJbnQiLCJwYXJzZUZsb2F0IiwiYXBwZW5kQ2hpbGQiLCJzaGlwcGluZ0ZlZUxpc3RFbHQiLCJpc1NoaXBwaW5nRmVlIiwibmFtZSIsInNob3BwaW5nQmFnVG90YWwiLCJjcmVhdGVTaG9wcGluZ0JhZ1RvdGFsIiwiY2FydExpbmtFbHQiLCJjcmVhdGVFbGVtZW50V2l0aENsYXNzZXMiLCJjYXJ0TGluayIsImhyZWYiLCJjYXJ0X2xpbmtfdGV4dCIsIml0ZW1Db250YWluZXIiLCJzcGFuIiwiaXRlbUltYWdlIiwiY3JlYXRlVGV4dE5vZGUiLCJzcmMiLCJpbWFnZXMiLCJjYWNoZVBhdGgiLCJhbHQiLCJpdGVtTGluayIsImxpbmsiLCJzZXRBdHRyaWJ1dGUiLCJpdGVtUHJpY2UiLCJJbnRsIiwiTnVtYmVyRm9ybWF0Iiwic3R5bGUiLCJjdXJyZW5jeSIsImZvcm1hdCIsIml0ZW1SZW1vdmUiLCJyZW1vdmVMaW5rIiwiY2xvbmVkSXRlbSIsImNsb25lTm9kZSIsImNsb25lZEl0ZW1SZW1vdmUiLCJ0b3RhbENvbnRhaW5lciIsInRvdGFsSGVhZGluZyIsInRvdGFsQW1vdW50IiwidGFnIiwiY2xhc3NlcyIsIkFycmF5IiwiaXNBcnJheSIsImNsYXNzTmFtZSIsImFkZFRleHQiLCJyZW1vdmVUZXh0IiwicmVtb3ZlQXR0cmlidXRlIiwiZ2EiLCJjYXRlZ29yeSIsInNsdWciLCJsYXp5SW1hZ2VzIiwib2JzZXJ2ZSIsImZhbGxCYWNrIiwibGF6eUltYWdlT2JzZXJ2ZXIiLCJJbnRlcnNlY3Rpb25PYnNlcnZlciIsImVudHJpZXMiLCJlbnRyeSIsImxhenlJbWFnZSIsInRhcmdldCIsImlzSW50ZXJzZWN0aW5nIiwiSFRNTEltYWdlRWxlbWVudCIsImxvYWQiLCJ1bm9ic2VydmUiLCJpbWFnZSIsImxlbmd0aCIsInNob3dDbGFzcyIsIm9uVG9nZ2xlQnV0dG9uQ2xpY2siLCJvbk91dGVyQ2xpY2siLCJjb250YWlucyIsImlzVG9nZ2xlRWx0IiwicGFyZW50Tm9kZSIsInN0YXJ0IiwiZW5kIiwib25TY3JvbGwiLCJ3aW5kb3dIZWlnaHQiLCJpbm5lckhlaWdodCIsImVsZW1lbnRZIiwiTWF0aCIsInJvdW5kIiwiZ2V0Qm91bmRpbmdDbGllbnRSZWN0IiwieSIsImluV2luZG93UmFuZ2UiLCJyYXRlUG9zIiwic2VhcmNoRm9ybSIsInNlYXJjaFRyaWdnZXIiLCJzZWFyY2hJbnB1dCIsInNlYXJjaEJ1dHRvbiIsIm9uU2VhcmNoVHJpZ2dlckNsaWNrIiwiYm9keSIsImhhc1NlYXJjaFJlcXVlc3QiLCJ2YWx1ZSIsImRpc3BhdGNoRXZlbnQiLCJNb3VzZUV2ZW50Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQSx1Qzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDQUE7Ozs7OztBQU9BO0FBQ0FBLG1CQUFPLENBQUMsOENBQUQsQ0FBUCxDLENBRUE7QUFDQTs7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQUMsUUFBUSxDQUFDQyxnQkFBVCxDQUEwQixrQkFBMUIsRUFBOEMsWUFBTTtBQUNoRDtBQUNBLE1BQUlDLHlEQUFKLEdBRmdELENBSWhEOztBQUNBLE1BQU1DLFNBQVMsR0FBR0gsUUFBUSxDQUFDSSxjQUFULENBQXdCLG1CQUF4QixDQUFsQjs7QUFDQSxNQUFJRCxTQUFKLEVBQWU7QUFDWCxRQUFNRSxLQUFLLEdBQUcsSUFBSUMsb0RBQUosQ0FBVUgsU0FBVixFQUFxQjtBQUMvQkks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YjtBQUNJLFVBQUlBLENBQUMsQ0FBQ29GLE1BQUYsS0FBYSxLQUFLMEIsYUFBbEIsSUFBbUM5RyxDQUFDLENBQUNvRixNQUFGLEtBQWEsS0FBSzJCLFdBQXJELElBQW9FL0csQ0FBQyxDQUFDb0YsTUFBRixLQUFhLEtBQUs0QixZQUExRixFQUF3RztBQUNwRztBQUNIOztBQUNELFdBQUtILFVBQUwsQ0FBZ0I1SyxTQUFoQixDQUEwQkUsTUFBMUIsQ0FBaUMsVUFBakM7QUFDQSxXQUFLNEssV0FBTCxDQUFpQkssS0FBakIsR0FBeUIsRUFBekI7QUFDSDs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNsQ0wsNkJBQTZCLG1CQUFPLENBQUMsMkdBQXVDOztBQUU1RTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMEZBQTBGO0FBQzFGO0FBQ0E7Ozs7Ozs7Ozs7OztBQ1hBLFlBQVksbUJBQU8sQ0FBQyxxRUFBb0I7O0FBRXhDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDs7Ozs7Ozs7Ozs7O0FDVEEsUUFBUSxtQkFBTyxDQUFDLHVFQUFxQjtBQUNyQyxjQUFjLG1CQUFPLENBQUMseUZBQThCOztBQUVwRDtBQUNBO0FBQ0EsR0FBRywrQkFBK0I7QUFDbEM7QUFDQTtBQUNBO0FBQ0EsQ0FBQzs7Ozs7Ozs7Ozs7OztBQ1RZO0FBQ2IsUUFBUSxtQkFBTyxDQUFDLHVFQUFxQjtBQUNyQyxpQkFBaUIsbUJBQU8sQ0FBQyxpRkFBMEI7QUFDbkQsNkJBQTZCLG1CQUFPLENBQUMsNkdBQXdDOztBQUU3RTtBQUNBO0FBQ0EsR0FBRyx3RUFBd0U7QUFDM0U7QUFDQTtBQUNBO0FBQ0EsQ0FBQyIsImZpbGUiOiJhcHAuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW4iLCIvKlxyXG4gKiBXZWxjb21lIHRvIHlvdXIgYXBwJ3MgbWFpbiBKYXZhU2NyaXB0IGZpbGUhXHJcbiAqXHJcbiAqIFdlIHJlY29tbWVuZCBpbmNsdWRpbmcgdGhlIGJ1aWx0IHZlcnNpb24gb2YgdGhpcyBKYXZhU2NyaXB0IGZpbGVcclxuICogKGFuZCBpdHMgQ1NTIGZpbGUpIGluIHlvdXIgYmFzZSBsYXlvdXQgKGJhc2UuaHRtbC50d2lnKS5cclxuICovXHJcblxyXG4vLyBhbnkgQ1NTIHlvdSByZXF1aXJlIHdpbGwgb3V0cHV0IGludG8gYSBzaW5nbGUgY3NzIGZpbGUgKGFwcC5jc3MgaW4gdGhpcyBjYXNlKVxyXG5yZXF1aXJlKCcuLi9jc3MvYXBwLnNjc3MnKTtcclxuXHJcbi8vIE5lZWQgalF1ZXJ5PyBJbnN0YWxsIGl0IHdpdGggXCJ5YXJuIGFkZCBqcXVlcnlcIiwgdGhlbiB1bmNvbW1lbnQgdG8gcmVxdWlyZSBpdC5cclxuLy8gY29uc3QgJCA9IHJlcXVpcmUoJ2pxdWVyeScpO1xyXG5cclxuaW1wb3J0IExhenlsb2FkZXIgZnJvbSBcIi4vY2xhc3MvX0xhenlsb2FkZXJcIjtcclxuaW1wb3J0IENhcnQgZnJvbSBcIi4vY2xhc3MvX0NhcnRcIjtcclxuaW1wb3J0IFBvcHVwIGZyb20gXCIuL2NsYXNzL19Qb3B1cFwiO1xyXG5pbXBvcnQgU2VhcmNoIGZyb20gXCIuL2NsYXNzL19TZWFyY2hcIjtcclxuaW1wb3J0IE5hdmlnYXRpb24gZnJvbSBcIi4vY2xhc3MvX05hdmlnYXRpb25cIjtcclxuaW1wb3J0IEJhY2tJblN0b2NrIGZyb20gXCIuL2NsYXNzL19CYWNrSW5TdG9ja1wiO1xyXG5pbXBvcnQgU2Nyb2xsQW5pbWF0aW9uIGZyb20gXCIuL2NsYXNzL19TY3JvbGxBbmltYXRpb25cIjtcclxuXHJcbmRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ0RPTUNvbnRlbnRMb2FkZWQnLCAoKSA9PiB7XHJcbiAgICAvL0NoYXJnZW1lbnQgZGlmZsOpcsOpIGRlcyBpbWFnZXNcclxuICAgIG5ldyBMYXp5bG9hZGVyKCk7XHJcblxyXG4gICAgLy9Qb3B1cCBwYW5pZXJcclxuICAgIGNvbnN0IGNhcnRQb3B1cCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdhZGQtdG8tY2FydC1wb3B1cCcpO1xyXG4gICAgaWYgKGNhcnRQb3B1cCkge1xyXG4gICAgICAgIGNvbnN0IHBvcHVwID0gbmV3IFBvcHVwKGNhcnRQb3B1cCwge1xyXG4gICAgICAgICAgICBidXR0b25zOiBbXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgZWxlbWVudDogZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NvbnRpbnVlLXNob3BwaW5nJylcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgXSxcclxuICAgICAgICAgICAgZGlzcGxheTogZmFsc2VcclxuICAgICAgICB9KTtcclxuICAgICAgICBuZXcgQ2FydCh7IHBvcHVwIH0pXHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICAgIG5ldyBDYXJ0KCk7XHJcbiAgICB9XHJcblxyXG4gICAgLy9Nb2R1bGUgZGUgcmVjaGVyY2hlXHJcbiAgICBuZXcgU2VhcmNoKCk7XHJcblxyXG4gICAgLy9TdGlja3kgbmF2YmFyIG1hc3F1w6llIGF1IHNjcm9sbCBkZXNjZW5kYW50LCB2aXNpYmxlIGF1IHNjcm9sbCBtb250YW50XHJcbiAgICBuZXcgTmF2aWdhdGlvbih7XHJcbiAgICAgICAgdG9nZ2xlQnV0dG9uOiBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbmF2YmFyVG9nZ2xlJyksXHJcbiAgICAgICAgbmF2Q29udGVudDogZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ25hdmJhckNvbnRlbnQnKSxcclxuICAgICAgICBjb2xsYXBzZU9uT3V0ZXJDbGljazogZmFsc2UsXHJcbiAgICB9KTtcclxuICAgIGNvbnN0IHdvbWFuVG9nZ2xlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3dvbWFuVG9nZ2xlJyk7XHJcbiAgICBuZXcgTmF2aWdhdGlvbih7dG9nZ2xlQnV0dG9uOiB3b21hblRvZ2dsZSwgbmF2Q29udGVudDogd29tYW5Ub2dnbGV9KTtcclxuICAgIGNvbnN0IG1hblRvZ2dsZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdtYW5Ub2dnbGUnKTtcclxuICAgIG5ldyBOYXZpZ2F0aW9uKHt0b2dnbGVCdXR0b246IG1hblRvZ2dsZSwgbmF2Q29udGVudDogbWFuVG9nZ2xlfSk7XHJcbiAgICBjb25zdCBuYXYgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYnQtbmF2YmFyJyk7XHJcbiAgICBsZXQgWU9mZnNldCA9IHdpbmRvdy5wYWdlWU9mZnNldDtcclxuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdzY3JvbGwnLCAoKSA9PiB7XHJcbiAgICAgICAgaWYgKHdpbmRvdy5wYWdlWU9mZnNldCA+IFlPZmZzZXQpIHtcclxuICAgICAgICAgICAgbmF2LmNsYXNzTGlzdC5hZGQoJ2hpZGUnKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBuYXYuY2xhc3NMaXN0LnJlbW92ZSgnaGlkZScpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBZT2Zmc2V0ID0gd2luZG93LnBhZ2VZT2Zmc2V0O1xyXG4gICAgfSk7XHJcblxyXG4gICAgLy9HZXN0aW9uIGRlIGxhIHJlbWlzZSBlbiBzdG9ja1xyXG4gICAgY29uc3QgYmFja2luc3RvY2tFbHRzID0gW10uc2xpY2UuY2FsbChkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCdiYWNraW5zdG9jaycpKTtcclxuICAgIGJhY2tpbnN0b2NrRWx0cy5mb3JFYWNoKGJhY2tpbnN0b2NrRWx0ID0+IG5ldyBCYWNrSW5TdG9jayhiYWNraW5zdG9ja0VsdCkpO1xyXG5cclxuICAgIC8vR2VzdGlvbiBkZXMgYW5pbWF0aW9ucyBhdSBzY3JvbGxcclxuICAgIGNvbnN0IGFuaW1hdGVkRWx0cyA9IFtdLnNsaWNlLmNhbGwoZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgnYW5pbWF0ZWQnKSk7XHJcbiAgICBhbmltYXRlZEVsdHMuZm9yRWFjaChhbmltYXRlZEVsdCA9PiBuZXcgU2Nyb2xsQW5pbWF0aW9uKGFuaW1hdGVkRWx0KSk7XHJcbn0pO1xyXG4iLCJpbXBvcnQgUG9wdXAgZnJvbSAnLi9fUG9wdXAnO1xyXG5pbXBvcnQgYWpheCBmcm9tIFwiLi4vZnVuY3Rpb25zL19hamF4XCI7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBCYWNrSW5TdG9ja1xyXG57XHJcbiAgICAvKipcclxuICAgICAqIEBwYXJhbSB7SFRNTEVsZW1lbnR9IGJ1dHRvblxyXG4gICAgICovXHJcbiAgICBjb25zdHJ1Y3RvcihidXR0b24pXHJcbiAgICB7XHJcbiAgICAgICAgdGhpcy5idXR0b24gPSBidXR0b247XHJcbiAgICAgICAgdGhpcy5zcGlubmVyID0gYnV0dG9uLnF1ZXJ5U2VsZWN0b3IoJy5mYXMuZmEtc3Bpbm5lcicpO1xyXG4gICAgICAgIHRoaXMuaXRlbUlkID0gYnV0dG9uLmRhdGFzZXQuaWQ7XHJcbiAgICAgICAgdGhpcy5jYWxsYmFja1RleHQgPSBidXR0b24uZGF0YXNldC5jYWxsYmFja1RleHQ7XHJcbiAgICAgICAgdGhpcy51cmwgPSBidXR0b24uZGF0YXNldC51cmw7XHJcbiAgICAgICAgdGhpcy5lbWFpbCA9IGJ1dHRvbi5kYXRhc2V0LmVtYWlsO1xyXG4gICAgICAgIHRoaXMucG9wdXBFbHQgPSB0aGlzLmJ1aWxkUG9wdXAoKTtcclxuICAgICAgICB0aGlzLnJlZ2lzdGVyZWQgPSBmYWxzZTtcclxuXHJcbiAgICAgICAgdGhpcy5idXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCB0aGlzLm9uQnV0dG9uQ2xpY2suYmluZCh0aGlzKSk7XHJcbiAgICB9XHJcblxyXG4gICAgYnVpbGRQb3B1cCgpXHJcbiAgICB7XHJcbiAgICAgICAgY29uc3QgcG9wdXBFbHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgICAgICBwb3B1cEVsdC5jbGFzc0xpc3QuYWRkKCdwb3B1cCcpO1xyXG4gICAgICAgIHBvcHVwRWx0LmlubmVySFRNTCA9IGBcclxuICAgICAgICAgICAgPGkgY2xhc3M9XCJmYXMgZmEtdGltZXMtY2lyY2xlXCI+PC9pPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwicG9wdXBfX2hlYWRpbmdcIj5cclxuICAgICAgICAgICAgICAgIFZvdHJlIGVtYWlsXHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwicG9wdXBfX3RleHRcIj5cclxuICAgICAgICAgICAgICAgIDxpbnB1dCBjbGFzcz1cImlucHV0LWVtYWlsIGZvcm0tY29udHJvbFwiIHR5cGU9XCJlbWFpbFwiPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cIm15LTMgdGV4dC1jZW50ZXJcIj5cclxuICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3M9XCJ2YWxpZC1lbWFpbCBidG4gYnRuLXN1Y2Nlc3MgZmxvYXQtc20tcmlnaHRcIj48aSBjbGFzcz1cImQtbm9uZSBmYXMgZmEtc3Bpbm5lclwiPjwvaT4gVmFsaWRlcjwvYnV0dG9uPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICBgO1xyXG4gICAgICAgIHJldHVybiBwb3B1cEVsdDtcclxuICAgIH1cclxuXHJcbiAgICBvbkJ1dHRvbkNsaWNrKClcclxuICAgIHtcclxuICAgICAgICBpZiAodGhpcy5yZWdpc3RlcmVkKSByZXR1cm47XHJcblxyXG4gICAgICAgIGlmICh0aGlzLmVtYWlsID09PSB1bmRlZmluZWQpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuYXNrRW1haWwoKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBpZiAodGhpcy5zcGlubmVyKSB0aGlzLnNwaW5uZXIuY2xhc3NMaXN0LnJlbW92ZSgnZC1ub25lJyk7XHJcbiAgICAgICAgICAgIGFqYXgoXHJcbiAgICAgICAgICAgICAgICB0aGlzLnVybCxcclxuICAgICAgICAgICAgICAgIHRoaXMuY2FsbGJhY2suYmluZCh0aGlzKSxcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICBtZXRob2Q6ICdQT1NUJyxcclxuICAgICAgICAgICAgICAgICAgICBkYXRhczoge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZDogdGhpcy5pdGVtSWQsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGVtYWlsOiB0aGlzLmVtYWlsXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICApO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBhc2tFbWFpbCgpXHJcbiAgICB7XHJcbiAgICAgICAgY29uc3QgYWN0aW9uQnV0dG9uID0ge1xyXG4gICAgICAgICAgICBlbGVtZW50OiB0aGlzLnBvcHVwRWx0LnF1ZXJ5U2VsZWN0b3IoJy52YWxpZC1lbWFpbCcpLFxyXG4gICAgICAgICAgICB1cmw6IHRoaXMudXJsLFxyXG4gICAgICAgICAgICBjYWxsYmFjazogdGhpcy5jYWxsYmFjay5iaW5kKHRoaXMpLFxyXG4gICAgICAgICAgICBkYXRhczoge1xyXG4gICAgICAgICAgICAgICAgaWQ6IHRoaXMuaXRlbUlkLFxyXG4gICAgICAgICAgICAgICAgZW1haWw6IHRoaXMucG9wdXBFbHQucXVlcnlTZWxlY3RvcignLmlucHV0LWVtYWlsJylcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgbmV3IFBvcHVwKHRoaXMucG9wdXBFbHQsIHtidXR0b25zOiBbYWN0aW9uQnV0dG9uXX0pO1xyXG4gICAgfVxyXG5cclxuICAgIGNhbGxiYWNrKHJlc3BvbnNlKVxyXG4gICAge1xyXG4gICAgICAgIGlmIChyZXNwb25zZS5zdWNjZXNzKSB7XHJcbiAgICAgICAgICAgIHRoaXMuYnV0dG9uLmlubmVyVGV4dCA9IHRoaXMuY2FsbGJhY2tUZXh0O1xyXG4gICAgICAgICAgICB0aGlzLnJlZ2lzdGVyZWQgPSB0cnVlO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IocmVzcG9uc2UuZXJyb3IpO1xyXG4gICAgICAgICAgICBpZiAodGhpcy5zcGlubmVyKSB0aGlzLnNwaW5uZXIuY2xhc3NMaXN0LmFkZCgnZC1ub25lJyk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59IiwiaW1wb3J0IGFqYXggZnJvbSBcIi4uL2Z1bmN0aW9ucy9fYWpheFwiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ2FydCB7XHJcbiAgICAvKipcclxuICAgICAqIEBwYXJhbSB7T2JqZWN0fSBvcHRpb25zXHJcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gW29wdGlvbnMuYnV0dG9uX2NsYXNzPWNhcnQtYnV0dG9uXSBDbGFzc2UgQ1NTIGRlcyBib3V0b25zIGQnYWpvdXQgYXUgcGFuaWVyXHJcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gW29wdGlvbnMubmF2Y2FydF9jbGFzcz1uYXZjYXJ0XSBDbGFzc2UgQ1NTIGR1IG1lbnUgcGFuaWVyXHJcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gW29wdGlvbnMubmF2Y2FydF9idXR0b25fY2xhc3M9bmF2Y2FydF9faG92ZXJdIENsYXNzZSBDU1MgZHUgYm91dG9uIGR1IG1lbnUgcGFuaWVyXHJcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gW29wdGlvbnMuc2hvcHBpbmdfYmFnX2NsYXNzPWNhcnQtaG92ZXJdIENsYXNzZSBDU1MgZHUgbWVudSBwYW5pZXJcclxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSBbb3B0aW9ucy5zaG9wcGluZ19iYWdfaXRlbV9jbGFzcz1jYXJ0LWhvdmVyX19pdGVtXSBDbGFzc2UgQ1NTIGRlcyBpdGVtcyBkdSBtZW51IHBhbmllclxyXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IFtvcHRpb25zLmNhcnRfcXVhbnRpdHlfY2xhc3M9bmF2Y2FydF0gQ2xhc3NlIENTUyBxdWFudGl0w6kgZGFucyBsZSBwYW5pZXJcclxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSBbb3B0aW9ucy5jYXJ0X3VybD0vcGFuaWVyL10gTGllbiB2ZXJzIGxlIHBhbmllclxyXG4gICAgICogQHBhcmFtIHtQb3B1cH0gW29wdGlvbnMucG9wdXA9bnVsbF0gcG9wdXBcclxuICAgICAqL1xyXG4gICAgY29uc3RydWN0b3Iob3B0aW9ucyA9IHt9KVxyXG4gICAge1xyXG4gICAgICAgIC8vU2V0dGluZ3NcclxuICAgICAgICB0aGlzLm9wdGlvbnMgPSBPYmplY3QuYXNzaWduKHtcclxuICAgICAgICAgICAgYnV0dG9uX2NsYXNzOiAnY2FydC1idXR0b24nLFxyXG4gICAgICAgICAgICBuYXZjYXJ0X2NsYXNzOiAnbmF2Y2FydCcsXHJcbiAgICAgICAgICAgIG5hdmNhcnRfYnV0dG9uX2NsYXNzOiAnbmF2Y2FydF9faG92ZXInLFxyXG4gICAgICAgICAgICBzaG9wcGluZ19iYWdfY2xhc3M6ICdjYXJ0LWhvdmVyJyxcclxuICAgICAgICAgICAgc2hvcHBpbmdfYmFnX2l0ZW1fY2xhc3M6ICdjYXJ0LWhvdmVyX19pdGVtJyxcclxuICAgICAgICAgICAgY2FydF9xdWFudGl0eV9jbGFzczogJ25hdmNhcnQnLFxyXG4gICAgICAgICAgICBjYXJ0X3VybDogJy9wYW5pZXIvJyxcclxuICAgICAgICAgICAgcG9wdXA6IG51bGwsXHJcbiAgICAgICAgfSwgb3B0aW9ucyk7XHJcbiAgICAgICAgdGhpcy5wcm9jZXNzaW5nID0gZmFsc2U7XHJcbiAgICAgICAgdGhpcy5jYXJ0Q29udGVudCA9IHt9O1xyXG4gICAgICAgIHRoaXMub25TYWxlcyA9IGZhbHNlO1xyXG4gICAgICAgIHRoaXMuZ2FJc0luaXRpYWxpemVkID0gZmFsc2U7XHJcblxyXG4gICAgICAgIC8vRE9NIGhhbmRsaW5nXHJcbiAgICAgICAgdGhpcy5idXR0b25zID0gW10uc2xpY2UuY2FsbChkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKHRoaXMub3B0aW9ucy5idXR0b25fY2xhc3MpKTtcclxuICAgICAgICB0aGlzLm5hdmNhcnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuJyt0aGlzLm9wdGlvbnMubmF2Y2FydF9jbGFzcyk7XHJcbiAgICAgICAgdGhpcy5uYXZjYXJ0VG9nZ2xlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLicrdGhpcy5vcHRpb25zLm5hdmNhcnRfYnV0dG9uX2NsYXNzKTtcclxuICAgICAgICB0aGlzLnNob3BwaW5nQmFnID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLicrdGhpcy5vcHRpb25zLnNob3BwaW5nX2JhZ19jbGFzcyk7XHJcbiAgICAgICAgdGhpcy5zaG9wcGluZ0JhZ1F1YW50aXR5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLicrdGhpcy5vcHRpb25zLmNhcnRfcXVhbnRpdHlfY2xhc3MpO1xyXG4gICAgICAgIHRoaXMuc2hvcHBpbmdCYWdJdGVtQnV0dG9ucyA9IFtdLnNsaWNlLmNhbGwoZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLicrdGhpcy5vcHRpb25zLnNob3BwaW5nX2JhZ19pdGVtX2NsYXNzKycgLnJlbW92ZS1pdGVtJykpO1xyXG5cclxuICAgICAgICAvL0V2ZW50c1xyXG4gICAgICAgIHRoaXMubmF2Y2FydFRvZ2dsZS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHRoaXMub25OYXZjYXJ0VG9nZ2xlQ2xpY2suYmluZCh0aGlzKSk7XHJcbiAgICAgICAgdGhpcy5idXR0b25zLmZvckVhY2goYnV0dG9uID0+IHtcclxuICAgICAgICAgICAgYnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgdGhpcy5vbkJ1dHRvbkNsaWNrLmJpbmQodGhpcywgYnV0dG9uKSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgdGhpcy5zaG9wcGluZ0JhZ0l0ZW1CdXR0b25zLmZvckVhY2goYnV0dG9uID0+IHtcclxuICAgICAgICAgICAgYnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgdGhpcy5vblNob3BwaW5nQmFnQnV0dG9uQ2xpY2suYmluZCh0aGlzLCBidXR0b24pKTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBvbk5hdmNhcnRUb2dnbGVDbGljayhlKVxyXG4gICAge1xyXG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgIH1cclxuXHJcbiAgICBvbkJ1dHRvbkNsaWNrKGJ1dHRvbilcclxuICAgIHtcclxuICAgICAgICBpZiAodGhpcy5wcm9jZXNzaW5nKSB7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5wcm9jZXNzaW5nID0gdHJ1ZTtcclxuICAgICAgICBsZXQgc3Bpbm5lciA9IGJ1dHRvbi5xdWVyeVNlbGVjdG9yKCcuZmEtc3Bpbm5lcicpO1xyXG4gICAgICAgIHNwaW5uZXIuY2xhc3NMaXN0LnJlbW92ZSgnaGlkZGVuJyk7XHJcbiAgICAgICAgbGV0IGFkZGVkID0gYnV0dG9uLmRhdGFzZXQuYWRkZWQgIT09IHVuZGVmaW5lZDtcclxuICAgICAgICBsZXQgdXJsID0gYWRkZWQgPyBidXR0b24uZGF0YXNldC5yZW1vdmVfaXRlbV91cmwgOiBidXR0b24uZGF0YXNldC5hZGRfaXRlbV91cmw7XHJcbiAgICAgICAgYWpheCh1cmwsIChyZXNwb25zZSkgPT4ge1xyXG4gICAgICAgICAgICBzcGlubmVyLmNsYXNzTGlzdC5hZGQoJ2hpZGRlbicpO1xyXG4gICAgICAgICAgICB0aGlzLnNldEJ1dHRvbk1vZGUoYnV0dG9uLCBhZGRlZCk7XHJcbiAgICAgICAgICAgIHRoaXMub25TYWxlcyA9IHJlc3BvbnNlLm9uU2FsZXMgPT09IHRydWU7XHJcbiAgICAgICAgICAgIHRoaXMudXBkYXRlQ2FydChyZXNwb25zZS5jYXJ0KTtcclxuICAgICAgICAgICAgYnV0dG9uLmJsdXIoKTtcclxuICAgICAgICAgICAgaWYgKHRoaXMub3B0aW9ucy5wb3B1cCAmJiAhYWRkZWQpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMub3B0aW9ucy5wb3B1cC5zaG93KCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgdGhpcy5wcm9jZXNzaW5nID0gZmFsc2U7XHJcbiAgICAgICAgICAgIHRoaXMuYW5hbHl0aWNzKCFhZGRlZCwgSlNPTi5wYXJzZShyZXNwb25zZS5pdGVtKSk7XHJcbiAgICAgICAgfSwge21ldGhvZDogJ1BPU1QnfSk7XHJcbiAgICB9XHJcblxyXG4gICAgb25TaG9wcGluZ0JhZ0J1dHRvbkNsaWNrKGJ1dHRvbilcclxuICAgIHtcclxuICAgICAgICBpZiAodGhpcy5wcm9jZXNzaW5nKSB7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5wcm9jZXNzaW5nID0gdHJ1ZTtcclxuICAgICAgICBidXR0b24uY2xhc3NMaXN0LnJlbW92ZSgnZmFyJyk7XHJcbiAgICAgICAgYnV0dG9uLmNsYXNzTGlzdC5yZW1vdmUoJ2ZhLXdpbmRvdy1jbG9zZScpO1xyXG4gICAgICAgIGJ1dHRvbi5jbGFzc0xpc3QuYWRkKCdmYXMnKTtcclxuICAgICAgICBidXR0b24uY2xhc3NMaXN0LmFkZCgnZmEtc3Bpbm5lcicpO1xyXG4gICAgICAgIGxldCB1cmwgPSBidXR0b24uZGF0YXNldC5yZW1vdmVfaXRlbV91cmw7XHJcbiAgICAgICAgbGV0IGFkZFRvQ2FydEJ1dHRvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjYXJ0LWJ1dHRvbi0nK2J1dHRvbi5kYXRhc2V0Lml0ZW1faWQpO1xyXG4gICAgICAgIGFqYXgodXJsLCAocmVzcG9uc2UpID0+IHtcclxuICAgICAgICAgICAgYnV0dG9uLmNsYXNzTGlzdC5yZW1vdmUoJ2ZhcycpO1xyXG4gICAgICAgICAgICBidXR0b24uY2xhc3NMaXN0LnJlbW92ZSgnZmEtc3Bpbm5lcicpO1xyXG4gICAgICAgICAgICBidXR0b24uY2xhc3NMaXN0LmFkZCgnZmFyJyk7XHJcbiAgICAgICAgICAgIGJ1dHRvbi5jbGFzc0xpc3QuYWRkKCdmYS13aW5kb3ctY2xvc2UnKTtcclxuICAgICAgICAgICAgaWYgKGFkZFRvQ2FydEJ1dHRvbiBpbnN0YW5jZW9mIEhUTUxFbGVtZW50KSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnNldEJ1dHRvbk1vZGUoYWRkVG9DYXJ0QnV0dG9uLCB0cnVlKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB0aGlzLm9uU2FsZXMgPSByZXNwb25zZS5vblNhbGVzID09PSB0cnVlO1xyXG4gICAgICAgICAgICB0aGlzLnVwZGF0ZUNhcnQocmVzcG9uc2UuY2FydCk7XHJcbiAgICAgICAgICAgIHRoaXMucHJvY2Vzc2luZyA9IGZhbHNlO1xyXG4gICAgICAgIH0sIHttZXRob2Q6ICdQT1NUJ30pO1xyXG4gICAgfVxyXG5cclxuICAgIHVwZGF0ZUNhcnQoanNvblJlc3BvbnNlKVxyXG4gICAge1xyXG4gICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgIHRoaXMuY2FydENvbnRlbnQgPSBKU09OLnBhcnNlKGpzb25SZXNwb25zZSk7XHJcbiAgICAgICAgICAgIGlmICh0eXBlb2YgdGhpcy5jYXJ0Q29udGVudCAhPT0gJ29iamVjdCcpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuY2FydENvbnRlbnQgPSB7fTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0gY2F0Y2ggKGUpIHtcclxuICAgICAgICAgICAgY29uc29sZS5lcnJvcignRm9ybWF0IEpTT04gcGFuaWVyIG5vbiB2YWxpZGUnKTtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdGhpcy5zaG9wcGluZ0JhZy5pbm5lckhUTUwgPSAnJztcclxuXHJcbiAgICAgICAgbGV0IGNvdW50ID0gMDtcclxuICAgICAgICBsZXQgdG90YWwgPSAwO1xyXG4gICAgICAgIGlmICh0aGlzLm9wdGlvbnMucG9wdXApIHtcclxuICAgICAgICAgICAgdGhpcy5vcHRpb25zLnBvcHVwLnJlc2V0SW1wb3J0KCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIE9iamVjdC52YWx1ZXModGhpcy5jYXJ0Q29udGVudCkuZm9yRWFjaChpdGVtID0+IHtcclxuICAgICAgICAgICAgbGV0IGl0ZW1MaXN0RWx0ID0gdGhpcy5jcmVhdGVTaG9wcGluZ0JhZ0l0ZW0oaXRlbSk7XHJcbiAgICAgICAgICAgIGxldCBwcmljZSA9IHRoaXMub25TYWxlcyA/IGl0ZW0uZGlzY291bnRQcmljZSA6IGl0ZW0ucHJpY2U7XHJcbiAgICAgICAgICAgIGxldCBxdWFudGl0eSA9IHBhcnNlSW50KGl0ZW0ucXVhbnRpdHkpO1xyXG4gICAgICAgICAgICB0b3RhbCArPSBxdWFudGl0eSAqIHBhcnNlRmxvYXQocHJpY2UpO1xyXG4gICAgICAgICAgICB0aGlzLnNob3BwaW5nQmFnLmFwcGVuZENoaWxkKGl0ZW1MaXN0RWx0KTtcclxuICAgICAgICAgICAgY291bnQgKz0gaXRlbS5xdWFudGl0eTtcclxuICAgICAgICB9KTtcclxuICAgICAgICBsZXQgc2hpcHBpbmdGZWVMaXN0RWx0ID0gdGhpcy5jcmVhdGVTaG9wcGluZ0JhZ0l0ZW0oe2lzU2hpcHBpbmdGZWU6IHRydWUsIG5hbWU6ICdGcmFpcyBkZSBwb3J0J30pO1xyXG4gICAgICAgIHRoaXMuc2hvcHBpbmdCYWcuYXBwZW5kQ2hpbGQoc2hpcHBpbmdGZWVMaXN0RWx0KTtcclxuICAgICAgICBpZiAodG90YWwgPiAwKSB7XHJcbiAgICAgICAgICAgIGxldCBzaG9wcGluZ0JhZ1RvdGFsID0gdGhpcy5jcmVhdGVTaG9wcGluZ0JhZ1RvdGFsKHRvdGFsKTtcclxuICAgICAgICAgICAgdGhpcy5zaG9wcGluZ0JhZy5hcHBlbmRDaGlsZChzaG9wcGluZ0JhZ1RvdGFsKTtcclxuICAgICAgICAgICAgbGV0IGNhcnRMaW5rRWx0ID0gdGhpcy5jcmVhdGVFbGVtZW50V2l0aENsYXNzZXMoJ2RpdicsIHRoaXMub3B0aW9ucy5zaG9wcGluZ19iYWdfY2xhc3MrJ19fbGluaycpO1xyXG4gICAgICAgICAgICBsZXQgY2FydExpbmsgPSB0aGlzLmNyZWF0ZUVsZW1lbnRXaXRoQ2xhc3NlcygnYScsIFsnYnRuJywgJ2J0bi1zbScsICdidC1idG4tLXByaW1hcnknLCAndGV4dC1saWdodCddKTtcclxuICAgICAgICAgICAgY2FydExpbmsuaHJlZiA9IHRoaXMub3B0aW9ucy5jYXJ0X3VybDtcclxuICAgICAgICAgICAgY2FydExpbmsuaW5uZXJUZXh0ID0gdGhpcy5zaG9wcGluZ0JhZy5kYXRhc2V0LmNhcnRfbGlua190ZXh0O1xyXG4gICAgICAgICAgICBjYXJ0TGlua0VsdC5hcHBlbmRDaGlsZChjYXJ0TGluayk7XHJcbiAgICAgICAgICAgIHRoaXMuc2hvcHBpbmdCYWcuYXBwZW5kQ2hpbGQoY2FydExpbmtFbHQpO1xyXG4gICAgICAgICAgICB0aGlzLm5hdmNhcnQuY2xhc3NMaXN0LnJlbW92ZSgnZW1wdHknKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICB0aGlzLm5hdmNhcnQuY2xhc3NMaXN0LmFkZCgnZW1wdHknKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5zaG9wcGluZ0JhZ1F1YW50aXR5LmRhdGFzZXQucXVhbnRpdHkgPSBjb3VudDtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIEBwYXJhbSB7T2JqZWN0fSBpdGVtXHJcbiAgICAgKiBAcmV0dXJuIEhUTUxFbGVtZW50XHJcbiAgICAgKi9cclxuICAgIGNyZWF0ZVNob3BwaW5nQmFnSXRlbShpdGVtKVxyXG4gICAge1xyXG4gICAgICAgIGxldCBpdGVtQ29udGFpbmVyID0gdGhpcy5jcmVhdGVFbGVtZW50V2l0aENsYXNzZXMoJ2RpdicsIHRoaXMub3B0aW9ucy5zaG9wcGluZ19iYWdfaXRlbV9jbGFzcyk7XHJcbiAgICAgICAgaWYgKGl0ZW0uaXNTaGlwcGluZ0ZlZSkge1xyXG4gICAgICAgICAgICBsZXQgc3BhbiA9IHRoaXMuY3JlYXRlRWxlbWVudFdpdGhDbGFzc2VzKCdzcGFuJywgdGhpcy5vcHRpb25zLnNob3BwaW5nX2JhZ19pdGVtX2NsYXNzKydfX2xpbmsnKTtcclxuICAgICAgICAgICAgbGV0IGl0ZW1JbWFnZSA9IHRoaXMuY3JlYXRlRWxlbWVudFdpdGhDbGFzc2VzKCdpJywgWydmYXMnLCAnZmEtc2hpcHBpbmctZmFzdCddKTtcclxuICAgICAgICAgICAgc3Bhbi5hcHBlbmRDaGlsZChpdGVtSW1hZ2UpO1xyXG4gICAgICAgICAgICBzcGFuLmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKCcgJytpdGVtLm5hbWUpKTtcclxuICAgICAgICAgICAgaXRlbUNvbnRhaW5lci5hcHBlbmRDaGlsZChzcGFuKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBsZXQgaXRlbUltYWdlID0gdGhpcy5jcmVhdGVFbGVtZW50V2l0aENsYXNzZXMoJ2ltZycpO1xyXG4gICAgICAgICAgICBpdGVtSW1hZ2Uuc3JjID0gaXRlbS5pbWFnZXNbMF0uY2FjaGVQYXRoO1xyXG4gICAgICAgICAgICBpdGVtSW1hZ2UuYWx0ID0gaXRlbS5pbWFnZXNbMF0uYWx0O1xyXG5cclxuICAgICAgICAgICAgbGV0IGl0ZW1MaW5rID0gdGhpcy5jcmVhdGVFbGVtZW50V2l0aENsYXNzZXMoJ2EnLCB0aGlzLm9wdGlvbnMuc2hvcHBpbmdfYmFnX2l0ZW1fY2xhc3MrJ19fbGluaycpO1xyXG4gICAgICAgICAgICBpdGVtTGluay5ocmVmID0gaXRlbS5saW5rO1xyXG4gICAgICAgICAgICBpdGVtTGluay5zZXRBdHRyaWJ1dGUoJ3RpdGxlJywgaXRlbS5uYW1lKTtcclxuICAgICAgICAgICAgaXRlbUxpbmsuYXBwZW5kQ2hpbGQoaXRlbUltYWdlKTtcclxuICAgICAgICAgICAgaXRlbUxpbmsuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoJyAnK2l0ZW0ubmFtZSkpO1xyXG4gICAgICAgICAgICBpdGVtQ29udGFpbmVyLmFwcGVuZENoaWxkKGl0ZW1MaW5rKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgbGV0IGl0ZW1QcmljZSA9IHRoaXMuY3JlYXRlRWxlbWVudFdpdGhDbGFzc2VzKCdzcGFuJywgdGhpcy5vcHRpb25zLnNob3BwaW5nX2JhZ19pdGVtX2NsYXNzKydfX3ByaWNlJyk7XHJcbiAgICAgICAgbGV0IHByaWNlID0gaXRlbS5pc1NoaXBwaW5nRmVlID8gMCA6IHRoaXMub25TYWxlcyA/IGl0ZW0uZGlzY291bnRQcmljZSA6IGl0ZW0ucHJpY2U7XHJcbiAgICAgICAgaXRlbVByaWNlLmlubmVyVGV4dCA9IG5ldyBJbnRsLk51bWJlckZvcm1hdCgnZnItRlInLCB7c3R5bGU6ICdjdXJyZW5jeScsIGN1cnJlbmN5OiAnRVVSJ30pLmZvcm1hdChwcmljZSk7XHJcbiAgICAgICAgbGV0IGl0ZW1SZW1vdmUgPSB0aGlzLmNyZWF0ZUVsZW1lbnRXaXRoQ2xhc3NlcygnaScsIFsncmVtb3ZlLWl0ZW0nLCAnZmFyJywgJ2ZhLXdpbmRvdy1jbG9zZSddKTtcclxuICAgICAgICBpdGVtUmVtb3ZlLnNldEF0dHJpYnV0ZSgnZGF0YS1pdGVtX2lkJywgaXRlbS5pZCk7XHJcbiAgICAgICAgaXRlbVJlbW92ZS5zZXRBdHRyaWJ1dGUoJ2RhdGEtcmVtb3ZlX2l0ZW1fdXJsJywgaXRlbS5yZW1vdmVMaW5rKTtcclxuICAgICAgICBpdGVtUmVtb3ZlLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgdGhpcy5vblNob3BwaW5nQmFnQnV0dG9uQ2xpY2suYmluZCh0aGlzLCBpdGVtUmVtb3ZlKSk7XHJcblxyXG4gICAgICAgIGl0ZW1Db250YWluZXIuYXBwZW5kQ2hpbGQoaXRlbVByaWNlKTtcclxuICAgICAgICBpZiAodGhpcy5vcHRpb25zLnBvcHVwKSB7XHJcbiAgICAgICAgICAgIGxldCBjbG9uZWRJdGVtID0gaXRlbUNvbnRhaW5lci5jbG9uZU5vZGUodHJ1ZSk7XHJcbiAgICAgICAgICAgIGlmICghaXRlbS5pc1NoaXBwaW5nRmVlKSB7XHJcbiAgICAgICAgICAgICAgICBsZXQgY2xvbmVkSXRlbVJlbW92ZSA9IGl0ZW1SZW1vdmUuY2xvbmVOb2RlKHRydWUpO1xyXG4gICAgICAgICAgICAgICAgY2xvbmVkSXRlbVJlbW92ZS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHRoaXMub25TaG9wcGluZ0JhZ0J1dHRvbkNsaWNrLmJpbmQodGhpcywgY2xvbmVkSXRlbVJlbW92ZSkpO1xyXG4gICAgICAgICAgICAgICAgY2xvbmVkSXRlbS5hcHBlbmRDaGlsZChjbG9uZWRJdGVtUmVtb3ZlKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB0aGlzLm9wdGlvbnMucG9wdXAuaW1wb3J0KGNsb25lZEl0ZW0pO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoIWl0ZW0uaXNTaGlwcGluZ0ZlZSkge1xyXG4gICAgICAgICAgICBpdGVtQ29udGFpbmVyLmFwcGVuZENoaWxkKGl0ZW1SZW1vdmUpO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gaXRlbUNvbnRhaW5lcjtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIEBwYXJhbSB7ZmxvYXR9IHRvdGFsXHJcbiAgICAgKiBAcmV0dXJuIEhUTUxFbGVtZW50XHJcbiAgICAgKi9cclxuICAgIGNyZWF0ZVNob3BwaW5nQmFnVG90YWwodG90YWwpXHJcbiAgICB7XHJcbiAgICAgICAgbGV0IHRvdGFsQ29udGFpbmVyID0gdGhpcy5jcmVhdGVFbGVtZW50V2l0aENsYXNzZXMoJ2RpdicsIHRoaXMub3B0aW9ucy5zaG9wcGluZ19iYWdfY2xhc3MrJ19fdG90YWwnKTtcclxuICAgICAgICBsZXQgdG90YWxIZWFkaW5nID0gdGhpcy5jcmVhdGVFbGVtZW50V2l0aENsYXNzZXMoJ3NwYW4nKTtcclxuICAgICAgICB0b3RhbEhlYWRpbmcuaW5uZXJUZXh0ID0gJ1RvdGFsOic7XHJcbiAgICAgICAgbGV0IHRvdGFsQW1vdW50ID0gdGhpcy5jcmVhdGVFbGVtZW50V2l0aENsYXNzZXMoJ3NwYW4nLCB0aGlzLm9wdGlvbnMuc2hvcHBpbmdfYmFnX2NsYXNzKydfX3RvdGFsX19hbW91bnQnKTtcclxuICAgICAgICB0b3RhbEFtb3VudC5pbm5lclRleHQgPSBuZXcgSW50bC5OdW1iZXJGb3JtYXQoJ2ZyLUZSJywge3N0eWxlOiAnY3VycmVuY3knLCBjdXJyZW5jeTogJ0VVUid9KS5mb3JtYXQodG90YWwpO1xyXG4gICAgICAgIHRvdGFsQ29udGFpbmVyLmFwcGVuZENoaWxkKHRvdGFsSGVhZGluZyk7XHJcbiAgICAgICAgdG90YWxDb250YWluZXIuYXBwZW5kQ2hpbGQodG90YWxBbW91bnQpO1xyXG4gICAgICAgIHJldHVybiB0b3RhbENvbnRhaW5lcjtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSB0YWdcclxuICAgICAqIEBwYXJhbSB7c3RyaW5nfGFycmF5fSBjbGFzc2VzXHJcbiAgICAgKiBAcmV0dXJuIEhUTUxFbGVtZW50XHJcbiAgICAgKi9cclxuICAgIGNyZWF0ZUVsZW1lbnRXaXRoQ2xhc3Nlcyh0YWcsIGNsYXNzZXMgPSBbXSlcclxuICAgIHtcclxuICAgICAgICBpZiAoIUFycmF5LmlzQXJyYXkoY2xhc3NlcykpIHtcclxuICAgICAgICAgICAgY2xhc3NlcyA9IFtjbGFzc2VzXTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGxldCBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCh0YWcpO1xyXG4gICAgICAgIGZvciAobGV0IGNsYXNzTmFtZSBvZiBjbGFzc2VzKSB7XHJcbiAgICAgICAgICAgIGVsZW1lbnQuY2xhc3NMaXN0LmFkZChjbGFzc05hbWUpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuIGVsZW1lbnQ7XHJcbiAgICB9XHJcblxyXG4gICAgc2V0QnV0dG9uTW9kZShidXR0b24sIGFkZGVkKVxyXG4gICAge1xyXG4gICAgICAgIGxldCBhZGRUZXh0ID0gYnV0dG9uLnF1ZXJ5U2VsZWN0b3IoJy5hZGQtaXRlbScpO1xyXG4gICAgICAgIGxldCByZW1vdmVUZXh0ID0gYnV0dG9uLnF1ZXJ5U2VsZWN0b3IoJy5yZW1vdmUtaXRlbScpO1xyXG4gICAgICAgIGlmIChhZGRlZCkge1xyXG4gICAgICAgICAgICBhZGRUZXh0LmNsYXNzTGlzdC5yZW1vdmUoJ2hpZGRlbicpO1xyXG4gICAgICAgICAgICByZW1vdmVUZXh0LmNsYXNzTGlzdC5hZGQoJ2hpZGRlbicpO1xyXG4gICAgICAgICAgICBidXR0b24ucmVtb3ZlQXR0cmlidXRlKCdkYXRhLWFkZGVkJyk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgYWRkVGV4dC5jbGFzc0xpc3QuYWRkKCdoaWRkZW4nKTtcclxuICAgICAgICAgICAgcmVtb3ZlVGV4dC5jbGFzc0xpc3QucmVtb3ZlKCdoaWRkZW4nKTtcclxuICAgICAgICAgICAgYnV0dG9uLnNldEF0dHJpYnV0ZSgnZGF0YS1hZGRlZCcsICcnKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgYW5hbHl0aWNzKGFkZCwgaXRlbSlcclxuICAgIHtcclxuICAgICAgICBpZiAoIXRoaXMuZ2FJc0luaXRpYWxpemVkKSB7XHJcbiAgICAgICAgICAgIGdhKFwiY3JlYXRlXCIsIFwiVUEtWFhYWFgtWVwiKTtcclxuICAgICAgICAgICAgZ2EoXCJyZXF1aXJlXCIsIFwiZWNcIik7XHJcbiAgICAgICAgICAgIHRoaXMuZ2FJc0luaXRpYWxpemVkID0gdHJ1ZTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGdhKCdlYzphZGRQcm9kdWN0Jywge1xyXG4gICAgICAgICAgICAnaWQnOiBpdGVtLmlkLFxyXG4gICAgICAgICAgICAnbmFtZSc6IGl0ZW0ubmFtZSxcclxuICAgICAgICAgICAgJ2NhdGVnb3J5JzogaXRlbS5jYXRlZ29yeS5zbHVnLFxyXG4gICAgICAgICAgICAncHJpY2UnOiBpdGVtLnByaWNlLFxyXG4gICAgICAgICAgICAncXVhbnRpdHknOiAxLFxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIGdhKCdlYzpzZXRBY3Rpb24nLCBhZGQgPyAnYWRkJyA6ICdyZW1vdmUnKTtcclxuICAgICAgICBnYSgnc2VuZCcsICdldmVudCcsICdVWCcsICdjbGljaycsICdhZGQgdG8gY2FydCcpOyAgICAgLy8gU2VuZCBkYXRhIHVzaW5nIGFuIGV2ZW50LlxyXG4gICAgfVxyXG59IiwiZXhwb3J0IGRlZmF1bHQgY2xhc3MgTGF6eWxvYWRlciB7XHJcbiAgICBjb25zdHJ1Y3RvcigpXHJcbiAgICB7XHJcbiAgICAgICAgdGhpcy5sYXp5SW1hZ2VzID0gW10uc2xpY2UuY2FsbChkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCdsYXp5bG9hZCcpKTtcclxuICAgICAgICBpZiAoXCJJbnRlcnNlY3Rpb25PYnNlcnZlclwiIGluIHdpbmRvdykge1xyXG4gICAgICAgICAgICB0aGlzLm9ic2VydmUoKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICB0aGlzLmZhbGxCYWNrKCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogVXNlIHRoZSBvYnNlcnZlciB0byBsb2FkIGxhenkgaW1hZ2VzIHdoZW4gdmlld3BvcnQgaW4gcmFuZ2VcclxuICAgICAqL1xyXG4gICAgb2JzZXJ2ZSgpXHJcbiAgICB7XHJcbiAgICAgICAgbGV0IGxhenlJbWFnZU9ic2VydmVyID0gbmV3IEludGVyc2VjdGlvbk9ic2VydmVyKChlbnRyaWVzKSA9PiB7XHJcbiAgICAgICAgICAgIGVudHJpZXMuZm9yRWFjaCgoZW50cnkpID0+IHtcclxuICAgICAgICAgICAgICAgIGxldCBsYXp5SW1hZ2UgPSBlbnRyeS50YXJnZXQ7XHJcbiAgICAgICAgICAgICAgICBpZiAoZW50cnkuaXNJbnRlcnNlY3RpbmcgJiYgbGF6eUltYWdlIGluc3RhbmNlb2YgSFRNTEltYWdlRWxlbWVudCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMubG9hZChsYXp5SW1hZ2UpO1xyXG4gICAgICAgICAgICAgICAgICAgIGxhenlJbWFnZU9ic2VydmVyLnVub2JzZXJ2ZShsYXp5SW1hZ2UpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgdGhpcy5sYXp5SW1hZ2VzLmZvckVhY2goKGltYWdlKSA9PiB7XHJcbiAgICAgICAgICAgIGxhenlJbWFnZU9ic2VydmVyLm9ic2VydmUoaW1hZ2UpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogSWYgaW50ZXJzZWN0aW9uT2JzZXJ2ZXIgbm90IHN1cHBvcnRlZFxyXG4gICAgICovXHJcbiAgICBmYWxsQmFjaygpXHJcbiAgICB7XHJcbiAgICAgICAgdGhpcy5sYXp5SW1hZ2VzLmZvckVhY2goKGxhenlJbWFnZSkgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLmxvYWQobGF6eUltYWdlKTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIExvYWQgdGhlIGxhenkgaW1hZ2VcclxuICAgICAqIEBwYXJhbSB7SFRNTEltYWdlRWxlbWVudH0gbGF6eUltYWdlXHJcbiAgICAgKi9cclxuICAgIGxvYWQobGF6eUltYWdlKVxyXG4gICAge1xyXG4gICAgICAgIGxhenlJbWFnZS5hZGRFdmVudExpc3RlbmVyKCdsb2FkJywgKCkgPT4ge1xyXG4gICAgICAgICAgICBsYXp5SW1hZ2UuY2xhc3NMaXN0LnJlbW92ZSgnbGF6eWxvYWQnKTtcclxuICAgICAgICAgICAgaWYgKGxhenlJbWFnZS5jbGFzc0xpc3QubGVuZ3RoID09PSAwKSB7XHJcbiAgICAgICAgICAgICAgICBsYXp5SW1hZ2UucmVtb3ZlQXR0cmlidXRlKCdjbGFzcycpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgbGF6eUltYWdlLnNyYyA9IGxhenlJbWFnZS5kYXRhc2V0LnNyYztcclxuICAgIH1cclxufSIsImV4cG9ydCBkZWZhdWx0IGNsYXNzIE5hdmlnYXRpb25cclxue1xyXG4gICAgLyoqXHJcbiAgICAgKiBAcGFyYW0ge09iamVjdH0gb3B0aW9uc1xyXG4gICAgICogQHBhcmFtIHtIVE1MRWxlbWVudH0gb3B0aW9ucy50b2dnbGVCdXR0b25cclxuICAgICAqIEBwYXJhbSB7SFRNTEVsZW1lbnR9IG9wdGlvbnMubmF2Q29udGVudFxyXG4gICAgICogQHBhcmFtIHtTdHJpbmd9IFtvcHRpb25zLnNob3dDbGFzcz1zaG93XVxyXG4gICAgICogQHBhcmFtIHtCb29sZWFufSBbb3B0aW9ucy5jb2xsYXBzZU9uT3V0ZXJDbGljaz10cnVlXVxyXG4gICAgICovXHJcbiAgICBjb25zdHJ1Y3RvcihvcHRpb25zID0ge30pXHJcbiAgICB7XHJcbiAgICAgICAgdGhpcy5vcHRpb25zID0gT2JqZWN0LmFzc2lnbih7XHJcbiAgICAgICAgICAgIHRvZ2dsZUJ1dHRvbjogbnVsbCxcclxuICAgICAgICAgICAgbmF2Q29udGVudDogbnVsbCxcclxuICAgICAgICAgICAgc2hvd0NsYXNzOiAnc2hvdycsXHJcbiAgICAgICAgICAgIGNvbGxhcHNlT25PdXRlckNsaWNrOiB0cnVlLFxyXG4gICAgICAgIH0sIG9wdGlvbnMpO1xyXG5cclxuICAgICAgICBpZiAoISh0aGlzLm9wdGlvbnMudG9nZ2xlQnV0dG9uIGluc3RhbmNlb2YgSFRNTEVsZW1lbnQgJiYgdGhpcy5vcHRpb25zLm5hdkNvbnRlbnQgaW5zdGFuY2VvZiBIVE1MRWxlbWVudCkpIHtcclxuICAgICAgICAgICAgY29uc29sZS5lcnJvcignUGFyYW3DqHRyZXMgaW5jb3JyZWN0cycpO1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB0aGlzLm9wdGlvbnMudG9nZ2xlQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgdGhpcy5vblRvZ2dsZUJ1dHRvbkNsaWNrLmJpbmQodGhpcykpO1xyXG4gICAgICAgIGlmICh0aGlzLm9wdGlvbnMuY29sbGFwc2VPbk91dGVyQ2xpY2spIHtcclxuICAgICAgICAgICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCB0aGlzLm9uT3V0ZXJDbGljay5iaW5kKHRoaXMpKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgb25Ub2dnbGVCdXR0b25DbGljaygpXHJcbiAgICB7XHJcbiAgICAgICAgaWYgKHRoaXMub3B0aW9ucy5uYXZDb250ZW50LmNsYXNzTGlzdC5jb250YWlucyh0aGlzLm9wdGlvbnMuc2hvd0NsYXNzKSkge1xyXG4gICAgICAgICAgICB0aGlzLm9wdGlvbnMubmF2Q29udGVudC5jbGFzc0xpc3QucmVtb3ZlKHRoaXMub3B0aW9ucy5zaG93Q2xhc3MpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHRoaXMub3B0aW9ucy5uYXZDb250ZW50LmNsYXNzTGlzdC5hZGQodGhpcy5vcHRpb25zLnNob3dDbGFzcyk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIG9uT3V0ZXJDbGljayhlKVxyXG4gICAge1xyXG4gICAgICAgIGxldCBlbGVtZW50ID0gZS50YXJnZXQ7XHJcbiAgICAgICAgbGV0IGlzVG9nZ2xlRWx0ID0gZWxlbWVudCA9PT0gdGhpcy5vcHRpb25zLnRvZ2dsZUJ1dHRvbjtcclxuICAgICAgICB3aGlsZShlbGVtZW50ICYmICFpc1RvZ2dsZUVsdCkge1xyXG4gICAgICAgICAgICBlbGVtZW50ID0gZWxlbWVudC5wYXJlbnROb2RlO1xyXG4gICAgICAgICAgICBpc1RvZ2dsZUVsdCA9IGVsZW1lbnQgPT09IHRoaXMub3B0aW9ucy50b2dnbGVCdXR0b247XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICghaXNUb2dnbGVFbHQpIHtcclxuICAgICAgICAgICAgdGhpcy5vcHRpb25zLm5hdkNvbnRlbnQuY2xhc3NMaXN0LnJlbW92ZSh0aGlzLm9wdGlvbnMuc2hvd0NsYXNzKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn0iLCJleHBvcnQgZGVmYXVsdCBjbGFzcyBTY3JvbGxBbmltYXRpb24ge1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogQHBhcmFtIHtIVE1MRWxlbWVudH0gZWxlbWVudFxyXG4gICAgICovXHJcbiAgICBjb25zdHJ1Y3RvcihlbGVtZW50KSB7XHJcbiAgICAgICAgaWYgKCEoZWxlbWVudCBpbnN0YW5jZW9mIEhUTUxFbGVtZW50KSkge1xyXG4gICAgICAgICAgICByZXR1cm4gY29uc29sZS5lcnJvcihcIkF1Y3VuIMOpbMOpbWVudCBkdSBET00uXCIpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUoJ2FuaW1hdGVkJyk7XHJcbiAgICAgICAgdGhpcy5lbGVtZW50ID0gZWxlbWVudDtcclxuICAgICAgICB0aGlzLnN0YXJ0ID0gZWxlbWVudC5kYXRhc2V0LnN0YXJ0ID09PSB1bmRlZmluZWQgPyAyNSA6IGVsZW1lbnQuZGF0YXNldC5zdGFydDtcclxuICAgICAgICB0aGlzLmVuZCA9IGVsZW1lbnQuZGF0YXNldC5lbmQgPT09IHVuZGVmaW5lZCA/IDc1IDogZWxlbWVudC5kYXRhc2V0LmVuZDtcclxuXHJcbiAgICAgICAgdGhpcy5vblNjcm9sbCgpO1xyXG4gICAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdzY3JvbGwnLCB0aGlzLm9uU2Nyb2xsLmJpbmQodGhpcykpO1xyXG4gICAgfVxyXG5cclxuICAgIG9uU2Nyb2xsKClcclxuICAgIHtcclxuICAgICAgICBjb25zdCB3aW5kb3dIZWlnaHQgPSB3aW5kb3cuaW5uZXJIZWlnaHQ7XHJcbiAgICAgICAgY29uc3QgZWxlbWVudFkgPSBNYXRoLnJvdW5kKHRoaXMuZWxlbWVudC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKS55KTtcclxuXHJcbiAgICAgICAgY29uc3QgaW5XaW5kb3dSYW5nZSA9IGVsZW1lbnRZID49IDAgJiYgZWxlbWVudFkgPD0gd2luZG93SGVpZ2h0O1xyXG5cclxuICAgICAgICBjb25zdCByYXRlUG9zID0gTWF0aC5yb3VuZCgxMDAgKiBlbGVtZW50WSAvIHdpbmRvd0hlaWdodCk7XHJcblxyXG4gICAgICAgIGlmIChpbldpbmRvd1JhbmdlICYmIHJhdGVQb3MgPj0gdGhpcy5zdGFydCAmJiByYXRlUG9zIDw9IHRoaXMuZW5kKSB7XHJcbiAgICAgICAgICAgIHRoaXMuZWxlbWVudC5jbGFzc0xpc3QuYWRkKCdhbmltYXRlJyk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgdGhpcy5lbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUoJ2FuaW1hdGUnKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn0iLCJleHBvcnQgZGVmYXVsdCBjbGFzcyBTZWFyY2hcclxue1xyXG4gICAgY29uc3RydWN0b3IoKVxyXG4gICAge1xyXG4gICAgICAgIHRoaXMuc2VhcmNoRm9ybSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdzZWFyY2gtZm9ybScpO1xyXG4gICAgICAgIHRoaXMuc2VhcmNoVHJpZ2dlciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdzZWFyY2gtdHJpZ2dlcicpO1xyXG4gICAgICAgIHRoaXMuc2VhcmNoSW5wdXQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnc2VhcmNoLWlucHV0Jyk7XHJcbiAgICAgICAgdGhpcy5zZWFyY2hCdXR0b24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnc2VhcmNoLWJ1dHRvbicpO1xyXG5cclxuICAgICAgICB0aGlzLnNlYXJjaFRyaWdnZXIuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCB0aGlzLm9uU2VhcmNoVHJpZ2dlckNsaWNrLmJpbmQodGhpcykpO1xyXG4gICAgICAgIGRvY3VtZW50LmJvZHkuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCB0aGlzLm9uT3V0ZXJDbGljay5iaW5kKHRoaXMpKTtcclxuICAgIH1cclxuXHJcbiAgICBvblNlYXJjaFRyaWdnZXJDbGljaygpXHJcbiAgICB7XHJcbiAgICAgICAgY29uc3QgaGFzU2VhcmNoUmVxdWVzdCA9IHRoaXMuc2VhcmNoSW5wdXQudmFsdWUubGVuZ3RoID4gMDtcclxuICAgICAgICBpZiAodGhpcy5zZWFyY2hGb3JtLmNsYXNzTGlzdC5jb250YWlucygnZXhwYW5kZWQnKSkge1xyXG4gICAgICAgICAgICBpZiAoaGFzU2VhcmNoUmVxdWVzdCkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5zZWFyY2hCdXR0b24uZGlzcGF0Y2hFdmVudChuZXcgTW91c2VFdmVudCgnY2xpY2snKSk7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnNlYXJjaEZvcm0uY2xhc3NMaXN0LnJlbW92ZSgnZXhwYW5kZWQnKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHRoaXMuc2VhcmNoRm9ybS5jbGFzc0xpc3QuYWRkKCdleHBhbmRlZCcpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBvbk91dGVyQ2xpY2soZSlcclxuICAgIHtcclxuICAgICAgICBpZiAoZS50YXJnZXQgPT09IHRoaXMuc2VhcmNoVHJpZ2dlciB8fCBlLnRhcmdldCA9PT0gdGhpcy5zZWFyY2hJbnB1dCB8fCBlLnRhcmdldCA9PT0gdGhpcy5zZWFyY2hCdXR0b24pIHtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLnNlYXJjaEZvcm0uY2xhc3NMaXN0LnJlbW92ZSgnZXhwYW5kZWQnKTtcclxuICAgICAgICB0aGlzLnNlYXJjaElucHV0LnZhbHVlID0gJyc7XHJcbiAgICB9XHJcbn0iLCJ2YXIgcmVxdWlyZU9iamVjdENvZXJjaWJsZSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9yZXF1aXJlLW9iamVjdC1jb2VyY2libGUnKTtcblxudmFyIHF1b3QgPSAvXCIvZztcblxuLy8gQi4yLjMuMi4xIENyZWF0ZUhUTUwoc3RyaW5nLCB0YWcsIGF0dHJpYnV0ZSwgdmFsdWUpXG4vLyBodHRwczovL3RjMzkuZ2l0aHViLmlvL2VjbWEyNjIvI3NlYy1jcmVhdGVodG1sXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChzdHJpbmcsIHRhZywgYXR0cmlidXRlLCB2YWx1ZSkge1xuICB2YXIgUyA9IFN0cmluZyhyZXF1aXJlT2JqZWN0Q29lcmNpYmxlKHN0cmluZykpO1xuICB2YXIgcDEgPSAnPCcgKyB0YWc7XG4gIGlmIChhdHRyaWJ1dGUgIT09ICcnKSBwMSArPSAnICcgKyBhdHRyaWJ1dGUgKyAnPVwiJyArIFN0cmluZyh2YWx1ZSkucmVwbGFjZShxdW90LCAnJnF1b3Q7JykgKyAnXCInO1xuICByZXR1cm4gcDEgKyAnPicgKyBTICsgJzwvJyArIHRhZyArICc+Jztcbn07XG4iLCJ2YXIgZmFpbHMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZmFpbHMnKTtcblxuLy8gY2hlY2sgdGhlIGV4aXN0ZW5jZSBvZiBhIG1ldGhvZCwgbG93ZXJjYXNlXG4vLyBvZiBhIHRhZyBhbmQgZXNjYXBpbmcgcXVvdGVzIGluIGFyZ3VtZW50c1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoTUVUSE9EX05BTUUpIHtcbiAgcmV0dXJuIGZhaWxzKGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgdGVzdCA9ICcnW01FVEhPRF9OQU1FXSgnXCInKTtcbiAgICByZXR1cm4gdGVzdCAhPT0gdGVzdC50b0xvd2VyQ2FzZSgpIHx8IHRlc3Quc3BsaXQoJ1wiJykubGVuZ3RoID4gMztcbiAgfSk7XG59O1xuIiwidmFyICQgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZXhwb3J0Jyk7XG52YXIgJHZhbHVlcyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9vYmplY3QtdG8tYXJyYXknKS52YWx1ZXM7XG5cbi8vIGBPYmplY3QudmFsdWVzYCBtZXRob2Rcbi8vIGh0dHBzOi8vdGMzOS5naXRodWIuaW8vZWNtYTI2Mi8jc2VjLW9iamVjdC52YWx1ZXNcbiQoeyB0YXJnZXQ6ICdPYmplY3QnLCBzdGF0OiB0cnVlIH0sIHtcbiAgdmFsdWVzOiBmdW5jdGlvbiB2YWx1ZXMoTykge1xuICAgIHJldHVybiAkdmFsdWVzKE8pO1xuICB9XG59KTtcbiIsIid1c2Ugc3RyaWN0JztcbnZhciAkID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2V4cG9ydCcpO1xudmFyIGNyZWF0ZUhUTUwgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvY3JlYXRlLWh0bWwnKTtcbnZhciBmb3JjZWRTdHJpbmdIVE1MTWV0aG9kID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2ZvcmNlZC1zdHJpbmctaHRtbC1tZXRob2QnKTtcblxuLy8gYFN0cmluZy5wcm90b3R5cGUubGlua2AgbWV0aG9kXG4vLyBodHRwczovL3RjMzkuZ2l0aHViLmlvL2VjbWEyNjIvI3NlYy1zdHJpbmcucHJvdG90eXBlLmxpbmtcbiQoeyB0YXJnZXQ6ICdTdHJpbmcnLCBwcm90bzogdHJ1ZSwgZm9yY2VkOiBmb3JjZWRTdHJpbmdIVE1MTWV0aG9kKCdsaW5rJykgfSwge1xuICBsaW5rOiBmdW5jdGlvbiBsaW5rKHVybCkge1xuICAgIHJldHVybiBjcmVhdGVIVE1MKHRoaXMsICdhJywgJ2hyZWYnLCB1cmwpO1xuICB9XG59KTtcbiJdLCJzb3VyY2VSb290IjoiIn0=