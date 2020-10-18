(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["app_blog_article"],{

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

/***/ "./assets/js/pages/blog/_article.js":
/*!******************************************!*\
  !*** ./assets/js/pages/blog/_article.js ***!
  \******************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var core_js_modules_es_symbol__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.symbol */ "./node_modules/core-js/modules/es.symbol.js");
/* harmony import */ var core_js_modules_es_symbol__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_symbol_description__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.symbol.description */ "./node_modules/core-js/modules/es.symbol.description.js");
/* harmony import */ var core_js_modules_es_symbol_description__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_description__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_symbol_iterator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.symbol.iterator */ "./node_modules/core-js/modules/es.symbol.iterator.js");
/* harmony import */ var core_js_modules_es_symbol_iterator__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_iterator__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_array_iterator__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.array.iterator */ "./node_modules/core-js/modules/es.array.iterator.js");
/* harmony import */ var core_js_modules_es_array_iterator__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_iterator__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es_object_to_string__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es.object.to-string */ "./node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_es_regexp_exec__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/es.regexp.exec */ "./node_modules/core-js/modules/es.regexp.exec.js");
/* harmony import */ var core_js_modules_es_regexp_exec__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_exec__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var core_js_modules_es_string_iterator__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! core-js/modules/es.string.iterator */ "./node_modules/core-js/modules/es.string.iterator.js");
/* harmony import */ var core_js_modules_es_string_iterator__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_iterator__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var core_js_modules_es_string_replace__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! core-js/modules/es.string.replace */ "./node_modules/core-js/modules/es.string.replace.js");
/* harmony import */ var core_js_modules_es_string_replace__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_replace__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var core_js_modules_web_dom_collections_iterator__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! core-js/modules/web.dom-collections.iterator */ "./node_modules/core-js/modules/web.dom-collections.iterator.js");
/* harmony import */ var core_js_modules_web_dom_collections_iterator__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_iterator__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _functions_ajax__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../functions/_ajax */ "./assets/js/functions/_ajax.js");










