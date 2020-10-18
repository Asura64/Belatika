(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["app_user_address"],{

/***/ "./assets/js/class/_Address.js":
/*!*************************************!*\
  !*** ./assets/js/class/_Address.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Address; });
/* harmony import */ var core_js_modules_es_function_name__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.function.name */ "./node_modules/core-js/modules/es.function.name.js");
/* harmony import */ var core_js_modules_es_function_name__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_function_name__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_object_define_property__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.object.define-property */ "./node_modules/core-js/modules/es.object.define-property.js");
/* harmony import */ var core_js_modules_es_object_define_property__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_define_property__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _vendors_places__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../vendors/places */ "./assets/js/vendors/places.js");
/* harmony import */ var _vendors_places__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_vendors_places__WEBPACK_IMPORTED_MODULE_2__);



function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }



var Address =
/*#__PURE__*/
function () {
  /**
   * @param {HTMLElement} addressInput
   */
  function Address(addressInput) {
    _classCallCheck(this, Address);

    if (!addressInput instanceof HTMLElement) {
      return console.error('addressInput doit être un élément du DOM');
    }

    this.addressInput = addressInput;
    this.appId = this.addressInput.dataset.appId;
    this.appKey = this.addressInput.dataset.appKey;
    this.setOptions().initPlaces();
  }
  /**
   * @desc https://community.algolia.com/places/documentation.html#options
   * @return {this}
   */


  _createClass(Address, [{
    key: "setOptions",
    value: function setOptions() {
      this.fixedOptions = {
        appId: this.appId,
        apiKey: this.appKey,
        container: this.addressInput,
        templates: {
          value: function value(suggestion) {
            return suggestion.name;
          }
        }
      };
      this.reconfigurableOptions = {
        language: 'fr',
        type: 'address'
      };
      return this;
    }
    /**
     * @desc Active Algolia places pour l'autocomplétion des champs d'adresse
     * @return {this}
     */

  }, {
    key: "initPlaces",
    value: function initPlaces() {
      var placesAutocomplete = _vendors_places__WEBPACK_IMPORTED_MODULE_2___default()(this.fixedOptions).configure(this.reconfigurableOptions);
      placesAutocomplete.on('change', function resultSelected(e) {
        document.getElementById('address_country').value = e.suggestion.country || '';
        document.getElementById('address_city').value = e.suggestion.city || '';
        document.getElementById('address_postcode').value = e.suggestion.postcode || '';
      });
      placesAutocomplete.on('clear', function () {
        document.getElementById('address_country').value = '';
        document.getElementById('address_city').value = '';
        document.getElementById('address_postcode').value = '';
      });
      return this;
    }
  }]);

  return Address;
}();



/***/ }),

/***/ "./assets/js/pages/user/_address.js":
/*!******************************************!*\
  !*** ./assets/js/pages/user/_address.js ***!
  \******************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _class_Address__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../class/_Address */ "./assets/js/class/_Address.js");

document.addEventListener('DOMContentLoaded', function () {
  new _class_Address__WEBPACK_IMPORTED_MODULE_0__["default"](document.getElementById('address_address'));
});

