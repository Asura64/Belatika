(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["app_shop_index~app_user_address"],{

/***/ "./assets/js/vendors/leaflet.js":
/*!**************************************!*\
  !*** ./assets/js/vendors/leaflet.js ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(module) {var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_RESULT__;__webpack_require__(/*! core-js/modules/es.symbol */ "./node_modules/core-js/modules/es.symbol.js");

__webpack_require__(/*! core-js/modules/es.symbol.description */ "./node_modules/core-js/modules/es.symbol.description.js");

__webpack_require__(/*! core-js/modules/es.symbol.iterator */ "./node_modules/core-js/modules/es.symbol.iterator.js");

__webpack_require__(/*! core-js/modules/es.array.concat */ "./node_modules/core-js/modules/es.array.concat.js");

__webpack_require__(/*! core-js/modules/es.array.fill */ "./node_modules/core-js/modules/es.array.fill.js");

__webpack_require__(/*! core-js/modules/es.array.filter */ "./node_modules/core-js/modules/es.array.filter.js");

__webpack_require__(/*! core-js/modules/es.array.includes */ "./node_modules/core-js/modules/es.array.includes.js");

__webpack_require__(/*! core-js/modules/es.array.index-of */ "./node_modules/core-js/modules/es.array.index-of.js");

__webpack_require__(/*! core-js/modules/es.array.is-array */ "./node_modules/core-js/modules/es.array.is-array.js");

__webpack_require__(/*! core-js/modules/es.array.iterator */ "./node_modules/core-js/modules/es.array.iterator.js");

__webpack_require__(/*! core-js/modules/es.array.join */ "./node_modules/core-js/modules/es.array.join.js");

__webpack_require__(/*! core-js/modules/es.array.slice */ "./node_modules/core-js/modules/es.array.slice.js");

__webpack_require__(/*! core-js/modules/es.array.sort */ "./node_modules/core-js/modules/es.array.sort.js");

__webpack_require__(/*! core-js/modules/es.array.splice */ "./node_modules/core-js/modules/es.array.splice.js");

__webpack_require__(/*! core-js/modules/es.array-buffer.slice */ "./node_modules/core-js/modules/es.array-buffer.slice.js");

__webpack_require__(/*! core-js/modules/es.date.now */ "./node_modules/core-js/modules/es.date.now.js");

__webpack_require__(/*! core-js/modules/es.date.to-string */ "./node_modules/core-js/modules/es.date.to-string.js");

__webpack_require__(/*! core-js/modules/es.function.bind */ "./node_modules/core-js/modules/es.function.bind.js");

__webpack_require__(/*! core-js/modules/es.function.name */ "./node_modules/core-js/modules/es.function.name.js");

__webpack_require__(/*! core-js/modules/es.number.constructor */ "./node_modules/core-js/modules/es.number.constructor.js");

__webpack_require__(/*! core-js/modules/es.object.create */ "./node_modules/core-js/modules/es.object.create.js");

__webpack_require__(/*! core-js/modules/es.object.to-string */ "./node_modules/core-js/modules/es.object.to-string.js");

__webpack_require__(/*! core-js/modules/es.parse-float */ "./node_modules/core-js/modules/es.parse-float.js");

__webpack_require__(/*! core-js/modules/es.parse-int */ "./node_modules/core-js/modules/es.parse-int.js");

__webpack_require__(/*! core-js/modules/es.regexp.constructor */ "./node_modules/core-js/modules/es.regexp.constructor.js");

__webpack_require__(/*! core-js/modules/es.regexp.exec */ "./node_modules/core-js/modules/es.regexp.exec.js");

__webpack_require__(/*! core-js/modules/es.regexp.to-string */ "./node_modules/core-js/modules/es.regexp.to-string.js");

__webpack_require__(/*! core-js/modules/es.string.includes */ "./node_modules/core-js/modules/es.string.includes.js");

__webpack_require__(/*! core-js/modules/es.string.iterator */ "./node_modules/core-js/modules/es.string.iterator.js");

__webpack_require__(/*! core-js/modules/es.string.replace */ "./node_modules/core-js/modules/es.string.replace.js");

__webpack_require__(/*! core-js/modules/es.string.search */ "./node_modules/core-js/modules/es.string.search.js");

__webpack_require__(/*! core-js/modules/es.string.split */ "./node_modules/core-js/modules/es.string.split.js");

__webpack_require__(/*! core-js/modules/es.string.trim */ "./node_modules/core-js/modules/es.string.trim.js");

__webpack_require__(/*! core-js/modules/es.typed-array.uint8-array */ "./node_modules/core-js/modules/es.typed-array.uint8-array.js");

__webpack_require__(/*! core-js/modules/es.typed-array.copy-within */ "./node_modules/core-js/modules/es.typed-array.copy-within.js");

__webpack_require__(/*! core-js/modules/es.typed-array.every */ "./node_modules/core-js/modules/es.typed-array.every.js");

__webpack_require__(/*! core-js/modules/es.typed-array.fill */ "./node_modules/core-js/modules/es.typed-array.fill.js");

__webpack_require__(/*! core-js/modules/es.typed-array.filter */ "./node_modules/core-js/modules/es.typed-array.filter.js");

__webpack_require__(/*! core-js/modules/es.typed-array.find */ "./node_modules/core-js/modules/es.typed-array.find.js");

__webpack_require__(/*! core-js/modules/es.typed-array.find-index */ "./node_modules/core-js/modules/es.typed-array.find-index.js");

__webpack_require__(/*! core-js/modules/es.typed-array.for-each */ "./node_modules/core-js/modules/es.typed-array.for-each.js");

__webpack_require__(/*! core-js/modules/es.typed-array.includes */ "./node_modules/core-js/modules/es.typed-array.includes.js");

__webpack_require__(/*! core-js/modules/es.typed-array.index-of */ "./node_modules/core-js/modules/es.typed-array.index-of.js");

__webpack_require__(/*! core-js/modules/es.typed-array.iterator */ "./node_modules/core-js/modules/es.typed-array.iterator.js");

__webpack_require__(/*! core-js/modules/es.typed-array.join */ "./node_modules/core-js/modules/es.typed-array.join.js");

__webpack_require__(/*! core-js/modules/es.typed-array.last-index-of */ "./node_modules/core-js/modules/es.typed-array.last-index-of.js");

__webpack_require__(/*! core-js/modules/es.typed-array.map */ "./node_modules/core-js/modules/es.typed-array.map.js");

__webpack_require__(/*! core-js/modules/es.typed-array.reduce */ "./node_modules/core-js/modules/es.typed-array.reduce.js");

__webpack_require__(/*! core-js/modules/es.typed-array.reduce-right */ "./node_modules/core-js/modules/es.typed-array.reduce-right.js");

__webpack_require__(/*! core-js/modules/es.typed-array.reverse */ "./node_modules/core-js/modules/es.typed-array.reverse.js");

__webpack_require__(/*! core-js/modules/es.typed-array.set */ "./node_modules/core-js/modules/es.typed-array.set.js");

__webpack_require__(/*! core-js/modules/es.typed-array.slice */ "./node_modules/core-js/modules/es.typed-array.slice.js");

__webpack_require__(/*! core-js/modules/es.typed-array.some */ "./node_modules/core-js/modules/es.typed-array.some.js");

__webpack_require__(/*! core-js/modules/es.typed-array.sort */ "./node_modules/core-js/modules/es.typed-array.sort.js");

__webpack_require__(/*! core-js/modules/es.typed-array.subarray */ "./node_modules/core-js/modules/es.typed-array.subarray.js");

__webpack_require__(/*! core-js/modules/es.typed-array.to-locale-string */ "./node_modules/core-js/modules/es.typed-array.to-locale-string.js");

__webpack_require__(/*! core-js/modules/es.typed-array.to-string */ "./node_modules/core-js/modules/es.typed-array.to-string.js");

__webpack_require__(/*! core-js/modules/web.dom-collections.iterator */ "./node_modules/core-js/modules/web.dom-collections.iterator.js");

__webpack_require__(/*! core-js/modules/web.timers */ "./node_modules/core-js/modules/web.timers.js");

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

/*
 Leaflet 1.0.3, a JS library for interactive maps. http://leafletjs.com
 (c) 2010-2016 Vladimir Agafonkin, (c) 2010-2011 CloudMade
*/
!function (t, e, i) {
  function n() {
    var e = t.L;
    o.noConflict = function () {
      return t.L = e, this;
    }, t.L = o;
  }

  var o = {
    version: "1.0.3"
  };
  "object" == ( false ? undefined : _typeof(module)) && "object" == _typeof(module.exports) ? module.exports = o :  true && !(__WEBPACK_AMD_DEFINE_FACTORY__ = (o),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.call(exports, __webpack_require__, exports, module)) :
				__WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)), "undefined" != typeof t && n(), o.Util = {
    extend: function extend(t) {
      var e, i, n, o;

      for (i = 1, n = arguments.length; i < n; i++) {
        o = arguments[i];

        for (e in o) {
          t[e] = o[e];
        }
      }

      return t;
    },
    create: Object.create || function () {
      function t() {}

      return function (e) {
        return t.prototype = e, new t();
      };
    }(),
    bind: function bind(t, e) {
      var i = Array.prototype.slice;
      if (t.bind) return t.bind.apply(t, i.call(arguments, 1));
      var n = i.call(arguments, 2);
      return function () {
        return t.apply(e, n.length ? n.concat(i.call(arguments)) : arguments);
      };
    },
    stamp: function stamp(t) {
      return t._leaflet_id = t._leaflet_id || ++o.Util.lastId, t._leaflet_id;
    },
    lastId: 0,
    throttle: function throttle(t, e, i) {
      var n, o, s, r;
      return r = function r() {
        n = !1, o && (s.apply(i, o), o = !1);
      }, s = function s() {
        n ? o = arguments : (t.apply(i, arguments), setTimeout(r, e), n = !0);
      };
    },
    wrapNum: function wrapNum(t, e, i) {
      var n = e[1],
          o = e[0],
          s = n - o;
      return t === n && i ? t : ((t - o) % s + s) % s + o;
    },
    falseFn: function falseFn() {
      return !1;
    },
    formatNum: function formatNum(t, e) {
      var i = Math.pow(10, e || 5);
      return Math.round(t * i) / i;
    },
    trim: function trim(t) {
      return t.trim ? t.trim() : t.replace(/^\s+|\s+$/g, "");
    },
    splitWords: function splitWords(t) {
      return o.Util.trim(t).split(/\s+/);
    },
    setOptions: function setOptions(t, e) {
      t.hasOwnProperty("options") || (t.options = t.options ? o.Util.create(t.options) : {});

      for (var i in e) {
        t.options[i] = e[i];
      }

      return t.options;
    },
    getParamString: function getParamString(t, e, i) {
      var n = [];

      for (var o in t) {
        n.push(encodeURIComponent(i ? o.toUpperCase() : o) + "=" + encodeURIComponent(t[o]));
      }

      return (e && e.indexOf("?") !== -1 ? "&" : "?") + n.join("&");
    },
    template: function template(t, e) {
      return t.replace(o.Util.templateRe, function (t, n) {
        var o = e[n];
        if (o === i) throw new Error("No value provided for variable " + t);
        return "function" == typeof o && (o = o(e)), o;
      });
    },
    templateRe: /\{ *([\w_\-]+) *\}/g,
    isArray: Array.isArray || function (t) {
      return "[object Array]" === Object.prototype.toString.call(t);
    },
    indexOf: function indexOf(t, e) {
      for (var i = 0; i < t.length; i++) {
        if (t[i] === e) return i;
      }

      return -1;
    },
    emptyImageUrl: "data:image/gif;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs="
  }, function () {
    function e(e) {
      return t["webkit" + e] || t["moz" + e] || t["ms" + e];
    }

    function i(e) {
      var i = +new Date(),
          o = Math.max(0, 16 - (i - n));
      return n = i + o, t.setTimeout(e, o);
    }

    var n = 0,
        s = t.requestAnimationFrame || e("RequestAnimationFrame") || i,
        r = t.cancelAnimationFrame || e("CancelAnimationFrame") || e("CancelRequestAnimationFrame") || function (e) {
      t.clearTimeout(e);
    };

    o.Util.requestAnimFrame = function (e, n, r) {
      return r && s === i ? void e.call(n) : s.call(t, o.bind(e, n));
    }, o.Util.cancelAnimFrame = function (e) {
      e && r.call(t, e);
    };
  }(), o.extend = o.Util.extend, o.bind = o.Util.bind, o.stamp = o.Util.stamp, o.setOptions = o.Util.setOptions, o.Class = function () {}, o.Class.extend = function (t) {
    var e = function e() {
      this.initialize && this.initialize.apply(this, arguments), this.callInitHooks();
    },
        i = e.__super__ = this.prototype,
        n = o.Util.create(i);

    n.constructor = e, e.prototype = n;

    for (var s in this) {
      this.hasOwnProperty(s) && "prototype" !== s && (e[s] = this[s]);
    }

    return t.statics && (o.extend(e, t.statics), delete t.statics), t.includes && (o.Util.extend.apply(null, [n].concat(t.includes)), delete t.includes), n.options && (t.options = o.Util.extend(o.Util.create(n.options), t.options)), o.extend(n, t), n._initHooks = [], n.callInitHooks = function () {
      if (!this._initHooksCalled) {
        i.callInitHooks && i.callInitHooks.call(this), this._initHooksCalled = !0;

        for (var t = 0, e = n._initHooks.length; t < e; t++) {
          n._initHooks[t].call(this);
        }
      }
    }, e;
  }, o.Class.include = function (t) {
    return o.extend(this.prototype, t), this;
  }, o.Class.mergeOptions = function (t) {
    return o.extend(this.prototype.options, t), this;
  }, o.Class.addInitHook = function (t) {
    var e = Array.prototype.slice.call(arguments, 1),
        i = "function" == typeof t ? t : function () {
      this[t].apply(this, e);
    };
    return this.prototype._initHooks = this.prototype._initHooks || [], this.prototype._initHooks.push(i), this;
  }, o.Evented = o.Class.extend({
    on: function on(t, e, i) {
      if ("object" == _typeof(t)) for (var n in t) {
        this._on(n, t[n], e);
      } else {
        t = o.Util.splitWords(t);

        for (var s = 0, r = t.length; s < r; s++) {
          this._on(t[s], e, i);
        }
      }
      return this;
    },
    off: function off(t, e, i) {
      if (t) {
        if ("object" == _typeof(t)) for (var n in t) {
          this._off(n, t[n], e);
        } else {
          t = o.Util.splitWords(t);

          for (var s = 0, r = t.length; s < r; s++) {
            this._off(t[s], e, i);
          }
        }
      } else delete this._events;
      return this;
    },
    _on: function _on(t, e, n) {
      this._events = this._events || {};
      var o = this._events[t];
      o || (o = [], this._events[t] = o), n === this && (n = i);

      for (var s = {
        fn: e,
        ctx: n
      }, r = o, a = 0, h = r.length; a < h; a++) {
        if (r[a].fn === e && r[a].ctx === n) return;
      }

      r.push(s);
    },
    _off: function _off(t, e, n) {
      var s, r, a;

      if (this._events && (s = this._events[t])) {
        if (!e) {
          for (r = 0, a = s.length; r < a; r++) {
            s[r].fn = o.Util.falseFn;
          }

          return void delete this._events[t];
        }

        if (n === this && (n = i), s) for (r = 0, a = s.length; r < a; r++) {
          var h = s[r];
          if (h.ctx === n && h.fn === e) return h.fn = o.Util.falseFn, this._firingCount && (this._events[t] = s = s.slice()), void s.splice(r, 1);
        }
      }
    },
    fire: function fire(t, e, i) {
      if (!this.listens(t, i)) return this;
      var n = o.Util.extend({}, e, {
        type: t,
        target: this
      });

      if (this._events) {
        var s = this._events[t];

        if (s) {
          this._firingCount = this._firingCount + 1 || 1;

          for (var r = 0, a = s.length; r < a; r++) {
            var h = s[r];
            h.fn.call(h.ctx || this, n);
          }

          this._firingCount--;
        }
      }

      return i && this._propagateEvent(n), this;
    },
    listens: function listens(t, e) {
      var i = this._events && this._events[t];
      if (i && i.length) return !0;
      if (e) for (var n in this._eventParents) {
        if (this._eventParents[n].listens(t, e)) return !0;
      }
      return !1;
    },
    once: function once(t, e, i) {
      if ("object" == _typeof(t)) {
        for (var n in t) {
          this.once(n, t[n], e);
        }

        return this;
      }

      var s = o.bind(function () {
        this.off(t, e, i).off(t, s, i);
      }, this);
      return this.on(t, e, i).on(t, s, i);
    },
    addEventParent: function addEventParent(t) {
      return this._eventParents = this._eventParents || {}, this._eventParents[o.stamp(t)] = t, this;
    },
    removeEventParent: function removeEventParent(t) {
      return this._eventParents && delete this._eventParents[o.stamp(t)], this;
    },
    _propagateEvent: function _propagateEvent(t) {
      for (var e in this._eventParents) {
        this._eventParents[e].fire(t.type, o.extend({
          layer: t.target
        }, t), !0);
      }
    }
  });
  var s = o.Evented.prototype;
  s.addEventListener = s.on, s.removeEventListener = s.clearAllEventListeners = s.off, s.addOneTimeEventListener = s.once, s.fireEvent = s.fire, s.hasEventListeners = s.listens, o.Mixin = {
    Events: s
  }, function () {
    var i = navigator.userAgent.toLowerCase(),
        n = e.documentElement,
        s = ("ActiveXObject" in t),
        r = i.indexOf("webkit") !== -1,
        a = i.indexOf("phantom") !== -1,
        h = i.search("android [23]") !== -1,
        l = i.indexOf("chrome") !== -1,
        u = i.indexOf("gecko") !== -1 && !r && !t.opera && !s,
        c = 0 === navigator.platform.indexOf("Win"),
        d = "undefined" != typeof orientation || i.indexOf("mobile") !== -1,
        _ = !t.PointerEvent && t.MSPointerEvent,
        m = t.PointerEvent || _,
        p = s && "transition" in n.style,
        f = "WebKitCSSMatrix" in t && "m11" in new t.WebKitCSSMatrix() && !h,
        g = ("MozPerspective" in n.style),
        v = ("OTransition" in n.style),
        y = !t.L_NO_TOUCH && (m || "ontouchstart" in t || t.DocumentTouch && e instanceof t.DocumentTouch);

    o.Browser = {
      ie: s,
      ielt9: s && !e.addEventListener,
      edge: "msLaunchUri" in navigator && !("documentMode" in e),
      webkit: r,
      gecko: u,
      android: i.indexOf("android") !== -1,
      android23: h,
      chrome: l,
      safari: !l && i.indexOf("safari") !== -1,
      win: c,
      ie3d: p,
      webkit3d: f,
      gecko3d: g,
      opera12: v,
      any3d: !t.L_DISABLE_3D && (p || f || g) && !v && !a,
      mobile: d,
      mobileWebkit: d && r,
      mobileWebkit3d: d && f,
      mobileOpera: d && t.opera,
      mobileGecko: d && u,
      touch: !!y,
      msPointer: !!_,
      pointer: !!m,
      retina: (t.devicePixelRatio || t.screen.deviceXDPI / t.screen.logicalXDPI) > 1
    };
  }(), o.Point = function (t, e, i) {
    this.x = i ? Math.round(t) : t, this.y = i ? Math.round(e) : e;
  }, o.Point.prototype = {
    clone: function clone() {
      return new o.Point(this.x, this.y);
    },
    add: function add(t) {
      return this.clone()._add(o.point(t));
    },
    _add: function _add(t) {
      return this.x += t.x, this.y += t.y, this;
    },
    subtract: function subtract(t) {
      return this.clone()._subtract(o.point(t));
    },
    _subtract: function _subtract(t) {
      return this.x -= t.x, this.y -= t.y, this;
    },
    divideBy: function divideBy(t) {
      return this.clone()._divideBy(t);
    },
    _divideBy: function _divideBy(t) {
      return this.x /= t, this.y /= t, this;
    },
    multiplyBy: function multiplyBy(t) {
      return this.clone()._multiplyBy(t);
    },
    _multiplyBy: function _multiplyBy(t) {
      return this.x *= t, this.y *= t, this;
    },
    scaleBy: function scaleBy(t) {
      return new o.Point(this.x * t.x, this.y * t.y);
    },
    unscaleBy: function unscaleBy(t) {
      return new o.Point(this.x / t.x, this.y / t.y);
    },
    round: function round() {
      return this.clone()._round();
    },
    _round: function _round() {
      return this.x = Math.round(this.x), this.y = Math.round(this.y), this;
    },
    floor: function floor() {
      return this.clone()._floor();
    },
    _floor: function _floor() {
      return this.x = Math.floor(this.x), this.y = Math.floor(this.y), this;
    },
    ceil: function ceil() {
      return this.clone()._ceil();
    },
    _ceil: function _ceil() {
      return this.x = Math.ceil(this.x), this.y = Math.ceil(this.y), this;
    },
    distanceTo: function distanceTo(t) {
      t = o.point(t);
      var e = t.x - this.x,
          i = t.y - this.y;
      return Math.sqrt(e * e + i * i);
    },
    equals: function equals(t) {
      return t = o.point(t), t.x === this.x && t.y === this.y;
    },
    contains: function contains(t) {
      return t = o.point(t), Math.abs(t.x) <= Math.abs(this.x) && Math.abs(t.y) <= Math.abs(this.y);
    },
    toString: function toString() {
      return "Point(" + o.Util.formatNum(this.x) + ", " + o.Util.formatNum(this.y) + ")";
    }
  }, o.point = function (t, e, n) {
    return t instanceof o.Point ? t : o.Util.isArray(t) ? new o.Point(t[0], t[1]) : t === i || null === t ? t : "object" == _typeof(t) && "x" in t && "y" in t ? new o.Point(t.x, t.y) : new o.Point(t, e, n);
  }, o.Bounds = function (t, e) {
    if (t) for (var i = e ? [t, e] : t, n = 0, o = i.length; n < o; n++) {
      this.extend(i[n]);
    }
  }, o.Bounds.prototype = {
    extend: function extend(t) {
      return t = o.point(t), this.min || this.max ? (this.min.x = Math.min(t.x, this.min.x), this.max.x = Math.max(t.x, this.max.x), this.min.y = Math.min(t.y, this.min.y), this.max.y = Math.max(t.y, this.max.y)) : (this.min = t.clone(), this.max = t.clone()), this;
    },
    getCenter: function getCenter(t) {
      return new o.Point((this.min.x + this.max.x) / 2, (this.min.y + this.max.y) / 2, t);
    },
    getBottomLeft: function getBottomLeft() {
      return new o.Point(this.min.x, this.max.y);
    },
    getTopRight: function getTopRight() {
      return new o.Point(this.max.x, this.min.y);
    },
    getSize: function getSize() {
      return this.max.subtract(this.min);
    },
    contains: function contains(t) {
      var e, i;
      return t = "number" == typeof t[0] || t instanceof o.Point ? o.point(t) : o.bounds(t), t instanceof o.Bounds ? (e = t.min, i = t.max) : e = i = t, e.x >= this.min.x && i.x <= this.max.x && e.y >= this.min.y && i.y <= this.max.y;
    },
    intersects: function intersects(t) {
      t = o.bounds(t);
      var e = this.min,
          i = this.max,
          n = t.min,
          s = t.max,
          r = s.x >= e.x && n.x <= i.x,
          a = s.y >= e.y && n.y <= i.y;
      return r && a;
    },
    overlaps: function overlaps(t) {
      t = o.bounds(t);
      var e = this.min,
          i = this.max,
          n = t.min,
          s = t.max,
          r = s.x > e.x && n.x < i.x,
          a = s.y > e.y && n.y < i.y;
      return r && a;
    },
    isValid: function isValid() {
      return !(!this.min || !this.max);
    }
  }, o.bounds = function (t, e) {
    return !t || t instanceof o.Bounds ? t : new o.Bounds(t, e);
  }, o.Transformation = function (t, e, i, n) {
    this._a = t, this._b = e, this._c = i, this._d = n;
  }, o.Transformation.prototype = {
    transform: function transform(t, e) {
      return this._transform(t.clone(), e);
    },
    _transform: function _transform(t, e) {
      return e = e || 1, t.x = e * (this._a * t.x + this._b), t.y = e * (this._c * t.y + this._d), t;
    },
    untransform: function untransform(t, e) {
      return e = e || 1, new o.Point((t.x / e - this._b) / this._a, (t.y / e - this._d) / this._c);
    }
  }, o.DomUtil = {
    get: function get(t) {
      return "string" == typeof t ? e.getElementById(t) : t;
    },
    getStyle: function getStyle(t, i) {
      var n = t.style[i] || t.currentStyle && t.currentStyle[i];

      if ((!n || "auto" === n) && e.defaultView) {
        var o = e.defaultView.getComputedStyle(t, null);
        n = o ? o[i] : null;
      }

      return "auto" === n ? null : n;
    },
    create: function create(t, i, n) {
      var o = e.createElement(t);
      return o.className = i || "", n && n.appendChild(o), o;
    },
    remove: function remove(t) {
      var e = t.parentNode;
      e && e.removeChild(t);
    },
    empty: function empty(t) {
      for (; t.firstChild;) {
        t.removeChild(t.firstChild);
      }
    },
    toFront: function toFront(t) {
      t.parentNode.appendChild(t);
    },
    toBack: function toBack(t) {
      var e = t.parentNode;
      e.insertBefore(t, e.firstChild);
    },
    hasClass: function hasClass(t, e) {
      if (t.classList !== i) return t.classList.contains(e);
      var n = o.DomUtil.getClass(t);
      return n.length > 0 && new RegExp("(^|\\s)" + e + "(\\s|$)").test(n);
    },
    addClass: function addClass(t, e) {
      if (t.classList !== i) for (var n = o.Util.splitWords(e), s = 0, r = n.length; s < r; s++) {
        t.classList.add(n[s]);
      } else if (!o.DomUtil.hasClass(t, e)) {
        var a = o.DomUtil.getClass(t);
        o.DomUtil.setClass(t, (a ? a + " " : "") + e);
      }
    },
    removeClass: function removeClass(t, e) {
      t.classList !== i ? t.classList.remove(e) : o.DomUtil.setClass(t, o.Util.trim((" " + o.DomUtil.getClass(t) + " ").replace(" " + e + " ", " ")));
    },
    setClass: function setClass(t, e) {
      t.className.baseVal === i ? t.className = e : t.className.baseVal = e;
    },
    getClass: function getClass(t) {
      return t.className.baseVal === i ? t.className : t.className.baseVal;
    },
    setOpacity: function setOpacity(t, e) {
      "opacity" in t.style ? t.style.opacity = e : "filter" in t.style && o.DomUtil._setOpacityIE(t, e);
    },
    _setOpacityIE: function _setOpacityIE(t, e) {
      var i = !1,
          n = "DXImageTransform.Microsoft.Alpha";

      try {
        i = t.filters.item(n);
      } catch (t) {
        if (1 === e) return;
      }

      e = Math.round(100 * e), i ? (i.Enabled = 100 !== e, i.Opacity = e) : t.style.filter += " progid:" + n + "(opacity=" + e + ")";
    },
    testProp: function testProp(t) {
      for (var i = e.documentElement.style, n = 0; n < t.length; n++) {
        if (t[n] in i) return t[n];
      }

      return !1;
    },
    setTransform: function setTransform(t, e, i) {
      var n = e || new o.Point(0, 0);
      t.style[o.DomUtil.TRANSFORM] = (o.Browser.ie3d ? "translate(" + n.x + "px," + n.y + "px)" : "translate3d(" + n.x + "px," + n.y + "px,0)") + (i ? " scale(" + i + ")" : "");
    },
    setPosition: function setPosition(t, e) {
      t._leaflet_pos = e, o.Browser.any3d ? o.DomUtil.setTransform(t, e) : (t.style.left = e.x + "px", t.style.top = e.y + "px");
    },
    getPosition: function getPosition(t) {
      return t._leaflet_pos || new o.Point(0, 0);
    }
  }, function () {
    o.DomUtil.TRANSFORM = o.DomUtil.testProp(["transform", "WebkitTransform", "OTransform", "MozTransform", "msTransform"]);
    var i = o.DomUtil.TRANSITION = o.DomUtil.testProp(["webkitTransition", "transition", "OTransition", "MozTransition", "msTransition"]);
    if (o.DomUtil.TRANSITION_END = "webkitTransition" === i || "OTransition" === i ? i + "End" : "transitionend", "onselectstart" in e) o.DomUtil.disableTextSelection = function () {
      o.DomEvent.on(t, "selectstart", o.DomEvent.preventDefault);
    }, o.DomUtil.enableTextSelection = function () {
      o.DomEvent.off(t, "selectstart", o.DomEvent.preventDefault);
    };else {
      var n = o.DomUtil.testProp(["userSelect", "WebkitUserSelect", "OUserSelect", "MozUserSelect", "msUserSelect"]);
      o.DomUtil.disableTextSelection = function () {
        if (n) {
          var t = e.documentElement.style;
          this._userSelect = t[n], t[n] = "none";
        }
      }, o.DomUtil.enableTextSelection = function () {
        n && (e.documentElement.style[n] = this._userSelect, delete this._userSelect);
      };
    }
    o.DomUtil.disableImageDrag = function () {
      o.DomEvent.on(t, "dragstart", o.DomEvent.preventDefault);
    }, o.DomUtil.enableImageDrag = function () {
      o.DomEvent.off(t, "dragstart", o.DomEvent.preventDefault);
    }, o.DomUtil.preventOutline = function (e) {
      for (; e.tabIndex === -1;) {
        e = e.parentNode;
      }

      e && e.style && (o.DomUtil.restoreOutline(), this._outlineElement = e, this._outlineStyle = e.style.outline, e.style.outline = "none", o.DomEvent.on(t, "keydown", o.DomUtil.restoreOutline, this));
    }, o.DomUtil.restoreOutline = function () {
      this._outlineElement && (this._outlineElement.style.outline = this._outlineStyle, delete this._outlineElement, delete this._outlineStyle, o.DomEvent.off(t, "keydown", o.DomUtil.restoreOutline, this));
    };
  }(), o.LatLng = function (t, e, n) {
    if (isNaN(t) || isNaN(e)) throw new Error("Invalid LatLng object: (" + t + ", " + e + ")");
    this.lat = +t, this.lng = +e, n !== i && (this.alt = +n);
  }, o.LatLng.prototype = {
    equals: function equals(t, e) {
      if (!t) return !1;
      t = o.latLng(t);
      var n = Math.max(Math.abs(this.lat - t.lat), Math.abs(this.lng - t.lng));
      return n <= (e === i ? 1e-9 : e);
    },
    toString: function toString(t) {
      return "LatLng(" + o.Util.formatNum(this.lat, t) + ", " + o.Util.formatNum(this.lng, t) + ")";
    },
    distanceTo: function distanceTo(t) {
      return o.CRS.Earth.distance(this, o.latLng(t));
    },
    wrap: function wrap() {
      return o.CRS.Earth.wrapLatLng(this);
    },
    toBounds: function toBounds(t) {
      var e = 180 * t / 40075017,
          i = e / Math.cos(Math.PI / 180 * this.lat);
      return o.latLngBounds([this.lat - e, this.lng - i], [this.lat + e, this.lng + i]);
    },
    clone: function clone() {
      return new o.LatLng(this.lat, this.lng, this.alt);
    }
  }, o.latLng = function (t, e, n) {
    return t instanceof o.LatLng ? t : o.Util.isArray(t) && "object" != _typeof(t[0]) ? 3 === t.length ? new o.LatLng(t[0], t[1], t[2]) : 2 === t.length ? new o.LatLng(t[0], t[1]) : null : t === i || null === t ? t : "object" == _typeof(t) && "lat" in t ? new o.LatLng(t.lat, "lng" in t ? t.lng : t.lon, t.alt) : e === i ? null : new o.LatLng(t, e, n);
  }, o.LatLngBounds = function (t, e) {
    if (t) for (var i = e ? [t, e] : t, n = 0, o = i.length; n < o; n++) {
      this.extend(i[n]);
    }
  }, o.LatLngBounds.prototype = {
    extend: function extend(t) {
      var e,
          i,
          n = this._southWest,
          s = this._northEast;
      if (t instanceof o.LatLng) e = t, i = t;else {
        if (!(t instanceof o.LatLngBounds)) return t ? this.extend(o.latLng(t) || o.latLngBounds(t)) : this;
        if (e = t._southWest, i = t._northEast, !e || !i) return this;
      }
      return n || s ? (n.lat = Math.min(e.lat, n.lat), n.lng = Math.min(e.lng, n.lng), s.lat = Math.max(i.lat, s.lat), s.lng = Math.max(i.lng, s.lng)) : (this._southWest = new o.LatLng(e.lat, e.lng), this._northEast = new o.LatLng(i.lat, i.lng)), this;
    },
    pad: function pad(t) {
      var e = this._southWest,
          i = this._northEast,
          n = Math.abs(e.lat - i.lat) * t,
          s = Math.abs(e.lng - i.lng) * t;
      return new o.LatLngBounds(new o.LatLng(e.lat - n, e.lng - s), new o.LatLng(i.lat + n, i.lng + s));
    },
    getCenter: function getCenter() {
      return new o.LatLng((this._southWest.lat + this._northEast.lat) / 2, (this._southWest.lng + this._northEast.lng) / 2);
    },
    getSouthWest: function getSouthWest() {
      return this._southWest;
    },
    getNorthEast: function getNorthEast() {
      return this._northEast;
    },
    getNorthWest: function getNorthWest() {
      return new o.LatLng(this.getNorth(), this.getWest());
    },
    getSouthEast: function getSouthEast() {
      return new o.LatLng(this.getSouth(), this.getEast());
    },
    getWest: function getWest() {
      return this._southWest.lng;
    },
    getSouth: function getSouth() {
      return this._southWest.lat;
    },
    getEast: function getEast() {
      return this._northEast.lng;
    },
    getNorth: function getNorth() {
      return this._northEast.lat;
    },
    contains: function contains(t) {
      t = "number" == typeof t[0] || t instanceof o.LatLng || "lat" in t ? o.latLng(t) : o.latLngBounds(t);
      var e,
          i,
          n = this._southWest,
          s = this._northEast;
      return t instanceof o.LatLngBounds ? (e = t.getSouthWest(), i = t.getNorthEast()) : e = i = t, e.lat >= n.lat && i.lat <= s.lat && e.lng >= n.lng && i.lng <= s.lng;
    },
    intersects: function intersects(t) {
      t = o.latLngBounds(t);
      var e = this._southWest,
          i = this._northEast,
          n = t.getSouthWest(),
          s = t.getNorthEast(),
          r = s.lat >= e.lat && n.lat <= i.lat,
          a = s.lng >= e.lng && n.lng <= i.lng;
      return r && a;
    },
    overlaps: function overlaps(t) {
      t = o.latLngBounds(t);
      var e = this._southWest,
          i = this._northEast,
          n = t.getSouthWest(),
          s = t.getNorthEast(),
          r = s.lat > e.lat && n.lat < i.lat,
          a = s.lng > e.lng && n.lng < i.lng;
      return r && a;
    },
    toBBoxString: function toBBoxString() {
      return [this.getWest(), this.getSouth(), this.getEast(), this.getNorth()].join(",");
    },
    equals: function equals(t) {
      return !!t && (t = o.latLngBounds(t), this._southWest.equals(t.getSouthWest()) && this._northEast.equals(t.getNorthEast()));
    },
    isValid: function isValid() {
      return !(!this._southWest || !this._northEast);
    }
  }, o.latLngBounds = function (t, e) {
    return t instanceof o.LatLngBounds ? t : new o.LatLngBounds(t, e);
  }, o.Projection = {}, o.Projection.LonLat = {
    project: function project(t) {
      return new o.Point(t.lng, t.lat);
    },
    unproject: function unproject(t) {
      return new o.LatLng(t.y, t.x);
    },
    bounds: o.bounds([-180, -90], [180, 90])
  }, o.Projection.SphericalMercator = {
    R: 6378137,
    MAX_LATITUDE: 85.0511287798,
    project: function project(t) {
      var e = Math.PI / 180,
          i = this.MAX_LATITUDE,
          n = Math.max(Math.min(i, t.lat), -i),
          s = Math.sin(n * e);
      return new o.Point(this.R * t.lng * e, this.R * Math.log((1 + s) / (1 - s)) / 2);
    },
    unproject: function unproject(t) {
      var e = 180 / Math.PI;
      return new o.LatLng((2 * Math.atan(Math.exp(t.y / this.R)) - Math.PI / 2) * e, t.x * e / this.R);
    },
    bounds: function () {
      var t = 6378137 * Math.PI;
      return o.bounds([-t, -t], [t, t]);
    }()
  }, o.CRS = {
    latLngToPoint: function latLngToPoint(t, e) {
      var i = this.projection.project(t),
          n = this.scale(e);
      return this.transformation._transform(i, n);
    },
    pointToLatLng: function pointToLatLng(t, e) {
      var i = this.scale(e),
          n = this.transformation.untransform(t, i);
      return this.projection.unproject(n);
    },
    project: function project(t) {
      return this.projection.project(t);
    },
    unproject: function unproject(t) {
      return this.projection.unproject(t);
    },
    scale: function scale(t) {
      return 256 * Math.pow(2, t);
    },
    zoom: function zoom(t) {
      return Math.log(t / 256) / Math.LN2;
    },
    getProjectedBounds: function getProjectedBounds(t) {
      if (this.infinite) return null;
      var e = this.projection.bounds,
          i = this.scale(t),
          n = this.transformation.transform(e.min, i),
          s = this.transformation.transform(e.max, i);
      return o.bounds(n, s);
    },
    infinite: !1,
    wrapLatLng: function wrapLatLng(t) {
      var e = this.wrapLng ? o.Util.wrapNum(t.lng, this.wrapLng, !0) : t.lng,
          i = this.wrapLat ? o.Util.wrapNum(t.lat, this.wrapLat, !0) : t.lat,
          n = t.alt;
      return o.latLng(i, e, n);
    },
    wrapLatLngBounds: function wrapLatLngBounds(t) {
      var e = t.getCenter(),
          i = this.wrapLatLng(e),
          n = e.lat - i.lat,
          s = e.lng - i.lng;
      if (0 === n && 0 === s) return t;
      var r = t.getSouthWest(),
          a = t.getNorthEast(),
          h = o.latLng({
        lat: r.lat - n,
        lng: r.lng - s
      }),
          l = o.latLng({
        lat: a.lat - n,
        lng: a.lng - s
      });
      return new o.LatLngBounds(h, l);
    }
  }, o.CRS.Simple = o.extend({}, o.CRS, {
    projection: o.Projection.LonLat,
    transformation: new o.Transformation(1, 0, -1, 0),
    scale: function scale(t) {
      return Math.pow(2, t);
    },
    zoom: function zoom(t) {
      return Math.log(t) / Math.LN2;
    },
    distance: function distance(t, e) {
      var i = e.lng - t.lng,
          n = e.lat - t.lat;
      return Math.sqrt(i * i + n * n);
    },
    infinite: !0
  }), o.CRS.Earth = o.extend({}, o.CRS, {
    wrapLng: [-180, 180],
    R: 6371e3,
    distance: function distance(t, e) {
      var i = Math.PI / 180,
          n = t.lat * i,
          o = e.lat * i,
          s = Math.sin(n) * Math.sin(o) + Math.cos(n) * Math.cos(o) * Math.cos((e.lng - t.lng) * i);
      return this.R * Math.acos(Math.min(s, 1));
    }
  }), o.CRS.EPSG3857 = o.extend({}, o.CRS.Earth, {
    code: "EPSG:3857",
    projection: o.Projection.SphericalMercator,
    transformation: function () {
      var t = .5 / (Math.PI * o.Projection.SphericalMercator.R);
      return new o.Transformation(t, .5, -t, .5);
    }()
  }), o.CRS.EPSG900913 = o.extend({}, o.CRS.EPSG3857, {
    code: "EPSG:900913"
  }), o.CRS.EPSG4326 = o.extend({}, o.CRS.Earth, {
    code: "EPSG:4326",
    projection: o.Projection.LonLat,
    transformation: new o.Transformation(1 / 180, 1, -1 / 180, .5)
  }), o.Map = o.Evented.extend({
    options: {
      crs: o.CRS.EPSG3857,
      center: i,
      zoom: i,
      minZoom: i,
      maxZoom: i,
      layers: [],
      maxBounds: i,
      renderer: i,
      zoomAnimation: !0,
      zoomAnimationThreshold: 4,
      fadeAnimation: !0,
      markerZoomAnimation: !0,
      transform3DLimit: 8388608,
      zoomSnap: 1,
      zoomDelta: 1,
      trackResize: !0
    },
    initialize: function initialize(t, e) {
      e = o.setOptions(this, e), this._initContainer(t), this._initLayout(), this._onResize = o.bind(this._onResize, this), this._initEvents(), e.maxBounds && this.setMaxBounds(e.maxBounds), e.zoom !== i && (this._zoom = this._limitZoom(e.zoom)), e.center && e.zoom !== i && this.setView(o.latLng(e.center), e.zoom, {
        reset: !0
      }), this._handlers = [], this._layers = {}, this._zoomBoundLayers = {}, this._sizeChanged = !0, this.callInitHooks(), this._zoomAnimated = o.DomUtil.TRANSITION && o.Browser.any3d && !o.Browser.mobileOpera && this.options.zoomAnimation, this._zoomAnimated && (this._createAnimProxy(), o.DomEvent.on(this._proxy, o.DomUtil.TRANSITION_END, this._catchTransitionEnd, this)), this._addLayers(this.options.layers);
    },
    setView: function setView(t, e, n) {
      if (e = e === i ? this._zoom : this._limitZoom(e), t = this._limitCenter(o.latLng(t), e, this.options.maxBounds), n = n || {}, this._stop(), this._loaded && !n.reset && n !== !0) {
        n.animate !== i && (n.zoom = o.extend({
          animate: n.animate
        }, n.zoom), n.pan = o.extend({
          animate: n.animate,
          duration: n.duration
        }, n.pan));
        var s = this._zoom !== e ? this._tryAnimatedZoom && this._tryAnimatedZoom(t, e, n.zoom) : this._tryAnimatedPan(t, n.pan);
        if (s) return clearTimeout(this._sizeTimer), this;
      }

      return this._resetView(t, e), this;
    },
    setZoom: function setZoom(t, e) {
      return this._loaded ? this.setView(this.getCenter(), t, {
        zoom: e
      }) : (this._zoom = t, this);
    },
    zoomIn: function zoomIn(t, e) {
      return t = t || (o.Browser.any3d ? this.options.zoomDelta : 1), this.setZoom(this._zoom + t, e);
    },
    zoomOut: function zoomOut(t, e) {
      return t = t || (o.Browser.any3d ? this.options.zoomDelta : 1), this.setZoom(this._zoom - t, e);
    },
    setZoomAround: function setZoomAround(t, e, i) {
      var n = this.getZoomScale(e),
          s = this.getSize().divideBy(2),
          r = t instanceof o.Point ? t : this.latLngToContainerPoint(t),
          a = r.subtract(s).multiplyBy(1 - 1 / n),
          h = this.containerPointToLatLng(s.add(a));
      return this.setView(h, e, {
        zoom: i
      });
    },
    _getBoundsCenterZoom: function _getBoundsCenterZoom(t, e) {
      e = e || {}, t = t.getBounds ? t.getBounds() : o.latLngBounds(t);
      var i = o.point(e.paddingTopLeft || e.padding || [0, 0]),
          n = o.point(e.paddingBottomRight || e.padding || [0, 0]),
          s = this.getBoundsZoom(t, !1, i.add(n));
      s = "number" == typeof e.maxZoom ? Math.min(e.maxZoom, s) : s;
      var r = n.subtract(i).divideBy(2),
          a = this.project(t.getSouthWest(), s),
          h = this.project(t.getNorthEast(), s),
          l = this.unproject(a.add(h).divideBy(2).add(r), s);
      return {
        center: l,
        zoom: s
      };
    },
    fitBounds: function fitBounds(t, e) {
      if (t = o.latLngBounds(t), !t.isValid()) throw new Error("Bounds are not valid.");

      var i = this._getBoundsCenterZoom(t, e);

      return this.setView(i.center, i.zoom, e);
    },
    fitWorld: function fitWorld(t) {
      return this.fitBounds([[-90, -180], [90, 180]], t);
    },
    panTo: function panTo(t, e) {
      return this.setView(t, this._zoom, {
        pan: e
      });
    },
    panBy: function panBy(t, e) {
      if (t = o.point(t).round(), e = e || {}, !t.x && !t.y) return this.fire("moveend");
      if (e.animate !== !0 && !this.getSize().contains(t)) return this._resetView(this.unproject(this.project(this.getCenter()).add(t)), this.getZoom()), this;

      if (this._panAnim || (this._panAnim = new o.PosAnimation(), this._panAnim.on({
        step: this._onPanTransitionStep,
        end: this._onPanTransitionEnd
      }, this)), e.noMoveStart || this.fire("movestart"), e.animate !== !1) {
        o.DomUtil.addClass(this._mapPane, "leaflet-pan-anim");

        var i = this._getMapPanePos().subtract(t).round();

        this._panAnim.run(this._mapPane, i, e.duration || .25, e.easeLinearity);
      } else this._rawPanBy(t), this.fire("move").fire("moveend");

      return this;
    },
    flyTo: function flyTo(t, e, n) {
      function s(t) {
        var e = t ? -1 : 1,
            i = t ? v : g,
            n = v * v - g * g + e * L * L * y * y,
            o = 2 * i * L * y,
            s = n / o,
            r = Math.sqrt(s * s + 1) - s,
            a = r < 1e-9 ? -18 : Math.log(r);
        return a;
      }

      function r(t) {
        return (Math.exp(t) - Math.exp(-t)) / 2;
      }

      function a(t) {
        return (Math.exp(t) + Math.exp(-t)) / 2;
      }

      function h(t) {
        return r(t) / a(t);
      }

      function l(t) {
        return g * (a(x) / a(x + P * t));
      }

      function u(t) {
        return g * (a(x) * h(x + P * t) - r(x)) / L;
      }

      function c(t) {
        return 1 - Math.pow(1 - t, 1.5);
      }

      function d() {
        var i = (Date.now() - w) / T,
            n = c(i) * b;
        i <= 1 ? (this._flyToFrame = o.Util.requestAnimFrame(d, this), this._move(this.unproject(_.add(m.subtract(_).multiplyBy(u(n) / y)), f), this.getScaleZoom(g / l(n), f), {
          flyTo: !0
        })) : this._move(t, e)._moveEnd(!0);
      }

      if (n = n || {}, n.animate === !1 || !o.Browser.any3d) return this.setView(t, e, n);

      this._stop();

      var _ = this.project(this.getCenter()),
          m = this.project(t),
          p = this.getSize(),
          f = this._zoom;

      t = o.latLng(t), e = e === i ? f : e;
      var g = Math.max(p.x, p.y),
          v = g * this.getZoomScale(f, e),
          y = m.distanceTo(_) || 1,
          P = 1.42,
          L = P * P,
          x = s(0),
          w = Date.now(),
          b = (s(1) - x) / P,
          T = n.duration ? 1e3 * n.duration : 1e3 * b * .8;
      return this._moveStart(!0), d.call(this), this;
    },
    flyToBounds: function flyToBounds(t, e) {
      var i = this._getBoundsCenterZoom(t, e);

      return this.flyTo(i.center, i.zoom, e);
    },
    setMaxBounds: function setMaxBounds(t) {
      return t = o.latLngBounds(t), t.isValid() ? (this.options.maxBounds && this.off("moveend", this._panInsideMaxBounds), this.options.maxBounds = t, this._loaded && this._panInsideMaxBounds(), this.on("moveend", this._panInsideMaxBounds)) : (this.options.maxBounds = null, this.off("moveend", this._panInsideMaxBounds));
    },
    setMinZoom: function setMinZoom(t) {
      return this.options.minZoom = t, this._loaded && this.getZoom() < this.options.minZoom ? this.setZoom(t) : this;
    },
    setMaxZoom: function setMaxZoom(t) {
      return this.options.maxZoom = t, this._loaded && this.getZoom() > this.options.maxZoom ? this.setZoom(t) : this;
    },
    panInsideBounds: function panInsideBounds(t, e) {
      this._enforcingBounds = !0;

      var i = this.getCenter(),
          n = this._limitCenter(i, this._zoom, o.latLngBounds(t));

      return i.equals(n) || this.panTo(n, e), this._enforcingBounds = !1, this;
    },
    invalidateSize: function invalidateSize(t) {
      if (!this._loaded) return this;
      t = o.extend({
        animate: !1,
        pan: !0
      }, t === !0 ? {
        animate: !0
      } : t);
      var e = this.getSize();
      this._sizeChanged = !0, this._lastCenter = null;
      var i = this.getSize(),
          n = e.divideBy(2).round(),
          s = i.divideBy(2).round(),
          r = n.subtract(s);
      return r.x || r.y ? (t.animate && t.pan ? this.panBy(r) : (t.pan && this._rawPanBy(r), this.fire("move"), t.debounceMoveend ? (clearTimeout(this._sizeTimer), this._sizeTimer = setTimeout(o.bind(this.fire, this, "moveend"), 200)) : this.fire("moveend")), this.fire("resize", {
        oldSize: e,
        newSize: i
      })) : this;
    },
    stop: function stop() {
      return this.setZoom(this._limitZoom(this._zoom)), this.options.zoomSnap || this.fire("viewreset"), this._stop();
    },
    locate: function locate(t) {
      if (t = this._locateOptions = o.extend({
        timeout: 1e4,
        watch: !1
      }, t), !("geolocation" in navigator)) return this._handleGeolocationError({
        code: 0,
        message: "Geolocation not supported."
      }), this;
      var e = o.bind(this._handleGeolocationResponse, this),
          i = o.bind(this._handleGeolocationError, this);
      return t.watch ? this._locationWatchId = navigator.geolocation.watchPosition(e, i, t) : navigator.geolocation.getCurrentPosition(e, i, t), this;
    },
    stopLocate: function stopLocate() {
      return navigator.geolocation && navigator.geolocation.clearWatch && navigator.geolocation.clearWatch(this._locationWatchId), this._locateOptions && (this._locateOptions.setView = !1), this;
    },
    _handleGeolocationError: function _handleGeolocationError(t) {
      var e = t.code,
          i = t.message || (1 === e ? "permission denied" : 2 === e ? "position unavailable" : "timeout");
      this._locateOptions.setView && !this._loaded && this.fitWorld(), this.fire("locationerror", {
        code: e,
        message: "Geolocation error: " + i + "."
      });
    },
    _handleGeolocationResponse: function _handleGeolocationResponse(t) {
      var e = t.coords.latitude,
          i = t.coords.longitude,
          n = new o.LatLng(e, i),
          s = n.toBounds(t.coords.accuracy),
          r = this._locateOptions;

      if (r.setView) {
        var a = this.getBoundsZoom(s);
        this.setView(n, r.maxZoom ? Math.min(a, r.maxZoom) : a);
      }

      var h = {
        latlng: n,
        bounds: s,
        timestamp: t.timestamp
      };

      for (var l in t.coords) {
        "number" == typeof t.coords[l] && (h[l] = t.coords[l]);
      }

      this.fire("locationfound", h);
    },
    addHandler: function addHandler(t, e) {
      if (!e) return this;
      var i = this[t] = new e(this);
      return this._handlers.push(i), this.options[t] && i.enable(), this;
    },
    remove: function remove() {
      if (this._initEvents(!0), this._containerId !== this._container._leaflet_id) throw new Error("Map container is being reused by another instance");

      try {
        delete this._container._leaflet_id, delete this._containerId;
      } catch (t) {
        this._container._leaflet_id = i, this._containerId = i;
      }

      o.DomUtil.remove(this._mapPane), this._clearControlPos && this._clearControlPos(), this._clearHandlers(), this._loaded && this.fire("unload");

      for (var t in this._layers) {
        this._layers[t].remove();
      }

      return this;
    },
    createPane: function createPane(t, e) {
      var i = "leaflet-pane" + (t ? " leaflet-" + t.replace("Pane", "") + "-pane" : ""),
          n = o.DomUtil.create("div", i, e || this._mapPane);
      return t && (this._panes[t] = n), n;
    },
    getCenter: function getCenter() {
      return this._checkIfLoaded(), this._lastCenter && !this._moved() ? this._lastCenter : this.layerPointToLatLng(this._getCenterLayerPoint());
    },
    getZoom: function getZoom() {
      return this._zoom;
    },
    getBounds: function getBounds() {
      var t = this.getPixelBounds(),
          e = this.unproject(t.getBottomLeft()),
          i = this.unproject(t.getTopRight());
      return new o.LatLngBounds(e, i);
    },
    getMinZoom: function getMinZoom() {
      return this.options.minZoom === i ? this._layersMinZoom || 0 : this.options.minZoom;
    },
    getMaxZoom: function getMaxZoom() {
      return this.options.maxZoom === i ? this._layersMaxZoom === i ? 1 / 0 : this._layersMaxZoom : this.options.maxZoom;
    },
    getBoundsZoom: function getBoundsZoom(t, e, i) {
      t = o.latLngBounds(t), i = o.point(i || [0, 0]);
      var n = this.getZoom() || 0,
          s = this.getMinZoom(),
          r = this.getMaxZoom(),
          a = t.getNorthWest(),
          h = t.getSouthEast(),
          l = this.getSize().subtract(i),
          u = o.bounds(this.project(h, n), this.project(a, n)).getSize(),
          c = o.Browser.any3d ? this.options.zoomSnap : 1,
          d = Math.min(l.x / u.x, l.y / u.y);
      return n = this.getScaleZoom(d, n), c && (n = Math.round(n / (c / 100)) * (c / 100), n = e ? Math.ceil(n / c) * c : Math.floor(n / c) * c), Math.max(s, Math.min(r, n));
    },
    getSize: function getSize() {
      return this._size && !this._sizeChanged || (this._size = new o.Point(this._container.clientWidth || 0, this._container.clientHeight || 0), this._sizeChanged = !1), this._size.clone();
    },
    getPixelBounds: function getPixelBounds(t, e) {
      var i = this._getTopLeftPoint(t, e);

      return new o.Bounds(i, i.add(this.getSize()));
    },
    getPixelOrigin: function getPixelOrigin() {
      return this._checkIfLoaded(), this._pixelOrigin;
    },
    getPixelWorldBounds: function getPixelWorldBounds(t) {
      return this.options.crs.getProjectedBounds(t === i ? this.getZoom() : t);
    },
    getPane: function getPane(t) {
      return "string" == typeof t ? this._panes[t] : t;
    },
    getPanes: function getPanes() {
      return this._panes;
    },
    getContainer: function getContainer() {
      return this._container;
    },
    getZoomScale: function getZoomScale(t, e) {
      var n = this.options.crs;
      return e = e === i ? this._zoom : e, n.scale(t) / n.scale(e);
    },
    getScaleZoom: function getScaleZoom(t, e) {
      var n = this.options.crs;
      e = e === i ? this._zoom : e;
      var o = n.zoom(t * n.scale(e));
      return isNaN(o) ? 1 / 0 : o;
    },
    project: function project(t, e) {
      return e = e === i ? this._zoom : e, this.options.crs.latLngToPoint(o.latLng(t), e);
    },
    unproject: function unproject(t, e) {
      return e = e === i ? this._zoom : e, this.options.crs.pointToLatLng(o.point(t), e);
    },
    layerPointToLatLng: function layerPointToLatLng(t) {
      var e = o.point(t).add(this.getPixelOrigin());
      return this.unproject(e);
    },
    latLngToLayerPoint: function latLngToLayerPoint(t) {
      var e = this.project(o.latLng(t))._round();

      return e._subtract(this.getPixelOrigin());
    },
    wrapLatLng: function wrapLatLng(t) {
      return this.options.crs.wrapLatLng(o.latLng(t));
    },
    wrapLatLngBounds: function wrapLatLngBounds(t) {
      return this.options.crs.wrapLatLngBounds(o.latLngBounds(t));
    },
    distance: function distance(t, e) {
      return this.options.crs.distance(o.latLng(t), o.latLng(e));
    },
    containerPointToLayerPoint: function containerPointToLayerPoint(t) {
      return o.point(t).subtract(this._getMapPanePos());
    },
    layerPointToContainerPoint: function layerPointToContainerPoint(t) {
      return o.point(t).add(this._getMapPanePos());
    },
    containerPointToLatLng: function containerPointToLatLng(t) {
      var e = this.containerPointToLayerPoint(o.point(t));
      return this.layerPointToLatLng(e);
    },
    latLngToContainerPoint: function latLngToContainerPoint(t) {
      return this.layerPointToContainerPoint(this.latLngToLayerPoint(o.latLng(t)));
    },
    mouseEventToContainerPoint: function mouseEventToContainerPoint(t) {
      return o.DomEvent.getMousePosition(t, this._container);
    },
    mouseEventToLayerPoint: function mouseEventToLayerPoint(t) {
      return this.containerPointToLayerPoint(this.mouseEventToContainerPoint(t));
    },
    mouseEventToLatLng: function mouseEventToLatLng(t) {
      return this.layerPointToLatLng(this.mouseEventToLayerPoint(t));
    },
    _initContainer: function _initContainer(t) {
      var e = this._container = o.DomUtil.get(t);
      if (!e) throw new Error("Map container not found.");
      if (e._leaflet_id) throw new Error("Map container is already initialized.");
      o.DomEvent.addListener(e, "scroll", this._onScroll, this), this._containerId = o.Util.stamp(e);
    },
    _initLayout: function _initLayout() {
      var t = this._container;
      this._fadeAnimated = this.options.fadeAnimation && o.Browser.any3d, o.DomUtil.addClass(t, "leaflet-container" + (o.Browser.touch ? " leaflet-touch" : "") + (o.Browser.retina ? " leaflet-retina" : "") + (o.Browser.ielt9 ? " leaflet-oldie" : "") + (o.Browser.safari ? " leaflet-safari" : "") + (this._fadeAnimated ? " leaflet-fade-anim" : ""));
      var e = o.DomUtil.getStyle(t, "position");
      "absolute" !== e && "relative" !== e && "fixed" !== e && (t.style.position = "relative"), this._initPanes(), this._initControlPos && this._initControlPos();
    },
    _initPanes: function _initPanes() {
      var t = this._panes = {};
      this._paneRenderers = {}, this._mapPane = this.createPane("mapPane", this._container), o.DomUtil.setPosition(this._mapPane, new o.Point(0, 0)), this.createPane("tilePane"), this.createPane("shadowPane"), this.createPane("overlayPane"), this.createPane("markerPane"), this.createPane("tooltipPane"), this.createPane("popupPane"), this.options.markerZoomAnimation || (o.DomUtil.addClass(t.markerPane, "leaflet-zoom-hide"), o.DomUtil.addClass(t.shadowPane, "leaflet-zoom-hide"));
    },
    _resetView: function _resetView(t, e) {
      o.DomUtil.setPosition(this._mapPane, new o.Point(0, 0));
      var i = !this._loaded;
      this._loaded = !0, e = this._limitZoom(e), this.fire("viewprereset");
      var n = this._zoom !== e;
      this._moveStart(n)._move(t, e)._moveEnd(n), this.fire("viewreset"), i && this.fire("load");
    },
    _moveStart: function _moveStart(t) {
      return t && this.fire("zoomstart"), this.fire("movestart");
    },
    _move: function _move(t, e, n) {
      e === i && (e = this._zoom);
      var o = this._zoom !== e;
      return this._zoom = e, this._lastCenter = t, this._pixelOrigin = this._getNewPixelOrigin(t), (o || n && n.pinch) && this.fire("zoom", n), this.fire("move", n);
    },
    _moveEnd: function _moveEnd(t) {
      return t && this.fire("zoomend"), this.fire("moveend");
    },
    _stop: function _stop() {
      return o.Util.cancelAnimFrame(this._flyToFrame), this._panAnim && this._panAnim.stop(), this;
    },
    _rawPanBy: function _rawPanBy(t) {
      o.DomUtil.setPosition(this._mapPane, this._getMapPanePos().subtract(t));
    },
    _getZoomSpan: function _getZoomSpan() {
      return this.getMaxZoom() - this.getMinZoom();
    },
    _panInsideMaxBounds: function _panInsideMaxBounds() {
      this._enforcingBounds || this.panInsideBounds(this.options.maxBounds);
    },
    _checkIfLoaded: function _checkIfLoaded() {
      if (!this._loaded) throw new Error("Set map center and zoom first.");
    },
    _initEvents: function _initEvents(e) {
      if (o.DomEvent) {
        this._targets = {}, this._targets[o.stamp(this._container)] = this;
        var i = e ? "off" : "on";
        o.DomEvent[i](this._container, "click dblclick mousedown mouseup mouseover mouseout mousemove contextmenu keypress", this._handleDOMEvent, this), this.options.trackResize && o.DomEvent[i](t, "resize", this._onResize, this), o.Browser.any3d && this.options.transform3DLimit && this[i]("moveend", this._onMoveEnd);
      }
    },
    _onResize: function _onResize() {
      o.Util.cancelAnimFrame(this._resizeRequest), this._resizeRequest = o.Util.requestAnimFrame(function () {
        this.invalidateSize({
          debounceMoveend: !0
        });
      }, this);
    },
    _onScroll: function _onScroll() {
      this._container.scrollTop = 0, this._container.scrollLeft = 0;
    },
    _onMoveEnd: function _onMoveEnd() {
      var t = this._getMapPanePos();

      Math.max(Math.abs(t.x), Math.abs(t.y)) >= this.options.transform3DLimit && this._resetView(this.getCenter(), this.getZoom());
    },
    _findEventTargets: function _findEventTargets(t, e) {
      for (var i, n = [], s = "mouseout" === e || "mouseover" === e, r = t.target || t.srcElement, a = !1; r;) {
        if (i = this._targets[o.stamp(r)], i && ("click" === e || "preclick" === e) && !t._simulated && this._draggableMoved(i)) {
          a = !0;
          break;
        }

        if (i && i.listens(e, !0)) {
          if (s && !o.DomEvent._isExternalTarget(r, t)) break;
          if (n.push(i), s) break;
        }

        if (r === this._container) break;
        r = r.parentNode;
      }

      return n.length || a || s || !o.DomEvent._isExternalTarget(r, t) || (n = [this]), n;
    },
    _handleDOMEvent: function _handleDOMEvent(t) {
      if (this._loaded && !o.DomEvent._skipped(t)) {
        var e = "keypress" === t.type && 13 === t.keyCode ? "click" : t.type;
        "mousedown" === e && o.DomUtil.preventOutline(t.target || t.srcElement), this._fireDOMEvent(t, e);
      }
    },
    _fireDOMEvent: function _fireDOMEvent(t, e, i) {
      if ("click" === t.type) {
        var n = o.Util.extend({}, t);
        n.type = "preclick", this._fireDOMEvent(n, n.type, i);
      }

      if (!t._stopped && (i = (i || []).concat(this._findEventTargets(t, e)), i.length)) {
        var s = i[0];
        "contextmenu" === e && s.listens(e, !0) && o.DomEvent.preventDefault(t);
        var r = {
          originalEvent: t
        };

        if ("keypress" !== t.type) {
          var a = s instanceof o.Marker;
          r.containerPoint = a ? this.latLngToContainerPoint(s.getLatLng()) : this.mouseEventToContainerPoint(t), r.layerPoint = this.containerPointToLayerPoint(r.containerPoint), r.latlng = a ? s.getLatLng() : this.layerPointToLatLng(r.layerPoint);
        }

        for (var h = 0; h < i.length; h++) {
          if (i[h].fire(e, r, !0), r.originalEvent._stopped || i[h].options.nonBubblingEvents && o.Util.indexOf(i[h].options.nonBubblingEvents, e) !== -1) return;
        }
      }
    },
    _draggableMoved: function _draggableMoved(t) {
      return t = t.dragging && t.dragging.enabled() ? t : this, t.dragging && t.dragging.moved() || this.boxZoom && this.boxZoom.moved();
    },
    _clearHandlers: function _clearHandlers() {
      for (var t = 0, e = this._handlers.length; t < e; t++) {
        this._handlers[t].disable();
      }
    },
    whenReady: function whenReady(t, e) {
      return this._loaded ? t.call(e || this, {
        target: this
      }) : this.on("load", t, e), this;
    },
    _getMapPanePos: function _getMapPanePos() {
      return o.DomUtil.getPosition(this._mapPane) || new o.Point(0, 0);
    },
    _moved: function _moved() {
      var t = this._getMapPanePos();

      return t && !t.equals([0, 0]);
    },
    _getTopLeftPoint: function _getTopLeftPoint(t, e) {
      var n = t && e !== i ? this._getNewPixelOrigin(t, e) : this.getPixelOrigin();
      return n.subtract(this._getMapPanePos());
    },
    _getNewPixelOrigin: function _getNewPixelOrigin(t, e) {
      var i = this.getSize()._divideBy(2);

      return this.project(t, e)._subtract(i)._add(this._getMapPanePos())._round();
    },
    _latLngToNewLayerPoint: function _latLngToNewLayerPoint(t, e, i) {
      var n = this._getNewPixelOrigin(i, e);

      return this.project(t, e)._subtract(n);
    },
    _latLngBoundsToNewLayerBounds: function _latLngBoundsToNewLayerBounds(t, e, i) {
      var n = this._getNewPixelOrigin(i, e);

      return o.bounds([this.project(t.getSouthWest(), e)._subtract(n), this.project(t.getNorthWest(), e)._subtract(n), this.project(t.getSouthEast(), e)._subtract(n), this.project(t.getNorthEast(), e)._subtract(n)]);
    },
    _getCenterLayerPoint: function _getCenterLayerPoint() {
      return this.containerPointToLayerPoint(this.getSize()._divideBy(2));
    },
    _getCenterOffset: function _getCenterOffset(t) {
      return this.latLngToLayerPoint(t).subtract(this._getCenterLayerPoint());
    },
    _limitCenter: function _limitCenter(t, e, i) {
      if (!i) return t;

      var n = this.project(t, e),
          s = this.getSize().divideBy(2),
          r = new o.Bounds(n.subtract(s), n.add(s)),
          a = this._getBoundsOffset(r, i, e);

      return a.round().equals([0, 0]) ? t : this.unproject(n.add(a), e);
    },
    _limitOffset: function _limitOffset(t, e) {
      if (!e) return t;
      var i = this.getPixelBounds(),
          n = new o.Bounds(i.min.add(t), i.max.add(t));
      return t.add(this._getBoundsOffset(n, e));
    },
    _getBoundsOffset: function _getBoundsOffset(t, e, i) {
      var n = o.bounds(this.project(e.getNorthEast(), i), this.project(e.getSouthWest(), i)),
          s = n.min.subtract(t.min),
          r = n.max.subtract(t.max),
          a = this._rebound(s.x, -r.x),
          h = this._rebound(s.y, -r.y);

      return new o.Point(a, h);
    },
    _rebound: function _rebound(t, e) {
      return t + e > 0 ? Math.round(t - e) / 2 : Math.max(0, Math.ceil(t)) - Math.max(0, Math.floor(e));
    },
    _limitZoom: function _limitZoom(t) {
      var e = this.getMinZoom(),
          i = this.getMaxZoom(),
          n = o.Browser.any3d ? this.options.zoomSnap : 1;
      return n && (t = Math.round(t / n) * n), Math.max(e, Math.min(i, t));
    },
    _onPanTransitionStep: function _onPanTransitionStep() {
      this.fire("move");
    },
    _onPanTransitionEnd: function _onPanTransitionEnd() {
      o.DomUtil.removeClass(this._mapPane, "leaflet-pan-anim"), this.fire("moveend");
    },
    _tryAnimatedPan: function _tryAnimatedPan(t, e) {
      var i = this._getCenterOffset(t)._floor();

      return !((e && e.animate) !== !0 && !this.getSize().contains(i)) && (this.panBy(i, e), !0);
    },
    _createAnimProxy: function _createAnimProxy() {
      var t = this._proxy = o.DomUtil.create("div", "leaflet-proxy leaflet-zoom-animated");
      this._panes.mapPane.appendChild(t), this.on("zoomanim", function (e) {
        var i = o.DomUtil.TRANSFORM,
            n = t.style[i];
        o.DomUtil.setTransform(t, this.project(e.center, e.zoom), this.getZoomScale(e.zoom, 1)), n === t.style[i] && this._animatingZoom && this._onZoomTransitionEnd();
      }, this), this.on("load moveend", function () {
        var e = this.getCenter(),
            i = this.getZoom();
        o.DomUtil.setTransform(t, this.project(e, i), this.getZoomScale(i, 1));
      }, this);
    },
    _catchTransitionEnd: function _catchTransitionEnd(t) {
      this._animatingZoom && t.propertyName.indexOf("transform") >= 0 && this._onZoomTransitionEnd();
    },
    _nothingToAnimate: function _nothingToAnimate() {
      return !this._container.getElementsByClassName("leaflet-zoom-animated").length;
    },
    _tryAnimatedZoom: function _tryAnimatedZoom(t, e, i) {
      if (this._animatingZoom) return !0;
      if (i = i || {}, !this._zoomAnimated || i.animate === !1 || this._nothingToAnimate() || Math.abs(e - this._zoom) > this.options.zoomAnimationThreshold) return !1;

      var n = this.getZoomScale(e),
          s = this._getCenterOffset(t)._divideBy(1 - 1 / n);

      return !(i.animate !== !0 && !this.getSize().contains(s)) && (o.Util.requestAnimFrame(function () {
        this._moveStart(!0)._animateZoom(t, e, !0);
      }, this), !0);
    },
    _animateZoom: function _animateZoom(t, e, i, n) {
      i && (this._animatingZoom = !0, this._animateToCenter = t, this._animateToZoom = e, o.DomUtil.addClass(this._mapPane, "leaflet-zoom-anim")), this.fire("zoomanim", {
        center: t,
        zoom: e,
        noUpdate: n
      }), setTimeout(o.bind(this._onZoomTransitionEnd, this), 250);
    },
    _onZoomTransitionEnd: function _onZoomTransitionEnd() {
      this._animatingZoom && (o.DomUtil.removeClass(this._mapPane, "leaflet-zoom-anim"), this._animatingZoom = !1, this._move(this._animateToCenter, this._animateToZoom), o.Util.requestAnimFrame(function () {
        this._moveEnd(!0);
      }, this));
    }
  }), o.map = function (t, e) {
    return new o.Map(t, e);
  }, o.Layer = o.Evented.extend({
    options: {
      pane: "overlayPane",
      nonBubblingEvents: [],
      attribution: null
    },
    addTo: function addTo(t) {
      return t.addLayer(this), this;
    },
    remove: function remove() {
      return this.removeFrom(this._map || this._mapToAdd);
    },
    removeFrom: function removeFrom(t) {
      return t && t.removeLayer(this), this;
    },
    getPane: function getPane(t) {
      return this._map.getPane(t ? this.options[t] || t : this.options.pane);
    },
    addInteractiveTarget: function addInteractiveTarget(t) {
      return this._map._targets[o.stamp(t)] = this, this;
    },
    removeInteractiveTarget: function removeInteractiveTarget(t) {
      return delete this._map._targets[o.stamp(t)], this;
    },
    getAttribution: function getAttribution() {
      return this.options.attribution;
    },
    _layerAdd: function _layerAdd(t) {
      var e = t.target;

      if (e.hasLayer(this)) {
        if (this._map = e, this._zoomAnimated = e._zoomAnimated, this.getEvents) {
          var i = this.getEvents();
          e.on(i, this), this.once("remove", function () {
            e.off(i, this);
          }, this);
        }

        this.onAdd(e), this.getAttribution && e.attributionControl && e.attributionControl.addAttribution(this.getAttribution()), this.fire("add"), e.fire("layeradd", {
          layer: this
        });
      }
    }
  }), o.Map.include({
    addLayer: function addLayer(t) {
      var e = o.stamp(t);
      return this._layers[e] ? this : (this._layers[e] = t, t._mapToAdd = this, t.beforeAdd && t.beforeAdd(this), this.whenReady(t._layerAdd, t), this);
    },
    removeLayer: function removeLayer(t) {
      var e = o.stamp(t);
      return this._layers[e] ? (this._loaded && t.onRemove(this), t.getAttribution && this.attributionControl && this.attributionControl.removeAttribution(t.getAttribution()), delete this._layers[e], this._loaded && (this.fire("layerremove", {
        layer: t
      }), t.fire("remove")), t._map = t._mapToAdd = null, this) : this;
    },
    hasLayer: function hasLayer(t) {
      return !!t && o.stamp(t) in this._layers;
    },
    eachLayer: function eachLayer(t, e) {
      for (var i in this._layers) {
        t.call(e, this._layers[i]);
      }

      return this;
    },
    _addLayers: function _addLayers(t) {
      t = t ? o.Util.isArray(t) ? t : [t] : [];

      for (var e = 0, i = t.length; e < i; e++) {
        this.addLayer(t[e]);
      }
    },
    _addZoomLimit: function _addZoomLimit(t) {
      !isNaN(t.options.maxZoom) && isNaN(t.options.minZoom) || (this._zoomBoundLayers[o.stamp(t)] = t, this._updateZoomLevels());
    },
    _removeZoomLimit: function _removeZoomLimit(t) {
      var e = o.stamp(t);
      this._zoomBoundLayers[e] && (delete this._zoomBoundLayers[e], this._updateZoomLevels());
    },
    _updateZoomLevels: function _updateZoomLevels() {
      var t = 1 / 0,
          e = -(1 / 0),
          n = this._getZoomSpan();

      for (var o in this._zoomBoundLayers) {
        var s = this._zoomBoundLayers[o].options;
        t = s.minZoom === i ? t : Math.min(t, s.minZoom), e = s.maxZoom === i ? e : Math.max(e, s.maxZoom);
      }

      this._layersMaxZoom = e === -(1 / 0) ? i : e, this._layersMinZoom = t === 1 / 0 ? i : t, n !== this._getZoomSpan() && this.fire("zoomlevelschange"), this.options.maxZoom === i && this._layersMaxZoom && this.getZoom() > this._layersMaxZoom && this.setZoom(this._layersMaxZoom), this.options.minZoom === i && this._layersMinZoom && this.getZoom() < this._layersMinZoom && this.setZoom(this._layersMinZoom);
    }
  });
  var r = "_leaflet_events";
  o.DomEvent = {
    on: function on(t, e, i, n) {
      if ("object" == _typeof(e)) for (var s in e) {
        this._on(t, s, e[s], i);
      } else {
        e = o.Util.splitWords(e);

        for (var r = 0, a = e.length; r < a; r++) {
          this._on(t, e[r], i, n);
        }
      }
      return this;
    },
    off: function off(t, e, i, n) {
      if ("object" == _typeof(e)) for (var s in e) {
        this._off(t, s, e[s], i);
      } else {
        e = o.Util.splitWords(e);

        for (var r = 0, a = e.length; r < a; r++) {
          this._off(t, e[r], i, n);
        }
      }
      return this;
    },
    _on: function _on(e, i, n, s) {
      var a = i + o.stamp(n) + (s ? "_" + o.stamp(s) : "");
      if (e[r] && e[r][a]) return this;

      var h = function h(i) {
        return n.call(s || e, i || t.event);
      },
          l = h;

      return o.Browser.pointer && 0 === i.indexOf("touch") ? this.addPointerListener(e, i, h, a) : !o.Browser.touch || "dblclick" !== i || !this.addDoubleTapListener || o.Browser.pointer && o.Browser.chrome ? "addEventListener" in e ? "mousewheel" === i ? e.addEventListener("onwheel" in e ? "wheel" : "mousewheel", h, !1) : "mouseenter" === i || "mouseleave" === i ? (h = function h(i) {
        i = i || t.event, o.DomEvent._isExternalTarget(e, i) && l(i);
      }, e.addEventListener("mouseenter" === i ? "mouseover" : "mouseout", h, !1)) : ("click" === i && o.Browser.android && (h = function h(t) {
        return o.DomEvent._filterClick(t, l);
      }), e.addEventListener(i, h, !1)) : "attachEvent" in e && e.attachEvent("on" + i, h) : this.addDoubleTapListener(e, h, a), e[r] = e[r] || {}, e[r][a] = h, this;
    },
    _off: function _off(t, e, i, n) {
      var s = e + o.stamp(i) + (n ? "_" + o.stamp(n) : ""),
          a = t[r] && t[r][s];
      return a ? (o.Browser.pointer && 0 === e.indexOf("touch") ? this.removePointerListener(t, e, s) : o.Browser.touch && "dblclick" === e && this.removeDoubleTapListener ? this.removeDoubleTapListener(t, s) : "removeEventListener" in t ? "mousewheel" === e ? t.removeEventListener("onwheel" in t ? "wheel" : "mousewheel", a, !1) : t.removeEventListener("mouseenter" === e ? "mouseover" : "mouseleave" === e ? "mouseout" : e, a, !1) : "detachEvent" in t && t.detachEvent("on" + e, a), t[r][s] = null, this) : this;
    },
    stopPropagation: function stopPropagation(t) {
      return t.stopPropagation ? t.stopPropagation() : t.originalEvent ? t.originalEvent._stopped = !0 : t.cancelBubble = !0, o.DomEvent._skipped(t), this;
    },
    disableScrollPropagation: function disableScrollPropagation(t) {
      return o.DomEvent.on(t, "mousewheel", o.DomEvent.stopPropagation);
    },
    disableClickPropagation: function disableClickPropagation(t) {
      var e = o.DomEvent.stopPropagation;
      return o.DomEvent.on(t, o.Draggable.START.join(" "), e), o.DomEvent.on(t, {
        click: o.DomEvent._fakeStop,
        dblclick: e
      });
    },
    preventDefault: function preventDefault(t) {
      return t.preventDefault ? t.preventDefault() : t.returnValue = !1, this;
    },
    stop: function stop(t) {
      return o.DomEvent.preventDefault(t).stopPropagation(t);
    },
    getMousePosition: function getMousePosition(t, e) {
      if (!e) return new o.Point(t.clientX, t.clientY);
      var i = e.getBoundingClientRect();
      return new o.Point(t.clientX - i.left - e.clientLeft, t.clientY - i.top - e.clientTop);
    },
    _wheelPxFactor: o.Browser.win && o.Browser.chrome ? 2 : o.Browser.gecko ? t.devicePixelRatio : 1,
    getWheelDelta: function getWheelDelta(t) {
      return o.Browser.edge ? t.wheelDeltaY / 2 : t.deltaY && 0 === t.deltaMode ? -t.deltaY / o.DomEvent._wheelPxFactor : t.deltaY && 1 === t.deltaMode ? 20 * -t.deltaY : t.deltaY && 2 === t.deltaMode ? 60 * -t.deltaY : t.deltaX || t.deltaZ ? 0 : t.wheelDelta ? (t.wheelDeltaY || t.wheelDelta) / 2 : t.detail && Math.abs(t.detail) < 32765 ? 20 * -t.detail : t.detail ? t.detail / -32765 * 60 : 0;
    },
    _skipEvents: {},
    _fakeStop: function _fakeStop(t) {
      o.DomEvent._skipEvents[t.type] = !0;
    },
    _skipped: function _skipped(t) {
      var e = this._skipEvents[t.type];
      return this._skipEvents[t.type] = !1, e;
    },
    _isExternalTarget: function _isExternalTarget(t, e) {
      var i = e.relatedTarget;
      if (!i) return !0;

      try {
        for (; i && i !== t;) {
          i = i.parentNode;
        }
      } catch (t) {
        return !1;
      }

      return i !== t;
    },
    _filterClick: function _filterClick(t, e) {
      var i = t.timeStamp || t.originalEvent && t.originalEvent.timeStamp,
          n = o.DomEvent._lastClick && i - o.DomEvent._lastClick;
      return n && n > 100 && n < 500 || t.target._simulatedClick && !t._simulated ? void o.DomEvent.stop(t) : (o.DomEvent._lastClick = i, void e(t));
    }
  }, o.DomEvent.addListener = o.DomEvent.on, o.DomEvent.removeListener = o.DomEvent.off, o.PosAnimation = o.Evented.extend({
    run: function run(t, e, i, n) {
      this.stop(), this._el = t, this._inProgress = !0, this._duration = i || .25, this._easeOutPower = 1 / Math.max(n || .5, .2), this._startPos = o.DomUtil.getPosition(t), this._offset = e.subtract(this._startPos), this._startTime = +new Date(), this.fire("start"), this._animate();
    },
    stop: function stop() {
      this._inProgress && (this._step(!0), this._complete());
    },
    _animate: function _animate() {
      this._animId = o.Util.requestAnimFrame(this._animate, this), this._step();
    },
    _step: function _step(t) {
      var e = +new Date() - this._startTime,
          i = 1e3 * this._duration;
      e < i ? this._runFrame(this._easeOut(e / i), t) : (this._runFrame(1), this._complete());
    },
    _runFrame: function _runFrame(t, e) {
      var i = this._startPos.add(this._offset.multiplyBy(t));

      e && i._round(), o.DomUtil.setPosition(this._el, i), this.fire("step");
    },
    _complete: function _complete() {
      o.Util.cancelAnimFrame(this._animId), this._inProgress = !1, this.fire("end");
    },
    _easeOut: function _easeOut(t) {
      return 1 - Math.pow(1 - t, this._easeOutPower);
    }
  }), o.Projection.Mercator = {
    R: 6378137,
    R_MINOR: 6356752.314245179,
    bounds: o.bounds([-20037508.34279, -15496570.73972], [20037508.34279, 18764656.23138]),
    project: function project(t) {
      var e = Math.PI / 180,
          i = this.R,
          n = t.lat * e,
          s = this.R_MINOR / i,
          r = Math.sqrt(1 - s * s),
          a = r * Math.sin(n),
          h = Math.tan(Math.PI / 4 - n / 2) / Math.pow((1 - a) / (1 + a), r / 2);
      return n = -i * Math.log(Math.max(h, 1e-10)), new o.Point(t.lng * e * i, n);
    },
    unproject: function unproject(t) {
      for (var e, i = 180 / Math.PI, n = this.R, s = this.R_MINOR / n, r = Math.sqrt(1 - s * s), a = Math.exp(-t.y / n), h = Math.PI / 2 - 2 * Math.atan(a), l = 0, u = .1; l < 15 && Math.abs(u) > 1e-7; l++) {
        e = r * Math.sin(h), e = Math.pow((1 - e) / (1 + e), r / 2), u = Math.PI / 2 - 2 * Math.atan(a * e) - h, h += u;
      }

      return new o.LatLng(h * i, t.x * i / n);
    }
  }, o.CRS.EPSG3395 = o.extend({}, o.CRS.Earth, {
    code: "EPSG:3395",
    projection: o.Projection.Mercator,
    transformation: function () {
      var t = .5 / (Math.PI * o.Projection.Mercator.R);
      return new o.Transformation(t, .5, -t, .5);
    }()
  }), o.GridLayer = o.Layer.extend({
    options: {
      tileSize: 256,
      opacity: 1,
      updateWhenIdle: o.Browser.mobile,
      updateWhenZooming: !0,
      updateInterval: 200,
      zIndex: 1,
      bounds: null,
      minZoom: 0,
      maxZoom: i,
      noWrap: !1,
      pane: "tilePane",
      className: "",
      keepBuffer: 2
    },
    initialize: function initialize(t) {
      o.setOptions(this, t);
    },
    onAdd: function onAdd() {
      this._initContainer(), this._levels = {}, this._tiles = {}, this._resetView(), this._update();
    },
    beforeAdd: function beforeAdd(t) {
      t._addZoomLimit(this);
    },
    onRemove: function onRemove(t) {
      this._removeAllTiles(), o.DomUtil.remove(this._container), t._removeZoomLimit(this), this._container = null, this._tileZoom = null;
    },
    bringToFront: function bringToFront() {
      return this._map && (o.DomUtil.toFront(this._container), this._setAutoZIndex(Math.max)), this;
    },
    bringToBack: function bringToBack() {
      return this._map && (o.DomUtil.toBack(this._container), this._setAutoZIndex(Math.min)), this;
    },
    getContainer: function getContainer() {
      return this._container;
    },
    setOpacity: function setOpacity(t) {
      return this.options.opacity = t, this._updateOpacity(), this;
    },
    setZIndex: function setZIndex(t) {
      return this.options.zIndex = t, this._updateZIndex(), this;
    },
    isLoading: function isLoading() {
      return this._loading;
    },
    redraw: function redraw() {
      return this._map && (this._removeAllTiles(), this._update()), this;
    },
    getEvents: function getEvents() {
      var t = {
        viewprereset: this._invalidateAll,
        viewreset: this._resetView,
        zoom: this._resetView,
        moveend: this._onMoveEnd
      };
      return this.options.updateWhenIdle || (this._onMove || (this._onMove = o.Util.throttle(this._onMoveEnd, this.options.updateInterval, this)), t.move = this._onMove), this._zoomAnimated && (t.zoomanim = this._animateZoom), t;
    },
    createTile: function createTile() {
      return e.createElement("div");
    },
    getTileSize: function getTileSize() {
      var t = this.options.tileSize;
      return t instanceof o.Point ? t : new o.Point(t, t);
    },
    _updateZIndex: function _updateZIndex() {
      this._container && this.options.zIndex !== i && null !== this.options.zIndex && (this._container.style.zIndex = this.options.zIndex);
    },
    _setAutoZIndex: function _setAutoZIndex(t) {
      for (var e, i = this.getPane().children, n = -t(-(1 / 0), 1 / 0), o = 0, s = i.length; o < s; o++) {
        e = i[o].style.zIndex, i[o] !== this._container && e && (n = t(n, +e));
      }

      isFinite(n) && (this.options.zIndex = n + t(-1, 1), this._updateZIndex());
    },
    _updateOpacity: function _updateOpacity() {
      if (this._map && !o.Browser.ielt9) {
        o.DomUtil.setOpacity(this._container, this.options.opacity);
        var t = +new Date(),
            e = !1,
            i = !1;

        for (var n in this._tiles) {
          var s = this._tiles[n];

          if (s.current && s.loaded) {
            var r = Math.min(1, (t - s.loaded) / 200);
            o.DomUtil.setOpacity(s.el, r), r < 1 ? e = !0 : (s.active && (i = !0), s.active = !0);
          }
        }

        i && !this._noPrune && this._pruneTiles(), e && (o.Util.cancelAnimFrame(this._fadeFrame), this._fadeFrame = o.Util.requestAnimFrame(this._updateOpacity, this));
      }
    },
    _initContainer: function _initContainer() {
      this._container || (this._container = o.DomUtil.create("div", "leaflet-layer " + (this.options.className || "")), this._updateZIndex(), this.options.opacity < 1 && this._updateOpacity(), this.getPane().appendChild(this._container));
    },
    _updateLevels: function _updateLevels() {
      var t = this._tileZoom,
          e = this.options.maxZoom;
      if (t === i) return i;

      for (var n in this._levels) {
        this._levels[n].el.children.length || n === t ? this._levels[n].el.style.zIndex = e - Math.abs(t - n) : (o.DomUtil.remove(this._levels[n].el), this._removeTilesAtZoom(n), delete this._levels[n]);
      }

      var s = this._levels[t],
          r = this._map;
      return s || (s = this._levels[t] = {}, s.el = o.DomUtil.create("div", "leaflet-tile-container leaflet-zoom-animated", this._container), s.el.style.zIndex = e, s.origin = r.project(r.unproject(r.getPixelOrigin()), t).round(), s.zoom = t, this._setZoomTransform(s, r.getCenter(), r.getZoom()), o.Util.falseFn(s.el.offsetWidth)), this._level = s, s;
    },
    _pruneTiles: function _pruneTiles() {
      if (this._map) {
        var t,
            e,
            i = this._map.getZoom();

        if (i > this.options.maxZoom || i < this.options.minZoom) return void this._removeAllTiles();

        for (t in this._tiles) {
          e = this._tiles[t], e.retain = e.current;
        }

        for (t in this._tiles) {
          if (e = this._tiles[t], e.current && !e.active) {
            var n = e.coords;
            this._retainParent(n.x, n.y, n.z, n.z - 5) || this._retainChildren(n.x, n.y, n.z, n.z + 2);
          }
        }

        for (t in this._tiles) {
          this._tiles[t].retain || this._removeTile(t);
        }
      }
    },
    _removeTilesAtZoom: function _removeTilesAtZoom(t) {
      for (var e in this._tiles) {
        this._tiles[e].coords.z === t && this._removeTile(e);
      }
    },
    _removeAllTiles: function _removeAllTiles() {
      for (var t in this._tiles) {
        this._removeTile(t);
      }
    },
    _invalidateAll: function _invalidateAll() {
      for (var t in this._levels) {
        o.DomUtil.remove(this._levels[t].el), delete this._levels[t];
      }

      this._removeAllTiles(), this._tileZoom = null;
    },
    _retainParent: function _retainParent(t, e, i, n) {
      var s = Math.floor(t / 2),
          r = Math.floor(e / 2),
          a = i - 1,
          h = new o.Point(+s, +r);
      h.z = +a;

      var l = this._tileCoordsToKey(h),
          u = this._tiles[l];

      return u && u.active ? (u.retain = !0, !0) : (u && u.loaded && (u.retain = !0), a > n && this._retainParent(s, r, a, n));
    },
    _retainChildren: function _retainChildren(t, e, i, n) {
      for (var s = 2 * t; s < 2 * t + 2; s++) {
        for (var r = 2 * e; r < 2 * e + 2; r++) {
          var a = new o.Point(s, r);
          a.z = i + 1;

          var h = this._tileCoordsToKey(a),
              l = this._tiles[h];

          l && l.active ? l.retain = !0 : (l && l.loaded && (l.retain = !0), i + 1 < n && this._retainChildren(s, r, i + 1, n));
        }
      }
    },
    _resetView: function _resetView(t) {
      var e = t && (t.pinch || t.flyTo);

      this._setView(this._map.getCenter(), this._map.getZoom(), e, e);
    },
    _animateZoom: function _animateZoom(t) {
      this._setView(t.center, t.zoom, !0, t.noUpdate);
    },
    _setView: function _setView(t, e, n, o) {
      var s = Math.round(e);
      (this.options.maxZoom !== i && s > this.options.maxZoom || this.options.minZoom !== i && s < this.options.minZoom) && (s = i);
      var r = this.options.updateWhenZooming && s !== this._tileZoom;
      o && !r || (this._tileZoom = s, this._abortLoading && this._abortLoading(), this._updateLevels(), this._resetGrid(), s !== i && this._update(t), n || this._pruneTiles(), this._noPrune = !!n), this._setZoomTransforms(t, e);
    },
    _setZoomTransforms: function _setZoomTransforms(t, e) {
      for (var i in this._levels) {
        this._setZoomTransform(this._levels[i], t, e);
      }
    },
    _setZoomTransform: function _setZoomTransform(t, e, i) {
      var n = this._map.getZoomScale(i, t.zoom),
          s = t.origin.multiplyBy(n).subtract(this._map._getNewPixelOrigin(e, i)).round();

      o.Browser.any3d ? o.DomUtil.setTransform(t.el, s, n) : o.DomUtil.setPosition(t.el, s);
    },
    _resetGrid: function _resetGrid() {
      var t = this._map,
          e = t.options.crs,
          i = this._tileSize = this.getTileSize(),
          n = this._tileZoom,
          o = this._map.getPixelWorldBounds(this._tileZoom);

      o && (this._globalTileRange = this._pxBoundsToTileRange(o)), this._wrapX = e.wrapLng && !this.options.noWrap && [Math.floor(t.project([0, e.wrapLng[0]], n).x / i.x), Math.ceil(t.project([0, e.wrapLng[1]], n).x / i.y)], this._wrapY = e.wrapLat && !this.options.noWrap && [Math.floor(t.project([e.wrapLat[0], 0], n).y / i.x), Math.ceil(t.project([e.wrapLat[1], 0], n).y / i.y)];
    },
    _onMoveEnd: function _onMoveEnd() {
      this._map && !this._map._animatingZoom && this._update();
    },
    _getTiledPixelBounds: function _getTiledPixelBounds(t) {
      var e = this._map,
          i = e._animatingZoom ? Math.max(e._animateToZoom, e.getZoom()) : e.getZoom(),
          n = e.getZoomScale(i, this._tileZoom),
          s = e.project(t, this._tileZoom).floor(),
          r = e.getSize().divideBy(2 * n);
      return new o.Bounds(s.subtract(r), s.add(r));
    },
    _update: function _update(t) {
      var n = this._map;

      if (n) {
        var s = n.getZoom();

        if (t === i && (t = n.getCenter()), this._tileZoom !== i) {
          var r = this._getTiledPixelBounds(t),
              a = this._pxBoundsToTileRange(r),
              h = a.getCenter(),
              l = [],
              u = this.options.keepBuffer,
              c = new o.Bounds(a.getBottomLeft().subtract([u, -u]), a.getTopRight().add([u, -u]));

          for (var d in this._tiles) {
            var _ = this._tiles[d].coords;
            _.z === this._tileZoom && c.contains(o.point(_.x, _.y)) || (this._tiles[d].current = !1);
          }

          if (Math.abs(s - this._tileZoom) > 1) return void this._setView(t, s);

          for (var m = a.min.y; m <= a.max.y; m++) {
            for (var p = a.min.x; p <= a.max.x; p++) {
              var f = new o.Point(p, m);

              if (f.z = this._tileZoom, this._isValidTile(f)) {
                var g = this._tiles[this._tileCoordsToKey(f)];

                g ? g.current = !0 : l.push(f);
              }
            }
          }

          if (l.sort(function (t, e) {
            return t.distanceTo(h) - e.distanceTo(h);
          }), 0 !== l.length) {
            this._loading || (this._loading = !0, this.fire("loading"));
            var v = e.createDocumentFragment();

            for (p = 0; p < l.length; p++) {
              this._addTile(l[p], v);
            }

            this._level.el.appendChild(v);
          }
        }
      }
    },
    _isValidTile: function _isValidTile(t) {
      var e = this._map.options.crs;

      if (!e.infinite) {
        var i = this._globalTileRange;
        if (!e.wrapLng && (t.x < i.min.x || t.x > i.max.x) || !e.wrapLat && (t.y < i.min.y || t.y > i.max.y)) return !1;
      }

      if (!this.options.bounds) return !0;

      var n = this._tileCoordsToBounds(t);

      return o.latLngBounds(this.options.bounds).overlaps(n);
    },
    _keyToBounds: function _keyToBounds(t) {
      return this._tileCoordsToBounds(this._keyToTileCoords(t));
    },
    _tileCoordsToBounds: function _tileCoordsToBounds(t) {
      var e = this._map,
          i = this.getTileSize(),
          n = t.scaleBy(i),
          s = n.add(i),
          r = e.unproject(n, t.z),
          a = e.unproject(s, t.z),
          h = new o.LatLngBounds(r, a);
      return this.options.noWrap || e.wrapLatLngBounds(h), h;
    },
    _tileCoordsToKey: function _tileCoordsToKey(t) {
      return t.x + ":" + t.y + ":" + t.z;
    },
    _keyToTileCoords: function _keyToTileCoords(t) {
      var e = t.split(":"),
          i = new o.Point(+e[0], +e[1]);
      return i.z = +e[2], i;
    },
    _removeTile: function _removeTile(t) {
      var e = this._tiles[t];
      e && (o.DomUtil.remove(e.el), delete this._tiles[t], this.fire("tileunload", {
        tile: e.el,
        coords: this._keyToTileCoords(t)
      }));
    },
    _initTile: function _initTile(t) {
      o.DomUtil.addClass(t, "leaflet-tile");
      var e = this.getTileSize();
      t.style.width = e.x + "px", t.style.height = e.y + "px", t.onselectstart = o.Util.falseFn, t.onmousemove = o.Util.falseFn, o.Browser.ielt9 && this.options.opacity < 1 && o.DomUtil.setOpacity(t, this.options.opacity), o.Browser.android && !o.Browser.android23 && (t.style.WebkitBackfaceVisibility = "hidden");
    },
    _addTile: function _addTile(t, e) {
      var i = this._getTilePos(t),
          n = this._tileCoordsToKey(t),
          s = this.createTile(this._wrapCoords(t), o.bind(this._tileReady, this, t));

      this._initTile(s), this.createTile.length < 2 && o.Util.requestAnimFrame(o.bind(this._tileReady, this, t, null, s)), o.DomUtil.setPosition(s, i), this._tiles[n] = {
        el: s,
        coords: t,
        current: !0
      }, e.appendChild(s), this.fire("tileloadstart", {
        tile: s,
        coords: t
      });
    },
    _tileReady: function _tileReady(t, e, i) {
      if (this._map) {
        e && this.fire("tileerror", {
          error: e,
          tile: i,
          coords: t
        });

        var n = this._tileCoordsToKey(t);

        i = this._tiles[n], i && (i.loaded = +new Date(), this._map._fadeAnimated ? (o.DomUtil.setOpacity(i.el, 0), o.Util.cancelAnimFrame(this._fadeFrame), this._fadeFrame = o.Util.requestAnimFrame(this._updateOpacity, this)) : (i.active = !0, this._pruneTiles()), e || (o.DomUtil.addClass(i.el, "leaflet-tile-loaded"), this.fire("tileload", {
          tile: i.el,
          coords: t
        })), this._noTilesToLoad() && (this._loading = !1, this.fire("load"), o.Browser.ielt9 || !this._map._fadeAnimated ? o.Util.requestAnimFrame(this._pruneTiles, this) : setTimeout(o.bind(this._pruneTiles, this), 250)));
      }
    },
    _getTilePos: function _getTilePos(t) {
      return t.scaleBy(this.getTileSize()).subtract(this._level.origin);
    },
    _wrapCoords: function _wrapCoords(t) {
      var e = new o.Point(this._wrapX ? o.Util.wrapNum(t.x, this._wrapX) : t.x, this._wrapY ? o.Util.wrapNum(t.y, this._wrapY) : t.y);
      return e.z = t.z, e;
    },
    _pxBoundsToTileRange: function _pxBoundsToTileRange(t) {
      var e = this.getTileSize();
      return new o.Bounds(t.min.unscaleBy(e).floor(), t.max.unscaleBy(e).ceil().subtract([1, 1]));
    },
    _noTilesToLoad: function _noTilesToLoad() {
      for (var t in this._tiles) {
        if (!this._tiles[t].loaded) return !1;
      }

      return !0;
    }
  }), o.gridLayer = function (t) {
    return new o.GridLayer(t);
  }, o.TileLayer = o.GridLayer.extend({
    options: {
      minZoom: 0,
      maxZoom: 18,
      maxNativeZoom: null,
      minNativeZoom: null,
      subdomains: "abc",
      errorTileUrl: "",
      zoomOffset: 0,
      tms: !1,
      zoomReverse: !1,
      detectRetina: !1,
      crossOrigin: !1
    },
    initialize: function initialize(t, e) {
      this._url = t, e = o.setOptions(this, e), e.detectRetina && o.Browser.retina && e.maxZoom > 0 && (e.tileSize = Math.floor(e.tileSize / 2), e.zoomReverse ? (e.zoomOffset--, e.minZoom++) : (e.zoomOffset++, e.maxZoom--), e.minZoom = Math.max(0, e.minZoom)), "string" == typeof e.subdomains && (e.subdomains = e.subdomains.split("")), o.Browser.android || this.on("tileunload", this._onTileRemove);
    },
    setUrl: function setUrl(t, e) {
      return this._url = t, e || this.redraw(), this;
    },
    createTile: function createTile(t, i) {
      var n = e.createElement("img");
      return o.DomEvent.on(n, "load", o.bind(this._tileOnLoad, this, i, n)), o.DomEvent.on(n, "error", o.bind(this._tileOnError, this, i, n)), this.options.crossOrigin && (n.crossOrigin = ""), n.alt = "", n.setAttribute("role", "presentation"), n.src = this.getTileUrl(t), n;
    },
    getTileUrl: function getTileUrl(t) {
      var e = {
        r: o.Browser.retina ? "@2x" : "",
        s: this._getSubdomain(t),
        x: t.x,
        y: t.y,
        z: this._getZoomForUrl()
      };

      if (this._map && !this._map.options.crs.infinite) {
        var i = this._globalTileRange.max.y - t.y;
        this.options.tms && (e.y = i), e["-y"] = i;
      }

      return o.Util.template(this._url, o.extend(e, this.options));
    },
    _tileOnLoad: function _tileOnLoad(t, e) {
      o.Browser.ielt9 ? setTimeout(o.bind(t, this, null, e), 0) : t(null, e);
    },
    _tileOnError: function _tileOnError(t, e, i) {
      var n = this.options.errorTileUrl;
      n && e.src !== n && (e.src = n), t(i, e);
    },
    getTileSize: function getTileSize() {
      var t = this._map,
          e = o.GridLayer.prototype.getTileSize.call(this),
          i = this._tileZoom + this.options.zoomOffset,
          n = this.options.minNativeZoom,
          s = this.options.maxNativeZoom;
      return null !== n && i < n ? e.divideBy(t.getZoomScale(n, i)).round() : null !== s && i > s ? e.divideBy(t.getZoomScale(s, i)).round() : e;
    },
    _onTileRemove: function _onTileRemove(t) {
      t.tile.onload = null;
    },
    _getZoomForUrl: function _getZoomForUrl() {
      var t = this._tileZoom,
          e = this.options.maxZoom,
          i = this.options.zoomReverse,
          n = this.options.zoomOffset,
          o = this.options.minNativeZoom,
          s = this.options.maxNativeZoom;
      return i && (t = e - t), t += n, null !== o && t < o ? o : null !== s && t > s ? s : t;
    },
    _getSubdomain: function _getSubdomain(t) {
      var e = Math.abs(t.x + t.y) % this.options.subdomains.length;
      return this.options.subdomains[e];
    },
    _abortLoading: function _abortLoading() {
      var t, e;

      for (t in this._tiles) {
        this._tiles[t].coords.z !== this._tileZoom && (e = this._tiles[t].el, e.onload = o.Util.falseFn, e.onerror = o.Util.falseFn, e.complete || (e.src = o.Util.emptyImageUrl, o.DomUtil.remove(e)));
      }
    }
  }), o.tileLayer = function (t, e) {
    return new o.TileLayer(t, e);
  }, o.TileLayer.WMS = o.TileLayer.extend({
    defaultWmsParams: {
      service: "WMS",
      request: "GetMap",
      layers: "",
      styles: "",
      format: "image/jpeg",
      transparent: !1,
      version: "1.1.1"
    },
    options: {
      crs: null,
      uppercase: !1
    },
    initialize: function initialize(t, e) {
      this._url = t;
      var i = o.extend({}, this.defaultWmsParams);

      for (var n in e) {
        n in this.options || (i[n] = e[n]);
      }

      e = o.setOptions(this, e), i.width = i.height = e.tileSize * (e.detectRetina && o.Browser.retina ? 2 : 1), this.wmsParams = i;
    },
    onAdd: function onAdd(t) {
      this._crs = this.options.crs || t.options.crs, this._wmsVersion = parseFloat(this.wmsParams.version);
      var e = this._wmsVersion >= 1.3 ? "crs" : "srs";
      this.wmsParams[e] = this._crs.code, o.TileLayer.prototype.onAdd.call(this, t);
    },
    getTileUrl: function getTileUrl(t) {
      var e = this._tileCoordsToBounds(t),
          i = this._crs.project(e.getNorthWest()),
          n = this._crs.project(e.getSouthEast()),
          s = (this._wmsVersion >= 1.3 && this._crs === o.CRS.EPSG4326 ? [n.y, i.x, i.y, n.x] : [i.x, n.y, n.x, i.y]).join(","),
          r = o.TileLayer.prototype.getTileUrl.call(this, t);

      return r + o.Util.getParamString(this.wmsParams, r, this.options.uppercase) + (this.options.uppercase ? "&BBOX=" : "&bbox=") + s;
    },
    setParams: function setParams(t, e) {
      return o.extend(this.wmsParams, t), e || this.redraw(), this;
    }
  }), o.tileLayer.wms = function (t, e) {
    return new o.TileLayer.WMS(t, e);
  }, o.ImageOverlay = o.Layer.extend({
    options: {
      opacity: 1,
      alt: "",
      interactive: !1,
      crossOrigin: !1
    },
    initialize: function initialize(t, e, i) {
      this._url = t, this._bounds = o.latLngBounds(e), o.setOptions(this, i);
    },
    onAdd: function onAdd() {
      this._image || (this._initImage(), this.options.opacity < 1 && this._updateOpacity()), this.options.interactive && (o.DomUtil.addClass(this._image, "leaflet-interactive"), this.addInteractiveTarget(this._image)), this.getPane().appendChild(this._image), this._reset();
    },
    onRemove: function onRemove() {
      o.DomUtil.remove(this._image), this.options.interactive && this.removeInteractiveTarget(this._image);
    },
    setOpacity: function setOpacity(t) {
      return this.options.opacity = t, this._image && this._updateOpacity(), this;
    },
    setStyle: function setStyle(t) {
      return t.opacity && this.setOpacity(t.opacity), this;
    },
    bringToFront: function bringToFront() {
      return this._map && o.DomUtil.toFront(this._image), this;
    },
    bringToBack: function bringToBack() {
      return this._map && o.DomUtil.toBack(this._image), this;
    },
    setUrl: function setUrl(t) {
      return this._url = t, this._image && (this._image.src = t), this;
    },
    setBounds: function setBounds(t) {
      return this._bounds = t, this._map && this._reset(), this;
    },
    getEvents: function getEvents() {
      var t = {
        zoom: this._reset,
        viewreset: this._reset
      };
      return this._zoomAnimated && (t.zoomanim = this._animateZoom), t;
    },
    getBounds: function getBounds() {
      return this._bounds;
    },
    getElement: function getElement() {
      return this._image;
    },
    _initImage: function _initImage() {
      var t = this._image = o.DomUtil.create("img", "leaflet-image-layer " + (this._zoomAnimated ? "leaflet-zoom-animated" : ""));
      t.onselectstart = o.Util.falseFn, t.onmousemove = o.Util.falseFn, t.onload = o.bind(this.fire, this, "load"), this.options.crossOrigin && (t.crossOrigin = ""), t.src = this._url, t.alt = this.options.alt;
    },
    _animateZoom: function _animateZoom(t) {
      var e = this._map.getZoomScale(t.zoom),
          i = this._map._latLngBoundsToNewLayerBounds(this._bounds, t.zoom, t.center).min;

      o.DomUtil.setTransform(this._image, i, e);
    },
    _reset: function _reset() {
      var t = this._image,
          e = new o.Bounds(this._map.latLngToLayerPoint(this._bounds.getNorthWest()), this._map.latLngToLayerPoint(this._bounds.getSouthEast())),
          i = e.getSize();
      o.DomUtil.setPosition(t, e.min), t.style.width = i.x + "px", t.style.height = i.y + "px";
    },
    _updateOpacity: function _updateOpacity() {
      o.DomUtil.setOpacity(this._image, this.options.opacity);
    }
  }), o.imageOverlay = function (t, e, i) {
    return new o.ImageOverlay(t, e, i);
  }, o.Icon = o.Class.extend({
    initialize: function initialize(t) {
      o.setOptions(this, t);
    },
    createIcon: function createIcon(t) {
      return this._createIcon("icon", t);
    },
    createShadow: function createShadow(t) {
      return this._createIcon("shadow", t);
    },
    _createIcon: function _createIcon(t, e) {
      var i = this._getIconUrl(t);

      if (!i) {
        if ("icon" === t) throw new Error("iconUrl not set in Icon options (see the docs).");
        return null;
      }

      var n = this._createImg(i, e && "IMG" === e.tagName ? e : null);

      return this._setIconStyles(n, t), n;
    },
    _setIconStyles: function _setIconStyles(t, e) {
      var i = this.options,
          n = i[e + "Size"];
      "number" == typeof n && (n = [n, n]);
      var s = o.point(n),
          r = o.point("shadow" === e && i.shadowAnchor || i.iconAnchor || s && s.divideBy(2, !0));
      t.className = "leaflet-marker-" + e + " " + (i.className || ""), r && (t.style.marginLeft = -r.x + "px", t.style.marginTop = -r.y + "px"), s && (t.style.width = s.x + "px", t.style.height = s.y + "px");
    },
    _createImg: function _createImg(t, i) {
      return i = i || e.createElement("img"), i.src = t, i;
    },
    _getIconUrl: function _getIconUrl(t) {
      return o.Browser.retina && this.options[t + "RetinaUrl"] || this.options[t + "Url"];
    }
  }), o.icon = function (t) {
    return new o.Icon(t);
  }, o.Icon.Default = o.Icon.extend({
    options: {
      iconUrl: "marker-icon.png",
      iconRetinaUrl: "marker-icon-2x.png",
      shadowUrl: "marker-shadow.png",
      iconSize: [25, 41],
      iconAnchor: [12, 41],
      popupAnchor: [1, -34],
      tooltipAnchor: [16, -28],
      shadowSize: [41, 41]
    },
    _getIconUrl: function _getIconUrl(t) {
      return o.Icon.Default.imagePath || (o.Icon.Default.imagePath = this._detectIconPath()), (this.options.imagePath || o.Icon.Default.imagePath) + o.Icon.prototype._getIconUrl.call(this, t);
    },
    _detectIconPath: function _detectIconPath() {
      var t = o.DomUtil.create("div", "leaflet-default-icon-path", e.body),
          i = o.DomUtil.getStyle(t, "background-image") || o.DomUtil.getStyle(t, "backgroundImage");
      return e.body.removeChild(t), 0 === i.indexOf("url") ? i.replace(/^url\([\"\']?/, "").replace(/marker-icon\.png[\"\']?\)$/, "") : "";
    }
  }), o.Marker = o.Layer.extend({
    options: {
      icon: new o.Icon.Default(),
      interactive: !0,
      draggable: !1,
      keyboard: !0,
      title: "",
      alt: "",
      zIndexOffset: 0,
      opacity: 1,
      riseOnHover: !1,
      riseOffset: 250,
      pane: "markerPane",
      nonBubblingEvents: ["click", "dblclick", "mouseover", "mouseout", "contextmenu"]
    },
    initialize: function initialize(t, e) {
      o.setOptions(this, e), this._latlng = o.latLng(t);
    },
    onAdd: function onAdd(t) {
      this._zoomAnimated = this._zoomAnimated && t.options.markerZoomAnimation, this._zoomAnimated && t.on("zoomanim", this._animateZoom, this), this._initIcon(), this.update();
    },
    onRemove: function onRemove(t) {
      this.dragging && this.dragging.enabled() && (this.options.draggable = !0, this.dragging.removeHooks()), this._zoomAnimated && t.off("zoomanim", this._animateZoom, this), this._removeIcon(), this._removeShadow();
    },
    getEvents: function getEvents() {
      return {
        zoom: this.update,
        viewreset: this.update
      };
    },
    getLatLng: function getLatLng() {
      return this._latlng;
    },
    setLatLng: function setLatLng(t) {
      var e = this._latlng;
      return this._latlng = o.latLng(t), this.update(), this.fire("move", {
        oldLatLng: e,
        latlng: this._latlng
      });
    },
    setZIndexOffset: function setZIndexOffset(t) {
      return this.options.zIndexOffset = t, this.update();
    },
    setIcon: function setIcon(t) {
      return this.options.icon = t, this._map && (this._initIcon(), this.update()), this._popup && this.bindPopup(this._popup, this._popup.options), this;
    },
    getElement: function getElement() {
      return this._icon;
    },
    update: function update() {
      if (this._icon) {
        var t = this._map.latLngToLayerPoint(this._latlng).round();

        this._setPos(t);
      }

      return this;
    },
    _initIcon: function _initIcon() {
      var t = this.options,
          e = "leaflet-zoom-" + (this._zoomAnimated ? "animated" : "hide"),
          i = t.icon.createIcon(this._icon),
          n = !1;
      i !== this._icon && (this._icon && this._removeIcon(), n = !0, t.title && (i.title = t.title), t.alt && (i.alt = t.alt)), o.DomUtil.addClass(i, e), t.keyboard && (i.tabIndex = "0"), this._icon = i, t.riseOnHover && this.on({
        mouseover: this._bringToFront,
        mouseout: this._resetZIndex
      });
      var s = t.icon.createShadow(this._shadow),
          r = !1;
      s !== this._shadow && (this._removeShadow(), r = !0), s && (o.DomUtil.addClass(s, e), s.alt = ""), this._shadow = s, t.opacity < 1 && this._updateOpacity(), n && this.getPane().appendChild(this._icon), this._initInteraction(), s && r && this.getPane("shadowPane").appendChild(this._shadow);
    },
    _removeIcon: function _removeIcon() {
      this.options.riseOnHover && this.off({
        mouseover: this._bringToFront,
        mouseout: this._resetZIndex
      }), o.DomUtil.remove(this._icon), this.removeInteractiveTarget(this._icon), this._icon = null;
    },
    _removeShadow: function _removeShadow() {
      this._shadow && o.DomUtil.remove(this._shadow), this._shadow = null;
    },
    _setPos: function _setPos(t) {
      o.DomUtil.setPosition(this._icon, t), this._shadow && o.DomUtil.setPosition(this._shadow, t), this._zIndex = t.y + this.options.zIndexOffset, this._resetZIndex();
    },
    _updateZIndex: function _updateZIndex(t) {
      this._icon.style.zIndex = this._zIndex + t;
    },
    _animateZoom: function _animateZoom(t) {
      var e = this._map._latLngToNewLayerPoint(this._latlng, t.zoom, t.center).round();

      this._setPos(e);
    },
    _initInteraction: function _initInteraction() {
      if (this.options.interactive && (o.DomUtil.addClass(this._icon, "leaflet-interactive"), this.addInteractiveTarget(this._icon), o.Handler.MarkerDrag)) {
        var t = this.options.draggable;
        this.dragging && (t = this.dragging.enabled(), this.dragging.disable()), this.dragging = new o.Handler.MarkerDrag(this), t && this.dragging.enable();
      }
    },
    setOpacity: function setOpacity(t) {
      return this.options.opacity = t, this._map && this._updateOpacity(), this;
    },
    _updateOpacity: function _updateOpacity() {
      var t = this.options.opacity;
      o.DomUtil.setOpacity(this._icon, t), this._shadow && o.DomUtil.setOpacity(this._shadow, t);
    },
    _bringToFront: function _bringToFront() {
      this._updateZIndex(this.options.riseOffset);
    },
    _resetZIndex: function _resetZIndex() {
      this._updateZIndex(0);
    },
    _getPopupAnchor: function _getPopupAnchor() {
      return this.options.icon.options.popupAnchor || [0, 0];
    },
    _getTooltipAnchor: function _getTooltipAnchor() {
      return this.options.icon.options.tooltipAnchor || [0, 0];
    }
  }), o.marker = function (t, e) {
    return new o.Marker(t, e);
  }, o.DivIcon = o.Icon.extend({
    options: {
      iconSize: [12, 12],
      html: !1,
      bgPos: null,
      className: "leaflet-div-icon"
    },
    createIcon: function createIcon(t) {
      var i = t && "DIV" === t.tagName ? t : e.createElement("div"),
          n = this.options;

      if (i.innerHTML = n.html !== !1 ? n.html : "", n.bgPos) {
        var s = o.point(n.bgPos);
        i.style.backgroundPosition = -s.x + "px " + -s.y + "px";
      }

      return this._setIconStyles(i, "icon"), i;
    },
    createShadow: function createShadow() {
      return null;
    }
  }), o.divIcon = function (t) {
    return new o.DivIcon(t);
  }, o.DivOverlay = o.Layer.extend({
    options: {
      offset: [0, 7],
      className: "",
      pane: "popupPane"
    },
    initialize: function initialize(t, e) {
      o.setOptions(this, t), this._source = e;
    },
    onAdd: function onAdd(t) {
      this._zoomAnimated = t._zoomAnimated, this._container || this._initLayout(), t._fadeAnimated && o.DomUtil.setOpacity(this._container, 0), clearTimeout(this._removeTimeout), this.getPane().appendChild(this._container), this.update(), t._fadeAnimated && o.DomUtil.setOpacity(this._container, 1), this.bringToFront();
    },
    onRemove: function onRemove(t) {
      t._fadeAnimated ? (o.DomUtil.setOpacity(this._container, 0), this._removeTimeout = setTimeout(o.bind(o.DomUtil.remove, o.DomUtil, this._container), 200)) : o.DomUtil.remove(this._container);
    },
    getLatLng: function getLatLng() {
      return this._latlng;
    },
    setLatLng: function setLatLng(t) {
      return this._latlng = o.latLng(t), this._map && (this._updatePosition(), this._adjustPan()), this;
    },
    getContent: function getContent() {
      return this._content;
    },
    setContent: function setContent(t) {
      return this._content = t, this.update(), this;
    },
    getElement: function getElement() {
      return this._container;
    },
    update: function update() {
      this._map && (this._container.style.visibility = "hidden", this._updateContent(), this._updateLayout(), this._updatePosition(), this._container.style.visibility = "", this._adjustPan());
    },
    getEvents: function getEvents() {
      var t = {
        zoom: this._updatePosition,
        viewreset: this._updatePosition
      };
      return this._zoomAnimated && (t.zoomanim = this._animateZoom), t;
    },
    isOpen: function isOpen() {
      return !!this._map && this._map.hasLayer(this);
    },
    bringToFront: function bringToFront() {
      return this._map && o.DomUtil.toFront(this._container), this;
    },
    bringToBack: function bringToBack() {
      return this._map && o.DomUtil.toBack(this._container), this;
    },
    _updateContent: function _updateContent() {
      if (this._content) {
        var t = this._contentNode,
            e = "function" == typeof this._content ? this._content(this._source || this) : this._content;
        if ("string" == typeof e) t.innerHTML = e;else {
          for (; t.hasChildNodes();) {
            t.removeChild(t.firstChild);
          }

          t.appendChild(e);
        }
        this.fire("contentupdate");
      }
    },
    _updatePosition: function _updatePosition() {
      if (this._map) {
        var t = this._map.latLngToLayerPoint(this._latlng),
            e = o.point(this.options.offset),
            i = this._getAnchor();

        this._zoomAnimated ? o.DomUtil.setPosition(this._container, t.add(i)) : e = e.add(t).add(i);
        var n = this._containerBottom = -e.y,
            s = this._containerLeft = -Math.round(this._containerWidth / 2) + e.x;
        this._container.style.bottom = n + "px", this._container.style.left = s + "px";
      }
    },
    _getAnchor: function _getAnchor() {
      return [0, 0];
    }
  }), o.Popup = o.DivOverlay.extend({
    options: {
      maxWidth: 300,
      minWidth: 50,
      maxHeight: null,
      autoPan: !0,
      autoPanPaddingTopLeft: null,
      autoPanPaddingBottomRight: null,
      autoPanPadding: [5, 5],
      keepInView: !1,
      closeButton: !0,
      autoClose: !0,
      className: ""
    },
    openOn: function openOn(t) {
      return t.openPopup(this), this;
    },
    onAdd: function onAdd(t) {
      o.DivOverlay.prototype.onAdd.call(this, t), t.fire("popupopen", {
        popup: this
      }), this._source && (this._source.fire("popupopen", {
        popup: this
      }, !0), this._source instanceof o.Path || this._source.on("preclick", o.DomEvent.stopPropagation));
    },
    onRemove: function onRemove(t) {
      o.DivOverlay.prototype.onRemove.call(this, t), t.fire("popupclose", {
        popup: this
      }), this._source && (this._source.fire("popupclose", {
        popup: this
      }, !0), this._source instanceof o.Path || this._source.off("preclick", o.DomEvent.stopPropagation));
    },
    getEvents: function getEvents() {
      var t = o.DivOverlay.prototype.getEvents.call(this);
      return ("closeOnClick" in this.options ? this.options.closeOnClick : this._map.options.closePopupOnClick) && (t.preclick = this._close), this.options.keepInView && (t.moveend = this._adjustPan), t;
    },
    _close: function _close() {
      this._map && this._map.closePopup(this);
    },
    _initLayout: function _initLayout() {
      var t = "leaflet-popup",
          e = this._container = o.DomUtil.create("div", t + " " + (this.options.className || "") + " leaflet-zoom-animated");

      if (this.options.closeButton) {
        var i = this._closeButton = o.DomUtil.create("a", t + "-close-button", e);
        i.href = "#close", i.innerHTML = "&#215;", o.DomEvent.on(i, "click", this._onCloseButtonClick, this);
      }

      var n = this._wrapper = o.DomUtil.create("div", t + "-content-wrapper", e);
      this._contentNode = o.DomUtil.create("div", t + "-content", n), o.DomEvent.disableClickPropagation(n).disableScrollPropagation(this._contentNode).on(n, "contextmenu", o.DomEvent.stopPropagation), this._tipContainer = o.DomUtil.create("div", t + "-tip-container", e), this._tip = o.DomUtil.create("div", t + "-tip", this._tipContainer);
    },
    _updateLayout: function _updateLayout() {
      var t = this._contentNode,
          e = t.style;
      e.width = "", e.whiteSpace = "nowrap";
      var i = t.offsetWidth;
      i = Math.min(i, this.options.maxWidth), i = Math.max(i, this.options.minWidth), e.width = i + 1 + "px", e.whiteSpace = "", e.height = "";
      var n = t.offsetHeight,
          s = this.options.maxHeight,
          r = "leaflet-popup-scrolled";
      s && n > s ? (e.height = s + "px", o.DomUtil.addClass(t, r)) : o.DomUtil.removeClass(t, r), this._containerWidth = this._container.offsetWidth;
    },
    _animateZoom: function _animateZoom(t) {
      var e = this._map._latLngToNewLayerPoint(this._latlng, t.zoom, t.center),
          i = this._getAnchor();

      o.DomUtil.setPosition(this._container, e.add(i));
    },
    _adjustPan: function _adjustPan() {
      if (!(!this.options.autoPan || this._map._panAnim && this._map._panAnim._inProgress)) {
        var t = this._map,
            e = parseInt(o.DomUtil.getStyle(this._container, "marginBottom"), 10) || 0,
            i = this._container.offsetHeight + e,
            n = this._containerWidth,
            s = new o.Point(this._containerLeft, -i - this._containerBottom);

        s._add(o.DomUtil.getPosition(this._container));

        var r = t.layerPointToContainerPoint(s),
            a = o.point(this.options.autoPanPadding),
            h = o.point(this.options.autoPanPaddingTopLeft || a),
            l = o.point(this.options.autoPanPaddingBottomRight || a),
            u = t.getSize(),
            c = 0,
            d = 0;
        r.x + n + l.x > u.x && (c = r.x + n - u.x + l.x), r.x - c - h.x < 0 && (c = r.x - h.x), r.y + i + l.y > u.y && (d = r.y + i - u.y + l.y), r.y - d - h.y < 0 && (d = r.y - h.y), (c || d) && t.fire("autopanstart").panBy([c, d]);
      }
    },
    _onCloseButtonClick: function _onCloseButtonClick(t) {
      this._close(), o.DomEvent.stop(t);
    },
    _getAnchor: function _getAnchor() {
      return o.point(this._source && this._source._getPopupAnchor ? this._source._getPopupAnchor() : [0, 0]);
    }
  }), o.popup = function (t, e) {
    return new o.Popup(t, e);
  }, o.Map.mergeOptions({
    closePopupOnClick: !0
  }), o.Map.include({
    openPopup: function openPopup(t, e, i) {
      return t instanceof o.Popup || (t = new o.Popup(i).setContent(t)), e && t.setLatLng(e), this.hasLayer(t) ? this : (this._popup && this._popup.options.autoClose && this.closePopup(), this._popup = t, this.addLayer(t));
    },
    closePopup: function closePopup(t) {
      return t && t !== this._popup || (t = this._popup, this._popup = null), t && this.removeLayer(t), this;
    }
  }), o.Layer.include({
    bindPopup: function bindPopup(t, e) {
      return t instanceof o.Popup ? (o.setOptions(t, e), this._popup = t, t._source = this) : (this._popup && !e || (this._popup = new o.Popup(e, this)), this._popup.setContent(t)), this._popupHandlersAdded || (this.on({
        click: this._openPopup,
        remove: this.closePopup,
        move: this._movePopup
      }), this._popupHandlersAdded = !0), this;
    },
    unbindPopup: function unbindPopup() {
      return this._popup && (this.off({
        click: this._openPopup,
        remove: this.closePopup,
        move: this._movePopup
      }), this._popupHandlersAdded = !1, this._popup = null), this;
    },
    openPopup: function openPopup(t, e) {
      if (t instanceof o.Layer || (e = t, t = this), t instanceof o.FeatureGroup) for (var i in this._layers) {
        t = this._layers[i];
        break;
      }
      return e || (e = t.getCenter ? t.getCenter() : t.getLatLng()), this._popup && this._map && (this._popup._source = t, this._popup.update(), this._map.openPopup(this._popup, e)), this;
    },
    closePopup: function closePopup() {
      return this._popup && this._popup._close(), this;
    },
    togglePopup: function togglePopup(t) {
      return this._popup && (this._popup._map ? this.closePopup() : this.openPopup(t)), this;
    },
    isPopupOpen: function isPopupOpen() {
      return !!this._popup && this._popup.isOpen();
    },
    setPopupContent: function setPopupContent(t) {
      return this._popup && this._popup.setContent(t), this;
    },
    getPopup: function getPopup() {
      return this._popup;
    },
    _openPopup: function _openPopup(t) {
      var e = t.layer || t.target;
      if (this._popup && this._map) return o.DomEvent.stop(t), e instanceof o.Path ? void this.openPopup(t.layer || t.target, t.latlng) : void (this._map.hasLayer(this._popup) && this._popup._source === e ? this.closePopup() : this.openPopup(e, t.latlng));
    },
    _movePopup: function _movePopup(t) {
      this._popup.setLatLng(t.latlng);
    }
  }), o.Tooltip = o.DivOverlay.extend({
    options: {
      pane: "tooltipPane",
      offset: [0, 0],
      direction: "auto",
      permanent: !1,
      sticky: !1,
      interactive: !1,
      opacity: .9
    },
    onAdd: function onAdd(t) {
      o.DivOverlay.prototype.onAdd.call(this, t), this.setOpacity(this.options.opacity), t.fire("tooltipopen", {
        tooltip: this
      }), this._source && this._source.fire("tooltipopen", {
        tooltip: this
      }, !0);
    },
    onRemove: function onRemove(t) {
      o.DivOverlay.prototype.onRemove.call(this, t), t.fire("tooltipclose", {
        tooltip: this
      }), this._source && this._source.fire("tooltipclose", {
        tooltip: this
      }, !0);
    },
    getEvents: function getEvents() {
      var t = o.DivOverlay.prototype.getEvents.call(this);
      return o.Browser.touch && !this.options.permanent && (t.preclick = this._close), t;
    },
    _close: function _close() {
      this._map && this._map.closeTooltip(this);
    },
    _initLayout: function _initLayout() {
      var t = "leaflet-tooltip",
          e = t + " " + (this.options.className || "") + " leaflet-zoom-" + (this._zoomAnimated ? "animated" : "hide");
      this._contentNode = this._container = o.DomUtil.create("div", e);
    },
    _updateLayout: function _updateLayout() {},
    _adjustPan: function _adjustPan() {},
    _setPosition: function _setPosition(t) {
      var e = this._map,
          i = this._container,
          n = e.latLngToContainerPoint(e.getCenter()),
          s = e.layerPointToContainerPoint(t),
          r = this.options.direction,
          a = i.offsetWidth,
          h = i.offsetHeight,
          l = o.point(this.options.offset),
          u = this._getAnchor();

      "top" === r ? t = t.add(o.point(-a / 2 + l.x, -h + l.y + u.y, !0)) : "bottom" === r ? t = t.subtract(o.point(a / 2 - l.x, -l.y, !0)) : "center" === r ? t = t.subtract(o.point(a / 2 + l.x, h / 2 - u.y + l.y, !0)) : "right" === r || "auto" === r && s.x < n.x ? (r = "right", t = t.add(o.point(l.x + u.x, u.y - h / 2 + l.y, !0))) : (r = "left", t = t.subtract(o.point(a + u.x - l.x, h / 2 - u.y - l.y, !0))), o.DomUtil.removeClass(i, "leaflet-tooltip-right"), o.DomUtil.removeClass(i, "leaflet-tooltip-left"), o.DomUtil.removeClass(i, "leaflet-tooltip-top"), o.DomUtil.removeClass(i, "leaflet-tooltip-bottom"), o.DomUtil.addClass(i, "leaflet-tooltip-" + r), o.DomUtil.setPosition(i, t);
    },
    _updatePosition: function _updatePosition() {
      var t = this._map.latLngToLayerPoint(this._latlng);

      this._setPosition(t);
    },
    setOpacity: function setOpacity(t) {
      this.options.opacity = t, this._container && o.DomUtil.setOpacity(this._container, t);
    },
    _animateZoom: function _animateZoom(t) {
      var e = this._map._latLngToNewLayerPoint(this._latlng, t.zoom, t.center);

      this._setPosition(e);
    },
    _getAnchor: function _getAnchor() {
      return o.point(this._source && this._source._getTooltipAnchor && !this.options.sticky ? this._source._getTooltipAnchor() : [0, 0]);
    }
  }), o.tooltip = function (t, e) {
    return new o.Tooltip(t, e);
  }, o.Map.include({
    openTooltip: function openTooltip(t, e, i) {
      return t instanceof o.Tooltip || (t = new o.Tooltip(i).setContent(t)), e && t.setLatLng(e), this.hasLayer(t) ? this : this.addLayer(t);
    },
    closeTooltip: function closeTooltip(t) {
      return t && this.removeLayer(t), this;
    }
  }), o.Layer.include({
    bindTooltip: function bindTooltip(t, e) {
      return t instanceof o.Tooltip ? (o.setOptions(t, e), this._tooltip = t, t._source = this) : (this._tooltip && !e || (this._tooltip = o.tooltip(e, this)), this._tooltip.setContent(t)), this._initTooltipInteractions(), this._tooltip.options.permanent && this._map && this._map.hasLayer(this) && this.openTooltip(), this;
    },
    unbindTooltip: function unbindTooltip() {
      return this._tooltip && (this._initTooltipInteractions(!0), this.closeTooltip(), this._tooltip = null), this;
    },
    _initTooltipInteractions: function _initTooltipInteractions(t) {
      if (t || !this._tooltipHandlersAdded) {
        var e = t ? "off" : "on",
            i = {
          remove: this.closeTooltip,
          move: this._moveTooltip
        };
        this._tooltip.options.permanent ? i.add = this._openTooltip : (i.mouseover = this._openTooltip, i.mouseout = this.closeTooltip, this._tooltip.options.sticky && (i.mousemove = this._moveTooltip), o.Browser.touch && (i.click = this._openTooltip)), this[e](i), this._tooltipHandlersAdded = !t;
      }
    },
    openTooltip: function openTooltip(t, e) {
      if (t instanceof o.Layer || (e = t, t = this), t instanceof o.FeatureGroup) for (var i in this._layers) {
        t = this._layers[i];
        break;
      }
      return e || (e = t.getCenter ? t.getCenter() : t.getLatLng()), this._tooltip && this._map && (this._tooltip._source = t, this._tooltip.update(), this._map.openTooltip(this._tooltip, e), this._tooltip.options.interactive && this._tooltip._container && (o.DomUtil.addClass(this._tooltip._container, "leaflet-clickable"), this.addInteractiveTarget(this._tooltip._container))), this;
    },
    closeTooltip: function closeTooltip() {
      return this._tooltip && (this._tooltip._close(), this._tooltip.options.interactive && this._tooltip._container && (o.DomUtil.removeClass(this._tooltip._container, "leaflet-clickable"), this.removeInteractiveTarget(this._tooltip._container))), this;
    },
    toggleTooltip: function toggleTooltip(t) {
      return this._tooltip && (this._tooltip._map ? this.closeTooltip() : this.openTooltip(t)), this;
    },
    isTooltipOpen: function isTooltipOpen() {
      return this._tooltip.isOpen();
    },
    setTooltipContent: function setTooltipContent(t) {
      return this._tooltip && this._tooltip.setContent(t), this;
    },
    getTooltip: function getTooltip() {
      return this._tooltip;
    },
    _openTooltip: function _openTooltip(t) {
      var e = t.layer || t.target;
      this._tooltip && this._map && this.openTooltip(e, this._tooltip.options.sticky ? t.latlng : i);
    },
    _moveTooltip: function _moveTooltip(t) {
      var e,
          i,
          n = t.latlng;
      this._tooltip.options.sticky && t.originalEvent && (e = this._map.mouseEventToContainerPoint(t.originalEvent), i = this._map.containerPointToLayerPoint(e), n = this._map.layerPointToLatLng(i)), this._tooltip.setLatLng(n);
    }
  }), o.LayerGroup = o.Layer.extend({
    initialize: function initialize(t) {
      this._layers = {};
      var e, i;
      if (t) for (e = 0, i = t.length; e < i; e++) {
        this.addLayer(t[e]);
      }
    },
    addLayer: function addLayer(t) {
      var e = this.getLayerId(t);
      return this._layers[e] = t, this._map && this._map.addLayer(t), this;
    },
    removeLayer: function removeLayer(t) {
      var e = t in this._layers ? t : this.getLayerId(t);
      return this._map && this._layers[e] && this._map.removeLayer(this._layers[e]), delete this._layers[e], this;
    },
    hasLayer: function hasLayer(t) {
      return !!t && (t in this._layers || this.getLayerId(t) in this._layers);
    },
    clearLayers: function clearLayers() {
      for (var t in this._layers) {
        this.removeLayer(this._layers[t]);
      }

      return this;
    },
    invoke: function invoke(t) {
      var e,
          i,
          n = Array.prototype.slice.call(arguments, 1);

      for (e in this._layers) {
        i = this._layers[e], i[t] && i[t].apply(i, n);
      }

      return this;
    },
    onAdd: function onAdd(t) {
      for (var e in this._layers) {
        t.addLayer(this._layers[e]);
      }
    },
    onRemove: function onRemove(t) {
      for (var e in this._layers) {
        t.removeLayer(this._layers[e]);
      }
    },
    eachLayer: function eachLayer(t, e) {
      for (var i in this._layers) {
        t.call(e, this._layers[i]);
      }

      return this;
    },
    getLayer: function getLayer(t) {
      return this._layers[t];
    },
    getLayers: function getLayers() {
      var t = [];

      for (var e in this._layers) {
        t.push(this._layers[e]);
      }

      return t;
    },
    setZIndex: function setZIndex(t) {
      return this.invoke("setZIndex", t);
    },
    getLayerId: function getLayerId(t) {
      return o.stamp(t);
    }
  }), o.layerGroup = function (t) {
    return new o.LayerGroup(t);
  }, o.FeatureGroup = o.LayerGroup.extend({
    addLayer: function addLayer(t) {
      return this.hasLayer(t) ? this : (t.addEventParent(this), o.LayerGroup.prototype.addLayer.call(this, t), this.fire("layeradd", {
        layer: t
      }));
    },
    removeLayer: function removeLayer(t) {
      return this.hasLayer(t) ? (t in this._layers && (t = this._layers[t]), t.removeEventParent(this), o.LayerGroup.prototype.removeLayer.call(this, t), this.fire("layerremove", {
        layer: t
      })) : this;
    },
    setStyle: function setStyle(t) {
      return this.invoke("setStyle", t);
    },
    bringToFront: function bringToFront() {
      return this.invoke("bringToFront");
    },
    bringToBack: function bringToBack() {
      return this.invoke("bringToBack");
    },
    getBounds: function getBounds() {
      var t = new o.LatLngBounds();

      for (var e in this._layers) {
        var i = this._layers[e];
        t.extend(i.getBounds ? i.getBounds() : i.getLatLng());
      }

      return t;
    }
  }), o.featureGroup = function (t) {
    return new o.FeatureGroup(t);
  }, o.Renderer = o.Layer.extend({
    options: {
      padding: .1
    },
    initialize: function initialize(t) {
      o.setOptions(this, t), o.stamp(this), this._layers = this._layers || {};
    },
    onAdd: function onAdd() {
      this._container || (this._initContainer(), this._zoomAnimated && o.DomUtil.addClass(this._container, "leaflet-zoom-animated")), this.getPane().appendChild(this._container), this._update(), this.on("update", this._updatePaths, this);
    },
    onRemove: function onRemove() {
      o.DomUtil.remove(this._container), this.off("update", this._updatePaths, this);
    },
    getEvents: function getEvents() {
      var t = {
        viewreset: this._reset,
        zoom: this._onZoom,
        moveend: this._update,
        zoomend: this._onZoomEnd
      };
      return this._zoomAnimated && (t.zoomanim = this._onAnimZoom), t;
    },
    _onAnimZoom: function _onAnimZoom(t) {
      this._updateTransform(t.center, t.zoom);
    },
    _onZoom: function _onZoom() {
      this._updateTransform(this._map.getCenter(), this._map.getZoom());
    },
    _updateTransform: function _updateTransform(t, e) {
      var i = this._map.getZoomScale(e, this._zoom),
          n = o.DomUtil.getPosition(this._container),
          s = this._map.getSize().multiplyBy(.5 + this.options.padding),
          r = this._map.project(this._center, e),
          a = this._map.project(t, e),
          h = a.subtract(r),
          l = s.multiplyBy(-i).add(n).add(s).subtract(h);

      o.Browser.any3d ? o.DomUtil.setTransform(this._container, l, i) : o.DomUtil.setPosition(this._container, l);
    },
    _reset: function _reset() {
      this._update(), this._updateTransform(this._center, this._zoom);

      for (var t in this._layers) {
        this._layers[t]._reset();
      }
    },
    _onZoomEnd: function _onZoomEnd() {
      for (var t in this._layers) {
        this._layers[t]._project();
      }
    },
    _updatePaths: function _updatePaths() {
      for (var t in this._layers) {
        this._layers[t]._update();
      }
    },
    _update: function _update() {
      var t = this.options.padding,
          e = this._map.getSize(),
          i = this._map.containerPointToLayerPoint(e.multiplyBy(-t)).round();

      this._bounds = new o.Bounds(i, i.add(e.multiplyBy(1 + 2 * t)).round()), this._center = this._map.getCenter(), this._zoom = this._map.getZoom();
    }
  }), o.Map.include({
    getRenderer: function getRenderer(t) {
      var e = t.options.renderer || this._getPaneRenderer(t.options.pane) || this.options.renderer || this._renderer;

      return e || (e = this._renderer = this.options.preferCanvas && o.canvas() || o.svg()), this.hasLayer(e) || this.addLayer(e), e;
    },
    _getPaneRenderer: function _getPaneRenderer(t) {
      if ("overlayPane" === t || t === i) return !1;
      var e = this._paneRenderers[t];
      return e === i && (e = o.SVG && o.svg({
        pane: t
      }) || o.Canvas && o.canvas({
        pane: t
      }), this._paneRenderers[t] = e), e;
    }
  }), o.Path = o.Layer.extend({
    options: {
      stroke: !0,
      color: "#3388ff",
      weight: 3,
      opacity: 1,
      lineCap: "round",
      lineJoin: "round",
      dashArray: null,
      dashOffset: null,
      fill: !1,
      fillColor: null,
      fillOpacity: .2,
      fillRule: "evenodd",
      interactive: !0
    },
    beforeAdd: function beforeAdd(t) {
      this._renderer = t.getRenderer(this);
    },
    onAdd: function onAdd() {
      this._renderer._initPath(this), this._reset(), this._renderer._addPath(this);
    },
    onRemove: function onRemove() {
      this._renderer._removePath(this);
    },
    redraw: function redraw() {
      return this._map && this._renderer._updatePath(this), this;
    },
    setStyle: function setStyle(t) {
      return o.setOptions(this, t), this._renderer && this._renderer._updateStyle(this), this;
    },
    bringToFront: function bringToFront() {
      return this._renderer && this._renderer._bringToFront(this), this;
    },
    bringToBack: function bringToBack() {
      return this._renderer && this._renderer._bringToBack(this), this;
    },
    getElement: function getElement() {
      return this._path;
    },
    _reset: function _reset() {
      this._project(), this._update();
    },
    _clickTolerance: function _clickTolerance() {
      return (this.options.stroke ? this.options.weight / 2 : 0) + (o.Browser.touch ? 10 : 0);
    }
  }), o.LineUtil = {
    simplify: function simplify(t, e) {
      if (!e || !t.length) return t.slice();
      var i = e * e;
      return t = this._reducePoints(t, i), t = this._simplifyDP(t, i);
    },
    pointToSegmentDistance: function pointToSegmentDistance(t, e, i) {
      return Math.sqrt(this._sqClosestPointOnSegment(t, e, i, !0));
    },
    closestPointOnSegment: function closestPointOnSegment(t, e, i) {
      return this._sqClosestPointOnSegment(t, e, i);
    },
    _simplifyDP: function _simplifyDP(t, e) {
      var n = t.length,
          o = (typeof Uint8Array === "undefined" ? "undefined" : _typeof(Uint8Array)) != i + "" ? Uint8Array : Array,
          s = new o(n);
      s[0] = s[n - 1] = 1, this._simplifyDPStep(t, s, e, 0, n - 1);
      var r,
          a = [];

      for (r = 0; r < n; r++) {
        s[r] && a.push(t[r]);
      }

      return a;
    },
    _simplifyDPStep: function _simplifyDPStep(t, e, i, n, o) {
      var s,
          r,
          a,
          h = 0;

      for (r = n + 1; r <= o - 1; r++) {
        a = this._sqClosestPointOnSegment(t[r], t[n], t[o], !0), a > h && (s = r, h = a);
      }

      h > i && (e[s] = 1, this._simplifyDPStep(t, e, i, n, s), this._simplifyDPStep(t, e, i, s, o));
    },
    _reducePoints: function _reducePoints(t, e) {
      for (var i = [t[0]], n = 1, o = 0, s = t.length; n < s; n++) {
        this._sqDist(t[n], t[o]) > e && (i.push(t[n]), o = n);
      }

      return o < s - 1 && i.push(t[s - 1]), i;
    },
    clipSegment: function clipSegment(t, e, i, n, o) {
      var s,
          r,
          a,
          h = n ? this._lastCode : this._getBitCode(t, i),
          l = this._getBitCode(e, i);

      for (this._lastCode = l;;) {
        if (!(h | l)) return [t, e];
        if (h & l) return !1;
        s = h || l, r = this._getEdgeIntersection(t, e, s, i, o), a = this._getBitCode(r, i), s === h ? (t = r, h = a) : (e = r, l = a);
      }
    },
    _getEdgeIntersection: function _getEdgeIntersection(t, e, i, n, s) {
      var r,
          a,
          h = e.x - t.x,
          l = e.y - t.y,
          u = n.min,
          c = n.max;
      return 8 & i ? (r = t.x + h * (c.y - t.y) / l, a = c.y) : 4 & i ? (r = t.x + h * (u.y - t.y) / l, a = u.y) : 2 & i ? (r = c.x, a = t.y + l * (c.x - t.x) / h) : 1 & i && (r = u.x, a = t.y + l * (u.x - t.x) / h), new o.Point(r, a, s);
    },
    _getBitCode: function _getBitCode(t, e) {
      var i = 0;
      return t.x < e.min.x ? i |= 1 : t.x > e.max.x && (i |= 2), t.y < e.min.y ? i |= 4 : t.y > e.max.y && (i |= 8), i;
    },
    _sqDist: function _sqDist(t, e) {
      var i = e.x - t.x,
          n = e.y - t.y;
      return i * i + n * n;
    },
    _sqClosestPointOnSegment: function _sqClosestPointOnSegment(t, e, i, n) {
      var s,
          r = e.x,
          a = e.y,
          h = i.x - r,
          l = i.y - a,
          u = h * h + l * l;
      return u > 0 && (s = ((t.x - r) * h + (t.y - a) * l) / u, s > 1 ? (r = i.x, a = i.y) : s > 0 && (r += h * s, a += l * s)), h = t.x - r, l = t.y - a, n ? h * h + l * l : new o.Point(r, a);
    }
  }, o.Polyline = o.Path.extend({
    options: {
      smoothFactor: 1,
      noClip: !1
    },
    initialize: function initialize(t, e) {
      o.setOptions(this, e), this._setLatLngs(t);
    },
    getLatLngs: function getLatLngs() {
      return this._latlngs;
    },
    setLatLngs: function setLatLngs(t) {
      return this._setLatLngs(t), this.redraw();
    },
    isEmpty: function isEmpty() {
      return !this._latlngs.length;
    },
    closestLayerPoint: function closestLayerPoint(t) {
      for (var e, i, n = 1 / 0, s = null, r = o.LineUtil._sqClosestPointOnSegment, a = 0, h = this._parts.length; a < h; a++) {
        for (var l = this._parts[a], u = 1, c = l.length; u < c; u++) {
          e = l[u - 1], i = l[u];
          var d = r(t, e, i, !0);
          d < n && (n = d, s = r(t, e, i));
        }
      }

      return s && (s.distance = Math.sqrt(n)), s;
    },
    getCenter: function getCenter() {
      if (!this._map) throw new Error("Must add layer to map before using getCenter()");
      var t,
          e,
          i,
          n,
          o,
          s,
          r,
          a = this._rings[0],
          h = a.length;
      if (!h) return null;

      for (t = 0, e = 0; t < h - 1; t++) {
        e += a[t].distanceTo(a[t + 1]) / 2;
      }

      if (0 === e) return this._map.layerPointToLatLng(a[0]);

      for (t = 0, n = 0; t < h - 1; t++) {
        if (o = a[t], s = a[t + 1], i = o.distanceTo(s), n += i, n > e) return r = (n - e) / i, this._map.layerPointToLatLng([s.x - r * (s.x - o.x), s.y - r * (s.y - o.y)]);
      }
    },
    getBounds: function getBounds() {
      return this._bounds;
    },
    addLatLng: function addLatLng(t, e) {
      return e = e || this._defaultShape(), t = o.latLng(t), e.push(t), this._bounds.extend(t), this.redraw();
    },
    _setLatLngs: function _setLatLngs(t) {
      this._bounds = new o.LatLngBounds(), this._latlngs = this._convertLatLngs(t);
    },
    _defaultShape: function _defaultShape() {
      return o.Polyline._flat(this._latlngs) ? this._latlngs : this._latlngs[0];
    },
    _convertLatLngs: function _convertLatLngs(t) {
      for (var e = [], i = o.Polyline._flat(t), n = 0, s = t.length; n < s; n++) {
        i ? (e[n] = o.latLng(t[n]), this._bounds.extend(e[n])) : e[n] = this._convertLatLngs(t[n]);
      }

      return e;
    },
    _project: function _project() {
      var t = new o.Bounds();
      this._rings = [], this._projectLatlngs(this._latlngs, this._rings, t);

      var e = this._clickTolerance(),
          i = new o.Point(e, e);

      this._bounds.isValid() && t.isValid() && (t.min._subtract(i), t.max._add(i), this._pxBounds = t);
    },
    _projectLatlngs: function _projectLatlngs(t, e, i) {
      var n,
          s,
          r = t[0] instanceof o.LatLng,
          a = t.length;

      if (r) {
        for (s = [], n = 0; n < a; n++) {
          s[n] = this._map.latLngToLayerPoint(t[n]), i.extend(s[n]);
        }

        e.push(s);
      } else for (n = 0; n < a; n++) {
        this._projectLatlngs(t[n], e, i);
      }
    },
    _clipPoints: function _clipPoints() {
      var t = this._renderer._bounds;

      if (this._parts = [], this._pxBounds && this._pxBounds.intersects(t)) {
        if (this.options.noClip) return void (this._parts = this._rings);
        var e,
            i,
            n,
            s,
            r,
            a,
            h,
            l = this._parts;

        for (e = 0, n = 0, s = this._rings.length; e < s; e++) {
          for (h = this._rings[e], i = 0, r = h.length; i < r - 1; i++) {
            a = o.LineUtil.clipSegment(h[i], h[i + 1], t, i, !0), a && (l[n] = l[n] || [], l[n].push(a[0]), a[1] === h[i + 1] && i !== r - 2 || (l[n].push(a[1]), n++));
          }
        }
      }
    },
    _simplifyPoints: function _simplifyPoints() {
      for (var t = this._parts, e = this.options.smoothFactor, i = 0, n = t.length; i < n; i++) {
        t[i] = o.LineUtil.simplify(t[i], e);
      }
    },
    _update: function _update() {
      this._map && (this._clipPoints(), this._simplifyPoints(), this._updatePath());
    },
    _updatePath: function _updatePath() {
      this._renderer._updatePoly(this);
    }
  }), o.polyline = function (t, e) {
    return new o.Polyline(t, e);
  }, o.Polyline._flat = function (t) {
    return !o.Util.isArray(t[0]) || "object" != _typeof(t[0][0]) && "undefined" != typeof t[0][0];
  }, o.PolyUtil = {}, o.PolyUtil.clipPolygon = function (t, e, i) {
    var n,
        s,
        r,
        a,
        h,
        l,
        u,
        c,
        d,
        _ = [1, 4, 2, 8],
        m = o.LineUtil;

    for (s = 0, u = t.length; s < u; s++) {
      t[s]._code = m._getBitCode(t[s], e);
    }

    for (a = 0; a < 4; a++) {
      for (c = _[a], n = [], s = 0, u = t.length, r = u - 1; s < u; r = s++) {
        h = t[s], l = t[r], h._code & c ? l._code & c || (d = m._getEdgeIntersection(l, h, c, e, i), d._code = m._getBitCode(d, e), n.push(d)) : (l._code & c && (d = m._getEdgeIntersection(l, h, c, e, i), d._code = m._getBitCode(d, e), n.push(d)), n.push(h));
      }

      t = n;
    }

    return t;
  }, o.Polygon = o.Polyline.extend({
    options: {
      fill: !0
    },
    isEmpty: function isEmpty() {
      return !this._latlngs.length || !this._latlngs[0].length;
    },
    getCenter: function getCenter() {
      if (!this._map) throw new Error("Must add layer to map before using getCenter()");
      var t,
          e,
          i,
          n,
          o,
          s,
          r,
          a,
          h,
          l = this._rings[0],
          u = l.length;
      if (!u) return null;

      for (s = r = a = 0, t = 0, e = u - 1; t < u; e = t++) {
        i = l[t], n = l[e], o = i.y * n.x - n.y * i.x, r += (i.x + n.x) * o, a += (i.y + n.y) * o, s += 3 * o;
      }

      return h = 0 === s ? l[0] : [r / s, a / s], this._map.layerPointToLatLng(h);
    },
    _convertLatLngs: function _convertLatLngs(t) {
      var e = o.Polyline.prototype._convertLatLngs.call(this, t),
          i = e.length;

      return i >= 2 && e[0] instanceof o.LatLng && e[0].equals(e[i - 1]) && e.pop(), e;
    },
    _setLatLngs: function _setLatLngs(t) {
      o.Polyline.prototype._setLatLngs.call(this, t), o.Polyline._flat(this._latlngs) && (this._latlngs = [this._latlngs]);
    },
    _defaultShape: function _defaultShape() {
      return o.Polyline._flat(this._latlngs[0]) ? this._latlngs[0] : this._latlngs[0][0];
    },
    _clipPoints: function _clipPoints() {
      var t = this._renderer._bounds,
          e = this.options.weight,
          i = new o.Point(e, e);

      if (t = new o.Bounds(t.min.subtract(i), t.max.add(i)), this._parts = [], this._pxBounds && this._pxBounds.intersects(t)) {
        if (this.options.noClip) return void (this._parts = this._rings);

        for (var n, s = 0, r = this._rings.length; s < r; s++) {
          n = o.PolyUtil.clipPolygon(this._rings[s], t, !0), n.length && this._parts.push(n);
        }
      }
    },
    _updatePath: function _updatePath() {
      this._renderer._updatePoly(this, !0);
    }
  }), o.polygon = function (t, e) {
    return new o.Polygon(t, e);
  }, o.Rectangle = o.Polygon.extend({
    initialize: function initialize(t, e) {
      o.Polygon.prototype.initialize.call(this, this._boundsToLatLngs(t), e);
    },
    setBounds: function setBounds(t) {
      return this.setLatLngs(this._boundsToLatLngs(t));
    },
    _boundsToLatLngs: function _boundsToLatLngs(t) {
      return t = o.latLngBounds(t), [t.getSouthWest(), t.getNorthWest(), t.getNorthEast(), t.getSouthEast()];
    }
  }), o.rectangle = function (t, e) {
    return new o.Rectangle(t, e);
  }, o.CircleMarker = o.Path.extend({
    options: {
      fill: !0,
      radius: 10
    },
    initialize: function initialize(t, e) {
      o.setOptions(this, e), this._latlng = o.latLng(t), this._radius = this.options.radius;
    },
    setLatLng: function setLatLng(t) {
      return this._latlng = o.latLng(t), this.redraw(), this.fire("move", {
        latlng: this._latlng
      });
    },
    getLatLng: function getLatLng() {
      return this._latlng;
    },
    setRadius: function setRadius(t) {
      return this.options.radius = this._radius = t, this.redraw();
    },
    getRadius: function getRadius() {
      return this._radius;
    },
    setStyle: function setStyle(t) {
      var e = t && t.radius || this._radius;
      return o.Path.prototype.setStyle.call(this, t), this.setRadius(e), this;
    },
    _project: function _project() {
      this._point = this._map.latLngToLayerPoint(this._latlng), this._updateBounds();
    },
    _updateBounds: function _updateBounds() {
      var t = this._radius,
          e = this._radiusY || t,
          i = this._clickTolerance(),
          n = [t + i, e + i];

      this._pxBounds = new o.Bounds(this._point.subtract(n), this._point.add(n));
    },
    _update: function _update() {
      this._map && this._updatePath();
    },
    _updatePath: function _updatePath() {
      this._renderer._updateCircle(this);
    },
    _empty: function _empty() {
      return this._radius && !this._renderer._bounds.intersects(this._pxBounds);
    }
  }), o.circleMarker = function (t, e) {
    return new o.CircleMarker(t, e);
  }, o.Circle = o.CircleMarker.extend({
    initialize: function initialize(t, e, i) {
      if ("number" == typeof e && (e = o.extend({}, i, {
        radius: e
      })), o.setOptions(this, e), this._latlng = o.latLng(t), isNaN(this.options.radius)) throw new Error("Circle radius cannot be NaN");
      this._mRadius = this.options.radius;
    },
    setRadius: function setRadius(t) {
      return this._mRadius = t, this.redraw();
    },
    getRadius: function getRadius() {
      return this._mRadius;
    },
    getBounds: function getBounds() {
      var t = [this._radius, this._radiusY || this._radius];
      return new o.LatLngBounds(this._map.layerPointToLatLng(this._point.subtract(t)), this._map.layerPointToLatLng(this._point.add(t)));
    },
    setStyle: o.Path.prototype.setStyle,
    _project: function _project() {
      var t = this._latlng.lng,
          e = this._latlng.lat,
          i = this._map,
          n = i.options.crs;

      if (n.distance === o.CRS.Earth.distance) {
        var s = Math.PI / 180,
            r = this._mRadius / o.CRS.Earth.R / s,
            a = i.project([e + r, t]),
            h = i.project([e - r, t]),
            l = a.add(h).divideBy(2),
            u = i.unproject(l).lat,
            c = Math.acos((Math.cos(r * s) - Math.sin(e * s) * Math.sin(u * s)) / (Math.cos(e * s) * Math.cos(u * s))) / s;
        (isNaN(c) || 0 === c) && (c = r / Math.cos(Math.PI / 180 * e)), this._point = l.subtract(i.getPixelOrigin()), this._radius = isNaN(c) ? 0 : Math.max(Math.round(l.x - i.project([u, t - c]).x), 1), this._radiusY = Math.max(Math.round(l.y - a.y), 1);
      } else {
        var d = n.unproject(n.project(this._latlng).subtract([this._mRadius, 0]));
        this._point = i.latLngToLayerPoint(this._latlng), this._radius = this._point.x - i.latLngToLayerPoint(d).x;
      }

      this._updateBounds();
    }
  }), o.circle = function (t, e, i) {
    return new o.Circle(t, e, i);
  }, o.SVG = o.Renderer.extend({
    getEvents: function getEvents() {
      var t = o.Renderer.prototype.getEvents.call(this);
      return t.zoomstart = this._onZoomStart, t;
    },
    _initContainer: function _initContainer() {
      this._container = o.SVG.create("svg"), this._container.setAttribute("pointer-events", "none"), this._rootGroup = o.SVG.create("g"), this._container.appendChild(this._rootGroup);
    },
    _onZoomStart: function _onZoomStart() {
      this._update();
    },
    _update: function _update() {
      if (!this._map._animatingZoom || !this._bounds) {
        o.Renderer.prototype._update.call(this);

        var t = this._bounds,
            e = t.getSize(),
            i = this._container;
        this._svgSize && this._svgSize.equals(e) || (this._svgSize = e, i.setAttribute("width", e.x), i.setAttribute("height", e.y)), o.DomUtil.setPosition(i, t.min), i.setAttribute("viewBox", [t.min.x, t.min.y, e.x, e.y].join(" ")), this.fire("update");
      }
    },
    _initPath: function _initPath(t) {
      var e = t._path = o.SVG.create("path");
      t.options.className && o.DomUtil.addClass(e, t.options.className), t.options.interactive && o.DomUtil.addClass(e, "leaflet-interactive"), this._updateStyle(t), this._layers[o.stamp(t)] = t;
    },
    _addPath: function _addPath(t) {
      this._rootGroup.appendChild(t._path), t.addInteractiveTarget(t._path);
    },
    _removePath: function _removePath(t) {
      o.DomUtil.remove(t._path), t.removeInteractiveTarget(t._path), delete this._layers[o.stamp(t)];
    },
    _updatePath: function _updatePath(t) {
      t._project(), t._update();
    },
    _updateStyle: function _updateStyle(t) {
      var e = t._path,
          i = t.options;
      e && (i.stroke ? (e.setAttribute("stroke", i.color), e.setAttribute("stroke-opacity", i.opacity), e.setAttribute("stroke-width", i.weight), e.setAttribute("stroke-linecap", i.lineCap), e.setAttribute("stroke-linejoin", i.lineJoin), i.dashArray ? e.setAttribute("stroke-dasharray", i.dashArray) : e.removeAttribute("stroke-dasharray"), i.dashOffset ? e.setAttribute("stroke-dashoffset", i.dashOffset) : e.removeAttribute("stroke-dashoffset")) : e.setAttribute("stroke", "none"), i.fill ? (e.setAttribute("fill", i.fillColor || i.color), e.setAttribute("fill-opacity", i.fillOpacity), e.setAttribute("fill-rule", i.fillRule || "evenodd")) : e.setAttribute("fill", "none"));
    },
    _updatePoly: function _updatePoly(t, e) {
      this._setPath(t, o.SVG.pointsToPath(t._parts, e));
    },
    _updateCircle: function _updateCircle(t) {
      var e = t._point,
          i = t._radius,
          n = t._radiusY || i,
          o = "a" + i + "," + n + " 0 1,0 ",
          s = t._empty() ? "M0 0" : "M" + (e.x - i) + "," + e.y + o + 2 * i + ",0 " + o + 2 * -i + ",0 ";

      this._setPath(t, s);
    },
    _setPath: function _setPath(t, e) {
      t._path.setAttribute("d", e);
    },
    _bringToFront: function _bringToFront(t) {
      o.DomUtil.toFront(t._path);
    },
    _bringToBack: function _bringToBack(t) {
      o.DomUtil.toBack(t._path);
    }
  }), o.extend(o.SVG, {
    create: function create(t) {
      return e.createElementNS("http://www.w3.org/2000/svg", t);
    },
    pointsToPath: function pointsToPath(t, e) {
      var i,
          n,
          s,
          r,
          a,
          h,
          l = "";

      for (i = 0, s = t.length; i < s; i++) {
        for (a = t[i], n = 0, r = a.length; n < r; n++) {
          h = a[n], l += (n ? "L" : "M") + h.x + " " + h.y;
        }

        l += e ? o.Browser.svg ? "z" : "x" : "";
      }

      return l || "M0 0";
    }
  }), o.Browser.svg = !(!e.createElementNS || !o.SVG.create("svg").createSVGRect), o.svg = function (t) {
    return o.Browser.svg || o.Browser.vml ? new o.SVG(t) : null;
  }, o.Browser.vml = !o.Browser.svg && function () {
    try {
      var t = e.createElement("div");
      t.innerHTML = '<v:shape adj="1"/>';
      var i = t.firstChild;
      return i.style.behavior = "url(#default#VML)", i && "object" == _typeof(i.adj);
    } catch (t) {
      return !1;
    }
  }(), o.SVG.include(o.Browser.vml ? {
    _initContainer: function _initContainer() {
      this._container = o.DomUtil.create("div", "leaflet-vml-container");
    },
    _update: function _update() {
      this._map._animatingZoom || (o.Renderer.prototype._update.call(this), this.fire("update"));
    },
    _initPath: function _initPath(t) {
      var e = t._container = o.SVG.create("shape");
      o.DomUtil.addClass(e, "leaflet-vml-shape " + (this.options.className || "")), e.coordsize = "1 1", t._path = o.SVG.create("path"), e.appendChild(t._path), this._updateStyle(t), this._layers[o.stamp(t)] = t;
    },
    _addPath: function _addPath(t) {
      var e = t._container;
      this._container.appendChild(e), t.options.interactive && t.addInteractiveTarget(e);
    },
    _removePath: function _removePath(t) {
      var e = t._container;
      o.DomUtil.remove(e), t.removeInteractiveTarget(e), delete this._layers[o.stamp(t)];
    },
    _updateStyle: function _updateStyle(t) {
      var e = t._stroke,
          i = t._fill,
          n = t.options,
          s = t._container;
      s.stroked = !!n.stroke, s.filled = !!n.fill, n.stroke ? (e || (e = t._stroke = o.SVG.create("stroke")), s.appendChild(e), e.weight = n.weight + "px", e.color = n.color, e.opacity = n.opacity, n.dashArray ? e.dashStyle = o.Util.isArray(n.dashArray) ? n.dashArray.join(" ") : n.dashArray.replace(/( *, *)/g, " ") : e.dashStyle = "", e.endcap = n.lineCap.replace("butt", "flat"), e.joinstyle = n.lineJoin) : e && (s.removeChild(e), t._stroke = null), n.fill ? (i || (i = t._fill = o.SVG.create("fill")), s.appendChild(i), i.color = n.fillColor || n.color, i.opacity = n.fillOpacity) : i && (s.removeChild(i), t._fill = null);
    },
    _updateCircle: function _updateCircle(t) {
      var e = t._point.round(),
          i = Math.round(t._radius),
          n = Math.round(t._radiusY || i);

      this._setPath(t, t._empty() ? "M0 0" : "AL " + e.x + "," + e.y + " " + i + "," + n + " 0,23592600");
    },
    _setPath: function _setPath(t, e) {
      t._path.v = e;
    },
    _bringToFront: function _bringToFront(t) {
      o.DomUtil.toFront(t._container);
    },
    _bringToBack: function _bringToBack(t) {
      o.DomUtil.toBack(t._container);
    }
  } : {}), o.Browser.vml && (o.SVG.create = function () {
    try {
      return e.namespaces.add("lvml", "urn:schemas-microsoft-com:vml"), function (t) {
        return e.createElement("<lvml:" + t + ' class="lvml">');
      };
    } catch (t) {
      return function (t) {
        return e.createElement("<" + t + ' xmlns="urn:schemas-microsoft.com:vml" class="lvml">');
      };
    }
  }()), o.Canvas = o.Renderer.extend({
    getEvents: function getEvents() {
      var t = o.Renderer.prototype.getEvents.call(this);
      return t.viewprereset = this._onViewPreReset, t;
    },
    _onViewPreReset: function _onViewPreReset() {
      this._postponeUpdatePaths = !0;
    },
    onAdd: function onAdd() {
      o.Renderer.prototype.onAdd.call(this), this._draw();
    },
    _initContainer: function _initContainer() {
      var t = this._container = e.createElement("canvas");
      o.DomEvent.on(t, "mousemove", o.Util.throttle(this._onMouseMove, 32, this), this).on(t, "click dblclick mousedown mouseup contextmenu", this._onClick, this).on(t, "mouseout", this._handleMouseOut, this), this._ctx = t.getContext("2d");
    },
    _updatePaths: function _updatePaths() {
      if (!this._postponeUpdatePaths) {
        var t;
        this._redrawBounds = null;

        for (var e in this._layers) {
          t = this._layers[e], t._update();
        }

        this._redraw();
      }
    },
    _update: function _update() {
      if (!this._map._animatingZoom || !this._bounds) {
        this._drawnLayers = {}, o.Renderer.prototype._update.call(this);
        var t = this._bounds,
            e = this._container,
            i = t.getSize(),
            n = o.Browser.retina ? 2 : 1;
        o.DomUtil.setPosition(e, t.min), e.width = n * i.x, e.height = n * i.y, e.style.width = i.x + "px", e.style.height = i.y + "px", o.Browser.retina && this._ctx.scale(2, 2), this._ctx.translate(-t.min.x, -t.min.y), this.fire("update");
      }
    },
    _reset: function _reset() {
      o.Renderer.prototype._reset.call(this), this._postponeUpdatePaths && (this._postponeUpdatePaths = !1, this._updatePaths());
    },
    _initPath: function _initPath(t) {
      this._updateDashArray(t), this._layers[o.stamp(t)] = t;
      var e = t._order = {
        layer: t,
        prev: this._drawLast,
        next: null
      };
      this._drawLast && (this._drawLast.next = e), this._drawLast = e, this._drawFirst = this._drawFirst || this._drawLast;
    },
    _addPath: function _addPath(t) {
      this._requestRedraw(t);
    },
    _removePath: function _removePath(t) {
      var e = t._order,
          i = e.next,
          n = e.prev;
      i ? i.prev = n : this._drawLast = n, n ? n.next = i : this._drawFirst = i, delete t._order, delete this._layers[o.stamp(t)], this._requestRedraw(t);
    },
    _updatePath: function _updatePath(t) {
      this._extendRedrawBounds(t), t._project(), t._update(), this._requestRedraw(t);
    },
    _updateStyle: function _updateStyle(t) {
      this._updateDashArray(t), this._requestRedraw(t);
    },
    _updateDashArray: function _updateDashArray(t) {
      if (t.options.dashArray) {
        var e,
            i = t.options.dashArray.split(","),
            n = [];

        for (e = 0; e < i.length; e++) {
          n.push(Number(i[e]));
        }

        t.options._dashArray = n;
      }
    },
    _requestRedraw: function _requestRedraw(t) {
      this._map && (this._extendRedrawBounds(t), this._redrawRequest = this._redrawRequest || o.Util.requestAnimFrame(this._redraw, this));
    },
    _extendRedrawBounds: function _extendRedrawBounds(t) {
      var e = (t.options.weight || 0) + 1;
      this._redrawBounds = this._redrawBounds || new o.Bounds(), this._redrawBounds.extend(t._pxBounds.min.subtract([e, e])), this._redrawBounds.extend(t._pxBounds.max.add([e, e]));
    },
    _redraw: function _redraw() {
      this._redrawRequest = null, this._redrawBounds && (this._redrawBounds.min._floor(), this._redrawBounds.max._ceil()), this._clear(), this._draw(), this._redrawBounds = null;
    },
    _clear: function _clear() {
      var t = this._redrawBounds;

      if (t) {
        var e = t.getSize();

        this._ctx.clearRect(t.min.x, t.min.y, e.x, e.y);
      } else this._ctx.clearRect(0, 0, this._container.width, this._container.height);
    },
    _draw: function _draw() {
      var t,
          e = this._redrawBounds;

      if (this._ctx.save(), e) {
        var i = e.getSize();
        this._ctx.beginPath(), this._ctx.rect(e.min.x, e.min.y, i.x, i.y), this._ctx.clip();
      }

      this._drawing = !0;

      for (var n = this._drawFirst; n; n = n.next) {
        t = n.layer, (!e || t._pxBounds && t._pxBounds.intersects(e)) && t._updatePath();
      }

      this._drawing = !1, this._ctx.restore();
    },
    _updatePoly: function _updatePoly(t, e) {
      if (this._drawing) {
        var i,
            n,
            o,
            s,
            r = t._parts,
            a = r.length,
            h = this._ctx;

        if (a) {
          for (this._drawnLayers[t._leaflet_id] = t, h.beginPath(), h.setLineDash && h.setLineDash(t.options && t.options._dashArray || []), i = 0; i < a; i++) {
            for (n = 0, o = r[i].length; n < o; n++) {
              s = r[i][n], h[n ? "lineTo" : "moveTo"](s.x, s.y);
            }

            e && h.closePath();
          }

          this._fillStroke(h, t);
        }
      }
    },
    _updateCircle: function _updateCircle(t) {
      if (this._drawing && !t._empty()) {
        var e = t._point,
            i = this._ctx,
            n = t._radius,
            o = (t._radiusY || n) / n;
        this._drawnLayers[t._leaflet_id] = t, 1 !== o && (i.save(), i.scale(1, o)), i.beginPath(), i.arc(e.x, e.y / o, n, 0, 2 * Math.PI, !1), 1 !== o && i.restore(), this._fillStroke(i, t);
      }
    },
    _fillStroke: function _fillStroke(t, e) {
      var i = e.options;
      i.fill && (t.globalAlpha = i.fillOpacity, t.fillStyle = i.fillColor || i.color, t.fill(i.fillRule || "evenodd")), i.stroke && 0 !== i.weight && (t.globalAlpha = i.opacity, t.lineWidth = i.weight, t.strokeStyle = i.color, t.lineCap = i.lineCap, t.lineJoin = i.lineJoin, t.stroke());
    },
    _onClick: function _onClick(t) {
      for (var e, i, n = this._map.mouseEventToLayerPoint(t), s = this._drawFirst; s; s = s.next) {
        e = s.layer, e.options.interactive && e._containsPoint(n) && !this._map._draggableMoved(e) && (i = e);
      }

      i && (o.DomEvent._fakeStop(t), this._fireEvent([i], t));
    },
    _onMouseMove: function _onMouseMove(t) {
      if (this._map && !this._map.dragging.moving() && !this._map._animatingZoom) {
        var e = this._map.mouseEventToLayerPoint(t);

        this._handleMouseHover(t, e);
      }
    },
    _handleMouseOut: function _handleMouseOut(t) {
      var e = this._hoveredLayer;
      e && (o.DomUtil.removeClass(this._container, "leaflet-interactive"), this._fireEvent([e], t, "mouseout"), this._hoveredLayer = null);
    },
    _handleMouseHover: function _handleMouseHover(t, e) {
      for (var i, n, s = this._drawFirst; s; s = s.next) {
        i = s.layer, i.options.interactive && i._containsPoint(e) && (n = i);
      }

      n !== this._hoveredLayer && (this._handleMouseOut(t), n && (o.DomUtil.addClass(this._container, "leaflet-interactive"), this._fireEvent([n], t, "mouseover"), this._hoveredLayer = n)), this._hoveredLayer && this._fireEvent([this._hoveredLayer], t);
    },
    _fireEvent: function _fireEvent(t, e, i) {
      this._map._fireDOMEvent(e, i || e.type, t);
    },
    _bringToFront: function _bringToFront(t) {
      var e = t._order,
          i = e.next,
          n = e.prev;
      i && (i.prev = n, n ? n.next = i : i && (this._drawFirst = i), e.prev = this._drawLast, this._drawLast.next = e, e.next = null, this._drawLast = e, this._requestRedraw(t));
    },
    _bringToBack: function _bringToBack(t) {
      var e = t._order,
          i = e.next,
          n = e.prev;
      n && (n.next = i, i ? i.prev = n : n && (this._drawLast = n), e.prev = null, e.next = this._drawFirst, this._drawFirst.prev = e, this._drawFirst = e, this._requestRedraw(t));
    }
  }), o.Browser.canvas = function () {
    return !!e.createElement("canvas").getContext;
  }(), o.canvas = function (t) {
    return o.Browser.canvas ? new o.Canvas(t) : null;
  }, o.Polyline.prototype._containsPoint = function (t, e) {
    var i,
        n,
        s,
        r,
        a,
        h,
        l = this._clickTolerance();

    if (!this._pxBounds.contains(t)) return !1;

    for (i = 0, r = this._parts.length; i < r; i++) {
      for (h = this._parts[i], n = 0, a = h.length, s = a - 1; n < a; s = n++) {
        if ((e || 0 !== n) && o.LineUtil.pointToSegmentDistance(t, h[s], h[n]) <= l) return !0;
      }
    }

    return !1;
  }, o.Polygon.prototype._containsPoint = function (t) {
    var e,
        i,
        n,
        s,
        r,
        a,
        h,
        l,
        u = !1;
    if (!this._pxBounds.contains(t)) return !1;

    for (s = 0, h = this._parts.length; s < h; s++) {
      for (e = this._parts[s], r = 0, l = e.length, a = l - 1; r < l; a = r++) {
        i = e[r], n = e[a], i.y > t.y != n.y > t.y && t.x < (n.x - i.x) * (t.y - i.y) / (n.y - i.y) + i.x && (u = !u);
      }
    }

    return u || o.Polyline.prototype._containsPoint.call(this, t, !0);
  }, o.CircleMarker.prototype._containsPoint = function (t) {
    return t.distanceTo(this._point) <= this._radius + this._clickTolerance();
  }, o.GeoJSON = o.FeatureGroup.extend({
    initialize: function initialize(t, e) {
      o.setOptions(this, e), this._layers = {}, t && this.addData(t);
    },
    addData: function addData(t) {
      var e,
          i,
          n,
          s = o.Util.isArray(t) ? t : t.features;

      if (s) {
        for (e = 0, i = s.length; e < i; e++) {
          n = s[e], (n.geometries || n.geometry || n.features || n.coordinates) && this.addData(n);
        }

        return this;
      }

      var r = this.options;
      if (r.filter && !r.filter(t)) return this;
      var a = o.GeoJSON.geometryToLayer(t, r);
      return a ? (a.feature = o.GeoJSON.asFeature(t), a.defaultOptions = a.options, this.resetStyle(a), r.onEachFeature && r.onEachFeature(t, a), this.addLayer(a)) : this;
    },
    resetStyle: function resetStyle(t) {
      return t.options = o.Util.extend({}, t.defaultOptions), this._setLayerStyle(t, this.options.style), this;
    },
    setStyle: function setStyle(t) {
      return this.eachLayer(function (e) {
        this._setLayerStyle(e, t);
      }, this);
    },
    _setLayerStyle: function _setLayerStyle(t, e) {
      "function" == typeof e && (e = e(t.feature)), t.setStyle && t.setStyle(e);
    }
  }), o.extend(o.GeoJSON, {
    geometryToLayer: function geometryToLayer(t, e) {
      var i,
          n,
          s,
          r,
          a = "Feature" === t.type ? t.geometry : t,
          h = a ? a.coordinates : null,
          l = [],
          u = e && e.pointToLayer,
          c = e && e.coordsToLatLng || this.coordsToLatLng;
      if (!h && !a) return null;

      switch (a.type) {
        case "Point":
          return i = c(h), u ? u(t, i) : new o.Marker(i);

        case "MultiPoint":
          for (s = 0, r = h.length; s < r; s++) {
            i = c(h[s]), l.push(u ? u(t, i) : new o.Marker(i));
          }

          return new o.FeatureGroup(l);

        case "LineString":
        case "MultiLineString":
          return n = this.coordsToLatLngs(h, "LineString" === a.type ? 0 : 1, c), new o.Polyline(n, e);

        case "Polygon":
        case "MultiPolygon":
          return n = this.coordsToLatLngs(h, "Polygon" === a.type ? 1 : 2, c), new o.Polygon(n, e);

        case "GeometryCollection":
          for (s = 0, r = a.geometries.length; s < r; s++) {
            var d = this.geometryToLayer({
              geometry: a.geometries[s],
              type: "Feature",
              properties: t.properties
            }, e);
            d && l.push(d);
          }

          return new o.FeatureGroup(l);

        default:
          throw new Error("Invalid GeoJSON object.");
      }
    },
    coordsToLatLng: function coordsToLatLng(t) {
      return new o.LatLng(t[1], t[0], t[2]);
    },
    coordsToLatLngs: function coordsToLatLngs(t, e, i) {
      for (var n, o = [], s = 0, r = t.length; s < r; s++) {
        n = e ? this.coordsToLatLngs(t[s], e - 1, i) : (i || this.coordsToLatLng)(t[s]), o.push(n);
      }

      return o;
    },
    latLngToCoords: function latLngToCoords(t) {
      return t.alt !== i ? [t.lng, t.lat, t.alt] : [t.lng, t.lat];
    },
    latLngsToCoords: function latLngsToCoords(t, e, i) {
      for (var n = [], s = 0, r = t.length; s < r; s++) {
        n.push(e ? o.GeoJSON.latLngsToCoords(t[s], e - 1, i) : o.GeoJSON.latLngToCoords(t[s]));
      }

      return !e && i && n.push(n[0]), n;
    },
    getFeature: function getFeature(t, e) {
      return t.feature ? o.extend({}, t.feature, {
        geometry: e
      }) : o.GeoJSON.asFeature(e);
    },
    asFeature: function asFeature(t) {
      return "Feature" === t.type || "FeatureCollection" === t.type ? t : {
        type: "Feature",
        properties: {},
        geometry: t
      };
    }
  });
  var a = {
    toGeoJSON: function toGeoJSON() {
      return o.GeoJSON.getFeature(this, {
        type: "Point",
        coordinates: o.GeoJSON.latLngToCoords(this.getLatLng())
      });
    }
  };
  o.Marker.include(a), o.Circle.include(a), o.CircleMarker.include(a), o.Polyline.prototype.toGeoJSON = function () {
    var t = !o.Polyline._flat(this._latlngs),
        e = o.GeoJSON.latLngsToCoords(this._latlngs, t ? 1 : 0);
    return o.GeoJSON.getFeature(this, {
      type: (t ? "Multi" : "") + "LineString",
      coordinates: e
    });
  }, o.Polygon.prototype.toGeoJSON = function () {
    var t = !o.Polyline._flat(this._latlngs),
        e = t && !o.Polyline._flat(this._latlngs[0]),
        i = o.GeoJSON.latLngsToCoords(this._latlngs, e ? 2 : t ? 1 : 0, !0);
    return t || (i = [i]), o.GeoJSON.getFeature(this, {
      type: (e ? "Multi" : "") + "Polygon",
      coordinates: i
    });
  }, o.LayerGroup.include({
    toMultiPoint: function toMultiPoint() {
      var t = [];
      return this.eachLayer(function (e) {
        t.push(e.toGeoJSON().geometry.coordinates);
      }), o.GeoJSON.getFeature(this, {
        type: "MultiPoint",
        coordinates: t
      });
    },
    toGeoJSON: function toGeoJSON() {
      var t = this.feature && this.feature.geometry && this.feature.geometry.type;
      if ("MultiPoint" === t) return this.toMultiPoint();
      var e = "GeometryCollection" === t,
          i = [];
      return this.eachLayer(function (t) {
        if (t.toGeoJSON) {
          var n = t.toGeoJSON();
          i.push(e ? n.geometry : o.GeoJSON.asFeature(n));
        }
      }), e ? o.GeoJSON.getFeature(this, {
        geometries: i,
        type: "GeometryCollection"
      }) : {
        type: "FeatureCollection",
        features: i
      };
    }
  }), o.geoJSON = function (t, e) {
    return new o.GeoJSON(t, e);
  }, o.geoJson = o.geoJSON, o.Draggable = o.Evented.extend({
    options: {
      clickTolerance: 3
    },
    statics: {
      START: o.Browser.touch ? ["touchstart", "mousedown"] : ["mousedown"],
      END: {
        mousedown: "mouseup",
        touchstart: "touchend",
        pointerdown: "touchend",
        MSPointerDown: "touchend"
      },
      MOVE: {
        mousedown: "mousemove",
        touchstart: "touchmove",
        pointerdown: "touchmove",
        MSPointerDown: "touchmove"
      }
    },
    initialize: function initialize(t, e, i) {
      this._element = t, this._dragStartTarget = e || t, this._preventOutline = i;
    },
    enable: function enable() {
      this._enabled || (o.DomEvent.on(this._dragStartTarget, o.Draggable.START.join(" "), this._onDown, this), this._enabled = !0);
    },
    disable: function disable() {
      this._enabled && (o.Draggable._dragging === this && this.finishDrag(), o.DomEvent.off(this._dragStartTarget, o.Draggable.START.join(" "), this._onDown, this), this._enabled = !1, this._moved = !1);
    },
    _onDown: function _onDown(t) {
      if (!t._simulated && this._enabled && (this._moved = !1, !o.DomUtil.hasClass(this._element, "leaflet-zoom-anim") && !(o.Draggable._dragging || t.shiftKey || 1 !== t.which && 1 !== t.button && !t.touches || (o.Draggable._dragging = this, this._preventOutline && o.DomUtil.preventOutline(this._element), o.DomUtil.disableImageDrag(), o.DomUtil.disableTextSelection(), this._moving)))) {
        this.fire("down");
        var i = t.touches ? t.touches[0] : t;
        this._startPoint = new o.Point(i.clientX, i.clientY), o.DomEvent.on(e, o.Draggable.MOVE[t.type], this._onMove, this).on(e, o.Draggable.END[t.type], this._onUp, this);
      }
    },
    _onMove: function _onMove(i) {
      if (!i._simulated && this._enabled) {
        if (i.touches && i.touches.length > 1) return void (this._moved = !0);
        var n = i.touches && 1 === i.touches.length ? i.touches[0] : i,
            s = new o.Point(n.clientX, n.clientY),
            r = s.subtract(this._startPoint);
        (r.x || r.y) && (Math.abs(r.x) + Math.abs(r.y) < this.options.clickTolerance || (o.DomEvent.preventDefault(i), this._moved || (this.fire("dragstart"), this._moved = !0, this._startPos = o.DomUtil.getPosition(this._element).subtract(r), o.DomUtil.addClass(e.body, "leaflet-dragging"), this._lastTarget = i.target || i.srcElement, t.SVGElementInstance && this._lastTarget instanceof SVGElementInstance && (this._lastTarget = this._lastTarget.correspondingUseElement), o.DomUtil.addClass(this._lastTarget, "leaflet-drag-target")), this._newPos = this._startPos.add(r), this._moving = !0, o.Util.cancelAnimFrame(this._animRequest), this._lastEvent = i, this._animRequest = o.Util.requestAnimFrame(this._updatePosition, this, !0)));
      }
    },
    _updatePosition: function _updatePosition() {
      var t = {
        originalEvent: this._lastEvent
      };
      this.fire("predrag", t), o.DomUtil.setPosition(this._element, this._newPos), this.fire("drag", t);
    },
    _onUp: function _onUp(t) {
      !t._simulated && this._enabled && this.finishDrag();
    },
    finishDrag: function finishDrag() {
      o.DomUtil.removeClass(e.body, "leaflet-dragging"), this._lastTarget && (o.DomUtil.removeClass(this._lastTarget, "leaflet-drag-target"), this._lastTarget = null);

      for (var t in o.Draggable.MOVE) {
        o.DomEvent.off(e, o.Draggable.MOVE[t], this._onMove, this).off(e, o.Draggable.END[t], this._onUp, this);
      }

      o.DomUtil.enableImageDrag(), o.DomUtil.enableTextSelection(), this._moved && this._moving && (o.Util.cancelAnimFrame(this._animRequest), this.fire("dragend", {
        distance: this._newPos.distanceTo(this._startPos)
      })), this._moving = !1, o.Draggable._dragging = !1;
    }
  }), o.Handler = o.Class.extend({
    initialize: function initialize(t) {
      this._map = t;
    },
    enable: function enable() {
      return this._enabled ? this : (this._enabled = !0, this.addHooks(), this);
    },
    disable: function disable() {
      return this._enabled ? (this._enabled = !1, this.removeHooks(), this) : this;
    },
    enabled: function enabled() {
      return !!this._enabled;
    }
  }), o.Map.mergeOptions({
    dragging: !0,
    inertia: !o.Browser.android23,
    inertiaDeceleration: 3400,
    inertiaMaxSpeed: 1 / 0,
    easeLinearity: .2,
    worldCopyJump: !1,
    maxBoundsViscosity: 0
  }), o.Map.Drag = o.Handler.extend({
    addHooks: function addHooks() {
      if (!this._draggable) {
        var t = this._map;
        this._draggable = new o.Draggable(t._mapPane, t._container), this._draggable.on({
          down: this._onDown,
          dragstart: this._onDragStart,
          drag: this._onDrag,
          dragend: this._onDragEnd
        }, this), this._draggable.on("predrag", this._onPreDragLimit, this), t.options.worldCopyJump && (this._draggable.on("predrag", this._onPreDragWrap, this), t.on("zoomend", this._onZoomEnd, this), t.whenReady(this._onZoomEnd, this));
      }

      o.DomUtil.addClass(this._map._container, "leaflet-grab leaflet-touch-drag"), this._draggable.enable(), this._positions = [], this._times = [];
    },
    removeHooks: function removeHooks() {
      o.DomUtil.removeClass(this._map._container, "leaflet-grab"), o.DomUtil.removeClass(this._map._container, "leaflet-touch-drag"), this._draggable.disable();
    },
    moved: function moved() {
      return this._draggable && this._draggable._moved;
    },
    moving: function moving() {
      return this._draggable && this._draggable._moving;
    },
    _onDown: function _onDown() {
      this._map._stop();
    },
    _onDragStart: function _onDragStart() {
      var t = this._map;

      if (this._map.options.maxBounds && this._map.options.maxBoundsViscosity) {
        var e = o.latLngBounds(this._map.options.maxBounds);
        this._offsetLimit = o.bounds(this._map.latLngToContainerPoint(e.getNorthWest()).multiplyBy(-1), this._map.latLngToContainerPoint(e.getSouthEast()).multiplyBy(-1).add(this._map.getSize())), this._viscosity = Math.min(1, Math.max(0, this._map.options.maxBoundsViscosity));
      } else this._offsetLimit = null;

      t.fire("movestart").fire("dragstart"), t.options.inertia && (this._positions = [], this._times = []);
    },
    _onDrag: function _onDrag(t) {
      if (this._map.options.inertia) {
        var e = this._lastTime = +new Date(),
            i = this._lastPos = this._draggable._absPos || this._draggable._newPos;
        this._positions.push(i), this._times.push(e), e - this._times[0] > 50 && (this._positions.shift(), this._times.shift());
      }

      this._map.fire("move", t).fire("drag", t);
    },
    _onZoomEnd: function _onZoomEnd() {
      var t = this._map.getSize().divideBy(2),
          e = this._map.latLngToLayerPoint([0, 0]);

      this._initialWorldOffset = e.subtract(t).x, this._worldWidth = this._map.getPixelWorldBounds().getSize().x;
    },
    _viscousLimit: function _viscousLimit(t, e) {
      return t - (t - e) * this._viscosity;
    },
    _onPreDragLimit: function _onPreDragLimit() {
      if (this._viscosity && this._offsetLimit) {
        var t = this._draggable._newPos.subtract(this._draggable._startPos),
            e = this._offsetLimit;

        t.x < e.min.x && (t.x = this._viscousLimit(t.x, e.min.x)), t.y < e.min.y && (t.y = this._viscousLimit(t.y, e.min.y)), t.x > e.max.x && (t.x = this._viscousLimit(t.x, e.max.x)), t.y > e.max.y && (t.y = this._viscousLimit(t.y, e.max.y)), this._draggable._newPos = this._draggable._startPos.add(t);
      }
    },
    _onPreDragWrap: function _onPreDragWrap() {
      var t = this._worldWidth,
          e = Math.round(t / 2),
          i = this._initialWorldOffset,
          n = this._draggable._newPos.x,
          o = (n - e + i) % t + e - i,
          s = (n + e + i) % t - e - i,
          r = Math.abs(o + i) < Math.abs(s + i) ? o : s;
      this._draggable._absPos = this._draggable._newPos.clone(), this._draggable._newPos.x = r;
    },
    _onDragEnd: function _onDragEnd(t) {
      var e = this._map,
          i = e.options,
          n = !i.inertia || this._times.length < 2;
      if (e.fire("dragend", t), n) e.fire("moveend");else {
        var s = this._lastPos.subtract(this._positions[0]),
            r = (this._lastTime - this._times[0]) / 1e3,
            a = i.easeLinearity,
            h = s.multiplyBy(a / r),
            l = h.distanceTo([0, 0]),
            u = Math.min(i.inertiaMaxSpeed, l),
            c = h.multiplyBy(u / l),
            d = u / (i.inertiaDeceleration * a),
            _ = c.multiplyBy(-d / 2).round();

        _.x || _.y ? (_ = e._limitOffset(_, e.options.maxBounds), o.Util.requestAnimFrame(function () {
          e.panBy(_, {
            duration: d,
            easeLinearity: a,
            noMoveStart: !0,
            animate: !0
          });
        })) : e.fire("moveend");
      }
    }
  }), o.Map.addInitHook("addHandler", "dragging", o.Map.Drag), o.Map.mergeOptions({
    doubleClickZoom: !0
  }), o.Map.DoubleClickZoom = o.Handler.extend({
    addHooks: function addHooks() {
      this._map.on("dblclick", this._onDoubleClick, this);
    },
    removeHooks: function removeHooks() {
      this._map.off("dblclick", this._onDoubleClick, this);
    },
    _onDoubleClick: function _onDoubleClick(t) {
      var e = this._map,
          i = e.getZoom(),
          n = e.options.zoomDelta,
          o = t.originalEvent.shiftKey ? i - n : i + n;
      "center" === e.options.doubleClickZoom ? e.setZoom(o) : e.setZoomAround(t.containerPoint, o);
    }
  }), o.Map.addInitHook("addHandler", "doubleClickZoom", o.Map.DoubleClickZoom), o.Map.mergeOptions({
    scrollWheelZoom: !0,
    wheelDebounceTime: 40,
    wheelPxPerZoomLevel: 60
  }), o.Map.ScrollWheelZoom = o.Handler.extend({
    addHooks: function addHooks() {
      o.DomEvent.on(this._map._container, "mousewheel", this._onWheelScroll, this), this._delta = 0;
    },
    removeHooks: function removeHooks() {
      o.DomEvent.off(this._map._container, "mousewheel", this._onWheelScroll, this);
    },
    _onWheelScroll: function _onWheelScroll(t) {
      var e = o.DomEvent.getWheelDelta(t),
          i = this._map.options.wheelDebounceTime;
      this._delta += e, this._lastMousePos = this._map.mouseEventToContainerPoint(t), this._startTime || (this._startTime = +new Date());
      var n = Math.max(i - (+new Date() - this._startTime), 0);
      clearTimeout(this._timer), this._timer = setTimeout(o.bind(this._performZoom, this), n), o.DomEvent.stop(t);
    },
    _performZoom: function _performZoom() {
      var t = this._map,
          e = t.getZoom(),
          i = this._map.options.zoomSnap || 0;

      t._stop();

      var n = this._delta / (4 * this._map.options.wheelPxPerZoomLevel),
          o = 4 * Math.log(2 / (1 + Math.exp(-Math.abs(n)))) / Math.LN2,
          s = i ? Math.ceil(o / i) * i : o,
          r = t._limitZoom(e + (this._delta > 0 ? s : -s)) - e;
      this._delta = 0, this._startTime = null, r && ("center" === t.options.scrollWheelZoom ? t.setZoom(e + r) : t.setZoomAround(this._lastMousePos, e + r));
    }
  }), o.Map.addInitHook("addHandler", "scrollWheelZoom", o.Map.ScrollWheelZoom), o.extend(o.DomEvent, {
    _touchstart: o.Browser.msPointer ? "MSPointerDown" : o.Browser.pointer ? "pointerdown" : "touchstart",
    _touchend: o.Browser.msPointer ? "MSPointerUp" : o.Browser.pointer ? "pointerup" : "touchend",
    addDoubleTapListener: function addDoubleTapListener(t, e, i) {
      function n(t) {
        var e;

        if (o.Browser.pointer) {
          if (!o.Browser.edge || "mouse" === t.pointerType) return;
          e = o.DomEvent._pointersCount;
        } else e = t.touches.length;

        if (!(e > 1)) {
          var i = Date.now(),
              n = i - (r || i);
          a = t.touches ? t.touches[0] : t, h = n > 0 && n <= l, r = i;
        }
      }

      function s(t) {
        if (h && !a.cancelBubble) {
          if (o.Browser.pointer) {
            if (!o.Browser.edge || "mouse" === t.pointerType) return;
            var i,
                n,
                s = {};

            for (n in a) {
              i = a[n], s[n] = i && i.bind ? i.bind(a) : i;
            }

            a = s;
          }

          a.type = "dblclick", e(a), r = null;
        }
      }

      var r,
          a,
          h = !1,
          l = 250,
          u = "_leaflet_",
          c = this._touchstart,
          d = this._touchend;
      return t[u + c + i] = n, t[u + d + i] = s, t[u + "dblclick" + i] = e, t.addEventListener(c, n, !1), t.addEventListener(d, s, !1), t.addEventListener("dblclick", e, !1), this;
    },
    removeDoubleTapListener: function removeDoubleTapListener(t, e) {
      var i = "_leaflet_",
          n = t[i + this._touchstart + e],
          s = t[i + this._touchend + e],
          r = t[i + "dblclick" + e];
      return t.removeEventListener(this._touchstart, n, !1), t.removeEventListener(this._touchend, s, !1), o.Browser.edge || t.removeEventListener("dblclick", r, !1), this;
    }
  }), o.extend(o.DomEvent, {
    POINTER_DOWN: o.Browser.msPointer ? "MSPointerDown" : "pointerdown",
    POINTER_MOVE: o.Browser.msPointer ? "MSPointerMove" : "pointermove",
    POINTER_UP: o.Browser.msPointer ? "MSPointerUp" : "pointerup",
    POINTER_CANCEL: o.Browser.msPointer ? "MSPointerCancel" : "pointercancel",
    TAG_WHITE_LIST: ["INPUT", "SELECT", "OPTION"],
    _pointers: {},
    _pointersCount: 0,
    addPointerListener: function addPointerListener(t, e, i, n) {
      return "touchstart" === e ? this._addPointerStart(t, i, n) : "touchmove" === e ? this._addPointerMove(t, i, n) : "touchend" === e && this._addPointerEnd(t, i, n), this;
    },
    removePointerListener: function removePointerListener(t, e, i) {
      var n = t["_leaflet_" + e + i];
      return "touchstart" === e ? t.removeEventListener(this.POINTER_DOWN, n, !1) : "touchmove" === e ? t.removeEventListener(this.POINTER_MOVE, n, !1) : "touchend" === e && (t.removeEventListener(this.POINTER_UP, n, !1), t.removeEventListener(this.POINTER_CANCEL, n, !1)), this;
    },
    _addPointerStart: function _addPointerStart(t, i, n) {
      var s = o.bind(function (t) {
        if ("mouse" !== t.pointerType && t.MSPOINTER_TYPE_MOUSE && t.pointerType !== t.MSPOINTER_TYPE_MOUSE) {
          if (!(this.TAG_WHITE_LIST.indexOf(t.target.tagName) < 0)) return;
          o.DomEvent.preventDefault(t);
        }

        this._handlePointer(t, i);
      }, this);

      if (t["_leaflet_touchstart" + n] = s, t.addEventListener(this.POINTER_DOWN, s, !1), !this._pointerDocListener) {
        var r = o.bind(this._globalPointerUp, this);
        e.documentElement.addEventListener(this.POINTER_DOWN, o.bind(this._globalPointerDown, this), !0), e.documentElement.addEventListener(this.POINTER_MOVE, o.bind(this._globalPointerMove, this), !0), e.documentElement.addEventListener(this.POINTER_UP, r, !0), e.documentElement.addEventListener(this.POINTER_CANCEL, r, !0), this._pointerDocListener = !0;
      }
    },
    _globalPointerDown: function _globalPointerDown(t) {
      this._pointers[t.pointerId] = t, this._pointersCount++;
    },
    _globalPointerMove: function _globalPointerMove(t) {
      this._pointers[t.pointerId] && (this._pointers[t.pointerId] = t);
    },
    _globalPointerUp: function _globalPointerUp(t) {
      delete this._pointers[t.pointerId], this._pointersCount--;
    },
    _handlePointer: function _handlePointer(t, e) {
      t.touches = [];

      for (var i in this._pointers) {
        t.touches.push(this._pointers[i]);
      }

      t.changedTouches = [t], e(t);
    },
    _addPointerMove: function _addPointerMove(t, e, i) {
      var n = o.bind(function (t) {
        (t.pointerType !== t.MSPOINTER_TYPE_MOUSE && "mouse" !== t.pointerType || 0 !== t.buttons) && this._handlePointer(t, e);
      }, this);
      t["_leaflet_touchmove" + i] = n, t.addEventListener(this.POINTER_MOVE, n, !1);
    },
    _addPointerEnd: function _addPointerEnd(t, e, i) {
      var n = o.bind(function (t) {
        this._handlePointer(t, e);
      }, this);
      t["_leaflet_touchend" + i] = n, t.addEventListener(this.POINTER_UP, n, !1), t.addEventListener(this.POINTER_CANCEL, n, !1);
    }
  }), o.Map.mergeOptions({
    touchZoom: o.Browser.touch && !o.Browser.android23,
    bounceAtZoomLimits: !0
  }), o.Map.TouchZoom = o.Handler.extend({
    addHooks: function addHooks() {
      o.DomUtil.addClass(this._map._container, "leaflet-touch-zoom"), o.DomEvent.on(this._map._container, "touchstart", this._onTouchStart, this);
    },
    removeHooks: function removeHooks() {
      o.DomUtil.removeClass(this._map._container, "leaflet-touch-zoom"), o.DomEvent.off(this._map._container, "touchstart", this._onTouchStart, this);
    },
    _onTouchStart: function _onTouchStart(t) {
      var i = this._map;

      if (t.touches && 2 === t.touches.length && !i._animatingZoom && !this._zooming) {
        var n = i.mouseEventToContainerPoint(t.touches[0]),
            s = i.mouseEventToContainerPoint(t.touches[1]);
        this._centerPoint = i.getSize()._divideBy(2), this._startLatLng = i.containerPointToLatLng(this._centerPoint), "center" !== i.options.touchZoom && (this._pinchStartLatLng = i.containerPointToLatLng(n.add(s)._divideBy(2))), this._startDist = n.distanceTo(s), this._startZoom = i.getZoom(), this._moved = !1, this._zooming = !0, i._stop(), o.DomEvent.on(e, "touchmove", this._onTouchMove, this).on(e, "touchend", this._onTouchEnd, this), o.DomEvent.preventDefault(t);
      }
    },
    _onTouchMove: function _onTouchMove(t) {
      if (t.touches && 2 === t.touches.length && this._zooming) {
        var e = this._map,
            i = e.mouseEventToContainerPoint(t.touches[0]),
            n = e.mouseEventToContainerPoint(t.touches[1]),
            s = i.distanceTo(n) / this._startDist;

        if (this._zoom = e.getScaleZoom(s, this._startZoom), !e.options.bounceAtZoomLimits && (this._zoom < e.getMinZoom() && s < 1 || this._zoom > e.getMaxZoom() && s > 1) && (this._zoom = e._limitZoom(this._zoom)), "center" === e.options.touchZoom) {
          if (this._center = this._startLatLng, 1 === s) return;
        } else {
          var r = i._add(n)._divideBy(2)._subtract(this._centerPoint);

          if (1 === s && 0 === r.x && 0 === r.y) return;
          this._center = e.unproject(e.project(this._pinchStartLatLng, this._zoom).subtract(r), this._zoom);
        }

        this._moved || (e._moveStart(!0), this._moved = !0), o.Util.cancelAnimFrame(this._animRequest);
        var a = o.bind(e._move, e, this._center, this._zoom, {
          pinch: !0,
          round: !1
        });
        this._animRequest = o.Util.requestAnimFrame(a, this, !0), o.DomEvent.preventDefault(t);
      }
    },
    _onTouchEnd: function _onTouchEnd() {
      return this._moved && this._zooming ? (this._zooming = !1, o.Util.cancelAnimFrame(this._animRequest), o.DomEvent.off(e, "touchmove", this._onTouchMove).off(e, "touchend", this._onTouchEnd), void (this._map.options.zoomAnimation ? this._map._animateZoom(this._center, this._map._limitZoom(this._zoom), !0, this._map.options.zoomSnap) : this._map._resetView(this._center, this._map._limitZoom(this._zoom)))) : void (this._zooming = !1);
    }
  }), o.Map.addInitHook("addHandler", "touchZoom", o.Map.TouchZoom), o.Map.mergeOptions({
    tap: !0,
    tapTolerance: 15
  }), o.Map.Tap = o.Handler.extend({
    addHooks: function addHooks() {
      o.DomEvent.on(this._map._container, "touchstart", this._onDown, this);
    },
    removeHooks: function removeHooks() {
      o.DomEvent.off(this._map._container, "touchstart", this._onDown, this);
    },
    _onDown: function _onDown(t) {
      if (t.touches) {
        if (o.DomEvent.preventDefault(t), this._fireClick = !0, t.touches.length > 1) return this._fireClick = !1, void clearTimeout(this._holdTimeout);
        var i = t.touches[0],
            n = i.target;
        this._startPos = this._newPos = new o.Point(i.clientX, i.clientY), n.tagName && "a" === n.tagName.toLowerCase() && o.DomUtil.addClass(n, "leaflet-active"), this._holdTimeout = setTimeout(o.bind(function () {
          this._isTapValid() && (this._fireClick = !1, this._onUp(), this._simulateEvent("contextmenu", i));
        }, this), 1e3), this._simulateEvent("mousedown", i), o.DomEvent.on(e, {
          touchmove: this._onMove,
          touchend: this._onUp
        }, this);
      }
    },
    _onUp: function _onUp(t) {
      if (clearTimeout(this._holdTimeout), o.DomEvent.off(e, {
        touchmove: this._onMove,
        touchend: this._onUp
      }, this), this._fireClick && t && t.changedTouches) {
        var i = t.changedTouches[0],
            n = i.target;
        n && n.tagName && "a" === n.tagName.toLowerCase() && o.DomUtil.removeClass(n, "leaflet-active"), this._simulateEvent("mouseup", i), this._isTapValid() && this._simulateEvent("click", i);
      }
    },
    _isTapValid: function _isTapValid() {
      return this._newPos.distanceTo(this._startPos) <= this._map.options.tapTolerance;
    },
    _onMove: function _onMove(t) {
      var e = t.touches[0];
      this._newPos = new o.Point(e.clientX, e.clientY), this._simulateEvent("mousemove", e);
    },
    _simulateEvent: function _simulateEvent(i, n) {
      var o = e.createEvent("MouseEvents");
      o._simulated = !0, n.target._simulatedClick = !0, o.initMouseEvent(i, !0, !0, t, 1, n.screenX, n.screenY, n.clientX, n.clientY, !1, !1, !1, !1, 0, null), n.target.dispatchEvent(o);
    }
  }), o.Browser.touch && !o.Browser.pointer && o.Map.addInitHook("addHandler", "tap", o.Map.Tap), o.Map.mergeOptions({
    boxZoom: !0
  }), o.Map.BoxZoom = o.Handler.extend({
    initialize: function initialize(t) {
      this._map = t, this._container = t._container, this._pane = t._panes.overlayPane;
    },
    addHooks: function addHooks() {
      o.DomEvent.on(this._container, "mousedown", this._onMouseDown, this);
    },
    removeHooks: function removeHooks() {
      o.DomEvent.off(this._container, "mousedown", this._onMouseDown, this);
    },
    moved: function moved() {
      return this._moved;
    },
    _resetState: function _resetState() {
      this._moved = !1;
    },
    _onMouseDown: function _onMouseDown(t) {
      return !(!t.shiftKey || 1 !== t.which && 1 !== t.button) && (this._resetState(), o.DomUtil.disableTextSelection(), o.DomUtil.disableImageDrag(), this._startPoint = this._map.mouseEventToContainerPoint(t), void o.DomEvent.on(e, {
        contextmenu: o.DomEvent.stop,
        mousemove: this._onMouseMove,
        mouseup: this._onMouseUp,
        keydown: this._onKeyDown
      }, this));
    },
    _onMouseMove: function _onMouseMove(t) {
      this._moved || (this._moved = !0, this._box = o.DomUtil.create("div", "leaflet-zoom-box", this._container), o.DomUtil.addClass(this._container, "leaflet-crosshair"), this._map.fire("boxzoomstart")), this._point = this._map.mouseEventToContainerPoint(t);
      var e = new o.Bounds(this._point, this._startPoint),
          i = e.getSize();
      o.DomUtil.setPosition(this._box, e.min), this._box.style.width = i.x + "px", this._box.style.height = i.y + "px";
    },
    _finish: function _finish() {
      this._moved && (o.DomUtil.remove(this._box), o.DomUtil.removeClass(this._container, "leaflet-crosshair")), o.DomUtil.enableTextSelection(), o.DomUtil.enableImageDrag(), o.DomEvent.off(e, {
        contextmenu: o.DomEvent.stop,
        mousemove: this._onMouseMove,
        mouseup: this._onMouseUp,
        keydown: this._onKeyDown
      }, this);
    },
    _onMouseUp: function _onMouseUp(t) {
      if ((1 === t.which || 1 === t.button) && (this._finish(), this._moved)) {
        setTimeout(o.bind(this._resetState, this), 0);
        var e = new o.LatLngBounds(this._map.containerPointToLatLng(this._startPoint), this._map.containerPointToLatLng(this._point));

        this._map.fitBounds(e).fire("boxzoomend", {
          boxZoomBounds: e
        });
      }
    },
    _onKeyDown: function _onKeyDown(t) {
      27 === t.keyCode && this._finish();
    }
  }), o.Map.addInitHook("addHandler", "boxZoom", o.Map.BoxZoom), o.Map.mergeOptions({
    keyboard: !0,
    keyboardPanDelta: 80
  }), o.Map.Keyboard = o.Handler.extend({
    keyCodes: {
      left: [37],
      right: [39],
      down: [40],
      up: [38],
      zoomIn: [187, 107, 61, 171],
      zoomOut: [189, 109, 54, 173]
    },
    initialize: function initialize(t) {
      this._map = t, this._setPanDelta(t.options.keyboardPanDelta), this._setZoomDelta(t.options.zoomDelta);
    },
    addHooks: function addHooks() {
      var t = this._map._container;
      t.tabIndex <= 0 && (t.tabIndex = "0"), o.DomEvent.on(t, {
        focus: this._onFocus,
        blur: this._onBlur,
        mousedown: this._onMouseDown
      }, this), this._map.on({
        focus: this._addHooks,
        blur: this._removeHooks
      }, this);
    },
    removeHooks: function removeHooks() {
      this._removeHooks(), o.DomEvent.off(this._map._container, {
        focus: this._onFocus,
        blur: this._onBlur,
        mousedown: this._onMouseDown
      }, this), this._map.off({
        focus: this._addHooks,
        blur: this._removeHooks
      }, this);
    },
    _onMouseDown: function _onMouseDown() {
      if (!this._focused) {
        var i = e.body,
            n = e.documentElement,
            o = i.scrollTop || n.scrollTop,
            s = i.scrollLeft || n.scrollLeft;
        this._map._container.focus(), t.scrollTo(s, o);
      }
    },
    _onFocus: function _onFocus() {
      this._focused = !0, this._map.fire("focus");
    },
    _onBlur: function _onBlur() {
      this._focused = !1, this._map.fire("blur");
    },
    _setPanDelta: function _setPanDelta(t) {
      var e,
          i,
          n = this._panKeys = {},
          o = this.keyCodes;

      for (e = 0, i = o.left.length; e < i; e++) {
        n[o.left[e]] = [-1 * t, 0];
      }

      for (e = 0, i = o.right.length; e < i; e++) {
        n[o.right[e]] = [t, 0];
      }

      for (e = 0, i = o.down.length; e < i; e++) {
        n[o.down[e]] = [0, t];
      }

      for (e = 0, i = o.up.length; e < i; e++) {
        n[o.up[e]] = [0, -1 * t];
      }
    },
    _setZoomDelta: function _setZoomDelta(t) {
      var e,
          i,
          n = this._zoomKeys = {},
          o = this.keyCodes;

      for (e = 0, i = o.zoomIn.length; e < i; e++) {
        n[o.zoomIn[e]] = t;
      }

      for (e = 0, i = o.zoomOut.length; e < i; e++) {
        n[o.zoomOut[e]] = -t;
      }
    },
    _addHooks: function _addHooks() {
      o.DomEvent.on(e, "keydown", this._onKeyDown, this);
    },
    _removeHooks: function _removeHooks() {
      o.DomEvent.off(e, "keydown", this._onKeyDown, this);
    },
    _onKeyDown: function _onKeyDown(t) {
      if (!(t.altKey || t.ctrlKey || t.metaKey)) {
        var e,
            i = t.keyCode,
            n = this._map;

        if (i in this._panKeys) {
          if (n._panAnim && n._panAnim._inProgress) return;
          e = this._panKeys[i], t.shiftKey && (e = o.point(e).multiplyBy(3)), n.panBy(e), n.options.maxBounds && n.panInsideBounds(n.options.maxBounds);
        } else if (i in this._zoomKeys) n.setZoom(n.getZoom() + (t.shiftKey ? 3 : 1) * this._zoomKeys[i]);else {
          if (27 !== i) return;
          n.closePopup();
        }

        o.DomEvent.stop(t);
      }
    }
  }), o.Map.addInitHook("addHandler", "keyboard", o.Map.Keyboard), o.Handler.MarkerDrag = o.Handler.extend({
    initialize: function initialize(t) {
      this._marker = t;
    },
    addHooks: function addHooks() {
      var t = this._marker._icon;
      this._draggable || (this._draggable = new o.Draggable(t, t, !0)), this._draggable.on({
        dragstart: this._onDragStart,
        drag: this._onDrag,
        dragend: this._onDragEnd
      }, this).enable(), o.DomUtil.addClass(t, "leaflet-marker-draggable");
    },
    removeHooks: function removeHooks() {
      this._draggable.off({
        dragstart: this._onDragStart,
        drag: this._onDrag,
        dragend: this._onDragEnd
      }, this).disable(), this._marker._icon && o.DomUtil.removeClass(this._marker._icon, "leaflet-marker-draggable");
    },
    moved: function moved() {
      return this._draggable && this._draggable._moved;
    },
    _onDragStart: function _onDragStart() {
      this._oldLatLng = this._marker.getLatLng(), this._marker.closePopup().fire("movestart").fire("dragstart");
    },
    _onDrag: function _onDrag(t) {
      var e = this._marker,
          i = e._shadow,
          n = o.DomUtil.getPosition(e._icon),
          s = e._map.layerPointToLatLng(n);

      i && o.DomUtil.setPosition(i, n), e._latlng = s, t.latlng = s, t.oldLatLng = this._oldLatLng, e.fire("move", t).fire("drag", t);
    },
    _onDragEnd: function _onDragEnd(t) {
      delete this._oldLatLng, this._marker.fire("moveend").fire("dragend", t);
    }
  }), o.Control = o.Class.extend({
    options: {
      position: "topright"
    },
    initialize: function initialize(t) {
      o.setOptions(this, t);
    },
    getPosition: function getPosition() {
      return this.options.position;
    },
    setPosition: function setPosition(t) {
      var e = this._map;
      return e && e.removeControl(this), this.options.position = t, e && e.addControl(this), this;
    },
    getContainer: function getContainer() {
      return this._container;
    },
    addTo: function addTo(t) {
      this.remove(), this._map = t;
      var e = this._container = this.onAdd(t),
          i = this.getPosition(),
          n = t._controlCorners[i];
      return o.DomUtil.addClass(e, "leaflet-control"), i.indexOf("bottom") !== -1 ? n.insertBefore(e, n.firstChild) : n.appendChild(e), this;
    },
    remove: function remove() {
      return this._map ? (o.DomUtil.remove(this._container), this.onRemove && this.onRemove(this._map), this._map = null, this) : this;
    },
    _refocusOnMap: function _refocusOnMap(t) {
      this._map && t && t.screenX > 0 && t.screenY > 0 && this._map.getContainer().focus();
    }
  }), o.control = function (t) {
    return new o.Control(t);
  }, o.Map.include({
    addControl: function addControl(t) {
      return t.addTo(this), this;
    },
    removeControl: function removeControl(t) {
      return t.remove(), this;
    },
    _initControlPos: function _initControlPos() {
      function t(t, s) {
        var r = i + t + " " + i + s;
        e[t + s] = o.DomUtil.create("div", r, n);
      }

      var e = this._controlCorners = {},
          i = "leaflet-",
          n = this._controlContainer = o.DomUtil.create("div", i + "control-container", this._container);
      t("top", "left"), t("top", "right"), t("bottom", "left"), t("bottom", "right");
    },
    _clearControlPos: function _clearControlPos() {
      o.DomUtil.remove(this._controlContainer);
    }
  }), o.Control.Zoom = o.Control.extend({
    options: {
      position: "topleft",
      zoomInText: "+",
      zoomInTitle: "Zoom in",
      zoomOutText: "-",
      zoomOutTitle: "Zoom out"
    },
    onAdd: function onAdd(t) {
      var e = "leaflet-control-zoom",
          i = o.DomUtil.create("div", e + " leaflet-bar"),
          n = this.options;
      return this._zoomInButton = this._createButton(n.zoomInText, n.zoomInTitle, e + "-in", i, this._zoomIn), this._zoomOutButton = this._createButton(n.zoomOutText, n.zoomOutTitle, e + "-out", i, this._zoomOut), this._updateDisabled(), t.on("zoomend zoomlevelschange", this._updateDisabled, this), i;
    },
    onRemove: function onRemove(t) {
      t.off("zoomend zoomlevelschange", this._updateDisabled, this);
    },
    disable: function disable() {
      return this._disabled = !0, this._updateDisabled(), this;
    },
    enable: function enable() {
      return this._disabled = !1, this._updateDisabled(), this;
    },
    _zoomIn: function _zoomIn(t) {
      !this._disabled && this._map._zoom < this._map.getMaxZoom() && this._map.zoomIn(this._map.options.zoomDelta * (t.shiftKey ? 3 : 1));
    },
    _zoomOut: function _zoomOut(t) {
      !this._disabled && this._map._zoom > this._map.getMinZoom() && this._map.zoomOut(this._map.options.zoomDelta * (t.shiftKey ? 3 : 1));
    },
    _createButton: function _createButton(t, e, i, n, s) {
      var r = o.DomUtil.create("a", i, n);
      return r.innerHTML = t, r.href = "#", r.title = e, r.setAttribute("role", "button"), r.setAttribute("aria-label", e), o.DomEvent.on(r, "mousedown dblclick", o.DomEvent.stopPropagation).on(r, "click", o.DomEvent.stop).on(r, "click", s, this).on(r, "click", this._refocusOnMap, this), r;
    },
    _updateDisabled: function _updateDisabled() {
      var t = this._map,
          e = "leaflet-disabled";
      o.DomUtil.removeClass(this._zoomInButton, e), o.DomUtil.removeClass(this._zoomOutButton, e), (this._disabled || t._zoom === t.getMinZoom()) && o.DomUtil.addClass(this._zoomOutButton, e), (this._disabled || t._zoom === t.getMaxZoom()) && o.DomUtil.addClass(this._zoomInButton, e);
    }
  }), o.Map.mergeOptions({
    zoomControl: !0
  }), o.Map.addInitHook(function () {
    this.options.zoomControl && (this.zoomControl = new o.Control.Zoom(), this.addControl(this.zoomControl));
  }), o.control.zoom = function (t) {
    return new o.Control.Zoom(t);
  }, o.Control.Attribution = o.Control.extend({
    options: {
      position: "bottomright",
      prefix: '<a href="http://leafletjs.com" title="A JS library for interactive maps">Leaflet</a>'
    },
    initialize: function initialize(t) {
      o.setOptions(this, t), this._attributions = {};
    },
    onAdd: function onAdd(t) {
      t.attributionControl = this, this._container = o.DomUtil.create("div", "leaflet-control-attribution"), o.DomEvent && o.DomEvent.disableClickPropagation(this._container);

      for (var e in t._layers) {
        t._layers[e].getAttribution && this.addAttribution(t._layers[e].getAttribution());
      }

      return this._update(), this._container;
    },
    setPrefix: function setPrefix(t) {
      return this.options.prefix = t, this._update(), this;
    },
    addAttribution: function addAttribution(t) {
      return t ? (this._attributions[t] || (this._attributions[t] = 0), this._attributions[t]++, this._update(), this) : this;
    },
    removeAttribution: function removeAttribution(t) {
      return t ? (this._attributions[t] && (this._attributions[t]--, this._update()), this) : this;
    },
    _update: function _update() {
      if (this._map) {
        var t = [];

        for (var e in this._attributions) {
          this._attributions[e] && t.push(e);
        }

        var i = [];
        this.options.prefix && i.push(this.options.prefix), t.length && i.push(t.join(", ")), this._container.innerHTML = i.join(" | ");
      }
    }
  }), o.Map.mergeOptions({
    attributionControl: !0
  }), o.Map.addInitHook(function () {
    this.options.attributionControl && new o.Control.Attribution().addTo(this);
  }), o.control.attribution = function (t) {
    return new o.Control.Attribution(t);
  }, o.Control.Scale = o.Control.extend({
    options: {
      position: "bottomleft",
      maxWidth: 100,
      metric: !0,
      imperial: !0
    },
    onAdd: function onAdd(t) {
      var e = "leaflet-control-scale",
          i = o.DomUtil.create("div", e),
          n = this.options;
      return this._addScales(n, e + "-line", i), t.on(n.updateWhenIdle ? "moveend" : "move", this._update, this), t.whenReady(this._update, this), i;
    },
    onRemove: function onRemove(t) {
      t.off(this.options.updateWhenIdle ? "moveend" : "move", this._update, this);
    },
    _addScales: function _addScales(t, e, i) {
      t.metric && (this._mScale = o.DomUtil.create("div", e, i)), t.imperial && (this._iScale = o.DomUtil.create("div", e, i));
    },
    _update: function _update() {
      var t = this._map,
          e = t.getSize().y / 2,
          i = t.distance(t.containerPointToLatLng([0, e]), t.containerPointToLatLng([this.options.maxWidth, e]));

      this._updateScales(i);
    },
    _updateScales: function _updateScales(t) {
      this.options.metric && t && this._updateMetric(t), this.options.imperial && t && this._updateImperial(t);
    },
    _updateMetric: function _updateMetric(t) {
      var e = this._getRoundNum(t),
          i = e < 1e3 ? e + " m" : e / 1e3 + " km";

      this._updateScale(this._mScale, i, e / t);
    },
    _updateImperial: function _updateImperial(t) {
      var e,
          i,
          n,
          o = 3.2808399 * t;
      o > 5280 ? (e = o / 5280, i = this._getRoundNum(e), this._updateScale(this._iScale, i + " mi", i / e)) : (n = this._getRoundNum(o), this._updateScale(this._iScale, n + " ft", n / o));
    },
    _updateScale: function _updateScale(t, e, i) {
      t.style.width = Math.round(this.options.maxWidth * i) + "px", t.innerHTML = e;
    },
    _getRoundNum: function _getRoundNum(t) {
      var e = Math.pow(10, (Math.floor(t) + "").length - 1),
          i = t / e;
      return i = i >= 10 ? 10 : i >= 5 ? 5 : i >= 3 ? 3 : i >= 2 ? 2 : 1, e * i;
    }
  }), o.control.scale = function (t) {
    return new o.Control.Scale(t);
  }, o.Control.Layers = o.Control.extend({
    options: {
      collapsed: !0,
      position: "topright",
      autoZIndex: !0,
      hideSingleBase: !1,
      sortLayers: !1,
      sortFunction: function sortFunction(t, e, i, n) {
        return i < n ? -1 : n < i ? 1 : 0;
      }
    },
    initialize: function initialize(t, e, i) {
      o.setOptions(this, i), this._layers = [], this._lastZIndex = 0, this._handlingClick = !1;

      for (var n in t) {
        this._addLayer(t[n], n);
      }

      for (n in e) {
        this._addLayer(e[n], n, !0);
      }
    },
    onAdd: function onAdd(t) {
      return this._initLayout(), this._update(), this._map = t, t.on("zoomend", this._checkDisabledLayers, this), this._container;
    },
    onRemove: function onRemove() {
      this._map.off("zoomend", this._checkDisabledLayers, this);

      for (var t = 0; t < this._layers.length; t++) {
        this._layers[t].layer.off("add remove", this._onLayerChange, this);
      }
    },
    addBaseLayer: function addBaseLayer(t, e) {
      return this._addLayer(t, e), this._map ? this._update() : this;
    },
    addOverlay: function addOverlay(t, e) {
      return this._addLayer(t, e, !0), this._map ? this._update() : this;
    },
    removeLayer: function removeLayer(t) {
      t.off("add remove", this._onLayerChange, this);

      var e = this._getLayer(o.stamp(t));

      return e && this._layers.splice(this._layers.indexOf(e), 1), this._map ? this._update() : this;
    },
    expand: function expand() {
      o.DomUtil.addClass(this._container, "leaflet-control-layers-expanded"), this._form.style.height = null;
      var t = this._map.getSize().y - (this._container.offsetTop + 50);
      return t < this._form.clientHeight ? (o.DomUtil.addClass(this._form, "leaflet-control-layers-scrollbar"), this._form.style.height = t + "px") : o.DomUtil.removeClass(this._form, "leaflet-control-layers-scrollbar"), this._checkDisabledLayers(), this;
    },
    collapse: function collapse() {
      return o.DomUtil.removeClass(this._container, "leaflet-control-layers-expanded"), this;
    },
    _initLayout: function _initLayout() {
      var t = "leaflet-control-layers",
          e = this._container = o.DomUtil.create("div", t),
          i = this.options.collapsed;
      e.setAttribute("aria-haspopup", !0), o.DomEvent.disableClickPropagation(e), o.Browser.touch || o.DomEvent.disableScrollPropagation(e);
      var n = this._form = o.DomUtil.create("form", t + "-list");
      i && (this._map.on("click", this.collapse, this), o.Browser.android || o.DomEvent.on(e, {
        mouseenter: this.expand,
        mouseleave: this.collapse
      }, this));
      var s = this._layersLink = o.DomUtil.create("a", t + "-toggle", e);
      s.href = "#", s.title = "Layers", o.Browser.touch ? o.DomEvent.on(s, "click", o.DomEvent.stop).on(s, "click", this.expand, this) : o.DomEvent.on(s, "focus", this.expand, this), o.DomEvent.on(n, "click", function () {
        setTimeout(o.bind(this._onInputClick, this), 0);
      }, this), i || this.expand(), this._baseLayersList = o.DomUtil.create("div", t + "-base", n), this._separator = o.DomUtil.create("div", t + "-separator", n), this._overlaysList = o.DomUtil.create("div", t + "-overlays", n), e.appendChild(n);
    },
    _getLayer: function _getLayer(t) {
      for (var e = 0; e < this._layers.length; e++) {
        if (this._layers[e] && o.stamp(this._layers[e].layer) === t) return this._layers[e];
      }
    },
    _addLayer: function _addLayer(t, e, i) {
      t.on("add remove", this._onLayerChange, this), this._layers.push({
        layer: t,
        name: e,
        overlay: i
      }), this.options.sortLayers && this._layers.sort(o.bind(function (t, e) {
        return this.options.sortFunction(t.layer, e.layer, t.name, e.name);
      }, this)), this.options.autoZIndex && t.setZIndex && (this._lastZIndex++, t.setZIndex(this._lastZIndex));
    },
    _update: function _update() {
      if (!this._container) return this;
      o.DomUtil.empty(this._baseLayersList), o.DomUtil.empty(this._overlaysList);
      var t,
          e,
          i,
          n,
          s = 0;

      for (i = 0; i < this._layers.length; i++) {
        n = this._layers[i], this._addItem(n), e = e || n.overlay, t = t || !n.overlay, s += n.overlay ? 0 : 1;
      }

      return this.options.hideSingleBase && (t = t && s > 1, this._baseLayersList.style.display = t ? "" : "none"), this._separator.style.display = e && t ? "" : "none", this;
    },
    _onLayerChange: function _onLayerChange(t) {
      this._handlingClick || this._update();

      var e = this._getLayer(o.stamp(t.target)),
          i = e.overlay ? "add" === t.type ? "overlayadd" : "overlayremove" : "add" === t.type ? "baselayerchange" : null;

      i && this._map.fire(i, e);
    },
    _createRadioElement: function _createRadioElement(t, i) {
      var n = '<input type="radio" class="leaflet-control-layers-selector" name="' + t + '"' + (i ? ' checked="checked"' : "") + "/>",
          o = e.createElement("div");
      return o.innerHTML = n, o.firstChild;
    },
    _addItem: function _addItem(t) {
      var i,
          n = e.createElement("label"),
          s = this._map.hasLayer(t.layer);

      t.overlay ? (i = e.createElement("input"), i.type = "checkbox", i.className = "leaflet-control-layers-selector", i.defaultChecked = s) : i = this._createRadioElement("leaflet-base-layers", s), i.layerId = o.stamp(t.layer), o.DomEvent.on(i, "click", this._onInputClick, this);
      var r = e.createElement("span");
      r.innerHTML = " " + t.name;
      var a = e.createElement("div");
      n.appendChild(a), a.appendChild(i), a.appendChild(r);
      var h = t.overlay ? this._overlaysList : this._baseLayersList;
      return h.appendChild(n), this._checkDisabledLayers(), n;
    },
    _onInputClick: function _onInputClick() {
      var t,
          e,
          i,
          n = this._form.getElementsByTagName("input"),
          o = [],
          s = [];

      this._handlingClick = !0;

      for (var r = n.length - 1; r >= 0; r--) {
        t = n[r], e = this._getLayer(t.layerId).layer, i = this._map.hasLayer(e), t.checked && !i ? o.push(e) : !t.checked && i && s.push(e);
      }

      for (r = 0; r < s.length; r++) {
        this._map.removeLayer(s[r]);
      }

      for (r = 0; r < o.length; r++) {
        this._map.addLayer(o[r]);
      }

      this._handlingClick = !1, this._refocusOnMap();
    },
    _checkDisabledLayers: function _checkDisabledLayers() {
      for (var t, e, n = this._form.getElementsByTagName("input"), o = this._map.getZoom(), s = n.length - 1; s >= 0; s--) {
        t = n[s], e = this._getLayer(t.layerId).layer, t.disabled = e.options.minZoom !== i && o < e.options.minZoom || e.options.maxZoom !== i && o > e.options.maxZoom;
      }
    },
    _expand: function _expand() {
      return this.expand();
    },
    _collapse: function _collapse() {
      return this.collapse();
    }
  }), o.control.layers = function (t, e, i) {
    return new o.Control.Layers(t, e, i);
  };
}(window, document);
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/webpack/buildin/module.js */ "./node_modules/webpack/buildin/module.js")(module)))

/***/ }),

/***/ "./assets/js/vendors/places.js":
/*!*************************************!*\
  !*** ./assets/js/vendors/places.js ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(module) {var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;__webpack_require__(/*! core-js/modules/es.symbol */ "./node_modules/core-js/modules/es.symbol.js");

__webpack_require__(/*! core-js/modules/es.symbol.description */ "./node_modules/core-js/modules/es.symbol.description.js");

__webpack_require__(/*! core-js/modules/es.symbol.iterator */ "./node_modules/core-js/modules/es.symbol.iterator.js");

__webpack_require__(/*! core-js/modules/es.symbol.to-string-tag */ "./node_modules/core-js/modules/es.symbol.to-string-tag.js");

__webpack_require__(/*! core-js/modules/es.array.concat */ "./node_modules/core-js/modules/es.array.concat.js");

__webpack_require__(/*! core-js/modules/es.array.every */ "./node_modules/core-js/modules/es.array.every.js");

__webpack_require__(/*! core-js/modules/es.array.filter */ "./node_modules/core-js/modules/es.array.filter.js");

__webpack_require__(/*! core-js/modules/es.array.find */ "./node_modules/core-js/modules/es.array.find.js");

__webpack_require__(/*! core-js/modules/es.array.for-each */ "./node_modules/core-js/modules/es.array.for-each.js");

__webpack_require__(/*! core-js/modules/es.array.index-of */ "./node_modules/core-js/modules/es.array.index-of.js");

__webpack_require__(/*! core-js/modules/es.array.is-array */ "./node_modules/core-js/modules/es.array.is-array.js");

__webpack_require__(/*! core-js/modules/es.array.iterator */ "./node_modules/core-js/modules/es.array.iterator.js");

__webpack_require__(/*! core-js/modules/es.array.join */ "./node_modules/core-js/modules/es.array.join.js");

__webpack_require__(/*! core-js/modules/es.array.map */ "./node_modules/core-js/modules/es.array.map.js");

__webpack_require__(/*! core-js/modules/es.array.reduce */ "./node_modules/core-js/modules/es.array.reduce.js");

__webpack_require__(/*! core-js/modules/es.array.reverse */ "./node_modules/core-js/modules/es.array.reverse.js");

__webpack_require__(/*! core-js/modules/es.array.slice */ "./node_modules/core-js/modules/es.array.slice.js");

__webpack_require__(/*! core-js/modules/es.array.some */ "./node_modules/core-js/modules/es.array.some.js");

__webpack_require__(/*! core-js/modules/es.array.sort */ "./node_modules/core-js/modules/es.array.sort.js");

__webpack_require__(/*! core-js/modules/es.array.splice */ "./node_modules/core-js/modules/es.array.splice.js");

__webpack_require__(/*! core-js/modules/es.array-buffer.slice */ "./node_modules/core-js/modules/es.array-buffer.slice.js");

__webpack_require__(/*! core-js/modules/es.date.now */ "./node_modules/core-js/modules/es.date.now.js");

__webpack_require__(/*! core-js/modules/es.date.to-json */ "./node_modules/core-js/modules/es.date.to-json.js");

__webpack_require__(/*! core-js/modules/es.date.to-string */ "./node_modules/core-js/modules/es.date.to-string.js");

__webpack_require__(/*! core-js/modules/es.function.bind */ "./node_modules/core-js/modules/es.function.bind.js");

__webpack_require__(/*! core-js/modules/es.function.name */ "./node_modules/core-js/modules/es.function.name.js");

__webpack_require__(/*! core-js/modules/es.json.to-string-tag */ "./node_modules/core-js/modules/es.json.to-string-tag.js");

__webpack_require__(/*! core-js/modules/es.math.to-string-tag */ "./node_modules/core-js/modules/es.math.to-string-tag.js");

__webpack_require__(/*! core-js/modules/es.number.constructor */ "./node_modules/core-js/modules/es.number.constructor.js");

__webpack_require__(/*! core-js/modules/es.number.is-nan */ "./node_modules/core-js/modules/es.number.is-nan.js");

__webpack_require__(/*! core-js/modules/es.object.create */ "./node_modules/core-js/modules/es.object.create.js");

__webpack_require__(/*! core-js/modules/es.object.define-property */ "./node_modules/core-js/modules/es.object.define-property.js");

__webpack_require__(/*! core-js/modules/es.object.get-own-property-descriptor */ "./node_modules/core-js/modules/es.object.get-own-property-descriptor.js");

__webpack_require__(/*! core-js/modules/es.object.get-own-property-names */ "./node_modules/core-js/modules/es.object.get-own-property-names.js");

__webpack_require__(/*! core-js/modules/es.object.get-prototype-of */ "./node_modules/core-js/modules/es.object.get-prototype-of.js");

__webpack_require__(/*! core-js/modules/es.object.keys */ "./node_modules/core-js/modules/es.object.keys.js");

__webpack_require__(/*! core-js/modules/es.object.to-string */ "./node_modules/core-js/modules/es.object.to-string.js");

__webpack_require__(/*! core-js/modules/es.parse-float */ "./node_modules/core-js/modules/es.parse-float.js");

__webpack_require__(/*! core-js/modules/es.parse-int */ "./node_modules/core-js/modules/es.parse-int.js");

__webpack_require__(/*! core-js/modules/es.promise */ "./node_modules/core-js/modules/es.promise.js");

__webpack_require__(/*! core-js/modules/es.promise.finally */ "./node_modules/core-js/modules/es.promise.finally.js");

__webpack_require__(/*! core-js/modules/es.reflect.apply */ "./node_modules/core-js/modules/es.reflect.apply.js");

__webpack_require__(/*! core-js/modules/es.reflect.own-keys */ "./node_modules/core-js/modules/es.reflect.own-keys.js");

__webpack_require__(/*! core-js/modules/es.regexp.constructor */ "./node_modules/core-js/modules/es.regexp.constructor.js");

__webpack_require__(/*! core-js/modules/es.regexp.exec */ "./node_modules/core-js/modules/es.regexp.exec.js");

__webpack_require__(/*! core-js/modules/es.regexp.to-string */ "./node_modules/core-js/modules/es.regexp.to-string.js");

__webpack_require__(/*! core-js/modules/es.string.iterator */ "./node_modules/core-js/modules/es.string.iterator.js");

__webpack_require__(/*! core-js/modules/es.string.match */ "./node_modules/core-js/modules/es.string.match.js");

__webpack_require__(/*! core-js/modules/es.string.replace */ "./node_modules/core-js/modules/es.string.replace.js");

__webpack_require__(/*! core-js/modules/es.string.search */ "./node_modules/core-js/modules/es.string.search.js");

__webpack_require__(/*! core-js/modules/es.string.split */ "./node_modules/core-js/modules/es.string.split.js");

__webpack_require__(/*! core-js/modules/es.string.trim */ "./node_modules/core-js/modules/es.string.trim.js");

__webpack_require__(/*! core-js/modules/es.typed-array.uint8-clamped-array */ "./node_modules/core-js/modules/es.typed-array.uint8-clamped-array.js");

__webpack_require__(/*! core-js/modules/es.typed-array.copy-within */ "./node_modules/core-js/modules/es.typed-array.copy-within.js");

__webpack_require__(/*! core-js/modules/es.typed-array.every */ "./node_modules/core-js/modules/es.typed-array.every.js");

__webpack_require__(/*! core-js/modules/es.typed-array.fill */ "./node_modules/core-js/modules/es.typed-array.fill.js");

__webpack_require__(/*! core-js/modules/es.typed-array.filter */ "./node_modules/core-js/modules/es.typed-array.filter.js");

__webpack_require__(/*! core-js/modules/es.typed-array.find */ "./node_modules/core-js/modules/es.typed-array.find.js");

__webpack_require__(/*! core-js/modules/es.typed-array.find-index */ "./node_modules/core-js/modules/es.typed-array.find-index.js");

__webpack_require__(/*! core-js/modules/es.typed-array.for-each */ "./node_modules/core-js/modules/es.typed-array.for-each.js");

__webpack_require__(/*! core-js/modules/es.typed-array.includes */ "./node_modules/core-js/modules/es.typed-array.includes.js");

__webpack_require__(/*! core-js/modules/es.typed-array.index-of */ "./node_modules/core-js/modules/es.typed-array.index-of.js");

__webpack_require__(/*! core-js/modules/es.typed-array.iterator */ "./node_modules/core-js/modules/es.typed-array.iterator.js");

__webpack_require__(/*! core-js/modules/es.typed-array.join */ "./node_modules/core-js/modules/es.typed-array.join.js");

__webpack_require__(/*! core-js/modules/es.typed-array.last-index-of */ "./node_modules/core-js/modules/es.typed-array.last-index-of.js");

__webpack_require__(/*! core-js/modules/es.typed-array.map */ "./node_modules/core-js/modules/es.typed-array.map.js");

__webpack_require__(/*! core-js/modules/es.typed-array.reduce */ "./node_modules/core-js/modules/es.typed-array.reduce.js");

__webpack_require__(/*! core-js/modules/es.typed-array.reduce-right */ "./node_modules/core-js/modules/es.typed-array.reduce-right.js");

__webpack_require__(/*! core-js/modules/es.typed-array.reverse */ "./node_modules/core-js/modules/es.typed-array.reverse.js");

__webpack_require__(/*! core-js/modules/es.typed-array.set */ "./node_modules/core-js/modules/es.typed-array.set.js");

__webpack_require__(/*! core-js/modules/es.typed-array.slice */ "./node_modules/core-js/modules/es.typed-array.slice.js");

__webpack_require__(/*! core-js/modules/es.typed-array.some */ "./node_modules/core-js/modules/es.typed-array.some.js");

__webpack_require__(/*! core-js/modules/es.typed-array.sort */ "./node_modules/core-js/modules/es.typed-array.sort.js");

__webpack_require__(/*! core-js/modules/es.typed-array.subarray */ "./node_modules/core-js/modules/es.typed-array.subarray.js");

__webpack_require__(/*! core-js/modules/es.typed-array.to-locale-string */ "./node_modules/core-js/modules/es.typed-array.to-locale-string.js");

__webpack_require__(/*! core-js/modules/es.typed-array.to-string */ "./node_modules/core-js/modules/es.typed-array.to-string.js");

__webpack_require__(/*! core-js/modules/web.dom-collections.for-each */ "./node_modules/core-js/modules/web.dom-collections.for-each.js");

__webpack_require__(/*! core-js/modules/web.dom-collections.iterator */ "./node_modules/core-js/modules/web.dom-collections.iterator.js");

__webpack_require__(/*! core-js/modules/web.timers */ "./node_modules/core-js/modules/web.timers.js");

__webpack_require__(/*! core-js/modules/web.url.to-json */ "./node_modules/core-js/modules/web.url.to-json.js");

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

!function (t, e) {
  "object" == ( false ? undefined : _typeof(exports)) && "object" == ( false ? undefined : _typeof(module)) ? module.exports = e() :  true ? !(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_FACTORY__ = (e),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)) : undefined;
}(window, function () {
  return function (n) {
    var r = {};

    function i(t) {
      if (r[t]) return r[t].exports;
      var e = r[t] = {
        i: t,
        l: !1,
        exports: {}
      };
      return n[t].call(e.exports, e, e.exports, i), e.l = !0, e.exports;
    }

    return i.m = n, i.c = r, i.d = function (t, e, n) {
      i.o(t, e) || Object.defineProperty(t, e, {
        enumerable: !0,
        get: n
      });
    }, i.r = function (t) {
      "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(t, Symbol.toStringTag, {
        value: "Module"
      }), Object.defineProperty(t, "__esModule", {
        value: !0
      });
    }, i.t = function (e, t) {
      if (1 & t && (e = i(e)), 8 & t) return e;
      if (4 & t && "object" == _typeof(e) && e && e.__esModule) return e;
      var n = Object.create(null);
      if (i.r(n), Object.defineProperty(n, "default", {
        enumerable: !0,
        value: e
      }), 2 & t && "string" != typeof e) for (var r in e) {
        i.d(n, r, function (t) {
          return e[t];
        }.bind(null, r));
      }
      return n;
    }, i.n = function (t) {
      var e = t && t.__esModule ? function () {
        return t["default"];
      } : function () {
        return t;
      };
      return i.d(e, "a", e), e;
    }, i.o = function (t, e) {
      return Object.prototype.hasOwnProperty.call(t, e);
    }, i.p = "", i(i.s = 68);
  }([function (t, e, n) {
    "use strict";

    var r,
        i = n(2);

    function s(t) {
      return t.replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g, "\\$&");
    }

    t.exports = {
      isArray: null,
      isFunction: null,
      isObject: null,
      bind: null,
      each: null,
      map: null,
      mixin: null,
      isMsie: function isMsie(t) {
        if (void 0 === t && (t = navigator.userAgent), /(msie|trident)/i.test(t)) {
          var e = t.match(/(msie |rv:)(\d+(.\d+)?)/i);
          if (e) return e[2];
        }

        return !1;
      },
      escapeRegExChars: function escapeRegExChars(t) {
        return t.replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g, "\\$&");
      },
      isNumber: function isNumber(t) {
        return "number" == typeof t;
      },
      toStr: function toStr(t) {
        return null == t ? "" : t + "";
      },
      cloneDeep: function cloneDeep(t) {
        var n = this.mixin({}, t),
            r = this;
        return this.each(n, function (t, e) {
          t && (r.isArray(t) ? n[e] = [].concat(t) : r.isObject(t) && (n[e] = r.cloneDeep(t)));
        }), n;
      },
      error: function error(t) {
        throw new Error(t);
      },
      every: function every(n, r) {
        var i = !0;
        return n ? (this.each(n, function (t, e) {
          i && (i = r.call(null, t, e, n) && i);
        }), !!i) : i;
      },
      any: function any(n, r) {
        var i = !1;
        return n && this.each(n, function (t, e) {
          if (r.call(null, t, e, n)) return !(i = !0);
        }), i;
      },
      getUniqueId: (r = 0, function () {
        return r++;
      }),
      templatify: function templatify(t) {
        if (this.isFunction(t)) return t;
        var e = i.element(t);
        return "SCRIPT" === e.prop("tagName") ? function () {
          return e.text();
        } : function () {
          return String(t);
        };
      },
      defer: function defer(t) {
        setTimeout(t, 0);
      },
      noop: function noop() {},
      formatPrefix: function formatPrefix(t, e) {
        return e ? "" : t + "-";
      },
      className: function className(t, e, n) {
        return (n ? "" : ".") + t + e;
      },
      escapeHighlightedString: function escapeHighlightedString(t, e, n) {
        e = e || "<em>";
        var r = document.createElement("div");
        r.appendChild(document.createTextNode(e)), n = n || "</em>";
        var i = document.createElement("div");
        i.appendChild(document.createTextNode(n));
        var o = document.createElement("div");
        return o.appendChild(document.createTextNode(t)), o.innerHTML.replace(RegExp(s(r.innerHTML), "g"), e).replace(RegExp(s(i.innerHTML), "g"), n);
      }
    };
  }, function (t, e, n) {
    "use strict";

    function p(e) {
      for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function (t) {
          return Object.getOwnPropertyDescriptor(n, t).enumerable;
        }))), r.forEach(function (t) {
          i(e, t, n[t]);
        });
      }

      return e;
    }

    function i(t, e, n) {
      return e in t ? Object.defineProperty(t, e, {
        value: n,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : t[e] = n, t;
    }

    var r = {},
        o = {};

    e.a = function (t) {
      return r = function (t) {
        var e = t.hitsPerPage,
            n = t.aroundLatLng,
            r = t.aroundRadius,
            i = t.aroundLatLngViaIP,
            o = t.insideBoundingBox,
            s = t.insidePolygon,
            a = t.getRankingInfo,
            c = t.countries,
            u = t.language,
            l = t.type,
            h = {
          countries: c,
          hitsPerPage: e || 5,
          language: u || navigator.language.split("-")[0],
          type: l
        };
        return Array.isArray(c) && (h.countries = h.countries.map(function (t) {
          return t.toLowerCase();
        })), "string" == typeof h.language && (h.language = h.language.toLowerCase()), n ? h.aroundLatLng = n : void 0 !== i && (h.aroundLatLngViaIP = i), p({}, h, {
          aroundRadius: r,
          insideBoundingBox: o,
          insidePolygon: s,
          getRankingInfo: a
        });
      }(p({}, r, t)), o = function (t) {
        var e = t.useDeviceLocation,
            n = void 0 !== e && e,
            r = t.computeQueryParams,
            i = void 0 === r ? function (t) {
          return t;
        } : r,
            o = t.formatInputValue,
            s = t.onHits,
            a = void 0 === s ? function () {} : s,
            c = t.onError;
        return {
          useDeviceLocation: n,
          computeQueryParams: i,
          formatInputValue: o,
          onHits: a,
          onError: void 0 === c ? function (t) {
            throw t;
          } : c,
          onRateLimitReached: t.onRateLimitReached
        };
      }(p({}, o, t)), {
        params: r,
        controls: o
      };
    };
  }, function (t, e, n) {
    "use strict";

    t.exports = {
      element: null
    };
  }, function (t, e) {
    var s = Object.prototype.hasOwnProperty,
        a = Object.prototype.toString;

    t.exports = function (t, e, n) {
      if ("[object Function]" !== a.call(e)) throw new TypeError("iterator must be a function");
      var r = t.length;
      if (r === +r) for (var i = 0; i < r; i++) {
        e.call(n, t[i], i, t);
      } else for (var o in t) {
        s.call(t, o) && e.call(n, t[o], o, t);
      }
    };
  }, function (t, e) {
    t.exports = function (t) {
      return JSON.parse(JSON.stringify(t));
    };
  }, function (t, e) {
    var n;

    n = function () {
      return this;
    }();

    try {
      n = n || new Function("return this")();
    } catch (t) {
      "object" == (typeof window === "undefined" ? "undefined" : _typeof(window)) && (n = window);
    }

    t.exports = n;
  }, function (t, e, n) {
    "use strict";

    n.r(e), e["default"] = "1.16.3";
  }, function (t, e, n) {
    "use strict";

    e.a = '<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 14 20"><path d="M7 0C3.13 0 0 3.13 0 7c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5C5.62 9.5 4.5 8.38 4.5 7S5.62 4.5 7 4.5 9.5 5.62 9.5 7 8.38 9.5 7 9.5z"/></svg>\n';
  }, function (t, e, n) {
    "use strict";

    var a = {
      address: n(7).a,
      city: '<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 18 19"><path d="M12 9V3L9 0 6 3v2H0v14h18V9h-6zm-8 8H2v-2h2v2zm0-4H2v-2h2v2zm0-4H2V7h2v2zm6 8H8v-2h2v2zm0-4H8v-2h2v2zm0-4H8V7h2v2zm0-4H8V3h2v2zm6 12h-2v-2h2v2zm0-4h-2v-2h2v2z"/></svg>\n',
      country: '<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20">\n  <path d="M10 0C4.48 0 0 4.48 0 10s4.48 10 10 10 10-4.48 10-10S15.52 0 10 0zM9 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L7 13v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H6V8h2c.55 0 1-.45 1-1V5h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z"/>\n</svg>\n',
      busStop: '<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 54.9 50.5"><path d="M9.6 12.7H8.5c-2.3 0-4.1 1.9-4.1 4.1v1.1c0 2.2 1.8 4 4 4.1v21.7h-.7c-1.3 0-2.3 1-2.3 2.3h7.1c0-1.3-1-2.3-2.3-2.3h-.5V22.1c2.2-.1 4-1.9 4-4.1v-1.1c0-2.3-1.8-4.2-4.1-4.2zM46 7.6h-7.5c0-1.8-1.5-3.3-3.3-3.3h-3.6c-1.8 0-3.3 1.5-3.3 3.3H21c-2.5 0-4.6 2-4.6 4.6v26.3c0 1.7 1.3 3.1 3 3.1h.8v1.6c0 1.7 1.4 3.1 3.1 3.1 1.7 0 3-1.4 3-3.1v-1.6h14.3v1.6c0 1.7 1.4 3.1 3.1 3.1 1.7 0 3.1-1.4 3.1-3.1v-1.6h.8c1.7 0 3.1-1.4 3.1-3.1V12.2c-.2-2.5-2.2-4.6-4.7-4.6zm-27.4 4.6c0-1.3 1.1-2.4 2.4-2.4h25c1.3 0 2.4 1.1 2.4 2.4v.3c0 1.3-1.1 2.4-2.4 2.4H21c-1.3 0-2.4-1.1-2.4-2.4v-.3zM21 38c-1.5 0-2.7-1.2-2.7-2.7 0-1.5 1.2-2.7 2.7-2.7 1.5 0 2.7 1.2 2.7 2.7 0 1.5-1.2 2.7-2.7 2.7zm0-10.1c-1.3 0-2.4-1.1-2.4-2.4v-6.6c0-1.3 1.1-2.4 2.4-2.4h25c1.3 0 2.4 1.1 2.4 2.4v6.6c0 1.3-1.1 2.4-2.4 2.4H21zm24.8 10c-1.5 0-2.7-1.2-2.7-2.7 0-1.5 1.2-2.7 2.7-2.7 1.5 0 2.7 1.2 2.7 2.7 0 1.5-1.2 2.7-2.7 2.7z"/></svg>\n',
      trainStation: '<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 15 20">\n  <path d="M13.105 20l-2.366-3.354H4.26L1.907 20H0l3.297-4.787c-1.1-.177-2.196-1.287-2.194-2.642V2.68C1.1 1.28 2.317-.002 3.973 0h7.065c1.647-.002 2.863 1.28 2.86 2.676v9.895c.003 1.36-1.094 2.47-2.194 2.647L15 20h-1.895zM6.11 2h2.78c.264 0 .472-.123.472-.27v-.46c0-.147-.22-.268-.472-.27H6.11c-.252.002-.47.123-.47.27v.46c0 .146.206.27.47.27zm6.26 3.952V4.175c-.004-.74-.5-1.387-1.436-1.388H4.066c-.936 0-1.43.648-1.436 1.388v1.777c-.002.86.644 1.384 1.436 1.388h6.868c.793-.004 1.44-.528 1.436-1.388zm-8.465 5.386c-.69-.003-1.254.54-1.252 1.21-.002.673.56 1.217 1.252 1.222.697-.006 1.26-.55 1.262-1.22-.002-.672-.565-1.215-1.262-1.212zm8.42 1.21c-.005-.67-.567-1.213-1.265-1.21-.69-.003-1.253.54-1.25 1.21-.003.673.56 1.217 1.25 1.222.698-.006 1.26-.55 1.264-1.22z"/>\n</svg>\n',
      townhall: '<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path d="M12 .6L2.5 6.9h18.9L12 .6zM3.8 8.2c-.7 0-1.3.6-1.3 1.3v8.8L.3 22.1c-.2.3-.3.5-.3.6 0 .6.8.6 1.3.6h21.5c.4 0 1.3 0 1.3-.6 0-.2-.1-.3-.3-.6l-2.2-3.8V9.5c0-.7-.6-1.3-1.3-1.3H3.8zm2.5 2.5c.7 0 1.1.6 1.3 1.3v7.6H5.1V12c0-.7.5-1.3 1.2-1.3zm5.7 0c.7 0 1.3.6 1.3 1.3v7.6h-2.5V12c-.1-.7.5-1.3 1.2-1.3zm5.7 0c.7 0 1.3.6 1.3 1.3v7.6h-2.5V12c-.1-.7.5-1.3 1.2-1.3z"/></svg>\n',
      airport: '<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path d="M22.9 1.1s1.3.3-4.3 6.5l.7 3.8.2-.2c.4-.4 1-.4 1.3 0 .4.4.4 1 0 1.3l-1.2 1.2.3 1.7.1-.1c.4-.4 1-.4 1.3 0 .4.4.4 1 0 1.3l-1.1 1.1c.2 1.9.3 3.6.1 4.5 0 0-1.2 1.2-1.8.5 0 0-2.3-7.7-3.8-11.1-5.9 6-6.4 5.6-6.4 5.6s1.2 3.8-.2 5.2l-2.3-4.3h.1l-4.3-2.3c1.3-1.3 5.2-.2 5.2-.2s-.5-.4 5.6-6.3C8.9 7.7 1.2 5.5 1.2 5.5c-.7-.7.5-1.8.5-1.8.9-.2 2.6-.1 4.5.1l1.1-1.1c.4-.4 1-.4 1.3 0 .4.4.4 1 0 1.3l1.7.3 1.2-1.2c.4-.4 1-.4 1.3 0 .4.4.4 1 0 1.3l-.2.2 3.8.7c6.2-5.5 6.5-4.2 6.5-4.2z"/></svg>\n'
    };
    e.a = {
      footer: '<div class="ap-footer">\n  <a href="https://www.algolia.com/places" title="Search by Algolia" class="ap-footer-algolia">'.concat('<svg xmlns="http://www.w3.org/2000/svg" width="117" height="17" viewBox="0 0 130 19"><g fill="none" fill-rule="evenodd"><g fill-rule="nonzero"><path fill="#5468FF" d="M59.399.044h13.299a2.372 2.372 0 0 1 2.377 2.364v13.234a2.372 2.372 0 0 1-2.377 2.364H59.399a2.372 2.372 0 0 1-2.377-2.364V2.403A2.368 2.368 0 0 1 59.399.044z"/><path fill="#FFF" d="M66.257 4.582c-2.815 0-5.1 2.272-5.1 5.078 0 2.806 2.284 5.072 5.1 5.072 2.815 0 5.1-2.272 5.1-5.078 0-2.806-2.279-5.072-5.1-5.072zm0 8.652c-1.983 0-3.593-1.602-3.593-3.574 0-1.972 1.61-3.574 3.593-3.574 1.983 0 3.593 1.602 3.593 3.574a3.582 3.582 0 0 1-3.593 3.574zm0-6.418V9.48c0 .076.082.131.153.093l2.377-1.226c.055-.027.071-.093.044-.147a2.96 2.96 0 0 0-2.465-1.487c-.055 0-.11.044-.11.104h.001zm-3.33-1.956l-.312-.31a.783.783 0 0 0-1.106 0l-.372.37a.773.773 0 0 0 0 1.1l.307.305c.049.05.121.038.164-.01.181-.246.378-.48.597-.698.225-.223.455-.42.707-.599.055-.033.06-.109.016-.158h-.001zm5.001-.806v-.616a.781.781 0 0 0-.783-.779h-1.824a.78.78 0 0 0-.783.78v.631c0 .071.066.12.137.104a5.736 5.736 0 0 1 1.588-.223c.52 0 1.035.071 1.534.207a.106.106 0 0 0 .131-.104z"/><path fill="#252C61" d="M5.027 10.246c0 .698-.252 1.246-.757 1.644-.505.397-1.201.596-2.089.596-.888 0-1.615-.138-2.181-.414v-1.214c.358.168.739.301 1.141.397.403.097.778.145 1.125.145.508 0 .884-.097 1.125-.29a.945.945 0 0 0 .363-.779.978.978 0 0 0-.333-.747c-.222-.204-.68-.446-1.375-.725C1.33 8.57.825 8.24.531 7.865c-.294-.372-.44-.82-.44-1.343 0-.655.233-1.17.698-1.547.465-.376 1.09-.564 1.875-.564.752 0 1.5.165 2.245.494l-.408 1.047c-.698-.294-1.321-.44-1.869-.44-.415 0-.73.09-.945.271a.89.89 0 0 0-.322.717c0 .204.043.38.129.524.086.145.227.282.424.411.197.13.551.3 1.063.51.577.24.999.464 1.268.671.269.208.465.442.591.704.125.261.188.57.188.924l-.001.002zm3.98 2.24c-.924 0-1.646-.269-2.167-.808-.521-.539-.781-1.28-.781-2.226 0-.97.242-1.733.725-2.288.483-.555 1.148-.833 1.993-.833.784 0 1.404.238 1.858.714.455.476.682 1.132.682 1.966v.682H7.359c.018.577.174 1.02.467 1.33.294.31.707.464 1.241.464.351 0 .678-.033.98-.099a5.1 5.1 0 0 0 .975-.33v1.026a3.865 3.865 0 0 1-.935.312 5.723 5.723 0 0 1-1.08.091zm7.46-.107l-.252-.827h-.043c-.286.362-.575.608-.865.74-.29.13-.662.195-1.117.195-.584 0-1.039-.158-1.367-.473-.328-.315-.491-.76-.491-1.337 0-.612.227-1.074.682-1.386.455-.312 1.148-.482 2.079-.51l1.026-.032v-.317c0-.38-.089-.663-.266-.85-.177-.189-.452-.283-.824-.283-.304 0-.596.045-.875.134a6.68 6.68 0 0 0-.806.317l-.408-.902a4.414 4.414 0 0 1 1.058-.384 4.856 4.856 0 0 1 1.085-.132c.756 0 1.326.165 1.711.494.385.33.577.847.577 1.552v4.001h-.904zm5.677-6.048c.254 0 .464.018.628.054l-.124 1.176a2.383 2.383 0 0 0-.559-.064c-.505 0-.914.165-1.227.494-.313.33-.47.757-.47 1.284v3.104H19.13V6.44h.988l.167 1.047h.064c.197-.354.454-.636.771-.843a1.83 1.83 0 0 1 1.023-.312h.001zm4.125 6.155c-.899 0-1.582-.262-2.049-.787-.467-.525-.701-1.277-.701-2.259 0-.999.244-1.767.733-2.304.489-.537 1.195-.806 2.119-.806.627 0 1.191.116 1.692.35l-.381 1.014c-.534-.208-.974-.312-1.321-.312-1.028 0-1.542.682-1.542 2.046 0 .666.128 1.166.384 1.501.256.335.631.502 1.125.502a3.23 3.23 0 0 0 1.595-.419v1.101a2.53 2.53 0 0 1-.722.285 4.356 4.356 0 0 1-.932.086v.002zm8.277-.107h-1.268V8.727c0-.458-.092-.8-.277-1.026-.184-.226-.477-.338-.878-.338-.53 0-.919.158-1.168.475-.249.317-.373.848-.373 1.593v2.95H29.32V4.022h1.262v2.122c0 .34-.021.704-.064 1.09h.081a1.76 1.76 0 0 1 .717-.666c.306-.158.663-.236 1.072-.236 1.439 0 2.159.725 2.159 2.175v3.873l-.001-.002zm7.648-6.048c.741 0 1.319.27 1.732.806.414.537.62 1.291.62 2.261 0 .974-.209 1.732-.628 2.275-.419.542-1.001.814-1.746.814-.752 0-1.336-.27-1.751-.81h-.086l-.231.703h-.945V4.023h1.262V6.01l-.021.655-.032.553h.054c.401-.59.992-.886 1.772-.886zm2.917.107h1.375l1.208 3.368c.183.48.304.931.365 1.354h.043c.032-.197.091-.436.177-.717.086-.28.541-1.616 1.364-4.004h1.364l-2.541 6.73c-.462 1.235-1.232 1.853-2.31 1.853-.279 0-.551-.03-.816-.09v-1c.19.043.406.064.65.064.609 0 1.037-.353 1.284-1.058l.22-.559-2.385-5.94h.002zm-3.244.924c-.508 0-.875.15-1.098.448-.224.3-.339.8-.346 1.501v.086c0 .723.115 1.247.344 1.571.229.324.603.486 1.123.486.448 0 .787-.177 1.018-.532.231-.354.346-.867.346-1.536 0-1.35-.462-2.025-1.386-2.025l-.001.001zm-27.28 4.157c.458 0 .826-.128 1.104-.384.278-.256.416-.615.416-1.077v-.516l-.763.032c-.594.021-1.027.121-1.297.298s-.406.448-.406.814c0 .265.079.47.236.615.158.145.394.218.709.218h.001zM8.775 7.287c-.401 0-.722.127-.964.381s-.386.625-.432 1.112h2.696c-.007-.49-.125-.862-.354-1.115-.229-.252-.544-.379-.945-.379l-.001.001z"/></g><path fill="#5468FF" d="M102.162 13.784c0 1.455-.372 2.517-1.123 3.193-.75.676-1.895 1.013-3.44 1.013-.564 0-1.736-.109-2.673-.316l.345-1.689c.783.163 1.819.207 2.361.207.86 0 1.473-.174 1.84-.523.367-.349.548-.866.548-1.553v-.349a6.374 6.374 0 0 1-.838.316 4.151 4.151 0 0 1-1.194.158 4.515 4.515 0 0 1-1.616-.278 3.385 3.385 0 0 1-1.254-.817 3.744 3.744 0 0 1-.811-1.35c-.192-.54-.29-1.505-.29-2.213 0-.665.104-1.498.307-2.054a3.925 3.925 0 0 1 .904-1.433 4.124 4.124 0 0 1 1.441-.926 5.31 5.31 0 0 1 1.945-.365c.696 0 1.337.087 1.961.191a15.86 15.86 0 0 1 1.588.332v8.456h-.001zm-5.955-4.206c0 .893.197 1.885.592 2.3.394.413.904.62 1.528.62.34 0 .663-.049.964-.142a2.75 2.75 0 0 0 .734-.332v-5.29a8.531 8.531 0 0 0-1.413-.18c-.778-.022-1.369.294-1.786.801-.411.507-.619 1.395-.619 2.223zm16.121 0c0 .72-.104 1.264-.318 1.858a4.389 4.389 0 0 1-.904 1.52c-.389.42-.854.746-1.402.975-.548.23-1.391.36-1.813.36-.422-.005-1.26-.125-1.802-.36a4.088 4.088 0 0 1-1.397-.975 4.486 4.486 0 0 1-.909-1.52 5.037 5.037 0 0 1-.329-1.858c0-.719.099-1.41.318-1.999.219-.588.526-1.09.92-1.509.394-.42.865-.74 1.402-.97a4.547 4.547 0 0 1 1.786-.338 4.69 4.69 0 0 1 1.791.338c.548.23 1.019.55 1.402.97.389.42.69.921.909 1.51.23.587.345 1.28.345 1.998h.001zm-2.192.005c0-.92-.203-1.689-.597-2.223-.394-.539-.948-.806-1.654-.806-.707 0-1.26.267-1.654.806-.394.54-.586 1.302-.586 2.223 0 .932.197 1.558.592 2.098.394.545.948.812 1.654.812.707 0 1.26-.272 1.654-.812.394-.545.592-1.166.592-2.098h-.001zm6.963 4.708c-3.511.016-3.511-2.822-3.511-3.274L113.583.95l2.142-.338v10.003c0 .256 0 1.88 1.375 1.885v1.793h-.001zM120.873 14.291h-2.153V5.095l2.153-.338zM119.794 3.75c.718 0 1.304-.579 1.304-1.292 0-.714-.581-1.29-1.304-1.29-.723 0-1.304.577-1.304 1.29 0 .714.586 1.291 1.304 1.291zm6.431 1.012c.707 0 1.304.087 1.786.262.482.174.871.42 1.156.73.285.311.488.735.608 1.182.126.447.186.937.186 1.476v5.481a25.24 25.24 0 0 1-1.495.251c-.668.098-1.419.147-2.251.147a6.829 6.829 0 0 1-1.517-.158 3.213 3.213 0 0 1-1.178-.507 2.455 2.455 0 0 1-.761-.904c-.181-.37-.274-.893-.274-1.438 0-.523.104-.855.307-1.215.208-.36.487-.654.838-.883a3.609 3.609 0 0 1 1.227-.49 7.073 7.073 0 0 1 2.202-.103c.263.027.537.076.833.147v-.349c0-.245-.027-.479-.088-.697a1.486 1.486 0 0 0-.307-.583c-.148-.169-.34-.3-.581-.392a2.536 2.536 0 0 0-.915-.163c-.493 0-.942.06-1.353.131-.411.071-.75.153-1.008.245l-.257-1.749c.268-.093.668-.185 1.183-.278a9.335 9.335 0 0 1 1.66-.142h-.001zm.179 7.73c.657 0 1.145-.038 1.484-.104V10.22a5.097 5.097 0 0 0-1.978-.104c-.241.033-.46.098-.652.191a1.167 1.167 0 0 0-.466.392c-.121.17-.175.267-.175.523 0 .501.175.79.493.981.323.196.75.29 1.293.29h.001zM84.108 4.816c.707 0 1.304.087 1.786.262.482.174.871.42 1.156.73.29.316.487.735.608 1.182.126.447.186.937.186 1.476v5.481a25.24 25.24 0 0 1-1.495.251c-.668.098-1.419.147-2.251.147a6.829 6.829 0 0 1-1.517-.158 3.213 3.213 0 0 1-1.178-.507 2.455 2.455 0 0 1-.761-.904c-.181-.37-.274-.893-.274-1.438 0-.523.104-.855.307-1.215.208-.36.487-.654.838-.883a3.609 3.609 0 0 1 1.227-.49 7.073 7.073 0 0 1 2.202-.103c.257.027.537.076.833.147v-.349c0-.245-.027-.479-.088-.697a1.486 1.486 0 0 0-.307-.583c-.148-.169-.34-.3-.581-.392a2.536 2.536 0 0 0-.915-.163c-.493 0-.942.06-1.353.131-.411.071-.75.153-1.008.245l-.257-1.749c.268-.093.668-.185 1.183-.278a8.89 8.89 0 0 1 1.66-.142h-.001zm.185 7.736c.657 0 1.145-.038 1.484-.104V10.28a5.097 5.097 0 0 0-1.978-.104c-.241.033-.46.098-.652.191a1.167 1.167 0 0 0-.466.392c-.121.17-.175.267-.175.523 0 .501.175.79.493.981.318.191.75.29 1.293.29h.001zm8.683 1.738c-3.511.016-3.511-2.822-3.511-3.274L89.46.948 91.602.61v10.003c0 .256 0 1.88 1.375 1.885v1.793h-.001z"/></g></svg>'.trim(), '</a>\n  using <a href="https://community.algolia.com/places/documentation.html#license" class="ap-footer-osm" title="Algolia Places data © OpenStreetMap contributors">').concat('<svg xmlns="http://www.w3.org/2000/svg" width="12" height="12">\n  <path fill="#797979" fill-rule="evenodd" d="M6.577.5L5.304.005 2.627 1.02 0 0l.992 2.767-.986 2.685.998 2.76-1 2.717.613.22 3.39-3.45.563.06.726-.69s-.717-.92-.91-1.86c.193-.146.184-.14.355-.285C4.1 1.93 6.58.5 6.58.5zm-4.17 11.354l.22.12 2.68-1.05 2.62 1.04 2.644-1.03 1.02-2.717-.33-.944s-1.13 1.26-3.44.878c-.174.29-.25.37-.25.37s-1.11-.31-1.683-.89c-.573.58-.795.71-.795.71l.08.634-2.76 2.89zm6.26-4.395c1.817 0 3.29-1.53 3.29-3.4 0-1.88-1.473-3.4-3.29-3.4s-3.29 1.52-3.29 3.4c0 1.87 1.473 3.4 3.29 3.4z"/>\n</svg>\n'.trim(), " <span>data</span></a>\n  </div>"),
      value: function value(t) {
        var e = t.administrative,
            n = t.city,
            r = t.country,
            i = t.name,
            o = t.type;
        return "".concat(i).concat("country" !== o && void 0 !== r ? "," : "", "\n ").concat(n ? "".concat(n, ",") : "", "\n ").concat(e ? "".concat(e, ",") : "", "\n ").concat(r || "").replace(/\s*\n\s*/g, " ").trim();
      },
      suggestion: function suggestion(t) {
        var e = t.type,
            n = t.highlight,
            r = n.name,
            i = n.administrative,
            o = n.city,
            s = n.country;
        return '<span class="ap-suggestion-icon">'.concat(a[e].trim(), '</span>\n<span class="ap-name">').concat(r, '</span>\n<span class="ap-address">\n  ').concat([o, i, s].filter(function (t) {
          return void 0 !== t;
        }).join(", "), "</span>").replace(/\s*\n\s*/g, " ");
      }
    };
  }, function (t, e, n) {
    "use strict";

    function v(t) {
      for (var e = t[0].value, n = [], r = 1; r < t.length; ++r) {
        "none" !== t[r].matchLevel && n.push({
          index: r,
          words: t[r].matchedWords
        });
      }

      return 0 === n.length ? e : (n.sort(function (t, e) {
        return t.words > e.words ? -1 : t.words < e.words ? 1 : t.index - e.index;
      }), 0 === n[0].index ? "".concat(e, " (").concat(t[n[1].index].value, ")") : "".concat(t[n[0].index].value, " (").concat(e, ")"));
    }

    function r(t) {
      var e = t.formatInputValue,
          n = t.hit,
          r = t.hitIndex,
          i = t.query,
          o = t.rawAnswer;

      try {
        var s = n.locale_names[0],
            a = n.country,
            c = n.administrative && n.administrative[0] !== s ? n.administrative[0] : void 0,
            u = n.city && n.city[0] !== s ? n.city[0] : void 0,
            l = n.suburb && n.suburb[0] !== s ? n.suburb[0] : void 0,
            h = n.county && n.county[0] !== s ? n.county[0] : void 0,
            p = n.postcode && n.postcode.length ? function (t, e) {
          for (var n = e[0].value, r = [], i = 1; i < e.length; ++i) {
            "none" !== e[i].matchLevel && r.push({
              index: i,
              words: e[i].matchedWords
            });
          }

          return 0 === r.length ? {
            postcode: t[0],
            highlightedPostcode: n
          } : (r.sort(function (t, e) {
            return t.words > e.words ? -1 : t.words < e.words ? 1 : t.index - e.index;
          }), {
            postcode: t[r[0].index],
            highlightedPostcode: e[r[0].index].value
          });
        }(n.postcode, n._highlightResult.postcode) : {
          postcode: void 0,
          highlightedPostcode: void 0
        },
            f = p.postcode,
            d = p.highlightedPostcode,
            g = {
          name: v(n._highlightResult.locale_names),
          city: u ? v(n._highlightResult.city) : void 0,
          administrative: c ? v(n._highlightResult.administrative) : void 0,
          country: a ? n._highlightResult.country.value : void 0,
          suburb: l ? v(n._highlightResult.suburb) : void 0,
          county: h ? v(n._highlightResult.county) : void 0,
          postcode: d
        },
            m = {
          name: s,
          administrative: c,
          county: h,
          city: u,
          suburb: l,
          country: a,
          countryCode: function (t) {
            for (var e = 0; e < t.length; e++) {
              var n = t[e].match(/country\/(.*)?/);
              if (n) return n[1];
            }
          }(n._tags),
          type: function (t) {
            var e = {
              country: "country",
              city: "city",
              "amenity/bus_station": "busStop",
              "amenity/townhall": "townhall",
              "railway/station": "trainStation",
              "aeroway/aerodrome": "airport",
              "aeroway/terminal": "airport",
              "aeroway/gate": "airport"
            };

            for (var n in e) {
              if (-1 !== t.indexOf(n)) return e[n];
            }

            return "address";
          }(n._tags),
          latlng: {
            lat: n._geoloc.lat,
            lng: n._geoloc.lng
          },
          postcode: f,
          postcodes: n.postcode && n.postcode.length ? n.postcode : void 0
        };
        return function (i) {
          for (var t = 1; t < arguments.length; t++) {
            var o = null != arguments[t] ? arguments[t] : {},
                e = Object.keys(o);
            "function" == typeof Object.getOwnPropertySymbols && (e = e.concat(Object.getOwnPropertySymbols(o).filter(function (t) {
              return Object.getOwnPropertyDescriptor(o, t).enumerable;
            }))), e.forEach(function (t) {
              var e, n, r;
              e = i, r = o[n = t], n in e ? Object.defineProperty(e, n, {
                value: r,
                enumerable: !0,
                configurable: !0,
                writable: !0
              }) : e[n] = r;
            });
          }

          return i;
        }({}, m, {
          highlight: g,
          hit: n,
          hitIndex: r,
          query: i,
          rawAnswer: o,
          value: e(m)
        });
      } catch (t) {
        return console.error("Could not parse object", n), console.error(t), {
          value: "Could not parse object"
        };
      }
    }

    n.d(e, "a", function () {
      return r;
    });
  }, function (t, e) {
    var n,
        r,
        i = t.exports = {};

    function o() {
      throw new Error("setTimeout has not been defined");
    }

    function s() {
      throw new Error("clearTimeout has not been defined");
    }

    function a(e) {
      if (n === setTimeout) return setTimeout(e, 0);
      if ((n === o || !n) && setTimeout) return n = setTimeout, setTimeout(e, 0);

      try {
        return n(e, 0);
      } catch (t) {
        try {
          return n.call(null, e, 0);
        } catch (t) {
          return n.call(this, e, 0);
        }
      }
    }

    !function () {
      try {
        n = "function" == typeof setTimeout ? setTimeout : o;
      } catch (t) {
        n = o;
      }

      try {
        r = "function" == typeof clearTimeout ? clearTimeout : s;
      } catch (t) {
        r = s;
      }
    }();
    var c,
        u = [],
        l = !1,
        h = -1;

    function p() {
      l && c && (l = !1, c.length ? u = c.concat(u) : h = -1, u.length && f());
    }

    function f() {
      if (!l) {
        var t = a(p);
        l = !0;

        for (var e = u.length; e;) {
          for (c = u, u = []; ++h < e;) {
            c && c[h].run();
          }

          h = -1, e = u.length;
        }

        c = null, l = !1, function (e) {
          if (r === clearTimeout) return clearTimeout(e);
          if ((r === s || !r) && clearTimeout) return r = clearTimeout, clearTimeout(e);

          try {
            r(e);
          } catch (t) {
            try {
              return r.call(null, e);
            } catch (t) {
              return r.call(this, e);
            }
          }
        }(t);
      }
    }

    function d(t, e) {
      this.fun = t, this.array = e;
    }

    function g() {}

    i.nextTick = function (t) {
      var e = new Array(arguments.length - 1);
      if (1 < arguments.length) for (var n = 1; n < arguments.length; n++) {
        e[n - 1] = arguments[n];
      }
      u.push(new d(t, e)), 1 !== u.length || l || a(f);
    }, d.prototype.run = function () {
      this.fun.apply(null, this.array);
    }, i.title = "browser", i.browser = !0, i.env = {}, i.argv = [], i.version = "", i.versions = {}, i.on = g, i.addListener = g, i.once = g, i.off = g, i.removeListener = g, i.removeAllListeners = g, i.emit = g, i.prependListener = g, i.prependOnceListener = g, i.listeners = function (t) {
      return [];
    }, i.binding = function (t) {
      throw new Error("process.binding is not supported");
    }, i.cwd = function () {
      return "/";
    }, i.chdir = function (t) {
      throw new Error("process.chdir is not supported");
    }, i.umask = function () {
      return 0;
    };
  }, function (t, e, i) {
    "use strict";

    var r = i(21);

    function o(t, e) {
      var n = i(3),
          r = this;
      "function" == typeof Error.captureStackTrace ? Error.captureStackTrace(this, this.constructor) : r.stack = new Error().stack || "Cannot get a stacktrace, browser is too old", this.name = "AlgoliaSearchError", this.message = t || "Unknown error", e && n(e, function (t, e) {
        r[e] = t;
      });
    }

    function n(e, n) {
      function t() {
        var t = Array.prototype.slice.call(arguments, 0);
        "string" != typeof t[0] && t.unshift(n), o.apply(this, t), this.name = "AlgoliaSearch" + e + "Error";
      }

      return r(t, o), t;
    }

    r(o, Error), t.exports = {
      AlgoliaSearchError: o,
      UnparsableJSON: n("UnparsableJSON", "Could not parse the incoming response as JSON, see err.more for details"),
      RequestTimeout: n("RequestTimeout", "Request timedout before getting a response"),
      Network: n("Network", "Network issue, see err.more for details"),
      JSONPScriptFail: n("JSONPScriptFail", "<script> was loaded but did not call our provided callback"),
      JSONPScriptError: n("JSONPScriptError", "<script> unable to load due to an `error` event on it"),
      Unknown: n("Unknown", "Unknown error occured")
    };
  }, function (t, e) {
    var n = {}.toString;

    t.exports = Array.isArray || function (t) {
      return "[object Array]" == n.call(t);
    };
  }, function (t, e, n) {
    var o = n(3);

    t.exports = function (n, r) {
      var i = [];
      return o(n, function (t, e) {
        i.push(r(t, e, n));
      }), i;
    };
  }, function (n, o, r) {
    (function (e) {
      function t() {
        var t;

        try {
          t = o.storage.debug;
        } catch (t) {}

        return !t && void 0 !== e && "env" in e && (t = e.env.DEBUG), t;
      }

      (o = n.exports = r(42)).log = function () {
        return "object" == (typeof console === "undefined" ? "undefined" : _typeof(console)) && console.log && Function.prototype.apply.call(console.log, console, arguments);
      }, o.formatArgs = function (t) {
        var e = this.useColors;
        if (t[0] = (e ? "%c" : "") + this.namespace + (e ? " %c" : " ") + t[0] + (e ? "%c " : " ") + "+" + o.humanize(this.diff), !e) return;
        var n = "color: " + this.color;
        t.splice(1, 0, n, "color: inherit");
        var r = 0,
            i = 0;
        t[0].replace(/%[a-zA-Z%]/g, function (t) {
          "%%" !== t && (r++, "%c" === t && (i = r));
        }), t.splice(i, 0, n);
      }, o.save = function (t) {
        try {
          null == t ? o.storage.removeItem("debug") : o.storage.debug = t;
        } catch (t) {}
      }, o.load = t, o.useColors = function () {
        if ("undefined" != typeof window && window.process && "renderer" === window.process.type) return !0;
        return "undefined" != typeof document && document.documentElement && document.documentElement.style && document.documentElement.style.WebkitAppearance || "undefined" != typeof window && window.console && (window.console.firebug || window.console.exception && window.console.table) || "undefined" != typeof navigator && navigator.userAgent && navigator.userAgent.toLowerCase().match(/firefox\/(\d+)/) && 31 <= parseInt(RegExp.$1, 10) || "undefined" != typeof navigator && navigator.userAgent && navigator.userAgent.toLowerCase().match(/applewebkit\/(\d+)/);
      }, o.storage = "undefined" != typeof chrome && void 0 !== chrome.storage ? chrome.storage.local : function () {
        try {
          return window.localStorage;
        } catch (t) {}
      }(), o.colors = ["lightseagreen", "forestgreen", "goldenrod", "dodgerblue", "darkorchid", "crimson"], o.formatters.j = function (t) {
        try {
          return JSON.stringify(t);
        } catch (t) {
          return "[UnexpectedJSONParseError]: " + t.message;
        }
      }, o.enable(t());
    }).call(this, r(10));
  }, function (t, e, n) {
    "use strict";

    var s = n(57),
        a = /\s+/;

    function r(t, e, n, r) {
      var i;
      if (!n) return this;

      for (e = e.split(a), n = r ? function (t, e) {
        return t.bind ? t.bind(e) : function () {
          t.apply(e, [].slice.call(arguments, 0));
        };
      }(n, r) : n, this._callbacks = this._callbacks || {}; i = e.shift();) {
        this._callbacks[i] = this._callbacks[i] || {
          sync: [],
          async: []
        }, this._callbacks[i][t].push(n);
      }

      return this;
    }

    function c(r, i, o) {
      return function () {
        for (var t, e = 0, n = r.length; !t && e < n; e += 1) {
          t = !1 === r[e].apply(i, o);
        }

        return !t;
      };
    }

    t.exports = {
      onSync: function onSync(t, e, n) {
        return r.call(this, "sync", t, e, n);
      },
      onAsync: function onAsync(t, e, n) {
        return r.call(this, "async", t, e, n);
      },
      off: function off(t) {
        var e;
        if (!this._callbacks) return this;
        t = t.split(a);

        for (; e = t.shift();) {
          delete this._callbacks[e];
        }

        return this;
      },
      trigger: function trigger(t) {
        var e, n, r, i, o;
        if (!this._callbacks) return this;
        t = t.split(a), r = [].slice.call(arguments, 1);

        for (; (e = t.shift()) && (n = this._callbacks[e]);) {
          i = c(n.sync, this, [e].concat(r)), o = c(n.async, this, [e].concat(r)), i() && s(o);
        }

        return this;
      }
    };
  }, function (t, e, n) {
    "use strict";

    var r = n(0),
        i = {
      wrapper: {
        position: "relative",
        display: "inline-block"
      },
      hint: {
        position: "absolute",
        top: "0",
        left: "0",
        borderColor: "transparent",
        boxShadow: "none",
        opacity: "1"
      },
      input: {
        position: "relative",
        verticalAlign: "top",
        backgroundColor: "transparent"
      },
      inputWithNoHint: {
        position: "relative",
        verticalAlign: "top"
      },
      dropdown: {
        position: "absolute",
        top: "100%",
        left: "0",
        zIndex: "100",
        display: "none"
      },
      suggestions: {
        display: "block"
      },
      suggestion: {
        whiteSpace: "nowrap",
        cursor: "pointer"
      },
      suggestionChild: {
        whiteSpace: "normal"
      },
      ltr: {
        left: "0",
        right: "auto"
      },
      rtl: {
        left: "auto",
        right: "0"
      },
      defaultClasses: {
        root: "algolia-autocomplete",
        prefix: "aa",
        noPrefix: !1,
        dropdownMenu: "dropdown-menu",
        input: "input",
        hint: "hint",
        suggestions: "suggestions",
        suggestion: "suggestion",
        cursor: "cursor",
        dataset: "dataset",
        empty: "empty"
      },
      appendTo: {
        wrapper: {
          position: "absolute",
          zIndex: "100",
          display: "none"
        },
        input: {},
        inputWithNoHint: {},
        dropdown: {
          display: "block"
        }
      }
    };
    r.isMsie() && r.mixin(i.input, {
      backgroundImage: "url(data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7)"
    }), r.isMsie() && r.isMsie() <= 7 && r.mixin(i.input, {
      marginTop: "-1px"
    }), t.exports = i;
  }, function (t, e, n) {
    "use strict";

    n.r(e), e["default"] = ".algolia-places {\n  width: 100%;\n}\n\n.ap-input, .ap-hint {\n  width: 100%;\n  padding-right: 35px;\n  padding-left: 16px;\n  line-height: 40px;\n  height: 40px;\n  border: 1px solid #CCC;\n  border-radius: 3px;\n  outline: none;\n  font: inherit;\n  appearance: none;\n  -webkit-appearance: none;\n  box-sizing: border-box;\n}\n\n.ap-input::-webkit-search-decoration {\n  -webkit-appearance: none;\n}\n\n.ap-input::-ms-clear {\n  display: none;\n}\n\n.ap-input:hover ~ .ap-input-icon svg,\n.ap-input:focus ~ .ap-input-icon svg,\n.ap-input-icon:hover svg {\n  fill: #aaaaaa;\n}\n\n.ap-dropdown-menu {\n  width: 100%;\n  background: #ffffff;\n  box-shadow: 0 1px 10px rgba(0, 0, 0, 0.2), 0 2px 4px 0 rgba(0, 0, 0, 0.1);\n  border-radius: 3px;\n  margin-top: 3px;\n  overflow: hidden;\n}\n\n.ap-suggestion {\n  cursor: pointer;\n  height: 46px;\n  line-height: 46px;\n  padding-left: 18px;\n  overflow: hidden;\n}\n\n.ap-suggestion em {\n  font-weight: bold;\n  font-style: normal;\n}\n\n.ap-address {\n  font-size: smaller;\n  margin-left: 12px;\n  color: #aaaaaa;\n}\n\n.ap-suggestion-icon {\n  margin-right: 10px;\n  width: 14px;\n  height: 20px;\n  vertical-align: middle;\n}\n\n.ap-suggestion-icon svg {\n  -webkit-transform: scale(0.9) translateY(2px);\n          transform: scale(0.9) translateY(2px);\n  fill: #cfcfcf;\n}\n\n.ap-input-icon {\n  border: 0;\n  background: transparent;\n  position: absolute;\n  top: 0;\n  bottom: 0;\n  right: 16px;\n  outline: none;\n}\n\n.ap-input-icon.ap-icon-pin {\n  cursor: initial;\n}\n\n.ap-input-icon svg {\n  fill: #cfcfcf;\n  position: absolute;\n  top: 50%;\n  right: 0;\n  -webkit-transform: translateY(-50%);\n          transform: translateY(-50%);\n}\n\n.ap-cursor {\n  background: #efefef;\n}\n\n.ap-cursor .ap-suggestion-icon svg {\n  -webkit-transform: scale(1) translateY(2px);\n          transform: scale(1) translateY(2px);\n  fill: #aaaaaa;\n}\n\n.ap-footer {\n  opacity: .8;\n  text-align: right;\n  padding: .5em 1em .5em 0;\n  font-size: 12px;\n  line-height: 12px;\n}\n\n.ap-footer a {\n  color: inherit;\n  text-decoration: none;\n}\n\n.ap-footer a svg {\n  vertical-align: middle;\n}\n\n.ap-footer:hover {\n  opacity: 1;\n}\n";
  }, function (t, e) {
    var s = [],
        a = [];

    function n(t, e) {
      if (e = e || {}, void 0 === t) throw new Error("insert-css: You need to provide a CSS string. Usage: insertCss(cssString[, options]).");
      var n,
          r = !0 === e.prepend ? "prepend" : "append",
          i = void 0 !== e.container ? e.container : document.querySelector("head"),
          o = s.indexOf(i);
      return -1 === o && (o = s.push(i) - 1, a[o] = {}), void 0 !== a[o] && void 0 !== a[o][r] ? n = a[o][r] : (n = a[o][r] = function () {
        var t = document.createElement("style");
        return t.setAttribute("type", "text/css"), t;
      }(), "prepend" == r ? i.insertBefore(n, i.childNodes[0]) : i.appendChild(n)), 65279 === t.charCodeAt(0) && (t = t.substr(1, t.length)), n.styleSheet ? n.styleSheet.cssText += t : n.textContent += t, n;
    }

    t.exports = n, t.exports.insertCss = n;
  }, function (t, e, n) {
    "use strict";

    n.r(e);
    var j = n(1),
        I = n(9),
        N = n(6);

    function D(e) {
      for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function (t) {
          return Object.getOwnPropertyDescriptor(n, t).enumerable;
        }))), r.forEach(function (t) {
          i(e, t, n[t]);
        });
      }

      return e;
    }

    function i(t, e, n) {
      return e in t ? Object.defineProperty(t, e, {
        value: n,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : t[e] = n, t;
    }

    var r = n(8);

    function o(e) {
      for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function (t) {
          return Object.getOwnPropertyDescriptor(n, t).enumerable;
        }))), r.forEach(function (t) {
          s(e, t, n[t]);
        });
      }

      return e;
    }

    function s(t, e, n) {
      return e in t ? Object.defineProperty(t, e, {
        value: n,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : t[e] = n, t;
    }

    function a(t) {
      var e = o({}, r.a, t.templates);
      return {
        source: function (t) {
          var e = t.algoliasearch,
              n = t.clientOptions,
              r = t.apiKey,
              i = t.appId,
              o = t.hitsPerPage,
              s = t.aroundLatLng,
              a = t.aroundRadius,
              c = t.aroundLatLngViaIP,
              u = t.insideBoundingBox,
              l = t.insidePolygon,
              h = t.getRankingInfo,
              p = t.countries,
              f = t.formatInputValue,
              d = t.computeQueryParams,
              g = void 0 === d ? function (t) {
            return t;
          } : d,
              m = t.useDeviceLocation,
              v = void 0 !== m && m,
              y = t.language,
              w = void 0 === y ? navigator.language.split("-")[0] : y,
              b = t.onHits,
              x = void 0 === b ? function () {} : b,
              _ = t.onError,
              C = void 0 === _ ? function (t) {
            throw t;
          } : _,
              S = t.onRateLimitReached,
              A = t.type,
              O = e.initPlaces(i, r, n);
          O.as.addAlgoliaAgent("Algolia Places ".concat(N["default"]));
          var T,
              E = Object(j.a)({
            hitsPerPage: o,
            type: A,
            countries: p,
            language: w,
            aroundLatLng: s,
            aroundRadius: a,
            aroundLatLngViaIP: c,
            insideBoundingBox: u,
            insidePolygon: l,
            getRankingInfo: h,
            formatInputValue: f,
            computeQueryParams: g,
            useDeviceLocation: v,
            onHits: x,
            onError: C,
            onRateLimitReached: S
          }),
              L = E.params,
              P = E.controls,
              k = null;

          function R(r, t) {
            var e = D({}, L, {
              query: r
            });
            return T && (e.aroundLatLng = T), O.search(P.computeQueryParams(e)).then(function (n) {
              var t = n.hits.map(function (t, e) {
                return Object(I.a)({
                  formatInputValue: P.formatInputValue,
                  hit: t,
                  hitIndex: e,
                  query: r,
                  rawAnswer: n
                });
              });
              return P.onHits({
                hits: t,
                query: r,
                rawAnswer: n
              }), t;
            }).then(t)["catch"](function (t) {
              429 !== t.statusCode ? P.onError(t) : P.onRateLimitReached();
            });
          }

          return P.useDeviceLocation && (k = navigator.geolocation.watchPosition(function (t) {
            var e = t.coords;
            T = "".concat(e.latitude, ",").concat(e.longitude);
          })), R.configure = function (t) {
            var e = Object(j.a)(D({}, L, P, t));
            L = e.params, (P = e.controls).useDeviceLocation && null === k ? k = navigator.geolocation.watchPosition(function (t) {
              var e = t.coords;
              T = "".concat(e.latitude, ",").concat(e.longitude);
            }) : P.useDeviceLocation || null === k || (navigator.geolocation.clearWatch(k), T = k = null);
          }, R;
        }(o({}, t, {
          formatInputValue: e.value,
          templates: void 0
        })),
        templates: e,
        displayKey: "value",
        name: "places",
        cache: !1
      };
    }

    n.d(e, "default", function () {
      return a;
    });
  }, function (t, e, n) {
    "use strict";

    var r = n(33),
        i = n(44);
    t.exports = i(r, "(lite) ");
  }, function (t, e) {
    "function" == typeof Object.create ? t.exports = function (t, e) {
      t.super_ = e, t.prototype = Object.create(e.prototype, {
        constructor: {
          value: t,
          enumerable: !1,
          writable: !0,
          configurable: !0
        }
      });
    } : t.exports = function (t, e) {
      t.super_ = e;

      var n = function n() {};

      n.prototype = e.prototype, t.prototype = new n(), t.prototype.constructor = t;
    };
  }, function (t, e, n) {
    t.exports = function (o, s) {
      return function (t, e, n) {
        if ("function" == typeof t && "object" == _typeof(e) || "object" == _typeof(n)) throw new a.AlgoliaSearchError("index.search usage is index.search(query, params, cb)");
        0 === arguments.length || "function" == typeof t ? (n = t, t = "") : 1 !== arguments.length && "function" != typeof e || (n = e, e = void 0), "object" == _typeof(t) && null !== t ? (e = t, t = void 0) : null == t && (t = "");
        var r,
            i = "";
        return void 0 !== t && (i += o + "=" + encodeURIComponent(t)), void 0 !== e && (e.additionalUA && (r = e.additionalUA, delete e.additionalUA), i = this.as._getSearchParams(e, i)), this._search(i, s, n, r);
      };
    };

    var a = n(11);
  }, function (t, e, o) {
    t.exports = function (e, n) {
      var t = o(39),
          r = o(3),
          i = {};
      return r(t(e), function (t) {
        !0 !== n(t) && (i[t] = e[t]);
      }), i;
    };
  }, function (t, e, n) {
    "use strict";

    var o = function o(t) {
      switch (_typeof(t)) {
        case "string":
          return t;

        case "boolean":
          return t ? "true" : "false";

        case "number":
          return isFinite(t) ? t : "";

        default:
          return "";
      }
    };

    t.exports = function (n, r, i, t) {
      return r = r || "&", i = i || "=", null === n && (n = void 0), "object" == _typeof(n) ? a(c(n), function (t) {
        var e = encodeURIComponent(o(t)) + i;
        return s(n[t]) ? a(n[t], function (t) {
          return e + encodeURIComponent(o(t));
        }).join(r) : e + encodeURIComponent(o(n[t]));
      }).join(r) : t ? encodeURIComponent(o(t)) + i + encodeURIComponent(o(n)) : "";
    };

    var s = Array.isArray || function (t) {
      return "[object Array]" === Object.prototype.toString.call(t);
    };

    function a(t, e) {
      if (t.map) return t.map(e);

      for (var n = [], r = 0; r < t.length; r++) {
        n.push(e(t[r], r));
      }

      return n;
    }

    var c = Object.keys || function (t) {
      var e = [];

      for (var n in t) {
        Object.prototype.hasOwnProperty.call(t, n) && e.push(n);
      }

      return e;
    };
  }, function (t, e, n) {
    "use strict";

    var o = n(0),
        r = n(2);

    function i(t) {
      t && t.el || o.error("EventBus initialized without el"), this.$el = r.element(t.el);
    }

    o.mixin(i.prototype, {
      trigger: function trigger(t, e, n, r) {
        var i = o.Event("autocomplete:" + t);
        return this.$el.trigger(i, [e, n, r]), i;
      }
    }), t.exports = i;
  }, function (t, e, n) {
    "use strict";

    t.exports = {
      wrapper: '<span class="%ROOT%"></span>',
      dropdown: '<span class="%PREFIX%%DROPDOWN_MENU%"></span>',
      dataset: '<div class="%PREFIX%%DATASET%-%CLASS%"></div>',
      suggestions: '<span class="%PREFIX%%SUGGESTIONS%"></span>',
      suggestion: '<div class="%PREFIX%%SUGGESTION%"></div>'
    };
  }, function (t, e) {
    t.exports = "0.36.0";
  }, function (t, e, n) {
    "use strict";

    t.exports = function (t) {
      var e = t.match(/Algolia for vanilla JavaScript (\d+\.)(\d+\.)(\d+)/);
      if (e) return [e[1], e[2], e[3]];
    };
  }, function (t, e) {
    "language" in navigator || (navigator.language = navigator.userLanguage && navigator.userLanguage.replace(/-[a-z]{2}$/, String.prototype.toUpperCase) || "en-US");
  }, function (t, e, n) {
    "use strict";

    var r,
        i = "object" == (typeof Reflect === "undefined" ? "undefined" : _typeof(Reflect)) ? Reflect : null,
        l = i && "function" == typeof i.apply ? i.apply : function (t, e, n) {
      return Function.prototype.apply.call(t, e, n);
    };
    r = i && "function" == typeof i.ownKeys ? i.ownKeys : Object.getOwnPropertySymbols ? function (t) {
      return Object.getOwnPropertyNames(t).concat(Object.getOwnPropertySymbols(t));
    } : function (t) {
      return Object.getOwnPropertyNames(t);
    };

    var o = Number.isNaN || function (t) {
      return t != t;
    };

    function s() {
      s.init.call(this);
    }

    ((t.exports = s).EventEmitter = s).prototype._events = void 0, s.prototype._eventsCount = 0, s.prototype._maxListeners = void 0;
    var a = 10;

    function c(t) {
      return void 0 === t._maxListeners ? s.defaultMaxListeners : t._maxListeners;
    }

    function u(t, e, n, r) {
      var i, o, s;
      if ("function" != typeof n) throw new TypeError('The "listener" argument must be of type Function. Received type ' + _typeof(n));
      if (void 0 === (o = t._events) ? (o = t._events = Object.create(null), t._eventsCount = 0) : (void 0 !== o.newListener && (t.emit("newListener", e, n.listener ? n.listener : n), o = t._events), s = o[e]), void 0 === s) s = o[e] = n, ++t._eventsCount;else if ("function" == typeof s ? s = o[e] = r ? [n, s] : [s, n] : r ? s.unshift(n) : s.push(n), 0 < (i = c(t)) && s.length > i && !s.warned) {
        s.warned = !0;
        var a = new Error("Possible EventEmitter memory leak detected. " + s.length + " " + String(e) + " listeners added. Use emitter.setMaxListeners() to increase limit");
        a.name = "MaxListenersExceededWarning", a.emitter = t, a.type = e, a.count = s.length, function (t) {
          console && console.warn && console.warn(t);
        }(a);
      }
      return t;
    }

    function h(t, e, n) {
      var r = {
        fired: !1,
        wrapFn: void 0,
        target: t,
        type: e,
        listener: n
      },
          i = function () {
        for (var t = [], e = 0; e < arguments.length; e++) {
          t.push(arguments[e]);
        }

        this.fired || (this.target.removeListener(this.type, this.wrapFn), this.fired = !0, l(this.listener, this.target, t));
      }.bind(r);

      return i.listener = n, r.wrapFn = i;
    }

    function p(t, e, n) {
      var r = t._events;
      if (void 0 === r) return [];
      var i = r[e];
      return void 0 === i ? [] : "function" == typeof i ? n ? [i.listener || i] : [i] : n ? function (t) {
        for (var e = new Array(t.length), n = 0; n < e.length; ++n) {
          e[n] = t[n].listener || t[n];
        }

        return e;
      }(i) : d(i, i.length);
    }

    function f(t) {
      var e = this._events;

      if (void 0 !== e) {
        var n = e[t];
        if ("function" == typeof n) return 1;
        if (void 0 !== n) return n.length;
      }

      return 0;
    }

    function d(t, e) {
      for (var n = new Array(e), r = 0; r < e; ++r) {
        n[r] = t[r];
      }

      return n;
    }

    Object.defineProperty(s, "defaultMaxListeners", {
      enumerable: !0,
      get: function get() {
        return a;
      },
      set: function set(t) {
        if ("number" != typeof t || t < 0 || o(t)) throw new RangeError('The value of "defaultMaxListeners" is out of range. It must be a non-negative number. Received ' + t + ".");
        a = t;
      }
    }), s.init = function () {
      void 0 !== this._events && this._events !== Object.getPrototypeOf(this)._events || (this._events = Object.create(null), this._eventsCount = 0), this._maxListeners = this._maxListeners || void 0;
    }, s.prototype.setMaxListeners = function (t) {
      if ("number" != typeof t || t < 0 || o(t)) throw new RangeError('The value of "n" is out of range. It must be a non-negative number. Received ' + t + ".");
      return this._maxListeners = t, this;
    }, s.prototype.getMaxListeners = function () {
      return c(this);
    }, s.prototype.emit = function (t) {
      for (var e = [], n = 1; n < arguments.length; n++) {
        e.push(arguments[n]);
      }

      var r = "error" === t,
          i = this._events;
      if (void 0 !== i) r = r && void 0 === i.error;else if (!r) return !1;

      if (r) {
        var o;
        if (0 < e.length && (o = e[0]), o instanceof Error) throw o;
        var s = new Error("Unhandled error." + (o ? " (" + o.message + ")" : ""));
        throw s.context = o, s;
      }

      var a = i[t];
      if (void 0 === a) return !1;
      if ("function" == typeof a) l(a, this, e);else {
        var c = a.length,
            u = d(a, c);

        for (n = 0; n < c; ++n) {
          l(u[n], this, e);
        }
      }
      return !0;
    }, s.prototype.on = s.prototype.addListener = function (t, e) {
      return u(this, t, e, !1);
    }, s.prototype.prependListener = function (t, e) {
      return u(this, t, e, !0);
    }, s.prototype.once = function (t, e) {
      if ("function" != typeof e) throw new TypeError('The "listener" argument must be of type Function. Received type ' + _typeof(e));
      return this.on(t, h(this, t, e)), this;
    }, s.prototype.prependOnceListener = function (t, e) {
      if ("function" != typeof e) throw new TypeError('The "listener" argument must be of type Function. Received type ' + _typeof(e));
      return this.prependListener(t, h(this, t, e)), this;
    }, s.prototype.off = s.prototype.removeListener = function (t, e) {
      var n, r, i, o, s;
      if ("function" != typeof e) throw new TypeError('The "listener" argument must be of type Function. Received type ' + _typeof(e));
      if (void 0 === (r = this._events)) return this;
      if (void 0 === (n = r[t])) return this;
      if (n === e || n.listener === e) 0 == --this._eventsCount ? this._events = Object.create(null) : (delete r[t], r.removeListener && this.emit("removeListener", t, n.listener || e));else if ("function" != typeof n) {
        for (i = -1, o = n.length - 1; 0 <= o; o--) {
          if (n[o] === e || n[o].listener === e) {
            s = n[o].listener, i = o;
            break;
          }
        }

        if (i < 0) return this;
        0 === i ? n.shift() : function (t, e) {
          for (; e + 1 < t.length; e++) {
            t[e] = t[e + 1];
          }

          t.pop();
        }(n, i), 1 === n.length && (r[t] = n[0]), void 0 !== r.removeListener && this.emit("removeListener", t, s || e);
      }
      return this;
    }, s.prototype.removeAllListeners = function (t) {
      var e, n, r;
      if (void 0 === (n = this._events)) return this;
      if (void 0 === n.removeListener) return 0 === arguments.length ? (this._events = Object.create(null), this._eventsCount = 0) : void 0 !== n[t] && (0 == --this._eventsCount ? this._events = Object.create(null) : delete n[t]), this;

      if (0 === arguments.length) {
        var i,
            o = Object.keys(n);

        for (r = 0; r < o.length; ++r) {
          "removeListener" !== (i = o[r]) && this.removeAllListeners(i);
        }

        return this.removeAllListeners("removeListener"), this._events = Object.create(null), this._eventsCount = 0, this;
      }

      if ("function" == typeof (e = n[t])) this.removeListener(t, e);else if (void 0 !== e) for (r = e.length - 1; 0 <= r; r--) {
        this.removeListener(t, e[r]);
      }
      return this;
    }, s.prototype.listeners = function (t) {
      return p(this, t, !0);
    }, s.prototype.rawListeners = function (t) {
      return p(this, t, !1);
    }, s.listenerCount = function (t, e) {
      return "function" == typeof t.listenerCount ? t.listenerCount(e) : f.call(t, e);
    }, s.prototype.listenerCount = f, s.prototype.eventNames = function () {
      return 0 < this._eventsCount ? r(this._events) : [];
    };
  }, function (t, e, n) {
    "use strict";

    t.exports = n(53);
  }, function (t, e, n) {
    "use strict";

    n.r(e);

    var r = n(30),
        g = n.n(r),
        i = n(20),
        m = n.n(i),
        o = n(31),
        v = n.n(o),
        y = (n(29), n(19)),
        w = '<svg width="12" height="12" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg"><path d="M.566 1.698L0 1.13 1.132 0l.565.566L6 4.868 10.302.566 10.868 0 12 1.132l-.566.565L7.132 6l4.302 4.3.566.568L10.868 12l-.565-.566L6 7.132l-4.3 4.302L1.13 12 0 10.868l.566-.565L4.868 6 .566 1.698z"/></svg>\n',
        b = n(7),
        s = n(17),
        a = n(18),
        c = n.n(a),
        x = {
      multiContainers: "Algolia Places: 'container' must point to a single <input> element.\nExample: instantiate the library twice if you want to bind two <inputs>.\n\nSee https://community.algolia.com/places/documentation.html#api-options-container",
      badContainer: "Algolia Places: 'container' must point to an <input> element.\n\nSee https://community.algolia.com/places/documentation.html#api-options-container",
      rateLimitReached: "Algolia Places: Current rate limit reached.\n\nSign up for a free 100,000 queries/month account at\nhttps://www.algolia.com/users/sign_up/places.\n\nOr upgrade your 100,000 queries/month plan by contacting us at\nhttps://community.algolia.com/places/contact.html."
    },
        _ = n(1),
        C = n(9),
        S = n(6),
        A = n(8);

    function O(e) {
      for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function (t) {
          return Object.getOwnPropertyDescriptor(n, t).enumerable;
        }))), r.forEach(function (t) {
          u(e, t, n[t]);
        });
      }

      return e;
    }

    function u(t, e, n) {
      return e in t ? Object.defineProperty(t, e, {
        value: n,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : t[e] = n, t;
    }

    var T = function T(t) {
      var e = t.hitsPerPage,
          n = t.aroundLatLng,
          r = t.getRankingInfo,
          i = t.language,
          o = {};
      return "number" == typeof e && (o.hitsPerPage = e), "string" == typeof i && (o.language = i), "boolean" == typeof r && (o.getRankingInfo = r), "string" == typeof n && (o.aroundLatLng = n), o;
    },
        E = function E(t) {
      var e = t.algoliasearch,
          n = t.clientOptions,
          r = t.apiKey,
          i = t.appId,
          o = t.hitsPerPage,
          s = t.aroundLatLng,
          a = t.getRankingInfo,
          c = t.formatInputValue,
          u = void 0 === c ? A.a.value : c,
          l = t.language,
          h = void 0 === l ? navigator.language.split("-")[0] : l,
          p = t.onHits,
          f = void 0 === p ? function () {} : p,
          d = t.onError,
          g = void 0 === d ? function (t) {
        throw t;
      } : d,
          m = t.onRateLimitReached,
          v = e.initPlaces(i, r, n);
      v.as.addAlgoliaAgent("Algolia Places ".concat(S["default"]));

      var y = Object(_.a)({
        apiKey: r,
        appId: i,
        hitsPerPage: o,
        aroundLatLng: s,
        getRankingInfo: a,
        language: h,
        formatInputValue: u,
        onHits: f,
        onError: g,
        onRateLimitReached: m
      }),
          w = T(y.params),
          b = y.controls,
          x = function x(t, e) {
        var r = t || w.aroundLatLng;
        if (r) return v.reverse(O({}, w, {
          aroundLatLng: r
        })).then(function (n) {
          var t = n.hits.map(function (t, e) {
            return Object(C.a)({
              formatInputValue: b.formatInputValue,
              hit: t,
              hitIndex: e,
              query: r,
              rawAnswer: n
            });
          });
          return b.onHits({
            hits: t,
            query: r,
            rawAnswer: n
          }), t;
        }).then(e)["catch"](function (t) {
          429 !== t.statusCode ? b.onError(t) : b.onRateLimitReached();
        });
        var n = new Error("A location must be provided for reverse geocoding");
        return Promise.reject(n);
      };

      return x.configure = function (t) {
        var e = Object(_.a)(O({}, w, b, t));
        return w = T(e.params), b = e.controls, x;
      }, x;
    };

    function L(e) {
      for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function (t) {
          return Object.getOwnPropertyDescriptor(n, t).enumerable;
        }))), r.forEach(function (t) {
          l(e, t, n[t]);
        });
      }

      return e;
    }

    function l(t, e, n) {
      return e in t ? Object.defineProperty(t, e, {
        value: n,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : t[e] = n, t;
    }

    function P(t) {
      var e = t.container,
          n = t.style,
          r = t.autocompleteOptions,
          i = void 0 === r ? {} : r;

      if (e instanceof NodeList) {
        if (1 < e.length) throw new Error(x.multiContainers);
        return P(L({}, t, {
          container: e[0]
        }));
      }

      if ("string" == typeof e) return P(L({}, t, {
        container: document.querySelectorAll(e)
      }));
      if (!(e instanceof HTMLInputElement)) throw new Error(x.badContainer);
      var o = new g.a(),
          s = "ap".concat(!1 === n ? "-nostyle" : ""),
          a = L({
        autoselect: !0,
        hint: !1,
        cssClasses: {
          root: "algolia-places".concat(!1 === n ? "-nostyle" : ""),
          prefix: s
        },
        debug: !1
      }, i),
          c = Object(y["default"])(L({}, t, {
        algoliasearch: m.a,
        onHits: function onHits(t) {
          var e = t.hits,
              n = t.rawAnswer,
              r = t.query;
          return o.emit("suggestions", {
            rawAnswer: n,
            query: r,
            suggestions: e
          });
        },
        onError: function onError(t) {
          return o.emit("error", t);
        },
        onRateLimitReached: function onRateLimitReached() {
          0 !== o.listenerCount("limit") ? o.emit("limit", {
            message: x.rateLimitReached
          }) : console.log(x.rateLimitReached);
        },
        container: void 0
      })),
          u = v()(e, a, c),
          l = e.parentNode;
      ["selected", "autocompleted"].forEach(function (t) {
        u.on("autocomplete:".concat(t), function (t, e) {
          o.emit("change", {
            rawAnswer: e.rawAnswer,
            query: e.query,
            suggestion: e,
            suggestionIndex: e.hitIndex
          });
        });
      }), u.on("autocomplete:cursorchanged", function (t, e) {
        o.emit("cursorchanged", {
          rawAnswer: e.rawAnswer,
          query: e.query,
          suggestion: e,
          suggestionIndex: e.hitIndex
        });
      });
      var h = document.createElement("button");
      h.setAttribute("type", "button"), h.setAttribute("aria-label", "clear"), h.classList.add("".concat(s, "-input-icon")), h.classList.add("".concat(s, "-icon-clear")), h.innerHTML = w, l.appendChild(h), h.style.display = "none";
      var p = document.createElement("button");
      p.setAttribute("type", "button"), p.setAttribute("aria-label", "focus"), p.classList.add("".concat(s, "-input-icon")), p.classList.add("".concat(s, "-icon-pin")), p.innerHTML = b.a, l.appendChild(p), p.addEventListener("click", function () {
        c.source.configure({
          useDeviceLocation: !0
        }), u.focus();
      }), h.addEventListener("click", function () {
        u.autocomplete.setVal(""), u.focus(), h.style.display = "none", p.style.display = "", o.emit("clear");
      });

      var f = "",
          d = function d() {
        var t = u.val();
        "" === t ? (p.style.display = "", h.style.display = "none", f !== t && o.emit("clear")) : (h.style.display = "", p.style.display = "none"), f = t;
      };

      l.querySelector(".".concat(s, "-input")).addEventListener("input", d);
      return ["open", "close", "getVal"].forEach(function (e) {
        o[e] = function () {
          var t;
          (t = u.autocomplete)[e].apply(t, arguments);
        };
      }), o.destroy = function () {
        var t;
        l.querySelector(".".concat(s, "-input")).removeEventListener("input", d), (t = u.autocomplete).destroy.apply(t, arguments);
      }, o.setVal = function () {
        var t;
        "" === (f = arguments.length <= 0 ? void 0 : arguments[0]) ? (p.style.display = "", h.style.display = "none") : (h.style.display = "", p.style.display = "none"), (t = u.autocomplete).setVal.apply(t, arguments);
      }, o.autocomplete = u, o.search = function () {
        var e = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : "";
        return new Promise(function (t) {
          c.source(e, t);
        });
      }, o.configure = function (t) {
        var e = L({}, t);
        return delete e.onHits, delete e.onError, delete e.onRateLimitReached, delete e.templates, c.source.configure(e), o;
      }, o.reverse = E(L({}, t, {
        algoliasearch: m.a,
        formatInputValue: (t.templates || {}).value,
        onHits: function onHits(t) {
          var e = t.hits,
              n = t.rawAnswer,
              r = t.query;
          return o.emit("reverse", {
            rawAnswer: n,
            query: r,
            suggestions: e
          });
        },
        onError: function onError(t) {
          return o.emit("error", t);
        },
        onRateLimitReached: function onRateLimitReached() {
          0 !== o.listenerCount("limit") ? o.emit("limit", {
            message: x.rateLimitReached
          }) : console.log(x.rateLimitReached);
        }
      })), o;
    }

    n.d(e, "default", function () {
      return P;
    }), c()(s["default"], {
      prepend: !0
    });
  }, function (s, t, A) {
    (function (t) {
      s.exports = o;

      var _ = A(11),
          r = A(34),
          e = A(35),
          n = A(41),
          i = t.env.RESET_APP_DATA_TIMER && parseInt(t.env.RESET_APP_DATA_TIMER, 10) || 12e4;

      function o(e, t, n) {
        var r = A(14)("algoliasearch"),
            i = A(4),
            o = A(12),
            s = A(13),
            a = "Usage: algoliasearch(applicationID, apiKey, opts)";
        if (!0 !== n._allowEmptyCredentials && !e) throw new _.AlgoliaSearchError("Please provide an application ID. " + a);
        if (!0 !== n._allowEmptyCredentials && !t) throw new _.AlgoliaSearchError("Please provide an API key. " + a);
        this.applicationID = e, this.apiKey = t, this.hosts = {
          read: [],
          write: []
        }, n = n || {}, this._timeouts = n.timeouts || {
          connect: 1e3,
          read: 2e3,
          write: 3e4
        }, n.timeout && (this._timeouts.connect = this._timeouts.read = this._timeouts.write = n.timeout);
        var c = n.protocol || "https:";
        if (/:$/.test(c) || (c += ":"), "http:" !== c && "https:" !== c) throw new _.AlgoliaSearchError("protocol must be `http:` or `https:` (was `" + n.protocol + "`)");
        if (this._checkAppIdData(), n.hosts) o(n.hosts) ? (this.hosts.read = i(n.hosts), this.hosts.write = i(n.hosts)) : (this.hosts.read = i(n.hosts.read), this.hosts.write = i(n.hosts.write));else {
          var u = s(this._shuffleResult, function (t) {
            return e + "-" + t + ".algolianet.com";
          }),
              l = (!1 === n.dsn ? "" : "-dsn") + ".algolia.net";
          this.hosts.read = [this.applicationID + l].concat(u), this.hosts.write = [this.applicationID + ".algolia.net"].concat(u);
        }
        this.hosts.read = s(this.hosts.read, h(c)), this.hosts.write = s(this.hosts.write, h(c)), this.extraHeaders = {}, this.cache = n._cache || {}, this._ua = n._ua, this._useCache = !(void 0 !== n._useCache && !n._cache) || n._useCache, this._useRequestCache = this._useCache && n._useRequestCache, this._useFallback = void 0 === n.useFallback || n.useFallback, this._setTimeout = n._setTimeout, r("init done, %j", this);
      }

      function h(e) {
        return function (t) {
          return e + "//" + t.toLowerCase();
        };
      }

      function C(t) {
        if (void 0 === Array.prototype.toJSON) return JSON.stringify(t);
        var e = Array.prototype.toJSON;
        delete Array.prototype.toJSON;
        var n = JSON.stringify(t);
        return Array.prototype.toJSON = e, n;
      }

      function S(t) {
        var e = {};

        for (var n in t) {
          var r;
          if (Object.prototype.hasOwnProperty.call(t, n)) r = "x-algolia-api-key" === n || "x-algolia-application-id" === n ? "**hidden for security purposes**" : t[n], e[n] = r;
        }

        return e;
      }

      o.prototype.initIndex = function (t) {
        return new e(this, t);
      }, o.prototype.setExtraHeader = function (t, e) {
        this.extraHeaders[t.toLowerCase()] = e;
      }, o.prototype.getExtraHeader = function (t) {
        return this.extraHeaders[t.toLowerCase()];
      }, o.prototype.unsetExtraHeader = function (t) {
        delete this.extraHeaders[t.toLowerCase()];
      }, o.prototype.addAlgoliaAgent = function (t) {
        -1 === this._ua.indexOf(";" + t) && (this._ua += ";" + t);
      }, o.prototype._jsonRequest = function (u) {
        this._checkAppIdData();

        var l,
            h,
            p,
            f = A(14)("algoliasearch:" + u.url),
            d = u.additionalUA || "",
            g = u.cache,
            m = this,
            v = 0,
            y = !1,
            w = m._useFallback && m._request.fallback && u.fallback;
        p = 500 < this.apiKey.length && void 0 !== u.body && (void 0 !== u.body.params || void 0 !== u.body.requests) ? (u.body.apiKey = this.apiKey, this._computeRequestHeaders({
          additionalUA: d,
          withApiKey: !1,
          headers: u.headers
        })) : this._computeRequestHeaders({
          additionalUA: d,
          headers: u.headers
        }), void 0 !== u.body && (l = C(u.body)), f("request start");
        var b = [];

        function x(t, e, n) {
          return m._useCache && t && e && void 0 !== e[n];
        }

        function t(t, e) {
          if (x(m._useRequestCache, g, h) && t["catch"](function () {
            delete g[h];
          }), "function" != typeof u.callback) return t.then(e);
          t.then(function (t) {
            r(function () {
              u.callback(null, e(t));
            }, m._setTimeout || setTimeout);
          }, function (t) {
            r(function () {
              u.callback(t);
            }, m._setTimeout || setTimeout);
          });
        }

        if (m._useCache && m._useRequestCache && (h = u.url), m._useCache && m._useRequestCache && l && (h += "_body_" + l), x(m._useRequestCache, g, h)) {
          f("serving request from cache");
          var e = g[h];
          return t("function" != typeof e.then ? m._promise.resolve({
            responseText: e
          }) : e, function (t) {
            return JSON.parse(t.responseText);
          });
        }

        var n = function n(r, o) {
          m._checkAppIdData();

          var s = new Date();

          if (m._useCache && !m._useRequestCache && (h = u.url), m._useCache && !m._useRequestCache && l && (h += "_body_" + o.body), x(!m._useRequestCache, g, h)) {
            f("serving response from cache");
            var t = g[h];
            return m._promise.resolve({
              body: JSON.parse(t),
              responseText: t
            });
          }

          if (v >= m.hosts[u.hostType].length) return !w || y ? (f("could not get any response"), m._promise.reject(new _.AlgoliaSearchError("Cannot connect to the AlgoliaSearch API. Send an email to support@algolia.com to report and resolve the issue. Application id was: " + m.applicationID, {
            debugData: b
          }))) : (f("switching to fallback"), v = 0, o.method = u.fallback.method, o.url = u.fallback.url, o.jsonBody = u.fallback.body, o.jsonBody && (o.body = C(o.jsonBody)), p = m._computeRequestHeaders({
            additionalUA: d,
            headers: u.headers
          }), o.timeouts = m._getTimeoutsForRequest(u.hostType), m._setHostIndexByType(0, u.hostType), y = !0, n(m._request.fallback, o));

          var a = m._getHostByType(u.hostType),
              e = a + o.url,
              i = {
            body: o.body,
            jsonBody: o.jsonBody,
            method: o.method,
            headers: p,
            timeouts: o.timeouts,
            debug: f,
            forceAuthHeaders: o.forceAuthHeaders
          };

          return f("method: %s, url: %s, headers: %j, timeouts: %d", i.method, e, i.headers, i.timeouts), r === m._request.fallback && f("using fallback"), r.call(m, e, i).then(function (t) {
            var e = t && t.body && t.body.message && t.body.status || t.statusCode || t && t.body && 200;
            f("received response: statusCode: %s, computed statusCode: %d, headers: %j", t.statusCode, e, t.headers);
            var n = 2 === Math.floor(e / 100),
                r = new Date();
            if (b.push({
              currentHost: a,
              headers: S(p),
              content: l || null,
              contentLength: void 0 !== l ? l.length : null,
              method: o.method,
              timeouts: o.timeouts,
              url: o.url,
              startTime: s,
              endTime: r,
              duration: r - s,
              statusCode: e
            }), n) return m._useCache && !m._useRequestCache && g && (g[h] = t.responseText), {
              responseText: t.responseText,
              body: t.body
            };
            if (4 !== Math.floor(e / 100)) return v += 1, c();
            f("unrecoverable error");
            var i = new _.AlgoliaSearchError(t.body && t.body.message, {
              debugData: b,
              statusCode: e
            });
            return m._promise.reject(i);
          }, function (t) {
            f("error: %s, stack: %s", t.message, t.stack);
            var e = new Date();
            return b.push({
              currentHost: a,
              headers: S(p),
              content: l || null,
              contentLength: void 0 !== l ? l.length : null,
              method: o.method,
              timeouts: o.timeouts,
              url: o.url,
              startTime: s,
              endTime: e,
              duration: e - s
            }), t instanceof _.AlgoliaSearchError || (t = new _.Unknown(t && t.message, t)), v += 1, t instanceof _.Unknown || t instanceof _.UnparsableJSON || v >= m.hosts[u.hostType].length && (y || !w) ? (t.debugData = b, m._promise.reject(t)) : t instanceof _.RequestTimeout ? (f("retrying request with higher timeout"), m._incrementHostIndex(u.hostType), m._incrementTimeoutMultipler(), o.timeouts = m._getTimeoutsForRequest(u.hostType), n(r, o)) : c();
          });

          function c() {
            return f("retrying request"), m._incrementHostIndex(u.hostType), n(r, o);
          }
        }(m._request, {
          url: u.url,
          method: u.method,
          body: l,
          jsonBody: u.body,
          timeouts: m._getTimeoutsForRequest(u.hostType),
          forceAuthHeaders: u.forceAuthHeaders
        });

        return m._useCache && m._useRequestCache && g && (g[h] = n), t(n, function (t) {
          return t.body;
        });
      }, o.prototype._getSearchParams = function (t, e) {
        if (null == t) return e;

        for (var n in t) {
          null !== n && void 0 !== t[n] && t.hasOwnProperty(n) && (e += "" === e ? "" : "&", e += n + "=" + encodeURIComponent("[object Array]" === Object.prototype.toString.call(t[n]) ? C(t[n]) : t[n]));
        }

        return e;
      }, o.prototype._computeRequestHeaders = function (t) {
        var e = A(3),
            n = {
          "x-algolia-agent": t.additionalUA ? this._ua + ";" + t.additionalUA : this._ua,
          "x-algolia-application-id": this.applicationID
        };
        return !1 !== t.withApiKey && (n["x-algolia-api-key"] = this.apiKey), this.userToken && (n["x-algolia-usertoken"] = this.userToken), this.securityTags && (n["x-algolia-tagfilters"] = this.securityTags), e(this.extraHeaders, function (t, e) {
          n[e] = t;
        }), t.headers && e(t.headers, function (t, e) {
          n[e] = t;
        }), n;
      }, o.prototype.search = function (t, e, n) {
        var r = A(12),
            i = A(13);
        if (!r(t)) throw new Error("Usage: client.search(arrayOfQueries[, callback])");
        "function" == typeof e ? (n = e, e = {}) : void 0 === e && (e = {});
        var o = this,
            s = {
          requests: i(t, function (t) {
            var e = "";
            return void 0 !== t.query && (e += "query=" + encodeURIComponent(t.query)), {
              indexName: t.indexName,
              params: o._getSearchParams(t.params, e)
            };
          })
        },
            a = i(s.requests, function (t, e) {
          return e + "=" + encodeURIComponent("/1/indexes/" + encodeURIComponent(t.indexName) + "?" + t.params);
        }).join("&");
        return void 0 !== e.strategy && (s.strategy = e.strategy), this._jsonRequest({
          cache: this.cache,
          method: "POST",
          url: "/1/indexes/*/queries",
          body: s,
          hostType: "read",
          fallback: {
            method: "GET",
            url: "/1/indexes/*",
            body: {
              params: a
            }
          },
          callback: n
        });
      }, o.prototype.searchForFacetValues = function (t) {
        var e = A(12),
            n = A(13),
            c = "Usage: client.searchForFacetValues([{indexName, params: {facetName, facetQuery, ...params}}, ...queries])";
        if (!e(t)) throw new Error(c);
        var u = this;
        return u._promise.all(n(t, function (t) {
          if (!t || void 0 === t.indexName || void 0 === t.params.facetName || void 0 === t.params.facetQuery) throw new Error(c);

          var e = A(4),
              n = A(23),
              r = t.indexName,
              i = t.params,
              o = i.facetName,
              s = n(e(i), function (t) {
            return "facetName" === t;
          }),
              a = u._getSearchParams(s, "");

          return u._jsonRequest({
            cache: u.cache,
            method: "POST",
            url: "/1/indexes/" + encodeURIComponent(r) + "/facets/" + encodeURIComponent(o) + "/query",
            hostType: "read",
            body: {
              params: a
            }
          });
        }));
      }, o.prototype.setSecurityTags = function (t) {
        if ("[object Array]" === Object.prototype.toString.call(t)) {
          for (var e = [], n = 0; n < t.length; ++n) {
            if ("[object Array]" === Object.prototype.toString.call(t[n])) {
              for (var r = [], i = 0; i < t[n].length; ++i) {
                r.push(t[n][i]);
              }

              e.push("(" + r.join(",") + ")");
            } else e.push(t[n]);
          }

          t = e.join(",");
        }

        this.securityTags = t;
      }, o.prototype.setUserToken = function (t) {
        this.userToken = t;
      }, o.prototype.clearCache = function () {
        this.cache = {};
      }, o.prototype.setRequestTimeout = function (t) {
        t && (this._timeouts.connect = this._timeouts.read = this._timeouts.write = t);
      }, o.prototype.setTimeouts = function (t) {
        this._timeouts = t;
      }, o.prototype.getTimeouts = function () {
        return this._timeouts;
      }, o.prototype._getAppIdData = function () {
        var t = n.get(this.applicationID);
        return null !== t && this._cacheAppIdData(t), t;
      }, o.prototype._setAppIdData = function (t) {
        return t.lastChange = new Date().getTime(), this._cacheAppIdData(t), n.set(this.applicationID, t);
      }, o.prototype._checkAppIdData = function () {
        var t = this._getAppIdData(),
            e = new Date().getTime();

        return null === t || e - t.lastChange > i ? this._resetInitialAppIdData(t) : t;
      }, o.prototype._resetInitialAppIdData = function (t) {
        var e = t || {};
        return e.hostIndexes = {
          read: 0,
          write: 0
        }, e.timeoutMultiplier = 1, e.shuffleResult = e.shuffleResult || function (t) {
          var e,
              n,
              r = t.length;

          for (; 0 !== r;) {
            n = Math.floor(Math.random() * r), e = t[r -= 1], t[r] = t[n], t[n] = e;
          }

          return t;
        }([1, 2, 3]), this._setAppIdData(e);
      }, o.prototype._cacheAppIdData = function (t) {
        this._hostIndexes = t.hostIndexes, this._timeoutMultiplier = t.timeoutMultiplier, this._shuffleResult = t.shuffleResult;
      }, o.prototype._partialAppIdDataUpdate = function (t) {
        var e = A(3),
            n = this._getAppIdData();

        return e(t, function (t, e) {
          n[e] = t;
        }), this._setAppIdData(n);
      }, o.prototype._getHostByType = function (t) {
        return this.hosts[t][this._getHostIndexByType(t)];
      }, o.prototype._getTimeoutMultiplier = function () {
        return this._timeoutMultiplier;
      }, o.prototype._getHostIndexByType = function (t) {
        return this._hostIndexes[t];
      }, o.prototype._setHostIndexByType = function (t, e) {
        var n = A(4)(this._hostIndexes);
        return n[e] = t, this._partialAppIdDataUpdate({
          hostIndexes: n
        }), t;
      }, o.prototype._incrementHostIndex = function (t) {
        return this._setHostIndexByType((this._getHostIndexByType(t) + 1) % this.hosts[t].length, t);
      }, o.prototype._incrementTimeoutMultipler = function () {
        var t = Math.max(this._timeoutMultiplier + 1, 4);
        return this._partialAppIdDataUpdate({
          timeoutMultiplier: t
        });
      }, o.prototype._getTimeoutsForRequest = function (t) {
        return {
          connect: this._timeouts.connect * this._timeoutMultiplier,
          complete: this._timeouts[t] * this._timeoutMultiplier
        };
      };
    }).call(this, A(10));
  }, function (t, e) {
    t.exports = function (t, e) {
      e(t, 0);
    };
  }, function (t, e, a) {
    var n = a(22),
        r = a(36),
        i = a(37);

    function o(t, e) {
      this.indexName = e, this.as = t, this.typeAheadArgs = null, this.typeAheadValueOption = null, this.cache = {};
    }

    (t.exports = o).prototype.clearCache = function () {
      this.cache = {};
    }, o.prototype.search = n("query"), o.prototype.similarSearch = r(n("similarQuery"), i("index.similarSearch(query[, callback])", "index.search({ similarQuery: query }[, callback])")), o.prototype.browse = function (t, e, n) {
      var r,
          i,
          o = a(38);
      0 === arguments.length || 1 === arguments.length && "function" == typeof t ? (n = t, t = void (r = 0)) : "number" == typeof t ? (r = t, "number" == typeof e ? i = e : "function" == typeof e && (n = e, i = void 0), e = t = void 0) : "object" == _typeof(t) ? ("function" == typeof e && (n = e), e = t, t = void 0) : "string" == typeof t && "function" == typeof e && (n = e, e = void 0), e = o({}, e || {}, {
        page: r,
        hitsPerPage: i,
        query: t
      });

      var s = this.as._getSearchParams(e, "");

      return this.as._jsonRequest({
        method: "POST",
        url: "/1/indexes/" + encodeURIComponent(this.indexName) + "/browse",
        body: {
          params: s
        },
        hostType: "read",
        callback: n
      });
    }, o.prototype.browseFrom = function (t, e) {
      return this.as._jsonRequest({
        method: "POST",
        url: "/1/indexes/" + encodeURIComponent(this.indexName) + "/browse",
        body: {
          cursor: t
        },
        hostType: "read",
        callback: e
      });
    }, o.prototype.searchForFacetValues = function (t, e) {
      var n = a(4),
          r = a(23);
      if (void 0 === t.facetName || void 0 === t.facetQuery) throw new Error("Usage: index.searchForFacetValues({facetName, facetQuery, ...params}[, callback])");

      var i = t.facetName,
          o = r(n(t), function (t) {
        return "facetName" === t;
      }),
          s = this.as._getSearchParams(o, "");

      return this.as._jsonRequest({
        method: "POST",
        url: "/1/indexes/" + encodeURIComponent(this.indexName) + "/facets/" + encodeURIComponent(i) + "/query",
        hostType: "read",
        body: {
          params: s
        },
        callback: e
      });
    }, o.prototype.searchFacet = r(function (t, e) {
      return this.searchForFacetValues(t, e);
    }, i("index.searchFacet(params[, callback])", "index.searchForFacetValues(params[, callback])")), o.prototype._search = function (t, e, n, r) {
      return this.as._jsonRequest({
        cache: this.cache,
        method: "POST",
        url: e || "/1/indexes/" + encodeURIComponent(this.indexName) + "/query",
        body: {
          params: t
        },
        hostType: "read",
        fallback: {
          method: "GET",
          url: "/1/indexes/" + encodeURIComponent(this.indexName),
          body: {
            params: t
          }
        },
        callback: n,
        additionalUA: r
      });
    }, o.prototype.getObject = function (t, e, n) {
      1 !== arguments.length && "function" != typeof e || (n = e, e = void 0);
      var r = "";

      if (void 0 !== e) {
        r = "?attributes=";

        for (var i = 0; i < e.length; ++i) {
          0 !== i && (r += ","), r += e[i];
        }
      }

      return this.as._jsonRequest({
        method: "GET",
        url: "/1/indexes/" + encodeURIComponent(this.indexName) + "/" + encodeURIComponent(t) + r,
        hostType: "read",
        callback: n
      });
    }, o.prototype.getObjects = function (t, n, e) {
      var r = a(12),
          i = a(13);
      if (!r(t)) throw new Error("Usage: index.getObjects(arrayOfObjectIDs[, callback])");
      var o = this;
      1 !== arguments.length && "function" != typeof n || (e = n, n = void 0);
      var s = {
        requests: i(t, function (t) {
          var e = {
            indexName: o.indexName,
            objectID: t
          };
          return n && (e.attributesToRetrieve = n.join(",")), e;
        })
      };
      return this.as._jsonRequest({
        method: "POST",
        url: "/1/indexes/*/objects",
        hostType: "read",
        body: s,
        callback: e
      });
    }, o.prototype.as = null, o.prototype.indexName = null, o.prototype.typeAheadArgs = null, o.prototype.typeAheadValueOption = null;
  }, function (t, e) {
    t.exports = function (t, e) {
      var n = !1;
      return function () {
        return n || (console.warn(e), n = !0), t.apply(this, arguments);
      };
    };
  }, function (t, e) {
    t.exports = function (t, e) {
      var n = t.toLowerCase().replace(/[\.\(\)]/g, "");
      return "algoliasearch: `" + t + "` was replaced by `" + e + "`. Please see https://github.com/algolia/algoliasearch-client-javascript/wiki/Deprecated#" + n;
    };
  }, function (t, e, n) {
    var i = n(3);

    t.exports = function n(r) {
      var t = Array.prototype.slice.call(arguments);
      return i(t, function (t) {
        for (var e in t) {
          t.hasOwnProperty(e) && ("object" == _typeof(r[e]) && "object" == _typeof(t[e]) ? r[e] = n({}, r[e], t[e]) : void 0 !== t[e] && (r[e] = t[e]));
        }
      }), r;
    };
  }, function (t, e, n) {
    "use strict";

    var p = Object.prototype.hasOwnProperty,
        f = Object.prototype.toString,
        r = Array.prototype.slice,
        d = n(40),
        i = Object.prototype.propertyIsEnumerable,
        g = !i.call({
      toString: null
    }, "toString"),
        m = i.call(function () {}, "prototype"),
        v = ["toString", "toLocaleString", "valueOf", "hasOwnProperty", "isPrototypeOf", "propertyIsEnumerable", "constructor"],
        y = function y(t) {
      var e = t.constructor;
      return e && e.prototype === t;
    },
        o = {
      $applicationCache: !0,
      $console: !0,
      $external: !0,
      $frame: !0,
      $frameElement: !0,
      $frames: !0,
      $innerHeight: !0,
      $innerWidth: !0,
      $outerHeight: !0,
      $outerWidth: !0,
      $pageXOffset: !0,
      $pageYOffset: !0,
      $parent: !0,
      $scrollLeft: !0,
      $scrollTop: !0,
      $scrollX: !0,
      $scrollY: !0,
      $self: !0,
      $webkitIndexedDB: !0,
      $webkitStorageInfo: !0,
      $window: !0
    },
        w = function () {
      if ("undefined" == typeof window) return !1;

      for (var t in window) {
        try {
          if (!o["$" + t] && p.call(window, t) && null !== window[t] && "object" == _typeof(window[t])) try {
            y(window[t]);
          } catch (t) {
            return !0;
          }
        } catch (t) {
          return !0;
        }
      }

      return !1;
    }(),
        s = function s(t) {
      var e = null !== t && "object" == _typeof(t),
          n = "[object Function]" === f.call(t),
          r = d(t),
          i = e && "[object String]" === f.call(t),
          o = [];

      if (!e && !n && !r) throw new TypeError("Object.keys called on a non-object");
      var s = m && n;
      if (i && 0 < t.length && !p.call(t, 0)) for (var a = 0; a < t.length; ++a) {
        o.push(String(a));
      }
      if (r && 0 < t.length) for (var c = 0; c < t.length; ++c) {
        o.push(String(c));
      } else for (var u in t) {
        s && "prototype" === u || !p.call(t, u) || o.push(String(u));
      }
      if (g) for (var l = function (t) {
        if ("undefined" == typeof window || !w) return y(t);

        try {
          return y(t);
        } catch (t) {
          return !1;
        }
      }(t), h = 0; h < v.length; ++h) {
        l && "constructor" === v[h] || !p.call(t, v[h]) || o.push(v[h]);
      }
      return o;
    };

    s.shim = function () {
      if (Object.keys) {
        if (!function () {
          return 2 === (Object.keys(arguments) || "").length;
        }(1, 2)) {
          var e = Object.keys;

          Object.keys = function (t) {
            return d(t) ? e(r.call(t)) : e(t);
          };
        }
      } else Object.keys = s;

      return Object.keys || s;
    }, t.exports = s;
  }, function (t, e, n) {
    "use strict";

    var r = Object.prototype.toString;

    t.exports = function (t) {
      var e = r.call(t),
          n = "[object Arguments]" === e;
      return n || (n = "[object Array]" !== e && null !== t && "object" == _typeof(t) && "number" == typeof t.length && 0 <= t.length && "[object Function]" === r.call(t.callee)), n;
    };
  }, function (u, t, l) {
    (function (r) {
      var n,
          i = l(14)("algoliasearch:src/hostIndexState.js"),
          o = "algoliasearch-client-js",
          s = {
        state: {},
        set: function set(t, e) {
          return this.state[t] = e, this.state[t];
        },
        get: function get(t) {
          return this.state[t] || null;
        }
      },
          t = {
        set: function set(e, t) {
          s.set(e, t);

          try {
            var n = JSON.parse(r.localStorage[o]);
            return n[e] = t, r.localStorage[o] = JSON.stringify(n), n[e];
          } catch (t) {
            return a(e, t);
          }
        },
        get: function get(e) {
          try {
            return JSON.parse(r.localStorage[o])[e] || null;
          } catch (t) {
            return a(e, t);
          }
        }
      };

      function a(t, e) {
        return i("localStorage failed with", e), function () {
          try {
            r.localStorage.removeItem(o);
          } catch (t) {}
        }(), (n = s).get(t);
      }

      function e(t, e) {
        return 1 === arguments.length ? n.get(t) : n.set(t, e);
      }

      function c() {
        try {
          return "localStorage" in r && null !== r.localStorage && (r.localStorage[o] || r.localStorage.setItem(o, JSON.stringify({})), !0);
        } catch (t) {
          return !1;
        }
      }

      n = c() ? t : s, u.exports = {
        get: e,
        set: e,
        supportsLocalStorage: c
      };
    }).call(this, l(5));
  }, function (t, a, e) {
    var c;

    function n(t) {
      function r() {
        if (r.enabled) {
          var i = r,
              t = +new Date(),
              e = t - (c || t);
          i.diff = e, i.prev = c, i.curr = t, c = t;

          for (var o = new Array(arguments.length), n = 0; n < o.length; n++) {
            o[n] = arguments[n];
          }

          o[0] = a.coerce(o[0]), "string" != typeof o[0] && o.unshift("%O");
          var s = 0;
          o[0] = o[0].replace(/%([a-zA-Z%])/g, function (t, e) {
            if ("%%" === t) return t;
            s++;
            var n = a.formatters[e];

            if ("function" == typeof n) {
              var r = o[s];
              t = n.call(i, r), o.splice(s, 1), s--;
            }

            return t;
          }), a.formatArgs.call(i, o), (r.log || a.log || console.log.bind(console)).apply(i, o);
        }
      }

      return r.namespace = t, r.enabled = a.enabled(t), r.useColors = a.useColors(), r.color = function (t) {
        var e,
            n = 0;

        for (e in t) {
          n = (n << 5) - n + t.charCodeAt(e), n |= 0;
        }

        return a.colors[Math.abs(n) % a.colors.length];
      }(t), "function" == typeof a.init && a.init(r), r;
    }

    (a = t.exports = n.debug = n["default"] = n).coerce = function (t) {
      return t instanceof Error ? t.stack || t.message : t;
    }, a.disable = function () {
      a.enable("");
    }, a.enable = function (t) {
      a.save(t), a.names = [], a.skips = [];

      for (var e = ("string" == typeof t ? t : "").split(/[\s,]+/), n = e.length, r = 0; r < n; r++) {
        e[r] && ("-" === (t = e[r].replace(/\*/g, ".*?"))[0] ? a.skips.push(new RegExp("^" + t.substr(1) + "$")) : a.names.push(new RegExp("^" + t + "$")));
      }
    }, a.enabled = function (t) {
      var e, n;

      for (e = 0, n = a.skips.length; e < n; e++) {
        if (a.skips[e].test(t)) return !1;
      }

      for (e = 0, n = a.names.length; e < n; e++) {
        if (a.names[e].test(t)) return !0;
      }

      return !1;
    }, a.humanize = e(43), a.names = [], a.skips = [], a.formatters = {};
  }, function (t, e) {
    var r = 36e5,
        i = 864e5;

    function o(t, e, n) {
      if (!(t < e)) return t < 1.5 * e ? Math.floor(t / e) + " " + n : Math.ceil(t / e) + " " + n + "s";
    }

    t.exports = function (t, e) {
      e = e || {};

      var n = _typeof(t);

      if ("string" == n && 0 < t.length) return function (t) {
        if (100 < (t = String(t)).length) return;
        var e = /^((?:\d+)?\.?\d+) *(milliseconds?|msecs?|ms|seconds?|secs?|s|minutes?|mins?|m|hours?|hrs?|h|days?|d|years?|yrs?|y)?$/i.exec(t);
        if (!e) return;
        var n = parseFloat(e[1]);

        switch ((e[2] || "ms").toLowerCase()) {
          case "years":
          case "year":
          case "yrs":
          case "yr":
          case "y":
            return 315576e5 * n;

          case "days":
          case "day":
          case "d":
            return n * i;

          case "hours":
          case "hour":
          case "hrs":
          case "hr":
          case "h":
            return n * r;

          case "minutes":
          case "minute":
          case "mins":
          case "min":
          case "m":
            return 6e4 * n;

          case "seconds":
          case "second":
          case "secs":
          case "sec":
          case "s":
            return 1e3 * n;

          case "milliseconds":
          case "millisecond":
          case "msecs":
          case "msec":
          case "ms":
            return n;

          default:
            return;
        }
      }(t);
      if ("number" == n && !1 === isNaN(t)) return e["long"] ? function (t) {
        return o(t, i, "day") || o(t, r, "hour") || o(t, 6e4, "minute") || o(t, 1e3, "second") || t + " ms";
      }(t) : function (t) {
        if (i <= t) return Math.round(t / i) + "d";
        if (r <= t) return Math.round(t / r) + "h";
        if (6e4 <= t) return Math.round(t / 6e4) + "m";
        if (1e3 <= t) return Math.round(t / 1e3) + "s";
        return t + "ms";
      }(t);
      throw new Error("val is not a non-empty string or a valid number. val=" + JSON.stringify(t));
    };
  }, function (t, e, a) {
    "use strict";

    var c = a(45),
        d = c.Promise || a(46).Promise;

    t.exports = function (t, e) {
      var n = a(21),
          h = a(11),
          p = a(47),
          i = a(48),
          r = a(49);

      function o(t, e, n) {
        return (n = a(4)(n || {}))._ua = n._ua || o.ua, new s(t, e, n);
      }

      e = e || "", o.version = a(52), o.ua = "Algolia for vanilla JavaScript " + e + o.version, o.initPlaces = r(o), c.__algolia = {
        debug: a(14),
        algoliasearch: o
      };
      var f = {
        hasXMLHttpRequest: "XMLHttpRequest" in c,
        hasXDomainRequest: "XDomainRequest" in c
      };

      function s() {
        t.apply(this, arguments);
      }

      return f.hasXMLHttpRequest && (f.cors = "withCredentials" in new XMLHttpRequest()), n(s, t), (s.prototype._request = function (u, l) {
        return new d(function (t, n) {
          if (f.cors || f.hasXDomainRequest) {
            u = p(u, l.headers);
            var r,
                i,
                e = l.body,
                o = f.cors ? new XMLHttpRequest() : new XDomainRequest(),
                s = !1;
            r = setTimeout(a, l.timeouts.connect), o.onprogress = function () {
              s || c();
            }, "onreadystatechange" in o && (o.onreadystatechange = function () {
              !s && 1 < o.readyState && c();
            }), o.onload = function () {
              if (i) return;
              var e;
              clearTimeout(r);

              try {
                e = {
                  body: JSON.parse(o.responseText),
                  responseText: o.responseText,
                  statusCode: o.status,
                  headers: o.getAllResponseHeaders && o.getAllResponseHeaders() || {}
                };
              } catch (t) {
                e = new h.UnparsableJSON({
                  more: o.responseText
                });
              }

              e instanceof h.UnparsableJSON ? n(e) : t(e);
            }, o.onerror = function (t) {
              if (i) return;
              clearTimeout(r), n(new h.Network({
                more: t
              }));
            }, o instanceof XMLHttpRequest ? (o.open(l.method, u, !0), l.forceAuthHeaders && (o.setRequestHeader("x-algolia-application-id", l.headers["x-algolia-application-id"]), o.setRequestHeader("x-algolia-api-key", l.headers["x-algolia-api-key"]))) : o.open(l.method, u), f.cors && (e && ("POST" === l.method ? o.setRequestHeader("content-type", "application/x-www-form-urlencoded") : o.setRequestHeader("content-type", "application/json")), o.setRequestHeader("accept", "application/json")), e ? o.send(e) : o.send();
          } else n(new h.Network("CORS not supported"));

          function a() {
            i = !0, o.abort(), n(new h.RequestTimeout());
          }

          function c() {
            s = !0, clearTimeout(r), r = setTimeout(a, l.timeouts.complete);
          }
        });
      }).fallback = function (t, e) {
        return t = p(t, e.headers), new d(function (n, r) {
          i(t, e, function (t, e) {
            t ? r(t) : n(e);
          });
        });
      }, s.prototype._promise = {
        reject: function reject(t) {
          return d.reject(t);
        },
        resolve: function resolve(t) {
          return d.resolve(t);
        },
        delay: function delay(e) {
          return new d(function (t) {
            setTimeout(t, e);
          });
        },
        all: function all(t) {
          return d.all(t);
        }
      }, o;
    };
  }, function (n, t, e) {
    (function (t) {
      var e;
      e = "undefined" != typeof window ? window : void 0 !== t ? t : "undefined" != typeof self ? self : {}, n.exports = e;
    }).call(this, e(5));
  }, function (t, e, n) {
    (function ($, q) {
      t.exports = function () {
        "use strict";

        function u(t) {
          return "function" == typeof t;
        }

        var n = Array.isArray ? Array.isArray : function (t) {
          return "[object Array]" === Object.prototype.toString.call(t);
        },
            r = 0,
            e = void 0,
            i = void 0,
            s = function s(t, e) {
          p[r] = t, p[r + 1] = e, 2 === (r += 2) && (i ? i(f) : d());
        },
            t = "undefined" != typeof window ? window : void 0,
            o = t || {},
            a = o.MutationObserver || o.WebKitMutationObserver,
            c = "undefined" == typeof self && void 0 !== $ && "[object process]" === {}.toString.call($),
            l = "undefined" != typeof Uint8ClampedArray && "undefined" != typeof importScripts && "undefined" != typeof MessageChannel;

        function h() {
          var t = setTimeout;
          return function () {
            return t(f, 1);
          };
        }

        var p = new Array(1e3);

        function f() {
          for (var t = 0; t < r; t += 2) {
            var e = p[t],
                n = p[t + 1];
            e(n), p[t] = void 0, p[t + 1] = void 0;
          }

          r = 0;
        }

        var d = void 0;

        function g(t, e) {
          var n = this,
              r = new this.constructor(y);
          void 0 === r[v] && I(r);
          var i = n._state;

          if (i) {
            var o = arguments[i - 1];
            s(function () {
              return R(i, r, o, n._result);
            });
          } else P(n, r, t, e);

          return r;
        }

        function m(t) {
          if (t && "object" == _typeof(t) && t.constructor === this) return t;
          var e = new this(y);
          return O(e, t), e;
        }

        d = c ? function () {
          return $.nextTick(f);
        } : a ? function () {
          var t = 0,
              e = new a(f),
              n = document.createTextNode("");
          return e.observe(n, {
            characterData: !0
          }), function () {
            n.data = t = ++t % 2;
          };
        }() : l ? function () {
          var t = new MessageChannel();
          return t.port1.onmessage = f, function () {
            return t.port2.postMessage(0);
          };
        }() : void 0 === t ? function () {
          try {
            var t = Function("return this")().require("vertx");

            return void 0 === (e = t.runOnLoop || t.runOnContext) ? h() : function () {
              e(f);
            };
          } catch (t) {
            return h();
          }
        }() : h();
        var v = Math.random().toString(36).substring(2);

        function y() {}

        var w = void 0,
            b = 1,
            x = 2,
            _ = {
          error: null
        };

        function C(t) {
          try {
            return t.then;
          } catch (t) {
            return _.error = t, _;
          }
        }

        function S(t, e, n, r) {
          try {
            t.call(e, n, r);
          } catch (t) {
            return t;
          }
        }

        function A(t, e, n) {
          e.constructor === t.constructor && n === g && e.constructor.resolve === m ? function (e, t) {
            t._state === b ? E(e, t._result) : t._state === x ? L(e, t._result) : P(t, void 0, function (t) {
              return O(e, t);
            }, function (t) {
              return L(e, t);
            });
          }(t, e) : n === _ ? (L(t, _.error), _.error = null) : void 0 === n ? E(t, e) : u(n) ? function (t, r, i) {
            s(function (e) {
              var n = !1,
                  t = S(i, r, function (t) {
                n || (n = !0, r !== t ? O(e, t) : E(e, t));
              }, function (t) {
                n || (n = !0, L(e, t));
              }, e._label);
              !n && t && (n = !0, L(e, t));
            }, t);
          }(t, e, n) : E(t, e);
        }

        function O(t, e) {
          t === e ? L(t, new TypeError("You cannot resolve a promise with itself")) : function (t) {
            var e = _typeof(t);

            return null !== t && ("object" == e || "function" == e);
          }(e) ? A(t, e, C(e)) : E(t, e);
        }

        function T(t) {
          t._onerror && t._onerror(t._result), k(t);
        }

        function E(t, e) {
          t._state === w && (t._result = e, t._state = b, 0 !== t._subscribers.length && s(k, t));
        }

        function L(t, e) {
          t._state === w && (t._state = x, t._result = e, s(T, t));
        }

        function P(t, e, n, r) {
          var i = t._subscribers,
              o = i.length;
          t._onerror = null, i[o] = e, i[o + b] = n, i[o + x] = r, 0 === o && t._state && s(k, t);
        }

        function k(t) {
          var e = t._subscribers,
              n = t._state;

          if (0 !== e.length) {
            for (var r = void 0, i = void 0, o = t._result, s = 0; s < e.length; s += 3) {
              r = e[s], i = e[s + n], r ? R(n, r, i, o) : i(o);
            }

            t._subscribers.length = 0;
          }
        }

        function R(t, e, n, r) {
          var i = u(n),
              o = void 0,
              s = void 0,
              a = void 0,
              c = void 0;

          if (i) {
            if ((o = function (t, e) {
              try {
                return t(e);
              } catch (t) {
                return _.error = t, _;
              }
            }(n, r)) === _ ? (c = !0, s = o.error, o.error = null) : a = !0, e === o) return void L(e, new TypeError("A promises callback cannot return that same promise."));
          } else o = r, a = !0;

          e._state !== w || (i && a ? O(e, o) : c ? L(e, s) : t === b ? E(e, o) : t === x && L(e, o));
        }

        var j = 0;

        function I(t) {
          t[v] = j++, t._state = void 0, t._result = void 0, t._subscribers = [];
        }

        var N = function () {
          function t(t, e) {
            this._instanceConstructor = t, this.promise = new t(y), this.promise[v] || I(this.promise), n(e) ? (this.length = e.length, this._remaining = e.length, this._result = new Array(this.length), 0 === this.length ? E(this.promise, this._result) : (this.length = this.length || 0, this._enumerate(e), 0 === this._remaining && E(this.promise, this._result))) : L(this.promise, new Error("Array Methods must be provided an Array"));
          }

          return t.prototype._enumerate = function (t) {
            for (var e = 0; this._state === w && e < t.length; e++) {
              this._eachEntry(t[e], e);
            }
          }, t.prototype._eachEntry = function (e, t) {
            var n = this._instanceConstructor,
                r = n.resolve;

            if (r === m) {
              var i = C(e);
              if (i === g && e._state !== w) this._settledAt(e._state, t, e._result);else if ("function" != typeof i) this._remaining--, this._result[t] = e;else if (n === D) {
                var o = new n(y);
                A(o, e, i), this._willSettleAt(o, t);
              } else this._willSettleAt(new n(function (t) {
                return t(e);
              }), t);
            } else this._willSettleAt(r(e), t);
          }, t.prototype._settledAt = function (t, e, n) {
            var r = this.promise;
            r._state === w && (this._remaining--, t === x ? L(r, n) : this._result[e] = n), 0 === this._remaining && E(r, this._result);
          }, t.prototype._willSettleAt = function (t, e) {
            var n = this;
            P(t, void 0, function (t) {
              return n._settledAt(b, e, t);
            }, function (t) {
              return n._settledAt(x, e, t);
            });
          }, t;
        }(),
            D = function () {
          function e(t) {
            this[v] = j++, this._result = this._state = void 0, this._subscribers = [], y !== t && ("function" != typeof t && function () {
              throw new TypeError("You must pass a resolver function as the first argument to the promise constructor");
            }(), this instanceof e ? function (e, t) {
              try {
                t(function (t) {
                  O(e, t);
                }, function (t) {
                  L(e, t);
                });
              } catch (t) {
                L(e, t);
              }
            }(this, t) : function () {
              throw new TypeError("Failed to construct 'Promise': Please use the 'new' operator, this object constructor cannot be called as a function.");
            }());
          }

          return e.prototype["catch"] = function (t) {
            return this.then(null, t);
          }, e.prototype["finally"] = function (e) {
            var n = this.constructor;
            return u(e) ? this.then(function (t) {
              return n.resolve(e()).then(function () {
                return t;
              });
            }, function (t) {
              return n.resolve(e()).then(function () {
                throw t;
              });
            }) : this.then(e, e);
          }, e;
        }();

        return D.prototype.then = g, D.all = function (t) {
          return new N(this, t).promise;
        }, D.race = function (i) {
          var o = this;
          return n(i) ? new o(function (t, e) {
            for (var n = i.length, r = 0; r < n; r++) {
              o.resolve(i[r]).then(t, e);
            }
          }) : new o(function (t, e) {
            return e(new TypeError("You must pass an array to race."));
          });
        }, D.resolve = m, D.reject = function (t) {
          var e = new this(y);
          return L(e, t), e;
        }, D._setScheduler = function (t) {
          i = t;
        }, D._setAsap = function (t) {
          s = t;
        }, D._asap = s, D.polyfill = function () {
          var t = void 0;
          if (void 0 !== q) t = q;else if ("undefined" != typeof self) t = self;else try {
            t = Function("return this")();
          } catch (t) {
            throw new Error("polyfill failed because global object is unavailable in this environment");
          }
          var e = t.Promise;

          if (e) {
            var n = null;

            try {
              n = Object.prototype.toString.call(e.resolve());
            } catch (t) {}

            if ("[object Promise]" === n && !e.cast) return;
          }

          t.Promise = D;
        }, D.Promise = D;
      }();
    }).call(this, n(10), n(5));
  }, function (t, e, n) {
    "use strict";

    t.exports = function (t, e) {
      /\?/.test(t) ? t += "&" : t += "?";
      return t + r(e);
    };

    var r = n(24);
  }, function (t, e, n) {
    "use strict";

    t.exports = function (t, e, n) {
      if ("GET" !== e.method) return void n(new Error("Method " + e.method + " " + t + " is not supported by JSONP."));
      e.debug("JSONP: start");
      var r = !1,
          i = !1;
      f += 1;
      var o = document.getElementsByTagName("head")[0],
          s = document.createElement("script"),
          a = "algoliaJSONP_" + f,
          c = !1;
      window[a] = function (t) {
        !function () {
          try {
            delete window[a], delete window[a + "_loaded"];
          } catch (t) {
            window[a] = window[a + "_loaded"] = void 0;
          }
        }(), i ? e.debug("JSONP: Late answer, ignoring") : (r = !0, h(), n(null, {
          body: t,
          responseText: JSON.stringify(t)
        }));
      }, t += "&callback=" + a, e.jsonBody && e.jsonBody.params && (t += "&" + e.jsonBody.params);
      var u = setTimeout(function () {
        e.debug("JSONP: Script timeout"), i = !0, h(), n(new p.RequestTimeout());
      }, e.timeouts.complete);

      function l() {
        e.debug("JSONP: success"), c || i || (c = !0, r || (e.debug("JSONP: Fail. Script loaded but did not call the callback"), h(), n(new p.JSONPScriptFail())));
      }

      function h() {
        clearTimeout(u), s.onload = null, s.onreadystatechange = null, s.onerror = null, o.removeChild(s);
      }

      s.onreadystatechange = function () {
        "loaded" !== this.readyState && "complete" !== this.readyState || l();
      }, s.onload = l, s.onerror = function () {
        if (e.debug("JSONP: Script error"), c || i) return;
        h(), n(new p.JSONPScriptError());
      }, s.async = !0, s.defer = !0, s.src = t, o.appendChild(s);
    };

    var p = n(11),
        f = 0;
  }, function (t, e, a) {
    t.exports = function (s) {
      return function (t, e, n) {
        var r = a(4);
        (n = n && r(n) || {}).hosts = n.hosts || ["places-dsn.algolia.net", "places-1.algolianet.com", "places-2.algolianet.com", "places-3.algolianet.com"], 0 !== arguments.length && "object" != _typeof(t) && void 0 !== t || (e = t = "", n._allowEmptyCredentials = !0);
        var i = s(t, e, n),
            o = i.initIndex("places");
        return o.search = u("query", "/1/places/query"), o.reverse = function (t, e) {
          var n = c.encode(t);
          return this.as._jsonRequest({
            method: "GET",
            url: "/1/places/reverse?" + n,
            hostType: "read",
            callback: e
          });
        }, o.getObject = function (t, e) {
          return this.as._jsonRequest({
            method: "GET",
            url: "/1/places/" + encodeURIComponent(t),
            hostType: "read",
            callback: e
          });
        }, o;
      };
    };

    var c = a(50),
        u = a(22);
  }, function (t, e, n) {
    "use strict";

    e.decode = e.parse = n(51), e.encode = e.stringify = n(24);
  }, function (t, e, n) {
    "use strict";

    t.exports = function (t, e, n, r) {
      e = e || "&", n = n || "=";
      var i = {};
      if ("string" != typeof t || 0 === t.length) return i;
      var o = /\+/g;
      t = t.split(e);
      var s = 1e3;
      r && "number" == typeof r.maxKeys && (s = r.maxKeys);
      var a,
          c,
          u = t.length;
      0 < s && s < u && (u = s);

      for (var l = 0; l < u; ++l) {
        var h,
            p,
            f,
            d,
            g = t[l].replace(o, "%20"),
            m = g.indexOf(n);
        p = 0 <= m ? (h = g.substr(0, m), g.substr(m + 1)) : (h = g, ""), f = decodeURIComponent(h), d = decodeURIComponent(p), a = i, c = f, Object.prototype.hasOwnProperty.call(a, c) ? v(i[f]) ? i[f].push(d) : i[f] = [i[f], d] : i[f] = d;
      }

      return i;
    };

    var v = Array.isArray || function (t) {
      return "[object Array]" === Object.prototype.toString.call(t);
    };
  }, function (t, e, n) {
    "use strict";

    t.exports = "3.32.0";
  }, function (t, e, n) {
    "use strict";

    var c = n(54);
    n(2).element = c;
    var r = n(0);
    r.isArray = c.isArray, r.isFunction = c.isFunction, r.isObject = c.isPlainObject, r.bind = c.proxy, r.each = function (t, n) {
      c.each(t, function (t, e) {
        return n(e, t);
      });
    }, r.map = c.map, r.mixin = c.extend, r.Event = c.Event;
    var u = "aaAutocomplete",
        l = n(55),
        h = n(25);

    function i(t, o, s, a) {
      s = r.isArray(s) ? s : [].slice.call(arguments, 2);
      var e = c(t).each(function (t, e) {
        var n = c(e),
            r = new h({
          el: n
        }),
            i = a || new l({
          input: n,
          eventBus: r,
          dropdownMenuContainer: o.dropdownMenuContainer,
          hint: void 0 === o.hint || !!o.hint,
          minLength: o.minLength,
          autoselect: o.autoselect,
          autoselectOnBlur: o.autoselectOnBlur,
          tabAutocomplete: o.tabAutocomplete,
          openOnFocus: o.openOnFocus,
          templates: o.templates,
          debug: o.debug,
          clearOnSelected: o.clearOnSelected,
          cssClasses: o.cssClasses,
          datasets: s,
          keyboardShortcuts: o.keyboardShortcuts,
          appendTo: o.appendTo,
          autoWidth: o.autoWidth,
          ariaLabel: o.ariaLabel || e.getAttribute("aria-label")
        });
        n.data(u, i);
      });
      return e.autocomplete = {}, r.each(["open", "close", "getVal", "setVal", "destroy", "getWrapper"], function (o) {
        e.autocomplete[o] = function () {
          var r,
              i = arguments;
          return e.each(function (t, e) {
            var n = c(e).data(u);
            r = n[o].apply(n, i);
          }), r;
        };
      }), e;
    }

    i.sources = l.sources, i.escapeHighlightedString = r.escapeHighlightedString;
    var o = ("autocomplete" in window),
        s = window.autocomplete;
    i.noConflict = function () {
      return o ? window.autocomplete = s : delete window.autocomplete, i;
    }, t.exports = i;
  }, function (t, e) {
    var Q, r, n;
    n = window, t.exports = (Q = n, function (l) {
      var h,
          e = 1,
          u = Array.prototype.slice,
          p = l.isFunction,
          f = function f(t) {
        return "string" == typeof t;
      },
          d = {},
          o = {},
          n = ("onfocusin" in Q),
          r = {
        focus: "focusin",
        blur: "focusout"
      },
          g = {
        mouseenter: "mouseover",
        mouseleave: "mouseout"
      };

      function m(t) {
        return t._zid || (t._zid = e++);
      }

      function s(t, e, n, r) {
        if ((e = v(e)).ns) var i = function (t) {
          return new RegExp("(?:^| )" + t.replace(" ", " .* ?") + "(?: |$)");
        }(e.ns);
        return (d[m(t)] || []).filter(function (t) {
          return t && (!e.e || t.e == e.e) && (!e.ns || i.test(t.ns)) && (!n || m(t.fn) === m(n)) && (!r || t.sel == r);
        });
      }

      function v(t) {
        var e = ("" + t).split(".");
        return {
          e: e[0],
          ns: e.slice(1).sort().join(" ")
        };
      }

      function y(t, e) {
        return t.del && !n && t.e in r || !!e;
      }

      function w(t) {
        return g[t] || n && r[t] || t;
      }

      function b(i, t, e, o, s, a, c) {
        var n = m(i),
            u = d[n] || (d[n] = []);
        t.split(/\s/).forEach(function (t) {
          if ("ready" == t) return l(document).ready(e);
          var n = v(t);
          n.fn = e, n.sel = s, n.e in g && (e = function e(t) {
            var e = t.relatedTarget;
            if (!e || e !== this && !l.contains(this, e)) return n.fn.apply(this, arguments);
          });
          var r = (n.del = a) || e;
          n.proxy = function (t) {
            if (!(t = C(t)).isImmediatePropagationStopped()) {
              try {
                var e = Object.getOwnPropertyDescriptor(t, "data");
                e && !e.writable || (t.data = o);
              } catch (t) {}

              var n = r.apply(i, t._args == h ? [t] : [t].concat(t._args));
              return !1 === n && (t.preventDefault(), t.stopPropagation()), n;
            }
          }, n.i = u.length, u.push(n), "addEventListener" in i && i.addEventListener(w(n.e), n.proxy, y(n, c));
        });
      }

      function x(e, t, n, r, i) {
        var o = m(e);
        (t || "").split(/\s/).forEach(function (t) {
          s(e, t, n, r).forEach(function (t) {
            delete d[o][t.i], "removeEventListener" in e && e.removeEventListener(w(t.e), t.proxy, y(t, i));
          });
        });
      }

      o.click = o.mousedown = o.mouseup = o.mousemove = "MouseEvents", l.event = {
        add: b,
        remove: x
      }, l.proxy = function (t, e) {
        var n = 2 in arguments && u.call(arguments, 2);

        if (p(t)) {
          var r = function r() {
            return t.apply(e, n ? n.concat(u.call(arguments)) : arguments);
          };

          return r._zid = m(t), r;
        }

        if (f(e)) return n ? (n.unshift(t[e], t), l.proxy.apply(null, n)) : l.proxy(t[e], t);
        throw new TypeError("expected function");
      }, l.fn.bind = function (t, e, n) {
        return this.on(t, e, n);
      }, l.fn.unbind = function (t, e) {
        return this.off(t, e);
      }, l.fn.one = function (t, e, n, r) {
        return this.on(t, e, n, r, 1);
      };

      var a = function a() {
        return !0;
      },
          _ = function _() {
        return !1;
      },
          i = /^([A-Z]|returnValue$|layer[XY]$|webkitMovement[XY]$)/,
          t = {
        preventDefault: "isDefaultPrevented",
        stopImmediatePropagation: "isImmediatePropagationStopped",
        stopPropagation: "isPropagationStopped"
      };

      function C(r, i) {
        return !i && r.isDefaultPrevented || (i || (i = r), l.each(t, function (t, e) {
          var n = i[t];
          r[t] = function () {
            return this[e] = a, n && n.apply(i, arguments);
          }, r[e] = _;
        }), r.timeStamp || (r.timeStamp = Date.now()), (i.defaultPrevented !== h ? i.defaultPrevented : "returnValue" in i ? !1 === i.returnValue : i.getPreventDefault && i.getPreventDefault()) && (r.isDefaultPrevented = a)), r;
      }

      function S(t) {
        var e,
            n = {
          originalEvent: t
        };

        for (e in t) {
          i.test(e) || t[e] === h || (n[e] = t[e]);
        }

        return C(n, t);
      }

      l.fn.delegate = function (t, e, n) {
        return this.on(e, t, n);
      }, l.fn.undelegate = function (t, e, n) {
        return this.off(e, t, n);
      }, l.fn.live = function (t, e) {
        return l(document.body).delegate(this.selector, t, e), this;
      }, l.fn.die = function (t, e) {
        return l(document.body).undelegate(this.selector, t, e), this;
      }, l.fn.on = function (e, i, n, o, s) {
        var a,
            c,
            r = this;
        return e && !f(e) ? (l.each(e, function (t, e) {
          r.on(t, i, n, e, s);
        }), r) : (f(i) || p(o) || !1 === o || (o = n, n = i, i = h), o !== h && !1 !== n || (o = n, n = h), !1 === o && (o = _), r.each(function (t, r) {
          s && (a = function a(t) {
            return x(r, t.type, o), o.apply(this, arguments);
          }), i && (c = function c(t) {
            var e,
                n = l(t.target).closest(i, r).get(0);
            if (n && n !== r) return e = l.extend(S(t), {
              currentTarget: n,
              liveFired: r
            }), (a || o).apply(n, [e].concat(u.call(arguments, 1)));
          }), b(r, e, o, n, i, c || a);
        }));
      }, l.fn.off = function (t, n, e) {
        var r = this;
        return t && !f(t) ? (l.each(t, function (t, e) {
          r.off(t, n, e);
        }), r) : (f(n) || p(e) || !1 === e || (e = n, n = h), !1 === e && (e = _), r.each(function () {
          x(this, t, e, n);
        }));
      }, l.fn.trigger = function (t, e) {
        return (t = f(t) || l.isPlainObject(t) ? l.Event(t) : C(t))._args = e, this.each(function () {
          t.type in r && "function" == typeof this[t.type] ? this[t.type]() : "dispatchEvent" in this ? this.dispatchEvent(t) : l(this).triggerHandler(t, e);
        });
      }, l.fn.triggerHandler = function (n, r) {
        var i, o;
        return this.each(function (t, e) {
          (i = S(f(n) ? l.Event(n) : n))._args = r, i.target = e, l.each(s(e, n.type || n), function (t, e) {
            if (o = e.proxy(i), i.isImmediatePropagationStopped()) return !1;
          });
        }), o;
      }, "focusin focusout focus blur load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select keydown keypress keyup error".split(" ").forEach(function (e) {
        l.fn[e] = function (t) {
          return 0 in arguments ? this.bind(e, t) : this.trigger(e);
        };
      }), l.Event = function (t, e) {
        f(t) || (t = (e = t).type);
        var n = document.createEvent(o[t] || "Events"),
            r = !0;
        if (e) for (var i in e) {
          "bubbles" == i ? r = !!e[i] : n[i] = e[i];
        }
        return n.initEvent(t, r, !0), C(n);
      };
    }(r = function () {
      var c,
          s,
          u,
          i,
          a,
          n,
          r = [],
          o = r.concat,
          l = r.filter,
          h = r.slice,
          p = Q.document,
          f = {},
          e = {},
          d = {
        "column-count": 1,
        columns: 1,
        "font-weight": 1,
        "line-height": 1,
        opacity: 1,
        "z-index": 1,
        zoom: 1
      },
          g = /^\s*<(\w+|!)[^>]*>/,
          m = /^<(\w+)\s*\/?>(?:<\/\1>|)$/,
          v = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,
          y = /^(?:body|html)$/i,
          w = /([A-Z])/g,
          b = ["val", "css", "html", "text", "data", "width", "height", "offset"],
          t = p.createElement("table"),
          x = p.createElement("tr"),
          _ = {
        tr: p.createElement("tbody"),
        tbody: t,
        thead: t,
        tfoot: t,
        td: x,
        th: x,
        "*": p.createElement("div")
      },
          C = /complete|loaded|interactive/,
          S = /^[\w-]*$/,
          A = {},
          O = A.toString,
          T = {},
          E = p.createElement("div"),
          L = {
        tabindex: "tabIndex",
        readonly: "readOnly",
        "for": "htmlFor",
        "class": "className",
        maxlength: "maxLength",
        cellspacing: "cellSpacing",
        cellpadding: "cellPadding",
        rowspan: "rowSpan",
        colspan: "colSpan",
        usemap: "useMap",
        frameborder: "frameBorder",
        contenteditable: "contentEditable"
      },
          P = Array.isArray || function (t) {
        return t instanceof Array;
      };

      function k(t) {
        return null == t ? String(t) : A[O.call(t)] || "object";
      }

      function R(t) {
        return "function" == k(t);
      }

      function j(t) {
        return null != t && t == t.window;
      }

      function I(t) {
        return null != t && t.nodeType == t.DOCUMENT_NODE;
      }

      function N(t) {
        return "object" == k(t);
      }

      function D(t) {
        return N(t) && !j(t) && Object.getPrototypeOf(t) == Object.prototype;
      }

      function $(t) {
        var e = !!t && "length" in t && t.length,
            n = u.type(t);
        return "function" != n && !j(t) && ("array" == n || 0 === e || "number" == typeof e && 0 < e && e - 1 in t);
      }

      function q(t) {
        return t.replace(/::/g, "/").replace(/([A-Z]+)([A-Z][a-z])/g, "$1_$2").replace(/([a-z\d])([A-Z])/g, "$1_$2").replace(/_/g, "-").toLowerCase();
      }

      function M(t) {
        return t in e ? e[t] : e[t] = new RegExp("(^|\\s)" + t + "(\\s|$)");
      }

      function H(t, e) {
        return "number" != typeof e || d[q(t)] ? e : e + "px";
      }

      function F(t) {
        return "children" in t ? h.call(t.children) : u.map(t.childNodes, function (t) {
          if (1 == t.nodeType) return t;
        });
      }

      function z(t, e) {
        var n,
            r = t ? t.length : 0;

        for (n = 0; n < r; n++) {
          this[n] = t[n];
        }

        this.length = r, this.selector = e || "";
      }

      function V(t, e) {
        return null == e ? u(t) : u(t).filter(e);
      }

      function U(t, e, n, r) {
        return R(e) ? e.call(t, n, r) : e;
      }

      function B(t, e, n) {
        null == n ? t.removeAttribute(e) : t.setAttribute(e, n);
      }

      function K(t, e) {
        var n = t.className || "",
            r = n && n.baseVal !== c;
        if (e === c) return r ? n.baseVal : n;
        r ? n.baseVal = e : t.className = e;
      }

      function J(e) {
        try {
          return e ? "true" == e || "false" != e && ("null" == e ? null : +e + "" == e ? +e : /^[\[\{]/.test(e) ? u.parseJSON(e) : e) : e;
        } catch (t) {
          return e;
        }
      }

      return T.matches = function (t, e) {
        if (!e || !t || 1 !== t.nodeType) return !1;
        var n = t.matches || t.webkitMatchesSelector || t.mozMatchesSelector || t.oMatchesSelector || t.matchesSelector;
        if (n) return n.call(t, e);
        var r,
            i = t.parentNode,
            o = !i;
        return o && (i = E).appendChild(t), r = ~T.qsa(i, e).indexOf(t), o && E.removeChild(t), r;
      }, a = function a(t) {
        return t.replace(/-+(.)?/g, function (t, e) {
          return e ? e.toUpperCase() : "";
        });
      }, n = function n(_n) {
        return l.call(_n, function (t, e) {
          return _n.indexOf(t) == e;
        });
      }, T.fragment = function (t, e, n) {
        var r, i, o;
        return m.test(t) && (r = u(p.createElement(RegExp.$1))), r || (t.replace && (t = t.replace(v, "<$1></$2>")), e === c && (e = g.test(t) && RegExp.$1), e in _ || (e = "*"), (o = _[e]).innerHTML = "" + t, r = u.each(h.call(o.childNodes), function () {
          o.removeChild(this);
        })), D(n) && (i = u(r), u.each(n, function (t, e) {
          -1 < b.indexOf(t) ? i[t](e) : i.attr(t, e);
        })), r;
      }, T.Z = function (t, e) {
        return new z(t, e);
      }, T.isZ = function (t) {
        return t instanceof T.Z;
      }, T.init = function (t, e) {
        var n;
        if (!t) return T.Z();
        if ("string" == typeof t) {
          if ("<" == (t = t.trim())[0] && g.test(t)) n = T.fragment(t, RegExp.$1, e), t = null;else {
            if (e !== c) return u(e).find(t);
            n = T.qsa(p, t);
          }
        } else {
          if (R(t)) return u(p).ready(t);
          if (T.isZ(t)) return t;
          if (P(t)) n = function (t) {
            return l.call(t, function (t) {
              return null != t;
            });
          }(t);else if (N(t)) n = [t], t = null;else if (g.test(t)) n = T.fragment(t.trim(), RegExp.$1, e), t = null;else {
            if (e !== c) return u(e).find(t);
            n = T.qsa(p, t);
          }
        }
        return T.Z(n, t);
      }, (u = function u(t, e) {
        return T.init(t, e);
      }).extend = function (e) {
        var n,
            t = h.call(arguments, 1);
        return "boolean" == typeof e && (n = e, e = t.shift()), t.forEach(function (t) {
          !function t(e, n, r) {
            for (s in n) {
              r && (D(n[s]) || P(n[s])) ? (D(n[s]) && !D(e[s]) && (e[s] = {}), P(n[s]) && !P(e[s]) && (e[s] = []), t(e[s], n[s], r)) : n[s] !== c && (e[s] = n[s]);
            }
          }(e, t, n);
        }), e;
      }, T.qsa = function (t, e) {
        var n,
            r = "#" == e[0],
            i = !r && "." == e[0],
            o = r || i ? e.slice(1) : e,
            s = S.test(o);
        return t.getElementById && s && r ? (n = t.getElementById(o)) ? [n] : [] : 1 !== t.nodeType && 9 !== t.nodeType && 11 !== t.nodeType ? [] : h.call(s && !r && t.getElementsByClassName ? i ? t.getElementsByClassName(o) : t.getElementsByTagName(e) : t.querySelectorAll(e));
      }, u.contains = p.documentElement.contains ? function (t, e) {
        return t !== e && t.contains(e);
      } : function (t, e) {
        for (; e && (e = e.parentNode);) {
          if (e === t) return !0;
        }

        return !1;
      }, u.type = k, u.isFunction = R, u.isWindow = j, u.isArray = P, u.isPlainObject = D, u.isEmptyObject = function (t) {
        var e;

        for (e in t) {
          return !1;
        }

        return !0;
      }, u.isNumeric = function (t) {
        var e = Number(t),
            n = _typeof(t);

        return null != t && "boolean" != n && ("string" != n || t.length) && !isNaN(e) && isFinite(e) || !1;
      }, u.inArray = function (t, e, n) {
        return r.indexOf.call(e, t, n);
      }, u.camelCase = a, u.trim = function (t) {
        return null == t ? "" : String.prototype.trim.call(t);
      }, u.uuid = 0, u.support = {}, u.expr = {}, u.noop = function () {}, u.map = function (t, e) {
        var n,
            r,
            i,
            o = [];
        if ($(t)) for (r = 0; r < t.length; r++) {
          null != (n = e(t[r], r)) && o.push(n);
        } else for (i in t) {
          null != (n = e(t[i], i)) && o.push(n);
        }
        return function (t) {
          return 0 < t.length ? u.fn.concat.apply([], t) : t;
        }(o);
      }, u.each = function (t, e) {
        var n, r;

        if ($(t)) {
          for (n = 0; n < t.length; n++) {
            if (!1 === e.call(t[n], n, t[n])) return t;
          }
        } else for (r in t) {
          if (!1 === e.call(t[r], r, t[r])) return t;
        }

        return t;
      }, u.grep = function (t, e) {
        return l.call(t, e);
      }, Q.JSON && (u.parseJSON = JSON.parse), u.each("Boolean Number String Function Array Date RegExp Object Error".split(" "), function (t, e) {
        A["[object " + e + "]"] = e.toLowerCase();
      }), u.fn = {
        constructor: T.Z,
        length: 0,
        forEach: r.forEach,
        reduce: r.reduce,
        push: r.push,
        sort: r.sort,
        splice: r.splice,
        indexOf: r.indexOf,
        concat: function concat() {
          var t,
              e,
              n = [];

          for (t = 0; t < arguments.length; t++) {
            e = arguments[t], n[t] = T.isZ(e) ? e.toArray() : e;
          }

          return o.apply(T.isZ(this) ? this.toArray() : this, n);
        },
        map: function map(n) {
          return u(u.map(this, function (t, e) {
            return n.call(t, e, t);
          }));
        },
        slice: function slice() {
          return u(h.apply(this, arguments));
        },
        ready: function ready(t) {
          return C.test(p.readyState) && p.body ? t(u) : p.addEventListener("DOMContentLoaded", function () {
            t(u);
          }, !1), this;
        },
        get: function get(t) {
          return t === c ? h.call(this) : this[0 <= t ? t : t + this.length];
        },
        toArray: function toArray() {
          return this.get();
        },
        size: function size() {
          return this.length;
        },
        remove: function remove() {
          return this.each(function () {
            null != this.parentNode && this.parentNode.removeChild(this);
          });
        },
        each: function each(n) {
          return r.every.call(this, function (t, e) {
            return !1 !== n.call(t, e, t);
          }), this;
        },
        filter: function filter(e) {
          return R(e) ? this.not(this.not(e)) : u(l.call(this, function (t) {
            return T.matches(t, e);
          }));
        },
        add: function add(t, e) {
          return u(n(this.concat(u(t, e))));
        },
        is: function is(t) {
          return 0 < this.length && T.matches(this[0], t);
        },
        not: function not(e) {
          var n = [];
          if (R(e) && e.call !== c) this.each(function (t) {
            e.call(this, t) || n.push(this);
          });else {
            var r = "string" == typeof e ? this.filter(e) : $(e) && R(e.item) ? h.call(e) : u(e);
            this.forEach(function (t) {
              r.indexOf(t) < 0 && n.push(t);
            });
          }
          return u(n);
        },
        has: function has(t) {
          return this.filter(function () {
            return N(t) ? u.contains(this, t) : u(this).find(t).size();
          });
        },
        eq: function eq(t) {
          return -1 === t ? this.slice(t) : this.slice(t, +t + 1);
        },
        first: function first() {
          var t = this[0];
          return t && !N(t) ? t : u(t);
        },
        last: function last() {
          var t = this[this.length - 1];
          return t && !N(t) ? t : u(t);
        },
        find: function find(t) {
          var n = this;
          return t ? "object" == _typeof(t) ? u(t).filter(function () {
            var e = this;
            return r.some.call(n, function (t) {
              return u.contains(t, e);
            });
          }) : 1 == this.length ? u(T.qsa(this[0], t)) : this.map(function () {
            return T.qsa(this, t);
          }) : u();
        },
        closest: function closest(n, r) {
          var i = [],
              o = "object" == _typeof(n) && u(n);
          return this.each(function (t, e) {
            for (; e && !(o ? 0 <= o.indexOf(e) : T.matches(e, n));) {
              e = e !== r && !I(e) && e.parentNode;
            }

            e && i.indexOf(e) < 0 && i.push(e);
          }), u(i);
        },
        parents: function parents(t) {
          for (var e = [], n = this; 0 < n.length;) {
            n = u.map(n, function (t) {
              if ((t = t.parentNode) && !I(t) && e.indexOf(t) < 0) return e.push(t), t;
            });
          }

          return V(e, t);
        },
        parent: function parent(t) {
          return V(n(this.pluck("parentNode")), t);
        },
        children: function children(t) {
          return V(this.map(function () {
            return F(this);
          }), t);
        },
        contents: function contents() {
          return this.map(function () {
            return this.contentDocument || h.call(this.childNodes);
          });
        },
        siblings: function siblings(t) {
          return V(this.map(function (t, e) {
            return l.call(F(e.parentNode), function (t) {
              return t !== e;
            });
          }), t);
        },
        empty: function empty() {
          return this.each(function () {
            this.innerHTML = "";
          });
        },
        pluck: function pluck(e) {
          return u.map(this, function (t) {
            return t[e];
          });
        },
        show: function show() {
          return this.each(function () {
            "none" == this.style.display && (this.style.display = ""), "none" == getComputedStyle(this, "").getPropertyValue("display") && (this.style.display = function (t) {
              var e, n;
              return f[t] || (e = p.createElement(t), p.body.appendChild(e), n = getComputedStyle(e, "").getPropertyValue("display"), e.parentNode.removeChild(e), "none" == n && (n = "block"), f[t] = n), f[t];
            }(this.nodeName));
          });
        },
        replaceWith: function replaceWith(t) {
          return this.before(t).remove();
        },
        wrap: function wrap(e) {
          var n = R(e);
          if (this[0] && !n) var r = u(e).get(0),
              i = r.parentNode || 1 < this.length;
          return this.each(function (t) {
            u(this).wrapAll(n ? e.call(this, t) : i ? r.cloneNode(!0) : r);
          });
        },
        wrapAll: function wrapAll(t) {
          if (this[0]) {
            var e;

            for (u(this[0]).before(t = u(t)); (e = t.children()).length;) {
              t = e.first();
            }

            u(t).append(this);
          }

          return this;
        },
        wrapInner: function wrapInner(i) {
          var o = R(i);
          return this.each(function (t) {
            var e = u(this),
                n = e.contents(),
                r = o ? i.call(this, t) : i;
            n.length ? n.wrapAll(r) : e.append(r);
          });
        },
        unwrap: function unwrap() {
          return this.parent().each(function () {
            u(this).replaceWith(u(this).children());
          }), this;
        },
        clone: function clone() {
          return this.map(function () {
            return this.cloneNode(!0);
          });
        },
        hide: function hide() {
          return this.css("display", "none");
        },
        toggle: function toggle(e) {
          return this.each(function () {
            var t = u(this);
            (e === c ? "none" == t.css("display") : e) ? t.show() : t.hide();
          });
        },
        prev: function prev(t) {
          return u(this.pluck("previousElementSibling")).filter(t || "*");
        },
        next: function next(t) {
          return u(this.pluck("nextElementSibling")).filter(t || "*");
        },
        html: function html(n) {
          return 0 in arguments ? this.each(function (t) {
            var e = this.innerHTML;
            u(this).empty().append(U(this, n, t, e));
          }) : 0 in this ? this[0].innerHTML : null;
        },
        text: function text(n) {
          return 0 in arguments ? this.each(function (t) {
            var e = U(this, n, t, this.textContent);
            this.textContent = null == e ? "" : "" + e;
          }) : 0 in this ? this.pluck("textContent").join("") : null;
        },
        attr: function attr(e, n) {
          var t;
          return "string" != typeof e || 1 in arguments ? this.each(function (t) {
            if (1 === this.nodeType) if (N(e)) for (s in e) {
              B(this, s, e[s]);
            } else B(this, e, U(this, n, t, this.getAttribute(e)));
          }) : 0 in this && 1 == this[0].nodeType && null != (t = this[0].getAttribute(e)) ? t : c;
        },
        removeAttr: function removeAttr(t) {
          return this.each(function () {
            1 === this.nodeType && t.split(" ").forEach(function (t) {
              B(this, t);
            }, this);
          });
        },
        prop: function prop(e, n) {
          return e = L[e] || e, 1 in arguments ? this.each(function (t) {
            this[e] = U(this, n, t, this[e]);
          }) : this[0] && this[0][e];
        },
        removeProp: function removeProp(t) {
          return t = L[t] || t, this.each(function () {
            delete this[t];
          });
        },
        data: function data(t, e) {
          var n = "data-" + t.replace(w, "-$1").toLowerCase(),
              r = 1 in arguments ? this.attr(n, e) : this.attr(n);
          return null !== r ? J(r) : c;
        },
        val: function val(e) {
          return 0 in arguments ? (null == e && (e = ""), this.each(function (t) {
            this.value = U(this, e, t, this.value);
          })) : this[0] && (this[0].multiple ? u(this[0]).find("option").filter(function () {
            return this.selected;
          }).pluck("value") : this[0].value);
        },
        offset: function offset(o) {
          if (o) return this.each(function (t) {
            var e = u(this),
                n = U(this, o, t, e.offset()),
                r = e.offsetParent().offset(),
                i = {
              top: n.top - r.top,
              left: n.left - r.left
            };
            "static" == e.css("position") && (i.position = "relative"), e.css(i);
          });
          if (!this.length) return null;
          if (p.documentElement !== this[0] && !u.contains(p.documentElement, this[0])) return {
            top: 0,
            left: 0
          };
          var t = this[0].getBoundingClientRect();
          return {
            left: t.left + Q.pageXOffset,
            top: t.top + Q.pageYOffset,
            width: Math.round(t.width),
            height: Math.round(t.height)
          };
        },
        css: function css(t, e) {
          if (arguments.length < 2) {
            var n = this[0];

            if ("string" == typeof t) {
              if (!n) return;
              return n.style[a(t)] || getComputedStyle(n, "").getPropertyValue(t);
            }

            if (P(t)) {
              if (!n) return;
              var r = {},
                  i = getComputedStyle(n, "");
              return u.each(t, function (t, e) {
                r[e] = n.style[a(e)] || i.getPropertyValue(e);
              }), r;
            }
          }

          var o = "";
          if ("string" == k(t)) e || 0 === e ? o = q(t) + ":" + H(t, e) : this.each(function () {
            this.style.removeProperty(q(t));
          });else for (s in t) {
            t[s] || 0 === t[s] ? o += q(s) + ":" + H(s, t[s]) + ";" : this.each(function () {
              this.style.removeProperty(q(s));
            });
          }
          return this.each(function () {
            this.style.cssText += ";" + o;
          });
        },
        index: function index(t) {
          return t ? this.indexOf(u(t)[0]) : this.parent().children().indexOf(this[0]);
        },
        hasClass: function hasClass(t) {
          return !!t && r.some.call(this, function (t) {
            return this.test(K(t));
          }, M(t));
        },
        addClass: function addClass(r) {
          return r ? this.each(function (t) {
            if ("className" in this) {
              i = [];
              var e = K(this),
                  n = U(this, r, t, e);
              n.split(/\s+/g).forEach(function (t) {
                u(this).hasClass(t) || i.push(t);
              }, this), i.length && K(this, e + (e ? " " : "") + i.join(" "));
            }
          }) : this;
        },
        removeClass: function removeClass(e) {
          return this.each(function (t) {
            if ("className" in this) {
              if (e === c) return K(this, "");
              i = K(this), U(this, e, t, i).split(/\s+/g).forEach(function (t) {
                i = i.replace(M(t), " ");
              }), K(this, i.trim());
            }
          });
        },
        toggleClass: function toggleClass(r, i) {
          return r ? this.each(function (t) {
            var e = u(this),
                n = U(this, r, t, K(this));
            n.split(/\s+/g).forEach(function (t) {
              (i === c ? !e.hasClass(t) : i) ? e.addClass(t) : e.removeClass(t);
            });
          }) : this;
        },
        scrollTop: function scrollTop(t) {
          if (this.length) {
            var e = ("scrollTop" in this[0]);
            return t === c ? e ? this[0].scrollTop : this[0].pageYOffset : this.each(e ? function () {
              this.scrollTop = t;
            } : function () {
              this.scrollTo(this.scrollX, t);
            });
          }
        },
        scrollLeft: function scrollLeft(t) {
          if (this.length) {
            var e = ("scrollLeft" in this[0]);
            return t === c ? e ? this[0].scrollLeft : this[0].pageXOffset : this.each(e ? function () {
              this.scrollLeft = t;
            } : function () {
              this.scrollTo(t, this.scrollY);
            });
          }
        },
        position: function position() {
          if (this.length) {
            var t = this[0],
                e = this.offsetParent(),
                n = this.offset(),
                r = y.test(e[0].nodeName) ? {
              top: 0,
              left: 0
            } : e.offset();
            return n.top -= parseFloat(u(t).css("margin-top")) || 0, n.left -= parseFloat(u(t).css("margin-left")) || 0, r.top += parseFloat(u(e[0]).css("border-top-width")) || 0, r.left += parseFloat(u(e[0]).css("border-left-width")) || 0, {
              top: n.top - r.top,
              left: n.left - r.left
            };
          }
        },
        offsetParent: function offsetParent() {
          return this.map(function () {
            for (var t = this.offsetParent || p.body; t && !y.test(t.nodeName) && "static" == u(t).css("position");) {
              t = t.offsetParent;
            }

            return t;
          });
        }
      }, u.fn.detach = u.fn.remove, ["width", "height"].forEach(function (r) {
        var i = r.replace(/./, function (t) {
          return t[0].toUpperCase();
        });

        u.fn[r] = function (e) {
          var t,
              n = this[0];
          return e === c ? j(n) ? n["inner" + i] : I(n) ? n.documentElement["scroll" + i] : (t = this.offset()) && t[r] : this.each(function (t) {
            (n = u(this)).css(r, U(this, e, t, n[r]()));
          });
        };
      }), ["after", "prepend", "before", "append"].forEach(function (e, s) {
        var a = s % 2;
        u.fn[e] = function () {
          var n,
              r,
              i = u.map(arguments, function (t) {
            var e = [];
            return "array" == (n = k(t)) ? (t.forEach(function (t) {
              return t.nodeType !== c ? e.push(t) : u.zepto.isZ(t) ? e = e.concat(t.get()) : void (e = e.concat(T.fragment(t)));
            }), e) : "object" == n || null == t ? t : T.fragment(t);
          }),
              o = 1 < this.length;
          return i.length < 1 ? this : this.each(function (t, e) {
            r = a ? e : e.parentNode, e = 0 == s ? e.nextSibling : 1 == s ? e.firstChild : 2 == s ? e : null;
            var n = u.contains(p.documentElement, r);
            i.forEach(function (t) {
              if (o) t = t.cloneNode(!0);else if (!r) return u(t).remove();
              r.insertBefore(t, e), n && function t(e, n) {
                n(e);

                for (var r = 0, i = e.childNodes.length; r < i; r++) {
                  t(e.childNodes[r], n);
                }
              }(t, function (t) {
                if (!(null == t.nodeName || "SCRIPT" !== t.nodeName.toUpperCase() || t.type && "text/javascript" !== t.type || t.src)) {
                  var e = t.ownerDocument ? t.ownerDocument.defaultView : Q;
                  e.eval.call(e, t.innerHTML);
                }
              });
            });
          });
        }, u.fn[a ? e + "To" : "insert" + (s ? "Before" : "After")] = function (t) {
          return u(t)[e](this), this;
        };
      }), T.Z.prototype = z.prototype = u.fn, T.uniq = n, T.deserializeValue = J, u.zepto = T, u;
    }()), function (t) {
      var e,
          n = [];

      r.fn.remove = function () {
        return this.each(function () {
          this.parentNode && ("IMG" === this.tagName && (n.push(this), this.src = "data:image/gif;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs=", e && clearTimeout(e), e = setTimeout(function () {
            n = [];
          }, 6e4)), this.parentNode.removeChild(this));
        });
      };
    }(), function (o) {
      var s = {},
          a = o.fn.data,
          c = o.camelCase,
          u = o.expando = "Zepto" + +new Date(),
          l = [];

      function h(t, e, n) {
        var r = t[u] || (t[u] = ++o.uuid),
            i = s[r] || (s[r] = function (t) {
          var n = {};
          return o.each(t.attributes || l, function (t, e) {
            0 == e.name.indexOf("data-") && (n[c(e.name.replace("data-", ""))] = o.zepto.deserializeValue(e.value));
          }), n;
        }(t));

        return void 0 !== e && (i[c(e)] = n), i;
      }

      o.fn.data = function (e, t) {
        return void 0 === t ? o.isPlainObject(e) ? this.each(function (t, n) {
          o.each(e, function (t, e) {
            h(n, t, e);
          });
        }) : 0 in this ? function (t, e) {
          var n = t[u],
              r = n && s[n];
          if (void 0 === e) return r || h(t);

          if (r) {
            if (e in r) return r[e];
            var i = c(e);
            if (i in r) return r[i];
          }

          return a.call(o(t), e);
        }(this[0], e) : void 0 : this.each(function () {
          h(this, e, t);
        });
      }, o.data = function (t, e, n) {
        return o(t).data(e, n);
      }, o.hasData = function (t) {
        var e = t[u],
            n = e && s[e];
        return !!n && !o.isEmptyObject(n);
      }, o.fn.removeData = function (n) {
        return "string" == typeof n && (n = n.split(/\s+/)), this.each(function () {
          var t = this[u],
              e = t && s[t];
          e && o.each(n || e, function (t) {
            delete e[n ? c(this) : t];
          });
        });
      }, ["remove", "empty"].forEach(function (e) {
        var n = o.fn[e];

        o.fn[e] = function () {
          var t = this.find("*");
          return "remove" === e && (t = t.add(this)), t.removeData(), n.call(this);
        };
      });
    }(r), r);
  }, function (t, e, n) {
    "use strict";

    var s = "aaAttrs",
        a = n(0),
        c = n(2),
        o = n(25),
        u = n(56),
        r = n(63),
        l = n(26),
        h = n(16);

    function p(t) {
      var n, e;
      if ((t = t || {}).input || a.error("missing input"), this.isActivated = !1, this.debug = !!t.debug, this.autoselect = !!t.autoselect, this.autoselectOnBlur = !!t.autoselectOnBlur, this.openOnFocus = !!t.openOnFocus, this.minLength = a.isNumber(t.minLength) ? t.minLength : 1, this.autoWidth = void 0 === t.autoWidth || !!t.autoWidth, this.clearOnSelected = !!t.clearOnSelected, this.tabAutocomplete = void 0 === t.tabAutocomplete || !!t.tabAutocomplete, t.hint = !!t.hint, t.hint && t.appendTo) throw new Error("[autocomplete.js] hint and appendTo options can't be used at the same time");
      this.css = t.css = a.mixin({}, h, t.appendTo ? h.appendTo : {}), this.cssClasses = t.cssClasses = a.mixin({}, h.defaultClasses, t.cssClasses || {}), this.cssClasses.prefix = t.cssClasses.formattedPrefix = a.formatPrefix(this.cssClasses.prefix, this.cssClasses.noPrefix), this.listboxId = t.listboxId = [this.cssClasses.root, "listbox", a.getUniqueId()].join("-");

      var r = function (t) {
        var e, n, r, i;
        e = c.element(t.input), n = c.element(l.wrapper.replace("%ROOT%", t.cssClasses.root)).css(t.css.wrapper), t.appendTo || "block" !== e.css("display") || "table" !== e.parent().css("display") || n.css("display", "table-cell");
        var o = l.dropdown.replace("%PREFIX%", t.cssClasses.prefix).replace("%DROPDOWN_MENU%", t.cssClasses.dropdownMenu);
        r = c.element(o).css(t.css.dropdown).attr({
          role: "listbox",
          id: t.listboxId
        }), t.templates && t.templates.dropdownMenu && r.html(a.templatify(t.templates.dropdownMenu)());
        (i = e.clone().css(t.css.hint).css(function (t) {
          return {
            backgroundAttachment: t.css("background-attachment"),
            backgroundClip: t.css("background-clip"),
            backgroundColor: t.css("background-color"),
            backgroundImage: t.css("background-image"),
            backgroundOrigin: t.css("background-origin"),
            backgroundPosition: t.css("background-position"),
            backgroundRepeat: t.css("background-repeat"),
            backgroundSize: t.css("background-size")
          };
        }(e))).val("").addClass(a.className(t.cssClasses.prefix, t.cssClasses.hint, !0)).removeAttr("id name placeholder required").prop("readonly", !0).attr({
          "aria-hidden": "true",
          autocomplete: "off",
          spellcheck: "false",
          tabindex: -1
        }), i.removeData && i.removeData();
        e.data(s, {
          "aria-autocomplete": e.attr("aria-autocomplete"),
          "aria-expanded": e.attr("aria-expanded"),
          "aria-owns": e.attr("aria-owns"),
          autocomplete: e.attr("autocomplete"),
          dir: e.attr("dir"),
          role: e.attr("role"),
          spellcheck: e.attr("spellcheck"),
          style: e.attr("style"),
          type: e.attr("type")
        }), e.addClass(a.className(t.cssClasses.prefix, t.cssClasses.input, !0)).attr({
          autocomplete: "off",
          spellcheck: !1,
          role: "combobox",
          "aria-autocomplete": t.datasets && t.datasets[0] && t.datasets[0].displayKey ? "both" : "list",
          "aria-expanded": "false",
          "aria-label": t.ariaLabel,
          "aria-owns": t.listboxId
        }).css(t.hint ? t.css.input : t.css.inputWithNoHint);

        try {
          e.attr("dir") || e.attr("dir", "auto");
        } catch (t) {}

        return (n = t.appendTo ? n.appendTo(c.element(t.appendTo).eq(0)).eq(0) : e.wrap(n).parent()).prepend(t.hint ? i : null).append(r), {
          wrapper: n,
          input: e,
          hint: i,
          menu: r
        };
      }(t);

      this.$node = r.wrapper;
      var i = this.$input = r.input;
      n = r.menu, e = r.hint, t.dropdownMenuContainer && c.element(t.dropdownMenuContainer).css("position", "relative").append(n.css("top", "0")), i.on("blur.aa", function (t) {
        var e = document.activeElement;
        a.isMsie() && (n[0] === e || n[0].contains(e)) && (t.preventDefault(), t.stopImmediatePropagation(), a.defer(function () {
          i.focus();
        }));
      }), n.on("mousedown.aa", function (t) {
        t.preventDefault();
      }), this.eventBus = t.eventBus || new o({
        el: i
      }), this.dropdown = new p.Dropdown({
        appendTo: t.appendTo,
        wrapper: this.$node,
        menu: n,
        datasets: t.datasets,
        templates: t.templates,
        cssClasses: t.cssClasses,
        minLength: this.minLength
      }).onSync("suggestionClicked", this._onSuggestionClicked, this).onSync("cursorMoved", this._onCursorMoved, this).onSync("cursorRemoved", this._onCursorRemoved, this).onSync("opened", this._onOpened, this).onSync("closed", this._onClosed, this).onSync("shown", this._onShown, this).onSync("empty", this._onEmpty, this).onSync("redrawn", this._onRedrawn, this).onAsync("datasetRendered", this._onDatasetRendered, this), this.input = new p.Input({
        input: i,
        hint: e
      }).onSync("focused", this._onFocused, this).onSync("blurred", this._onBlurred, this).onSync("enterKeyed", this._onEnterKeyed, this).onSync("tabKeyed", this._onTabKeyed, this).onSync("escKeyed", this._onEscKeyed, this).onSync("upKeyed", this._onUpKeyed, this).onSync("downKeyed", this._onDownKeyed, this).onSync("leftKeyed", this._onLeftKeyed, this).onSync("rightKeyed", this._onRightKeyed, this).onSync("queryChanged", this._onQueryChanged, this).onSync("whitespaceChanged", this._onWhitespaceChanged, this), this._bindKeyboardShortcuts(t), this._setLanguageDirection();
    }

    a.mixin(p.prototype, {
      _bindKeyboardShortcuts: function _bindKeyboardShortcuts(t) {
        if (t.keyboardShortcuts) {
          var i = this.$input,
              o = [];
          a.each(t.keyboardShortcuts, function (t) {
            "string" == typeof t && (t = t.toUpperCase().charCodeAt(0)), o.push(t);
          }), c.element(document).keydown(function (t) {
            var e = t.target || t.srcElement,
                n = e.tagName;

            if (!e.isContentEditable && "INPUT" !== n && "SELECT" !== n && "TEXTAREA" !== n) {
              var r = t.which || t.keyCode;
              -1 !== o.indexOf(r) && (i.focus(), t.stopPropagation(), t.preventDefault());
            }
          });
        }
      },
      _onSuggestionClicked: function _onSuggestionClicked(t, e) {
        var n;
        (n = this.dropdown.getDatumForSuggestion(e)) && this._select(n, {
          selectionMethod: "click"
        });
      },
      _onCursorMoved: function _onCursorMoved(t, e) {
        var n = this.dropdown.getDatumForCursor(),
            r = this.dropdown.getCurrentCursor().attr("id");
        this.input.setActiveDescendant(r), n && (e && this.input.setInputValue(n.value, !0), this.eventBus.trigger("cursorchanged", n.raw, n.datasetName));
      },
      _onCursorRemoved: function _onCursorRemoved() {
        this.input.resetInputValue(), this._updateHint(), this.eventBus.trigger("cursorremoved");
      },
      _onDatasetRendered: function _onDatasetRendered() {
        this._updateHint(), this.eventBus.trigger("updated");
      },
      _onOpened: function _onOpened() {
        this._updateHint(), this.input.expand(), this.eventBus.trigger("opened");
      },
      _onEmpty: function _onEmpty() {
        this.eventBus.trigger("empty");
      },
      _onRedrawn: function _onRedrawn() {
        this.$node.css("top", "0px"), this.$node.css("left", "0px");
        var t = this.$input[0].getBoundingClientRect();
        this.autoWidth && this.$node.css("width", t.width + "px");
        var e = this.$node[0].getBoundingClientRect(),
            n = t.bottom - e.top;
        this.$node.css("top", n + "px");
        var r = t.left - e.left;
        this.$node.css("left", r + "px"), this.eventBus.trigger("redrawn");
      },
      _onShown: function _onShown() {
        this.eventBus.trigger("shown"), this.autoselect && this.dropdown.cursorTopSuggestion();
      },
      _onClosed: function _onClosed() {
        this.input.clearHint(), this.input.removeActiveDescendant(), this.input.collapse(), this.eventBus.trigger("closed");
      },
      _onFocused: function _onFocused() {
        if (this.isActivated = !0, this.openOnFocus) {
          var t = this.input.getQuery();
          t.length >= this.minLength ? this.dropdown.update(t) : this.dropdown.empty(), this.dropdown.open();
        }
      },
      _onBlurred: function _onBlurred() {
        var t, e;
        t = this.dropdown.getDatumForCursor(), e = this.dropdown.getDatumForTopSuggestion();
        var n = {
          selectionMethod: "blur"
        };
        this.debug || (this.autoselectOnBlur && t ? this._select(t, n) : this.autoselectOnBlur && e ? this._select(e, n) : (this.isActivated = !1, this.dropdown.empty(), this.dropdown.close()));
      },
      _onEnterKeyed: function _onEnterKeyed(t, e) {
        var n, r;
        n = this.dropdown.getDatumForCursor(), r = this.dropdown.getDatumForTopSuggestion();
        var i = {
          selectionMethod: "enterKey"
        };
        n ? (this._select(n, i), e.preventDefault()) : this.autoselect && r && (this._select(r, i), e.preventDefault());
      },
      _onTabKeyed: function _onTabKeyed(t, e) {
        if (this.tabAutocomplete) {
          var n;
          (n = this.dropdown.getDatumForCursor()) ? (this._select(n, {
            selectionMethod: "tabKey"
          }), e.preventDefault()) : this._autocomplete(!0);
        } else this.dropdown.close();
      },
      _onEscKeyed: function _onEscKeyed() {
        this.dropdown.close(), this.input.resetInputValue();
      },
      _onUpKeyed: function _onUpKeyed() {
        var t = this.input.getQuery();
        this.dropdown.isEmpty && t.length >= this.minLength ? this.dropdown.update(t) : this.dropdown.moveCursorUp(), this.dropdown.open();
      },
      _onDownKeyed: function _onDownKeyed() {
        var t = this.input.getQuery();
        this.dropdown.isEmpty && t.length >= this.minLength ? this.dropdown.update(t) : this.dropdown.moveCursorDown(), this.dropdown.open();
      },
      _onLeftKeyed: function _onLeftKeyed() {
        "rtl" === this.dir && this._autocomplete();
      },
      _onRightKeyed: function _onRightKeyed() {
        "ltr" === this.dir && this._autocomplete();
      },
      _onQueryChanged: function _onQueryChanged(t, e) {
        this.input.clearHintIfInvalid(), e.length >= this.minLength ? this.dropdown.update(e) : this.dropdown.empty(), this.dropdown.open(), this._setLanguageDirection();
      },
      _onWhitespaceChanged: function _onWhitespaceChanged() {
        this._updateHint(), this.dropdown.open();
      },
      _setLanguageDirection: function _setLanguageDirection() {
        var t = this.input.getLanguageDirection();
        this.dir !== t && (this.dir = t, this.$node.css("direction", t), this.dropdown.setLanguageDirection(t));
      },
      _updateHint: function _updateHint() {
        var t, e, n, r, i;
        (t = this.dropdown.getDatumForTopSuggestion()) && this.dropdown.isVisible() && !this.input.hasOverflow() ? (e = this.input.getInputValue(), n = u.normalizeQuery(e), r = a.escapeRegExChars(n), (i = new RegExp("^(?:" + r + ")(.+$)", "i").exec(t.value)) ? this.input.setHint(e + i[1]) : this.input.clearHint()) : this.input.clearHint();
      },
      _autocomplete: function _autocomplete(t) {
        var e, n, r, i;
        e = this.input.getHint(), n = this.input.getQuery(), r = t || this.input.isCursorAtEnd(), e && n !== e && r && ((i = this.dropdown.getDatumForTopSuggestion()) && this.input.setInputValue(i.value), this.eventBus.trigger("autocompleted", i.raw, i.datasetName));
      },
      _select: function _select(t, e) {
        void 0 !== t.value && this.input.setQuery(t.value), this.clearOnSelected ? this.setVal("") : this.input.setInputValue(t.value, !0), this._setLanguageDirection(), !1 === this.eventBus.trigger("selected", t.raw, t.datasetName, e).isDefaultPrevented() && (this.dropdown.close(), a.defer(a.bind(this.dropdown.empty, this.dropdown)));
      },
      open: function open() {
        if (!this.isActivated) {
          var t = this.input.getInputValue();
          t.length >= this.minLength ? this.dropdown.update(t) : this.dropdown.empty();
        }

        this.dropdown.open();
      },
      close: function close() {
        this.dropdown.close();
      },
      setVal: function setVal(t) {
        t = a.toStr(t), this.isActivated ? this.input.setInputValue(t) : (this.input.setQuery(t), this.input.setInputValue(t, !0)), this._setLanguageDirection();
      },
      getVal: function getVal() {
        return this.input.getQuery();
      },
      destroy: function destroy() {
        this.input.destroy(), this.dropdown.destroy(), function (t, e) {
          var n = t.find(a.className(e.prefix, e.input));
          a.each(n.data(s), function (t, e) {
            void 0 === t ? n.removeAttr(e) : n.attr(e, t);
          }), n.detach().removeClass(a.className(e.prefix, e.input, !0)).insertAfter(t), n.removeData && n.removeData(s);
          t.remove();
        }(this.$node, this.cssClasses), this.$node = null;
      },
      getWrapper: function getWrapper() {
        return this.dropdown.$container[0];
      }
    }), p.Dropdown = r, p.Input = u, p.sources = n(65), t.exports = p;
  }, function (t, e, n) {
    "use strict";

    var s;
    s = {
      9: "tab",
      27: "esc",
      37: "left",
      39: "right",
      13: "enter",
      38: "up",
      40: "down"
    };
    var a = n(0),
        c = n(2),
        r = n(15);

    function i(t) {
      var e,
          n,
          r,
          i,
          o = this;
      (t = t || {}).input || a.error("input is missing"), e = a.bind(this._onBlur, this), n = a.bind(this._onFocus, this), r = a.bind(this._onKeydown, this), i = a.bind(this._onInput, this), this.$hint = c.element(t.hint), this.$input = c.element(t.input).on("blur.aa", e).on("focus.aa", n).on("keydown.aa", r), 0 === this.$hint.length && (this.setHint = this.getHint = this.clearHint = this.clearHintIfInvalid = a.noop), a.isMsie() ? this.$input.on("keydown.aa keypress.aa cut.aa paste.aa", function (t) {
        s[t.which || t.keyCode] || a.defer(a.bind(o._onInput, o, t));
      }) : this.$input.on("input.aa", i), this.query = this.$input.val(), this.$overflowHelper = function (t) {
        return c.element('<pre aria-hidden="true"></pre>').css({
          position: "absolute",
          visibility: "hidden",
          whiteSpace: "pre",
          fontFamily: t.css("font-family"),
          fontSize: t.css("font-size"),
          fontStyle: t.css("font-style"),
          fontVariant: t.css("font-variant"),
          fontWeight: t.css("font-weight"),
          wordSpacing: t.css("word-spacing"),
          letterSpacing: t.css("letter-spacing"),
          textIndent: t.css("text-indent"),
          textRendering: t.css("text-rendering"),
          textTransform: t.css("text-transform")
        }).insertAfter(t);
      }(this.$input);
    }

    function o(t) {
      return t.altKey || t.ctrlKey || t.metaKey || t.shiftKey;
    }

    i.normalizeQuery = function (t) {
      return (t || "").replace(/^\s*/g, "").replace(/\s{2,}/g, " ");
    }, a.mixin(i.prototype, r, {
      _onBlur: function _onBlur() {
        this.resetInputValue(), this.$input.removeAttr("aria-activedescendant"), this.trigger("blurred");
      },
      _onFocus: function _onFocus() {
        this.trigger("focused");
      },
      _onKeydown: function _onKeydown(t) {
        var e = s[t.which || t.keyCode];
        this._managePreventDefault(e, t), e && this._shouldTrigger(e, t) && this.trigger(e + "Keyed", t);
      },
      _onInput: function _onInput() {
        this._checkInputValue();
      },
      _managePreventDefault: function _managePreventDefault(t, e) {
        var n, r, i;

        switch (t) {
          case "tab":
            r = this.getHint(), i = this.getInputValue(), n = r && r !== i && !o(e);
            break;

          case "up":
          case "down":
            n = !o(e);
            break;

          default:
            n = !1;
        }

        n && e.preventDefault();
      },
      _shouldTrigger: function _shouldTrigger(t, e) {
        var n;

        switch (t) {
          case "tab":
            n = !o(e);
            break;

          default:
            n = !0;
        }

        return n;
      },
      _checkInputValue: function _checkInputValue() {
        var t, e, n;
        n = !(!(e = function (t, e) {
          return i.normalizeQuery(t) === i.normalizeQuery(e);
        }(t = this.getInputValue(), this.query)) || !this.query) && this.query.length !== t.length, this.query = t, e ? n && this.trigger("whitespaceChanged", this.query) : this.trigger("queryChanged", this.query);
      },
      focus: function focus() {
        this.$input.focus();
      },
      blur: function blur() {
        this.$input.blur();
      },
      getQuery: function getQuery() {
        return this.query;
      },
      setQuery: function setQuery(t) {
        this.query = t;
      },
      getInputValue: function getInputValue() {
        return this.$input.val();
      },
      setInputValue: function setInputValue(t, e) {
        void 0 === t && (t = this.query), this.$input.val(t), e ? this.clearHint() : this._checkInputValue();
      },
      expand: function expand() {
        this.$input.attr("aria-expanded", "true");
      },
      collapse: function collapse() {
        this.$input.attr("aria-expanded", "false");
      },
      setActiveDescendant: function setActiveDescendant(t) {
        this.$input.attr("aria-activedescendant", t);
      },
      removeActiveDescendant: function removeActiveDescendant() {
        this.$input.removeAttr("aria-activedescendant");
      },
      resetInputValue: function resetInputValue() {
        this.setInputValue(this.query, !0);
      },
      getHint: function getHint() {
        return this.$hint.val();
      },
      setHint: function setHint(t) {
        this.$hint.val(t);
      },
      clearHint: function clearHint() {
        this.setHint("");
      },
      clearHintIfInvalid: function clearHintIfInvalid() {
        var t, e, n;
        n = (t = this.getInputValue()) !== (e = this.getHint()) && 0 === e.indexOf(t), "" !== t && n && !this.hasOverflow() || this.clearHint();
      },
      getLanguageDirection: function getLanguageDirection() {
        return (this.$input.css("direction") || "ltr").toLowerCase();
      },
      hasOverflow: function hasOverflow() {
        var t = this.$input.width() - 2;
        return this.$overflowHelper.text(this.getInputValue()), this.$overflowHelper.width() >= t;
      },
      isCursorAtEnd: function isCursorAtEnd() {
        var t, e, n;
        return t = this.$input.val().length, e = this.$input[0].selectionStart, a.isNumber(e) ? e === t : !document.selection || ((n = document.selection.createRange()).moveStart("character", -t), t === n.text.length);
      },
      destroy: function destroy() {
        this.$hint.off(".aa"), this.$input.off(".aa"), this.$hint = this.$input = this.$overflowHelper = null;
      }
    }), t.exports = i;
  }, function (t, e, n) {
    "use strict";

    var r,
        i,
        o,
        s = [n(58), n(59), n(60), n(61), n(62)],
        a = -1,
        c = [],
        u = !1;

    function l() {
      r && i && (r = !1, i.length ? c = i.concat(c) : a = -1, c.length && h());
    }

    function h() {
      if (!r) {
        r = !(u = !1);

        for (var t = c.length, e = setTimeout(l); t;) {
          for (i = c, c = []; i && ++a < t;) {
            i[a].run();
          }

          a = -1, t = c.length;
        }

        i = null, r = !(a = -1), clearTimeout(e);
      }
    }

    for (var p = -1, f = s.length; ++p < f;) {
      if (s[p] && s[p].test && s[p].test()) {
        o = s[p].install(h);
        break;
      }
    }

    function d(t, e) {
      this.fun = t, this.array = e;
    }

    d.prototype.run = function () {
      var t = this.fun,
          e = this.array;

      switch (e.length) {
        case 0:
          return t();

        case 1:
          return t(e[0]);

        case 2:
          return t(e[0], e[1]);

        case 3:
          return t(e[0], e[1], e[2]);

        default:
          return t.apply(null, e);
      }
    }, t.exports = function (t) {
      var e = new Array(arguments.length - 1);
      if (1 < arguments.length) for (var n = 1; n < arguments.length; n++) {
        e[n - 1] = arguments[n];
      }
      c.push(new d(t, e)), u || r || (u = !0, o());
    };
  }, function (t, n, e) {
    "use strict";

    (function (e) {
      n.test = function () {
        return void 0 !== e && !e.browser;
      }, n.install = function (t) {
        return function () {
          e.nextTick(t);
        };
      };
    }).call(this, e(10));
  }, function (t, e, n) {
    "use strict";

    (function (i) {
      var o = i.MutationObserver || i.WebKitMutationObserver;
      e.test = function () {
        return o;
      }, e.install = function (t) {
        var e = 0,
            n = new o(t),
            r = i.document.createTextNode("");
        return n.observe(r, {
          characterData: !0
        }), function () {
          r.data = e = ++e % 2;
        };
      };
    }).call(this, n(5));
  }, function (t, e, n) {
    "use strict";

    (function (n) {
      e.test = function () {
        return !n.setImmediate && void 0 !== n.MessageChannel;
      }, e.install = function (t) {
        var e = new n.MessageChannel();
        return e.port1.onmessage = t, function () {
          e.port2.postMessage(0);
        };
      };
    }).call(this, n(5));
  }, function (t, e, n) {
    "use strict";

    (function (n) {
      e.test = function () {
        return "document" in n && "onreadystatechange" in n.document.createElement("script");
      }, e.install = function (e) {
        return function () {
          var t = n.document.createElement("script");
          return t.onreadystatechange = function () {
            e(), t.onreadystatechange = null, t.parentNode.removeChild(t), t = null;
          }, n.document.documentElement.appendChild(t), e;
        };
      };
    }).call(this, n(5));
  }, function (t, e, n) {
    "use strict";

    e.test = function () {
      return !0;
    }, e.install = function (t) {
      return function () {
        setTimeout(t, 0);
      };
    };
  }, function (t, e, n) {
    "use strict";

    var a = n(0),
        c = n(2),
        r = n(15),
        i = n(64),
        u = n(16);

    function l(e) {
      var t,
          n,
          r,
          i = this;
      (e = e || {}).menu || a.error("menu is required"), a.isArray(e.datasets) || a.isObject(e.datasets) || a.error("1 or more datasets required"), e.datasets || a.error("datasets is required"), this.isOpen = !1, this.isEmpty = !0, this.minLength = e.minLength || 0, this.templates = {}, this.appendTo = e.appendTo || !1, this.css = a.mixin({}, u, e.appendTo ? u.appendTo : {}), this.cssClasses = e.cssClasses = a.mixin({}, u.defaultClasses, e.cssClasses || {}), this.cssClasses.prefix = e.cssClasses.formattedPrefix || a.formatPrefix(this.cssClasses.prefix, this.cssClasses.noPrefix), t = a.bind(this._onSuggestionClick, this), n = a.bind(this._onSuggestionMouseEnter, this), r = a.bind(this._onSuggestionMouseLeave, this);
      var o = a.className(this.cssClasses.prefix, this.cssClasses.suggestion);
      this.$menu = c.element(e.menu).on("mouseenter.aa", o, n).on("mouseleave.aa", o, r).on("click.aa", o, t), this.$container = e.appendTo ? e.wrapper : this.$menu, e.templates && e.templates.header && (this.templates.header = a.templatify(e.templates.header), this.$menu.prepend(this.templates.header())), e.templates && e.templates.empty && (this.templates.empty = a.templatify(e.templates.empty), this.$empty = c.element('<div class="' + a.className(this.cssClasses.prefix, this.cssClasses.empty, !0) + '"></div>'), this.$menu.append(this.$empty), this.$empty.hide()), this.datasets = a.map(e.datasets, function (t) {
        return function (t, e, n) {
          return new l.Dataset(a.mixin({
            $menu: t,
            cssClasses: n
          }, e));
        }(i.$menu, t, e.cssClasses);
      }), a.each(this.datasets, function (t) {
        var e = t.getRoot();
        e && 0 === e.parent().length && i.$menu.append(e), t.onSync("rendered", i._onRendered, i);
      }), e.templates && e.templates.footer && (this.templates.footer = a.templatify(e.templates.footer), this.$menu.append(this.templates.footer()));
      var s = this;
      c.element(window).resize(function () {
        s._redraw();
      });
    }

    a.mixin(l.prototype, r, {
      _onSuggestionClick: function _onSuggestionClick(t) {
        this.trigger("suggestionClicked", c.element(t.currentTarget));
      },
      _onSuggestionMouseEnter: function _onSuggestionMouseEnter(t) {
        var e = c.element(t.currentTarget);

        if (!e.hasClass(a.className(this.cssClasses.prefix, this.cssClasses.cursor, !0))) {
          this._removeCursor();

          var n = this;
          setTimeout(function () {
            n._setCursor(e, !1);
          }, 0);
        }
      },
      _onSuggestionMouseLeave: function _onSuggestionMouseLeave(t) {
        if (t.relatedTarget && 0 < c.element(t.relatedTarget).closest("." + a.className(this.cssClasses.prefix, this.cssClasses.cursor, !0)).length) return;
        this._removeCursor(), this.trigger("cursorRemoved");
      },
      _onRendered: function _onRendered(t, e) {
        if (this.isEmpty = a.every(this.datasets, function (t) {
          return t.isEmpty();
        }), this.isEmpty) {
          if (e.length >= this.minLength && this.trigger("empty"), this.$empty) {
            if (e.length < this.minLength) this._hide();else {
              var n = this.templates.empty({
                query: this.datasets[0] && this.datasets[0].query
              });
              this.$empty.html(n), this.$empty.show(), this._show();
            }
          } else a.any(this.datasets, function (t) {
            return t.templates && t.templates.empty;
          }) ? e.length < this.minLength ? this._hide() : this._show() : this._hide();
        } else this.isOpen && (this.$empty && (this.$empty.empty(), this.$empty.hide()), e.length >= this.minLength ? this._show() : this._hide());
        this.trigger("datasetRendered");
      },
      _hide: function _hide() {
        this.$container.hide();
      },
      _show: function _show() {
        this.$container.css("display", "block"), this._redraw(), this.trigger("shown");
      },
      _redraw: function _redraw() {
        this.isOpen && this.appendTo && this.trigger("redrawn");
      },
      _getSuggestions: function _getSuggestions() {
        return this.$menu.find(a.className(this.cssClasses.prefix, this.cssClasses.suggestion));
      },
      _getCursor: function _getCursor() {
        return this.$menu.find(a.className(this.cssClasses.prefix, this.cssClasses.cursor)).first();
      },
      _setCursor: function _setCursor(t, e) {
        t.first().addClass(a.className(this.cssClasses.prefix, this.cssClasses.cursor, !0)).attr("aria-selected", "true"), this.trigger("cursorMoved", e);
      },
      _removeCursor: function _removeCursor() {
        this._getCursor().removeClass(a.className(this.cssClasses.prefix, this.cssClasses.cursor, !0)).removeAttr("aria-selected");
      },
      _moveCursor: function _moveCursor(t) {
        var e, n, r, i;
        this.isOpen && (n = this._getCursor(), e = this._getSuggestions(), this._removeCursor(), -1 !== (r = ((r = e.index(n) + t) + 1) % (e.length + 1) - 1) ? (r < -1 && (r = e.length - 1), this._setCursor(i = e.eq(r), !0), this._ensureVisible(i)) : this.trigger("cursorRemoved"));
      },
      _ensureVisible: function _ensureVisible(t) {
        var e, n, r, i;
        n = (e = t.position().top) + t.height() + parseInt(t.css("margin-top"), 10) + parseInt(t.css("margin-bottom"), 10), r = this.$menu.scrollTop(), i = this.$menu.height() + parseInt(this.$menu.css("padding-top"), 10) + parseInt(this.$menu.css("padding-bottom"), 10), e < 0 ? this.$menu.scrollTop(r + e) : i < n && this.$menu.scrollTop(r + (n - i));
      },
      close: function close() {
        this.isOpen && (this.isOpen = !1, this._removeCursor(), this._hide(), this.trigger("closed"));
      },
      open: function open() {
        this.isOpen || (this.isOpen = !0, this.isEmpty || this._show(), this.trigger("opened"));
      },
      setLanguageDirection: function setLanguageDirection(t) {
        this.$menu.css("ltr" === t ? this.css.ltr : this.css.rtl);
      },
      moveCursorUp: function moveCursorUp() {
        this._moveCursor(-1);
      },
      moveCursorDown: function moveCursorDown() {
        this._moveCursor(1);
      },
      getDatumForSuggestion: function getDatumForSuggestion(t) {
        var e = null;
        return t.length && (e = {
          raw: i.extractDatum(t),
          value: i.extractValue(t),
          datasetName: i.extractDatasetName(t)
        }), e;
      },
      getCurrentCursor: function getCurrentCursor() {
        return this._getCursor().first();
      },
      getDatumForCursor: function getDatumForCursor() {
        return this.getDatumForSuggestion(this._getCursor().first());
      },
      getDatumForTopSuggestion: function getDatumForTopSuggestion() {
        return this.getDatumForSuggestion(this._getSuggestions().first());
      },
      cursorTopSuggestion: function cursorTopSuggestion() {
        this._setCursor(this._getSuggestions().first(), !1);
      },
      update: function update(e) {
        a.each(this.datasets, function (t) {
          t.update(e);
        });
      },
      empty: function empty() {
        a.each(this.datasets, function (t) {
          t.clear();
        }), this.isEmpty = !0;
      },
      isVisible: function isVisible() {
        return this.isOpen && !this.isEmpty;
      },
      destroy: function destroy() {
        this.$menu.off(".aa"), this.$menu = null, a.each(this.datasets, function (t) {
          t.destroy();
        });
      }
    }), l.Dataset = i, t.exports = l;
  }, function (t, e, n) {
    "use strict";

    var a = "aaDataset",
        c = "aaValue",
        u = "aaDatum",
        l = n(0),
        h = n(2),
        p = n(26),
        r = n(16),
        i = n(15);

    function o(t) {
      (t = t || {}).templates = t.templates || {}, t.source || l.error("missing source"), t.name && !function (t) {
        return /^[_a-zA-Z0-9-]+$/.test(t);
      }(t.name) && l.error("invalid dataset name: " + t.name), this.query = null, this._isEmpty = !0, this.highlight = !!t.highlight, this.name = void 0 === t.name || null === t.name ? l.getUniqueId() : t.name, this.source = t.source, this.displayFn = function (e) {
        return e = e || "value", l.isFunction(e) ? e : function (t) {
          return t[e];
        };
      }(t.display || t.displayKey), this.debounce = t.debounce, this.cache = !1 !== t.cache, this.templates = function (t, e) {
        return {
          empty: t.empty && l.templatify(t.empty),
          header: t.header && l.templatify(t.header),
          footer: t.footer && l.templatify(t.footer),
          suggestion: t.suggestion || function (t) {
            return "<p>" + e(t) + "</p>";
          }
        };
      }(t.templates, this.displayFn), this.css = l.mixin({}, r, t.appendTo ? r.appendTo : {}), this.cssClasses = t.cssClasses = l.mixin({}, r.defaultClasses, t.cssClasses || {}), this.cssClasses.prefix = t.cssClasses.formattedPrefix || l.formatPrefix(this.cssClasses.prefix, this.cssClasses.noPrefix);
      var e = l.className(this.cssClasses.prefix, this.cssClasses.dataset);
      this.$el = t.$menu && 0 < t.$menu.find(e + "-" + this.name).length ? h.element(t.$menu.find(e + "-" + this.name)[0]) : h.element(p.dataset.replace("%CLASS%", this.name).replace("%PREFIX%", this.cssClasses.prefix).replace("%DATASET%", this.cssClasses.dataset)), this.$menu = t.$menu, this.clearCachedSuggestions();
    }

    o.extractDatasetName = function (t) {
      return h.element(t).data(a);
    }, o.extractValue = function (t) {
      return h.element(t).data(c);
    }, o.extractDatum = function (t) {
      var e = h.element(t).data(u);
      return "string" == typeof e && (e = JSON.parse(e)), e;
    }, l.mixin(o.prototype, i, {
      _render: function _render(e, o) {
        if (this.$el) {
          var n,
              s = this,
              t = [].slice.call(arguments, 2);
          if (this.$el.empty(), n = o && o.length, this._isEmpty = !n, !n && this.templates.empty) this.$el.html(function () {
            var t = [].slice.call(arguments, 0);
            return t = [{
              query: e,
              isEmpty: !0
            }].concat(t), s.templates.empty.apply(this, t);
          }.apply(this, t)).prepend(s.templates.header ? r.apply(this, t) : null).append(s.templates.footer ? i.apply(this, t) : null);else if (n) this.$el.html(function () {
            var t,
                e,
                r = [].slice.call(arguments, 0),
                i = this,
                n = p.suggestions.replace("%PREFIX%", this.cssClasses.prefix).replace("%SUGGESTIONS%", this.cssClasses.suggestions);
            return t = h.element(n).css(this.css.suggestions), e = l.map(o, function (t) {
              var e,
                  n = p.suggestion.replace("%PREFIX%", i.cssClasses.prefix).replace("%SUGGESTION%", i.cssClasses.suggestion);
              return (e = h.element(n).attr({
                role: "option",
                id: ["option", Math.floor(1e8 * Math.random())].join("-")
              }).append(s.templates.suggestion.apply(this, [t].concat(r)))).data(a, s.name), e.data(c, s.displayFn(t) || void 0), e.data(u, JSON.stringify(t)), e.children().each(function () {
                h.element(this).css(i.css.suggestionChild);
              }), e;
            }), t.append.apply(t, e), t;
          }.apply(this, t)).prepend(s.templates.header ? r.apply(this, t) : null).append(s.templates.footer ? i.apply(this, t) : null);else if (o && !Array.isArray(o)) throw new TypeError("suggestions must be an array");
          this.$menu && this.$menu.addClass(this.cssClasses.prefix + (n ? "with" : "without") + "-" + this.name).removeClass(this.cssClasses.prefix + (n ? "without" : "with") + "-" + this.name), this.trigger("rendered", e);
        }

        function r() {
          var t = [].slice.call(arguments, 0);
          return t = [{
            query: e,
            isEmpty: !n
          }].concat(t), s.templates.header.apply(this, t);
        }

        function i() {
          var t = [].slice.call(arguments, 0);
          return t = [{
            query: e,
            isEmpty: !n
          }].concat(t), s.templates.footer.apply(this, t);
        }
      },
      getRoot: function getRoot() {
        return this.$el;
      },
      update: function update(n) {
        function t(t) {
          if (!this.canceled && n === this.query) {
            var e = [].slice.call(arguments, 1);
            this.cacheSuggestions(n, t, e), this._render.apply(this, [n, t].concat(e));
          }
        }

        if (this.query = n, this.canceled = !1, this.shouldFetchFromCache(n)) t.apply(this, [this.cachedSuggestions].concat(this.cachedRenderExtraArgs));else {
          var e = this,
              r = function r() {
            e.canceled || e.source(n, t.bind(e));
          };

          if (this.debounce) {
            clearTimeout(this.debounceTimeout), this.debounceTimeout = setTimeout(function () {
              e.debounceTimeout = null, r();
            }, this.debounce);
          } else r();
        }
      },
      cacheSuggestions: function cacheSuggestions(t, e, n) {
        this.cachedQuery = t, this.cachedSuggestions = e, this.cachedRenderExtraArgs = n;
      },
      shouldFetchFromCache: function shouldFetchFromCache(t) {
        return this.cache && this.cachedQuery === t && this.cachedSuggestions && this.cachedSuggestions.length;
      },
      clearCachedSuggestions: function clearCachedSuggestions() {
        delete this.cachedQuery, delete this.cachedSuggestions, delete this.cachedRenderExtraArgs;
      },
      cancel: function cancel() {
        this.canceled = !0;
      },
      clear: function clear() {
        this.cancel(), this.$el.empty(), this.trigger("rendered", "");
      },
      isEmpty: function isEmpty() {
        return this._isEmpty;
      },
      destroy: function destroy() {
        this.clearCachedSuggestions(), this.$el = null;
      }
    }), t.exports = o;
  }, function (t, e, n) {
    "use strict";

    t.exports = {
      hits: n(66),
      popularIn: n(67)
    };
  }, function (t, e, n) {
    "use strict";

    var i = n(0),
        o = n(27),
        s = n(28);

    t.exports = function (e, r) {
      var t = s(e.as._ua);
      return t && 3 <= t[0] && 20 < t[1] && ((r = r || {}).additionalUA = "autocomplete.js " + o), function (t, n) {
        e.search(t, r, function (t, e) {
          t ? i.error(t.message) : n(e.hits, e);
        });
      };
    };
  }, function (t, e, n) {
    "use strict";

    var h = n(0),
        p = n(27),
        f = n(28);

    t.exports = function (e, r, i, c) {
      var t = f(e.as._ua);
      if (t && 3 <= t[0] && 20 < t[1] && ((r = r || {}).additionalUA = "autocomplete.js " + p), !i.source) return h.error("Missing 'source' key");
      var u = h.isFunction(i.source) ? i.source : function (t) {
        return t[i.source];
      };
      if (!i.index) return h.error("Missing 'index' key");
      var l = i.index;
      return c = c || {}, function (t, a) {
        e.search(t, r, function (t, o) {
          if (t) h.error(t.message);else {
            if (0 < o.hits.length) {
              var s = o.hits[0],
                  e = h.mixin({
                hitsPerPage: 0
              }, i);
              delete e.source, delete e.index;
              var n = f(l.as._ua);
              return n && 3 <= n[0] && 20 < n[1] && (r.additionalUA = "autocomplete.js " + p), void l.search(u(s), e, function (t, e) {
                if (t) h.error(t.message);else {
                  var r = [];

                  if (c.includeAll) {
                    var n = c.allTitle || "All departments";
                    r.push(h.mixin({
                      facet: {
                        value: n,
                        count: e.nbHits
                      }
                    }, h.cloneDeep(s)));
                  }

                  h.each(e.facets, function (t, n) {
                    h.each(t, function (t, e) {
                      r.push(h.mixin({
                        facet: {
                          facet: n,
                          value: e,
                          count: t
                        }
                      }, h.cloneDeep(s)));
                    });
                  });

                  for (var i = 1; i < o.hits.length; ++i) {
                    r.push(o.hits[i]);
                  }

                  a(r, o);
                }
              });
            }

            a([]);
          }
        });
      };
    };
  }, function (t, e, n) {
    var r = n(32),
        i = n(6);
    t.exports = r["default"], t.exports.version = i["default"];
  }]);
}); //ver=1.16.3
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/webpack/buildin/module.js */ "./node_modules/webpack/buildin/module.js")(module)))

/***/ })

}]);