document.addEventListener('DOMContentLoaded', function () {
  var newCommentContent = document.getElementById('new-comment-content');
  newCommentContent.addEventListener('paste', function (e) {
    e.preventDefault();
    var text = (e.originalEvent || e).clipboardData.getData('text/plain');
    text = text.replace(/\r\n/g, '\r').replace(/[\r\n]/g, '<br>');
    document.execCommand('insertHTML', false, text);
  });
  var newCommentValidate = document.getElementById('new-comment-validate');
  newCommentValidate.addEventListener('click', function () {
    var spinner = '<i class="fas fa-spinner"></i>';
    var validateButtonText = newCommentValidate.innerHTML;
    newCommentValidate.innerHTML = spinner;
    newCommentValidate.blur();

    if (newCommentContent.innerText.length === 0) {
      return;
    }

    var content = newCommentContent.innerHTML;
    var url = newCommentValidate.getAttribute('data-target-url');
    Object(_functions_ajax__WEBPACK_IMPORTED_MODULE_9__["default"])(url, function (response) {
      if (response.success) {
        var comment = createComment({
          date: response.date,
          username: response.username,
          content: response.content,
          deleteUrl: response.deleteUrl
        });
        var newComment = document.querySelector('.blog-article__comment--new');
        var nextElementSibling = newComment.nextElementSibling;

        if (nextElementSibling instanceof HTMLElement) {
          nextElementSibling.parentNode.insertBefore(comment, nextElementSibling);
        } else {
          newComment.parentNode.appendChild(comment);
        }

        newCommentContent.innerHTML = '';
      }

      newCommentValidate.innerHTML = validateButtonText;
    }, {
      method: 'POST',
      datas: {
        'content': content
      }
    });
  });
  var deleteButtons = document.querySelectorAll('.blog-comment-delete');
  var _iteratorNormalCompletion = true;
  var _didIteratorError = false;
  var _iteratorError = undefined;

  try {
    for (var _iterator = deleteButtons[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
      var deleteButton = _step.value;
      deleteButton.addEventListener('click', deleteComment);
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
});
/**
 *
 * @param {Object} commentDatas
 * @param {string} commentDatas.date
 * @param {string} commentDatas.username
 * @param {string} commentDatas.content
 * @param {string} commentDatas.deleteUrl
 */

function createComment(commentDatas) {
  var comment = document.createElement('div');
  comment.classList.add('blog-article__comment');
  comment.classList.add('blog-article__comment--right');
  var header = document.createElement('div');
  header.classList.add('blog-article__comment__header');
  var date = document.createElement('span');
  date.classList.add('blog-article__comment__header__date');
  date.innerText = commentDatas.date;
  header.appendChild(date);
  var sep = document.createTextNode(' - ');
  header.appendChild(sep);
  var username = document.createElement('span');
  username.classList.add('blog-article__comment__header__username');
  username.innerText = commentDatas.username;
  header.appendChild(username);
  comment.appendChild(header);
  var content = document.createElement('div');
  content.classList.add('blog-article__comment__content');
  var deleteButton = document.createElement('span');
  deleteButton.classList.add('blog-comment-delete');
  deleteButton.setAttribute('data-target-url', commentDatas.deleteUrl);
  var deleteIcon = document.createElement('i');
  deleteIcon.classList.add('far');
  deleteIcon.classList.add('fa-window-close');
  deleteButton.appendChild(deleteIcon);
  deleteButton.addEventListener('click', deleteComment);
  content.innerHTML = ' ' + commentDatas.content;
  content.prepend(deleteButton);
  comment.appendChild(content);
  return comment;
}

function deleteComment() {
  var _this = this;

  if (!confirm('Supprimer?')) {
    return;
  }

  var spinner = '<i class="fas fa-spinner"></i>';
  var deleteButton = this;
  var deleteIcon = deleteButton.innerHTML;
  deleteButton.innerHTML = spinner;
  Object(_functions_ajax__WEBPACK_IMPORTED_MODULE_9__["default"])(deleteButton.dataset.targetUrl, function (response) {
    if (response.success) {
      var message = _this;

      while (!message.classList.contains('blog-article__comment')) {
        message = message.parentNode;
      }

      message.parentNode.removeChild(message);
    }

    deleteButton.innerHTML = deleteIcon;
  }, {
    method: 'DELETE'
  });
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

},[["./assets/js/pages/blog/_article.js","runtime","vendors~app~app_blog_article~app_order_index~app_shop_index~app_user_address~app_user_profile","vendors~app~app_blog_article~app_shop_index~app_user_address","vendors~app_blog_article~app_shop_index~app_user_address"]]]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvZnVuY3Rpb25zL19hamF4LmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9qcy9wYWdlcy9ibG9nL19hcnRpY2xlLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9vYmplY3QtYXNzaWduLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvZXMub2JqZWN0LmFzc2lnbi5qcyJdLCJuYW1lcyI6WyJhamF4IiwidXJsIiwiY2FsbGJhY2siLCJvcHRpb25zIiwiT2JqZWN0IiwiYXNzaWduIiwibWV0aG9kIiwiZGF0YXMiLCJqc29uIiwiZm9ybURhdGEiLCJwcm9wZXJ0aWVzIiwia2V5cyIsImxlbmd0aCIsIkZvcm1EYXRhIiwiZm9yRWFjaCIsInByb3BlcnR5IiwiYXBwZW5kIiwieGhyIiwiWE1MSHR0cFJlcXVlc3QiLCJvcGVuIiwiYWRkRXZlbnRMaXN0ZW5lciIsInN0YXR1cyIsImNvbnNvbGUiLCJlcnJvciIsInJlc3BvbnNlIiwiSlNPTiIsInBhcnNlIiwiZSIsInNlbmQiLCJkb2N1bWVudCIsIm5ld0NvbW1lbnRDb250ZW50IiwiZ2V0RWxlbWVudEJ5SWQiLCJwcmV2ZW50RGVmYXVsdCIsInRleHQiLCJvcmlnaW5hbEV2ZW50IiwiY2xpcGJvYXJkRGF0YSIsImdldERhdGEiLCJyZXBsYWNlIiwiZXhlY0NvbW1hbmQiLCJuZXdDb21tZW50VmFsaWRhdGUiLCJzcGlubmVyIiwidmFsaWRhdGVCdXR0b25UZXh0IiwiaW5uZXJIVE1MIiwiYmx1ciIsImlubmVyVGV4dCIsImNvbnRlbnQiLCJnZXRBdHRyaWJ1dGUiLCJzdWNjZXNzIiwiY29tbWVudCIsImNyZWF0ZUNvbW1lbnQiLCJkYXRlIiwidXNlcm5hbWUiLCJkZWxldGVVcmwiLCJuZXdDb21tZW50IiwicXVlcnlTZWxlY3RvciIsIm5leHRFbGVtZW50U2libGluZyIsIkhUTUxFbGVtZW50IiwicGFyZW50Tm9kZSIsImluc2VydEJlZm9yZSIsImFwcGVuZENoaWxkIiwiZGVsZXRlQnV0dG9ucyIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJkZWxldGVCdXR0b24iLCJkZWxldGVDb21tZW50IiwiY29tbWVudERhdGFzIiwiY3JlYXRlRWxlbWVudCIsImNsYXNzTGlzdCIsImFkZCIsImhlYWRlciIsInNlcCIsImNyZWF0ZVRleHROb2RlIiwic2V0QXR0cmlidXRlIiwiZGVsZXRlSWNvbiIsInByZXBlbmQiLCJjb25maXJtIiwiZGF0YXNldCIsInRhcmdldFVybCIsIm1lc3NhZ2UiLCJjb250YWlucyIsInJlbW92ZUNoaWxkIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7Ozs7OztBQU1BOzs7Ozs7Ozs7QUFTZSxTQUFTQSxJQUFULENBQWNDLEdBQWQsRUFBbUJDLFFBQW5CLEVBQ2Y7QUFBQSxNQUQ0Q0MsT0FDNUMsdUVBRHNELEVBQ3REO0FBQ0k7QUFDQUEsU0FBTyxHQUFHQyxNQUFNLENBQUNDLE1BQVAsQ0FBYztBQUNwQkMsVUFBTSxFQUFFLEtBRFk7QUFFcEJDLFNBQUssRUFBRSxFQUZhO0FBR3BCQyxRQUFJLEVBQUU7QUFIYyxHQUFkLEVBSVBMLE9BSk8sQ0FBVjtBQU1BLE1BQUlNLFFBQVEsR0FBRyxJQUFmO0FBQ0EsTUFBSUMsVUFBVSxHQUFHTixNQUFNLENBQUNPLElBQVAsQ0FBWVIsT0FBTyxDQUFDSSxLQUFwQixDQUFqQjs7QUFDQSxNQUFJRyxVQUFVLENBQUNFLE1BQVgsR0FBb0IsQ0FBeEIsRUFBMkI7QUFDdkJILFlBQVEsR0FBRyxJQUFJSSxRQUFKLEVBQVg7QUFDQUgsY0FBVSxDQUFDSSxPQUFYLENBQW1CLFVBQUNDLFFBQUQsRUFBYztBQUM3Qk4sY0FBUSxDQUFDTyxNQUFULENBQWdCRCxRQUFoQixFQUEwQlosT0FBTyxDQUFDSSxLQUFSLENBQWNRLFFBQWQsQ0FBMUI7QUFDSCxLQUZEO0FBR0g7O0FBQ0QsTUFBSUUsR0FBRyxHQUFHLElBQUlDLGNBQUos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Z0JBQVksQ0FBQ3BCLFNBQWIsR0FBeUI4QixVQUF6QjtBQUNILEdBWEQsRUFZQTtBQUNJbEUsVUFBTSxFQUFFO0FBRFosR0FaQSxDQUFKO0FBZ0JILEM7Ozs7Ozs7Ozs7OztBQ3pIWTtBQUNiLGtCQUFrQixtQkFBTyxDQUFDLGlGQUEwQjtBQUNwRCxZQUFZLG1CQUFPLENBQUMscUVBQW9CO0FBQ3hDLGlCQUFpQixtQkFBTyxDQUFDLGlGQUEwQjtBQUNuRCxrQ0FBa0MsbUJBQU8sQ0FBQyx5SEFBOEM7QUFDeEYsaUNBQWlDLG1CQUFPLENBQUMscUhBQTRDO0FBQ3JGLGVBQWUsbUJBQU8sQ0FBQyw2RUFBd0I7QUFDL0Msb0JBQW9CLG1CQUFPLENBQUMsdUZBQTZCOztBQUV6RDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDZDQUE2QyxjQUFjLEVBQUU7QUFDN0Qsd0JBQXdCLCtDQUErQztBQUN2RSxDQUFDLHFDQUFxQztBQUN0QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0gsQ0FBQzs7Ozs7Ozs7Ozs7O0FDeENELFFBQVEsbUJBQU8sQ0FBQyx1RUFBcUI7QUFDckMsYUFBYSxtQkFBTyxDQUFDLHFGQUE0Qjs7QUFFakQ7QUFDQTtBQUNBLEdBQUcsaUVBQWlFO0FBQ3BFO0FBQ0EsQ0FBQyIsImZpbGUiOiJhcHBfYmxvZ19hcnRpY2xlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXHJcbiAqIFRoaXMgY2FsbGJhY2sgaXMgZGlzcGxheWVkIGFzIGEgZ2xvYmFsIG1lbWJlci5cclxuICogQGNhbGxiYWNrIGFqYXhDYWxsYmFja1xyXG4gKiBAcGFyYW0ge09iamVjdHxzdHJpbmd9IHJlc3BvbnNlTWVzc2FnZVxyXG4gKi9cclxuXHJcbi8qKlxyXG4gKlxyXG4gKiBAcGFyYW0ge3N0cmluZ30gdXJsXHJcbiAqIEBwYXJhbSB7YWpheENhbGxiYWNrfSBjYWxsYmFja1xyXG4gKiBAcGFyYW0ge09iamVjdH0gb3B0aW9uc1xyXG4gKiBAcGFyYW0ge3N0cmluZ30gW29wdGlvbnMubWV0aG9kPUdFVF1cclxuICogQHBhcmFtIHtPYmplY3R9IFtvcHRpb25zLmRhdGFzPXt9XVxyXG4gKiBAcGFyYW0ge0Jvb2xlYW59IFtvcHRpb25zLmpzb249dHJ1ZV1cclxuICovXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGFqYXgodXJsLCBjYWxsYmFjaywgb3B0aW9ucyA9IHt9KVxyXG57XHJcbiAgICAvL1NldHRpbmdzXHJcbiAgICBvcHRpb25zID0gT2JqZWN0LmFzc2lnbih7XHJcbiAgICAgICAgbWV0aG9kOiAnR0VUJyxcclxuICAgICAgICBkYXRhczoge30sXHJcbiAgICAgICAganNvbjogdHJ1ZSxcclxuICAgIH0sIG9wdGlvbnMpO1xyXG5cclxuICAgIGxldCBmb3JtRGF0YSA9IG51bGw7XHJcbiAgICBsZXQgcHJvcGVydGllcyA9IE9iamVjdC5rZXlzKG9wdGlvbnMuZGF0YXMpO1xyXG4gICAgaWYgKHByb3BlcnRpZXMubGVuZ3RoID4gMCkge1xyXG4gICAgICAgIGZvcm1EYXRhID0gbmV3IEZvcm1EYXRhKCk7XHJcbiAgICAgICAgcHJvcGVydGllcy5mb3JFYWNoKChwcm9wZXJ0eSkgPT4ge1xyXG4gICAgICAgICAgICBmb3JtRGF0YS5hcHBlbmQocHJvcGVydHksIG9wdGlvbnMuZGF0YXNbcHJvcGVydHldKTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuICAgIGxldCB4aHIgPSBuZXcgWE1MSHR0cFJlcXVlc3QoKTtcclxuICAgIHhoci5vcGVuKG9wdGlvbnMubWV0aG9kLCB1cmwpO1xyXG4gICAgeGhyLmFkZEV2ZW50TGlzdGVuZXIoJ2xvYWQnLCAoKSA9PiB7XHJcbiAgICAgICAgaWYgKHhoci5zdGF0dXMgPCAyMDAgJiYgeGhyLnN0YXR1cyA+PSA0MDApIHtcclxuICAgICAgICAgICAgY29uc29sZS5lcnJvcignRWNoZWMgSFRUUCA6IGNvZGUnLnhoci5zdGF0dXMpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIGxldCByZXNwb25zZSA9IHhoci5yZXNwb25zZTtcclxuICAgICAgICAgICAgaWYgKG9wdGlvbnMuanNvbikge1xyXG4gICAgICAgICAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgICAgICAgICByZXNwb25zZSA9IEpTT04ucGFyc2UocmVzcG9uc2UpO1xyXG4gICAgICAgICAgICAgICAgfSBjYXRjaCAoZSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoJ0Zvcm1hdCBKU09OIGludmFsaWRlJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGNhbGxiYWNrKHJlc3BvbnNlKTtcclxuICAgICAgICB9XHJcbiAgICB9KTtcclxuICAgIHhoci5zZW5kKGZvcm1EYXRhKTtcclxufSIsImltcG9ydCBhamF4IGZyb20gXCIuLi8uLi9mdW5jdGlvbnMvX2FqYXhcIjtcclxuXHJcbmRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ0RPTUNvbnRlbnRMb2FkZWQnLCAoKSA9PiB7XHJcbiAgICBsZXQgbmV3Q29tbWVudENvbnRlbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbmV3LWNvbW1lbnQtY29udGVudCcpO1xyXG4gICAgbmV3Q29tbWVudENvbnRlbnQuYWRkRXZlbnRMaXN0ZW5lcigncGFzdGUnLCAoZSkgPT4ge1xyXG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICBsZXQgdGV4dCA9IChlLm9yaWdpbmFsRXZlbnQgfHwgZSkuY2xpcGJvYXJkRGF0YS5nZXREYXRhKCd0ZXh0L3BsYWluJyk7XHJcbiAgICAgICAgdGV4dCA9IHRleHQucmVwbGFjZSgvXFxyXFxuL2csICdcXHInKS5yZXBsYWNlKC9bXFxyXFxuXS9nLCAnPGJyPicpO1xyXG4gICAgICAgIGRvY3VtZW50LmV4ZWNDb21tYW5kKCdpbnNlcnRIVE1MJywgZmFsc2UsIHRleHQpO1xyXG4gICAgfSk7XHJcbiAgICBsZXQgbmV3Q29tbWVudFZhbGlkYXRlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ25ldy1jb21tZW50LXZhbGlkYXRlJyk7XHJcbiAgICBuZXdDb21tZW50VmFsaWRhdGUuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XHJcbiAgICAgICAgbGV0IHNwaW5uZXIgPSAnPGkgY2xhc3M9XCJmYXMgZmEtc3Bpbm5lclwiPjwvaT4nO1xyXG4gICAgICAgIGxldCB2YWxpZGF0ZUJ1dHRvblRleHQgPSBuZXdDb21tZW50VmFsaWRhdGUuaW5uZXJIVE1MO1xyXG4gICAgICAgIG5ld0NvbW1lbnRWYWxpZGF0ZS5pbm5lckhUTUwgPSBzcGlubmVyO1xyXG4gICAgICAgIG5ld0NvbW1lbnRWYWxpZGF0ZS5ibHVyKCk7XHJcbiAgICAgICAgaWYgKG5ld0NvbW1lbnRDb250ZW50LmlubmVyVGV4dC5sZW5ndGggPT09IDApIHtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgICAgICBsZXQgY29udGVudCA9IG5ld0NvbW1lbnRDb250ZW50LmlubmVySFRNTDtcclxuICAgICAgICBsZXQgdXJsID0gbmV3Q29tbWVudFZhbGlkYXRlLmdldEF0dHJpYnV0ZSgnZGF0YS10YXJnZXQtdXJsJyk7XHJcbiAgICAgICAgYWpheChcclxuICAgICAgICAgICAgdXJsLFxyXG4gICAgICAgICAgICAocmVzcG9uc2UpID0+IHtcclxuICAgICAgICAgICAgICAgIGlmIChyZXNwb25zZS5zdWNjZXNzKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgbGV0IGNvbW1lbnQgPSBjcmVhdGVDb21tZW50KHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZGF0ZTogcmVzcG9uc2UuZGF0ZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgdXNlcm5hbWU6IHJlc3BvbnNlLnVzZXJuYW1lLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb250ZW50OiByZXNwb25zZS5jb250ZW50LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBkZWxldGVVcmw6IHJlc3BvbnNlLmRlbGV0ZVVybFxyXG4gICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgIGxldCBuZXdDb21tZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmJsb2ctYXJ0aWNsZV9fY29tbWVudC0tbmV3Jyk7XHJcbiAgICAgICAgICAgICAgICAgICAgbGV0IG5leHRFbGVtZW50U2libGluZyA9IG5ld0NvbW1lbnQubmV4dEVsZW1lbnRTaWJsaW5nO1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChuZXh0RWxlbWVudFNpYmxpbmcgaW5zdGFuY2VvZiBIVE1MRWxlbWVudCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBuZXh0RWxlbWVudFNpYmxpbmcucGFyZW50Tm9kZS5pbnNlcnRCZWZvcmUoY29tbWVudCxuZXh0RWxlbWVudFNpYmxpbmcpO1xyXG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG5ld0NvbW1lbnQucGFyZW50Tm9kZS5hcHBlbmRDaGlsZChjb21tZW50KTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgbmV3Q29tbWVudENvbnRlbnQuaW5uZXJIVE1MID0gJyc7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBuZXdDb21tZW50VmFsaWRhdGUuaW5uZXJIVE1MID0gdmFsaWRhdGVCdXR0b25UZXh0O1xyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBtZXRob2Q6ICdQT1NUJyxcclxuICAgICAgICAgICAgICAgIGRhdGFzOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgJ2NvbnRlbnQnOiBjb250ZW50XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICApO1xyXG4gICAgfSk7XHJcbiAgICBsZXQgZGVsZXRlQnV0dG9ucyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5ibG9nLWNvbW1lbnQtZGVsZXRlJyk7XHJcbiAgICBmb3IgKGxldCBkZWxldGVCdXR0b24gb2YgZGVsZXRlQnV0dG9ucykge1xyXG4gICAgICAgIGRlbGV0ZUJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGRlbGV0ZUNvbW1lbnQpO1xyXG4gICAgfVxyXG59KTtcclxuXHJcbi8qKlxyXG4gKlxyXG4gKiBAcGFyYW0ge09iamVjdH0gY29tbWVudERhdGFzXHJcbiAqIEBwYXJhbSB7c3RyaW5nfSBjb21tZW50RGF0YXMuZGF0ZVxyXG4gKiBAcGFyYW0ge3N0cmluZ30gY29tbWVudERhdGFzLnVzZXJuYW1lXHJcbiAqIEBwYXJhbSB7c3RyaW5nfSBjb21tZW50RGF0YXMuY29udGVudFxyXG4gKiBAcGFyYW0ge3N0cmluZ30gY29tbWVudERhdGFzLmRlbGV0ZVVybFxyXG4gKi9cclxuZnVuY3Rpb24gY3JlYXRlQ29tbWVudChjb21tZW50RGF0YXMpIHtcclxuICAgIGxldCBjb21tZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICBjb21tZW50LmNsYXNzTGlzdC5hZGQoJ2Jsb2ctYXJ0aWNsZV9fY29tbWVudCcpO1xyXG4gICAgY29tbWVudC5jbGFzc0xpc3QuYWRkKCdibG9nLWFydGljbGVfX2NvbW1lbnQtLXJpZ2h0Jyk7XHJcbiAgICBsZXQgaGVhZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICBoZWFkZXIuY2xhc3NMaXN0LmFkZCgnYmxvZy1hcnRpY2xlX19jb21tZW50X19oZWFkZXInKTtcclxuICAgIGxldCBkYXRlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpO1xyXG4gICAgZGF0ZS5jbGFzc0xpc3QuYWRkKCdibG9nLWFydGljbGVfX2NvbW1lbnRfX2hlYWRlcl9fZGF0ZScpO1xyXG4gICAgZGF0ZS5pbm5lclRleHQgPSBjb21tZW50RGF0YXMuZGF0ZTtcclxuICAgIGhlYWRlci5hcHBlbmRDaGlsZChkYXRlKTtcclxuICAgIGxldCBzZXAgPSBkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZSgnIC0gJyk7XHJcbiAgICBoZWFkZXIuYXBwZW5kQ2hpbGQoc2VwKTtcclxuICAgIGxldCB1c2VybmFtZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKTtcclxuICAgIHVzZXJuYW1lLmNsYXNzTGlzdC5hZGQoJ2Jsb2ctYXJ0aWNsZV9fY29tbWVudF9faGVhZGVyX191c2VybmFtZScpO1xyXG4gICAgdXNlcm5hbWUuaW5uZXJUZXh0ID0gY29tbWVudERhdGFzLnVzZXJuYW1lO1xyXG4gICAgaGVhZGVyLmFwcGVuZENoaWxkKHVzZXJuYW1lKTtcclxuICAgIGNvbW1lbnQuYXBwZW5kQ2hpbGQoaGVhZGVyKTtcclxuICAgIGxldCBjb250ZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICBjb250ZW50LmNsYXNzTGlzdC5hZGQoJ2Jsb2ctYXJ0aWNsZV9fY29tbWVudF9fY29udGVudCcpO1xyXG4gICAgbGV0IGRlbGV0ZUJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKTtcclxuICAgIGRlbGV0ZUJ1dHRvbi5jbGFzc0xpc3QuYWRkKCdibG9nLWNvbW1lbnQtZGVsZXRlJyk7XHJcbiAgICBkZWxldGVCdXR0b24uc2V0QXR0cmlidXRlKCdkYXRhLXRhcmdldC11cmwnLCBjb21tZW50RGF0YXMuZGVsZXRlVXJsKTtcclxuICAgIGxldCBkZWxldGVJY29uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaScpO1xyXG4gICAgZGVsZXRlSWNvbi5jbGFzc0xpc3QuYWRkKCdmYXInKTtcclxuICAgIGRlbGV0ZUljb24uY2xhc3NMaXN0LmFkZCgnZmEtd2luZG93LWNsb3NlJyk7XHJcbiAgICBkZWxldGVCdXR0b24uYXBwZW5kQ2hpbGQoZGVsZXRlSWNvbik7XHJcbiAgICBkZWxldGVCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBkZWxldGVDb21tZW50KTtcclxuICAgIGNvbnRlbnQuaW5uZXJIVE1MID0gJyAnICsgY29tbWVudERhdGFzLmNvbnRlbnQ7XHJcbiAgICBjb250ZW50LnByZXBlbmQoZGVsZXRlQnV0dG9uKTtcclxuICAgIGNvbW1lbnQuYXBwZW5kQ2hpbGQoY29udGVudCk7XHJcbiAgICByZXR1cm4gY29tbWVudDtcclxufVxyXG5cclxuZnVuY3Rpb24gZGVsZXRlQ29tbWVudCgpIHtcclxuICAgIGlmICghY29uZmlybSgnU3VwcHJpbWVyPycpKSB7XHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG4gICAgbGV0IHNwaW5uZXIgPSAnPGkgY2xhc3M9XCJmYXMgZmEtc3Bpbm5lclwiPjwvaT4nO1xyXG4gICAgbGV0IGRlbGV0ZUJ1dHRvbiA9IHRoaXM7XHJcbiAgICBsZXQgZGVsZXRlSWNvbiA9IGRlbGV0ZUJ1dHRvbi5pbm5lckhUTUw7XHJcbiAgICBkZWxldGVCdXR0b24uaW5uZXJIVE1MID0gc3Bpbm5lcjtcclxuICAgIGFqYXgoXHJcbiAgICAgICAgZGVsZXRlQnV0dG9uLmRhdGFzZXQudGFyZ2V0VXJsLFxyXG4gICAgICAgIChyZXNwb25zZSkgPT4ge1xyXG4gICAgICAgICAgICBpZiAocmVzcG9uc2Uuc3VjY2Vzcykge1xyXG4gICAgICAgICAgICAgICAgbGV0IG1lc3NhZ2UgPSB0aGlzO1xyXG4gICAgICAgICAgICAgICAgd2hpbGUgKCFtZXNzYWdlLmNsYXNzTGlzdC5jb250YWlucygnYmxvZy1hcnRpY2xlX19jb21tZW50JykpIHtcclxuICAgICAgICAgICAgICAgICAgICBtZXNzYWdlID0gbWVzc2FnZS5wYXJlbnROb2RlO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgbWVzc2FnZS5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKG1lc3NhZ2UpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGRlbGV0ZUJ1dHRvbi5pbm5lckhUTUwgPSBkZWxldGVJY29uO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBtZXRob2Q6ICdERUxFVEUnXHJcbiAgICAgICAgfVxyXG4gICAgKTtcclxufSIsIid1c2Ugc3RyaWN0JztcbnZhciBERVNDUklQVE9SUyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9kZXNjcmlwdG9ycycpO1xudmFyIGZhaWxzID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2ZhaWxzJyk7XG52YXIgb2JqZWN0S2V5cyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9vYmplY3Qta2V5cycpO1xudmFyIGdldE93blByb3BlcnR5U3ltYm9sc01vZHVsZSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9vYmplY3QtZ2V0LW93bi1wcm9wZXJ0eS1zeW1ib2xzJyk7XG52YXIgcHJvcGVydHlJc0VudW1lcmFibGVNb2R1bGUgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvb2JqZWN0LXByb3BlcnR5LWlzLWVudW1lcmFibGUnKTtcbnZhciB0b09iamVjdCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy90by1vYmplY3QnKTtcbnZhciBJbmRleGVkT2JqZWN0ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2luZGV4ZWQtb2JqZWN0Jyk7XG5cbnZhciBuYXRpdmVBc3NpZ24gPSBPYmplY3QuYXNzaWduO1xuXG4vLyBgT2JqZWN0LmFzc2lnbmAgbWV0aG9kXG4vLyBodHRwczovL3RjMzkuZ2l0aHViLmlvL2VjbWEyNjIvI3NlYy1vYmplY3QuYXNzaWduXG4vLyBzaG91bGQgd29yayB3aXRoIHN5bWJvbHMgYW5kIHNob3VsZCBoYXZlIGRldGVybWluaXN0aWMgcHJvcGVydHkgb3JkZXIgKFY4IGJ1Zylcbm1vZHVsZS5leHBvcnRzID0gIW5hdGl2ZUFzc2lnbiB8fCBmYWlscyhmdW5jdGlvbiAoKSB7XG4gIHZhciBBID0ge307XG4gIHZhciBCID0ge307XG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby11bmRlZlxuICB2YXIgc3ltYm9sID0gU3ltYm9sKCk7XG4gIHZhciBhbHBoYWJldCA9ICdhYmNkZWZnaGlqa2xtbm9wcXJzdCc7XG4gIEFbc3ltYm9sXSA9IDc7XG4gIGFscGhhYmV0LnNwbGl0KCcnKS5mb3JFYWNoKGZ1bmN0aW9uIChjaHIpIHsgQltjaHJdID0gY2hyOyB9KTtcbiAgcmV0dXJuIG5hdGl2ZUFzc2lnbih7fSwgQSlbc3ltYm9sXSAhPSA3IHx8IG9iamVjdEtleXMobmF0aXZlQXNzaWduKHt9LCBCKSkuam9pbignJykgIT0gYWxwaGFiZXQ7XG59KSA/IGZ1bmN0aW9uIGFzc2lnbih0YXJnZXQsIHNvdXJjZSkgeyAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIG5vLXVudXNlZC12YXJzXG4gIHZhciBUID0gdG9PYmplY3QodGFyZ2V0KTtcbiAgdmFyIGFyZ3VtZW50c0xlbmd0aCA9IGFyZ3VtZW50cy5sZW5ndGg7XG4gIHZhciBpbmRleCA9IDE7XG4gIHZhciBnZXRPd25Qcm9wZXJ0eVN5bWJvbHMgPSBnZXRPd25Qcm9wZXJ0eVN5bWJvbHNNb2R1bGUuZjtcbiAgdmFyIHByb3BlcnR5SXNFbnVtZXJhYmxlID0gcHJvcGVydHlJc0VudW1lcmFibGVNb2R1bGUuZjtcbiAgd2hpbGUgKGFyZ3VtZW50c0xlbmd0aCA+IGluZGV4KSB7XG4gICAgdmFyIFMgPSBJbmRleGVkT2JqZWN0KGFyZ3VtZW50c1tpbmRleCsrXSk7XG4gICAgdmFyIGtleXMgPSBnZXRPd25Qcm9wZXJ0eVN5bWJvbHMgPyBvYmplY3RLZXlzKFMpLmNvbmNhdChnZXRPd25Qcm9wZXJ0eVN5bWJvbHMoUykpIDogb2JqZWN0S2V5cyhTKTtcbiAgICB2YXIgbGVuZ3RoID0ga2V5cy5sZW5ndGg7XG4gICAgdmFyIGogPSAwO1xuICAgIHZhciBrZXk7XG4gICAgd2hpbGUgKGxlbmd0aCA+IGopIHtcbiAgICAgIGtleSA9IGtleXNbaisrXTtcbiAgICAgIGlmICghREVTQ1JJUFRPUlMgfHwgcHJvcGVydHlJc0VudW1lcmFibGUuY2FsbChTLCBrZXkpKSBUW2tleV0gPSBTW2tleV07XG4gICAgfVxuICB9IHJldHVybiBUO1xufSA6IG5hdGl2ZUFzc2lnbjtcbiIsInZhciAkID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2V4cG9ydCcpO1xudmFyIGFzc2lnbiA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9vYmplY3QtYXNzaWduJyk7XG5cbi8vIGBPYmplY3QuYXNzaWduYCBtZXRob2Rcbi8vIGh0dHBzOi8vdGMzOS5naXRodWIuaW8vZWNtYTI2Mi8jc2VjLW9iamVjdC5hc3NpZ25cbiQoeyB0YXJnZXQ6ICdPYmplY3QnLCBzdGF0OiB0cnVlLCBmb3JjZWQ6IE9iamVjdC5hc3NpZ24gIT09IGFzc2lnbiB9LCB7XG4gIGFzc2lnbjogYXNzaWduXG59KTtcbiJdLCJzb3VyY2VSb290IjoiIn0=