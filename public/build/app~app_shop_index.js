(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["app~app_shop_index"],{

/***/ "./assets/js/class/_Popup.js":
/*!***********************************!*\
  !*** ./assets/js/class/_Popup.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Popup; });
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
/* harmony import */ var core_js_modules_es_date_to_string__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! core-js/modules/es.date.to-string */ "./node_modules/core-js/modules/es.date.to-string.js");
/* harmony import */ var core_js_modules_es_date_to_string__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_date_to_string__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var core_js_modules_es_function_bind__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! core-js/modules/es.function.bind */ "./node_modules/core-js/modules/es.function.bind.js");
/* harmony import */ var core_js_modules_es_function_bind__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_function_bind__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var core_js_modules_es_object_assign__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! core-js/modules/es.object.assign */ "./node_modules/core-js/modules/es.object.assign.js");
/* harmony import */ var core_js_modules_es_object_assign__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_assign__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var core_js_modules_es_object_define_property__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! core-js/modules/es.object.define-property */ "./node_modules/core-js/modules/es.object.define-property.js");
/* harmony import */ var core_js_modules_es_object_define_property__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_define_property__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var core_js_modules_es_object_entries__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! core-js/modules/es.object.entries */ "./node_modules/core-js/modules/es.object.entries.js");
/* harmony import */ var core_js_modules_es_object_entries__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_entries__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var core_js_modules_es_object_keys__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! core-js/modules/es.object.keys */ "./node_modules/core-js/modules/es.object.keys.js");
/* harmony import */ var core_js_modules_es_object_keys__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_keys__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var core_js_modules_es_object_to_string__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! core-js/modules/es.object.to-string */ "./node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var core_js_modules_es_regexp_to_string__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! core-js/modules/es.regexp.to-string */ "./node_modules/core-js/modules/es.regexp.to-string.js");
/* harmony import */ var core_js_modules_es_regexp_to_string__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_to_string__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var core_js_modules_es_string_iterator__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! core-js/modules/es.string.iterator */ "./node_modules/core-js/modules/es.string.iterator.js");
/* harmony import */ var core_js_modules_es_string_iterator__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_iterator__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var core_js_modules_web_dom_collections_for_each__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! core-js/modules/web.dom-collections.for-each */ "./node_modules/core-js/modules/web.dom-collections.for-each.js");
/* harmony import */ var core_js_modules_web_dom_collections_for_each__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_for_each__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var core_js_modules_web_dom_collections_iterator__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! core-js/modules/web.dom-collections.iterator */ "./node_modules/core-js/modules/web.dom-collections.iterator.js");
/* harmony import */ var core_js_modules_web_dom_collections_iterator__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_iterator__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var _functions_ajax__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../functions/_ajax */ "./assets/js/functions/_ajax.js");


















function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === "[object Arguments]")) { return; } var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }



var Popup =
/*#__PURE__*/
function () {
  /**
   * @callback ajaxCallback
   * @param {Object} response
   */

  /**
   * @param {HTMLElement} element
   * @param {Object} options
   * @param {{element: HTMLElement, url: string, callback: ajaxCallback, datas: Object}[]} options.buttons
   * @param {Boolean} options.display
   */
  function Popup(element) {
    var _this = this;

    var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

    _classCallCheck(this, Popup);

    //Options
    this.options = Object.assign({
      buttons: [],
      display: true
    }, options); //Gestion du DOM

    this.popup = element;
    this.setOverlay();
    this.close = element.querySelector('.fas.fa-times-circle');
    this.importElt = this.popup.querySelector('.import'); //Gestion des evenements

    if (this.close) {
      this.close.addEventListener('click', this.onOverlayClick.bind(this));
    }

    this.popup.addEventListener('click', this.onPopupClick.bind(this));
    this.overlay.addEventListener('click', this.onOverlayClick.bind(this));
    this.options.buttons.forEach(function (button) {
      _this.setButtonEvent(button);
    });
  }

  _createClass(Popup, [{
    key: "setOverlay",
    value: function setOverlay() {
      var overlay = document.createElement('div');
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
        alignItems: 'center'
      });
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

  }, {
    key: "setStyles",
    value: function setStyles(element, styles) {
      Object.keys(styles).forEach(function (property) {
        element.style[property] = styles[property];
      });
    }
  }, {
    key: "onOverlayClick",
    value: function onOverlayClick() {
      // this.body.removeChild(this.overlay);
      this.overlay.style.display = 'none';
    }
  }, {
    key: "onPopupClick",
    value: function onPopupClick(e) {
      e.stopPropagation();
    }
    /**
     * @param {Object} button
     * @param {HTMLElement} button.element
     * @param {string} button.url
     * @param {ajaxCallback} button.callback
     * @param {Object} button.datas
     */

  }, {
    key: "setButtonEvent",
    value: function setButtonEvent(button) {
      var _this2 = this;

      if (!button.datas) {
        button.datas = {};
      }

      var spinner = button.element.querySelector('.fas.fa-spinner');
      button.element.addEventListener('click', function () {
        if (spinner) spinner.classList.remove('d-none'); //Récupération dynamique valeur si la data est un input

        for (var _i = 0, _Object$entries = Object.entries(button.datas); _i < _Object$entries.length; _i++) {
          var _Object$entries$_i = _slicedToArray(_Object$entries[_i], 2),
              key = _Object$entries$_i[0],
              value = _Object$entries$_i[1];

          if (value instanceof HTMLElement) {
            button.datas[key] = value.value;
          }
        }

        if (button.element.dataset.cancel !== undefined) {
          _this2.onOverlayClick();
        } else {
          Object(_functions_ajax__WEBPACK_IMPORTED_MODULE_17__["default"])(button.url, function (response) {
            if (spinner) spinner.classList.add('d-none');

            if (button.callback) {
              button.callback(response);
            }

            _this2.onOverlayClick();
          }, {
            method: 'POST',
            datas: button.datas
          });
        }
      });
    }
  }, {
    key: "show",
    value: function show() {
      this.overlay.style.display = 'flex';
    }
  }, {
    key: "import",
    value: function _import(element) {
      if (this.importElt) {
        this.importElt.appendChild(element);
      }
    }
  }, {
    key: "resetImport",
    value: function resetImport() {
      if (this.importElt) {
        this.importElt.innerHTML = '';
      }
    }
  }]);

  return Popup;
}();



