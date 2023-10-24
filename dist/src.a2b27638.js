// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles
parcelRequire = (function (modules, cache, entry, globalName) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof parcelRequire === 'function' && parcelRequire;
  var nodeRequire = typeof require === 'function' && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof parcelRequire === 'function' && parcelRequire;
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = cache[name] = new newRequire.Module(name);

      modules[name][0].call(module.exports, localRequire, module, module.exports, this);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [function (require, module) {
      module.exports = exports;
    }, {}];
  };

  var error;
  for (var i = 0; i < entry.length; i++) {
    try {
      newRequire(entry[i]);
    } catch (e) {
      // Save first error but execute all entries
      if (!error) {
        error = e;
      }
    }
  }

  if (entry.length) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(entry[entry.length - 1]);

    // CommonJS
    if (typeof exports === "object" && typeof module !== "undefined") {
      module.exports = mainExports;

    // RequireJS
    } else if (typeof define === "function" && define.amd) {
     define(function () {
       return mainExports;
     });

    // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }

  // Override the current require with this new one
  parcelRequire = newRequire;

  if (error) {
    // throw error from earlier, _after updating parcelRequire_
    throw error;
  }

  return newRequire;
})({"node_modules/preact/dist/preact.module.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Component = p;
exports.Fragment = y;
exports.cloneElement = S;
exports.createContext = q;
exports.h = exports.createElement = a;
exports.createRef = h;
exports.hydrate = O;
exports.options = exports.isValidElement = void 0;
exports.render = N;
exports.toChildArray = w;
var n,
  l,
  u,
  i,
  t,
  o,
  r = {},
  f = [],
  e = /acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i;
function c(n, l) {
  for (var u in l) n[u] = l[u];
  return n;
}
function s(n) {
  var l = n.parentNode;
  l && l.removeChild(n);
}
function a(n, l, u) {
  var i,
    t,
    o,
    r = arguments,
    f = {};
  for (o in l) "key" == o ? i = l[o] : "ref" == o ? t = l[o] : f[o] = l[o];
  if (arguments.length > 3) for (u = [u], o = 3; o < arguments.length; o++) u.push(r[o]);
  if (null != u && (f.children = u), "function" == typeof n && null != n.defaultProps) for (o in n.defaultProps) void 0 === f[o] && (f[o] = n.defaultProps[o]);
  return v(n, f, i, t, null);
}
function v(l, u, i, t, o) {
  var r = {
    type: l,
    props: u,
    key: i,
    ref: t,
    __k: null,
    __: null,
    __b: 0,
    __e: null,
    __d: void 0,
    __c: null,
    __h: null,
    constructor: void 0,
    __v: null == o ? ++n.__v : o
  };
  return null != n.vnode && n.vnode(r), r;
}
function h() {
  return {
    current: null
  };
}
function y(n) {
  return n.children;
}
function p(n, l) {
  this.props = n, this.context = l;
}
function d(n, l) {
  if (null == l) return n.__ ? d(n.__, n.__.__k.indexOf(n) + 1) : null;
  for (var u; l < n.__k.length; l++) if (null != (u = n.__k[l]) && null != u.__e) return u.__e;
  return "function" == typeof n.type ? d(n) : null;
}
function _(n) {
  var l, u;
  if (null != (n = n.__) && null != n.__c) {
    for (n.__e = n.__c.base = null, l = 0; l < n.__k.length; l++) if (null != (u = n.__k[l]) && null != u.__e) {
      n.__e = n.__c.base = u.__e;
      break;
    }
    return _(n);
  }
}
function k(l) {
  (!l.__d && (l.__d = !0) && u.push(l) && !b.__r++ || t !== n.debounceRendering) && ((t = n.debounceRendering) || i)(b);
}
function b() {
  for (var n; b.__r = u.length;) n = u.sort(function (n, l) {
    return n.__v.__b - l.__v.__b;
  }), u = [], n.some(function (n) {
    var l, u, i, t, o, r;
    n.__d && (o = (t = (l = n).__v).__e, (r = l.__P) && (u = [], (i = c({}, t)).__v = t.__v + 1, I(r, t, i, l.__n, void 0 !== r.ownerSVGElement, null != t.__h ? [o] : null, u, null == o ? d(t) : o, t.__h), T(u, t), t.__e != o && _(t)));
  });
}
function m(n, l, u, i, t, o, e, c, s, a) {
  var h,
    p,
    _,
    k,
    b,
    m,
    w,
    A = i && i.__k || f,
    P = A.length;
  for (u.__k = [], h = 0; h < l.length; h++) if (null != (k = u.__k[h] = null == (k = l[h]) || "boolean" == typeof k ? null : "string" == typeof k || "number" == typeof k || "bigint" == typeof k ? v(null, k, null, null, k) : Array.isArray(k) ? v(y, {
    children: k
  }, null, null, null) : k.__b > 0 ? v(k.type, k.props, k.key, null, k.__v) : k)) {
    if (k.__ = u, k.__b = u.__b + 1, null === (_ = A[h]) || _ && k.key == _.key && k.type === _.type) A[h] = void 0;else for (p = 0; p < P; p++) {
      if ((_ = A[p]) && k.key == _.key && k.type === _.type) {
        A[p] = void 0;
        break;
      }
      _ = null;
    }
    I(n, k, _ = _ || r, t, o, e, c, s, a), b = k.__e, (p = k.ref) && _.ref != p && (w || (w = []), _.ref && w.push(_.ref, null, k), w.push(p, k.__c || b, k)), null != b ? (null == m && (m = b), "function" == typeof k.type && null != k.__k && k.__k === _.__k ? k.__d = s = g(k, s, n) : s = x(n, k, _, A, b, s), a || "option" !== u.type ? "function" == typeof u.type && (u.__d = s) : n.value = "") : s && _.__e == s && s.parentNode != n && (s = d(_));
  }
  for (u.__e = m, h = P; h--;) null != A[h] && ("function" == typeof u.type && null != A[h].__e && A[h].__e == u.__d && (u.__d = d(i, h + 1)), L(A[h], A[h]));
  if (w) for (h = 0; h < w.length; h++) z(w[h], w[++h], w[++h]);
}
function g(n, l, u) {
  var i, t;
  for (i = 0; i < n.__k.length; i++) (t = n.__k[i]) && (t.__ = n, l = "function" == typeof t.type ? g(t, l, u) : x(u, t, t, n.__k, t.__e, l));
  return l;
}
function w(n, l) {
  return l = l || [], null == n || "boolean" == typeof n || (Array.isArray(n) ? n.some(function (n) {
    w(n, l);
  }) : l.push(n)), l;
}
function x(n, l, u, i, t, o) {
  var r, f, e;
  if (void 0 !== l.__d) r = l.__d, l.__d = void 0;else if (null == u || t != o || null == t.parentNode) n: if (null == o || o.parentNode !== n) n.appendChild(t), r = null;else {
    for (f = o, e = 0; (f = f.nextSibling) && e < i.length; e += 2) if (f == t) break n;
    n.insertBefore(t, o), r = o;
  }
  return void 0 !== r ? r : t.nextSibling;
}
function A(n, l, u, i, t) {
  var o;
  for (o in u) "children" === o || "key" === o || o in l || C(n, o, null, u[o], i);
  for (o in l) t && "function" != typeof l[o] || "children" === o || "key" === o || "value" === o || "checked" === o || u[o] === l[o] || C(n, o, l[o], u[o], i);
}
function P(n, l, u) {
  "-" === l[0] ? n.setProperty(l, u) : n[l] = null == u ? "" : "number" != typeof u || e.test(l) ? u : u + "px";
}
function C(n, l, u, i, t) {
  var o;
  n: if ("style" === l) {
    if ("string" == typeof u) n.style.cssText = u;else {
      if ("string" == typeof i && (n.style.cssText = i = ""), i) for (l in i) u && l in u || P(n.style, l, "");
      if (u) for (l in u) i && u[l] === i[l] || P(n.style, l, u[l]);
    }
  } else if ("o" === l[0] && "n" === l[1]) o = l !== (l = l.replace(/Capture$/, "")), l = l.toLowerCase() in n ? l.toLowerCase().slice(2) : l.slice(2), n.l || (n.l = {}), n.l[l + o] = u, u ? i || n.addEventListener(l, o ? H : $, o) : n.removeEventListener(l, o ? H : $, o);else if ("dangerouslySetInnerHTML" !== l) {
    if (t) l = l.replace(/xlink[H:h]/, "h").replace(/sName$/, "s");else if ("href" !== l && "list" !== l && "form" !== l && "tabIndex" !== l && "download" !== l && l in n) try {
      n[l] = null == u ? "" : u;
      break n;
    } catch (n) {}
    "function" == typeof u || (null != u && (!1 !== u || "a" === l[0] && "r" === l[1]) ? n.setAttribute(l, u) : n.removeAttribute(l));
  }
}
function $(l) {
  this.l[l.type + !1](n.event ? n.event(l) : l);
}
function H(l) {
  this.l[l.type + !0](n.event ? n.event(l) : l);
}
function I(l, u, i, t, o, r, f, e, s) {
  var a,
    v,
    h,
    d,
    _,
    k,
    b,
    g,
    w,
    x,
    A,
    P = u.type;
  if (void 0 !== u.constructor) return null;
  null != i.__h && (s = i.__h, e = u.__e = i.__e, u.__h = null, r = [e]), (a = n.__b) && a(u);
  try {
    n: if ("function" == typeof P) {
      if (g = u.props, w = (a = P.contextType) && t[a.__c], x = a ? w ? w.props.value : a.__ : t, i.__c ? b = (v = u.__c = i.__c).__ = v.__E : ("prototype" in P && P.prototype.render ? u.__c = v = new P(g, x) : (u.__c = v = new p(g, x), v.constructor = P, v.render = M), w && w.sub(v), v.props = g, v.state || (v.state = {}), v.context = x, v.__n = t, h = v.__d = !0, v.__h = []), null == v.__s && (v.__s = v.state), null != P.getDerivedStateFromProps && (v.__s == v.state && (v.__s = c({}, v.__s)), c(v.__s, P.getDerivedStateFromProps(g, v.__s))), d = v.props, _ = v.state, h) null == P.getDerivedStateFromProps && null != v.componentWillMount && v.componentWillMount(), null != v.componentDidMount && v.__h.push(v.componentDidMount);else {
        if (null == P.getDerivedStateFromProps && g !== d && null != v.componentWillReceiveProps && v.componentWillReceiveProps(g, x), !v.__e && null != v.shouldComponentUpdate && !1 === v.shouldComponentUpdate(g, v.__s, x) || u.__v === i.__v) {
          v.props = g, v.state = v.__s, u.__v !== i.__v && (v.__d = !1), v.__v = u, u.__e = i.__e, u.__k = i.__k, u.__k.forEach(function (n) {
            n && (n.__ = u);
          }), v.__h.length && f.push(v);
          break n;
        }
        null != v.componentWillUpdate && v.componentWillUpdate(g, v.__s, x), null != v.componentDidUpdate && v.__h.push(function () {
          v.componentDidUpdate(d, _, k);
        });
      }
      v.context = x, v.props = g, v.state = v.__s, (a = n.__r) && a(u), v.__d = !1, v.__v = u, v.__P = l, a = v.render(v.props, v.state, v.context), v.state = v.__s, null != v.getChildContext && (t = c(c({}, t), v.getChildContext())), h || null == v.getSnapshotBeforeUpdate || (k = v.getSnapshotBeforeUpdate(d, _)), A = null != a && a.type === y && null == a.key ? a.props.children : a, m(l, Array.isArray(A) ? A : [A], u, i, t, o, r, f, e, s), v.base = u.__e, u.__h = null, v.__h.length && f.push(v), b && (v.__E = v.__ = null), v.__e = !1;
    } else null == r && u.__v === i.__v ? (u.__k = i.__k, u.__e = i.__e) : u.__e = j(i.__e, u, i, t, o, r, f, s);
    (a = n.diffed) && a(u);
  } catch (l) {
    u.__v = null, (s || null != r) && (u.__e = e, u.__h = !!s, r[r.indexOf(e)] = null), n.__e(l, u, i);
  }
}
function T(l, u) {
  n.__c && n.__c(u, l), l.some(function (u) {
    try {
      l = u.__h, u.__h = [], l.some(function (n) {
        n.call(u);
      });
    } catch (l) {
      n.__e(l, u.__v);
    }
  });
}
function j(n, l, u, i, t, o, e, c) {
  var a,
    v,
    h,
    y,
    p = u.props,
    d = l.props,
    _ = l.type,
    k = 0;
  if ("svg" === _ && (t = !0), null != o) for (; k < o.length; k++) if ((a = o[k]) && (a === n || (_ ? a.localName == _ : 3 == a.nodeType))) {
    n = a, o[k] = null;
    break;
  }
  if (null == n) {
    if (null === _) return document.createTextNode(d);
    n = t ? document.createElementNS("http://www.w3.org/2000/svg", _) : document.createElement(_, d.is && d), o = null, c = !1;
  }
  if (null === _) p === d || c && n.data === d || (n.data = d);else {
    if (o = o && f.slice.call(n.childNodes), v = (p = u.props || r).dangerouslySetInnerHTML, h = d.dangerouslySetInnerHTML, !c) {
      if (null != o) for (p = {}, y = 0; y < n.attributes.length; y++) p[n.attributes[y].name] = n.attributes[y].value;
      (h || v) && (h && (v && h.__html == v.__html || h.__html === n.innerHTML) || (n.innerHTML = h && h.__html || ""));
    }
    if (A(n, d, p, t, c), h) l.__k = [];else if (k = l.props.children, m(n, Array.isArray(k) ? k : [k], l, u, i, t && "foreignObject" !== _, o, e, n.firstChild, c), null != o) for (k = o.length; k--;) null != o[k] && s(o[k]);
    c || ("value" in d && void 0 !== (k = d.value) && (k !== n.value || "progress" === _ && !k) && C(n, "value", k, p.value, !1), "checked" in d && void 0 !== (k = d.checked) && k !== n.checked && C(n, "checked", k, p.checked, !1));
  }
  return n;
}
function z(l, u, i) {
  try {
    "function" == typeof l ? l(u) : l.current = u;
  } catch (l) {
    n.__e(l, i);
  }
}
function L(l, u, i) {
  var t, o, r;
  if (n.unmount && n.unmount(l), (t = l.ref) && (t.current && t.current !== l.__e || z(t, null, u)), i || "function" == typeof l.type || (i = null != (o = l.__e)), l.__e = l.__d = void 0, null != (t = l.__c)) {
    if (t.componentWillUnmount) try {
      t.componentWillUnmount();
    } catch (l) {
      n.__e(l, u);
    }
    t.base = t.__P = null;
  }
  if (t = l.__k) for (r = 0; r < t.length; r++) t[r] && L(t[r], u, i);
  null != o && s(o);
}
function M(n, l, u) {
  return this.constructor(n, u);
}
function N(l, u, i) {
  var t, o, e;
  n.__ && n.__(l, u), o = (t = "function" == typeof i) ? null : i && i.__k || u.__k, e = [], I(u, l = (!t && i || u).__k = a(y, null, [l]), o || r, r, void 0 !== u.ownerSVGElement, !t && i ? [i] : o ? null : u.firstChild ? f.slice.call(u.childNodes) : null, e, !t && i ? i : o ? o.__e : u.firstChild, t), T(e, l);
}
function O(n, l) {
  N(n, l, O);
}
function S(n, l, u) {
  var i,
    t,
    o,
    r = arguments,
    f = c({}, n.props);
  for (o in l) "key" == o ? i = l[o] : "ref" == o ? t = l[o] : f[o] = l[o];
  if (arguments.length > 3) for (u = [u], o = 3; o < arguments.length; o++) u.push(r[o]);
  return null != u && (f.children = u), v(n.type, f, i || n.key, t || n.ref, null);
}
function q(n, l) {
  var u = {
    __c: l = "__cC" + o++,
    __: n,
    Consumer: function (n, l) {
      return n.children(l);
    },
    Provider: function (n) {
      var u, i;
      return this.getChildContext || (u = [], (i = {})[l] = this, this.getChildContext = function () {
        return i;
      }, this.shouldComponentUpdate = function (n) {
        this.props.value !== n.value && u.some(k);
      }, this.sub = function (n) {
        u.push(n);
        var l = n.componentWillUnmount;
        n.componentWillUnmount = function () {
          u.splice(u.indexOf(n), 1), l && l.call(n);
        };
      }), n.children;
    }
  };
  return u.Provider.__ = u.Consumer.contextType = u;
}
exports.options = n = {
  __e: function (n, l) {
    for (var u, i, t; l = l.__;) if ((u = l.__c) && !u.__) try {
      if ((i = u.constructor) && null != i.getDerivedStateFromError && (u.setState(i.getDerivedStateFromError(n)), t = u.__d), null != u.componentDidCatch && (u.componentDidCatch(n), t = u.__d), t) return u.__E = u;
    } catch (l) {
      n = l;
    }
    throw n;
  },
  __v: 0
}, exports.isValidElement = l = function (n) {
  return null != n && void 0 === n.constructor;
}, p.prototype.setState = function (n, l) {
  var u;
  u = null != this.__s && this.__s !== this.state ? this.__s : this.__s = c({}, this.state), "function" == typeof n && (n = n(c({}, u), this.props)), n && c(u, n), null != n && this.__v && (l && this.__h.push(l), k(this));
}, p.prototype.forceUpdate = function (n) {
  this.__v && (this.__e = !0, n && this.__h.push(n), k(this));
}, p.prototype.render = y, u = [], i = "function" == typeof Promise ? Promise.prototype.then.bind(Promise.resolve()) : setTimeout, b.__r = 0, o = 0;
},{}],"node_modules/preact-router/dist/preact-router.es.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.Router = exports.Route = exports.Link = void 0;
exports.exec = exec;
exports.getCurrentUrl = getCurrentUrl;
exports.route = route;
exports.subscribers = void 0;
var _preact = require("preact");
var EMPTY$1 = {};
function assign(obj, props) {
  // eslint-disable-next-line guard-for-in
  for (var i in props) {
    obj[i] = props[i];
  }
  return obj;
}
function exec(url, route, opts) {
  var reg = /(?:\?([^#]*))?(#.*)?$/,
    c = url.match(reg),
    matches = {},
    ret;
  if (c && c[1]) {
    var p = c[1].split('&');
    for (var i = 0; i < p.length; i++) {
      var r = p[i].split('=');
      matches[decodeURIComponent(r[0])] = decodeURIComponent(r.slice(1).join('='));
    }
  }
  url = segmentize(url.replace(reg, ''));
  route = segmentize(route || '');
  var max = Math.max(url.length, route.length);
  for (var i$1 = 0; i$1 < max; i$1++) {
    if (route[i$1] && route[i$1].charAt(0) === ':') {
      var param = route[i$1].replace(/(^:|[+*?]+$)/g, ''),
        flags = (route[i$1].match(/[+*?]+$/) || EMPTY$1)[0] || '',
        plus = ~flags.indexOf('+'),
        star = ~flags.indexOf('*'),
        val = url[i$1] || '';
      if (!val && !star && (flags.indexOf('?') < 0 || plus)) {
        ret = false;
        break;
      }
      matches[param] = decodeURIComponent(val);
      if (plus || star) {
        matches[param] = url.slice(i$1).map(decodeURIComponent).join('/');
        break;
      }
    } else if (route[i$1] !== url[i$1]) {
      ret = false;
      break;
    }
  }
  if (opts.default !== true && ret === false) {
    return false;
  }
  return matches;
}
function pathRankSort(a, b) {
  return a.rank < b.rank ? 1 : a.rank > b.rank ? -1 : a.index - b.index;
}

// filter out VNodes without attributes (which are unrankeable), and add `index`/`rank` properties to be used in sorting.
function prepareVNodeForRanking(vnode, index) {
  vnode.index = index;
  vnode.rank = rankChild(vnode);
  return vnode.props;
}
function segmentize(url) {
  return url.replace(/(^\/+|\/+$)/g, '').split('/');
}
function rankSegment(segment) {
  return segment.charAt(0) == ':' ? 1 + '*+?'.indexOf(segment.charAt(segment.length - 1)) || 4 : 5;
}
function rank(path) {
  return segmentize(path).map(rankSegment).join('');
}
function rankChild(vnode) {
  return vnode.props.default ? 0 : rank(vnode.props.path);
}
var customHistory = null;
var ROUTERS = [];
var subscribers = exports.subscribers = [];
var EMPTY = {};
function setUrl(url, type) {
  if (type === void 0) type = 'push';
  if (customHistory && customHistory[type]) {
    customHistory[type](url);
  } else if (typeof history !== 'undefined' && history[type + 'State']) {
    history[type + 'State'](null, null, url);
  }
}
function getCurrentUrl() {
  var url;
  if (customHistory && customHistory.location) {
    url = customHistory.location;
  } else if (customHistory && customHistory.getCurrentLocation) {
    url = customHistory.getCurrentLocation();
  } else {
    url = typeof location !== 'undefined' ? location : EMPTY;
  }
  return "" + (url.pathname || '') + (url.search || '');
}
function route(url, replace) {
  if (replace === void 0) replace = false;
  if (typeof url !== 'string' && url.url) {
    replace = url.replace;
    url = url.url;
  }

  // only push URL into history if we can handle it
  if (canRoute(url)) {
    setUrl(url, replace ? 'replace' : 'push');
  }
  return routeTo(url);
}

/** Check if the given URL can be handled by any router instances. */
function canRoute(url) {
  for (var i = ROUTERS.length; i--;) {
    if (ROUTERS[i].canRoute(url)) {
      return true;
    }
  }
  return false;
}

/** Tell all router instances to handle the given URL.  */
function routeTo(url) {
  var didRoute = false;
  for (var i = 0; i < ROUTERS.length; i++) {
    if (ROUTERS[i].routeTo(url) === true) {
      didRoute = true;
    }
  }
  for (var i$1 = subscribers.length; i$1--;) {
    subscribers[i$1](url);
  }
  return didRoute;
}
function routeFromLink(node) {
  // only valid elements
  if (!node || !node.getAttribute) {
    return;
  }
  var href = node.getAttribute('href'),
    target = node.getAttribute('target');

  // ignore links with targets and non-path URLs
  if (!href || !href.match(/^\//g) || target && !target.match(/^_?self$/i)) {
    return;
  }

  // attempt to route, if no match simply cede control to browser
  return route(href);
}
function handleLinkClick(e) {
  if (e.ctrlKey || e.metaKey || e.altKey || e.shiftKey || e.button !== 0) {
    return;
  }
  routeFromLink(e.currentTarget || e.target || this);
  return prevent(e);
}
function prevent(e) {
  if (e) {
    if (e.stopImmediatePropagation) {
      e.stopImmediatePropagation();
    }
    if (e.stopPropagation) {
      e.stopPropagation();
    }
    e.preventDefault();
  }
  return false;
}
function delegateLinkHandler(e) {
  // ignore events the browser takes care of already:
  if (e.ctrlKey || e.metaKey || e.altKey || e.shiftKey || e.button !== 0) {
    return;
  }
  var t = e.target;
  do {
    if (String(t.nodeName).toUpperCase() === 'A' && t.getAttribute('href')) {
      if (t.hasAttribute('native')) {
        return;
      }
      // if link is handled by the router, prevent browser defaults
      if (routeFromLink(t)) {
        return prevent(e);
      }
    }
  } while (t = t.parentNode);
}
var eventListenersInitialized = false;
function initEventListeners() {
  if (eventListenersInitialized) {
    return;
  }
  if (typeof addEventListener === 'function') {
    if (!customHistory) {
      addEventListener('popstate', function () {
        routeTo(getCurrentUrl());
      });
    }
    addEventListener('click', delegateLinkHandler);
  }
  eventListenersInitialized = true;
}
var Router = exports.Router = function (Component$$1) {
  function Router(props) {
    Component$$1.call(this, props);
    if (props.history) {
      customHistory = props.history;
    }
    this.state = {
      url: props.url || getCurrentUrl()
    };
    initEventListeners();
  }
  if (Component$$1) Router.__proto__ = Component$$1;
  Router.prototype = Object.create(Component$$1 && Component$$1.prototype);
  Router.prototype.constructor = Router;
  Router.prototype.shouldComponentUpdate = function shouldComponentUpdate(props) {
    if (props.static !== true) {
      return true;
    }
    return props.url !== this.props.url || props.onChange !== this.props.onChange;
  };

  /** Check if the given URL can be matched against any children */
  Router.prototype.canRoute = function canRoute(url) {
    var children = (0, _preact.toChildArray)(this.props.children);
    return this.getMatchingChildren(children, url, false).length > 0;
  };

  /** Re-render children with a new URL to match against. */
  Router.prototype.routeTo = function routeTo(url) {
    this.setState({
      url: url
    });
    var didRoute = this.canRoute(url);

    // trigger a manual re-route if we're not in the middle of an update:
    if (!this.updating) {
      this.forceUpdate();
    }
    return didRoute;
  };
  Router.prototype.componentWillMount = function componentWillMount() {
    ROUTERS.push(this);
    this.updating = true;
  };
  Router.prototype.componentDidMount = function componentDidMount() {
    var this$1 = this;
    if (customHistory) {
      this.unlisten = customHistory.listen(function (location) {
        this$1.routeTo("" + (location.pathname || '') + (location.search || ''));
      });
    }
    this.updating = false;
  };
  Router.prototype.componentWillUnmount = function componentWillUnmount() {
    if (typeof this.unlisten === 'function') {
      this.unlisten();
    }
    ROUTERS.splice(ROUTERS.indexOf(this), 1);
  };
  Router.prototype.componentWillUpdate = function componentWillUpdate() {
    this.updating = true;
  };
  Router.prototype.componentDidUpdate = function componentDidUpdate() {
    this.updating = false;
  };
  Router.prototype.getMatchingChildren = function getMatchingChildren(children, url, invoke) {
    return children.filter(prepareVNodeForRanking).sort(pathRankSort).map(function (vnode) {
      var matches = exec(url, vnode.props.path, vnode.props);
      if (matches) {
        if (invoke !== false) {
          var newProps = {
            url: url,
            matches: matches
          };
          assign(newProps, matches);
          delete newProps.ref;
          delete newProps.key;
          return (0, _preact.cloneElement)(vnode, newProps);
        }
        return vnode;
      }
    }).filter(Boolean);
  };
  Router.prototype.render = function render(ref, ref$1) {
    var children = ref.children;
    var onChange = ref.onChange;
    var url = ref$1.url;
    var active = this.getMatchingChildren((0, _preact.toChildArray)(children), url, true);
    var current = active[0] || null;
    var previous = this.previousUrl;
    if (url !== previous) {
      this.previousUrl = url;
      if (typeof onChange === 'function') {
        onChange({
          router: this,
          url: url,
          previous: previous,
          active: active,
          current: current
        });
      }
    }
    return current;
  };
  return Router;
}(_preact.Component);
var Link = function (props) {
  return (0, _preact.createElement)('a', assign({
    onClick: handleLinkClick
  }, props));
};
exports.Link = Link;
var Route = function (props) {
  return (0, _preact.createElement)(props.component, props);
};
exports.Route = Route;
Router.subscribers = subscribers;
Router.getCurrentUrl = getCurrentUrl;
Router.route = route;
Router.Router = Router;
Router.Route = Route;
Router.Link = Link;
Router.exec = exec;
var _default = exports.default = Router;
},{"preact":"node_modules/preact/dist/preact.module.js"}],"images/cr_logo_up.png":[function(require,module,exports) {
module.exports = "/cr_logo_up.ff1f0cf6.png";
},{}],"node_modules/parcel-bundler/src/builtins/bundle-url.js":[function(require,module,exports) {
var bundleURL = null;
function getBundleURLCached() {
  if (!bundleURL) {
    bundleURL = getBundleURL();
  }
  return bundleURL;
}
function getBundleURL() {
  // Attempt to find the URL of the current script and use that as the base URL
  try {
    throw new Error();
  } catch (err) {
    var matches = ('' + err.stack).match(/(https?|file|ftp|chrome-extension|moz-extension):\/\/[^)\n]+/g);
    if (matches) {
      return getBaseURL(matches[0]);
    }
  }
  return '/';
}
function getBaseURL(url) {
  return ('' + url).replace(/^((?:https?|file|ftp|chrome-extension|moz-extension):\/\/.+)?\/[^/]+(?:\?.*)?$/, '$1') + '/';
}
exports.getBundleURL = getBundleURLCached;
exports.getBaseURL = getBaseURL;
},{}],"node_modules/parcel-bundler/src/builtins/css-loader.js":[function(require,module,exports) {
var bundle = require('./bundle-url');
function updateLink(link) {
  var newLink = link.cloneNode();
  newLink.onload = function () {
    link.remove();
  };
  newLink.href = link.href.split('?')[0] + '?' + Date.now();
  link.parentNode.insertBefore(newLink, link.nextSibling);
}
var cssTimeout = null;
function reloadCSS() {
  if (cssTimeout) {
    return;
  }
  cssTimeout = setTimeout(function () {
    var links = document.querySelectorAll('link[rel="stylesheet"]');
    for (var i = 0; i < links.length; i++) {
      if (bundle.getBaseURL(links[i].href) === bundle.getBundleURL()) {
        updateLink(links[i]);
      }
    }
    cssTimeout = null;
  }, 50);
}
module.exports = reloadCSS;
},{"./bundle-url":"node_modules/parcel-bundler/src/builtins/bundle-url.js"}],"src/navbar_styles.css":[function(require,module,exports) {
var reloadCSS = require('_css_loader');
module.hot.dispose(reloadCSS);
module.hot.accept(reloadCSS);
},{"_css_loader":"node_modules/parcel-bundler/src/builtins/css-loader.js"}],"src/NavBar.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _preact = require("preact");
var _cr_logo_up = _interopRequireDefault(require("../images/cr_logo_up.png"));
require("./navbar_styles.css");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }
function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }
function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }
function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }
function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }
function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }
var NavBar = /*#__PURE__*/function (_Component) {
  _inherits(NavBar, _Component);
  var _super = _createSuper(NavBar);
  function NavBar() {
    var _this;
    _classCallCheck(this, NavBar);
    _this = _super.call(this);
    _this.state = {
      mobileMenuActive: false,
      buttonActive: false
    };
    _this.toggleMobileMenu = _this.toggleMobileMenu.bind(_assertThisInitialized(_this));
    return _this;
  }
  _createClass(NavBar, [{
    key: "toggleMobileMenu",
    value: function toggleMobileMenu() {
      this.setState({
        mobileMenuActive: !this.state.mobileMenuActive,
        buttonActive: !this.state.buttonActive
      });
    }
  }, {
    key: "render",
    value: function render() {
      var mobileMenuClass = this.state.mobileMenuActive ? "nav-links active" : "nav-links";
      var buttonClass = this.state.buttonActive ? "toggle-button change" : "toggle-button";
      return (0, _preact.h)("div", {
        class: "nav-container"
      }, (0, _preact.h)("div", {
        class: "logo-cont"
      }, (0, _preact.h)("a", {
        href: "/",
        class: "logo"
      }, (0, _preact.h)("img", {
        src: _cr_logo_up.default,
        alt: "celina logo"
      }))), (0, _preact.h)("div", {
        class: "menu-container"
      }, (0, _preact.h)("ul", {
        class: mobileMenuClass
      }, (0, _preact.h)("li", {
        class: "nav-item"
      }, (0, _preact.h)("a", {
        href: "/",
        onClick: this.toggleMobileMenu
      }, "home")), (0, _preact.h)("li", {
        class: "nav-item"
      }, (0, _preact.h)("a", {
        href: "/exp",
        onClick: this.toggleMobileMenu
      }, "experience")), (0, _preact.h)("li", {
        class: "nav-item"
      }, (0, _preact.h)("a", {
        href: "/skills",
        onClick: this.toggleMobileMenu
      }, "skills")), (0, _preact.h)("li", {
        class: "nav-item"
      }, (0, _preact.h)("a", {
        href: "/about",
        onClick: this.toggleMobileMenu
      }, "about")), (0, _preact.h)("li", {
        class: "nav-item"
      }, (0, _preact.h)("a", {
        href: "/contact",
        onClick: this.toggleMobileMenu
      }, "contact me")))), (0, _preact.h)("div", {
        class: buttonClass,
        onClick: this.toggleMobileMenu
      }, (0, _preact.h)("span", {
        class: "bar"
      }), (0, _preact.h)("span", {
        class: "bar"
      }), (0, _preact.h)("span", {
        class: "bar"
      })));
    }
  }]);
  return NavBar;
}(_preact.Component);
var _default = exports.default = NavBar;
},{"preact":"node_modules/preact/dist/preact.module.js","../images/cr_logo_up.png":"images/cr_logo_up.png","./navbar_styles.css":"src/navbar_styles.css"}],"src/home_styles.css":[function(require,module,exports) {
var reloadCSS = require('_css_loader');
module.hot.dispose(reloadCSS);
module.hot.accept(reloadCSS);
},{"_css_loader":"node_modules/parcel-bundler/src/builtins/css-loader.js"}],"images/hawaii_trees.jpg":[function(require,module,exports) {
module.exports = "/hawaii_trees.d0b9ecd4.jpg";
},{}],"images/maggiore.jpg":[function(require,module,exports) {
module.exports = "/maggiore.63a928ac.jpg";
},{}],"images/amalfi_boat.jpg":[function(require,module,exports) {
module.exports = "/amalfi_boat.aef6e7d7.jpg";
},{}],"images/geis.jpg":[function(require,module,exports) {
module.exports = "/geis.d0560979.jpg";
},{}],"src/Home.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _preact = require("preact");
require("./home_styles.css");
var _hawaii_trees = _interopRequireDefault(require("../images/hawaii_trees.jpg"));
var _maggiore = _interopRequireDefault(require("../images/maggiore.jpg"));
var _amalfi_boat = _interopRequireDefault(require("../images/amalfi_boat.jpg"));
var _geis = _interopRequireDefault(require("../images/geis.jpg"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }
function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }
function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }
function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }
function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }
function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
var Home = /*#__PURE__*/function (_Component) {
  _inherits(Home, _Component);
  var _super = _createSuper(Home);
  function Home() {
    var _this;
    _classCallCheck(this, Home);
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }
    _this = _super.call.apply(_super, [this].concat(args));
    _defineProperty(_assertThisInitialized(_this), "handleScroll", function () {
      var newTextElements = Array.from(document.querySelectorAll(".story-text"));
      var windowHeight = window.innerHeight;
      newTextElements.forEach(function (el) {
        var rect = el.getBoundingClientRect();
        var rectCenter = rect.top + rect.height / 2; /* center Y-coordinate of the element in the viewport */

        var newOpacity = 0;
        var newSize = 1.5; /* font size for smaller screens */

        // larger screens
        if (window.innerWidth > 961) {
          newOpacity = Math.max(Math.min(2 * (windowHeight - rectCenter) / windowHeight, 1), 0);
          newSize = 3 * newOpacity; /* so the size will range from 0 to 3 */
        }
        // smaller screens
        else {
          newOpacity = Math.max(Math.min(2 * rectCenter / windowHeight, 1), 0);
          newSize += newOpacity / 25; /* so the size will range from 1.5 to 3 */
        }

        el.style.opacity = newOpacity;
        el.style.fontSize = "".concat(newSize, "em");
      });
    });
    return _this;
  }
  _createClass(Home, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      window.addEventListener("scroll", this.handleScroll);
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      window.removeEventListener("scroll", this.handleScroll);
    }
  }, {
    key: "render",
    value: function render() {
      return (0, _preact.h)("div", {
        class: "story-container"
      }, (0, _preact.h)("div", {
        class: "story-item"
      }, (0, _preact.h)("img", {
        src: _maggiore.default,
        alt: "Lake Maggiore"
      }), (0, _preact.h)("h2", {
        class: "story-text"
      }, (0, _preact.h)("p", null, "Welcome to my personal website. I'm Celina Ryan and I\u2019m a Computer Science major at the University of Notre Dame. I made this website to tell potential employers a bit more about myself beyond my resume, to dig a bit deeper into web development, and to explain what I hope to achieve with my career."))), (0, _preact.h)("div", {
        class: "story-item"
      }, (0, _preact.h)("img", {
        src: _hawaii_trees.default,
        alt: "hawaii"
      }), (0, _preact.h)("h2", {
        class: "story-text"
      }, (0, _preact.h)("p", null, "I'm currently a senior and graduating in May 2024. Following graduation, I hope to have a job by September 2024. I'm looking for a full-time software development and/or engineering position. I'm not too picky where the job is..."))), (0, _preact.h)("div", {
        class: "story-item"
      }, (0, _preact.h)("img", {
        src: _geis.default,
        alt: "Geissenheim"
      }), (0, _preact.h)("h2", {
        class: "story-text"
      }, (0, _preact.h)("p", null, "I hope to end up either in the Washington D.C. area, Austin, Texas, California, New York City, or in Denver, Colorado. So that's my spiel. You're welcome to look around this site and learn more about me. If you'd like to chat about a potential position, please feel free to reach out."))), (0, _preact.h)("div", {
        class: "story-item"
      }, (0, _preact.h)("img", {
        src: _amalfi_boat.default,
        alt: "Lake Maggiore"
      })));
    }
  }]);
  return Home;
}(_preact.Component);
var _default = exports.default = Home;
},{"preact":"node_modules/preact/dist/preact.module.js","./home_styles.css":"src/home_styles.css","../images/hawaii_trees.jpg":"images/hawaii_trees.jpg","../images/maggiore.jpg":"images/maggiore.jpg","../images/amalfi_boat.jpg":"images/amalfi_boat.jpg","../images/geis.jpg":"images/geis.jpg"}],"src/about_styles.css":[function(require,module,exports) {
var reloadCSS = require('_css_loader');
module.hot.dispose(reloadCSS);
module.hot.accept(reloadCSS);
},{"_css_loader":"node_modules/parcel-bundler/src/builtins/css-loader.js"}],"images/hotel_at_lake.jpg":[function(require,module,exports) {
module.exports = "/hotel_at_lake.21bc3b0f.jpg";
},{}],"images/me.jpg":[function(require,module,exports) {
module.exports = "/me.31ff53e3.jpg";
},{}],"images/jpw_headshot_blue.jpg":[function(require,module,exports) {
module.exports = "/jpw_headshot_blue.030324cf.jpg";
},{}],"src/About.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _preact = require("preact");
require("./about_styles.css");
require("./home_styles.css");
var _hotel_at_lake = _interopRequireDefault(require("../images/hotel_at_lake.jpg"));
var _me = _interopRequireDefault(require("../images/me.jpg"));
var _jpw_headshot_blue = _interopRequireDefault(require("../images/jpw_headshot_blue.jpg"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }
function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }
function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }
function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }
function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }
function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
var About = /*#__PURE__*/function (_Component) {
  _inherits(About, _Component);
  var _super = _createSuper(About);
  function About() {
    var _this;
    _classCallCheck(this, About);
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }
    _this = _super.call.apply(_super, [this].concat(args));
    _defineProperty(_assertThisInitialized(_this), "handleScroll", function () {
      var newTextElements = Array.from(document.querySelectorAll(".story-text"));
      var windowHeight = window.innerHeight;
      newTextElements.forEach(function (el) {
        var rect = el.getBoundingClientRect();
        var rectCenter = rect.top + rect.height / 2; /* center Y-coordinate of the element in the viewport */

        var newOpacity = 0;
        var newSize = 1.5; /* font size for smaller screens */

        // larger screens
        if (window.innerWidth > 961) {
          newOpacity = Math.max(Math.min(2 * (windowHeight - rectCenter) / windowHeight, 1), 0);
          newSize = 3 * newOpacity; /* so the size will range from 0 to 3 */
        }
        // smaller screens
        else {
          newOpacity = Math.max(Math.min(2 * rectCenter / windowHeight, 1), 0);
          newSize += newOpacity / 2; /* so the size will range from 1.5 to 3 */
        }

        el.style.opacity = newOpacity;
        el.style.fontSize = "".concat(newSize, "em");
      });
    });
    return _this;
  }
  _createClass(About, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      window.addEventListener("scroll", this.handleScroll);
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      window.removeEventListener("scroll", this.handleScroll);
    }
  }, {
    key: "render",
    value: function render() {
      return (0, _preact.h)("div", {
        class: "about"
      }, (0, _preact.h)("div", {
        class: "story-container"
      }, (0, _preact.h)("div", {
        class: "story-item"
      }, (0, _preact.h)("img", {
        src: _hotel_at_lake.default,
        alt: "Lake Maggiore, from the hotel"
      }), (0, _preact.h)("h2", {
        class: "story-text"
      }, (0, _preact.h)("p", null, "Answering the classic question: \"so tell me a little about yourself\"... This page will tell you more about me, my goals, and why I made this website.")))), (0, _preact.h)("div", {
        class: "about-section"
      }, (0, _preact.h)("div", {
        class: "quick-look-section"
      }, (0, _preact.h)("div", {
        class: "quick-look-bullets"
      }, (0, _preact.h)("h3", {
        class: "quicklook-title"
      }, (0, _preact.h)("u", null, "Celina Ryan")), (0, _preact.h)("h3", {
        class: "quicklook-title"
      }, "Education: University of Notre Dame"), (0, _preact.h)("h3", {
        class: "quicklook-title"
      }, "Major: Computer Science in the College of Engineering"), (0, _preact.h)("h3", {
        class: "quicklook-title"
      }, "Minor: Engineering Corporate Practice"), (0, _preact.h)("h3", {
        class: "quicklook-title"
      }, "Expected Graduation: May 2024"), (0, _preact.h)("div", {
        class: "centered-frame"
      })), (0, _preact.h)("figure", {
        class: "frame-image"
      }, (0, _preact.h)("img", {
        src: _jpw_headshot_blue.default,
        alt: "my headshot"
      }))), (0, _preact.h)("div", {
        class: "about-me-section"
      }, (0, _preact.h)("h2", {
        class: "about-header"
      }, "About Me"), (0, _preact.h)("p", null, "If I had to describe myself in one word, it\u2019d probably be hyperactive. I live a fairly active lifestyle and love to learn. I enjoy just about any form of exercise: weight-lifting, yoga, running, swimming, and hiking. I like to read, too. I read a couple books at a time, just to keep myself in a constant rotation of learning and appreciating separate topics. I\u2019m also learning the guitar and the bass guitar. I\u2019m an avid dog lover; I have four dogs back home in Virginia. I\u2019m a big fan of the great outdoors, cooking, and coffee shops. So that\u2019s what I keep myself busy with when I\u2019m not busy with school or work!")), (0, _preact.h)("div", {
        class: "about-site-section"
      }, (0, _preact.h)("h2", {
        class: "about-header"
      }, "About this Website"), (0, _preact.h)("p", null, "It\u2019s been a goal of mine to make a personal website for a while now. Resumes nowadays are fairly cookie-cutter. I wanted this website to be a showcase of all of my skills, past projects, and jobs. I also wanted to show potential employers a bit more of my personality as it\u2019s hard to come across on a simple one page resume."), (0, _preact.h)("br", null), (0, _preact.h)("p", null, "This website was made with a JavaScript library called Preact. This semester (Fall 2023) I'm taking Modern Web Development, and I took advantage of new content from this class and some extra office hours with my teacher to make the website you see now. This past summer, I found that I really like iOS Development, and this past semester I found that I really like Web Development, too. For this website I used Preact as opposed to React because I liked how Preact is a bit closer to HTML-style code which I'm more familiar with. After working at Apple this past summer, I found myself excited to learn more about their web development process. One of my roommates this summer was working on one of the apple.com teams and I was always curious about it. If you look at the ", (0, _preact.h)("a", {
        href: "https://www.apple.com/airpods-pro/"
      }, "Apple AirPods Pro Page"), " you'll something that truly excited me about Apple -- not only do they make great technology products, they utilize their mastery in technology (in this case, their mastery of web development) to showcase their products. The scrolling images along with the expanding text on this website are inspired by what I've been intrigued by on the Apple website."), (0, _preact.h)("br", null), (0, _preact.h)("p", null, "Fun side note-- all of the photos on this website are taken by me\u2014either taken on my phone or taken on a little digital camera that I bring around everywhere. I wanted this website to be easy to navigate, to have aesthetically pleasing scrolling animations, and to be an accurate reflection of myself.", " ")), (0, _preact.h)("div", {
        class: "about-career-section"
      }, (0, _preact.h)("h2", {
        class: "about-header"
      }, "About my Career"), (0, _preact.h)("p", null, "I\u2019ve interned as a Data Scientist at CACI and as a Software Developer at Apple. Of these two disciplines, I found I really enjoy software development. I had a great mentor and team at Apple that really helped me dig into the realm of Software Engineering and iOS Development. I really love problem-solving which is why I think I want to pursue software development/engineering for a full-time position.", (0, _preact.h)("br", null)), (0, _preact.h)("p", null, (0, _preact.h)("br", null), "I graduate May 2024 and hope to start a full-time position by September 2024. I\u2019m a US citizen so I don\u2019t require sponsorship, and I\u2019m willing to relocate. I\u2019m not really picky where I end up, but I do have some preferences: Washington, D.C. area, Austin, Texas, California, New York City, or Denver, Colorado. If you think I\u2019d be a good fit for your company, head on over to the ", (0, _preact.h)("a", {
        href: "/contact"
      }, "Contact Me"), " section and reach out."))), (0, _preact.h)("div", {
        class: "story-item"
      }, (0, _preact.h)("img", {
        src: _me.default,
        alt: "me in hawaii"
      })));
    }
  }]);
  return About;
}(_preact.Component);
var _default = exports.default = About;
},{"preact":"node_modules/preact/dist/preact.module.js","./about_styles.css":"src/about_styles.css","./home_styles.css":"src/home_styles.css","../images/hotel_at_lake.jpg":"images/hotel_at_lake.jpg","../images/me.jpg":"images/me.jpg","../images/jpw_headshot_blue.jpg":"images/jpw_headshot_blue.jpg"}],"src/skillsData.json":[function(require,module,exports) {
module.exports = [{
  "skillCategory": "Coding Languages",
  "skillsList": ["Python", "C", "C++", "Java", "MATLAB", "SQL", "JavaScript, Preact, and React", "Swift", "Objective-C", "HTML and CSS"]
}, {
  "skillCategory": "Assembly Languages",
  "skillsList": ["Verilog", "albacore", "ARM"]
}, {
  "skillCategory": "Industry Specific Software",
  "skillsList": ["UiPath (Robotic Process Automation)", "AWS", "Tableau", "PowerBI", "XCode"]
}, {
  "skillCategory": "Industry Understanding",
  "skillsList": ["Natural Language Processing", "Data Science", "Artificial Intelligence", "Machine Learning", "Data Lakes", "Computer Vision", "3D Modeling", "graphics", "iOS Development", "Distributed Systems", "Networks", "Web Development", "Compilers"]
}];
},{}],"src/Skill.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = Skill;
var _preact = require("preact");
function Skill(_ref) {
  var skill = _ref.skill;
  return (0, _preact.h)("div", {
    className: "skill"
  }, (0, _preact.h)("h4", {
    className: "skill-category"
  }, skill.skillCategory), (0, _preact.h)("ul", {
    className: "skills-list"
  }, skill.skillsList.map(function (desc) {
    return (0, _preact.h)("li", null, desc);
  })));
}
},{"preact":"node_modules/preact/dist/preact.module.js"}],"src/animation.css":[function(require,module,exports) {
var reloadCSS = require('_css_loader');
module.hot.dispose(reloadCSS);
module.hot.accept(reloadCSS);
},{"_css_loader":"node_modules/parcel-bundler/src/builtins/css-loader.js"}],"images/walking_on_hill.jpg":[function(require,module,exports) {
module.exports = "/walking_on_hill.3747aeda.jpg";
},{}],"images/boat_and_rock.jpg":[function(require,module,exports) {
module.exports = "/boat_and_rock.4dbcde83.jpg";
},{}],"src/Skills.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _preact = require("preact");
require("./home_styles.css");
var _skillsData = _interopRequireDefault(require("./skillsData.json"));
var _Skill = _interopRequireDefault(require("./Skill"));
require("./animation.css");
var _walking_on_hill = _interopRequireDefault(require("../images/walking_on_hill.jpg"));
var _boat_and_rock = _interopRequireDefault(require("../images/boat_and_rock.jpg"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }
function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }
function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }
function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }
function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }
function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
var Skills = /*#__PURE__*/function (_Component) {
  _inherits(Skills, _Component);
  var _super = _createSuper(Skills);
  function Skills() {
    var _this;
    _classCallCheck(this, Skills);
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }
    _this = _super.call.apply(_super, [this].concat(args));
    _defineProperty(_assertThisInitialized(_this), "fadeIn", function () {
      var elements = Array.from(document.querySelectorAll(".project, .job-experience, .activity"));
      elements.forEach(function (el) {
        var rect = el.getBoundingClientRect();
        if (rect.top >= 0 && rect.bottom <= window.innerHeight) {
          el.classList.add("fade-in");
        }
      });
    });
    _defineProperty(_assertThisInitialized(_this), "handleScroll", function () {
      var newTextElements = Array.from(document.querySelectorAll(".story-text"));
      var windowHeight = window.innerHeight;
      newTextElements.forEach(function (el) {
        var rect = el.getBoundingClientRect();
        var rectCenter = rect.top + rect.height / 2; /* center Y-coordinate of the element in the viewport */

        var newOpacity = 0;
        var newSize = 1.5; /* font size for smaller screens */

        // larger screens
        if (window.innerWidth > 961) {
          newOpacity = Math.max(Math.min(2 * (windowHeight - rectCenter) / windowHeight, 1), 0);
          newSize = 3 * newOpacity; /* so the size will range from 0 to 3 */
        }
        // smaller screens
        else {
          newOpacity = Math.max(Math.min(2 * rectCenter / windowHeight, 1), 0);
          newSize += newOpacity / 2; /* so the size will range from 1.5 to 3 */
        }

        el.style.opacity = newOpacity;
        el.style.fontSize = "".concat(newSize, "em");
      });
    });
    return _this;
  }
  _createClass(Skills, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      window.addEventListener("scroll", this.handleScroll);
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      window.removeEventListener("scroll", this.handleScroll);
    }
  }, {
    key: "render",
    value: function render() {
      return (0, _preact.h)("div", {
        class: "exp"
      }, (0, _preact.h)("div", {
        class: "story-container"
      }, (0, _preact.h)("div", {
        class: "story-item"
      }, (0, _preact.h)("img", {
        src: _boat_and_rock.default,
        alt: "boat"
      }), (0, _preact.h)("h2", {
        class: "story-text"
      }, (0, _preact.h)("p", null, "So what do I bring to the table? If it's Thanksgiving, I'm bringing a mean mac and cheese, but more likely than not it's not Thanksgiving. Scroll down to see my technical skills.")))), (0, _preact.h)("div", {
        class: "skills-section"
      }, _skillsData.default.map(function (skill, index) {
        return (0, _preact.h)(_Skill.default, {
          skill: skill,
          key: index
        });
      })), (0, _preact.h)("div", {
        class: "story-container"
      }, (0, _preact.h)("div", {
        class: "story-item"
      }, (0, _preact.h)("img", {
        src: _walking_on_hill.default,
        alt: "me walking around"
      }))));
    }
  }]);
  return Skills;
}(_preact.Component);
var _default = exports.default = Skills;
},{"preact":"node_modules/preact/dist/preact.module.js","./home_styles.css":"src/home_styles.css","./skillsData.json":"src/skillsData.json","./Skill":"src/Skill.js","./animation.css":"src/animation.css","../images/walking_on_hill.jpg":"images/walking_on_hill.jpg","../images/boat_and_rock.jpg":"images/boat_and_rock.jpg"}],"src/exp_styles.css":[function(require,module,exports) {
var reloadCSS = require('_css_loader');
module.hot.dispose(reloadCSS);
module.hot.accept(reloadCSS);
},{"_css_loader":"node_modules/parcel-bundler/src/builtins/css-loader.js"}],"src/jobData.json":[function(require,module,exports) {
module.exports = [{
  "companyName": "Apple",
  "jobTitle": "Software Development Intern on Field Design Engineering Team",
  "jobDates": "May 2023 – August 2023",
  "jobLocation": "Austin, Texas",
  "jobDescription": ["Developed new features within Apple’s internal apps with Xcode using Swift, SwiftUI, and Objective-C on the FDE Tools, Automation, and Robotics Team.", "Added feature connected another internal Apple app to our team’s internal app. This streamlined the processes already in place which thus enhances the system validation process for devices tested by the FDE team.", "Developed and integrated internal iOS frameworks for reusability of the code. The new feature is used by Apple engineers across worldwide locations for their validation efforts."]
}, {
  "companyName": "University of Notre Dame",
  "jobTitle": "Teaching Assistant for Fundamentals of Computing",
  "jobDates": "August 2022 – Present",
  "jobLocation": "Notre Dame, Indiana",
  "jobDescription": ["Oversaw labs and assisted office hours for a required class for Notre Dame CS majors; students learn C and Linux."]
}, {
  "companyName": "CACI International",
  "jobTitle": "Data Science Intern on Digital Transformations Team",
  "jobDates": "May 2022 – August 2022",
  "jobLocation": "Arlington, Virginia",
  "jobDescription": ["Developed solutions within CACI’s new Data Lake in AWS. Used my ML and NLP knowledge within Python to develop a comprehensive solution for the Business Development Team.", "Enhanced data-read in with Computer Vision using Python libraries."]
}, {
  "companyName": "CACI International",
  "jobTitle": "Data Science Intern on HR Team",
  "jobDates": "May 2021 – August 2021",
  "jobLocation": "Arlington, Virginia",
  "jobDescription": ["Developed a large-scale web scraping program within UiPath. Orchestrated web scraping initially with Python."]
}];
},{}],"src/Job.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = Job;
var _preact = require("preact");
function Job(_ref) {
  var job = _ref.job;
  return (0, _preact.h)("div", {
    className: "job-experience"
  }, (0, _preact.h)("div", {
    className: "title-date-container"
  }, (0, _preact.h)("h3", {
    className: "company-title"
  }, job.companyName), (0, _preact.h)("div", {
    className: "date-location-container"
  }, (0, _preact.h)("p", {
    className: "job-date"
  }, job.jobDates), (0, _preact.h)("p", {
    className: "job-location"
  }, job.jobLocation))), (0, _preact.h)("h4", {
    className: "job-heading"
  }, job.jobTitle), (0, _preact.h)("ul", {
    className: "job-description"
  }, job.jobDescription.map(function (desc) {
    return (0, _preact.h)("li", null, desc);
  })));
}
},{"preact":"node_modules/preact/dist/preact.module.js"}],"src/Project.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = Project;
var _preact = require("preact");
function Project(_ref) {
  var project = _ref.project;
  return (0, _preact.h)("div", {
    className: "project"
  }, (0, _preact.h)("div", {
    className: "title-date-container"
  }, (0, _preact.h)("h3", {
    className: "project-name"
  }, project.projectName), (0, _preact.h)("div", {
    className: "date-location-container"
  }, (0, _preact.h)("p", {
    className: "project-date"
  }, project.projectDates), (0, _preact.h)("p", {
    className: "project-location"
  }, project.projectLocation))), (0, _preact.h)("h4", {
    className: "project-heading"
  }, project.projectTitle), (0, _preact.h)("ul", {
    className: "project-description"
  }, project.projectDescription.map(function (desc) {
    return (0, _preact.h)("li", null, desc);
  })));
}
},{"preact":"node_modules/preact/dist/preact.module.js"}],"src/projectData.json":[function(require,module,exports) {
module.exports = [{
  "projectName": "Distributed Systems Final Project",
  "institutionName": "University of Notre Dame",
  "projectLocation": "Notre Dame, Indiana",
  "projectDates": "March 2023 – May 2023",
  "projectTitle": "SpoonNet: An Interactive Multiplayer Card Game",
  "projectDescription": ["Recreated the Spoons Card game with asynchronous client-server communication. Invoked remote procedure call using a custom client and server within Python.", "Worked with an event-driven server to ensure consistency and low latency of communication while using threading."]
}, {
  "projectName": "Data Science Final Project",
  "institutionName": "University of Notre Dame",
  "projectLocation": "Notre Dame, Indiana",
  "projectDates": "September 2022 – December 2022",
  "projectTitle": "Predicting the Number of Starbucks Based on Geo-Economic Data",
  "projectDescription": ["Explored the relationship between geo-economic data and the number of Starbucks stores in a given zip code by training linear and non-linear models within Python. The data used had 13608 rows and 13 columns.", "Analyzed data using Naive-Bayes Classifier, and different forms of regression: Lasso, Support Vector, and K-Nearest Neighbors."]
}, {
  "projectName": "High School Senior Project",
  "institutionName": "The Potomac School",
  "projectLocation": "McLean, Virginia",
  "projectDates": "September 2022 – December 2022",
  "projectTitle": "Learning Swift and Creating an App Interface",
  "projectDescription": ["Produced an interactive app interface after learning Swift. The app helps students take more organized notes in class by sorting photos from homework and classwork."]
}, {
  "projectName": "Data Structures Project",
  "institutionName": "University of Notre Dame",
  "projectLocation": "Notre Dame, Indiana",
  "projectDates": "March 2022 – May 2022",
  "projectTitle": "Predictive Recommendations based on Grocery Data",
  "projectDescription": ["Used mock grocery store loyalty card data to predict grocery coupons for customers based on their previous purchases.", "Added user input feature and was able to categorize the new data to give more recommended coupons to the user."]
}, {
  "projectName": "Intro to Entrepreneurship Final Project",
  "institutionName": "University of Notre Dame",
  "projectLocation": "Notre Dame, Indiana",
  "projectDates": "September 2021 – December 2021",
  "projectTitle": "Level Measuring Set",
  "projectDescription": ["Prototyped and developed a business plan with my group for our idea: a measuring cup set for those with upper limb reductions.", "The final product was a sleek, stainless-steel measuring cup set that can be used easily with one hand, as the current products on the market look as if they belong in a hospital, not in a kitchen."]
}];
},{}],"src/moreExpData.json":[function(require,module,exports) {
module.exports = [{
  "projectName": "Design Automation Conference",
  "institutionName": "University of Notre Dame",
  "projectLocation": "San Francisco, California",
  "projectDates": "July 2022",
  "projectTitle": "Young Fellow at DAC '22",
  "projectDescription": ["Granted scholarship from Notre Dame and the Design Automation Conference Young Fellows board to travel to San Francisco, CA to participate in the 59th annual conference. (ML, AI, Computer Vision, and SW/HW Codesign)."]
}, {
  "projectName": "CS4Good",
  "institutionName": "University of Notre Dame",
  "projectLocation": "Notre Dame, Indiana",
  "projectDates": "January 2022 - December 2023",
  "projectTitle": "Team Member",
  "projectDescription": ["Created activities and informational guides to help members of an elderly home in South Bend become more proficient in technology and software."]
}];
},{}],"src/button_styles.css":[function(require,module,exports) {
var reloadCSS = require('_css_loader');
module.hot.dispose(reloadCSS);
module.hot.accept(reloadCSS);
},{"_css_loader":"node_modules/parcel-bundler/src/builtins/css-loader.js"}],"images/sf_overlook.jpg":[function(require,module,exports) {
module.exports = "/sf_overlook.106948cc.jpg";
},{}],"images/at_apple.jpg":[function(require,module,exports) {
module.exports = "/at_apple.6bb7479e.jpg";
},{}],"src/Exp.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _preact = require("preact");
require("./home_styles.css");
require("./exp_styles.css");
var _jobData = _interopRequireDefault(require("./jobData.json"));
var _Job = _interopRequireDefault(require("./Job"));
var _Project = _interopRequireDefault(require("./Project"));
var _projectData = _interopRequireDefault(require("./projectData.json"));
var _moreExpData = _interopRequireDefault(require("./moreExpData.json"));
require("./animation.css");
require("./button_styles.css");
var _sf_overlook = _interopRequireDefault(require("../images/sf_overlook.jpg"));
var _at_apple = _interopRequireDefault(require("../images/at_apple.jpg"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }
function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }
function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }
function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }
function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }
function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
var Exp = /*#__PURE__*/function (_Component) {
  _inherits(Exp, _Component);
  var _super = _createSuper(Exp);
  function Exp() {
    var _this;
    _classCallCheck(this, Exp);
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }
    _this = _super.call.apply(_super, [this].concat(args));
    _defineProperty(_assertThisInitialized(_this), "fadeIn", function () {
      var elements = Array.from(document.querySelectorAll(".project, .job-experience, .activity"));
      elements.forEach(function (el) {
        var rect = el.getBoundingClientRect();
        if (rect.top >= 0 && rect.bottom <= window.innerHeight) {
          el.classList.add("fade-in");
        }
      });
    });
    _defineProperty(_assertThisInitialized(_this), "scrollToElement", function (elementId) {
      var element = document.getElementById(elementId);
      element.scrollIntoView({
        behavior: "smooth"
      });
    });
    _defineProperty(_assertThisInitialized(_this), "handleScroll", function () {
      var newTextElements = Array.from(document.querySelectorAll(".story-text"));
      var windowHeight = window.innerHeight;
      newTextElements.forEach(function (el) {
        var rect = el.getBoundingClientRect();
        var rectCenter = rect.top + rect.height / 2; /* center Y-coordinate of the element in the viewport */

        var newOpacity = 0;
        var newSize = 1.5; /* font size for smaller screens */

        // larger screens
        if (window.innerWidth > 961) {
          newOpacity = Math.max(Math.min(2 * (windowHeight - rectCenter) / windowHeight, 1), 0);
          newSize = 3 * newOpacity; /* so the size will range from 0 to 3 */
        }
        // smaller screens
        else {
          newOpacity = Math.max(Math.min(2 * rectCenter / windowHeight, 1), 0);
          newSize += newOpacity / 2; /* so the size will range from 1.5 to 3 */
        }

        el.style.opacity = newOpacity;
        el.style.fontSize = "".concat(newSize, "em");
      });
    });
    return _this;
  }
  _createClass(Exp, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      window.addEventListener("scroll", this.handleScroll);
      // Add event listener for scroll
      window.addEventListener("scroll", this.fadeIn);
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      window.removeEventListener("scroll", this.handleScroll);
      // Add event listener for scroll
      window.removeEventListener("scroll", this.fadeIn);
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;
      return (0, _preact.h)("div", {
        class: "exp"
      }, (0, _preact.h)("div", {
        class: "story-container"
      }, (0, _preact.h)("div", {
        class: "story-item"
      }, (0, _preact.h)("img", {
        src: _sf_overlook.default,
        alt: "San Francisco"
      }), (0, _preact.h)("h2", {
        class: "story-text"
      }, (0, _preact.h)("p", null, "Here you will find all of my academic and extracurricular endeavors. Enjoy!"))), (0, _preact.h)("div", {
        class: "navbar"
      }, (0, _preact.h)("button", {
        className: "button-style",
        onClick: function onClick() {
          return _this2.scrollToElement("experience-section");
        }
      }, "work experience"), (0, _preact.h)("button", {
        className: "button-style",
        onClick: function onClick() {
          return _this2.scrollToElement("projects-section");
        }
      }, "related projects"), (0, _preact.h)("button", {
        className: "button-style",
        onClick: function onClick() {
          return _this2.scrollToElement("extracurricular-section");
        }
      }, "additional experience"))), (0, _preact.h)("div", {
        className: "resume-section"
      }, (0, _preact.h)("div", {
        class: "experience-section",
        id: "experience-section"
      }, (0, _preact.h)("h2", null, "Work Experience"), _jobData.default.map(function (job, index) {
        return (0, _preact.h)(_Job.default, {
          job: job,
          key: index
        });
      })), (0, _preact.h)("div", {
        class: "projects-section",
        id: "projects-section"
      }, (0, _preact.h)("h2", null, "Related Projects"), _projectData.default.map(function (project, index) {
        return (0, _preact.h)(_Project.default, {
          project: project,
          key: index
        });
      })), (0, _preact.h)("div", {
        class: "extracurricular-section",
        id: "extracurricular-section"
      }, (0, _preact.h)("h2", null, "Additional Experience"), _moreExpData.default.map(function (project, index) {
        return (0, _preact.h)(_Project.default, {
          project: project,
          key: index
        });
      }))), (0, _preact.h)("div", {
        class: "story-container"
      }, (0, _preact.h)("div", {
        class: "story-item"
      }, (0, _preact.h)("img", {
        src: _at_apple.default,
        alt: "Lake Maggiore"
      }))));
    }
  }]);
  return Exp;
}(_preact.Component);
var _default = exports.default = Exp;
},{"preact":"node_modules/preact/dist/preact.module.js","./home_styles.css":"src/home_styles.css","./exp_styles.css":"src/exp_styles.css","./jobData.json":"src/jobData.json","./Job":"src/Job.js","./Project":"src/Project.js","./projectData.json":"src/projectData.json","./moreExpData.json":"src/moreExpData.json","./animation.css":"src/animation.css","./button_styles.css":"src/button_styles.css","../images/sf_overlook.jpg":"images/sf_overlook.jpg","../images/at_apple.jpg":"images/at_apple.jpg"}],"images/peacock.jpg":[function(require,module,exports) {
module.exports = "/peacock.f9ebe1e2.jpg";
},{}],"images/sorrento.jpg":[function(require,module,exports) {
module.exports = "/sorrento.a4aa4271.jpg";
},{}],"src/Contact.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _preact = require("preact");
require("./home_styles.css");
require("./about_styles.css");
var _peacock = _interopRequireDefault(require("../images/peacock.jpg"));
var _jpw_headshot_blue = _interopRequireDefault(require("../images/jpw_headshot_blue.jpg"));
var _sorrento = _interopRequireDefault(require("../images/sorrento.jpg"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }
function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }
function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }
function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }
function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }
function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
var Contact = /*#__PURE__*/function (_Component) {
  _inherits(Contact, _Component);
  var _super = _createSuper(Contact);
  function Contact() {
    var _this;
    _classCallCheck(this, Contact);
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }
    _this = _super.call.apply(_super, [this].concat(args));
    _defineProperty(_assertThisInitialized(_this), "handleScroll", function () {
      var newTextElements = Array.from(document.querySelectorAll(".story-text"));
      var windowHeight = window.innerHeight;
      newTextElements.forEach(function (el) {
        var rect = el.getBoundingClientRect();
        var rectCenter = rect.top + rect.height / 2; /* center Y-coordinate of the element in the viewport */

        var newOpacity = 0;
        var newSize = 1.5; /* font size for smaller screens */

        // larger screens
        if (window.innerWidth > 961) {
          newOpacity = Math.max(Math.min(2 * (windowHeight - rectCenter) / windowHeight, 1), 0);
          newSize = 3 * newOpacity; /* so the size will range from 0 to 3 */
        }
        // smaller screens
        else {
          newOpacity = Math.max(Math.min(2 * rectCenter / windowHeight, 1), 0);
          newSize += newOpacity / 2; /* so the size will range from 1.5 to 3 */
        }

        el.style.opacity = newOpacity;
        el.style.fontSize = "".concat(newSize, "em");
      });
    });
    return _this;
  }
  _createClass(Contact, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      window.addEventListener("scroll", this.handleScroll);
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      window.removeEventListener("scroll", this.handleScroll);
    }
  }, {
    key: "render",
    value: function render() {
      return (0, _preact.h)("div", {
        class: "contact"
      }, (0, _preact.h)("div", {
        class: "story-container"
      }, (0, _preact.h)("div", {
        class: "story-item"
      }, (0, _preact.h)("img", {
        src: _peacock.default,
        alt: "Lake Maggiore, peacock"
      }), (0, _preact.h)("h2", {
        class: "story-text"
      }, (0, _preact.h)("p", null, "Please reach out to me about any job opportunities you think I'd be a good fit for. You'll find my contact information below."))), (0, _preact.h)("div", {
        class: "about-section"
      }, (0, _preact.h)("div", {
        class: "quick-look-section"
      }, (0, _preact.h)("div", {
        class: "quick-look-bullets"
      }, (0, _preact.h)("h3", {
        class: "quicklook-title"
      }, (0, _preact.h)("u", null, "Celina Ryan")), (0, _preact.h)("h3", {
        class: "quicklook-title"
      }, "Contact me via ", " ", (0, _preact.h)("a", {
        href: "mailto:cryan27@nd.edu"
      }, "cryan27@nd.edu")), (0, _preact.h)("h3", {
        class: "quicklook-title"
      }, "Check out my", " ", (0, _preact.h)("a", {
        href: "https://www.linkedin.com/in/celina-ryan-870641168/"
      }, "LinkedIn")), (0, _preact.h)("div", {
        class: "centered-frame"
      })), (0, _preact.h)("figure", {
        class: "frame-image"
      }, (0, _preact.h)("img", {
        src: _jpw_headshot_blue.default,
        alt: "photo of me"
      })))), (0, _preact.h)("div", {
        class: "story-item"
      }, (0, _preact.h)("img", {
        src: _sorrento.default,
        alt: "sorrento sunset"
      }))));
    }
  }]);
  return Contact;
}(_preact.Component);
var _default = exports.default = Contact;
},{"preact":"node_modules/preact/dist/preact.module.js","./home_styles.css":"src/home_styles.css","./about_styles.css":"src/about_styles.css","../images/peacock.jpg":"images/peacock.jpg","../images/jpw_headshot_blue.jpg":"images/jpw_headshot_blue.jpg","../images/sorrento.jpg":"images/sorrento.jpg"}],"src/Footer.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _preact = require("preact");
var _cr_logo_up = _interopRequireDefault(require("../images/cr_logo_up.png"));
require("./navbar_styles.css");
require("./button_styles.css");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }
function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }
function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }
function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }
function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }
function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
var Footer = /*#__PURE__*/function (_Component) {
  _inherits(Footer, _Component);
  var _super = _createSuper(Footer);
  function Footer() {
    var _this;
    _classCallCheck(this, Footer);
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }
    _this = _super.call.apply(_super, [this].concat(args));
    // Handler for 'Scroll to Top' button
    _defineProperty(_assertThisInitialized(_this), "scrollToTop", function () {
      window.scrollTo({
        top: 0,
        left: 0,
        behavior: "smooth"
      });
    });
    return _this;
  }
  _createClass(Footer, [{
    key: "render",
    value: function render() {
      return (0, _preact.h)("footer", null, (0, _preact.h)("div", {
        className: "navbar-container"
      }, (0, _preact.h)("div", {
        class: "logo-cont"
      }, (0, _preact.h)("a", {
        href: "/",
        class: "logo"
      }, (0, _preact.h)("img", {
        src: _cr_logo_up.default,
        alt: "celina logo"
      }))), (0, _preact.h)("div", {
        className: "frame"
      }, (0, _preact.h)("button", {
        className: "button-style",
        onClick: this.scrollToTop
      }, "scroll to top"))));
    }
  }]);
  return Footer;
}(_preact.Component);
var _default = exports.default = Footer;
},{"preact":"node_modules/preact/dist/preact.module.js","../images/cr_logo_up.png":"images/cr_logo_up.png","./navbar_styles.css":"src/navbar_styles.css","./button_styles.css":"src/button_styles.css"}],"src/App.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _preact = require("preact");
var _preactRouter = _interopRequireDefault(require("preact-router"));
var _NavBar = _interopRequireDefault(require("./NavBar"));
var _Home = _interopRequireDefault(require("./Home"));
var _About = _interopRequireDefault(require("./About"));
var _Skills = _interopRequireDefault(require("./Skills"));
var _Exp = _interopRequireDefault(require("./Exp"));
var _Contact = _interopRequireDefault(require("./Contact"));
var _Footer = _interopRequireDefault(require("./Footer"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
var App = function App() {
  return (0, _preact.h)("div", {
    id: "app"
  }, (0, _preact.h)(_NavBar.default, null), (0, _preact.h)(_preactRouter.default, null, (0, _preact.h)(_Home.default, {
    default: true
  }), (0, _preact.h)(_Exp.default, {
    path: "/exp"
  }), (0, _preact.h)(_Skills.default, {
    path: "/skills"
  }), (0, _preact.h)(_About.default, {
    path: "/about"
  }), (0, _preact.h)(_Contact.default, {
    path: "/contact"
  })), (0, _preact.h)(_Footer.default, null));
};
var _default = exports.default = App;
},{"preact":"node_modules/preact/dist/preact.module.js","preact-router":"node_modules/preact-router/dist/preact-router.es.js","./NavBar":"src/NavBar.js","./Home":"src/Home.js","./About":"src/About.js","./Skills":"src/Skills.js","./Exp":"src/Exp.js","./Contact":"src/Contact.js","./Footer":"src/Footer.js"}],"src/index.js":[function(require,module,exports) {
"use strict";

var _preact = require("preact");
var _App = _interopRequireDefault(require("./App"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
(0, _preact.render)((0, _preact.h)(_App.default, null), document.body);
},{"preact":"node_modules/preact/dist/preact.module.js","./App":"src/App.js"}],"node_modules/parcel-bundler/src/builtins/hmr-runtime.js":[function(require,module,exports) {
var global = arguments[3];
var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;
function Module(moduleName) {
  OldModule.call(this, moduleName);
  this.hot = {
    data: module.bundle.hotData,
    _acceptCallbacks: [],
    _disposeCallbacks: [],
    accept: function (fn) {
      this._acceptCallbacks.push(fn || function () {});
    },
    dispose: function (fn) {
      this._disposeCallbacks.push(fn);
    }
  };
  module.bundle.hotData = null;
}
module.bundle.Module = Module;
var checkedAssets, assetsToAccept;
var parent = module.bundle.parent;
if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
  var hostname = "" || location.hostname;
  var protocol = location.protocol === 'https:' ? 'wss' : 'ws';
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "62083" + '/');
  ws.onmessage = function (event) {
    checkedAssets = {};
    assetsToAccept = [];
    var data = JSON.parse(event.data);
    if (data.type === 'update') {
      var handled = false;
      data.assets.forEach(function (asset) {
        if (!asset.isNew) {
          var didAccept = hmrAcceptCheck(global.parcelRequire, asset.id);
          if (didAccept) {
            handled = true;
          }
        }
      });

      // Enable HMR for CSS by default.
      handled = handled || data.assets.every(function (asset) {
        return asset.type === 'css' && asset.generated.js;
      });
      if (handled) {
        console.clear();
        data.assets.forEach(function (asset) {
          hmrApply(global.parcelRequire, asset);
        });
        assetsToAccept.forEach(function (v) {
          hmrAcceptRun(v[0], v[1]);
        });
      } else if (location.reload) {
        // `location` global exists in a web worker context but lacks `.reload()` function.
        location.reload();
      }
    }
    if (data.type === 'reload') {
      ws.close();
      ws.onclose = function () {
        location.reload();
      };
    }
    if (data.type === 'error-resolved') {
      console.log('[parcel] ✨ Error resolved');
      removeErrorOverlay();
    }
    if (data.type === 'error') {
      console.error('[parcel] 🚨  ' + data.error.message + '\n' + data.error.stack);
      removeErrorOverlay();
      var overlay = createErrorOverlay(data);
      document.body.appendChild(overlay);
    }
  };
}
function removeErrorOverlay() {
  var overlay = document.getElementById(OVERLAY_ID);
  if (overlay) {
    overlay.remove();
  }
}
function createErrorOverlay(data) {
  var overlay = document.createElement('div');
  overlay.id = OVERLAY_ID;

  // html encode message and stack trace
  var message = document.createElement('div');
  var stackTrace = document.createElement('pre');
  message.innerText = data.error.message;
  stackTrace.innerText = data.error.stack;
  overlay.innerHTML = '<div style="background: black; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; opacity: 0.85; font-family: Menlo, Consolas, monospace; z-index: 9999;">' + '<span style="background: red; padding: 2px 4px; border-radius: 2px;">ERROR</span>' + '<span style="top: 2px; margin-left: 5px; position: relative;">🚨</span>' + '<div style="font-size: 18px; font-weight: bold; margin-top: 20px;">' + message.innerHTML + '</div>' + '<pre>' + stackTrace.innerHTML + '</pre>' + '</div>';
  return overlay;
}
function getParents(bundle, id) {
  var modules = bundle.modules;
  if (!modules) {
    return [];
  }
  var parents = [];
  var k, d, dep;
  for (k in modules) {
    for (d in modules[k][1]) {
      dep = modules[k][1][d];
      if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) {
        parents.push(k);
      }
    }
  }
  if (bundle.parent) {
    parents = parents.concat(getParents(bundle.parent, id));
  }
  return parents;
}
function hmrApply(bundle, asset) {
  var modules = bundle.modules;
  if (!modules) {
    return;
  }
  if (modules[asset.id] || !bundle.parent) {
    var fn = new Function('require', 'module', 'exports', asset.generated.js);
    asset.isNew = !modules[asset.id];
    modules[asset.id] = [fn, asset.deps];
  } else if (bundle.parent) {
    hmrApply(bundle.parent, asset);
  }
}
function hmrAcceptCheck(bundle, id) {
  var modules = bundle.modules;
  if (!modules) {
    return;
  }
  if (!modules[id] && bundle.parent) {
    return hmrAcceptCheck(bundle.parent, id);
  }
  if (checkedAssets[id]) {
    return;
  }
  checkedAssets[id] = true;
  var cached = bundle.cache[id];
  assetsToAccept.push([bundle, id]);
  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    return true;
  }
  return getParents(global.parcelRequire, id).some(function (id) {
    return hmrAcceptCheck(global.parcelRequire, id);
  });
}
function hmrAcceptRun(bundle, id) {
  var cached = bundle.cache[id];
  bundle.hotData = {};
  if (cached) {
    cached.hot.data = bundle.hotData;
  }
  if (cached && cached.hot && cached.hot._disposeCallbacks.length) {
    cached.hot._disposeCallbacks.forEach(function (cb) {
      cb(bundle.hotData);
    });
  }
  delete bundle.cache[id];
  bundle(id);
  cached = bundle.cache[id];
  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    cached.hot._acceptCallbacks.forEach(function (cb) {
      cb();
    });
    return true;
  }
}
},{}]},{},["node_modules/parcel-bundler/src/builtins/hmr-runtime.js","src/index.js"], null)
//# sourceMappingURL=/src.a2b27638.js.map