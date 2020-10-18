(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["app_order_index"],{

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

/***/ "./assets/js/pages/order/_index.js":
/*!*****************************************!*\
  !*** ./assets/js/pages/order/_index.js ***!
  \*****************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var core_js_modules_es_array_for_each__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.array.for-each */ "./node_modules/core-js/modules/es.array.for-each.js");
/* harmony import */ var core_js_modules_es_array_for_each__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_for_each__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_web_dom_collections_for_each__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/web.dom-collections.for-each */ "./node_modules/core-js/modules/web.dom-collections.for-each.js");
/* harmony import */ var core_js_modules_web_dom_collections_for_each__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_for_each__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _functions_ajax__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../functions/_ajax */ "./assets/js/functions/_ajax.js");



document.addEventListener('DOMContentLoaded', function () {
  //Gestion choix paiement
  var cbRadio = document.getElementById('cb');
  var paypalRadio = document.getElementById('paypal');
  var choices = document.querySelectorAll('.payment-method');
  [cbRadio, paypalRadio].forEach(function (radio) {
    radio.addEventListener('click', function () {
      choices.forEach(function (choice) {
        choice.classList.remove('selected');
      });
      radio.parentNode.parentNode.classList.add('selected');
    });
  }); //Get public key and current locale

  var cardElt = document.getElementById('card-element'); // Create a Stripe client.

  var stripe = Stripe(cardElt.dataset.public_key, {
    locale: cardElt.dataset.locale
  }); // Create an instance of Elements.

  var elements = stripe.elements();
  var errors = []; // Custom styling can be passed to options when creating an Element.

  var style = {
    base: {
      fontFamily: '"Helvetica Neue", Helvetica, sans-serif',
      fontSmoothing: 'antialiased',
      fontSize: '16px'
    },
    invalid: {
      color: 'red',
      iconColor: 'red'
    }
  }; // Create an instance of the card Element.

  var card = elements.create('card', {
    style: style
  }); // Add an instance of the card Element into the `card-element` <div>.

  card.mount('#card-element'); // Handle real-time validation errors from the card Element.

  var displayError = document.getElementById('card-errors');
  card.addEventListener('change', function (event) {
    if (event.error) {
      displayError.textContent = event.error.message;
      errors.push(event.error.message);
    } else {
      displayError.textContent = '';
    }
  }); // Handle form submission.

  var form = document.getElementById('payment-form');
  form.addEventListener('submit', function (event) {
    event.preventDefault();
    stripe.confirmCardPayment(cardElt.dataset.intent_secret, {
      payment_method: {
        card: card
      }
    }).then(function (response) {
      if (response.error) {
        // Inform the user if there was an error.
        var errorElement = document.getElementById('card-errors');
        errorElement.textContent = response.error.message;
        errors.push(response.error.message);
        errors.push('Echec tentative de paiement');
        Object(_functions_ajax__WEBPACK_IMPORTED_MODULE_2__["default"])(cardElt.dataset.error_url, function (response) {
          console.log(response);
        }, {
          datas: {
            errors: JSON.stringify(errors)
          },
          method: 'POST'
        });
      } else if (response.paymentIntent && response.paymentIntent.status === 'succeeded') {
        window.location.href = cardElt.dataset.confirmation_url;
      }
    });
  });

  function stripeTokenHandler(token) {
    var form = document.getElementById('payment-form');
    var hiddenInput = document.createElement('input');
    hiddenInput.setAttribute('type', 'hidden');
    hiddenInput.setAttribute('name', 'stripeToken');
    hiddenInput.setAttribute('value', token.id);
    form.appendChild(hiddenInput);
    form.submit();
  }
});

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