/***/ }),

/***/ "./assets/js/functions/_ajax.js":
/*!**************************************!*\
  !*** ./assets/js/functions/_ajax.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return ajax; });
/* harmony import */ var core_js_modules_es_array_for_each__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.array.for-each */ "./node_modules/core-js/modules/es.array.for-each.js");
/* harmony import */ var core_js_modules_es_array_for_each__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_for_each__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_object_assign__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.object.assign */ "./node_modules/core-js/modules/es.object.assign.js");
/* harmony import */ var core_js_modules_es_object_assign__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_assign__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_object_keys__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.object.keys */ "./node_modules/core-js/modules/es.object.keys.js");
/* harmony import */ var core_js_modules_es_object_keys__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_keys__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_web_dom_collections_for_each__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/web.dom-collections.for-each */ "./node_modules/core-js/modules/web.dom-collections.for-each.js");
/* harmony import */ var core_js_modules_web_dom_collections_for_each__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_for_each__WEBPACK_IMPORTED_MODULE_3__);





/**
 * This callback is displayed as a global member.
 * @callback ajaxCallback
 * @param {Object|string} responseMessage
 */

/**
 *
 * @param {string} url
 * @param {ajaxCallback} callback
 * @param {Object} options
 * @param {string} [options.method=GET]
 * @param {Object} [options.datas={}]
 * @param {Boolean} [options.json=true]
 */
function ajax(url, callback) {
  var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
  //Settings
  options = Object.assign({
    method: 'GET',
    datas: {},
    json: true
  }, options);
  var formData = null;
  var properties = Object.keys(options.datas);

  if (properties.length > 0) {
    formData = new FormData();
    properties.forEach(function (property) {
      formData.append(property, options.datas[property]);
    });
  }

  var xhr = new XMLHttpRequest();
  xhr.open(options.method, url);
  xhr.addEventListener('load', function () {
    if (xhr.status < 200 && xhr.status >= 400) {
      console.error('Echec HTTP : code'.xhr.status);
    } else {
      var response = xhr.response;

      if (options.json) {
        try {
          response = JSON.parse(response);
        } catch (e) {
          console.error('Format JSON invalide');
          return false;
        }
      }

      callback(response);
    }
  });
  xhr.send(formData);
}

/***/ }),

/***/ "./node_modules/core-js/internals/object-assign.js":
/*!*********************************************************!*\
  !*** ./node_modules/core-js/internals/object-assign.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var DESCRIPTORS = __webpack_require__(/*! ../internals/descriptors */ "./node_modules/core-js/internals/descriptors.js");
var fails = __webpack_require__(/*! ../internals/fails */ "./node_modules/core-js/internals/fails.js");
var objectKeys = __webpack_require__(/*! ../internals/object-keys */ "./node_modules/core-js/internals/object-keys.js");
var getOwnPropertySymbolsModule = __webpack_require__(/*! ../internals/object-get-own-property-symbols */ "./node_modules/core-js/internals/object-get-own-property-symbols.js");
var propertyIsEnumerableModule = __webpack_require__(/*! ../internals/object-property-is-enumerable */ "./node_modules/core-js/internals/object-property-is-enumerable.js");
var toObject = __webpack_require__(/*! ../internals/to-object */ "./node_modules/core-js/internals/to-object.js");
var IndexedObject = __webpack_require__(/*! ../internals/indexed-object */ "./node_modules/core-js/internals/indexed-object.js");

var nativeAssign = Object.assign;

// `Object.assign` method
// https://tc39.github.io/ecma262/#sec-object.assign
// should work with symbols and should have deterministic property order (V8 bug)
module.exports = !nativeAssign || fails(function () {
  var A = {};
  var B = {};
  // eslint-disable-next-line no-undef
  var symbol = Symbol();
  var alphabet = 'abcdefghijklmnopqrst';
  A[symbol] = 7;
  alphabet.split('').forEach(function (chr) { B[chr] = chr; });
  return nativeAssign({}, A)[symbol] != 7 || objectKeys(nativeAssign({}, B)).join('') != alphabet;
}) ? function assign(target, source) { // eslint-disable-line no-unused-vars
  var T = toObject(target);
  var argumentsLength = arguments.length;
  var index = 1;
  var getOwnPropertySymbols = getOwnPropertySymbolsModule.f;
  var propertyIsEnumerable = propertyIsEnumerableModule.f;
  while (argumentsLength > index) {
    var S = IndexedObject(arguments[index++]);
    var keys = getOwnPropertySymbols ? objectKeys(S).concat(getOwnPropertySymbols(S)) : objectKeys(S);
    var length = keys.length;
    var j = 0;
    var key;
    while (length > j) {
      key = keys[j++];
      if (!DESCRIPTORS || propertyIsEnumerable.call(S, key)) T[key] = S[key];
    }
  } return T;
} : nativeAssign;