/***/ })

},[["./assets/js/pages/user/_address.js","runtime","vendors~app~app_blog_article~app_order_index~app_shop_index~app_user_address~app_user_profile","vendors~app~app_blog_article~app_shop_index~app_user_address","vendors~app_blog_article~app_shop_index~app_user_address","vendors~app~app_shop_index~app_user_address","vendors~app_shop_index~app_user_address","app_shop_index~app_user_address"]]]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvY2xhc3MvX0FkZHJlc3MuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzL3BhZ2VzL3VzZXIvX2FkZHJlc3MuanMiXSwibmFtZXMiOlsiQWRkcmVzcyIsImFkZHJlc3NJbnB1dCIsIkhUTUxFbGVtZW50IiwiY29uc29sZSIsImVycm9yIiwiYXBwSWQiLCJkYXRhc2V0IiwiYXBwS2V5Iiwic2V0T3B0aW9ucyIsImluaXRQbGFjZXMiLCJmaXhlZE9wdGlvbnMiLCJhcGlLZXkiLCJjb250YWluZXIiLCJ0ZW1wbGF0ZXMiLCJ2YWx1ZSIsInN1Z2dlc3Rpb24iLCJuYW1lIiwicmVjb25maWd1cmFibGVPcHRpb25zIiwibGFuZ3VhZ2UiLCJ0eXBlIiwicGxhY2VzQXV0b2NvbXBsZXRlIiwicGxhY2VzIiwiY29uZmlndXJlIiwib24iLCJyZXN1bHRTZWxlY3RlZCIsImUiLCJkb2N1bWVudCIsImdldEVsZW1lbnRCeUlkIiwiY291bnRyeSIsImNpdHkiLCJwb3N0Y29kZSIsImFkZEV2ZW50TGlzdGVuZXIiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBOztJQUVxQkEsTzs7O0FBRWpCOzs7QUFHQSxtQkFBWUMsWUFBWixFQUNBO0FBQUE7O0FBQ0ksUUFBSSxDQUFDQSxZQUFELFlBQXlCQyxXQUE3QixFQUEwQztBQUN0QyxhQUFPQyxPQUFPLENBQUNDLEtBQVIsQ0FBYywwQ0FBZCxDQUFQO0FBQ0g7O0FBQ0QsU0FBS0gsWUFBTCxHQUFvQkEsWUFBcEI7QUFDQSxTQUFLSSxLQUFMLEdBQWEsS0FBS0osWUFBTCxDQUFrQkssT0FBbEIsQ0FBMEJELEtBQXZDO0FBQ0EsU0FBS0UsTUFBTCxHQUFjLEtBQUtOLFlBQUwsQ0FBa0JLLE9BQWxCLENBQTBCQyxNQUF4QztBQUVBLFNBQUtDLFVBQUwsR0FBa0JDLFVBQWxCO0FBQ0g7QUFFRDs7Ozs7Ozs7aUNBS0E7QUFDSSxXQUFLQyxZQUFMLEdBQW9CO0FBQ2hCTCxhQUFLLEVBQUUsS0FBS0EsS0FESTtBQUVoQk0sY0FBTSxFQUFFLEtBQUtKLE1BRkc7QUFHaEJLLGlCQUFTLEVBQUUsS0FBS1gsWUFIQTtBQUloQlksaUJBQVMsRUFBRTtBQUNQQyxlQUFLLEVBQUUsZUFBU0MsVUFBVCxFQUFxQjtBQUN4QixtQkFBT0EsVUFBVSxDQUFDQyxJQUFsQjtBQUNIO0FBSE07QUFKSyxPQUFwQjtBQVVBLFdBQUtDLHFCQUFMLEdBQTZCO0FBQ3pCQyxnQkFBUSxFQUFFLElBRGU7QUFFekJDLFlBQUksRUFBRTtBQUZtQixPQUE3QjtBQUtBLGFBQU8sSUFBUDtBQUNIO0FBRUQ7Ozs7Ozs7aUNBSWE7QUFDVCxVQUFJQyxrQkFBa0IsR0FBR0Msc0RBQU0sQ0FBQyxLQUFLWCxZQUFOLENBQU4sQ0FBMEJZLFNBQTFCLENBQW9DLEtBQUtMLHFCQUF6QyxDQUF6QjtBQUVBRyx3QkFBa0IsQ0FBQ0csRUFBbkIsQ0FBc0IsUUFBdEIsRUFBZ0MsU0FBU0MsY0FBVCxDQUF3QkMsQ0FBeEIsRUFBMkI7QUFDdkRDLGdCQUFRLENBQUNDLGNBQVQsQ0FBd0IsaUJBQXhCLEVBQTJDYixLQUEzQyxHQUFtRFcsQ0FBQyxDQUFDVixVQUFGLENBQWFhLE9BQWIsSUFBd0IsRUFBM0U7QUFDQUYsZ0JBQVEsQ0FBQ0MsY0FBVCxDQUF3QixjQUF4QixFQUF3Q2IsS0FBeEMsR0FBZ0RXLENBQUMsQ0FBQ1YsVUFBRixDQUFhYyxJQUFiLElBQXFCLEVBQXJFO0FBQ0FILGdCQUFRLENBQUNDLGNBQVQsQ0FBd0Isa0JBQXhCLEVBQTRDYixLQUE1QyxHQUFvRFcsQ0FBQyxDQUFDVixVQUFGLENBQWFlLFFBQWIsSUFBeUIsRUFBN0U7QUFDSCxPQUpEO0FBS0FWLHdCQUFrQixDQUFDRyxFQUFuQixDQUFzQixPQUF0QixFQUErQixZQUFNO0FBQ2pDRyxnQkFBUSxDQUFDQyxjQUFULENBQXdCLGlCQUF4QixFQUEyQ2IsS0FBM0MsR0FBbUQsRUFBbkQ7QUFDQVksZ0JBQVEsQ0FBQ0MsY0FBVCxDQUF3QixjQUF4QixFQUF3Q2IsS0FBeEMsR0FBZ0QsRUFBaEQ7QUFDQVksZ0JBQVEsQ0FBQ0MsY0FBVCxDQUF3QixrQkFBeEIsRUFBNENiLEtBQTVDLEdBQW9ELEVBQXBEO0FBQ0gsT0FKRDtBQU1BLGFBQU8sSUFBUDtBQUNIOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUM5REw7QUFBQTtBQUFBO0FBRUFZLFFBQVEsQ0FBQ0ssZ0JBQVQsQ0FBMEIsa0JBQTFCLEVBQThDLFlBQU07QUFDaEQsTUFBSS9CLHNEQUFKLENBQVkwQixRQUFRLENBQUNDLGNBQVQsQ0FBd0IsaUJBQXhCLENBQVo7QUFDSCxDQUZELEUiLCJmaWxlIjoiYXBwX3VzZXJfYWRkcmVzcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBwbGFjZXMgZnJvbSAnLi4vdmVuZG9ycy9wbGFjZXMnO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQWRkcmVzcyB7XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBAcGFyYW0ge0hUTUxFbGVtZW50fSBhZGRyZXNzSW5wdXRcclxuICAgICAqL1xyXG4gICAgY29uc3RydWN0b3IoYWRkcmVzc0lucHV0KVxyXG4gICAge1xyXG4gICAgICAgIGlmICghYWRkcmVzc0lucHV0IGluc3RhbmNlb2YgSFRNTEVsZW1lbnQpIHtcclxuICAgICAgICAgICAgcmV0dXJuIGNvbnNvbGUuZXJyb3IoJ2FkZHJlc3NJbnB1dCBkb2l0IMOqdHJlIHVuIMOpbMOpbWVudCBkdSBET00nKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5hZGRyZXNzSW5wdXQgPSBhZGRyZXNzSW5wdXQ7XHJcbiAgICAgICAgdGhpcy5hcHBJZCA9IHRoaXMuYWRkcmVzc0lucHV0LmRhdGFzZXQuYXBwSWQ7XHJcbiAgICAgICAgdGhpcy5hcHBLZXkgPSB0aGlzLmFkZHJlc3NJbnB1dC5kYXRhc2V0LmFwcEtleTtcclxuXHJcbiAgICAgICAgdGhpcy5zZXRPcHRpb25zKCkuaW5pdFBsYWNlcygpO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogQGRlc2MgaHR0cHM6Ly9jb21tdW5pdHkuYWxnb2xpYS5jb20vcGxhY2VzL2RvY3VtZW50YXRpb24uaHRtbCNvcHRpb25zXHJcbiAgICAgKiBAcmV0dXJuIHt0aGlzfVxyXG4gICAgICovXHJcbiAgICBzZXRPcHRpb25zKClcclxuICAgIHtcclxuICAgICAgICB0aGlzLmZpeGVkT3B0aW9ucyA9IHtcclxuICAgICAgICAgICAgYXBwSWQ6IHRoaXMuYXBwSWQsXHJcbiAgICAgICAgICAgIGFwaUtleTogdGhpcy5hcHBLZXksXHJcbiAgICAgICAgICAgIGNvbnRhaW5lcjogdGhpcy5hZGRyZXNzSW5wdXQsXHJcbiAgICAgICAgICAgIHRlbXBsYXRlczoge1xyXG4gICAgICAgICAgICAgICAgdmFsdWU6IGZ1bmN0aW9uKHN1Z2dlc3Rpb24pIHtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gc3VnZ2VzdGlvbi5uYW1lO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfTtcclxuICAgICAgICB0aGlzLnJlY29uZmlndXJhYmxlT3B0aW9ucyA9IHtcclxuICAgICAgICAgICAgbGFuZ3VhZ2U6ICdmcicsXHJcbiAgICAgICAgICAgIHR5cGU6ICdhZGRyZXNzJyxcclxuICAgICAgICB9O1xyXG5cclxuICAgICAgICByZXR1cm4gdGhpcztcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIEBkZXNjIEFjdGl2ZSBBbGdvbGlhIHBsYWNlcyBwb3VyIGwnYXV0b2NvbXBsw6l0aW9uIGRlcyBjaGFtcHMgZCdhZHJlc3NlXHJcbiAgICAgKiBAcmV0dXJuIHt0aGlzfVxyXG4gICAgICovXHJcbiAgICBpbml0UGxhY2VzKCkge1xyXG4gICAgICAgIGxldCBwbGFjZXNBdXRvY29tcGxldGUgPSBwbGFjZXModGhpcy5maXhlZE9wdGlvbnMpLmNvbmZpZ3VyZSh0aGlzLnJlY29uZmlndXJhYmxlT3B0aW9ucyk7XHJcblxyXG4gICAgICAgIHBsYWNlc0F1dG9jb21wbGV0ZS5vbignY2hhbmdlJywgZnVuY3Rpb24gcmVzdWx0U2VsZWN0ZWQoZSkge1xyXG4gICAgICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYWRkcmVzc19jb3VudHJ5JykudmFsdWUgPSBlLnN1Z2dlc3Rpb24uY291bnRyeSB8fCAnJztcclxuICAgICAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2FkZHJlc3NfY2l0eScpLnZhbHVlID0gZS5zdWdnZXN0aW9uLmNpdHkgfHwgJyc7XHJcbiAgICAgICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdhZGRyZXNzX3Bvc3Rjb2RlJykudmFsdWUgPSBlLnN1Z2dlc3Rpb24ucG9zdGNvZGUgfHwgJyc7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgcGxhY2VzQXV0b2NvbXBsZXRlLm9uKCdjbGVhcicsICgpID0+IHtcclxuICAgICAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2FkZHJlc3NfY291bnRyeScpLnZhbHVlID0gJyc7XHJcbiAgICAgICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdhZGRyZXNzX2NpdHknKS52YWx1ZSA9ICcnO1xyXG4gICAgICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYWRkcmVzc19wb3N0Y29kZScpLnZhbHVlID0gJyc7XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIHJldHVybiB0aGlzO1xyXG4gICAgfVxyXG59XHJcbiIsImltcG9ydCBBZGRyZXNzIGZyb20gXCIuLi8uLi9jbGFzcy9fQWRkcmVzc1wiO1xyXG5cclxuZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignRE9NQ29udGVudExvYWRlZCcsICgpID0+IHtcclxuICAgIG5ldyBBZGRyZXNzKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdhZGRyZXNzX2FkZHJlc3MnKSk7XHJcbn0pOyJdLCJzb3VyY2VSb290IjoiIn0=