/***/ })

},[["./assets/js/pages/order/_index.js","runtime","vendors~app~app_blog_article~app_order_index~app_shop_index~app_user_address~app_user_profile"]]]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvZnVuY3Rpb25zL19hamF4LmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9qcy9wYWdlcy9vcmRlci9faW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL29iamVjdC1hc3NpZ24uanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9lcy5vYmplY3QuYXNzaWduLmpzIl0sIm5hbWVzIjpbImFqYXgiLCJ1cmwiLCJjYWxsYmFjayIsIm9wdGlvbnMiLCJPYmplY3QiLCJhc3NpZ24iLCJtZXRob2QiLCJkYXRhcyIsImpzb24iLCJmb3JtRGF0YSIsInByb3BlcnRpZXMiLCJrZXlzIiwibGVuZ3RoIiwiRm9ybURhdGEiLCJmb3JFYWNoIiwicHJvcGVydHkiLCJhcHBlbmQiLCJ4aHIiLCJYTUxIdHRwUmVxdWVzdCIsIm9wZW4iLCJhZGRFdmVudExpc3RlbmVyIiwic3RhdHVzIiwiY29uc29sZSIsImVycm9yIiwicmVzcG9uc2UiLCJKU09OIiwicGFyc2UiLCJlIiwic2VuZCIsImRvY3VtZW50IiwiY2JSYWRpbyIsImdldEVsZW1lbnRCeUlkIiwicGF5cGFsUmFkaW8iLCJjaG9pY2VzIiwicXVlcnlTZWxlY3RvckFsbCIsInJhZGlvIiwiY2hvaWNlIiwiY2xhc3NMaXN0IiwicmVtb3ZlIiwicGFyZW50Tm9kZSIsImFkZCIsImNhcmRFbHQiLCJzdHJpcGUiLCJTdHJpcGUiLCJkYXRhc2V0IiwicHVibGljX2tleSIsImxvY2FsZSIsImVsZW1lbnRzIiwiZXJyb3JzIiwic3R5bGUiLCJiYXNlIiwiZm9udEZhbWlseSIsImZvbnRTbW9vdGhpbmciLCJmb250U2l6ZSIsImludmFsaWQiLCJjb2xvciIsImljb25Db2xvciIsImNhcmQiLCJjcmVhdGUiLCJtb3VudCIsImRpc3BsYXlFcnJvciIsImV2ZW50IiwidGV4dENvbnRlbnQiLCJtZXNzYWdlIiwicHVzaCIsImZvcm0iLCJwcmV2ZW50RGVmYXVsdCIsImNvbmZpcm1DYXJkUGF5bWVudCIsImludGVudF9zZWNyZXQiLCJwYXltZW50X21ldGhvZCIsInRoZW4iLCJlcnJvckVsZW1lbnQiLCJlcnJvcl91cmwiLCJsb2ciLCJzdHJpbmdpZnkiLCJwYXltZW50SW50ZW50Iiwid2luZG93IiwibG9jYXRpb24iLCJocmVmIiwiY29uZmlybWF0aW9uX3VybCIsInN0cmlwZVRva2VuSGFuZGxlciIsInRva2VuIiwiaGlkZGVuSW5wdXQiLCJjcmVhdGVFbGVtZW50Iiwic2V0QXR0cmlidXRlIiwiaWQiLCJhcHBlbmRDaGlsZCIsInN1Ym1pdCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBOzs7Ozs7QUFNQTs7Ozs7Ozs7O0FBU2UsU0FBU0EsSUFBVCxDQUFjQyxHQUFkLEVBQW1CQyxRQUFuQixFQUNmO0FBQUEsTUFENENDLE9BQzVDLHVFQURzRCxFQUN0RDtBQUNJO0FBQ0FBLFNBQU8sR0FBR0MsTUFBTSxDQUFDQyxNQUFQLENBQWM7QUFDcEJDLFVBQU0sRUFBRSxLQURZO0FBRXBCQyxTQUFLLEVBQUUsRUFGYTtBQUdwQkMsUUFBSSxFQUFFO0FBSGMsR0FBZCxFQUlQTCxPQUpPLENBQVY7QUFNQSxNQUFJTSxRQUFRLEdBQUcsSUFBZjtBQUNBLE1BQUlDLFVBQVUsR0FBR04sTUFBTSxDQUFDTyxJQUFQLENBQVlSLE9BQU8sQ0FBQ0ksS0FBcEIsQ0FBakI7O0FBQ0EsTUFBSUcsVUFBVSxDQUFDRSxNQUFYLEdBQW9CLENBQXhCLEVBQTJCO0FBQ3ZCSCxZQUFRLEdBQUcsSUFBSUksUUFBSixFQUFYO0FBQ0FILGNBQVUsQ0FBQ0ksT0FBWCxDQUFtQixVQUFDQyxRQUFELEVBQWM7QUFDN0JOLGNBQVEsQ0FBQ08sTUFBVCxDQUFnQkQsUUFBaEIsRUFBMEJaLE9BQU8sQ0FBQ0ksS0FBUixDQUFjUSxRQUFkLENBQTFCO0FBQ0gsS0FGRDtBQUdIOztBQUNELE1BQUlFLEdBQUcsR0FBRyxJQUFJQyxj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O0FBQ25ELGtDQUFrQyxtQkFBTyxDQUFDLHlIQUE4QztBQUN4RixpQ0FBaUMsbUJBQU8sQ0FBQyxxSEFBNEM7QUFDckYsZUFBZSxtQkFBTyxDQUFDLDZFQUF3QjtBQUMvQyxvQkFBb0IsbUJBQU8sQ0FBQyx1RkFBNkI7O0FBRXpEOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNkNBQTZDLGNBQWMsRUFBRTtBQUM3RCx3QkFBd0IsK0NBQStDO0FBQ3ZFLENBQUMscUNBQXFDO0FBQ3RDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSCxDQUFDOzs7Ozs7Ozs7Ozs7QUN4Q0QsUUFBUSxtQkFBTyxDQUFDLHVFQUFxQjtBQUNyQyxhQUFhLG1CQUFPLENBQUMscUZBQTRCOztBQUVqRDtBQUNBO0FBQ0EsR0FBRyxpRUFBaUU7QUFDcEU7QUFDQSxDQUFDIiwiZmlsZSI6ImFwcF9vcmRlcl9pbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxyXG4gKiBUaGlzIGNhbGxiYWNrIGlzIGRpc3BsYXllZCBhcyBhIGdsb2JhbCBtZW1iZXIuXHJcbiAqIEBjYWxsYmFjayBhamF4Q2FsbGJhY2tcclxuICogQHBhcmFtIHtPYmplY3R8c3RyaW5nfSByZXNwb25zZU1lc3NhZ2VcclxuICovXHJcblxyXG4vKipcclxuICpcclxuICogQHBhcmFtIHtzdHJpbmd9IHVybFxyXG4gKiBAcGFyYW0ge2FqYXhDYWxsYmFja30gY2FsbGJhY2tcclxuICogQHBhcmFtIHtPYmplY3R9IG9wdGlvbnNcclxuICogQHBhcmFtIHtzdHJpbmd9IFtvcHRpb25zLm1ldGhvZD1HRVRdXHJcbiAqIEBwYXJhbSB7T2JqZWN0fSBbb3B0aW9ucy5kYXRhcz17fV1cclxuICogQHBhcmFtIHtCb29sZWFufSBbb3B0aW9ucy5qc29uPXRydWVdXHJcbiAqL1xyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBhamF4KHVybCwgY2FsbGJhY2ssIG9wdGlvbnMgPSB7fSlcclxue1xyXG4gICAgLy9TZXR0aW5nc1xyXG4gICAgb3B0aW9ucyA9IE9iamVjdC5hc3NpZ24oe1xyXG4gICAgICAgIG1ldGhvZDogJ0dFVCcsXHJcbiAgICAgICAgZGF0YXM6IHt9LFxyXG4gICAgICAgIGpzb246IHRydWUsXHJcbiAgICB9LCBvcHRpb25zKTtcclxuXHJcbiAgICBsZXQgZm9ybURhdGEgPSBudWxsO1xyXG4gICAgbGV0IHByb3BlcnRpZXMgPSBPYmplY3Qua2V5cyhvcHRpb25zLmRhdGFzKTtcclxuICAgIGlmIChwcm9wZXJ0aWVzLmxlbmd0aCA+IDApIHtcclxuICAgICAgICBmb3JtRGF0YSA9IG5ldyBGb3JtRGF0YSgpO1xyXG4gICAgICAgIHByb3BlcnRpZXMuZm9yRWFjaCgocHJvcGVydHkpID0+IHtcclxuICAgICAgICAgICAgZm9ybURhdGEuYXBwZW5kKHByb3BlcnR5LCBvcHRpb25zLmRhdGFzW3Byb3BlcnR5XSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbiAgICBsZXQgeGhyID0gbmV3IFhNTEh0dHBSZXF1ZXN0KCk7XHJcbiAgICB4aHIub3BlbihvcHRpb25zLm1ldGhvZCwgdXJsKTtcclxuICAgIHhoci5hZGRFdmVudExpc3RlbmVyKCdsb2FkJywgKCkgPT4ge1xyXG4gICAgICAgIGlmICh4aHIuc3RhdHVzIDwgMjAwICYmIHhoci5zdGF0dXMgPj0gNDAwKSB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoJ0VjaGVjIEhUVFAgOiBjb2RlJy54aHIuc3RhdHVzKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBsZXQgcmVzcG9uc2UgPSB4aHIucmVzcG9uc2U7XHJcbiAgICAgICAgICAgIGlmIChvcHRpb25zLmpzb24pIHtcclxuICAgICAgICAgICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmVzcG9uc2UgPSBKU09OLnBhcnNlKHJlc3BvbnNlKTtcclxuICAgICAgICAgICAgICAgIH0gY2F0Y2ggKGUpIHtcclxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKCdGb3JtYXQgSlNPTiBpbnZhbGlkZScpO1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBjYWxsYmFjayhyZXNwb25zZSk7XHJcbiAgICAgICAgfVxyXG4gICAgfSk7XHJcbiAgICB4aHIuc2VuZChmb3JtRGF0YSk7XHJcbn0iLCJpbXBvcnQgYWpheCBmcm9tICcuLi8uLi9mdW5jdGlvbnMvX2FqYXgnO1xyXG5cclxuZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignRE9NQ29udGVudExvYWRlZCcsICgpID0+IHtcclxuICAgIC8vR2VzdGlvbiBjaG9peCBwYWllbWVudFxyXG4gICAgbGV0IGNiUmFkaW8gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY2InKTtcclxuICAgIGxldCBwYXlwYWxSYWRpbyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwYXlwYWwnKTtcclxuICAgIGxldCBjaG9pY2VzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnBheW1lbnQtbWV0aG9kJyk7XHJcbiAgICBbY2JSYWRpbywgcGF5cGFsUmFkaW9dLmZvckVhY2goKHJhZGlvKSA9PiB7XHJcbiAgICAgICAgcmFkaW8uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XHJcbiAgICAgICAgICAgIGNob2ljZXMuZm9yRWFjaCgoY2hvaWNlKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBjaG9pY2UuY2xhc3NMaXN0LnJlbW92ZSgnc2VsZWN0ZWQnKTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIHJhZGlvLnBhcmVudE5vZGUucGFyZW50Tm9kZS5jbGFzc0xpc3QuYWRkKCdzZWxlY3RlZCcpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfSk7XHJcblxyXG4gICAgLy9HZXQgcHVibGljIGtleSBhbmQgY3VycmVudCBsb2NhbGVcclxuICAgIGxldCBjYXJkRWx0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NhcmQtZWxlbWVudCcpO1xyXG5cclxuICAgIC8vIENyZWF0ZSBhIFN0cmlwZSBjbGllbnQuXHJcbiAgICBsZXQgc3RyaXBlID0gU3RyaXBlKGNhcmRFbHQuZGF0YXNldC5wdWJsaWNfa2V5LCB7bG9jYWxlOiBjYXJkRWx0LmRhdGFzZXQubG9jYWxlfSk7XHJcblxyXG4gICAgLy8gQ3JlYXRlIGFuIGluc3RhbmNlIG9mIEVsZW1lbnRzLlxyXG4gICAgbGV0IGVsZW1lbnRzID0gc3RyaXBlLmVsZW1lbnRzKCk7XHJcbiAgICBsZXQgZXJyb3JzID0gW107XHJcblxyXG4gICAgLy8gQ3VzdG9tIHN0eWxpbmcgY2FuIGJlIHBhc3NlZCB0byBvcHRpb25zIHdoZW4gY3JlYXRpbmcgYW4gRWxlbWVudC5cclxuICAgIGxldCBzdHlsZSA9IHtcclxuICAgICAgICBiYXNlOiB7XHJcbiAgICAgICAgICAgIGZvbnRGYW1pbHk6ICdcIkhlbHZldGljYSBOZXVlXCIsIEhlbHZldGljYSwgc2Fucy1zZXJpZicsXHJcbiAgICAgICAgICAgIGZvbnRTbW9vdGhpbmc6ICdhbnRpYWxpYXNlZCcsXHJcbiAgICAgICAgICAgIGZvbnRTaXplOiAnMTZweCcsXHJcbiAgICAgICAgfSxcclxuICAgICAgICBpbnZhbGlkOiB7XHJcbiAgICAgICAgICAgIGNvbG9yOiAncmVkJyxcclxuICAgICAgICAgICAgaWNvbkNvbG9yOiAncmVkJ1xyXG4gICAgICAgIH0sXHJcbiAgICB9O1xyXG5cclxuICAgIC8vIENyZWF0ZSBhbiBpbnN0YW5jZSBvZiB0aGUgY2FyZCBFbGVtZW50LlxyXG4gICAgbGV0IGNhcmQgPSBlbGVtZW50cy5jcmVhdGUoJ2NhcmQnLCB7c3R5bGU6IHN0eWxlfSk7XHJcblxyXG4gICAgLy8gQWRkIGFuIGluc3RhbmNlIG9mIHRoZSBjYXJkIEVsZW1lbnQgaW50byB0aGUgYGNhcmQtZWxlbWVudGAgPGRpdj4uXHJcbiAgICBjYXJkLm1vdW50KCcjY2FyZC1lbGVtZW50Jyk7XHJcblxyXG4gICAgLy8gSGFuZGxlIHJlYWwtdGltZSB2YWxpZGF0aW9uIGVycm9ycyBmcm9tIHRoZSBjYXJkIEVsZW1lbnQuXHJcbiAgICBsZXQgZGlzcGxheUVycm9yID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NhcmQtZXJyb3JzJyk7XHJcbiAgICBjYXJkLmFkZEV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsIGZ1bmN0aW9uKGV2ZW50KSB7XHJcbiAgICAgICAgaWYgKGV2ZW50LmVycm9yKSB7XHJcbiAgICAgICAgICAgIGRpc3BsYXlFcnJvci50ZXh0Q29udGVudCA9IGV2ZW50LmVycm9yLm1lc3NhZ2U7XHJcbiAgICAgICAgICAgIGVycm9ycy5wdXNoKGV2ZW50LmVycm9yLm1lc3NhZ2UpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIGRpc3BsYXlFcnJvci50ZXh0Q29udGVudCA9ICcnO1xyXG4gICAgICAgIH1cclxuICAgIH0pO1xyXG5cclxuICAgIC8vIEhhbmRsZSBmb3JtIHN1Ym1pc3Npb24uXHJcbiAgICBsZXQgZm9ybSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwYXltZW50LWZvcm0nKTtcclxuICAgIGZvcm0uYWRkRXZlbnRMaXN0ZW5lcignc3VibWl0JywgZnVuY3Rpb24oZXZlbnQpIHtcclxuICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG5cclxuXHJcbiAgICAgICAgc3RyaXBlLmNvbmZpcm1DYXJkUGF5bWVudChcclxuICAgICAgICAgICAgY2FyZEVsdC5kYXRhc2V0LmludGVudF9zZWNyZXQsXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHBheW1lbnRfbWV0aG9kOiB7Y2FyZDogY2FyZH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICkudGhlbihmdW5jdGlvbihyZXNwb25zZSkge1xyXG4gICAgICAgICAgICBpZiAocmVzcG9uc2UuZXJyb3IpIHtcclxuICAgICAgICAgICAgICAgIC8vIEluZm9ybSB0aGUgdXNlciBpZiB0aGVyZSB3YXMgYW4gZXJyb3IuXHJcbiAgICAgICAgICAgICAgICBsZXQgZXJyb3JFbGVtZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NhcmQtZXJyb3JzJyk7XHJcbiAgICAgICAgICAgICAgICBlcnJvckVsZW1lbnQudGV4dENvbnRlbnQgPSByZXNwb25zZS5lcnJvci5tZXNzYWdlO1xyXG4gICAgICAgICAgICAgICAgZXJyb3JzLnB1c2gocmVzcG9uc2UuZXJyb3IubWVzc2FnZSk7XHJcbiAgICAgICAgICAgICAgICBlcnJvcnMucHVzaCgnRWNoZWMgdGVudGF0aXZlIGRlIHBhaWVtZW50Jyk7XHJcbiAgICAgICAgICAgICAgICBhamF4KFxyXG4gICAgICAgICAgICAgICAgICAgIGNhcmRFbHQuZGF0YXNldC5lcnJvcl91cmwsXHJcbiAgICAgICAgICAgICAgICAgICAgKHJlc3BvbnNlKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKHJlc3BvbnNlKTtcclxuICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZGF0YXMgOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBlcnJvcnM6IEpTT04uc3RyaW5naWZ5KGVycm9ycylcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgbWV0aG9kOiAnUE9TVCcsXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgfSBlbHNlIGlmIChyZXNwb25zZS5wYXltZW50SW50ZW50ICYmIHJlc3BvbnNlLnBheW1lbnRJbnRlbnQuc3RhdHVzID09PSAnc3VjY2VlZGVkJykge1xyXG4gICAgICAgICAgICAgICAgd2luZG93LmxvY2F0aW9uLmhyZWYgPSBjYXJkRWx0LmRhdGFzZXQuY29uZmlybWF0aW9uX3VybDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgfSk7XHJcblxyXG4gICAgZnVuY3Rpb24gc3RyaXBlVG9rZW5IYW5kbGVyKHRva2VuKXtcclxuICAgICAgICBsZXQgZm9ybSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwYXltZW50LWZvcm0nKTtcclxuICAgICAgICBsZXQgaGlkZGVuSW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xyXG4gICAgICAgIGhpZGRlbklucHV0LnNldEF0dHJpYnV0ZSgndHlwZScsICdoaWRkZW4nKTtcclxuICAgICAgICBoaWRkZW5JbnB1dC5zZXRBdHRyaWJ1dGUoJ25hbWUnLCAnc3RyaXBlVG9rZW4nKTtcclxuICAgICAgICBoaWRkZW5JbnB1dC5zZXRBdHRyaWJ1dGUoJ3ZhbHVlJywgdG9rZW4uaWQpO1xyXG4gICAgICAgIGZvcm0uYXBwZW5kQ2hpbGQoaGlkZGVuSW5wdXQpO1xyXG5cclxuICAgICAgICBmb3JtLnN1Ym1pdCgpO1xyXG4gICAgfVxyXG59KTsiLCIndXNlIHN0cmljdCc7XG52YXIgREVTQ1JJUFRPUlMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZGVzY3JpcHRvcnMnKTtcbnZhciBmYWlscyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9mYWlscycpO1xudmFyIG9iamVjdEtleXMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvb2JqZWN0LWtleXMnKTtcbnZhciBnZXRPd25Qcm9wZXJ0eVN5bWJvbHNNb2R1bGUgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvb2JqZWN0LWdldC1vd24tcHJvcGVydHktc3ltYm9scycpO1xudmFyIHByb3BlcnR5SXNFbnVtZXJhYmxlTW9kdWxlID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL29iamVjdC1wcm9wZXJ0eS1pcy1lbnVtZXJhYmxlJyk7XG52YXIgdG9PYmplY3QgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvdG8tb2JqZWN0Jyk7XG52YXIgSW5kZXhlZE9iamVjdCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9pbmRleGVkLW9iamVjdCcpO1xuXG52YXIgbmF0aXZlQXNzaWduID0gT2JqZWN0LmFzc2lnbjtcblxuLy8gYE9iamVjdC5hc3NpZ25gIG1ldGhvZFxuLy8gaHR0cHM6Ly90YzM5LmdpdGh1Yi5pby9lY21hMjYyLyNzZWMtb2JqZWN0LmFzc2lnblxuLy8gc2hvdWxkIHdvcmsgd2l0aCBzeW1ib2xzIGFuZCBzaG91bGQgaGF2ZSBkZXRlcm1pbmlzdGljIHByb3BlcnR5IG9yZGVyIChWOCBidWcpXG5tb2R1bGUuZXhwb3J0cyA9ICFuYXRpdmVBc3NpZ24gfHwgZmFpbHMoZnVuY3Rpb24gKCkge1xuICB2YXIgQSA9IHt9O1xuICB2YXIgQiA9IHt9O1xuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tdW5kZWZcbiAgdmFyIHN5bWJvbCA9IFN5bWJvbCgpO1xuICB2YXIgYWxwaGFiZXQgPSAnYWJjZGVmZ2hpamtsbW5vcHFyc3QnO1xuICBBW3N5bWJvbF0gPSA3O1xuICBhbHBoYWJldC5zcGxpdCgnJykuZm9yRWFjaChmdW5jdGlvbiAoY2hyKSB7IEJbY2hyXSA9IGNocjsgfSk7XG4gIHJldHVybiBuYXRpdmVBc3NpZ24oe30sIEEpW3N5bWJvbF0gIT0gNyB8fCBvYmplY3RLZXlzKG5hdGl2ZUFzc2lnbih7fSwgQikpLmpvaW4oJycpICE9IGFscGhhYmV0O1xufSkgPyBmdW5jdGlvbiBhc3NpZ24odGFyZ2V0LCBzb3VyY2UpIHsgLy8gZXNsaW50LWRpc2FibGUtbGluZSBuby11bnVzZWQtdmFyc1xuICB2YXIgVCA9IHRvT2JqZWN0KHRhcmdldCk7XG4gIHZhciBhcmd1bWVudHNMZW5ndGggPSBhcmd1bWVudHMubGVuZ3RoO1xuICB2YXIgaW5kZXggPSAxO1xuICB2YXIgZ2V0T3duUHJvcGVydHlTeW1ib2xzID0gZ2V0T3duUHJvcGVydHlTeW1ib2xzTW9kdWxlLmY7XG4gIHZhciBwcm9wZXJ0eUlzRW51bWVyYWJsZSA9IHByb3BlcnR5SXNFbnVtZXJhYmxlTW9kdWxlLmY7XG4gIHdoaWxlIChhcmd1bWVudHNMZW5ndGggPiBpbmRleCkge1xuICAgIHZhciBTID0gSW5kZXhlZE9iamVjdChhcmd1bWVudHNbaW5kZXgrK10pO1xuICAgIHZhciBrZXlzID0gZ2V0T3duUHJvcGVydHlTeW1ib2xzID8gb2JqZWN0S2V5cyhTKS5jb25jYXQoZ2V0T3duUHJvcGVydHlTeW1ib2xzKFMpKSA6IG9iamVjdEtleXMoUyk7XG4gICAgdmFyIGxlbmd0aCA9IGtleXMubGVuZ3RoO1xuICAgIHZhciBqID0gMDtcbiAgICB2YXIga2V5O1xuICAgIHdoaWxlIChsZW5ndGggPiBqKSB7XG4gICAgICBrZXkgPSBrZXlzW2orK107XG4gICAgICBpZiAoIURFU0NSSVBUT1JTIHx8IHByb3BlcnR5SXNFbnVtZXJhYmxlLmNhbGwoUywga2V5KSkgVFtrZXldID0gU1trZXldO1xuICAgIH1cbiAgfSByZXR1cm4gVDtcbn0gOiBuYXRpdmVBc3NpZ247XG4iLCJ2YXIgJCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9leHBvcnQnKTtcbnZhciBhc3NpZ24gPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvb2JqZWN0LWFzc2lnbicpO1xuXG4vLyBgT2JqZWN0LmFzc2lnbmAgbWV0aG9kXG4vLyBodHRwczovL3RjMzkuZ2l0aHViLmlvL2VjbWEyNjIvI3NlYy1vYmplY3QuYXNzaWduXG4kKHsgdGFyZ2V0OiAnT2JqZWN0Jywgc3RhdDogdHJ1ZSwgZm9yY2VkOiBPYmplY3QuYXNzaWduICE9PSBhc3NpZ24gfSwge1xuICBhc3NpZ246IGFzc2lnblxufSk7XG4iXSwic291cmNlUm9vdCI6IiJ9