/***/ }),

/***/ "./node_modules/core-js/internals/object-to-array.js":
/*!***********************************************************!*\
  !*** ./node_modules/core-js/internals/object-to-array.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var DESCRIPTORS = __webpack_require__(/*! ../internals/descriptors */ "./node_modules/core-js/internals/descriptors.js");
var objectKeys = __webpack_require__(/*! ../internals/object-keys */ "./node_modules/core-js/internals/object-keys.js");
var toIndexedObject = __webpack_require__(/*! ../internals/to-indexed-object */ "./node_modules/core-js/internals/to-indexed-object.js");
var propertyIsEnumerable = __webpack_require__(/*! ../internals/object-property-is-enumerable */ "./node_modules/core-js/internals/object-property-is-enumerable.js").f;

// `Object.{ entries, values }` methods implementation
var createMethod = function (TO_ENTRIES) {
  return function (it) {
    var O = toIndexedObject(it);
    var keys = objectKeys(O);
    var length = keys.length;
    var i = 0;
    var result = [];
    var key;
    while (length > i) {
      key = keys[i++];
      if (!DESCRIPTORS || propertyIsEnumerable.call(O, key)) {
        result.push(TO_ENTRIES ? [key, O[key]] : O[key]);
      }
    }
    return result;
  };
};

module.exports = {
  // `Object.entries` method
  // https://tc39.github.io/ecma262/#sec-object.entries
  entries: createMethod(true),
  // `Object.values` method
  // https://tc39.github.io/ecma262/#sec-object.values
  values: createMethod(false)
};


/***/ }),

/***/ "./node_modules/core-js/modules/es.object.assign.js":
/*!**********************************************************!*\
  !*** ./node_modules/core-js/modules/es.object.assign.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var $ = __webpack_require__(/*! ../internals/export */ "./node_modules/core-js/internals/export.js");
var assign = __webpack_require__(/*! ../internals/object-assign */ "./node_modules/core-js/internals/object-assign.js");

// `Object.assign` method
// https://tc39.github.io/ecma262/#sec-object.assign
$({ target: 'Object', stat: true, forced: Object.assign !== assign }, {
  assign: assign
});


/***/ }),

/***/ "./node_modules/core-js/modules/es.object.entries.js":
/*!***********************************************************!*\
  !*** ./node_modules/core-js/modules/es.object.entries.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var $ = __webpack_require__(/*! ../internals/export */ "./node_modules/core-js/internals/export.js");
var $entries = __webpack_require__(/*! ../internals/object-to-array */ "./node_modules/core-js/internals/object-to-array.js").entries;

// `Object.entries` method
// https://tc39.github.io/ecma262/#sec-object.entries
$({ target: 'Object', stat: true }, {
  entries: function entries(O) {
    return $entries(O);
  }
});


/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvY2xhc3MvX1BvcHVwLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9qcy9mdW5jdGlvbnMvX2FqYXguanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL29iamVjdC1hc3NpZ24uanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL29iamVjdC10by1hcnJheS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL2VzLm9iamVjdC5hc3NpZ24uanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9lcy5vYmplY3QuZW50cmllcy5qcyJdLCJuYW1lcyI6WyJQb3B1cCIsImVsZW1lbnQiLCJvcHRpb25zIiwiT2JqZWN0IiwiYXNzaWduIiwiYnV0dG9ucyIsImRpc3BsYXkiLCJwb3B1cCIsInNldE92ZXJsYXkiLCJjbG9zZSIsInF1ZXJ5U2VsZWN0b3IiLCJpbXBvcnRFbHQiLCJhZGRFdmVudExpc3RlbmVyIiwib25PdmVybGF5Q2xpY2siLCJiaW5kIiwib25Qb3B1cENsaWNrIiwib3ZlcmxheSIsImZvckVhY2giLCJidXR0b24iLCJzZXRCdXR0b25FdmVudCIsImRvY3VtZW50IiwiY3JlYXRlRWxlbWVudCIsInNldFN0eWxlcyIsImJhY2tncm91bmRDb2xvciIsInBvc2l0aW9uIiwid2lkdGgiLCJoZWlnaHQiLCJ0b3AiLCJsZWZ0IiwiekluZGV4IiwianVzdGlmeUNvbnRlbnQiLCJhbGlnbkl0ZW1zIiwiYm9keSIsImFwcGVuZENoaWxkIiwic3R5bGVzIiwia2V5cyIsInByb3BlcnR5Iiwic3R5bGUiLCJlIiwic3RvcFByb3BhZ2F0aW9uIiwiZGF0YXMiLCJzcGlubmVyIiwiY2xhc3NMaXN0IiwicmVtb3ZlIiwiZW50cmllcyIsImtleSIsInZhbHVlIiwiSFRNTEVsZW1lbnQiLCJkYXRhc2V0IiwiY2FuY2VsIiwidW5kZWZpbmVkIiwiYWpheCIsInVybCIsInJlc3BvbnNlIiwiYWRkIiwiY2FsbGJhY2siLCJtZXRob2QiLCJpbm5lckhUTUwiLCJqc29uIiwiZm9ybURhdGEiLCJwcm9wZXJ0aWVzIiwibGVuZ3RoIiwiRm9ybURhdGEiLCJhcHBlbmQiLCJ4aHIiLCJYTUxIdHRwUmVxdWVzdCIsIm9wZW4iLCJzdGF0dXMiLCJjb25zb2xlIiwiZXJyb3IiLCJKU09OIiwicGFyc2UiLCJzZW5kIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7O0lBRXFCQSxLOzs7QUFFakI7Ozs7O0FBS0E7Ozs7OztBQU1BLGlCQUFZQyxPQUFaLEVBQ0E7QUFBQTs7QUFBQSxRQURxQkMsT0FDckIsdUVBRCtCLEVBQy9COztBQUFBOztBQUNJO0FBQ0EsU0FBS0EsT0FBTCxHQUFlQyxNQUFNLENBQUNDLE1BQVAsQ0FBYztBQUN6QkMsYUFBTyxFQUFFLEVBRGdCO0FBRXpCQyxhQUFPLEVBQUU7QUFGZ0IsS0FBZCxFQUdaSixPQUhZLENBQWYsQ0FGSixDQU9JOztBQUNBLFNBQUtLLEtBQUwsR0FBYU4sT0FBYjtBQUNBLFNBQUtPLFVBQUw7QUFDQSxTQUFLQyxLQUFMLEdBQWFSLE9BQU8sQ0FBQ1MsYUFBUixDQUFzQixzQkFBdEIsQ0FBYjtBQUNBLFNBQUtDLFNBQUwsR0FBaUIsS0FBS0osS0FBTCxDQUFXRyxhQUFYLENBQXlCLFNBQXpCLENBQWpCLENBWEosQ0FhSTs7QUFDQSxRQUFJLEtBQUtELEtBQVQsRUFBZ0I7QUFDWixXQUFLQSxLQUFMLENBQVdHLGdCQUFYLENBQTRCLE9BQTVCLEVBQXFDLEtBQUtDLGNBQUwsQ0FBb0JDLElBQXBCLENBQXlCLElBQXpCLENBQXJDO0FBQ0g7O0FBQ0QsU0FBS1AsS0FBTCxDQUFXSyxnQkFBWCxDQUE0QixPQUE1QixFQUFxQyxLQUFLRyxZQUFMLENB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LCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgYWpheCBmcm9tIFwiLi4vZnVuY3Rpb25zL19hamF4XCI7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBQb3B1cCB7XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBAY2FsbGJhY2sgYWpheENhbGxiYWNrXHJcbiAgICAgKiBAcGFyYW0ge09iamVjdH0gcmVzcG9uc2VcclxuICAgICAqL1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogQHBhcmFtIHtIVE1MRWxlbWVudH0gZWxlbWVudFxyXG4gICAgICogQHBhcmFtIHtPYmplY3R9IG9wdGlvbnNcclxuICAgICAqIEBwYXJhbSB7e2VsZW1lbnQ6IEhUTUxFbGVtZW50LCB1cmw6IHN0cmluZywgY2FsbGJhY2s6IGFqYXhDYWxsYmFjaywgZGF0YXM6IE9iamVjdH1bXX0gb3B0aW9ucy5idXR0b25zXHJcbiAgICAgKiBAcGFyYW0ge0Jvb2xlYW59IG9wdGlvbnMuZGlzcGxheVxyXG4gICAgICovXHJcbiAgICBjb25zdHJ1Y3RvcihlbGVtZW50LCBvcHRpb25zID0ge30pXHJcbiAgICB7XHJcbiAgICAgICAgLy9PcHRpb25zXHJcbiAgICAgICAgdGhpcy5vcHRpb25zID0gT2JqZWN0LmFzc2lnbih7XHJcbiAgICAgICAgICAgIGJ1dHRvbnM6IFtdLFxyXG4gICAgICAgICAgICBkaXNwbGF5OiB0cnVlLFxyXG4gICAgICAgIH0sIG9wdGlvbnMpO1xyXG5cclxuICAgICAgICAvL0dlc3Rpb24gZHUgRE9NXHJcbiAgICAgICAgdGhpcy5wb3B1cCA9IGVsZW1lbnQ7XHJcbiAgICAgICAgdGhpcy5zZXRPdmVybGF5KCk7XHJcbiAgICAgICAgdGhpcy5jbG9zZSA9IGVsZW1lbnQucXVlcnlTZWxlY3RvcignLmZhcy5mYS10aW1lcy1jaXJjbGUnKTtcclxuICAgICAgICB0aGlzLmltcG9ydEVsdCA9IHRoaXMucG9wdXAucXVlcnlTZWxlY3RvcignLmltcG9ydCcpO1xyXG5cclxuICAgICAgICAvL0dlc3Rpb24gZGVzIGV2ZW5lbWVudHNcclxuICAgICAgICBpZiAodGhpcy5jbG9zZSkge1xyXG4gICAgICAgICAgICB0aGlzLmNsb3NlLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgdGhpcy5vbk92ZXJsYXlDbGljay5iaW5kKHRoaXMpKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5wb3B1cC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHRoaXMub25Qb3B1cENsaWNrLmJpbmQodGhpcykpO1xyXG4gICAgICAgIHRoaXMub3ZlcmxheS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHRoaXMub25PdmVybGF5Q2xpY2suYmluZCh0aGlzKSk7XHJcbiAgICAgICAgdGhpcy5vcHRpb25zLmJ1dHRvbnMuZm9yRWFjaCgoYnV0dG9uKSA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMuc2V0QnV0dG9uRXZlbnQoYnV0dG9uKTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBzZXRPdmVybGF5KClcclxuICAgIHtcclxuICAgICAgICBjb25zdCBvdmVybGF5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICAgICAgdGhpcy5zZXRTdHlsZXMob3ZlcmxheSwge1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6ICdyZ2JhKDAsMCwwLC43KScsXHJcbiAgICAgICAgICAgIHBvc2l0aW9uOiAnZml4ZWQnLFxyXG4gICAgICAgICAgICB3aWR0aDogJzEwMCUnLFxyXG4gICAgICAgICAgICBoZWlnaHQ6ICcxMDB2aCcsXHJcbiAgICAgICAgICAgIHRvcDogJzAnLFxyXG4gICAgICAgICAgICBsZWZ0OiAnMCcsXHJcbiAgICAgICAgICAgIHpJbmRleDogJzk5OScsXHJcbiAgICAgICAgICAgIGRpc3BsYXk6IHRoaXMub3B0aW9ucy5kaXNwbGF5ID8gJ2ZsZXgnIDogJ25vbmUnLFxyXG4gICAgICAgICAgICBqdXN0aWZ5Q29udGVudDogJ2NlbnRlcicsXHJcbiAgICAgICAgICAgIGFsaWduSXRlbXM6ICdjZW50ZXInLFxyXG4gICAgICAgIH0pXHJcbiAgICAgICAgdGhpcy5ib2R5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignYm9keScpO1xyXG4gICAgICAgIG92ZXJsYXkuYXBwZW5kQ2hpbGQodGhpcy5wb3B1cCk7XHJcbiAgICAgICAgdGhpcy5ib2R5LmFwcGVuZENoaWxkKG92ZXJsYXkpO1xyXG4gICAgICAgIHRoaXMub3ZlcmxheSA9IG92ZXJsYXk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBBcHBsaXF1ZSBkZXMgc3R5bGVzIENTUyDDoCB1biDDqWzDqW1lbnQgSFRNTFxyXG4gICAgICogQHBhcmFtIHtIVE1MRWxlbWVudH0gZWxlbWVudFxyXG4gICAgICogQHBhcmFtIHtPYmplY3R9IHN0eWxlc1xyXG4gICAgICovXHJcbiAgICBzZXRTdHlsZXMoZWxlbWVudCwgc3R5bGVzKVxyXG4gICAge1xyXG4gICAgICAgIE9iamVjdC5rZXlzKHN0eWxlcykuZm9yRWFjaCgocHJvcGVydHkpID0+IHtcclxuICAgICAgICAgICAgZWxlbWVudC5zdHlsZVtwcm9wZXJ0eV0gPSBzdHlsZXNbcHJvcGVydHldO1xyXG4gICAgICAgIH0pXHJcbiAgICB9XHJcblxyXG4gICAgb25PdmVybGF5Q2xpY2soKVxyXG4gICAge1xyXG4gICAgICAgIC8vIHRoaXMuYm9keS5yZW1vdmVDaGlsZCh0aGlzLm92ZXJsYXkpO1xyXG4gICAgICAgIHRoaXMub3ZlcmxheS5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xyXG4gICAgfVxyXG5cclxuICAgIG9uUG9wdXBDbGljayhlKVxyXG4gICAge1xyXG4gICAgICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBAcGFyYW0ge09iamVjdH0gYnV0dG9uXHJcbiAgICAgKiBAcGFyYW0ge0hUTUxFbGVtZW50fSBidXR0b24uZWxlbWVudFxyXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IGJ1dHRvbi51cmxcclxuICAgICAqIEBwYXJhbSB7YWpheENhbGxiYWNrfSBidXR0b24uY2FsbGJhY2tcclxuICAgICAqIEBwYXJhbSB7T2JqZWN0fSBidXR0b24uZGF0YXNcclxuICAgICAqL1xyXG4gICAgc2V0QnV0dG9uRXZlbnQoYnV0dG9uKVxyXG4gICAge1xyXG4gICAgICAgIGlmICghYnV0dG9uLmRhdGFzKSB7XHJcbiAgICAgICAgICAgIGJ1dHRvbi5kYXRhcyA9IHt9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNvbnN0IHNwaW5uZXIgPSBidXR0b24uZWxlbWVudC5xdWVyeVNlbGVjdG9yKCcuZmFzLmZhLXNwaW5uZXInKTtcclxuICAgICAgICBidXR0b24uZWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcclxuICAgICAgICAgICAgaWYgKHNwaW5uZXIpIHNwaW5uZXIuY2xhc3NMaXN0LnJlbW92ZSgnZC1ub25lJyk7XHJcbiAgICAgICAgICAgIC8vUsOpY3Vww6lyYXRpb24gZHluYW1pcXVlIHZhbGV1ciBzaSBsYSBkYXRhIGVzdCB1biBpbnB1dFxyXG4gICAgICAgICAgICBmb3IgKGxldCBba2V5LCB2YWx1ZV0gb2YgT2JqZWN0LmVudHJpZXMoYnV0dG9uLmRhdGFzKSkge1xyXG4gICAgICAgICAgICAgICAgaWYodmFsdWUgaW5zdGFuY2VvZiBIVE1MRWxlbWVudCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGJ1dHRvbi5kYXRhc1trZXldID0gdmFsdWUudmFsdWU7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGlmIChidXR0b24uZWxlbWVudC5kYXRhc2V0LmNhbmNlbCAhPT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLm9uT3ZlcmxheUNsaWNrKCk7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBhamF4KGJ1dHRvbi51cmwsIChyZXNwb25zZSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChzcGlubmVyKSBzcGlubmVyLmNsYXNzTGlzdC5hZGQoJ2Qtbm9uZScpO1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChidXR0b24uY2FsbGJhY2spIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYnV0dG9uLmNhbGxiYWNrKHJlc3BvbnNlKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5vbk92ZXJsYXlDbGljaygpO1xyXG4gICAgICAgICAgICAgICAgfSwge21ldGhvZDogJ1BPU1QnLCBkYXRhczogYnV0dG9uLmRhdGFzfSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBzaG93KClcclxuICAgIHtcclxuICAgICAgICB0aGlzLm92ZXJsYXkuc3R5bGUuZGlzcGxheSA9ICdmbGV4JztcclxuICAgIH1cclxuXHJcbiAgICBpbXBvcnQoZWxlbWVudClcclxuICAgIHtcclxuICAgICAgICBpZiAodGhpcy5pbXBvcnRFbHQpIHtcclxuICAgICAgICAgICAgdGhpcy5pbXBvcnRFbHQuYXBwZW5kQ2hpbGQoZWxlbWVudCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHJlc2V0SW1wb3J0KClcclxuICAgIHtcclxuICAgICAgICBpZiAodGhpcy5pbXBvcnRFbHQpIHtcclxuICAgICAgICAgICAgdGhpcy5pbXBvcnRFbHQuaW5uZXJIVE1MID0gJyc7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59IiwiLyoqXHJcbiAqIFRoaXMgY2FsbGJhY2sgaXMgZGlzcGxheWVkIGFzIGEgZ2xvYmFsIG1lbWJlci5cclxuICogQGNhbGxiYWNrIGFqYXhDYWxsYmFja1xyXG4gKiBAcGFyYW0ge09iamVjdHxzdHJpbmd9IHJlc3BvbnNlTWVzc2FnZVxyXG4gKi9cclxuXHJcbi8qKlxyXG4gKlxyXG4gKiBAcGFyYW0ge3N0cmluZ30gdXJsXHJcbiAqIEBwYXJhbSB7YWpheENhbGxiYWNrfSBjYWxsYmFja1xyXG4gKiBAcGFyYW0ge09iamVjdH0gb3B0aW9uc1xyXG4gKiBAcGFyYW0ge3N0cmluZ30gW29wdGlvbnMubWV0aG9kPUdFVF1cclxuICogQHBhcmFtIHtPYmplY3R9IFtvcHRpb25zLmRhdGFzPXt9XVxyXG4gKiBAcGFyYW0ge0Jvb2xlYW59IFtvcHRpb25zLmpzb249dHJ1ZV1cclxuICovXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGFqYXgodXJsLCBjYWxsYmFjaywgb3B0aW9ucyA9IHt9KVxyXG57XHJcbiAgICAvL1NldHRpbmdzXHJcbiAgICBvcHRpb25zID0gT2JqZWN0LmFzc2lnbih7XHJcbiAgICAgICAgbWV0aG9kOiAnR0VUJyxcclxuICAgICAgICBkYXRhczoge30sXHJcbiAgICAgICAganNvbjogdHJ1ZSxcclxuICAgIH0sIG9wdGlvbnMpO1xyXG5cclxuICAgIGxldCBmb3JtRGF0YSA9IG51bGw7XHJcbiAgICBsZXQgcHJvcGVydGllcyA9IE9iamVjdC5rZXlzKG9wdGlvbnMuZGF0YXMpO1xyXG4gICAgaWYgKHByb3BlcnRpZXMubGVuZ3RoID4gMCkge1xyXG4gICAgICAgIGZvcm1EYXRhID0gbmV3IEZvcm1EYXRhKCk7XHJcbiAgICAgICAgcHJvcGVydGllcy5mb3JFYWNoKChwcm9wZXJ0eSkgPT4ge1xyXG4gICAgICAgICAgICBmb3JtRGF0YS5hcHBlbmQocHJvcGVydHksIG9wdGlvbnMuZGF0YXNbcHJvcGVydHldKTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuICAgIGxldCB4aHIgPSBuZXcgWE1MSHR0cFJlcXVlc3QoKTtcclxuICAgIHhoci5vcGVuKG9wdGlvbnMubWV0aG9kLCB1cmwpO1xyXG4gICAgeGhyLmFkZEV2ZW50TGlzdGVuZXIoJ2xvYWQnLCAoKSA9PiB7XHJcbiAgICAgICAgaWYgKHhoci5zdGF0dXMgPCAyMDAgJiYgeGhyLnN0YXR1cyA+PSA0MDApIHtcclxuICAgICAgICAgICAgY29uc29sZS5lcnJvcignRWNoZWMgSFRUUCA6IGNvZGUnLnhoci5zdGF0dXMpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIGxldCByZXNwb25zZSA9IHhoci5yZXNwb25zZTtcclxuICAgICAgICAgICAgaWYgKG9wdGlvbnMuanNvbikge1xyXG4gICAgICAgICAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgICAgICAgICByZXNwb25zZSA9IEpTT04ucGFyc2UocmVzcG9uc2UpO1xyXG4gICAgICAgICAgICAgICAgfSBjYXRjaCAoZSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoJ0Zvcm1hdCBKU09OIGludmFsaWRlJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGNhbGxiYWNrKHJlc3BvbnNlKTtcclxuICAgICAgICB9XHJcbiAgICB9KTtcclxuICAgIHhoci5zZW5kKGZvcm1EYXRhKTtcclxufSIsIid1c2Ugc3RyaWN0JztcbnZhciBERVNDUklQVE9SUyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9kZXNjcmlwdG9ycycpO1xudmFyIGZhaWxzID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2ZhaWxzJyk7XG52YXIgb2JqZWN0S2V5cyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9vYmplY3Qta2V5cycpO1xudmFyIGdldE93blByb3BlcnR5U3ltYm9sc01vZHVsZSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9vYmplY3QtZ2V0LW93bi1wcm9wZXJ0eS1zeW1ib2xzJyk7XG52YXIgcHJvcGVydHlJc0VudW1lcmFibGVNb2R1bGUgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvb2JqZWN0LXByb3BlcnR5LWlzLWVudW1lcmFibGUnKTtcbnZhciB0b09iamVjdCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy90by1vYmplY3QnKTtcbnZhciBJbmRleGVkT2JqZWN0ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2luZGV4ZWQtb2JqZWN0Jyk7XG5cbnZhciBuYXRpdmVBc3NpZ24gPSBPYmplY3QuYXNzaWduO1xuXG4vLyBgT2JqZWN0LmFzc2lnbmAgbWV0aG9kXG4vLyBodHRwczovL3RjMzkuZ2l0aHViLmlvL2VjbWEyNjIvI3NlYy1vYmplY3QuYXNzaWduXG4vLyBzaG91bGQgd29yayB3aXRoIHN5bWJvbHMgYW5kIHNob3VsZCBoYXZlIGRldGVybWluaXN0aWMgcHJvcGVydHkgb3JkZXIgKFY4IGJ1Zylcbm1vZHVsZS5leHBvcnRzID0gIW5hdGl2ZUFzc2lnbiB8fCBmYWlscyhmdW5jdGlvbiAoKSB7XG4gIHZhciBBID0ge307XG4gIHZhciBCID0ge307XG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby11bmRlZlxuICB2YXIgc3ltYm9sID0gU3ltYm9sKCk7XG4gIHZhciBhbHBoYWJldCA9ICdhYmNkZWZnaGlqa2xtbm9wcXJzdCc7XG4gIEFbc3ltYm9sXSA9IDc7XG4gIGFscGhhYmV0LnNwbGl0KCcnKS5mb3JFYWNoKGZ1bmN0aW9uIChjaHIpIHsgQltjaHJdID0gY2hyOyB9KTtcbiAgcmV0dXJuIG5hdGl2ZUFzc2lnbih7fSwgQSlbc3ltYm9sXSAhPSA3IHx8IG9iamVjdEtleXMobmF0aXZlQXNzaWduKHt9LCBCKSkuam9pbignJykgIT0gYWxwaGFiZXQ7XG59KSA/IGZ1bmN0aW9uIGFzc2lnbih0YXJnZXQsIHNvdXJjZSkgeyAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIG5vLXVudXNlZC12YXJzXG4gIHZhciBUID0gdG9PYmplY3QodGFyZ2V0KTtcbiAgdmFyIGFyZ3VtZW50c0xlbmd0aCA9IGFyZ3VtZW50cy5sZW5ndGg7XG4gIHZhciBpbmRleCA9IDE7XG4gIHZhciBnZXRPd25Qcm9wZXJ0eVN5bWJvbHMgPSBnZXRPd25Qcm9wZXJ0eVN5bWJvbHNNb2R1bGUuZjtcbiAgdmFyIHByb3BlcnR5SXNFbnVtZXJhYmxlID0gcHJvcGVydHlJc0VudW1lcmFibGVNb2R1bGUuZjtcbiAgd2hpbGUgKGFyZ3VtZW50c0xlbmd0aCA+IGluZGV4KSB7XG4gICAgdmFyIFMgPSBJbmRleGVkT2JqZWN0KGFyZ3VtZW50c1tpbmRleCsrXSk7XG4gICAgdmFyIGtleXMgPSBnZXRPd25Qcm9wZXJ0eVN5bWJvbHMgPyBvYmplY3RLZXlzKFMpLmNvbmNhdChnZXRPd25Qcm9wZXJ0eVN5bWJvbHMoUykpIDogb2JqZWN0S2V5cyhTKTtcbiAgICB2YXIgbGVuZ3RoID0ga2V5cy5sZW5ndGg7XG4gICAgdmFyIGogPSAwO1xuICAgIHZhciBrZXk7XG4gICAgd2hpbGUgKGxlbmd0aCA+IGopIHtcbiAgICAgIGtleSA9IGtleXNbaisrXTtcbiAgICAgIGlmICghREVTQ1JJUFRPUlMgfHwgcHJvcGVydHlJc0VudW1lcmFibGUuY2FsbChTLCBrZXkpKSBUW2tleV0gPSBTW2tleV07XG4gICAgfVxuICB9IHJldHVybiBUO1xufSA6IG5hdGl2ZUFzc2lnbjtcbiIsInZhciBERVNDUklQVE9SUyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9kZXNjcmlwdG9ycycpO1xudmFyIG9iamVjdEtleXMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvb2JqZWN0LWtleXMnKTtcbnZhciB0b0luZGV4ZWRPYmplY3QgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvdG8taW5kZXhlZC1vYmplY3QnKTtcbnZhciBwcm9wZXJ0eUlzRW51bWVyYWJsZSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9vYmplY3QtcHJvcGVydHktaXMtZW51bWVyYWJsZScpLmY7XG5cbi8vIGBPYmplY3QueyBlbnRyaWVzLCB2YWx1ZXMgfWAgbWV0aG9kcyBpbXBsZW1lbnRhdGlvblxudmFyIGNyZWF0ZU1ldGhvZCA9IGZ1bmN0aW9uIChUT19FTlRSSUVTKSB7XG4gIHJldHVybiBmdW5jdGlvbiAoaXQpIHtcbiAgICB2YXIgTyA9IHRvSW5kZXhlZE9iamVjdChpdCk7XG4gICAgdmFyIGtleXMgPSBvYmplY3RLZXlzKE8pO1xuICAgIHZhciBsZW5ndGggPSBrZXlzLmxlbmd0aDtcbiAgICB2YXIgaSA9IDA7XG4gICAgdmFyIHJlc3VsdCA9IFtdO1xuICAgIHZhciBrZXk7XG4gICAgd2hpbGUgKGxlbmd0aCA+IGkpIHtcbiAgICAgIGtleSA9IGtleXNbaSsrXTtcbiAgICAgIGlmICghREVTQ1JJUFRPUlMgfHwgcHJvcGVydHlJc0VudW1lcmFibGUuY2FsbChPLCBrZXkpKSB7XG4gICAgICAgIHJlc3VsdC5wdXNoKFRPX0VOVFJJRVMgPyBba2V5LCBPW2tleV1dIDogT1trZXldKTtcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIHJlc3VsdDtcbiAgfTtcbn07XG5cbm1vZHVsZS5leHBvcnRzID0ge1xuICAvLyBgT2JqZWN0LmVudHJpZXNgIG1ldGhvZFxuICAvLyBodHRwczovL3RjMzkuZ2l0aHViLmlvL2VjbWEyNjIvI3NlYy1vYmplY3QuZW50cmllc1xuICBlbnRyaWVzOiBjcmVhdGVNZXRob2QodHJ1ZSksXG4gIC8vIGBPYmplY3QudmFsdWVzYCBtZXRob2RcbiAgLy8gaHR0cHM6Ly90YzM5LmdpdGh1Yi5pby9lY21hMjYyLyNzZWMtb2JqZWN0LnZhbHVlc1xuICB2YWx1ZXM6IGNyZWF0ZU1ldGhvZChmYWxzZSlcbn07XG4iLCJ2YXIgJCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9leHBvcnQnKTtcbnZhciBhc3NpZ24gPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvb2JqZWN0LWFzc2lnbicpO1xuXG4vLyBgT2JqZWN0LmFzc2lnbmAgbWV0aG9kXG4vLyBodHRwczovL3RjMzkuZ2l0aHViLmlvL2VjbWEyNjIvI3NlYy1vYmplY3QuYXNzaWduXG4kKHsgdGFyZ2V0OiAnT2JqZWN0Jywgc3RhdDogdHJ1ZSwgZm9yY2VkOiBPYmplY3QuYXNzaWduICE9PSBhc3NpZ24gfSwge1xuICBhc3NpZ246IGFzc2lnblxufSk7XG4iLCJ2YXIgJCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9leHBvcnQnKTtcbnZhciAkZW50cmllcyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9vYmplY3QtdG8tYXJyYXknKS5lbnRyaWVzO1xuXG4vLyBgT2JqZWN0LmVudHJpZXNgIG1ldGhvZFxuLy8gaHR0cHM6Ly90YzM5LmdpdGh1Yi5pby9lY21hMjYyLyNzZWMtb2JqZWN0LmVudHJpZXNcbiQoeyB0YXJnZXQ6ICdPYmplY3QnLCBzdGF0OiB0cnVlIH0sIHtcbiAgZW50cmllczogZnVuY3Rpb24gZW50cmllcyhPKSB7XG4gICAgcmV0dXJuICRlbnRyaWVzKE8pO1xuICB9XG59KTtcbiJdLCJzb3VyY2VSb290IjoiIn0=