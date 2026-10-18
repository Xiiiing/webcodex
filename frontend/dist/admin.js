var IC = Object.create, Qy = Object.defineProperty, XC = Object.getOwnPropertyDescriptor, QC = Object.getOwnPropertyNames, KC = Object.getPrototypeOf, Ky = Object.prototype.hasOwnProperty, ha = (a, o) => () => (o || (a((o = { exports: {} }).exports, o), a = null), o.exports), ZC = (a, o, i, l) => {
  if (o && typeof o == "object" || typeof o == "function")
    for (var c = QC(o), d = 0, f = c.length, m; d < f; d++)
      m = c[d], !Ky.call(a, m) && m !== i && Qy(a, m, {
        get: ((v) => o[v]).bind(null, m),
        enumerable: !(l = XC(o, m)) || l.enumerable
      });
  return a;
}, Zy = (a, o, i) => (i = a != null ? IC(KC(a)) : {}, ZC(o || !a || !a.__esModule || !Ky.call(a, "default") ? Qy(i, "default", {
  value: a,
  enumerable: !0
}) : i, a)), FC = /* @__PURE__ */ ha(((a) => {
  var o = /* @__PURE__ */ Symbol.for("react.transitional.element"), i = /* @__PURE__ */ Symbol.for("react.portal"), l = /* @__PURE__ */ Symbol.for("react.fragment"), c = /* @__PURE__ */ Symbol.for("react.strict_mode"), d = /* @__PURE__ */ Symbol.for("react.profiler"), f = /* @__PURE__ */ Symbol.for("react.consumer"), m = /* @__PURE__ */ Symbol.for("react.context"), v = /* @__PURE__ */ Symbol.for("react.forward_ref"), y = /* @__PURE__ */ Symbol.for("react.suspense"), x = /* @__PURE__ */ Symbol.for("react.memo"), b = /* @__PURE__ */ Symbol.for("react.lazy"), p = /* @__PURE__ */ Symbol.for("react.activity"), w = /* @__PURE__ */ Symbol.for("react.view_transition"), A = Symbol.iterator;
  function C(M) {
    return M === null || typeof M != "object" ? null : (M = A && M[A] || M["@@iterator"], typeof M == "function" ? M : null);
  }
  var T = {
    isMounted: function() {
      return !1;
    },
    enqueueForceUpdate: function() {
    },
    enqueueReplaceState: function() {
    },
    enqueueSetState: function() {
    }
  }, R = Object.assign, O = {};
  function _(M, K, se) {
    this.props = M, this.context = K, this.refs = O, this.updater = se || T;
  }
  _.prototype.isReactComponent = {}, _.prototype.setState = function(M, K) {
    if (typeof M != "object" && typeof M != "function" && M != null) throw Error("takes an object of state variables to update or a function which returns an object of state variables.");
    this.updater.enqueueSetState(this, M, K, "setState");
  }, _.prototype.forceUpdate = function(M) {
    this.updater.enqueueForceUpdate(this, M, "forceUpdate");
  };
  function j() {
  }
  j.prototype = _.prototype;
  function L(M, K, se) {
    this.props = M, this.context = K, this.refs = O, this.updater = se || T;
  }
  var z = L.prototype = new j();
  z.constructor = L, R(z, _.prototype), z.isPureReactComponent = !0;
  var $ = Array.isArray;
  function k() {
  }
  var Q = {
    H: null,
    A: null,
    T: null,
    S: null
  }, X = Object.prototype.hasOwnProperty;
  function oe(M, K, se) {
    var le = se.ref;
    return {
      $$typeof: o,
      type: M,
      key: K,
      ref: le !== void 0 ? le : null,
      props: se
    };
  }
  function re(M, K) {
    return oe(M.type, K, M.props);
  }
  function ne(M) {
    return typeof M == "object" && M !== null && M.$$typeof === o;
  }
  function F(M) {
    var K = {
      "=": "=0",
      ":": "=2"
    };
    return "$" + M.replace(/[=:]/g, function(se) {
      return K[se];
    });
  }
  var me = /\/+/g;
  function H(M, K) {
    return typeof M == "object" && M !== null && M.key != null ? F("" + M.key) : K.toString(36);
  }
  function I(M) {
    switch (M.status) {
      case "fulfilled":
        return M.value;
      case "rejected":
        throw M.reason;
      default:
        switch (typeof M.status == "string" ? M.then(k, k) : (M.status = "pending", M.then(function(K) {
          M.status === "pending" && (M.status = "fulfilled", M.value = K);
        }, function(K) {
          M.status === "pending" && (M.status = "rejected", M.reason = K);
        })), M.status) {
          case "fulfilled":
            return M.value;
          case "rejected":
            throw M.reason;
        }
    }
    throw M;
  }
  function W(M, K, se, le, he) {
    var ie = typeof M;
    (ie === "undefined" || ie === "boolean") && (M = null);
    var ye = !1;
    if (M === null) ye = !0;
    else switch (ie) {
      case "bigint":
      case "string":
      case "number":
        ye = !0;
        break;
      case "object":
        switch (M.$$typeof) {
          case o:
          case i:
            ye = !0;
            break;
          case b:
            return ye = M._init, W(ye(M._payload), K, se, le, he);
        }
    }
    if (ye) return he = he(M), ye = le === "" ? "." + H(M, 0) : le, $(he) ? (se = "", ye != null && (se = ye.replace(me, "$&/") + "/"), W(he, K, se, "", function(V) {
      return V;
    })) : he != null && (ne(he) && (he = re(he, se + (he.key == null || M && M.key === he.key ? "" : ("" + he.key).replace(me, "$&/") + "/") + ye)), K.push(he)), 1;
    ye = 0;
    var ce = le === "" ? "." : le + ":";
    if ($(M)) for (var ve = 0; ve < M.length; ve++) le = M[ve], ie = ce + H(le, ve), ye += W(le, K, se, ie, he);
    else if (ve = C(M), typeof ve == "function") for (M = ve.call(M), ve = 0; !(le = M.next()).done; ) le = le.value, ie = ce + H(le, ve++), ye += W(le, K, se, ie, he);
    else if (ie === "object") {
      if (typeof M.then == "function") return W(I(M), K, se, le, he);
      throw K = String(M), Error("Objects are not valid as a React child (found: " + (K === "[object Object]" ? "object with keys {" + Object.keys(M).join(", ") + "}" : K) + "). If you meant to render a collection of children, use an array instead.");
    }
    return ye;
  }
  function Z(M, K, se) {
    if (M == null) return M;
    var le = [], he = 0;
    return W(M, le, "", "", function(ie) {
      return K.call(se, ie, he++);
    }), le;
  }
  function ae(M) {
    if (M._status === -1) {
      var K = M._result, se = K();
      se.then(function(le) {
        (M._status === 0 || M._status === -1) && (M._status = 1, M._result = le, se.status === void 0 && (se.status = "fulfilled", se.value = le));
      }, function(le) {
        (M._status === 0 || M._status === -1) && (M._status = 2, M._result = le, se.status === void 0 && (se.status = "rejected", se.reason = le));
      }), M._status === -1 && (M._status = 0, M._result = se);
    }
    if (M._status === 1) return M._result.default;
    throw M._result;
  }
  var be = typeof reportError == "function" ? reportError : function(M) {
    if (typeof window == "object" && typeof window.ErrorEvent == "function") {
      var K = new window.ErrorEvent("error", {
        bubbles: !0,
        cancelable: !0,
        message: typeof M == "object" && M !== null && typeof M.message == "string" ? String(M.message) : String(M),
        error: M
      });
      if (!window.dispatchEvent(K)) return;
    } else if (typeof process == "object" && typeof process.emit == "function") {
      process.emit("uncaughtException", M);
      return;
    }
    console.error(M);
  };
  function de(M) {
    var K = Q.T, se = {};
    se.types = K !== null ? K.types : null, Q.T = se;
    try {
      var le = M(), he = Q.S;
      he !== null && he(se, le), typeof le == "object" && le !== null && typeof le.then == "function" && le.then(k, be);
    } catch (ie) {
      be(ie);
    } finally {
      K !== null && se.types !== null && (K.types = se.types), Q.T = K;
    }
  }
  function we(M) {
    var K = Q.T;
    if (K !== null) {
      var se = K.types;
      se === null ? K.types = [M] : se.indexOf(M) === -1 && se.push(M);
    } else de(we.bind(null, M));
  }
  var Ae = {
    map: Z,
    forEach: function(M, K, se) {
      Z(M, function() {
        K.apply(this, arguments);
      }, se);
    },
    count: function(M) {
      var K = 0;
      return Z(M, function() {
        K++;
      }), K;
    },
    toArray: function(M) {
      return Z(M, function(K) {
        return K;
      }) || [];
    },
    only: function(M) {
      if (!ne(M)) throw Error("React.Children.only expected to receive a single React element child.");
      return M;
    }
  };
  a.Activity = p, a.Children = Ae, a.Component = _, a.Fragment = l, a.Profiler = d, a.PureComponent = L, a.StrictMode = c, a.Suspense = y, a.ViewTransition = w, a.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = Q, a.__COMPILER_RUNTIME = {
    __proto__: null,
    c: function(M) {
      return Q.H.useMemoCache(M);
    }
  }, a.addTransitionType = we, a.cache = function(M) {
    return function() {
      return M.apply(null, arguments);
    };
  }, a.cacheSignal = function() {
    return null;
  }, a.cloneElement = function(M, K, se) {
    if (M == null) throw Error("The argument must be a React element, but you passed " + M + ".");
    var le = R({}, M.props), he = M.key;
    if (K != null) for (ie in K.key !== void 0 && (he = "" + K.key), K) !X.call(K, ie) || ie === "key" || ie === "__self" || ie === "__source" || ie === "ref" && K.ref === void 0 || (le[ie] = K[ie]);
    var ie = arguments.length - 2;
    if (ie === 1) le.children = se;
    else if (1 < ie) {
      for (var ye = Array(ie), ce = 0; ce < ie; ce++) ye[ce] = arguments[ce + 2];
      le.children = ye;
    }
    return oe(M.type, he, le);
  }, a.createContext = function(M) {
    return M = {
      $$typeof: m,
      _currentValue: M,
      _currentValue2: M,
      _threadCount: 0,
      Provider: null,
      Consumer: null
    }, M.Provider = M, M.Consumer = {
      $$typeof: f,
      _context: M
    }, M;
  }, a.createElement = function(M, K, se) {
    var le, he = {}, ie = null;
    if (K != null) for (le in K.key !== void 0 && (ie = "" + K.key), K) X.call(K, le) && le !== "key" && le !== "__self" && le !== "__source" && (he[le] = K[le]);
    var ye = arguments.length - 2;
    if (ye === 1) he.children = se;
    else if (1 < ye) {
      for (var ce = Array(ye), ve = 0; ve < ye; ve++) ce[ve] = arguments[ve + 2];
      he.children = ce;
    }
    if (M && M.defaultProps) for (le in ye = M.defaultProps, ye) he[le] === void 0 && (he[le] = ye[le]);
    return oe(M, ie, he);
  }, a.createRef = function() {
    return { current: null };
  }, a.forwardRef = function(M) {
    return {
      $$typeof: v,
      render: M
    };
  }, a.isValidElement = ne, a.lazy = function(M) {
    return {
      $$typeof: b,
      _payload: {
        _status: -1,
        _result: M
      },
      _init: ae
    };
  }, a.memo = function(M, K) {
    return {
      $$typeof: x,
      type: M,
      compare: K === void 0 ? null : K
    };
  }, a.startTransition = de, a.unstable_useCacheRefresh = function() {
    return Q.H.useCacheRefresh();
  }, a.use = function(M) {
    return Q.H.use(M);
  }, a.useActionState = function(M, K, se) {
    return Q.H.useActionState(M, K, se);
  }, a.useCallback = function(M, K) {
    return Q.H.useCallback(M, K);
  }, a.useContext = function(M) {
    return Q.H.useContext(M);
  }, a.useDebugValue = function() {
  }, a.useDeferredValue = function(M, K) {
    return Q.H.useDeferredValue(M, K);
  }, a.useEffect = function(M, K) {
    return Q.H.useEffect(M, K);
  }, a.useEffectEvent = function(M) {
    return Q.H.useEffectEvent(M);
  }, a.useId = function() {
    return Q.H.useId();
  }, a.useImperativeHandle = function(M, K, se) {
    return Q.H.useImperativeHandle(M, K, se);
  }, a.useInsertionEffect = function(M, K) {
    return Q.H.useInsertionEffect(M, K);
  }, a.useLayoutEffect = function(M, K) {
    return Q.H.useLayoutEffect(M, K);
  }, a.useMemo = function(M, K) {
    return Q.H.useMemo(M, K);
  }, a.useOptimistic = function(M, K) {
    return Q.H.useOptimistic(M, K);
  }, a.useReducer = function(M, K, se) {
    return Q.H.useReducer(M, K, se);
  }, a.useRef = function(M) {
    return Q.H.useRef(M);
  }, a.useState = function(M) {
    return Q.H.useState(M);
  }, a.useSyncExternalStore = function(M, K, se) {
    return Q.H.useSyncExternalStore(M, K, se);
  }, a.useTransition = function() {
    return Q.H.useTransition();
  }, a.version = "19.3.0";
})), _m = /* @__PURE__ */ ha(((a, o) => {
  o.exports = FC();
})), JC = /* @__PURE__ */ ha(((a) => {
  function o(H, I) {
    var W = H.length;
    H.push(I);
    e: for (; 0 < W; ) {
      var Z = W - 1 >>> 1, ae = H[Z];
      if (0 < c(ae, I)) H[Z] = I, H[W] = ae, W = Z;
      else break e;
    }
  }
  function i(H) {
    return H.length === 0 ? null : H[0];
  }
  function l(H) {
    if (H.length === 0) return null;
    var I = H[0], W = H.pop();
    if (W !== I) {
      H[0] = W;
      e: for (var Z = 0, ae = H.length, be = ae >>> 1; Z < be; ) {
        var de = 2 * (Z + 1) - 1, we = H[de], Ae = de + 1, M = H[Ae];
        if (0 > c(we, W)) Ae < ae && 0 > c(M, we) ? (H[Z] = M, H[Ae] = W, Z = Ae) : (H[Z] = we, H[de] = W, Z = de);
        else if (Ae < ae && 0 > c(M, W)) H[Z] = M, H[Ae] = W, Z = Ae;
        else break e;
      }
    }
    return I;
  }
  function c(H, I) {
    var W = H.sortIndex - I.sortIndex;
    return W !== 0 ? W : H.id - I.id;
  }
  if (a.unstable_now = void 0, typeof performance == "object" && typeof performance.now == "function") {
    var d = performance;
    a.unstable_now = function() {
      return d.now();
    };
  } else {
    var f = Date, m = f.now();
    a.unstable_now = function() {
      return f.now() - m;
    };
  }
  var v = [], y = [], x = 1, b = null, p = 3, w = !1, A = !1, C = !1, T = !1, R = typeof setTimeout == "function" ? setTimeout : null, O = typeof clearTimeout == "function" ? clearTimeout : null, _ = typeof setImmediate < "u" ? setImmediate : null;
  function j(H) {
    for (var I = i(y); I !== null; ) {
      if (I.callback === null) l(y);
      else if (I.startTime <= H) l(y), I.sortIndex = I.expirationTime, o(v, I);
      else break;
      I = i(y);
    }
  }
  function L(H) {
    if (C = !1, j(H), !A) if (i(v) !== null) A = !0, z || (z = !0, re());
    else {
      var I = i(y);
      I !== null && me(L, I.startTime - H);
    }
  }
  var z = !1, $ = -1, k = 5, Q = -1;
  function X() {
    return T ? !0 : !(a.unstable_now() - Q < k);
  }
  function oe() {
    if (T = !1, z) {
      var H = a.unstable_now();
      Q = H;
      var I = !0;
      try {
        e: {
          A = !1, C && (C = !1, O($), $ = -1), w = !0;
          var W = p;
          try {
            t: {
              for (j(H), b = i(v); b !== null && !(b.expirationTime > H && X()); ) {
                var Z = b.callback;
                if (typeof Z == "function") {
                  b.callback = null, p = b.priorityLevel;
                  var ae = Z(b.expirationTime <= H);
                  if (H = a.unstable_now(), typeof ae == "function") {
                    b.callback = ae, j(H), I = !0;
                    break t;
                  }
                  b === i(v) && l(v), j(H);
                } else l(v);
                b = i(v);
              }
              if (b !== null) I = !0;
              else {
                var be = i(y);
                be !== null && me(L, be.startTime - H), I = !1;
              }
            }
            break e;
          } finally {
            b = null, p = W, w = !1;
          }
          I = void 0;
        }
      } finally {
        I ? re() : z = !1;
      }
    }
  }
  var re;
  if (typeof _ == "function") re = function() {
    _(oe);
  };
  else if (typeof MessageChannel < "u") {
    var ne = new MessageChannel(), F = ne.port2;
    ne.port1.onmessage = oe, re = function() {
      F.postMessage(null);
    };
  } else re = function() {
    R(oe, 0);
  };
  function me(H, I) {
    $ = R(function() {
      H(a.unstable_now());
    }, I);
  }
  a.unstable_IdlePriority = 5, a.unstable_ImmediatePriority = 1, a.unstable_LowPriority = 4, a.unstable_NormalPriority = 3, a.unstable_Profiling = null, a.unstable_UserBlockingPriority = 2, a.unstable_cancelCallback = function(H) {
    H.callback = null;
  }, a.unstable_forceFrameRate = function(H) {
    0 > H || 125 < H ? console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported") : k = 0 < H ? Math.floor(1e3 / H) : 5;
  }, a.unstable_getCurrentPriorityLevel = function() {
    return p;
  }, a.unstable_next = function(H) {
    switch (p) {
      case 1:
      case 2:
      case 3:
        var I = 3;
        break;
      default:
        I = p;
    }
    var W = p;
    p = I;
    try {
      return H();
    } finally {
      p = W;
    }
  }, a.unstable_requestPaint = function() {
    T = !0;
  }, a.unstable_runWithPriority = function(H, I) {
    switch (H) {
      case 1:
      case 2:
      case 3:
      case 4:
      case 5:
        break;
      default:
        H = 3;
    }
    var W = p;
    p = H;
    try {
      return I();
    } finally {
      p = W;
    }
  }, a.unstable_scheduleCallback = function(H, I, W) {
    var Z = a.unstable_now();
    switch (typeof W == "object" && W !== null ? (W = W.delay, W = typeof W == "number" && 0 < W ? Z + W : Z) : W = Z, H) {
      case 1:
        var ae = -1;
        break;
      case 2:
        ae = 250;
        break;
      case 5:
        ae = 1073741823;
        break;
      case 4:
        ae = 1e4;
        break;
      default:
        ae = 5e3;
    }
    return ae = W + ae, H = {
      id: x++,
      callback: I,
      priorityLevel: H,
      startTime: W,
      expirationTime: ae,
      sortIndex: -1
    }, W > Z ? (H.sortIndex = W, o(y, H), i(v) === null && H === i(y) && (C ? (O($), $ = -1) : C = !0, me(L, W - Z))) : (H.sortIndex = ae, o(v, H), A || w || (A = !0, z || (z = !0, re()))), H;
  }, a.unstable_shouldYield = X, a.unstable_wrapCallback = function(H) {
    var I = p;
    return function() {
      var W = p;
      p = I;
      try {
        return H.apply(this, arguments);
      } finally {
        p = W;
      }
    };
  };
})), e2 = /* @__PURE__ */ ha(((a, o) => {
  o.exports = JC();
})), t2 = /* @__PURE__ */ ha(((a) => {
  var o = _m();
  function i(b) {
    var p = "https://react.dev/errors/" + b;
    if (1 < arguments.length) {
      p += "?args[]=" + encodeURIComponent(arguments[1]);
      for (var w = 2; w < arguments.length; w++) p += "&args[]=" + encodeURIComponent(arguments[w]);
    }
    return "Minified React error #" + b + "; visit " + p + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
  }
  function l() {
  }
  var c = {
    d: {
      f: l,
      r: function() {
        throw Error(i(522));
      },
      D: l,
      C: l,
      L: l,
      m: l,
      X: l,
      S: l,
      M: l
    },
    p: 0,
    findDOMNode: null
  }, d = /* @__PURE__ */ Symbol.for("react.portal"), f = /* @__PURE__ */ Symbol.for("react.recoverable"), m = /* @__PURE__ */ Symbol.for("react.optimistic_key");
  function v(b, p, w) {
    var A = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
    return {
      $$typeof: d,
      key: A == null ? null : A === m ? m : "" + A,
      children: b,
      containerInfo: p,
      implementation: w
    };
  }
  var y = o.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;
  function x(b, p) {
    if (b === "font") return "";
    if (typeof p == "string") return p === "use-credentials" ? p : "";
  }
  a.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = c, a.browser = function(b) {
    return {
      $$typeof: f,
      _reason: b
    };
  }, a.createPortal = function(b, p) {
    var w = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
    if (!p || p.nodeType !== 1 && p.nodeType !== 9 && p.nodeType !== 11) throw Error(i(299));
    return v(b, p, null, w);
  }, a.flushSync = function(b) {
    var p = y.T, w = c.p;
    try {
      if (y.T = null, c.p = 2, b) return b();
    } finally {
      y.T = p, c.p = w, c.d.f();
    }
  }, a.preconnect = function(b, p) {
    typeof b == "string" && (p ? (p = p.crossOrigin, p = typeof p == "string" ? p === "use-credentials" ? p : "" : void 0) : p = null, c.d.C(b, p));
  }, a.prefetchDNS = function(b) {
    typeof b == "string" && c.d.D(b);
  }, a.preinit = function(b, p) {
    if (typeof b == "string" && p && typeof p.as == "string") {
      var w = p.as, A = x(w, p.crossOrigin), C = typeof p.integrity == "string" ? p.integrity : void 0, T = typeof p.fetchPriority == "string" ? p.fetchPriority : void 0;
      w === "style" ? c.d.S(b, typeof p.precedence == "string" ? p.precedence : void 0, {
        crossOrigin: A,
        integrity: C,
        fetchPriority: T
      }) : w === "script" && c.d.X(b, {
        crossOrigin: A,
        integrity: C,
        fetchPriority: T,
        nonce: typeof p.nonce == "string" ? p.nonce : void 0
      });
    }
  }, a.preinitModule = function(b, p) {
    if (typeof b == "string") if (typeof p == "object" && p !== null) {
      if (p.as == null || p.as === "script") {
        var w = x(p.as, p.crossOrigin);
        c.d.M(b, {
          crossOrigin: w,
          integrity: typeof p.integrity == "string" ? p.integrity : void 0,
          nonce: typeof p.nonce == "string" ? p.nonce : void 0,
          fetchPriority: typeof p.fetchPriority == "string" ? p.fetchPriority : void 0
        });
      }
    } else p ?? c.d.M(b);
  }, a.preload = function(b, p) {
    if (typeof b == "string" && typeof p == "object" && p !== null && typeof p.as == "string") {
      var w = p.as, A = x(w, p.crossOrigin);
      c.d.L(b, w, {
        crossOrigin: A,
        integrity: typeof p.integrity == "string" ? p.integrity : void 0,
        nonce: typeof p.nonce == "string" ? p.nonce : void 0,
        type: typeof p.type == "string" ? p.type : void 0,
        fetchPriority: typeof p.fetchPriority == "string" ? p.fetchPriority : void 0,
        referrerPolicy: typeof p.referrerPolicy == "string" ? p.referrerPolicy : void 0,
        imageSrcSet: typeof p.imageSrcSet == "string" ? p.imageSrcSet : void 0,
        imageSizes: typeof p.imageSizes == "string" ? p.imageSizes : void 0,
        media: typeof p.media == "string" ? p.media : void 0
      });
    }
  }, a.preloadModule = function(b, p) {
    if (typeof b == "string") if (p) {
      var w = x(p.as, p.crossOrigin);
      c.d.m(b, {
        as: typeof p.as == "string" && p.as !== "script" ? p.as : void 0,
        crossOrigin: w,
        integrity: typeof p.integrity == "string" ? p.integrity : void 0,
        nonce: typeof p.nonce == "string" ? p.nonce : void 0,
        fetchPriority: typeof p.fetchPriority == "string" ? p.fetchPriority : void 0
      });
    } else c.d.m(b);
  }, a.requestFormReset = function(b) {
    c.d.r(b);
  }, a.unstable_batchedUpdates = function(b, p) {
    return b(p);
  }, a.useFormState = function(b, p, w) {
    return y.H.useFormState(b, p, w);
  }, a.useFormStatus = function() {
    return y.H.useHostTransitionStatus();
  }, a.version = "19.3.0";
})), Fy = /* @__PURE__ */ ha(((a, o) => {
  function i() {
    if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"))
      try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(i);
      } catch (l) {
        console.error(l);
      }
  }
  i(), o.exports = t2();
})), n2 = /* @__PURE__ */ ha(((a) => {
  var o = e2(), i = _m(), l = Fy();
  function c(e) {
    var t = "https://react.dev/errors/" + e;
    if (1 < arguments.length) {
      t += "?args[]=" + encodeURIComponent(arguments[1]);
      for (var n = 2; n < arguments.length; n++) t += "&args[]=" + encodeURIComponent(arguments[n]);
    }
    return "Minified React error #" + e + "; visit " + t + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
  }
  function d(e) {
    return !(!e || e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11);
  }
  function f(e) {
    for (var t = e, n = t; n && !n.alternate; ) t = n, (t.flags & 4098) !== 0 && (e = t.return), n = t.return;
    for (; t.return; ) t = t.return;
    return t.tag === 3 ? e : null;
  }
  function m(e) {
    if (e.tag === 13) {
      var t = e.memoizedState;
      if (t === null && (e = e.alternate, e !== null && (t = e.memoizedState)), t !== null) return t.dehydrated;
    }
    return null;
  }
  function v(e) {
    if (e.tag === 31) {
      var t = e.memoizedState;
      if (t === null && (e = e.alternate, e !== null && (t = e.memoizedState)), t !== null) return t.dehydrated;
    }
    return null;
  }
  function y(e) {
    if (f(e) !== e) throw Error(c(188));
  }
  function x(e) {
    var t = e.alternate;
    if (!t) {
      if (t = f(e), t === null) throw Error(c(188));
      return t !== e ? null : e;
    }
    for (var n = e, r = t; ; ) {
      var s = n.return;
      if (s === null) break;
      var u = s.alternate;
      if (u === null) {
        if (r = s.return, r !== null) {
          n = r;
          continue;
        }
        break;
      }
      if (s.child === u.child) {
        for (u = s.child; u; ) {
          if (u === n) return y(s), e;
          if (u === r) return y(s), t;
          u = u.sibling;
        }
        throw Error(c(188));
      }
      if (n.return !== r.return) n = s, r = u;
      else {
        for (var h = !1, E = s.child; E; ) {
          if (E === n) {
            h = !0, n = s, r = u;
            break;
          }
          if (E === r) {
            h = !0, r = s, n = u;
            break;
          }
          E = E.sibling;
        }
        if (!h) {
          for (E = u.child; E; ) {
            if (E === n) {
              h = !0, n = u, r = s;
              break;
            }
            if (E === r) {
              h = !0, r = u, n = s;
              break;
            }
            E = E.sibling;
          }
          if (!h) throw Error(c(189));
        }
      }
      if (n.alternate !== r) throw Error(c(190));
    }
    if (n.tag !== 3) throw Error(c(188));
    return n.stateNode.current === n ? e : t;
  }
  function b(e) {
    var t = e.tag;
    if (t === 5 || t === 26 || t === 27 || t === 6) return e;
    for (e = e.child; e !== null; ) {
      if (t = b(e), t !== null) return t;
      e = e.sibling;
    }
    return null;
  }
  function p(e, t, n, r, s, u) {
    for (; e !== null; ) {
      if ((e.tag === 5 || e.tag === 27 || e.tag === 6) && n(e, r, s, u) || (e.tag !== 22 || e.memoizedState === null) && (t || e.tag !== 5 && e.tag !== 27) && p(e.child, t, n, r, s, u)) return !0;
      e = e.sibling;
    }
    return !1;
  }
  function w(e) {
    for (e = e.return; e !== null; ) {
      if (e.tag === 3 || e.tag === 5 || e.tag === 27) return e;
      e = e.return;
    }
    return null;
  }
  function A(e) {
    var t = !1;
    for (e = e.return; e !== null && (e.tag === 4 && (t = !0), !(e.tag === 3 || e.tag === 5 || e.tag === 27)); )
      e = e.return;
    return t;
  }
  function C(e) {
    var t = [null, null], n = w(e);
    return n === null || T(t, e, n.child, { foundSelf: !1 }), t;
  }
  function T(e, t, n, r) {
    for (; n !== null; ) {
      if (n === t) r.foundSelf = !0;
      else if (n.tag === 5 || n.tag === 27 || n.tag === 6) {
        if (r.foundSelf) return e[1] = n, !0;
        e[0] = n;
      } else if ((n.tag !== 22 || n.memoizedState === null) && T(e, t, n.child, r)) return !0;
      n = n.sibling;
    }
    return !1;
  }
  function R(e) {
    switch (e.tag) {
      case 5:
      case 27:
      case 6:
        return e.stateNode;
      case 3:
        return e.stateNode.containerInfo;
      default:
        throw Error(c(559));
    }
  }
  var O = null, _ = null;
  function j(e, t, n) {
    return e === n ? !0 : e === t ? (O = e, !0) : !1;
  }
  function L(e, t, n) {
    return e === n ? (_ = e, !1) : e === t ? (_ !== null && (O = e), !0) : !1;
  }
  function z(e) {
    if (e === null) return null;
    do
      e = e === null ? null : e.return;
    while (e && e.tag !== 5 && e.tag !== 27 && e.tag !== 3);
    return e || null;
  }
  function $(e, t, n) {
    for (var r = 0, s = e; s; s = n(s)) r++;
    s = 0;
    for (var u = t; u; u = n(u)) s++;
    for (; 0 < r - s; ) e = n(e), r--;
    for (; 0 < s - r; ) t = n(t), s--;
    for (; r--; ) {
      if (e === t || t !== null && e === t.alternate) return e;
      e = n(e), t = n(t);
    }
    return null;
  }
  var k = Object.assign, Q = /* @__PURE__ */ Symbol.for("react.element"), X = /* @__PURE__ */ Symbol.for("react.transitional.element"), oe = /* @__PURE__ */ Symbol.for("react.portal"), re = /* @__PURE__ */ Symbol.for("react.fragment"), ne = /* @__PURE__ */ Symbol.for("react.strict_mode"), F = /* @__PURE__ */ Symbol.for("react.profiler"), me = /* @__PURE__ */ Symbol.for("react.consumer"), H = /* @__PURE__ */ Symbol.for("react.context"), I = /* @__PURE__ */ Symbol.for("react.forward_ref"), W = /* @__PURE__ */ Symbol.for("react.suspense"), Z = /* @__PURE__ */ Symbol.for("react.suspense_list"), ae = /* @__PURE__ */ Symbol.for("react.memo"), be = /* @__PURE__ */ Symbol.for("react.lazy"), de = /* @__PURE__ */ Symbol.for("react.activity"), we = /* @__PURE__ */ Symbol.for("react.legacy_hidden"), Ae = /* @__PURE__ */ Symbol.for("react.memo_cache_sentinel"), M = /* @__PURE__ */ Symbol.for("react.view_transition"), K = /* @__PURE__ */ Symbol.for("react.recoverable"), se = Symbol.iterator;
  function le(e) {
    return e === null || typeof e != "object" ? null : (e = se && e[se] || e["@@iterator"], typeof e == "function" ? e : null);
  }
  var he = /* @__PURE__ */ Symbol.for("react.client.reference");
  function ie(e) {
    if (e == null) return null;
    if (typeof e == "function") return e.$$typeof === he ? null : e.displayName || e.name || null;
    if (typeof e == "string") return e;
    switch (e) {
      case re:
        return "Fragment";
      case F:
        return "Profiler";
      case ne:
        return "StrictMode";
      case W:
        return "Suspense";
      case Z:
        return "SuspenseList";
      case de:
        return "Activity";
      case M:
        return "ViewTransition";
    }
    if (typeof e == "object") switch (e.$$typeof) {
      case oe:
        return "Portal";
      case H:
        return e.displayName || "Context";
      case me:
        return (e._context.displayName || "Context") + ".Consumer";
      case I:
        var t = e.render;
        return e = e.displayName, e || (e = t.displayName || t.name || "", e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef"), e;
      case ae:
        return t = e.displayName || null, t !== null ? t : ie(e.type) || "Memo";
      case be:
        t = e._payload, e = e._init;
        try {
          return ie(e(t));
        } catch {
        }
    }
    return null;
  }
  var ye = Array.isArray, ce = i.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, ve = l.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, V = {
    pending: !1,
    data: null,
    method: null,
    action: null
  }, pe = [], Te = -1;
  function je(e) {
    return { current: e };
  }
  function Be(e) {
    0 > Te || (e.current = pe[Te], pe[Te] = null, Te--);
  }
  function Oe(e, t) {
    Te++, pe[Te] = e.current, e.current = t;
  }
  var rt = je(null), dt = je(null), wt = je(null), Nt = je(null);
  function $e(e, t) {
    switch (Oe(wt, t), Oe(dt, e), Oe(rt, null), t.nodeType) {
      case 9:
      case 11:
        e = (e = t.documentElement) && (e = e.namespaceURI) ? ig(e) : 0;
        break;
      default:
        if (e = t.tagName, t = t.namespaceURI) t = ig(t), e = lg(t, e);
        else switch (e) {
          case "svg":
            e = 1;
            break;
          case "math":
            e = 2;
            break;
          default:
            e = 0;
        }
    }
    Be(rt), Oe(rt, e);
  }
  function Vt() {
    Be(rt), Be(dt), Be(wt);
  }
  function Ye(e) {
    var t = e.memoizedState;
    t !== null && (Fr._currentValue = t.memoizedState, Oe(Nt, e)), t = rt.current;
    var n = lg(t, e.type);
    t !== n && (Oe(dt, e), Oe(rt, n));
  }
  function pa(e) {
    dt.current === e && (Be(rt), Be(dt)), Nt.current === e && (Be(Nt), Fr._currentValue = V);
  }
  var Pe, Kt;
  function wn(e) {
    if (Pe === void 0) try {
      throw Error();
    } catch (n) {
      var t = n.stack.trim().match(/\n( *(at )?)/);
      Pe = t && t[1] || "", Kt = -1 < n.stack.indexOf(`
    at`) ? " (<anonymous>)" : -1 < n.stack.indexOf("@") ? "@unknown:0:0" : "";
    }
    return `
` + Pe + e + Kt;
  }
  var cn = !1;
  function dr(e, t) {
    if (!e || cn) return "";
    cn = !0;
    var n = Error.prepareStackTrace;
    Error.prepareStackTrace = void 0;
    try {
      var r = { DetermineComponentFrameRoot: function() {
        try {
          if (t) {
            var ee = function() {
              throw Error();
            };
            if (Object.defineProperty(ee.prototype, "props", { set: function() {
              throw Error();
            } }), typeof Reflect == "object" && Reflect.construct) {
              try {
                Reflect.construct(ee, []);
              } catch (fe) {
                var B = fe;
              }
              Reflect.construct(e, [], ee);
            } else {
              try {
                ee.call();
              } catch (fe) {
                B = fe;
              }
              ee = !1;
              try {
                var G = Object.getOwnPropertyDescriptor(e.prototype, "props");
                Object.defineProperty(e.prototype, "props", {
                  configurable: !0,
                  set: function() {
                    throw Error();
                  }
                }), ee = !0, new e();
              } finally {
                ee && (G !== void 0 ? Object.defineProperty(e.prototype, "props", G) : delete e.prototype.props);
              }
            }
          } else {
            try {
              throw Error();
            } catch (fe) {
              B = fe;
            }
            (ee = e()) && typeof ee.catch == "function" && ee.catch(function() {
            });
          }
        } catch (fe) {
          if (fe && B && typeof fe.stack == "string") return [fe.stack, B.stack];
        }
        return [null, null];
      } };
      r.DetermineComponentFrameRoot.displayName = "DetermineComponentFrameRoot";
      var s = Object.getOwnPropertyDescriptor(r.DetermineComponentFrameRoot, "name");
      s && s.configurable && Object.defineProperty(r.DetermineComponentFrameRoot, "name", { value: "DetermineComponentFrameRoot" });
      var u = r.DetermineComponentFrameRoot(), h = u[0], E = u[1];
      if (h && E) {
        var N = h.split(`
`), q = E.split(`
`);
        for (s = r = 0; r < N.length && !N[r].includes("DetermineComponentFrameRoot"); ) r++;
        for (; s < q.length && !q[s].includes("DetermineComponentFrameRoot"); ) s++;
        if (r === N.length || s === q.length) for (r = N.length - 1, s = q.length - 1; 1 <= r && 0 <= s && N[r] !== q[s]; ) s--;
        for (; 1 <= r && 0 <= s; r--, s--) if (N[r] !== q[s]) {
          if (r !== 1 || s !== 1) do
            if (r--, s--, 0 > s || N[r] !== q[s]) {
              var P = `
` + N[r].replace(" at new ", " at ");
              return e.displayName && P.includes("<anonymous>") && (P = P.replace("<anonymous>", e.displayName)), P;
            }
          while (1 <= r && 0 <= s);
          break;
        }
      }
    } finally {
      cn = !1, Error.prepareStackTrace = n;
    }
    return (n = e ? e.displayName || e.name : "") ? wn(n) : "";
  }
  function fr(e, t) {
    switch (e.tag) {
      case 26:
      case 27:
      case 5:
        return wn(e.type);
      case 16:
        return wn("Lazy");
      case 13:
        return e.child !== t && t !== null ? wn("Suspense Fallback") : wn("Suspense");
      case 19:
        return wn("SuspenseList");
      case 0:
      case 15:
        return dr(e.type, !1);
      case 11:
        return dr(e.type.render, !1);
      case 1:
        return dr(e.type, !0);
      case 31:
        return wn("Activity");
      case 30:
        return wn("ViewTransition");
      default:
        return "";
    }
  }
  function Hl(e) {
    try {
      var t = "", n = null;
      do
        t += fr(e, n), n = e, e = e.return;
      while (e);
      return t;
    } catch (r) {
      return `
Error generating stack: ` + r.message + `
` + r.stack;
    }
  }
  var bi = Object.prototype.hasOwnProperty, xt = o.unstable_scheduleCallback, xn = o.unstable_cancelCallback, Bl = o.unstable_shouldYield, Ul = o.unstable_requestPaint, $t = o.unstable_now, fu = o.unstable_getCurrentPriorityLevel, yt = o.unstable_ImmediatePriority, Bt = o.unstable_UserBlockingPriority, Ya = o.unstable_NormalPriority, cw = o.unstable_LowPriority, Mh = o.unstable_IdlePriority, uw = o.log, dw = o.unstable_setDisableYieldValue, Si = null, un = null;
  function Ga(e) {
    if (typeof uw == "function" && dw(e), un && typeof un.setStrictMode == "function") try {
      un.setStrictMode(Si, e);
    } catch {
    }
  }
  var dn = Math.clz32 ? Math.clz32 : hw, fw = Math.log, mw = Math.LN2;
  function hw(e) {
    return e >>>= 0, e === 0 ? 32 : 31 - (fw(e) / mw | 0) | 0;
  }
  var ql = 256, Vl = 262144, $l = 4194304;
  function To(e) {
    var t = e & 42;
    if (t !== 0) return t;
    switch (e & -e) {
      case 1:
        return 1;
      case 2:
        return 2;
      case 4:
        return 4;
      case 8:
        return 8;
      case 16:
        return 16;
      case 32:
        return 32;
      case 64:
        return 64;
      case 128:
        return 128;
      case 256:
      case 512:
      case 1024:
      case 2048:
      case 4096:
      case 8192:
      case 16384:
      case 32768:
      case 65536:
      case 131072:
        return e & -e;
      case 262144:
      case 524288:
      case 1048576:
      case 2097152:
        return e & 3932160;
      case 4194304:
      case 8388608:
      case 16777216:
      case 33554432:
        return e & 62914560;
      case 67108864:
        return 67108864;
      case 134217728:
        return 134217728;
      case 268435456:
        return 268435456;
      case 536870912:
        return 536870912;
      case 1073741824:
        return 0;
      default:
        return e;
    }
  }
  function Yl(e, t, n) {
    var r = e.pendingLanes;
    if (r === 0) return 0;
    var s = 0, u = e.suspendedLanes, h = e.pingedLanes;
    e = e.warmLanes;
    var E = r & 134217727;
    return E !== 0 ? (r = E & ~u, r !== 0 ? s = To(r) : (h &= E, h !== 0 ? s = To(h) : n || (n = E & ~e, n !== 0 && (s = To(n))))) : (E = r & ~u, E !== 0 ? s = To(E) : h !== 0 ? s = To(h) : n || (n = r & ~e, n !== 0 && (s = To(n)))), s === 0 ? 0 : t !== 0 && t !== s && (t & u) === 0 && (u = s & -s, n = t & -t, u >= n || u === 32 && (n & 4194048) !== 0) ? t : s;
  }
  function wi(e, t) {
    return (e.pendingLanes & ~(e.suspendedLanes & ~e.pingedLanes) & t) === 0;
  }
  function zh(e, t) {
    (t & 8) !== 0 && (t |= t & 32);
    var n = e.entangledLanes;
    if (n !== 0) for (e = e.entanglements, n &= t; 0 < n; ) {
      var r = 31 - dn(n), s = 1 << r;
      t |= e[r], n &= ~s;
    }
    return t;
  }
  function vw(e, t) {
    switch (e) {
      case 1:
      case 2:
      case 4:
      case 8:
      case 64:
        return t + 250;
      case 16:
      case 32:
      case 128:
      case 256:
      case 512:
      case 1024:
      case 2048:
      case 4096:
      case 8192:
      case 16384:
      case 32768:
      case 65536:
      case 131072:
      case 262144:
      case 524288:
      case 1048576:
      case 2097152:
        return t + 5e3;
      case 4194304:
      case 8388608:
      case 16777216:
      case 33554432:
        return -1;
      case 67108864:
      case 134217728:
      case 268435456:
      case 536870912:
      case 1073741824:
        return -1;
      default:
        return -1;
    }
  }
  function Dh() {
    var e = $l;
    return $l <<= 1, ($l & 62914560) === 0 && ($l = 4194304), e;
  }
  function mu(e) {
    for (var t = [], n = 0; 31 > n; n++) t.push(e);
    return t;
  }
  function Gl(e, t) {
    e.pendingLanes |= t, t !== 268435456 && (e.suspendedLanes = 0, e.pingedLanes = 0, e.warmLanes = 0);
  }
  function pw(e, t, n, r, s, u) {
    var h = e.pendingLanes;
    e.pendingLanes = n, e.suspendedLanes = 0, e.pingedLanes = 0, e.warmLanes = 0, e.expiredLanes &= n, e.entangledLanes &= n, e.errorRecoveryDisabledLanes &= n, e.shellSuspendCounter = 0;
    var E = e.entanglements, N = e.expirationTimes, q = e.hiddenUpdates;
    for (n = h & ~n; 0 < n; ) {
      var P = 31 - dn(n), ee = 1 << P;
      E[P] = 0, N[P] = -1;
      var B = q[P];
      if (B !== null) for (q[P] = null, P = 0; P < B.length; P++) {
        var G = B[P];
        G !== null && (G.lane &= -536870913);
      }
      n &= ~ee;
    }
    r !== 0 && kh(e, r, 0), u !== 0 && s === 0 && e.tag !== 0 && (e.suspendedLanes |= u & ~(h & ~t));
  }
  function kh(e, t, n) {
    e.pendingLanes |= t, e.suspendedLanes &= ~t;
    var r = 31 - dn(t);
    e.entangledLanes |= t, e.entanglements[r] = e.entanglements[r] | 1073741824 | n & 261930;
  }
  function Lh(e, t) {
    var n = e.entangledLanes |= t;
    for (e = e.entanglements; n; ) {
      var r = 31 - dn(n), s = 1 << r;
      s & t | e[r] & t && (e[r] |= t), n &= ~s;
    }
  }
  function Hh(e, t) {
    var n = t & -t;
    return n = (n & 42) !== 0 ? 1 : Bh(n), (n & (e.suspendedLanes | t)) !== 0 ? 0 : n;
  }
  function Bh(e) {
    switch (e) {
      case 2:
        e = 1;
        break;
      case 8:
        e = 4;
        break;
      case 32:
        e = 16;
        break;
      case 256:
      case 512:
      case 1024:
      case 2048:
      case 4096:
      case 8192:
      case 16384:
      case 32768:
      case 65536:
      case 131072:
      case 262144:
      case 524288:
      case 1048576:
      case 2097152:
      case 4194304:
      case 8388608:
      case 16777216:
      case 33554432:
        e = 128;
        break;
      case 268435456:
        e = 134217728;
        break;
      default:
        e = 0;
    }
    return e;
  }
  function hu(e) {
    return e &= -e, 2 < e ? 8 < e ? (e & 134217727) !== 0 ? 32 : 268435456 : 8 : 2;
  }
  function Uh() {
    var e = ve.p;
    return e !== 0 ? e : (e = window.event, e === void 0 ? 32 : Yg(e.type));
  }
  function qh(e, t) {
    var n = ve.p;
    try {
      return ve.p = e, t();
    } finally {
      ve.p = n;
    }
  }
  var ga = Math.random().toString(36).slice(2), jt = "__reactFiber$" + ga, Zt = "__reactProps$" + ga, xi = "__reactContainer$" + ga, Vh = "__reactEvents$" + ga, gw = "__reactListeners$" + ga, yw = "__reactHandles$" + ga, $h = "__reactResources$" + ga, Ci = "__reactMarker$" + ga, Wl = "__reactLoad$" + ga;
  function Pl(e) {
    delete e[jt], delete e[Zt], delete e[gw], delete e[yw];
  }
  function Ro(e) {
    var t;
    if (t = e[jt]) return t;
    for (var n = e.parentNode; n; ) {
      if (t = n[xi] || n[jt]) {
        if (n = t.alternate, t.child !== null || n !== null && n.child !== null) for (e = Ag(e); e !== null; ) {
          if (n = e[jt]) return n;
          e = Ag(e);
        }
        return t;
      }
      e = n, n = e.parentNode;
    }
    return null;
  }
  function mr(e) {
    if (e = e[jt] || e[xi]) {
      var t = e.tag;
      if (t === 5 || t === 6 || t === 13 || t === 31 || t === 26 || t === 27 || t === 3) return e;
    }
    return null;
  }
  function Ei(e) {
    var t = e.tag;
    if (t === 5 || t === 26 || t === 27 || t === 6) return e.stateNode;
    throw Error(c(33));
  }
  function hr(e) {
    var t = e[$h];
    return t || (t = e[$h] = {
      hoistableStyles: /* @__PURE__ */ new Map(),
      hoistableScripts: /* @__PURE__ */ new Map()
    }), t;
  }
  function Ct(e) {
    e[Ci] = !0;
  }
  function Yh(e) {
    e[Wl] = void 0;
  }
  var Gh = /* @__PURE__ */ new Set(), Wh = {};
  function _o(e, t) {
    vr(e, t), vr(e + "Capture", t);
  }
  function vr(e, t) {
    for (Wh[e] = t, e = 0; e < t.length; e++) Gh.add(t[e]);
  }
  var bw = RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"), Ph = {}, Ih = {};
  function Sw(e) {
    return bi.call(Ih, e) ? !0 : bi.call(Ph, e) ? !1 : bw.test(e) ? Ih[e] = !0 : (Ph[e] = !0, !1);
  }
  var Ve = !1;
  function Xh() {
    var e = Ve;
    return Ve = !1, e;
  }
  function Il(e, t, n) {
    if (Sw(t)) if (n === null) e.removeAttribute(t);
    else {
      switch (typeof n) {
        case "undefined":
        case "function":
        case "symbol":
          e.removeAttribute(t);
          return;
        case "boolean":
          var r = t.toLowerCase().slice(0, 5);
          if (r !== "data-" && r !== "aria-") {
            e.removeAttribute(t);
            return;
          }
      }
      e.setAttribute(t, n);
    }
  }
  function Xl(e, t, n) {
    if (n === null) e.removeAttribute(t);
    else {
      switch (typeof n) {
        case "undefined":
        case "function":
        case "symbol":
        case "boolean":
          e.removeAttribute(t);
          return;
      }
      e.setAttribute(t, n);
    }
  }
  function ya(e, t, n, r) {
    if (r === null) e.removeAttribute(n);
    else {
      switch (typeof r) {
        case "undefined":
        case "function":
        case "symbol":
        case "boolean":
          e.removeAttribute(n);
          return;
      }
      e.setAttributeNS(t, n, r);
    }
  }
  function fn(e) {
    switch (typeof e) {
      case "bigint":
      case "boolean":
      case "number":
      case "string":
      case "undefined":
        return e;
      case "object":
        return e;
      default:
        return "";
    }
  }
  function Qh(e) {
    var t = e.type;
    return (e = e.nodeName) && e.toLowerCase() === "input" && (t === "checkbox" || t === "radio");
  }
  function ww(e, t, n) {
    var r = Object.getOwnPropertyDescriptor(e.constructor.prototype, t);
    if (!e.hasOwnProperty(t) && typeof r < "u" && typeof r.get == "function" && typeof r.set == "function") {
      var s = r.get, u = r.set;
      return Object.defineProperty(e, t, {
        configurable: !0,
        get: function() {
          return s.call(this);
        },
        set: function(h) {
          n = "" + h, u.call(this, h);
        }
      }), Object.defineProperty(e, t, { enumerable: r.enumerable }), {
        getValue: function() {
          return n;
        },
        setValue: function(h) {
          n = "" + h;
        },
        stopTracking: function() {
          e._valueTracker = null, delete e[t];
        }
      };
    }
  }
  function vu(e) {
    if (!e._valueTracker) {
      var t = Qh(e) ? "checked" : "value";
      e._valueTracker = ww(e, t, "" + e[t]);
    }
  }
  function Kh(e) {
    if (!e) return !1;
    var t = e._valueTracker;
    if (!t) return !0;
    var n = t.getValue(), r = "";
    return e && (r = Qh(e) ? e.checked ? "true" : "false" : e.value), e = r, e !== n ? (t.setValue(e), !0) : !1;
  }
  var xw = /[\n"\\]/g;
  function Cn(e) {
    return e.replace(xw, function(t) {
      return "\\" + t.charCodeAt(0).toString(16) + " ";
    });
  }
  function pu(e, t, n, r, s, u, h, E) {
    e.name = "", h != null && typeof h != "function" && typeof h != "symbol" && typeof h != "boolean" ? e.type = h : e.removeAttribute("type"), t != null ? h === "number" ? (t === 0 && e.value === "" || e.value != t) && (e.value = "" + fn(t)) : e.value !== "" + fn(t) && (e.value = "" + fn(t)) : h !== "submit" && h !== "reset" || e.removeAttribute("value"), t != null ? h === "number" && e.value == t ? gu(e, fn(e.value)) : gu(e, fn(t)) : n != null ? gu(e, fn(n)) : r != null && e.removeAttribute("value"), s == null && u != null && (e.defaultChecked = !!u), s != null && (e.checked = s && typeof s != "function" && typeof s != "symbol"), E != null && typeof E != "function" && typeof E != "symbol" && typeof E != "boolean" ? e.name = "" + fn(E) : e.removeAttribute("name");
  }
  function Zh(e, t, n, r, s, u, h, E) {
    if (u != null && typeof u != "function" && typeof u != "symbol" && typeof u != "boolean" && (e.type = u), t != null || n != null) {
      if (!(u !== "submit" && u !== "reset" || t != null)) {
        vu(e);
        return;
      }
      n = n != null ? "" + fn(n) : "", t = t != null ? "" + fn(t) : n, E || t === e.value || (e.value = t), e.defaultValue = t;
    }
    r = r ?? s, r = typeof r != "function" && typeof r != "symbol" && !!r, e.checked = E ? e.checked : !!r, e.defaultChecked = !!r, h != null && typeof h != "function" && typeof h != "symbol" && typeof h != "boolean" && (e.name = h), vu(e);
  }
  function gu(e, t) {
    e.defaultValue !== "" + t && (e.defaultValue = "" + t);
  }
  function pr(e, t, n, r) {
    if (e = e.options, t) {
      t = {};
      for (var s = 0; s < n.length; s++) t["$" + n[s]] = !0;
      for (n = 0; n < e.length; n++) s = t.hasOwnProperty("$" + e[n].value), e[n].selected !== s && (e[n].selected = s), s && r && (e[n].defaultSelected = !0);
    } else {
      for (n = "" + fn(n), t = null, s = 0; s < e.length; s++) {
        if (e[s].value === n) {
          e[s].selected = !0, r && (e[s].defaultSelected = !0);
          return;
        }
        t !== null || e[s].disabled || (t = e[s]);
      }
      t !== null && (t.selected = !0);
    }
  }
  function Fh(e, t, n) {
    if (t != null && (t = "" + fn(t), t !== e.value && (e.value = t), n == null)) {
      e.defaultValue !== t && (e.defaultValue = t);
      return;
    }
    e.defaultValue = n != null ? "" + fn(n) : "";
  }
  function Jh(e, t, n, r) {
    if (t == null) {
      if (r != null) {
        if (n != null) throw Error(c(92));
        if (ye(r)) {
          if (1 < r.length) throw Error(c(93));
          r = r[0];
        }
        n = r;
      }
      n ??= "", t = n;
    }
    n = fn(t), e.defaultValue = n, r = e.textContent, r === n && r !== "" && r !== null && (e.value = r), vu(e);
  }
  function gr(e, t) {
    if (t) {
      var n = e.firstChild;
      if (n && n === e.lastChild && n.nodeType === 3) {
        n.nodeValue = t;
        return;
      }
    }
    e.textContent = t;
  }
  var Cw = new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));
  function ev(e, t, n) {
    var r = t.indexOf("--") === 0;
    n == null || typeof n == "boolean" || n === "" ? r ? e.setProperty(t, "") : t === "float" ? e.cssFloat = "" : e[t] = "" : r ? e.setProperty(t, n) : typeof n != "number" || n === 0 || Cw.has(t) ? t === "float" ? e.cssFloat = n : e[t] = ("" + n).trim() : e[t] = n + "px";
  }
  function tv(e, t, n) {
    if (t != null && typeof t != "object") throw Error(c(62));
    if (e = e.style, n != null) {
      for (var r in n) !n.hasOwnProperty(r) || t != null && t.hasOwnProperty(r) || (r.indexOf("--") === 0 ? e.setProperty(r, "") : r === "float" ? e.cssFloat = "" : e[r] = "", Ve = !0);
      for (var s in t) r = t[s], t.hasOwnProperty(s) && n[s] !== r && (ev(e, s, r), Ve = !0);
    } else for (var u in t) t.hasOwnProperty(u) && ev(e, u, t[u]);
  }
  function yu(e) {
    if (e.indexOf("-") === -1) return !1;
    switch (e) {
      case "annotation-xml":
      case "color-profile":
      case "font-face":
      case "font-face-src":
      case "font-face-uri":
      case "font-face-format":
      case "font-face-name":
      case "missing-glyph":
        return !1;
      default:
        return !0;
    }
  }
  var Ew = /* @__PURE__ */ new Map([
    ["acceptCharset", "accept-charset"],
    ["htmlFor", "for"],
    ["httpEquiv", "http-equiv"],
    ["crossOrigin", "crossorigin"],
    ["accentHeight", "accent-height"],
    ["alignmentBaseline", "alignment-baseline"],
    ["arabicForm", "arabic-form"],
    ["baselineShift", "baseline-shift"],
    ["capHeight", "cap-height"],
    ["clipPath", "clip-path"],
    ["clipRule", "clip-rule"],
    ["colorInterpolation", "color-interpolation"],
    ["colorInterpolationFilters", "color-interpolation-filters"],
    ["colorProfile", "color-profile"],
    ["colorRendering", "color-rendering"],
    ["dominantBaseline", "dominant-baseline"],
    ["enableBackground", "enable-background"],
    ["fillOpacity", "fill-opacity"],
    ["fillRule", "fill-rule"],
    ["floodColor", "flood-color"],
    ["floodOpacity", "flood-opacity"],
    ["fontFamily", "font-family"],
    ["fontSize", "font-size"],
    ["fontSizeAdjust", "font-size-adjust"],
    ["fontStretch", "font-stretch"],
    ["fontStyle", "font-style"],
    ["fontVariant", "font-variant"],
    ["fontWeight", "font-weight"],
    ["glyphName", "glyph-name"],
    ["glyphOrientationHorizontal", "glyph-orientation-horizontal"],
    ["glyphOrientationVertical", "glyph-orientation-vertical"],
    ["horizAdvX", "horiz-adv-x"],
    ["horizOriginX", "horiz-origin-x"],
    ["imageRendering", "image-rendering"],
    ["letterSpacing", "letter-spacing"],
    ["lightingColor", "lighting-color"],
    ["markerEnd", "marker-end"],
    ["markerMid", "marker-mid"],
    ["markerStart", "marker-start"],
    ["maskType", "mask-type"],
    ["overlinePosition", "overline-position"],
    ["overlineThickness", "overline-thickness"],
    ["paintOrder", "paint-order"],
    ["panose-1", "panose-1"],
    ["pointerEvents", "pointer-events"],
    ["renderingIntent", "rendering-intent"],
    ["shapeRendering", "shape-rendering"],
    ["stopColor", "stop-color"],
    ["stopOpacity", "stop-opacity"],
    ["strikethroughPosition", "strikethrough-position"],
    ["strikethroughThickness", "strikethrough-thickness"],
    ["strokeDasharray", "stroke-dasharray"],
    ["strokeDashoffset", "stroke-dashoffset"],
    ["strokeLinecap", "stroke-linecap"],
    ["strokeLinejoin", "stroke-linejoin"],
    ["strokeMiterlimit", "stroke-miterlimit"],
    ["strokeOpacity", "stroke-opacity"],
    ["strokeWidth", "stroke-width"],
    ["textAnchor", "text-anchor"],
    ["textDecoration", "text-decoration"],
    ["textRendering", "text-rendering"],
    ["transformOrigin", "transform-origin"],
    ["underlinePosition", "underline-position"],
    ["underlineThickness", "underline-thickness"],
    ["unicodeBidi", "unicode-bidi"],
    ["unicodeRange", "unicode-range"],
    ["unitsPerEm", "units-per-em"],
    ["vAlphabetic", "v-alphabetic"],
    ["vHanging", "v-hanging"],
    ["vIdeographic", "v-ideographic"],
    ["vMathematical", "v-mathematical"],
    ["vectorEffect", "vector-effect"],
    ["vertAdvY", "vert-adv-y"],
    ["vertOriginX", "vert-origin-x"],
    ["vertOriginY", "vert-origin-y"],
    ["wordSpacing", "word-spacing"],
    ["writingMode", "writing-mode"],
    ["xmlnsXlink", "xmlns:xlink"],
    ["xHeight", "x-height"]
  ]), Aw = /^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;
  function Ql(e) {
    return Aw.test("" + e) ? "javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')" : e;
  }
  function Kn() {
  }
  var bu = null;
  function Su(e) {
    return e = e.target || e.srcElement || window, e.correspondingUseElement && (e = e.correspondingUseElement), e.nodeType === 3 ? e.parentNode : e;
  }
  var yr = null, br = null;
  function nv(e) {
    var t = mr(e);
    if (t && (e = t.stateNode)) {
      var n = e[Zt] || null;
      e: switch (e = t.stateNode, t.type) {
        case "input":
          if (pu(e, n.value, n.defaultValue, n.defaultValue, n.checked, n.defaultChecked, n.type, n.name), t = n.name, n.type === "radio" && t != null) {
            for (n = e; n.parentNode; ) n = n.parentNode;
            for (n = n.querySelectorAll('input[name="' + Cn("" + t) + '"][type="radio"]'), t = 0; t < n.length; t++) {
              var r = n[t];
              if (r !== e && r.form === e.form) {
                var s = r[Zt] || null;
                if (!s) throw Error(c(90));
                pu(r, s.value, s.defaultValue, s.defaultValue, s.checked, s.defaultChecked, s.type, s.name);
              }
            }
            for (t = 0; t < n.length; t++) r = n[t], r.form === e.form && Kh(r);
          }
          break e;
        case "textarea":
          Fh(e, n.value, n.defaultValue);
          break e;
        case "select":
          t = n.value, t != null && pr(e, !!n.multiple, t, !1);
      }
    }
  }
  var wu = !1;
  function av(e, t, n) {
    if (wu) return e(t, n);
    wu = !0;
    try {
      return e(t);
    } finally {
      if (wu = !1, (yr !== null || br !== null) && (Qs(), yr && (t = yr, e = br, br = yr = null, nv(t), e)))
        for (t = 0; t < e.length; t++) nv(e[t]);
    }
  }
  function Ai(e, t) {
    var n = e.stateNode;
    if (n === null) return null;
    var r = n[Zt] || null;
    if (r === null) return null;
    n = r[t];
    e: switch (t) {
      case "onClick":
      case "onClickCapture":
      case "onDoubleClick":
      case "onDoubleClickCapture":
      case "onMouseDown":
      case "onMouseDownCapture":
      case "onMouseMove":
      case "onMouseMoveCapture":
      case "onMouseUp":
      case "onMouseUpCapture":
      case "onMouseEnter":
        (r = !r.disabled) || (e = e.type, r = !(e === "button" || e === "input" || e === "select" || e === "textarea")), e = !r;
        break e;
      default:
        e = !1;
    }
    if (e) return null;
    if (n && typeof n != "function") throw Error(c(231, t, typeof n));
    return n;
  }
  var ba = !(typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u"), xu = !1;
  if (ba) try {
    var Ti = {};
    Object.defineProperty(Ti, "passive", { get: function() {
      xu = !0;
    } }), window.addEventListener("test", Ti, Ti), window.removeEventListener("test", Ti, Ti);
  } catch {
    xu = !1;
  }
  var Wa = null, Cu = null, Kl = null;
  function ov() {
    if (Kl) return Kl;
    var e, t = Cu, n = t.length, r, s = "value" in Wa ? Wa.value : Wa.textContent, u = s.length;
    for (e = 0; e < n && t[e] === s[e]; e++) ;
    var h = n - e;
    for (r = 1; r <= h && t[n - r] === s[u - r]; r++) ;
    return Kl = s.slice(e, 1 < r ? 1 - r : void 0);
  }
  function Zl(e) {
    var t = e.keyCode;
    return "charCode" in e ? (e = e.charCode, e === 0 && t === 13 && (e = 13)) : e = t, e === 10 && (e = 13), 32 <= e || e === 13 ? e : 0;
  }
  function Fl() {
    return !0;
  }
  function rv() {
    return !1;
  }
  function Yt(e) {
    function t(n, r, s, u, h) {
      this._reactName = n, this._targetInst = s, this.type = r, this.nativeEvent = u, this.target = h, this.currentTarget = null;
      for (var E in e) e.hasOwnProperty(E) && (n = e[E], this[E] = n ? n(u) : u[E]);
      return this.isDefaultPrevented = (u.defaultPrevented != null ? u.defaultPrevented : u.returnValue === !1) ? Fl : rv, this.isPropagationStopped = rv, this;
    }
    return k(t.prototype, {
      preventDefault: function() {
        this.defaultPrevented = !0;
        var n = this.nativeEvent;
        n && (n.preventDefault ? n.preventDefault() : typeof n.returnValue != "unknown" && (n.returnValue = !1), this.isDefaultPrevented = Fl);
      },
      stopPropagation: function() {
        var n = this.nativeEvent;
        n && (n.stopPropagation ? n.stopPropagation() : typeof n.cancelBubble != "unknown" && (n.cancelBubble = !0), this.isPropagationStopped = Fl);
      },
      persist: function() {
      },
      isPersistent: Fl
    }), t;
  }
  var Pa = {
    eventPhase: 0,
    bubbles: 0,
    cancelable: 0,
    timeStamp: function(e) {
      return e.timeStamp || Date.now();
    },
    defaultPrevented: 0,
    isTrusted: 0
  }, Jl = Yt(Pa), Ri = k({}, Pa, {
    view: 0,
    detail: 0
  }), Tw = Yt(Ri), Eu, Au, _i, es = k({}, Ri, {
    screenX: 0,
    screenY: 0,
    clientX: 0,
    clientY: 0,
    pageX: 0,
    pageY: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    getModifierState: Ru,
    button: 0,
    buttons: 0,
    relatedTarget: function(e) {
      return e.relatedTarget === void 0 ? e.fromElement === e.srcElement ? e.toElement : e.fromElement : e.relatedTarget;
    },
    movementX: function(e) {
      return "movementX" in e ? e.movementX : (e !== _i && (_i && e.type === "mousemove" ? (Eu = e.screenX - _i.screenX, Au = e.screenY - _i.screenY) : Au = Eu = 0, _i = e), Eu);
    },
    movementY: function(e) {
      return "movementY" in e ? e.movementY : Au;
    }
  }), iv = Yt(es), Rw = Yt(k({}, es, { dataTransfer: 0 })), Tu = Yt(k({}, Ri, { relatedTarget: 0 })), _w = Yt(k({}, Pa, {
    animationName: 0,
    elapsedTime: 0,
    pseudoElement: 0
  })), Nw = Yt(k({}, Pa, { clipboardData: function(e) {
    return "clipboardData" in e ? e.clipboardData : window.clipboardData;
  } })), lv = Yt(k({}, Pa, { data: 0 })), jw = {
    Esc: "Escape",
    Spacebar: " ",
    Left: "ArrowLeft",
    Up: "ArrowUp",
    Right: "ArrowRight",
    Down: "ArrowDown",
    Del: "Delete",
    Win: "OS",
    Menu: "ContextMenu",
    Apps: "ContextMenu",
    Scroll: "ScrollLock",
    MozPrintableKey: "Unidentified"
  }, Ow = {
    8: "Backspace",
    9: "Tab",
    12: "Clear",
    13: "Enter",
    16: "Shift",
    17: "Control",
    18: "Alt",
    19: "Pause",
    20: "CapsLock",
    27: "Escape",
    32: " ",
    33: "PageUp",
    34: "PageDown",
    35: "End",
    36: "Home",
    37: "ArrowLeft",
    38: "ArrowUp",
    39: "ArrowRight",
    40: "ArrowDown",
    45: "Insert",
    46: "Delete",
    112: "F1",
    113: "F2",
    114: "F3",
    115: "F4",
    116: "F5",
    117: "F6",
    118: "F7",
    119: "F8",
    120: "F9",
    121: "F10",
    122: "F11",
    123: "F12",
    144: "NumLock",
    145: "ScrollLock",
    224: "Meta"
  }, Mw = {
    Alt: "altKey",
    Control: "ctrlKey",
    Meta: "metaKey",
    Shift: "shiftKey"
  };
  function zw(e) {
    var t = this.nativeEvent;
    return t.getModifierState ? t.getModifierState(e) : (e = Mw[e]) ? !!t[e] : !1;
  }
  function Ru() {
    return zw;
  }
  var Dw = Yt(k({}, Ri, {
    key: function(e) {
      if (e.key) {
        var t = jw[e.key] || e.key;
        if (t !== "Unidentified") return t;
      }
      return e.type === "keypress" ? (e = Zl(e), e === 13 ? "Enter" : String.fromCharCode(e)) : e.type === "keydown" || e.type === "keyup" ? Ow[e.keyCode] || "Unidentified" : "";
    },
    code: 0,
    location: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    repeat: 0,
    locale: 0,
    getModifierState: Ru,
    charCode: function(e) {
      return e.type === "keypress" ? Zl(e) : 0;
    },
    keyCode: function(e) {
      return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
    },
    which: function(e) {
      return e.type === "keypress" ? Zl(e) : e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
    }
  })), sv = Yt(k({}, es, {
    pointerId: 0,
    width: 0,
    height: 0,
    pressure: 0,
    tangentialPressure: 0,
    tiltX: 0,
    tiltY: 0,
    twist: 0,
    pointerType: 0,
    isPrimary: 0
  })), kw = Yt(k({}, Pa, { submitter: 0 })), Lw = Yt(k({}, Ri, {
    touches: 0,
    targetTouches: 0,
    changedTouches: 0,
    altKey: 0,
    metaKey: 0,
    ctrlKey: 0,
    shiftKey: 0,
    getModifierState: Ru
  })), Hw = Yt(k({}, Pa, {
    propertyName: 0,
    elapsedTime: 0,
    pseudoElement: 0
  })), Bw = Yt(k({}, es, {
    deltaX: function(e) {
      return "deltaX" in e ? e.deltaX : "wheelDeltaX" in e ? -e.wheelDeltaX : 0;
    },
    deltaY: function(e) {
      return "deltaY" in e ? e.deltaY : "wheelDeltaY" in e ? -e.wheelDeltaY : "wheelDelta" in e ? -e.wheelDelta : 0;
    },
    deltaZ: 0,
    deltaMode: 0
  })), Uw = Yt(k({}, Pa, {
    newState: 0,
    oldState: 0,
    source: 0
  })), qw = [
    9,
    13,
    27,
    32
  ], _u = ba && "CompositionEvent" in window, Ni = null;
  ba && "documentMode" in document && (Ni = document.documentMode);
  var Vw = ba && "TextEvent" in window && !Ni, cv = ba && (!_u || Ni && 8 < Ni && 11 >= Ni), uv = " ", dv = !1;
  function fv(e, t) {
    switch (e) {
      case "keyup":
        return qw.indexOf(t.keyCode) !== -1;
      case "keydown":
        return t.keyCode !== 229;
      case "keypress":
      case "mousedown":
      case "focusout":
        return !0;
      default:
        return !1;
    }
  }
  function mv(e) {
    return e = e.detail, typeof e == "object" && "data" in e ? e.data : null;
  }
  var Sr = !1;
  function $w(e, t) {
    switch (e) {
      case "compositionend":
        return mv(t);
      case "keypress":
        return t.which !== 32 ? null : (dv = !0, uv);
      case "textInput":
        return e = t.data, e === uv && dv ? null : e;
      default:
        return null;
    }
  }
  function Yw(e, t) {
    if (Sr) return e === "compositionend" || !_u && fv(e, t) ? (e = ov(), Kl = Cu = Wa = null, Sr = !1, e) : null;
    switch (e) {
      case "paste":
        return null;
      case "keypress":
        if (!(t.ctrlKey || t.altKey || t.metaKey) || t.ctrlKey && t.altKey) {
          if (t.char && 1 < t.char.length) return t.char;
          if (t.which) return String.fromCharCode(t.which);
        }
        return null;
      case "compositionend":
        return cv && t.locale !== "ko" ? null : t.data;
      default:
        return null;
    }
  }
  var Gw = {
    color: !0,
    date: !0,
    datetime: !0,
    "datetime-local": !0,
    email: !0,
    month: !0,
    number: !0,
    password: !0,
    range: !0,
    search: !0,
    tel: !0,
    text: !0,
    time: !0,
    url: !0,
    week: !0
  };
  function hv(e) {
    var t = e && e.nodeName && e.nodeName.toLowerCase();
    return t === "input" ? !!Gw[e.type] : t === "textarea";
  }
  function vv(e, t, n, r) {
    yr ? br ? br.push(r) : br = [r] : yr = r, t = tc(t, "onChange"), 0 < t.length && (n = new Jl("onChange", "change", null, n, r), e.push({
      event: n,
      listeners: t
    }));
  }
  var ji = null, Oi = null;
  function Ww(e) {
    J0(e, 0);
  }
  function ts(e) {
    if (Kh(Ei(e))) return e;
  }
  function pv(e, t) {
    if (e === "change") return t;
  }
  var gv = !1;
  if (ba) {
    var Nu;
    if (ba) {
      var ju = "oninput" in document;
      if (!ju) {
        var yv = document.createElement("div");
        yv.setAttribute("oninput", "return;"), ju = typeof yv.oninput == "function";
      }
      Nu = ju;
    } else Nu = !1;
    gv = Nu && (!document.documentMode || 9 < document.documentMode);
  }
  function bv() {
    ji && (ji.detachEvent("onpropertychange", Sv), Oi = ji = null);
  }
  function Sv(e) {
    if (e.propertyName === "value" && ts(Oi)) {
      var t = [];
      vv(t, Oi, e, Su(e)), av(Ww, t);
    }
  }
  function Pw(e, t, n) {
    e === "focusin" ? (bv(), ji = t, Oi = n, ji.attachEvent("onpropertychange", Sv)) : e === "focusout" && bv();
  }
  function Iw(e) {
    if (e === "selectionchange" || e === "keyup" || e === "keydown") return ts(Oi);
  }
  function Xw(e, t) {
    if (e === "click") return ts(t);
  }
  function Qw(e, t) {
    if (e === "input" || e === "change") return ts(t);
  }
  function Kw(e, t) {
    return e === t && (e !== 0 || 1 / e === 1 / t) || e !== e && t !== t;
  }
  var mn = typeof Object.is == "function" ? Object.is : Kw;
  function Mi(e, t) {
    if (mn(e, t)) return !0;
    if (typeof e != "object" || e === null || typeof t != "object" || t === null) return !1;
    var n = Object.keys(e), r = Object.keys(t);
    if (n.length !== r.length) return !1;
    for (r = 0; r < n.length; r++) {
      var s = n[r];
      if (!bi.call(t, s) || !mn(e[s], t[s])) return !1;
    }
    return !0;
  }
  function Ou(e) {
    if (e = e || (typeof document < "u" ? document : void 0), typeof e > "u") return null;
    try {
      return e.activeElement || e.body;
    } catch {
      return e.body;
    }
  }
  function wv(e) {
    for (; e && e.firstChild; ) e = e.firstChild;
    return e;
  }
  function xv(e, t) {
    var n = wv(e);
    e = 0;
    for (var r; n; ) {
      if (n.nodeType === 3) {
        if (r = e + n.textContent.length, e <= t && r >= t) return {
          node: n,
          offset: t - e
        };
        e = r;
      }
      e: {
        for (; n; ) {
          if (n.nextSibling) {
            n = n.nextSibling;
            break e;
          }
          n = n.parentNode;
        }
        n = void 0;
      }
      n = wv(n);
    }
  }
  function Cv(e, t) {
    return e && t ? e === t ? !0 : e && e.nodeType === 3 ? !1 : t && t.nodeType === 3 ? Cv(e, t.parentNode) : "contains" in e ? e.contains(t) : e.compareDocumentPosition ? !!(e.compareDocumentPosition(t) & 16) : !1 : !1;
  }
  function Ev(e) {
    e = e != null && e.ownerDocument != null && e.ownerDocument.defaultView != null ? e.ownerDocument.defaultView : window;
    for (var t = Ou(e.document); t instanceof e.HTMLIFrameElement; ) {
      try {
        var n = typeof t.contentWindow.location.href == "string";
      } catch {
        n = !1;
      }
      if (n) e = t.contentWindow;
      else break;
      t = Ou(e.document);
    }
    return t;
  }
  function Mu(e) {
    var t = e && e.nodeName && e.nodeName.toLowerCase();
    return t && (t === "input" && (e.type === "text" || e.type === "search" || e.type === "tel" || e.type === "url" || e.type === "password") || t === "textarea" || e.contentEditable === "true");
  }
  var Zw = ba && "documentMode" in document && 11 >= document.documentMode, wr = null, zu = null, zi = null, Du = !1;
  function Av(e, t, n) {
    var r = n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
    Du || wr == null || wr !== Ou(r) || (r = wr, "selectionStart" in r && Mu(r) ? r = {
      start: r.selectionStart,
      end: r.selectionEnd
    } : (r = (r.ownerDocument && r.ownerDocument.defaultView || window).getSelection(), r = {
      anchorNode: r.anchorNode,
      anchorOffset: r.anchorOffset,
      focusNode: r.focusNode,
      focusOffset: r.focusOffset
    }), zi && Mi(zi, r) || (zi = r, r = tc(zu, "onSelect"), 0 < r.length && (t = new Jl("onSelect", "select", null, t, n), e.push({
      event: t,
      listeners: r
    }), t.target = wr)));
  }
  function No(e, t) {
    var n = {};
    return n[e.toLowerCase()] = t.toLowerCase(), n["Webkit" + e] = "webkit" + t, n["Moz" + e] = "moz" + t, n;
  }
  var xr = {
    animationend: No("Animation", "AnimationEnd"),
    animationiteration: No("Animation", "AnimationIteration"),
    animationstart: No("Animation", "AnimationStart"),
    transitionrun: No("Transition", "TransitionRun"),
    transitionstart: No("Transition", "TransitionStart"),
    transitioncancel: No("Transition", "TransitionCancel"),
    transitionend: No("Transition", "TransitionEnd")
  }, ku = {}, Tv = {};
  ba && (Tv = document.createElement("div").style, "AnimationEvent" in window || (delete xr.animationend.animation, delete xr.animationiteration.animation, delete xr.animationstart.animation), "TransitionEvent" in window || delete xr.transitionend.transition);
  function jo(e) {
    if (ku[e]) return ku[e];
    if (!xr[e]) return e;
    var t = xr[e], n;
    for (n in t) if (t.hasOwnProperty(n) && n in Tv) return ku[e] = t[n];
    return e;
  }
  var Rv = jo("animationend"), _v = jo("animationiteration"), Nv = jo("animationstart"), Fw = jo("transitionrun"), Jw = jo("transitionstart"), ex = jo("transitioncancel"), jv = jo("transitionend"), Ov = /* @__PURE__ */ new Map(), Lu = "abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error fullscreenChange fullscreenError gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");
  Lu.push("scrollEnd");
  function Hn(e, t) {
    Ov.set(e, t), _o(t, [e]);
  }
  var tx = 0;
  function Sa(e, t) {
    if (e.name != null && e.name !== "auto") return e.name;
    if (t.autoName !== null) return t.autoName;
    e = Vn.identifierPrefix;
    var n = tx++;
    return e = "_" + e + "t_" + n.toString(32) + "_", t.autoName = e;
  }
  function Mv(e) {
    if (e == null || typeof e == "string") return e;
    var t = null, n = $r;
    if (n !== null) for (var r = 0; r < n.length; r++) {
      var s = e[n[r]];
      if (s != null) {
        if (s === "none") return "none";
        t = t == null ? s : t + (" " + s);
      }
    }
    return t ?? e.default;
  }
  function wa(e, t) {
    return e = Mv(e), t = Mv(t), t == null ? e === "auto" ? null : e : t === "auto" ? null : t;
  }
  var ns = typeof reportError == "function" ? reportError : function(e) {
    if (typeof window == "object" && typeof window.ErrorEvent == "function") {
      var t = new window.ErrorEvent("error", {
        bubbles: !0,
        cancelable: !0,
        message: typeof e == "object" && e !== null && typeof e.message == "string" ? String(e.message) : String(e),
        error: e
      });
      if (!window.dispatchEvent(t)) return;
    } else if (typeof process == "object" && typeof process.emit == "function") {
      process.emit("uncaughtException", e);
      return;
    }
    console.error(e);
  }, En = [], Cr = 0, Hu = 0;
  function as() {
    for (var e = Cr, t = Hu = Cr = 0; t < e; ) {
      var n = En[t];
      En[t++] = null;
      var r = En[t];
      En[t++] = null;
      var s = En[t];
      En[t++] = null;
      var u = En[t];
      if (En[t++] = null, r !== null && s !== null) {
        var h = r.pending;
        h === null ? s.next = s : (s.next = h.next, h.next = s), r.pending = s;
      }
      u !== 0 && zv(n, s, u);
    }
  }
  function os(e, t, n, r) {
    En[Cr++] = e, En[Cr++] = t, En[Cr++] = n, En[Cr++] = r, Hu |= r, e.lanes |= r, e = e.alternate, e !== null && (e.lanes |= r);
  }
  function Bu(e, t, n, r) {
    return os(e, t, n, r), rs(e);
  }
  function Oo(e, t) {
    return os(e, null, null, t), rs(e);
  }
  function zv(e, t, n) {
    e.lanes |= n;
    var r = e.alternate;
    r !== null && (r.lanes |= n);
    for (var s = !1, u = e.return; u !== null; ) u.childLanes |= n, r = u.alternate, r !== null && (r.childLanes |= n), u.tag === 22 && (e = u.stateNode, e === null || e._visibility & 1 || (s = !0)), e = u, u = u.return;
    return e.tag === 3 ? (u = e.stateNode, s && t !== null && (s = 31 - dn(n), e = u.hiddenUpdates, r = e[s], r === null ? e[s] = [t] : r.push(t), t.lane = n | 536870912), u) : null;
  }
  function rs(e) {
    if (50 < tl) throw tl = 0, Xs = null, Error(c(185));
    for (var t = e.return; t !== null; ) e = t, t = e.return;
    return e.tag === 3 ? e.stateNode : null;
  }
  var Er = {};
  function nx(e, t, n, r) {
    this.tag = e, this.key = n, this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null, this.index = 0, this.refCleanup = this.ref = null, this.pendingProps = t, this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null, this.mode = r, this.subtreeFlags = this.flags = 0, this.deletions = null, this.childLanes = this.lanes = 0, this.alternate = null;
  }
  function Ft(e, t, n, r) {
    return new nx(e, t, n, r);
  }
  function Uu(e) {
    return e = e.prototype, !(!e || !e.isReactComponent);
  }
  function xa(e, t) {
    var n = e.alternate;
    return n === null ? (n = Ft(e.tag, t, e.key, e.mode), n.elementType = e.elementType, n.type = e.type, n.stateNode = e.stateNode, n.alternate = e, e.alternate = n) : (n.pendingProps = t, n.type = e.type, n.flags = 0, n.subtreeFlags = 0, n.deletions = null), n.flags = e.flags & 1206910976, n.childLanes = e.childLanes, n.lanes = e.lanes, n.child = e.child, n.memoizedProps = e.memoizedProps, n.memoizedState = e.memoizedState, n.updateQueue = e.updateQueue, t = e.dependencies, n.dependencies = t === null ? null : {
      lanes: t.lanes,
      firstContext: t.firstContext
    }, n.sibling = e.sibling, n.index = e.index, n.ref = e.ref, n.refCleanup = e.refCleanup, n;
  }
  function Dv(e, t) {
    e.flags &= 1206910978;
    var n = e.alternate;
    return n === null ? (e.childLanes = 0, e.lanes = t, e.child = null, e.subtreeFlags = 0, e.memoizedProps = null, e.memoizedState = null, e.updateQueue = null, e.dependencies = null, e.stateNode = null) : (e.childLanes = n.childLanes, e.lanes = n.lanes, e.child = n.child, e.subtreeFlags = 0, e.deletions = null, e.memoizedProps = n.memoizedProps, e.memoizedState = n.memoizedState, e.updateQueue = n.updateQueue, e.type = n.type, t = n.dependencies, e.dependencies = t === null ? null : {
      lanes: t.lanes,
      firstContext: t.firstContext
    }), e;
  }
  function is(e, t, n, r, s, u) {
    var h = 0;
    if (r = e, typeof r == "function") Uu(r) && (h = 1);
    else if (typeof r == "string") h = OC(e, n, rt.current) ? 26 : e === "html" || e === "head" || e === "body" ? 27 : 5;
    else e: switch (r) {
      case de:
        return e = Ft(31, n, t, s), e.elementType = de, e.lanes = u, e;
      case re:
        return Mo(n.children, s, u, t);
      case ne:
        h = 8, s |= 24;
        break;
      case F:
        return e = Ft(12, n, t, s | 2), e.elementType = F, e.lanes = u, e;
      case W:
        return e = Ft(13, n, t, s), e.elementType = W, e.lanes = u, e;
      case Z:
        return e = Ft(19, n, t, s), e.elementType = Z, e.lanes = u, e;
      case we:
      case M:
        return e = s | 32, e = Ft(30, n, t, e), e.elementType = M, e.lanes = u, e.stateNode = {
          autoName: null,
          paired: null,
          clones: null,
          ref: null
        }, e;
      default:
        if (typeof r == "object" && r !== null) switch (r.$$typeof) {
          case H:
            h = 10;
            break e;
          case me:
            h = 9;
            break e;
          case I:
            h = 11;
            break e;
          case ae:
            h = 14;
            break e;
          case be:
            h = 16, r = null;
            break e;
        }
        h = 29, n = Error(c(130, e === null ? "null" : typeof e, "")), r = null;
    }
    return t = Ft(h, n, t, s), t.elementType = e, t.type = r, t.lanes = u, t;
  }
  function Mo(e, t, n, r) {
    return e = Ft(7, e, r, t), e.lanes = n, e;
  }
  function qu(e, t, n) {
    return e = Ft(6, e, null, t), e.lanes = n, e;
  }
  function kv(e) {
    var t = Ft(18, null, null, 0);
    return t.stateNode = e, t;
  }
  function Vu(e, t, n) {
    return t = Ft(4, e.children !== null ? e.children : [], e.key, t), t.lanes = n, t.stateNode = {
      containerInfo: e.containerInfo,
      pendingChildren: null,
      implementation: e.implementation
    }, t;
  }
  var Lv = /* @__PURE__ */ new WeakMap();
  function An(e, t) {
    if (typeof e == "object" && e !== null) {
      var n = Lv.get(e);
      return n !== void 0 ? n : (t = {
        value: e,
        source: t,
        stack: Hl(t)
      }, Lv.set(e, t), t);
    }
    return {
      value: e,
      source: t,
      stack: Hl(t)
    };
  }
  var Ar = [], Tr = 0, ls = null, Di = 0, Tn = [], Rn = 0, Ia = null, Zn = 1, Fn = "";
  function Ca(e, t) {
    Ar[Tr++] = Di, Ar[Tr++] = ls, ls = e, Di = t;
  }
  function Hv(e, t, n) {
    Tn[Rn++] = Zn, Tn[Rn++] = Fn, Tn[Rn++] = Ia, Ia = e;
    var r = Zn;
    e = Fn;
    var s = 32 - dn(r) - 1;
    r &= ~(1 << s), n += 1;
    var u = 32 - dn(t) + s;
    if (30 < u) {
      var h = s - s % 5;
      u = (r & (1 << h) - 1).toString(32), r >>= h, s -= h, Zn = 1 << 32 - dn(t) + s | n << s | r, Fn = u + e;
    } else Zn = 1 << u | n << s | r, Fn = e;
  }
  function ss(e) {
    e.return !== null && (Ca(e, 1), Hv(e, 1, 0));
  }
  function $u(e) {
    for (; e === ls; ) ls = Ar[--Tr], Ar[Tr] = null, Di = Ar[--Tr], Ar[Tr] = null;
    for (; e === Ia; ) Ia = Tn[--Rn], Tn[Rn] = null, Fn = Tn[--Rn], Tn[Rn] = null, Zn = Tn[--Rn], Tn[Rn] = null;
  }
  function Bv(e, t) {
    Tn[Rn++] = Zn, Tn[Rn++] = Fn, Tn[Rn++] = Ia, Zn = t.id, Fn = t.overflow, Ia = e;
  }
  var Et = null, et = null, Me = !1, Xa = null, _n = !1, Yu = Error(c(519));
  function Qa(e) {
    throw ki(An(Error(c(418, 1 < arguments.length && arguments[1] !== void 0 && arguments[1] ? "text" : "HTML", "")), e)), Yu;
  }
  function Uv(e) {
    var t = e.stateNode, n = e.type, r = e.memoizedProps;
    switch (t[jt] = e, t[Zt] = r, n) {
      case "dialog":
        De("cancel", t), De("close", t);
        break;
      case "iframe":
      case "object":
      case "embed":
        De("load", t);
        break;
      case "video":
      case "audio":
        for (n = 0; n < al.length; n++) De(al[n], t);
        break;
      case "source":
        De("error", t);
        break;
      case "img":
      case "image":
      case "link":
        De("error", t), De("load", t);
        break;
      case "details":
        De("toggle", t);
        break;
      case "input":
        De("invalid", t), Zh(t, r.value, r.defaultValue, r.checked, r.defaultChecked, r.type, r.name, !0);
        break;
      case "select":
        De("invalid", t);
        break;
      case "textarea":
        De("invalid", t), Jh(t, r.value, r.defaultValue, r.children);
    }
    n = r.children, typeof n != "string" && typeof n != "number" && typeof n != "bigint" || t.textContent === "" + n || r.suppressHydrationWarning === !0 || og(t.textContent, n) ? (r.popover != null && (De("beforetoggle", t), De("toggle", t)), r.onScroll != null && De("scroll", t), r.onScrollEnd != null && De("scrollend", t), r.onClick != null && (t.onclick = Kn), t = !0) : t = !1, t || Qa(e, !0);
  }
  function cs(e) {
    for (Et = e.return; Et; ) switch (Et.tag) {
      case 5:
      case 31:
      case 13:
        _n = !1;
        return;
      case 27:
      case 3:
        _n = !0;
        return;
      default:
        Et = Et.return;
    }
  }
  function Rr(e) {
    if (e !== Et) return !1;
    if (!Me) return cs(e), Me = !0, !1;
    var t = e.tag, n;
    if ((n = t !== 3 && t !== 27) && ((n = t === 5) && (n = e.type, n = !(n !== "form" && n !== "button") || bf(e.type, e.memoizedProps)), n = !n), n && et && Qa(e), cs(e), t === 13) {
      if (e = e.memoizedState, e = e !== null ? e.dehydrated : null, !e) throw Error(c(317));
      et = Eg(e);
    } else if (t === 31) {
      if (e = e.memoizedState, e = e !== null ? e.dehydrated : null, !e) throw Error(c(317));
      et = Eg(e);
    } else t === 27 ? (t = et, co(e.type) ? (e = _f, _f = null, et = e) : et = t) : et = Et ? On(e.stateNode.nextSibling) : null;
    return !0;
  }
  function zo() {
    et = Et = null, Me = !1;
  }
  function Gu() {
    var e = Xa;
    return e !== null && (tn === null ? tn = e : tn.push.apply(tn, e), Xa = null), e;
  }
  function ki(e) {
    Xa === null ? Xa = [e] : Xa.push(e);
  }
  var Wu = je(null), Do = null, Ea = null;
  function Ka(e, t, n) {
    Oe(Wu, t._currentValue), t._currentValue = n;
  }
  function Aa(e) {
    e._currentValue = Wu.current, Be(Wu);
  }
  function us(e, t, n) {
    for (; e !== null; ) {
      var r = e.alternate;
      if ((e.childLanes & t) !== t ? (e.childLanes |= t, r !== null && (r.childLanes |= t)) : r !== null && (r.childLanes & t) !== t && (r.childLanes |= t), e === n) break;
      e = e.return;
    }
  }
  function Pu(e, t, n, r) {
    var s = e.child;
    for (s !== null && (s.return = e); s !== null; ) {
      var u = s.dependencies;
      if (u !== null) {
        var h = s.child;
        u = u.firstContext;
        e: for (; u !== null; ) {
          var E = u;
          u = s;
          for (var N = 0; N < t.length; N++) if (E.context === t[N]) {
            u.lanes |= n, E = u.alternate, E !== null && (E.lanes |= n), us(u.return, n, e), r || (h = null);
            break e;
          }
          u = E.next;
        }
      } else if (s.tag === 18) {
        if (h = s.return, h === null) throw Error(c(341));
        h.lanes |= n, u = h.alternate, u !== null && (u.lanes |= n), us(h, n, e), h = null;
      } else s.tag === 13 && s.memoizedState !== null && s.memoizedState.dehydrated === null ? (s.lanes |= n, h = s.alternate, h !== null && (h.lanes |= n), us(s.return, n, e), h = s.child, h = h !== null ? h.sibling : null) : h = s.child;
      if (h !== null) h.return = s;
      else for (h = s; h !== null; ) {
        if (h === e) {
          h = null;
          break;
        }
        if (s = h.sibling, s !== null) {
          s.return = h.return, h = s;
          break;
        }
        h = h.return;
      }
      s = h;
    }
  }
  function ko(e, t, n, r) {
    e = null;
    for (var s = t, u = !1; s !== null; ) {
      if (!u) {
        if ((s.flags & 524288) !== 0) u = !0;
        else if ((s.flags & 262144) !== 0) break;
      }
      if (s.tag === 10) {
        var h = s.alternate;
        if (h === null) throw Error(c(387));
        if (h = h.memoizedProps, h !== null) {
          var E = s.type;
          mn(s.pendingProps.value, h.value) || (e !== null ? e.push(E) : e = [E]);
        }
      } else if (s === Nt.current) {
        if (h = s.alternate, h === null) throw Error(c(387));
        h.memoizedState.memoizedState !== s.memoizedState.memoizedState && (e !== null ? e.push(Fr) : e = [Fr]);
      }
      s = s.return;
    }
    return e !== null && Pu(t, e, n, r), t.flags |= 262144, e !== null;
  }
  function ds(e) {
    for (e = e.firstContext; e !== null; ) {
      if (!mn(e.context._currentValue, e.memoizedValue)) return !0;
      e = e.next;
    }
    return !1;
  }
  function Lo(e) {
    Do = e, Ea = null, e = e.dependencies, e !== null && (e.firstContext = null);
  }
  function Ot(e) {
    return qv(Do, e);
  }
  function fs(e, t) {
    return Do === null && Lo(e), qv(e, t);
  }
  function qv(e, t) {
    var n = t._currentValue;
    if (t = {
      context: t,
      memoizedValue: n,
      next: null
    }, Ea === null) {
      if (e === null) throw Error(c(308));
      Ea = t, e.dependencies = {
        lanes: 0,
        firstContext: t
      }, e.flags |= 524288;
    } else Ea = Ea.next = t;
    return n;
  }
  var ax = typeof AbortController < "u" ? AbortController : function() {
    var e = [], t = this.signal = {
      aborted: !1,
      addEventListener: function(n, r) {
        e.push(r);
      }
    };
    this.abort = function() {
      t.aborted = !0, e.forEach(function(n) {
        return n();
      });
    };
  }, ox = o.unstable_scheduleCallback, rx = o.unstable_NormalPriority, ft = {
    $$typeof: H,
    Consumer: null,
    Provider: null,
    _currentValue: null,
    _currentValue2: null,
    _threadCount: 0
  };
  function Iu() {
    return {
      controller: new ax(),
      data: /* @__PURE__ */ new Map(),
      refCount: 0
    };
  }
  function Li(e) {
    e.refCount--, e.refCount === 0 && ox(rx, function() {
      e.controller.abort();
    });
  }
  function Vv(e, t) {
    if ((e.pendingLanes & 4194048) !== 0) {
      var n = e.transitionTypes;
      for (n === null && (n = e.transitionTypes = []), e = 0; e < t.length; e++) {
        var r = t[e];
        n.indexOf(r) === -1 && n.push(r);
      }
    }
  }
  var Hi = null;
  function ix(e) {
    var t = e.transitionTypes;
    return e.transitionTypes = null, t;
  }
  var Bi = null, Xu = 0, Ho = 0, _r = null;
  function lx(e, t) {
    if (Bi === null) {
      var n = Bi = [];
      Xu = 0, Ho = df(), _r = {
        status: "pending",
        value: void 0,
        then: function(r) {
          n.push(r);
        }
      };
    }
    return Xu++, t.then($v, $v), t;
  }
  function $v() {
    if (--Xu === 0 && (Hi = null, Bi !== null)) {
      _r !== null && (_r.status = "fulfilled");
      var e = Bi;
      Bi = null, Ho = 0, _r = null;
      for (var t = 0; t < e.length; t++) (0, e[t])();
    }
  }
  function sx(e, t) {
    var n = [], r = {
      status: "pending",
      value: null,
      reason: null,
      then: function(s) {
        n.push(s);
      }
    };
    return e.then(function() {
      r.status = "fulfilled", r.value = t;
      for (var s = 0; s < n.length; s++) (0, n[s])(t);
    }, function(s) {
      for (r.status = "rejected", r.reason = s, s = 0; s < n.length; s++) (0, n[s])(void 0);
    }), r;
  }
  var Yv = ce.S;
  ce.S = function(e, t) {
    if (M0 = $t(), typeof t == "object" && t !== null && typeof t.then == "function" && lx(e, t), Hi !== null) for (var n = Pr; n !== null; ) Vv(n, Hi), n = n.next;
    if (n = e.types, n !== null) {
      for (var r = Pr; r !== null; ) Vv(r, n), r = r.next;
      if (Ho !== 0) {
        r = Hi, r === null && (r = Hi = []);
        for (var s = 0; s < n.length; s++) {
          var u = n[s];
          r.indexOf(u) === -1 && r.push(u);
        }
      }
    }
    Yv !== null && Yv(e, t);
  };
  var Bo = je(null);
  function Qu() {
    var e = Bo.current;
    return e !== null ? e : Je.pooledCache;
  }
  function ms(e, t) {
    t === null ? Oe(Bo, Bo.current) : Oe(Bo, t.pool);
  }
  function Gv() {
    var e = Qu();
    return e === null ? null : {
      parent: ft._currentValue,
      pool: e
    };
  }
  var Nr = Error(c(460)), Ku = Error(c(474)), hs = Error(c(542)), vs = { then: function() {
  } };
  function Wv(e) {
    return e = e.status, e === "fulfilled" || e === "rejected";
  }
  function Pv(e, t, n) {
    switch (n = e[n], n === void 0 ? e.push(t) : n !== t && (t.then(Kn, Kn), t = n), t.status) {
      case "fulfilled":
        return t.value;
      case "rejected":
        throw e = t.reason, Xv(e), e === void 0 && !("reason" in t) ? Error(c(600)) : e;
      default:
        if (typeof t.status == "string") t.then(Kn, Kn);
        else {
          if (e = Je, e !== null && 100 < e.shellSuspendCounter) throw Error(c(482));
          e = t, e.status = "pending", e.then(function(r) {
            if (t.status === "pending") {
              var s = t;
              s.status = "fulfilled", s.value = r;
            }
          }, function(r) {
            if (t.status === "pending") {
              var s = t;
              s.status = "rejected", s.reason = r;
            }
          });
        }
        switch (t.status) {
          case "fulfilled":
            return t.value;
          case "rejected":
            throw e = t.reason, Xv(e), e;
        }
        throw qo = t, Nr;
    }
  }
  function Uo(e) {
    try {
      var t = e._init;
      return t(e._payload);
    } catch (n) {
      throw n !== null && typeof n == "object" && typeof n.then == "function" ? (qo = n, Nr) : n;
    }
  }
  var qo = null;
  function Iv() {
    if (qo === null) throw Error(c(459));
    var e = qo;
    return qo = null, e;
  }
  function Xv(e) {
    if (e === Nr || e === hs) throw Error(c(483));
  }
  var jr = null, Ui = 0;
  function ps(e) {
    var t = Ui;
    return Ui += 1, jr === null && (jr = []), Pv(jr, e, t);
  }
  function Za(e, t) {
    t = t.props.ref, e.ref = t !== void 0 ? t : null;
  }
  function gs(e, t) {
    throw t.$$typeof === Q ? Error(c(525)) : (e = Object.prototype.toString.call(t), Error(c(31, e === "[object Object]" ? "object with keys {" + Object.keys(t).join(", ") + "}" : e)));
  }
  function Qv(e) {
    function t(U, D) {
      if (e) {
        var Y = U.deletions;
        Y === null ? (U.deletions = [D], U.flags |= 16) : Y.push(D);
      }
    }
    function n(U, D) {
      if (!e) return null;
      for (; D !== null; ) t(U, D), D = D.sibling;
      return null;
    }
    function r(U) {
      for (var D = /* @__PURE__ */ new Map(); U !== null; ) U.key === null ? D.set(U.index, U) : D.set(U.key, U), U = U.sibling;
      return D;
    }
    function s(U, D) {
      return U = xa(U, D), U.index = 0, U.sibling = null, U;
    }
    function u(U, D, Y) {
      return U.index = Y, e ? (Y = U.alternate, Y !== null ? (Y = Y.index, Y < D ? (U.flags |= 2, D) : Y) : (U.flags |= 134217730, D)) : (U.flags |= 1048576, D);
    }
    function h(U) {
      return e && U.alternate === null && (U.flags |= 134217730), U;
    }
    function E(U, D, Y, J) {
      return D === null || D.tag !== 6 ? (D = qu(Y, U.mode, J), D.return = U, D) : (D = s(D, Y), D.return = U, D);
    }
    function N(U, D, Y, J) {
      var ge = Y.type;
      return ge === re ? (U = P(U, D, Y.props.children, J, Y.key), Za(U, Y), U) : D !== null && (D.elementType === ge || typeof ge == "object" && ge !== null && ge.$$typeof === be && Uo(ge) === D.type) ? (D = s(D, Y.props), Za(D, Y), D.return = U, D) : (D = is(Y.type, Y.key, Y.props, null, U.mode, J), Za(D, Y), D.return = U, D);
    }
    function q(U, D, Y, J) {
      return D === null || D.tag !== 4 || D.stateNode.containerInfo !== Y.containerInfo || D.stateNode.implementation !== Y.implementation ? (D = Vu(Y, U.mode, J), D.return = U, D) : (D = s(D, Y.children || []), D.return = U, D);
    }
    function P(U, D, Y, J, ge) {
      return D === null || D.tag !== 7 ? (D = Mo(Y, U.mode, J, ge), D.return = U, D) : (D = s(D, Y), D.return = U, D);
    }
    function ee(U, D, Y) {
      if (typeof D == "string" && D !== "" || typeof D == "number" || typeof D == "bigint") return D = qu("" + D, U.mode, Y), D.return = U, D;
      if (typeof D == "object" && D !== null) {
        switch (D.$$typeof) {
          case X:
            return Y = is(D.type, D.key, D.props, null, U.mode, Y), Za(Y, D), Y.return = U, Y;
          case oe:
            return D = Vu(D, U.mode, Y), D.return = U, D;
          case be:
            return D = Uo(D), ee(U, D, Y);
        }
        if (ye(D) || le(D)) return D = Mo(D, U.mode, Y, null), D.return = U, D;
        if (typeof D.then == "function") return ee(U, ps(D), Y);
        if (D.$$typeof === H) return ee(U, fs(U, D), Y);
        gs(U, D);
      }
      return null;
    }
    function B(U, D, Y, J) {
      var ge = D !== null ? D.key : null;
      if (typeof Y == "string" && Y !== "" || typeof Y == "number" || typeof Y == "bigint") return ge !== null ? null : E(U, D, "" + Y, J);
      if (typeof Y == "object" && Y !== null) {
        switch (Y.$$typeof) {
          case X:
            return Y.key === ge ? N(U, D, Y, J) : null;
          case oe:
            return Y.key === ge ? q(U, D, Y, J) : null;
          case be:
            return Y = Uo(Y), B(U, D, Y, J);
        }
        if (ye(Y) || le(Y)) return ge !== null ? null : P(U, D, Y, J, null);
        if (typeof Y.then == "function") return B(U, D, ps(Y), J);
        if (Y.$$typeof === H) return B(U, D, fs(U, Y), J);
        gs(U, Y);
      }
      return null;
    }
    function G(U, D, Y, J, ge) {
      if (typeof J == "string" && J !== "" || typeof J == "number" || typeof J == "bigint") return U = U.get(Y) || null, E(D, U, "" + J, ge);
      if (typeof J == "object" && J !== null) {
        switch (J.$$typeof) {
          case X:
            return U = U.get(J.key === null ? Y : J.key) || null, N(D, U, J, ge);
          case oe:
            return U = U.get(J.key === null ? Y : J.key) || null, q(D, U, J, ge);
          case be:
            return J = Uo(J), G(U, D, Y, J, ge);
        }
        if (ye(J) || le(J)) return U = U.get(Y) || null, P(D, U, J, ge, null);
        if (typeof J.then == "function") return G(U, D, Y, ps(J), ge);
        if (J.$$typeof === H) return G(U, D, Y, fs(D, J), ge);
        gs(D, J);
      }
      return null;
    }
    function fe(U, D, Y, J) {
      for (var ge = null, He = null, Ee = D, Re = D = 0, vt = null; Ee !== null && Re < Y.length; Re++) {
        Ee.index > Re ? (vt = Ee, Ee = null) : vt = Ee.sibling;
        var Ue = B(U, Ee, Y[Re], J);
        if (Ue === null) {
          Ee === null && (Ee = vt);
          break;
        }
        e && Ee && Ue.alternate === null && t(U, Ee), D = u(Ue, D, Re), He === null ? ge = Ue : He.sibling = Ue, He = Ue, Ee = vt;
      }
      if (Re === Y.length) return n(U, Ee), Me && Ca(U, Re), ge;
      if (Ee === null) {
        for (; Re < Y.length; Re++) Ee = ee(U, Y[Re], J), Ee !== null && (D = u(Ee, D, Re), He === null ? ge = Ee : He.sibling = Ee, He = Ee);
        return Me && Ca(U, Re), ge;
      }
      for (Ee = r(Ee); Re < Y.length; Re++) vt = G(Ee, U, Re, Y[Re], J), vt !== null && (e && (Ue = vt.alternate, Ue !== null && Ee.delete(Ue.key === null ? Re : Ue.key)), D = u(vt, D, Re), He === null ? ge = vt : He.sibling = vt, He = vt);
      return e && Ee.forEach(function(vo) {
        return t(U, vo);
      }), Me && Ca(U, Re), ge;
    }
    function Se(U, D, Y, J) {
      if (Y == null) throw Error(c(151));
      for (var ge = null, He = null, Ee = D, Re = D = 0, vt = null, Ue = Y.next(); Ee !== null && !Ue.done; Re++, Ue = Y.next()) {
        Ee.index > Re ? (vt = Ee, Ee = null) : vt = Ee.sibling;
        var vo = B(U, Ee, Ue.value, J);
        if (vo === null) {
          Ee === null && (Ee = vt);
          break;
        }
        e && Ee && vo.alternate === null && t(U, Ee), D = u(vo, D, Re), He === null ? ge = vo : He.sibling = vo, He = vo, Ee = vt;
      }
      if (Ue.done) return n(U, Ee), Me && Ca(U, Re), ge;
      if (Ee === null) {
        for (; !Ue.done; Re++, Ue = Y.next()) Ue = ee(U, Ue.value, J), Ue !== null && (D = u(Ue, D, Re), He === null ? ge = Ue : He.sibling = Ue, He = Ue);
        return Me && Ca(U, Re), ge;
      }
      for (Ee = r(Ee); !Ue.done; Re++, Ue = Y.next()) Ue = G(Ee, U, Re, Ue.value, J), Ue !== null && (e && (vt = Ue.alternate, vt !== null && Ee.delete(vt.key === null ? Re : vt.key)), D = u(Ue, D, Re), He === null ? ge = Ue : He.sibling = Ue, He = Ue);
      return e && Ee.forEach(function(PC) {
        return t(U, PC);
      }), Me && Ca(U, Re), ge;
    }
    function Ne(U, D, Y, J) {
      if (typeof Y == "object" && Y !== null && Y.type === re && Y.key === null && Y.props.ref === void 0 && (Y = Y.props.children), typeof Y == "object" && Y !== null) {
        switch (Y.$$typeof) {
          case X:
            e: {
              for (var ge = Y.key; D !== null; ) {
                if (D.key === ge) {
                  if (ge = Y.type, ge === re) {
                    if (D.tag === 7) {
                      n(U, D.sibling), J = s(D, Y.props.children), Za(J, Y), J.return = U, U = J;
                      break e;
                    }
                  } else if (D.elementType === ge || typeof ge == "object" && ge !== null && ge.$$typeof === be && Uo(ge) === D.type) {
                    n(U, D.sibling), J = s(D, Y.props), Za(J, Y), J.return = U, U = J;
                    break e;
                  }
                  n(U, D);
                  break;
                } else t(U, D);
                D = D.sibling;
              }
              Y.type === re ? (J = Mo(Y.props.children, U.mode, J, Y.key), Za(J, Y), J.return = U, U = J) : (J = is(Y.type, Y.key, Y.props, null, U.mode, J), Za(J, Y), J.return = U, U = J);
            }
            return h(U);
          case oe:
            e: {
              for (ge = Y.key; D !== null; ) {
                if (D.key === ge) if (D.tag === 4 && D.stateNode.containerInfo === Y.containerInfo && D.stateNode.implementation === Y.implementation) {
                  n(U, D.sibling), J = s(D, Y.children || []), J.return = U, U = J;
                  break e;
                } else {
                  n(U, D);
                  break;
                }
                else t(U, D);
                D = D.sibling;
              }
              J = Vu(Y, U.mode, J), J.return = U, U = J;
            }
            return h(U);
          case be:
            return Y = Uo(Y), Ne(U, D, Y, J);
        }
        if (ye(Y)) return fe(U, D, Y, J);
        if (le(Y)) {
          if (ge = le(Y), typeof ge != "function") throw Error(c(150));
          return Y = ge.call(Y), Se(U, D, Y, J);
        }
        if (typeof Y.then == "function") return Ne(U, D, ps(Y), J);
        if (Y.$$typeof === H) return Ne(U, D, fs(U, Y), J);
        gs(U, Y);
      }
      return typeof Y == "string" && Y !== "" || typeof Y == "number" || typeof Y == "bigint" ? (Y = "" + Y, D !== null && D.tag === 6 ? (n(U, D.sibling), J = s(D, Y), J.return = U, U = J) : (n(U, D), J = qu(Y, U.mode, J), J.return = U, U = J), h(U)) : n(U, D);
    }
    return function(U, D, Y, J) {
      try {
        Ui = 0;
        var ge = Ne(U, D, Y, J);
        return jr = null, ge;
      } catch (Ee) {
        if (Ee === Nr || Ee === hs) throw Ee;
        var He = Ft(29, Ee, null, U.mode);
        return He.lanes = J, He.return = U, He;
      }
    };
  }
  var Vo = Qv(!0), Kv = Qv(!1), Fa = !1;
  function Zu(e) {
    e.updateQueue = {
      baseState: e.memoizedState,
      firstBaseUpdate: null,
      lastBaseUpdate: null,
      shared: {
        pending: null,
        lanes: 0,
        hiddenCallbacks: null
      },
      callbacks: null
    };
  }
  function Fu(e, t) {
    e = e.updateQueue, t.updateQueue === e && (t.updateQueue = {
      baseState: e.baseState,
      firstBaseUpdate: e.firstBaseUpdate,
      lastBaseUpdate: e.lastBaseUpdate,
      shared: e.shared,
      callbacks: null
    });
  }
  function $o(e) {
    return {
      lane: e,
      tag: 0,
      payload: null,
      callback: null,
      next: null
    };
  }
  function Yo(e, t, n) {
    var r = e.updateQueue;
    if (r === null) return null;
    if (r = r.shared, (Ge & 2) !== 0) {
      var s = r.pending;
      return s === null ? t.next = t : (t.next = s.next, s.next = t), r.pending = t, t = rs(e), zv(e, null, n), t;
    }
    return os(e, r, t, n), rs(e);
  }
  function qi(e, t, n) {
    if (t = t.updateQueue, t !== null && (t = t.shared, (n & 4194048) !== 0)) {
      var r = t.lanes;
      r &= e.pendingLanes, n |= r, t.lanes = n, Lh(e, n);
    }
  }
  function Ju(e, t) {
    var n = e.updateQueue, r = e.alternate;
    if (r !== null && (r = r.updateQueue, n === r)) {
      var s = null, u = null;
      if (n = n.firstBaseUpdate, n !== null) {
        do {
          var h = {
            lane: n.lane,
            tag: n.tag,
            payload: n.payload,
            callback: null,
            next: null
          };
          u === null ? s = u = h : u = u.next = h, n = n.next;
        } while (n !== null);
        u === null ? s = u = t : u = u.next = t;
      } else s = u = t;
      n = {
        baseState: r.baseState,
        firstBaseUpdate: s,
        lastBaseUpdate: u,
        shared: r.shared,
        callbacks: r.callbacks
      }, e.updateQueue = n;
      return;
    }
    e = n.lastBaseUpdate, e === null ? n.firstBaseUpdate = t : e.next = t, n.lastBaseUpdate = t;
  }
  var ed = !1;
  function Vi() {
    if (ed) {
      var e = _r;
      if (e !== null) throw e;
    }
  }
  function $i(e, t, n, r) {
    ed = !1;
    var s = e.updateQueue;
    Fa = !1;
    var u = s.firstBaseUpdate, h = s.lastBaseUpdate, E = s.shared.pending;
    if (E !== null) {
      s.shared.pending = null;
      var N = E, q = N.next;
      N.next = null, h === null ? u = q : h.next = q, h = N;
      var P = e.alternate;
      P !== null && (P = P.updateQueue, E = P.lastBaseUpdate, E !== h && (E === null ? P.firstBaseUpdate = q : E.next = q, P.lastBaseUpdate = N));
    }
    if (u !== null) {
      var ee = s.baseState;
      h = 0, P = q = N = null, E = u;
      do {
        var B = E.lane & -536870913, G = B !== E.lane;
        if (G ? (Le & B) === B : (r & B) === B) {
          B !== 0 && B === Ho && (ed = !0), P !== null && (P = P.next = {
            lane: 0,
            tag: E.tag,
            payload: E.payload,
            callback: null,
            next: null
          });
          e: {
            var fe = e, Se = E;
            B = t;
            var Ne = n;
            switch (Se.tag) {
              case 1:
                if (fe = Se.payload, typeof fe == "function") {
                  ee = fe.call(Ne, ee, B);
                  break e;
                }
                ee = fe;
                break e;
              case 3:
                fe.flags = fe.flags & -65537 | 128;
              case 0:
                if (fe = Se.payload, B = typeof fe == "function" ? fe.call(Ne, ee, B) : fe, B == null) break e;
                ee = k({}, ee, B);
                break e;
              case 2:
                Fa = !0;
            }
          }
          B = E.callback, B !== null && (e.flags |= 64, G && (e.flags |= 8192), G = s.callbacks, G === null ? s.callbacks = [B] : G.push(B));
        } else G = {
          lane: B,
          tag: E.tag,
          payload: E.payload,
          callback: E.callback,
          next: null
        }, P === null ? (q = P = G, N = ee) : P = P.next = G, h |= B;
        if (E = E.next, E === null) {
          if (E = s.shared.pending, E === null) break;
          G = E, E = G.next, G.next = null, s.lastBaseUpdate = G, s.shared.pending = null;
        }
      } while (!0);
      P === null && (N = ee), s.baseState = N, s.firstBaseUpdate = q, s.lastBaseUpdate = P, u === null && (s.shared.lanes = 0), ro |= h, e.lanes = h, e.memoizedState = ee;
    }
  }
  function Zv(e, t) {
    if (typeof e != "function") throw Error(c(191, e));
    e.call(t);
  }
  function Fv(e, t) {
    var n = e.callbacks;
    if (n !== null) for (e.callbacks = null, e = 0; e < n.length; e++) Zv(n[e], t);
  }
  var Ja = je(null), ys = je(0);
  function Jv(e, t) {
    e = ja, Oe(ys, e), Oe(Ja, t), ja = e | t.baseLanes;
  }
  function td() {
    Oe(ys, ja), Oe(Ja, Ja.current);
  }
  function nd() {
    ja = ys.current, Be(Ja), Be(ys);
  }
  var Mt = je(null), Ut = null;
  function eo(e) {
    var t = e.alternate;
    Oe(zt, zt.current & 1), Oe(Mt, e), Ut === null && (t === null || Ja.current !== null || t.memoizedState !== null) && (Ut = e);
  }
  function ad(e) {
    Oe(zt, zt.current), Oe(Mt, e), Ut === null && (Ut = e);
  }
  function ep(e) {
    e.tag === 22 ? (Oe(zt, zt.current), Oe(Mt, e), Ut === null && (Ut = e)) : to();
  }
  function to() {
    Oe(zt, zt.current), Oe(Mt, Mt.current);
  }
  function hn(e) {
    Be(Mt), Ut === e && (Ut = null), Be(zt);
  }
  var zt = je(0);
  function Yi(e, t) {
    Oe(Mt, Mt.current), Oe(zt, t);
  }
  function od(e) {
    Be(zt), Be(Mt), Ut === e && (Ut = null);
  }
  function bs(e) {
    for (var t = e; t !== null; ) {
      if (t.tag === 13) {
        var n = t.memoizedState;
        if (n !== null && (n = n.dehydrated, n === null || Tf(n) || Rf(n))) return t;
      } else if (t.tag === 19 && t.memoizedProps.revealOrder !== "independent") {
        if ((t.flags & 128) !== 0) return t;
      } else if (t.child !== null) {
        t.child.return = t, t = t.child;
        continue;
      }
      if (t === e) break;
      for (; t.sibling === null; ) {
        if (t.return === null || t.return === e) return null;
        t = t.return;
      }
      t.sibling.return = t.return, t = t.sibling;
    }
    return null;
  }
  var Ta = 0, _e = null, Fe = null, mt = null, Ss = !1, Or = !1, Go = !1, ws = 0, Gi = 0, Mr = null, cx = 0;
  function lt() {
    throw Error(c(321));
  }
  function rd(e, t) {
    if (t === null) return !1;
    for (var n = 0; n < t.length && n < e.length; n++) if (!mn(e[n], t[n])) return !1;
    return !0;
  }
  function id(e, t, n, r, s, u) {
    return Ta = u, _e = t, t.memoizedState = null, t.updateQueue = null, t.lanes = 0, ce.H = e === null || e.memoizedState === null ? Hp : Bp, Go = !1, u = n(r, s), Go = !1, Or && (u = np(t, n, r, s)), tp(e), u;
  }
  function tp(e) {
    ce.H = _s;
    var t = Fe !== null && Fe.next !== null;
    if (Ta = 0, mt = Fe = _e = null, Ss = !1, Gi = 0, Mr = null, t) throw Error(c(300));
    e === null || ht || (e = e.dependencies, e !== null && ds(e) && (ht = !0));
  }
  function np(e, t, n, r) {
    _e = e;
    var s = 0;
    do {
      if (Or && (Mr = null), Gi = 0, Or = !1, 25 <= s) throw Error(c(301));
      if (s += 1, mt = Fe = null, e.updateQueue != null) {
        var u = e.updateQueue;
        u.lastEffect = null, u.events = null, u.stores = null, u.memoCache != null && (u.memoCache.index = 0);
      }
      ce.H = gx, u = t(n, r);
    } while (Or);
    return u;
  }
  function ux() {
    var e = ce.H, t = e.useState()[0];
    return t = typeof t.then == "function" ? Wi(t) : t, e = e.useState()[0], (Fe !== null ? Fe.memoizedState : null) !== e && (_e.flags |= 1024), t;
  }
  function ld() {
    var e = ws !== 0;
    return ws = 0, e;
  }
  function sd(e, t, n) {
    t.updateQueue = e.updateQueue, t.flags &= -2053, e.lanes &= ~n;
  }
  function cd(e) {
    if (Ss) {
      for (e = e.memoizedState; e !== null; ) {
        var t = e.queue;
        t !== null && (t.pending = null), e = e.next;
      }
      Ss = !1;
    }
    Ta = 0, mt = Fe = _e = null, Or = !1, Gi = ws = 0, Mr = null;
  }
  function Gt() {
    var e = {
      memoizedState: null,
      baseState: null,
      baseQueue: null,
      queue: null,
      next: null
    };
    return mt === null ? _e.memoizedState = mt = e : mt = mt.next = e, mt;
  }
  function ut() {
    if (Fe === null) {
      var e = _e.alternate;
      e = e !== null ? e.memoizedState : null;
    } else e = Fe.next;
    var t = mt === null ? _e.memoizedState : mt.next;
    if (t !== null) mt = t, Fe = e;
    else {
      if (e === null)
        throw _e.alternate === null ? Error(c(467)) : Error(c(310));
      Fe = e, e = {
        memoizedState: Fe.memoizedState,
        baseState: Fe.baseState,
        baseQueue: Fe.baseQueue,
        queue: Fe.queue,
        next: null
      }, mt === null ? _e.memoizedState = mt = e : mt = mt.next = e;
    }
    return mt;
  }
  function xs() {
    return {
      lastEffect: null,
      events: null,
      stores: null,
      memoCache: null
    };
  }
  function Wi(e) {
    var t = Gi;
    return Gi += 1, Mr === null && (Mr = []), e = Pv(Mr, e, t), t = _e, (mt === null ? t.memoizedState : mt.next) === null && (t = t.alternate, ce.H = t === null || t.memoizedState === null ? Hp : Bp), e;
  }
  function Cs(e) {
    if (e !== null && typeof e == "object") {
      if (typeof e.then == "function") return Wi(e);
      if (e.$$typeof === K) return;
      if (e.$$typeof === H) return Ot(e);
    }
    throw Error(c(438, String(e)));
  }
  function ud(e) {
    var t = null, n = _e.updateQueue;
    if (n !== null && (t = n.memoCache), t == null) {
      var r = _e.alternate;
      r !== null && (r = r.updateQueue, r !== null && (r = r.memoCache, r != null && (t = {
        data: r.data.map(function(s) {
          return s.slice();
        }),
        index: 0
      })));
    }
    if (t ??= {
      data: [],
      index: 0
    }, n === null && (n = xs(), _e.updateQueue = n), n.memoCache = t, n = t.data[t.index], n === void 0) for (n = t.data[t.index] = Array(e), r = 0; r < e; r++) n[r] = Ae;
    return t.index++, n;
  }
  function Ra(e, t) {
    return typeof t == "function" ? t(e) : t;
  }
  function Es(e) {
    return dd(ut(), Fe, e);
  }
  function dd(e, t, n) {
    var r = e.queue;
    if (r === null) throw Error(c(311));
    r.lastRenderedReducer = n;
    var s = e.baseQueue, u = r.pending;
    if (u !== null) {
      if (s !== null) {
        var h = s.next;
        s.next = u.next, u.next = h;
      }
      t.baseQueue = s = u, r.pending = null;
    }
    if (u = e.baseState, s === null) e.memoizedState = u;
    else {
      t = s.next;
      var E = h = null, N = null, q = t, P = !1;
      do {
        var ee = q.lane & -536870913;
        if (ee !== q.lane ? (Le & ee) === ee : (Ta & ee) === ee) {
          var B = q.revertLane;
          if (B === 0) N !== null && (N = N.next = {
            lane: 0,
            revertLane: 0,
            gesture: null,
            action: q.action,
            hasEagerState: q.hasEagerState,
            eagerState: q.eagerState,
            next: null
          }), ee === Ho && (P = !0);
          else if ((Ta & B) === B) {
            q = q.next, B === Ho && (P = !0);
            continue;
          } else ee = {
            lane: 0,
            revertLane: q.revertLane,
            gesture: null,
            action: q.action,
            hasEagerState: q.hasEagerState,
            eagerState: q.eagerState,
            next: null
          }, N === null ? (E = N = ee, h = u) : N = N.next = ee, _e.lanes |= B, ro |= B;
          ee = q.action, Go && n(u, ee), u = q.hasEagerState ? q.eagerState : n(u, ee);
        } else B = {
          lane: ee,
          revertLane: q.revertLane,
          gesture: q.gesture,
          action: q.action,
          hasEagerState: q.hasEagerState,
          eagerState: q.eagerState,
          next: null
        }, N === null ? (E = N = B, h = u) : N = N.next = B, _e.lanes |= ee, ro |= ee;
        q = q.next;
      } while (q !== null && q !== t);
      if (N === null ? h = u : N.next = E, !mn(u, e.memoizedState) && (ht = !0, P && (n = _r, n !== null))) throw n;
      e.memoizedState = u, e.baseState = h, e.baseQueue = N, r.lastRenderedState = u;
    }
    return s === null && (r.lanes = 0), [e.memoizedState, r.dispatch];
  }
  function fd(e) {
    var t = ut(), n = t.queue;
    if (n === null) throw Error(c(311));
    n.lastRenderedReducer = e;
    var r = n.dispatch, s = n.pending, u = t.memoizedState;
    if (s !== null) {
      n.pending = null;
      var h = s = s.next;
      do
        u = e(u, h.action), h = h.next;
      while (h !== s);
      mn(u, t.memoizedState) || (ht = !0), t.memoizedState = u, t.baseQueue === null && (t.baseState = u), n.lastRenderedState = u;
    }
    return [u, r];
  }
  function ap(e, t, n) {
    var r = _e, s = ut(), u = Me;
    if (u) {
      if (n === void 0) throw Error(c(407));
      n = n();
    } else n = t();
    var h = !mn((Fe || s).memoizedState, n);
    if (h && (s.memoizedState = n, ht = !0), s = s.queue, vd(ip.bind(null, r, s, e), [e]), e = s.getSnapshot !== t || h || mt !== null && (mt.memoizedState.tag & 1) !== 0, zr(e ? 9 : 8, { destroy: void 0 }, rp.bind(null, r, s, n, t), null), e) {
      if (r.flags |= 2048, Je === null) throw Error(c(349));
      u || (Ta & 127) !== 0 || op(r, t, n);
    }
    return n;
  }
  function op(e, t, n) {
    e.flags |= 16384, e = {
      getSnapshot: t,
      value: n
    }, t = _e.updateQueue, t === null ? (t = xs(), _e.updateQueue = t, t.stores = [e]) : (n = t.stores, n === null ? t.stores = [e] : n.push(e));
  }
  function rp(e, t, n, r) {
    t.value = n, t.getSnapshot = r, lp(t) && sp(e);
  }
  function ip(e, t, n) {
    return n(function() {
      lp(t) && sp(e);
    });
  }
  function lp(e) {
    var t = e.getSnapshot;
    e = e.value;
    try {
      var n = t();
      return !mn(e, n);
    } catch {
      return !0;
    }
  }
  function sp(e) {
    var t = Oo(e, 2);
    t !== null && nn(t, e, 2);
  }
  function md(e) {
    var t = Gt();
    if (typeof e == "function") {
      var n = e;
      if (e = n(), Go) {
        Ga(!0);
        try {
          n();
        } finally {
          Ga(!1);
        }
      }
    }
    return t.memoizedState = t.baseState = e, t.queue = {
      pending: null,
      lanes: 0,
      dispatch: null,
      lastRenderedReducer: Ra,
      lastRenderedState: e
    }, t;
  }
  function cp(e, t, n, r) {
    return e.baseState = n, dd(e, Fe, typeof r == "function" ? r : Ra);
  }
  function dx(e, t, n, r, s) {
    if (Rs(e)) throw Error(c(485));
    if (e = t.action, e !== null) {
      var u = {
        payload: s,
        action: e,
        next: null,
        isTransition: !0,
        status: "pending",
        value: null,
        reason: null,
        listeners: [],
        then: function(h) {
          u.listeners.push(h);
        }
      };
      ce.T !== null ? n(!0) : u.isTransition = !1, r(u), n = t.pending, n === null ? (u.next = t.pending = u, up(t, u)) : (u.next = n.next, t.pending = n.next = u);
    }
  }
  function up(e, t) {
    var n = t.action, r = t.payload, s = e.state;
    if (t.isTransition) {
      var u = ce.T, h = {};
      h.types = u !== null ? u.types : null, ce.T = h;
      try {
        var E = n(s, r), N = ce.S;
        N !== null && N(h, E), dp(e, t, E);
      } catch (q) {
        hd(e, t, q);
      } finally {
        u !== null && h.types !== null && (u.types = h.types), ce.T = u;
      }
    } else try {
      u = n(s, r), dp(e, t, u);
    } catch (q) {
      hd(e, t, q);
    }
  }
  function dp(e, t, n) {
    n !== null && typeof n == "object" && typeof n.then == "function" ? n.then(function(r) {
      fp(e, t, r);
    }, function(r) {
      return hd(e, t, r);
    }) : fp(e, t, n);
  }
  function fp(e, t, n) {
    t.status = "fulfilled", t.value = n, mp(t), e.state = n, t = e.pending, t !== null && (n = t.next, n === t ? e.pending = null : (n = n.next, t.next = n, up(e, n)));
  }
  function hd(e, t, n) {
    var r = e.pending;
    if (e.pending = null, r !== null) {
      r = r.next;
      do
        t.status = "rejected", t.reason = n, mp(t), t = t.next;
      while (t !== r);
    }
    e.action = null;
  }
  function mp(e) {
    e = e.listeners;
    for (var t = 0; t < e.length; t++) (0, e[t])();
  }
  function hp(e, t) {
    return t;
  }
  function vp(e, t) {
    if (Me) {
      var n = Je.formState;
      if (n !== null) {
        e: {
          var r = _e;
          if (Me) {
            if (et) {
              t: {
                for (var s = et, u = _n; s.nodeType !== 8; ) {
                  if (!u) {
                    s = null;
                    break t;
                  }
                  if (s = On(s.nextSibling), s === null) {
                    s = null;
                    break t;
                  }
                }
                u = s.data, s = u === "F!" || u === "F" ? s : null;
              }
              if (s) {
                et = On(s.nextSibling), r = s.data === "F!";
                break e;
              }
            }
            Qa(r);
          }
          r = !1;
        }
        r && (t = n[0]);
      }
    }
    return n = Gt(), n.memoizedState = n.baseState = t, r = {
      pending: null,
      lanes: 0,
      dispatch: null,
      lastRenderedReducer: hp,
      lastRenderedState: t
    }, n.queue = r, n = Dp.bind(null, _e, r), r.dispatch = n, r = md(!1), u = Sd.bind(null, _e, !1, r.queue), r = Gt(), s = {
      state: t,
      dispatch: null,
      action: e,
      pending: null
    }, r.queue = s, n = dx.bind(null, _e, s, u, n), s.dispatch = n, r.memoizedState = e, [
      t,
      n,
      !1
    ];
  }
  function pp(e) {
    return gp(ut(), Fe, e);
  }
  function gp(e, t, n) {
    if (t = dd(e, t, hp)[0], e = Es(Ra)[0], typeof t == "object" && t !== null && typeof t.then == "function") try {
      var r = Wi(t);
    } catch (h) {
      throw h === Nr ? hs : h;
    }
    else r = t;
    t = ut();
    var s = t.queue, u = s.dispatch;
    return n !== t.memoizedState && (_e.flags |= 2048, zr(9, { destroy: void 0 }, fx.bind(null, s, n), null)), [
      r,
      u,
      e
    ];
  }
  function fx(e, t) {
    e.action = t;
  }
  function yp(e) {
    var t = ut(), n = Fe;
    if (n !== null) return gp(t, n, e);
    ut(), t = t.memoizedState, n = ut();
    var r = n.queue.dispatch;
    return n.memoizedState = e, [
      t,
      r,
      !1
    ];
  }
  function zr(e, t, n, r) {
    return e = {
      tag: e,
      create: n,
      deps: r,
      inst: t,
      next: null
    }, t = _e.updateQueue, t === null && (t = xs(), _e.updateQueue = t), n = t.lastEffect, n === null ? t.lastEffect = e.next = e : (r = n.next, n.next = e, e.next = r, t.lastEffect = e), e;
  }
  function bp() {
    return ut().memoizedState;
  }
  function As(e, t, n, r) {
    var s = Gt();
    _e.flags |= e, s.memoizedState = zr(1 | t, { destroy: void 0 }, n, r === void 0 ? null : r);
  }
  function Ts(e, t, n, r) {
    var s = ut();
    r = r === void 0 ? null : r;
    var u = s.memoizedState.inst;
    Fe !== null && r !== null && rd(r, Fe.memoizedState.deps) ? s.memoizedState = zr(t, u, n, r) : (_e.flags |= e, s.memoizedState = zr(1 | t, u, n, r));
  }
  function Sp(e, t) {
    As(8390656, 8, e, t);
  }
  function vd(e, t) {
    Ts(2048, 8, e, t);
  }
  function mx(e) {
    _e.flags |= 4;
    var t = _e.updateQueue;
    if (t === null) t = xs(), _e.updateQueue = t, t.events = [e];
    else {
      var n = t.events;
      n === null ? t.events = [e] : n.push(e);
    }
  }
  function wp(e) {
    var t = ut().memoizedState;
    return mx({
      ref: t,
      nextImpl: e
    }), function() {
      if ((Ge & 2) !== 0) throw Error(c(440));
      return t.impl.apply(void 0, arguments);
    };
  }
  function xp(e, t) {
    return Ts(4, 2, e, t);
  }
  function Cp(e, t) {
    return Ts(4, 4, e, t);
  }
  function Ep(e, t) {
    if (typeof t == "function") {
      e = e();
      var n = t(e);
      return function() {
        typeof n == "function" ? n() : t(null);
      };
    }
    if (t != null) return e = e(), t.current = e, function() {
      t.current = null;
    };
  }
  function Ap(e, t, n) {
    n = n != null ? n.concat([e]) : null, Ts(4, 4, Ep.bind(null, t, e), n);
  }
  function pd() {
  }
  function Tp(e, t) {
    var n = ut();
    t = t === void 0 ? null : t;
    var r = n.memoizedState;
    return t !== null && rd(t, r[1]) ? r[0] : (n.memoizedState = [e, t], e);
  }
  function Rp(e, t) {
    var n = ut();
    t = t === void 0 ? null : t;
    var r = n.memoizedState;
    if (t !== null && rd(t, r[1])) return r[0];
    if (r = e(), Go) {
      Ga(!0);
      try {
        e();
      } finally {
        Ga(!1);
      }
    }
    return n.memoizedState = [r, t], r;
  }
  function gd(e, t, n) {
    return n === void 0 || (Ta & 1073741824) !== 0 && (Le & 261930) === 0 ? e.memoizedState = t : (e.memoizedState = n, e = D0(), _e.lanes |= e, ro |= e, n);
  }
  function _p(e, t, n, r) {
    return mn(n, t) ? n : Ja.current !== null ? (e = gd(e, n, r), mn(e, t) || (ht = !0), e) : (Ta & 106) === 0 || (Ta & 1073741824) !== 0 && (Le & 261930) === 0 ? (ht = !0, e.memoizedState = n) : (e = D0(), _e.lanes |= e, ro |= e, t);
  }
  function Np(e, t, n, r, s) {
    var u = ve.p;
    ve.p = u !== 0 && 8 > u ? u : 8;
    var h = ce.T, E = {};
    E.types = h !== null ? h.types : null, ce.T = E, Sd(e, !1, t, n);
    try {
      var N = s(), q = ce.S;
      q !== null && q(E, N), N !== null && typeof N == "object" && typeof N.then == "function" ? Pi(e, t, sx(N, r), jn(e)) : Pi(e, t, r, jn(e));
    } catch (P) {
      Pi(e, t, {
        then: function() {
        },
        status: "rejected",
        reason: P
      }, jn());
    } finally {
      ve.p = u, h !== null && E.types !== null && (h.types = E.types), ce.T = h;
    }
  }
  function hx() {
  }
  function yd(e, t, n, r) {
    if (e.tag !== 5) throw Error(c(476));
    var s = jp(e).queue;
    Np(e, s, t, V, n === null ? hx : function() {
      return Op(e), n(r);
    });
  }
  function jp(e) {
    var t = e.memoizedState;
    if (t !== null) return t;
    t = {
      memoizedState: V,
      baseState: V,
      baseQueue: null,
      queue: {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: Ra,
        lastRenderedState: V
      },
      next: null
    };
    var n = {};
    return t.next = {
      memoizedState: n,
      baseState: n,
      baseQueue: null,
      queue: {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: Ra,
        lastRenderedState: n
      },
      next: null
    }, e.memoizedState = t, e = e.alternate, e !== null && (e.memoizedState = t), t;
  }
  function Op(e) {
    var t = jp(e);
    t.next === null && (t = e.alternate.memoizedState), Pi(e, t.next.queue, {}, jn());
  }
  function bd() {
    return Ot(Fr);
  }
  function Mp() {
    return ut().memoizedState;
  }
  function zp() {
    return ut().memoizedState;
  }
  function vx(e) {
    for (var t = e.return; t !== null; ) {
      switch (t.tag) {
        case 24:
        case 3:
          var n = jn();
          e = $o(n);
          var r = Yo(t, e, n);
          r !== null && (nn(r, t, n), qi(r, t, n)), t = { cache: Iu() }, e.payload = t;
          return;
      }
      t = t.return;
    }
  }
  function px(e, t, n) {
    var r = jn();
    n = {
      lane: r,
      revertLane: 0,
      gesture: null,
      action: n,
      hasEagerState: !1,
      eagerState: null,
      next: null
    }, Rs(e) ? kp(t, n) : (n = Bu(e, t, n, r), n !== null && (nn(n, e, r), Lp(n, t, r)));
  }
  function Dp(e, t, n) {
    Pi(e, t, n, jn());
  }
  function Pi(e, t, n, r) {
    var s = {
      lane: r,
      revertLane: 0,
      gesture: null,
      action: n,
      hasEagerState: !1,
      eagerState: null,
      next: null
    };
    if (Rs(e)) kp(t, s);
    else {
      var u = e.alternate;
      if (e.lanes === 0 && (u === null || u.lanes === 0) && (u = t.lastRenderedReducer, u !== null)) try {
        var h = t.lastRenderedState, E = u(h, n);
        if (s.hasEagerState = !0, s.eagerState = E, mn(E, h)) return os(e, t, s, 0), Je === null && as(), !1;
      } catch {
      }
      if (n = Bu(e, t, s, r), n !== null) return nn(n, e, r), Lp(n, t, r), !0;
    }
    return !1;
  }
  function Sd(e, t, n, r) {
    if (r = {
      lane: 2,
      revertLane: df(),
      gesture: null,
      action: r,
      hasEagerState: !1,
      eagerState: null,
      next: null
    }, Rs(e)) {
      if (t) throw Error(c(479));
    } else t = Bu(e, n, r, 2), t !== null && nn(t, e, 2);
  }
  function Rs(e) {
    var t = e.alternate;
    return e === _e || t !== null && t === _e;
  }
  function kp(e, t) {
    Or = Ss = !0;
    var n = e.pending;
    n === null ? t.next = t : (t.next = n.next, n.next = t), e.pending = t;
  }
  function Lp(e, t, n) {
    if ((n & 4194048) !== 0) {
      var r = t.lanes;
      r &= e.pendingLanes, n |= r, t.lanes = n, Lh(e, n);
    }
  }
  var _s = {
    readContext: Ot,
    use: Cs,
    useCallback: lt,
    useContext: lt,
    useEffect: lt,
    useImperativeHandle: lt,
    useLayoutEffect: lt,
    useInsertionEffect: lt,
    useMemo: lt,
    useReducer: lt,
    useRef: lt,
    useState: lt,
    useDebugValue: lt,
    useDeferredValue: lt,
    useTransition: lt,
    useSyncExternalStore: lt,
    useId: lt,
    useHostTransitionStatus: lt,
    useFormState: lt,
    useActionState: lt,
    useOptimistic: lt,
    useMemoCache: lt,
    useCacheRefresh: lt,
    useEffectEvent: lt
  }, Hp = {
    readContext: Ot,
    use: Cs,
    useCallback: function(e, t) {
      return Gt().memoizedState = [e, t === void 0 ? null : t], e;
    },
    useContext: Ot,
    useEffect: Sp,
    useImperativeHandle: function(e, t, n) {
      n = n != null ? n.concat([e]) : null, As(4194308, 4, Ep.bind(null, t, e), n);
    },
    useLayoutEffect: function(e, t) {
      return As(4194308, 4, e, t);
    },
    useInsertionEffect: function(e, t) {
      As(4, 2, e, t);
    },
    useMemo: function(e, t) {
      var n = Gt();
      t = t === void 0 ? null : t;
      var r = e();
      if (Go) {
        Ga(!0);
        try {
          e();
        } finally {
          Ga(!1);
        }
      }
      return n.memoizedState = [r, t], r;
    },
    useReducer: function(e, t, n) {
      var r = Gt();
      if (n !== void 0) {
        var s = n(t);
        if (Go) {
          Ga(!0);
          try {
            n(t);
          } finally {
            Ga(!1);
          }
        }
      } else s = t;
      return r.memoizedState = r.baseState = s, e = {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: e,
        lastRenderedState: s
      }, r.queue = e, e = e.dispatch = px.bind(null, _e, e), [r.memoizedState, e];
    },
    useRef: function(e) {
      var t = Gt();
      return e = { current: e }, t.memoizedState = e;
    },
    useState: function(e) {
      e = md(e);
      var t = e.queue, n = Dp.bind(null, _e, t);
      return t.dispatch = n, [e.memoizedState, n];
    },
    useDebugValue: pd,
    useDeferredValue: function(e, t) {
      return gd(Gt(), e, t);
    },
    useTransition: function() {
      var e = md(!1);
      return e = Np.bind(null, _e, e.queue, !0, !1), Gt().memoizedState = e, [!1, e];
    },
    useSyncExternalStore: function(e, t, n) {
      var r = _e, s = Gt();
      if (Me) {
        if (n === void 0) throw Error(c(407));
        n = n();
      } else {
        if (n = t(), Je === null) throw Error(c(349));
        (Le & 127) !== 0 || op(r, t, n);
      }
      s.memoizedState = n;
      var u = {
        value: n,
        getSnapshot: t
      };
      return s.queue = u, Sp(ip.bind(null, r, u, e), [e]), r.flags |= 2048, zr(9, { destroy: void 0 }, rp.bind(null, r, u, n, t), null), n;
    },
    useId: function() {
      var e = Gt(), t = Je.identifierPrefix;
      if (Me) {
        var n = Fn, r = Zn;
        n = (r & ~(1 << 32 - dn(r) - 1)).toString(32) + n, t = "_" + t + "R_" + n, n = ws++, 0 < n && (t += "H" + n.toString(32)), t += "_";
      } else n = cx++, t = "_" + t + "r_" + n.toString(32) + "_";
      return e.memoizedState = t;
    },
    useHostTransitionStatus: bd,
    useFormState: vp,
    useActionState: vp,
    useOptimistic: function(e) {
      var t = Gt();
      t.memoizedState = t.baseState = e;
      var n = {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: null,
        lastRenderedState: null
      };
      return t.queue = n, t = Sd.bind(null, _e, !0, n), n.dispatch = t, [e, t];
    },
    useMemoCache: ud,
    useCacheRefresh: function() {
      return Gt().memoizedState = vx.bind(null, _e);
    },
    useEffectEvent: function(e) {
      var t = Gt(), n = { impl: e };
      return t.memoizedState = n, function() {
        if ((Ge & 2) !== 0) throw Error(c(440));
        return n.impl.apply(void 0, arguments);
      };
    }
  }, Bp = {
    readContext: Ot,
    use: Cs,
    useCallback: Tp,
    useContext: Ot,
    useEffect: vd,
    useImperativeHandle: Ap,
    useInsertionEffect: xp,
    useLayoutEffect: Cp,
    useMemo: Rp,
    useReducer: Es,
    useRef: bp,
    useState: function() {
      return Es(Ra);
    },
    useDebugValue: pd,
    useDeferredValue: function(e, t) {
      return _p(ut(), Fe.memoizedState, e, t);
    },
    useTransition: function() {
      var e = Es(Ra)[0], t = ut().memoizedState;
      return [typeof e == "boolean" ? e : Wi(e), t];
    },
    useSyncExternalStore: ap,
    useId: Mp,
    useHostTransitionStatus: bd,
    useFormState: pp,
    useActionState: pp,
    useOptimistic: function(e, t) {
      return cp(ut(), Fe, e, t);
    },
    useMemoCache: ud,
    useCacheRefresh: zp,
    useEffectEvent: wp
  }, gx = {
    readContext: Ot,
    use: Cs,
    useCallback: Tp,
    useContext: Ot,
    useEffect: vd,
    useImperativeHandle: Ap,
    useInsertionEffect: xp,
    useLayoutEffect: Cp,
    useMemo: Rp,
    useReducer: fd,
    useRef: bp,
    useState: function() {
      return fd(Ra);
    },
    useDebugValue: pd,
    useDeferredValue: function(e, t) {
      var n = ut();
      return Fe === null ? gd(n, e, t) : _p(n, Fe.memoizedState, e, t);
    },
    useTransition: function() {
      var e = fd(Ra)[0], t = ut().memoizedState;
      return [typeof e == "boolean" ? e : Wi(e), t];
    },
    useSyncExternalStore: ap,
    useId: Mp,
    useHostTransitionStatus: bd,
    useFormState: yp,
    useActionState: yp,
    useOptimistic: function(e, t) {
      var n = ut();
      return Fe !== null ? cp(n, Fe, e, t) : (n.baseState = e, [e, n.queue.dispatch]);
    },
    useMemoCache: ud,
    useCacheRefresh: zp,
    useEffectEvent: wp
  };
  function wd(e, t, n, r) {
    t = e.memoizedState, n = n(r, t), n = n == null ? t : k({}, t, n), e.memoizedState = n, e.lanes === 0 && (e.updateQueue.baseState = n);
  }
  var xd = {
    enqueueSetState: function(e, t, n) {
      e = e._reactInternals;
      var r = jn(), s = $o(r);
      s.payload = t, n != null && (s.callback = n), t = Yo(e, s, r), t !== null && (nn(t, e, r), qi(t, e, r));
    },
    enqueueReplaceState: function(e, t, n) {
      e = e._reactInternals;
      var r = jn(), s = $o(r);
      s.tag = 1, s.payload = t, n != null && (s.callback = n), t = Yo(e, s, r), t !== null && (nn(t, e, r), qi(t, e, r));
    },
    enqueueForceUpdate: function(e, t) {
      e = e._reactInternals;
      var n = jn(), r = $o(n);
      r.tag = 2, t != null && (r.callback = t), t = Yo(e, r, n), t !== null && (nn(t, e, n), qi(t, e, n));
    }
  };
  function Up(e, t, n, r, s, u, h) {
    return e = e.stateNode, typeof e.shouldComponentUpdate == "function" ? e.shouldComponentUpdate(r, u, h) : t.prototype && t.prototype.isPureReactComponent ? !Mi(n, r) || !Mi(s, u) : !0;
  }
  function qp(e, t, n, r) {
    e = t.state, typeof t.componentWillReceiveProps == "function" && t.componentWillReceiveProps(n, r), typeof t.UNSAFE_componentWillReceiveProps == "function" && t.UNSAFE_componentWillReceiveProps(n, r), t.state !== e && xd.enqueueReplaceState(t, t.state, null);
  }
  function Wo(e, t) {
    var n = t;
    if ("ref" in t) {
      n = {};
      for (var r in t) r !== "ref" && (n[r] = t[r]);
    }
    if (e = e.defaultProps) {
      n === t && (n = k({}, n));
      for (var s in e) n[s] === void 0 && (n[s] = e[s]);
    }
    return n;
  }
  function yx(e) {
    ns(e);
  }
  function bx(e) {
    console.error(e);
  }
  function Sx(e) {
    ns(e);
  }
  function Ns(e, t) {
    try {
      var n = e.onUncaughtError;
      n(t.value, { componentStack: t.stack });
    } catch (r) {
      setTimeout(function() {
        throw r;
      });
    }
  }
  function Vp(e, t, n) {
    try {
      var r = e.onCaughtError;
      r(n.value, {
        componentStack: n.stack,
        errorBoundary: t.tag === 1 ? t.stateNode : null
      });
    } catch (s) {
      setTimeout(function() {
        throw s;
      });
    }
  }
  function Cd(e, t, n) {
    return n = $o(n), n.tag = 3, n.payload = { element: null }, n.callback = function() {
      Ns(e, t);
    }, n;
  }
  function $p(e) {
    return e = $o(e), e.tag = 3, e;
  }
  function Yp(e, t, n, r) {
    var s = n.type.getDerivedStateFromError;
    if (typeof s == "function") {
      var u = r.value;
      e.payload = function() {
        return s(u);
      }, e.callback = function() {
        Vp(t, n, r);
      };
    }
    var h = n.stateNode;
    h !== null && typeof h.componentDidCatch == "function" && (e.callback = function() {
      Vp(t, n, r), typeof s != "function" && (io === null ? io = /* @__PURE__ */ new Set([this]) : io.add(this));
      var E = r.stack;
      this.componentDidCatch(r.value, { componentStack: E !== null ? E : "" });
    });
  }
  function wx(e, t, n, r, s) {
    if (n.flags |= 32768, r !== null && typeof r == "object" && typeof r.then == "function") {
      if (t = n.alternate, t !== null && ko(t, n, s, !0), n = Mt.current, n !== null) {
        switch (n.tag) {
          case 31:
          case 13:
          case 19:
            return Ut === null ? Ks() : n.alternate === null && st === 0 && (st = 3), n.flags &= -257, n.flags |= 65536, n.lanes = s, r === vs ? n.flags |= 16384 : (t = n.updateQueue, t === null ? n.updateQueue = /* @__PURE__ */ new Set([r]) : t.add(r), sf(e, r, s)), !1;
          case 22:
            return n.flags |= 65536, r === vs ? n.flags |= 16384 : (t = n.updateQueue, t === null ? (t = {
              transitions: null,
              markerInstances: null,
              retryQueue: /* @__PURE__ */ new Set([r])
            }, n.updateQueue = t) : (n = t.retryQueue, n === null ? t.retryQueue = /* @__PURE__ */ new Set([r]) : n.add(r)), sf(e, r, s)), !1;
        }
        throw Error(c(435, n.tag));
      }
      return sf(e, r, s), Ks(), !1;
    }
    if (Me) return t = Mt.current, t !== null ? ((t.flags & 65536) === 0 && (t.flags |= 256), t.flags |= 65536, t.lanes = s, r !== Yu && (e = Error(c(422), { cause: r }), ki(An(e, n)))) : (r !== Yu && (t = Error(c(423), { cause: r }), ki(An(t, n))), e = e.current.alternate, e.flags |= 65536, s &= -s, e.lanes |= s, r = An(r, n), s = Cd(e.stateNode, r, s), Ju(e, s), st !== 4 && (st = 2)), !1;
    var u = Error(c(520), { cause: r });
    if (u = An(u, n), el === null ? el = [u] : el.push(u), st !== 4 && (st = 2), t === null) return !0;
    r = An(r, n), n = t;
    do {
      switch (n.tag) {
        case 3:
          return n.flags |= 65536, e = s & -s, n.lanes |= e, e = Cd(n.stateNode, r, e), Ju(n, e), !1;
        case 1:
          if (t = n.type, u = n.stateNode, (n.flags & 128) === 0 && (typeof t.getDerivedStateFromError == "function" || u !== null && typeof u.componentDidCatch == "function" && (io === null || !io.has(u)))) return n.flags |= 65536, s &= -s, n.lanes |= s, s = $p(s), Yp(s, e, n, r), Ju(n, s), !1;
          break;
        case 22:
          if (n.memoizedState !== null) return n.flags |= 65536, !1;
      }
      n = n.return;
    } while (n !== null);
    return !1;
  }
  var Ed = Error(c(461)), ht = !1;
  function bt(e, t, n, r) {
    t.child = e === null ? Kv(t, null, n, r) : Vo(t, e.child, n, r);
  }
  function Gp(e, t, n, r, s) {
    n = n.render;
    var u = t.ref;
    if ("ref" in r) {
      var h = {};
      for (var E in r) E !== "ref" && (h[E] = r[E]);
    } else h = r;
    return Lo(t), r = id(e, t, n, h, u, s), E = ld(), e !== null && !ht ? (sd(e, t, s), _a(e, t, s)) : (Me && E && ss(t), t.flags |= 1, bt(e, t, r, s), t.child);
  }
  function Wp(e, t, n, r, s) {
    if (e === null) {
      var u = n.type;
      return typeof u == "function" && !Uu(u) && u.defaultProps === void 0 && n.compare === null ? (t.tag = 15, t.type = u, Pp(e, t, u, r, s)) : (e = is(n.type, null, r, t, t.mode, s), e.ref = t.ref, e.return = t, t.child = e);
    }
    if (u = e.child, !Md(e, s)) {
      var h = u.memoizedProps;
      if (n = n.compare, n = n !== null ? n : Mi, n(h, r) && e.ref === t.ref) return _a(e, t, s);
    }
    return t.flags |= 1, e = xa(u, r), e.ref = t.ref, e.return = t, t.child = e;
  }
  function Pp(e, t, n, r, s) {
    if (e !== null) {
      var u = e.memoizedProps;
      if (Mi(u, r) && e.ref === t.ref) if (ht = !1, t.pendingProps = r = u, Md(e, s)) (e.flags & 131072) !== 0 && (ht = !0);
      else return t.lanes = e.lanes, _a(e, t, s);
    }
    return Ad(e, t, n, r, s);
  }
  function Ip(e, t, n, r) {
    var s = r.children, u = e !== null ? e.memoizedState : null;
    if (e === null && t.stateNode === null && (t.stateNode = {
      _visibility: 1,
      _pendingMarkers: null,
      _retryCache: null,
      _transitions: null
    }), r.mode === "hidden") {
      if ((t.flags & 128) !== 0) {
        if (u = u !== null ? u.baseLanes | n : n, e !== null) {
          for (r = t.child = e.child, s = 0; r !== null; ) s = s | r.lanes | r.childLanes, r = r.sibling;
          r = s & ~u;
        } else r = 0, t.child = null;
        return Xp(e, t, u, n, r);
      }
      if ((n & 536870912) !== 0) t.memoizedState = {
        baseLanes: 0,
        cachePool: null
      }, e !== null && ms(t, u !== null ? u.cachePool : null), u !== null ? Jv(t, u) : td(), ep(t);
      else return r = t.lanes = 536870912, Xp(e, t, u !== null ? u.baseLanes | n : n, n, r);
    } else u !== null ? (ms(t, u.cachePool), Jv(t, u), to(), t.memoizedState = null) : (e !== null && ms(t, null), td(), to());
    return bt(e, t, s, n), t.child;
  }
  function Ii(e, t) {
    return e !== null && e.tag === 22 || t.stateNode !== null || (t.stateNode = {
      _visibility: 1,
      _pendingMarkers: null,
      _retryCache: null,
      _transitions: null
    }), t.sibling;
  }
  function Xp(e, t, n, r, s) {
    var u = Qu();
    return u = u === null ? null : {
      parent: ft._currentValue,
      pool: u
    }, t.memoizedState = {
      baseLanes: n,
      cachePool: u
    }, e !== null && ms(t, null), td(), ep(t), e !== null && ko(e, t, r, !0), t.childLanes = s, null;
  }
  function js(e, t) {
    return t = Os({
      mode: t.mode,
      children: t.children
    }, e.mode), t.ref = e.ref, e.child = t, t.return = e, t;
  }
  function Qp(e, t, n) {
    return Vo(t, e.child, null, n), e = js(t, t.pendingProps), e.flags |= 2, hn(t), t.memoizedState = null, e;
  }
  function xx(e, t, n) {
    var r = t.pendingProps, s = (t.flags & 128) !== 0;
    if (t.flags &= -129, e === null) {
      if (Me) {
        if (r.mode === "hidden") return e = js(t, r), t.lanes = 536870912, e.memoizedState = {
          baseLanes: 0,
          cachePool: null
        }, Ii(null, e);
        if (ad(t), (e = et) ? (e = Cg(e, _n), e = e !== null && e.data === "&" ? e : null, e !== null && (t.memoizedState = {
          dehydrated: e,
          treeContext: Ia !== null ? {
            id: Zn,
            overflow: Fn
          } : null,
          retryLane: 536870912,
          hydrationErrors: null
        }, n = kv(e), n.return = t, t.child = n, Et = t, et = null)) : e = null, e === null) throw Qa(t);
        return t.lanes = 536870912, null;
      }
      return js(t, r);
    }
    var u = e.memoizedState;
    if (u !== null) {
      var h = u.dehydrated;
      if (ad(t), s) if (t.flags & 256) t.flags &= -257, t = Qp(e, t, n);
      else if (t.memoizedState !== null) t.child = e.child, t.flags |= 128, t = null;
      else throw Error(c(558));
      else if (ht || ko(e, t, n, !1), s = (n & e.childLanes) !== 0, ht || s) {
        if (Ja.current === null) {
          if (r = Je, r !== null && (h = Hh(r, n), h !== 0 && h !== u.retryLane)) throw u.retryLane = h, Oo(e, h), nn(r, e, h), Ed;
          Ks();
        }
        t = Qp(e, t, n);
      } else e = u.treeContext, et = On(h.nextSibling), Et = t, Me = !0, Xa = null, _n = !1, e !== null && Bv(t, e), t = js(t, r), t.flags |= 134221824;
      return t;
    }
    return e = xa(e.child, {
      mode: r.mode,
      children: r.children
    }), e.ref = t.ref, t.child = e, e.return = t, e;
  }
  function Dr(e, t) {
    var n = t.ref;
    if (n === null) e !== null && e.ref !== null && (t.flags |= 4194816);
    else {
      if (typeof n != "function" && typeof n != "object") throw Error(c(284));
      (e === null || e.ref !== n) && (t.flags |= 4194816);
    }
  }
  function Ad(e, t, n, r, s) {
    return Lo(t), n = id(e, t, n, r, void 0, s), r = ld(), e !== null && !ht ? (sd(e, t, s), _a(e, t, s)) : (Me && r && ss(t), t.flags |= 1, bt(e, t, n, s), t.child);
  }
  function Kp(e, t, n, r, s, u) {
    return Lo(t), t.updateQueue = null, n = np(t, r, n, s), tp(e), r = ld(), e !== null && !ht ? (sd(e, t, u), _a(e, t, u)) : (Me && r && ss(t), t.flags |= 1, bt(e, t, n, u), t.child);
  }
  function Zp(e, t, n, r, s) {
    if (Lo(t), t.stateNode === null) {
      var u = Er, h = n.contextType;
      typeof h == "object" && h !== null && (u = Ot(h)), u = new n(r, u), t.memoizedState = u.state !== null && u.state !== void 0 ? u.state : null, u.updater = xd, t.stateNode = u, u._reactInternals = t, u = t.stateNode, u.props = r, u.state = t.memoizedState, u.refs = {}, Zu(t), h = n.contextType, u.context = typeof h == "object" && h !== null ? Ot(h) : Er, u.state = t.memoizedState, h = n.getDerivedStateFromProps, typeof h == "function" && (wd(t, n, h, r), u.state = t.memoizedState), typeof n.getDerivedStateFromProps == "function" || typeof u.getSnapshotBeforeUpdate == "function" || typeof u.UNSAFE_componentWillMount != "function" && typeof u.componentWillMount != "function" || (h = u.state, typeof u.componentWillMount == "function" && u.componentWillMount(), typeof u.UNSAFE_componentWillMount == "function" && u.UNSAFE_componentWillMount(), h !== u.state && xd.enqueueReplaceState(u, u.state, null), $i(t, r, u, s), Vi(), u.state = t.memoizedState), typeof u.componentDidMount == "function" && (t.flags |= 4194308), r = !0;
    } else if (e === null) {
      u = t.stateNode;
      var E = t.memoizedProps, N = Wo(n, E);
      u.props = N;
      var q = u.context, P = n.contextType;
      h = Er, typeof P == "object" && P !== null && (h = Ot(P));
      var ee = n.getDerivedStateFromProps;
      P = typeof ee == "function" || typeof u.getSnapshotBeforeUpdate == "function", E = t.pendingProps !== E, P || typeof u.UNSAFE_componentWillReceiveProps != "function" && typeof u.componentWillReceiveProps != "function" || (E || q !== h) && qp(t, u, r, h), Fa = !1;
      var B = t.memoizedState;
      u.state = B, $i(t, r, u, s), Vi(), q = t.memoizedState, E || B !== q || Fa ? (typeof ee == "function" && (wd(t, n, ee, r), q = t.memoizedState), (N = Fa || Up(t, n, N, r, B, q, h)) ? (P || typeof u.UNSAFE_componentWillMount != "function" && typeof u.componentWillMount != "function" || (typeof u.componentWillMount == "function" && u.componentWillMount(), typeof u.UNSAFE_componentWillMount == "function" && u.UNSAFE_componentWillMount()), typeof u.componentDidMount == "function" && (t.flags |= 4194308)) : (typeof u.componentDidMount == "function" && (t.flags |= 4194308), t.memoizedProps = r, t.memoizedState = q), u.props = r, u.state = q, u.context = h, r = N) : (typeof u.componentDidMount == "function" && (t.flags |= 4194308), r = !1);
    } else {
      u = t.stateNode, Fu(e, t), h = t.memoizedProps, P = Wo(n, h), u.props = P, ee = t.pendingProps, B = u.context, q = n.contextType, N = Er, typeof q == "object" && q !== null && (N = Ot(q)), E = n.getDerivedStateFromProps, (q = typeof E == "function" || typeof u.getSnapshotBeforeUpdate == "function") || typeof u.UNSAFE_componentWillReceiveProps != "function" && typeof u.componentWillReceiveProps != "function" || (h !== ee || B !== N) && qp(t, u, r, N), Fa = !1, B = t.memoizedState, u.state = B, $i(t, r, u, s), Vi();
      var G = t.memoizedState;
      h !== ee || B !== G || Fa || e !== null && e.dependencies !== null && ds(e.dependencies) ? (typeof E == "function" && (wd(t, n, E, r), G = t.memoizedState), (P = Fa || Up(t, n, P, r, B, G, N) || e !== null && e.dependencies !== null && ds(e.dependencies)) ? (q || typeof u.UNSAFE_componentWillUpdate != "function" && typeof u.componentWillUpdate != "function" || (typeof u.componentWillUpdate == "function" && u.componentWillUpdate(r, G, N), typeof u.UNSAFE_componentWillUpdate == "function" && u.UNSAFE_componentWillUpdate(r, G, N)), typeof u.componentDidUpdate == "function" && (t.flags |= 4), typeof u.getSnapshotBeforeUpdate == "function" && (t.flags |= 1024)) : (typeof u.componentDidUpdate != "function" || h === e.memoizedProps && B === e.memoizedState || (t.flags |= 4), typeof u.getSnapshotBeforeUpdate != "function" || h === e.memoizedProps && B === e.memoizedState || (t.flags |= 1024), t.memoizedProps = r, t.memoizedState = G), u.props = r, u.state = G, u.context = N, r = P) : (typeof u.componentDidUpdate != "function" || h === e.memoizedProps && B === e.memoizedState || (t.flags |= 4), typeof u.getSnapshotBeforeUpdate != "function" || h === e.memoizedProps && B === e.memoizedState || (t.flags |= 1024), r = !1);
    }
    return u = r, Dr(e, t), r = (t.flags & 128) !== 0, u || r ? (u = t.stateNode, n = r && typeof n.getDerivedStateFromError != "function" ? null : u.render(), t.flags |= 1, e !== null && r ? (t.child = Vo(t, e.child, null, s), t.child = Vo(t, null, n, s)) : bt(e, t, n, s), t.memoizedState = u.state, e = t.child) : e = _a(e, t, s), e;
  }
  function Fp(e, t, n, r) {
    return zo(), t.flags |= 256, bt(e, t, n, r), t.child;
  }
  var Td = {
    dehydrated: null,
    treeContext: null,
    retryLane: 0,
    hydrationErrors: null
  };
  function Rd(e) {
    return {
      baseLanes: e,
      cachePool: Gv()
    };
  }
  function _d(e, t, n) {
    return e = e !== null ? e.childLanes & ~n : 0, t && (e |= gn), e;
  }
  function Jp(e, t, n) {
    var r = t.pendingProps, s = !1, u = (t.flags & 128) !== 0, h;
    if ((h = u) || (h = e !== null && e.memoizedState === null ? !1 : (zt.current & 2) !== 0), h && (s = !0, t.flags &= -129), h = (t.flags & 32) !== 0, t.flags &= -33, e === null) {
      if (Me) {
        if (s ? eo(t) : to(), (e = et) ? (e = Cg(e, _n), e = e !== null && e.data !== "&" ? e : null, e !== null && (t.memoizedState = {
          dehydrated: e,
          treeContext: Ia !== null ? {
            id: Zn,
            overflow: Fn
          } : null,
          retryLane: 536870912,
          hydrationErrors: null
        }, n = kv(e), n.return = t, t.child = n, Et = t, et = null)) : e = null, e === null) throw Qa(t);
        return Rf(e) ? t.lanes = 32 : t.lanes = 536870912, null;
      }
      return u = r.children, r = r.fallback, s ? (to(), s = t.mode, u = Os({
        mode: "hidden",
        children: u
      }, s), r = Mo(r, s, n, null), u.return = t, r.return = t, u.sibling = r, t.child = u, r = t.child, r.memoizedState = Rd(n), r.childLanes = _d(e, h, n), t.memoizedState = Td, Ii(null, r)) : (eo(t), Nd(t, u));
    }
    var E = e.memoizedState;
    if (E !== null) {
      var N = E.dehydrated;
      if (N !== null) return Cx(e, t, u, h, r, N, E, n);
    }
    return s ? (to(), s = r.fallback, u = t.mode, E = e.child, N = E.sibling, r = xa(E, {
      mode: "hidden",
      children: r.children
    }), r.subtreeFlags = E.subtreeFlags & 1206910976, N !== null ? s = xa(N, s) : (s = Mo(s, u, n, null), s.flags |= 2), s.return = t, r.return = t, r.sibling = s, t.child = r, Ii(null, r), r = t.child, s = e.child.memoizedState, s === null ? s = Rd(n) : (u = s.cachePool, u !== null ? (E = ft._currentValue, u = u.parent !== E ? {
      parent: E,
      pool: E
    } : u) : u = Gv(), s = {
      baseLanes: s.baseLanes | n,
      cachePool: u
    }), r.memoizedState = s, r.childLanes = _d(e, h, n), t.memoizedState = Td, Ii(e.child, r)) : (eo(t), n = e.child, e = n.sibling, n = xa(n, {
      mode: "visible",
      children: r.children
    }), n.return = t, n.sibling = null, e !== null && (h = t.deletions, h === null ? (t.deletions = [e], t.flags |= 16) : h.push(e)), t.child = n, t.memoizedState = null, n);
  }
  function Nd(e, t) {
    return t = Os({
      mode: "visible",
      children: t
    }, e.mode), t.return = e, e.child = t;
  }
  function Os(e, t) {
    return e = Ft(22, e, null, t), e.lanes = 0, e;
  }
  function Ms(e, t, n) {
    return Vo(t, e.child, null, n), e = Nd(t, t.pendingProps.children), e.flags |= 2, t.memoizedState = null, e;
  }
  function Cx(e, t, n, r, s, u, h, E) {
    if (n)
      return t.flags & 256 ? (eo(t), t.flags &= -257, Ms(e, t, E)) : t.memoizedState !== null ? (to(), t.child = e.child, t.flags |= 128, null) : (to(), u = s.fallback, h = t.mode, s = Os({
        mode: "visible",
        children: s.children
      }, h), u = Mo(u, h, E, null), u.flags |= 2, s.return = t, u.return = t, s.sibling = u, t.child = s, Vo(t, e.child, null, E), s = t.child, s.memoizedState = Rd(E), s.childLanes = _d(e, r, E), t.memoizedState = Td, Ii(null, s));
    if (eo(t), Rf(u)) {
      if (r = u.nextSibling && u.nextSibling.dataset, r) var N = r.dgst;
      return r = N, r !== "" && (s = Error(c(419)), s.stack = "", s.digest = r, ki({
        value: s,
        source: null,
        stack: null
      })), Ms(e, t, E);
    }
    if (ht || ko(e, t, E, !1), r = (E & e.childLanes) !== 0, ht || r) {
      if (Ja.current !== null) return Ms(e, t, E);
      if (r = Je, r !== null && (s = Hh(r, E), s !== 0 && s !== h.retryLane)) throw h.retryLane = s, Oo(e, s), nn(r, e, s), Ed;
      return Tf(u) || Ks(), Ms(e, t, E);
    }
    return Tf(u) ? (t.flags |= 192, t.child = e.child, null) : (e = h.treeContext, et = On(u.nextSibling), Et = t, Me = !0, Xa = null, _n = !1, e !== null && Bv(t, e), t = Nd(t, s.children), t.flags |= 134221824, t);
  }
  function e0(e, t, n) {
    e.lanes |= t;
    var r = e.alternate;
    r !== null && (r.lanes |= t), us(e.return, t, n);
  }
  function t0(e) {
    for (var t = null; e !== null; ) {
      var n = e.alternate;
      n !== null && bs(n) === null && (t = e), e = e.sibling;
    }
    return t;
  }
  function zs(e, t, n, r, s, u) {
    var h = e.memoizedState;
    h === null ? e.memoizedState = {
      isBackwards: t,
      rendering: null,
      renderingStartTime: 0,
      last: r,
      tail: n,
      tailMode: s,
      treeForkCount: u
    } : (h.isBackwards = t, h.rendering = null, h.renderingStartTime = 0, h.last = r, h.tail = n, h.tailMode = s, h.treeForkCount = u);
  }
  function jd(e) {
    var t = e.child;
    for (e.child = null; t !== null; ) {
      var n = t.sibling;
      t.sibling = e.child, e.child = t, t = n;
    }
  }
  function Od(e, t, n) {
    var r = t.pendingProps, s = r.revealOrder, u = r.tail;
    r = r.children;
    var h = zt.current;
    if (t.flags & 128) return Yi(t, h), null;
    var E = (h & 2) !== 0;
    if (E ? (h = h & 1 | 2, t.flags |= 128) : h &= 1, Yi(t, h), s === "backwards" && e !== null ? (jd(e), bt(e, t, r, n), jd(e)) : bt(e, t, r, n), r = Me ? Di : 0, !E && e !== null && (e.flags & 128) !== 0) e: for (e = t.child; e !== null; ) {
      if (e.tag === 13) e.memoizedState !== null && e0(e, n, t);
      else if (e.tag === 19) e0(e, n, t);
      else if (e.child !== null) {
        e.child.return = e, e = e.child;
        continue;
      }
      if (e === t) break e;
      for (; e.sibling === null; ) {
        if (e.return === null || e.return === t) break e;
        e = e.return;
      }
      e.sibling.return = e.return, e = e.sibling;
    }
    switch (s) {
      case "backwards":
        n = t0(t.child), n === null ? (s = t.child, t.child = null) : (s = n.sibling, n.sibling = null, jd(t)), zs(t, !0, s, null, u, r);
        break;
      case "unstable_legacy-backwards":
        for (n = null, s = t.child, t.child = null; s !== null; ) {
          if (e = s.alternate, e !== null && bs(e) === null) {
            t.child = s;
            break;
          }
          e = s.sibling, s.sibling = n, n = s, s = e;
        }
        zs(t, !0, n, null, u, r);
        break;
      case "together":
        zs(t, !1, null, null, void 0, r);
        break;
      case "independent":
        t.memoizedState = null;
        break;
      default:
        n = t0(t.child), n === null ? (s = t.child, t.child = null) : (s = n.sibling, n.sibling = null), zs(t, !1, s, n, u, r);
    }
    return t.child;
  }
  function n0(e, t, n) {
    var r = t.pendingProps;
    return Ka(t, t.type, r.value), bt(e, t, r.children, n), t.child;
  }
  function _a(e, t, n) {
    if (e !== null && (t.dependencies = e.dependencies), ro |= t.lanes, (n & t.childLanes) === 0) if (e !== null) {
      if (ko(e, t, n, !1), (n & t.childLanes) === 0) return null;
    } else return null;
    if (e !== null && t.child !== e.child) throw Error(c(153));
    if (t.child !== null) {
      for (e = t.child, n = xa(e, e.pendingProps), t.child = n, n.return = t; e.sibling !== null; ) e = e.sibling, n = n.sibling = xa(e, e.pendingProps), n.return = t;
      n.sibling = null;
    }
    return t.child;
  }
  function Md(e, t) {
    return (e.lanes & t) !== 0 ? !0 : (e = e.dependencies, !!(e !== null && ds(e)));
  }
  function Ex(e, t, n) {
    switch (t.tag) {
      case 3:
        $e(t, t.stateNode.containerInfo), Ka(t, ft, e.memoizedState.cache), zo();
        break;
      case 27:
      case 5:
        Ye(t);
        break;
      case 4:
        $e(t, t.stateNode.containerInfo);
        break;
      case 10:
        Ka(t, t.type, t.memoizedProps.value);
        break;
      case 31:
        if (t.memoizedState !== null) return t.flags |= 128, ad(t), null;
        break;
      case 13:
        var r = t.memoizedState;
        if (r !== null) {
          if (r.dehydrated !== null) return eo(t), t.flags |= 128, null;
          r = ko(e, t, n, !1);
          var s = t.child.childLanes;
          return r || (n & s) !== 0 ? Jp(e, t, n) : (eo(t), e = _a(e, t, n), e !== null ? e.sibling : null);
        }
        eo(t);
        break;
      case 19:
        if (t.flags & 128) return Od(e, t, n);
        if (s = (e.flags & 128) !== 0, r = (n & t.childLanes) !== 0, r || (ko(e, t, n, !1), r = (n & t.childLanes) !== 0), s) {
          if (r) return Od(e, t, n);
          t.flags |= 128;
        }
        if (s = t.memoizedState, s !== null && (s.rendering = null, s.tail = null, s.lastEffect = null), Yi(t, zt.current), r) break;
        return null;
      case 22:
        return t.lanes = 0, Ip(e, t, n, t.pendingProps);
      case 24:
        Ka(t, ft, e.memoizedState.cache);
    }
    return _a(e, t, n);
  }
  function a0(e, t, n) {
    if (e !== null) if (e.memoizedProps !== t.pendingProps) ht = !0;
    else {
      if (!Md(e, n) && (t.flags & 128) === 0) return ht = !1, Ex(e, t, n);
      ht = (e.flags & 131072) !== 0;
    }
    else ht = !1, Me && (t.flags & 1048576) !== 0 && Hv(t, Di, t.index);
    switch (t.lanes = 0, t.tag) {
      case 16:
        e: {
          var r = t.pendingProps;
          if (e = Uo(t.elementType), t.type = e, typeof e == "function") Uu(e) ? (r = Wo(e, r), t.tag = 1, t = Zp(null, t, e, r, n)) : (t.tag = 0, t = Ad(null, t, e, r, n));
          else {
            if (e != null) {
              var s = e.$$typeof;
              if (s === I) {
                t.tag = 11, t = Gp(null, t, e, r, n);
                break e;
              } else if (s === ae) {
                t.tag = 14, t = Wp(null, t, e, r, n);
                break e;
              } else if (s === H) {
                t.tag = 10, t.type = e, t = n0(null, t, n);
                break e;
              }
            }
            throw t = ie(e) || e, Error(c(306, t, ""));
          }
        }
        return t;
      case 0:
        return Ad(e, t, t.type, t.pendingProps, n);
      case 1:
        return r = t.type, s = Wo(r, t.pendingProps), Zp(e, t, r, s, n);
      case 3:
        e: {
          if ($e(t, t.stateNode.containerInfo), e === null) throw Error(c(387));
          r = t.pendingProps;
          var u = t.memoizedState;
          s = u.element, Fu(e, t), $i(t, r, null, n);
          var h = t.memoizedState;
          if (r = h.cache, Ka(t, ft, r), r !== u.cache && Pu(t, [ft], n, !0), Vi(), r = h.element, u.isDehydrated) if (u = {
            element: r,
            isDehydrated: !1,
            cache: h.cache
          }, t.updateQueue.baseState = u, t.memoizedState = u, t.flags & 256) {
            t = Fp(e, t, r, n);
            break e;
          } else if (r !== s) {
            s = An(Error(c(424)), t), ki(s), t = Fp(e, t, r, n);
            break e;
          } else
            for (e = t.stateNode.containerInfo, e.nodeType === 9 ? e = e.body : e = e.nodeName === "HTML" ? e.ownerDocument.body : e, et = On(e.firstChild), Et = t, Me = !0, Xa = null, _n = !0, n = Kv(t, null, r, n), t.child = n; n; ) n.flags = n.flags & -3 | 134221824, n = n.sibling;
          else {
            if (zo(), r === s) {
              t = _a(e, t, n);
              break e;
            }
            bt(e, t, r, n);
          }
          t = t.child;
        }
        return t;
      case 26:
        return Dr(e, t), e === null ? (n = jg(t.type, null, t.pendingProps, null)) ? t.memoizedState = n : Me || (t.stateNode = sg(t.type, t.pendingProps, wt.current, t)) : t.memoizedState = jg(t.type, e.memoizedProps, t.pendingProps, e.memoizedState), null;
      case 27:
        return Ye(t), e === null && Me && (r = t.stateNode = Tg(t.type, t.pendingProps, wt.current), Et = t, _n = !0, s = et, co(t.type) ? (_f = s, et = On(r.firstChild)) : et = s), bt(e, t, t.pendingProps.children, n), Dr(e, t), e === null && (t.flags |= 4194304), t.child;
      case 5:
        return e === null && Me && ((s = r = et) && (r = pC(r, t.type, t.pendingProps, _n), r !== null ? (t.stateNode = r, Et = t, et = On(r.firstChild), _n = !1, s = !0) : s = !1), s || Qa(t)), Ye(t), s = t.type, u = t.pendingProps, h = e !== null ? e.memoizedProps : null, r = u.children, bf(s, u) ? r = null : h !== null && bf(s, h) && (t.flags |= 32), t.memoizedState !== null && (s = id(e, t, ux, null, null, n), Fr._currentValue = s), Dr(e, t), bt(e, t, r, n), t.child;
      case 6:
        return e === null && Me && ((e = n = et) && (n = gC(n, t.pendingProps, _n), n !== null ? (t.stateNode = n, Et = t, et = null, e = !0) : e = !1), e || Qa(t)), null;
      case 13:
        return Jp(e, t, n);
      case 4:
        return $e(t, t.stateNode.containerInfo), r = t.pendingProps, e === null ? t.child = Vo(t, null, r, n) : bt(e, t, r, n), t.child;
      case 11:
        return Gp(e, t, t.type, t.pendingProps, n);
      case 7:
        return r = t.pendingProps, Dr(e, t), bt(e, t, r, n), t.child;
      case 8:
        return bt(e, t, t.pendingProps.children, n), t.child;
      case 12:
        return bt(e, t, t.pendingProps.children, n), t.child;
      case 10:
        return n0(e, t, n);
      case 9:
        return s = t.type._context, r = t.pendingProps.children, Lo(t), s = Ot(s), r = r(s), t.flags |= 1, bt(e, t, r, n), t.child;
      case 14:
        return Wp(e, t, t.type, t.pendingProps, n);
      case 15:
        return Pp(e, t, t.type, t.pendingProps, n);
      case 19:
        return Od(e, t, n);
      case 31:
        return xx(e, t, n);
      case 22:
        return Ip(e, t, n, t.pendingProps);
      case 24:
        return Lo(t), r = Ot(ft), e === null ? (s = Qu(), s === null && (s = Je, u = Iu(), s.pooledCache = u, u.refCount++, u !== null && (s.pooledCacheLanes |= n), s = u), t.memoizedState = {
          parent: r,
          cache: s
        }, Zu(t), Ka(t, ft, s)) : ((e.lanes & n) !== 0 && (Fu(e, t), $i(t, null, null, n), Vi()), s = e.memoizedState, u = t.memoizedState, s.parent !== r ? (s = {
          parent: r,
          cache: r
        }, t.memoizedState = s, t.lanes === 0 && (t.memoizedState = t.updateQueue.baseState = s), Ka(t, ft, r)) : (r = u.cache, Ka(t, ft, r), r !== s.cache && Pu(t, [ft], n, !0))), bt(e, t, t.pendingProps.children, n), t.child;
      case 30:
        return t.stateNode === null && (t.stateNode = {
          autoName: null,
          paired: null,
          clones: null,
          ref: null
        }), r = t.pendingProps, r.name != null && r.name !== "auto" ? t.flags |= e === null ? 18882560 : 18874368 : Me && ss(t), e !== null && e.memoizedProps.name !== r.name ? t.flags |= 4194816 : Dr(e, t), bt(e, t, r.children, n), t.child;
      case 29:
        throw t.pendingProps;
    }
    throw Error(c(156, t.tag));
  }
  function Na(e) {
    e.flags |= 4;
  }
  function zd(e, t, n, r, s) {
    var u;
    if ((u = (e.mode & 32) !== 0) && (u = n === null ? Dg(t, r) : Dg(t, r) && (r.src !== n.src || r.srcSet !== n.srcSet)), u) {
      if (e.flags |= 16777216, (s & 335544128) === s) if (e.stateNode.complete) e.flags |= 8192;
      else if (B0()) e.flags |= 8192;
      else throw qo = vs, Ku;
    } else e.flags &= -16777217;
  }
  function o0(e, t) {
    if (t.type !== "stylesheet" || (t.state.loading & 4) !== 0) e.flags &= -16777217;
    else if (e.flags |= 16777216, !kg(t)) if (B0()) e.flags |= 8192;
    else throw qo = vs, Ku;
  }
  function Ds(e, t) {
    t !== null && (e.flags |= 4), e.flags & 16384 && (t = e.tag !== 22 ? Dh() : 536870912, e.lanes |= t, Ur |= t);
  }
  function Xi(e, t) {
    if (!Me) switch (e.tailMode) {
      case "visible":
        break;
      case "collapsed":
        for (var n = e.tail, r = null; n !== null; ) n.alternate !== null && (r = n), n = n.sibling;
        r === null ? t || e.tail === null ? e.tail = null : e.tail.sibling = null : r.sibling = null;
        break;
      default:
        for (t = e.tail, n = null; t !== null; ) t.alternate !== null && (n = t), t = t.sibling;
        n === null ? e.tail = null : n.sibling = null;
    }
  }
  function tt(e) {
    var t = e.alternate !== null && e.alternate.child === e.child, n = 0, r = 0;
    if (t) for (var s = e.child; s !== null; ) n |= s.lanes | s.childLanes, r |= s.subtreeFlags & 1206910976, r |= s.flags & 1206910976, s.return = e, s = s.sibling;
    else for (s = e.child; s !== null; ) n |= s.lanes | s.childLanes, r |= s.subtreeFlags, r |= s.flags, s.return = e, s = s.sibling;
    return e.subtreeFlags |= r, e.childLanes = n, t;
  }
  function Ax(e, t, n) {
    var r = t.pendingProps;
    switch ($u(t), t.tag) {
      case 16:
      case 15:
      case 0:
      case 11:
      case 7:
      case 8:
      case 12:
      case 9:
      case 14:
        return tt(t), null;
      case 1:
        return tt(t), null;
      case 3:
        return n = t.stateNode, r = null, e !== null && (r = e.memoizedState.cache), t.memoizedState.cache !== r && (t.flags |= 2048), Aa(ft), Vt(), n.pendingContext && (n.context = n.pendingContext, n.pendingContext = null), (e === null || e.child === null) && (Rr(t) ? Na(t) : e === null || e.memoizedState.isDehydrated && (t.flags & 256) === 0 || (t.flags |= 1024, Gu())), tt(t), null;
      case 26:
        var s = t.type, u = t.memoizedState;
        return e === null ? (Na(t), u !== null ? (tt(t), o0(t, u)) : (tt(t), zd(t, s, null, r, n))) : u ? u !== e.memoizedState ? (Na(t), tt(t), o0(t, u)) : (tt(t), t.flags &= -16777217) : (e = e.memoizedProps, e !== r && Na(t), tt(t), zd(t, s, e, r, n)), null;
      case 27:
        if (pa(t), n = wt.current, s = t.type, e !== null && t.stateNode != null) e.memoizedProps !== r && Na(t);
        else {
          if (!r) {
            if (t.stateNode === null) throw Error(c(166));
            return tt(t), t.subtreeFlags &= -33554433, null;
          }
          e = rt.current, Rr(t) ? Uv(t, e) : (e = Tg(s, r, n), t.stateNode = e, Na(t));
        }
        return tt(t), t.subtreeFlags &= -33554433, null;
      case 5:
        if (pa(t), s = t.type, e !== null && t.stateNode != null) e.memoizedProps !== r && Na(t);
        else {
          if (!r) {
            if (t.stateNode === null) throw Error(c(166));
            return tt(t), t.subtreeFlags &= -33554433, null;
          }
          if (u = rt.current, Rr(t)) Uv(t, u);
          else {
            var h = rl(wt.current);
            switch (u) {
              case 1:
                u = h.createElementNS("http://www.w3.org/2000/svg", s);
                break;
              case 2:
                u = h.createElementNS("http://www.w3.org/1998/Math/MathML", s);
                break;
              default:
                switch (s) {
                  case "svg":
                    u = h.createElementNS("http://www.w3.org/2000/svg", s);
                    break;
                  case "math":
                    u = h.createElementNS("http://www.w3.org/1998/Math/MathML", s);
                    break;
                  case "script":
                    u = h.createElement("div"), u.innerHTML = "<script><\/script>", u = u.removeChild(u.firstChild);
                    break;
                  case "select":
                    u = typeof r.is == "string" ? h.createElement("select", { is: r.is }) : h.createElement("select"), r.multiple ? u.multiple = !0 : r.size && (u.size = r.size);
                    break;
                  default:
                    u = typeof r.is == "string" ? h.createElement(s, { is: r.is }) : h.createElement(s);
                }
            }
            u[jt] = t, u[Zt] = r;
            e: for (h = t.child; h !== null; ) {
              if (h.tag === 5 || h.tag === 6) u.appendChild(h.stateNode);
              else if (h.tag !== 4 && h.tag !== 27 && h.child !== null) {
                h.child.return = h, h = h.child;
                continue;
              }
              if (h === t) break e;
              for (; h.sibling === null; ) {
                if (h.return === null || h.return === t) break e;
                h = h.return;
              }
              h.sibling.return = h.return, h = h.sibling;
            }
            t.stateNode = u;
            e: switch (kt(u, s, r), s) {
              case "button":
              case "input":
              case "select":
              case "textarea":
                r = !!r.autoFocus;
                break e;
              case "img":
                r = !0;
                break e;
              default:
                r = !1;
            }
            r && Na(t);
          }
        }
        return tt(t), t.subtreeFlags &= -33554433, zd(t, t.type, e === null ? null : e.memoizedProps, t.pendingProps, n), null;
      case 6:
        if (e && t.stateNode != null) e.memoizedProps !== r && Na(t);
        else {
          if (typeof r != "string" && t.stateNode === null) throw Error(c(166));
          if (e = wt.current, Rr(t)) {
            if (e = t.stateNode, n = t.memoizedProps, r = null, s = Et, s !== null) switch (s.tag) {
              case 27:
              case 5:
                r = s.memoizedProps;
            }
            e[jt] = t, e = !!(e.nodeValue === n || r !== null && r.suppressHydrationWarning === !0 || og(e.nodeValue, n)), e || Qa(t, !0);
          } else e = rl(e).createTextNode(r), e[jt] = t, t.stateNode = e;
        }
        return tt(t), null;
      case 31:
        if (n = t.memoizedState, e === null || e.memoizedState !== null) {
          if (r = Rr(t), n !== null) {
            if (e === null) {
              if (!r) throw Error(c(318));
              if (e = t.memoizedState, e = e !== null ? e.dehydrated : null, !e) throw Error(c(557));
              e[jt] = t;
            } else zo(), (t.flags & 128) === 0 && (t.memoizedState = null), t.flags |= 4;
            tt(t), e = !1;
          } else n = Gu(), e !== null && e.memoizedState !== null && (e.memoizedState.hydrationErrors = n), e = !0;
          if (!e)
            return t.flags & 256 ? (hn(t), t) : (hn(t), null);
          if ((t.flags & 128) !== 0) throw Error(c(558));
        }
        return tt(t), null;
      case 13:
        if (r = t.memoizedState, e === null || e.memoizedState !== null && e.memoizedState.dehydrated !== null) {
          if (s = Rr(t), r !== null && r.dehydrated !== null) {
            if (e === null) {
              if (!s) throw Error(c(318));
              if (s = t.memoizedState, s = s !== null ? s.dehydrated : null, !s) throw Error(c(317));
              s[jt] = t;
            } else zo(), (t.flags & 128) === 0 && (t.memoizedState = null), t.flags |= 4;
            tt(t), s = !1;
          } else s = Gu(), e !== null && e.memoizedState !== null && (e.memoizedState.hydrationErrors = s), s = !0;
          if (!s)
            return t.flags & 256 ? (hn(t), t) : (hn(t), null);
        }
        return hn(t), (t.flags & 128) !== 0 ? (t.lanes = n, t) : (n = r !== null, e = e !== null && e.memoizedState !== null, n && (r = t.child, s = null, r.alternate !== null && r.alternate.memoizedState !== null && r.alternate.memoizedState.cachePool !== null && (s = r.alternate.memoizedState.cachePool.pool), u = null, r.memoizedState !== null && r.memoizedState.cachePool !== null && (u = r.memoizedState.cachePool.pool), u !== s && (r.flags |= 2048)), n !== e && n && (t.child.flags |= 8192), Ds(t, t.updateQueue), tt(t), null);
      case 4:
        return Vt(), e === null && eg(t.stateNode.containerInfo), t.flags |= 67108864, tt(t), null;
      case 10:
        return Aa(t.type), tt(t), null;
      case 19:
        if (od(t), r = t.memoizedState, r === null) return tt(t), null;
        if (s = (t.flags & 128) !== 0, u = r.rendering, u === null) if (s) Xi(r, !1);
        else {
          if (st !== 0 || e !== null && (e.flags & 128) !== 0) for (e = t.child; e !== null; ) {
            if (u = bs(e), u !== null) {
              for (t.flags |= 128, Xi(r, !1), e = u.updateQueue, t.updateQueue = e, Ds(t, e), t.subtreeFlags = 0, e = n, n = t.child; n !== null; ) Dv(n, e), n = n.sibling;
              return Yi(t, zt.current & 1 | 2), Me && Ca(t, r.treeForkCount), t.child;
            }
            e = e.sibling;
          }
          r.tail !== null && $t() > Ps && (t.flags |= 128, s = !0, Xi(r, !1), t.lanes = 4194304);
        }
        else {
          if (!s) if (e = bs(u), e !== null) {
            if (t.flags |= 128, s = !0, e = e.updateQueue, t.updateQueue = e, Ds(t, e), Xi(r, !0), r.tail === null && r.tailMode !== "collapsed" && r.tailMode !== "visible" && !u.alternate && !Me) return tt(t), null;
          } else 2 * $t() - r.renderingStartTime > Ps && n !== 536870912 && (t.flags |= 128, s = !0, Xi(r, !1), t.lanes = 4194304);
          r.isBackwards ? (u.sibling = t.child, t.child = u) : (e = r.last, e !== null ? e.sibling = u : t.child = u, r.last = u);
        }
        if (r.tail !== null) {
          e = r.tail;
          e: {
            for (n = e; n !== null; ) {
              if (n.alternate !== null) {
                n = !1;
                break e;
              }
              n = n.sibling;
            }
            n = !0;
          }
          return r.rendering = e, r.tail = e.sibling, r.renderingStartTime = $t(), e.sibling = null, u = zt.current, u = s ? u & 1 | 2 : u & 1, r.tailMode === "visible" || r.tailMode === "collapsed" || !n || Me ? Yi(t, u) : (n = u, Oe(Mt, t), Oe(zt, n), Ut === null && (Ut = t)), Me && Ca(t, r.treeForkCount), e;
        }
        return tt(t), null;
      case 22:
      case 23:
        return hn(t), nd(), r = t.memoizedState !== null, e !== null ? e.memoizedState !== null !== r && (t.flags |= 8192) : r && (t.flags |= 8192), r ? (n & 536870912) !== 0 && (t.flags & 128) === 0 && (tt(t), t.subtreeFlags & 6 && (t.flags |= 8192)) : tt(t), n = t.updateQueue, n !== null && Ds(t, n.retryQueue), n = null, e !== null && e.memoizedState !== null && e.memoizedState.cachePool !== null && (n = e.memoizedState.cachePool.pool), r = null, t.memoizedState !== null && t.memoizedState.cachePool !== null && (r = t.memoizedState.cachePool.pool), r !== n && (t.flags |= 2048), e !== null && Be(Bo), null;
      case 24:
        return n = null, e !== null && (n = e.memoizedState.cache), t.memoizedState.cache !== n && (t.flags |= 2048), Aa(ft), tt(t), null;
      case 25:
        return null;
      case 30:
        return t.flags |= 33554432, tt(t), null;
    }
    throw Error(c(156, t.tag));
  }
  function Tx(e, t) {
    switch ($u(t), t.tag) {
      case 1:
        return e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
      case 3:
        return Aa(ft), Vt(), e = t.flags, (e & 65536) !== 0 && (e & 128) === 0 ? (t.flags = e & -65537 | 128, t) : null;
      case 26:
      case 27:
      case 5:
        return pa(t), null;
      case 31:
        if (t.memoizedState !== null) {
          if (hn(t), t.alternate === null) throw Error(c(340));
          zo();
        }
        return e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
      case 13:
        if (hn(t), e = t.memoizedState, e !== null && e.dehydrated !== null) {
          if (t.alternate === null) throw Error(c(340));
          zo();
        }
        return e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
      case 19:
        return od(t), e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, e = t.memoizedState, e !== null && (e.rendering = null, e.tail = null), t.flags |= 4, t) : null;
      case 4:
        return Vt(), null;
      case 10:
        return Aa(t.type), null;
      case 22:
      case 23:
        return hn(t), nd(), e !== null && Be(Bo), e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
      case 24:
        return Aa(ft), null;
      case 25:
        return null;
      default:
        return null;
    }
  }
  function r0(e, t) {
    switch ($u(t), t.tag) {
      case 3:
        Aa(ft), Vt();
        break;
      case 26:
      case 27:
      case 5:
        pa(t);
        break;
      case 4:
        Vt();
        break;
      case 31:
        t.memoizedState !== null && hn(t);
        break;
      case 13:
        hn(t);
        break;
      case 19:
        od(t);
        break;
      case 10:
        Aa(t.type);
        break;
      case 22:
      case 23:
        hn(t), nd(), e !== null && Be(Bo);
        break;
      case 24:
        Aa(ft);
    }
  }
  function Qi(e, t) {
    try {
      var n = t.updateQueue, r = n !== null ? n.lastEffect : null;
      if (r !== null) {
        var s = r.next;
        n = s;
        do {
          if ((n.tag & e) === e) {
            r = void 0;
            var u = n.create, h = n.inst;
            r = u(), h.destroy = r;
          }
          n = n.next;
        } while (n !== s);
      }
    } catch (E) {
      Qe(t, t.return, E);
    }
  }
  function no(e, t, n) {
    try {
      var r = t.updateQueue, s = r !== null ? r.lastEffect : null;
      if (s !== null) {
        var u = s.next;
        r = u;
        do {
          if ((r.tag & e) === e) {
            var h = r.inst, E = h.destroy;
            if (E !== void 0) {
              h.destroy = void 0, s = t;
              var N = n, q = E;
              try {
                q();
              } catch (P) {
                Qe(s, N, P);
              }
            }
          }
          r = r.next;
        } while (r !== u);
      }
    } catch (P) {
      Qe(t, t.return, P);
    }
  }
  function i0(e) {
    var t = e.updateQueue;
    if (t !== null) {
      var n = e.stateNode;
      try {
        Fv(t, n);
      } catch (r) {
        Qe(e, e.return, r);
      }
    }
  }
  function l0(e, t, n) {
    n.props = Wo(e.type, e.memoizedProps), n.state = e.memoizedState;
    try {
      n.componentWillUnmount();
    } catch (r) {
      Qe(e, t, r);
    }
  }
  function Jn(e, t) {
    try {
      var n = e.ref;
      if (n !== null) {
        switch (e.tag) {
          case 26:
          case 27:
          case 5:
            var r = e.stateNode;
            break;
          case 30:
            var s = e.stateNode, u = Sa(e.memoizedProps, s);
            (s.ref === null || s.ref.name !== u) && (s.ref = pg(u)), r = s.ref;
            break;
          case 7:
            if (e.stateNode === null) {
              var h = new yn(e);
              p(e.child, !1, hC, h, void 0, void 0), e.stateNode = h;
            }
            r = e.stateNode;
            break;
          default:
            r = e.stateNode;
        }
        typeof n == "function" ? e.refCleanup = n(r) : n.current = r;
      }
    } catch (E) {
      Qe(e, t, E);
    }
  }
  function Dt(e, t) {
    var n = e.ref, r = e.refCleanup;
    if (n !== null) if (typeof r == "function") try {
      r();
    } catch (s) {
      Qe(e, t, s);
    } finally {
      e.refCleanup = null, e = e.alternate, e != null && (e.refCleanup = null);
    }
    else if (typeof n == "function") try {
      n(null);
    } catch (s) {
      Qe(e, t, s);
    }
    else n.current = null;
  }
  function ks(e, t) {
    if ((e.tag === 5 || e.tag === 27 || e.tag === 6) && e.alternate === null && t !== null) for (var n = 0; n < t.length; n++) xg(e.stateNode, t[n]);
  }
  function s0(e) {
    for (var t = e.return; t !== null && (kd(t) && xg(e.stateNode, t.stateNode), !Dd(t)); )
      t = t.return;
  }
  function Ki(e) {
    for (var t = e.return; t !== null && (kd(t) && vC(e.stateNode, t.stateNode), !Dd(t)); )
      t = t.return;
  }
  function Dd(e) {
    return e.tag === 5 || e.tag === 3 || e.tag === 27;
  }
  function kd(e) {
    return e && e.tag === 7 && e.stateNode !== null;
  }
  function Ld(e) {
    var t = e.type, n = e.memoizedProps, r = e.stateNode;
    try {
      e: switch (t) {
        case "button":
        case "input":
        case "select":
        case "textarea":
          n.autoFocus && r.focus();
          break e;
        case "img":
          n.src ? r.src = n.src : n.srcSet && (r.srcset = n.srcSet);
      }
    } catch (s) {
      Qe(e, e.return, s);
    }
  }
  function Hd(e, t, n) {
    try {
      var r = e.stateNode;
      Kx(r, e.type, n, t), r[Zt] = t;
    } catch (s) {
      Qe(e, e.return, s);
    }
  }
  function c0(e) {
    return e.tag === 5 || e.tag === 3 || e.tag === 26 || e.tag === 27 && co(e.type) || e.tag === 4;
  }
  function Bd(e) {
    e: for (; ; ) {
      for (; e.sibling === null; ) {
        if (e.return === null || c0(e.return)) return null;
        e = e.return;
      }
      for (e.sibling.return = e.return, e = e.sibling; e.tag !== 5 && e.tag !== 6 && e.tag !== 18; ) {
        if (e.tag === 27 && co(e.type) || e.flags & 2 || e.child === null || e.tag === 4) continue e;
        e.child.return = e, e = e.child;
      }
      if (!(e.flags & 2)) return e.stateNode;
    }
  }
  function Ud(e, t, n, r) {
    var s = e.tag;
    if (s === 5 || s === 6) s = e.stateNode, t ? (n.nodeType === 9 ? n.body : n.nodeName === "HTML" ? n.ownerDocument.body : n).insertBefore(s, t) : (t = n.nodeType === 9 ? n.body : n.nodeName === "HTML" ? n.ownerDocument.body : n, t.appendChild(s), n = n._reactRootContainer, n != null || t.onclick !== null || (t.onclick = Kn)), ks(e, r), Ve = !0;
    else if (s !== 4 && (s === 27 && (ks(e, r), r = null, co(e.type) && (n = e.stateNode, t = null)), e = e.child, e !== null)) for (Ud(e, t, n, r), e = e.sibling; e !== null; ) Ud(e, t, n, r), e = e.sibling;
  }
  function Ls(e, t, n, r) {
    var s = e.tag;
    if (s === 5 || s === 6) s = e.stateNode, t ? n.insertBefore(s, t) : n.appendChild(s), ks(e, r), Ve = !0;
    else if (s !== 4 && (s === 27 && (ks(e, r), r = null, co(e.type) && (n = e.stateNode)), e = e.child, e !== null)) for (Ls(e, t, n, r), e = e.sibling; e !== null; ) Ls(e, t, n, r), e = e.sibling;
  }
  function u0(e) {
    var t = e.stateNode, n = e.memoizedProps;
    try {
      for (var r = e.type, s = t.attributes; s.length; ) t.removeAttributeNode(s[0]);
      kt(t, r, n), t[jt] = e, t[Zt] = n;
    } catch (u) {
      Qe(e, e.return, u);
    }
  }
  var Hs = !1, vn = null;
  function d0(e) {
    (e.tag === 30 || (e.subtreeFlags & 33554432) !== 0) && (Hs = !0);
  }
  var ea = null;
  function f0() {
    var e = ea;
    return ea = null, e;
  }
  var Jt = 0;
  function kr(e, t, n, r, s) {
    return Jt = 0, m0(e.child, t, n, r, s);
  }
  function m0(e, t, n, r, s) {
    for (var u = !1; e !== null; ) {
      if (e.tag === 5) {
        var h = e.stateNode;
        if (r !== null) {
          var E = xf(h);
          r.push(E), E.view && (u = !0);
        } else u || xf(h).view && (u = !0);
        Hs = !0, mg(h, Jt === 0 ? t : t + "_" + Jt, n), Jt++;
      } else (e.tag !== 22 || e.memoizedState === null) && (e.tag === 30 && s || m0(e.child, t, n, r, s) && (u = !0));
      e = e.sibling;
    }
    return u;
  }
  function ta(e, t) {
    for (; e !== null; )
      e.tag === 5 ? hg(e.stateNode, e.memoizedProps) : (e.tag !== 22 || e.memoizedState === null) && (e.tag === 30 && t || ta(e.child, t)), e = e.sibling;
  }
  function Bs(e) {
    if ((e.subtreeFlags & 18874368) !== 0) for (e = e.child; e !== null; ) {
      if ((e.tag !== 22 || e.memoizedState === null) && (Bs(e), e.tag === 30 && (e.flags & 18874368) !== 0 && e.stateNode.paired)) {
        var t = e.memoizedProps;
        if (t.name == null || t.name === "auto") throw Error(c(544));
        var n = t.name;
        t = wa(t.default, t.share), t !== "none" && (kr(e, n, t, null, !1) || ta(e.child, !1));
      }
      e = e.sibling;
    }
  }
  function qd(e, t) {
    if (e.tag === 30) {
      var n = e.stateNode, r = e.memoizedProps, s = Sa(r, n), u = wa(r.default, n.paired ? r.share : r.enter);
      u !== "none" ? kr(e, s, u, null, !1) ? (Bs(e), n.paired || t || Yr(e, r.onEnter)) : ta(e.child, !1) : Bs(e);
    } else if ((e.subtreeFlags & 33554432) !== 0) for (e = e.child; e !== null; ) qd(e, t), e = e.sibling;
    else Bs(e);
  }
  function Vd(e) {
    if (vn !== null && vn.size !== 0) {
      var t = vn;
      if ((e.subtreeFlags & 18874368) !== 0) for (e = e.child; e !== null; ) {
        if (e.tag !== 22 || e.memoizedState === null) {
          if (e.tag === 30 && (e.flags & 18874368) !== 0) {
            var n = e.memoizedProps, r = n.name;
            if (r != null && r !== "auto") {
              var s = t.get(r);
              if (s !== void 0) {
                var u = wa(n.default, n.share);
                if (u !== "none" && (kr(e, r, u, null, !1) ? (u = e.stateNode, s.paired = u, u.paired = s, Yr(e, n.onShare)) : ta(e.child, !1)), t.delete(r), t.size === 0) break;
              }
            }
          }
          Vd(e);
        }
        e = e.sibling;
      }
    }
  }
  function $d(e) {
    if (e.tag === 30) {
      var t = e.memoizedProps, n = Sa(t, e.stateNode), r = vn !== null ? vn.get(n) : void 0, s = wa(t.default, r !== void 0 ? t.share : t.exit);
      s !== "none" && (kr(e, n, s, null, !1) ? r !== void 0 ? (s = e.stateNode, r.paired = s, s.paired = r, vn.delete(n), Yr(e, t.onShare)) : Yr(e, t.onExit) : ta(e.child, !1)), vn !== null && Vd(e);
    } else if ((e.subtreeFlags & 33554432) !== 0) for (e = e.child; e !== null; ) $d(e), e = e.sibling;
    else vn !== null && Vd(e);
  }
  function h0(e) {
    for (e = e.child; e !== null; ) {
      if (e.tag === 30) {
        var t = e.memoizedProps, n = Sa(t, e.stateNode);
        t = wa(t.default, t.update), e.flags &= -5, t !== "none" && kr(e, n, t, e.memoizedState = [], !1);
      } else (e.subtreeFlags & 33554432) !== 0 && h0(e);
      e = e.sibling;
    }
  }
  function Yd(e) {
    if ((e.subtreeFlags & 18874368) !== 0) for (e = e.child; e !== null; ) {
      if (e.tag !== 22 || e.memoizedState === null) {
        if (e.tag === 30 && (e.flags & 18874368) !== 0) {
          var t = e.stateNode;
          t.paired !== null && (t.paired = null, ta(e.child, !1));
        }
        Yd(e);
      }
      e = e.sibling;
    }
  }
  function Us(e) {
    if (e.tag === 30) e.stateNode.paired = null, ta(e.child, !1), Yd(e);
    else if ((e.subtreeFlags & 33554432) !== 0) for (e = e.child; e !== null; ) Us(e), e = e.sibling;
    else Yd(e);
  }
  function v0(e) {
    for (e = e.child; e !== null; ) e.tag === 30 ? ta(e.child, !1) : (e.subtreeFlags & 33554432) !== 0 && v0(e), e = e.sibling;
  }
  function Gd(e, t, n, r, s, u, h) {
    for (var E = !1; t !== null; ) {
      if (t.tag === 5) {
        var N = t.stateNode;
        if (u !== null && Jt < u.length) {
          var q = u[Jt], P = xf(N);
          (q.view || P.view) && (E = !0);
          var ee;
          if (ee = (e.flags & 4) === 0) if (P.clip) ee = !0;
          else {
            ee = q.rect;
            var B = P.rect;
            ee = ee.y !== B.y || ee.x !== B.x || ee.height !== B.height || ee.width !== B.width;
          }
          ee && (e.flags |= 4), P.abs ? P = !q.abs : (q = q.rect, P = P.rect, P = q.height !== P.height || q.width !== P.width), P && (e.flags |= 32);
        } else e.flags |= 32;
        (e.flags & 4) !== 0 && mg(N, Jt === 0 ? n : n + "_" + Jt, s), E && (e.flags & 4) !== 0 || (ea === null && (ea = []), ea.push(N, Jt === 0 ? r : r + "_" + Jt, t.memoizedProps)), Jt++;
      } else (t.tag !== 22 || t.memoizedState === null) && (t.tag === 30 && h ? e.flags |= t.flags & 32 : Gd(e, t.child, n, r, s, u, h) && (E = !0));
      t = t.sibling;
    }
    return E;
  }
  function p0(e, t) {
    for (e = e.child; e !== null; ) {
      if (e.tag === 30) {
        var n = e.memoizedProps, r = e.stateNode, s = Sa(n, r), u = wa(n.default, n.update);
        if (t) {
          r = r.clones;
          var h = r === null ? null : r.map(nC);
        } else h = e.memoizedState, e.memoizedState = null;
        r = e;
        var E = e.child;
        Jt = 0, s = Gd(r, E, s, s, u, h, !1), (e.flags & 4) !== 0 && s && (t || Yr(e, n.onUpdate));
      } else (e.subtreeFlags & 33554432) !== 0 && p0(e, t);
      e = e.sibling;
    }
  }
  var At = !1, Ie = !1, na = !1, Wd = !1, g0 = typeof WeakSet == "function" ? WeakSet : Set, Tt = null, aa = !1, Zi = !1, qs = !1, Pd = !1;
  function Rx(e, t, n) {
    if (e = e.containerInfo, gf = Jr, e = Ev(e), Mu(e)) {
      if ("selectionStart" in e) var r = {
        start: e.selectionStart,
        end: e.selectionEnd
      };
      else e: {
        r = (r = e.ownerDocument) && r.defaultView || window;
        var s = r.getSelection && r.getSelection();
        if (s && s.rangeCount !== 0) {
          r = s.anchorNode;
          var u = s.anchorOffset, h = s.focusNode;
          s = s.focusOffset;
          try {
            r.nodeType, h.nodeType;
          } catch {
            r = null;
            break e;
          }
          var E = 0, N = -1, q = -1, P = 0, ee = 0, B = e, G = null;
          t: for (; ; ) {
            for (var fe; B !== r || u !== 0 && B.nodeType !== 3 || (N = E + u), B !== h || s !== 0 && B.nodeType !== 3 || (q = E + s), B.nodeType === 3 && (E += B.nodeValue.length), (fe = B.firstChild) !== null; )
              G = B, B = fe;
            for (; ; ) {
              if (B === e) break t;
              if (G === r && ++P === u && (N = E), G === h && ++ee === s && (q = E), (fe = B.nextSibling) !== null) break;
              B = G, G = B.parentNode;
            }
            B = fe;
          }
          r = N === -1 || q === -1 ? null : {
            start: N,
            end: q
          };
        } else r = null;
      }
      r = r || {
        start: 0,
        end: 0
      };
    } else r = null;
    for (yf = {
      focusedElem: e,
      selectionRange: r
    }, Jr = !1, n = (n & 335544064) === n, Tt = t, t = n ? 9270 : 1024; Tt !== null; ) {
      if (e = Tt, n && (r = e.deletions, r !== null)) for (u = 0; u < r.length; u++) n && $d(r[u]);
      if (e.alternate === null && (e.flags & 2) !== 0) n && d0(e), Vs(n);
      else {
        if (e.tag === 22) {
          if (r = e.alternate, e.memoizedState !== null) {
            r !== null && r.memoizedState === null && n && $d(r), Vs(n);
            continue;
          } else if (r !== null && r.memoizedState !== null) {
            n && d0(e), Vs(n);
            continue;
          }
        }
        r = e.child, (e.subtreeFlags & t) !== 0 && r !== null ? (r.return = e, Tt = r) : (n && h0(e), Vs(n));
      }
    }
    vn = null;
  }
  function Vs(e) {
    for (; Tt !== null; ) {
      var t = Tt, n = e, r = t.alternate, s = t.flags;
      switch (t.tag) {
        case 0:
        case 11:
        case 15:
          break;
        case 1:
          if ((s & 1024) !== 0 && r !== null) {
            n = void 0, s = r.memoizedProps, r = r.memoizedState;
            var u = t.stateNode;
            try {
              var h = Wo(t.type, s);
              n = u.getSnapshotBeforeUpdate(h, r), u.__reactInternalSnapshotBeforeUpdate = n;
            } catch (E) {
              Qe(t, t.return, E);
            }
          }
          break;
        case 3:
          if ((s & 1024) !== 0) {
            if (r = t.stateNode.containerInfo, n = r.nodeType, n === 9) Af(r);
            else if (n === 1) switch (r.nodeName) {
              case "HEAD":
              case "HTML":
              case "BODY":
                Af(r);
                break;
              default:
                r.textContent = "";
            }
          }
          break;
        case 5:
        case 26:
        case 27:
        case 6:
        case 4:
        case 17:
          break;
        case 30:
          n && r !== null && (n = Sa(r.memoizedProps, r.stateNode), s = t.memoizedProps, s = wa(s.default, s.update), s !== "none" && kr(r, n, s, r.memoizedState = [], !0));
          break;
        default:
          if ((s & 1024) !== 0) throw Error(c(163));
      }
      if (r = t.sibling, r !== null) {
        r.return = t.return, Tt = r;
        break;
      }
      Tt = t.return;
    }
  }
  function y0(e, t, n) {
    var r = n.flags;
    switch (n.tag) {
      case 0:
      case 11:
      case 15:
        oa(e, n), r & 4 && Qi(5, n);
        break;
      case 1:
        if (oa(e, n), r & 4) if (e = n.stateNode, t === null) try {
          e.componentDidMount();
        } catch (h) {
          Qe(n, n.return, h);
        }
        else {
          var s = Wo(n.type, t.memoizedProps);
          t = t.memoizedState;
          try {
            e.componentDidUpdate(s, t, e.__reactInternalSnapshotBeforeUpdate);
          } catch (h) {
            Qe(n, n.return, h);
          }
        }
        r & 64 && i0(n), r & 512 && Jn(n, n.return);
        break;
      case 3:
        if (oa(e, n), r & 64 && (e = n.updateQueue, e !== null)) {
          if (t = null, n.child !== null) switch (n.child.tag) {
            case 27:
            case 5:
              t = n.child.stateNode;
              break;
            case 1:
              t = n.child.stateNode;
          }
          try {
            Fv(e, t);
          } catch (h) {
            Qe(n, n.return, h);
          }
        }
        break;
      case 27:
        t === null && r & 4 && u0(n);
      case 26:
      case 5:
        oa(e, n), t === null && r & 4 && Ld(n), r & 512 && Jn(n, n.return);
        break;
      case 12:
        oa(e, n);
        break;
      case 31:
        oa(e, n), r & 4 && x0(e, n);
        break;
      case 13:
        oa(e, n), r & 4 && C0(e, n), r & 64 && (e = n.memoizedState, e !== null && (e = e.dehydrated, e !== null && (n = Ux.bind(null, n), yC(e, n))));
        break;
      case 22:
        if (r = n.memoizedState !== null || At, !r) {
          var u = t !== null && t.memoizedState !== null || Ie;
          t = At, s = Ie, At = r, (Ie = u) && !s ? (r = 2, (n.subtreeFlags & 8772) !== 0 && (r |= 1), qn(e, n, r)) : oa(e, n), At = t, Ie = s;
        }
        break;
      case 30:
        oa(e, n), r & 512 && Jn(n, n.return);
        break;
      case 7:
        r & 512 && Jn(n, n.return);
      default:
        oa(e, n);
    }
  }
  function Id(e, t) {
    for (e = e.child; e !== null; ) b0(e, t), e = e.sibling;
  }
  function b0(e, t) {
    switch (e.tag) {
      case 5:
      case 26:
        try {
          var n = e.stateNode;
          if (t) {
            var r = n.style;
            typeof r.setProperty == "function" ? r.setProperty("display", "none", "important") : r.display = "none";
          } else {
            var s = e.stateNode, u = e.memoizedProps.style, h = u != null && u.hasOwnProperty("display") ? u.display : null;
            s.style.display = h == null || typeof h == "boolean" ? "" : ("" + h).trim();
          }
        } catch (N) {
          Qe(e, e.return, N);
        }
        Xd(e, t);
        break;
      case 6:
        try {
          e.stateNode.nodeValue = t ? "" : e.memoizedProps, Ve = !0;
        } catch (N) {
          Qe(e, e.return, N);
        }
        break;
      case 18:
        try {
          var E = e.stateNode;
          t ? fg(E, !0) : fg(e.stateNode, !1);
        } catch (N) {
          Qe(e, e.return, N);
        }
        break;
      case 22:
      case 23:
        e.memoizedState === null && Id(e, t);
        break;
      default:
        Id(e, t);
    }
  }
  function Xd(e, t) {
    if (e.subtreeFlags & 67108864) for (e = e.child; e !== null; ) {
      e: {
        var n = e, r = t;
        switch (n.tag) {
          case 4:
            b0(n, r);
            break e;
          case 22:
            n.memoizedState === null && Xd(n, r);
            break e;
          default:
            Xd(n, r);
        }
      }
      e = e.sibling;
    }
  }
  function S0(e) {
    var t = e.alternate;
    t !== null && (e.alternate = null, S0(t)), e.child = null, e.deletions = null, e.sibling = null, e.tag === 5 && (t = e.stateNode, t !== null && Pl(t)), e.stateNode = null, e.return = null, e.dependencies = null, e.memoizedProps = null, e.memoizedState = null, e.pendingProps = null, e.stateNode = null, e.updateQueue = null;
  }
  var at = null, en = !1;
  function Bn(e, t, n) {
    for (n = n.child; n !== null; ) w0(e, t, n), n = n.sibling;
  }
  function w0(e, t, n) {
    if (un && typeof un.onCommitFiberUnmount == "function") try {
      un.onCommitFiberUnmount(Si, n);
    } catch {
    }
    switch (n.tag) {
      case 26:
        Ie || Dt(n, t), Bn(e, t, n), n.memoizedState ? n.memoizedState.count-- : n.stateNode && !Ie && (n = n.stateNode, n.parentNode.removeChild(n));
        break;
      case 27:
        Ie || Dt(n, t), Ki(n);
        var r = at, s = en;
        co(n.type) && (at = n.stateNode, en = !1), Bn(e, t, n), Rg(n.stateNode, n.type, n.memoizedProps), at = r, en = s;
        break;
      case 5:
        Ie || Dt(n, t), Ki(n);
      case 6:
        if (n.tag === 6 && Ki(n), r = at, s = en, at = null, Bn(e, t, n), at = r, en = s, at !== null) if (en) try {
          (at.nodeType === 9 ? at.body : at.nodeName === "HTML" ? at.ownerDocument.body : at).removeChild(n.stateNode), Ve = !0;
        } catch (u) {
          Qe(n, t, u);
        }
        else try {
          at.removeChild(n.stateNode), Ve = !0;
        } catch (u) {
          Qe(n, t, u);
        }
        break;
      case 18:
        at !== null && (en ? (e = at, dg(e.nodeType === 9 ? e.body : e.nodeName === "HTML" ? e.ownerDocument.body : e, n.stateNode), ei(e)) : dg(at, n.stateNode));
        break;
      case 4:
        r = at, s = en, at = n.stateNode.containerInfo, en = !0, Bn(e, t, n), at = r, en = s;
        break;
      case 0:
      case 11:
      case 14:
      case 15:
        no(2, n, t), Ie || no(4, n, t), Bn(e, t, n);
        break;
      case 1:
        Ie || (Dt(n, t), r = n.stateNode, typeof r.componentWillUnmount == "function" && l0(n, t, r)), Bn(e, t, n);
        break;
      case 21:
        Bn(e, t, n);
        break;
      case 22:
        Ie = (r = Ie) || n.memoizedState !== null, Bn(e, t, n), Ie = r;
        break;
      case 30:
        Dt(n, t), Bn(e, t, n);
        break;
      case 7:
        Ie || Dt(n, t), Bn(e, t, n);
        break;
      default:
        Bn(e, t, n);
    }
  }
  function x0(e, t) {
    if (t.memoizedState === null && (e = t.alternate, e !== null && (e = e.memoizedState, e !== null))) {
      e = e.dehydrated;
      try {
        ei(e);
      } catch (n) {
        Qe(t, t.return, n);
      }
    }
  }
  function C0(e, t) {
    if (t.memoizedState === null && (e = t.alternate, e !== null && (e = e.memoizedState, e !== null && (e = e.dehydrated, e !== null)))) try {
      ei(e);
    } catch (n) {
      Qe(t, t.return, n);
    }
  }
  function _x(e) {
    switch (e.tag) {
      case 31:
      case 13:
      case 19:
        var t = e.stateNode;
        return t === null && (t = e.stateNode = new g0()), t;
      case 22:
        return e = e.stateNode, t = e._retryCache, t === null && (t = e._retryCache = new g0()), t;
      default:
        throw Error(c(435, e.tag));
    }
  }
  function $s(e, t) {
    var n = _x(e);
    t.forEach(function(r) {
      if (!n.has(r)) {
        n.add(r);
        var s = qx.bind(null, e, r);
        r.then(s, s);
      }
    });
  }
  function Wt(e, t, n) {
    var r = t.deletions;
    if (r !== null) for (var s = 0; s < r.length; s++) {
      var u = r[s], h = e, E = t, N = E;
      e: for (; N !== null; ) {
        switch (N.tag) {
          case 27:
            if (co(N.type)) {
              at = N.stateNode, en = !1;
              break e;
            }
            break;
          case 5:
            at = N.stateNode, en = !1;
            break e;
          case 3:
          case 4:
            at = N.stateNode.containerInfo, en = !0;
            break e;
        }
        N = N.return;
      }
      if (at === null) throw Error(c(160));
      w0(h, E, u), at = null, en = !1, h = u.alternate, h !== null && (h.return = null), u.return = null;
    }
    if (t.subtreeFlags & 13886) for (t = t.child; t !== null; ) E0(t, e, n), t = t.sibling;
  }
  var Un = null;
  function E0(e, t, n) {
    var r = e.alternate, s = e.flags;
    switch (e.tag) {
      case 0:
      case 11:
      case 14:
      case 15:
        if (s & 4 && (r = e.updateQueue, r = r !== null ? r.events : null, r !== null)) for (var u = 0; u < r.length; u++) {
          var h = r[u];
          h.ref.impl = h.nextImpl;
        }
        Wt(t, e, n), Pt(e), s & 4 && (no(3, e, e.return), Qi(3, e), no(5, e, e.return));
        break;
      case 1:
        Wt(t, e, n), Pt(e), s & 512 && (Ie || r === null || Dt(r, r.return)), s & 64 && At && (e = e.updateQueue, e !== null && (t = e.callbacks, t !== null && (n = e.shared.hiddenCallbacks, e.shared.hiddenCallbacks = n === null ? t : n.concat(t))));
        break;
      case 26:
        if (u = Un, Wt(t, e, n), Pt(e), s & 512 && (Ie || r === null || Dt(r, r.return)), s & 4) if (s = r !== null ? r.memoizedState : null, n = e.memoizedState, r === null) if (n === null) if (e.stateNode === null) if (At) e.stateNode = sg(e.type, e.memoizedProps, t.containerInfo, e);
        else {
          e: {
            t = e.type, n = e.memoizedProps, s = u.ownerDocument || u;
            t: switch (t) {
              case "title":
                r = s.getElementsByTagName("title")[0], (!r || r[Ci] || r[jt] || r.namespaceURI === "http://www.w3.org/2000/svg" || r.hasAttribute("itemprop")) && (r = s.createElement(t), s.head.insertBefore(r, s.querySelector("head > title"))), kt(r, t, n), r[jt] = e, Ct(r), t = r;
                break e;
              case "link":
                if (u = zg("link", "href", s).get(t + (n.href || ""))) {
                  for (h = 0; h < u.length; h++) if (r = u[h], r.getAttribute("href") === (n.href == null || n.href === "" ? null : n.href) && r.getAttribute("rel") === (n.rel == null ? null : n.rel) && r.getAttribute("title") === (n.title == null ? null : n.title) && r.getAttribute("crossorigin") === (n.crossOrigin == null ? null : n.crossOrigin)) {
                    u.splice(h, 1);
                    break t;
                  }
                }
                r = s.createElement(t), kt(r, t, n), s.head.appendChild(r);
                break;
              case "meta":
                if (u = zg("meta", "content", s).get(t + (n.content || ""))) {
                  for (h = 0; h < u.length; h++) if (r = u[h], r.getAttribute("content") === (n.content == null ? null : "" + n.content) && r.getAttribute("name") === (n.name == null ? null : n.name) && r.getAttribute("property") === (n.property == null ? null : n.property) && r.getAttribute("http-equiv") === (n.httpEquiv == null ? null : n.httpEquiv) && r.getAttribute("charset") === (n.charSet == null ? null : n.charSet)) {
                    u.splice(h, 1);
                    break t;
                  }
                }
                r = s.createElement(t), kt(r, t, n), s.head.appendChild(r);
                break;
              default:
                throw Error(c(468, t));
            }
            r[jt] = e, Ct(r), t = r;
          }
          e.stateNode = t;
        }
        else At || Mf(u, e.type, e.stateNode);
        else e.stateNode = Mg(u, n, e.memoizedProps);
        else s !== n ? (s === null ? (t = r.stateNode, t === null || Ie || t.parentNode.removeChild(t)) : s.count--, n === null ? At || Mf(u, e.type, e.stateNode) : Mg(u, n, e.memoizedProps)) : n === null && e.stateNode !== null && Hd(e, e.memoizedProps, r.memoizedProps);
        break;
      case 27:
        Wt(t, e, n), Pt(e), s & 512 && (Ie || r === null || Dt(r, r.return)), r !== null && s & 4 && Hd(e, e.memoizedProps, r.memoizedProps);
        break;
      case 5:
        if (u = na, na = !1, Wt(t, e, n), na = u, Pt(e), s & 512 && (Ie || r === null || Dt(r, r.return)), e.flags & 32) {
          t = e.stateNode;
          try {
            gr(t, ""), Ve = !0;
          } catch (P) {
            Qe(e, e.return, P);
          }
        }
        s & 4 && e.stateNode != null && (t = e.memoizedProps, Hd(e, t, r !== null ? r.memoizedProps : t)), s & 1024 && (Wd = !0);
        break;
      case 6:
        if (Wt(t, e, n), Pt(e), s & 4) {
          if (e.stateNode === null) throw Error(c(162));
          t = e.memoizedProps, n = e.stateNode;
          try {
            n.nodeValue = t, Ve = !0;
          } catch (P) {
            Qe(e, e.return, P);
          }
        }
        break;
      case 3:
        if (Ve = !1, ac = null, u = Un, Un = il(t.containerInfo), Wt(t, e, n), Un = u, Pt(e), s & 4 && r !== null && r.memoizedState.isDehydrated) try {
          ei(t.containerInfo);
        } catch (P) {
          Qe(e, e.return, P);
        }
        Wd && (Wd = !1, A0(e)), Ve = !1;
        break;
      case 4:
        s = na, na = At, r = Xh(), u = Un, Un = il(e.stateNode.containerInfo), Wt(t, e, n), Pt(e), Un = u, Ve && Zi && (qs = !0), Ve = r, na = s;
        break;
      case 12:
        Wt(t, e, n), Pt(e);
        break;
      case 31:
        Wt(t, e, n), Pt(e), s & 4 && (t = e.updateQueue, t !== null && (e.updateQueue = null, $s(e, t)));
        break;
      case 13:
        Wt(t, e, n), Pt(e), e.child.flags & 8192 && e.memoizedState !== null != (r !== null && r.memoizedState !== null) && (Ws = $t()), s & 4 && (t = e.updateQueue, t !== null && (e.updateQueue = null, $s(e, t)));
        break;
      case 22:
        u = e.memoizedState !== null, h = r !== null && r.memoizedState !== null;
        var E = At, N = Ie, q = na;
        At = E || u, na = q || u, Ie = N || h, Wt(t, e, n), Ie = N, na = q, At = E, Pt(e), s & 8192 && (t = e.stateNode, t._visibility = u ? t._visibility & -2 : t._visibility | 1, !u || r === null || h || At || Ie || (t = h || Ie, n = At, r = Ie, At = u || At, Ie = t, ao(e, 2), At = n, Ie = r), !u && na || Id(e, u)), s & 4 && (t = e.updateQueue, t !== null && (n = t.retryQueue, n !== null && (t.retryQueue = null, $s(e, n))));
        break;
      case 19:
        Wt(t, e, n), Pt(e), s & 4 && (t = e.updateQueue, t !== null && (e.updateQueue = null, $s(e, t)));
        break;
      case 30:
        s & 512 && (Ie || r === null || Dt(r, r.return)), s = Xh(), u = Zi, h = (n & 335544064) === n, E = e.memoizedProps, Zi = h && wa(E.default, E.update) !== "none", Wt(t, e, n), Pt(e), h && r !== null && Ve && (e.flags |= 4), Zi = u, Ve = s;
        break;
      case 21:
        break;
      case 7:
        s & 512 && (Ie || r === null || Dt(r, r.return)), r && r.stateNode !== null && (r.stateNode._fragmentFiber = e);
      default:
        Wt(t, e, n), Pt(e);
    }
  }
  function Pt(e) {
    var t = e.flags;
    if (t & 2) {
      try {
        for (var n, r = e.return; r !== null; ) {
          if (c0(r)) {
            n = r;
            break;
          }
          r = r.return;
        }
        r = null;
        for (var s = e.return; s !== null; ) {
          if (kd(s)) {
            var u = s.stateNode;
            r === null ? r = [u] : r.push(u);
          }
          if (Dd(s)) break;
          s = s.return;
        }
        var h = r;
        if (n == null) throw Error(c(160));
        switch (n.tag) {
          case 27:
            var E = n.stateNode;
            Ls(e, Bd(e), E, h);
            break;
          case 5:
            var N = n.stateNode;
            n.flags & 32 && (gr(N, ""), n.flags &= -33), Ls(e, Bd(e), N, h);
            break;
          case 3:
          case 4:
            var q = n.stateNode.containerInfo;
            Ud(e, Bd(e), q, h);
            break;
          default:
            throw Error(c(161));
        }
      } catch (P) {
        Qe(e, e.return, P);
      }
      e.flags &= -3;
    }
    t & 4096 && (e.flags &= -4097);
  }
  function A0(e) {
    if (e.subtreeFlags & 1024) for (e = e.child; e !== null; ) {
      var t = e;
      A0(t), t.tag === 5 && t.flags & 1024 && (t = t.stateNode, Jr = !0, t.reset(), Jr = !1), e = e.sibling;
    }
  }
  function Lr(e, t) {
    if (t.subtreeFlags & 9270) for (t = t.child; t !== null; ) T0(t, e), t = t.sibling;
    else p0(t, !1);
  }
  function T0(e, t) {
    var n = e.alternate;
    if (n === null) qd(e, !1);
    else switch (e.tag) {
      case 3:
        if (Pd = aa = !1, f0(), Lr(t, e), !aa && !qs) {
          if (e = ea, e !== null) for (var r = 0; r < e.length; r += 3) {
            n = e[r];
            var s = e[r + 1];
            hg(n, e[r + 2]), n = n.ownerDocument.documentElement, n !== null && n.animate({
              opacity: [0, 0],
              pointerEvents: ["none", "none"]
            }, {
              duration: 0,
              fill: "forwards",
              pseudoElement: "::view-transition-group(" + s + ")"
            });
          }
          e = t.containerInfo, e = e.nodeType === 9 ? e.documentElement : e.ownerDocument.documentElement, e !== null && e.style.viewTransitionName === "" && (e.style.viewTransitionName = "none", e.animate({
            opacity: [0, 0],
            pointerEvents: ["none", "none"]
          }, {
            duration: 0,
            fill: "forwards",
            pseudoElement: "::view-transition-group(root)"
          }), e.animate({
            width: [0, 0],
            height: [0, 0]
          }, {
            duration: 0,
            fill: "forwards",
            pseudoElement: "::view-transition"
          })), Pd = !0;
        }
        ea = null;
        break;
      case 5:
        Lr(t, e);
        break;
      case 4:
        r = aa, aa = !1, Lr(t, e), aa && (qs = !0), aa = r;
        break;
      case 22:
        e.memoizedState === null && (n.memoizedState !== null ? qd(e, !1) : Lr(t, e));
        break;
      case 30:
        r = aa, s = f0(), aa = !1, Lr(t, e), aa && (e.flags |= 4);
        var u = e.memoizedProps, h = e.stateNode;
        t = Sa(u, h), h = Sa(n.memoizedProps, h);
        var E = wa(u.default, u.update);
        E === "none" ? t = !1 : (u = n.memoizedState, n.memoizedState = null, n = e.child, Jt = 0, t = Gd(e, n, t, h, E, u, !0), Jt !== (u === null ? 0 : u.length) && (e.flags |= 32)), (e.flags & 4) !== 0 && t ? (Yr(e, e.memoizedProps.onUpdate), ea = s) : s !== null && (s.push.apply(s, ea), ea = s), aa = (e.flags & 32) !== 0 ? !0 : r;
        break;
      default:
        Lr(t, e);
    }
  }
  function oa(e, t) {
    if (t.subtreeFlags & 8772) for (t = t.child; t !== null; ) y0(e, t.alternate, t), t = t.sibling;
  }
  function ao(e, t) {
    for (e = e.child; e !== null; ) {
      var n = e, r = t;
      switch (n.tag) {
        case 0:
        case 11:
        case 14:
        case 15:
          no(4, n, n.return), ao(n, r);
          break;
        case 1:
          Dt(n, n.return);
          var s = n.stateNode;
          typeof s.componentWillUnmount == "function" && l0(n, n.return, s), ao(n, r);
          break;
        case 27:
          (r & 2) !== 0 && Rg(n.stateNode, n.type, n.memoizedProps);
        case 5:
          Dt(n, n.return), n.tag !== 5 && n.tag !== 27 || Ki(n), ao(n, r);
          break;
        case 6:
          Ki(n);
          break;
        case 26:
          Dt(n, n.return), s = n.stateNode, n.memoizedState !== null || s === null || Ie || s.parentNode.removeChild(s), ao(n, r);
          break;
        case 22:
          n.memoizedState === null && ao(n, r);
          break;
        case 30:
          Dt(n, n.return), ao(n, r);
          break;
        case 7:
          Dt(n, n.return);
        default:
          ao(n, r);
      }
      e = e.sibling;
    }
  }
  function qn(e, t, n) {
    for (n = (t.subtreeFlags & 8772) !== 0 ? n : n & -2, t = t.child; t !== null; ) {
      var r = t.alternate, s = e, u = t, h = u.flags, E = (n & 1) !== 0;
      switch (u.tag) {
        case 0:
        case 11:
        case 15:
          qn(s, u, n), Qi(4, u);
          break;
        case 1:
          if (qn(s, u, n), r = u, s = r.stateNode, typeof s.componentDidMount == "function") try {
            s.componentDidMount();
          } catch (P) {
            Qe(r, r.return, P);
          }
          if (r = u, s = r.updateQueue, s !== null) {
            var N = r.stateNode;
            try {
              var q = s.shared.hiddenCallbacks;
              if (q !== null) for (s.shared.hiddenCallbacks = null, s = 0; s < q.length; s++) Zv(q[s], N);
            } catch (P) {
              Qe(r, r.return, P);
            }
          }
          E && h & 64 && i0(u), Jn(u, u.return);
          break;
        case 27:
          (n & 2) !== 0 && u0(u);
        case 5:
          u.tag !== 5 && u.tag !== 27 || s0(u), qn(s, u, n), E && r === null && h & 4 && Ld(u), Jn(u, u.return);
          break;
        case 6:
          s0(u);
          break;
        case 26:
          N = u.stateNode, u.memoizedState !== null || N === null || At || Mf(il(N.ownerDocument), u.type, N), qn(s, u, n), E && r === null && h & 4 && Ld(u), Jn(u, u.return);
          break;
        case 12:
          qn(s, u, n);
          break;
        case 31:
          qn(s, u, n), E && h & 4 && x0(s, u);
          break;
        case 13:
          qn(s, u, n), E && h & 4 && C0(s, u);
          break;
        case 22:
          u.memoizedState === null && qn(s, u, n), Jn(u, u.return);
          break;
        case 30:
          qn(s, u, n), Jn(u, u.return);
          break;
        case 7:
          Jn(u, u.return);
        default:
          qn(s, u, n);
      }
      t = t.sibling;
    }
  }
  function Qd(e, t) {
    var n = null;
    e !== null && e.memoizedState !== null && e.memoizedState.cachePool !== null && (n = e.memoizedState.cachePool.pool), e = null, t.memoizedState !== null && t.memoizedState.cachePool !== null && (e = t.memoizedState.cachePool.pool), e !== n && (e != null && e.refCount++, n != null && Li(n));
  }
  function Kd(e, t) {
    e = null, t.alternate !== null && (e = t.alternate.memoizedState.cache), t = t.memoizedState.cache, t !== e && (t.refCount++, e != null && Li(e));
  }
  function Nn(e, t, n, r) {
    var s = (n & 335544064) === n;
    if (t.subtreeFlags & (s ? 10262 : 10256)) for (t = t.child; t !== null; ) R0(e, t, n, r), t = t.sibling;
    else s && v0(t);
  }
  function R0(e, t, n, r) {
    var s = (n & 335544064) === n;
    s && t.alternate === null && t.return !== null && t.return.alternate !== null && Us(t);
    var u = t.flags;
    switch (t.tag) {
      case 0:
      case 11:
      case 15:
        Nn(e, t, n, r), u & 2048 && Qi(9, t);
        break;
      case 1:
        Nn(e, t, n, r);
        break;
      case 3:
        Nn(e, t, n, r), s && Pd && (e = e.containerInfo, e = e.nodeType === 9 ? e.body : e.nodeName === "HTML" ? e.ownerDocument.body : e, e.style.viewTransitionName === "root" && (e.style.viewTransitionName = ""), e = e.ownerDocument.documentElement, e !== null && e.style.viewTransitionName === "none" && (e.style.viewTransitionName = "")), u & 2048 && (u = null, t.alternate !== null && (u = t.alternate.memoizedState.cache), t = t.memoizedState.cache, t !== u && (t.refCount++, u != null && Li(u)));
        break;
      case 12:
        if (u & 2048) {
          Nn(e, t, n, r), u = t.stateNode;
          try {
            var h = t.memoizedProps, E = h.id, N = h.onPostCommit;
            typeof N == "function" && N(E, t.alternate === null ? "mount" : "update", u.passiveEffectDuration, -0);
          } catch (q) {
            Qe(t, t.return, q);
          }
        } else Nn(e, t, n, r);
        break;
      case 31:
        Nn(e, t, n, r);
        break;
      case 13:
        Nn(e, t, n, r);
        break;
      case 23:
        break;
      case 22:
        h = t.stateNode, E = t.alternate, t.memoizedState !== null ? (s && E !== null && E.memoizedState === null && Us(E), h._visibility & 2 ? Nn(e, t, n, r) : Fi(e, t)) : (s && E !== null && E.memoizedState !== null && Us(t), h._visibility & 2 ? Nn(e, t, n, r) : (h._visibility |= 2, Hr(e, t, n, r, (t.subtreeFlags & 10256) !== 0 || !1))), u & 2048 && Qd(E, t);
        break;
      case 24:
        Nn(e, t, n, r), u & 2048 && Kd(t.alternate, t);
        break;
      case 30:
        s && (u = t.alternate, u !== null && (ta(u.child, !0), ta(t.child, !0))), Nn(e, t, n, r);
        break;
      default:
        Nn(e, t, n, r);
    }
  }
  function Hr(e, t, n, r, s) {
    for (s = s && ((t.subtreeFlags & 10256) !== 0 || !1), t = t.child; t !== null; ) {
      var u = e, h = t, E = n, N = r, q = h.flags;
      switch (h.tag) {
        case 0:
        case 11:
        case 15:
          Hr(u, h, E, N, s), Qi(8, h);
          break;
        case 23:
          break;
        case 22:
          var P = h.stateNode;
          h.memoizedState !== null ? P._visibility & 2 ? Hr(u, h, E, N, s) : Fi(u, h) : (P._visibility |= 2, Hr(u, h, E, N, s)), s && q & 2048 && Qd(h.alternate, h);
          break;
        case 24:
          Hr(u, h, E, N, s), s && q & 2048 && Kd(h.alternate, h);
          break;
        default:
          Hr(u, h, E, N, s);
      }
      t = t.sibling;
    }
  }
  function Fi(e, t) {
    if (t.subtreeFlags & 10256) for (t = t.child; t !== null; ) {
      var n = e, r = t, s = r.flags;
      switch (r.tag) {
        case 22:
          Fi(n, r), s & 2048 && Qd(r.alternate, r);
          break;
        case 24:
          Fi(n, r), s & 2048 && Kd(r.alternate, r);
          break;
        default:
          Fi(n, r);
      }
      t = t.sibling;
    }
  }
  var Po = 8192;
  function Io(e, t, n) {
    if (e.subtreeFlags & Po) for (e = e.child; e !== null; ) _0(e, t, n), e = e.sibling;
  }
  function _0(e, t, n) {
    switch (e.tag) {
      case 26:
        Io(e, t, n), e.flags & Po && (e.memoizedState !== null ? MC(n, Un, e.memoizedState, e.memoizedProps) : (e = e.stateNode, (t & 335544128) === t && Hg(n, e)));
        break;
      case 5:
        Io(e, t, n), e.flags & Po && (e = e.stateNode, (t & 335544128) === t && Hg(n, e));
        break;
      case 3:
      case 4:
        var r = Un;
        Un = il(e.stateNode.containerInfo), Io(e, t, n), Un = r;
        break;
      case 22:
        e.memoizedState === null && (r = e.alternate, r !== null && r.memoizedState !== null ? (r = Po, Po = 16777216, Io(e, t, n), Po = r) : Io(e, t, n));
        break;
      case 30:
        if ((e.flags & Po) !== 0 && (r = e.memoizedProps.name, r != null && r !== "auto")) {
          var s = e.stateNode;
          s.paired = null, vn === null && (vn = /* @__PURE__ */ new Map()), vn.set(r, s);
        }
        Io(e, t, n);
        break;
      default:
        Io(e, t, n);
    }
  }
  function N0(e) {
    var t = e.alternate;
    if (t !== null && (e = t.child, e !== null)) {
      t.child = null;
      do
        t = e.sibling, e.sibling = null, e = t;
      while (e !== null);
    }
  }
  function Ji(e) {
    var t = e.deletions;
    if ((e.flags & 16) !== 0) {
      if (t !== null) for (var n = 0; n < t.length; n++) {
        var r = t[n];
        Tt = r, O0(r, e);
      }
      N0(e);
    }
    if (e.subtreeFlags & 10256) for (e = e.child; e !== null; ) j0(e), e = e.sibling;
  }
  function j0(e) {
    switch (e.tag) {
      case 0:
      case 11:
      case 15:
        Ji(e), e.flags & 2048 && no(9, e, e.return);
        break;
      case 3:
        Ji(e);
        break;
      case 12:
        Ji(e);
        break;
      case 22:
        var t = e.stateNode;
        e.memoizedState !== null && t._visibility & 2 && (e.return === null || e.return.tag !== 13) ? (t._visibility &= -3, Ys(e)) : Ji(e);
        break;
      default:
        Ji(e);
    }
  }
  function Ys(e) {
    var t = e.deletions;
    if ((e.flags & 16) !== 0) {
      if (t !== null) for (var n = 0; n < t.length; n++) {
        var r = t[n];
        Tt = r, O0(r, e);
      }
      N0(e);
    }
    for (e = e.child; e !== null; ) {
      switch (t = e, t.tag) {
        case 0:
        case 11:
        case 15:
          no(8, t, t.return), Ys(t);
          break;
        case 22:
          n = t.stateNode, n._visibility & 2 && (n._visibility &= -3, Ys(t));
          break;
        default:
          Ys(t);
      }
      e = e.sibling;
    }
  }
  function O0(e, t) {
    for (; Tt !== null; ) {
      var n = Tt;
      switch (n.tag) {
        case 0:
        case 11:
        case 15:
          no(8, n, t);
          break;
        case 23:
        case 22:
          if (n.memoizedState !== null && n.memoizedState.cachePool !== null) {
            var r = n.memoizedState.cachePool.pool;
            r != null && r.refCount++;
          }
          break;
        case 24:
          Li(n.memoizedState.cache);
      }
      if (r = n.child, r !== null) r.return = n, Tt = r;
      else e: for (n = e; Tt !== null; ) {
        r = Tt;
        var s = r.sibling, u = r.return;
        if (S0(r), r === n) {
          Tt = null;
          break e;
        }
        if (s !== null) {
          s.return = u, Tt = s;
          break e;
        }
        Tt = u;
      }
    }
  }
  var Nx = {
    getCacheForType: function(e) {
      var t = Ot(ft), n = t.data.get(e);
      return n === void 0 && (n = e(), t.data.set(e, n)), n;
    },
    cacheSignal: function() {
      return Ot(ft).controller.signal;
    }
  }, jx = typeof WeakMap == "function" ? WeakMap : Map, Ge = 0, Je = null, ze = null, Le = 0, Xe = 0, pn = null, oo = !1, Br = !1, Zd = !1, ja = 0, st = 0, ro = 0, Xo = 0, Gs = 0, gn = 0, Ur = 0, el = null, tn = null, Fd = !1, Ws = 0, M0 = 0, Ps = 1 / 0, Is = null, io = null, it = 0, Vn = null, Qo = null, ra = 0, Jd = 0, ef = null, z0 = null, qr = null, Vr = null, $r = null, tl = 0, Xs = null;
  function jn() {
    return (Ge & 2) !== 0 && Le !== 0 ? Le & -Le : ce.T !== null ? df() : Uh();
  }
  function D0() {
    if (gn === 0) if ((Le & 536870912) === 0 || Me) {
      var e = Vl;
      Vl <<= 1, (Vl & 3932160) === 0 && (Vl = 262144), gn = e;
    } else gn = 536870912;
    return e = Mt.current, e !== null && (e.flags |= 32), gn;
  }
  function Yr(e, t) {
    if (t != null) {
      var n = e.stateNode, r = n.ref;
      r === null && (r = n.ref = pg(Sa(e.memoizedProps, n))), Vr === null && (Vr = []), Vr.push(t.bind(null, r));
    }
  }
  function nn(e, t, n) {
    (e === Je && (Xe === 2 || Xe === 9) || e.cancelPendingCommit !== null) && (Gr(e, 0), lo(e, Le, gn, !1)), Gl(e, n), ((Ge & 2) === 0 || e !== Je) && (e === Je && ((Ge & 2) === 0 && (Xo |= n), st === 4 && lo(e, Le, gn, !1)), Oa(e));
  }
  function k0(e, t, n) {
    if ((Ge & 6) !== 0) throw Error(c(327));
    var r = !n && (t & 127) === 0 && (t & e.expiredLanes) === 0 || wi(e, t), s = r ? zx(e, t) : nf(e, t, !0), u = r;
    do {
      if (s === 0) {
        Br && !r && lo(e, t, 0, !1);
        break;
      } else {
        if (n = e.current.alternate, u && !Ox(n)) {
          s = nf(e, t, !1), u = !1;
          continue;
        }
        if (s === 2) {
          if (u = t, e.errorRecoveryDisabledLanes & u) var h = 0;
          else h = e.pendingLanes & -536870913, h = h !== 0 ? h : h & 536870912 ? 536870912 : 0;
          if (h !== 0) {
            t = h;
            e: {
              var E = e;
              s = el;
              var N = E.current.memoizedState.isDehydrated;
              if (N && (Gr(E, h).flags |= 256), h = nf(E, h, !1), h !== 2 && h !== 6) {
                if (Zd && !N) {
                  E.errorRecoveryDisabledLanes |= u, Xo |= u, s = 4;
                  break e;
                }
                u = tn, tn = s, u !== null && (tn === null ? tn = u : tn.push.apply(tn, u));
              }
              s = h;
            }
            if (u = !1, s !== 2) continue;
          }
        }
        if (s === 1) {
          Gr(e, 0), lo(e, t, 0, !0);
          break;
        }
        e: {
          switch (r = e, u = s, u) {
            case 0:
            case 1:
              throw Error(c(345));
            case 4:
              if ((t & 4194048) !== t && (t & 62914560) !== t) break;
            case 6:
              lo(r, t, gn, !oo);
              break e;
            case 2:
              tn = null;
              break;
            case 3:
            case 5:
              break;
            default:
              throw Error(c(329));
          }
          if ((t & 62914560) === t && (s = Ws + 300 - $t(), 10 < s)) {
            if (lo(r, t, gn, !oo), Yl(r, 0, !0) !== 0) break e;
            ra = t, r.timeoutHandle = wf(L0.bind(null, r, n, tn, Is, Fd, t, gn, Xo, Ur, oo, u, "Throttled", -0, 0), s);
            break e;
          }
          L0(r, n, tn, Is, Fd, t, gn, Xo, Ur, oo, u, null, -0, 0);
        }
      }
      break;
    } while (!0);
    Oa(e);
  }
  function L0(e, t, n, r, s, u, h, E, N, q, P, ee, B, G) {
    e.timeoutHandle = -1;
    var fe = t.subtreeFlags, Se = (u & 335544064) === u;
    if (ee = null, (Se || fe & 8192 || (fe & 16785408) === 16785408) && (ee = {
      stylesheets: null,
      count: 0,
      imgCount: 0,
      imgBytes: 0,
      suspenseyImages: [],
      waitingForImages: !0,
      waitingForViewTransition: !1,
      unsuspend: Kn
    }, vn = null, _0(t, u, ee), Se && (fe = ee, Se = e.containerInfo, Se = (Se.nodeType === 9 ? Se : Se.ownerDocument).__reactViewTransition, Se != null && (fe.count++, fe.waitingForViewTransition = !0, fe = cl.bind(fe), Se.finished.then(fe, fe))), fe = (u & 62914560) === u ? Ws - $t() : (u & 4194048) === u ? M0 - $t() : 0, fe = zC(ee, fe), fe !== null)) {
      ra = u, e.cancelPendingCommit = fe(G0.bind(null, e, t, u, n, r, s, h, E, N, q, P, ee, null, B, G)), lo(e, u, h, !q);
      return;
    }
    G0(e, t, u, n, r, s, h, E, N, q, P, ee);
  }
  function Ox(e) {
    for (var t = e; ; ) {
      var n = t.tag;
      if ((n === 0 || n === 11 || n === 15) && t.flags & 16384 && (n = t.updateQueue, n !== null && (n = n.stores, n !== null))) for (var r = 0; r < n.length; r++) {
        var s = n[r], u = s.getSnapshot;
        s = s.value;
        try {
          if (!mn(u(), s)) return !1;
        } catch {
          return !1;
        }
      }
      if (n = t.child, t.subtreeFlags & 16384 && n !== null) n.return = t, t = n;
      else {
        if (t === e) break;
        for (; t.sibling === null; ) {
          if (t.return === null || t.return === e) return !0;
          t = t.return;
        }
        t.sibling.return = t.return, t = t.sibling;
      }
    }
    return !0;
  }
  function lo(e, t, n, r) {
    t = zh(e, t), t &= ~Gs, t &= ~Xo, e.suspendedLanes |= t, e.pingedLanes &= ~t, r && (e.warmLanes |= t), r = e.expirationTimes;
    for (var s = t; 0 < s; ) {
      var u = 31 - dn(s), h = 1 << u;
      r[u] = -1, s &= ~h;
    }
    n !== 0 && kh(e, n, t);
  }
  function Qs() {
    return (Ge & 6) === 0 ? (nl(0, !1), !1) : !0;
  }
  function tf() {
    if (ze !== null) {
      if (Xe === 0) var e = ze.return;
      else e = ze, Ea = Do = null, cd(e), jr = null, Ui = 0, e = ze;
      for (; e !== null; ) r0(e.alternate, e), e = e.return;
      ze = null;
    }
  }
  function Gr(e, t) {
    var n = e.timeoutHandle;
    return n !== -1 && (e.timeoutHandle = -1, Jx(n)), n = e.cancelPendingCommit, n !== null && (e.cancelPendingCommit = null, n()), ra = 0, tf(), Je = e, ze = n = xa(e.current, null), Le = t, Xe = 0, pn = null, oo = !1, Br = wi(e, t), Zd = !1, Ur = gn = Gs = Xo = ro = st = 0, tn = el = null, Fd = !1, ja = zh(e, t), as(), n;
  }
  function H0(e, t) {
    _e = null, ce.H = _s, t === Nr || t === hs ? (t = Iv(), Xe = 3) : t === Ku ? (t = Iv(), Xe = 4) : Xe = t === Ed ? 8 : t !== null && typeof t == "object" && typeof t.then == "function" ? 6 : 1, pn = t, ze === null && (st = 1, Ns(e, An(t, e.current)));
  }
  function B0() {
    var e = Mt.current;
    return e === null ? !0 : (Le & 4194048) === Le ? Ut === null : (Le & 62914560) === Le || (Le & 536870912) !== 0 ? e === Ut : !1;
  }
  function U0() {
    var e = ce.H;
    return ce.H = _s, e === null ? _s : e;
  }
  function q0() {
    var e = ce.A;
    return ce.A = Nx, e;
  }
  function Ks() {
    st = 4, oo || (Le & 4194048) !== Le && Mt.current !== null || (Br = !0), (ro & 134217727) === 0 && (Xo & 134217727) === 0 || Je === null || lo(Je, Le, gn, !1);
  }
  function nf(e, t, n) {
    var r = Ge;
    Ge |= 2;
    var s = U0(), u = q0();
    (Je !== e || Le !== t) && (Is = null, Gr(e, t)), t = !1;
    var h = st;
    e: do
      try {
        if (Xe !== 0 && ze !== null) {
          var E = ze, N = pn;
          switch (Xe) {
            case 8:
              tf(), h = 6;
              break e;
            case 3:
            case 2:
            case 9:
            case 6:
              Mt.current === null && (t = !0);
              var q = Xe;
              if (Xe = 0, pn = null, Wr(e, E, N, q), n && Br) {
                h = 0;
                break e;
              }
              break;
            default:
              q = Xe, Xe = 0, pn = null, Wr(e, E, N, q);
          }
        }
        Mx(), h = st;
        break;
      } catch (P) {
        H0(e, P);
      }
    while (!0);
    return t && e.shellSuspendCounter++, Ea = Do = null, Ge = r, ce.H = s, ce.A = u, ze === null && (Je = null, Le = 0, as()), h;
  }
  function Mx() {
    for (; ze !== null; ) V0(ze);
  }
  function zx(e, t) {
    var n = Ge;
    Ge |= 2;
    var r = U0(), s = q0();
    Je !== e || Le !== t ? (Is = null, Ps = $t() + 500, Gr(e, t)) : Br = wi(e, t);
    e: do
      try {
        if (Xe !== 0 && ze !== null) {
          t = ze;
          var u = pn;
          t: switch (Xe) {
            case 1:
              Xe = 0, pn = null, Wr(e, t, u, 1);
              break;
            case 2:
            case 9:
              if (Wv(u)) {
                Xe = 0, pn = null, $0(t);
                break;
              }
              t = function() {
                Xe !== 2 && Xe !== 9 || Je !== e || (Xe = 7), Oa(e);
              }, u.then(t, t);
              break e;
            case 3:
              Xe = 7;
              break e;
            case 4:
              Xe = 5;
              break e;
            case 7:
              Wv(u) ? (Xe = 0, pn = null, $0(t)) : (Xe = 0, pn = null, Wr(e, t, u, 7));
              break;
            case 5:
              var h = null;
              switch (ze.tag) {
                case 26:
                  h = ze.memoizedState;
                case 5:
                case 27:
                  var E = ze;
                  if (h ? kg(h) : E.stateNode.complete) {
                    Xe = 0, pn = null;
                    var N = E.sibling;
                    if (N !== null) ze = N;
                    else {
                      var q = E.return;
                      q !== null ? (ze = q, Zs(q)) : ze = null;
                    }
                    break t;
                  }
              }
              Xe = 0, pn = null, Wr(e, t, u, 5);
              break;
            case 6:
              Xe = 0, pn = null, Wr(e, t, u, 6);
              break;
            case 8:
              tf(), st = 6;
              break e;
            default:
              throw Error(c(462));
          }
        }
        Dx();
        break;
      } catch (P) {
        H0(e, P);
      }
    while (!0);
    return Ea = Do = null, ce.H = r, ce.A = s, Ge = n, ze !== null ? 0 : (Je = null, Le = 0, as(), st);
  }
  function Dx() {
    for (; ze !== null && !Bl(); ) V0(ze);
  }
  function V0(e) {
    var t = a0(e.alternate, e, ja);
    e.memoizedProps = e.pendingProps, t === null ? Zs(e) : ze = t;
  }
  function $0(e) {
    var t = e, n = t.alternate;
    switch (t.tag) {
      case 15:
      case 0:
        t = Kp(n, t, t.pendingProps, t.type, void 0, Le);
        break;
      case 11:
        t = Kp(n, t, t.pendingProps, t.type.render, t.ref, Le);
        break;
      case 5:
        cd(t);
        var r = t;
        r === Et && (Me ? (cs(r), r.tag === 5 && r.stateNode != null && (et = r.stateNode)) : (cs(r), Me = !0));
      default:
        r0(n, t), t = ze = Dv(t, ja), t = a0(n, t, ja);
    }
    e.memoizedProps = e.pendingProps, t === null ? Zs(e) : ze = t;
  }
  function Wr(e, t, n, r) {
    Ea = Do = null, cd(t), jr = null, Ui = 0;
    var s = t.return;
    try {
      if (wx(e, s, t, n, Le)) {
        st = 1, Ns(e, An(n, e.current)), ze = null;
        return;
      }
    } catch (u) {
      if (s !== null) throw ze = s, u;
      st = 1, Ns(e, An(n, e.current)), ze = null;
      return;
    }
    t.flags & 32768 ? (Me || r === 1 ? e = !0 : Br || (Le & 536870912) !== 0 ? e = !1 : (oo = e = !0, (r === 2 || r === 9 || r === 3 || r === 6) && (r = Mt.current, r !== null && r.tag === 13 && (r.flags |= 16384))), Y0(t, e)) : Zs(t);
  }
  function Zs(e) {
    var t = e;
    do {
      if ((t.flags & 32768) !== 0) {
        Y0(t, oo);
        return;
      }
      e = t.return;
      var n = Ax(t.alternate, t, ja);
      if (n !== null) {
        ze = n;
        return;
      }
      if (t = t.sibling, t !== null) {
        ze = t;
        return;
      }
      ze = t = e;
    } while (t !== null);
    st === 0 && (st = 5);
  }
  function Y0(e, t) {
    do {
      var n = Tx(e.alternate, e);
      if (n !== null) {
        n.flags &= 32767, ze = n;
        return;
      }
      if (n = e.return, n !== null && (n.flags |= 32768, n.subtreeFlags = 0, n.deletions = null), !t && (e = e.sibling, e !== null)) {
        ze = e;
        return;
      }
      ze = e = n;
    } while (e !== null);
    st = 6, ze = null;
  }
  function G0(e, t, n, r, s, u, h, E, N, q, P, ee) {
    e.cancelPendingCommit = null;
    do
      Fs();
    while (it !== 0);
    if ((Ge & 6) !== 0) throw Error(c(327));
    if (t !== null) {
      if (t === e.current) throw Error(c(177));
      e === Je && (ze = Je = null, Le = 0), Qo = t, Vn = e, ra = n, ef = s, z0 = r, kx(e, t, n, h, E, N, ee);
    }
  }
  function kx(e, t, n, r, s, u, h) {
    var E = t.lanes | t.childLanes;
    if (Jd = E, E |= Hu, pw(e, n, E, r, s, u), Vr = null, (n & 335544064) === n ? ($r = ix(e), r = 10262) : ($r = null, r = 10256), (t.subtreeFlags & r) !== 0 || (t.flags & r) !== 0 ? (e.callbackNode = null, e.callbackPriority = 0, Vx(Ya, function() {
      return lf(), null;
    })) : (e.callbackNode = null, e.callbackPriority = 0), Hs = !1, r = (t.flags & 13878) !== 0, (t.subtreeFlags & 13878) !== 0 || r) {
      r = ce.T, ce.T = null, s = ve.p, ve.p = 2, u = Ge, Ge |= 4;
      try {
        Rx(e, t, n);
      } finally {
        Ge = u, ve.p = s, ce.T = r;
      }
    }
    it = 1, Hs ? qr = rC(h, e.containerInfo, $r, af, of, Hx, rf, lf, Lx, null, null) : (af(), of(), rf());
  }
  function Lx(e) {
    if (it !== 0) {
      var t = Vn.onRecoverableError;
      t(e, { componentStack: null });
    }
  }
  function Hx() {
    it === 3 && (it = 0, T0(Qo, Vn), it = 4);
  }
  function af() {
    if (it === 1) {
      it = 0;
      var e = Vn, t = Qo, n = ra, r = (t.flags & 13878) !== 0;
      if ((t.subtreeFlags & 13878) !== 0 || r) {
        r = ce.T, ce.T = null;
        var s = ve.p;
        ve.p = 2;
        var u = Ge;
        Ge |= 4;
        try {
          Zi = qs = !1, E0(t, e, n), n = yf;
          var h = Ev(e.containerInfo), E = n.focusedElem, N = n.selectionRange;
          if (h !== E && E && E.ownerDocument && Cv(E.ownerDocument.documentElement, E)) {
            if (N !== null && Mu(E)) {
              var q = N.start, P = N.end;
              if (P === void 0 && (P = q), "selectionStart" in E) E.selectionStart = q, E.selectionEnd = Math.min(P, E.value.length);
              else {
                var ee = E.ownerDocument || document, B = ee && ee.defaultView || window;
                if (B.getSelection) {
                  var G = B.getSelection(), fe = E.textContent.length, Se = Math.min(N.start, fe), Ne = N.end === void 0 ? Se : Math.min(N.end, fe);
                  !G.extend && Se > Ne && (h = Ne, Ne = Se, Se = h);
                  var U = xv(E, Se), D = xv(E, Ne);
                  if (U && D && (G.rangeCount !== 1 || G.anchorNode !== U.node || G.anchorOffset !== U.offset || G.focusNode !== D.node || G.focusOffset !== D.offset)) {
                    var Y = ee.createRange();
                    Y.setStart(U.node, U.offset), G.removeAllRanges(), Se > Ne ? (G.addRange(Y), G.extend(D.node, D.offset)) : (Y.setEnd(D.node, D.offset), G.addRange(Y));
                  }
                }
              }
            }
            for (ee = [], G = E; G = G.parentNode; ) G.nodeType === 1 && ee.push({
              element: G,
              left: G.scrollLeft,
              top: G.scrollTop
            });
            for (typeof E.focus == "function" && E.focus(), E = 0; E < ee.length; E++) {
              var J = ee[E];
              J.element.scrollLeft = J.left, J.element.scrollTop = J.top;
            }
          }
          Jr = !!gf, yf = gf = null;
        } finally {
          Ge = u, ve.p = s, ce.T = r;
        }
      }
      e.current = t, it = 2;
    }
  }
  function of() {
    if (it === 2) {
      it = 0;
      var e = Vn, t = Qo, n = (t.flags & 8772) !== 0;
      if ((t.subtreeFlags & 8772) !== 0 || n) {
        n = ce.T, ce.T = null;
        var r = ve.p;
        ve.p = 2;
        var s = Ge;
        Ge |= 4;
        try {
          y0(e, t.alternate, t);
        } finally {
          Ge = s, ve.p = r, ce.T = n;
        }
      }
      it = 3;
    }
  }
  function rf() {
    if (it === 4 || it === 3) {
      it = 0;
      var e = qr;
      qr = null, Ul();
      var t = Vn, n = Qo, r = ra, s = z0, u = (r & 335544064) === r ? 10262 : 10256;
      if ((n.subtreeFlags & u) !== 0 || (n.flags & u) !== 0 ? it = 5 : (it = 0, Qo = Vn = null, W0(t, t.pendingLanes)), u = t.pendingLanes, u === 0 && (io = null), hu(r), n = n.stateNode, un && typeof un.onCommitFiberRoot == "function") try {
        un.onCommitFiberRoot(Si, n, void 0, (n.current.flags & 128) === 128);
      } catch {
      }
      if (s !== null) {
        n = ce.T, u = ve.p, ve.p = 2, ce.T = null;
        try {
          for (var h = t.onRecoverableError, E = 0; E < s.length; E++) {
            var N = s[E];
            h(N.value, { componentStack: N.stack });
          }
        } finally {
          ce.T = n, ve.p = u;
        }
      }
      if (s = Vr, h = $r, $r = null, s !== null && (Vr = null, h === null && (h = []), e !== null)) for (N = 0; N < s.length; N++) n = (0, s[N])(h), n !== void 0 && e.finished.finally(n);
      (ra & 3) !== 0 && Fs(), Oa(t), u = t.pendingLanes, (r & 261930) !== 0 && (u & 42) !== 0 ? t === Xs ? tl++ : (tl = 0, Xs = t) : (tl = 0, Xs = null), nl(0, !1);
    }
  }
  function W0(e, t) {
    (e.pooledCacheLanes &= t) === 0 && (t = e.pooledCache, t != null && (e.pooledCache = null, Li(t)));
  }
  function Fs() {
    return qr !== null && (qr.skipTransition(), qr = null), af(), of(), rf(), lf();
  }
  function lf() {
    if (it !== 5) return !1;
    var e = Vn, t = Jd;
    Jd = 0;
    var n = hu(ra), r = ce.T, s = ve.p;
    try {
      ve.p = 32 > n ? 32 : n, ce.T = null, n = ef, ef = null;
      var u = Vn, h = ra;
      if (it = 0, Qo = Vn = null, ra = 0, (Ge & 6) !== 0) throw Error(c(331));
      var E = Ge;
      if (Ge |= 4, j0(u.current), R0(u, u.current, h, n), Ge = E, nl(0, !1), un && typeof un.onPostCommitFiberRoot == "function") try {
        un.onPostCommitFiberRoot(Si, u);
      } catch {
      }
      return !0;
    } finally {
      ve.p = s, ce.T = r, W0(e, t);
    }
  }
  function P0(e, t, n) {
    t = An(n, t), t = Cd(e.stateNode, t, 2), e = Yo(e, t, 2), e !== null && (Gl(e, 2), Oa(e));
  }
  function Qe(e, t, n) {
    if (e.tag === 3) P0(e, e, n);
    else for (; t !== null; ) {
      if (t.tag === 3) {
        P0(t, e, n);
        break;
      } else if (t.tag === 1) {
        var r = t.stateNode;
        if (typeof t.type.getDerivedStateFromError == "function" || typeof r.componentDidCatch == "function" && (io === null || !io.has(r))) {
          e = An(n, e), n = $p(2), r = Yo(t, n, 2), r !== null && (Yp(n, r, t, e), Gl(r, 2), Oa(r));
          break;
        }
      }
      t = t.return;
    }
  }
  function sf(e, t, n) {
    var r = e.pingCache;
    if (r === null) {
      r = e.pingCache = new jx();
      var s = /* @__PURE__ */ new Set();
      r.set(t, s);
    } else s = r.get(t), s === void 0 && (s = /* @__PURE__ */ new Set(), r.set(t, s));
    s.has(n) || (Zd = !0, s.add(n), e = Bx.bind(null, e, t, n), t.then(e, e));
  }
  function Bx(e, t, n) {
    var r = e.pingCache;
    r !== null && r.delete(t), e.pingedLanes |= e.suspendedLanes & n, e.warmLanes &= ~n, Je === e && (Le & n) === n && ((st === 4 || st === 3 && (Le & 62914560) === Le && 300 > $t() - Ws) && (Ge & 2) === 0 ? Gr(e, 0) : Gs |= n, Ur === Le && (Ur = 0)), Oa(e);
  }
  function I0(e, t) {
    t === 0 && (t = Dh()), e = Oo(e, t), e !== null && (Gl(e, t), Oa(e));
  }
  function Ux(e) {
    var t = e.memoizedState, n = 0;
    t !== null && (n = t.retryLane), I0(e, n);
  }
  function qx(e, t) {
    var n = 0;
    switch (e.tag) {
      case 31:
      case 13:
        var r = e.stateNode, s = e.memoizedState;
        s !== null && (n = s.retryLane);
        break;
      case 19:
        r = e.stateNode;
        break;
      case 22:
        r = e.stateNode._retryCache;
        break;
      default:
        throw Error(c(314));
    }
    r !== null && r.delete(t), I0(e, n);
  }
  function Vx(e, t) {
    return xt(e, t);
  }
  var Pr = null, Ir = null, cf = !1, Js = !1, uf = !1, so = 0;
  function Oa(e) {
    e !== Ir && e.next === null && (Ir === null ? Pr = Ir = e : Ir = Ir.next = e), Js = !0, cf || (cf = !0, Yx());
  }
  function nl(e, t) {
    if (!uf && Js) {
      uf = !0;
      do
        for (var n = !1, r = Pr; r !== null; ) {
          if (!t) if (e !== 0) {
            var s = r.pendingLanes;
            if (s === 0) var u = 0;
            else {
              var h = r.suspendedLanes, E = r.pingedLanes;
              u = (1 << 31 - dn(42 | e) + 1) - 1, u &= s & ~(h & ~E), u = u & 201326741 ? u & 201326741 | 1 : u ? u | 2 : 0;
            }
            u !== 0 && (n = !0, Z0(r, u));
          } else u = Le, u = Yl(r, r === Je ? u : 0, r.cancelPendingCommit !== null || r.timeoutHandle !== -1), (u & 3) === 0 || wi(r, u) || (n = !0, Z0(r, u));
          r = r.next;
        }
      while (n);
      uf = !1;
    }
  }
  function $x() {
    X0();
  }
  function X0() {
    Js = cf = !1;
    var e = 0;
    so !== 0 && Fx() && (e = so);
    for (var t = $t(), n = null, r = Pr; r !== null; ) {
      var s = r.next, u = Q0(r, t);
      u === 0 ? (r.next = null, n === null ? Pr = s : n.next = s, s === null && (Ir = n)) : (n = r, (e !== 0 || (u & 3) !== 0) && (Js = !0)), r = s;
    }
    it !== 0 && it !== 5 || nl(e, !1), so !== 0 && (so = 0);
  }
  function Q0(e, t) {
    for (var n = e.suspendedLanes, r = e.pingedLanes, s = e.expirationTimes, u = e.pendingLanes & -62914561; 0 < u; ) {
      var h = 31 - dn(u), E = 1 << h, N = s[h];
      N === -1 ? ((E & n) === 0 || (E & r) !== 0) && (s[h] = vw(E, t)) : N <= t && (e.expiredLanes |= E), u &= ~E;
    }
    if (t = Je, n = Le, n = Yl(e, e === t ? n : 0, e.cancelPendingCommit !== null || e.timeoutHandle !== -1), r = e.callbackNode, n === 0 || e === t && (Xe === 2 || Xe === 9) || e.cancelPendingCommit !== null) return r !== null && r !== null && xn(r), e.callbackNode = null, e.callbackPriority = 0;
    if ((n & 3) === 0 || wi(e, n)) {
      if (t = n & -n, t === e.callbackPriority) return t;
      switch (r !== null && xn(r), hu(n)) {
        case 2:
        case 8:
          n = Bt;
          break;
        case 32:
          n = Ya;
          break;
        case 268435456:
          n = Mh;
          break;
        default:
          n = Ya;
      }
      return r = K0.bind(null, e), n = xt(n, r), e.callbackPriority = t, e.callbackNode = n, t;
    }
    return r !== null && r !== null && xn(r), e.callbackPriority = 2, e.callbackNode = null, 2;
  }
  function K0(e, t) {
    if (it !== 0 && it !== 5) return e.callbackNode = null, e.callbackPriority = 0, null;
    var n = e.callbackNode;
    if (Fs() && e.callbackNode !== n) return null;
    var r = Le;
    return r = Yl(e, e === Je ? r : 0, e.cancelPendingCommit !== null || e.timeoutHandle !== -1), r === 0 ? null : (k0(e, r, t), Q0(e, $t()), e.callbackNode != null && e.callbackNode === n ? K0.bind(null, e) : null);
  }
  function Z0(e, t) {
    if (Fs()) return null;
    k0(e, t, !0);
  }
  function Yx() {
    eC(function() {
      (Ge & 6) !== 0 ? xt(yt, $x) : X0();
    });
  }
  function df() {
    if (so === 0) {
      var e = Ho;
      e === 0 && (e = ql, ql <<= 1, (ql & 261888) === 0 && (ql = 256)), so = e;
    }
    return so;
  }
  function F0(e) {
    return e == null || typeof e == "symbol" || typeof e == "boolean" ? null : typeof e == "function" ? e : Ql(e);
  }
  function Gx(e, t, n, r, s) {
    if (t === "submit" && n && n.stateNode === s) {
      var u = F0((s[Zt] || null).action), h = r.submitter;
      h && (t = (t = h[Zt] || null) ? F0(t.formAction) : h.getAttribute("formAction"), t !== null && (u = t, h = null));
      var E = new Jl("action", "action", null, r, s);
      e.push({
        event: E,
        listeners: [{
          instance: null,
          listener: function() {
            if (r.defaultPrevented) {
              if (so !== 0) {
                var N = new FormData(s, h);
                yd(n, {
                  pending: !0,
                  data: N,
                  method: s.method,
                  action: u
                }, null, N);
              }
            } else typeof u == "function" && (E.preventDefault(), N = new FormData(s, h), yd(n, {
              pending: !0,
              data: N,
              method: s.method,
              action: u
            }, u, N));
          },
          currentTarget: s
        }]
      });
    }
  }
  for (var ff = 0; ff < Lu.length; ff++) {
    var mf = Lu[ff];
    Hn(mf.toLowerCase(), "on" + (mf[0].toUpperCase() + mf.slice(1)));
  }
  Hn(Rv, "onAnimationEnd"), Hn(_v, "onAnimationIteration"), Hn(Nv, "onAnimationStart"), Hn("dblclick", "onDoubleClick"), Hn("focusin", "onFocus"), Hn("focusout", "onBlur"), Hn(Fw, "onTransitionRun"), Hn(Jw, "onTransitionStart"), Hn(ex, "onTransitionCancel"), Hn(jv, "onTransitionEnd"), vr("onMouseEnter", ["mouseout", "mouseover"]), vr("onMouseLeave", ["mouseout", "mouseover"]), vr("onPointerEnter", ["pointerout", "pointerover"]), vr("onPointerLeave", ["pointerout", "pointerover"]), _o("onChange", "change click focusin focusout input keydown keyup selectionchange".split(" ")), _o("onSelect", "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")), _o("onBeforeInput", [
    "compositionend",
    "keypress",
    "textInput",
    "paste"
  ]), _o("onCompositionEnd", "compositionend focusout keydown keypress keyup mousedown".split(" ")), _o("onCompositionStart", "compositionstart focusout keydown keypress keyup mousedown".split(" ")), _o("onCompositionUpdate", "compositionupdate focusout keydown keypress keyup mousedown".split(" "));
  var al = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "), Wx = new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(al));
  function J0(e, t) {
    t = (t & 4) !== 0;
    for (var n = 0; n < e.length; n++) {
      var r = e[n], s = r.event;
      r = r.listeners;
      e: {
        var u = void 0;
        if (t) for (var h = r.length - 1; 0 <= h; h--) {
          var E = r[h], N = E.instance, q = E.currentTarget;
          if (E = E.listener, N !== u && s.isPropagationStopped()) break e;
          u = E, s.currentTarget = q;
          try {
            u(s);
          } catch (P) {
            ns(P);
          }
          s.currentTarget = null, u = N;
        }
        else for (h = 0; h < r.length; h++) {
          if (E = r[h], N = E.instance, q = E.currentTarget, E = E.listener, N !== u && s.isPropagationStopped()) break e;
          u = E, s.currentTarget = q;
          try {
            u(s);
          } catch (P) {
            ns(P);
          }
          s.currentTarget = null, u = N;
        }
      }
    }
  }
  function De(e, t) {
    var n = t[Vh];
    n === void 0 && (n = t[Vh] = /* @__PURE__ */ new Set());
    var r = e + "__bubble";
    n.has(r) || (tg(t, e, 2, !1), n.add(r));
  }
  function hf(e, t, n) {
    var r = 0;
    t && (r |= 4), tg(n, e, r, t);
  }
  var ec = "_reactListening" + Math.random().toString(36).slice(2);
  function eg(e) {
    if (!e[ec]) {
      e[ec] = !0, Gh.forEach(function(n) {
        n !== "selectionchange" && (Wx.has(n) || hf(n, !1, e), hf(n, !0, e));
      });
      var t = e.nodeType === 9 ? e : e.ownerDocument;
      t === null || t[ec] || (t[ec] = !0, hf("selectionchange", !1, t));
    }
  }
  function tg(e, t, n, r) {
    switch (Yg(t)) {
      case 2:
        var s = UC;
        break;
      case 8:
        s = qC;
        break;
      default:
        s = Df;
    }
    n = s.bind(null, t, n, e), s = void 0, !xu || t !== "touchstart" && t !== "touchmove" && t !== "wheel" || (s = !0), r ? s !== void 0 ? e.addEventListener(t, n, {
      capture: !0,
      passive: s
    }) : e.addEventListener(t, n, !0) : s !== void 0 ? e.addEventListener(t, n, { passive: s }) : e.addEventListener(t, n, !1);
  }
  function vf(e, t, n, r, s) {
    var u = r;
    if ((t & 1) === 0 && (t & 2) === 0 && r !== null) e: for (; ; ) {
      if (r === null) return;
      var h = r.tag;
      if (h === 3 || h === 4) {
        var E = r.stateNode.containerInfo;
        if (E === s) break;
        if (h === 4) for (h = r.return; h !== null; ) {
          var N = h.tag;
          if ((N === 3 || N === 4) && h.stateNode.containerInfo === s) return;
          h = h.return;
        }
        for (; E !== null; ) {
          if (h = Ro(E), h === null) return;
          if (N = h.tag, N === 5 || N === 6 || N === 26 || N === 27) {
            r = u = h;
            continue e;
          }
          E = E.parentNode;
        }
      }
      r = r.return;
    }
    av(function() {
      var q = u, P = Su(n), ee = [];
      e: {
        var B = Ov.get(e);
        if (B !== void 0) {
          var G = Jl, fe = e;
          switch (e) {
            case "keypress":
              if (Zl(n) === 0) break e;
            case "keydown":
            case "keyup":
              G = Dw;
              break;
            case "focusin":
              fe = "focus", G = Tu;
              break;
            case "focusout":
              fe = "blur", G = Tu;
              break;
            case "beforeblur":
            case "afterblur":
              G = Tu;
              break;
            case "click":
              if (n.button === 2) break e;
            case "auxclick":
            case "dblclick":
            case "mousedown":
            case "mousemove":
            case "mouseup":
            case "mouseout":
            case "mouseover":
            case "contextmenu":
              G = iv;
              break;
            case "drag":
            case "dragend":
            case "dragenter":
            case "dragexit":
            case "dragleave":
            case "dragover":
            case "dragstart":
            case "drop":
              G = Rw;
              break;
            case "touchcancel":
            case "touchend":
            case "touchmove":
            case "touchstart":
              G = Lw;
              break;
            case Rv:
            case _v:
            case Nv:
              G = _w;
              break;
            case jv:
              G = Hw;
              break;
            case "scroll":
            case "scrollend":
              G = Tw;
              break;
            case "wheel":
              G = Bw;
              break;
            case "copy":
            case "cut":
            case "paste":
              G = Nw;
              break;
            case "gotpointercapture":
            case "lostpointercapture":
            case "pointercancel":
            case "pointerdown":
            case "pointermove":
            case "pointerout":
            case "pointerover":
            case "pointerup":
              G = sv;
              break;
            case "submit":
              G = kw;
              break;
            case "toggle":
            case "beforetoggle":
              G = Uw;
          }
          var Se = (t & 4) !== 0, Ne = !Se && (e === "scroll" || e === "scrollend"), U = Se ? B !== null ? B + "Capture" : null : B;
          Se = [];
          for (var D = q, Y; D !== null; ) {
            var J = D;
            if (Y = J.stateNode, J = J.tag, J !== 5 && J !== 26 && J !== 27 || Y === null || U === null || (J = Ai(D, U), J != null && Se.push(ol(D, J, Y))), Ne) break;
            D = D.return;
          }
          0 < Se.length && (B = new G(B, fe, null, n, P), ee.push({
            event: B,
            listeners: Se
          }));
        }
      }
      if ((t & 7) === 0) {
        e: {
          if (G = e === "mouseover" || e === "pointerover", B = e === "mouseout" || e === "pointerout", G && n !== bu && (fe = n.relatedTarget || n.fromElement) && (Ro(fe) || fe[xi])) break e;
          (B || G) && (fe = P.window === P ? P : (G = P.ownerDocument) ? G.defaultView || G.parentWindow : window, B ? (G = n.relatedTarget || n.toElement, B = q, G = G ? Ro(G) : null, G !== null && (Ne = f(G), Se = G.tag, G !== Ne || Se !== 5 && Se !== 27 && Se !== 6) && (G = null)) : (B = null, G = q), B !== G && (Se = iv, J = "onMouseLeave", U = "onMouseEnter", D = "mouse", (e === "pointerout" || e === "pointerover") && (Se = sv, J = "onPointerLeave", U = "onPointerEnter", D = "pointer"), Ne = B == null ? fe : Ei(B), Y = G == null ? fe : Ei(G), fe = new Se(J, D + "leave", B, n, P), fe.target = Ne, fe.relatedTarget = Y, J = null, Ro(P) === q && (Se = new Se(U, D + "enter", G, n, P), Se.target = Y, Se.relatedTarget = Ne, J = Se), Ne = J, Se = B && G ? $(B, G, Px) : null, B !== null && ng(ee, fe, B, Se, !1), G !== null && Ne !== null && ng(ee, Ne, G, Se, !0)));
        }
        e: {
          if (B = q ? Ei(q) : window, G = B.nodeName && B.nodeName.toLowerCase(), G === "select" || G === "input" && B.type === "file") var ge = pv;
          else if (hv(B)) if (gv) ge = Qw;
          else {
            ge = Iw;
            var He = Pw;
          }
          else G = B.nodeName, !G || G.toLowerCase() !== "input" || B.type !== "checkbox" && B.type !== "radio" ? q && yu(q.elementType) && (ge = pv) : ge = Xw;
          if (ge && (ge = ge(e, q))) {
            vv(ee, ge, n, P);
            break e;
          }
          He && He(e, B, q);
        }
        switch (He = q ? Ei(q) : window, e) {
          case "focusin":
            (hv(He) || He.contentEditable === "true") && (wr = He, zu = q, zi = null);
            break;
          case "focusout":
            zi = zu = wr = null;
            break;
          case "mousedown":
            Du = !0;
            break;
          case "contextmenu":
          case "mouseup":
          case "dragend":
            Du = !1, Av(ee, n, P);
            break;
          case "selectionchange":
            if (Zw) break;
          case "keydown":
          case "keyup":
            Av(ee, n, P);
        }
        var Ee;
        if (_u) e: {
          switch (e) {
            case "compositionstart":
              var Re = "onCompositionStart";
              break e;
            case "compositionend":
              Re = "onCompositionEnd";
              break e;
            case "compositionupdate":
              Re = "onCompositionUpdate";
              break e;
          }
          Re = void 0;
        }
        else Sr ? fv(e, n) && (Re = "onCompositionEnd") : e === "keydown" && n.keyCode === 229 && (Re = "onCompositionStart");
        Re && (cv && n.locale !== "ko" && (Sr || Re !== "onCompositionStart" ? Re === "onCompositionEnd" && Sr && (Ee = ov()) : (Wa = P, Cu = "value" in Wa ? Wa.value : Wa.textContent, Sr = !0)), He = tc(q, Re), 0 < He.length && (Re = new lv(Re, e, null, n, P), ee.push({
          event: Re,
          listeners: He
        }), Ee ? Re.data = Ee : (Ee = mv(n), Ee !== null && (Re.data = Ee)))), (Ee = Vw ? $w(e, n) : Yw(e, n)) && (Re = tc(q, "onBeforeInput"), 0 < Re.length && (He = new lv("onBeforeInput", "beforeinput", null, n, P), ee.push({
          event: He,
          listeners: Re
        }), He.data = Ee)), Gx(ee, e, q, n, P);
      }
      J0(ee, t);
    });
  }
  function ol(e, t, n) {
    return {
      instance: e,
      listener: t,
      currentTarget: n
    };
  }
  function tc(e, t) {
    for (var n = t + "Capture", r = []; e !== null; ) {
      var s = e, u = s.stateNode;
      if (s = s.tag, s !== 5 && s !== 26 && s !== 27 || u === null || (s = Ai(e, n), s != null && r.unshift(ol(e, s, u)), s = Ai(e, t), s != null && r.push(ol(e, s, u))), e.tag === 3) return r;
      e = e.return;
    }
    return [];
  }
  function Px(e) {
    if (e === null) return null;
    do
      e = e.return;
    while (e && e.tag !== 5 && e.tag !== 27);
    return e || null;
  }
  function ng(e, t, n, r, s) {
    for (var u = t._reactName, h = []; n !== null && n !== r; ) {
      var E = n, N = E.alternate, q = E.stateNode;
      if (E = E.tag, N !== null && N === r) break;
      E !== 5 && E !== 26 && E !== 27 || q === null || (N = q, s ? (q = Ai(n, u), q != null && h.unshift(ol(n, q, N))) : s || (q = Ai(n, u), q != null && h.push(ol(n, q, N)))), n = n.return;
    }
    h.length !== 0 && e.push({
      event: t,
      listeners: h
    });
  }
  var Ix = /\r\n?/g, Xx = /\u0000|\uFFFD/g;
  function ag(e) {
    return (typeof e == "string" ? e : "" + e).replace(Ix, `
`).replace(Xx, "");
  }
  function og(e, t) {
    return t = ag(t), ag(e) === t;
  }
  function Ke(e, t, n, r, s, u) {
    switch (n) {
      case "children":
        if (typeof r == "string") t === "body" || t === "textarea" && r === "" || gr(e, r);
        else if (typeof r == "number" || typeof r == "bigint") t !== "body" && gr(e, "" + r);
        else return;
        break;
      case "className":
        Xl(e, "class", r);
        break;
      case "tabIndex":
        Xl(e, "tabindex", r);
        break;
      case "dir":
      case "role":
      case "viewBox":
      case "width":
      case "height":
        Xl(e, n, r);
        break;
      case "style":
        tv(e, r, u);
        return;
      case "data":
        if (t !== "object") {
          Xl(e, "data", r);
          break;
        }
      case "src":
      case "href":
        if (r === "" && (t !== "a" || n !== "href")) {
          e.removeAttribute(n);
          break;
        }
        if (r == null || typeof r == "function" || typeof r == "symbol" || typeof r == "boolean") {
          e.removeAttribute(n);
          break;
        }
        r = Ql(r), e.setAttribute(n, r);
        break;
      case "action":
      case "formAction":
        if (typeof r == "function") {
          e.setAttribute(n, "javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");
          break;
        } else typeof u == "function" && (n === "formAction" ? (t !== "input" && Ke(e, t, "name", s.name, s, null), Ke(e, t, "formEncType", s.formEncType, s, null), Ke(e, t, "formMethod", s.formMethod, s, null), Ke(e, t, "formTarget", s.formTarget, s, null)) : (Ke(e, t, "encType", s.encType, s, null), Ke(e, t, "method", s.method, s, null), Ke(e, t, "target", s.target, s, null)));
        if (r == null || typeof r == "symbol" || typeof r == "boolean") {
          e.removeAttribute(n);
          break;
        }
        r = Ql(r), e.setAttribute(n, r);
        break;
      case "onClick":
        r != null && (e.onclick = Kn);
        return;
      case "onScroll":
        r != null && De("scroll", e);
        return;
      case "onScrollEnd":
        r != null && De("scrollend", e);
        return;
      case "dangerouslySetInnerHTML":
        if (r != null) {
          if (typeof r != "object" || !("__html" in r)) throw Error(c(61));
          if (n = r.__html, n != null) {
            if (s.children != null) throw Error(c(60));
            u?.__html !== n && (e.innerHTML = n);
          }
        }
        break;
      case "multiple":
        e.multiple = r && typeof r != "function" && typeof r != "symbol";
        break;
      case "muted":
        e.muted = r && typeof r != "function" && typeof r != "symbol";
        break;
      case "suppressContentEditableWarning":
      case "suppressHydrationWarning":
      case "defaultValue":
      case "defaultChecked":
      case "innerHTML":
      case "ref":
        break;
      case "autoFocus":
        break;
      case "xlinkHref":
        if (r == null || typeof r == "function" || typeof r == "boolean" || typeof r == "symbol") {
          e.removeAttribute("xlink:href");
          break;
        }
        n = Ql(r), e.setAttributeNS("http://www.w3.org/1999/xlink", "xlink:href", n);
        break;
      case "contentEditable":
      case "spellCheck":
      case "draggable":
      case "value":
      case "autoReverse":
      case "externalResourcesRequired":
      case "focusable":
      case "preserveAlpha":
        r != null && typeof r != "function" && typeof r != "symbol" ? e.setAttribute(n, r) : e.removeAttribute(n);
        break;
      case "inert":
      case "allowFullScreen":
      case "async":
      case "autoPlay":
      case "controls":
      case "credentialless":
      case "default":
      case "defer":
      case "disabled":
      case "disablePictureInPicture":
      case "disableRemotePlayback":
      case "formNoValidate":
      case "hidden":
      case "loop":
      case "noModule":
      case "noValidate":
      case "open":
      case "playsInline":
      case "readOnly":
      case "required":
      case "reversed":
      case "scoped":
      case "seamless":
      case "itemScope":
        r && typeof r != "function" && typeof r != "symbol" ? e.setAttribute(n, "") : e.removeAttribute(n);
        break;
      case "capture":
      case "download":
        r === !0 ? e.setAttribute(n, "") : r !== !1 && r != null && typeof r != "function" && typeof r != "symbol" ? e.setAttribute(n, r) : e.removeAttribute(n);
        break;
      case "cols":
      case "rows":
      case "size":
      case "span":
        r != null && typeof r != "function" && typeof r != "symbol" && !isNaN(r) && 1 <= r ? e.setAttribute(n, r) : e.removeAttribute(n);
        break;
      case "rowSpan":
      case "start":
        r == null || typeof r == "function" || typeof r == "symbol" || isNaN(r) ? e.removeAttribute(n) : e.setAttribute(n, r);
        break;
      case "popover":
        De("beforetoggle", e), De("toggle", e), Il(e, "popover", r);
        break;
      case "xlinkActuate":
        ya(e, "http://www.w3.org/1999/xlink", "xlink:actuate", r);
        break;
      case "xlinkArcrole":
        ya(e, "http://www.w3.org/1999/xlink", "xlink:arcrole", r);
        break;
      case "xlinkRole":
        ya(e, "http://www.w3.org/1999/xlink", "xlink:role", r);
        break;
      case "xlinkShow":
        ya(e, "http://www.w3.org/1999/xlink", "xlink:show", r);
        break;
      case "xlinkTitle":
        ya(e, "http://www.w3.org/1999/xlink", "xlink:title", r);
        break;
      case "xlinkType":
        ya(e, "http://www.w3.org/1999/xlink", "xlink:type", r);
        break;
      case "xmlBase":
        ya(e, "http://www.w3.org/XML/1998/namespace", "xml:base", r);
        break;
      case "xmlLang":
        ya(e, "http://www.w3.org/XML/1998/namespace", "xml:lang", r);
        break;
      case "xmlSpace":
        ya(e, "http://www.w3.org/XML/1998/namespace", "xml:space", r);
        break;
      case "is":
        Il(e, "is", r);
        break;
      case "innerText":
      case "textContent":
        return;
      default:
        if (!(2 < n.length) || n[0] !== "o" && n[0] !== "O" || n[1] !== "n" && n[1] !== "N") n = Ew.get(n) || n, Il(e, n, r);
        else return;
    }
    Ve = !0;
  }
  function pf(e, t, n, r, s, u) {
    switch (n) {
      case "style":
        tv(e, r, u);
        return;
      case "dangerouslySetInnerHTML":
        if (r != null) {
          if (typeof r != "object" || !("__html" in r)) throw Error(c(61));
          if (n = r.__html, n != null) {
            if (s.children != null) throw Error(c(60));
            u?.__html !== n && (e.innerHTML = n);
          }
        }
        break;
      case "children":
        if (typeof r == "string") gr(e, r);
        else if (typeof r == "number" || typeof r == "bigint") gr(e, "" + r);
        else return;
        break;
      case "onScroll":
        r != null && De("scroll", e);
        return;
      case "onScrollEnd":
        r != null && De("scrollend", e);
        return;
      case "onClick":
        r != null && (e.onclick = Kn);
        return;
      case "suppressContentEditableWarning":
      case "suppressHydrationWarning":
      case "innerHTML":
      case "ref":
        return;
      case "innerText":
      case "textContent":
        return;
      default:
        if (!Wh.hasOwnProperty(n)) e: {
          if (n[0] === "o" && n[1] === "n" && (s = n.endsWith("Capture"), u = n.slice(2, s ? n.length - 7 : void 0), t = e[Zt] || null, t = t != null ? t[n] : null, typeof t == "function" && e.removeEventListener(u, t, s), typeof r == "function")) {
            typeof t != "function" && t !== null && (n in e ? e[n] = null : e.hasAttribute(n) && e.removeAttribute(n)), e.addEventListener(u, r, s);
            break e;
          }
          Ve = !0, n in e ? e[n] = r : r === !0 ? e.setAttribute(n, "") : Il(e, n, r);
        }
        return;
    }
    Ve = !0;
  }
  function kt(e, t, n) {
    switch (t) {
      case "div":
      case "span":
      case "svg":
      case "path":
      case "a":
      case "g":
      case "p":
      case "li":
        break;
      case "img":
        De("error", e), De("load", e);
        var r = !1, s = !1, u;
        for (u in n) if (n.hasOwnProperty(u)) {
          var h = n[u];
          if (h != null) switch (u) {
            case "src":
              r = !0;
              break;
            case "srcSet":
              s = !0;
              break;
            case "children":
            case "dangerouslySetInnerHTML":
              throw Error(c(137, t));
            default:
              Ke(e, t, u, h, n, null);
          }
        }
        s && Ke(e, t, "srcSet", n.srcSet, n, null), r && Ke(e, t, "src", n.src, n, null);
        return;
      case "input":
        De("invalid", e);
        var E = u = h = s = null, N = null, q = null;
        for (r in n) if (n.hasOwnProperty(r)) {
          var P = n[r];
          if (P != null) switch (r) {
            case "name":
              s = P;
              break;
            case "type":
              h = P;
              break;
            case "checked":
              N = P;
              break;
            case "defaultChecked":
              q = P;
              break;
            case "value":
              u = P;
              break;
            case "defaultValue":
              E = P;
              break;
            case "children":
            case "dangerouslySetInnerHTML":
              if (P != null) throw Error(c(137, t));
              break;
            default:
              Ke(e, t, r, P, n, null);
          }
        }
        Zh(e, u, E, N, q, h, s, !1);
        return;
      case "select":
        De("invalid", e), r = h = u = null;
        for (s in n) if (n.hasOwnProperty(s) && (E = n[s], E != null)) switch (s) {
          case "value":
            u = E;
            break;
          case "defaultValue":
            h = E;
            break;
          case "multiple":
            r = E;
          default:
            Ke(e, t, s, E, n, null);
        }
        t = u, n = h, e.multiple = !!r, t != null ? pr(e, !!r, t, !1) : n != null && pr(e, !!r, n, !0);
        return;
      case "textarea":
        De("invalid", e), u = s = r = null;
        for (h in n) if (n.hasOwnProperty(h) && (E = n[h], E != null)) switch (h) {
          case "value":
            r = E;
            break;
          case "defaultValue":
            s = E;
            break;
          case "children":
            u = E;
            break;
          case "dangerouslySetInnerHTML":
            if (E != null) throw Error(c(91));
            break;
          default:
            Ke(e, t, h, E, n, null);
        }
        Jh(e, r, s, u);
        return;
      case "option":
        for (N in n) n.hasOwnProperty(N) && (r = n[N], r != null) && (N === "selected" ? e.selected = r && typeof r != "function" && typeof r != "symbol" : Ke(e, t, N, r, n, null));
        return;
      case "dialog":
        De("beforetoggle", e), De("toggle", e), De("cancel", e), De("close", e);
        break;
      case "iframe":
      case "object":
        De("load", e);
        break;
      case "video":
      case "audio":
        for (r = 0; r < al.length; r++) De(al[r], e);
        break;
      case "image":
        De("error", e), De("load", e);
        break;
      case "details":
        De("toggle", e);
        break;
      case "embed":
      case "source":
      case "link":
        De("error", e), De("load", e);
      case "area":
      case "base":
      case "br":
      case "col":
      case "hr":
      case "keygen":
      case "meta":
      case "param":
      case "track":
      case "wbr":
      case "menuitem":
        for (q in n) if (n.hasOwnProperty(q) && (r = n[q], r != null)) switch (q) {
          case "children":
          case "dangerouslySetInnerHTML":
            throw Error(c(137, t));
          default:
            Ke(e, t, q, r, n, null);
        }
        return;
      default:
        if (yu(t)) {
          for (P in n) n.hasOwnProperty(P) && (r = n[P], r !== void 0 && pf(e, t, P, r, n, void 0));
          return;
        }
    }
    for (E in n) n.hasOwnProperty(E) && (r = n[E], r != null && Ke(e, t, E, r, n, null));
  }
  var Qx = {};
  function Kx(e, t, n, r) {
    switch (t) {
      case "div":
      case "span":
      case "svg":
      case "path":
      case "a":
      case "g":
      case "p":
      case "li":
        break;
      case "input":
        var s = null, u = null, h = null, E = null, N = null, q = null, P = null;
        for (G in n) {
          var ee = n[G];
          if (n.hasOwnProperty(G) && ee != null) switch (G) {
            case "checked":
              break;
            case "value":
              break;
            case "defaultValue":
              N = ee;
            default:
              r.hasOwnProperty(G) || Ke(e, t, G, null, r, ee);
          }
        }
        for (var B in r) {
          var G = r[B];
          if (ee = n[B], r.hasOwnProperty(B) && (G != null || ee != null)) switch (B) {
            case "type":
              G !== ee && (Ve = !0), u = G;
              break;
            case "name":
              G !== ee && (Ve = !0), s = G;
              break;
            case "checked":
              G !== ee && (Ve = !0), q = G;
              break;
            case "defaultChecked":
              G !== ee && (Ve = !0), P = G;
              break;
            case "value":
              G !== ee && (Ve = !0), h = G;
              break;
            case "defaultValue":
              G !== ee && (Ve = !0), E = G;
              break;
            case "children":
            case "dangerouslySetInnerHTML":
              if (G != null) throw Error(c(137, t));
              break;
            default:
              G !== ee && Ke(e, t, B, G, r, ee);
          }
        }
        pu(e, h, E, N, q, P, u, s);
        return;
      case "select":
        G = h = E = B = null;
        for (u in n) if (N = n[u], n.hasOwnProperty(u) && N != null) switch (u) {
          case "value":
            break;
          case "multiple":
            G = N;
          default:
            r.hasOwnProperty(u) || Ke(e, t, u, null, r, N);
        }
        for (s in r) if (u = r[s], N = n[s], r.hasOwnProperty(s) && (u != null || N != null)) switch (s) {
          case "value":
            u !== N && (Ve = !0), B = u;
            break;
          case "defaultValue":
            u !== N && (Ve = !0), E = u;
            break;
          case "multiple":
            u !== N && (Ve = !0), h = u;
          default:
            u !== N && Ke(e, t, s, u, r, N);
        }
        t = E, n = h, r = G, B != null ? pr(e, !!n, B, !1) : !!r != !!n && (t != null ? pr(e, !!n, t, !0) : pr(e, !!n, n ? [] : "", !1));
        return;
      case "textarea":
        G = B = null;
        for (E in n) if (s = n[E], n.hasOwnProperty(E) && s != null && !r.hasOwnProperty(E)) switch (E) {
          case "value":
            break;
          case "children":
            break;
          default:
            Ke(e, t, E, null, r, s);
        }
        for (h in r) if (s = r[h], u = n[h], r.hasOwnProperty(h) && (s != null || u != null)) switch (h) {
          case "value":
            s !== u && (Ve = !0), B = s;
            break;
          case "defaultValue":
            s !== u && (Ve = !0), G = s;
            break;
          case "children":
            break;
          case "dangerouslySetInnerHTML":
            if (s != null) throw Error(c(91));
            break;
          default:
            s !== u && Ke(e, t, h, s, r, u);
        }
        Fh(e, B, G);
        return;
      case "option":
        for (var fe in n) B = n[fe], n.hasOwnProperty(fe) && B != null && !r.hasOwnProperty(fe) && (fe === "selected" ? e.selected = !1 : Ke(e, t, fe, null, r, B));
        for (N in r) B = r[N], G = n[N], r.hasOwnProperty(N) && B !== G && (B != null || G != null) && (N === "selected" ? (B !== G && (Ve = !0), e.selected = B && typeof B != "function" && typeof B != "symbol") : Ke(e, t, N, B, r, G));
        return;
      case "img":
      case "link":
      case "area":
      case "base":
      case "br":
      case "col":
      case "embed":
      case "hr":
      case "keygen":
      case "meta":
      case "param":
      case "source":
      case "track":
      case "wbr":
      case "menuitem":
        for (var Se in n) B = n[Se], n.hasOwnProperty(Se) && B != null && !r.hasOwnProperty(Se) && Ke(e, t, Se, null, r, B);
        for (q in r) if (B = r[q], G = n[q], r.hasOwnProperty(q) && B !== G && (B != null || G != null)) switch (q) {
          case "children":
          case "dangerouslySetInnerHTML":
            if (B != null) throw Error(c(137, t));
            break;
          default:
            Ke(e, t, q, B, r, G);
        }
        return;
      default:
        if (yu(t)) {
          for (var Ne in n) B = n[Ne], n.hasOwnProperty(Ne) && B !== void 0 && !r.hasOwnProperty(Ne) && pf(e, t, Ne, void 0, r, B);
          for (P in r) B = r[P], G = n[P], !r.hasOwnProperty(P) || B === G || B === void 0 && G === void 0 || pf(e, t, P, B, r, G);
          return;
        }
    }
    for (var U in n) B = n[U], n.hasOwnProperty(U) && B != null && !r.hasOwnProperty(U) && Ke(e, t, U, null, r, B);
    for (ee in r) B = r[ee], G = n[ee], !r.hasOwnProperty(ee) || B === G || B == null && G == null || Ke(e, t, ee, B, r, G);
  }
  function rg(e) {
    switch (e) {
      case "css":
      case "script":
      case "font":
      case "img":
      case "image":
      case "input":
      case "link":
        return !0;
      default:
        return !1;
    }
  }
  function Zx() {
    if (typeof performance.getEntriesByType == "function") {
      for (var e = 0, t = 0, n = performance.getEntriesByType("resource"), r = 0; r < n.length; r++) {
        var s = n[r], u = s.transferSize, h = s.initiatorType, E = s.duration;
        if (u && E && rg(h)) {
          for (h = 0, E = s.responseEnd, r += 1; r < n.length; r++) {
            var N = n[r], q = N.startTime;
            if (q > E) break;
            var P = N.transferSize, ee = N.initiatorType;
            P && rg(ee) && (N = N.responseEnd, h += P * (N < E ? 1 : (E - q) / (N - q)));
          }
          if (--r, t += 8 * (u + h) / (s.duration / 1e3), e++, 10 < e) break;
        }
      }
      if (0 < e) return t / e / 1e6;
    }
    return navigator.connection && (e = navigator.connection.downlink, typeof e == "number") ? e : 5;
  }
  var gf = null, yf = null;
  function rl(e) {
    return e.nodeType === 9 ? e : e.ownerDocument;
  }
  function ig(e) {
    switch (e) {
      case "http://www.w3.org/2000/svg":
        return 1;
      case "http://www.w3.org/1998/Math/MathML":
        return 2;
      default:
        return 0;
    }
  }
  function lg(e, t) {
    if (e === 0) switch (t) {
      case "svg":
        return 1;
      case "math":
        return 2;
      default:
        return 0;
    }
    return e === 1 && t === "foreignObject" ? 0 : e;
  }
  function sg(e, t, n, r) {
    return n = rl(n).createElement(e), n[jt] = r, n[Zt] = t, kt(n, e, t), Ct(n), n;
  }
  function bf(e, t) {
    return e === "textarea" || e === "noscript" || typeof t.children == "string" || typeof t.children == "number" || typeof t.children == "bigint" || typeof t.dangerouslySetInnerHTML == "object" && t.dangerouslySetInnerHTML !== null && t.dangerouslySetInnerHTML.__html != null;
  }
  var Sf = null;
  function Fx() {
    var e = window.event;
    return e && e.type === "popstate" ? e === Sf ? !1 : (Sf = e, !0) : (Sf = null, !1);
  }
  var wf = typeof setTimeout == "function" ? setTimeout : void 0, Jx = typeof clearTimeout == "function" ? clearTimeout : void 0, cg = typeof Promise == "function" ? Promise : void 0, ug = typeof requestAnimationFrame == "function" ? requestAnimationFrame : wf, eC = typeof queueMicrotask == "function" ? queueMicrotask : typeof cg < "u" ? function(e) {
    return cg.resolve(null).then(e).catch(tC);
  } : wf;
  function tC(e) {
    setTimeout(function() {
      throw e;
    });
  }
  function co(e) {
    return e === "head";
  }
  function dg(e, t) {
    var n = t, r = 0;
    do {
      var s = n.nextSibling;
      if (e.removeChild(n), s && s.nodeType === 8) if (n = s.data, n === "/$" || n === "/&") {
        if (r === 0) {
          e.removeChild(s), ei(t);
          return;
        }
        r--;
      } else if (n === "$" || n === "$?" || n === "$~" || n === "$!" || n === "&") r++;
      else if (n === "html") Nf(e.ownerDocument.documentElement);
      else if (n === "head") {
        n = e.ownerDocument.head, Nf(n);
        for (var u = n.firstChild; u; ) {
          var h = u.nextSibling, E = u.nodeName;
          u[Ci] || E === "SCRIPT" || E === "STYLE" || E === "LINK" && u.rel.toLowerCase() === "stylesheet" || n.removeChild(u), u = h;
        }
      } else n === "body" && Nf(e.ownerDocument.body);
      n = s;
    } while (n);
    ei(t);
  }
  function fg(e, t) {
    var n = e;
    e = 0;
    do {
      var r = n.nextSibling;
      if (n.nodeType === 1 ? t ? (n._stashedDisplay = n.style.display, n.style.display = "none") : (n.style.display = n._stashedDisplay || "", n.getAttribute("style") === "" && n.removeAttribute("style")) : n.nodeType === 3 && (t ? (n._stashedText = n.nodeValue, n.nodeValue = "") : n.nodeValue = n._stashedText || ""), r && r.nodeType === 8) if (n = r.data, n === "/$") {
        if (e === 0) break;
        e--;
      } else n !== "$" && n !== "$?" && n !== "$~" && n !== "$!" || e++;
      n = r;
    } while (n);
  }
  function mg(e, t, n) {
    if (t = CSS.escape(t) !== t ? "r-" + btoa(t).replace(/=/g, "") : t, e.style.viewTransitionName = t, n != null && (e.style.viewTransitionClass = n), n = getComputedStyle(e), n.display === "inline") {
      if (t = e.getClientRects(), t.length === 1) var r = 1;
      else for (var s = r = 0; s < t.length; s++) {
        var u = t[s];
        0 < u.width && 0 < u.height && r++;
      }
      r === 1 && (e = e.style, e.display = t.length === 1 ? "inline-block" : "block", e.marginTop = "-" + n.paddingTop, e.marginBottom = "-" + n.paddingBottom);
    }
  }
  function hg(e, t) {
    e = e.style, t = t.style;
    var n = t != null ? t.hasOwnProperty("viewTransitionName") ? t.viewTransitionName : t.hasOwnProperty("view-transition-name") ? t["view-transition-name"] : null : null;
    e.viewTransitionName = n == null || typeof n == "boolean" ? "" : ("" + n).trim(), n = t != null ? t.hasOwnProperty("viewTransitionClass") ? t.viewTransitionClass : t.hasOwnProperty("view-transition-class") ? t["view-transition-class"] : null : null, e.viewTransitionClass = n == null || typeof n == "boolean" ? "" : ("" + n).trim(), e.display === "inline-block" && (t == null ? e.display = e.margin = "" : (n = t.display, e.display = n == null || typeof n == "boolean" ? "" : n, n = t.margin, n != null ? e.margin = n : (n = t.hasOwnProperty("marginTop") ? t.marginTop : t["margin-top"], e.marginTop = n == null || typeof n == "boolean" ? "" : n, t = t.hasOwnProperty("marginBottom") ? t.marginBottom : t["margin-bottom"], e.marginBottom = t == null || typeof t == "boolean" ? "" : t)));
  }
  function vg(e, t, n) {
    return n = n.ownerDocument.defaultView, {
      rect: e,
      abs: t.position === "absolute" || t.position === "fixed",
      clip: t.clipPath !== "none" || t.overflow !== "visible" || t.filter !== "none" || t.mask !== "none" || t.mask !== "none" || t.borderRadius !== "0px",
      view: 0 <= e.bottom && 0 <= e.right && e.top <= n.innerHeight && e.left <= n.innerWidth
    };
  }
  function xf(e) {
    return vg(e.getBoundingClientRect(), getComputedStyle(e), e);
  }
  function nC(e) {
    var t = e.getBoundingClientRect();
    t = new DOMRect(t.x + 2e4, t.y + 2e4, t.width, t.height);
    var n = getComputedStyle(e);
    return vg(t, n, e);
  }
  function aC(e) {
    return e.documentElement.clientHeight;
  }
  function oC(e) {
    this.addEventListener("load", e), this.addEventListener("error", e);
  }
  function rC(e, t, n, r, s, u, h, E, N) {
    var q = t.nodeType === 9 ? t : t.ownerDocument;
    try {
      var P = q.startViewTransition({
        update: function() {
          var B = q.defaultView, G = B.navigation && B.navigation.transition, fe = q.fonts.status;
          r();
          var Se = [];
          if (fe === "loaded" && (aC(q), q.fonts.status === "loading" && Se.push(q.fonts.ready)), fe = Se.length, e !== null) for (var Ne = e.suspenseyImages, U = 0, D = 0; D < Ne.length; D++) {
            var Y = Ne[D];
            if (!Y.complete) {
              var J = Y.getBoundingClientRect();
              if (0 < J.bottom && 0 < J.right && J.top < B.innerHeight && J.left < B.innerWidth) {
                if (U += Lg(Y), U > oc) {
                  Se.length = fe;
                  break;
                }
                Y = new Promise(oC.bind(Y)), Se.push(Y);
              }
            }
          }
          if (0 < Se.length) return B = Promise.race([Promise.all(Se), new Promise(function(ge) {
            return setTimeout(ge, 500);
          })]).then(s, s), (G ? Promise.allSettled([G.finished, B]) : B).then(u, u);
          if (s(), G) return G.finished.then(u, u);
          u();
        },
        types: n
      });
      q.__reactViewTransition = P;
      var ee = [];
      return P.ready.then(function() {
        for (var B = q.documentElement.getAnimations({ subtree: !0 }), G = 0; G < B.length; G++) {
          var fe = B[G], Se = fe.effect, Ne = Se.pseudoElement;
          if (Ne != null && Ne.startsWith("::view-transition")) {
            ee.push(fe), fe = Se.getKeyframes();
            for (var U = Ne = void 0, D = !0, Y = 0; Y < fe.length; Y++) {
              var J = fe[Y], ge = J.width;
              if (Ne === void 0) Ne = ge;
              else if (Ne !== ge) {
                D = !1;
                break;
              }
              if (ge = J.height, U === void 0) U = ge;
              else if (U !== ge) {
                D = !1;
                break;
              }
              delete J.width, delete J.height, J.transform === "none" && delete J.transform;
            }
            D && Ne !== void 0 && U !== void 0 && (Se.setKeyframes(fe), D = getComputedStyle(Se.target, Se.pseudoElement), D.width !== Ne || D.height !== U) && (D = fe[0], D.width = Ne, D.height = U, D = fe[fe.length - 1], D.width = Ne, D.height = U, Se.setKeyframes(fe));
          }
        }
        h();
      }, function(B) {
        q.__reactViewTransition === P && (q.__reactViewTransition = null);
        try {
          typeof B == "object" && B !== null && B.name === "InvalidStateError" && (B.message === "View transition was skipped because document visibility state is hidden." || B.message === "Skipping view transition because document visibility state has become hidden." || B.message === "Skipping view transition because viewport size changed." || B.message === "Transition was aborted because of invalid state") && (B = null), B !== null && N(B);
        } finally {
          r(), s(), h();
        }
      }), P.finished.finally(function() {
        for (var B = 0; B < ee.length; B++) ee[B].cancel();
        q.__reactViewTransition === P && (q.__reactViewTransition = null), E();
      }), P;
    } catch {
      return r(), s(), h(), null;
    }
  }
  function Ko(e, t) {
    this._scope = document.documentElement, this._selector = "::view-transition-" + e + "(" + t + ")";
  }
  Ko.prototype.animate = function(e, t) {
    return t = typeof t == "number" ? { duration: t } : k({}, t), t.pseudoElement = this._selector, this._scope.animate(e, t);
  }, Ko.prototype.getAnimations = function() {
    for (var e = this._scope, t = this._selector, n = e.getAnimations({ subtree: !0 }), r = [], s = 0; s < n.length; s++) {
      var u = n[s].effect;
      u !== null && u.target === e && u.pseudoElement === t && r.push(n[s]);
    }
    return r;
  }, Ko.prototype.getComputedStyle = function() {
    return getComputedStyle(this._scope, this._selector);
  };
  function pg(e) {
    return {
      name: e,
      group: new Ko("group", e),
      imagePair: new Ko("image-pair", e),
      old: new Ko("old", e),
      new: new Ko("new", e)
    };
  }
  function yn(e) {
    this._fragmentFiber = e, this._observers = this._eventListeners = null;
  }
  yn.prototype.addEventListener = function(e, t, n) {
    var r = null, s = null;
    if (!(n != null && typeof n != "boolean" && (r = n.signal || null, r !== null && r.aborted))) {
      this._eventListeners === null && (this._eventListeners = []);
      var u = this._eventListeners;
      if (yg(u, e, t, n) === -1) {
        var h = this, E = t;
        n != null && typeof n != "boolean" && n.once === !0 && (E = function(N) {
          h.removeEventListener(e, t, n), typeof t == "function" ? t.call(this, N) : t.handleEvent(N);
        }), r !== null && (s = h.removeEventListener.bind(h, e, t, n), r.addEventListener("abort", s, { once: !0 }), s = r.removeEventListener.bind(r, "abort", s)), r = Xr(n), u.push({
          type: e,
          listener: t,
          optionsOrUseCapture: n,
          attachedListener: E,
          cleanup: s
        }), p(this._fragmentFiber.child, !1, iC, e, E, r);
      }
      this._eventListeners = u;
    }
  };
  function iC(e, t, n, r) {
    return R(e).addEventListener(t, n, r), !1;
  }
  yn.prototype.removeEventListener = function(e, t, n) {
    var r = this._eventListeners;
    if (r !== null && (t = yg(r, e, t, n), t !== -1)) {
      var s = r[t];
      n = s.attachedListener;
      var u = s.cleanup;
      s = Xr(s.optionsOrUseCapture), p(this._fragmentFiber.child, !1, lC, e, n, s), r.splice(t, 1), u !== null && u();
    }
  };
  function lC(e, t, n, r) {
    return R(e).removeEventListener(t, n, r), !1;
  }
  function Xr(e) {
    return e != null && typeof e != "boolean" && (e.once === !0 || e.signal instanceof AbortSignal) ? {
      capture: e.capture,
      passive: e.passive
    } : e;
  }
  function gg(e) {
    return e == null ? "c=0" : typeof e == "boolean" ? "c=" + (e ? "1" : "0") : "c=" + (e.capture ? "1" : "0");
  }
  function yg(e, t, n, r) {
    if (e.length === 0) return -1;
    r = gg(r);
    for (var s = 0; s < e.length; s++) {
      var u = e[s];
      if (u.type === t && u.listener === n && gg(u.optionsOrUseCapture) === r) return s;
    }
    return -1;
  }
  yn.prototype.dispatchEvent = function(e) {
    var t = w(this._fragmentFiber);
    if (t === null) return !0;
    t = R(t);
    var n = this._eventListeners;
    if (n !== null && 0 < n.length || !e.bubbles) {
      var r = t.nodeType === 9 ? t.createComment("") : document.createTextNode("");
      if (n) for (var s = 0; s < n.length; s++) {
        var u = n[s];
        r.addEventListener(u.type, u.attachedListener, Xr(u.optionsOrUseCapture));
      }
      if (t.appendChild(r), e = r.dispatchEvent(e), n) for (s = 0; s < n.length; s++) u = n[s], r.removeEventListener(u.type, u.attachedListener, Xr(u.optionsOrUseCapture));
      return t.removeChild(r), e;
    }
    return t.dispatchEvent(e);
  }, yn.prototype.focus = function(e) {
    p(this._fragmentFiber.child, !0, bg, e, void 0, void 0);
  };
  function bg(e, t) {
    return e.tag === 6 ? !1 : (e = R(e), bC(e, t));
  }
  yn.prototype.focusLast = function(e) {
    var t = [];
    p(this._fragmentFiber.child, !0, Cf, t, void 0, void 0);
    for (var n = t.length - 1; 0 <= n && !bg(t[n], e); n--) ;
  };
  function Cf(e, t) {
    return t.push(e), !1;
  }
  yn.prototype.blur = function() {
    var e = w(this._fragmentFiber);
    e !== null && (e = R(e), e = rl(e).activeElement, e !== null && p(this._fragmentFiber.child, !1, sC, e, void 0, void 0));
  };
  function sC(e, t) {
    return e.tag === 6 ? !1 : (e = R(e), e === t || e.contains(t) ? (t.blur(), !0) : !1);
  }
  yn.prototype.observeUsing = function(e) {
    this._observers === null && (this._observers = /* @__PURE__ */ new Set()), this._observers.add(e), p(this._fragmentFiber.child, !1, cC, e, void 0, void 0);
  };
  function cC(e, t) {
    return e.tag === 6 || (e = R(e), t.observe(e)), !1;
  }
  yn.prototype.unobserveUsing = function(e) {
    var t = this._observers;
    if (t !== null && t.has(e)) {
      t.delete(e), p(this._fragmentFiber.child, !1, uC, e, void 0, void 0);
      for (var n = t = 0; n < $n.length; n++) {
        var r = $n[n];
        r.fragmentInstance === this && r.observer === e ? e.unobserve(r.instance) : $n[t++] = r;
      }
      $n.length = t;
    }
  };
  function uC(e, t) {
    return e.tag === 6 || (e = R(e), t.unobserve(e)), !1;
  }
  var $n = [], Ef = !1;
  function dC(e, t, n) {
    $n.push({
      fragmentInstance: e,
      observer: t,
      instance: n
    }), Ef || (Ef = !0, SC(function() {
      Ef = !1;
      var r = $n;
      $n = [];
      for (var s = 0; s < r.length; s++) {
        var u = r[s];
        u.observer.unobserve(u.instance);
      }
    }));
  }
  yn.prototype.getClientRects = function() {
    var e = [];
    return p(this._fragmentFiber.child, !1, fC, e, void 0, void 0), e;
  };
  function fC(e, t) {
    if (e.tag === 6) {
      e = e.stateNode;
      var n = e.ownerDocument.createRange();
      n.selectNodeContents(e), t.push.apply(t, n.getClientRects());
    } else e = R(e), t.push.apply(t, e.getClientRects());
    return !1;
  }
  yn.prototype.getRootNode = function(e) {
    var t = w(this._fragmentFiber);
    return t === null ? this : R(t).getRootNode(e);
  }, yn.prototype.compareDocumentPosition = function(e) {
    var t = w(this._fragmentFiber);
    if (t === null) return Node.DOCUMENT_POSITION_DISCONNECTED;
    var n = [];
    p(this._fragmentFiber.child, !1, Cf, n, void 0, void 0);
    var r = R(t);
    if (n.length === 0) {
      if (n = r, A(this._fragmentFiber)) {
        e: {
          for (t = this._fragmentFiber.return; t !== null; ) {
            if (t.tag === 4) {
              t = t.stateNode.containerInfo;
              break e;
            }
            if (t.tag === 3 || t.tag === 5 || t.tag === 27) break;
            t = t.return;
          }
          t = null;
        }
        t != null && (n = t);
      }
      t = this._fragmentFiber;
      var s = r = n.compareDocumentPosition(e);
      return n === e ? s = Node.DOCUMENT_POSITION_CONTAINS : r & Node.DOCUMENT_POSITION_CONTAINED_BY && (n = C(t)[1], n === null ? s = Node.DOCUMENT_POSITION_PRECEDING : (e = R(n).compareDocumentPosition(e), s = e === 0 || e & Node.DOCUMENT_POSITION_FOLLOWING ? Node.DOCUMENT_POSITION_FOLLOWING : Node.DOCUMENT_POSITION_PRECEDING)), s |= Node.DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC;
    }
    t = R(n[0]), s = R(n[n.length - 1]);
    var u = A(this._fragmentFiber) ? t.parentElement : r;
    if (u == null) return Node.DOCUMENT_POSITION_DISCONNECTED;
    r = u.compareDocumentPosition(t) & Node.DOCUMENT_POSITION_CONTAINED_BY, u = u.compareDocumentPosition(s) & Node.DOCUMENT_POSITION_CONTAINED_BY;
    var h = t.compareDocumentPosition(e), E = s.compareDocumentPosition(e), N = h & Node.DOCUMENT_POSITION_CONTAINED_BY || E & Node.DOCUMENT_POSITION_CONTAINED_BY;
    return E = r && u && h & Node.DOCUMENT_POSITION_FOLLOWING && E & Node.DOCUMENT_POSITION_PRECEDING, t = r && t === e || u && s === e || N || E ? Node.DOCUMENT_POSITION_CONTAINED_BY : !r && t === e || !u && s === e ? Node.DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC : h, t & Node.DOCUMENT_POSITION_DISCONNECTED || t & Node.DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC || mC(t, this._fragmentFiber, n[0], n[n.length - 1], e) ? t : Node.DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC;
  };
  function mC(e, t, n, r, s) {
    var u = Ro(s);
    if (e & Node.DOCUMENT_POSITION_CONTAINED_BY) {
      if (n = !!u) e: {
        for (; u !== null; ) {
          if (u.tag === 7 && (u === t || u.alternate === t)) {
            n = !0;
            break e;
          }
          u = u.return;
        }
        n = !1;
      }
      return n;
    }
    if (e & Node.DOCUMENT_POSITION_CONTAINS) {
      if (u === null) return u = s.ownerDocument, s === u || s === u.documentElement || s === u.body;
      e: {
        for (u = t, t = w(t); u !== null; ) {
          if (!(u.tag !== 5 && u.tag !== 3 && u.tag !== 27 || u !== t && u.alternate !== t)) {
            u = !0;
            break e;
          }
          u = u.return;
        }
        u = !1;
      }
      return u;
    }
    return e & Node.DOCUMENT_POSITION_PRECEDING ? ((t = !!u) && !(t = u === n) && (t = $(n, u, z), t === null ? t = !1 : (p(t, !0, j, u, n), u = O, O = null, t = u !== null)), t) : e & Node.DOCUMENT_POSITION_FOLLOWING ? ((t = !!u) && !(t = u === r) && (t = $(r, u, z), t === null ? t = !1 : (p(t, !0, L, u, r), u = O, _ = O = null, t = u !== null)), t) : !1;
  }
  function Sg(e, t) {
    var n = e.ownerDocument.createRange();
    n.selectNodeContents(e), e = n.getBoundingClientRect(), window.scrollTo(window.scrollX + e.left, t ? window.scrollY + e.top : window.scrollY + e.bottom - window.innerHeight);
  }
  yn.prototype.scrollIntoView = function(e) {
    if (typeof e == "object") throw Error(c(566));
    var t = [];
    p(this._fragmentFiber.child, !1, Cf, t, void 0, void 0);
    var n = e !== !1;
    if (t.length === 0) {
      var r = C(this._fragmentFiber);
      if (r = n ? r[1] || r[0] || w(this._fragmentFiber) : r[0] || r[1], r === null) return;
      if (r.tag === 6) {
        e = R(r), Sg(e, n);
        return;
      }
      if (r = R(r), r.nodeType !== 9) {
        if (r.nodeType === 11) {
          n = "host" in r ? r.host : null, n !== null && n.scrollIntoView(e);
          return;
        }
        r.scrollIntoView(e);
      }
    }
    for (r = n ? t.length - 1 : 0; r !== (n ? -1 : t.length); ) {
      var s = t[r];
      s.tag === 6 ? (s = R(s), Sg(s, n)) : R(s).scrollIntoView(e), r += n ? -1 : 1;
    }
  };
  function hC(e, t) {
    return e = R(e), wg(e, t), !1;
  }
  function wg(e, t) {
    e.reactFragments ??= /* @__PURE__ */ new Set(), e.reactFragments.add(t);
  }
  function xg(e, t) {
    var n = t._eventListeners;
    if (n !== null) for (var r = 0; r < n.length; r++) {
      var s = n[r];
      e.addEventListener(s.type, s.attachedListener, Xr(s.optionsOrUseCapture));
    }
    e.nodeType !== 3 && (n = t._observers, n !== null && n.forEach(function(u) {
      for (var h = 0, E = 0; E < $n.length; E++) {
        var N = $n[E];
        (N.fragmentInstance !== t || N.observer !== u || N.instance !== e) && ($n[h++] = N);
      }
      $n.length = h, u.observe(e);
    }), wg(e, t));
  }
  function vC(e, t) {
    var n = t._eventListeners;
    if (n !== null) for (var r = 0; r < n.length; r++) {
      var s = n[r];
      e.removeEventListener(s.type, s.attachedListener, Xr(s.optionsOrUseCapture));
    }
    e.nodeType !== 3 && (n = t._observers, n !== null && n.forEach(function(u) {
      typeof u.rootMargin == "string" ? dC(t, u, e) : u.unobserve(e);
    }), e.reactFragments != null && e.reactFragments.delete(t));
  }
  function Af(e) {
    var t = e.firstChild;
    for (t && t.nodeType === 10 && (t = t.nextSibling); t; ) {
      var n = t;
      switch (t = t.nextSibling, n.nodeName) {
        case "HTML":
        case "HEAD":
        case "BODY":
          Af(n), Pl(n);
          continue;
        case "SCRIPT":
        case "STYLE":
          continue;
        case "LINK":
          if (n.rel.toLowerCase() === "stylesheet") continue;
      }
      e.removeChild(n);
    }
  }
  function pC(e, t, n, r) {
    for (; e.nodeType === 1; ) {
      var s = n;
      if (e.nodeName.toLowerCase() !== t.toLowerCase()) {
        if (!r && (e.nodeName !== "INPUT" || e.type !== "hidden")) break;
      } else if (r) {
        if (!e[Ci]) switch (t) {
          case "meta":
            if (!e.hasAttribute("itemprop")) break;
            return e;
          case "link":
            if (u = e.getAttribute("rel"), u === "stylesheet" && e.hasAttribute("data-precedence")) break;
            if (u !== s.rel || e.getAttribute("href") !== (s.href == null || s.href === "" ? null : s.href) || e.getAttribute("crossorigin") !== (s.crossOrigin == null ? null : s.crossOrigin) || e.getAttribute("title") !== (s.title == null ? null : s.title)) break;
            return e;
          case "style":
            if (e.hasAttribute("data-precedence")) break;
            return e;
          case "script":
            if (u = e.getAttribute("src"), (u !== (s.src == null ? null : s.src) || e.getAttribute("type") !== (s.type == null ? null : s.type) || e.getAttribute("crossorigin") !== (s.crossOrigin == null ? null : s.crossOrigin)) && u && e.hasAttribute("async") && !e.hasAttribute("itemprop")) break;
            return e;
          default:
            return e;
        }
      } else if (t === "input" && e.type === "hidden") {
        var u = s.name == null ? null : "" + s.name;
        if (s.type === "hidden" && e.getAttribute("name") === u) return e;
      } else return e;
      if (e = On(e.nextSibling), e === null) break;
    }
    return null;
  }
  function gC(e, t, n) {
    if (t === "") return null;
    for (; e.nodeType !== 3; )
      if ((e.nodeType !== 1 || e.nodeName !== "INPUT" || e.type !== "hidden") && !n || (e = On(e.nextSibling), e === null)) return null;
    return e;
  }
  function Cg(e, t) {
    for (; e.nodeType !== 8; )
      if ((e.nodeType !== 1 || e.nodeName !== "INPUT" || e.type !== "hidden") && !t || (e = On(e.nextSibling), e === null)) return null;
    return e;
  }
  function Tf(e) {
    return e.data === "$?" || e.data === "$~";
  }
  function Rf(e) {
    return e.data === "$!" || e.data === "$?" && e.ownerDocument.readyState !== "loading";
  }
  function yC(e, t) {
    var n = e.ownerDocument;
    if (e.data === "$~") e._reactRetry = t;
    else if (e.data !== "$?" || n.readyState !== "loading") t();
    else {
      var r = function() {
        t(), n.removeEventListener("DOMContentLoaded", r);
      };
      n.addEventListener("DOMContentLoaded", r), e._reactRetry = r;
    }
  }
  function On(e) {
    for (; e != null; e = e.nextSibling) {
      var t = e.nodeType;
      if (t === 1 || t === 3) break;
      if (t === 8) {
        if (t = e.data, t === "$" || t === "$!" || t === "$?" || t === "$~" || t === "&" || t === "F!" || t === "F") break;
        if (t === "/$" || t === "/&") return null;
      }
    }
    return e;
  }
  var _f = null;
  function Eg(e) {
    e = e.nextSibling;
    for (var t = 0; e; ) {
      if (e.nodeType === 8) {
        var n = e.data;
        if (n === "/$" || n === "/&") {
          if (t === 0) return On(e.nextSibling);
          t--;
        } else n !== "$" && n !== "$!" && n !== "$?" && n !== "$~" && n !== "&" || t++;
      }
      e = e.nextSibling;
    }
    return null;
  }
  function Ag(e) {
    e = e.previousSibling;
    for (var t = 0; e; ) {
      if (e.nodeType === 8) {
        var n = e.data;
        if (n === "$" || n === "$!" || n === "$?" || n === "$~" || n === "&") {
          if (t === 0) return e;
          t--;
        } else n !== "/$" && n !== "/&" || t++;
      }
      e = e.previousSibling;
    }
    return null;
  }
  function bC(e, t) {
    function n() {
      r = !0;
    }
    if (e.ownerDocument.activeElement === e) return !0;
    var r = !1;
    try {
      e.ownerDocument.addEventListener("focus", n, !0), (e.focus || HTMLElement.prototype.focus).call(e, t);
    } finally {
      e.ownerDocument.removeEventListener("focus", n, !0);
    }
    return r;
  }
  function SC(e) {
    ug(function() {
      ug(function(t) {
        return e(t);
      });
    });
  }
  function Tg(e, t, n) {
    switch (t = rl(n), e) {
      case "html":
        if (e = t.documentElement, !e) throw Error(c(452));
        return e;
      case "head":
        if (e = t.head, !e) throw Error(c(453));
        return e;
      case "body":
        if (e = t.body, !e) throw Error(c(454));
        return e;
      default:
        throw Error(c(451));
    }
  }
  function Rg(e, t, n) {
    for (var r in n) {
      var s = n[r];
      n.hasOwnProperty(r) && s != null && Ke(e, t, r, null, Qx, s);
    }
    n.dangerouslySetInnerHTML != null && (e.textContent = ""), e.onclick === Kn && (e.onclick = null), Pl(e);
  }
  function Nf(e) {
    for (var t = e.attributes; t.length; ) e.removeAttributeNode(t[0]);
    Pl(e);
  }
  var Mn = /* @__PURE__ */ new Map(), _g = /* @__PURE__ */ new Set();
  function il(e) {
    if (typeof e.getRootNode == "function") {
      var t = e.getRootNode();
      if (t.nodeType === 9 || t.nodeType === 11) return t;
    }
    return e.nodeType === 9 ? e : e.ownerDocument;
  }
  var Ma = ve.d;
  ve.d = {
    f: wC,
    r: xC,
    D: CC,
    C: EC,
    L: AC,
    m: TC,
    X: _C,
    S: RC,
    M: NC
  };
  function wC() {
    var e = Ma.f(), t = Qs();
    return e || t;
  }
  function xC(e) {
    var t = mr(e);
    t !== null && t.tag === 5 && t.type === "form" ? Op(t) : Ma.r(e);
  }
  var Qr = typeof document > "u" ? null : document;
  function Ng(e, t, n) {
    var r = Qr;
    if (r && typeof t == "string" && t) {
      var s = Cn(t);
      s = 'link[rel="' + e + '"][href="' + s + '"]', typeof n == "string" && (s += '[crossorigin="' + n + '"]'), _g.has(s) || (_g.add(s), e = {
        rel: e,
        crossOrigin: n,
        href: t
      }, r.querySelector(s) === null && (t = r.createElement("link"), kt(t, "link", e), Ct(t), r.head.appendChild(t)));
    }
  }
  function CC(e) {
    Ma.D(e), Ng("dns-prefetch", e, null);
  }
  function EC(e, t) {
    Ma.C(e, t), Ng("preconnect", e, t);
  }
  function AC(e, t, n) {
    Ma.L(e, t, n);
    var r = Qr;
    if (r && e && t) {
      var s = 'link[rel="preload"][as="' + Cn(t) + '"]';
      t === "image" && n && n.imageSrcSet ? (s += '[imagesrcset="' + Cn(n.imageSrcSet) + '"]', typeof n.imageSizes == "string" && (s += '[imagesizes="' + Cn(n.imageSizes) + '"]')) : s += '[href="' + Cn(e) + '"]';
      var u = s;
      switch (t) {
        case "style":
          u = Kr(e);
          break;
        case "script":
          u = Zr(e);
      }
      if (!(Mn.has(u) || (e = k({
        rel: "preload",
        href: t === "image" && n && n.imageSrcSet ? void 0 : e,
        as: t
      }, n), Mn.set(u, e), r.querySelector(s) !== null || t === "style" && r.querySelector(ll(u)) || t === "script" && r.querySelector(sl(u))))) {
        var h = r.createElement("link");
        kt(h, "link", e), t === "style" && (h[Wl] = !0, h.onload = h.onerror = function() {
          Yh(h);
        }), Ct(h), r.head.appendChild(h);
      }
    }
  }
  function TC(e, t) {
    Ma.m(e, t);
    var n = Qr;
    if (n && e) {
      var r = t && typeof t.as == "string" ? t.as : "script", s = 'link[rel="modulepreload"][as="' + Cn(r) + '"][href="' + Cn(e) + '"]', u = s;
      switch (r) {
        case "audioworklet":
        case "paintworklet":
        case "serviceworker":
        case "sharedworker":
        case "worker":
        case "script":
          u = Zr(e);
      }
      if (!Mn.has(u) && (e = k({
        rel: "modulepreload",
        href: e
      }, t), Mn.set(u, e), n.querySelector(s) === null)) {
        switch (r) {
          case "audioworklet":
          case "paintworklet":
          case "serviceworker":
          case "sharedworker":
          case "worker":
          case "script":
            if (n.querySelector(sl(u))) return;
        }
        r = n.createElement("link"), kt(r, "link", e), Ct(r), n.head.appendChild(r);
      }
    }
  }
  function RC(e, t, n) {
    Ma.S(e, t, n);
    var r = Qr;
    if (r && e) {
      var s = hr(r).hoistableStyles, u = Kr(e);
      t = t || "default";
      var h = s.get(u);
      if (!h) {
        var E = {
          loading: 0,
          preload: null
        };
        if (h = r.querySelector(ll(u))) E.loading = 5;
        else {
          e = k({
            rel: "stylesheet",
            href: e,
            "data-precedence": t
          }, n), (n = Mn.get(u)) && jf(e, n);
          var N = h = r.createElement("link");
          Ct(N), kt(N, "link", e), N._p = new Promise(function(q, P) {
            N.onload = q, N.onerror = P;
          }), N.addEventListener("load", function() {
            E.loading |= 1;
          }), N.addEventListener("error", function() {
            E.loading |= 2;
          }), E.loading |= 4, nc(h, t, r);
        }
        h = {
          type: "stylesheet",
          instance: h,
          count: 1,
          state: E
        }, s.set(u, h);
      }
    }
  }
  function _C(e, t) {
    Ma.X(e, t);
    var n = Qr;
    if (n && e) {
      var r = hr(n).hoistableScripts, s = Zr(e), u = r.get(s);
      u || (u = n.querySelector(sl(s)), u || (e = k({
        src: e,
        async: !0
      }, t), (t = Mn.get(s)) && Of(e, t), u = n.createElement("script"), Ct(u), kt(u, "link", e), n.head.appendChild(u)), u = {
        type: "script",
        instance: u,
        count: 1,
        state: null
      }, r.set(s, u));
    }
  }
  function NC(e, t) {
    Ma.M(e, t);
    var n = Qr;
    if (n && e) {
      var r = hr(n).hoistableScripts, s = Zr(e), u = r.get(s);
      u || (u = n.querySelector(sl(s)), u || (e = k({
        src: e,
        async: !0,
        type: "module"
      }, t), (t = Mn.get(s)) && Of(e, t), u = n.createElement("script"), Ct(u), kt(u, "link", e), n.head.appendChild(u)), u = {
        type: "script",
        instance: u,
        count: 1,
        state: null
      }, r.set(s, u));
    }
  }
  function jg(e, t, n, r) {
    var s = (s = wt.current) ? il(s) : null;
    if (!s) throw Error(c(446));
    switch (e) {
      case "meta":
      case "title":
        return null;
      case "style":
        return typeof n.precedence == "string" && typeof n.href == "string" ? (n = Kr(n.href), t = hr(s).hoistableStyles, r = t.get(n), r || (r = {
          type: "style",
          instance: null,
          count: 0,
          state: null
        }, t.set(n, r)), r) : {
          type: "void",
          instance: null,
          count: 0,
          state: null
        };
      case "link":
        if (n.rel === "stylesheet" && typeof n.href == "string" && typeof n.precedence == "string") {
          e = Kr(n.href);
          var u = hr(s).hoistableStyles, h = u.get(e);
          if (h || (s = s.ownerDocument || s, h = {
            type: "stylesheet",
            instance: null,
            count: 0,
            state: {
              loading: 0,
              preload: null
            }
          }, u.set(e, h), (u = s.querySelector(ll(e))) ? u._p || (h.instance = u, h.state.loading = 5) : (u = Mn.get(e), u || (u = {
            rel: "preload",
            as: "style",
            href: n.href,
            crossOrigin: n.crossOrigin,
            integrity: n.integrity,
            media: n.media,
            hrefLang: n.hrefLang,
            referrerPolicy: n.referrerPolicy
          }, Mn.set(e, u)), jC(s, e, u, h.state))), t && r === null) throw Error(c(528, ""));
          return h;
        }
        if (t && r !== null) throw Error(c(529, ""));
        return null;
      case "script":
        return t = n.async, n = n.src, typeof n == "string" && t && typeof t != "function" && typeof t != "symbol" ? (n = Zr(n), t = hr(s).hoistableScripts, r = t.get(n), r || (r = {
          type: "script",
          instance: null,
          count: 0,
          state: null
        }, t.set(n, r)), r) : {
          type: "void",
          instance: null,
          count: 0,
          state: null
        };
      default:
        throw Error(c(444, e));
    }
  }
  function Kr(e) {
    return 'href="' + Cn(e) + '"';
  }
  function ll(e) {
    return 'link[rel="stylesheet"][' + e + "]";
  }
  function Og(e) {
    return k({}, e, {
      "data-precedence": e.precedence,
      precedence: null
    });
  }
  function jC(e, t, n, r) {
    if (t = e.querySelector('link[rel="preload"][as="style"][' + t + "]")) {
      if (t[Wl] !== !0) {
        r.loading = 1;
        return;
      }
    } else t = e.createElement("link"), t[Wl] = !0, t.onload = t.onerror = Yh.bind(null, t), kt(t, "link", n), Ct(t), e.head.appendChild(t);
    r.preload = t, t.addEventListener("load", function() {
      return r.loading |= 1;
    }), t.addEventListener("error", function() {
      return r.loading |= 2;
    });
  }
  function Zr(e) {
    return '[src="' + Cn(e) + '"]';
  }
  function sl(e) {
    return "script[async]" + e;
  }
  function Mg(e, t, n) {
    if (t.count++, t.instance === null) switch (t.type) {
      case "style":
        var r = e.querySelector('style[data-href~="' + Cn(n.href) + '"]');
        if (r) return t.instance = r, Ct(r), r;
        var s = k({}, n, {
          "data-href": n.href,
          "data-precedence": n.precedence,
          href: null,
          precedence: null
        });
        return r = (e.ownerDocument || e).createElement("style"), Ct(r), kt(r, "style", s), nc(r, n.precedence, e), t.instance = r;
      case "stylesheet":
        s = Kr(n.href);
        var u = e.querySelector(ll(s));
        if (u) return t.state.loading |= 4, t.instance = u, Ct(u), u;
        r = Og(n), (s = Mn.get(s)) && jf(r, s), u = (e.ownerDocument || e).createElement("link"), Ct(u);
        var h = u;
        return h._p = new Promise(function(E, N) {
          h.onload = E, h.onerror = N;
        }), kt(u, "link", r), t.state.loading |= 4, nc(u, n.precedence, e), t.instance = u;
      case "script":
        return u = Zr(n.src), (s = e.querySelector(sl(u))) ? (t.instance = s, Ct(s), s) : (r = n, (s = Mn.get(u)) && (r = k({}, n), Of(r, s)), e = e.ownerDocument || e, s = e.createElement("script"), Ct(s), kt(s, "link", r), e.head.appendChild(s), t.instance = s);
      case "void":
        return null;
      default:
        throw Error(c(443, t.type));
    }
    else t.type === "stylesheet" && (t.state.loading & 4) === 0 && (r = t.instance, t.state.loading |= 4, nc(r, n.precedence, e));
    return t.instance;
  }
  function nc(e, t, n) {
    for (var r = n.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'), s = r.length ? r[r.length - 1] : null, u = s, h = 0; h < r.length; h++) {
      var E = r[h];
      if (E.dataset.precedence === t) u = E;
      else if (u !== s) break;
    }
    u ? u.parentNode.insertBefore(e, u.nextSibling) : (t = n.nodeType === 9 ? n.head : n, t.insertBefore(e, t.firstChild));
  }
  function jf(e, t) {
    e.crossOrigin ??= t.crossOrigin, e.referrerPolicy ??= t.referrerPolicy, e.title ??= t.title;
  }
  function Of(e, t) {
    e.crossOrigin ??= t.crossOrigin, e.referrerPolicy ??= t.referrerPolicy, e.integrity ??= t.integrity;
  }
  var ac = null;
  function zg(e, t, n) {
    if (ac === null) {
      var r = /* @__PURE__ */ new Map(), s = ac = /* @__PURE__ */ new Map();
      s.set(n, r);
    } else s = ac, r = s.get(n), r || (r = /* @__PURE__ */ new Map(), s.set(n, r));
    if (r.has(e)) return r;
    for (r.set(e, null), n = n.getElementsByTagName(e), s = 0; s < n.length; s++) {
      var u = n[s];
      if (!(u[Ci] || u[jt] || e === "link" && u.getAttribute("rel") === "stylesheet") && u.namespaceURI !== "http://www.w3.org/2000/svg") {
        var h = u.getAttribute(t) || "";
        h = e + h;
        var E = r.get(h);
        E ? E.push(u) : r.set(h, [u]);
      }
    }
    return r;
  }
  function Mf(e, t, n) {
    e = e.ownerDocument || e, e.head.insertBefore(n, t === "title" ? e.querySelector("head > title") : null);
  }
  function OC(e, t, n) {
    if (n === 1 || t.itemProp != null) return !1;
    switch (e) {
      case "meta":
      case "title":
        return !0;
      case "style":
        if (typeof t.precedence != "string" || typeof t.href != "string" || t.href === "") break;
        return !0;
      case "link":
        if (typeof t.rel != "string" || typeof t.href != "string" || t.href === "" || t.onLoad || t.onError) break;
        return t.rel === "stylesheet" ? (e = t.disabled, typeof t.precedence == "string" && e == null) : !0;
      case "script":
        if (t.async && typeof t.async != "function" && typeof t.async != "symbol" && !t.onLoad && !t.onError && t.src && typeof t.src == "string") return !0;
    }
    return !1;
  }
  function Dg(e, t) {
    return e === "img" && t.src != null && t.src !== "" && t.onLoad == null && t.loading !== "lazy";
  }
  function kg(e) {
    return !(e.type === "stylesheet" && (e.state.loading & 3) === 0);
  }
  function Lg(e) {
    return (e.width || 100) * (e.height || 100) * (typeof devicePixelRatio == "number" ? devicePixelRatio : 1) * 0.25;
  }
  function Hg(e, t) {
    typeof t.decode == "function" && (e.imgCount++, t.complete || (e.imgBytes += Lg(t), e.suspenseyImages.push(t)), e = DC.bind(e), t.decode().then(e, e));
  }
  function MC(e, t, n, r) {
    if (n.type === "stylesheet" && (typeof r.media != "string" || matchMedia(r.media).matches !== !1) && (n.state.loading & 4) === 0) {
      if (n.instance === null) {
        var s = Kr(r.href), u = t.querySelector(ll(s));
        if (u) {
          t = u._p, t !== null && typeof t == "object" && typeof t.then == "function" && (e.count++, e = cl.bind(e), t.then(e, e)), n.state.loading |= 4, n.instance = u, Ct(u);
          return;
        }
        u = t.ownerDocument || t, r = Og(r), (s = Mn.get(s)) && jf(r, s), u = u.createElement("link"), Ct(u);
        var h = u;
        h._p = new Promise(function(E, N) {
          h.onload = E, h.onerror = N;
        }), kt(u, "link", r), n.instance = u;
      }
      e.stylesheets === null && (e.stylesheets = /* @__PURE__ */ new Map()), e.stylesheets.set(n, t), (t = n.state.preload) && (n.state.loading & 3) === 0 && (e.count++, n = cl.bind(e), t.addEventListener("load", n), t.addEventListener("error", n));
    }
  }
  var oc = 0;
  function zC(e, t) {
    return e.stylesheets && e.count === 0 && ic(e, e.stylesheets), 0 < e.count || 0 < e.imgCount ? function(n) {
      var r = setTimeout(function() {
        if (e.stylesheets && ic(e, e.stylesheets), e.unsuspend) {
          var u = e.unsuspend;
          e.unsuspend = null, u();
        }
      }, 6e4 + t);
      0 < e.imgBytes && oc === 0 && (oc = 62500 * Zx());
      var s = setTimeout(function() {
        if (e.waitingForImages = !1, e.count === 0 && (e.stylesheets && ic(e, e.stylesheets), e.unsuspend)) {
          var u = e.unsuspend;
          e.unsuspend = null, u();
        }
      }, (e.imgBytes > oc ? 50 : 800) + t);
      return e.unsuspend = n, function() {
        e.unsuspend = null, clearTimeout(r), clearTimeout(s);
      };
    } : null;
  }
  function Bg(e) {
    if (e.count === 0 && (e.imgCount === 0 || !e.waitingForImages)) {
      if (e.stylesheets) ic(e, e.stylesheets);
      else if (e.unsuspend) {
        var t = e.unsuspend;
        e.unsuspend = null, t();
      }
    }
  }
  function cl() {
    this.count--, Bg(this);
  }
  function DC() {
    this.imgCount--, Bg(this);
  }
  var rc = null;
  function ic(e, t) {
    e.stylesheets = null, e.unsuspend !== null && (e.count++, rc = /* @__PURE__ */ new Map(), t.forEach(kC, e), rc = null, cl.call(e));
  }
  function kC(e, t) {
    if (!(t.state.loading & 4)) {
      var n = rc.get(e);
      if (n) var r = n.get(null);
      else {
        n = /* @__PURE__ */ new Map(), rc.set(e, n);
        for (var s = e.querySelectorAll("link[data-precedence],style[data-precedence]"), u = 0; u < s.length; u++) {
          var h = s[u];
          (h.nodeName === "LINK" || h.getAttribute("media") !== "not all") && (n.set(h.dataset.precedence, h), r = h);
        }
        r && n.set(null, r);
      }
      s = t.instance, h = s.getAttribute("data-precedence"), u = n.get(h) || r, u === r && n.set(null, s), n.set(h, s), this.count++, r = cl.bind(this), s.addEventListener("load", r), s.addEventListener("error", r), u ? u.parentNode.insertBefore(s, u.nextSibling) : (e = e.nodeType === 9 ? e.head : e, e.insertBefore(s, e.firstChild)), t.state.loading |= 4;
    }
  }
  var Fr = {
    $$typeof: H,
    Provider: null,
    Consumer: null,
    _currentValue: V,
    _currentValue2: V,
    _threadCount: 0
  };
  function LC(e, t, n, r, s, u, h, E, N) {
    this.tag = 1, this.containerInfo = e, this.pingCache = this.current = this.pendingChildren = null, this.timeoutHandle = -1, this.callbackNode = this.next = this.pendingContext = this.context = this.cancelPendingCommit = null, this.callbackPriority = 0, this.expirationTimes = mu(-1), this.entangledLanes = this.shellSuspendCounter = this.errorRecoveryDisabledLanes = this.expiredLanes = this.warmLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0, this.entanglements = mu(0), this.hiddenUpdates = mu(null), this.identifierPrefix = r, this.onUncaughtError = s, this.onCaughtError = u, this.onRecoverableError = h, this.pooledCache = null, this.pooledCacheLanes = 0, this.formState = N, this.transitionTypes = null, this.incompleteTransitions = /* @__PURE__ */ new Map();
  }
  function HC(e, t, n, r, s, u, h, E, N, q, P, ee) {
    return e = new LC(e, t, n, h, N, q, P, ee, E), t = 1, u === !0 && (t |= 24), u = Ft(3, null, null, t), e.current = u, u.stateNode = e, t = Iu(), t.refCount++, e.pooledCache = t, t.refCount++, u.memoizedState = {
      element: r,
      isDehydrated: n,
      cache: t
    }, Zu(u), e;
  }
  function BC(e) {
    return e ? (e = Er, e) : Er;
  }
  function Ug(e, t, n, r, s, u) {
    s = BC(s), r.context === null ? r.context = s : r.pendingContext = s, r = $o(t), r.payload = { element: n }, u = u === void 0 ? null : u, u !== null && (r.callback = u), n = Yo(e, r, t), n !== null && (nn(n, e, t), qi(n, e, t));
  }
  function qg(e, t) {
    if (e = e.memoizedState, e !== null && e.dehydrated !== null) {
      var n = e.retryLane;
      e.retryLane = n !== 0 && n < t ? n : t;
    }
  }
  function zf(e, t) {
    qg(e, t), (e = e.alternate) && qg(e, t);
  }
  function Vg(e) {
    if (e.tag === 13 || e.tag === 31) {
      var t = Oo(e, 67108864);
      t !== null && nn(t, e, 67108864), zf(e, 67108864);
    }
  }
  function $g(e) {
    if (e.tag === 13 || e.tag === 31) {
      var t = jn();
      t = Bh(t);
      var n = Oo(e, t);
      n !== null && nn(n, e, t), zf(e, t);
    }
  }
  var Jr = !0;
  function UC(e, t, n, r) {
    var s = ce.T;
    ce.T = null;
    var u = ve.p;
    try {
      ve.p = 2, Df(e, t, n, r);
    } finally {
      ve.p = u, ce.T = s;
    }
  }
  function qC(e, t, n, r) {
    var s = ce.T;
    ce.T = null;
    var u = ve.p;
    try {
      ve.p = 8, Df(e, t, n, r);
    } finally {
      ve.p = u, ce.T = s;
    }
  }
  function Df(e, t, n, r) {
    if (Jr) {
      var s = kf(r);
      if (s === null) vf(e, t, r, lc, n), Gg(e, r);
      else if ($C(s, e, t, n, r)) r.stopPropagation();
      else if (Gg(e, r), t & 4 && -1 < VC.indexOf(e)) {
        for (; s !== null; ) {
          var u = mr(s);
          if (u !== null) switch (u.tag) {
            case 3:
              if (u = u.stateNode, u.current.memoizedState.isDehydrated) {
                var h = To(u.pendingLanes);
                if (h !== 0) {
                  var E = u;
                  for (E.pendingLanes |= 2, E.entangledLanes |= 2; h; ) {
                    var N = 1 << 31 - dn(h);
                    E.entanglements[1] |= N, h &= ~N;
                  }
                  Oa(u), (Ge & 6) === 0 && (Ps = $t() + 500, nl(0, !1));
                }
              }
              break;
            case 31:
            case 13:
              E = Oo(u, 2), E !== null && nn(E, u, 2), Qs(), zf(u, 2);
          }
          if (u = kf(r), u === null && vf(e, t, r, lc, n), u === s) break;
          s = u;
        }
        s !== null && r.stopPropagation();
      } else vf(e, t, r, null, n);
    }
  }
  function kf(e) {
    return e = Su(e), Lf(e);
  }
  var lc = null;
  function Lf(e) {
    if (lc = null, e = Ro(e), e !== null) {
      var t = f(e);
      if (t === null) e = null;
      else {
        var n = t.tag;
        if (n === 13) {
          if (e = m(t), e !== null) return e;
          e = null;
        } else if (n === 31) {
          if (e = v(t), e !== null) return e;
          e = null;
        } else if (n === 3) {
          if (t.stateNode.current.memoizedState.isDehydrated) return t.tag === 3 ? t.stateNode.containerInfo : null;
          e = null;
        } else t !== e && (e = null);
      }
    }
    return lc = e, null;
  }
  function Yg(e) {
    switch (e) {
      case "beforetoggle":
      case "cancel":
      case "click":
      case "close":
      case "contextmenu":
      case "copy":
      case "cut":
      case "auxclick":
      case "dblclick":
      case "dragend":
      case "dragstart":
      case "drop":
      case "focusin":
      case "focusout":
      case "input":
      case "invalid":
      case "keydown":
      case "keypress":
      case "keyup":
      case "mousedown":
      case "mouseup":
      case "paste":
      case "pause":
      case "play":
      case "pointercancel":
      case "pointerdown":
      case "pointerup":
      case "ratechange":
      case "reset":
      case "seeked":
      case "submit":
      case "toggle":
      case "touchcancel":
      case "touchend":
      case "touchstart":
      case "volumechange":
      case "change":
      case "selectionchange":
      case "textInput":
      case "compositionstart":
      case "compositionend":
      case "compositionupdate":
      case "beforeblur":
      case "afterblur":
      case "beforeinput":
      case "blur":
      case "fullscreenchange":
      case "fullscreenerror":
      case "focus":
      case "hashchange":
      case "popstate":
      case "select":
      case "selectstart":
        return 2;
      case "drag":
      case "dragenter":
      case "dragexit":
      case "dragleave":
      case "dragover":
      case "mousemove":
      case "mouseout":
      case "mouseover":
      case "pointermove":
      case "pointerout":
      case "pointerover":
      case "resize":
      case "scroll":
      case "touchmove":
      case "wheel":
      case "mouseenter":
      case "mouseleave":
      case "pointerenter":
      case "pointerleave":
        return 8;
      case "message":
        switch (fu()) {
          case yt:
            return 2;
          case Bt:
            return 8;
          case Ya:
          case cw:
            return 32;
          case Mh:
            return 268435456;
          default:
            return 32;
        }
      default:
        return 32;
    }
  }
  var Hf = !1, uo = null, fo = null, mo = null, ul = /* @__PURE__ */ new Map(), dl = /* @__PURE__ */ new Map(), ho = [], VC = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");
  function Gg(e, t) {
    switch (e) {
      case "focusin":
      case "focusout":
        uo = null;
        break;
      case "dragenter":
      case "dragleave":
        fo = null;
        break;
      case "mouseover":
      case "mouseout":
        mo = null;
        break;
      case "pointerover":
      case "pointerout":
        ul.delete(t.pointerId);
        break;
      case "gotpointercapture":
      case "lostpointercapture":
        dl.delete(t.pointerId);
    }
  }
  function fl(e, t, n, r, s, u) {
    return e === null || e.nativeEvent !== u ? (e = {
      blockedOn: t,
      domEventName: n,
      eventSystemFlags: r,
      nativeEvent: u,
      targetContainers: [s]
    }, t !== null && (t = mr(t), t !== null && Vg(t)), e) : (e.eventSystemFlags |= r, t = e.targetContainers, s !== null && t.indexOf(s) === -1 && t.push(s), e);
  }
  function $C(e, t, n, r, s) {
    switch (t) {
      case "focusin":
        return uo = fl(uo, e, t, n, r, s), !0;
      case "dragenter":
        return fo = fl(fo, e, t, n, r, s), !0;
      case "mouseover":
        return mo = fl(mo, e, t, n, r, s), !0;
      case "pointerover":
        var u = s.pointerId;
        return ul.set(u, fl(ul.get(u) || null, e, t, n, r, s)), !0;
      case "gotpointercapture":
        return u = s.pointerId, dl.set(u, fl(dl.get(u) || null, e, t, n, r, s)), !0;
    }
    return !1;
  }
  function Wg(e) {
    var t = Ro(e.target);
    if (t !== null) {
      var n = f(t);
      if (n !== null) {
        if (t = n.tag, t === 13) {
          if (t = m(n), t !== null) {
            e.blockedOn = t, qh(e.priority, function() {
              $g(n);
            });
            return;
          }
        } else if (t === 31) {
          if (t = v(n), t !== null) {
            e.blockedOn = t, qh(e.priority, function() {
              $g(n);
            });
            return;
          }
        } else if (t === 3 && n.stateNode.current.memoizedState.isDehydrated) {
          e.blockedOn = n.tag === 3 ? n.stateNode.containerInfo : null;
          return;
        }
      }
    }
    e.blockedOn = null;
  }
  function sc(e) {
    if (e.blockedOn !== null) return !1;
    for (var t = e.targetContainers; 0 < t.length; ) {
      var n = kf(e.nativeEvent);
      if (n === null) {
        n = e.nativeEvent;
        var r = new n.constructor(n.type, n);
        bu = r, n.target.dispatchEvent(r), bu = null;
      } else return t = mr(n), t !== null && Vg(t), e.blockedOn = n, !1;
      t.shift();
    }
    return !0;
  }
  function Pg(e, t, n) {
    sc(e) && n.delete(t);
  }
  function YC() {
    Hf = !1, uo !== null && sc(uo) && (uo = null), fo !== null && sc(fo) && (fo = null), mo !== null && sc(mo) && (mo = null), ul.forEach(Pg), dl.forEach(Pg);
  }
  function cc(e, t) {
    e.blockedOn === t && (e.blockedOn = null, Hf || (Hf = !0, o.unstable_scheduleCallback(o.unstable_NormalPriority, YC)));
  }
  var uc = null;
  function Ig(e) {
    uc !== e && (uc = e, o.unstable_scheduleCallback(o.unstable_NormalPriority, function() {
      uc === e && (uc = null);
      for (var t = 0; t < e.length; t += 3) {
        var n = e[t], r = e[t + 1], s = e[t + 2];
        if (typeof r != "function") {
          if (Lf(r || n) === null) continue;
          break;
        }
        var u = mr(n);
        u !== null && (e.splice(t, 3), t -= 3, yd(u, {
          pending: !0,
          data: s,
          method: n.method,
          action: r
        }, r, s));
      }
    }));
  }
  function ei(e) {
    function t(N) {
      return cc(N, e);
    }
    uo !== null && cc(uo, e), fo !== null && cc(fo, e), mo !== null && cc(mo, e), ul.forEach(t), dl.forEach(t);
    for (var n = 0; n < ho.length; n++) {
      var r = ho[n];
      r.blockedOn === e && (r.blockedOn = null);
    }
    for (; 0 < ho.length && (n = ho[0], n.blockedOn === null); ) Wg(n), n.blockedOn === null && ho.shift();
    if (n = (e.ownerDocument || e).$$reactFormReplay, n != null) for (r = 0; r < n.length; r += 3) {
      var s = n[r], u = n[r + 1], h = s[Zt] || null;
      if (typeof u == "function") h || Ig(n);
      else if (h) {
        var E = null;
        if (u && u.hasAttribute("formAction")) {
          if (s = u, h = u[Zt] || null) E = h.formAction;
          else if (Lf(s) !== null) continue;
        } else E = h.action;
        typeof E == "function" ? n[r + 1] = E : (n.splice(r, 3), r -= 3), Ig(n);
      }
    }
  }
  function GC() {
    function e(u) {
      u.canIntercept && u.info === "react-transition" && u.intercept({
        handler: function() {
          return new Promise(function(h) {
            return s = h;
          });
        },
        focusReset: "manual",
        scroll: "manual"
      });
    }
    function t() {
      s !== null && (s(), s = null), r || setTimeout(n, 20);
    }
    function n() {
      if (!r && !navigation.transition) {
        var u = navigation.currentEntry;
        u && u.url != null && navigation.navigate(u.url, {
          state: u.getState(),
          info: "react-transition",
          history: "replace"
        });
      }
    }
    if (typeof navigation == "object") {
      var r = !1, s = null;
      return navigation.addEventListener("navigate", e), navigation.addEventListener("navigatesuccess", t), navigation.addEventListener("navigateerror", t), setTimeout(n, 100), function() {
        r = !0, navigation.removeEventListener("navigate", e), navigation.removeEventListener("navigatesuccess", t), navigation.removeEventListener("navigateerror", t), s !== null && (s(), s = null);
      };
    }
  }
  function Bf(e) {
    this._internalRoot = e;
  }
  Uf.prototype.render = Bf.prototype.render = function(e) {
    var t = this._internalRoot;
    if (t === null) throw Error(c(409));
    var n = t.current;
    Ug(n, jn(), e, t, null, null);
  }, Uf.prototype.unmount = Bf.prototype.unmount = function() {
    var e = this._internalRoot;
    if (e !== null) {
      this._internalRoot = null;
      var t = e.containerInfo;
      Ug(e.current, 2, null, e, null, null), Qs(), t[xi] = null;
    }
  };
  function Uf(e) {
    this._internalRoot = e;
  }
  Uf.prototype.unstable_scheduleHydration = function(e) {
    if (e) {
      var t = Uh();
      e = {
        blockedOn: null,
        target: e,
        priority: t
      };
      for (var n = 0; n < ho.length && t !== 0 && t < ho[n].priority; n++) ;
      ho.splice(n, 0, e), n === 0 && Wg(e);
    }
  };
  var Xg = i.version;
  if (Xg !== "19.3.0") throw Error(c(527, Xg, "19.3.0"));
  ve.findDOMNode = function(e) {
    var t = e._reactInternals;
    if (t === void 0)
      throw typeof e.render == "function" ? Error(c(188)) : (e = Object.keys(e).join(","), Error(c(268, e)));
    return e = x(t), e = e !== null ? b(e) : null, e = e === null ? null : e.stateNode, e;
  };
  var WC = {
    bundleType: 0,
    version: "19.3.0",
    rendererPackageName: "react-dom",
    currentDispatcherRef: ce,
    reconcilerVersion: "19.3.0"
  };
  if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
    var dc = __REACT_DEVTOOLS_GLOBAL_HOOK__;
    if (!dc.isDisabled && dc.supportsFiber) try {
      Si = dc.inject(WC), un = dc;
    } catch {
    }
  }
  a.createRoot = function(e, t) {
    if (!d(e)) throw Error(c(299));
    var n = !1, r = "", s = yx, u = bx, h = Sx;
    return t != null && (t.unstable_strictMode === !0 && (n = !0), t.identifierPrefix !== void 0 && (r = t.identifierPrefix), t.onUncaughtError !== void 0 && (s = t.onUncaughtError), t.onCaughtError !== void 0 && (u = t.onCaughtError), t.onRecoverableError !== void 0 && (h = t.onRecoverableError)), t = HC(e, 1, !1, null, null, n, r, null, s, u, h, GC), e[xi] = t.current, eg(e), new Bf(t);
  };
})), a2 = /* @__PURE__ */ ha(((a, o) => {
  function i() {
    if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"))
      try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(i);
      } catch (l) {
        console.error(l);
      }
  }
  i(), o.exports = n2();
}));
function ca(a) {
  return Object.keys(a);
}
function qf(a) {
  return a && typeof a == "object" && !Array.isArray(a);
}
function Nm(a, o) {
  const i = { ...a }, l = o;
  return qf(a) && qf(o) && Object.keys(o).forEach((c) => {
    qf(l[c]) && c in a ? i[c] = Nm(i[c], l[c]) : i[c] = l[c];
  }), i;
}
function o2(a) {
  return a.replace(/[A-Z]/g, (o) => `-${o.toLowerCase()}`);
}
function r2(a) {
  return typeof a != "string" || !a.includes("var(--mantine-scale)") ? a : a.match(/^calc\((.*?)\)$/)?.[1].split("*")[0].trim();
}
function i2(a) {
  const o = r2(a);
  return typeof o == "number" ? o : typeof o == "string" ? o.includes("calc") || o.includes("var") ? o : o.includes("px") ? Number(o.replace("px", "")) : o.includes("rem") ? Number(o.replace("rem", "")) * 16 : o.includes("em") ? Number(o.replace("em", "")) * 16 : Number(o) : NaN;
}
function Qg(a) {
  return a === "0rem" ? "0rem" : `calc(${a} * var(--mantine-scale))`;
}
function Jy(a, { shouldScale: o = !1 } = {}) {
  function i(l) {
    if (l === 0 || l === "0") return `0${a}`;
    if (typeof l == "number") {
      const c = `${l / 16}${a}`;
      return o ? Qg(c) : c;
    }
    if (typeof l == "string") {
      if (l === "" || l.startsWith("calc(") || l.startsWith("clamp(") || l.includes("rgba(")) return l;
      if (l.includes(",")) return l.split(",").map((d) => i(d)).join(",");
      if (l.includes(" ")) return l.split(" ").map((d) => i(d)).join(" ");
      const c = l.replace("px", "");
      if (!Number.isNaN(Number(c))) {
        const d = `${Number(c) / 16}${a}`;
        return o ? Qg(d) : d;
      }
    }
    return l;
  }
  return i;
}
var te = Jy("rem", { shouldScale: !0 }), Kg = Jy("em");
function jm(a) {
  return Object.keys(a).reduce((o, i) => (a[i] !== void 0 && (o[i] = a[i]), o), {});
}
function eb(a) {
  if (typeof a == "number") return !0;
  if (typeof a == "string") {
    if (a.startsWith("calc(") || a.startsWith("var(") || a.includes(" ") && a.trim() !== "") return !0;
    const o = /^[+-]?[0-9]+(\.[0-9]+)?(px|em|rem|ex|ch|lh|rlh|vw|vh|vmin|vmax|vb|vi|svw|svh|lvw|lvh|dvw|dvh|cm|mm|in|pt|pc|q|cqw|cqh|cqi|cqb|cqmin|cqmax|%)?$/;
    return a.trim().split(/\s+/).every((i) => o.test(i));
  }
  return !1;
}
var S = /* @__PURE__ */ Zy(_m(), 1);
function Om(a) {
  return Array.isArray(a) || a === null ? !1 : typeof a == "object" ? a.type !== S.Fragment : !1;
}
function xo(a) {
  const o = (0, S.createContext)(null);
  return [o, () => {
    const l = (0, S.use)(o);
    if (l === null) throw new Error(a);
    return l;
  }];
}
function Tc(a, o) {
  let i = a;
  for (; (i = i.parentElement) && !i.matches(o); ) ;
  return i;
}
function Zg(a, o, i) {
  for (let l = a - 1; l >= 0; l -= 1) if (!o[l].disabled) return l;
  if (i) {
    for (let l = o.length - 1; l > -1; l -= 1) if (!o[l].disabled) return l;
  }
  return a;
}
function Fg(a, o, i) {
  for (let l = a + 1; l < o.length; l += 1) if (!o[l].disabled) return l;
  if (i) {
    for (let l = 0; l < o.length; l += 1) if (!o[l].disabled) return l;
  }
  return a;
}
function l2(a, o, i) {
  return Tc(a, i) === Tc(o, i);
}
function Mm({ parentSelector: a, siblingSelector: o, onKeyDown: i, loop: l = !0, activateOnFocus: c = !1, dir: d = "rtl", orientation: f }) {
  return (m) => {
    i?.(m);
    const v = Array.from(Tc(m.currentTarget, a)?.querySelectorAll(o) || []).filter((A) => l2(m.currentTarget, A, a)), y = v.findIndex((A) => m.currentTarget === A), x = Fg(y, v, l), b = Zg(y, v, l), p = d === "rtl" ? b : x, w = d === "rtl" ? x : b;
    switch (m.key) {
      case "ArrowRight":
        f === "horizontal" && (m.stopPropagation(), m.preventDefault(), v[p].focus(), c && v[p].click());
        break;
      case "ArrowLeft":
        f === "horizontal" && (m.stopPropagation(), m.preventDefault(), v[w].focus(), c && v[w].click());
        break;
      case "ArrowUp":
        f === "vertical" && (m.stopPropagation(), m.preventDefault(), v[b].focus(), c && v[b].click());
        break;
      case "ArrowDown":
        f === "vertical" && (m.stopPropagation(), m.preventDefault(), v[x].focus(), c && v[x].click());
        break;
      case "Home":
        m.stopPropagation(), m.preventDefault(), v[Fg(-1, v, !1)]?.focus();
        break;
      case "End":
        m.stopPropagation(), m.preventDefault(), v[Zg(v.length, v, !1)]?.focus();
    }
  };
}
var s2 = {
  app: 100,
  modal: 200,
  popover: 300,
  overlay: 400,
  max: 9999
};
function rr(a) {
  return s2[a];
}
var c2 = () => {
};
function u2(a, o = { active: !0 }) {
  return typeof a != "function" || !o.active ? o.onKeyDown || c2 : (i) => {
    i.key === "Escape" && (a(i), o.onTrigger?.());
  };
}
function qe(a, o = "size", i = !0) {
  if (a !== void 0)
    return eb(a) ? i ? te(a) : a : `var(--${o}-${a})`;
}
function lm(a) {
  return qe(a, "mantine-spacing");
}
function Ht(a) {
  return a === void 0 ? "var(--mantine-radius-default)" : qe(a, "mantine-radius");
}
function _t(a) {
  return qe(a, "mantine-font-size");
}
function zm(a) {
  if (a)
    return qe(a, "mantine-shadow", !1);
}
function ot(a, o) {
  return (i) => {
    a?.(i), o?.(i);
  };
}
function d2(a, o, i) {
  return i ? Array.from(Tc(i, o)?.querySelectorAll(a) || []).findIndex((l) => l === i) : null;
}
function sm(a = "mantine-") {
  return `${a}${Math.random().toString(36).slice(2, 11)}`;
}
function f2(a, o) {
  if (a === o || Number.isNaN(a) && Number.isNaN(o)) return !0;
  if (!(a instanceof Object) || !(o instanceof Object)) return !1;
  const i = Object.keys(a), { length: l } = i;
  if (l !== Object.keys(o).length) return !1;
  for (let c = 0; c < l; c += 1) {
    const d = i[c];
    if (!(d in o) || a[d] !== o[d] && !(Number.isNaN(a[d]) && Number.isNaN(o[d]))) return !1;
  }
  return !0;
}
function oi(a) {
  const o = (0, S.useRef)(a);
  return (0, S.useEffect)(() => {
    o.current = a;
  }), (0, S.useMemo)(() => ((...i) => o.current?.(...i)), []);
}
function Dc(a, o) {
  const { delay: i, flushOnUnmount: l, leading: c, maxWait: d } = typeof o == "number" ? {
    delay: o,
    flushOnUnmount: !1,
    leading: !1,
    maxWait: void 0
  } : o, f = oi(a), m = (0, S.useRef)(0), v = (0, S.useRef)(0), y = (0, S.useRef)(null), x = (0, S.useMemo)(() => {
    const b = Object.assign((...p) => {
      window.clearTimeout(m.current), y.current = p;
      const w = b._isFirstCall;
      b._isFirstCall = !1;
      function A() {
        window.clearTimeout(m.current), window.clearTimeout(v.current), m.current = 0, v.current = 0, b._isFirstCall = !0, b._hasPendingCallback = !1;
      }
      function C() {
        d !== void 0 && v.current === 0 && (v.current = window.setTimeout(() => {
          if (m.current !== 0) {
            const O = y.current;
            A(), f(...O);
          }
        }, d));
      }
      if (c && w) {
        f(...p);
        const O = () => {
          A();
        }, _ = () => {
          m.current !== 0 && (A(), f(...p));
        }, j = () => {
          A();
        };
        b.flush = _, b.cancel = j, m.current = window.setTimeout(O, i), C();
        return;
      }
      if (c && !w) {
        b._hasPendingCallback = !0;
        const O = () => {
          m.current !== 0 && (A(), f(...p));
        }, _ = () => {
          A();
        };
        b.flush = O, b.cancel = _;
        const j = () => {
          A();
        };
        m.current = window.setTimeout(j, i), C();
        return;
      }
      b._hasPendingCallback = !0;
      const T = () => {
        m.current !== 0 && (A(), f(...p));
      }, R = () => {
        A();
      };
      b.flush = T, b.cancel = R, m.current = window.setTimeout(T, i), C();
    }, {
      flush: () => {
      },
      cancel: () => {
      },
      isPending: () => b._hasPendingCallback,
      _isFirstCall: !0,
      _hasPendingCallback: !1
    });
    return b;
  }, [
    f,
    i,
    c,
    d
  ]);
  return (0, S.useEffect)(() => () => {
    l ? x.flush() : x.cancel();
  }, [x, l]), x;
}
var m2 = ["mousedown", "touchstart"];
function h2(a, o, i, l = !0) {
  const c = (0, S.useRef)(null), d = o || m2, f = (0, S.useEffectEvent)((v) => {
    const { target: y } = v ?? {};
    if (!document.body.contains(y) && y?.tagName !== "HTML") return;
    const x = v.composedPath();
    Array.isArray(i) ? i.every((b) => !!b && !x.includes(b)) && a(v) : c.current && !x.includes(c.current) && a(v);
  }), m = d.join(",");
  return (0, S.useEffect)(() => {
    if (!l) return;
    const v = m.split(",");
    return v.forEach((y) => document.addEventListener(y, f)), () => {
      v.forEach((y) => document.removeEventListener(y, f));
    };
  }, [m, l]), c;
}
function v2(a, o) {
  return typeof o == "boolean" ? o : typeof window < "u" && "matchMedia" in window ? window.matchMedia(a).matches : !1;
}
function p2(a, o, { getInitialValueInEffect: i } = { getInitialValueInEffect: !0 }) {
  const [l, c] = (0, S.useState)(i ? o : v2(a));
  return (0, S.useEffect)(() => {
    try {
      if ("matchMedia" in window) {
        const d = window.matchMedia(a);
        c(d.matches);
        const f = (m) => c(m.matches);
        return d.addEventListener("change", f), () => {
          d.removeEventListener("change", f);
        };
      }
    } catch {
      return;
    }
  }, [a]), l || !1;
}
var So = typeof document < "u" ? S.useLayoutEffect : S.useEffect;
function g2(a, o) {
  return a.length !== o.length || o.some((i, l) => !Object.is(i, a[l]));
}
function Dm(a, o) {
  const i = (0, S.useRef)(!1), l = (0, S.useRef)(null), c = (0, S.useRef)(void 0), d = {};
  (0, S.useEffect)(() => {
    const f = l.current === d, m = c.current;
    if (l.current = d, c.current = o, !i.current) {
      i.current = !0;
      return;
    }
    if (!f && !(o && m && !g2(m, o)))
      return a();
  }, o);
}
function tb({ opened: a, shouldReturnFocus: o = !0 }) {
  const i = (0, S.useRef)(null), l = () => {
    i.current && "focus" in i.current && typeof i.current.focus == "function" && i.current?.focus({ preventScroll: !0 });
  };
  return Dm(() => {
    let c = -1;
    const d = (f) => {
      f.key === "Tab" && window.clearTimeout(c);
    };
    if (document.addEventListener("keydown", d), a) i.current = document.activeElement;
    else if (o) {
      const f = document.activeElement;
      c = window.setTimeout(() => {
        const m = document.activeElement;
        (m === null || m === document.body || m === f) && l();
      }, 10);
    }
    return () => {
      window.clearTimeout(c), document.removeEventListener("keydown", d);
    };
  }, [a, o]), l;
}
var y2 = /input|select|textarea|button|object/, nb = "a, input, select, textarea, button, object, [tabindex]";
function b2(a) {
  return a.style.display === "none";
}
function S2(a) {
  if (a.getAttribute("aria-hidden") || a.getAttribute("hidden") || a.getAttribute("type") === "hidden") return !1;
  let o = a;
  for (; o && !(o === document.body || o.nodeType === 11); ) {
    if (b2(o)) return !1;
    o = o.parentNode;
  }
  return !0;
}
function ab(a) {
  let o = a.getAttribute("tabindex");
  return o === null && (o = void 0), parseInt(o, 10);
}
function cm(a) {
  const o = a.nodeName.toLowerCase(), i = !Number.isNaN(ab(a));
  return (y2.test(o) && !a.disabled || a instanceof HTMLAnchorElement && a.href || i) && S2(a);
}
function ob(a) {
  const o = ab(a);
  return (Number.isNaN(o) || o >= 0) && cm(a);
}
function w2(a) {
  return Array.from(a.querySelectorAll(nb)).filter(ob);
}
function x2(a, o) {
  const i = w2(a);
  if (!i.length) {
    o.preventDefault();
    return;
  }
  const l = i[o.shiftKey ? 0 : i.length - 1], c = a.getRootNode();
  let d = l === c.activeElement || a === c.activeElement;
  const f = c.activeElement;
  if (f.tagName === "INPUT" && f.getAttribute("type") === "radio" && (d = i.filter((v) => v.getAttribute("type") === "radio" && v.getAttribute("name") === f.getAttribute("name")).includes(l)), !d) return;
  o.preventDefault();
  const m = i[o.shiftKey ? i.length - 1 : 0];
  m && m.focus();
}
function C2(a = !0) {
  const o = (0, S.useRef)(null), i = (c) => {
    let d = c.querySelector("[data-autofocus]");
    if (!d) {
      const f = Array.from(c.querySelectorAll(nb));
      d = f.find(ob) || f.find(cm) || null, !d && cm(c) && (d = c);
    }
    d ? d.focus({ preventScroll: !0 }) : console.warn("[@mantine/hooks/use-focus-trap] Failed to find focusable element within provided node", c);
  }, l = (0, S.useCallback)((c) => {
    if (a) {
      if (c === null) {
        o.current = null;
        return;
      }
      o.current !== c && (setTimeout(() => {
        c.getRootNode() ? i(c) : console.warn("[@mantine/hooks/use-focus-trap] Ref node is not part of the dom", c);
      }), o.current = c);
    }
  }, [a]);
  return (0, S.useEffect)(() => {
    if (!a) return;
    o.current && setTimeout(() => {
      o.current && i(o.current);
    });
    const c = (d) => {
      d.key === "Tab" && o.current && x2(o.current, d);
    };
    return document.addEventListener("keydown", c), () => document.removeEventListener("keydown", c);
  }, [a]), l;
}
function Dn(a) {
  const o = (0, S.useId)(), [i, l] = (0, S.useState)(`mantine-${o.replace(/:/g, "")}`), c = (0, S.useRef)(!1);
  return So(() => {
    c.current || (c.current = !0, l(sm()));
  }, []), typeof a == "string" ? a : i;
}
function E2(a, o, i) {
  const l = (0, S.useEffectEvent)(o);
  (0, S.useEffect)(() => (window.addEventListener(a, l, i), () => window.removeEventListener(a, l, i)), [a]);
}
function um(a, o) {
  if (typeof a == "function") return a(o);
  typeof a == "object" && a !== null && "current" in a && (a.current = o);
}
function A2(...a) {
  const o = /* @__PURE__ */ new Map();
  return (i) => {
    if (a.forEach((l) => {
      const c = um(l, i);
      c && o.set(l, c);
    }), o.size > 0) return () => {
      a.forEach((l) => {
        const c = o.get(l);
        c && typeof c == "function" ? c() : um(l, null);
      }), o.clear();
    };
  };
}
function ct(...a) {
  return (0, S.useCallback)(A2(...a), a);
}
function Qt({ value: a, defaultValue: o, finalValue: i, onChange: l = () => {
} }) {
  const [c, d] = (0, S.useState)(o !== void 0 ? o : i), f = (m, ...v) => {
    d(m), l?.(m, ...v);
  };
  return a !== void 0 ? [
    a,
    l,
    !0
  ] : [
    c,
    f,
    !1
  ];
}
function km(a, o) {
  return p2("(prefers-reduced-motion: reduce)", a, o);
}
function T2(a, o) {
  if (!a || !o) return !1;
  if (a === o) return !0;
  if (a.length !== o.length) return !1;
  for (let i = 0; i < a.length; i += 1) if (!f2(a[i], o[i])) return !1;
  return !0;
}
function R2(a) {
  const o = (0, S.useRef)([]), i = (0, S.useRef)(0);
  return T2(o.current, a) || (o.current = a, i.current += 1), [i.current];
}
function Jg(a, o) {
  (0, S.useEffect)(a, R2(o));
}
function _2(a, o, i = { autoInvoke: !1 }) {
  const l = (0, S.useRef)(null), c = oi(a), d = (0, S.useCallback)((...m) => {
    l.current || (l.current = window.setTimeout(() => {
      c(...m), l.current = null;
    }, o));
  }, [o]), f = (0, S.useCallback)(() => {
    l.current && (window.clearTimeout(l.current), l.current = null);
  }, []);
  return (0, S.useEffect)(() => (i.autoInvoke && d(), f), [f, d]), {
    start: d,
    clear: f
  };
}
function N2(a) {
  const o = (0, S.useRef)(void 0);
  return (0, S.useEffect)(() => {
    o.current = a;
  }, [a]), o.current;
}
function j2(a, o, i) {
  const l = (0, S.useRef)(null);
  (0, S.useEffect)(() => {
    l.current && (l.current.disconnect(), l.current = null);
    const c = typeof i == "function" ? i() : i;
    return c && (l.current = new MutationObserver(a), l.current.observe(c, o)), () => {
      l.current && (l.current.disconnect(), l.current = null);
    };
  }, [
    a,
    o,
    i
  ]);
}
function O2() {
  const [a, o] = (0, S.useState)(!1);
  return (0, S.useEffect)(() => o(!0), []), a;
}
var M2 = ["mouse", "touch"], z2 = 10;
function D2(a, o = {}) {
  const { threshold: i = 400, events: l = M2, cancelOnMove: c = !1, onStart: d, onFinish: f, onCancel: m } = o, v = (0, S.useRef)(!1), y = (0, S.useRef)(!1), x = (0, S.useRef)(-1), b = (0, S.useRef)(null);
  (0, S.useEffect)(() => () => window.clearTimeout(x.current), []);
  const p = l.join(",");
  return (0, S.useMemo)(() => {
    if (typeof a != "function") return {};
    const w = c !== !1, A = c === !0 ? z2 : c === !1 ? 0 : c, C = (_) => {
      !ty(_) && !dm(_) || (d && d(_), b.current = ey(_), y.current = !0, x.current = window.setTimeout(() => {
        a(_), v.current = !0;
      }, i));
    }, T = (_) => {
      !ty(_) && !dm(_) || (v.current ? f && f(_) : y.current && m && m(_), v.current = !1, y.current = !1, b.current = null, x.current !== -1 && (window.clearTimeout(x.current), x.current = -1));
    }, R = (_) => {
      if (!w || !y.current || v.current) return;
      const j = ey(_);
      if (!j || !b.current) return;
      const L = j.x - b.current.x, z = j.y - b.current.y;
      Math.sqrt(L * L + z * z) > A && T(_);
    }, O = {};
    return l.includes("mouse") && (O.onMouseDown = C, O.onMouseUp = T, O.onMouseLeave = T, w && (O.onMouseMove = R)), l.includes("touch") && (O.onTouchStart = C, O.onTouchEnd = T, O.onTouchCancel = T, w && (O.onTouchMove = R)), O;
  }, [
    a,
    i,
    m,
    f,
    d,
    c,
    p
  ]);
}
function ey(a) {
  if (dm(a)) {
    const o = a.touches[0] ?? a.changedTouches[0];
    return o ? {
      x: o.clientX,
      y: o.clientY
    } : null;
  }
  return {
    x: a.clientX,
    y: a.clientY
  };
}
function dm(a) {
  return window.TouchEvent ? a.nativeEvent instanceof TouchEvent : "touches" in a.nativeEvent;
}
function ty(a) {
  return a.nativeEvent instanceof MouseEvent;
}
function rb() {
  return typeof process < "u" && process.env, "development";
}
function ib(a) {
  return "19.3.0".startsWith("18.") ? a?.ref : a?.props?.ref;
}
function k2(a) {
  return typeof a == "string" || typeof a == "number" || typeof a == "boolean" || typeof a == "bigint";
}
function wc(a, o = document) {
  const i = o.querySelector(a);
  if (i) return i;
  const l = o.querySelectorAll("*");
  for (let c = 0; c < l.length; c += 1) {
    const d = l[c];
    if (d.shadowRoot) {
      const f = wc(a, d.shadowRoot);
      if (f) return f;
    }
  }
  return null;
}
function za(a, o = document) {
  const i = [], l = o.querySelectorAll(a);
  i.push(...Array.from(l));
  const c = o.querySelectorAll("*");
  for (let d = 0; d < c.length; d += 1) {
    const f = c[d];
    if (f.shadowRoot) {
      const m = za(a, f.shadowRoot);
      i.push(...m);
    }
  }
  return i;
}
function ia(a) {
  if (!a) return document;
  const o = a.getRootNode();
  return o instanceof ShadowRoot || o instanceof Document ? o : document;
}
function ir(a) {
  const o = S.Children.toArray(a);
  return o.length !== 1 || !Om(o[0]) ? null : o[0];
}
function lb(a) {
  var o, i, l = "";
  if (typeof a == "string" || typeof a == "number") l += a;
  else if (typeof a == "object") if (Array.isArray(a)) {
    var c = a.length;
    for (o = 0; o < c; o++) a[o] && (i = lb(a[o])) && (l && (l += " "), l += i);
  } else for (i in a) a[i] && (l && (l += " "), l += i);
  return l;
}
function qt() {
  for (var a, o, i = 0, l = "", c = arguments.length; i < c; i++) (a = arguments[i]) && (o = lb(a)) && (l && (l += " "), l += o);
  return l;
}
var L2 = {};
function H2(a) {
  const o = {};
  return a.forEach((i) => {
    Object.entries(i).forEach(([l, c]) => {
      o[l] ? o[l] = qt(o[l], c) : o[l] = c;
    });
  }), o;
}
function bl({ theme: a, classNames: o, props: i, stylesCtx: l }) {
  return H2((Array.isArray(o) ? o : [o]).map((c) => typeof c == "function" ? c(a, i, l) : c || L2));
}
function Rc({ theme: a, styles: o, props: i, stylesCtx: l }) {
  const c = Array.isArray(o) ? o : [o], d = {};
  for (const f of c) typeof f == "function" ? Object.assign(d, f(a, i, l)) : f && Object.assign(d, f);
  return d;
}
function ny(a) {
  return a === "auto" || a === "dark" || a === "light";
}
function B2({ key: a = "mantine-color-scheme-value" } = {}) {
  let o;
  return {
    get: (i) => {
      if (typeof window > "u") return i;
      try {
        const l = window.localStorage.getItem(a);
        return ny(l) ? l : i;
      } catch {
        return i;
      }
    },
    set: (i) => {
      try {
        window.localStorage.setItem(a, i);
      } catch (l) {
        console.warn("[@mantine/core] Local storage color scheme manager was unable to save color scheme.", l);
      }
    },
    subscribe: (i) => {
      o = (l) => {
        l.storageArea === window.localStorage && l.key === a && ny(l.newValue) && i(l.newValue);
      }, window.addEventListener("storage", o);
    },
    unsubscribe: () => {
      window.removeEventListener("storage", o);
    },
    clear: () => {
      window.localStorage.removeItem(a);
    }
  };
}
function Sl(a, o) {
  return typeof a.primaryShade == "number" ? a.primaryShade : o === "dark" ? a.primaryShade.dark : a.primaryShade.light;
}
function U2(a) {
  return /^#?([0-9A-F]{3}){1,2}([0-9A-F]{2})?$/i.test(a);
}
function q2(a) {
  let o = a.replace("#", "");
  if (o.length === 3) {
    const l = o.split("");
    o = [
      l[0],
      l[0],
      l[1],
      l[1],
      l[2],
      l[2]
    ].join("");
  }
  if (o.length === 8) {
    const l = parseInt(o.slice(6, 8), 16) / 255;
    return {
      r: parseInt(o.slice(0, 2), 16),
      g: parseInt(o.slice(2, 4), 16),
      b: parseInt(o.slice(4, 6), 16),
      a: l
    };
  }
  const i = parseInt(o, 16);
  return {
    r: i >> 16 & 255,
    g: i >> 8 & 255,
    b: i & 255,
    a: 1
  };
}
function V2(a) {
  const [o, i, l, c] = a.replace(/[^0-9,./]/g, "").split(/[/,]/).map(Number);
  return {
    r: o,
    g: i,
    b: l,
    a: c === void 0 ? 1 : c
  };
}
function $2(a) {
  const o = a.match(/^hsla?\(\s*(\d+)\s*,\s*(\d+%)\s*,\s*(\d+%)\s*(,\s*(0?\.\d+|\d+(\.\d+)?))?\s*\)$/i);
  if (!o) return {
    r: 0,
    g: 0,
    b: 0,
    a: 1
  };
  const i = parseInt(o[1], 10), l = parseInt(o[2], 10) / 100, c = parseInt(o[3], 10) / 100, d = o[5] ? parseFloat(o[5]) : void 0, f = (1 - Math.abs(2 * c - 1)) * l, m = i / 60, v = f * (1 - Math.abs(m % 2 - 1)), y = c - f / 2;
  let x, b, p;
  return m >= 0 && m < 1 ? (x = f, b = v, p = 0) : m >= 1 && m < 2 ? (x = v, b = f, p = 0) : m >= 2 && m < 3 ? (x = 0, b = f, p = v) : m >= 3 && m < 4 ? (x = 0, b = v, p = f) : m >= 4 && m < 5 ? (x = v, b = 0, p = f) : (x = f, b = 0, p = v), {
    r: Math.round((x + y) * 255),
    g: Math.round((b + y) * 255),
    b: Math.round((p + y) * 255),
    a: d || 1
  };
}
function Lm(a) {
  return U2(a) ? q2(a) : a.startsWith("rgb") ? V2(a) : a.startsWith("hsl") ? $2(a) : {
    r: 0,
    g: 0,
    b: 0,
    a: 1
  };
}
function Vf(a) {
  return a <= 0.03928 ? a / 12.92 : ((a + 0.055) / 1.055) ** 2.4;
}
function Y2(a) {
  const o = a.match(/oklch\((.*?)%\s/);
  return o ? parseFloat(o[1]) : null;
}
function G2(a) {
  if (a.startsWith("oklch(")) return (Y2(a) || 0) / 100;
  const { r: o, g: i, b: l } = Lm(a), c = o / 255, d = i / 255, f = l / 255, m = Vf(c), v = Vf(d), y = Vf(f);
  return 0.2126 * m + 0.7152 * v + 0.0722 * y;
}
function ml(a, o = 0.179) {
  return a.startsWith("var(") ? !1 : G2(a) > o;
}
function va({ color: a, theme: o, colorScheme: i }) {
  if (typeof a != "string") throw new Error(`[@mantine/core] Failed to parse color. Expected color to be a string, instead got ${typeof a}`);
  if (a === "bright") return {
    color: a,
    value: i === "dark" ? o.white : o.black,
    shade: void 0,
    isThemeColor: !1,
    isLight: ml(i === "dark" ? o.white : o.black, o.luminanceThreshold),
    variable: "--mantine-color-bright"
  };
  if (a === "dimmed") return {
    color: a,
    value: i === "dark" ? o.colors.dark[2] : o.colors.gray[7],
    shade: void 0,
    isThemeColor: !1,
    isLight: ml(i === "dark" ? o.colors.dark[2] : o.colors.gray[6], o.luminanceThreshold),
    variable: "--mantine-color-dimmed"
  };
  if (a === "white" || a === "black") return {
    color: a,
    value: a === "white" ? o.white : o.black,
    shade: void 0,
    isThemeColor: !1,
    isLight: ml(a === "white" ? o.white : o.black, o.luminanceThreshold),
    variable: `--mantine-color-${a}`
  };
  const [l, c] = a.split("."), d = c ? Number(c) : void 0, f = l in o.colors;
  if (f) {
    const m = d !== void 0 ? o.colors[l][d] : o.colors[l][Sl(o, i || "light")];
    return {
      color: l,
      value: m,
      shade: d,
      isThemeColor: f,
      isLight: ml(m, o.luminanceThreshold),
      variable: c ? `--mantine-color-${l}-${d}` : `--mantine-color-${l}-filled`
    };
  }
  return {
    color: a,
    value: a,
    isThemeColor: f,
    isLight: ml(a, o.luminanceThreshold),
    shade: d,
    variable: void 0
  };
}
function an(a, o) {
  const i = va({
    color: a || o.primaryColor,
    theme: o
  });
  return i.variable ? `var(${i.variable})` : a;
}
function W2(a) {
  return Array.isArray(a) ? a : Array(10).fill(a);
}
function Hm(a) {
  return !!a && typeof a == "object" && "mantine-virtual-color" in a;
}
function tr(a, o) {
  if (a.startsWith("var(")) return `color-mix(in srgb, ${a}, black ${o * 100}%)`;
  const { r: i, g: l, b: c, a: d } = Lm(a), f = 1 - o, m = (v) => Math.round(v * f);
  return `rgba(${m(i)}, ${m(l)}, ${m(c)}, ${d})`;
}
function ay(a, o) {
  const i = {
    from: a?.from || o.defaultGradient.from,
    to: a?.to || o.defaultGradient.to,
    deg: a?.deg ?? o.defaultGradient.deg ?? 0
  }, l = an(i.from, o), c = an(i.to, o);
  return `linear-gradient(${i.deg}deg, ${l} 0%, ${c} 100%)`;
}
function po(a, o) {
  if (typeof a != "string" || o > 1 || o < 0) return "rgba(0, 0, 0, 1)";
  if (a.startsWith("var(")) return `color-mix(in srgb, ${a}, transparent ${(1 - o) * 100}%)`;
  if (a.startsWith("oklch"))
    return a.includes("/") ? a.replace(/\/\s*[\d.]+\s*\)/, `/ ${o})`) : a.replace(")", ` / ${o})`);
  const { r: i, g: l, b: c } = Lm(a);
  return `rgba(${i}, ${l}, ${c}, ${o})`;
}
var oy = po, sb = ({ color: a, theme: o, variant: i, gradient: l, autoContrast: c }) => {
  const d = va({
    color: a,
    theme: o
  }), f = typeof c == "boolean" ? c : o.autoContrast;
  if (i === "none") return {
    background: "transparent",
    hover: "transparent",
    color: "inherit",
    border: "none"
  };
  if (i === "filled") {
    const m = d.isThemeColor && d.shade === void 0 && Hm(o.colors[d.color]), v = f ? m ? `var(--mantine-color-${d.color}-contrast)` : d.isLight ? "var(--mantine-color-black)" : "var(--mantine-color-white)" : "var(--mantine-color-white)";
    return d.isThemeColor ? d.shade === void 0 ? {
      background: `var(--mantine-color-${a}-filled)`,
      hover: `var(--mantine-color-${a}-filled-hover)`,
      color: v,
      border: `${te(1)} solid transparent`
    } : {
      background: `var(--mantine-color-${d.color}-${d.shade})`,
      hover: `var(--mantine-color-${d.color}-${d.shade === 9 ? 8 : d.shade + 1})`,
      color: v,
      border: `${te(1)} solid transparent`
    } : {
      background: a,
      hover: tr(a, 0.1),
      color: v,
      border: `${te(1)} solid transparent`
    };
  }
  if (i === "light") {
    if (d.isThemeColor) {
      if (d.shade === void 0) return {
        background: `var(--mantine-color-${a}-light)`,
        hover: `var(--mantine-color-${a}-light-hover)`,
        color: `var(--mantine-color-${a}-light-color)`,
        border: `${te(1)} solid transparent`
      };
      const m = o.colors[d.color][d.shade];
      return {
        background: m,
        hover: tr(m, 0.1),
        color: `var(--mantine-color-${d.color}-light-color)`,
        border: `${te(1)} solid transparent`
      };
    }
    return {
      background: po(a, 0.1),
      hover: po(a, 0.12),
      color: a,
      border: `${te(1)} solid transparent`
    };
  }
  if (i === "outline")
    return d.isThemeColor ? d.shade === void 0 ? {
      background: "transparent",
      hover: `var(--mantine-color-${a}-outline-hover)`,
      color: `var(--mantine-color-${a}-outline)`,
      border: `${te(1)} solid var(--mantine-color-${a}-outline)`
    } : {
      background: "transparent",
      hover: po(o.colors[d.color][d.shade], 0.05),
      color: `var(--mantine-color-${d.color}-${d.shade})`,
      border: `${te(1)} solid var(--mantine-color-${d.color}-${d.shade})`
    } : {
      background: "transparent",
      hover: po(a, 0.05),
      color: a,
      border: `${te(1)} solid ${a}`
    };
  if (i === "subtle") {
    if (d.isThemeColor) {
      if (d.shade === void 0) return {
        background: "transparent",
        hover: `var(--mantine-color-${a}-light-hover)`,
        color: `var(--mantine-color-${a}-light-color)`,
        border: `${te(1)} solid transparent`
      };
      const m = o.colors[d.color][d.shade];
      return {
        background: "transparent",
        hover: po(m, 0.12),
        color: `var(--mantine-color-${d.color}-${Math.min(d.shade, 6)})`,
        border: `${te(1)} solid transparent`
      };
    }
    return {
      background: "transparent",
      hover: po(a, 0.12),
      color: a,
      border: `${te(1)} solid transparent`
    };
  }
  return i === "transparent" ? d.isThemeColor ? d.shade === void 0 ? {
    background: "transparent",
    hover: "transparent",
    color: `var(--mantine-color-${a}-light-color)`,
    border: `${te(1)} solid transparent`
  } : {
    background: "transparent",
    hover: "transparent",
    color: `var(--mantine-color-${d.color}-${Math.min(d.shade, 6)})`,
    border: `${te(1)} solid transparent`
  } : {
    background: "transparent",
    hover: "transparent",
    color: a,
    border: `${te(1)} solid transparent`
  } : i === "white" ? d.isThemeColor ? d.shade === void 0 ? {
    background: "var(--mantine-color-white)",
    hover: tr(o.white, 0.01),
    color: `var(--mantine-color-${a}-filled)`,
    border: `${te(1)} solid transparent`
  } : {
    background: "var(--mantine-color-white)",
    hover: tr(o.white, 0.01),
    color: `var(--mantine-color-${d.color}-${d.shade})`,
    border: `${te(1)} solid transparent`
  } : {
    background: "var(--mantine-color-white)",
    hover: tr(o.white, 0.01),
    color: a,
    border: `${te(1)} solid transparent`
  } : i === "gradient" ? {
    background: ay(l, o),
    hover: ay(l, o),
    color: "var(--mantine-color-white)",
    border: "none"
  } : i === "default" ? {
    background: "var(--mantine-color-default)",
    hover: "var(--mantine-color-default-hover)",
    color: "var(--mantine-color-default-color)",
    border: `${te(1)} solid var(--mantine-color-default-border)`
  } : {};
};
function Al({ color: a, theme: o, autoContrast: i, colorScheme: l }) {
  return (typeof i == "boolean" ? i : o.autoContrast) && va({
    color: a || o.primaryColor,
    theme: o,
    colorScheme: l
  }).isLight ? "var(--mantine-color-black)" : "var(--mantine-color-white)";
}
function fm(a, o, i) {
  return Al({
    color: i === "dark" ? a.dark : a.light,
    theme: o,
    colorScheme: i,
    autoContrast: !0
  });
}
function ry(a, o) {
  const i = a.colors[a.primaryColor];
  return Hm(i) ? a.autoContrast ? fm(i, a, o) : "var(--mantine-color-white)" : Al({
    color: i[Sl(a, o)],
    theme: a,
    autoContrast: null
  });
}
function cb(a, o) {
  return typeof a == "boolean" ? a : o.autoContrast;
}
var Bm = (0, S.createContext)(null);
function Ha() {
  const a = (0, S.use)(Bm);
  if (!a) throw new Error("[@mantine/core] MantineProvider was not found in tree");
  return a;
}
function P2() {
  return Ha().cssVariablesResolver;
}
function I2() {
  return Ha().classNamesPrefix;
}
function Um() {
  return Ha().getStyleNonce;
}
function X2() {
  return Ha().withStaticClasses;
}
function Q2() {
  return Ha().headless;
}
function K2() {
  return Ha().stylesTransform?.sx;
}
function Z2() {
  return Ha().stylesTransform?.styles;
}
function qm() {
  return Ha().env || "default";
}
function F2() {
  return Ha().deduplicateInlineStyles;
}
function ti(a, o) {
  const i = typeof window < "u" && "matchMedia" in window && window.matchMedia("(prefers-color-scheme: dark)")?.matches, l = a !== "auto" ? a : i ? "dark" : "light";
  o()?.setAttribute("data-mantine-color-scheme", l);
}
function J2({ manager: a, defaultColorScheme: o, getRootElement: i, forceColorScheme: l }) {
  const c = (0, S.useRef)(null), [d, f] = (0, S.useState)(() => a.get(o)), m = l || d, v = (0, S.useCallback)((x) => {
    l || (ti(x, i), f(x), a.set(x));
  }, [
    a.set,
    m,
    l
  ]), y = (0, S.useCallback)(() => {
    f(o), ti(o, i), a.clear();
  }, [a.clear, o]);
  return (0, S.useEffect)(() => (a.subscribe(v), a.unsubscribe), [a.subscribe, a.unsubscribe]), So(() => {
    ti(a.get(o), i);
  }, []), (0, S.useEffect)(() => {
    if (l)
      return ti(l, i), () => {
      };
    l === void 0 && ti(d, i), typeof window < "u" && "matchMedia" in window && (c.current = window.matchMedia("(prefers-color-scheme: dark)"));
    const x = (b) => {
      d === "auto" && ti(b.matches ? "dark" : "light", i);
    };
    return c.current?.addEventListener("change", x), () => c.current?.removeEventListener("change", x);
  }, [d, l]), {
    colorScheme: m,
    setColorScheme: v,
    clearColorScheme: y
  };
}
var eE = /* @__PURE__ */ ha(((a) => {
  var o = /* @__PURE__ */ Symbol.for("react.transitional.element"), i = /* @__PURE__ */ Symbol.for("react.fragment");
  function l(c, d, f) {
    var m = null;
    if (f !== void 0 && (m = "" + f), d.key !== void 0 && (m = "" + d.key), "key" in d) {
      f = {};
      for (var v in d) v !== "key" && (f[v] = d[v]);
    } else f = d;
    return d = f.ref, {
      $$typeof: o,
      type: c,
      key: m,
      ref: d !== void 0 ? d : null,
      props: f
    };
  }
  a.Fragment = i, a.jsx = l, a.jsxs = l;
})), tE = /* @__PURE__ */ ha(((a, o) => {
  o.exports = eE();
})), nE = {
  dark: [
    "#C9C9C9",
    "#b8b8b8",
    "#828282",
    "#696969",
    "#424242",
    "#3b3b3b",
    "#2e2e2e",
    "#242424",
    "#1f1f1f",
    "#141414"
  ],
  gray: [
    "#f8f9fa",
    "#f1f3f5",
    "#e9ecef",
    "#dee2e6",
    "#ced4da",
    "#adb5bd",
    "#868e96",
    "#495057",
    "#343a40",
    "#212529"
  ],
  red: [
    "#fff5f5",
    "#ffe3e3",
    "#ffc9c9",
    "#ffa8a8",
    "#ff8787",
    "#ff6b6b",
    "#fa5252",
    "#f03e3e",
    "#e03131",
    "#c92a2a"
  ],
  pink: [
    "#fff0f6",
    "#ffdeeb",
    "#fcc2d7",
    "#faa2c1",
    "#f783ac",
    "#f06595",
    "#e64980",
    "#d6336c",
    "#c2255c",
    "#a61e4d"
  ],
  grape: [
    "#f8f0fc",
    "#f3d9fa",
    "#eebefa",
    "#e599f7",
    "#da77f2",
    "#cc5de8",
    "#be4bdb",
    "#ae3ec9",
    "#9c36b5",
    "#862e9c"
  ],
  violet: [
    "#f3f0ff",
    "#e5dbff",
    "#d0bfff",
    "#b197fc",
    "#9775fa",
    "#845ef7",
    "#7950f2",
    "#7048e8",
    "#6741d9",
    "#5f3dc4"
  ],
  indigo: [
    "#edf2ff",
    "#dbe4ff",
    "#bac8ff",
    "#91a7ff",
    "#748ffc",
    "#5c7cfa",
    "#4c6ef5",
    "#4263eb",
    "#3b5bdb",
    "#364fc7"
  ],
  blue: [
    "#e7f5ff",
    "#d0ebff",
    "#a5d8ff",
    "#74c0fc",
    "#4dabf7",
    "#339af0",
    "#228be6",
    "#1c7ed6",
    "#1971c2",
    "#1864ab"
  ],
  cyan: [
    "#e3fafc",
    "#c5f6fa",
    "#99e9f2",
    "#66d9e8",
    "#3bc9db",
    "#22b8cf",
    "#15aabf",
    "#1098ad",
    "#0c8599",
    "#0b7285"
  ],
  teal: [
    "#e6fcf5",
    "#c3fae8",
    "#96f2d7",
    "#63e6be",
    "#38d9a9",
    "#20c997",
    "#12b886",
    "#0ca678",
    "#099268",
    "#087f5b"
  ],
  green: [
    "#ebfbee",
    "#d3f9d8",
    "#b2f2bb",
    "#8ce99a",
    "#69db7c",
    "#51cf66",
    "#40c057",
    "#37b24d",
    "#2f9e44",
    "#2b8a3e"
  ],
  lime: [
    "#f4fce3",
    "#e9fac8",
    "#d8f5a2",
    "#c0eb75",
    "#a9e34b",
    "#94d82d",
    "#82c91e",
    "#74b816",
    "#66a80f",
    "#5c940d"
  ],
  yellow: [
    "#fff9db",
    "#fff3bf",
    "#ffec99",
    "#ffe066",
    "#ffd43b",
    "#fcc419",
    "#fab005",
    "#f59f00",
    "#f08c00",
    "#e67700"
  ],
  orange: [
    "#fff4e6",
    "#ffe8cc",
    "#ffd8a8",
    "#ffc078",
    "#ffa94d",
    "#ff922b",
    "#fd7e14",
    "#f76707",
    "#e8590c",
    "#d9480f"
  ]
}, iy = "-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica, Arial, sans-serif, Apple Color Emoji, Segoe UI Emoji", Vm = {
  scale: 1,
  fontSmoothing: !0,
  focusRing: "auto",
  white: "#fff",
  black: "#000",
  colors: nE,
  primaryShade: {
    light: 6,
    dark: 8
  },
  primaryColor: "blue",
  variantColorResolver: sb,
  autoContrast: !1,
  luminanceThreshold: 0.3,
  fontFamily: iy,
  fontFamilyMonospace: "ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, Liberation Mono, Courier New, monospace",
  respectReducedMotion: !1,
  cursorType: "default",
  defaultGradient: {
    from: "blue",
    to: "cyan",
    deg: 45
  },
  defaultRadius: "md",
  activeClassName: "mantine-active",
  focusClassName: "",
  headings: {
    fontFamily: iy,
    fontWeight: "700",
    textWrap: "wrap",
    sizes: {
      h1: {
        fontSize: te(34),
        lineHeight: "1.3"
      },
      h2: {
        fontSize: te(26),
        lineHeight: "1.35"
      },
      h3: {
        fontSize: te(22),
        lineHeight: "1.4"
      },
      h4: {
        fontSize: te(18),
        lineHeight: "1.45"
      },
      h5: {
        fontSize: te(16),
        lineHeight: "1.5"
      },
      h6: {
        fontSize: te(14),
        lineHeight: "1.5"
      }
    }
  },
  fontSizes: {
    xs: te(12),
    sm: te(14),
    md: te(16),
    lg: te(18),
    xl: te(20)
  },
  lineHeights: {
    xs: "1.4",
    sm: "1.45",
    md: "1.55",
    lg: "1.6",
    xl: "1.65"
  },
  fontWeights: {
    regular: "400",
    medium: "600",
    bold: "700"
  },
  radius: {
    xs: te(2),
    sm: te(4),
    md: te(8),
    lg: te(16),
    xl: te(32)
  },
  spacing: {
    xs: te(10),
    sm: te(12),
    md: te(16),
    lg: te(20),
    xl: te(32)
  },
  breakpoints: {
    xs: "36em",
    sm: "48em",
    md: "62em",
    lg: "75em",
    xl: "88em"
  },
  shadows: {
    xs: `0 ${te(1)} ${te(3)} rgba(0, 0, 0, 0.05), 0 ${te(1)} ${te(2)} rgba(0, 0, 0, 0.1)`,
    sm: `0 ${te(1)} ${te(3)} rgba(0, 0, 0, 0.05), rgba(0, 0, 0, 0.05) 0 ${te(10)} ${te(15)} ${te(-5)}, rgba(0, 0, 0, 0.04) 0 ${te(7)} ${te(7)} ${te(-5)}`,
    md: `0 ${te(1)} ${te(3)} rgba(0, 0, 0, 0.05), rgba(0, 0, 0, 0.05) 0 ${te(20)} ${te(25)} ${te(-5)}, rgba(0, 0, 0, 0.04) 0 ${te(10)} ${te(10)} ${te(-5)}`,
    lg: `0 ${te(1)} ${te(3)} rgba(0, 0, 0, 0.05), rgba(0, 0, 0, 0.05) 0 ${te(28)} ${te(23)} ${te(-7)}, rgba(0, 0, 0, 0.04) 0 ${te(12)} ${te(12)} ${te(-7)}`,
    xl: `0 ${te(1)} ${te(3)} rgba(0, 0, 0, 0.05), rgba(0, 0, 0, 0.05) 0 ${te(36)} ${te(28)} ${te(-7)}, rgba(0, 0, 0, 0.04) 0 ${te(17)} ${te(17)} ${te(-7)}`
  },
  other: {},
  components: {}
}, aE = "[@mantine/core] MantineProvider: Invalid theme.primaryColor, it accepts only key of theme.colors, learn more – https://mantine.dev/theming/colors/#primary-color", ly = "[@mantine/core] MantineProvider: Invalid theme.primaryShade, it accepts only 0-9 integers or an object { light: 0-9, dark: 0-9 }";
function $f(a) {
  return a < 0 || a > 9 ? !1 : parseInt(a.toString(), 10) === a;
}
function sy(a) {
  if (!(a.primaryColor in a.colors)) throw new Error(aE);
  if (typeof a.primaryShade == "object" && (!$f(a.primaryShade.dark) || !$f(a.primaryShade.light)))
    throw new Error(ly);
  if (typeof a.primaryShade == "number" && !$f(a.primaryShade)) throw new Error(ly);
}
function oE(a, o) {
  if (!o)
    return sy(a), a;
  const i = Nm(a, o);
  return o.fontFamily && !o.headings?.fontFamily && (i.headings = {
    ...i.headings,
    fontFamily: o.fontFamily
  }), sy(i), i;
}
var g = tE(), $m = (0, S.createContext)(null), rE = () => (0, S.use)($m) || Vm;
function Pn() {
  const a = (0, S.use)($m);
  if (!a) throw new Error("@mantine/core: MantineProvider was not found in component tree, make sure you have it in your app");
  return a;
}
function Ym({ theme: a, children: o, inherit: i = !0 }) {
  const l = rE(), c = (0, S.useMemo)(() => oE(i ? l : Vm, a), [
    a,
    l,
    i
  ]);
  return /* @__PURE__ */ (0, g.jsx)($m, {
    value: c,
    children: o
  });
}
Ym.displayName = "@mantine/core/MantineThemeProvider";
function Yf(a) {
  return Object.entries(a).map(([o, i]) => `${o}: ${i};`).join("");
}
function ub(a, o) {
  const i = o ? [o] : [":root", ":host"], l = Yf(a.variables), c = l ? `${i.join(", ")}{${l}}` : "", d = Yf(a.dark), f = Yf(a.light), m = (v) => i.map((y) => y === ":host" ? `${y}([data-mantine-color-scheme="${v}"])` : `${y}[data-mantine-color-scheme="${v}"]`).join(", ");
  return `${c}

${d ? `${m("dark")}{${d}}` : ""}

${f ? `${m("light")}{${f}}` : ""}`;
}
function fc({ theme: a, color: o, colorScheme: i, name: l = o, withColorValues: c = !0 }) {
  if (!a.colors[o]) return {};
  if (i === "light") {
    const m = Sl(a, "light"), v = {
      [`--mantine-color-${l}-text`]: `var(--mantine-color-${l}-filled)`,
      [`--mantine-color-${l}-filled`]: `var(--mantine-color-${l}-${m})`,
      [`--mantine-color-${l}-filled-hover`]: `var(--mantine-color-${l}-${m === 9 ? 8 : m + 1})`,
      [`--mantine-color-${l}-light`]: `var(--mantine-color-${l}-1)`,
      [`--mantine-color-${l}-light-hover`]: `var(--mantine-color-${l}-2)`,
      [`--mantine-color-${l}-light-color`]: `var(--mantine-color-${l}-9)`,
      [`--mantine-color-${l}-outline`]: `var(--mantine-color-${l}-${m})`,
      [`--mantine-color-${l}-outline-hover`]: oy(a.colors[o][m], 0.05)
    };
    return c ? {
      [`--mantine-color-${l}-0`]: a.colors[o][0],
      [`--mantine-color-${l}-1`]: a.colors[o][1],
      [`--mantine-color-${l}-2`]: a.colors[o][2],
      [`--mantine-color-${l}-3`]: a.colors[o][3],
      [`--mantine-color-${l}-4`]: a.colors[o][4],
      [`--mantine-color-${l}-5`]: a.colors[o][5],
      [`--mantine-color-${l}-6`]: a.colors[o][6],
      [`--mantine-color-${l}-7`]: a.colors[o][7],
      [`--mantine-color-${l}-8`]: a.colors[o][8],
      [`--mantine-color-${l}-9`]: a.colors[o][9],
      ...v
    } : v;
  }
  const d = Sl(a, "dark"), f = {
    [`--mantine-color-${l}-text`]: `var(--mantine-color-${l}-4)`,
    [`--mantine-color-${l}-filled`]: `var(--mantine-color-${l}-${d})`,
    [`--mantine-color-${l}-filled-hover`]: `var(--mantine-color-${l}-${d === 9 ? 8 : d + 1})`,
    [`--mantine-color-${l}-light`]: tr(a.colors[o][9], 0.5),
    [`--mantine-color-${l}-light-hover`]: tr(a.colors[o][9], 0.3),
    [`--mantine-color-${l}-light-color`]: `var(--mantine-color-${l}-0)`,
    [`--mantine-color-${l}-outline`]: `var(--mantine-color-${l}-${Math.max(d - 4, 0)})`,
    [`--mantine-color-${l}-outline-hover`]: oy(a.colors[o][Math.max(d - 4, 0)], 0.05)
  };
  return c ? {
    [`--mantine-color-${l}-0`]: a.colors[o][0],
    [`--mantine-color-${l}-1`]: a.colors[o][1],
    [`--mantine-color-${l}-2`]: a.colors[o][2],
    [`--mantine-color-${l}-3`]: a.colors[o][3],
    [`--mantine-color-${l}-4`]: a.colors[o][4],
    [`--mantine-color-${l}-5`]: a.colors[o][5],
    [`--mantine-color-${l}-6`]: a.colors[o][6],
    [`--mantine-color-${l}-7`]: a.colors[o][7],
    [`--mantine-color-${l}-8`]: a.colors[o][8],
    [`--mantine-color-${l}-9`]: a.colors[o][9],
    ...f
  } : f;
}
function Zo(a, o, i) {
  ca(o).forEach((l) => Object.assign(a, { [`--mantine-${i}-${l}`]: o[l] }));
}
var db = (a) => {
  const o = Sl(a, "light"), i = a.defaultRadius in a.radius ? a.radius[a.defaultRadius] : te(a.defaultRadius), l = {
    variables: {
      "--mantine-z-index-app": "100",
      "--mantine-z-index-modal": "200",
      "--mantine-z-index-popover": "300",
      "--mantine-z-index-overlay": "400",
      "--mantine-z-index-max": "9999",
      "--mantine-scale": a.scale.toString(),
      "--mantine-cursor-type": a.cursorType,
      "--mantine-webkit-font-smoothing": a.fontSmoothing ? "antialiased" : "unset",
      "--mantine-moz-font-smoothing": a.fontSmoothing ? "grayscale" : "unset",
      "--mantine-color-white": a.white,
      "--mantine-color-black": a.black,
      "--mantine-line-height": a.lineHeights.md,
      "--mantine-font-family": a.fontFamily,
      "--mantine-font-family-monospace": a.fontFamilyMonospace,
      "--mantine-font-family-headings": a.headings.fontFamily,
      "--mantine-heading-font-weight": a.headings.fontWeight,
      "--mantine-heading-text-wrap": a.headings.textWrap,
      "--mantine-radius-default": i,
      "--mantine-primary-color-filled": `var(--mantine-color-${a.primaryColor}-filled)`,
      "--mantine-primary-color-filled-hover": `var(--mantine-color-${a.primaryColor}-filled-hover)`,
      "--mantine-primary-color-light": `var(--mantine-color-${a.primaryColor}-light)`,
      "--mantine-primary-color-light-hover": `var(--mantine-color-${a.primaryColor}-light-hover)`,
      "--mantine-primary-color-light-color": `var(--mantine-color-${a.primaryColor}-light-color)`
    },
    light: {
      "--mantine-color-scheme": "light",
      "--mantine-primary-color-contrast": ry(a, "light"),
      "--mantine-color-bright": "var(--mantine-color-black)",
      "--mantine-color-text": a.black,
      "--mantine-color-body": a.white,
      "--mantine-color-error": "var(--mantine-color-red-6)",
      "--mantine-color-success": "var(--mantine-color-teal-8)",
      "--mantine-color-placeholder": "var(--mantine-color-gray-5)",
      "--mantine-color-anchor": `var(--mantine-color-${a.primaryColor}-${o})`,
      "--mantine-color-default": "var(--mantine-color-white)",
      "--mantine-color-default-hover": "var(--mantine-color-gray-0)",
      "--mantine-color-default-color": "var(--mantine-color-black)",
      "--mantine-color-default-border": "var(--mantine-color-gray-4)",
      "--mantine-color-dimmed": "var(--mantine-color-gray-6)",
      "--mantine-color-disabled": "var(--mantine-color-gray-2)",
      "--mantine-color-disabled-color": "var(--mantine-color-gray-5)",
      "--mantine-color-disabled-border": "var(--mantine-color-gray-3)"
    },
    dark: {
      "--mantine-color-scheme": "dark",
      "--mantine-primary-color-contrast": ry(a, "dark"),
      "--mantine-color-bright": "var(--mantine-color-white)",
      "--mantine-color-text": "var(--mantine-color-dark-0)",
      "--mantine-color-body": "var(--mantine-color-dark-7)",
      "--mantine-color-error": "var(--mantine-color-red-8)",
      "--mantine-color-success": "var(--mantine-color-teal-8)",
      "--mantine-color-placeholder": "var(--mantine-color-dark-3)",
      "--mantine-color-anchor": `var(--mantine-color-${a.primaryColor}-4)`,
      "--mantine-color-default": "var(--mantine-color-dark-6)",
      "--mantine-color-default-hover": "var(--mantine-color-dark-5)",
      "--mantine-color-default-color": "var(--mantine-color-white)",
      "--mantine-color-default-border": "var(--mantine-color-dark-4)",
      "--mantine-color-dimmed": "var(--mantine-color-dark-2)",
      "--mantine-color-disabled": "var(--mantine-color-dark-6)",
      "--mantine-color-disabled-color": "var(--mantine-color-dark-3)",
      "--mantine-color-disabled-border": "var(--mantine-color-dark-4)"
    }
  };
  Zo(l.variables, a.breakpoints, "breakpoint"), Zo(l.variables, a.spacing, "spacing"), Zo(l.variables, a.fontSizes, "font-size"), Zo(l.variables, a.lineHeights, "line-height"), Zo(l.variables, a.shadows, "shadow"), Zo(l.variables, a.radius, "radius"), Zo(l.variables, a.fontWeights, "font-weight"), a.colors[a.primaryColor].forEach((d, f) => {
    l.variables[`--mantine-primary-color-${f}`] = `var(--mantine-color-${a.primaryColor}-${f})`;
  }), ca(a.colors).forEach((d) => {
    const f = a.colors[d];
    if (Hm(f)) {
      Object.assign(l.light, fc({
        theme: a,
        name: f.name,
        color: f.light,
        colorScheme: "light",
        withColorValues: !0
      })), Object.assign(l.dark, fc({
        theme: a,
        name: f.name,
        color: f.dark,
        colorScheme: "dark",
        withColorValues: !0
      })), l.light[`--mantine-color-${f.name}-contrast`] = fm(f, a, "light"), l.dark[`--mantine-color-${f.name}-contrast`] = fm(f, a, "dark");
      return;
    }
    f.forEach((m, v) => {
      l.variables[`--mantine-color-${d}-${v}`] = m;
    }), Object.assign(l.light, fc({
      theme: a,
      color: d,
      colorScheme: "light",
      withColorValues: !1
    })), Object.assign(l.dark, fc({
      theme: a,
      color: d,
      colorScheme: "dark",
      withColorValues: !1
    }));
  });
  const c = a.headings.sizes;
  return ca(c).forEach((d) => {
    l.variables[`--mantine-${d}-font-size`] = c[d].fontSize, l.variables[`--mantine-${d}-line-height`] = c[d].lineHeight, l.variables[`--mantine-${d}-font-weight`] = c[d].fontWeight || a.headings.fontWeight;
  }), l;
};
function iE() {
  const a = Pn(), o = Um(), i = ca(a.breakpoints).reduce((l, c) => {
    const d = a.breakpoints[c].includes("px"), f = i2(a.breakpoints[c]);
    return `${l}@media (max-width: ${d ? `${f - 0.1}px` : Kg(f - 0.1)}) {.mantine-visible-from-${c} {display: none !important;}}@media (min-width: ${d ? `${f}px` : Kg(f)}) {.mantine-hidden-from-${c} {display: none !important;}}`;
  }, "");
  return /* @__PURE__ */ (0, g.jsx)("style", {
    "data-mantine-styles": "classes",
    nonce: o?.(),
    dangerouslySetInnerHTML: { __html: i }
  });
}
function lE({ theme: a, generator: o }) {
  const i = db(a), l = o?.(a);
  return l ? Nm(i, l) : i;
}
var Gf = db(Vm);
function sE(a) {
  const o = {
    variables: {},
    light: {},
    dark: {}
  };
  return ca(a.variables).forEach((i) => {
    Gf.variables[i] !== a.variables[i] && (o.variables[i] = a.variables[i]);
  }), ca(a.light).forEach((i) => {
    Gf.light[i] !== a.light[i] && (o.light[i] = a.light[i]);
  }), ca(a.dark).forEach((i) => {
    Gf.dark[i] !== a.dark[i] && (o.dark[i] = a.dark[i]);
  }), o;
}
function cE(a) {
  return ub({
    variables: {},
    dark: { "--mantine-color-scheme": "dark" },
    light: { "--mantine-color-scheme": "light" }
  }, a);
}
function fb({ cssVariablesSelector: a, deduplicateCssVariables: o }) {
  const i = Pn(), l = Um(), c = P2(), d = lE({
    theme: i,
    generator: c
  }), f = (a === void 0 || a === ":root" || a === ":host") && o, m = f ? sE(d) : d, v = ub(m, a);
  return v ? /* @__PURE__ */ (0, g.jsx)("style", {
    "data-mantine-styles": !0,
    nonce: l?.(),
    dangerouslySetInnerHTML: { __html: `${v}${f ? "" : cE(a)}` }
  }) : null;
}
fb.displayName = "@mantine/CssVariables";
function uE({ respectReducedMotion: a, getRootElement: o }) {
  So(() => {
    a && o()?.setAttribute("data-respect-reduced-motion", "true");
  }, [a]);
}
function mb({ theme: a, children: o, getStyleNonce: i, withStaticClasses: l = !0, withGlobalClasses: c = !0, deduplicateCssVariables: d = !0, withCssVariables: f = !0, cssVariablesSelector: m, classNamesPrefix: v = "mantine", colorSchemeManager: y = B2(), defaultColorScheme: x = "light", getRootElement: b = () => document.documentElement, cssVariablesResolver: p, forceColorScheme: w, stylesTransform: A, env: C, deduplicateInlineStyles: T = !1 }) {
  const { colorScheme: R, setColorScheme: O, clearColorScheme: _ } = J2({
    defaultColorScheme: x,
    forceColorScheme: w,
    manager: y,
    getRootElement: b
  });
  return uE({
    respectReducedMotion: a?.respectReducedMotion || !1,
    getRootElement: b
  }), /* @__PURE__ */ (0, g.jsx)(Bm, {
    value: {
      colorScheme: R,
      setColorScheme: O,
      clearColorScheme: _,
      getRootElement: b,
      classNamesPrefix: v,
      getStyleNonce: i,
      cssVariablesResolver: p,
      cssVariablesSelector: m ?? ":root",
      withStaticClasses: l,
      stylesTransform: A,
      env: C,
      deduplicateInlineStyles: T
    },
    children: /* @__PURE__ */ (0, g.jsxs)(Ym, {
      theme: a,
      children: [
        f && /* @__PURE__ */ (0, g.jsx)(fb, {
          cssVariablesSelector: m,
          deduplicateCssVariables: d
        }),
        c && /* @__PURE__ */ (0, g.jsx)(iE, {}),
        o
      ]
    })
  });
}
mb.displayName = "@mantine/core/MantineProvider";
function dE({ children: a, theme: o, env: i }) {
  return /* @__PURE__ */ (0, g.jsx)(Bm, {
    value: {
      colorScheme: "auto",
      setColorScheme: () => {
      },
      clearColorScheme: () => {
      },
      getRootElement: () => document.documentElement,
      classNamesPrefix: "mantine",
      cssVariablesSelector: ":root",
      withStaticClasses: !1,
      headless: !0,
      env: i
    },
    children: /* @__PURE__ */ (0, g.jsx)(Ym, {
      theme: o,
      children: a
    })
  });
}
dE.displayName = "@mantine/core/HeadlessMantineProvider";
function ue(a, o, i) {
  const l = Pn(), c = (Array.isArray(a) ? a : [a]).filter(Boolean);
  let d = {};
  for (const f of c) {
    const m = l.components[f]?.defaultProps, v = typeof m == "function" ? m(l) : m;
    v && (d = {
      ...d,
      ...v
    });
  }
  return {
    ...o,
    ...d,
    ...jm(i)
  };
}
function Tl({ classNames: a, styles: o, props: i, stylesCtx: l }) {
  const c = Pn();
  return {
    resolvedClassNames: a === void 0 ? void 0 : bl({
      theme: c,
      classNames: a,
      props: i,
      stylesCtx: l || void 0
    }),
    resolvedStyles: o === void 0 ? void 0 : Rc({
      theme: c,
      styles: o,
      props: i,
      stylesCtx: l || void 0
    })
  };
}
var fE = {
  always: "mantine-focus-always",
  auto: "mantine-focus-auto",
  never: "mantine-focus-never"
};
function mE({ theme: a, options: o, unstyled: i }) {
  return qt(o?.focusable && !i && (a.focusClassName || fE[a.focusRing]), o?.active && !i && a.activeClassName);
}
function hE({ selector: a, stylesCtx: o, options: i, props: l, theme: c }) {
  return bl({
    theme: c,
    classNames: i?.classNames,
    props: i?.props || l,
    stylesCtx: o
  })[a];
}
function vE({ selector: a, stylesCtx: o, theme: i, classNames: l, props: c }) {
  return bl({
    theme: i,
    classNames: l,
    props: c,
    stylesCtx: o
  })[a];
}
function pE({ rootSelector: a, selector: o, className: i }) {
  return a === o ? i : void 0;
}
function gE({ selector: a, classes: o, unstyled: i }) {
  return i ? void 0 : o[a];
}
function yE({ themeName: a, classNamesPrefix: o, selector: i, withStaticClass: l }) {
  return l === !1 ? [] : a.map((c) => `${o}-${c}-${i}`);
}
function bE({ options: a, classes: o, selector: i, unstyled: l }) {
  return a?.variant && !l ? o[`${i}--${a.variant}`] : void 0;
}
function SE({ theme: a, options: o, themeName: i, selector: l, classNamesPrefix: c, resolvedClassNames: d, resolvedThemeClassNames: f, classes: m, unstyled: v, className: y, rootSelector: x, props: b, stylesCtx: p, withStaticClasses: w, headless: A, transformedStyles: C }) {
  return qt(mE({
    theme: a,
    options: o,
    unstyled: v || A
  }), f.map((T) => T[l]), bE({
    options: o,
    classes: m,
    selector: l,
    unstyled: v || A
  }), d[l], vE({
    selector: l,
    stylesCtx: p,
    theme: a,
    classNames: C,
    props: b
  }), hE({
    selector: l,
    stylesCtx: p,
    options: o,
    props: b,
    theme: a
  }), pE({
    rootSelector: x,
    selector: l,
    className: y
  }), gE({
    selector: l,
    classes: m,
    unstyled: v || A
  }), w && !A && yE({
    themeName: i,
    classNamesPrefix: c,
    selector: l,
    withStaticClass: o?.withStaticClass
  }), o?.className);
}
function Gm({ style: a, theme: o }) {
  return Array.isArray(a) ? a.reduce((i, l) => ({
    ...i,
    ...Gm({
      style: l,
      theme: o
    })
  }), {}) : typeof a == "function" ? a(o) : a ?? {};
}
function wE({ theme: a, selector: o, options: i, props: l, stylesCtx: c, rootSelector: d, withStylesTransform: f, resolvedStyles: m, resolvedThemeStyles: v, resolvedVars: y, resolvedRootStyle: x }) {
  return {
    ...v[o],
    ...m[o],
    ...!f && Rc({
      theme: a,
      styles: i?.styles,
      props: i?.props || l,
      stylesCtx: c
    })[o],
    ...y[o],
    ...d === o ? x : null,
    ...Gm({
      style: i?.style,
      theme: a
    })
  };
}
function xE(a) {
  return a.reduce((o, i) => (i && Object.keys(i).forEach((l) => {
    o[l] = {
      ...o[l],
      ...jm(i[l])
    };
  }), o), {});
}
function CE({ props: a, stylesCtx: o, themeName: i, theme: l }) {
  const c = Z2()?.();
  return {
    getTransformedStyles: (f) => c ? [...f.map((m) => c(m, {
      props: a,
      theme: l,
      ctx: o
    })), ...i.map((m) => c(l.components[m]?.styles, {
      props: a,
      theme: l,
      ctx: o
    }))].filter(Boolean) : [],
    withStylesTransform: !!c
  };
}
function ke({ name: a, classes: o, props: i, stylesCtx: l, className: c, style: d, rootSelector: f = "root", unstyled: m, classNames: v, styles: y, vars: x, varsResolver: b, attributes: p }) {
  const w = Pn(), A = I2(), C = X2(), T = Q2(), R = (Array.isArray(a) ? a : [a]).filter((X) => X), { withStylesTransform: O, getTransformedStyles: _ } = CE({
    props: i,
    stylesCtx: l,
    themeName: R,
    theme: w
  }), j = bl({
    theme: w,
    classNames: v,
    props: i,
    stylesCtx: l
  }), L = R.map((X) => bl({
    theme: w,
    classNames: w.components[X]?.classNames,
    props: i,
    stylesCtx: l
  })), z = O ? {} : Rc({
    theme: w,
    styles: y,
    props: i,
    stylesCtx: l
  }), $ = {};
  if (!O) for (const X of R) {
    const oe = Rc({
      theme: w,
      styles: w.components[X]?.styles,
      props: i,
      stylesCtx: l
    });
    for (const re of Object.keys(oe)) $[re] = {
      ...$[re],
      ...oe[re]
    };
  }
  const k = xE([
    T ? {} : b?.(w, i, l),
    ...R.map((X) => w.components?.[X]?.vars?.(w, i, l)),
    x?.(w, i, l)
  ]), Q = Gm({
    style: d,
    theme: w
  });
  return (X, oe) => ({
    ...p?.[X],
    className: SE({
      theme: w,
      options: oe,
      themeName: R,
      selector: X,
      classNamesPrefix: A,
      resolvedClassNames: j,
      resolvedThemeClassNames: L,
      classes: o,
      unstyled: m,
      className: c,
      rootSelector: f,
      props: i,
      stylesCtx: l,
      withStaticClasses: C,
      headless: T,
      transformedStyles: _([oe?.styles, y])
    }),
    style: wE({
      theme: w,
      selector: X,
      options: oe,
      props: i,
      stylesCtx: l,
      rootSelector: f,
      withStylesTransform: O,
      resolvedStyles: z,
      resolvedThemeStyles: $,
      resolvedVars: k,
      resolvedRootStyle: Q
    })
  });
}
function gl(a) {
  return ca(a).reduce((o, i) => a[i] !== void 0 ? `${o}${o2(i)}:${a[i]};` : o, "").trim();
}
function EE({ selector: a, styles: o, media: i, container: l }) {
  const c = o ? gl(o) : "", d = Array.isArray(i) ? i.map((m) => `@media${m.query}{${a}{${gl(m.styles)}}}`) : [], f = Array.isArray(l) ? l.map((m) => `@container ${m.query}{${a}{${gl(m.styles)}}}`) : [];
  return `${c ? `${a}{${c}}` : ""}${d.join("")}${f.join("")}`.trim();
}
function AE(a) {
  let o = 5381;
  for (let i = 0; i < a.length; i++) o = (o << 5) + o + a.charCodeAt(i) & 4294967295;
  return (o >>> 0).toString(36);
}
function TE({ deduplicate: a, ...o }) {
  const i = Um(), l = EE(o);
  return a ? /* @__PURE__ */ (0, g.jsx)("style", {
    href: `mantine-${AE(l)}`,
    precedence: "mantine",
    nonce: i?.(),
    children: l
  }) : /* @__PURE__ */ (0, g.jsx)("style", {
    "data-mantine-styles": "inline",
    nonce: i?.(),
    dangerouslySetInnerHTML: { __html: l }
  });
}
function RE(a) {
  let o = 5381;
  for (let i = 0; i < a.length; i++) o = (o << 5) + o + a.charCodeAt(i) & 4294967295;
  return (o >>> 0).toString(36);
}
function _E(a, o) {
  return `__mdi__-${RE(`${a ? gl(a) : ""}|${Array.isArray(o) ? o.map((i) => `${i.query}:${gl(i.styles)}`).join("|") : ""}`)}`;
}
function ui(a) {
  const { m: o, mx: i, my: l, mt: c, mb: d, ml: f, mr: m, me: v, ms: y, mis: x, mie: b, p, px: w, py: A, pt: C, pb: T, pl: R, pr: O, pe: _, ps: j, pis: L, pie: z, bd: $, bdrs: k, bg: Q, c: X, opacity: oe, ff: re, fz: ne, fw: F, lts: me, ta: H, lh: I, fs: W, tt: Z, td: ae, w: be, miw: de, maw: we, h: Ae, mih: M, mah: K, bgsz: se, bgp: le, bgr: he, bga: ie, pos: ye, top: ce, left: ve, bottom: V, right: pe, inset: Te, display: je, flex: Be, hiddenFrom: Oe, visibleFrom: rt, lightHidden: dt, darkHidden: wt, sx: Nt, ...$e } = a;
  return {
    styleProps: jm({
      m: o,
      mx: i,
      my: l,
      mt: c,
      mb: d,
      ml: f,
      mr: m,
      me: v,
      ms: y,
      mis: x,
      mie: b,
      p,
      px: w,
      py: A,
      pt: C,
      pb: T,
      pl: R,
      pr: O,
      pis: L,
      pie: z,
      pe: _,
      ps: j,
      bd: $,
      bg: Q,
      c: X,
      opacity: oe,
      ff: re,
      fz: ne,
      fw: F,
      lts: me,
      ta: H,
      lh: I,
      fs: W,
      tt: Z,
      td: ae,
      w: be,
      miw: de,
      maw: we,
      h: Ae,
      mih: M,
      mah: K,
      bgsz: se,
      bgp: le,
      bgr: he,
      bga: ie,
      pos: ye,
      top: ce,
      left: ve,
      bottom: V,
      right: pe,
      inset: Te,
      display: je,
      flex: Be,
      bdrs: k,
      hiddenFrom: Oe,
      visibleFrom: rt,
      lightHidden: dt,
      darkHidden: wt,
      sx: Nt
    }),
    rest: $e
  };
}
var NE = {
  m: {
    type: "spacing",
    property: "margin"
  },
  mt: {
    type: "spacing",
    property: "marginTop"
  },
  mb: {
    type: "spacing",
    property: "marginBottom"
  },
  ml: {
    type: "spacing",
    property: "marginLeft"
  },
  mr: {
    type: "spacing",
    property: "marginRight"
  },
  ms: {
    type: "spacing",
    property: "marginInlineStart"
  },
  me: {
    type: "spacing",
    property: "marginInlineEnd"
  },
  mis: {
    type: "spacing",
    property: "marginInlineStart"
  },
  mie: {
    type: "spacing",
    property: "marginInlineEnd"
  },
  mx: {
    type: "spacing",
    property: "marginInline"
  },
  my: {
    type: "spacing",
    property: "marginBlock"
  },
  p: {
    type: "spacing",
    property: "padding"
  },
  pt: {
    type: "spacing",
    property: "paddingTop"
  },
  pb: {
    type: "spacing",
    property: "paddingBottom"
  },
  pl: {
    type: "spacing",
    property: "paddingLeft"
  },
  pr: {
    type: "spacing",
    property: "paddingRight"
  },
  ps: {
    type: "spacing",
    property: "paddingInlineStart"
  },
  pe: {
    type: "spacing",
    property: "paddingInlineEnd"
  },
  pis: {
    type: "spacing",
    property: "paddingInlineStart"
  },
  pie: {
    type: "spacing",
    property: "paddingInlineEnd"
  },
  px: {
    type: "spacing",
    property: "paddingInline"
  },
  py: {
    type: "spacing",
    property: "paddingBlock"
  },
  bd: {
    type: "border",
    property: "border"
  },
  bdrs: {
    type: "radius",
    property: "borderRadius"
  },
  bg: {
    type: "color",
    property: "background"
  },
  c: {
    type: "textColor",
    property: "color"
  },
  opacity: {
    type: "identity",
    property: "opacity"
  },
  ff: {
    type: "fontFamily",
    property: "fontFamily"
  },
  fz: {
    type: "fontSize",
    property: "fontSize"
  },
  fw: {
    type: "identity",
    property: "fontWeight"
  },
  lts: {
    type: "size",
    property: "letterSpacing"
  },
  ta: {
    type: "identity",
    property: "textAlign"
  },
  lh: {
    type: "lineHeight",
    property: "lineHeight"
  },
  fs: {
    type: "identity",
    property: "fontStyle"
  },
  tt: {
    type: "identity",
    property: "textTransform"
  },
  td: {
    type: "identity",
    property: "textDecoration"
  },
  w: {
    type: "spacing",
    property: "width"
  },
  miw: {
    type: "spacing",
    property: "minWidth"
  },
  maw: {
    type: "spacing",
    property: "maxWidth"
  },
  h: {
    type: "spacing",
    property: "height"
  },
  mih: {
    type: "spacing",
    property: "minHeight"
  },
  mah: {
    type: "spacing",
    property: "maxHeight"
  },
  bgsz: {
    type: "size",
    property: "backgroundSize"
  },
  bgp: {
    type: "identity",
    property: "backgroundPosition"
  },
  bgr: {
    type: "identity",
    property: "backgroundRepeat"
  },
  bga: {
    type: "identity",
    property: "backgroundAttachment"
  },
  pos: {
    type: "identity",
    property: "position"
  },
  top: {
    type: "size",
    property: "top"
  },
  left: {
    type: "size",
    property: "left"
  },
  bottom: {
    type: "size",
    property: "bottom"
  },
  right: {
    type: "size",
    property: "right"
  },
  inset: {
    type: "size",
    property: "inset"
  },
  display: {
    type: "identity",
    property: "display"
  },
  flex: {
    type: "identity",
    property: "flex"
  }
};
function Wm(a, o) {
  const i = va({
    color: a,
    theme: o
  });
  return i.color === "dimmed" ? "var(--mantine-color-dimmed)" : i.color === "bright" ? "var(--mantine-color-bright)" : i.variable ? `var(${i.variable})` : i.color;
}
function jE(a, o) {
  const i = va({
    color: a,
    theme: o
  });
  return i.isThemeColor && i.shade === void 0 ? `var(--mantine-color-${i.color}-text)` : Wm(a, o);
}
function OE(a, o) {
  if (typeof a == "number") return te(a);
  if (typeof a == "string") {
    const [i, l, ...c] = a.split(" ").filter((f) => f.trim() !== "");
    let d = `${te(i)}`;
    return l && (d += ` ${l}`), c.length > 0 && (d += ` ${Wm(c.join(" "), o)}`), d.trim();
  }
  return a;
}
var cy = {
  text: "var(--mantine-font-family)",
  mono: "var(--mantine-font-family-monospace)",
  monospace: "var(--mantine-font-family-monospace)",
  heading: "var(--mantine-font-family-headings)",
  headings: "var(--mantine-font-family-headings)"
};
function ME(a) {
  return typeof a == "string" && a in cy ? cy[a] : a;
}
var zE = [
  "h1",
  "h2",
  "h3",
  "h4",
  "h5",
  "h6"
];
function DE(a, o) {
  return typeof a == "string" && a in o.fontSizes ? `var(--mantine-font-size-${a})` : typeof a == "string" && zE.includes(a) ? `var(--mantine-${a}-font-size)` : typeof a == "number" || typeof a == "string" ? te(a) : a;
}
function kE(a) {
  return a;
}
var LE = [
  "h1",
  "h2",
  "h3",
  "h4",
  "h5",
  "h6"
];
function HE(a, o) {
  return typeof a == "string" && a in o.lineHeights ? `var(--mantine-line-height-${a})` : typeof a == "string" && LE.includes(a) ? `var(--mantine-${a}-line-height)` : a;
}
function BE(a, o) {
  return typeof a == "string" && a in o.radius ? `var(--mantine-radius-${a})` : typeof a == "number" || typeof a == "string" ? te(a) : a;
}
function UE(a) {
  return typeof a == "number" ? te(a) : a;
}
function qE(a, o) {
  if (typeof a == "number") return te(a);
  if (typeof a == "string") {
    const i = a.replace("-", "");
    if (!(i in o.spacing)) return te(a);
    const l = `--mantine-spacing-${i}`;
    return a.startsWith("-") ? `calc(var(${l}) * -1)` : `var(${l})`;
  }
  return a;
}
var Wf = {
  color: Wm,
  textColor: jE,
  fontSize: DE,
  spacing: qE,
  radius: BE,
  identity: kE,
  size: UE,
  lineHeight: HE,
  fontFamily: ME,
  border: OE
};
function uy(a) {
  return a.replace("(min-width: ", "").replace("em)", "");
}
function VE({ media: a, ...o }) {
  const i = Object.keys(a).sort((l, c) => Number(uy(l)) - Number(uy(c))).map((l) => ({
    query: l,
    styles: a[l]
  }));
  return {
    ...o,
    media: i
  };
}
function $E(a) {
  if (typeof a != "object" || a === null) return !1;
  const o = Object.keys(a);
  return !(o.length === 1 && o[0] === "base");
}
function YE(a) {
  return typeof a == "object" && a !== null ? "base" in a ? a.base : void 0 : a;
}
function GE(a) {
  return typeof a == "object" && a !== null ? ca(a).filter((o) => o !== "base") : [];
}
function WE(a, o) {
  return typeof a == "object" && a !== null && o in a ? a[o] : a;
}
function PE({ styleProps: a, data: o, theme: i }) {
  return VE(ca(a).reduce((l, c) => {
    if (c === "hiddenFrom" || c === "visibleFrom" || c === "sx") return l;
    const d = o[c], f = Array.isArray(d.property) ? d.property : [d.property], m = YE(a[c]);
    if (!$E(a[c]))
      return f.forEach((y) => {
        l.inlineStyles[y] = Wf[d.type](m, i);
      }), l;
    l.hasResponsiveStyles = !0;
    const v = GE(a[c]);
    return f.forEach((y) => {
      m != null && (l.styles[y] = Wf[d.type](m, i)), v.forEach((x) => {
        const b = `(min-width: ${i.breakpoints[x]})`;
        l.media[b] = {
          ...l.media[b],
          [y]: Wf[d.type](WE(a[c], x), i)
        };
      });
    }), l;
  }, {
    hasResponsiveStyles: !1,
    styles: {},
    inlineStyles: {},
    media: {}
  }));
}
function IE() {
  return `__m__-${(0, S.useId)().replace(/[:«»]/g, "")}`;
}
function XE(a) {
  return a;
}
var QE = XE;
function hb(a) {
  return a;
}
function Ce(a) {
  const o = a;
  return o.extend = hb, o.withProps = (i) => {
    const l = (c) => /* @__PURE__ */ (0, g.jsx)(o, {
      ...i,
      ...c
    });
    return l.extend = o.extend, l.displayName = `WithProps(${o.displayName})`, l;
  }, o;
}
function kc(a) {
  return Ce(a);
}
function In(a) {
  const o = a;
  return o.withProps = (i) => {
    const l = (c) => /* @__PURE__ */ (0, g.jsx)(o, {
      ...i,
      ...c
    });
    return l.extend = o.extend, l.displayName = `WithProps(${o.displayName})`, l;
  }, o.extend = hb, o;
}
function vb(a) {
  return `data-${(a.startsWith("data-") ? a.slice(5) : a).replace(/([a-z])([A-Z])/g, "$1-$2").toLowerCase()}`;
}
function KE(a) {
  return Object.keys(a).reduce((o, i) => {
    const l = a[i];
    return l === void 0 || l === "" || l === !1 || l === null || (o[vb(i)] = a[i]), o;
  }, {});
}
function pb(a) {
  return a ? typeof a == "string" ? { [vb(a)]: !0 } : Array.isArray(a) ? [...a].reduce((o, i) => ({
    ...o,
    ...pb(i)
  }), {}) : KE(a) : null;
}
function mm(a, o) {
  return Array.isArray(a) ? [...a].reduce((i, l) => ({
    ...i,
    ...mm(l, o)
  }), {}) : typeof a == "function" ? a(o) : a ?? {};
}
function ZE({ theme: a, style: o, vars: i, styleProps: l }) {
  const c = mm(o, a), d = mm(i, a);
  return {
    ...c,
    ...d,
    ...l
  };
}
function gb({ component: a, style: o, __vars: i, className: l, variant: c, mod: d, size: f, hiddenFrom: m, visibleFrom: v, lightHidden: y, darkHidden: x, renderRoot: b, __size: p, ref: w, ...A }) {
  const C = Pn(), T = a || "div", { styleProps: R, rest: O } = ui(A), _ = K2()?.()?.(R.sx), j = IE(), L = PE({
    styleProps: R,
    theme: C,
    data: NE
  }), z = F2(), $ = z && L.hasResponsiveStyles ? _E(L.styles, L.media) : j, k = {
    ref: w,
    style: ZE({
      theme: C,
      style: o,
      vars: i,
      styleProps: L.inlineStyles
    }),
    className: qt(l, _, {
      [$]: L.hasResponsiveStyles,
      "mantine-light-hidden": y,
      "mantine-dark-hidden": x,
      [`mantine-hidden-from-${m}`]: m,
      [`mantine-visible-from-${v}`]: v
    }),
    "data-variant": c,
    "data-size": eb(f) ? void 0 : f || void 0,
    size: p,
    ...pb(d),
    ...O
  };
  return /* @__PURE__ */ (0, g.jsxs)(g.Fragment, { children: [L.hasResponsiveStyles && /* @__PURE__ */ (0, g.jsx)(TE, {
    selector: `.${$}`,
    styles: L.styles,
    media: L.media,
    deduplicate: z
  }), typeof b == "function" ? b(k) : /* @__PURE__ */ (0, g.jsx)(T, { ...k })] });
}
gb.displayName = "@mantine/core/Box";
var xe = QE(gb), FE = (0, S.createContext)({
  dir: "ltr",
  toggleDirection: () => {
  },
  setDirection: () => {
  }
});
function Co() {
  return (0, S.use)(FE);
}
var [JE, kn] = xo("ScrollArea.Root component was not found in tree");
function wo(a, o) {
  const i = (0, S.useEffectEvent)(o);
  So(() => {
    let l = 0;
    if (a) {
      const c = new ResizeObserver(() => {
        cancelAnimationFrame(l), l = window.requestAnimationFrame(i);
      });
      return c.observe(a), () => {
        window.cancelAnimationFrame(l), c.unobserve(a);
      };
    }
  }, [a]);
}
function eA(a) {
  const { style: o, ...i } = a, l = kn(), [c, d] = (0, S.useState)(0), [f, m] = (0, S.useState)(0), v = !!(c && f);
  return wo(l.scrollbarX, () => {
    const y = l.scrollbarX?.offsetHeight || 0;
    l.onCornerHeightChange(y), m(y);
  }), wo(l.scrollbarY, () => {
    const y = l.scrollbarY?.offsetWidth || 0;
    l.onCornerWidthChange(y), d(y);
  }), v ? /* @__PURE__ */ (0, g.jsx)("div", {
    ...i,
    style: {
      ...o,
      width: c,
      height: f
    }
  }) : null;
}
function tA(a) {
  const o = kn(), i = !!(o.scrollbarX && o.scrollbarY);
  return o.type !== "scroll" && i ? /* @__PURE__ */ (0, g.jsx)(eA, { ...a }) : null;
}
var nA = {
  scrollHideDelay: 1e3,
  type: "hover"
};
function yb(a) {
  const { type: o, scrollHideDelay: i, scrollbars: l, getStyles: c, ref: d, ...f } = ue("ScrollAreaRoot", nA, a), [m, v] = (0, S.useState)(null), [y, x] = (0, S.useState)(null), [b, p] = (0, S.useState)(null), [w, A] = (0, S.useState)(null), [C, T] = (0, S.useState)(null), [R, O] = (0, S.useState)(0), [_, j] = (0, S.useState)(0), [L, z] = (0, S.useState)(!1), [$, k] = (0, S.useState)(!1), Q = ct(d, v);
  return /* @__PURE__ */ (0, g.jsx)(JE, {
    value: {
      type: o,
      scrollHideDelay: i,
      scrollArea: m,
      viewport: y,
      onViewportChange: x,
      content: b,
      onContentChange: p,
      scrollbarX: w,
      onScrollbarXChange: A,
      scrollbarXEnabled: L,
      onScrollbarXEnabledChange: z,
      scrollbarY: C,
      onScrollbarYChange: T,
      scrollbarYEnabled: $,
      onScrollbarYEnabledChange: k,
      onCornerWidthChange: O,
      onCornerHeightChange: j,
      getStyles: c
    },
    children: /* @__PURE__ */ (0, g.jsx)(xe, {
      ...f,
      ref: Q,
      __vars: {
        "--sa-corner-width": l !== "xy" ? "0px" : `${R}px`,
        "--sa-corner-height": l !== "xy" ? "0px" : `${_}px`
      }
    })
  });
}
yb.displayName = "@mantine/core/ScrollAreaRoot";
function bb(a, o) {
  const i = a / o;
  return Number.isNaN(i) ? 0 : i;
}
function Lc(a) {
  const o = bb(a.viewport, a.content), i = a.scrollbar.paddingStart + a.scrollbar.paddingEnd, l = (a.scrollbar.size - i) * o;
  return Math.max(l, 18);
}
function Sb(a, o) {
  return (i) => {
    if (a[0] === a[1] || o[0] === o[1]) return o[0];
    const l = (o[1] - o[0]) / (a[1] - a[0]);
    return o[0] + l * (i - a[0]);
  };
}
function aA(a, [o, i]) {
  return Math.min(i, Math.max(o, a));
}
function dy(a, o, i = "ltr") {
  const l = Lc(o), c = o.scrollbar.paddingStart + o.scrollbar.paddingEnd, d = o.scrollbar.size - c, f = o.content - o.viewport, m = d - l, v = aA(a, i === "ltr" ? [0, f] : [f * -1, 0]);
  return Sb([0, f], [0, m])(v);
}
function oA(a, o, i, l = "ltr") {
  const c = Lc(i), d = c / 2, f = o || d, m = c - f, v = i.scrollbar.paddingStart + f, y = i.scrollbar.size - i.scrollbar.paddingEnd - m, x = i.content - i.viewport, b = l === "ltr" ? [0, x] : [x * -1, 0];
  return Sb([v, y], b)(a);
}
function wb(a, o) {
  return a > 0 && a < o;
}
function go(a) {
  return a ? parseInt(a, 10) : 0;
}
function nr(a, o, { checkForDefaultPrevented: i = !0 } = {}) {
  return (l) => {
    a?.(l), (i === !1 || !l.defaultPrevented) && o?.(l);
  };
}
var [rA, xb] = xo("ScrollAreaScrollbar was not found in tree");
function Cb(a) {
  const { sizes: o, hasThumb: i, onThumbChange: l, onThumbPointerUp: c, onThumbPointerDown: d, onThumbPositionChange: f, onDragScroll: m, onWheelScroll: v, onResize: y, ref: x, ...b } = a, p = kn(), [w, A] = (0, S.useState)(null), C = ct(x, A), T = (0, S.useRef)(null), R = (0, S.useRef)(""), { viewport: O } = p, _ = o.content - o.viewport, j = (0, S.useEffectEvent)(v), L = oi(f), z = Dc(y, 10), $ = (k) => {
    if (T.current) {
      const Q = k.clientX - T.current.left, X = k.clientY - T.current.top;
      m({
        x: Q,
        y: X
      });
    }
  };
  return (0, S.useEffect)(() => {
    const k = (Q) => {
      const X = Q.target;
      w?.contains(X) && j(Q, _);
    };
    return document.addEventListener("wheel", k, { passive: !1 }), () => document.removeEventListener("wheel", k, { passive: !1 });
  }, [
    O,
    w,
    _
  ]), (0, S.useEffect)(L, [o, L]), wo(w, z), wo(p.content, z), /* @__PURE__ */ (0, g.jsx)(rA, {
    value: {
      scrollbar: w,
      hasThumb: i,
      onThumbChange: oi(l),
      onThumbPointerUp: oi(c),
      onThumbPositionChange: L,
      onThumbPointerDown: oi(d)
    },
    children: /* @__PURE__ */ (0, g.jsx)("div", {
      ...b,
      ref: C,
      "data-mantine-scrollbar": !0,
      style: {
        position: "absolute",
        ...b.style
      },
      onPointerDown: nr(a.onPointerDown, (k) => {
        k.preventDefault(), k.button === 0 && (k.target.setPointerCapture(k.pointerId), T.current = w.getBoundingClientRect(), R.current = document.body.style.webkitUserSelect, document.body.style.webkitUserSelect = "none", $(k));
      }),
      onPointerMove: nr(a.onPointerMove, $),
      onPointerUp: nr(a.onPointerUp, (k) => {
        const Q = k.target;
        Q.hasPointerCapture(k.pointerId) && (k.preventDefault(), Q.releasePointerCapture(k.pointerId));
      }),
      onLostPointerCapture: () => {
        document.body.style.webkitUserSelect = R.current, T.current = null;
      }
    })
  });
}
var Eb = (a) => {
  const { sizes: o, onSizesChange: i, style: l, ref: c, ...d } = a, f = kn(), [m, v] = (0, S.useState)(), y = (0, S.useRef)(null), x = ct(c, y, f.onScrollbarXChange);
  return (0, S.useEffect)(() => {
    y.current && v(getComputedStyle(y.current));
  }, [y]), /* @__PURE__ */ (0, g.jsx)(Cb, {
    "data-orientation": "horizontal",
    ...d,
    ref: x,
    sizes: o,
    style: {
      ...l,
      "--sa-thumb-width": `${Lc(o)}px`
    },
    onThumbPointerDown: (b) => a.onThumbPointerDown(b.x),
    onDragScroll: (b) => a.onDragScroll(b.x),
    onWheelScroll: (b, p) => {
      if (f.viewport) {
        const w = f.viewport.scrollLeft + b.deltaX;
        a.onWheelScroll(w), wb(w, p) && b.preventDefault();
      }
    },
    onResize: () => {
      y.current && f.viewport && m && i({
        content: f.viewport.scrollWidth,
        viewport: f.viewport.offsetWidth,
        scrollbar: {
          size: y.current.clientWidth,
          paddingStart: go(m.paddingLeft),
          paddingEnd: go(m.paddingRight)
        }
      });
    }
  });
};
Eb.displayName = "@mantine/core/ScrollAreaScrollbarX";
function Ab(a) {
  const { sizes: o, onSizesChange: i, style: l, ref: c, ...d } = a, f = kn(), [m, v] = (0, S.useState)(), y = (0, S.useRef)(null), x = ct(c, y, f.onScrollbarYChange);
  return (0, S.useEffect)(() => {
    y.current && v(window.getComputedStyle(y.current));
  }, []), /* @__PURE__ */ (0, g.jsx)(Cb, {
    ...d,
    "data-orientation": "vertical",
    ref: x,
    sizes: o,
    style: {
      "--sa-thumb-height": `${Lc(o)}px`,
      ...l
    },
    onThumbPointerDown: (b) => a.onThumbPointerDown(b.y),
    onDragScroll: (b) => a.onDragScroll(b.y),
    onWheelScroll: (b, p) => {
      if (f.viewport) {
        const w = f.viewport.scrollTop + b.deltaY;
        a.onWheelScroll(w), wb(w, p) && b.preventDefault();
      }
    },
    onResize: () => {
      y.current && f.viewport && m && i({
        content: f.viewport.scrollHeight,
        viewport: f.viewport.offsetHeight,
        scrollbar: {
          size: y.current.clientHeight,
          paddingStart: go(m.paddingTop),
          paddingEnd: go(m.paddingBottom)
        }
      });
    }
  });
}
Ab.displayName = "@mantine/core/ScrollAreaScrollbarY";
function Hc(a) {
  const { orientation: o = "vertical", ...i } = a, { dir: l } = Co(), c = kn(), d = (0, S.useRef)(null), f = (0, S.useRef)(0), [m, v] = (0, S.useState)({
    content: 0,
    viewport: 0,
    scrollbar: {
      size: 0,
      paddingStart: 0,
      paddingEnd: 0
    }
  }), y = bb(m.viewport, m.content), x = {
    ...i,
    sizes: m,
    onSizesChange: v,
    hasThumb: y > 0 && y < 1,
    onThumbChange: (p) => {
      d.current = p;
    },
    onThumbPointerUp: () => {
      f.current = 0;
    },
    onThumbPointerDown: (p) => {
      f.current = p;
    }
  }, b = (p, w) => oA(p, f.current, m, w);
  return o === "horizontal" ? /* @__PURE__ */ (0, g.jsx)(Eb, {
    ...x,
    onThumbPositionChange: () => {
      if (c.viewport && d.current) {
        const p = c.viewport.scrollLeft, w = dy(p, m, l);
        d.current.style.transform = `translate3d(${w}px, 0, 0)`;
      }
    },
    onWheelScroll: (p) => {
      c.viewport && (c.viewport.scrollLeft = p);
    },
    onDragScroll: (p) => {
      c.viewport && (c.viewport.scrollLeft = b(p, l));
    }
  }) : o === "vertical" ? /* @__PURE__ */ (0, g.jsx)(Ab, {
    ...x,
    onThumbPositionChange: () => {
      if (c.viewport && d.current) {
        const p = c.viewport.scrollTop, w = dy(p, m);
        m.scrollbar.size === 0 ? d.current.style.setProperty("--thumb-opacity", "0") : d.current.style.setProperty("--thumb-opacity", "1"), d.current.style.transform = `translate3d(0, ${w}px, 0)`;
      }
    },
    onWheelScroll: (p) => {
      c.viewport && (c.viewport.scrollTop = p);
    },
    onDragScroll: (p) => {
      c.viewport && (c.viewport.scrollTop = b(p));
    }
  }) : null;
}
Hc.displayName = "@mantine/core/ScrollAreaScrollbarVisible";
function Pm(a) {
  const o = kn(), { forceMount: i, ...l } = a, [c, d] = (0, S.useState)(!1), f = a.orientation === "horizontal", m = Dc(() => {
    if (o.viewport) {
      const v = o.viewport.offsetWidth < o.viewport.scrollWidth, y = o.viewport.offsetHeight < o.viewport.scrollHeight;
      d(f ? v : y);
    }
  }, 10);
  return wo(o.viewport, m), wo(o.content, m), i || c ? /* @__PURE__ */ (0, g.jsx)(Hc, {
    "data-state": c ? "visible" : "hidden",
    ...l
  }) : null;
}
Pm.displayName = "@mantine/core/ScrollAreaScrollbarAuto";
function Tb(a) {
  const { forceMount: o, ...i } = a, l = kn(), [c, d] = (0, S.useState)(!1);
  return (0, S.useEffect)(() => {
    const { scrollArea: f } = l;
    let m = 0;
    if (f) {
      const v = () => {
        window.clearTimeout(m), d(!0);
      }, y = () => {
        m = window.setTimeout(() => d(!1), l.scrollHideDelay);
      };
      return f.addEventListener("pointerenter", v), f.addEventListener("pointerleave", y), () => {
        window.clearTimeout(m), f.removeEventListener("pointerenter", v), f.removeEventListener("pointerleave", y);
      };
    }
  }, [l.scrollArea, l.scrollHideDelay]), o || c ? /* @__PURE__ */ (0, g.jsx)(Pm, {
    "data-state": c ? "visible" : "hidden",
    ...i
  }) : null;
}
Tb.displayName = "@mantine/core/ScrollAreaScrollbarHover";
function iA(a) {
  const { forceMount: o, ...i } = a, l = kn(), c = a.orientation === "horizontal", [d, f] = (0, S.useState)("hidden"), m = Dc(() => f("idle"), 100);
  return (0, S.useEffect)(() => {
    if (d === "idle") {
      const v = window.setTimeout(() => f("hidden"), l.scrollHideDelay);
      return () => window.clearTimeout(v);
    }
  }, [d, l.scrollHideDelay]), (0, S.useEffect)(() => {
    const { viewport: v } = l, y = c ? "scrollLeft" : "scrollTop";
    if (v) {
      let x = v[y];
      const b = () => {
        const p = v[y];
        x !== p && (f("scrolling"), m()), x = p;
      };
      return v.addEventListener("scroll", b), () => v.removeEventListener("scroll", b);
    }
  }, [
    l.viewport,
    c,
    m
  ]), o || d !== "hidden" ? /* @__PURE__ */ (0, g.jsx)(Hc, {
    "data-state": d === "hidden" ? "hidden" : "visible",
    ...i,
    onPointerEnter: nr(a.onPointerEnter, () => f("interacting")),
    onPointerLeave: nr(a.onPointerLeave, () => f("idle"))
  }) : null;
}
function hm(a) {
  const { forceMount: o, ...i } = a, l = kn(), { onScrollbarXEnabledChange: c, onScrollbarYEnabledChange: d } = l, f = a.orientation === "horizontal";
  return (0, S.useEffect)(() => (f ? c(!0) : d(!0), () => {
    f ? c(!1) : d(!1);
  }), [
    f,
    c,
    d
  ]), l.type === "hover" ? /* @__PURE__ */ (0, g.jsx)(Tb, {
    ...i,
    forceMount: o
  }) : l.type === "scroll" ? /* @__PURE__ */ (0, g.jsx)(iA, {
    ...i,
    forceMount: o
  }) : l.type === "auto" ? /* @__PURE__ */ (0, g.jsx)(Pm, {
    ...i,
    forceMount: o
  }) : l.type === "always" ? /* @__PURE__ */ (0, g.jsx)(Hc, { ...i }) : null;
}
hm.displayName = "@mantine/core/ScrollAreaScrollbar";
function lA(a, o = () => {
}) {
  let i = {
    left: a.scrollLeft,
    top: a.scrollTop
  }, l = 0;
  return (function c() {
    const d = {
      left: a.scrollLeft,
      top: a.scrollTop
    }, f = i.left !== d.left, m = i.top !== d.top;
    (f || m) && o(), i = d, l = window.requestAnimationFrame(c);
  })(), () => window.cancelAnimationFrame(l);
}
function Rb(a) {
  const { style: o, ref: i, ...l } = a, c = kn(), d = xb(), { onThumbPositionChange: f } = d, m = ct(i, d.onThumbChange), v = (0, S.useRef)(void 0), y = Dc(() => {
    v.current && (v.current(), v.current = void 0);
  }, 100);
  return (0, S.useEffect)(() => {
    const { viewport: x } = c;
    if (x) {
      const b = () => {
        if (y(), !v.current) {
          const p = lA(x, f);
          v.current = p, f();
        }
      };
      return f(), x.addEventListener("scroll", b), () => x.removeEventListener("scroll", b);
    }
  }, [
    c.viewport,
    y,
    f
  ]), /* @__PURE__ */ (0, g.jsx)("div", {
    "data-state": d.hasThumb ? "visible" : "hidden",
    ...l,
    ref: m,
    style: {
      width: "var(--sa-thumb-width)",
      height: "var(--sa-thumb-height)",
      ...o
    },
    onPointerDownCapture: nr(a.onPointerDownCapture, (x) => {
      const b = x.target.getBoundingClientRect(), p = x.clientX - b.left, w = x.clientY - b.top;
      d.onThumbPointerDown({
        x: p,
        y: w
      });
    }),
    onPointerUp: nr(a.onPointerUp, d.onThumbPointerUp)
  });
}
Rb.displayName = "@mantine/core/ScrollAreaThumb";
function vm(a) {
  const { forceMount: o, ...i } = a, l = xb();
  return o || l.hasThumb ? /* @__PURE__ */ (0, g.jsx)(Rb, { ...i }) : null;
}
vm.displayName = "@mantine/core/ScrollAreaThumb";
function _b({ children: a, style: o, ref: i, onWheel: l, ...c }) {
  const d = kn(), f = ct(i, d.onViewportChange), m = (v) => {
    if (l?.(v), d.scrollbarXEnabled && d.viewport && v.shiftKey) {
      const { scrollTop: y, scrollHeight: x, clientHeight: b, scrollWidth: p, clientWidth: w } = d.viewport, A = y < 1, C = y >= x - b - 1;
      p > w && (A || C) && v.stopPropagation();
    }
  };
  return /* @__PURE__ */ (0, g.jsx)(xe, {
    ...c,
    ref: f,
    onWheel: m,
    "data-scrollarea-viewport": !0,
    style: {
      overflowX: d.scrollbarXEnabled ? "scroll" : "hidden",
      overflowY: d.scrollbarYEnabled ? "scroll" : "hidden",
      ...o
    },
    children: /* @__PURE__ */ (0, g.jsx)("div", {
      ...d.getStyles("content"),
      ref: d.onContentChange,
      children: a
    })
  });
}
_b.displayName = "@mantine/core/ScrollAreaViewport";
var Im = {
  root: "m_d57069b5",
  content: "m_b1336c6",
  viewport: "m_c0783ff9",
  viewportInner: "m_f8f631dd",
  scrollbar: "m_c44ba933",
  thumb: "m_d8b5e363",
  corner: "m_21657268"
};
function Bc() {
  return typeof window < "u";
}
function di(a) {
  return Nb(a) ? (a.nodeName || "").toLowerCase() : "#document";
}
function on(a) {
  var o;
  return (a == null || (o = a.ownerDocument) == null ? void 0 : o.defaultView) || window;
}
function Ba(a) {
  var o;
  return (o = (Nb(a) ? a.ownerDocument : a.document) || window.document) == null ? void 0 : o.documentElement;
}
function Nb(a) {
  return Bc() ? a instanceof Node || a instanceof on(a).Node : !1;
}
function Lt(a) {
  return Bc() ? a instanceof Element || a instanceof on(a).Element : !1;
}
function Eo(a) {
  return Bc() ? a instanceof HTMLElement || a instanceof on(a).HTMLElement : !1;
}
function _c(a) {
  return !Bc() || typeof ShadowRoot > "u" ? !1 : a instanceof ShadowRoot || a instanceof on(a).ShadowRoot;
}
function Uc(a) {
  const { overflow: o, overflowX: i, overflowY: l, display: c } = ua(a);
  return /auto|scroll|overlay|hidden|clip/.test(o + l + i) && c !== "inline" && c !== "contents";
}
function sA(a) {
  return /^(table|td|th)$/.test(di(a));
}
function qc(a) {
  try {
    if (a.matches(":popover-open")) return !0;
  } catch {
  }
  try {
    return a.matches(":modal");
  } catch {
    return !1;
  }
}
var cA = /transform|translate|scale|rotate|perspective|filter/, uA = /paint|layout|strict|content/, Fo = (a) => !!a && a !== "none", Pf;
function Xm(a) {
  const o = Lt(a) ? ua(a) : a;
  return Fo(o.transform) || Fo(o.translate) || Fo(o.scale) || Fo(o.rotate) || Fo(o.perspective) || !Qm() && (Fo(o.backdropFilter) || Fo(o.filter)) || cA.test(o.willChange || "") || uA.test(o.contain || "");
}
function dA(a) {
  let o = ar(a);
  for (; Eo(o) && !wl(o); ) {
    if (Xm(o)) return o;
    if (qc(o)) return null;
    o = ar(o);
  }
  return null;
}
function Qm() {
  return Pf == null && (Pf = typeof CSS < "u" && CSS.supports && CSS.supports("-webkit-backdrop-filter", "none")), Pf;
}
function wl(a) {
  return /^(html|body|#document)$/.test(di(a));
}
function ua(a) {
  return on(a).getComputedStyle(a);
}
function Vc(a) {
  return Lt(a) ? {
    scrollLeft: a.scrollLeft,
    scrollTop: a.scrollTop
  } : {
    scrollLeft: a.scrollX,
    scrollTop: a.scrollY
  };
}
function ar(a) {
  if (di(a) === "html") return a;
  const o = a.assignedSlot || a.parentNode || _c(a) && a.host || Ba(a);
  return _c(o) ? o.host : o;
}
function jb(a) {
  const o = ar(a);
  return wl(o) ? (a.ownerDocument || a).body : Eo(o) && Uc(o) ? o : jb(o);
}
function xl(a, o, i) {
  var l;
  o === void 0 && (o = []), i === void 0 && (i = !0);
  const c = jb(a), d = c === ((l = a.ownerDocument) == null ? void 0 : l.body), f = on(c);
  if (d) {
    const m = pm(f);
    return o.concat(f, f.visualViewport || [], Uc(c) ? c : [], m && i ? xl(m) : []);
  } else return o.concat(c, xl(c, [], i));
}
function pm(a) {
  return a.parent && Object.getPrototypeOf(a.parent) ? a.frameElement : null;
}
var fA = [
  "top",
  "right",
  "bottom",
  "left"
], Wn = Math.min, zn = Math.max, Nc = Math.round, mc = Math.floor, ka = (a) => ({
  x: a,
  y: a
}), mA = {
  left: "right",
  right: "left",
  bottom: "top",
  top: "bottom"
};
function Ob(a, o, i) {
  return zn(a, Wn(o, i));
}
function da(a, o) {
  return typeof a == "function" ? a(o) : a;
}
function fa(a) {
  return a.split("-")[0];
}
function fi(a) {
  return a.split("-")[1];
}
function Km(a) {
  return a === "x" ? "y" : "x";
}
function Zm(a) {
  return a === "y" ? "height" : "width";
}
function Yn(a) {
  const o = a[0];
  return o === "t" || o === "b" ? "y" : "x";
}
function Fm(a) {
  return Km(Yn(a));
}
function hA(a, o, i) {
  i === void 0 && (i = !1);
  const l = fi(a), c = Fm(a), d = Zm(c);
  let f = c === "x" ? l === (i ? "end" : "start") ? "right" : "left" : l === "start" ? "bottom" : "top";
  return o.reference[d] > o.floating[d] && (f = jc(f)), [f, jc(f)];
}
function vA(a) {
  const o = jc(a);
  return [
    gm(a),
    o,
    gm(o)
  ];
}
function gm(a) {
  return a.includes("start") ? a.replace("start", "end") : a.replace("end", "start");
}
var fy = ["left", "right"], my = ["right", "left"], pA = ["top", "bottom"], gA = ["bottom", "top"];
function yA(a, o, i) {
  switch (a) {
    case "top":
    case "bottom":
      return i ? o ? my : fy : o ? fy : my;
    case "left":
    case "right":
      return o ? pA : gA;
    default:
      return [];
  }
}
function bA(a, o, i, l) {
  const c = fi(a);
  let d = yA(fa(a), i === "start", l);
  return c && (d = d.map((f) => f + "-" + c), o && (d = d.concat(d.map(gm)))), d;
}
function jc(a) {
  const o = fa(a);
  return mA[o] + a.slice(o.length);
}
function SA(a) {
  var o, i, l, c;
  return {
    top: (o = a.top) != null ? o : 0,
    right: (i = a.right) != null ? i : 0,
    bottom: (l = a.bottom) != null ? l : 0,
    left: (c = a.left) != null ? c : 0
  };
}
function Jm(a) {
  return typeof a != "number" ? SA(a) : {
    top: a,
    right: a,
    bottom: a,
    left: a
  };
}
function yo(a) {
  const { x: o, y: i, width: l, height: c } = a;
  return {
    width: l,
    height: c,
    top: i,
    left: o,
    right: o + l,
    bottom: i + c,
    x: o,
    y: i
  };
}
function wA(a, o) {
  if (!a || !o) return !1;
  const i = o.getRootNode == null ? void 0 : o.getRootNode();
  if (a.contains(o)) return !0;
  if (i && _c(i)) {
    let l = o;
    for (; l; ) {
      if (a === l) return !0;
      l = l.parentNode || l.host;
    }
  }
  return !1;
}
function hc(a) {
  return a?.ownerDocument || document;
}
function ym(a, o) {
  const i = ["mouse", "pen"];
  return o || i.push("", void 0), i.includes(a);
}
var li = typeof document < "u" ? S.useLayoutEffect : function() {
}, xA = { ...S };
function vc(a) {
  const o = S.useRef(a);
  return li(() => {
    o.current = a;
  }), o;
}
var CA = xA.useInsertionEffect || ((a) => a());
function pl(a) {
  const o = S.useRef(() => {
  });
  return CA(() => {
    o.current = a;
  }), S.useCallback(function() {
    for (var i = arguments.length, l = new Array(i), c = 0; c < i; c++) l[c] = arguments[c];
    return o.current == null ? void 0 : o.current(...l);
  }, []);
}
function hy(a, o, i) {
  let { reference: l, floating: c } = a;
  const d = Yn(o), f = Fm(o), m = Zm(f), v = fa(o), y = d === "y", x = l.x + l.width / 2 - c.width / 2, b = l.y + l.height / 2 - c.height / 2, p = l[m] / 2 - c[m] / 2;
  let w;
  switch (v) {
    case "top":
      w = {
        x,
        y: l.y - c.height
      };
      break;
    case "bottom":
      w = {
        x,
        y: l.y + l.height
      };
      break;
    case "right":
      w = {
        x: l.x + l.width,
        y: b
      };
      break;
    case "left":
      w = {
        x: l.x - c.width,
        y: b
      };
      break;
    default:
      w = {
        x: l.x,
        y: l.y
      };
  }
  const A = fi(o);
  return A && (w[f] += p * (A === "end" ? 1 : -1) * (i && y ? -1 : 1)), w;
}
async function EA(a, o) {
  var i;
  o === void 0 && (o = {});
  const { x: l, y: c, platform: d, rects: f, elements: m, strategy: v } = a, { boundary: y = "clippingAncestors", rootBoundary: x = "viewport", elementContext: b = "floating", altBoundary: p = !1, padding: w = 0 } = da(o, a), A = Jm(w), C = m[p ? b === "floating" ? "reference" : "floating" : b], T = yo(await d.getClippingRect({
    element: (i = await (d.isElement == null ? void 0 : d.isElement(C))) == null || i ? C : C.contextElement || await (d.getDocumentElement == null ? void 0 : d.getDocumentElement(m.floating)),
    boundary: y,
    rootBoundary: x,
    strategy: v
  })), R = b === "floating" ? {
    x: l,
    y: c,
    width: f.floating.width,
    height: f.floating.height
  } : f.reference, O = await (d.getOffsetParent == null ? void 0 : d.getOffsetParent(m.floating)), _ = await (d.isElement == null ? void 0 : d.isElement(O)) && await (d.getScale == null ? void 0 : d.getScale(O)) || {
    x: 1,
    y: 1
  }, j = yo(d.convertOffsetParentRelativeRectToViewportRelativeRect ? await d.convertOffsetParentRelativeRectToViewportRelativeRect({
    elements: m,
    rect: R,
    offsetParent: O,
    strategy: v
  }) : R);
  return {
    top: (T.top - j.top + A.top) / _.y,
    bottom: (j.bottom - T.bottom + A.bottom) / _.y,
    left: (T.left - j.left + A.left) / _.x,
    right: (j.right - T.right + A.right) / _.x
  };
}
var AA = 50, TA = async (a, o, i) => {
  const { placement: l = "bottom", strategy: c = "absolute", middleware: d = [], platform: f } = i, m = f.detectOverflow ? f : {
    ...f,
    detectOverflow: EA
  }, v = await (f.isRTL == null ? void 0 : f.isRTL(o));
  let y = await f.getElementRects({
    reference: a,
    floating: o,
    strategy: c
  }), { x, y: b } = hy(y, l, v), p = l, w = 0;
  const A = {};
  for (let C = 0; C < d.length; C++) {
    const T = d[C];
    if (!T) continue;
    const { name: R, fn: O } = T, { x: _, y: j, data: L, reset: z } = await O({
      x,
      y: b,
      initialPlacement: l,
      placement: p,
      strategy: c,
      middlewareData: A,
      rects: y,
      platform: m,
      elements: {
        reference: a,
        floating: o
      }
    });
    x = _ ?? x, b = j ?? b, A[R] = {
      ...A[R],
      ...L
    }, z && w < AA && (w++, typeof z == "object" && (z.placement && (p = z.placement), z.rects && (y = z.rects === !0 ? await f.getElementRects({
      reference: a,
      floating: o,
      strategy: c
    }) : z.rects), { x, y: b } = hy(y, p, v)), C = -1);
  }
  return {
    x,
    y: b,
    placement: p,
    strategy: c,
    middlewareData: A
  };
}, RA = (a) => ({
  name: "arrow",
  options: a,
  async fn(o) {
    const { x: i, y: l, placement: c, rects: d, platform: f, elements: m, middlewareData: v } = o, { element: y, padding: x = 0 } = da(a, o) || {};
    if (y == null) return {};
    const b = Jm(x), p = {
      x: i,
      y: l
    }, w = Fm(c), A = Zm(w), C = await f.getDimensions(y), T = w === "y", R = T ? "top" : "left", O = T ? "bottom" : "right", _ = T ? "clientHeight" : "clientWidth", j = d.reference[A] + d.reference[w] - p[w] - d.floating[A], L = p[w] - d.reference[w], z = await (f.getOffsetParent == null ? void 0 : f.getOffsetParent(y));
    let $ = z ? z[_] : 0;
    (!$ || !await (f.isElement == null ? void 0 : f.isElement(z))) && ($ = m.floating[_] || d.floating[A]);
    const k = j / 2 - L / 2, Q = $ / 2 - C[A] / 2 - 1, X = Wn(b[R], Q), oe = Wn(b[O], Q), re = $ - C[A] - oe, ne = $ / 2 - C[A] / 2 + k, F = Ob(X, ne, re), me = !v.arrow && fi(c) != null && ne !== F && d.reference[A] / 2 - (ne < X ? X : oe) - C[A] / 2 < 0, H = me ? ne < X ? ne - X : ne - re : 0;
    return {
      [w]: p[w] + H,
      data: {
        [w]: F,
        centerOffset: ne - F - H,
        ...me && { alignmentOffset: H }
      },
      reset: me
    };
  }
}), _A = function(a) {
  return a === void 0 && (a = {}), {
    name: "flip",
    options: a,
    async fn(o) {
      var i, l;
      const { placement: c, middlewareData: d, rects: f, initialPlacement: m, platform: v, elements: y } = o, { mainAxis: x = !0, crossAxis: b = !0, fallbackPlacements: p, fallbackStrategy: w = "bestFit", fallbackAxisSideDirection: A = "none", flipAlignment: C = !0, ...T } = da(a, o);
      if ((i = d.arrow) != null && i.alignmentOffset) return {};
      const R = fa(c), O = Yn(m), _ = fa(m) === m, j = await (v.isRTL == null ? void 0 : v.isRTL(y.floating)), L = p || (_ || !C ? [jc(m)] : vA(m)), z = A !== "none";
      !p && z && L.push(...bA(m, C, A, j));
      const $ = [m, ...L], k = await v.detectOverflow(o, T), Q = [];
      let X = ((l = d.flip) == null ? void 0 : l.overflows) || [];
      if (x && Q.push(k[R]), b) {
        const F = hA(c, f, j);
        Q.push(k[F[0]], k[F[1]]);
      }
      if (X = [...X, {
        placement: c,
        overflows: Q
      }], !Q.every((F) => F <= 0)) {
        var oe, re;
        const F = (((oe = d.flip) == null ? void 0 : oe.index) || 0) + 1, me = $[F];
        if (me && (!(b === "alignment" && O !== Yn(me)) || X.every((I) => Yn(I.placement) === O ? I.overflows[0] > 0 : !0)))
          return {
            data: {
              index: F,
              overflows: X
            },
            reset: { placement: me }
          };
        let H = (re = X.filter((I) => I.overflows[0] <= 0).sort((I, W) => I.overflows[1] - W.overflows[1])[0]) == null ? void 0 : re.placement;
        if (!H) switch (w) {
          case "bestFit": {
            var ne;
            const I = (ne = X.filter((W) => {
              if (z) {
                const Z = Yn(W.placement);
                return Z === O || Z === "y";
              }
              return !0;
            }).map((W) => [W.placement, W.overflows.filter((Z) => Z > 0).reduce((Z, ae) => Z + ae, 0)]).sort((W, Z) => W[1] - Z[1])[0]) == null ? void 0 : ne[0];
            I && (H = I);
            break;
          }
          case "initialPlacement":
            H = m;
        }
        if (c !== H) return { reset: { placement: H } };
      }
      return {};
    }
  };
};
function vy(a, o) {
  return {
    top: a.top - o.height,
    right: a.right - o.width,
    bottom: a.bottom - o.height,
    left: a.left - o.width
  };
}
function py(a) {
  return fA.some((o) => a[o] >= 0);
}
var NA = function(a) {
  return a === void 0 && (a = {}), {
    name: "hide",
    options: a,
    async fn(o) {
      const { rects: i, platform: l } = o, { strategy: c = "referenceHidden", ...d } = da(a, o);
      switch (c) {
        case "referenceHidden": {
          const f = vy(await l.detectOverflow(o, {
            ...d,
            elementContext: "reference"
          }), i.reference);
          return { data: {
            referenceHiddenOffsets: f,
            referenceHidden: py(f)
          } };
        }
        case "escaped": {
          const f = vy(await l.detectOverflow(o, {
            ...d,
            altBoundary: !0
          }), i.floating);
          return { data: {
            escapedOffsets: f,
            escaped: py(f)
          } };
        }
        default:
          return {};
      }
    }
  };
};
function Mb(a) {
  const o = Wn(...a.map((d) => d.left)), i = Wn(...a.map((d) => d.top)), l = zn(...a.map((d) => d.right)), c = zn(...a.map((d) => d.bottom));
  return {
    x: o,
    y: i,
    width: l - o,
    height: c - i
  };
}
function jA(a) {
  const o = a.slice().sort((c, d) => c.y - d.y), i = [];
  let l = null;
  for (let c = 0; c < o.length; c++) {
    const d = o[c];
    !l || d.y - l.y > l.height / 2 ? i.push([d]) : i[i.length - 1].push(d), l = d;
  }
  return i.map((c) => yo(Mb(c)));
}
var OA = function(a) {
  return a === void 0 && (a = {}), {
    name: "inline",
    options: a,
    async fn(o) {
      const { placement: i, elements: l, rects: c, platform: d, strategy: f } = o, { padding: m = 2, x: v, y } = da(a, o), x = Array.from(await (d.getClientRects == null ? void 0 : d.getClientRects(l.reference)) || []);
      if (!x.length) return {};
      const b = jA(x), p = yo(Mb(x)), w = Jm(m);
      function A() {
        if (b.length === 2 && (b[0].left > b[1].right || b[1].left > b[0].right) && v != null && y != null) return b.find((T) => v > T.left - w.left && v < T.right + w.right && y > T.top - w.top && y < T.bottom + w.bottom) || p;
        if (b.length >= 2) {
          if (Yn(i) === "y") {
            const z = b[0], $ = b[b.length - 1], k = fa(i) === "top", Q = z.top, X = $.bottom, oe = k ? z.left : $.left, re = k ? z.right : $.right;
            return yo({
              x: oe,
              y: Q,
              width: re - oe,
              height: X - Q
            });
          }
          const T = fa(i) === "left", R = zn(...b.map((z) => z.right)), O = Wn(...b.map((z) => z.left)), _ = b.filter((z) => T ? z.left === O : z.right === R), j = _[0].top, L = _[_.length - 1].bottom;
          return yo({
            x: O,
            y: j,
            width: R - O,
            height: L - j
          });
        }
        return p;
      }
      const C = await d.getElementRects({
        reference: { getBoundingClientRect: A },
        floating: l.floating,
        strategy: f
      });
      return c.reference.x !== C.reference.x || c.reference.y !== C.reference.y || c.reference.width !== C.reference.width || c.reference.height !== C.reference.height ? { reset: { rects: C } } : {};
    }
  };
}, zb = /* @__PURE__ */ new Set(["left", "top"]);
async function MA(a, o) {
  const { placement: i, platform: l, elements: c } = a, d = await (l.isRTL == null ? void 0 : l.isRTL(c.floating)), f = fa(i), m = fi(i), v = Yn(i) === "y", y = zb.has(f) ? -1 : 1, x = d && v ? -1 : 1, b = da(o, a);
  let { mainAxis: p, crossAxis: w, alignmentAxis: A } = typeof b == "number" ? {
    mainAxis: b,
    crossAxis: 0,
    alignmentAxis: null
  } : {
    mainAxis: b.mainAxis || 0,
    crossAxis: b.crossAxis || 0,
    alignmentAxis: b.alignmentAxis
  };
  return m && typeof A == "number" && (w = m === "end" ? A * -1 : A), v ? {
    x: w * x,
    y: p * y
  } : {
    x: p * y,
    y: w * x
  };
}
var zA = function(a) {
  return a === void 0 && (a = 0), {
    name: "offset",
    options: a,
    async fn(o) {
      var i, l;
      const { x: c, y: d, placement: f, middlewareData: m } = o, v = await MA(o, a);
      return f === ((i = m.offset) == null ? void 0 : i.placement) && (l = m.arrow) != null && l.alignmentOffset ? {} : {
        x: c + v.x,
        y: d + v.y,
        data: {
          ...v,
          placement: f
        }
      };
    }
  };
}, DA = function(a) {
  return a === void 0 && (a = {}), {
    name: "shift",
    options: a,
    async fn(o) {
      const { x: i, y: l, placement: c, platform: d } = o, { mainAxis: f = !0, crossAxis: m = !1, limiter: v = { fn: (O) => {
        let { x: _, y: j } = O;
        return {
          x: _,
          y: j
        };
      } }, ...y } = da(a, o), x = {
        x: i,
        y: l
      }, b = await d.detectOverflow(o, y), p = Yn(c), w = Km(p);
      let A = x[w], C = x[p];
      const T = (O, _) => Ob(_ + b[O === "y" ? "top" : "left"], _, _ - b[O === "y" ? "bottom" : "right"]);
      f && (A = T(w, A)), m && (C = T(p, C));
      const R = v.fn({
        ...o,
        [w]: A,
        [p]: C
      });
      return {
        ...R,
        data: {
          x: R.x - i,
          y: R.y - l,
          enabled: {
            [w]: f,
            [p]: m
          }
        }
      };
    }
  };
}, kA = function(a) {
  return a === void 0 && (a = {}), {
    options: a,
    fn(o) {
      var i, l;
      const { x: c, y: d, placement: f, rects: m, middlewareData: v } = o, { offset: y = 0, mainAxis: x = !0, crossAxis: b = !0 } = da(a, o), p = {
        x: c,
        y: d
      }, w = Yn(f), A = Km(w);
      let C = p[A], T = p[w];
      const R = da(y, o), O = typeof R == "number" ? {
        mainAxis: R,
        crossAxis: 0
      } : {
        mainAxis: (i = R.mainAxis) != null ? i : 0,
        crossAxis: (l = R.crossAxis) != null ? l : 0
      };
      if (x) {
        const L = A === "y" ? "height" : "width", z = m.reference[A] - m.floating[L] + O.mainAxis, $ = m.reference[A] + m.reference[L] - O.mainAxis;
        C < z ? C = z : C > $ && (C = $);
      }
      if (b) {
        var _, j;
        const L = A === "y" ? "width" : "height", z = zb.has(fa(f)), $ = m.reference[w] - m.floating[L] + (z && ((_ = v.offset) == null ? void 0 : _[w]) || 0) + (z ? 0 : O.crossAxis), k = m.reference[w] + m.reference[L] + (z ? 0 : ((j = v.offset) == null ? void 0 : j[w]) || 0) - (z ? O.crossAxis : 0);
        T < $ ? T = $ : T > k && (T = k);
      }
      return {
        [A]: C,
        [w]: T
      };
    }
  };
}, LA = function(a) {
  return a === void 0 && (a = {}), {
    name: "size",
    options: a,
    async fn(o) {
      const { placement: i, rects: l, platform: c, elements: d } = o, { apply: f = () => {
      }, ...m } = da(a, o), v = await c.detectOverflow(o, m), y = fa(i), x = fi(i), b = Yn(i) === "y", { width: p, height: w } = l.floating;
      let A, C;
      y === "top" || y === "bottom" ? (A = y, C = x === (await (c.isRTL == null ? void 0 : c.isRTL(d.floating)) ? "start" : "end") ? "left" : "right") : (C = y, A = x === "end" ? "top" : "bottom");
      const T = w - v.top - v.bottom, R = p - v.left - v.right, O = Wn(w - v[A], T), _ = Wn(p - v[C], R), j = o.middlewareData.shift, L = !j;
      let z = O, $ = _;
      j != null && j.enabled.x && ($ = R), j != null && j.enabled.y && (z = T), L && !x && (b ? $ = p - 2 * zn(v.left, v.right) : z = w - 2 * zn(v.top, v.bottom)), await f({
        ...o,
        availableWidth: $,
        availableHeight: z
      });
      const k = await c.getDimensions(d.floating);
      return p !== k.width || w !== k.height ? { reset: { rects: !0 } } : {};
    }
  };
};
function Db(a) {
  const o = ua(a);
  let i = parseFloat(o.width) || 0, l = parseFloat(o.height) || 0;
  const c = Eo(a), d = c ? a.offsetWidth : i, f = c ? a.offsetHeight : l, m = Nc(i) !== d || Nc(l) !== f;
  return m && (i = d, l = f), {
    width: i,
    height: l,
    $: m
  };
}
function eh(a) {
  return Lt(a) ? a : a.contextElement;
}
function ii(a) {
  const o = eh(a);
  if (!Eo(o)) return ka(1);
  const i = o.getBoundingClientRect(), { width: l, height: c, $: d } = Db(o);
  let f = (d ? Nc(i.width) : i.width) / l, m = (d ? Nc(i.height) : i.height) / c;
  return (!f || !Number.isFinite(f)) && (f = 1), (!m || !Number.isFinite(m)) && (m = 1), {
    x: f,
    y: m
  };
}
var HA = /* @__PURE__ */ ka(0);
function kb(a) {
  const o = on(a);
  return !Qm() || !o.visualViewport ? HA : {
    x: o.visualViewport.offsetLeft,
    y: o.visualViewport.offsetTop
  };
}
function BA(a, o, i) {
  return o === void 0 && (o = !1), !!i && o && i === on(a);
}
function or(a, o, i, l) {
  o === void 0 && (o = !1), i === void 0 && (i = !1);
  const c = a.getBoundingClientRect(), d = eh(a);
  let f = ka(1);
  o && (l ? Lt(l) && (f = ii(l)) : f = ii(a));
  const m = BA(d, i, l) ? kb(d) : ka(0);
  let v = (c.left + m.x) / f.x, y = (c.top + m.y) / f.y, x = c.width / f.x, b = c.height / f.y;
  if (d && l) {
    const p = on(d), w = Lt(l) ? on(l) : l;
    let A = p, C = pm(A);
    for (; C && w !== A; ) {
      const T = ii(C), R = C.getBoundingClientRect(), O = ua(C), _ = R.left + (C.clientLeft + parseFloat(O.paddingLeft)) * T.x, j = R.top + (C.clientTop + parseFloat(O.paddingTop)) * T.y;
      v *= T.x, y *= T.y, x *= T.x, b *= T.y, v += _, y += j, A = on(C), C = pm(A);
    }
  }
  return yo({
    width: x,
    height: b,
    x: v,
    y
  });
}
function $c(a, o) {
  const i = Vc(a).scrollLeft;
  return o ? o.left + i : or(Ba(a)).left + i;
}
function Lb(a, o) {
  const i = a.getBoundingClientRect();
  return {
    x: i.left + o.scrollLeft - $c(a, i),
    y: i.top + o.scrollTop
  };
}
function UA(a) {
  let { elements: o, rect: i, offsetParent: l, strategy: c } = a;
  const d = c === "fixed", f = Ba(l), m = o ? qc(o.floating) : !1;
  if (l === f || m && d) return i;
  let v = {
    scrollLeft: 0,
    scrollTop: 0
  }, y = ka(1);
  const x = ka(0), b = Eo(l);
  if ((b || !d) && ((di(l) !== "body" || Uc(f)) && (v = Vc(l)), b)) {
    const w = or(l);
    y = ii(l), x.x = w.x + l.clientLeft, x.y = w.y + l.clientTop;
  }
  const p = f && !b && !d ? Lb(f, v) : ka(0);
  return {
    width: i.width * y.x,
    height: i.height * y.y,
    x: i.x * y.x - v.scrollLeft * y.x + x.x + p.x,
    y: i.y * y.y - v.scrollTop * y.y + x.y + p.y
  };
}
function qA(a) {
  return a.getClientRects ? Array.from(a.getClientRects()) : [];
}
function VA(a) {
  const o = Vc(a), i = a.ownerDocument.body, l = zn(a.scrollWidth, a.clientWidth, i.scrollWidth, i.clientWidth), c = zn(a.scrollHeight, a.clientHeight, i.scrollHeight, i.clientHeight);
  let d = -o.scrollLeft + $c(a);
  const f = -o.scrollTop;
  return ua(i).direction === "rtl" && (d += zn(a.clientWidth, i.clientWidth) - l), {
    width: l,
    height: c,
    x: d,
    y: f
  };
}
var $A = 25;
function YA(a, o, i) {
  i === void 0 && (i = "viewport");
  const l = i === "layoutViewport", c = on(a), d = Ba(a), f = c.visualViewport;
  let m = d.clientWidth, v = d.clientHeight, y = 0, x = 0;
  if (f) {
    const b = !Qm() || o === "fixed";
    l ? b || (y = -f.offsetLeft, x = -f.offsetTop) : (m = f.width, v = f.height, b && (y = f.offsetLeft, x = f.offsetTop));
  }
  if ($c(d) <= 0) {
    const b = d.ownerDocument, p = b.body, w = getComputedStyle(p), A = b.compatMode === "CSS1Compat" && parseFloat(w.marginLeft) + parseFloat(w.marginRight) || 0, C = Math.abs(d.clientWidth - p.clientWidth - A), T = getComputedStyle(d).scrollbarGutter === "stable both-edges" ? C / 2 : C;
    T <= $A && (m -= T);
  }
  return {
    width: m,
    height: v,
    x: y,
    y: x
  };
}
function GA(a, o) {
  const i = or(a, !0, o === "fixed"), l = i.top + a.clientTop, c = i.left + a.clientLeft, d = ii(a);
  return {
    width: a.clientWidth * d.x,
    height: a.clientHeight * d.y,
    x: c * d.x,
    y: l * d.y
  };
}
function gy(a, o, i) {
  let l;
  if (o === "viewport" || o === "layoutViewport") l = YA(a, i, o);
  else if (o === "document") l = VA(Ba(a));
  else if (Lt(o)) l = GA(o, i);
  else {
    const c = kb(a);
    l = {
      x: o.x - c.x,
      y: o.y - c.y,
      width: o.width,
      height: o.height
    };
  }
  return yo(l);
}
function WA(a, o) {
  const i = o.get(a);
  if (i) return i;
  let l = xl(a, [], !1).filter((m) => Lt(m) && di(m) !== "body"), c = null;
  const d = ua(a).position === "fixed";
  let f = d ? ar(a) : a;
  for (; Lt(f) && !wl(f); ) {
    const m = ua(f), v = Xm(f), y = c ? c.position : d ? "fixed" : "";
    !v && (y === "fixed" || y === "absolute" && m.position === "static") ? l = l.filter((x) => x !== f) : c = m, f = ar(f);
  }
  return o.set(a, l), l;
}
function PA(a) {
  let { element: o, boundary: i, rootBoundary: l, strategy: c } = a;
  const d = [...i === "clippingAncestors" ? qc(o) ? [] : WA(o, this._c) : [].concat(i), l], f = gy(o, d[0], c);
  let m = f.top, v = f.right, y = f.bottom, x = f.left;
  for (let b = 1; b < d.length; b++) {
    const p = gy(o, d[b], c);
    m = zn(p.top, m), v = Wn(p.right, v), y = Wn(p.bottom, y), x = zn(p.left, x);
  }
  return {
    width: v - x,
    height: y - m,
    x,
    y: m
  };
}
function IA(a) {
  const { width: o, height: i } = Db(a);
  return {
    width: o,
    height: i
  };
}
function XA(a, o, i) {
  const l = Eo(o), c = Ba(o), d = i === "fixed", f = or(a, !0, d, o);
  let m = {
    scrollLeft: 0,
    scrollTop: 0
  };
  const v = ka(0);
  if ((l || !d) && ((di(o) !== "body" || Uc(c)) && (m = Vc(o)), l)) {
    const x = or(o, !0, d, o);
    v.x = x.x + o.clientLeft, v.y = x.y + o.clientTop;
  }
  !l && c && (v.x = $c(c));
  const y = c && !l && !d ? Lb(c, m) : ka(0);
  return {
    x: f.left + m.scrollLeft - v.x - y.x,
    y: f.top + m.scrollTop - v.y - y.y,
    width: f.width,
    height: f.height
  };
}
function If(a) {
  return ua(a).position === "static";
}
function yy(a, o) {
  if (!Eo(a) || ua(a).position === "fixed") return null;
  if (o) return o(a);
  let i = a.offsetParent;
  return Ba(a) === i && (i = i.ownerDocument.body), i;
}
function Hb(a, o) {
  const i = on(a);
  if (qc(a)) return i;
  if (!Eo(a)) {
    let c = ar(a);
    for (; c && !wl(c); ) {
      if (Lt(c) && !If(c)) return c;
      c = ar(c);
    }
    return i;
  }
  let l = yy(a, o);
  for (; l && sA(l) && If(l); ) l = yy(l, o);
  return l && wl(l) && If(l) && !Xm(l) ? i : l || dA(a) || i;
}
var QA = async function(a) {
  const o = this.getOffsetParent || Hb, i = this.getDimensions, l = await i(a.floating);
  return {
    reference: XA(a.reference, await o(a.floating), a.strategy),
    floating: {
      x: 0,
      y: 0,
      width: l.width,
      height: l.height
    }
  };
};
function KA(a) {
  return ua(a).direction === "rtl";
}
var ZA = {
  convertOffsetParentRelativeRectToViewportRelativeRect: UA,
  getDocumentElement: Ba,
  getClippingRect: PA,
  getOffsetParent: Hb,
  getElementRects: QA,
  getClientRects: qA,
  getDimensions: IA,
  getScale: ii,
  isElement: Lt,
  isRTL: KA
};
function Bb(a, o) {
  return a.x === o.x && a.y === o.y && a.width === o.width && a.height === o.height;
}
function FA(a, o, i) {
  let l = null, c;
  const d = Ba(a);
  function f() {
    var x;
    clearTimeout(c), (x = l) == null || x.disconnect(), l = null;
  }
  function m(x, b) {
    x === void 0 && (x = !1), b === void 0 && (b = 1), f();
    const p = a.getBoundingClientRect(), { left: w, top: A, width: C, height: T } = p;
    if (x || o(), !C || !T) return;
    const R = mc(A), O = mc(d.clientWidth - (w + C)), _ = mc(d.clientHeight - (A + T)), j = mc(w), L = {
      rootMargin: -R + "px " + -O + "px " + -_ + "px " + -j + "px",
      threshold: zn(0, Wn(1, b)) || 1
    };
    let z = !0;
    function $(k) {
      const Q = k[0].intersectionRatio;
      if (!Bb(p, a.getBoundingClientRect())) return m();
      if (Q !== b) {
        if (!z) return m();
        Q ? m(!1, Q) : c = setTimeout(() => {
          m(!1, 1e-7);
        }, 1e3);
      }
      z = !1;
    }
    try {
      l = new IntersectionObserver($, {
        ...L,
        root: d.ownerDocument
      });
    } catch {
      l = new IntersectionObserver($, L);
    }
    l.observe(a);
  }
  const v = on(a), y = () => m(i);
  return v.addEventListener("resize", y), m(!0), () => {
    v.removeEventListener("resize", y), f();
  };
}
function by(a, o, i, l) {
  l === void 0 && (l = {});
  const { ancestorScroll: c = !0, ancestorResize: d = !0, elementResize: f = typeof ResizeObserver == "function", layoutShift: m = typeof IntersectionObserver == "function", animationFrame: v = !1 } = l, y = eh(a), x = c || d ? [...y ? xl(y) : [], ...o ? xl(o) : []] : [];
  x.forEach((R) => {
    c && R.addEventListener("scroll", i), d && R.addEventListener("resize", i);
  });
  const b = y && m ? FA(y, i, d) : null;
  let p = -1, w = null;
  f && (w = new ResizeObserver((R) => {
    let [O] = R;
    O && O.target === y && w && o && (w.unobserve(o), cancelAnimationFrame(p), p = requestAnimationFrame(() => {
      var _;
      (_ = w) == null || _.observe(o);
    })), i();
  }), y && !v && w.observe(y), o && w.observe(o));
  let A, C = v ? or(a) : null;
  v && T();
  function T() {
    const R = or(a);
    C && !Bb(C, R) && i(), C = R, A = requestAnimationFrame(T);
  }
  return i(), () => {
    var R;
    x.forEach((O) => {
      c && O.removeEventListener("scroll", i), d && O.removeEventListener("resize", i);
    }), b?.(), (R = w) == null || R.disconnect(), w = null, v && cancelAnimationFrame(A);
  };
}
var JA = zA, eT = DA, tT = _A, nT = LA, aT = NA, Sy = RA, oT = OA, rT = kA, iT = (a, o, i) => {
  const l = /* @__PURE__ */ new Map(), c = i ?? {}, d = {
    ...ZA,
    ...c.platform,
    _c: l
  };
  return TA(a, o, {
    ...c,
    platform: d
  });
}, Yc = /* @__PURE__ */ Zy(Fy(), 1), xc = typeof document < "u" ? S.useLayoutEffect : function() {
};
function Oc(a, o) {
  if (a === o) return !0;
  if (typeof a != typeof o) return !1;
  if (typeof a == "function" && a.toString() === o.toString()) return !0;
  let i, l, c;
  if (a && o && typeof a == "object") {
    if (Array.isArray(a)) {
      if (i = a.length, i !== o.length) return !1;
      for (l = i; l-- !== 0; ) if (!Oc(a[l], o[l])) return !1;
      return !0;
    }
    if (c = Object.keys(a), i = c.length, i !== Object.keys(o).length) return !1;
    for (l = i; l-- !== 0; ) if (!{}.hasOwnProperty.call(o, c[l])) return !1;
    for (l = i; l-- !== 0; ) {
      const d = c[l];
      if (!(d === "_owner" && a.$$typeof) && !Oc(a[d], o[d]))
        return !1;
    }
    return !0;
  }
  return a !== a && o !== o;
}
function Ub(a) {
  return typeof window > "u" ? 1 : (a.ownerDocument.defaultView || window).devicePixelRatio || 1;
}
function wy(a, o) {
  const i = Ub(a);
  return Math.round(o * i) / i;
}
function Xf(a) {
  const o = S.useRef(a);
  return xc(() => {
    o.current = a;
  }), o;
}
function lT(a) {
  a === void 0 && (a = {});
  const { placement: o = "bottom", strategy: i = "absolute", middleware: l = [], platform: c, elements: { reference: d, floating: f } = {}, transform: m = !0, whileElementsMounted: v, open: y } = a, [x, b] = S.useState({
    x: 0,
    y: 0,
    strategy: i,
    placement: o,
    middlewareData: {},
    isPositioned: !1
  }), [p, w] = S.useState(l);
  Oc(p, l) || w(l);
  const [A, C] = S.useState(null), [T, R] = S.useState(null), O = S.useCallback((W) => {
    W !== z.current && (z.current = W, C(W));
  }, []), _ = S.useCallback((W) => {
    W !== $.current && ($.current = W, R(W));
  }, []), j = d || A, L = f || T, z = S.useRef(null), $ = S.useRef(null), k = S.useRef(x), Q = v != null, X = Xf(v), oe = Xf(c), re = Xf(y), ne = S.useCallback(() => {
    if (!z.current || !$.current) return;
    const W = {
      placement: o,
      strategy: i,
      middleware: p
    };
    oe.current && (W.platform = oe.current), iT(z.current, $.current, W).then((Z) => {
      const ae = {
        ...Z,
        isPositioned: re.current !== !1
      };
      F.current && !Oc(k.current, ae) && (k.current = ae, Yc.flushSync(() => {
        b(ae);
      }));
    });
  }, [
    p,
    o,
    i,
    oe,
    re
  ]);
  xc(() => {
    y === !1 && k.current.isPositioned && (k.current.isPositioned = !1, b((W) => ({
      ...W,
      isPositioned: !1
    })));
  }, [y]);
  const F = S.useRef(!1);
  xc(() => (F.current = !0, () => {
    F.current = !1;
  }), []), xc(() => {
    if (j && (z.current = j), L && ($.current = L), j && L) {
      if (X.current) return X.current(j, L, ne);
      ne();
    }
  }, [
    j,
    L,
    ne,
    X,
    Q
  ]);
  const me = S.useMemo(() => ({
    reference: z,
    floating: $,
    setReference: O,
    setFloating: _
  }), [O, _]), H = S.useMemo(() => ({
    reference: j,
    floating: L
  }), [j, L]), I = S.useMemo(() => {
    const W = {
      position: i,
      left: 0,
      top: 0
    };
    if (!H.floating) return W;
    const Z = wy(H.floating, x.x), ae = wy(H.floating, x.y);
    return m ? {
      ...W,
      transform: "translate(" + Z + "px, " + ae + "px)",
      ...Ub(H.floating) >= 1.5 && { willChange: "transform" }
    } : {
      position: i,
      left: Z,
      top: ae
    };
  }, [
    i,
    m,
    H.floating,
    x.x,
    x.y
  ]);
  return S.useMemo(() => ({
    ...x,
    update: ne,
    refs: me,
    elements: H,
    floatingStyles: I
  }), [
    x,
    ne,
    me,
    H,
    I
  ]);
}
var sT = (a) => {
  function o(i) {
    return {}.hasOwnProperty.call(i, "current");
  }
  return {
    name: "arrow",
    options: a,
    fn(i) {
      const { element: l, padding: c } = typeof a == "function" ? a(i) : a;
      return l && o(l) ? l.current != null ? Sy({
        element: l.current,
        padding: c
      }).fn(i) : {} : l ? Sy({
        element: l,
        padding: c
      }).fn(i) : {};
    }
  };
}, cT = (a, o) => {
  const i = JA(a);
  return {
    name: i.name,
    fn: i.fn,
    options: [a, o]
  };
}, uT = (a, o) => {
  const i = eT(a);
  return {
    name: i.name,
    fn: i.fn,
    options: [a, o]
  };
}, dT = (a, o) => ({
  fn: rT(a).fn,
  options: [a, o]
}), fT = (a, o) => {
  const i = tT(a);
  return {
    name: i.name,
    fn: i.fn,
    options: [a, o]
  };
}, mT = (a, o) => {
  const i = nT(a);
  return {
    name: i.name,
    fn: i.fn,
    options: [a, o]
  };
}, hT = (a, o) => {
  const i = aT(a);
  return {
    name: i.name,
    fn: i.fn,
    options: [a, o]
  };
}, xy = (a, o) => {
  const i = oT(a);
  return {
    name: i.name,
    fn: i.fn,
    options: [a, o]
  };
}, vT = (a, o) => {
  const i = sT(a);
  return {
    name: i.name,
    fn: i.fn,
    options: [a, o]
  };
};
function qb(a) {
  const o = S.useRef(void 0), i = S.useCallback((l) => {
    const c = a.map((d) => {
      if (d != null) {
        if (typeof d == "function") {
          const f = d, m = f(l);
          return typeof m == "function" ? m : () => {
            f(null);
          };
        }
        return d.current = l, () => {
          d.current = null;
        };
      }
    });
    return () => {
      c.forEach((d) => d?.());
    };
  }, a);
  return S.useMemo(() => a.every((l) => l == null) ? null : (l) => {
    o.current && (o.current(), o.current = void 0), l != null && (o.current = i(l));
  }, a);
}
var pT = "data-floating-ui-focusable", Cy = "active", Ey = "selected", gT = "ArrowLeft", yT = "ArrowRight", bT = "ArrowUp", ST = "ArrowDown", wT = [gT, yT], xT = [bT, ST], t3 = [...wT, ...xT], CT = { ...S }, Ay = !1, ET = 0, Ty = () => "floating-ui-" + Math.random().toString(36).slice(2, 6) + ET++;
function AT() {
  const [a, o] = S.useState(() => Ay ? Ty() : void 0);
  return li(() => {
    a == null && o(Ty());
  }, []), S.useEffect(() => {
    Ay = !0;
  }, []), a;
}
var TT = CT.useId || AT;
function RT() {
  const a = /* @__PURE__ */ new Map();
  return {
    emit(o, i) {
      var l;
      (l = a.get(o)) == null || l.forEach((c) => c(i));
    },
    on(o, i) {
      a.has(o) || a.set(o, /* @__PURE__ */ new Set()), a.get(o).add(i);
    },
    off(o, i) {
      var l;
      (l = a.get(o)) == null || l.delete(i);
    }
  };
}
var _T = /* @__PURE__ */ S.createContext(null), NT = /* @__PURE__ */ S.createContext(null), Vb = () => {
  var a;
  return ((a = S.useContext(_T)) == null ? void 0 : a.id) || null;
}, $b = () => S.useContext(NT);
function jT(a) {
  return "data-floating-ui-" + a;
}
function bn(a) {
  a.current !== -1 && (clearTimeout(a.current), a.current = -1);
}
var Ry = /* @__PURE__ */ jT("safe-polygon");
function Qf(a, o, i) {
  if (i && !ym(i)) return 0;
  if (typeof a == "number") return a;
  if (typeof a == "function") {
    const l = a();
    return typeof l == "number" ? l : l?.[o];
  }
  return a?.[o];
}
function Kf(a) {
  return typeof a == "function" ? a() : a;
}
function OT(a, o) {
  o === void 0 && (o = {});
  const { open: i, onOpenChange: l, dataRef: c, events: d, elements: f } = a, { enabled: m = !0, delay: v = 0, handleClose: y = null, mouseOnly: x = !1, restMs: b = 0, move: p = !0 } = o, w = $b(), A = Vb(), C = vc(y), T = vc(v), R = vc(i), O = vc(b), _ = S.useRef(), j = S.useRef(-1), L = S.useRef(), z = S.useRef(-1), $ = S.useRef(!0), k = S.useRef(!1), Q = S.useRef(() => {
  }), X = S.useRef(!1), oe = pl(() => {
    var I;
    const W = (I = c.current.openEvent) == null ? void 0 : I.type;
    return W?.includes("mouse") && W !== "mousedown";
  });
  S.useEffect(() => {
    if (!m) return;
    function I(W) {
      let { open: Z } = W;
      Z || (bn(j), bn(z), $.current = !0, X.current = !1);
    }
    return d.on("openchange", I), () => {
      d.off("openchange", I);
    };
  }, [m, d]), S.useEffect(() => {
    if (!m || !C.current || !i) return;
    function I(Z) {
      oe() && l(!1, Z, "hover");
    }
    const W = hc(f.floating).documentElement;
    return W.addEventListener("mouseleave", I), () => {
      W.removeEventListener("mouseleave", I);
    };
  }, [
    f.floating,
    i,
    l,
    m,
    C,
    oe
  ]);
  const re = S.useCallback(function(I, W, Z) {
    W === void 0 && (W = !0), Z === void 0 && (Z = "hover");
    const ae = Qf(T.current, "close", _.current);
    ae && !L.current ? (bn(j), j.current = window.setTimeout(() => l(!1, I, Z), ae)) : W && (bn(j), l(!1, I, Z));
  }, [T, l]), ne = pl(() => {
    Q.current(), L.current = void 0;
  }), F = pl(() => {
    if (k.current) {
      const I = hc(f.floating).body;
      I.style.pointerEvents = "", I.removeAttribute(Ry), k.current = !1;
    }
  }), me = pl(() => c.current.openEvent ? ["click", "mousedown"].includes(c.current.openEvent.type) : !1);
  S.useEffect(() => {
    if (!m) return;
    function I(de) {
      if (bn(j), $.current = !1, x && !ym(_.current) || Kf(O.current) > 0 && !Qf(T.current, "open")) return;
      const we = Qf(T.current, "open", _.current);
      we ? j.current = window.setTimeout(() => {
        R.current || l(!0, de, "hover");
      }, we) : i || l(!0, de, "hover");
    }
    function W(de) {
      if (me()) {
        F();
        return;
      }
      Q.current();
      const we = hc(f.floating);
      if (bn(z), X.current = !1, C.current && c.current.floatingContext) {
        i || bn(j), L.current = C.current({
          ...c.current.floatingContext,
          tree: w,
          x: de.clientX,
          y: de.clientY,
          onClose() {
            F(), ne(), me() || re(de, !0, "safe-polygon");
          }
        });
        const Ae = L.current;
        we.addEventListener("mousemove", Ae), Q.current = () => {
          we.removeEventListener("mousemove", Ae);
        };
        return;
      }
      (_.current !== "touch" || !wA(f.floating, de.relatedTarget)) && re(de);
    }
    function Z(de) {
      me() || c.current.floatingContext && (C.current == null || C.current({
        ...c.current.floatingContext,
        tree: w,
        x: de.clientX,
        y: de.clientY,
        onClose() {
          F(), ne(), me() || re(de);
        }
      })(de));
    }
    function ae() {
      bn(j);
    }
    function be(de) {
      me() || re(de, !1);
    }
    if (Lt(f.domReference)) {
      const de = f.domReference, we = f.floating;
      return i && de.addEventListener("mouseleave", Z), p && de.addEventListener("mousemove", I, { once: !0 }), de.addEventListener("mouseenter", I), de.addEventListener("mouseleave", W), we && (we.addEventListener("mouseleave", Z), we.addEventListener("mouseenter", ae), we.addEventListener("mouseleave", be)), () => {
        i && de.removeEventListener("mouseleave", Z), p && de.removeEventListener("mousemove", I), de.removeEventListener("mouseenter", I), de.removeEventListener("mouseleave", W), we && (we.removeEventListener("mouseleave", Z), we.removeEventListener("mouseenter", ae), we.removeEventListener("mouseleave", be));
      };
    }
  }, [
    f,
    m,
    a,
    x,
    p,
    re,
    ne,
    F,
    l,
    i,
    R,
    w,
    T,
    C,
    c,
    me,
    O
  ]), li(() => {
    var I;
    if (m && i && (I = C.current) != null && (I = I.__options) != null && I.blockPointerEvents && oe()) {
      k.current = !0;
      const Z = f.floating;
      if (Lt(f.domReference) && Z) {
        var W;
        const ae = hc(f.floating).body;
        ae.setAttribute(Ry, "");
        const be = f.domReference, de = w == null || (W = w.nodesRef.current.find((we) => we.id === A)) == null || (W = W.context) == null ? void 0 : W.elements.floating;
        return de && (de.style.pointerEvents = ""), ae.style.pointerEvents = "none", be.style.pointerEvents = "auto", Z.style.pointerEvents = "auto", () => {
          ae.style.pointerEvents = "", be.style.pointerEvents = "", Z.style.pointerEvents = "";
        };
      }
    }
  }, [
    m,
    i,
    A,
    f,
    w,
    C,
    oe
  ]), li(() => {
    i || (_.current = void 0, X.current = !1, ne(), F());
  }, [
    i,
    ne,
    F
  ]), S.useEffect(() => () => {
    ne(), bn(j), bn(z), F();
  }, [
    m,
    f.domReference,
    ne,
    F
  ]);
  const H = S.useMemo(() => {
    function I(W) {
      _.current = W.pointerType;
    }
    return {
      onPointerDown: I,
      onPointerEnter: I,
      onMouseMove(W) {
        const { nativeEvent: Z } = W;
        function ae() {
          !$.current && !R.current && l(!0, Z, "hover");
        }
        x && !ym(_.current) || i || Kf(O.current) === 0 || X.current && W.movementX ** 2 + W.movementY ** 2 < 2 || (bn(z), _.current === "touch" ? ae() : (X.current = !0, z.current = window.setTimeout(ae, Kf(O.current))));
      }
    };
  }, [
    x,
    l,
    i,
    R,
    O
  ]);
  return S.useMemo(() => m ? { reference: H } : {}, [m, H]);
}
function Zf(a, o) {
  if (!a || !o) return !1;
  const i = o.getRootNode == null ? void 0 : o.getRootNode();
  if (a.contains(o)) return !0;
  if (i && _c(i)) {
    let l = o;
    for (; l; ) {
      if (a === l) return !0;
      l = l.parentNode || l.host;
    }
  }
  return !1;
}
function MT(a) {
  return "composedPath" in a ? a.composedPath()[0] : a.target;
}
function zT(a) {
  const { open: o = !1, onOpenChange: i, elements: l } = a, c = TT(), d = S.useRef({}), [f] = S.useState(() => RT()), m = Vb() != null, [v, y] = S.useState(l.reference), x = pl((w, A, C) => {
    d.current.openEvent = w ? A : void 0, f.emit("openchange", {
      open: w,
      event: A,
      reason: C,
      nested: m
    }), i?.(w, A, C);
  }), b = S.useMemo(() => ({ setPositionReference: y }), []), p = S.useMemo(() => ({
    reference: v || l.reference || null,
    floating: l.floating || null,
    domReference: l.reference
  }), [
    v,
    l.reference,
    l.floating
  ]);
  return S.useMemo(() => ({
    dataRef: d,
    open: o,
    onOpenChange: x,
    elements: p,
    events: f,
    floatingId: c,
    refs: b
  }), [
    o,
    x,
    p,
    f,
    c,
    b
  ]);
}
function Yb(a) {
  var o, i;
  let { elements: l, ...c } = a === void 0 ? {} : a;
  const { nodeId: d } = c, f = zT({
    ...c,
    elements: {
      reference: (o = l?.reference) != null ? o : null,
      floating: (i = l?.floating) != null ? i : null
    }
  }), m = c.rootContext || f, v = m.elements, [y, x] = S.useState(null), [b, p] = S.useState(null), w = v?.domReference || y, A = S.useRef(null), C = $b();
  li(() => {
    w && (A.current = w);
  }, [w]);
  const T = lT({
    ...c,
    elements: {
      ...v,
      ...b && { reference: b }
    }
  }), R = S.useCallback((z) => {
    const $ = Lt(z) ? {
      getBoundingClientRect: () => z.getBoundingClientRect(),
      getClientRects: () => z.getClientRects(),
      contextElement: z
    } : z;
    p($), T.refs.setReference($);
  }, [T.refs]), O = S.useCallback((z) => {
    (Lt(z) || z === null) && (A.current = z, x(z)), (Lt(T.refs.reference.current) || T.refs.reference.current === null || z !== null && !Lt(z)) && T.refs.setReference(z);
  }, [T.refs]), _ = S.useMemo(() => ({
    ...T.refs,
    setReference: O,
    setPositionReference: R,
    domReference: A
  }), [
    T.refs,
    O,
    R
  ]), j = S.useMemo(() => ({
    ...T.elements,
    domReference: w
  }), [T.elements, w]), L = S.useMemo(() => ({
    ...T,
    ...m,
    refs: _,
    elements: j,
    nodeId: d
  }), [
    T,
    _,
    j,
    d,
    m
  ]);
  return li(() => {
    m.dataRef.current.floatingContext = L;
    const z = C?.nodesRef.current.find(($) => $.id === d);
    z && (z.context = L);
  }), S.useMemo(() => ({
    ...T,
    context: L,
    refs: _,
    elements: j
  }), [
    T,
    _,
    j,
    L
  ]);
}
function Ff(a, o, i) {
  const l = /* @__PURE__ */ new Map(), c = i === "item";
  let d = a;
  if (c && a) {
    const { [Cy]: f, [Ey]: m, ...v } = a;
    d = v;
  }
  return {
    ...i === "floating" && {
      tabIndex: -1,
      [pT]: ""
    },
    ...d,
    ...o.map((f) => {
      const m = f ? f[i] : null;
      return typeof m == "function" ? a ? m(a) : null : m;
    }).concat(a).reduce((f, m) => (m && Object.entries(m).forEach((v) => {
      let [y, x] = v;
      if (!(c && [Cy, Ey].includes(y)))
        if (y.indexOf("on") === 0) {
          if (l.has(y) || l.set(y, []), typeof x == "function") {
            var b;
            (b = l.get(y)) == null || b.push(x), f[y] = function() {
              for (var p, w = arguments.length, A = new Array(w), C = 0; C < w; C++) A[C] = arguments[C];
              return (p = l.get(y)) == null ? void 0 : p.map((T) => T(...A)).find((T) => T !== void 0);
            };
          }
        } else f[y] = x;
    }), f), {})
  };
}
function DT(a) {
  a === void 0 && (a = []);
  const o = a.map((m) => m?.reference), i = a.map((m) => m?.floating), l = a.map((m) => m?.item), c = S.useCallback((m) => Ff(m, a, "reference"), o), d = S.useCallback((m) => Ff(m, a, "floating"), i), f = S.useCallback((m) => Ff(m, a, "item"), l);
  return S.useMemo(() => ({
    getReferenceProps: c,
    getFloatingProps: d,
    getItemProps: f
  }), [
    c,
    d,
    f
  ]);
}
function Gb(a, o, i) {
  return i === void 0 && (i = !0), a.filter((l) => {
    var c;
    return l.parentId === o && (!i || ((c = l.context) == null ? void 0 : c.open));
  }).flatMap((l) => [l, ...Gb(a, l.id, i)]);
}
function _y(a, o) {
  const [i, l] = a;
  let c = !1;
  const d = o.length;
  for (let f = 0, m = d - 1; f < d; m = f++) {
    const [v, y] = o[f] || [0, 0], [x, b] = o[m] || [0, 0];
    y >= l != b >= l && i <= (x - v) * (l - y) / (b - y) + v && (c = !c);
  }
  return c;
}
function kT(a, o) {
  return a[0] >= o.x && a[0] <= o.x + o.width && a[1] >= o.y && a[1] <= o.y + o.height;
}
function LT(a) {
  a === void 0 && (a = {});
  const { buffer: o = 0.5, blockPointerEvents: i = !1, requireIntent: l = !0 } = a, c = { current: -1 };
  let d = !1, f = null, m = null, v = typeof performance < "u" ? performance.now() : 0;
  function y(b, p) {
    const w = performance.now(), A = w - v;
    if (f === null || m === null || A === 0)
      return f = b, m = p, v = w, null;
    const C = b - f, T = p - m, R = Math.sqrt(C * C + T * T) / A;
    return f = b, m = p, v = w, R;
  }
  const x = (b) => {
    let { x: p, y: w, placement: A, elements: C, onClose: T, nodeId: R, tree: O } = b;
    return function(j) {
      function L() {
        bn(c), T();
      }
      if (bn(c), !C.domReference || !C.floating || A == null || p == null || w == null) return;
      const { clientX: z, clientY: $ } = j, k = [z, $], Q = MT(j), X = j.type === "mouseleave", oe = Zf(C.floating, Q), re = Zf(C.domReference, Q), ne = C.domReference.getBoundingClientRect(), F = C.floating.getBoundingClientRect(), me = A.split("-")[0], H = p > F.right - F.width / 2, I = w > F.bottom - F.height / 2, W = kT(k, ne), Z = F.width > ne.width, ae = F.height > ne.height, be = (Z ? ne : F).left, de = (Z ? ne : F).right, we = (ae ? ne : F).top, Ae = (ae ? ne : F).bottom;
      if (oe && (d = !0, !X))
        return;
      if (re && (d = !1), re && !X) {
        d = !0;
        return;
      }
      if (X && Lt(j.relatedTarget) && Zf(C.floating, j.relatedTarget) || O && Gb(O.nodesRef.current, R).length) return;
      if (me === "top" && w >= ne.bottom - 1 || me === "bottom" && w <= ne.top + 1 || me === "left" && p >= ne.right - 1 || me === "right" && p <= ne.left + 1) return L();
      let M = [];
      switch (me) {
        case "top":
          M = [
            [be, ne.top + 1],
            [be, F.bottom - 1],
            [de, F.bottom - 1],
            [de, ne.top + 1]
          ];
          break;
        case "bottom":
          M = [
            [be, F.top + 1],
            [be, ne.bottom - 1],
            [de, ne.bottom - 1],
            [de, F.top + 1]
          ];
          break;
        case "left":
          M = [
            [F.right - 1, Ae],
            [F.right - 1, we],
            [ne.left + 1, we],
            [ne.left + 1, Ae]
          ];
          break;
        case "right":
          M = [
            [ne.right - 1, Ae],
            [ne.right - 1, we],
            [F.left + 1, we],
            [F.left + 1, Ae]
          ];
      }
      function K(se) {
        let [le, he] = se;
        switch (me) {
          case "top":
            return [
              [Z ? le + o / 2 : H ? le + o * 4 : le - o * 4, he + o + 1],
              [Z ? le - o / 2 : H ? le + o * 4 : le - o * 4, he + o + 1],
              [F.left, H || Z ? F.bottom - o : F.top],
              [F.right, H ? Z ? F.bottom - o : F.top : F.bottom - o]
            ];
          case "bottom":
            return [
              [Z ? le + o / 2 : H ? le + o * 4 : le - o * 4, he - o],
              [Z ? le - o / 2 : H ? le + o * 4 : le - o * 4, he - o],
              [F.left, H || Z ? F.top + o : F.bottom],
              [F.right, H ? Z ? F.top + o : F.bottom : F.top + o]
            ];
          case "left": {
            const ie = [le + o + 1, ae ? he + o / 2 : I ? he + o * 4 : he - o * 4], ye = [le + o + 1, ae ? he - o / 2 : I ? he + o * 4 : he - o * 4];
            return [
              [I || ae ? F.right - o : F.left, F.top],
              [I ? ae ? F.right - o : F.left : F.right - o, F.bottom],
              ie,
              ye
            ];
          }
          case "right":
            return [
              [le - o, ae ? he + o / 2 : I ? he + o * 4 : he - o * 4],
              [le - o, ae ? he - o / 2 : I ? he + o * 4 : he - o * 4],
              [I || ae ? F.left + o : F.right, F.top],
              [I ? ae ? F.left + o : F.right : F.left + o, F.bottom]
            ];
        }
      }
      if (!_y([z, $], M)) {
        if (d && !W) return L();
        if (!X && l) {
          const se = y(j.clientX, j.clientY);
          if (se !== null && se < 0.1) return L();
        }
        _y([z, $], K([p, w])) ? !d && l && (c.current = window.setTimeout(L, 40)) : L();
      }
    };
  };
  return x.__options = { blockPointerEvents: i }, x;
}
var Wb = {
  scrollHideDelay: 1e3,
  type: "hover",
  scrollbars: "xy"
}, Pb = (a, { scrollbarSize: o, overscrollBehavior: i, scrollbars: l }) => {
  let c = i;
  return i && l && (l === "x" ? c = `${i} auto` : l === "y" && (c = `auto ${i}`)), { root: {
    "--scrollarea-scrollbar-size": te(o),
    "--scrollarea-over-scroll-behavior": c
  } };
}, Ao = Ce((a) => {
  const o = ue("ScrollArea", Wb, a), { classNames: i, className: l, style: c, styles: d, unstyled: f, scrollbarSize: m, vars: v, type: y, scrollHideDelay: x, viewportProps: b, viewportRef: p, onScrollPositionChange: w, children: A, offsetScrollbars: C, scrollbars: T, onBottomReached: R, onTopReached: O, onLeftReached: _, onRightReached: j, overscrollBehavior: L, startScrollPosition: z, verticalScrollbarPosition: $, attributes: k, ...Q } = o, [X, oe] = (0, S.useState)(!1), [re, ne] = (0, S.useState)(!1), [F, me] = (0, S.useState)(!1), H = (0, S.useRef)(!0), I = (0, S.useRef)(!1), W = (0, S.useRef)(!0), Z = (0, S.useRef)(!1), ae = ke({
    name: "ScrollArea",
    props: o,
    classes: Im,
    className: l,
    style: c,
    classNames: i,
    styles: d,
    unstyled: f,
    attributes: k,
    vars: v,
    varsResolver: Pb
  }), be = (0, S.useRef)(null), [de, we] = (0, S.useState)(null), Ae = (0, S.useCallback)((K) => {
    we((se) => se === K ? se : K);
  }, []), M = qb([
    p,
    be,
    Ae
  ]);
  return wo(C === "present" ? de : null, () => {
    const K = be.current;
    K && (ne(K.scrollHeight > K.clientHeight), me(K.scrollWidth > K.clientWidth));
  }), So(() => {
    z && be.current && be.current.scrollTo({
      left: z.x ?? 0,
      top: z.y ?? 0
    });
  }, []), /* @__PURE__ */ (0, g.jsxs)(yb, {
    getStyles: ae,
    type: y === "never" ? "always" : y,
    scrollHideDelay: x,
    scrollbars: T,
    ...ae("root"),
    ...Q,
    children: [
      /* @__PURE__ */ (0, g.jsx)(_b, {
        ...b,
        ...ae("viewport", { style: b?.style }),
        ref: M,
        "data-offset-scrollbars": C === !0 ? "xy" : C || void 0,
        "data-scrollbars": T || void 0,
        "data-vertical-scrollbar-position": $ || void 0,
        "data-horizontal-hidden": C === "present" && !F ? "true" : void 0,
        "data-vertical-hidden": C === "present" && !re ? "true" : void 0,
        onScroll: (K) => {
          b?.onScroll?.(K), w?.({
            x: K.currentTarget.scrollLeft,
            y: K.currentTarget.scrollTop
          });
          const { scrollTop: se, scrollHeight: le, clientHeight: he, scrollLeft: ie, scrollWidth: ye, clientWidth: ce } = K.currentTarget, ve = se - (le - he) >= -0.8, V = se === 0;
          ve && !I.current && R?.(), V && !H.current && O?.(), I.current = ve, H.current = V;
          const pe = ie - (ye - ce) >= -0.8, Te = ie === 0;
          pe && !Z.current && j?.(), Te && !W.current && _?.(), Z.current = pe, W.current = Te;
        },
        children: A
      }),
      (T === "xy" || T === "x") && /* @__PURE__ */ (0, g.jsx)(hm, {
        ...ae("scrollbar"),
        orientation: "horizontal",
        "data-vertical-scrollbar-position": $ || void 0,
        "data-hidden": y === "never" || C === "present" && !F ? !0 : void 0,
        forceMount: !0,
        onMouseEnter: () => oe(!0),
        onMouseLeave: () => oe(!1),
        children: /* @__PURE__ */ (0, g.jsx)(vm, { ...ae("thumb") })
      }),
      (T === "xy" || T === "y") && /* @__PURE__ */ (0, g.jsx)(hm, {
        ...ae("scrollbar"),
        orientation: "vertical",
        "data-vertical-scrollbar-position": $ || void 0,
        "data-hidden": y === "never" || C === "present" && !re ? !0 : void 0,
        forceMount: !0,
        onMouseEnter: () => oe(!0),
        onMouseLeave: () => oe(!1),
        children: /* @__PURE__ */ (0, g.jsx)(vm, { ...ae("thumb") })
      }),
      /* @__PURE__ */ (0, g.jsx)(tA, {
        ...ae("corner"),
        "data-vertical-scrollbar-position": $ || void 0,
        "data-hovered": X || void 0,
        "data-hidden": y === "never" || void 0
      })
    ]
  });
});
Ao.displayName = "@mantine/core/ScrollArea";
var th = Ce((a) => {
  const { children: o, classNames: i, styles: l, scrollbarSize: c, scrollHideDelay: d, type: f, dir: m, offsetScrollbars: v, overscrollBehavior: y, viewportRef: x, onScrollPositionChange: b, unstyled: p, variant: w, viewportProps: A, scrollbars: C, style: T, vars: R, onBottomReached: O, onTopReached: _, startScrollPosition: j, verticalScrollbarPosition: L, onOverflowChange: z, ...$ } = ue("ScrollAreaAutosize", Wb, a), k = (0, S.useRef)(null), [Q, X] = (0, S.useState)(null), oe = (0, S.useCallback)((H) => {
    X((I) => I === H ? I : H);
  }, []), re = qb([
    x,
    k,
    oe
  ]), ne = (0, S.useRef)(!1), F = (0, S.useRef)(!1), me = (0, S.useEffectEvent)(() => {
    const H = k.current;
    if (!H || !z) return;
    const I = H.scrollHeight > H.clientHeight;
    I !== ne.current && (F.current ? z(I) : (F.current = !0, I && z(!0)), ne.current = I);
  });
  return wo(z ? Q : null, me), /* @__PURE__ */ (0, g.jsx)(xe, {
    ...$,
    variant: w,
    style: [{
      display: "flex",
      overflow: "hidden"
    }, T],
    children: /* @__PURE__ */ (0, g.jsx)(xe, {
      style: {
        display: "flex",
        flexDirection: "column",
        flex: 1,
        overflow: "hidden",
        ...C === "y" && { minWidth: 0 },
        ...C === "x" && { minHeight: 0 },
        ...C === "xy" && {
          minWidth: 0,
          minHeight: 0
        },
        ...C === !1 && {
          minWidth: 0,
          minHeight: 0
        }
      },
      children: /* @__PURE__ */ (0, g.jsx)(Ao, {
        classNames: i,
        styles: l,
        scrollHideDelay: d,
        scrollbarSize: c,
        type: f,
        dir: m,
        offsetScrollbars: v,
        overscrollBehavior: y,
        viewportRef: re,
        onScrollPositionChange: b,
        unstyled: p,
        variant: w,
        viewportProps: A,
        vars: R,
        scrollbars: C,
        onBottomReached: O,
        onTopReached: _,
        startScrollPosition: j,
        verticalScrollbarPosition: L,
        "data-autosize": "true",
        children: o
      })
    })
  });
});
Ao.classes = Im;
Ao.varsResolver = Pb;
th.displayName = "@mantine/core/ScrollAreaAutosize";
th.classes = Im;
Ao.Autosize = th;
var Ib = { root: "m_87cf2631" }, HT = { __staticSelector: "UnstyledButton" }, Ua = In((a) => {
  const o = ue("UnstyledButton", HT, a), { className: i, component: l = "button", __staticSelector: c, unstyled: d, classNames: f, styles: m, style: v, attributes: y, ...x } = o, b = ke({
    name: c,
    props: o,
    classes: Ib,
    className: i,
    style: v,
    classNames: f,
    styles: m,
    unstyled: d,
    attributes: y
  });
  return /* @__PURE__ */ (0, g.jsx)(xe, {
    ...b("root", { focusable: !0 }),
    component: l,
    type: l === "button" ? "button" : void 0,
    ...x
  });
});
Ua.classes = Ib;
Ua.displayName = "@mantine/core/UnstyledButton";
var Xb = { root: "m_515a97f8" }, nh = Ce((a) => {
  const o = ue("VisuallyHidden", null, a), { classNames: i, className: l, style: c, styles: d, unstyled: f, vars: m, attributes: v, ...y } = o, x = ke({
    name: "VisuallyHidden",
    classes: Xb,
    props: o,
    className: l,
    style: c,
    classNames: i,
    styles: d,
    unstyled: f,
    attributes: v
  });
  return /* @__PURE__ */ (0, g.jsx)(xe, {
    component: "span",
    ...x("root"),
    ...y
  });
});
nh.classes = Xb;
nh.displayName = "@mantine/core/VisuallyHidden";
var Qb = { root: "m_1b7284a3" }, Kb = (a, { radius: o, shadow: i }) => ({ root: {
  "--paper-radius": o === void 0 ? void 0 : Ht(o),
  "--paper-shadow": zm(i)
} }), Gc = In((a) => {
  const o = ue("Paper", null, a), { classNames: i, className: l, style: c, styles: d, unstyled: f, withBorder: m, vars: v, radius: y, shadow: x, variant: b, mod: p, attributes: w, ...A } = o, C = ke({
    name: "Paper",
    props: o,
    classes: Qb,
    className: l,
    style: c,
    classNames: i,
    styles: d,
    unstyled: f,
    attributes: w,
    vars: v,
    varsResolver: Kb
  });
  return /* @__PURE__ */ (0, g.jsx)(xe, {
    mod: [{ withBorder: m }, p],
    ...C("root"),
    variant: b,
    ...A
  });
});
Gc.classes = Qb;
Gc.varsResolver = Kb;
Gc.displayName = "@mantine/core/Paper";
function Ny(a, o, i, l) {
  return a === "center" || l === "center" ? { top: o } : a === "end" ? { bottom: i } : a === "start" ? { top: i } : {};
}
function jy(a, o, i, l, c) {
  return a === "center" || l === "center" ? { left: o } : a === "end" ? { [c === "ltr" ? "right" : "left"]: i } : a === "start" ? { [c === "ltr" ? "left" : "right"]: i } : {};
}
var BT = {
  bottom: "borderTopLeftRadius",
  left: "borderTopRightRadius",
  right: "borderBottomLeftRadius",
  top: "borderBottomRightRadius"
};
function UT({ position: a, arrowSize: o, dir: i }) {
  const [l, c] = a.split("-");
  if (!c) return;
  const d = {
    width: o,
    height: o,
    position: "absolute"
  };
  if (l === "bottom") {
    const f = c === "start", m = f ? i === "ltr" ? "left" : "right" : i === "ltr" ? "right" : "left";
    return {
      ...d,
      top: -o,
      [m]: 0,
      clipPath: f !== (i === "rtl") ? "polygon(0% 0%, 0% 100%, 100% 100%)" : "polygon(100% 0%, 0% 100%, 100% 100%)"
    };
  }
  if (l === "top") {
    const f = c === "start", m = f ? i === "ltr" ? "left" : "right" : i === "ltr" ? "right" : "left";
    return {
      ...d,
      bottom: -o,
      [m]: 0,
      clipPath: f !== (i === "rtl") ? "polygon(0% 0%, 100% 0%, 0% 100%)" : "polygon(0% 0%, 100% 0%, 100% 100%)"
    };
  }
  if (l === "left") return {
    ...d,
    right: -o,
    [c === "start" ? "top" : "bottom"]: 0,
    clipPath: c === "start" ? "polygon(0% 0%, 100% 0%, 0% 100%)" : "polygon(0% 0%, 0% 100%, 100% 100%)"
  };
  if (l === "right") return {
    ...d,
    left: -o,
    [c === "start" ? "top" : "bottom"]: 0,
    clipPath: c === "start" ? "polygon(0% 0%, 100% 0%, 100% 100%)" : "polygon(100% 0%, 0% 100%, 100% 100%)"
  };
}
function qT({ position: a, arrowSize: o, arrowOffset: i, arrowRadius: l, arrowPosition: c, arrowX: d, arrowY: f, dir: m }) {
  if (c === "merge") {
    const p = UT({
      position: a,
      arrowSize: o,
      dir: m
    });
    if (p) return p;
  }
  const [v, y = "center"] = a.split("-"), x = {
    width: o,
    height: o,
    transform: "rotate(45deg)",
    position: "absolute",
    [BT[v]]: l
  }, b = -o / 2;
  return v === "left" ? {
    ...x,
    ...Ny(y, f, i, c),
    right: b,
    borderLeftColor: "transparent",
    borderBottomColor: "transparent",
    clipPath: "polygon(100% 0, 0 0, 100% 100%)"
  } : v === "right" ? {
    ...x,
    ...Ny(y, f, i, c),
    left: b,
    borderRightColor: "transparent",
    borderTopColor: "transparent",
    clipPath: "polygon(0 100%, 0 0, 100% 100%)"
  } : v === "top" ? {
    ...x,
    ...jy(y, d, i, c, m),
    bottom: b,
    borderTopColor: "transparent",
    borderLeftColor: "transparent",
    clipPath: "polygon(0 100%, 100% 100%, 100% 0)"
  } : v === "bottom" ? {
    ...x,
    ...jy(y, d, i, c, m),
    top: b,
    borderBottomColor: "transparent",
    borderRightColor: "transparent",
    clipPath: "polygon(0 100%, 0 0, 100% 0)"
  } : {};
}
function VT({ position: a, dir: o }) {
  const [i, l] = a.split("-");
  if (!l) return;
  const c = l === "start" && o === "ltr" || l === "end" && o === "rtl";
  if (i === "bottom") return c ? { borderTopLeftRadius: 0 } : { borderTopRightRadius: 0 };
  if (i === "top") return c ? { borderBottomLeftRadius: 0 } : { borderBottomRightRadius: 0 };
  if (i === "left") return l === "start" ? { borderTopRightRadius: 0 } : { borderBottomRightRadius: 0 };
  if (i === "right") return l === "start" ? { borderTopLeftRadius: 0 } : { borderBottomLeftRadius: 0 };
}
function Zb({ position: a, arrowSize: o, arrowOffset: i, arrowRadius: l, arrowPosition: c, visible: d, arrowX: f, arrowY: m, style: v, ...y }) {
  const { dir: x } = Co();
  return d ? /* @__PURE__ */ (0, g.jsx)("div", {
    role: "presentation",
    ...y,
    style: {
      ...v,
      ...qT({
        position: a,
        arrowSize: o,
        arrowOffset: i,
        arrowRadius: l,
        arrowPosition: c,
        dir: x,
        arrowX: f,
        arrowY: m
      })
    }
  }) : null;
}
Zb.displayName = "@mantine/core/FloatingArrow";
function Fb(a, o) {
  if (a === "rtl" && (o.includes("right") || o.includes("left"))) {
    const [i, l] = o.split("-"), c = i === "right" ? "left" : "right";
    return l === void 0 ? c : `${c}-${l}`;
  }
  return o;
}
function $T({ open: a, close: o, openDelay: i, closeDelay: l }) {
  const c = (0, S.useRef)(-1), d = (0, S.useRef)(-1), f = () => {
    window.clearTimeout(c.current), window.clearTimeout(d.current);
  }, m = () => {
    f(), i === 0 || i === void 0 ? a() : c.current = window.setTimeout(a, i);
  }, v = () => {
    f(), l === 0 || l === void 0 ? o() : d.current = window.setTimeout(o, l);
  };
  return (0, S.useEffect)(() => f, []), {
    openDropdown: m,
    closeDropdown: v
  };
}
var Jb = { root: "m_9814e45f" }, YT = { zIndex: rr("modal") }, e1 = (a, { gradient: o, color: i, backgroundOpacity: l, blur: c, radius: d, zIndex: f }) => ({ root: {
  "--overlay-bg": o || (i !== void 0 || l !== void 0) && po(i || "#000", l ?? 0.6) || void 0,
  "--overlay-filter": c ? `blur(${te(c)})` : void 0,
  "--overlay-radius": d === void 0 ? void 0 : Ht(d),
  "--overlay-z-index": f?.toString()
} }), Rl = In((a) => {
  const o = ue("Overlay", YT, a), { classNames: i, className: l, style: c, styles: d, unstyled: f, vars: m, fixed: v, center: y, children: x, radius: b, zIndex: p, gradient: w, blur: A, color: C, backgroundOpacity: T, mod: R, attributes: O, ..._ } = o, j = ke({
    name: "Overlay",
    props: o,
    classes: Jb,
    className: l,
    style: c,
    classNames: i,
    styles: d,
    unstyled: f,
    attributes: O,
    vars: m,
    varsResolver: e1
  });
  return /* @__PURE__ */ (0, g.jsx)(xe, {
    ...j("root"),
    mod: [{
      center: y,
      fixed: v
    }, R],
    ..._,
    children: x
  });
});
Rl.classes = Jb;
Rl.varsResolver = e1;
Rl.displayName = "@mantine/core/Overlay";
function Jf(a) {
  const o = document.createElement("div");
  return o.setAttribute("data-portal", "true"), typeof a.className == "string" && o.classList.add(...a.className.split(" ").filter(Boolean)), typeof a.style == "object" && Object.assign(o.style, a.style), typeof a.id == "string" && o.setAttribute("id", a.id), o;
}
function GT({ target: a, reuseTargetNode: o, ...i }) {
  if (a)
    return typeof a == "string" ? document.querySelector(a) || Jf(i) : a;
  if (o) {
    const l = document.querySelector("[data-mantine-shared-portal-node]");
    if (l) return l;
    const c = Jf(i);
    return c.setAttribute("data-mantine-shared-portal-node", "true"), document.body.appendChild(c), c;
  }
  return Jf(i);
}
var WT = { reuseTargetNode: !0 }, t1 = Ce((a) => {
  const { children: o, target: i, reuseTargetNode: l, ref: c, ...d } = ue("Portal", WT, a), [f, m] = (0, S.useState)(!1), v = (0, S.useRef)(null);
  return So(() => (m(!0), v.current = GT({
    target: i,
    reuseTargetNode: l,
    ...d
  }), um(c, v.current), !i && !l && v.current && document.body.appendChild(v.current), () => {
    !i && !l && v.current && document.body.removeChild(v.current);
  }), [i]), !f || !v.current ? null : (0, Yc.createPortal)(/* @__PURE__ */ (0, g.jsx)(g.Fragment, { children: o }), v.current);
});
t1.displayName = "@mantine/core/Portal";
var Wc = Ce(({ withinPortal: a = !0, children: o, ...i }) => qm() === "test" || !a ? /* @__PURE__ */ (0, g.jsx)(g.Fragment, { children: o }) : /* @__PURE__ */ (0, g.jsx)(t1, {
  ...i,
  children: o
}));
Wc.displayName = "@mantine/core/OptionalPortal";
var hl = (a) => ({
  in: {
    opacity: 1,
    transform: "scale(1)"
  },
  out: {
    opacity: 0,
    transform: `scale(.9) translateY(${a === "bottom" ? 10 : -10}px)`
  },
  transitionProperty: "transform, opacity"
}), pc = {
  fade: {
    in: { opacity: 1 },
    out: { opacity: 0 },
    transitionProperty: "opacity"
  },
  "fade-up": {
    in: {
      opacity: 1,
      transform: "translateY(0)"
    },
    out: {
      opacity: 0,
      transform: "translateY(30px)"
    },
    transitionProperty: "opacity, transform"
  },
  "fade-down": {
    in: {
      opacity: 1,
      transform: "translateY(0)"
    },
    out: {
      opacity: 0,
      transform: "translateY(-30px)"
    },
    transitionProperty: "opacity, transform"
  },
  "fade-left": {
    in: {
      opacity: 1,
      transform: "translateX(0)"
    },
    out: {
      opacity: 0,
      transform: "translateX(30px)"
    },
    transitionProperty: "opacity, transform"
  },
  "fade-right": {
    in: {
      opacity: 1,
      transform: "translateX(0)"
    },
    out: {
      opacity: 0,
      transform: "translateX(-30px)"
    },
    transitionProperty: "opacity, transform"
  },
  scale: {
    in: {
      opacity: 1,
      transform: "scale(1)"
    },
    out: {
      opacity: 0,
      transform: "scale(0)"
    },
    common: { transformOrigin: "top" },
    transitionProperty: "transform, opacity"
  },
  "scale-y": {
    in: {
      opacity: 1,
      transform: "scaleY(1)"
    },
    out: {
      opacity: 0,
      transform: "scaleY(0)"
    },
    common: { transformOrigin: "top" },
    transitionProperty: "transform, opacity"
  },
  "scale-x": {
    in: {
      opacity: 1,
      transform: "scaleX(1)"
    },
    out: {
      opacity: 0,
      transform: "scaleX(0)"
    },
    common: { transformOrigin: "left" },
    transitionProperty: "transform, opacity"
  },
  "skew-up": {
    in: {
      opacity: 1,
      transform: "translateY(0) skew(0deg, 0deg)"
    },
    out: {
      opacity: 0,
      transform: "translateY(-20px) skew(-10deg, -5deg)"
    },
    common: { transformOrigin: "top" },
    transitionProperty: "transform, opacity"
  },
  "skew-down": {
    in: {
      opacity: 1,
      transform: "translateY(0) skew(0deg, 0deg)"
    },
    out: {
      opacity: 0,
      transform: "translateY(20px) skew(-10deg, -5deg)"
    },
    common: { transformOrigin: "bottom" },
    transitionProperty: "transform, opacity"
  },
  "rotate-left": {
    in: {
      opacity: 1,
      transform: "translateY(0) rotate(0deg)"
    },
    out: {
      opacity: 0,
      transform: "translateY(20px) rotate(-5deg)"
    },
    common: { transformOrigin: "bottom" },
    transitionProperty: "transform, opacity"
  },
  "rotate-right": {
    in: {
      opacity: 1,
      transform: "translateY(0) rotate(0deg)"
    },
    out: {
      opacity: 0,
      transform: "translateY(20px) rotate(5deg)"
    },
    common: { transformOrigin: "top" },
    transitionProperty: "transform, opacity"
  },
  "slide-down": {
    in: {
      opacity: 1,
      transform: "translateY(0)"
    },
    out: {
      opacity: 0,
      transform: "translateY(-100%)"
    },
    common: { transformOrigin: "top" },
    transitionProperty: "transform, opacity"
  },
  "slide-up": {
    in: {
      opacity: 1,
      transform: "translateY(0)"
    },
    out: {
      opacity: 0,
      transform: "translateY(100%)"
    },
    common: { transformOrigin: "bottom" },
    transitionProperty: "transform, opacity"
  },
  "slide-left": {
    in: {
      opacity: 1,
      transform: "translateX(0)"
    },
    out: {
      opacity: 0,
      transform: "translateX(100%)"
    },
    common: { transformOrigin: "left" },
    transitionProperty: "transform, opacity"
  },
  "slide-right": {
    in: {
      opacity: 1,
      transform: "translateX(0)"
    },
    out: {
      opacity: 0,
      transform: "translateX(-100%)"
    },
    common: { transformOrigin: "right" },
    transitionProperty: "transform, opacity"
  },
  pop: {
    ...hl("bottom"),
    common: { transformOrigin: "center center" }
  },
  "pop-bottom-left": {
    ...hl("bottom"),
    common: { transformOrigin: "bottom left" }
  },
  "pop-bottom-right": {
    ...hl("bottom"),
    common: { transformOrigin: "bottom right" }
  },
  "pop-top-left": {
    ...hl("top"),
    common: { transformOrigin: "top left" }
  },
  "pop-top-right": {
    ...hl("top"),
    common: { transformOrigin: "top right" }
  }
}, Oy = {
  entering: "in",
  entered: "in",
  exiting: "out",
  exited: "out",
  "pre-exiting": "out",
  "pre-entering": "out"
};
function My({ transition: a, state: o, duration: i, timingFunction: l }) {
  const c = {
    WebkitBackfaceVisibility: "hidden",
    transitionDuration: `${i}ms`,
    transitionTimingFunction: l
  };
  return typeof a == "string" ? a in pc ? {
    transitionProperty: pc[a].transitionProperty,
    ...c,
    ...pc[a].common,
    ...pc[a][Oy[o]]
  } : {} : {
    transitionProperty: a.transitionProperty,
    ...c,
    ...a.common,
    ...a[Oy[o]]
  };
}
function PT({ duration: a, exitDuration: o, timingFunction: i, mounted: l, onEnter: c, onExit: d, onEntered: f, onExited: m, enterDelay: v, exitDelay: y }) {
  const x = Pn(), b = km(), p = x.respectReducedMotion ? b : !1, [w, A] = (0, S.useState)(p ? 0 : a), [C, T] = (0, S.useState)(l ? "entered" : "exited"), R = (0, S.useRef)(-1), O = (0, S.useRef)(-1), _ = (0, S.useRef)(-1);
  function j() {
    window.clearTimeout(R.current), window.clearTimeout(O.current), cancelAnimationFrame(_.current);
  }
  const L = ($) => {
    j();
    const k = $ ? c : d, Q = $ ? f : m, X = p ? 0 : $ ? a : o;
    A(X), X === 0 ? (typeof k == "function" && k(), typeof Q == "function" && Q(), T($ ? "entered" : "exited")) : _.current = requestAnimationFrame(() => {
      Yc.flushSync(() => {
        T($ ? "pre-entering" : "pre-exiting");
      }), _.current = requestAnimationFrame(() => {
        typeof k == "function" && k(), T($ ? "entering" : "exiting"), R.current = window.setTimeout(() => {
          typeof Q == "function" && Q(), T($ ? "entered" : "exited");
        }, X);
      });
    });
  }, z = ($) => {
    if (j(), typeof ($ ? v : y) != "number") {
      L($);
      return;
    }
    O.current = window.setTimeout(() => {
      L($);
    }, $ ? v : y);
  };
  return Dm(() => {
    z(l);
  }, [l]), (0, S.useEffect)(() => () => {
    j();
  }, []), {
    transitionDuration: w,
    transitionStatus: C,
    transitionTimingFunction: i || "ease"
  };
}
function lr({ keepMounted: a, keepMountedMode: o = "activity", transition: i = "fade", duration: l = 250, exitDuration: c = l, mounted: d, children: f, timingFunction: m = "ease", onExit: v, onEntered: y, onEnter: x, onExited: b, enterDelay: p, exitDelay: w }) {
  const A = qm(), { transitionDuration: C, transitionStatus: T, transitionTimingFunction: R } = PT({
    mounted: d,
    exitDuration: c,
    duration: l,
    timingFunction: m,
    onExit: v,
    onEntered: y,
    onEnter: x,
    onExited: b,
    enterDelay: p,
    exitDelay: w
  });
  if (A === "test") return d ? /* @__PURE__ */ (0, g.jsx)(g.Fragment, { children: f({}) }) : a ? f({ display: "none" }) : null;
  if (C === 0)
    return a ? o === "display-none" ? d ? /* @__PURE__ */ (0, g.jsx)(g.Fragment, { children: f({}) }) : f({ display: "none" }) : /* @__PURE__ */ (0, g.jsx)(S.Activity, {
      mode: d ? "visible" : "hidden",
      children: f({})
    }) : d ? /* @__PURE__ */ (0, g.jsx)(g.Fragment, { children: f({}) }) : null;
  const O = T === "exited";
  if (a) {
    const _ = f(O ? o === "display-none" ? { display: "none" } : {} : My({
      transition: i,
      duration: C,
      state: T,
      timingFunction: R
    }));
    return o === "display-none" ? _ : /* @__PURE__ */ (0, g.jsx)(S.Activity, {
      mode: O ? "hidden" : "visible",
      children: _
    });
  }
  return O ? null : /* @__PURE__ */ (0, g.jsx)(g.Fragment, { children: f(My({
    transition: i,
    duration: C,
    state: T,
    timingFunction: R
  })) });
}
lr.displayName = "@mantine/core/Transition";
var [IT, Pc] = xo("Popover component was not found in the tree");
function n1({ childProps: a, disabled: o, opened: i, longPressDelay: l = 500, setReference: c, open: d }) {
  const f = (0, S.useRef)(!1), m = (0, S.useRef)(!1), v = (0, S.useRef)(null), y = (0, S.useRef)(o);
  y.current = o;
  const x = (A, C, T) => {
    c({
      getBoundingClientRect: () => ({
        x: A,
        y: C,
        width: 0,
        height: 0,
        top: C,
        left: A,
        right: A,
        bottom: C,
        toJSON: () => {
        }
      }),
      contextElement: T
    }), d();
  }, b = ot(a.onMouseDown, (A) => {
    o || A.button === 2 && A.stopPropagation();
  }), p = ot(a.onContextMenu, (A) => {
    o || A.defaultPrevented || (A.preventDefault(), !m.current && (x(A.clientX, A.clientY, A.currentTarget), f.current && (m.current = !0)));
  }), w = D2((A) => {
    if (y.current || m.current) return;
    const C = A, T = C.touches[0] ?? C.changedTouches[0];
    T && (x(T.clientX, T.clientY, v.current), m.current = !0);
  }, {
    threshold: l,
    events: ["touch"],
    cancelOnMove: !0,
    onStart: (A) => {
      f.current = !0, m.current = !1, v.current = A.currentTarget;
    },
    onFinish: (A) => {
      f.current = !1, m.current = !1, y.current || A.preventDefault();
    },
    onCancel: () => {
      f.current = !1, m.current = !1;
    }
  });
  return {
    onContextMenu: p,
    onMouseDown: b,
    onTouchStart: ot(a.onTouchStart, w.onTouchStart),
    onTouchEnd: ot(a.onTouchEnd, w.onTouchEnd),
    onTouchCancel: ot(a.onTouchCancel, w.onTouchCancel),
    onTouchMove: ot(a.onTouchMove, w.onTouchMove),
    style: o ? a.style : {
      ...a.style,
      WebkitTouchCallout: "none",
      WebkitUserSelect: "none",
      userSelect: "none"
    },
    "data-expanded": i ? !0 : void 0
  };
}
function a1(a) {
  const { children: o, disabled: i, longPressDelay: l } = ue("PopoverContextMenu", null, a), c = ir(o);
  if (!c) throw new Error("Popover.ContextMenu component children should be an element or a component that accepts ref. Fragments, strings, numbers and other primitive values are not supported");
  const d = Pc(), f = n1({
    childProps: c.props,
    disabled: i || d.disabled,
    opened: d.opened,
    longPressDelay: l,
    setReference: d.reference,
    open: () => {
      d.opened || d.onToggle();
    }
  });
  return (0, S.cloneElement)(c, f);
}
a1.displayName = "@mantine/core/PopoverContextMenu";
function Ic({ children: a, active: o = !0, refProp: i = "ref", innerRef: l }) {
  const c = C2(o), d = ct(c, l), f = ir(a);
  return f ? (0, S.cloneElement)(f, { [i]: d }) : a;
}
function o1(a) {
  return /* @__PURE__ */ (0, g.jsx)(nh, {
    tabIndex: -1,
    "data-autofocus": !0,
    ...a
  });
}
Ic.displayName = "@mantine/core/FocusTrap";
o1.displayName = "@mantine/core/FocusTrapInitialFocus";
Ic.InitialFocus = o1;
var r1 = {
  dropdown: "m_38a85659",
  arrow: "m_a31dc6c1",
  overlay: "m_3d7bc908"
}, ah = Ce((a) => {
  const o = ue("PopoverDropdown", null, a), { className: i, style: l, vars: c, children: d, onKeyDownCapture: f, variant: m, classNames: v, styles: y, ref: x, ...b } = o, p = Pc(), { dir: w } = Co(), A = p.arrowPosition === "merge" && p.withArrow ? VT({
    position: p.placement,
    dir: w
  }) : void 0, C = tb({
    opened: p.opened,
    shouldReturnFocus: p.returnFocus
  }), T = p.withRoles ? {
    "aria-labelledby": p.getTargetId(),
    id: p.getDropdownId(),
    role: "dialog",
    tabIndex: -1
  } : {}, R = ct(x, p.floating);
  return p.disabled ? null : /* @__PURE__ */ (0, g.jsx)(Wc, {
    ...p.portalProps,
    withinPortal: p.withinPortal,
    children: /* @__PURE__ */ (0, g.jsx)(lr, {
      mounted: p.opened,
      ...p.transitionProps,
      transition: p.transitionProps?.transition || "fade",
      duration: p.transitionProps?.duration ?? 150,
      keepMounted: p.keepMounted,
      keepMountedMode: p.keepMountedMode,
      exitDuration: typeof p.transitionProps?.exitDuration == "number" ? p.transitionProps.exitDuration : p.transitionProps?.duration,
      children: (O) => /* @__PURE__ */ (0, g.jsx)(Ic, {
        active: p.trapFocus && p.opened,
        innerRef: R,
        children: /* @__PURE__ */ (0, g.jsxs)(xe, {
          ...T,
          ...b,
          variant: m,
          onKeyDownCapture: u2(() => {
            p.onClose?.(), p.onDismiss?.();
          }, {
            active: p.closeOnEscape,
            onTrigger: C,
            onKeyDown: f
          }),
          "data-position": p.placement,
          "data-fixed": p.floatingStrategy === "fixed" || void 0,
          ...p.getStyles("dropdown", {
            className: i,
            props: o,
            classNames: v,
            styles: y,
            style: [
              {
                ...O,
                ...A,
                zIndex: p.zIndex,
                top: p.y ?? 0,
                left: p.x ?? 0,
                width: p.width === "target" ? void 0 : te(p.width),
                ...p.referenceHidden ? { display: "none" } : null
              },
              p.resolvedStyles?.dropdown,
              y?.dropdown,
              l
            ]
          }),
          children: [d, /* @__PURE__ */ (0, g.jsx)(Zb, {
            ref: p.arrowRef,
            arrowX: p.arrowX,
            arrowY: p.arrowY,
            visible: p.withArrow,
            position: p.placement,
            arrowSize: p.arrowSize,
            arrowRadius: p.arrowRadius,
            arrowOffset: p.arrowOffset,
            arrowPosition: p.arrowPosition,
            ...p.getStyles("arrow", {
              props: o,
              classNames: v,
              styles: y
            })
          })]
        })
      })
    })
  });
});
ah.classes = r1;
ah.displayName = "@mantine/core/PopoverDropdown";
var XT = {
  refProp: "ref",
  popupType: "dialog"
}, i1 = Ce((a) => {
  const { children: o, refProp: i, popupType: l, ref: c, ...d } = ue("PopoverTarget", XT, a), f = ir(o);
  if (!f) throw new Error("Popover.Target component children should be an element or a component that accepts ref. Fragments, strings, numbers and other primitive values are not supported");
  const m = d, v = Pc(), y = ct(v.reference, ib(f), c), x = v.withRoles ? {
    "aria-haspopup": l,
    "aria-expanded": v.opened,
    "aria-controls": v.opened ? v.getDropdownId() : void 0,
    id: v.getTargetId()
  } : {}, b = f.props;
  return (0, S.cloneElement)(f, {
    ...m,
    ...x,
    ...v.targetProps,
    className: qt(v.targetProps.className, m.className, b.className),
    [i]: y,
    ...v.controlled ? null : { onClick: (p) => {
      v.onToggle(), b.onClick?.(p);
    } }
  });
});
i1.displayName = "@mantine/core/PopoverTarget";
function QT(a) {
  if (a === void 0) return {
    shift: !0,
    flip: !0
  };
  const o = { ...a };
  return a.shift === void 0 && (o.shift = !0), a.flip === void 0 && (o.flip = !0), o;
}
function KT(a, o, i, l) {
  const c = QT(a.middlewares), d = [cT(a.offset), hT()];
  if (c.flip && !i) {
    const f = typeof c.flip == "boolean" ? {} : c.flip, m = l ? {
      fallbackStrategy: "initialPlacement",
      ...f
    } : f;
    d.push(fT(m));
  }
  if (c.shift) {
    const f = typeof c.shift == "boolean" ? {} : c.shift;
    d.push(uT((m) => {
      const v = m.placement.startsWith("top") || m.placement.startsWith("bottom");
      return {
        limiter: dT(),
        padding: 5,
        ...a.width === "target" && v ? { mainAxis: !1 } : null,
        ...f
      };
    }));
  }
  return c.inline && d.push(typeof c.inline == "boolean" ? xy() : xy(c.inline)), d.push(vT({
    element: a.arrowRef,
    padding: a.arrowOffset
  })), (c.size || a.width === "target") && d.push(mT({
    ...typeof c.size == "boolean" ? {} : c.size,
    apply({ rects: f, availableWidth: m, availableHeight: v, ...y }) {
      const x = o().refs.floating.current?.style ?? {};
      c.size && (typeof c.size == "object" && c.size.apply ? c.size.apply({
        rects: f,
        availableWidth: m,
        availableHeight: v,
        ...y
      }) : Object.assign(x, {
        maxWidth: `${m}px`,
        maxHeight: `${v}px`
      })), a.width === "target" && Object.assign(x, { width: `${f.reference.width}px` });
    }
  })), d;
}
function ZT(a) {
  const [o, i] = Qt({
    value: a.opened,
    defaultValue: a.defaultOpened,
    finalValue: !1,
    onChange: a.onChange
  }), l = (0, S.useRef)(o), c = (0, S.useRef)(!1), [d, f] = (0, S.useState)(null), m = a.preventPositionChangeWhenVisible !== !1, v = (0, S.useRef)(o);
  o !== v.current && (v.current = o, o && d !== null && f(null));
  const y = (0, S.useRef)(a.position);
  a.position !== y.current && (y.current = a.position, c.current = !1, d !== null && f(null));
  const x = (0, S.useCallback)(() => f(null), []), b = () => {
    o && !a.disabled && i(!1);
  }, p = () => {
    a.disabled || i(!o);
  }, w = Yb({
    open: o,
    strategy: a.strategy,
    placement: m ? d ?? a.position : a.position,
    middleware: KT(a, () => w, m && d !== null, m),
    whileElementsMounted: a.keepMounted ? void 0 : by
  });
  (0, S.useEffect)(() => {
    if (!a.keepMounted) return;
    const C = w.refs.reference.current, T = w.refs.floating.current;
    if (o && C && T) return by(C, T, w.update);
  }, [
    a.keepMounted,
    o,
    w.update,
    w.elements.reference,
    w.elements.floating
  ]), So(() => {
    if (!o) {
      c.current = !1;
      return;
    }
    if (!m || d !== null) return;
    const C = w.refs.floating.current;
    if (!(!C || C.offsetHeight === 0 || C.offsetWidth === 0)) {
      if (!c.current) {
        c.current = !0, w.update();
        return;
      }
      w.isPositioned && f(w.placement);
    }
  }, [
    m,
    o,
    w.isPositioned,
    w.placement,
    d,
    w.update
  ]);
  const A = (0, S.useRef)(w.placement);
  return So(() => {
    A.current !== w.placement && (A.current = w.placement, a.onPositionChange?.(w.placement));
  }, [w.placement]), Dm(() => {
    o !== l.current && (o ? a.onOpen?.() : a.onClose?.()), l.current = o;
  }, [
    o,
    a.onClose,
    a.onOpen
  ]), {
    floating: w,
    controlled: typeof a.opened == "boolean",
    opened: o,
    onClose: b,
    onToggle: p,
    resetLockedPlacement: x
  };
}
var FT = {
  position: "bottom",
  offset: 8,
  transitionProps: {
    transition: "fade",
    duration: 150
  },
  middlewares: {
    flip: !0,
    shift: !0,
    inline: !1
  },
  arrowSize: 7,
  arrowOffset: 5,
  arrowRadius: 0,
  arrowPosition: "side",
  closeOnClickOutside: !0,
  withinPortal: !0,
  closeOnEscape: !0,
  trapFocus: !1,
  withRoles: !0,
  returnFocus: !1,
  withOverlay: !1,
  hideDetached: !0,
  preventPositionChangeWhenVisible: !0,
  clickOutsideEvents: ["mousedown", "touchstart"],
  zIndex: rr("popover"),
  __staticSelector: "Popover",
  width: "max-content"
}, l1 = (a, { radius: o, shadow: i }) => ({ dropdown: {
  "--popover-radius": o === void 0 ? void 0 : Ht(o),
  "--popover-shadow": zm(i)
} });
function gt(a) {
  const o = ue("Popover", FT, a), { children: i, position: l, offset: c, onPositionChange: d, opened: f, transitionProps: m, onExitTransitionEnd: v, onEnterTransitionEnd: y, width: x, middlewares: b, withArrow: p, arrowSize: w, arrowOffset: A, arrowRadius: C, arrowPosition: T, unstyled: R, classNames: O, styles: _, closeOnClickOutside: j, withinPortal: L, portalProps: z, closeOnEscape: $, clickOutsideEvents: k, trapFocus: Q, onClose: X, onDismiss: oe, onOpen: re, onChange: ne, zIndex: F, radius: me, shadow: H, id: I, defaultOpened: W, __staticSelector: Z, withRoles: ae, disabled: be, returnFocus: de, variant: we, keepMounted: Ae, keepMountedMode: M, vars: K, floatingStrategy: se, withOverlay: le, overlayProps: he, hideDetached: ie, attributes: ye, preventPositionChangeWhenVisible: ce, ...ve } = o, V = ke({
    name: Z,
    props: o,
    classes: r1,
    classNames: O,
    styles: _,
    unstyled: R,
    attributes: ye,
    rootSelector: "dropdown",
    vars: K,
    varsResolver: l1
  }), { resolvedStyles: pe } = Tl({
    classNames: O,
    styles: _,
    props: o
  }), Te = (0, S.useRef)(null), [je, Be] = (0, S.useState)(null), [Oe, rt] = (0, S.useState)(null), { dir: dt } = Co(), wt = qm(), Nt = Dn(I), $e = ZT({
    middlewares: b,
    width: x,
    position: Fb(dt, l),
    offset: typeof c == "number" ? c + (p ? w / 2 : 0) : c,
    arrowRef: Te,
    arrowOffset: A,
    onPositionChange: d,
    opened: f,
    defaultOpened: W,
    onChange: ne,
    onOpen: re,
    onClose: X,
    onDismiss: oe,
    strategy: se,
    disabled: be,
    preventPositionChangeWhenVisible: ce,
    keepMounted: Ae
  });
  h2(() => {
    j && ($e.onClose(), oe?.());
  }, k, [je, Oe]);
  const Vt = (0, S.useCallback)((Kt) => {
    Be(Kt), $e.floating.refs.setReference(Kt);
  }, [$e.floating.refs.setReference]), Ye = (0, S.useCallback)((Kt) => {
    rt(Kt), $e.floating.refs.setFloating(Kt);
  }, [$e.floating.refs.setFloating]), pa = (0, S.useCallback)(() => {
    m?.onExited?.(), v?.(), $e.resetLockedPlacement();
  }, [
    m?.onExited,
    v,
    $e.resetLockedPlacement
  ]), Pe = (0, S.useCallback)(() => {
    m?.onEntered?.(), y?.();
  }, [m?.onEntered, y]);
  return /* @__PURE__ */ (0, g.jsxs)(IT, {
    value: {
      returnFocus: de,
      disabled: be,
      controlled: $e.controlled,
      reference: Vt,
      floating: Ye,
      x: $e.floating.x,
      y: $e.floating.y,
      arrowX: $e.floating?.middlewareData?.arrow?.x,
      arrowY: $e.floating?.middlewareData?.arrow?.y,
      opened: $e.opened,
      arrowRef: Te,
      transitionProps: {
        ...m,
        onExited: pa,
        onEntered: Pe
      },
      width: x,
      withArrow: p,
      arrowSize: w,
      arrowOffset: A,
      arrowRadius: C,
      arrowPosition: T,
      placement: $e.floating.placement,
      trapFocus: Q,
      withinPortal: L,
      portalProps: z,
      zIndex: F,
      radius: me,
      shadow: H,
      closeOnEscape: $,
      onDismiss: oe,
      onClose: $e.onClose,
      onToggle: $e.onToggle,
      getTargetId: () => Nt,
      getDropdownId: () => `${Nt}-dropdown`,
      withRoles: ae,
      targetProps: ve,
      __staticSelector: Z,
      classNames: O,
      styles: _,
      unstyled: R,
      variant: we,
      keepMounted: Ae,
      keepMountedMode: M,
      getStyles: V,
      resolvedStyles: pe,
      floatingStrategy: se,
      referenceHidden: ie && wt !== "test" ? $e.floating.middlewareData.hide?.referenceHidden : !1
    },
    children: [i, le && /* @__PURE__ */ (0, g.jsx)(lr, {
      transition: "fade",
      mounted: $e.opened,
      duration: m?.duration || 250,
      exitDuration: m?.exitDuration || 250,
      children: (Kt) => /* @__PURE__ */ (0, g.jsx)(Wc, {
        withinPortal: L,
        children: /* @__PURE__ */ (0, g.jsx)(Rl, {
          ...he,
          ...V("overlay", {
            className: he?.className,
            style: [Kt, he?.style]
          })
        })
      })
    })]
  });
}
gt.Target = i1;
gt.Dropdown = ah;
gt.ContextMenu = a1;
gt.varsResolver = l1;
gt.displayName = "@mantine/core/Popover";
gt.extend = (a) => a;
gt.withProps = (a) => {
  const o = (i) => /* @__PURE__ */ (0, g.jsx)(gt, {
    ...a,
    ...i
  });
  return o.extend = gt.extend, o.displayName = `WithProps(${gt.displayName})`, o;
};
var Gn = {
  root: "m_5ae2e3c",
  barsLoader: "m_7a2bd4cd",
  bar: "m_870bb79",
  "bars-loader-animation": "m_5d2b3b9d",
  dotsLoader: "m_4e3f22d7",
  dot: "m_870c4af",
  "loader-dots-animation": "m_aac34a1",
  ovalLoader: "m_b34414df",
  "oval-loader-animation": "m_f8e89c4b"
}, s1 = ({ className: a, ...o }) => /* @__PURE__ */ (0, g.jsxs)(xe, {
  component: "span",
  className: qt(Gn.barsLoader, a),
  ...o,
  children: [
    /* @__PURE__ */ (0, g.jsx)("span", { className: Gn.bar }),
    /* @__PURE__ */ (0, g.jsx)("span", { className: Gn.bar }),
    /* @__PURE__ */ (0, g.jsx)("span", { className: Gn.bar })
  ]
});
s1.displayName = "@mantine/core/Bars";
var c1 = ({ className: a, ...o }) => /* @__PURE__ */ (0, g.jsxs)(xe, {
  component: "span",
  className: qt(Gn.dotsLoader, a),
  ...o,
  children: [
    /* @__PURE__ */ (0, g.jsx)("span", { className: Gn.dot }),
    /* @__PURE__ */ (0, g.jsx)("span", { className: Gn.dot }),
    /* @__PURE__ */ (0, g.jsx)("span", { className: Gn.dot })
  ]
});
c1.displayName = "@mantine/core/Dots";
var u1 = ({ className: a, ...o }) => /* @__PURE__ */ (0, g.jsx)(xe, {
  component: "span",
  className: qt(Gn.ovalLoader, a),
  ...o
});
u1.displayName = "@mantine/core/Oval";
var d1 = {
  bars: s1,
  oval: u1,
  dots: c1
}, JT = {
  loaders: d1,
  type: "oval"
}, f1 = (a, { size: o, color: i }) => ({ root: {
  "--loader-size": qe(o, "loader-size"),
  "--loader-color": i ? an(i, a) : void 0
} }), sr = Ce((a) => {
  const o = ue("Loader", JT, a), { size: i, color: l, type: c, vars: d, className: f, style: m, classNames: v, styles: y, unstyled: x, loaders: b, variant: p, children: w, attributes: A, ...C } = o, T = ke({
    name: "Loader",
    props: o,
    classes: Gn,
    className: f,
    style: m,
    classNames: v,
    styles: y,
    unstyled: x,
    attributes: A,
    vars: d,
    varsResolver: f1
  });
  return w ? /* @__PURE__ */ (0, g.jsx)(xe, {
    ...T("root"),
    ...C,
    children: w
  }) : /* @__PURE__ */ (0, g.jsx)(xe, {
    ...T("root"),
    component: b[c],
    variant: p,
    size: i,
    ...C
  });
});
sr.defaultLoaders = d1;
sr.classes = Gn;
sr.varsResolver = f1;
sr.displayName = "@mantine/core/Loader";
var mi = {
  root: "m_8d3f4000",
  icon: "m_8d3afb97",
  loader: "m_302b9fb1",
  group: "m_1a0f1b21",
  groupSection: "m_437b6484"
}, eR = { orientation: "horizontal" }, m1 = (a, { borderWidth: o }) => ({ group: { "--ai-border-width": te(o) } }), Xc = Ce((a) => {
  const o = ue("ActionIconGroup", eR, a), { className: i, style: l, classNames: c, styles: d, unstyled: f, orientation: m, vars: v, borderWidth: y, variant: x, mod: b, attributes: p, ...w } = o, A = ke({
    name: "ActionIconGroup",
    props: o,
    classes: mi,
    className: i,
    style: l,
    classNames: c,
    styles: d,
    unstyled: f,
    attributes: p,
    vars: v,
    varsResolver: m1,
    rootSelector: "group"
  });
  return /* @__PURE__ */ (0, g.jsx)(xe, {
    ...A("group"),
    variant: x,
    mod: [{ orientation: m }, b],
    role: "group",
    ...w
  });
});
Xc.classes = mi;
Xc.varsResolver = m1;
Xc.displayName = "@mantine/core/ActionIconGroup";
var h1 = (a, { radius: o, color: i, gradient: l, variant: c, autoContrast: d, size: f }) => {
  const m = a.variantColorResolver({
    color: i || a.primaryColor,
    theme: a,
    gradient: l,
    variant: c || "filled",
    autoContrast: d
  });
  return { groupSection: {
    "--section-height": qe(f, "section-height"),
    "--section-padding-x": qe(f, "section-padding-x"),
    "--section-fz": _t(f),
    "--section-radius": o === void 0 ? void 0 : Ht(o),
    "--section-bg": i || c ? m.background : void 0,
    "--section-color": m.color,
    "--section-bd": i || c ? m.border : void 0
  } };
}, Qc = Ce((a) => {
  const o = ue("ActionIconGroupSection", null, a), { className: i, style: l, classNames: c, styles: d, unstyled: f, vars: m, variant: v, gradient: y, radius: x, autoContrast: b, attributes: p, ...w } = o, A = ke({
    name: "ActionIconGroupSection",
    props: o,
    classes: mi,
    className: i,
    style: l,
    classNames: c,
    styles: d,
    unstyled: f,
    attributes: p,
    vars: m,
    varsResolver: h1,
    rootSelector: "groupSection"
  });
  return /* @__PURE__ */ (0, g.jsx)(xe, {
    ...A("groupSection"),
    variant: v,
    ...w
  });
});
Qc.classes = mi;
Qc.varsResolver = h1;
Qc.displayName = "@mantine/core/ActionIconGroupSection";
var v1 = (a, { size: o, radius: i, variant: l, gradient: c, color: d, autoContrast: f }) => {
  const m = a.variantColorResolver({
    color: d || a.primaryColor,
    theme: a,
    gradient: c,
    variant: l || "filled",
    autoContrast: f
  });
  return { root: {
    "--ai-size": qe(o, "ai-size"),
    "--ai-radius": i === void 0 ? void 0 : Ht(i),
    "--ai-bg": d || l ? m.background : void 0,
    "--ai-hover": d || l ? m.hover : void 0,
    "--ai-hover-color": d || l ? m.hoverColor : void 0,
    "--ai-color": m.color,
    "--ai-bd": d || l ? m.border : void 0
  } };
}, hi = In((a) => {
  const o = ue("ActionIcon", null, a), { className: i, unstyled: l, variant: c, classNames: d, styles: f, style: m, loading: v, loaderProps: y, size: x, color: b, radius: p, __staticSelector: w, gradient: A, vars: C, children: T, disabled: R, "data-disabled": O, autoContrast: _, mod: j, attributes: L, ...z } = o, $ = ke({
    name: ["ActionIcon", w],
    props: o,
    className: i,
    style: m,
    classes: mi,
    classNames: d,
    styles: f,
    unstyled: l,
    attributes: L,
    vars: C,
    varsResolver: v1
  });
  return /* @__PURE__ */ (0, g.jsxs)(Ua, {
    ...$("root", { active: !R && !v && !O }),
    "aria-busy": v || void 0,
    ...z,
    unstyled: l,
    variant: c,
    size: x,
    disabled: R || v,
    mod: [{
      loading: v,
      disabled: R || O
    }, j],
    children: [typeof v == "boolean" && /* @__PURE__ */ (0, g.jsx)(lr, {
      mounted: v,
      transition: "slide-down",
      duration: 150,
      children: (k) => /* @__PURE__ */ (0, g.jsx)(xe, {
        component: "span",
        ...$("loader", { style: k }),
        "aria-hidden": !0,
        children: /* @__PURE__ */ (0, g.jsx)(sr, {
          color: "var(--ai-color)",
          size: "calc(var(--ai-size) * 0.55)",
          ...y
        })
      })
    }), /* @__PURE__ */ (0, g.jsx)(xe, {
      component: "span",
      mod: { loading: v },
      ...$("icon"),
      children: T
    })]
  });
});
hi.classes = mi;
hi.varsResolver = v1;
hi.displayName = "@mantine/core/ActionIcon";
hi.Group = Xc;
hi.GroupSection = Qc;
function p1({ size: a = "var(--cb-icon-size, 70%)", style: o, ...i }) {
  return /* @__PURE__ */ (0, g.jsx)("svg", {
    viewBox: "0 0 15 15",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    style: {
      ...o,
      width: a,
      height: a
    },
    ...i,
    children: /* @__PURE__ */ (0, g.jsx)("path", {
      d: "M11.7816 4.03157C12.0062 3.80702 12.0062 3.44295 11.7816 3.2184C11.5571 2.99385 11.193 2.99385 10.9685 3.2184L7.50005 6.68682L4.03164 3.2184C3.80708 2.99385 3.44301 2.99385 3.21846 3.2184C2.99391 3.44295 2.99391 3.80702 3.21846 4.03157L6.68688 7.49999L3.21846 10.9684C2.99391 11.193 2.99391 11.557 3.21846 11.7816C3.44301 12.0061 3.80708 12.0061 4.03164 11.7816L7.50005 8.31316L10.9685 11.7816C11.193 12.0061 11.5571 12.0061 11.7816 11.7816C12.0062 11.557 12.0062 11.193 11.7816 10.9684L8.31322 7.49999L11.7816 4.03157Z",
      fill: "currentColor",
      fillRule: "evenodd",
      clipRule: "evenodd"
    })
  });
}
p1.displayName = "@mantine/core/CloseIcon";
var g1 = {
  root: "m_86a44da5",
  "root--subtle": "m_220c80f2"
}, tR = { variant: "subtle" }, y1 = (a, { size: o, radius: i, iconSize: l }) => ({ root: {
  "--cb-size": qe(o, "cb-size"),
  "--cb-radius": i === void 0 ? void 0 : Ht(i),
  "--cb-icon-size": te(l)
} }), vi = In((a) => {
  const o = ue("CloseButton", tR, a), { iconSize: i, children: l, vars: c, radius: d, className: f, classNames: m, style: v, styles: y, unstyled: x, "data-disabled": b, disabled: p, variant: w, icon: A, mod: C, attributes: T, __staticSelector: R, ...O } = o, _ = ke({
    name: R || "CloseButton",
    props: o,
    className: f,
    style: v,
    classes: g1,
    classNames: m,
    styles: y,
    unstyled: x,
    attributes: T,
    vars: c,
    varsResolver: y1
  });
  return /* @__PURE__ */ (0, g.jsxs)(Ua, {
    ...O,
    unstyled: x,
    variant: w,
    disabled: p,
    mod: [{ disabled: p || b }, C],
    ..._("root", {
      variant: w,
      active: !p && !b
    }),
    children: [A || /* @__PURE__ */ (0, g.jsx)(p1, {}), l]
  });
});
vi.classes = g1;
vi.varsResolver = y1;
vi.displayName = "@mantine/core/CloseButton";
var [nR, qa] = xo("ModalBase component was not found in tree");
function aR({ opened: a, transitionDuration: o }) {
  const [i, l] = (0, S.useState)(a), c = (0, S.useRef)(-1), d = km() ? 0 : o;
  return (0, S.useEffect)(() => (a ? (l(!0), window.clearTimeout(c.current)) : d === 0 ? l(!1) : c.current = window.setTimeout(() => l(!1), d), () => window.clearTimeout(c.current)), [a, d]), i;
}
function oR({ id: a, transitionProps: o, opened: i, trapFocus: l, closeOnEscape: c, onClose: d, returnFocus: f, handledEscapeEvents: m }) {
  const v = Dn(a), [y, x] = (0, S.useState)(!1), [b, p] = (0, S.useState)(!1), w = typeof o?.duration == "number" ? o?.duration : 200, A = aR({
    opened: i,
    transitionDuration: w
  });
  return E2("keydown", (C) => {
    C.key === "Escape" && c && !C.isComposing && i && !m?.has(C) && C.target?.getAttribute("data-mantine-stop-propagation") !== "true" && (m?.add(C), d());
  }, { capture: !0 }), tb({
    opened: i,
    shouldReturnFocus: l && f
  }), {
    _id: v,
    titleMounted: y,
    bodyMounted: b,
    shouldLockScroll: A,
    setTitleMounted: x,
    setBodyMounted: p
  };
}
var sa = function() {
  return sa = Object.assign || function(o) {
    for (var i, l = 1, c = arguments.length; l < c; l++) {
      i = arguments[l];
      for (var d in i) Object.prototype.hasOwnProperty.call(i, d) && (o[d] = i[d]);
    }
    return o;
  }, sa.apply(this, arguments);
};
function b1(a, o) {
  var i = {};
  for (var l in a) Object.prototype.hasOwnProperty.call(a, l) && o.indexOf(l) < 0 && (i[l] = a[l]);
  if (a != null && typeof Object.getOwnPropertySymbols == "function")
    for (var c = 0, l = Object.getOwnPropertySymbols(a); c < l.length; c++) o.indexOf(l[c]) < 0 && Object.prototype.propertyIsEnumerable.call(a, l[c]) && (i[l[c]] = a[l[c]]);
  return i;
}
function rR(a, o, i) {
  if (i || arguments.length === 2)
    for (var l = 0, c = o.length, d; l < c; l++) (d || !(l in o)) && (d || (d = Array.prototype.slice.call(o, 0, l)), d[l] = o[l]);
  return a.concat(d || Array.prototype.slice.call(o));
}
var Cc = "right-scroll-bar-position", Ec = "width-before-scroll-bar", iR = "with-scroll-bars-hidden", lR = "--removed-body-scroll-bar-size";
function em(a, o) {
  return typeof a == "function" ? a(o) : a && (a.current = o), a;
}
function sR(a, o) {
  var i = (0, S.useState)(function() {
    return {
      value: a,
      callback: o,
      facade: {
        get current() {
          return i.value;
        },
        set current(l) {
          var c = i.value;
          c !== l && (i.value = l, i.callback(l, c));
        }
      }
    };
  })[0];
  return i.callback = o, i.facade;
}
var cR = typeof window < "u" ? S.useLayoutEffect : S.useEffect, zy = /* @__PURE__ */ new WeakMap();
function uR(a, o) {
  var i = sR(o || null, function(l) {
    return a.forEach(function(c) {
      return em(c, l);
    });
  });
  return cR(function() {
    var l = zy.get(i);
    if (l) {
      var c = new Set(l), d = new Set(a), f = i.current;
      c.forEach(function(m) {
        d.has(m) || em(m, null);
      }), d.forEach(function(m) {
        c.has(m) || em(m, f);
      });
    }
    zy.set(i, a);
  }, [a]), i;
}
function dR(a) {
  return a;
}
function fR(a, o) {
  o === void 0 && (o = dR);
  var i = [], l = !1;
  return {
    read: function() {
      if (l) throw new Error("Sidecar: could not `read` from an `assigned` medium. `read` could be used only with `useMedium`.");
      return i.length ? i[i.length - 1] : a;
    },
    useMedium: function(c) {
      var d = o(c, l);
      return i.push(d), function() {
        i = i.filter(function(f) {
          return f !== d;
        });
      };
    },
    assignSyncMedium: function(c) {
      for (l = !0; i.length; ) {
        var d = i;
        i = [], d.forEach(c);
      }
      i = {
        push: function(f) {
          return c(f);
        },
        filter: function() {
          return i;
        }
      };
    },
    assignMedium: function(c) {
      l = !0;
      var d = [];
      if (i.length) {
        var f = i;
        i = [], f.forEach(c), d = i;
      }
      var m = function() {
        var y = d;
        d = [], y.forEach(c);
      }, v = function() {
        return Promise.resolve().then(m);
      };
      v(), i = {
        push: function(y) {
          d.push(y), v();
        },
        filter: function(y) {
          return d = d.filter(y), i;
        }
      };
    }
  };
}
function mR(a) {
  a === void 0 && (a = {});
  var o = fR(null);
  return o.options = sa({
    async: !0,
    ssr: !1
  }, a), o;
}
var S1 = function(a) {
  var o = a.sideCar, i = b1(a, ["sideCar"]);
  if (!o) throw new Error("Sidecar: please provide `sideCar` property to import the right car");
  var l = o.read();
  if (!l) throw new Error("Sidecar medium not found");
  return S.createElement(l, sa({}, i));
};
S1.isSideCarExport = !0;
function hR(a, o) {
  return a.useMedium(o), S1;
}
var w1 = mR(), tm = function() {
}, Kc = S.forwardRef(function(a, o) {
  var i = S.useRef(null), l = S.useState({
    onScrollCapture: tm,
    onWheelCapture: tm,
    onTouchMoveCapture: tm
  }), c = l[0], d = l[1], f = a.forwardProps, m = a.children, v = a.className, y = a.removeScrollBar, x = a.enabled, b = a.shards, p = a.sideCar, w = a.noRelative, A = a.noIsolation, C = a.inert, T = a.allowPinchZoom, R = a.as, O = R === void 0 ? "div" : R, _ = a.gapMode, j = b1(a, [
    "forwardProps",
    "children",
    "className",
    "removeScrollBar",
    "enabled",
    "shards",
    "sideCar",
    "noRelative",
    "noIsolation",
    "inert",
    "allowPinchZoom",
    "as",
    "gapMode"
  ]), L = p, z = uR([i, o]), $ = sa(sa({}, j), c);
  return S.createElement(S.Fragment, null, x && S.createElement(L, {
    sideCar: w1,
    removeScrollBar: y,
    shards: b,
    noRelative: w,
    noIsolation: A,
    inert: C,
    setCallbacks: d,
    allowPinchZoom: !!T,
    lockRef: i,
    gapMode: _
  }), f ? S.cloneElement(S.Children.only(m), sa(sa({}, $), { ref: z })) : S.createElement(O, sa({}, $, {
    className: v,
    ref: z
  }), m));
});
Kc.defaultProps = {
  enabled: !0,
  removeScrollBar: !0,
  inert: !1
};
Kc.classNames = {
  fullWidth: Ec,
  zeroRight: Cc
};
var Dy, vR = function() {
  if (Dy) return Dy;
  if (typeof __webpack_nonce__ < "u") return __webpack_nonce__;
};
function pR() {
  if (!document) return null;
  var a = document.createElement("style");
  a.type = "text/css";
  var o = vR();
  return o && a.setAttribute("nonce", o), a;
}
function gR(a, o) {
  a.styleSheet ? a.styleSheet.cssText = o : a.appendChild(document.createTextNode(o));
}
function yR(a) {
  (document.head || document.getElementsByTagName("head")[0]).appendChild(a);
}
var bR = function() {
  var a = 0, o = null;
  return {
    add: function(i) {
      a == 0 && (o = pR()) && (gR(o, i), yR(o)), a++;
    },
    remove: function() {
      a--, !a && o && (o.parentNode && o.parentNode.removeChild(o), o = null);
    }
  };
}, SR = function() {
  var a = bR();
  return function(o, i) {
    S.useEffect(function() {
      return a.add(o), function() {
        a.remove();
      };
    }, [o && i]);
  };
}, x1 = function() {
  var a = SR(), o = function(i) {
    var l = i.styles, c = i.dynamic;
    return a(l, c), null;
  };
  return o;
}, wR = {
  left: 0,
  top: 0,
  right: 0,
  gap: 0
}, nm = function(a) {
  return parseInt(a || "", 10) || 0;
}, xR = function(a) {
  var o = window.getComputedStyle(document.body), i = o[a === "padding" ? "paddingLeft" : "marginLeft"], l = o[a === "padding" ? "paddingTop" : "marginTop"], c = o[a === "padding" ? "paddingRight" : "marginRight"];
  return [
    nm(i),
    nm(l),
    nm(c)
  ];
}, CR = function(a) {
  if (a === void 0 && (a = "margin"), typeof window > "u") return wR;
  var o = xR(a), i = document.documentElement.clientWidth, l = window.innerWidth;
  return {
    left: o[0],
    top: o[1],
    right: o[2],
    gap: Math.max(0, l - i + o[2] - o[0])
  };
}, ER = x1(), yl = "data-scroll-locked", AR = function(a, o, i, l) {
  var c = a.left, d = a.top, f = a.right, m = a.gap;
  return i === void 0 && (i = "margin"), `
  .`.concat(iR, ` {
   overflow: hidden `).concat(l, `;
   padding-right: `).concat(m, "px ").concat(l, `;
  }
  body[`).concat(yl, `] {
    overflow: hidden `).concat(l, `;
    overscroll-behavior: contain;
    `).concat([
    o && "position: relative ".concat(l, ";"),
    i === "margin" && `
    padding-left: `.concat(c, `px;
    padding-top: `).concat(d, `px;
    padding-right: `).concat(f, `px;
    margin-left:0;
    margin-top:0;
    margin-right: `).concat(m, "px ").concat(l, `;
    `),
    i === "padding" && "padding-right: ".concat(m, "px ").concat(l, ";")
  ].filter(Boolean).join(""), `
  }

  .`).concat(Cc, ` {
    right: `).concat(m, "px ").concat(l, `;
  }

  .`).concat(Ec, ` {
    margin-right: `).concat(m, "px ").concat(l, `;
  }

  .`).concat(Cc, " .").concat(Cc, ` {
    right: 0 `).concat(l, `;
  }

  .`).concat(Ec, " .").concat(Ec, ` {
    margin-right: 0 `).concat(l, `;
  }

  body[`).concat(yl, `] {
    `).concat(lR, ": ").concat(m, `px;
  }
`);
}, ky = function() {
  var a = parseInt(document.body.getAttribute("data-scroll-locked") || "0", 10);
  return isFinite(a) ? a : 0;
}, TR = function() {
  S.useEffect(function() {
    return document.body.setAttribute(yl, (ky() + 1).toString()), function() {
      var a = ky() - 1;
      a <= 0 ? document.body.removeAttribute(yl) : document.body.setAttribute(yl, a.toString());
    };
  }, []);
}, RR = function(a) {
  var o = a.noRelative, i = a.noImportant, l = a.gapMode, c = l === void 0 ? "margin" : l;
  TR();
  var d = S.useMemo(function() {
    return CR(c);
  }, [c]);
  return S.createElement(ER, { styles: AR(d, !o, c, i ? "" : "!important") });
}, bm = !1;
if (typeof window < "u") try {
  var gc = Object.defineProperty({}, "passive", { get: function() {
    return bm = !0, !0;
  } });
  window.addEventListener("test", gc, gc), window.removeEventListener("test", gc, gc);
} catch {
  bm = !1;
}
var ni = bm ? { passive: !1 } : !1, _R = function(a) {
  return a.tagName === "TEXTAREA";
}, C1 = function(a, o) {
  if (!(a instanceof Element)) return !1;
  var i = window.getComputedStyle(a);
  return i[o] !== "hidden" && !(i.overflowY === i.overflowX && !_R(a) && i[o] === "visible");
}, NR = function(a) {
  return C1(a, "overflowY");
}, jR = function(a) {
  return C1(a, "overflowX");
}, Ly = function(a, o) {
  var i = o.ownerDocument, l = o;
  do {
    if (typeof ShadowRoot < "u" && l instanceof ShadowRoot && (l = l.host), E1(a, l)) {
      var c = A1(a, l);
      if (c[1] > c[2]) return !0;
    }
    l = l.parentNode;
  } while (l && l !== i.body);
  return !1;
}, OR = function(a) {
  return [
    a.scrollTop,
    a.scrollHeight,
    a.clientHeight
  ];
}, MR = function(a) {
  return [
    a.scrollLeft,
    a.scrollWidth,
    a.clientWidth
  ];
}, E1 = function(a, o) {
  return a === "v" ? NR(o) : jR(o);
}, A1 = function(a, o) {
  return a === "v" ? OR(o) : MR(o);
}, zR = function(a, o) {
  return a === "h" && o === "rtl" ? -1 : 1;
}, DR = function(a, o, i, l, c) {
  var d = zR(a, window.getComputedStyle(o).direction), f = d * l, m = i.target, v = o.contains(m), y = !1, x = f > 0, b = 0, p = 0;
  do {
    if (!m) break;
    var w = A1(a, m), A = w[0], C = w[1] - w[2] - d * A;
    (A || C) && E1(a, m) && (b += C, p += A);
    var T = m.parentNode;
    m = T && T.nodeType === Node.DOCUMENT_FRAGMENT_NODE ? T.host : T;
  } while (!v && m !== document.body || v && (o.contains(m) || o === m));
  return (x && (c && Math.abs(b) < 1 || !c && f > b) || !x && (c && Math.abs(p) < 1 || !c && -f > p)) && (y = !0), y;
}, yc = function(a) {
  return "changedTouches" in a ? [a.changedTouches[0].clientX, a.changedTouches[0].clientY] : [0, 0];
}, Hy = function(a) {
  return [a.deltaX, a.deltaY];
}, By = function(a) {
  return a && "current" in a ? a.current : a;
}, kR = function(a, o) {
  return a[0] === o[0] && a[1] === o[1];
}, LR = function(a) {
  return `
  .block-interactivity-`.concat(a, ` {pointer-events: none;}
  .allow-interactivity-`).concat(a, ` {pointer-events: all;}
`);
}, HR = 0, ai = [];
function BR(a) {
  var o = S.useRef([]), i = S.useRef([0, 0]), l = S.useRef(), c = S.useState(HR++)[0], d = S.useState(x1)[0], f = S.useRef(a);
  S.useEffect(function() {
    f.current = a;
  }, [a]), S.useEffect(function() {
    if (a.inert) {
      document.body.classList.add("block-interactivity-".concat(c));
      var C = rR([a.lockRef.current], (a.shards || []).map(By), !0).filter(Boolean);
      return C.forEach(function(T) {
        return T.classList.add("allow-interactivity-".concat(c));
      }), function() {
        document.body.classList.remove("block-interactivity-".concat(c)), C.forEach(function(T) {
          return T.classList.remove("allow-interactivity-".concat(c));
        });
      };
    }
  }, [
    a.inert,
    a.lockRef.current,
    a.shards
  ]);
  var m = S.useCallback(function(C, T) {
    if ("touches" in C && C.touches.length === 2 || C.type === "wheel" && C.ctrlKey) return !f.current.allowPinchZoom;
    var R = yc(C), O = i.current, _ = "deltaX" in C ? C.deltaX : O[0] - R[0], j = "deltaY" in C ? C.deltaY : O[1] - R[1], L, z = C.target, $ = Math.abs(_) > Math.abs(j) ? "h" : "v";
    if ("touches" in C && $ === "h" && z.type === "range") return !1;
    var k = window.getSelection(), Q = k && k.anchorNode;
    if (Q && (Q === z || Q.contains(z))) return !1;
    var X = Ly($, z);
    if (!X) return !0;
    if (X ? L = $ : (L = $ === "v" ? "h" : "v", X = Ly($, z)), !X) return !1;
    if (!l.current && "changedTouches" in C && (_ || j) && (l.current = L), !L) return !0;
    var oe = l.current || L;
    return DR(oe, T, C, oe === "h" ? _ : j, !0);
  }, []), v = S.useCallback(function(C) {
    var T = C;
    if (!(!ai.length || ai[ai.length - 1] !== d)) {
      var R = "deltaY" in T ? Hy(T) : yc(T), O = o.current.filter(function(j) {
        return j.name === T.type && (j.target === T.target || T.target === j.shadowParent) && kR(j.delta, R);
      })[0];
      if (O && O.should) {
        T.cancelable && T.preventDefault();
        return;
      }
      if (!O) {
        var _ = (f.current.shards || []).map(By).filter(Boolean).filter(function(j) {
          return j.contains(T.target);
        });
        (_.length > 0 ? m(T, _[0]) : !f.current.noIsolation) && T.cancelable && T.preventDefault();
      }
    }
  }, []), y = S.useCallback(function(C, T, R, O) {
    var _ = {
      name: C,
      delta: T,
      target: R,
      should: O,
      shadowParent: UR(R)
    };
    o.current.push(_), setTimeout(function() {
      o.current = o.current.filter(function(j) {
        return j !== _;
      });
    }, 1);
  }, []), x = S.useCallback(function(C) {
    i.current = yc(C), l.current = void 0;
  }, []), b = S.useCallback(function(C) {
    y(C.type, Hy(C), C.target, m(C, a.lockRef.current));
  }, []), p = S.useCallback(function(C) {
    y(C.type, yc(C), C.target, m(C, a.lockRef.current));
  }, []);
  S.useEffect(function() {
    return ai.push(d), a.setCallbacks({
      onScrollCapture: b,
      onWheelCapture: b,
      onTouchMoveCapture: p
    }), document.addEventListener("wheel", v, ni), document.addEventListener("touchmove", v, ni), document.addEventListener("touchstart", x, ni), function() {
      ai = ai.filter(function(C) {
        return C !== d;
      }), document.removeEventListener("wheel", v, ni), document.removeEventListener("touchmove", v, ni), document.removeEventListener("touchstart", x, ni);
    };
  }, []);
  var w = a.removeScrollBar, A = a.inert;
  return S.createElement(S.Fragment, null, A ? S.createElement(d, { styles: LR(c) }) : null, w ? S.createElement(RR, {
    noRelative: a.noRelative,
    gapMode: a.gapMode
  }) : null);
}
function UR(a) {
  for (var o = null; a !== null; )
    a instanceof ShadowRoot && (o = a.host, a = a.host), a = a.parentNode;
  return o;
}
var qR = hR(w1, BR), T1 = S.forwardRef(function(a, o) {
  return S.createElement(Kc, sa({}, a, {
    ref: o,
    sideCar: qR
  }));
});
T1.classNames = Kc.classNames;
function R1({ keepMounted: a, keepMountedMode: o = "activity", opened: i, onClose: l, id: c, transitionProps: d, onExitTransitionEnd: f, onEnterTransitionEnd: m, trapFocus: v, closeOnEscape: y, returnFocus: x, closeOnClickOutside: b, withinPortal: p, portalProps: w, lockScroll: A, children: C, zIndex: T, shadow: R, padding: O, __vars: _, unstyled: j, removeScrollProps: L, __handledEscapeEvents: z, ...$ }) {
  const { _id: k, titleMounted: Q, bodyMounted: X, shouldLockScroll: oe, setTitleMounted: re, setBodyMounted: ne } = oR({
    id: c,
    transitionProps: d,
    opened: i,
    trapFocus: v,
    closeOnEscape: y,
    onClose: l,
    returnFocus: x,
    handledEscapeEvents: z
  }), { key: F, ...me } = L || {};
  return /* @__PURE__ */ (0, g.jsx)(Wc, {
    ...w,
    withinPortal: p,
    children: /* @__PURE__ */ (0, g.jsx)(nR, {
      value: {
        opened: i,
        onClose: l,
        closeOnClickOutside: b,
        onExitTransitionEnd: f,
        onEnterTransitionEnd: m,
        transitionProps: {
          ...d,
          keepMounted: a,
          keepMountedMode: o
        },
        getTitleId: () => `${k}-title`,
        getBodyId: () => `${k}-body`,
        titleMounted: Q,
        bodyMounted: X,
        setTitleMounted: re,
        setBodyMounted: ne,
        trapFocus: v,
        closeOnEscape: y,
        zIndex: T,
        unstyled: j
      },
      children: /* @__PURE__ */ (0, g.jsx)(T1, {
        enabled: oe && A,
        ...me,
        children: /* @__PURE__ */ (0, g.jsx)(xe, {
          ...$,
          id: k,
          __vars: {
            ..._,
            "--mb-z-index": (T || rr("modal")).toString(),
            "--mb-shadow": zm(R),
            "--mb-padding": lm(O)
          },
          children: C
        })
      }, F)
    })
  });
}
R1.displayName = "@mantine/core/ModalBase";
function VR() {
  const a = qa();
  return (0, S.useEffect)(() => (a.setBodyMounted(!0), () => a.setBodyMounted(!1)), []), a.getBodyId();
}
var si = {
  title: "m_615af6c9",
  header: "m_b5489c3c",
  inner: "m_60c222c7",
  content: "m_fd1ab0aa",
  close: "m_606cb269",
  body: "m_5df29311"
};
function _1({ className: a, ...o }) {
  const i = VR(), l = qa();
  return /* @__PURE__ */ (0, g.jsx)(xe, {
    id: i,
    className: qt({ [si.body]: !l.unstyled }, a),
    ...o
  });
}
_1.displayName = "@mantine/core/ModalBaseBody";
function N1({ className: a, onClick: o, ...i }) {
  const l = qa();
  return /* @__PURE__ */ (0, g.jsx)(vi, {
    ...i,
    onClick: (c) => {
      l.onClose(), o?.(c);
    },
    className: qt({ [si.close]: !l.unstyled }, a),
    unstyled: l.unstyled
  });
}
N1.displayName = "@mantine/core/ModalBaseCloseButton";
function j1({ transitionProps: a, className: o, innerProps: i, onKeyDown: l, style: c, ref: d, ...f }) {
  const m = qa();
  return /* @__PURE__ */ (0, g.jsx)(lr, {
    mounted: m.opened,
    transition: "pop",
    ...m.transitionProps,
    onExited: () => {
      m.onExitTransitionEnd?.(), m.transitionProps?.onExited?.();
    },
    onEntered: () => {
      m.onEnterTransitionEnd?.(), m.transitionProps?.onEntered?.();
    },
    ...a,
    children: (v) => /* @__PURE__ */ (0, g.jsx)("div", {
      ...i,
      className: qt({ [si.inner]: !m.unstyled }, i.className),
      children: /* @__PURE__ */ (0, g.jsx)(Ic, {
        active: m.opened && m.trapFocus,
        innerRef: d,
        children: /* @__PURE__ */ (0, g.jsx)(Gc, {
          ...f,
          component: "section",
          role: "dialog",
          tabIndex: -1,
          "aria-modal": !0,
          "aria-describedby": m.bodyMounted ? m.getBodyId() : void 0,
          "aria-labelledby": m.titleMounted ? m.getTitleId() : void 0,
          style: [c, v],
          className: qt({ [si.content]: !m.unstyled }, o),
          unstyled: m.unstyled,
          children: f.children
        })
      })
    })
  });
}
j1.displayName = "@mantine/core/ModalBaseContent";
function O1({ className: a, ...o }) {
  const i = qa();
  return /* @__PURE__ */ (0, g.jsx)(xe, {
    component: "header",
    className: qt({ [si.header]: !i.unstyled }, a),
    ...o
  });
}
O1.displayName = "@mantine/core/ModalBaseHeader";
var $R = {
  duration: 200,
  timingFunction: "ease",
  transition: "fade"
};
function YR(a) {
  const o = qa();
  return {
    ...$R,
    ...o.transitionProps,
    ...a
  };
}
function M1({ onClick: a, transitionProps: o, style: i, visible: l, ...c }) {
  const d = qa(), f = YR(o);
  return /* @__PURE__ */ (0, g.jsx)(lr, {
    mounted: l !== void 0 ? l : d.opened,
    ...f,
    transition: "fade",
    children: (m) => /* @__PURE__ */ (0, g.jsx)(Rl, {
      fixed: !0,
      style: [i, m],
      zIndex: d.zIndex,
      unstyled: d.unstyled,
      onClick: (v) => {
        a?.(v), d.closeOnClickOutside && d.onClose();
      },
      ...c
    })
  });
}
M1.displayName = "@mantine/core/ModalBaseOverlay";
function GR() {
  const a = qa();
  return (0, S.useEffect)(() => (a.setTitleMounted(!0), () => a.setTitleMounted(!1)), []), a.getTitleId();
}
function z1({ className: a, ...o }) {
  const i = GR(), l = qa();
  return /* @__PURE__ */ (0, g.jsx)(xe, {
    component: "h2",
    className: qt({ [si.title]: !l.unstyled }, a),
    id: i,
    ...o
  });
}
z1.displayName = "@mantine/core/ModalBaseTitle";
function WR({ children: a }) {
  return /* @__PURE__ */ (0, g.jsx)(g.Fragment, { children: a });
}
var D1 = (0, S.createContext)({ size: "sm" }), k1 = Ce((a) => {
  const o = ue("InputClearButton", null, a), { size: i, variant: l, vars: c, classNames: d, styles: f, ...m } = o, v = (0, S.use)(D1), { resolvedClassNames: y, resolvedStyles: x } = Tl({
    classNames: d,
    styles: f,
    props: o
  });
  return /* @__PURE__ */ (0, g.jsx)(vi, {
    variant: l || "transparent",
    size: i || v?.size || "sm",
    classNames: y,
    styles: x,
    __staticSelector: "InputClearButton",
    style: {
      pointerEvents: "all",
      background: "var(--input-bg)",
      ...m.style
    },
    ...m
  });
});
k1.displayName = "@mantine/core/InputClearButton";
var PR = {
  xs: 7,
  sm: 8,
  md: 10,
  lg: 12,
  xl: 15
};
function IR({ __clearable: a, __clearSection: o, rightSection: i, __defaultRightSection: l, size: c = "sm", __clearSectionMode: d = "both" }) {
  const f = a && o;
  return d === "rightSection" ? i === null ? null : i || l : d === "clear" ? i === null ? null : f || l : f && (i || l) ? /* @__PURE__ */ (0, g.jsxs)("div", {
    "data-combined-clear-section": !0,
    style: {
      display: "flex",
      gap: 2,
      alignItems: "center",
      paddingInlineEnd: PR[c]
    },
    children: [f, i || l]
  }) : i === null ? null : i || f || l;
}
var cr = (0, S.createContext)({
  offsetBottom: !1,
  offsetTop: !1,
  describedBy: void 0,
  getStyles: null,
  inputId: void 0,
  labelId: void 0
}), rn = {
  wrapper: "m_6c018570",
  input: "m_8fb7ebe7",
  bottomSection: "m_93f4ed57",
  section: "m_82577fc2",
  placeholder: "m_88bacfd0",
  root: "m_46b77525",
  label: "m_8fdc1311",
  required: "m_78a94662",
  error: "m_8f816625",
  success: "m_9d9d40e0",
  description: "m_fe47ce59"
}, L1 = (a, { size: o }) => ({ description: { "--input-description-size": o === void 0 ? void 0 : `calc(${_t(o)} - ${te(2)})` } }), _l = Ce((a) => {
  const o = ue("InputDescription", null, a), { classNames: i, className: l, style: c, styles: d, unstyled: f, vars: m, __staticSelector: v, __inheritStyles: y = !0, attributes: x, ...b } = ue("InputDescription", null, o), p = (0, S.use)(cr), w = ke({
    name: ["InputWrapper", v],
    props: o,
    classes: rn,
    className: l,
    style: c,
    classNames: i,
    styles: d,
    unstyled: f,
    attributes: x,
    rootSelector: "description",
    vars: m,
    varsResolver: L1
  }), A = y && p?.getStyles || w;
  return /* @__PURE__ */ (0, g.jsx)(xe, {
    component: "p",
    ...A("description", p?.getStyles ? {
      className: l,
      style: c
    } : void 0),
    ...b
  });
});
_l.classes = rn;
_l.varsResolver = L1;
_l.displayName = "@mantine/core/InputDescription";
var H1 = (a, { size: o }) => ({ error: { "--input-error-size": o === void 0 ? void 0 : `calc(${_t(o)} - ${te(2)})` } }), Nl = Ce((a) => {
  const o = ue("InputError", null, a), { classNames: i, className: l, style: c, styles: d, unstyled: f, vars: m, attributes: v, __staticSelector: y, __inheritStyles: x = !0, ...b } = o, p = ke({
    name: ["InputWrapper", y],
    props: o,
    classes: rn,
    className: l,
    style: c,
    classNames: i,
    styles: d,
    unstyled: f,
    attributes: v,
    rootSelector: "error",
    vars: m,
    varsResolver: H1
  }), w = (0, S.use)(cr), A = x && w?.getStyles || p;
  return /* @__PURE__ */ (0, g.jsx)(xe, {
    component: "p",
    ...A("error", w?.getStyles ? {
      className: l,
      style: c
    } : void 0),
    ...b
  });
});
Nl.classes = rn;
Nl.varsResolver = H1;
Nl.displayName = "@mantine/core/InputError";
var XR = { labelElement: "label" }, B1 = (a, { size: o }) => ({ label: {
  "--input-label-size": _t(o),
  "--input-asterisk-color": void 0
} }), jl = Ce((a) => {
  const o = ue("InputLabel", XR, a), { classNames: i, className: l, style: c, styles: d, unstyled: f, vars: m, labelElement: v, required: y, htmlFor: x, onMouseDown: b, children: p, __staticSelector: w, mod: A, attributes: C, ...T } = o, R = ke({
    name: ["InputWrapper", w],
    props: o,
    classes: rn,
    className: l,
    style: c,
    classNames: i,
    styles: d,
    unstyled: f,
    attributes: C,
    rootSelector: "label",
    vars: m,
    varsResolver: B1
  }), O = (0, S.use)(cr), _ = O?.getStyles || R, j = T.component || v, L = typeof j != "string" || j === "label";
  return /* @__PURE__ */ (0, g.jsxs)(xe, {
    ..._("label", O?.getStyles ? {
      className: l,
      style: c
    } : void 0),
    component: v,
    htmlFor: L ? x : void 0,
    mod: [{ required: y }, A],
    onMouseDown: (z) => {
      b?.(z), !z.defaultPrevented && z.detail > 1 && z.preventDefault();
    },
    ...T,
    children: [p, y && /* @__PURE__ */ (0, g.jsx)("span", {
      ..._("required"),
      "aria-hidden": !0,
      children: " *"
    })]
  });
});
jl.classes = rn;
jl.varsResolver = B1;
jl.displayName = "@mantine/core/InputLabel";
var oh = Ce((a) => {
  const o = ue("InputPlaceholder", null, a), { classNames: i, className: l, style: c, styles: d, unstyled: f, vars: m, __staticSelector: v, error: y, mod: x, attributes: b, ...p } = o, w = ke({
    name: ["InputPlaceholder", v],
    props: o,
    classes: rn,
    className: l,
    style: c,
    classNames: i,
    styles: d,
    unstyled: f,
    attributes: b,
    rootSelector: "placeholder"
  });
  return /* @__PURE__ */ (0, g.jsx)(xe, {
    ...w("placeholder"),
    mod: [{ error: !!y }, x],
    component: "span",
    ...p
  });
});
oh.classes = rn;
oh.displayName = "@mantine/core/InputPlaceholder";
var U1 = (a, { size: o }) => ({ success: { "--input-success-size": o === void 0 ? void 0 : `calc(${_t(o)} - ${te(2)})` } }), Ol = Ce((a) => {
  const o = ue("InputSuccess", null, a), { classNames: i, className: l, style: c, styles: d, unstyled: f, vars: m, attributes: v, __staticSelector: y, __inheritStyles: x = !0, ...b } = o, p = ke({
    name: ["InputWrapper", y],
    props: o,
    classes: rn,
    className: l,
    style: c,
    classNames: i,
    styles: d,
    unstyled: f,
    attributes: v,
    rootSelector: "success",
    vars: m,
    varsResolver: U1
  }), w = (0, S.use)(cr), A = x && w?.getStyles || p;
  return /* @__PURE__ */ (0, g.jsx)(xe, {
    component: "p",
    ...A("success", w?.getStyles ? {
      className: l,
      style: c
    } : void 0),
    ...b
  });
});
Ol.classes = rn;
Ol.varsResolver = U1;
Ol.displayName = "@mantine/core/InputSuccess";
function QR(a, { hasDescription: o, hasError: i }) {
  const l = a.findIndex((m) => m === "input"), c = a.slice(0, l), d = a.slice(l + 1), f = o && c.includes("description") || i && c.includes("error");
  return {
    offsetBottom: o && d.includes("description") || i && d.includes("error"),
    offsetTop: f
  };
}
var KR = {
  labelElement: "label",
  inputContainer: (a) => a,
  inputWrapperOrder: [
    "label",
    "description",
    "input",
    "error"
  ]
}, q1 = (a, { size: o }) => ({
  label: {
    "--input-label-size": _t(o),
    "--input-asterisk-color": void 0
  },
  error: { "--input-error-size": o === void 0 ? void 0 : `calc(${_t(o)} - ${te(2)})` },
  success: { "--input-success-size": o === void 0 ? void 0 : `calc(${_t(o)} - ${te(2)})` },
  description: { "--input-description-size": o === void 0 ? void 0 : `calc(${_t(o)} - ${te(2)})` }
}), Zc = Ce((a) => {
  const o = ue("InputWrapper", KR, a), { classNames: i, className: l, style: c, styles: d, unstyled: f, vars: m, size: v, variant: y, __staticSelector: x, inputContainer: b, inputWrapperOrder: p, label: w, error: A, success: C, description: T, labelProps: R, descriptionProps: O, errorProps: _, successProps: j, labelElement: L, children: z, withAsterisk: $, id: k, required: Q, __stylesApiProps: X, mod: oe, attributes: re, ...ne } = o, F = ke({
    name: ["InputWrapper", x],
    props: X || o,
    classes: rn,
    className: l,
    style: c,
    classNames: i,
    styles: d,
    unstyled: f,
    attributes: re,
    vars: m,
    varsResolver: q1
  }), me = {
    size: v,
    variant: y,
    __staticSelector: x
  }, H = Dn(k), I = typeof $ == "boolean" ? $ : Q, W = _?.id || `${H}-error`, Z = j?.id || `${H}-success`, ae = O?.id || `${H}-description`, be = H, de = !!A && typeof A != "boolean", we = !!C && typeof C != "boolean" && !A, Ae = !!T, M = de && p.includes("error"), K = we && p.includes("error"), se = Ae && p.includes("description"), le = `${M ? W : ""} ${K ? Z : ""} ${se ? ae : ""}`, he = le.trim().length > 0 ? le.trim() : void 0, ie = R?.id || `${H}-label`, ye = w && /* @__PURE__ */ (0, g.jsx)(jl, {
    labelElement: L,
    id: ie,
    htmlFor: be,
    required: I,
    ...me,
    ...R,
    children: w
  }, "label"), ce = Ae && /* @__PURE__ */ (0, g.jsx)(_l, {
    ...O,
    ...me,
    size: O?.size || me.size,
    id: O?.id || ae,
    children: T
  }, "description"), ve = /* @__PURE__ */ (0, g.jsx)(S.Fragment, { children: b(z) }, "input"), V = de && /* @__PURE__ */ (0, S.createElement)(Nl, {
    ..._,
    ...me,
    size: _?.size || me.size,
    key: "error",
    id: _?.id || W
  }, A), pe = we && /* @__PURE__ */ (0, S.createElement)(Ol, {
    ...j,
    ...me,
    size: j?.size || me.size,
    key: "success",
    id: j?.id || Z
  }, C), Te = p.map((je) => {
    switch (je) {
      case "label":
        return ye;
      case "input":
        return ve;
      case "description":
        return ce;
      case "error":
        return V || pe;
      default:
        return null;
    }
  });
  return /* @__PURE__ */ (0, g.jsx)(cr, {
    value: {
      getStyles: F,
      describedBy: he,
      inputId: be,
      labelId: ie,
      ...QR(p, {
        hasDescription: Ae,
        hasError: de || we
      })
    },
    children: /* @__PURE__ */ (0, g.jsx)(xe, {
      variant: y,
      size: v,
      mod: [{
        error: !!A,
        success: !!C && !A
      }, oe],
      id: L === "label" ? void 0 : k,
      ...F("root"),
      ...ne,
      children: Te
    })
  });
});
Zc.classes = rn;
Zc.varsResolver = q1;
Zc.displayName = "@mantine/core/InputWrapper";
var ZR = {
  variant: "default",
  leftSectionPointerEvents: "none",
  rightSectionPointerEvents: "none",
  withAria: !0,
  withErrorStyles: !0,
  withSuccessStyles: !0,
  size: "sm",
  loading: !1,
  loadingPosition: "right"
}, V1 = (a, o, i) => ({ wrapper: {
  "--input-margin-top": i.offsetTop ? "calc(var(--mantine-spacing-xs) / 2)" : void 0,
  "--input-margin-bottom": i.offsetBottom ? "calc(var(--mantine-spacing-xs) / 2)" : void 0,
  "--input-height": qe(o.size, "input-height"),
  "--input-fz": _t(o.size),
  "--input-radius": o.radius === void 0 ? void 0 : Ht(o.radius),
  "--input-left-section-width": o.leftSectionWidth !== void 0 ? te(o.leftSectionWidth) : void 0,
  "--input-right-section-width": o.rightSectionWidth !== void 0 ? te(o.rightSectionWidth) : void 0,
  "--input-padding-y": o.multiline ? qe(o.size, "input-padding-y") : void 0,
  "--input-left-section-pointer-events": o.leftSectionPointerEvents,
  "--input-right-section-pointer-events": o.rightSectionPointerEvents
} }), nt = In((a) => {
  const o = ue("Input", ZR, a), { classNames: i, className: l, style: c, styles: d, unstyled: f, required: m, __staticSelector: v, __stylesApiProps: y, size: x, wrapperProps: b, error: p, success: w, disabled: A, leftSection: C, leftSectionProps: T, leftSectionWidth: R, rightSection: O, rightSectionProps: _, rightSectionWidth: j, rightSectionPointerEvents: L, leftSectionPointerEvents: z, variant: $, vars: k, pointer: Q, multiline: X, radius: oe, id: re, withAria: ne, withErrorStyles: F, withSuccessStyles: me, mod: H, inputSize: I, attributes: W, __clearSection: Z, __clearable: ae, __clearSectionMode: be, __defaultRightSection: de, loading: we, loadingPosition: Ae, __bottomSection: M, __bottomSectionProps: K, rootRef: se, dir: le, ...he } = o, { styleProps: ie, rest: ye } = ui(he), ce = (0, S.use)(cr), ve = {
    offsetBottom: ce?.offsetBottom,
    offsetTop: ce?.offsetTop
  }, V = ke({
    name: ["Input", v],
    props: y || o,
    classes: rn,
    className: l,
    style: c,
    classNames: i,
    styles: d,
    unstyled: f,
    attributes: W,
    stylesCtx: ve,
    rootSelector: "wrapper",
    vars: k,
    varsResolver: V1
  }), pe = ne ? {
    required: m,
    disabled: A,
    "aria-invalid": p ? !0 : void 0,
    "aria-describedby": ce?.describedBy,
    id: ce?.inputId || re
  } : {}, Te = we ? /* @__PURE__ */ (0, g.jsx)(sr, { size: Ae === "left" ? "calc(var(--input-left-section-size) / 2)" : "calc(var(--input-right-section-size) / 2)" }) : null, je = we && Ae === "left" ? Te : C, Be = IR({
    __clearable: ae,
    __clearSection: Z,
    rightSection: we && Ae === "right" ? Te : O,
    __defaultRightSection: de,
    size: x,
    __clearSectionMode: be
  });
  return /* @__PURE__ */ (0, g.jsx)(D1, {
    value: { size: x || "sm" },
    children: /* @__PURE__ */ (0, g.jsxs)(xe, {
      ref: se,
      dir: le,
      ...V("wrapper"),
      ...ie,
      ...b,
      mod: [{
        error: !!p && F,
        success: !!w && !p && me,
        pointer: Q,
        disabled: A,
        multiline: X,
        withRightSection: !!Be,
        withLeftSection: !!je,
        withBottomSection: !!M
      }, H],
      variant: $,
      size: x,
      children: [
        je && /* @__PURE__ */ (0, g.jsx)("div", {
          ...T,
          "data-position": "left",
          ...V("section", {
            className: T?.className,
            style: T?.style
          }),
          children: je
        }),
        /* @__PURE__ */ (0, g.jsx)(xe, {
          component: "input",
          ...ye,
          ...pe,
          required: m,
          mod: {
            disabled: A,
            error: !!p && F,
            success: !!w && !p && me
          },
          variant: $,
          __size: I,
          ...V("input")
        }),
        M && /* @__PURE__ */ (0, g.jsx)("div", {
          ...K,
          ...V("bottomSection", {
            className: K?.className,
            style: K?.style
          }),
          children: M
        }),
        Be && /* @__PURE__ */ (0, g.jsx)("div", {
          ..._,
          "data-position": "right",
          ...V("section", {
            className: _?.className,
            style: _?.style
          }),
          children: Be
        })
      ]
    })
  });
});
nt.classes = rn;
nt.varsResolver = V1;
nt.Wrapper = Zc;
nt.Label = jl;
nt.Error = Nl;
nt.Success = Ol;
nt.Description = _l;
nt.Placeholder = oh;
nt.ClearButton = k1;
nt.displayName = "@mantine/core/Input";
function FR(a, o, i) {
  const l = ue([
    "Input",
    "InputWrapper",
    a
  ], o, i), { label: c, description: d, error: f, success: m, required: v, classNames: y, styles: x, className: b, unstyled: p, __staticSelector: w, __stylesApiProps: A, errorProps: C, successProps: T, labelProps: R, descriptionProps: O, wrapperProps: _, id: j, size: L, style: z, inputContainer: $, inputWrapperOrder: k, withAsterisk: Q, variant: X, vars: oe, mod: re, attributes: ne, ...F } = l, { styleProps: me, rest: H } = ui(F), I = {
    label: c,
    description: d,
    error: f,
    success: m,
    required: v,
    classNames: y,
    className: b,
    __staticSelector: w,
    __stylesApiProps: A || l,
    errorProps: C,
    successProps: T,
    labelProps: R,
    descriptionProps: O,
    unstyled: p,
    styles: x,
    size: L,
    style: z,
    inputContainer: $,
    inputWrapperOrder: k,
    withAsterisk: Q,
    variant: X,
    id: j,
    mod: re,
    attributes: ne,
    ..._
  };
  return {
    ...H,
    classNames: y,
    styles: x,
    unstyled: p,
    wrapperProps: {
      ...I,
      ...me
    },
    inputProps: {
      required: v,
      classNames: y,
      styles: x,
      unstyled: p,
      size: L,
      __staticSelector: w,
      __stylesApiProps: A || l,
      error: f,
      success: m,
      variant: X,
      id: j,
      attributes: ne
    }
  };
}
var JR = {
  __staticSelector: "InputBase",
  withAria: !0,
  size: "sm"
}, Va = In((a) => {
  const { inputProps: o, wrapperProps: i, ...l } = FR("InputBase", JR, a);
  return /* @__PURE__ */ (0, g.jsx)(nt.Wrapper, {
    ...i,
    children: /* @__PURE__ */ (0, g.jsx)(nt, {
      ...o,
      ...l
    })
  });
});
Va.classes = {
  ...nt.classes,
  ...nt.Wrapper.classes
};
Va.displayName = "@mantine/core/InputBase";
function e_(a, o) {
  if (!o || !a) return !1;
  let i = o.parentNode;
  for (; i != null; ) {
    if (i === a) return !0;
    i = i.parentNode;
  }
  return !1;
}
function t_({ target: a, parent: o, ref: i, displayAfterTransitionEnd: l, onTransitionStart: c, onTransitionEnd: d }) {
  const f = (0, S.useRef)(-1), m = (0, S.useRef)(a), [v, y] = (0, S.useState)(!1), [x, b] = (0, S.useState)(typeof l == "boolean" ? l : !1), p = () => {
    if (!a || !o || !i.current) return;
    const T = a.getBoundingClientRect(), R = o.getBoundingClientRect(), O = o.offsetWidth === 0 ? 1 : R.width / o.offsetWidth, _ = o.offsetHeight === 0 ? 1 : R.height / o.offsetHeight, j = window.getComputedStyle(a), L = window.getComputedStyle(o), z = go(j.borderTopWidth) + go(L.borderTopWidth), $ = go(j.borderLeftWidth) + go(L.borderLeftWidth), k = {
      top: (T.top - R.top) / _ - z,
      left: (T.left - R.left) / O - $,
      width: T.width / O,
      height: T.height / _
    };
    i.current.style.transform = `translateY(${k.top}px) translateX(${k.left}px)`, i.current.style.width = `${k.width}px`, i.current.style.height = `${k.height}px`;
  }, w = () => {
    window.clearTimeout(f.current), i.current && (i.current.style.transitionDuration = "0ms"), p(), f.current = window.setTimeout(() => {
      i.current && (i.current.style.transitionDuration = "");
    }, 30);
  }, A = (0, S.useRef)(null), C = (0, S.useRef)(null);
  return (0, S.useEffect)(() => {
    if (v && m.current !== a && c && c(), m.current = a, p(), a)
      return A.current = new ResizeObserver(w), A.current.observe(a), o && (C.current = new ResizeObserver(w), C.current.observe(o)), () => {
        A.current?.disconnect(), C.current?.disconnect();
      };
  }, [o, a]), (0, S.useEffect)(() => {
    if (o) {
      const T = (R) => {
        e_(R.target, o) && (w(), b(!1));
      };
      return o.addEventListener("transitionend", T), () => {
        o.removeEventListener("transitionend", T);
      };
    }
  }, [o]), (0, S.useEffect)(() => {
    if (i.current && d) {
      const T = (R) => {
        R.propertyName === "transform" && d();
      };
      return i.current.addEventListener("transitionend", T), () => {
        i.current?.removeEventListener("transitionend", T);
      };
    }
  }, [d]), _2(() => {
    rb() !== "test" && y(!0);
  }, 20, { autoInvoke: !0 }), j2((T) => {
    T.forEach((R) => {
      R.type === "attributes" && R.attributeName === "dir" && w();
    });
  }, {
    attributes: !0,
    attributeFilter: ["dir"]
  }, () => document.documentElement), {
    initialized: v,
    hidden: x
  };
}
var $1 = { root: "m_96b553a6" }, Y1 = (a, { transitionDuration: o }, { shouldReduceMotion: i }) => ({ root: { "--transition-duration": a.respectReducedMotion && i ? "0ms" : typeof o == "number" ? `${o}ms` : o || "150ms" } }), Fc = Ce((a) => {
  const o = ue("FloatingIndicator", null, a), { classNames: i, className: l, style: c, styles: d, unstyled: f, vars: m, target: v, parent: y, transitionDuration: x, mod: b, displayAfterTransitionEnd: p, onTransitionStart: w, onTransitionEnd: A, attributes: C, ref: T, ...R } = o, O = km(), _ = ke({
    name: "FloatingIndicator",
    classes: $1,
    props: o,
    className: l,
    style: c,
    classNames: i,
    styles: d,
    unstyled: f,
    attributes: C,
    vars: m,
    varsResolver: Y1,
    stylesCtx: { shouldReduceMotion: O }
  }), j = (0, S.useRef)(null), { initialized: L, hidden: z } = t_({
    target: v,
    parent: y,
    ref: j,
    displayAfterTransitionEnd: p,
    onTransitionStart: w,
    onTransitionEnd: A
  }), $ = ct(T, j);
  return !v || !y ? null : /* @__PURE__ */ (0, g.jsx)(xe, {
    ref: $,
    mod: [{
      initialized: L,
      hidden: z
    }, b],
    ..._("root"),
    ...R
  });
});
Fc.displayName = "@mantine/core/FloatingIndicator";
Fc.classes = $1;
Fc.varsResolver = Y1;
function G1({ style: a, size: o = 16, ...i }) {
  return /* @__PURE__ */ (0, g.jsx)("svg", {
    viewBox: "0 0 15 15",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    style: {
      ...a,
      width: te(o),
      height: te(o),
      display: "block"
    },
    ...i,
    children: /* @__PURE__ */ (0, g.jsx)("path", {
      d: "M3.13523 6.15803C3.3241 5.95657 3.64052 5.94637 3.84197 6.13523L7.5 9.56464L11.158 6.13523C11.3595 5.94637 11.6759 5.95657 11.8648 6.15803C12.0536 6.35949 12.0434 6.67591 11.842 6.86477L7.84197 10.6148C7.64964 10.7951 7.35036 10.7951 7.15803 10.6148L3.15803 6.86477C2.95657 6.67591 2.94637 6.35949 3.13523 6.15803Z",
      fill: "currentColor",
      fillRule: "evenodd",
      clipRule: "evenodd"
    })
  });
}
G1.displayName = "@mantine/core/AccordionChevron";
var W1 = {
  root: "m_66836ed3",
  wrapper: "m_a5d60502",
  body: "m_667c2793",
  title: "m_6a03f287",
  label: "m_698f4f23",
  icon: "m_667f2a6a",
  message: "m_7fa78076",
  closeButton: "m_87f54839"
}, P1 = (a, { radius: o, color: i, variant: l, autoContrast: c }) => {
  const d = a.variantColorResolver({
    color: i || a.primaryColor,
    theme: a,
    variant: l || "light",
    autoContrast: c
  });
  return { root: {
    "--alert-radius": o === void 0 ? void 0 : Ht(o),
    "--alert-bg": i || l ? d.background : void 0,
    "--alert-color": d.color,
    "--alert-bd": i || l ? d.border : void 0
  } };
}, bo = Ce((a) => {
  const o = ue("Alert", null, a), { classNames: i, className: l, style: c, styles: d, unstyled: f, vars: m, radius: v, color: y, title: x, children: b, id: p, icon: w, withCloseButton: A, onClose: C, closeButtonLabel: T, variant: R, autoContrast: O, role: _, attributes: j, ...L } = o, z = ke({
    name: "Alert",
    classes: W1,
    props: o,
    className: l,
    style: c,
    classNames: i,
    styles: d,
    unstyled: f,
    attributes: j,
    vars: m,
    varsResolver: P1
  }), $ = Dn(p), k = x && `${$}-title` || void 0, Q = `${$}-body`;
  return /* @__PURE__ */ (0, g.jsx)(xe, {
    id: $,
    ...z("root", { variant: R }),
    variant: R,
    ...L,
    role: _ || "alert",
    "aria-describedby": b ? Q : void 0,
    "aria-labelledby": x ? k : void 0,
    children: /* @__PURE__ */ (0, g.jsxs)("div", {
      ...z("wrapper"),
      children: [
        w && /* @__PURE__ */ (0, g.jsx)("div", {
          ...z("icon"),
          children: w
        }),
        /* @__PURE__ */ (0, g.jsxs)("div", {
          ...z("body"),
          children: [x && /* @__PURE__ */ (0, g.jsx)("div", {
            ...z("title"),
            "data-with-close-button": A || void 0,
            children: /* @__PURE__ */ (0, g.jsx)("span", {
              id: k,
              ...z("label"),
              children: x
            })
          }), b && /* @__PURE__ */ (0, g.jsx)("div", {
            id: Q,
            ...z("message"),
            "data-variant": R,
            children: b
          })]
        }),
        A && /* @__PURE__ */ (0, g.jsx)(vi, {
          ...z("closeButton"),
          onClick: C,
          variant: "transparent",
          size: 16,
          iconSize: 16,
          "aria-label": T,
          unstyled: f
        })
      ]
    })
  });
});
bo.classes = W1;
bo.varsResolver = P1;
bo.displayName = "@mantine/core/Alert";
function I1(a) {
  return typeof a == "string" ? {
    value: a,
    label: a
  } : typeof a == "object" && "value" in a && !("label" in a) ? {
    value: a.value,
    label: `${a.value}`,
    disabled: a.disabled
  } : typeof a == "object" && "group" in a ? {
    group: a.group,
    items: a.items.map((o) => I1(o))
  } : typeof a == "number" || typeof a == "bigint" || typeof a == "boolean" ? {
    value: a,
    label: `${a}`
  } : a;
}
function n_(a) {
  return a ? a.map((o) => I1(o)) : [];
}
function X1(a) {
  return a.reduce((o, i) => "group" in i ? {
    ...o,
    ...X1(i.items)
  } : (o[`${i.value}`] = i, o), {});
}
var Xt = {
  dropdown: "m_88b62a41",
  search: "m_985517d8",
  options: "m_b2821a6e",
  option: "m_92253aa5",
  empty: "m_2530cd1d",
  header: "m_858f94bd",
  footer: "m_82b967cb",
  group: "m_254f3e4f",
  groupLabel: "m_2bb2e9e5",
  chevron: "m_2943220b",
  optionsDropdownOption: "m_390b5f4",
  optionsDropdownCheckIcon: "m_8ee53fc2",
  optionsDropdownCheckPlaceholder: "m_a530ee0a"
}, a_ = { error: null }, Q1 = (a, { size: o, color: i }) => ({ chevron: {
  "--combobox-chevron-size": qe(o, "combobox-chevron-size"),
  "--combobox-chevron-color": i ? an(i, a) : void 0
} }), Jc = Ce((a) => {
  const o = ue("ComboboxChevron", a_, a), { size: i, error: l, style: c, className: d, classNames: f, styles: m, unstyled: v, vars: y, attributes: x, mod: b, ...p } = o, w = ke({
    name: "ComboboxChevron",
    classes: Xt,
    props: o,
    style: c,
    className: d,
    classNames: f,
    styles: m,
    unstyled: v,
    vars: y,
    varsResolver: Q1,
    attributes: x,
    rootSelector: "chevron"
  });
  return /* @__PURE__ */ (0, g.jsx)(xe, {
    component: "svg",
    ...p,
    ...w("chevron"),
    size: i,
    viewBox: "0 0 15 15",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    mod: [
      "combobox-chevron",
      { error: l },
      b
    ],
    children: /* @__PURE__ */ (0, g.jsx)("path", {
      d: "M4.93179 5.43179C4.75605 5.60753 4.75605 5.89245 4.93179 6.06819C5.10753 6.24392 5.39245 6.24392 5.56819 6.06819L7.49999 4.13638L9.43179 6.06819C9.60753 6.24392 9.89245 6.24392 10.0682 6.06819C10.2439 5.89245 10.2439 5.60753 10.0682 5.43179L7.81819 3.18179C7.73379 3.0974 7.61933 3.04999 7.49999 3.04999C7.38064 3.04999 7.26618 3.0974 7.18179 3.18179L4.93179 5.43179ZM10.0682 9.56819C10.2439 9.39245 10.2439 9.10753 10.0682 8.93179C9.89245 8.75606 9.60753 8.75606 9.43179 8.93179L7.49999 10.8636L5.56819 8.93179C5.39245 8.75606 5.10753 8.75606 4.93179 8.93179C4.75605 9.10753 4.75605 9.39245 4.93179 9.56819L7.18179 11.8182C7.35753 11.9939 7.64245 11.9939 7.81819 11.8182L10.0682 9.56819Z",
      fill: "currentColor",
      fillRule: "evenodd",
      clipRule: "evenodd"
    })
  });
});
Jc.classes = Xt;
Jc.varsResolver = Q1;
Jc.displayName = "@mantine/core/ComboboxChevron";
var [o_, Sn] = xo("Combobox component was not found in tree");
function K1({ onMouseDown: a, onClick: o, onClear: i, ...l }) {
  return /* @__PURE__ */ (0, g.jsx)(nt.ClearButton, {
    tabIndex: -1,
    "aria-hidden": !0,
    ...l,
    onMouseDown: (c) => {
      c.preventDefault(), a?.(c);
    },
    onClick: (c) => {
      i(), o?.(c);
    }
  });
}
K1.displayName = "@mantine/core/ComboboxClearButton";
var rh = Ce((a) => {
  const { classNames: o, styles: i, className: l, style: c, hidden: d, ...f } = ue("ComboboxDropdown", null, a), m = Sn();
  return /* @__PURE__ */ (0, g.jsx)(gt.Dropdown, {
    ...f,
    role: "presentation",
    "data-hidden": d || void 0,
    "data-floating-height": m.floatingHeight || void 0,
    ...m.getStyles("dropdown", {
      className: l,
      style: c,
      classNames: o,
      styles: i
    })
  });
});
rh.classes = Xt;
rh.displayName = "@mantine/core/ComboboxDropdown";
var r_ = { refProp: "ref" }, Z1 = Ce((a) => {
  const { children: o, refProp: i, ref: l } = ue("ComboboxDropdownTarget", r_, a);
  if (Sn(), !Om(o)) throw new Error("Combobox.DropdownTarget component children should be an element or a component that accepts ref. Fragments, strings, numbers and other primitive values are not supported");
  return /* @__PURE__ */ (0, g.jsx)(gt.Target, {
    ref: l,
    refProp: i,
    children: o
  });
});
Z1.displayName = "@mantine/core/ComboboxDropdownTarget";
var ih = Ce((a) => {
  const { classNames: o, className: i, style: l, styles: c, vars: d, ...f } = ue("ComboboxEmpty", null, a), m = Sn();
  return /* @__PURE__ */ (0, g.jsx)(xe, {
    ...m.getStyles("empty", {
      className: i,
      classNames: o,
      styles: c,
      style: l
    }),
    ...f
  });
});
ih.classes = Xt;
ih.displayName = "@mantine/core/ComboboxEmpty";
function lh({ onKeyDown: a, onClick: o, withKeyboardNavigation: i, withAriaAttributes: l, withExpandedAttribute: c, targetType: d, autoComplete: f }) {
  const m = Sn(), [v, y] = (0, S.useState)(null), x = (w) => {
    if (a?.(w), !m.readOnly && i) {
      if (w.nativeEvent.isComposing) return;
      if (w.nativeEvent.code === "ArrowDown" && (w.preventDefault(), m.store.dropdownOpened ? y(m.store.selectNextOption()) : (m.store.openDropdown("keyboard"), y(m.store.selectActiveOption()), m.store.updateSelectedOptionIndex("selected", { scrollIntoView: !0 }))), w.nativeEvent.code === "ArrowUp" && (w.preventDefault(), m.store.dropdownOpened ? y(m.store.selectPreviousOption()) : (m.store.openDropdown("keyboard"), y(m.store.selectActiveOption()), m.store.updateSelectedOptionIndex("selected", { scrollIntoView: !0 }))), w.nativeEvent.code === "Enter" || w.nativeEvent.code === "NumpadEnter") {
        if (w.nativeEvent.keyCode === 229) return;
        const A = m.store.getSelectedOptionIndex();
        m.store.dropdownOpened && A !== -1 ? (w.preventDefault(), m.store.clickSelectedOption()) : d === "button" && (w.preventDefault(), m.store.openDropdown("keyboard"));
      }
      w.key === "Escape" && m.store.closeDropdown("keyboard"), w.nativeEvent.code === "Space" && d === "button" && (w.preventDefault(), m.store.toggleDropdown("keyboard"));
    }
  };
  return {
    ...l ? {
      ...c ? { role: "combobox" } : {},
      "aria-haspopup": "listbox",
      "aria-expanded": c ? !!(m.store.listId && m.store.dropdownOpened) : void 0,
      "aria-controls": m.store.dropdownOpened && m.store.listId ? m.store.listId : void 0,
      "aria-activedescendant": m.store.dropdownOpened && v || void 0,
      autoComplete: f,
      "data-expanded": m.store.dropdownOpened || void 0,
      "data-mantine-stop-propagation": m.store.dropdownOpened || void 0
    } : {},
    onKeyDown: x,
    onClick: (w) => {
      d === "button" && w.currentTarget.focus(), o?.(w);
    }
  };
}
var i_ = {
  refProp: "ref",
  targetType: "input",
  withKeyboardNavigation: !0,
  withAriaAttributes: !0,
  withExpandedAttribute: !1,
  autoComplete: "off"
}, F1 = Ce((a) => {
  const { children: o, refProp: i, withKeyboardNavigation: l, withAriaAttributes: c, withExpandedAttribute: d, targetType: f, autoComplete: m, ref: v, ...y } = ue("ComboboxEventsTarget", i_, a), x = ir(o);
  if (!x) throw new Error("Combobox.EventsTarget component children should be an element or a component that accepts ref. Fragments, strings, numbers and other primitive values are not supported");
  const b = Sn(), p = lh({
    targetType: f,
    withAriaAttributes: c,
    withKeyboardNavigation: l,
    withExpandedAttribute: d,
    onKeyDown: x.props.onKeyDown,
    onClick: x.props.onClick,
    autoComplete: m
  });
  return (0, S.cloneElement)(x, {
    ...p,
    ...y,
    [i]: ct(v, b.store.targetRef, ib(x))
  });
});
F1.displayName = "@mantine/core/ComboboxEventsTarget";
var sh = Ce((a) => {
  const { classNames: o, className: i, style: l, styles: c, vars: d, ...f } = ue("ComboboxFooter", null, a), m = Sn();
  return /* @__PURE__ */ (0, g.jsx)(xe, {
    ...m.getStyles("footer", {
      className: i,
      classNames: o,
      style: l,
      styles: c
    }),
    ...f,
    onMouseDown: (v) => {
      v.preventDefault();
    }
  });
});
sh.classes = Xt;
sh.displayName = "@mantine/core/ComboboxFooter";
var ch = Ce((a) => {
  const { classNames: o, className: i, style: l, styles: c, vars: d, children: f, label: m, id: v, ...y } = ue("ComboboxGroup", null, a), x = Sn(), b = Dn(v), p = m != null && m !== !1 && m !== "";
  return /* @__PURE__ */ (0, g.jsxs)(xe, {
    role: "group",
    "aria-labelledby": p ? b : void 0,
    ...x.getStyles("group", {
      className: i,
      classNames: o,
      style: l,
      styles: c
    }),
    ...y,
    children: [p && /* @__PURE__ */ (0, g.jsx)("div", {
      id: b,
      ...x.getStyles("groupLabel", {
        classNames: o,
        styles: c
      }),
      children: m
    }), f]
  });
});
ch.classes = Xt;
ch.displayName = "@mantine/core/ComboboxGroup";
var uh = Ce((a) => {
  const { classNames: o, className: i, style: l, styles: c, vars: d, ...f } = ue("ComboboxHeader", null, a), m = Sn();
  return /* @__PURE__ */ (0, g.jsx)(xe, {
    ...m.getStyles("header", {
      className: i,
      classNames: o,
      style: l,
      styles: c
    }),
    ...f,
    onMouseDown: (v) => {
      v.preventDefault();
    }
  });
});
uh.classes = Xt;
uh.displayName = "@mantine/core/ComboboxHeader";
function J1({ value: a, valuesDivider: o = ",", ...i }) {
  return /* @__PURE__ */ (0, g.jsx)("input", {
    type: "hidden",
    value: Array.isArray(a) ? a.join(o) : a ? `${a}` : "",
    ...i
  });
}
J1.displayName = "@mantine/core/ComboboxHiddenInput";
var dh = Ce((a) => {
  const o = ue("ComboboxOption", null, a), { classNames: i, className: l, style: c, styles: d, vars: f, onClick: m, id: v, active: y, onMouseDown: x, onMouseOver: b, disabled: p, selected: w, mod: A, ...C } = o, T = Sn(), R = (0, S.useId)(), O = v || R;
  return /* @__PURE__ */ (0, g.jsx)(xe, {
    ...T.getStyles("option", {
      className: l,
      classNames: i,
      styles: d,
      style: c
    }),
    ...C,
    id: O,
    mod: [
      "combobox-option",
      {
        "combobox-active": y,
        "combobox-disabled": p,
        "combobox-selected": w
      },
      A
    ],
    role: "option",
    onClick: (_) => {
      p ? _.preventDefault() : (T.onOptionSubmit?.(o.value, o), m?.(_));
    },
    onMouseDown: (_) => {
      _.preventDefault(), x?.(_);
    },
    onMouseOver: (_) => {
      T.resetSelectionOnOptionHover && T.store.resetSelectedOption(), b?.(_);
    }
  });
});
dh.classes = Xt;
dh.displayName = "@mantine/core/ComboboxOption";
var fh = Ce((a) => {
  const { classNames: o, className: i, style: l, styles: c, id: d, onMouseDown: f, labelledBy: m, ...v } = ue("ComboboxOptions", null, a), y = Sn(), x = Dn(d);
  return (0, S.useEffect)(() => {
    y.store.setListId(x);
  }, [x]), /* @__PURE__ */ (0, g.jsx)(xe, {
    ...y.getStyles("options", {
      className: i,
      style: l,
      classNames: o,
      styles: c
    }),
    ...v,
    id: x,
    role: "listbox",
    "aria-labelledby": m,
    onMouseDown: (b) => {
      b.preventDefault(), f?.(b);
    }
  });
});
fh.classes = Xt;
fh.displayName = "@mantine/core/ComboboxOptions";
var l_ = {
  withAriaAttributes: !0,
  withKeyboardNavigation: !0
}, mh = Ce((a) => {
  const { classNames: o, styles: i, unstyled: l, vars: c, withAriaAttributes: d, onKeyDown: f, onClick: m, withKeyboardNavigation: v, size: y, ref: x, ...b } = ue("ComboboxSearch", l_, a), p = Sn(), w = p.getStyles("search"), A = lh({
    targetType: "input",
    withAriaAttributes: d,
    withKeyboardNavigation: v,
    withExpandedAttribute: !1,
    onKeyDown: f,
    onClick: m,
    autoComplete: "off"
  });
  return /* @__PURE__ */ (0, g.jsx)(nt, {
    ref: ct(x, p.store.searchRef),
    classNames: [{ input: w.className }, o],
    styles: [{ input: w.style }, i],
    size: y || p.size,
    ...A,
    ...b,
    __staticSelector: "Combobox"
  });
});
mh.classes = Xt;
mh.displayName = "@mantine/core/ComboboxSearch";
var s_ = {
  refProp: "ref",
  targetType: "input",
  withKeyboardNavigation: !0,
  withAriaAttributes: !0,
  withExpandedAttribute: !1,
  autoComplete: "off"
}, eS = Ce((a) => {
  const { children: o, refProp: i, withKeyboardNavigation: l, withAriaAttributes: c, withExpandedAttribute: d, targetType: f, autoComplete: m, ref: v, ...y } = ue("ComboboxTarget", s_, a), x = ir(o);
  if (!x) throw new Error("Combobox.Target component children should be an element or a component that accepts ref. Fragments, strings, numbers and other primitive values are not supported");
  const b = Sn(), p = lh({
    targetType: f,
    withAriaAttributes: c,
    withKeyboardNavigation: l,
    withExpandedAttribute: d,
    onKeyDown: x.props.onKeyDown,
    onClick: x.props.onClick,
    autoComplete: m
  }), w = (0, S.cloneElement)(x, {
    ...p,
    ...y
  });
  return /* @__PURE__ */ (0, g.jsx)(gt.Target, {
    refProp: i,
    ref: ct(v, b.store.targetRef),
    children: w
  });
});
eS.displayName = "@mantine/core/ComboboxTarget";
function c_(a, o, i) {
  for (let l = a - 1; l >= 0; l -= 1) if (!o[l].hasAttribute("data-combobox-disabled")) return l;
  if (i) {
    for (let l = o.length - 1; l > -1; l -= 1) if (!o[l].hasAttribute("data-combobox-disabled")) return l;
  }
  return a;
}
function u_(a, o, i) {
  for (let l = a + 1; l < o.length; l += 1) if (!o[l].hasAttribute("data-combobox-disabled")) return l;
  if (i) {
    for (let l = 0; l < o.length; l += 1) if (!o[l].hasAttribute("data-combobox-disabled")) return l;
  }
  return a;
}
function d_(a) {
  for (let o = 0; o < a.length; o += 1) if (!a[o].hasAttribute("data-combobox-disabled")) return o;
  return -1;
}
function tS({ defaultOpened: a, opened: o, onOpenedChange: i, onDropdownClose: l, onDropdownOpen: c, loop: d = !0, scrollBehavior: f = "instant" } = {}) {
  const [m, v] = Qt({
    value: o,
    defaultValue: a,
    finalValue: !1,
    onChange: i
  }), y = (0, S.useRef)(null), x = (0, S.useRef)(-1), b = (0, S.useRef)(null), p = (0, S.useRef)(null), w = (0, S.useRef)(-1), A = (0, S.useRef)(-1), C = (0, S.useRef)(-1), T = (0, S.useCallback)((H = "unknown") => {
    m || (v(!0), c?.(H));
  }, [
    v,
    c,
    m
  ]), R = (0, S.useCallback)((H = "unknown") => {
    m && (v(!1), l?.(H));
  }, [
    v,
    l,
    m
  ]), O = (0, S.useCallback)((H = "unknown") => {
    m ? R(H) : T(H);
  }, [
    R,
    T,
    m
  ]), _ = (0, S.useCallback)(() => {
    const H = ia(p.current);
    wc(`#${y.current} [data-combobox-selected]`, H)?.removeAttribute("data-combobox-selected");
  }, []), j = (0, S.useCallback)((H) => {
    const I = ia(p.current), W = wc(`#${y.current}`, I), Z = W ? za("[data-combobox-option]", W) : null;
    if (!Z) return null;
    const ae = H >= Z.length ? 0 : H < 0 ? Z.length - 1 : H;
    return x.current = ae, Z?.[ae] && !Z[ae].hasAttribute("data-combobox-disabled") ? (_(), Z[ae].setAttribute("data-combobox-selected", "true"), Z[ae].scrollIntoView({
      block: "nearest",
      behavior: f
    }), Z[ae].id) : null;
  }, [f, _]), L = (0, S.useCallback)(() => {
    const H = ia(p.current), I = wc(`#${y.current} [data-combobox-active]`, H);
    if (I) {
      const W = za(`#${y.current} [data-combobox-option]`, H).findIndex((Z) => Z === I);
      return j(W);
    }
    return j(0);
  }, [j]), z = (0, S.useCallback)(() => {
    const H = ia(p.current), I = za(`#${y.current} [data-combobox-option]`, H);
    return j(u_(x.current, I, d));
  }, [j, d]), $ = (0, S.useCallback)(() => {
    const H = ia(p.current), I = za(`#${y.current} [data-combobox-option]`, H);
    return j(c_(x.current, I, d));
  }, [j, d]), k = (0, S.useCallback)(() => {
    const H = ia(p.current), I = za(`#${y.current} [data-combobox-option]`, H);
    return j(d_(I));
  }, [j]), Q = (0, S.useCallback)((H = "selected", I) => {
    if (typeof H == "number") {
      x.current = H;
      const W = ia(p.current), Z = za(`#${y.current} [data-combobox-option]`, W);
      I?.scrollIntoView && Z[H]?.scrollIntoView({
        block: "nearest",
        behavior: f
      });
      return;
    }
    C.current = window.setTimeout(() => {
      const W = ia(p.current), Z = za(`#${y.current} [data-combobox-option]`, W), ae = Z.findIndex((be) => be.hasAttribute(`data-combobox-${H}`));
      x.current = ae, I?.scrollIntoView && Z[ae]?.scrollIntoView({
        block: "nearest",
        behavior: f
      });
    }, 0);
  }, []), X = (0, S.useCallback)(() => {
    x.current = -1, _();
  }, [_]), oe = (0, S.useCallback)(() => {
    const H = ia(p.current);
    za(`#${y.current} [data-combobox-option]`, H)?.[x.current]?.click();
  }, []), re = (0, S.useCallback)((H) => {
    y.current = H;
  }, []), ne = (0, S.useCallback)(() => {
    w.current = window.setTimeout(() => b.current?.focus(), 0);
  }, []), F = (0, S.useCallback)(() => {
    A.current = window.setTimeout(() => p.current?.focus(), 0);
  }, []), me = (0, S.useCallback)(() => x.current, []);
  return (0, S.useEffect)(() => () => {
    window.clearTimeout(w.current), window.clearTimeout(A.current), window.clearTimeout(C.current);
  }, []), {
    dropdownOpened: m,
    openDropdown: T,
    closeDropdown: R,
    toggleDropdown: O,
    selectedOptionIndex: x.current,
    getSelectedOptionIndex: me,
    selectOption: j,
    selectFirstOption: k,
    selectActiveOption: L,
    selectNextOption: z,
    selectPreviousOption: $,
    resetSelectedOption: X,
    updateSelectedOptionIndex: Q,
    listId: y.current,
    setListId: re,
    clickSelectedOption: oe,
    searchRef: b,
    focusSearchInput: ne,
    targetRef: p,
    focusTarget: F
  };
}
var f_ = {
  keepMounted: !0,
  keepMountedMode: "display-none",
  withinPortal: !0,
  resetSelectionOnOptionHover: !1,
  width: "target",
  transitionProps: {
    transition: "fade",
    duration: 0
  },
  size: "sm"
}, nS = (a, { size: o, dropdownPadding: i }) => ({
  options: {
    "--combobox-option-fz": _t(o),
    "--combobox-option-padding": qe(o, "combobox-option-padding")
  },
  dropdown: {
    "--combobox-padding": i === void 0 ? void 0 : te(i),
    "--combobox-option-fz": _t(o),
    "--combobox-option-padding": qe(o, "combobox-option-padding")
  }
}), Ze = (a) => {
  const o = ue("Combobox", f_, a), { classNames: i, styles: l, unstyled: c, children: d, store: f, vars: m, onOptionSubmit: v, onClose: y, size: x, dropdownPadding: b, resetSelectionOnOptionHover: p, __staticSelector: w, readOnly: A, attributes: C, floatingHeight: T, middlewares: R, ...O } = o, _ = T === "viewport" ? {
    ...R,
    flip: !1,
    size: {
      ...typeof R?.size == "object" ? R.size : {},
      padding: typeof R?.size == "object" && R.size.padding !== void 0 ? R.size.padding : 10,
      apply: ({ availableHeight: k, availableWidth: Q, elements: X, ...oe }) => {
        X.floating.style.setProperty("--combobox-floating-max-height", `${k}px`);
        const re = R?.size;
        typeof re == "object" && re.apply ? re.apply({
          availableHeight: k,
          availableWidth: Q,
          elements: X,
          ...oe
        }) : re && Object.assign(X.floating.style, {
          maxWidth: `${Q}px`,
          maxHeight: `${k}px`
        });
      }
    }
  } : R, j = tS(), L = f || j, z = ke({
    name: w || "Combobox",
    classes: Xt,
    props: o,
    classNames: i,
    styles: l,
    unstyled: c,
    attributes: C,
    vars: m,
    varsResolver: nS
  }), $ = () => {
    y?.(), L.closeDropdown();
  };
  return /* @__PURE__ */ (0, g.jsx)(o_, {
    value: {
      getStyles: z,
      store: L,
      onOptionSubmit: v,
      size: x,
      resetSelectionOnOptionHover: p,
      readOnly: A,
      floatingHeight: T
    },
    children: /* @__PURE__ */ (0, g.jsx)(gt, {
      opened: L.dropdownOpened,
      ...O,
      middlewares: _,
      onChange: (k) => !k && $(),
      withRoles: !1,
      unstyled: c,
      children: d
    })
  });
}, m_ = (a) => a;
Ze.extend = m_;
Ze.classes = Xt;
Ze.varsResolver = nS;
Ze.displayName = "@mantine/core/Combobox";
Ze.Target = eS;
Ze.Dropdown = rh;
Ze.Options = fh;
Ze.Option = dh;
Ze.Search = mh;
Ze.Empty = ih;
Ze.Chevron = Jc;
Ze.Footer = sh;
Ze.Header = uh;
Ze.EventsTarget = F1;
Ze.DropdownTarget = Z1;
Ze.Group = ch;
Ze.ClearButton = K1;
Ze.HiddenInput = J1;
function aS({ children: a, role: o }) {
  const i = (0, S.use)(cr);
  return i ? /* @__PURE__ */ (0, g.jsx)("div", {
    role: o,
    "aria-labelledby": i.labelId,
    "aria-describedby": i.describedBy,
    children: a
  }) : /* @__PURE__ */ (0, g.jsx)(g.Fragment, { children: a });
}
var hh = (0, S.createContext)(null), h_ = { hiddenInputValuesSeparator: "," }, vh = kc(((a) => {
  const { value: o, defaultValue: i, onChange: l, size: c, wrapperProps: d, children: f, readOnly: m, name: v, hiddenInputValuesSeparator: y, hiddenInputProps: x, maxSelectedValues: b, disabled: p, ...w } = ue("CheckboxGroup", h_, a), [A, C] = Qt({
    value: o,
    defaultValue: i,
    finalValue: [],
    onChange: l
  }), T = (_) => {
    const j = typeof _ == "string" ? _ : _.currentTarget.value;
    if (m) return;
    const L = A.includes(j);
    !L && b && A.length >= b || C(L ? A.filter((z) => z !== j) : [...A, j]);
  }, R = (_) => {
    if (p) return !0;
    if (!b) return !1;
    const j = A.includes(_), L = A.length >= b;
    return !j && L;
  }, O = A.join(y);
  return /* @__PURE__ */ (0, g.jsx)(hh, {
    value: {
      value: A,
      onChange: T,
      size: c,
      isDisabled: R
    },
    children: /* @__PURE__ */ (0, g.jsxs)(nt.Wrapper, {
      size: c,
      ...d,
      ...w,
      labelElement: "div",
      __staticSelector: "CheckboxGroup",
      children: [/* @__PURE__ */ (0, g.jsx)(aS, {
        role: "group",
        children: f
      }), /* @__PURE__ */ (0, g.jsx)("input", {
        type: "hidden",
        name: v,
        value: O,
        ...x
      })]
    })
  });
}));
vh.classes = nt.Wrapper.classes;
vh.displayName = "@mantine/core/CheckboxGroup";
var oS = { card: "m_26775b0a" }, rS = (0, S.createContext)(null), v_ = { withBorder: !0 }, iS = (a, { radius: o }) => ({ card: { "--card-radius": Ht(o) } }), eu = Ce((a) => {
  const o = ue("CheckboxCard", v_, a), { classNames: i, className: l, style: c, styles: d, unstyled: f, vars: m, checked: v, mod: y, withBorder: x, value: b, onClick: p, defaultChecked: w, onChange: A, indeterminate: C, attributes: T, ...R } = o, O = ke({
    name: "CheckboxCard",
    classes: oS,
    props: o,
    className: l,
    style: c,
    classNames: i,
    styles: d,
    unstyled: f,
    attributes: T,
    vars: m,
    varsResolver: iS,
    rootSelector: "card"
  }), _ = (0, S.use)(hh), j = typeof v == "boolean" ? v : _ ? _.value.includes(b || "") : void 0, [L, z] = Qt({
    value: j,
    defaultValue: w,
    finalValue: !1,
    onChange: A
  });
  return /* @__PURE__ */ (0, g.jsx)(rS, {
    value: {
      checked: L,
      indeterminate: C
    },
    children: /* @__PURE__ */ (0, g.jsx)(Ua, {
      mod: [{
        "with-border": x,
        checked: L,
        indeterminate: C
      }, y],
      ...O("card"),
      ...R,
      role: "checkbox",
      "aria-checked": C ? "mixed" : L,
      onClick: ($) => {
        p?.($), _?.onChange(b || ""), z(!L);
      }
    })
  });
});
eu.displayName = "@mantine/core/CheckboxCard";
eu.classes = oS;
eu.varsResolver = iS;
function ph({ size: a, style: o, ...i }) {
  const l = a !== void 0 ? {
    width: te(a),
    height: te(a),
    ...o
  } : o;
  return /* @__PURE__ */ (0, g.jsx)("svg", {
    viewBox: "0 0 10 7",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    style: l,
    "aria-hidden": !0,
    ...i,
    children: /* @__PURE__ */ (0, g.jsx)("path", {
      d: "M4 4.586L1.707 2.293A1 1 0 1 0 .293 3.707l3 3a.997.997 0 0 0 1.414 0l5-5A1 1 0 1 0 8.293.293L4 4.586z",
      fill: "currentColor",
      fillRule: "evenodd",
      clipRule: "evenodd"
    })
  });
}
function lS({ indeterminate: a, ...o }) {
  return a ? /* @__PURE__ */ (0, g.jsx)("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 32 6",
    "aria-hidden": !0,
    ...o,
    children: /* @__PURE__ */ (0, g.jsx)("rect", {
      width: "32",
      height: "6",
      fill: "currentColor",
      rx: "3"
    })
  }) : /* @__PURE__ */ (0, g.jsx)(ph, { ...o });
}
var sS = {
  indicator: "m_5e5256ee",
  icon: "m_1b1c543a",
  "indicator--outline": "m_76e20374"
}, p_ = {
  icon: lS,
  variant: "filled",
  radius: "sm"
}, cS = (a, { radius: o, color: i, size: l, iconColor: c, variant: d, autoContrast: f }) => {
  const m = va({
    color: i || a.primaryColor,
    theme: a
  }), v = m.isThemeColor && m.shade === void 0 ? `var(--mantine-color-${m.color}-outline)` : m.color;
  return { indicator: {
    "--checkbox-size": qe(l, "checkbox-size"),
    "--checkbox-radius": o === void 0 ? void 0 : Ht(o),
    "--checkbox-color": d === "outline" ? v : an(i, a),
    "--checkbox-icon-color": c ? an(c, a) : cb(f, a) ? Al({
      color: i,
      theme: a,
      autoContrast: f
    }) : void 0
  } };
}, tu = Ce((a) => {
  const o = ue("CheckboxIndicator", p_, a), { classNames: i, className: l, style: c, styles: d, unstyled: f, vars: m, icon: v, indeterminate: y, radius: x, color: b, iconColor: p, autoContrast: w, checked: A, mod: C, variant: T, disabled: R, attributes: O, ..._ } = o, j = ke({
    name: "CheckboxIndicator",
    classes: sS,
    props: o,
    className: l,
    style: c,
    classNames: i,
    styles: d,
    unstyled: f,
    attributes: O,
    vars: m,
    varsResolver: cS,
    rootSelector: "indicator"
  }), L = (0, S.use)(rS), z = typeof y == "boolean" ? y : L?.indeterminate, $ = typeof A == "boolean" || typeof y == "boolean" ? A || y : L?.checked || L?.indeterminate || !1;
  return /* @__PURE__ */ (0, g.jsx)(xe, {
    ...j("indicator", { variant: T }),
    variant: T,
    mod: [{
      checked: $,
      disabled: R
    }, C],
    ..._,
    children: /* @__PURE__ */ (0, g.jsx)(v, {
      indeterminate: z,
      ...j("icon")
    })
  });
});
tu.displayName = "@mantine/core/CheckboxIndicator";
tu.classes = sS;
tu.varsResolver = cS;
var uS = {
  root: "m_5f75b09e",
  body: "m_5f6e695e",
  labelWrapper: "m_d3ea56bb",
  label: "m_8ee546b8",
  description: "m_328f68c0",
  error: "m_8e8a99cc"
}, dS = uS;
function gh({ __staticSelector: a, __stylesApiProps: o, className: i, classNames: l, styles: c, unstyled: d, children: f, label: m, description: v, id: y, disabled: x, error: b, size: p, labelPosition: w = "left", bodyElement: A = "div", labelElement: C = "label", variant: T, style: R, vars: O, mod: _, attributes: j, ...L }) {
  const z = ke({
    name: a,
    props: o,
    className: i,
    style: R,
    classes: uS,
    classNames: l,
    styles: c,
    unstyled: d,
    attributes: j
  }), $ = v ? `${y}-description` : void 0, k = b && typeof b != "boolean" ? `${y}-error` : void 0;
  return /* @__PURE__ */ (0, g.jsx)(xe, {
    ...z("root"),
    __vars: {
      "--label-fz": _t(p),
      "--label-lh": qe(p, "label-lh")
    },
    mod: [{ "label-position": w }, _],
    variant: T,
    size: p,
    ...L,
    children: /* @__PURE__ */ (0, g.jsxs)(xe, {
      component: A,
      htmlFor: A === "label" ? y : void 0,
      ...z("body"),
      children: [f, /* @__PURE__ */ (0, g.jsxs)("div", {
        ...z("labelWrapper"),
        "data-disabled": x || void 0,
        children: [
          m && /* @__PURE__ */ (0, g.jsx)(xe, {
            component: C,
            htmlFor: C === "label" ? y : void 0,
            ...z("label"),
            "data-disabled": x || void 0,
            children: m
          }),
          v && /* @__PURE__ */ (0, g.jsx)(nt.Description, {
            id: $,
            size: p,
            __inheritStyles: !1,
            ...z("description"),
            children: v
          }),
          b && typeof b != "boolean" && /* @__PURE__ */ (0, g.jsx)(nt.Error, {
            id: k,
            size: p,
            __inheritStyles: !1,
            ...z("error"),
            children: b
          })
        ]
      })]
    })
  });
}
gh.displayName = "@mantine/core/InlineInput";
var fS = {
  root: "m_bf2d988c",
  inner: "m_26062bec",
  input: "m_26063560",
  icon: "m_bf295423",
  "input--outline": "m_215c4542"
}, g_ = {
  labelPosition: "right",
  icon: lS,
  withErrorStyles: !0,
  variant: "filled",
  radius: "sm"
}, mS = (a, { radius: o, color: i, size: l, iconColor: c, variant: d, autoContrast: f }) => {
  const m = va({
    color: i || a.primaryColor,
    theme: a
  }), v = m.isThemeColor && m.shade === void 0 ? `var(--mantine-color-${m.color}-outline)` : m.color;
  return { root: {
    "--checkbox-size": qe(l, "checkbox-size"),
    "--checkbox-radius": o === void 0 ? void 0 : Ht(o),
    "--checkbox-color": d === "outline" ? v : an(i, a),
    "--checkbox-icon-color": c ? an(c, a) : cb(f, a) ? Al({
      color: i,
      theme: a,
      autoContrast: f
    }) : void 0
  } };
}, La = Ce((a) => {
  const o = ue("Checkbox", g_, a), { classNames: i, className: l, style: c, styles: d, unstyled: f, vars: m, color: v, label: y, id: x, size: b, radius: p, wrapperProps: w, checked: A, labelPosition: C, description: T, error: R, disabled: O, variant: _, indeterminate: j, icon: L, rootRef: z, iconColor: $, onChange: k, autoContrast: Q, mod: X, attributes: oe, readOnly: re, onClick: ne, withErrorStyles: F, ref: me, ...H } = o, I = (0, S.useRef)(null), W = (0, S.use)(hh), Z = b || W?.size, ae = ke({
    name: "Checkbox",
    props: o,
    classes: fS,
    className: l,
    style: c,
    classNames: i,
    styles: d,
    unstyled: f,
    attributes: oe,
    vars: m,
    varsResolver: mS
  }), { styleProps: be, rest: de } = ui(H), we = Dn(x), Ae = [
    T ? `${we}-description` : void 0,
    R && typeof R != "boolean" ? `${we}-error` : void 0,
    de["aria-describedby"]
  ].filter(Boolean).join(" ") || void 0, M = {
    checked: W?.value.includes(de.value) ?? A,
    onChange: (le) => {
      re || (W?.onChange(le), k?.(le));
    }
  }, K = W?.isDisabled?.(de.value) ?? !1, se = O || K;
  return (0, S.useEffect)(() => {
    I.current && (I.current.indeterminate = j || !1, j ? I.current.setAttribute("data-indeterminate", "true") : I.current.removeAttribute("data-indeterminate"));
  }, [j]), /* @__PURE__ */ (0, g.jsx)(gh, {
    ...ae("root"),
    __staticSelector: "Checkbox",
    __stylesApiProps: o,
    id: we,
    size: Z,
    labelPosition: C,
    label: y,
    description: T,
    error: R,
    disabled: se,
    classNames: i,
    styles: d,
    unstyled: f,
    "data-checked": M.checked || A || void 0,
    variant: _,
    ref: z,
    mod: X,
    attributes: oe,
    inert: de.inert,
    ...be,
    ...w,
    children: /* @__PURE__ */ (0, g.jsxs)(xe, {
      ...ae("inner"),
      mod: { labelPosition: C },
      children: [/* @__PURE__ */ (0, g.jsx)(xe, {
        component: "input",
        id: we,
        ref: ct(I, me),
        mod: {
          error: !!R,
          "with-error-styles": F
        },
        ...ae("input", {
          focusable: !0,
          variant: _
        }),
        ...de,
        ...M,
        "aria-describedby": Ae,
        disabled: se,
        inert: de.inert,
        type: "checkbox",
        onClick: (le) => {
          re && M.checked === void 0 && le.preventDefault(), ne?.(le);
        }
      }), /* @__PURE__ */ (0, g.jsx)(L, {
        indeterminate: j,
        ...ae("icon")
      })]
    })
  });
});
La.classes = {
  ...fS,
  ...dS
};
La.varsResolver = mS;
La.displayName = "@mantine/core/Checkbox";
La.Group = vh;
La.Indicator = tu;
La.Card = eu;
function Cl(a) {
  return "group" in a;
}
function hS({ options: a, search: o, limit: i }) {
  const l = o.trim().toLowerCase(), c = [];
  for (let d = 0; d < a.length; d += 1) {
    const f = a[d];
    if (c.length === i) return c;
    Cl(f) && c.push({
      group: f.group,
      items: hS({
        options: f.items,
        search: o,
        limit: i - c.length
      })
    }), Cl(f) || f.label.toLowerCase().includes(l) && c.push(f);
  }
  return c;
}
function y_(a) {
  if (a.length === 0) return !0;
  for (const o of a)
    if (!("group" in o) || o.items.length > 0) return !1;
  return !0;
}
function vS(a, o = /* @__PURE__ */ new Set()) {
  if (Array.isArray(a))
    for (const i of a) if (Cl(i)) vS(i.items, o);
    else {
      if (typeof i.value > "u") throw new Error("[@mantine/core] Each option must have value property");
      if (o.has(i.value)) throw new Error(`[@mantine/core] Duplicate options are not supported. Option with value "${i.value}" was provided more than once`);
      o.add(i.value);
    }
}
function b_(a, o) {
  return Array.isArray(a) ? a.includes(o) : a === o;
}
function pS({ data: a, withCheckIcon: o, withAlignedLabels: i, value: l, checkIconPosition: c, unstyled: d, renderOption: f }) {
  if (!Cl(a)) {
    const v = b_(l, a.value), y = o && (v ? /* @__PURE__ */ (0, g.jsx)(ph, { className: Xt.optionsDropdownCheckIcon }) : i ? /* @__PURE__ */ (0, g.jsx)("div", { className: Xt.optionsDropdownCheckPlaceholder }) : null), x = /* @__PURE__ */ (0, g.jsxs)(g.Fragment, { children: [
      c === "left" && y,
      /* @__PURE__ */ (0, g.jsx)("span", { children: a.label }),
      c === "right" && y
    ] });
    return /* @__PURE__ */ (0, g.jsx)(Ze.Option, {
      value: a.value,
      disabled: a.disabled,
      className: qt({ [Xt.optionsDropdownOption]: !d }),
      "data-reverse": c === "right" || void 0,
      "data-checked": v || void 0,
      "aria-selected": v,
      active: v,
      children: typeof f == "function" ? f({
        option: a,
        checked: v
      }) : x
    });
  }
  const m = a.items.map((v) => /* @__PURE__ */ (0, g.jsx)(pS, {
    data: v,
    value: l,
    unstyled: d,
    withCheckIcon: o,
    withAlignedLabels: i,
    checkIconPosition: c,
    renderOption: f
  }, `${v.value}`));
  return /* @__PURE__ */ (0, g.jsx)(Ze.Group, {
    label: a.group,
    children: m
  });
}
function S_({ data: a, hidden: o, hiddenWhenEmpty: i, filter: l, search: c, limit: d, maxDropdownHeight: f, floatingHeight: m, withScrollArea: v = !0, filterOptions: y = !0, withCheckIcon: x = !1, withAlignedLabels: b = !1, value: p, checkIconPosition: w, nothingFoundMessage: A, unstyled: C, labelId: T, renderOption: R, scrollAreaProps: O, "aria-label": _ }) {
  const j = Sn();
  vS(a);
  const L = typeof c == "string" ? (l || hS)({
    options: a,
    search: y ? c : "",
    limit: d ?? 1 / 0
  }) : a, z = y_(L), $ = L.map((k, Q) => /* @__PURE__ */ (0, g.jsx)(pS, {
    data: k,
    withCheckIcon: x,
    withAlignedLabels: b,
    value: p,
    checkIconPosition: w,
    unstyled: C,
    renderOption: R
  }, Cl(k) ? `group-${typeof k.group == "string" ? k.group : Q}` : `${k.value}`));
  return /* @__PURE__ */ (0, g.jsx)(Ze.Dropdown, {
    hidden: o || i && z,
    "data-composed": !0,
    children: /* @__PURE__ */ (0, g.jsxs)(Ze.Options, {
      labelledBy: T,
      "aria-label": _,
      children: [v ? /* @__PURE__ */ (0, g.jsx)(Ao.Autosize, {
        mah: (m ?? j.floatingHeight) === "viewport" ? "var(--combobox-floating-options-max-height)" : f ?? 220,
        type: "scroll",
        scrollbarSize: "var(--combobox-padding)",
        offsetScrollbars: "y",
        ...O,
        children: $
      }) : $, z && A && /* @__PURE__ */ (0, g.jsx)(Ze.Empty, { children: A })]
    })
  });
}
var gS = {
  root: "m_347db0ec",
  "root--dot": "m_fbd81e3d",
  label: "m_5add502a",
  section: "m_91fdda9b"
}, yS = (a, { radius: o, color: i, gradient: l, variant: c, size: d, autoContrast: f, circle: m }) => {
  const v = a.variantColorResolver({
    color: i || a.primaryColor,
    theme: a,
    gradient: l,
    variant: c || "filled",
    autoContrast: f
  });
  return { root: {
    "--badge-height": qe(d, "badge-height"),
    "--badge-padding-x": qe(d, "badge-padding-x"),
    "--badge-fz": qe(d, "badge-fz"),
    "--badge-radius": m || o === void 0 ? void 0 : Ht(o),
    "--badge-bg": i || c ? v.background : void 0,
    "--badge-color": i || c ? v.color : void 0,
    "--badge-bd": i || c ? v.border : void 0,
    "--badge-dot-color": c === "dot" ? an(i, a) : void 0
  } };
}, Ml = In((a) => {
  const o = ue("Badge", null, a), { classNames: i, className: l, style: c, styles: d, unstyled: f, vars: m, radius: v, color: y, gradient: x, leftSection: b, rightSection: p, children: w, variant: A, fullWidth: C, autoContrast: T, circle: R, mod: O, attributes: _, ...j } = o, L = ke({
    name: "Badge",
    props: o,
    classes: gS,
    className: l,
    style: c,
    classNames: i,
    styles: d,
    unstyled: f,
    attributes: _,
    vars: m,
    varsResolver: yS
  });
  return /* @__PURE__ */ (0, g.jsxs)(xe, {
    variant: A,
    mod: [{
      block: C,
      circle: R,
      "with-right-section": !!p,
      "with-left-section": !!b
    }, O],
    ...L("root", { variant: A }),
    ...j,
    children: [
      b && /* @__PURE__ */ (0, g.jsx)("span", {
        ...L("section"),
        "data-position": "left",
        children: b
      }),
      /* @__PURE__ */ (0, g.jsx)("span", {
        ...L("label"),
        children: w
      }),
      p && /* @__PURE__ */ (0, g.jsx)("span", {
        ...L("section"),
        "data-position": "right",
        children: p
      })
    ]
  });
});
Ml.classes = gS;
Ml.varsResolver = yS;
Ml.displayName = "@mantine/core/Badge";
var pi = {
  root: "m_77c9d27d",
  inner: "m_80f1301b",
  label: "m_811560b9",
  section: "m_a74036a",
  loader: "m_a25b86ee",
  group: "m_80d6d844",
  groupSection: "m_70be2a01"
}, Uy = { orientation: "horizontal" }, bS = (a, { borderWidth: o }) => ({ group: { "--button-border-width": te(o) } }), nu = Ce((a) => {
  const o = ue("ButtonGroup", Uy, a), { className: i, style: l, classNames: c, styles: d, unstyled: f, orientation: m, vars: v, borderWidth: y, mod: x, attributes: b, ...p } = ue("ButtonGroup", Uy, a), w = ke({
    name: "ButtonGroup",
    props: o,
    classes: pi,
    className: i,
    style: l,
    classNames: c,
    styles: d,
    unstyled: f,
    attributes: b,
    vars: v,
    varsResolver: bS,
    rootSelector: "group"
  });
  return /* @__PURE__ */ (0, g.jsx)(xe, {
    ...w("group"),
    mod: [{ orientation: m }, x],
    role: "group",
    ...p
  });
});
nu.classes = pi;
nu.varsResolver = bS;
nu.displayName = "@mantine/core/ButtonGroup";
var SS = (a, { radius: o, color: i, gradient: l, variant: c, autoContrast: d, size: f }) => {
  const m = a.variantColorResolver({
    color: i || a.primaryColor,
    theme: a,
    gradient: l,
    variant: c || "filled",
    autoContrast: d
  });
  return { groupSection: {
    "--section-height": qe(f, "section-height"),
    "--section-padding-x": qe(f, "section-padding-x"),
    "--section-fz": f?.includes("compact") ? _t(f.replace("compact-", "")) : _t(f),
    "--section-radius": o === void 0 ? void 0 : Ht(o),
    "--section-bg": i || c ? m.background : void 0,
    "--section-color": m.color,
    "--section-bd": i || c ? m.border : void 0
  } };
}, au = Ce((a) => {
  const o = ue("ButtonGroupSection", null, a), { className: i, style: l, classNames: c, styles: d, unstyled: f, vars: m, gradient: v, radius: y, autoContrast: x, attributes: b, ...p } = o, w = ke({
    name: "ButtonGroupSection",
    props: o,
    classes: pi,
    className: i,
    style: l,
    classNames: c,
    styles: d,
    unstyled: f,
    attributes: b,
    vars: m,
    varsResolver: SS,
    rootSelector: "groupSection"
  });
  return /* @__PURE__ */ (0, g.jsx)(xe, {
    ...w("groupSection"),
    ...p
  });
});
au.classes = pi;
au.varsResolver = SS;
au.displayName = "@mantine/core/ButtonGroupSection";
var w_ = {
  in: {
    opacity: 1,
    transform: `translate(-50%, calc(-50% + ${te(1)}))`
  },
  out: {
    opacity: 0,
    transform: "translate(-50%, -200%)"
  },
  common: { transformOrigin: "center" },
  transitionProperty: "transform, opacity"
}, wS = (a, { radius: o, color: i, gradient: l, variant: c, size: d, justify: f, autoContrast: m }) => {
  const v = a.variantColorResolver({
    color: i || a.primaryColor,
    theme: a,
    gradient: l,
    variant: c || "filled",
    autoContrast: m
  });
  return { root: {
    "--button-justify": f,
    "--button-height": qe(d, "button-height"),
    "--button-padding-x": qe(d, "button-padding-x"),
    "--button-fz": d?.includes("compact") ? _t(d.replace("compact-", "")) : _t(d),
    "--button-radius": o === void 0 ? void 0 : Ht(o),
    "--button-bg": i || c ? v.background : void 0,
    "--button-hover": i || c ? v.hover : void 0,
    "--button-color": v.color,
    "--button-bd": i || c ? v.border : void 0,
    "--button-hover-color": i || c ? v.hoverColor : void 0
  } };
}, It = In((a) => {
  const o = ue("Button", null, a), { style: i, vars: l, className: c, color: d, disabled: f, children: m, leftSection: v, rightSection: y, fullWidth: x, variant: b, radius: p, loading: w, loaderProps: A, gradient: C, classNames: T, styles: R, unstyled: O, "data-disabled": _, autoContrast: j, mod: L, attributes: z, ...$ } = o, k = ke({
    name: "Button",
    props: o,
    classes: pi,
    className: c,
    style: i,
    classNames: T,
    styles: R,
    unstyled: O,
    attributes: z,
    vars: l,
    varsResolver: wS
  }), Q = !!v, X = !!y;
  return /* @__PURE__ */ (0, g.jsxs)(Ua, {
    ...k("root", { active: !f && !w && !_ }),
    unstyled: O,
    variant: b,
    disabled: f || w,
    mod: [{
      disabled: f || _,
      loading: w,
      block: x,
      "with-left-section": Q,
      "with-right-section": X
    }, L],
    ...$,
    children: [typeof w == "boolean" && /* @__PURE__ */ (0, g.jsx)(lr, {
      mounted: w,
      transition: w_,
      duration: 150,
      children: (oe) => /* @__PURE__ */ (0, g.jsx)(xe, {
        component: "span",
        ...k("loader", { style: oe }),
        "aria-hidden": !0,
        children: /* @__PURE__ */ (0, g.jsx)(sr, {
          color: "var(--button-color)",
          size: "calc(var(--button-height) / 1.8)",
          ...A
        })
      })
    }), /* @__PURE__ */ (0, g.jsxs)("span", {
      ...k("inner"),
      children: [
        v && /* @__PURE__ */ (0, g.jsx)(xe, {
          component: "span",
          ...k("section"),
          mod: { position: "left" },
          children: v
        }),
        /* @__PURE__ */ (0, g.jsx)(xe, {
          component: "span",
          mod: { loading: w },
          ...k("label"),
          children: m
        }),
        y && /* @__PURE__ */ (0, g.jsx)(xe, {
          component: "span",
          ...k("section"),
          mod: { position: "right" },
          children: y
        })
      ]
    })]
  });
});
It.classes = pi;
It.varsResolver = wS;
It.displayName = "@mantine/core/Button";
It.Group = nu;
It.GroupSection = au;
function x_(a) {
  const o = a.currentTarget;
  return ia(o).activeElement !== o;
}
var C_ = [
  "borderBottomWidth",
  "borderLeftWidth",
  "borderRightWidth",
  "borderTopWidth",
  "boxSizing",
  "fontFamily",
  "fontSize",
  "fontStyle",
  "fontWeight",
  "letterSpacing",
  "lineHeight",
  "paddingBottom",
  "paddingLeft",
  "paddingRight",
  "paddingTop",
  "tabSize",
  "textIndent",
  "textRendering",
  "textTransform",
  "width",
  "wordBreak",
  "wordSpacing",
  "scrollbarGutter"
], qy = {
  "min-height": "0",
  "max-height": "none",
  height: "0",
  visibility: "hidden",
  overflow: "hidden",
  position: "absolute",
  "z-index": "-1000",
  top: "0",
  right: "0",
  display: "block"
};
function Vy(a) {
  Object.keys(qy).forEach((o) => {
    a.style.setProperty(o, qy[o], "important");
  });
}
function E_(a) {
  const o = window.getComputedStyle(a);
  if (o === null) return null;
  const i = {};
  for (const l of C_) i[l] = o[l];
  return i.boxSizing === "" ? null : {
    sizingStyle: i,
    paddingSize: parseFloat(i.paddingBottom) + parseFloat(i.paddingTop),
    borderSize: parseFloat(i.borderBottomWidth) + parseFloat(i.borderTopWidth)
  };
}
var Rt = null;
function A_(a, o, i = 1, l = 1 / 0) {
  Rt || (Rt = document.createElement("textarea"), Rt.setAttribute("tabindex", "-1"), Rt.setAttribute("aria-hidden", "true"), Rt.setAttribute("aria-label", "autosize measurement"), Vy(Rt)), Rt.parentNode === null && document.body.appendChild(Rt);
  const { paddingSize: c, borderSize: d, sizingStyle: f } = a, { boxSizing: m } = f;
  Object.keys(f).forEach((p) => {
    Rt.style[p] = f[p];
  }), Vy(Rt), Rt.value = o;
  let v = m === "border-box" ? Rt.scrollHeight + d : Rt.scrollHeight - c;
  Rt.value = o, v = m === "border-box" ? Rt.scrollHeight + d : Rt.scrollHeight - c, Rt.value = "x";
  const y = Rt.scrollHeight - c;
  let x = y * i;
  m === "border-box" && (x = x + c + d), v = Math.max(x, v);
  let b = y * l;
  return m === "border-box" && (b = b + c + d), v = Math.min(b, v), [v, y];
}
function T_({ maxRows: a, minRows: o, onChange: i, ref: l, ...c }) {
  const d = c.value !== void 0, f = (0, S.useRef)(null), m = ct(f, l), v = (0, S.useRef)(0), y = (0, S.useRef)(0), x = () => {
    const w = f.current;
    if (!w) return;
    const A = E_(w);
    if (!A) return;
    const [C] = A_(A, w.value || w.placeholder || "x", o, a);
    v.current !== C && (v.current = C, w.style.setProperty("height", `${C}px`, "important"));
  }, b = (0, S.useEffectEvent)(x), p = (w) => {
    d || x(), i?.(w);
  };
  return (0, S.useLayoutEffect)(x), (0, S.useEffect)(() => {
    const w = () => x();
    return window.addEventListener("resize", w), () => window.removeEventListener("resize", w);
  }, []), (0, S.useEffect)(() => {
    const w = f.current;
    if (!w || typeof ResizeObserver > "u") return;
    y.current = w.offsetWidth;
    let A = 0;
    const C = new ResizeObserver(() => {
      f.current && f.current.offsetWidth !== y.current && (y.current = f.current.offsetWidth, cancelAnimationFrame(A), A = requestAnimationFrame(b));
    });
    return C.observe(w), () => {
      cancelAnimationFrame(A), C.disconnect();
    };
  }, []), (0, S.useEffect)(() => {
    const w = () => x();
    return document.fonts.addEventListener("loadingdone", w), () => document.fonts.removeEventListener("loadingdone", w);
  }, []), (0, S.useEffect)(() => {
    const w = (A) => {
      if (f.current?.form === A.target && !d) {
        const C = f.current.value;
        requestAnimationFrame(() => {
          f.current && C !== f.current.value && x();
        });
      }
    };
    return document.body.addEventListener("reset", w), () => document.body.removeEventListener("reset", w);
  }, [d]), /* @__PURE__ */ (0, g.jsx)("textarea", {
    rows: o,
    ...c,
    onChange: p,
    ref: m
  });
}
var yh = Ce((a) => {
  const { autosize: o, maxRows: i, minRows: l, __staticSelector: c, resize: d, bottomSection: f, bottomSectionProps: m, ...v } = ue([
    "Input",
    "InputWrapper",
    "Textarea"
  ], null, a), y = o && rb() !== "test", x = y ? {
    maxRows: i,
    minRows: l
  } : {};
  return /* @__PURE__ */ (0, g.jsx)(Va, {
    component: y ? T_ : "textarea",
    ...v,
    __staticSelector: c || "Textarea",
    __bottomSection: f,
    __bottomSectionProps: m,
    multiline: !0,
    "data-no-overflow": o && i === void 0 || void 0,
    __vars: { "--input-resize": d },
    ...x
  });
});
yh.classes = Va.classes;
yh.displayName = "@mantine/core/Textarea";
var [R_, ln] = xo("Menu component was not found in the tree"), xS = (0, S.createContext)(null);
function CS(a) {
  const { value: o, defaultValue: i, onChange: l, children: c } = ue("MenuCheckboxGroup", null, a), [d, f] = Qt({
    value: o,
    defaultValue: i,
    finalValue: [],
    onChange: l
  }), m = (0, S.useCallback)((v) => {
    f(d.includes(v) ? d.filter((y) => y !== v) : [...d, v]);
  }, [d, f]);
  return /* @__PURE__ */ (0, g.jsx)(xS, {
    value: {
      values: d,
      onChange: m
    },
    children: c
  });
}
CS.displayName = "@mantine/core/MenuCheckboxGroup";
var ci = (0, S.createContext)(null);
function ES({ role: a, checked: o, indicator: i, onSelect: l, color: c, closeMenuOnClick: d, rightSection: f, children: m, disabled: v, dataDisabled: y, className: x, style: b, styles: p, classNames: w, buttonRef: A, others: C }) {
  const T = ln(), R = (0, S.use)(ci), O = Pn(), { dir: _ } = Co(), j = (0, S.useRef)(null), L = ot(C.onClick, () => {
    y || (l(), d && T.closeDropdownImmediately());
  }), z = ot(C.onMouseMove, () => {
    if (!T.hasSearch) return;
    const oe = j.current?.closest("[data-menu-dropdown]");
    oe && oe.querySelectorAll("[data-menu-active]").forEach((re) => {
      re !== j.current && re.closest("[data-menu-dropdown]") === oe && re.removeAttribute("data-menu-active");
    });
  }), $ = ot(C.onKeyDown, (oe) => {
    oe.key === "ArrowLeft" && R && (R.close(), R.focusParentItem());
  }), k = c ? O.variantColorResolver({
    color: c,
    theme: O,
    variant: "light"
  }) : void 0, Q = c ? va({
    color: c,
    theme: O
  }) : null, X = T.alignItemsLabels !== "none" || o;
  return /* @__PURE__ */ (0, g.jsxs)(Ua, {
    onMouseDown: (oe) => oe.preventDefault(),
    ...C,
    unstyled: T.unstyled,
    tabIndex: T.menuItemTabIndex,
    ...T.getStyles("item", {
      className: x,
      style: b,
      styles: p,
      classNames: w
    }),
    ref: ct(j, A),
    role: a,
    "aria-checked": o,
    disabled: v,
    "data-menu-item": !0,
    "data-checked": o || void 0,
    "data-disabled": v || y || void 0,
    "data-mantine-stop-propagation": !0,
    onClick: L,
    onMouseMove: z,
    onKeyDown: Mm({
      siblingSelector: "[data-menu-item]:not([data-disabled])",
      parentSelector: "[data-menu-dropdown]",
      activateOnFocus: !1,
      loop: T.loop,
      dir: _,
      orientation: "vertical",
      onKeyDown: $
    }),
    __vars: {
      "--menu-item-color": Q?.isThemeColor && Q?.shade === void 0 ? `var(--mantine-color-${Q.color}-6)` : k?.color,
      "--menu-item-hover": k?.hover
    },
    children: [
      X && /* @__PURE__ */ (0, g.jsx)("div", {
        ...T.getStyles("itemIndicator", {
          styles: p,
          classNames: w
        }),
        "data-checked": o || void 0,
        children: o ? i : null
      }),
      m && /* @__PURE__ */ (0, g.jsx)("div", {
        ...T.getStyles("itemLabel", {
          styles: p,
          classNames: w
        }),
        "data-menu-item-label": !0,
        children: m
      }),
      f && /* @__PURE__ */ (0, g.jsx)("div", {
        ...T.getStyles("itemSection", {
          styles: p,
          classNames: w
        }),
        "data-position": "right",
        children: f
      })
    ]
  });
}
var Xn = {
  dropdown: "m_dc9b7c9f",
  label: "m_9bfac126",
  divider: "m_efdf90cb",
  item: "m_99ac2aa1",
  search: "m_ef8769b6",
  itemLabel: "m_5476e0d3",
  itemIndicator: "m_8395186e",
  itemSection: "m_8b75e504",
  chevron: "m_b85b0bed"
}, bh = Ce((a) => {
  const { classNames: o, className: i, style: l, styles: c, vars: d, color: f, closeMenuOnClick: m, rightSection: v, children: y, disabled: x, "data-disabled": b, value: p, checked: w, defaultChecked: A, onChange: C, checkIcon: T, ref: R, ...O } = ue("MenuCheckboxItem", null, a), _ = ln(), j = (0, S.use)(xS), L = j && p !== void 0 ? j.values.includes(p) : void 0, [z, $] = Qt({
    value: w ?? L,
    defaultValue: A,
    finalValue: !1,
    onChange: C
  }), k = T ?? _.checkIcon ?? /* @__PURE__ */ (0, g.jsx)(ph, { size: 10 });
  return /* @__PURE__ */ (0, g.jsx)(ES, {
    role: "menuitemcheckbox",
    checked: z,
    indicator: k,
    onSelect: () => {
      C ? $(!z) : j && p !== void 0 ? j.onChange(p) : $(!z);
    },
    color: f,
    closeMenuOnClick: m,
    rightSection: v,
    disabled: x,
    dataDisabled: b,
    className: i,
    style: l,
    styles: c,
    classNames: o,
    buttonRef: R,
    others: O,
    children: y
  });
});
bh.classes = Xn;
bh.displayName = "@mantine/core/MenuCheckboxItem";
function AS(a) {
  const { children: o, disabled: i, longPressDelay: l } = ue("MenuContextMenu", null, a), c = ir(o);
  if (!c) throw new Error("Menu.ContextMenu component children should be an element or a component that accepts ref. Fragments, strings, numbers and other primitive values are not supported");
  const d = ln(), f = Pc(), m = n1({
    childProps: c.props,
    disabled: i || f.disabled,
    opened: d.opened,
    longPressDelay: l,
    setReference: f.reference,
    open: () => d.openDropdown()
  });
  return (0, S.cloneElement)(c, m);
}
AS.displayName = "@mantine/core/MenuContextMenu";
var Sh = Ce((a) => {
  const { classNames: o, className: i, style: l, styles: c, vars: d, ...f } = ue("MenuDivider", null, a), m = ln();
  return /* @__PURE__ */ (0, g.jsx)(xe, {
    ...m.getStyles("divider", {
      className: i,
      style: l,
      styles: c,
      classNames: o
    }),
    ...f
  });
});
Sh.classes = Xn;
Sh.displayName = "@mantine/core/MenuDivider";
var __ = 500;
function $y(a) {
  return ((a.querySelector("[data-menu-item-label]") ?? a).textContent ?? "").trim().toLowerCase();
}
function N_(a) {
  return a.length > 1 && a.split("").every((o) => o === a[0]);
}
function TS({ enabled: a, opened: o, getDropdown: i }) {
  const l = (0, S.useRef)({
    buffer: "",
    timeoutId: null
  });
  return (0, S.useEffect)(() => {
    if (o && a) return;
    const c = l.current;
    c.timeoutId !== null && (window.clearTimeout(c.timeoutId), c.timeoutId = null), c.buffer = "";
  }, [o, a]), (0, S.useEffect)(() => () => {
    const { timeoutId: c } = l.current;
    c !== null && window.clearTimeout(c);
  }, []), (c) => {
    if (!a || c.defaultPrevented || c.ctrlKey || c.metaKey || c.altKey || c.key.length !== 1 || c.key === " ") return;
    const d = c.target;
    if (d && (d.tagName === "INPUT" || d.tagName === "TEXTAREA" || d.tagName === "SELECT" || d.isContentEditable)) return;
    const f = i();
    if (!f) return;
    const m = Array.from(f.querySelectorAll("[data-menu-item]:not([data-disabled])")).filter((p) => p.closest("[data-menu-dropdown]") === f);
    if (m.length === 0) return;
    const v = l.current;
    v.buffer = (v.buffer + c.key).toLowerCase(), v.timeoutId !== null && window.clearTimeout(v.timeoutId), v.timeoutId = window.setTimeout(() => {
      v.buffer = "", v.timeoutId = null;
    }, __);
    const y = document.activeElement, x = y ? m.indexOf(y) : -1;
    let b = null;
    if (v.buffer.length === 1 || N_(v.buffer)) {
      const p = v.buffer[0], w = x + 1;
      for (let A = 0; A < m.length; A += 1) {
        const C = (w + A) % m.length;
        if ($y(m[C]).startsWith(p)) {
          b = m[C];
          break;
        }
      }
    } else for (let p = 0; p < m.length; p += 1) if ($y(m[p]).startsWith(v.buffer)) {
      b = m[p];
      break;
    }
    b && (c.preventDefault(), b.focus());
  };
}
var wh = Ce((a) => {
  const { classNames: o, className: i, style: l, styles: c, vars: d, onMouseEnter: f, onMouseLeave: m, onKeyDown: v, children: y, ref: x, ...b } = ue("MenuDropdown", null, a), p = (0, S.useRef)(null), w = ln(), A = TS({
    enabled: !w.hasSearch,
    opened: w.opened,
    getDropdown: () => p.current
  }), C = ot(v, (O) => {
    A(O), !(O.defaultPrevented || w.hasSearch) && (O.key === "ArrowUp" || O.key === "ArrowDown") && (O.preventDefault(), p.current?.querySelectorAll("[data-menu-item]:not(:disabled)")[0]?.focus());
  }), T = ot(f, () => (w.trigger === "hover" || w.trigger === "click-hover") && w.openDropdown()), R = ot(m, () => (w.trigger === "hover" || w.trigger === "click-hover") && w.closeDropdown());
  return /* @__PURE__ */ (0, g.jsxs)(gt.Dropdown, {
    ...b,
    onMouseEnter: T,
    onMouseLeave: R,
    role: "menu",
    "aria-orientation": "vertical",
    ref: ct(x, p),
    ...w.getStyles("dropdown", {
      className: i,
      style: l,
      styles: c,
      classNames: o,
      withStaticClass: !1
    }),
    tabIndex: -1,
    "data-menu-dropdown": !0,
    onKeyDown: C,
    children: [w.withInitialFocusPlaceholder && !w.hasSearch && /* @__PURE__ */ (0, g.jsx)("div", {
      role: "presentation",
      tabIndex: -1,
      "data-autofocus": !0,
      "data-mantine-stop-propagation": !0,
      style: { outline: 0 }
    }), y]
  });
});
wh.classes = Xn;
wh.displayName = "@mantine/core/MenuDropdown";
var xh = In((a) => {
  const { classNames: o, className: i, style: l, styles: c, vars: d, color: f, closeMenuOnClick: m, leftSection: v, rightSection: y, children: x, disabled: b, "data-disabled": p, ref: w, ...A } = ue("MenuItem", null, a), C = ln(), T = (0, S.use)(ci), R = Pn(), { dir: O } = Co(), _ = (0, S.useRef)(null), j = A, L = ot(j.onClick, () => {
    p || (typeof m == "boolean" ? m && C.closeDropdownImmediately() : C.closeOnItemClick && C.closeDropdownImmediately());
  }), z = ot(j.onMouseMove, () => {
    if (!C.hasSearch) return;
    const X = _.current?.closest("[data-menu-dropdown]");
    X && X.querySelectorAll("[data-menu-active]").forEach((oe) => {
      oe !== _.current && oe.closest("[data-menu-dropdown]") === X && oe.removeAttribute("data-menu-active");
    });
  }), $ = f ? R.variantColorResolver({
    color: f,
    theme: R,
    variant: "light"
  }) : void 0, k = f ? va({
    color: f,
    theme: R
  }) : null, Q = ot(j.onKeyDown, (X) => {
    X.key === "ArrowLeft" && T && (T.close(), T.focusParentItem());
  });
  return /* @__PURE__ */ (0, g.jsxs)(Ua, {
    onMouseDown: (X) => X.preventDefault(),
    ...A,
    unstyled: C.unstyled,
    tabIndex: C.menuItemTabIndex,
    ...C.getStyles("item", {
      className: i,
      style: l,
      styles: c,
      classNames: o
    }),
    ref: ct(_, w),
    role: "menuitem",
    disabled: b,
    "data-menu-item": !0,
    "data-disabled": b || p || void 0,
    "data-mantine-stop-propagation": !0,
    onClick: L,
    onMouseMove: z,
    onKeyDown: Mm({
      siblingSelector: "[data-menu-item]:not([data-disabled])",
      parentSelector: "[data-menu-dropdown]",
      activateOnFocus: !1,
      loop: C.loop,
      dir: O,
      orientation: "vertical",
      onKeyDown: Q
    }),
    __vars: {
      "--menu-item-color": k?.isThemeColor && k?.shade === void 0 ? `var(--mantine-color-${k.color}-6)` : $?.color,
      "--menu-item-hover": $?.hover
    },
    children: [
      C.alignItemsLabels === "all" && /* @__PURE__ */ (0, g.jsx)("div", {
        ...C.getStyles("itemIndicator", {
          styles: c,
          classNames: o
        }),
        "data-placeholder": !0
      }),
      v && /* @__PURE__ */ (0, g.jsx)("div", {
        ...C.getStyles("itemSection", {
          styles: c,
          classNames: o
        }),
        "data-position": "left",
        children: v
      }),
      x && /* @__PURE__ */ (0, g.jsx)("div", {
        ...C.getStyles("itemLabel", {
          styles: c,
          classNames: o
        }),
        "data-menu-item-label": !0,
        children: x
      }),
      y && /* @__PURE__ */ (0, g.jsx)("div", {
        ...C.getStyles("itemSection", {
          styles: c,
          classNames: o
        }),
        "data-position": "right",
        children: y
      })
    ]
  });
});
xh.classes = Xn;
xh.displayName = "@mantine/core/MenuItem";
var Ch = Ce((a) => {
  const { classNames: o, className: i, style: l, styles: c, vars: d, ...f } = ue("MenuLabel", null, a), m = ln();
  return /* @__PURE__ */ (0, g.jsx)(xe, {
    ...m.getStyles("label", {
      className: i,
      style: l,
      styles: c,
      classNames: o
    }),
    ...f
  });
});
Ch.classes = Xn;
Ch.displayName = "@mantine/core/MenuLabel";
var RS = (0, S.createContext)(null);
function _S(a) {
  const { value: o, defaultValue: i, onChange: l, children: c } = ue("MenuRadioGroup", null, a), [d, f] = Qt({
    value: o,
    defaultValue: i,
    finalValue: null,
    onChange: l
  });
  return /* @__PURE__ */ (0, g.jsx)(RS, {
    value: {
      value: d,
      onChange: (m) => f(m)
    },
    children: c
  });
}
_S.displayName = "@mantine/core/MenuRadioGroup";
function j_({ size: a, style: o, ...i }) {
  return /* @__PURE__ */ (0, g.jsx)("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 5 5",
    style: {
      width: te(a),
      height: te(a),
      ...o
    },
    "aria-hidden": !0,
    ...i,
    children: /* @__PURE__ */ (0, g.jsx)("circle", {
      cx: "2.5",
      cy: "2.5",
      r: "2.5",
      fill: "currentColor"
    })
  });
}
var Eh = Ce((a) => {
  const { classNames: o, className: i, style: l, styles: c, vars: d, color: f, closeMenuOnClick: m, rightSection: v, children: y, disabled: x, "data-disabled": b, value: p, checked: w, onChange: A, checkIcon: C, ref: T, ...R } = ue("MenuRadioItem", null, a), O = ln(), _ = (0, S.use)(RS), j = w ?? (_ ? _.value === p : !1), L = C ?? O.checkIcon ?? /* @__PURE__ */ (0, g.jsx)(j_, { size: 5 });
  return /* @__PURE__ */ (0, g.jsx)(ES, {
    role: "menuitemradio",
    checked: j,
    indicator: L,
    onSelect: () => {
      j || (A ? A(p) : _ && _.onChange(p));
    },
    color: f,
    closeMenuOnClick: m,
    rightSection: v,
    disabled: x,
    dataDisabled: b,
    className: i,
    style: l,
    styles: c,
    classNames: o,
    buttonRef: T,
    others: R,
    children: y
  });
});
Eh.classes = Xn;
Eh.displayName = "@mantine/core/MenuRadioItem";
var O_ = "[data-menu-item]:not([data-disabled])", M_ = "[data-menu-active]";
function am(a) {
  return a?.closest("[data-menu-dropdown]");
}
function z_(a) {
  return a ? Array.from(a.querySelectorAll(O_)).filter((o) => o.closest("[data-menu-dropdown]") === a) : [];
}
function Sm(a) {
  a && a.querySelectorAll(M_).forEach((o) => {
    o.closest("[data-menu-dropdown]") === a && o.removeAttribute("data-menu-active");
  });
}
function bc(a, o) {
  Sm(o), a && (a.setAttribute("data-menu-active", "true"), a.scrollIntoView({ block: "nearest" }));
}
function om(a) {
  return a.findIndex((o) => o.hasAttribute("data-menu-active"));
}
var D_ = { clearSearchOnClose: !0 }, Ah = Ce((a) => {
  const { classNames: o, styles: i, onKeyDown: l, onChange: c, size: d, clearSearchOnClose: f, ref: m, ...v } = ue("MenuSearch", D_, a), y = ln(), x = (0, S.useRef)(null), b = ct(m, x), p = (0, S.useRef)(c);
  p.current = c, (0, S.useEffect)(() => y.registerSearch(), [y.registerSearch]), (0, S.useEffect)(() => {
    f ? y.searchExitClearRef.current = () => {
      p.current?.({ currentTarget: { value: "" } });
    } : y.searchExitClearRef.current = null;
  }, [f, y.searchExitClearRef]), (0, S.useEffect)(() => {
    y.opened || Sm(am(x.current));
  }, [y.opened]);
  const w = ot(c, (T) => {
    Sm(am(T.currentTarget));
  }), A = ot(l, (T) => {
    if (T.defaultPrevented) return;
    const R = am(T.currentTarget), O = z_(R);
    if (T.key === "ArrowDown") {
      if (T.preventDefault(), O.length === 0) return;
      const _ = om(O);
      bc(O[_ >= O.length - 1 ? y.loop ? 0 : _ : _ + 1] ?? null, R);
    } else if (T.key === "ArrowUp") {
      if (T.preventDefault(), O.length === 0) return;
      const _ = om(O);
      bc(O[_ <= 0 ? _ === -1 || y.loop ? O.length - 1 : 0 : _ - 1] ?? null, R);
    } else if (T.key === "Home")
      T.preventDefault(), O.length > 0 && bc(O[0], R);
    else if (T.key === "End")
      T.preventDefault(), O.length > 0 && bc(O[O.length - 1], R);
    else if (T.key === "Enter") {
      if (T.nativeEvent.isComposing || T.nativeEvent.keyCode === 229) return;
      const _ = O[om(O)];
      _ && (T.preventDefault(), _.hasAttribute("data-sub-menu-item") ? (_.focus(), _.dispatchEvent(new KeyboardEvent("keydown", {
        key: "ArrowRight",
        bubbles: !0
      }))) : _.click());
    }
  }), C = y.getStyles("search");
  return /* @__PURE__ */ (0, g.jsx)(nt, {
    "data-autofocus": !0,
    "data-mantine-stop-propagation": !0,
    type: "search",
    size: d,
    ...v,
    ref: b,
    classNames: [{ input: C.className }, o],
    styles: [{ input: C.style }, i],
    onKeyDown: A,
    onChange: w,
    __staticSelector: "Menu"
  });
});
Ah.classes = Xn;
Ah.displayName = "@mantine/core/MenuSearch";
var Th = Ce((a) => {
  const { classNames: o, className: i, style: l, styles: c, vars: d, onMouseEnter: f, onMouseLeave: m, onPointerEnter: v, onPointerLeave: y, onKeyDown: x, children: b, ref: p, ...w } = ue("MenuSubDropdown", null, a), A = (0, S.useRef)(null), C = ln(), T = (0, S.use)(ci), R = TS({
    enabled: !C.hasSearch,
    opened: T?.opened ?? !1,
    getDropdown: () => A.current
  }), O = ot(x, (j) => {
    R(j), !j.ctrlKey && !j.metaKey && !j.altKey && j.key.length === 1 && j.key !== " " && j.stopPropagation();
  }), _ = T?.getFloatingProps({
    onMouseEnter: f,
    onMouseLeave: m,
    onPointerEnter: v,
    onPointerLeave: y
  });
  return /* @__PURE__ */ (0, g.jsx)(gt.Dropdown, {
    ...w,
    ..._,
    role: "menu",
    "aria-orientation": "vertical",
    ref: ct(p, A, T?.setFloating),
    ...C.getStyles("dropdown", {
      className: i,
      style: l,
      styles: c,
      classNames: o,
      withStaticClass: !1
    }),
    tabIndex: -1,
    "data-menu-dropdown": !0,
    onKeyDown: O,
    children: b
  });
});
Th.classes = Xn;
Th.displayName = "@mantine/core/MenuSubDropdown";
var Rh = In((a) => {
  const { classNames: o, className: i, style: l, styles: c, vars: d, color: f, leftSection: m, rightSection: v, children: y, disabled: x, "data-disabled": b, closeMenuOnClick: p, ref: w, ...A } = ue("MenuSubItem", null, a), C = ln(), T = (0, S.use)(ci), R = Pn(), { dir: O } = Co(), _ = (0, S.useRef)(null), j = A, L = f ? R.variantColorResolver({
    color: f,
    theme: R,
    variant: "light"
  }) : void 0, z = f ? va({
    color: f,
    theme: R
  }) : null, $ = ot(j.onKeyDown, (oe) => {
    oe.key === "ArrowRight" && (T?.open(), T?.focusFirstItem()), oe.key === "ArrowLeft" && T?.parentContext && (T.parentContext.close(), T.parentContext.focusParentItem());
  }), k = ot(j.onClick, () => {
    !b && p && C.closeDropdownImmediately();
  }), Q = ot(j.onMouseMove, () => {
    if (!C.hasSearch) return;
    const oe = _.current?.closest("[data-menu-dropdown]");
    oe && oe.querySelectorAll("[data-menu-active]").forEach((re) => {
      re !== _.current && re.closest("[data-menu-dropdown]") === oe && re.removeAttribute("data-menu-active");
    });
  }), X = T?.getReferenceProps({
    onMouseEnter: j.onMouseEnter,
    onMouseLeave: j.onMouseLeave,
    onPointerEnter: j.onPointerEnter,
    onPointerLeave: j.onPointerLeave
  });
  return /* @__PURE__ */ (0, g.jsxs)(Ua, {
    onMouseDown: (oe) => oe.preventDefault(),
    ...A,
    ...X,
    unstyled: C.unstyled,
    tabIndex: C.menuItemTabIndex,
    ...C.getStyles("item", {
      className: i,
      style: l,
      styles: c,
      classNames: o
    }),
    ref: ct(_, w, T?.setReference),
    role: "menuitem",
    disabled: x,
    "data-menu-item": !0,
    "data-sub-menu-item": !0,
    "data-disabled": x || b || void 0,
    "data-mantine-stop-propagation": !0,
    onClick: k,
    onMouseMove: Q,
    onKeyDown: Mm({
      siblingSelector: "[data-menu-item]:not([data-disabled])",
      parentSelector: "[data-menu-dropdown]",
      activateOnFocus: !1,
      loop: C.loop,
      dir: O,
      orientation: "vertical",
      onKeyDown: $
    }),
    __vars: {
      "--menu-item-color": z?.isThemeColor && z?.shade === void 0 ? `var(--mantine-color-${z.color}-6)` : L?.color,
      "--menu-item-hover": L?.hover
    },
    children: [
      C.alignItemsLabels === "all" && /* @__PURE__ */ (0, g.jsx)("div", {
        ...C.getStyles("itemIndicator", {
          styles: c,
          classNames: o
        }),
        "data-placeholder": !0
      }),
      m && /* @__PURE__ */ (0, g.jsx)("div", {
        ...C.getStyles("itemSection", {
          styles: c,
          classNames: o
        }),
        "data-position": "left",
        children: m
      }),
      y && /* @__PURE__ */ (0, g.jsx)("div", {
        ...C.getStyles("itemLabel", {
          styles: c,
          classNames: o
        }),
        "data-menu-item-label": !0,
        children: y
      }),
      /* @__PURE__ */ (0, g.jsx)("div", {
        ...C.getStyles("itemSection", {
          styles: c,
          classNames: o
        }),
        "data-position": "right",
        children: v || /* @__PURE__ */ (0, g.jsx)(G1, {
          ...C.getStyles("chevron"),
          size: 14
        })
      })
    ]
  });
});
Rh.classes = Xn;
Rh.displayName = "@mantine/core/MenuSubItem";
function NS({ children: a, refProp: o }) {
  if (!Om(a)) throw new Error("Menu.Sub.Target component children should be an element or a component that accepts ref. Fragments, strings, numbers and other primitive values are not supported");
  return ln(), /* @__PURE__ */ (0, g.jsx)(gt.Target, {
    refProp: o,
    popupType: "menu",
    children: a
  });
}
NS.displayName = "@mantine/core/MenuSubTarget";
var k_ = {
  offset: 0,
  position: "right-start",
  safeAreaPolygon: !0,
  transitionProps: { duration: 0 },
  openDelay: 0,
  middlewares: { shift: { crossAxis: !0 } }
};
function gi(a) {
  const { children: o, closeDelay: i, openDelay: l, position: c, safeAreaPolygon: d, opened: f, onChange: m, ...v } = ue("MenuSub", k_, a), y = Dn(), [x, b] = Qt({
    value: f,
    finalValue: !1,
    onChange: m
  }), p = (0, S.use)(ci), w = ln(), { dir: A } = Co(), C = Fb(A, c), T = p?.registerOpenSub ?? w.registerOpenSub, R = (0, S.useRef)(null), O = (0, S.useCallback)((re) => {
    const ne = R.current;
    return ne && ne !== re && ne(), R.current = re, () => {
      R.current === re && (R.current = null);
    };
  }, []), _ = (0, S.useRef)(b);
  _.current = b;
  const j = (0, S.useCallback)(() => _.current(!0), []), L = (0, S.useCallback)(() => _.current(!1), []);
  (0, S.useEffect)(() => {
    if (x)
      return T(L);
  }, [
    x,
    T,
    L
  ]);
  const { context: z, refs: $ } = Yb({
    placement: C,
    open: x,
    onOpenChange: (re) => {
      re ? j() : L();
    }
  }), { getReferenceProps: k, getFloatingProps: Q } = DT([OT(z, {
    handleClose: d ? LT(typeof d == "object" ? d : void 0) : void 0,
    delay: {
      open: l,
      close: i
    }
  })]), X = () => window.setTimeout(() => {
    document.getElementById(`${y}-dropdown`)?.querySelectorAll("[data-menu-item]:not([data-disabled])")[0]?.focus();
  }, 16), oe = () => window.setTimeout(() => {
    document.getElementById(`${y}-target`)?.focus();
  }, 16);
  return /* @__PURE__ */ (0, g.jsx)(ci, {
    value: {
      opened: x,
      close: L,
      open: j,
      focusFirstItem: X,
      focusParentItem: oe,
      parentContext: p,
      setReference: $.setReference,
      setFloating: $.setFloating,
      getReferenceProps: k,
      getFloatingProps: Q,
      registerOpenSub: O
    },
    children: /* @__PURE__ */ (0, g.jsx)(gt, {
      opened: x,
      onChange: (re) => re ? j() : L(),
      withArrow: !1,
      id: y,
      position: c,
      ...v,
      withinPortal: !1,
      children: o
    })
  });
}
gi.extend = (a) => a;
gi.displayName = "@mantine/core/MenuSub";
gi.Target = NS;
gi.Dropdown = Th;
gi.Item = Rh;
var L_ = { refProp: "ref" };
function jS(a) {
  const { children: o, refProp: i, ...l } = ue("MenuTarget", L_, a), c = ir(o);
  if (!c) throw new Error("Menu.Target component children should be an element or a component that accepts ref. Fragments, strings, numbers and other primitive values are not supported");
  const d = ln(), f = c.props, m = ot(f.onClick, () => {
    d.trigger === "click" ? d.toggleDropdown() : d.trigger === "click-hover" && (d.setOpenedViaClick(!0), d.opened || d.openDropdown());
  }), v = ot(f.onMouseEnter, () => (d.trigger === "hover" || d.trigger === "click-hover") && d.openDropdown()), y = ot(f.onMouseLeave, () => {
    (d.trigger === "hover" || d.trigger === "click-hover" && !d.openedViaClick) && d.closeDropdown();
  });
  return /* @__PURE__ */ (0, g.jsx)(gt.Target, {
    refProp: i,
    popupType: "menu",
    ...l,
    children: (0, S.cloneElement)(c, {
      onClick: m,
      onMouseEnter: v,
      onMouseLeave: y,
      "data-expanded": d.opened ? !0 : void 0
    })
  });
}
jS.displayName = "@mantine/core/MenuTarget";
var H_ = {
  trapFocus: !0,
  closeOnItemClick: !0,
  withInitialFocusPlaceholder: !0,
  clickOutsideEvents: [
    "mousedown",
    "touchstart",
    "keydown"
  ],
  loop: !0,
  trigger: "click",
  openDelay: 0,
  closeDelay: 100,
  menuItemTabIndex: -1,
  alignItemsLabels: "with-indicators"
}, St = Ce((a) => {
  const o = ue("Menu", H_, a), { children: i, onOpen: l, onClose: c, opened: d, defaultOpened: f, trapFocus: m, onChange: v, closeOnItemClick: y, loop: x, closeOnEscape: b, trigger: p, openDelay: w, closeDelay: A, classNames: C, styles: T, unstyled: R, variant: O, vars: _, menuItemTabIndex: j, keepMounted: L, withInitialFocusPlaceholder: z, attributes: $, onExitTransitionEnd: k, alignItemsLabels: Q, checkIcon: X, ...oe } = o, re = ke({
    name: "Menu",
    classes: Xn,
    props: o,
    classNames: C,
    styles: T,
    unstyled: R,
    attributes: $
  }), [ne, F] = Qt({
    value: d,
    defaultValue: f,
    finalValue: !1,
    onChange: v
  }), [me, H] = (0, S.useState)(!1), I = () => {
    F(!1), H(!1), ne && c?.();
  }, W = () => {
    F(!0), !ne && l?.();
  }, Z = () => {
    ne ? I() : W();
  }, { openDropdown: ae, closeDropdown: be } = $T({
    open: W,
    close: I,
    closeDelay: A,
    openDelay: w
  }), de = (0, S.useRef)(null), we = (0, S.useCallback)((ve) => {
    const V = de.current;
    return V && V !== ve && V(), de.current = ve, () => {
      de.current === ve && (de.current = null);
    };
  }, []), Ae = (0, S.useRef)(0), [M, K] = (0, S.useState)(!1), se = (0, S.useCallback)(() => (Ae.current += 1, Ae.current === 1 && K(!0), () => {
    Ae.current -= 1, Ae.current === 0 && K(!1);
  }), []), le = (0, S.useRef)(null), he = () => {
    le.current?.(), k?.();
  }, ie = (ve) => d2("[data-menu-item]", "[data-menu-dropdown]", ve), { resolvedClassNames: ye, resolvedStyles: ce } = Tl({
    classNames: C,
    styles: T,
    props: o
  });
  return /* @__PURE__ */ (0, g.jsx)(R_, {
    value: {
      getStyles: re,
      opened: ne,
      toggleDropdown: Z,
      getItemIndex: ie,
      openedViaClick: me,
      setOpenedViaClick: H,
      closeOnItemClick: y,
      closeDropdown: p === "click" ? I : be,
      openDropdown: p === "click" ? W : ae,
      closeDropdownImmediately: I,
      loop: x,
      trigger: p,
      unstyled: R,
      menuItemTabIndex: j,
      withInitialFocusPlaceholder: z,
      registerOpenSub: we,
      hasSearch: M,
      registerSearch: se,
      searchExitClearRef: le,
      alignItemsLabels: Q,
      checkIcon: X
    },
    children: /* @__PURE__ */ (0, g.jsx)(gt, {
      returnFocus: !0,
      ...oe,
      opened: ne,
      onChange: Z,
      defaultOpened: f,
      trapFocus: L ? !1 : m,
      closeOnEscape: b,
      __staticSelector: "Menu",
      classNames: ye,
      styles: ce,
      unstyled: R,
      variant: O,
      keepMounted: L,
      onExitTransitionEnd: he,
      children: i
    })
  });
});
St.displayName = "@mantine/core/Menu";
St.classes = Xn;
St.Item = xh;
St.Label = Ch;
St.Dropdown = wh;
St.Target = jS;
St.Divider = Sh;
St.Search = Ah;
St.Sub = gi;
St.CheckboxItem = bh;
St.CheckboxGroup = CS;
St.RadioItem = Eh;
St.RadioGroup = _S;
St.ContextMenu = AS;
var [B_, yi] = xo("Modal component was not found in tree"), $a = {
  root: "m_9df02822",
  content: "m_54c44539",
  inner: "m_1f958f16",
  header: "m_d0e2b9cd"
}, ou = Ce((a) => {
  const { classNames: o, className: i, style: l, styles: c, vars: d, ...f } = ue("ModalBody", null, a), m = yi();
  return /* @__PURE__ */ (0, g.jsx)(_1, {
    ...m.getStyles("body", {
      classNames: o,
      style: l,
      styles: c,
      className: i
    }),
    ...f
  });
});
ou.classes = $a;
ou.displayName = "@mantine/core/ModalBody";
var ru = Ce((a) => {
  const { classNames: o, className: i, style: l, styles: c, vars: d, ...f } = ue("ModalCloseButton", null, a), m = yi();
  return /* @__PURE__ */ (0, g.jsx)(N1, {
    ...m.getStyles("close", {
      classNames: o,
      style: l,
      styles: c,
      className: i
    }),
    ...f
  });
});
ru.classes = $a;
ru.displayName = "@mantine/core/ModalCloseButton";
var iu = Ce((a) => {
  const { classNames: o, className: i, style: l, styles: c, vars: d, children: f, __hidden: m, ...v } = ue("ModalContent", null, a), y = yi(), x = y.scrollAreaComponent || WR;
  return /* @__PURE__ */ (0, g.jsx)(j1, {
    ...y.getStyles("content", {
      className: i,
      style: l,
      styles: c,
      classNames: o
    }),
    innerProps: y.getStyles("inner", {
      className: i,
      style: l,
      styles: c,
      classNames: o
    }),
    "data-full-screen": y.fullScreen || void 0,
    "data-modal-content": !0,
    "data-hidden": m || void 0,
    ...v,
    children: /* @__PURE__ */ (0, g.jsx)(x, {
      style: { maxHeight: y.fullScreen ? "100dvh" : `calc(100dvh - (${te(y.yOffset)} * 2))` },
      children: f
    })
  });
});
iu.classes = $a;
iu.displayName = "@mantine/core/ModalContent";
var lu = Ce((a) => {
  const { classNames: o, className: i, style: l, styles: c, vars: d, ...f } = ue("ModalHeader", null, a), m = yi();
  return /* @__PURE__ */ (0, g.jsx)(O1, {
    ...m.getStyles("header", {
      classNames: o,
      style: l,
      styles: c,
      className: i
    }),
    ...f
  });
});
lu.classes = $a;
lu.displayName = "@mantine/core/ModalHeader";
var su = Ce((a) => {
  const { classNames: o, className: i, style: l, styles: c, vars: d, ...f } = ue("ModalOverlay", null, a), m = yi();
  return /* @__PURE__ */ (0, g.jsx)(M1, {
    ...m.getStyles("overlay", {
      classNames: o,
      style: l,
      styles: c,
      className: i
    }),
    ...f
  });
});
su.classes = $a;
su.displayName = "@mantine/core/ModalOverlay";
var U_ = {
  __staticSelector: "Modal",
  closeOnClickOutside: !0,
  withinPortal: !0,
  lockScroll: !0,
  trapFocus: !0,
  returnFocus: !0,
  closeOnEscape: !0,
  keepMounted: !1,
  zIndex: rr("modal"),
  transitionProps: {
    duration: 200,
    transition: "fade-down"
  },
  yOffset: "5dvh"
}, OS = (a, { radius: o, size: i, yOffset: l, xOffset: c }) => ({ root: {
  "--modal-radius": o === void 0 ? void 0 : Ht(o),
  "--modal-size": qe(i, "modal-size"),
  "--modal-y-offset": te(l),
  "--modal-x-offset": te(c)
} }), zl = Ce((a) => {
  const o = ue("ModalRoot", U_, a), { classNames: i, className: l, style: c, styles: d, unstyled: f, vars: m, yOffset: v, scrollAreaComponent: y, radius: x, fullScreen: b, centered: p, xOffset: w, __staticSelector: A, attributes: C, ...T } = o, R = ke({
    name: A,
    classes: $a,
    props: o,
    className: l,
    style: c,
    classNames: i,
    styles: d,
    unstyled: f,
    attributes: C,
    vars: m,
    varsResolver: OS
  });
  return /* @__PURE__ */ (0, g.jsx)(B_, {
    value: {
      yOffset: v,
      scrollAreaComponent: y,
      getStyles: R,
      fullScreen: b
    },
    children: /* @__PURE__ */ (0, g.jsx)(R1, {
      ...R("root"),
      "data-full-screen": b || void 0,
      "data-centered": p || void 0,
      "data-offset-scrollbars": y === Ao.Autosize || void 0,
      unstyled: f,
      ...T
    })
  });
});
zl.classes = $a;
zl.varsResolver = OS;
zl.displayName = "@mantine/core/ModalRoot";
var MS = (0, S.createContext)(null);
function zS({ children: a }) {
  const [o, i] = (0, S.useState)([]), [l, c] = (0, S.useState)(rr("modal")), [d] = (0, S.useState)(() => /* @__PURE__ */ new WeakSet());
  return /* @__PURE__ */ (0, g.jsx)(MS, {
    value: {
      stack: o,
      addModal: (f, m) => {
        i((v) => [.../* @__PURE__ */ new Set([...v, f])]), c((v) => typeof m == "number" && typeof v == "number" ? Math.max(v, m) : v);
      },
      removeModal: (f) => i((m) => m.filter((v) => v !== f)),
      getZIndex: (f) => `calc(${l} + ${o.indexOf(f)} + 1)`,
      currentId: o[o.length - 1],
      maxZIndex: l,
      handledEscapeEvents: d
    },
    children: a
  });
}
zS.displayName = "@mantine/core/ModalStack";
var cu = Ce((a) => {
  const { classNames: o, className: i, style: l, styles: c, vars: d, ...f } = ue("ModalTitle", null, a), m = yi();
  return /* @__PURE__ */ (0, g.jsx)(z1, {
    ...m.getStyles("title", {
      classNames: o,
      style: l,
      styles: c,
      className: i
    }),
    ...f
  });
});
cu.classes = $a;
cu.displayName = "@mantine/core/ModalTitle";
var q_ = {
  closeOnClickOutside: !0,
  withinPortal: !0,
  lockScroll: !0,
  trapFocus: !0,
  returnFocus: !0,
  closeOnEscape: !0,
  keepMounted: !1,
  zIndex: rr("modal"),
  transitionProps: {
    duration: 200,
    transition: "fade-down"
  },
  withOverlay: !0,
  withCloseButton: !0
}, Ln = Ce((a) => {
  const { title: o, withOverlay: i, overlayProps: l, withCloseButton: c, closeButtonProps: d, children: f, radius: m, opened: v, stackId: y, zIndex: x, ...b } = ue("Modal", q_, a), p = (0, S.use)(MS), w = !!o || c, A = p && y ? {
    closeOnEscape: p.currentId === y,
    trapFocus: p.currentId === y,
    zIndex: p.getZIndex(y),
    __handledEscapeEvents: p.handledEscapeEvents
  } : {}, C = i === !1 ? !1 : y && p ? p.currentId === y : v;
  return (0, S.useEffect)(() => {
    p && y && (v ? p.addModal(y, x || rr("modal")) : p.removeModal(y));
  }, [
    v,
    y,
    x
  ]), /* @__PURE__ */ (0, g.jsxs)(zl, {
    radius: m,
    opened: v,
    zIndex: p && y ? p.getZIndex(y) : x,
    ...b,
    ...A,
    children: [i && /* @__PURE__ */ (0, g.jsx)(su, {
      visible: C,
      transitionProps: p && y ? { duration: 0 } : void 0,
      ...l
    }), /* @__PURE__ */ (0, g.jsxs)(iu, {
      radius: m,
      __hidden: p && y && v ? y !== p.currentId : !1,
      children: [w && /* @__PURE__ */ (0, g.jsxs)(lu, { children: [o && /* @__PURE__ */ (0, g.jsx)(cu, { children: o }), c && /* @__PURE__ */ (0, g.jsx)(ru, { ...d })] }), /* @__PURE__ */ (0, g.jsx)(ou, { children: f })]
    })]
  });
});
Ln.classes = $a;
Ln.displayName = "@mantine/core/Modal";
Ln.Root = zl;
Ln.Overlay = su;
Ln.Content = iu;
Ln.Body = ou;
Ln.Header = lu;
Ln.Title = cu;
Ln.CloseButton = ru;
Ln.Stack = zS;
function V_(a, o) {
  const i = o.trim().toLowerCase();
  if (i === "") return;
  const l = Object.values(a).filter((c) => !c.disabled && c.label.trim().toLowerCase() === i);
  return l.length === 1 ? l[0] : void 0;
}
function $_({ reveal: a }) {
  return /* @__PURE__ */ (0, g.jsx)("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 256 256",
    style: {
      width: "var(--psi-icon-size)",
      height: "var(--psi-icon-size)"
    },
    children: a ? /* @__PURE__ */ (0, g.jsxs)(g.Fragment, { children: [
      /* @__PURE__ */ (0, g.jsx)("path", {
        fill: "none",
        d: "M0 0h256v256H0z"
      }),
      /* @__PURE__ */ (0, g.jsx)("path", {
        fill: "none",
        stroke: "currentColor",
        strokeLinecap: "round",
        strokeLinejoin: "round",
        strokeWidth: "16",
        d: "M48 40l160 176M154.91 157.6a40 40 0 01-53.82-59.2M135.53 88.71a40 40 0 0132.3 35.53"
      }),
      /* @__PURE__ */ (0, g.jsx)("path", {
        fill: "none",
        stroke: "currentColor",
        strokeLinecap: "round",
        strokeLinejoin: "round",
        strokeWidth: "16",
        d: "M208.61 169.1C230.41 149.58 240 128 240 128s-32-72-112-72a126 126 0 00-20.68 1.68M74 68.6C33.23 89.24 16 128 16 128s32 72 112 72a118.05 118.05 0 0054-12.6"
      })
    ] }) : /* @__PURE__ */ (0, g.jsxs)(g.Fragment, { children: [
      /* @__PURE__ */ (0, g.jsx)("path", {
        fill: "none",
        d: "M0 0h256v256H0z"
      }),
      /* @__PURE__ */ (0, g.jsx)("path", {
        fill: "none",
        stroke: "currentColor",
        strokeLinecap: "round",
        strokeLinejoin: "round",
        strokeWidth: "16",
        d: "M128 56c-80 0-112 72-112 72s32 72 112 72 112-72 112-72-32-72-112-72z"
      }),
      /* @__PURE__ */ (0, g.jsx)("circle", {
        cx: "128",
        cy: "128",
        r: "40",
        fill: "none",
        stroke: "currentColor",
        strokeLinecap: "round",
        strokeLinejoin: "round",
        strokeWidth: "16"
      })
    ] })
  });
}
var wm = {
  root: "m_f61ca620",
  input: "m_ccf8da4c",
  innerInput: "m_f2d85dd2",
  visibilityToggle: "m_b1072d44"
}, Y_ = {
  visibilityToggleIcon: $_,
  visibilityToggleFocusable: !1,
  size: "sm"
}, DS = (a, { size: o }) => ({ root: {
  "--psi-icon-size": qe(o, "psi-icon-size"),
  "--psi-button-size": qe(o, "psi-button-size")
} }), Dl = Ce((a) => {
  const o = ue([
    "Input",
    "InputWrapper",
    "PasswordInput"
  ], Y_, a), { classNames: i, className: l, style: c, styles: d, unstyled: f, vars: m, required: v, error: y, success: x, leftSection: b, disabled: p, id: w, variant: A, inputContainer: C, description: T, label: R, size: O, errorProps: _, successProps: j, descriptionProps: L, labelProps: z, withAsterisk: $, inputWrapperOrder: k, wrapperProps: Q, radius: X, rightSection: oe, rightSectionWidth: re, rightSectionPointerEvents: ne, leftSectionWidth: F, visible: me, defaultVisible: H, onVisibilityChange: I, visibilityToggleIcon: W, visibilityToggleButtonProps: Z, visibilityToggleFocusable: ae, rightSectionProps: be, leftSectionProps: de, leftSectionPointerEvents: we, withErrorStyles: Ae, withSuccessStyles: M, mod: K, attributes: se, dir: le, ...he } = o, ie = Dn(w), [ye, ce] = Qt({
    value: me,
    defaultValue: H,
    finalValue: !1,
    onChange: I
  }), ve = () => ce(!ye), V = ke({
    name: "PasswordInput",
    classes: wm,
    props: o,
    className: l,
    style: c,
    classNames: i,
    styles: d,
    unstyled: f,
    attributes: se,
    vars: m,
    varsResolver: DS
  }), { resolvedClassNames: pe, resolvedStyles: Te } = Tl({
    classNames: i,
    styles: d,
    props: o
  }), { styleProps: je, rest: Be } = ui(he), Oe = _?.id || `${ie}-error`, rt = j?.id || `${ie}-success`, dt = L?.id || `${ie}-description`, wt = !!y && typeof y != "boolean", Nt = `${wt ? Oe : ""} ${x && typeof x != "boolean" && !wt ? rt : ""} ${T ? dt : ""}`, $e = Nt.trim().length > 0 ? Nt.trim() : void 0, Vt = /* @__PURE__ */ (0, g.jsx)(hi, {
    ...V("visibilityToggle"),
    disabled: p,
    radius: X,
    "aria-pressed": ye,
    tabIndex: ae ? 0 : -1,
    "aria-label": "Toggle password visibility",
    ...Z,
    variant: Z?.variant ?? "subtle",
    color: "gray",
    unstyled: f,
    onTouchEnd: (Ye) => {
      Ye.preventDefault(), Z?.onTouchEnd?.(Ye), ve();
    },
    onMouseDown: (Ye) => {
      Ye.preventDefault(), Z?.onMouseDown?.(Ye), ve();
    },
    onKeyDown: (Ye) => {
      Z?.onKeyDown?.(Ye), (Ye.key === " " || Ye.key === "Enter") && (Ye.preventDefault(), ve());
    },
    children: /* @__PURE__ */ (0, g.jsx)(W, { reveal: ye })
  });
  return /* @__PURE__ */ (0, g.jsx)(nt.Wrapper, {
    required: v,
    id: ie,
    label: R,
    error: y,
    success: x,
    description: T,
    size: O,
    classNames: pe,
    styles: Te,
    __staticSelector: "PasswordInput",
    __stylesApiProps: o,
    unstyled: f,
    withAsterisk: $,
    inputWrapperOrder: k,
    inputContainer: C,
    variant: A,
    labelProps: {
      ...z,
      htmlFor: ie
    },
    descriptionProps: {
      ...L,
      id: dt
    },
    errorProps: {
      ..._,
      id: Oe
    },
    successProps: {
      ...j,
      id: rt
    },
    mod: K,
    attributes: se,
    ...V("root"),
    ...je,
    ...Q,
    children: /* @__PURE__ */ (0, g.jsx)(nt, {
      component: "div",
      dir: le,
      error: y,
      success: x,
      leftSection: b,
      size: O,
      classNames: {
        ...pe,
        input: qt(wm.input, pe?.input)
      },
      styles: Te,
      radius: X,
      disabled: p,
      __staticSelector: "PasswordInput",
      __stylesApiProps: o,
      rightSectionWidth: re,
      rightSection: oe ?? Vt,
      variant: A,
      unstyled: f,
      leftSectionWidth: F,
      rightSectionPointerEvents: ne || "all",
      rightSectionProps: be,
      leftSectionProps: de,
      leftSectionPointerEvents: we,
      withAria: !1,
      withErrorStyles: Ae,
      withSuccessStyles: M,
      attributes: se,
      children: /* @__PURE__ */ (0, g.jsx)("input", {
        required: v,
        "data-invalid": !!y || void 0,
        "data-with-left-section": !!b || void 0,
        ...V("innerInput"),
        disabled: p,
        id: ie,
        dir: le,
        ...Be,
        "aria-describedby": $e,
        autoComplete: Be.autoComplete || "off",
        type: ye ? "text" : "password"
      })
    })
  });
});
Dl.classes = {
  ...Va.classes,
  ...wm
};
Dl.varsResolver = DS;
Dl.displayName = "@mantine/core/PasswordInput";
var kS = {
  root: "m_cf365364",
  indicator: "m_9e182ccd",
  label: "m_1738fcb2",
  input: "m_1714d588",
  control: "m_69686b9b",
  innerLabel: "m_78882f40"
}, G_ = { withItemsBorders: !0 }, LS = (a, { radius: o, color: i, transitionDuration: l, size: c, transitionTimingFunction: d }) => ({ root: {
  "--sc-radius": o === void 0 ? void 0 : Ht(o),
  "--sc-color": i ? an(i, a) : void 0,
  "--sc-shadow": i ? void 0 : "var(--mantine-shadow-xs)",
  "--sc-transition-duration": l === void 0 ? void 0 : `${l}ms`,
  "--sc-transition-timing-function": d,
  "--sc-padding": qe(c, "sc-padding"),
  "--sc-font-size": _t(c)
} }), uu = kc((a) => {
  const o = ue("SegmentedControl", G_, a), { classNames: i, className: l, style: c, styles: d, unstyled: f, vars: m, data: v, value: y, defaultValue: x, onChange: b, size: p, name: w, disabled: A, readOnly: C, fullWidth: T, orientation: R, radius: O, color: _, transitionDuration: j, transitionTimingFunction: L, variant: z, autoContrast: $, withItemsBorders: k, mod: Q, attributes: X, ref: oe, ...re } = o, ne = ke({
    name: "SegmentedControl",
    props: o,
    classes: kS,
    className: l,
    style: c,
    classNames: i,
    styles: d,
    unstyled: f,
    attributes: X,
    vars: m,
    varsResolver: LS
  }), F = Pn(), me = v.map((ie) => k2(ie) ? {
    label: `${ie}`,
    value: ie
  } : ie), H = O2(), [I, W] = (0, S.useState)(sm()), [Z, ae] = (0, S.useState)(null), [be, de] = (0, S.useState)({}), we = (ie, ye) => {
    ie === null || be[ye] === ie || (be[ye] = ie, de({ ...be }));
  }, [Ae, M] = Qt({
    value: y,
    defaultValue: x,
    finalValue: Array.isArray(v) ? me.find((ie) => !ie.disabled)?.value ?? v[0]?.value ?? null : null,
    onChange: b
  }), K = Dn(w), se = me.map((ie) => `${ie.value}`), le = me.map((ie) => /* @__PURE__ */ (0, S.createElement)(xe, {
    ...ne("control"),
    mod: {
      active: Ae === ie.value,
      orientation: R
    },
    key: `${ie.value}`
  }, /* @__PURE__ */ (0, S.createElement)("input", {
    ...ne("input"),
    disabled: A || ie.disabled,
    type: "radio",
    name: K,
    value: `${ie.value}`,
    id: `${K}-${ie.value}`,
    checked: Ae === ie.value,
    onChange: () => !C && M(ie.value),
    "data-focus-ring": F.focusRing,
    key: `${ie.value}-input`
  }), /* @__PURE__ */ (0, S.createElement)(xe, {
    component: "label",
    ...ne("label"),
    mod: {
      active: Ae === ie.value && !(A || ie.disabled),
      disabled: A || ie.disabled,
      "read-only": C
    },
    htmlFor: `${K}-${ie.value}`,
    ref: (ye) => we(ye, `${ie.value}`),
    __vars: { "--sc-label-color": _ !== void 0 ? Al({
      color: _,
      theme: F,
      autoContrast: $
    }) : void 0 },
    key: `${ie.value}-label`
  }, /* @__PURE__ */ (0, g.jsx)("span", {
    ...ne("innerLabel"),
    children: ie.label
  })))), he = ct(oe, ae);
  return Jg(() => {
    W(sm());
  }, [v.length]), Jg(() => {
    de((ie) => {
      const ye = {};
      return se.forEach((ce) => {
        ce in ie && (ye[ce] = ie[ce]);
      }), Object.keys(ye).length === Object.keys(ie).length ? ie : ye;
    });
  }, [se]), v.length === 0 ? null : /* @__PURE__ */ (0, g.jsxs)(xe, {
    ...ne("root"),
    variant: z,
    size: p,
    ref: he,
    mod: [{
      "full-width": T,
      orientation: R,
      initialized: H,
      "with-items-borders": k
    }, Q],
    ...re,
    role: "radiogroup",
    "data-disabled": A,
    children: [typeof Ae < "u" && /* @__PURE__ */ (0, g.jsx)(Fc, {
      target: be[`${Ae}`],
      parent: Z,
      component: "span",
      transitionDuration: "var(--sc-transition-duration)",
      ...ne("indicator")
    }, I), le]
  });
});
uu.classes = kS;
uu.varsResolver = LS;
uu.displayName = "@mantine/core/SegmentedControl";
var W_ = {
  size: "sm",
  withCheckIcon: !0,
  allowDeselect: !0,
  checkIconPosition: "left",
  openOnFocus: !0
}, _h = kc((a) => {
  const o = ue([
    "Input",
    "InputWrapper",
    "Select"
  ], W_, a), { classNames: i, styles: l, unstyled: c, vars: d, dropdownOpened: f, defaultDropdownOpened: m, onDropdownClose: v, onDropdownOpen: y, onFocus: x, onBlur: b, onClick: p, onChange: w, data: A, value: C, defaultValue: T, selectFirstOptionOnChange: R, selectFirstOptionOnDropdownOpen: O, onOptionSubmit: _, comboboxProps: j, readOnly: L, disabled: z, filter: $, limit: k, withScrollArea: Q, maxDropdownHeight: X, floatingHeight: oe, size: re, searchable: ne, rightSection: F, checkIconPosition: me, withCheckIcon: H, withAlignedLabels: I, nothingFoundMessage: W, name: Z, form: ae, searchValue: be, defaultSearchValue: de, onSearchChange: we, allowDeselect: Ae, error: M, rightSectionPointerEvents: K, id: se, clearable: le, clearSectionMode: he, clearButtonProps: ie, hiddenInputProps: ye, renderOption: ce, onClear: ve, autoComplete: V, scrollAreaProps: pe, __defaultRightSection: Te, __clearSection: je, __clearable: Be, chevronColor: Oe, autoSelectOnBlur: rt, openOnFocus: dt, attributes: wt, ...Nt } = o, $e = (0, S.useMemo)(() => n_(A), [A]), Vt = (0, S.useRef)({}), Ye = (0, S.useMemo)(() => X1($e), [$e]), pa = Dn(se), [Pe, Kt, wn] = Qt({
    value: C,
    defaultValue: T,
    finalValue: null,
    onChange: w
  }), cn = Pe != null ? `${Pe}` in Ye ? Ye[`${Pe}`] : Vt.current[`${Pe}`] : void 0, dr = N2(cn), [fr, Hl, bi] = Qt({
    value: be,
    defaultValue: de,
    finalValue: cn ? cn.label : "",
    onChange: we
  }), xt = tS({
    opened: f,
    defaultOpened: m,
    onDropdownOpen: () => {
      y?.(), O ? xt.selectFirstOption() : xt.updateSelectedOptionIndex("active", { scrollIntoView: !0 });
    },
    onDropdownClose: () => {
      v?.(), setTimeout(xt.resetSelectedOption, 0);
    }
  }), xn = (yt) => {
    Hl(yt), xt.resetSelectedOption();
  }, { resolvedClassNames: Bl, resolvedStyles: Ul } = Tl({
    props: o,
    styles: l,
    classNames: i
  });
  (0, S.useEffect)(() => {
    R && xt.selectFirstOption();
  }, [R, fr]), (0, S.useEffect)(() => {
    C === null && xn(""), C != null && cn && (dr?.value !== cn.value || dr?.label !== cn.label) && xn(cn.label);
  }, [C, cn]), (0, S.useEffect)(() => {
    !wn && !bi && xn(Pe != null ? `${Pe}` in Ye ? Ye[`${Pe}`]?.label : Vt.current[`${Pe}`]?.label || "" : "");
  }, [Ye, Pe]), (0, S.useEffect)(() => {
    Pe && `${Pe}` in Ye && (Vt.current[`${Pe}`] = Ye[`${Pe}`]);
  }, [Ye, Pe]);
  const $t = /* @__PURE__ */ (0, g.jsx)(Ze.ClearButton, {
    ...ie,
    onClear: () => {
      Kt(null, null), xn(""), ve?.();
    }
  }), fu = le && Pe != null && !z && !L;
  return /* @__PURE__ */ (0, g.jsxs)(g.Fragment, { children: [/* @__PURE__ */ (0, g.jsxs)(Ze, {
    store: xt,
    __staticSelector: "Select",
    classNames: Bl,
    styles: Ul,
    unstyled: c,
    readOnly: L,
    size: re,
    attributes: wt,
    floatingHeight: oe,
    keepMounted: rt,
    onOptionSubmit: (yt) => {
      _?.(yt);
      const Bt = Ae && `${Ye[yt].value}` == `${Pe}` ? null : Ye[yt], Ya = Bt ? Bt.value : null;
      Ya !== Pe && Kt(Ya, Bt), !wn && xn(Ya != null && Bt?.label || ""), xt.closeDropdown();
    },
    ...j,
    children: [/* @__PURE__ */ (0, g.jsx)(Ze.Target, {
      targetType: ne ? "input" : "button",
      autoComplete: V,
      withExpandedAttribute: !0,
      children: /* @__PURE__ */ (0, g.jsx)(Va, {
        id: pa,
        __defaultRightSection: /* @__PURE__ */ (0, g.jsx)(Ze.Chevron, {
          size: re,
          error: M,
          unstyled: c,
          color: Oe
        }),
        __clearSection: $t,
        __clearable: fu,
        __clearSectionMode: he,
        rightSection: F,
        rightSectionPointerEvents: K || "none",
        ...Nt,
        size: re,
        __staticSelector: "Select",
        disabled: z,
        readOnly: L || !ne,
        value: fr,
        onChange: (yt) => {
          if (x_(yt)) {
            if (!L) {
              const Bt = V_(Ye, yt.currentTarget.value);
              Bt && `${Bt.value}` != `${Pe}` && (Kt(Bt.value, Bt), !wn && xn(Bt.label));
            }
            return;
          }
          xn(yt.currentTarget.value), xt.openDropdown(), R && xt.selectFirstOption();
        },
        onFocus: (yt) => {
          dt && ne && xt.openDropdown(), x?.(yt);
        },
        onBlur: (yt) => {
          rt && xt.clickSelectedOption(), ne && xt.closeDropdown();
          const Bt = Pe != null && (`${Pe}` in Ye ? Ye[`${Pe}`] : Vt.current[`${Pe}`]);
          xn(Bt && Bt.label || ""), b?.(yt);
        },
        onClick: (yt) => {
          ne ? xt.openDropdown() : xt.toggleDropdown(), p?.(yt);
        },
        classNames: Bl,
        styles: Ul,
        unstyled: c,
        pointer: !ne,
        error: M,
        attributes: wt
      })
    }), /* @__PURE__ */ (0, g.jsx)(S_, {
      data: $e,
      hidden: L || z,
      filter: $,
      search: fr,
      limit: k,
      hiddenWhenEmpty: !W,
      withScrollArea: Q,
      maxDropdownHeight: X,
      filterOptions: !!ne && cn?.label !== fr,
      value: Pe,
      checkIconPosition: me,
      withCheckIcon: H,
      withAlignedLabels: I,
      nothingFoundMessage: W,
      unstyled: c,
      labelId: Nt.label ? `${pa}-label` : void 0,
      "aria-label": Nt.label ? void 0 : Nt["aria-label"],
      renderOption: ce,
      scrollAreaProps: pe
    })]
  }), /* @__PURE__ */ (0, g.jsx)(Ze.HiddenInput, {
    value: Pe,
    name: Z,
    form: ae,
    disabled: z,
    ...ye
  })] });
});
_h.classes = {
  ...Va.classes,
  ...Ze.classes
};
_h.displayName = "@mantine/core/Select";
var HS = (0, S.createContext)(null), P_ = { hiddenInputValuesSeparator: "," }, Nh = kc(((a) => {
  const { value: o, defaultValue: i, onChange: l, size: c, wrapperProps: d, children: f, readOnly: m, name: v, hiddenInputValuesSeparator: y, hiddenInputProps: x, maxSelectedValues: b, disabled: p, ...w } = ue("SwitchGroup", P_, a), [A, C] = Qt({
    value: o,
    defaultValue: i,
    finalValue: [],
    onChange: l
  }), T = (_) => {
    const j = _.currentTarget.value;
    if (m) return;
    const L = A.includes(j);
    !L && b && A.length >= b || C(L ? A.filter((z) => z !== j) : [...A, j]);
  }, R = (_) => {
    if (p) return !0;
    if (!b) return !1;
    const j = A.includes(_), L = A.length >= b;
    return !j && L;
  }, O = A.join(y);
  return /* @__PURE__ */ (0, g.jsx)(HS, {
    value: {
      value: A,
      onChange: T,
      size: c,
      isDisabled: R
    },
    children: /* @__PURE__ */ (0, g.jsxs)(nt.Wrapper, {
      size: c,
      ...d,
      ...w,
      labelElement: "div",
      __staticSelector: "SwitchGroup",
      children: [/* @__PURE__ */ (0, g.jsx)(aS, {
        role: "group",
        children: f
      }), /* @__PURE__ */ (0, g.jsx)("input", {
        type: "hidden",
        name: v,
        value: O,
        ...x
      })]
    })
  });
}));
Nh.classes = nt.Wrapper.classes;
Nh.displayName = "@mantine/core/SwitchGroup";
var BS = {
  root: "m_5f93f3bb",
  input: "m_926b4011",
  track: "m_9307d992",
  thumb: "m_93039a1d",
  trackLabel: "m_8277e082"
}, I_ = {
  labelPosition: "right",
  withThumbIndicator: !0
}, US = (a, { radius: o, color: i, size: l }) => ({ root: {
  "--switch-radius": o === void 0 ? void 0 : Ht(o),
  "--switch-height": qe(l, "switch-height"),
  "--switch-width": qe(l, "switch-width"),
  "--switch-thumb-size": qe(l, "switch-thumb-size"),
  "--switch-label-font-size": qe(l, "switch-label-font-size"),
  "--switch-track-label-padding": qe(l, "switch-track-label-padding"),
  "--switch-color": i ? an(i, a) : void 0
} }), kl = Ce((a) => {
  const o = ue("Switch", I_, a), { classNames: i, className: l, style: c, styles: d, unstyled: f, vars: m, color: v, label: y, offLabel: x, onLabel: b, id: p, size: w, radius: A, wrapperProps: C, thumbIcon: T, checked: R, defaultChecked: O, onChange: _, labelPosition: j, description: L, error: z, disabled: $, variant: k, rootRef: Q, mod: X, withThumbIndicator: oe, attributes: re, ...ne } = o, F = (0, S.use)(HS), me = w || F?.size, H = ke({
    name: "Switch",
    props: o,
    classes: BS,
    className: l,
    style: c,
    classNames: i,
    styles: d,
    unstyled: f,
    attributes: re,
    vars: m,
    varsResolver: US
  }), { styleProps: I, rest: W } = ui(ne), Z = Dn(p), ae = [
    L ? `${Z}-description` : void 0,
    z && typeof z != "boolean" ? `${Z}-error` : void 0,
    W["aria-describedby"]
  ].filter(Boolean).join(" ") || void 0, be = {
    checked: F?.value.includes(W.value) ?? R,
    onChange: (M) => {
      F?.onChange(M), _?.(M);
    }
  }, de = $ || F?.isDisabled?.(W.value), [we, Ae] = Qt({
    value: be.checked ?? R,
    defaultValue: O,
    finalValue: !1
  });
  return /* @__PURE__ */ (0, g.jsxs)(gh, {
    ...H("root"),
    __staticSelector: "Switch",
    __stylesApiProps: o,
    id: Z,
    size: me,
    labelPosition: j,
    label: y,
    description: L,
    error: z,
    disabled: de,
    bodyElement: "label",
    labelElement: "span",
    classNames: i,
    styles: d,
    unstyled: f,
    "data-checked": be.checked,
    variant: k,
    ref: Q,
    mod: X,
    attributes: re,
    inert: W.inert,
    ...I,
    ...C,
    children: [/* @__PURE__ */ (0, g.jsx)("input", {
      ...W,
      ...be,
      disabled: de,
      checked: we,
      "data-checked": be.checked,
      onChange: (M) => {
        be.onChange?.(M), Ae(M.currentTarget.checked);
      },
      id: Z,
      type: "checkbox",
      role: "switch",
      inert: W.inert,
      "aria-describedby": ae,
      ...H("input")
    }), /* @__PURE__ */ (0, g.jsxs)(xe, {
      "aria-hidden": "true",
      component: "span",
      mod: {
        error: z,
        "label-position": j,
        "without-labels": !b && !x
      },
      ...H("track"),
      children: [/* @__PURE__ */ (0, g.jsx)(xe, {
        component: "span",
        mod: {
          "reduce-motion": !0,
          "with-thumb-indicator": oe && !T
        },
        ...H("thumb"),
        children: T
      }), /* @__PURE__ */ (0, g.jsx)("span", {
        ...H("trackLabel"),
        children: we ? b : x
      })]
    })]
  });
});
kl.classes = {
  ...BS,
  ...dS
};
kl.varsResolver = US;
kl.displayName = "@mantine/core/Switch";
kl.Group = Nh;
var [X_, Q_] = xo("Table component was not found in the tree"), Ll = {
  table: "m_b23fa0ef",
  th: "m_4e7aa4f3",
  tr: "m_4e7aa4fd",
  td: "m_4e7aa4ef",
  tbody: "m_b2404537",
  thead: "m_b242d975",
  caption: "m_9e5a3ac7",
  scrollContainer: "m_a100c15",
  scrollContainerInner: "m_62259741"
};
function K_(a, o) {
  if (!o) return;
  const i = {};
  return o.columnBorder && a.withColumnBorders && (i["data-with-column-border"] = !0), o.rowBorder && a.withRowBorders && (i["data-with-row-border"] = !0), o.striped && a.striped && (i["data-striped"] = a.striped), o.highlightOnHover && a.highlightOnHover && (i["data-hover"] = !0), o.captionSide && a.captionSide && (i["data-side"] = a.captionSide), o.stickyHeader && a.stickyHeader && (i["data-sticky"] = !0), i;
}
function ur(a, o) {
  const i = `Table${a.charAt(0).toUpperCase()}${a.slice(1)}`, l = Ce((c) => {
    const d = ue(i, {}, c), { classNames: f, className: m, style: v, styles: y, ...x } = d, b = Q_();
    return /* @__PURE__ */ (0, g.jsx)(xe, {
      component: a,
      ...K_(b, o),
      ...b.getStyles(a, {
        className: m,
        classNames: f,
        style: v,
        styles: y,
        props: d
      }),
      ...x
    });
  });
  return l.displayName = `@mantine/core/${i}`, l.classes = Ll, l;
}
var xm = ur("th", { columnBorder: !0 }), qS = ur("td", { columnBorder: !0 }), Ac = ur("tr", {
  rowBorder: !0,
  striped: !0,
  highlightOnHover: !0
}), VS = ur("thead", { stickyHeader: !0 }), $S = ur("tbody"), YS = ur("tfoot"), GS = ur("caption", { captionSide: !0 }), Z_ = { type: "scrollarea" }, WS = (a, { minWidth: o, maxHeight: i, type: l }) => ({ scrollContainer: {
  "--table-min-width": te(o),
  "--table-max-height": te(i),
  "--table-overflow": l === "native" ? "auto" : void 0
} }), du = Ce((a) => {
  const o = ue("TableScrollContainer", Z_, a), { classNames: i, className: l, style: c, styles: d, unstyled: f, vars: m, children: v, minWidth: y, maxHeight: x, type: b, scrollAreaProps: p, attributes: w, ...A } = o, C = ke({
    name: "TableScrollContainer",
    classes: Ll,
    props: o,
    className: l,
    style: c,
    classNames: i,
    styles: d,
    unstyled: f,
    attributes: w,
    vars: m,
    varsResolver: WS,
    rootSelector: "scrollContainer"
  });
  return /* @__PURE__ */ (0, g.jsx)(xe, {
    component: b === "scrollarea" ? Ao : "div",
    ...b === "scrollarea" ? x ? {
      offsetScrollbars: "xy",
      ...p
    } : {
      offsetScrollbars: "x",
      ...p
    } : {},
    ...C("scrollContainer"),
    ...A,
    children: /* @__PURE__ */ (0, g.jsx)("div", {
      ...C("scrollContainerInner"),
      children: v
    })
  });
});
du.classes = Ll;
du.varsResolver = WS;
du.displayName = "@mantine/core/TableScrollContainer";
function jh({ data: a }) {
  return /* @__PURE__ */ (0, g.jsxs)(g.Fragment, { children: [
    a.caption && /* @__PURE__ */ (0, g.jsx)(GS, { children: a.caption }),
    a.head && /* @__PURE__ */ (0, g.jsx)(VS, { children: /* @__PURE__ */ (0, g.jsx)(Ac, { children: a.head.map((o, i) => /* @__PURE__ */ (0, g.jsx)(xm, { children: o }, i)) }) }),
    a.body && /* @__PURE__ */ (0, g.jsx)($S, { children: a.body.map((o, i) => /* @__PURE__ */ (0, g.jsx)(Ac, { children: o.map((l, c) => /* @__PURE__ */ (0, g.jsx)(qS, { children: l }, c)) }, i)) }),
    a.foot && /* @__PURE__ */ (0, g.jsx)(YS, { children: /* @__PURE__ */ (0, g.jsx)(Ac, { children: a.foot.map((o, i) => /* @__PURE__ */ (0, g.jsx)(xm, { children: o }, i)) }) })
  ] });
}
jh.displayName = "@mantine/core/TableDataRenderer";
var F_ = {
  withRowBorders: !0,
  verticalSpacing: 7
}, PS = (a, { layout: o, captionSide: i, horizontalSpacing: l, verticalSpacing: c, borderColor: d, stripedColor: f, highlightOnHoverColor: m, striped: v, highlightOnHover: y, stickyHeaderOffset: x, stickyHeader: b }) => ({ table: {
  "--table-layout": o,
  "--table-caption-side": i,
  "--table-horizontal-spacing": lm(l),
  "--table-vertical-spacing": lm(c),
  "--table-border-color": d ? an(d, a) : void 0,
  "--table-striped-color": v && f ? an(f, a) : void 0,
  "--table-highlight-on-hover-color": y && m ? an(m, a) : void 0,
  "--table-sticky-header-offset": b ? te(x) : void 0
} }), pt = Ce((a) => {
  const o = ue("Table", F_, a), { classNames: i, className: l, style: c, styles: d, unstyled: f, vars: m, horizontalSpacing: v, verticalSpacing: y, captionSide: x, stripedColor: b, highlightOnHoverColor: p, striped: w, highlightOnHover: A, withColumnBorders: C, withRowBorders: T, withTableBorder: R, borderColor: O, layout: _, data: j, children: L, stickyHeader: z, stickyHeaderOffset: $, mod: k, tabularNums: Q, attributes: X, ...oe } = o, re = ke({
    name: "Table",
    props: o,
    className: l,
    style: c,
    classes: Ll,
    classNames: i,
    styles: d,
    unstyled: f,
    attributes: X,
    rootSelector: "table",
    vars: m,
    varsResolver: PS
  });
  return /* @__PURE__ */ (0, g.jsx)(X_, {
    value: {
      getStyles: re,
      stickyHeader: z,
      striped: w === !0 ? "odd" : w || void 0,
      highlightOnHover: A,
      withColumnBorders: C,
      withRowBorders: T,
      captionSide: x || "bottom"
    },
    children: /* @__PURE__ */ (0, g.jsx)(xe, {
      component: "table",
      mod: [{
        withTableBorder: R,
        tabularNums: Q
      }, k],
      ...re("table"),
      ...oe,
      children: L || !!j && /* @__PURE__ */ (0, g.jsx)(jh, { data: j })
    })
  });
});
pt.classes = Ll;
pt.varsResolver = PS;
pt.displayName = "@mantine/core/Table";
pt.Td = qS;
pt.Th = xm;
pt.Tr = Ac;
pt.Thead = VS;
pt.Tbody = $S;
pt.Tfoot = YS;
pt.Caption = GS;
pt.ScrollContainer = du;
pt.DataRenderer = jh;
var la = Ce((a) => {
  const o = ue([
    "Input",
    "InputWrapper",
    "TextInput"
  ], null, a);
  return /* @__PURE__ */ (0, g.jsx)(Va, {
    component: "input",
    ...o,
    __staticSelector: "TextInput"
  });
});
la.classes = Va.classes;
la.displayName = "@mantine/core/TextInput";
function J_(a) {
  const o = (0, S.useRef)(null);
  return o.current === null && (o.current = a()), o.current;
}
function eN(a, o) {
  if (a?.inherit && o) {
    const { inherit: i, ...l } = a;
    return {
      ...o,
      ...l
    };
  }
  return a;
}
var Yy = (0, S.createContext)({
  transformPagePoint: (a) => a,
  isStatic: !1,
  reducedMotion: "never"
});
function tN({ children: a, ...o }) {
  const i = (0, S.useContext)(Yy);
  o = {
    ...i,
    ...o
  }, o.transition = eN(o.transition, i.transition), o.isStatic = J_(() => o.isStatic);
  const l = (0, S.useMemo)(() => o, [
    JSON.stringify(o.transition),
    o.transformPagePoint,
    o.reducedMotion,
    o.skipAnimations,
    o.isValidProp
  ]);
  return (0, g.jsx)(Yy.Provider, {
    value: l,
    children: a
  });
}
var nN = a2(), aN = "webcodex.ui.accent.v1", oN = "#2563eb", El = "webcodex:accent-change", Cm = [
  {
    id: "blue",
    label: "Blue",
    color: "#2563eb"
  },
  {
    id: "indigo",
    label: "Indigo",
    color: "#4f46e5"
  },
  {
    id: "teal",
    label: "Teal",
    color: "#0f766e"
  },
  {
    id: "violet",
    label: "Violet",
    color: "#7c3aed"
  },
  {
    id: "orange",
    label: "Orange",
    color: "#c2410c"
  }
];
function ma(a) {
  return typeof a == "string" && /^#[0-9a-f]{6}$/i.test(a) ? a.toLowerCase() : null;
}
function IS() {
  try {
    return ma(window.localStorage.getItem("webcodex.ui.accent.v1")) || "#2563eb";
  } catch {
    return oN;
  }
}
function rN(a) {
  const o = ma(a);
  if (o) {
    try {
      window.localStorage.setItem(aN, o);
    } catch {
    }
    window.dispatchEvent(new CustomEvent(El, { detail: o }));
  }
}
function Em(a) {
  return [
    1,
    3,
    5
  ].map((o) => parseInt(a.slice(o, o + 2), 16));
}
function ri(a) {
  return "#" + a.map((o) => Math.round(o).toString(16).padStart(2, "0")).join("");
}
function Mc(a, o, i) {
  return a.map((l, c) => l * (1 - i) + o[c] * i);
}
function Gy(a) {
  const [o, i, l] = a.map((c) => {
    const d = c / 255;
    return d <= 0.04045 ? d / 12.92 : ((d + 0.055) / 1.055) ** 2.4;
  });
  return 0.2126 * o + 0.7152 * i + 0.0722 * l;
}
function Am(a, o) {
  const i = Gy(Em(a)), l = Gy(Em(o));
  return (Math.max(i, l) + 0.05) / (Math.min(i, l) + 0.05);
}
function iN(a, o, i, l = 4.5) {
  if (Am(ri(a), o) >= l) return a;
  let c = 0, d = 1;
  for (let f = 0; f < 16; f += 1) {
    const m = (c + d) / 2;
    Am(ri(Mc(a, i, m)), o) >= l ? d = m : c = m;
  }
  return Mc(a, i, d);
}
function Oh(a, o) {
  const i = Em(ma(a) || "#2563eb"), l = o === "dark", c = iN(i, l ? "#111111" : "#ffffff", l ? [
    255,
    255,
    255
  ] : [
    0,
    0,
    0
  ], 4.6), d = Mc(c, l ? [
    255,
    255,
    255
  ] : [
    0,
    0,
    0
  ], 0.12), f = l ? [
    24,
    24,
    26
  ] : [
    255,
    255,
    255
  ], m = Am(ri(c), "#ffffff") >= 4.5 ? "#ffffff" : "#111111";
  return {
    accent: ri(c),
    hover: ri(d),
    soft: ri(Mc(f, c, l ? 0.23 : 0.12)),
    onAccent: m
  };
}
function lN(a, o, i = document.documentElement) {
  const l = Oh(a, o);
  i.style.setProperty("--ui-accent", l.accent), i.style.setProperty("--ui-accent-hover", l.hover), i.style.setProperty("--ui-accent-soft", l.soft), i.style.setProperty("--ui-on-accent", l.onAccent), i.dataset.accent = Cm.find((c) => c.color === ma(a))?.id || "custom";
}
function sN(a, o) {
  const i = Oh(a, o);
  return (l) => {
    const c = sb(l);
    return (l.color || l.theme.primaryColor) !== "brand" ? c : l.variant === "light" ? {
      ...c,
      background: i.soft,
      hover: `color-mix(in srgb, ${i.soft} 72%, ${i.accent})`,
      color: i.accent,
      border: "1px solid transparent"
    } : l.variant === "filled" ? {
      ...c,
      background: i.accent,
      hover: i.hover,
      color: i.onAccent,
      hoverColor: i.onAccent
    } : c;
  };
}
function Wy() {
  return document.documentElement.dataset.resolvedTheme === "dark" ? "dark" : "light";
}
function cN({ children: a }) {
  const [o, i] = (0, S.useState)(Wy), [l, c] = (0, S.useState)(IS);
  (0, S.useEffect)(() => {
    const f = new MutationObserver(() => i(Wy()));
    f.observe(document.documentElement, {
      attributes: !0,
      attributeFilter: ["data-resolved-theme"]
    });
    const m = (v) => {
      const y = v instanceof StorageEvent ? v.key === "webcodex.ui.accent.v1" ? ma(v.newValue) : null : ma(v.detail);
      y && c(y);
    };
    return window.addEventListener(El, m), window.addEventListener("storage", m), () => {
      f.disconnect(), window.removeEventListener(El, m), window.removeEventListener("storage", m);
    };
  }, []);
  const d = (0, S.useMemo)(() => ({
    primaryColor: "brand",
    primaryShade: {
      light: 6,
      dark: 6
    },
    colors: { brand: W2(Oh(l, o).accent) },
    variantColorResolver: sN(l, o),
    fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", ui-sans-serif, sans-serif',
    fontSizes: {
      xs: "12px",
      sm: "13px",
      md: "14px",
      lg: "16px",
      xl: "20px"
    },
    spacing: {
      xs: "4px",
      sm: "8px",
      md: "12px",
      lg: "16px",
      xl: "24px"
    },
    radius: {
      xs: "4px",
      sm: "8px",
      md: "12px",
      lg: "16px",
      xl: "20px"
    },
    defaultRadius: "md",
    components: {
      Button: It.extend({
        defaultProps: { size: "sm" },
        classNames: { root: "ui-mantine-button" }
      }),
      TextInput: la.extend({
        defaultProps: { size: "sm" },
        classNames: {
          input: "ui-mantine-input",
          label: "ui-mantine-label"
        }
      }),
      PasswordInput: Dl.extend({
        defaultProps: { size: "sm" },
        classNames: {
          input: "ui-mantine-input",
          label: "ui-mantine-label"
        }
      }),
      Select: _h.extend({
        defaultProps: { size: "sm" },
        classNames: {
          input: "ui-mantine-input",
          label: "ui-mantine-label"
        }
      }),
      Textarea: yh.extend({
        defaultProps: { size: "sm" },
        classNames: {
          input: "ui-mantine-input",
          label: "ui-mantine-label"
        }
      }),
      Modal: Ln.extend({ classNames: {
        content: "ui-mantine-modal-content",
        header: "ui-mantine-modal-header",
        title: "ui-mantine-modal-title"
      } }),
      Alert: bo.extend({ classNames: { root: "ui-mantine-alert" } }),
      SegmentedControl: uu.extend({ classNames: {
        root: "ui-mantine-segments",
        indicator: "ui-mantine-segment-indicator"
      } }),
      Menu: St.extend({ classNames: { dropdown: "ui-mantine-menu-dropdown" } })
    }
  }), [l, o]);
  return /* @__PURE__ */ (0, g.jsx)(mb, {
    theme: d,
    forceColorScheme: o,
    children: /* @__PURE__ */ (0, g.jsx)(tN, {
      reducedMotion: "user",
      children: a
    })
  });
}
function Tm(a) {
  return a ? /^\\\\\?\\UNC\\/i.test(a) ? "\\\\" + a.slice(8) : /^\\\\\?\\[a-z]:\\/i.test(a) ? a.slice(4) : a : "";
}
function uN(a) {
  const o = Tm(a.path), i = a.name?.trim(), l = /^[a-z]:[\\/]*$/i.test(o) || /^\\\\[^\\/]+[\\/][^\\/]+[\\/]*$/.test(o);
  return i && !(l && /^project$/i.test(i)) ? i : o.split(/[\\/]/).filter(Boolean).pop() || a.id || "Project";
}
var dN = (a) => a?.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase();
function fN(a, o, i = []) {
  if (o == null) throw new Error("[lucide]: iconNode is required when icon name is used");
  return {
    name: dN(a),
    size: 24,
    node: o,
    ...i.length > 0 ? { aliases: i } : {}
  };
}
var mN = (a) => {
  let o = "", i = !1;
  for (const l of a) {
    if (l === "-" || l === "_" || l <= " ") {
      i = o.length > 0;
      continue;
    }
    o.length === 0 ? o += l.toLowerCase() : o += i ? l.toUpperCase() : l, i = !1;
  }
  return o;
}, hN = (a) => {
  const o = mN(a);
  return o.charAt(0).toUpperCase() + o.slice(1);
}, Rm = (...a) => a.filter((o, i, l) => !!o && o.trim() !== "" && l.indexOf(o) === i).join(" ").trim(), Jo = {
  xmlns: "http://www.w3.org/2000/svg",
  width: 24,
  height: 24,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  "stroke-width": 2,
  "stroke-linecap": "round",
  "stroke-linejoin": "round"
};
function rm(a) {
  return a != null;
}
function vN(a, o = {}) {
  const i = o.attributeNames ?? {}, l = (b) => i[b] ?? b, c = a.size ?? a.width ?? Jo.width, d = a.size ?? a.height ?? Jo.height, f = a.aliases?.filter((b) => typeof b == "string" && b.trim() !== "").map((b) => `lucide-${b}`) ?? [], m = [...a.name ? [`lucide-${a.name}`] : [], ...f], v = o.className?.split(" ").filter(Boolean) ?? [], y = o.includeDefaultClasses === !1 ? Rm(...v) : Rm("lucide", ...m, ...v), x = o.absoluteStrokeWidth ? Number(o.strokeWidth ?? Jo["stroke-width"]) * Number(a.size ?? a.width ?? Jo.width) / Number(o.size ?? o.width ?? Jo.width) : o.strokeWidth ?? Jo["stroke-width"];
  return [
    "svg",
    {
      ...Object.entries(Jo).reduce((b, [p, w]) => (b[l(p)] = w, b), {}),
      ..."color" in o && o.color && { [l("stroke")]: o.color },
      ..."size" in o && rm(o.size) && {
        [l("width")]: o.size,
        [l("height")]: o.size
      },
      ..."width" in o && rm(o.width) && { [l("width")]: o.width },
      ..."height" in o && rm(o.height) && { [l("height")]: o.height },
      [l("stroke-width")]: x,
      ...y && { [l("class")]: y },
      [l("viewBox")]: `0 0 ${c} ${d}`,
      ...o.hasA11yProp === !1 ? { [l("aria-hidden")]: "true" } : {},
      ..."attributes" in o && o.attributes
    },
    a.node.map((b) => {
      const [p, w, A] = b, C = o.nonScalingStroke ? {
        [l("vector-effect")]: "non-scaling-stroke",
        ...w
      } : w;
      return A ? [
        p,
        C,
        A
      ] : [p, C];
    })
  ];
}
function pN(a, o = {}) {
  return vN(a, {
    ...o,
    attributeNames: {
      ...o.attributeNames,
      class: "className",
      "stroke-width": "strokeWidth",
      "stroke-linecap": "strokeLinecap",
      "stroke-linejoin": "strokeLinejoin",
      "vector-effect": "vectorEffect"
    }
  });
}
var gN = (a) => {
  for (const o in a) if (o.startsWith("aria-") || o === "role" || o === "title") return !0;
  return !1;
}, yN = (0, S.createContext)({}), bN = () => (0, S.useContext)(yN), SN = (0, S.forwardRef)(({ color: a, size: o, width: i, height: l, strokeWidth: c, absoluteStrokeWidth: d, nonScalingStroke: f, className: m = "", children: v, iconNode: y = [], icon: x = {
  node: y,
  aliases: [],
  size: 24
}, ...b }, p) => {
  const { size: w = 24, strokeWidth: A = 2, absoluteStrokeWidth: C = !1, nonScalingStroke: T = !1, color: R = "currentColor", className: O = "" } = bN() ?? {}, _ = !!v || gN(b), [j, L, z = []] = pN(x, {
    color: a ?? R,
    width: i ?? o ?? w,
    height: l ?? o ?? w,
    strokeWidth: c ?? A,
    absoluteStrokeWidth: d ?? C,
    nonScalingStroke: f ?? T,
    className: Rm(O, m),
    hasA11yProp: _,
    attributes: b
  });
  return (0, S.createElement)(j, {
    ref: p,
    ...L
  }, [...z.map(([$, k]) => (0, S.createElement)($, k)), ...Array.isArray(v) ? v : [v]]);
});
function Qn(a, o = [], i = []) {
  const l = typeof a == "string" ? fN(a, o, i) : a, c = (0, S.forwardRef)(({ className: d, ...f }, m) => (0, S.createElement)(SN, {
    ref: m,
    icon: l,
    className: d,
    ...f
  }));
  return l.name && (c.displayName = hN(l.name)), c;
}
var XS = {
  name: "activity",
  size: 24,
  node: [["path", {
    d: "M22 12h-2.48a2 2 0 0 0-1.93 1.46l-2.35 8.36a.25.25 0 0 1-.48 0L9.24 2.18a.25.25 0 0 0-.48 0l-2.35 8.36A2 2 0 0 1 4.49 12H2",
    key: "169zse"
  }]]
};
XS.node;
var wN = Qn(XS), QS = {
  name: "ellipsis",
  size: 24,
  node: [
    ["circle", {
      cx: "12",
      cy: "12",
      r: "1",
      key: "41hilf"
    }],
    ["circle", {
      cx: "19",
      cy: "12",
      r: "1",
      key: "1wjl8i"
    }],
    ["circle", {
      cx: "5",
      cy: "12",
      r: "1",
      key: "1pcz8c"
    }]
  ],
  aliases: ["more-horizontal"]
};
QS.node;
var xN = Qn(QS), KS = {
  name: "folder",
  size: 24,
  node: [["path", {
    d: "M20 20a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.9a2 2 0 0 1-1.69-.9L9.6 3.9A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2Z",
    key: "1kt360"
  }]]
};
KS.node;
var CN = Qn(KS), ZS = {
  name: "layout-dashboard",
  size: 24,
  node: [
    ["rect", {
      width: "7",
      height: "9",
      x: "3",
      y: "3",
      rx: "1",
      key: "10lvy0"
    }],
    ["rect", {
      width: "7",
      height: "5",
      x: "14",
      y: "3",
      rx: "1",
      key: "16une8"
    }],
    ["rect", {
      width: "7",
      height: "9",
      x: "14",
      y: "12",
      rx: "1",
      key: "1hutg5"
    }],
    ["rect", {
      width: "7",
      height: "5",
      x: "3",
      y: "16",
      rx: "1",
      key: "ldoo1y"
    }]
  ]
};
ZS.node;
var EN = Qn(ZS), FS = {
  name: "lock-keyhole",
  size: 24,
  node: [
    ["circle", {
      cx: "12",
      cy: "16",
      r: "1",
      key: "1au0dj"
    }],
    ["rect", {
      x: "3",
      y: "10",
      width: "18",
      height: "12",
      rx: "2",
      key: "6s8ecr"
    }],
    ["path", {
      d: "M7 10V7a5 5 0 0 1 10 0v3",
      key: "1pqi11"
    }]
  ]
};
FS.node;
var AN = Qn(FS), JS = {
  name: "moon-star",
  size: 24,
  node: [
    ["path", {
      d: "M18 5h4",
      key: "1lhgn2"
    }],
    ["path", {
      d: "M20 3v4",
      key: "1olli1"
    }],
    ["path", {
      d: "M20.985 12.486a9 9 0 1 1-9.473-9.472c.405-.022.617.46.402.803a6 6 0 0 0 8.268 8.268c.344-.215.825-.004.803.401",
      key: "kfwtm"
    }]
  ]
};
JS.node;
var TN = Qn(JS), ew = {
  name: "plus",
  size: 24,
  node: [["path", {
    d: "M5 12h14",
    key: "1ays0h"
  }], ["path", {
    d: "M12 5v14",
    key: "s699le"
  }]]
};
ew.node;
var RN = Qn(ew), tw = {
  name: "refresh-cw",
  size: 24,
  node: [
    ["path", {
      d: "M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8",
      key: "v9h5vc"
    }],
    ["path", {
      d: "M21 3v5h-5",
      key: "1q7to0"
    }],
    ["path", {
      d: "M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16",
      key: "3uifl3"
    }],
    ["path", {
      d: "M8 16H3v5",
      key: "1cv678"
    }]
  ]
};
tw.node;
var _N = Qn(tw), nw = {
  name: "sun",
  size: 24,
  node: [
    ["circle", {
      cx: "12",
      cy: "12",
      r: "4",
      key: "4exip2"
    }],
    ["path", {
      d: "M12 2v2",
      key: "tus03m"
    }],
    ["path", {
      d: "M12 20v2",
      key: "1lh1kg"
    }],
    ["path", {
      d: "m4.93 4.93 1.41 1.41",
      key: "149t6j"
    }],
    ["path", {
      d: "m17.66 17.66 1.41 1.41",
      key: "ptbguv"
    }],
    ["path", {
      d: "M2 12h2",
      key: "1t8f8n"
    }],
    ["path", {
      d: "M20 12h2",
      key: "1q8mjw"
    }],
    ["path", {
      d: "m6.34 17.66-1.41 1.41",
      key: "1m8zz5"
    }],
    ["path", {
      d: "m19.07 4.93-1.41 1.41",
      key: "1shlcs"
    }]
  ]
};
nw.node;
var NN = Qn(nw), aw = {
  name: "triangle-alert",
  size: 24,
  node: [
    ["path", {
      d: "m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3",
      key: "wmoenq"
    }],
    ["path", {
      d: "M12 9v4",
      key: "juzpu7"
    }],
    ["path", {
      d: "M12 17h.01",
      key: "p32p05"
    }]
  ],
  aliases: ["alert-triangle"]
};
aw.node;
var jN = Qn(aw), ow = {
  name: "users",
  size: 24,
  node: [
    ["path", {
      d: "M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2",
      key: "1yyitq"
    }],
    ["path", {
      d: "M16 3.128a4 4 0 0 1 0 7.744",
      key: "16gr8j"
    }],
    ["path", {
      d: "M22 21v-2a4 4 0 0 0-3-3.87",
      key: "kshegd"
    }],
    ["circle", {
      cx: "9",
      cy: "7",
      r: "4",
      key: "nufk8"
    }]
  ]
};
ow.node;
var ON = Qn(ow), rw = class extends Error {
  status;
  constructor(a, o) {
    super(o), this.name = "AdminHttpError", this.status = a;
  }
};
function MN(a) {
  return a instanceof DOMException ? a.name === "AbortError" : !!(a && typeof a == "object" && "name" in a && a.name === "AbortError");
}
var zN = class {
  dependencies;
  generation = 0;
  requestId = 0;
  token = "";
  active = null;
  timer = null;
  constructor(a) {
    this.dependencies = a;
  }
  beginSession(a) {
    return this.invalidateRequests(), this.token = a, this.dependencies.clearError(), this.refresh();
  }
  lock(a = "") {
    this.invalidateRequests(), this.token = "", this.stopAutoRefresh(), this.dependencies.showLocked(a);
  }
  refresh() {
    return this.refreshInternal();
  }
  invalidateAndRefresh() {
    return this.token ? (this.invalidateRequests(), this.refreshInternal()) : Promise.resolve();
  }
  refreshInternal() {
    if (!this.token) return Promise.resolve();
    if (this.active && this.active.generation === this.generation && this.active.token === this.token) return this.active.promise;
    const a = this.generation, o = this.token, i = ++this.requestId, l = new AbortController();
    this.dependencies.clearError();
    const c = this.dependencies.request(o, l.signal).then((d) => {
      this.isCurrent(a, o, i) && (this.dependencies.render(d), this.dependencies.showAuthenticated(), this.dependencies.setStatus(`Updated ${(/* @__PURE__ */ new Date()).toLocaleTimeString()}`));
    }).catch((d) => {
      if (!(!this.isCurrent(a, o, i) || MN(d))) {
        if (d instanceof rw && (d.status === 401 || d.status === 403)) {
          this.dependencies.onUnauthorized ? this.dependencies.onUnauthorized() : this.lock("Administrator authentication required.");
          return;
        }
        this.dependencies.showError("Dashboard refresh failed"), this.dependencies.setStatus("Refresh failed; showing last successful data.");
      }
    }).finally(() => {
      this.active?.id === i && (this.active = null);
    });
    return this.active = {
      generation: a,
      id: i,
      token: o,
      controller: l,
      promise: c
    }, c;
  }
  startAutoRefresh(a) {
    if (this.stopAutoRefresh(), !this.token) return;
    const o = this.dependencies.setInterval || setInterval;
    this.timer = o(() => {
      this.refresh();
    }, a);
  }
  stopAutoRefresh() {
    this.timer !== null && ((this.dependencies.clearInterval || clearInterval)(this.timer), this.timer = null);
  }
  dispose() {
    this.invalidateRequests(), this.stopAutoRefresh(), this.token = "";
  }
  invalidateRequests() {
    this.generation += 1, this.active?.controller.abort(), this.active = null;
  }
  isCurrent(a, o, i) {
    return this.generation === a && this.token === o && this.active?.id === i;
  }
}, zc = class extends Error {
  status;
  code;
  activeJobs;
  constructor(a, o, i) {
    super(o), this.status = a, this.code = o, this.activeJobs = i, this.name = "AdminMutationError";
  }
};
function DN(a) {
  return !!(a && typeof a == "object" && "name" in a && a.name === "AbortError");
}
var kN = class {
  deps;
  generation = 0;
  token = "";
  contexts = /* @__PURE__ */ new Map();
  constructor(a) {
    this.deps = a;
  }
  beginSession(a) {
    this.invalidate(), this.token = a;
  }
  lock() {
    this.invalidate(), this.token = "";
  }
  dispose() {
    this.invalidate(), this.token = "";
  }
  start(a, o, i) {
    const l = this.contexts.get(o);
    if (!this.token || l) return null;
    const c = {
      kind: a,
      target: o,
      body: { ...i },
      key: this.deps.keyFactory(),
      generation: this.generation,
      token: this.token,
      controller: new AbortController(),
      pending: !1
    };
    return this.contexts.set(o, c), c;
  }
  retry(a) {
    const o = this.contexts.get(a);
    return o ? this.submit(o) : Promise.resolve();
  }
  cancel(a) {
    this.contexts.get(a)?.pending || this.contexts.delete(a);
  }
  has(a) {
    return this.contexts.has(a);
  }
  isPending(a) {
    return this.contexts.get(a)?.pending === !0;
  }
  async submit(a) {
    if (!(!this.current(a) || a.pending)) {
      a.pending = !0, this.deps.pending(a.target, !0);
      try {
        if (await this.deps.request(a.kind, a.token, {
          ...a.body,
          idempotency_key: a.key
        }, a.controller.signal), !this.current(a)) return;
        this.deps.outcome(`${a.kind[0].toUpperCase()}${a.kind.slice(1)} completed.`), this.contexts.delete(a.target), await this.deps.refresh();
      } catch (o) {
        if (!this.current(a) || DN(o)) return;
        const i = o instanceof zc ? o : new zc(0, "network_error");
        if (i.code === "unauthorized") {
          this.deps.lock("Administrator authentication required.");
          return;
        }
        this.deps.error(i.code, a), (i.code === "revision_conflict" || i.code === "active_jobs_conflict") && await this.deps.refresh(), i.code === "revision_conflict" && this.contexts.delete(a.target);
      } finally {
        this.generation === a.generation && this.token === a.token && (a.pending = !1, this.deps.pending(a.target, !1));
      }
    }
  }
  current(a) {
    return this.generation === a.generation && this.token === a.token && this.contexts.get(a.target) === a;
  }
  invalidate() {
    this.generation += 1;
    for (const a of this.contexts.values()) a.controller.abort();
    this.contexts.clear();
  }
}, LN = class {
  mutation;
  adapter;
  target = "";
  context = null;
  bodyFingerprint = "";
  cleaning = !1;
  constructor(a, o) {
    this.mutation = a, this.adapter = o;
  }
  open(a, o = null, i) {
    this.cleanup(!1), this.target = a, this.context = o, this.bodyFingerprint = i ? JSON.stringify(i) : "";
  }
  async submit(a, o) {
    const i = JSON.stringify(o);
    if (this.context && i === this.bodyFingerprint && this.mutation.has(this.target)) {
      await this.mutation.retry(this.target);
      return;
    }
    (this.context || this.mutation.has(this.target)) && this.mutation.cancel(this.target), this.context = this.mutation.start(a, this.target, o), this.bodyFingerprint = i, this.context && await this.mutation.submit(this.context);
  }
  setPendingContext(a, o) {
    this.context = a, this.bodyFingerprint = JSON.stringify(o);
  }
  cancel() {
    this.cleanup(!0);
  }
  handleCancel(a) {
    a.preventDefault(), !(this.target && this.mutation.isPending(this.target)) && this.cleanup(!0);
  }
  handleClose() {
    this.cleanup(!0);
  }
  closeForSessionEnd() {
    this.cleanup(!0);
  }
  currentTarget() {
    return this.target;
  }
  cleanup(a) {
    if (this.cleaning || !this.target && !this.context && !this.bodyFingerprint) return;
    this.cleaning = !0;
    const o = this.target;
    this.target = "", this.context = null, this.bodyFingerprint = "", o && this.mutation.cancel(o), this.adapter.clearSensitive(), a && this.adapter.isOpen() && this.adapter.close(), this.adapter.restoreFocus(), this.cleaning = !1;
  }
};
function HN({ color: a, onChange: o, label: i, customLabel: l, compact: c = !1, colorLabel: d = (f) => f }) {
  const f = (0, S.useRef)(null), m = (0, S.useRef)(null), v = (0, S.useRef)(null), [y, x] = (0, S.useState)(!1), [b, p] = (0, S.useState)({
    position: "fixed",
    visibility: "hidden"
  }), w = (0, S.useId)(), A = (C = !1) => {
    x(!1), C && m.current?.focus();
  };
  return (0, S.useLayoutEffect)(() => {
    if (!y) return;
    const C = () => {
      const T = m.current?.getBoundingClientRect();
      if (!T) return;
      const R = window.visualViewport, O = R?.offsetLeft ?? 0, _ = R?.offsetTop ?? 0, j = R?.width ?? window.innerWidth, L = R?.height ?? window.innerHeight, z = Math.min(260, Math.max(120, j - 24)), $ = Math.min(v.current?.scrollHeight || 192, Math.max(90, L - 24)), k = Math.max(O + 12, Math.min(T.left, O + j - z - 12)), Q = T.bottom + 8, X = Q + $ <= _ + L - 12 ? Q : Math.max(_ + 12, T.top - $ - 8);
      p({
        position: "fixed",
        visibility: "visible",
        top: X,
        left: k,
        right: "auto",
        bottom: "auto",
        width: z,
        maxHeight: L - 24
      });
    };
    return C(), v.current?.querySelector('button[aria-pressed="true"]')?.focus(), window.addEventListener("resize", C), window.addEventListener("scroll", C, !0), window.visualViewport?.addEventListener("resize", C), window.visualViewport?.addEventListener("scroll", C), () => {
      window.removeEventListener("resize", C), window.removeEventListener("scroll", C, !0), window.visualViewport?.removeEventListener("resize", C), window.visualViewport?.removeEventListener("scroll", C);
    };
  }, [y]), (0, S.useEffect)(() => {
    if (!y) return;
    const C = (R) => {
      const O = R.target;
      !f.current?.contains(O) && !v.current?.contains(O) && A();
    }, T = (R) => {
      R.key === "Escape" && (R.preventDefault(), R.stopPropagation(), A(!0));
    };
    return document.addEventListener("pointerdown", C), document.addEventListener("focusin", C), document.addEventListener("keydown", T, !0), () => {
      document.removeEventListener("pointerdown", C), document.removeEventListener("focusin", C), document.removeEventListener("keydown", T, !0);
    };
  }, [y]), /* @__PURE__ */ (0, g.jsxs)("details", {
    ref: f,
    open: y,
    className: `accent-picker${c ? " accent-picker-compact" : ""}`,
    onToggle: (C) => {
      C.currentTarget.open !== y && x(C.currentTarget.open);
    },
    children: [/* @__PURE__ */ (0, g.jsxs)("summary", {
      ref: m,
      "aria-label": i,
      "aria-haspopup": "dialog",
      "aria-expanded": y,
      "aria-controls": y ? w : void 0,
      title: i,
      onClick: (C) => {
        C.preventDefault(), x((T) => !T);
      },
      children: [/* @__PURE__ */ (0, g.jsx)("i", {
        className: "accent-current",
        "aria-hidden": "true"
      }), /* @__PURE__ */ (0, g.jsx)("span", { children: i })]
    }), y && (0, Yc.createPortal)(/* @__PURE__ */ (0, g.jsxs)("div", {
      id: w,
      ref: v,
      role: "dialog",
      "aria-label": i,
      className: "accent-picker-panel accent-picker-portal",
      style: b,
      onKeyDown: (C) => {
        if (C.key !== "ArrowLeft" && C.key !== "ArrowRight" && C.key !== "Home" && C.key !== "End") return;
        const T = Array.from(v.current?.querySelectorAll(".accent-swatch") || []);
        if (!T.length || !T.includes(document.activeElement)) return;
        C.preventDefault();
        const R = T.indexOf(document.activeElement);
        T[C.key === "Home" ? 0 : C.key === "End" ? T.length - 1 : (R + (C.key === "ArrowRight" ? 1 : T.length - 1)) % T.length].focus();
      },
      children: [
        /* @__PURE__ */ (0, g.jsx)("div", {
          className: "accent-picker-title",
          children: i
        }),
        /* @__PURE__ */ (0, g.jsx)("div", {
          className: "accent-swatches",
          children: Cm.map((C) => /* @__PURE__ */ (0, g.jsx)("button", {
            type: "button",
            className: "accent-swatch",
            title: d(C.label),
            "aria-label": d(C.label),
            "aria-pressed": a.toLowerCase() === C.color,
            style: { "--swatch-color": C.color },
            onClick: () => o(C.color)
          }, C.id))
        }),
        /* @__PURE__ */ (0, g.jsxs)("label", {
          className: "accent-custom",
          children: [
            /* @__PURE__ */ (0, g.jsx)("span", { children: l }),
            /* @__PURE__ */ (0, g.jsx)("input", {
              type: "color",
              "aria-label": l,
              value: ma(a) ?? Cm[0].color,
              onChange: (C) => {
                const T = ma(C.currentTarget.value);
                T && o(T);
              }
            }),
            /* @__PURE__ */ (0, g.jsx)("code", { children: a })
          ]
        })
      ]
    }), document.body)]
  });
}
var BN = [
  "zh-TW",
  "ja-JP",
  "ko-KR",
  "de-DE",
  "fr-FR"
], UN = {
  "First observed": [
    "首次記錄",
    "初回観測",
    "최초 관측",
    "Erstmals beobachtet",
    "Première observation"
  ],
  "Window ID": [
    "視窗 ID",
    "ウィンドウ ID",
    "창 ID",
    "Fenster-ID",
    "ID de fenêtre"
  ],
  "Runner ID": [
    "執行端 ID",
    "Runner ID",
    "Runner ID",
    "Runner-ID",
    "ID du Runner"
  ],
  "Project ID": [
    "專案 ID",
    "プロジェクト ID",
    "프로젝트 ID",
    "Projekt-ID",
    "ID du projet"
  ],
  Activity: [
    "活動",
    "アクティビティ",
    "활동",
    "Aktivität",
    "Activité"
  ],
  Copy: [
    "複製",
    "コピー",
    "복사",
    "Kopieren",
    "Copier"
  ],
  Copied: [
    "已複製",
    "コピーしました",
    "복사됨",
    "Kopiert",
    "Copié"
  ],
  "Copy unavailable; select the text to copy.": [
    "無法自動複製，請選取文字複製。",
    "コピーできません。テキストを選択してコピーしてください。",
    "자동 복사를 사용할 수 없습니다. 텍스트를 선택해 복사하세요.",
    "Kopieren nicht verfügbar. Markieren Sie den Text zum Kopieren.",
    "Copie indisponible. Sélectionnez le texte pour le copier."
  ],
  Preferences: [
    "偏好設定",
    "設定",
    "환경 설정",
    "Einstellungen",
    "Préférences"
  ],
  Close: [
    "關閉",
    "閉じる",
    "닫기",
    "Schließen",
    "Fermer"
  ],
  Lock: [
    "鎖定",
    "ロック",
    "잠금",
    "Sperren",
    "Verrouiller"
  ],
  Appearance: [
    "外觀",
    "外観",
    "모양",
    "Darstellung",
    "Apparence"
  ],
  System: [
    "系統",
    "システム",
    "시스템",
    "System",
    "Système"
  ],
  Light: [
    "淺色",
    "ライト",
    "라이트",
    "Hell",
    "Clair"
  ],
  Dark: [
    "深色",
    "ダーク",
    "다크",
    "Dunkel",
    "Sombre"
  ],
  "Load more": [
    "載入更多",
    "さらに読み込む",
    "더 불러오기",
    "Mehr laden",
    "Charger plus"
  ],
  "Loading Window activity…": [
    "正在載入視窗活動…",
    "ウィンドウの活動を読み込み中…",
    "창 활동 불러오는 중…",
    "Fensteraktivität wird geladen…",
    "Chargement de l’activité…"
  ],
  "Loading recent activity…": [
    "正在載入最近活動…",
    "最近の活動を読み込み中…",
    "최근 활동 불러오는 중…",
    "Letzte Aktivitäten werden geladen…",
    "Chargement des activités récentes…"
  ],
  "Loading history…": [
    "正在載入歷史記錄…",
    "履歴を読み込み中…",
    "기록 불러오는 중…",
    "Verlauf wird geladen…",
    "Chargement de l’historique…"
  ],
  "Observed Window": [
    "已觀察的視窗",
    "観測されたウィンドウ",
    "관측된 창",
    "Beobachtetes Fenster",
    "Fenêtre observée"
  ],
  "Project information unavailable": [
    "專案資訊不可用",
    "プロジェクト情報を利用できません",
    "프로젝트 정보 없음",
    "Projektinformationen nicht verfügbar",
    "Informations du projet indisponibles"
  ],
  "Runner unavailable": [
    "執行端不可用",
    "Runner を利用できません",
    "Runner 사용 불가",
    "Runner nicht verfügbar",
    "Runner indisponible"
  ],
  "Window activity unavailable": [
    "視窗活動不可用",
    "ウィンドウの活動を利用できません",
    "창 활동 사용 불가",
    "Fensteraktivität nicht verfügbar",
    "Activité de la fenêtre indisponible"
  ],
  "Window activity refresh failed; showing previous observations.": [
    "視窗活動重新整理失敗，目前顯示先前的觀察記錄。",
    "活動を更新できません。前回の観測結果を表示しています。",
    "창 활동을 새로 고치지 못했습니다. 이전 관측 결과를 표시합니다.",
    "Aktualisierung fehlgeschlagen; vorherige Beobachtungen werden angezeigt.",
    "Échec de l’actualisation ; affichage des observations précédentes."
  ],
  "Window inventory is bounded; not all observed Windows are loaded.": [
    "視窗清單有數量上限，未載入所有視窗。",
    "一覧に上限があるため、すべてのウィンドウは読み込まれていません。",
    "창 목록에 제한이 있어 모든 창을 불러오지 않았습니다.",
    "Die Fensterliste ist begrenzt; nicht alle beobachteten Fenster sind geladen.",
    "La liste est limitée ; toutes les fenêtres observées ne sont pas chargées."
  ],
  "Background job": [
    "背景工作",
    "バックグラウンドジョブ",
    "백그라운드 작업",
    "Hintergrundauftrag",
    "Tâche en arrière-plan"
  ],
  "Background running": [
    "背景執行中",
    "バックグラウンドで実行中",
    "백그라운드 실행 중",
    "Läuft im Hintergrund",
    "Exécution en arrière-plan"
  ],
  Completed: [
    "已完成",
    "完了",
    "완료",
    "Abgeschlossen",
    "Terminé"
  ],
  Duration: [
    "耗時",
    "所要時間",
    "소요 시간",
    "Dauer",
    "Durée"
  ],
  Observing: [
    "觀察中",
    "観測中",
    "관측 중",
    "Wird beobachtet",
    "Observation en cours"
  ],
  Running: [
    "執行中",
    "実行中",
    "실행 중",
    "Läuft",
    "En cours"
  ],
  Succeeded: [
    "成功",
    "成功",
    "성공",
    "Erfolgreich",
    "Réussi"
  ],
  Failed: [
    "失敗",
    "失敗",
    "실패",
    "Fehlgeschlagen",
    "Échec"
  ],
  "No tool calls yet": [
    "尚無工具呼叫",
    "ツール呼び出しはまだありません",
    "아직 도구 호출 없음",
    "Noch keine Werkzeugaufrufe",
    "Aucun appel d’outil pour le moment"
  ],
  "No calls in this Session": [
    "此工作階段沒有呼叫",
    "このセッションに呼び出しはありません",
    "이 세션에 호출 없음",
    "Keine Aufrufe in dieser Sitzung",
    "Aucun appel dans cette session"
  ],
  "Earlier calls are not available in this view. Only retained activity is shown.": [
    "此檢視無法顯示更早的呼叫，僅顯示保留的活動。",
    "この画面では以前の呼び出しを利用できません。保持された活動のみ表示します。",
    "이 보기에서는 이전 호출을 볼 수 없습니다. 보존된 활동만 표시됩니다.",
    "Frühere Aufrufe sind hier nicht verfügbar. Nur aufbewahrte Aktivitäten werden angezeigt.",
    "Les appels antérieurs ne sont pas disponibles ici. Seules les activités conservées sont affichées."
  ],
  "Some linked Sessions are not available in this view.": [
    "此檢視無法顯示部分關聯工作階段。",
    "一部の関連セッションはこの画面では利用できません。",
    "일부 연결된 세션은 이 보기에서 사용할 수 없습니다.",
    "Einige verknüpfte Sitzungen sind hier nicht verfügbar.",
    "Certaines sessions liées ne sont pas disponibles dans cette vue."
  ],
  "Some running calls are not shown.": [
    "部分執行中的呼叫未顯示。",
    "一部の実行中の呼び出しは表示されていません。",
    "일부 실행 중인 호출은 표시되지 않습니다.",
    "Einige laufende Aufrufe werden nicht angezeigt.",
    "Certains appels en cours ne sont pas affichés."
  ],
  "This Session is linked to the Window but has no retained calls.": [
    "此工作階段已關聯至視窗，但沒有保留的呼叫。",
    "このセッションはウィンドウに関連付けられていますが、保持された呼び出しはありません。",
    "이 세션은 창에 연결되어 있지만 보존된 호출이 없습니다.",
    "Diese Sitzung ist mit dem Fenster verknüpft, hat aber keine aufbewahrten Aufrufe.",
    "Cette session est liée à la fenêtre, mais aucun appel n’est conservé."
  ],
  Language: [
    "語言",
    "言語",
    "언어",
    "Sprache",
    "Langue"
  ],
  Work: [
    "工作",
    "作業",
    "작업",
    "Arbeit",
    "Travail"
  ],
  Projects: [
    "專案",
    "プロジェクト",
    "프로젝트",
    "Projekte",
    "Projets"
  ],
  Project: [
    "專案",
    "プロジェクト",
    "프로젝트",
    "Projekt",
    "Projet"
  ],
  Runtime: [
    "執行環境",
    "実行環境",
    "런타임",
    "Laufzeit",
    "Environnement"
  ],
  "Runtime workspace": [
    "執行工作區",
    "実行ワークスペース",
    "런타임 작업 공간",
    "Laufzeit-Arbeitsbereich",
    "Espace de travail"
  ],
  "Current Runtime": [
    "目前執行環境",
    "現在の実行環境",
    "현재 런타임",
    "Aktuelle Laufzeit",
    "Environnement actuel"
  ],
  "Live work": [
    "即時工作",
    "進行中の作業",
    "진행 중인 작업",
    "Laufende Arbeit",
    "Travail en cours"
  ],
  Workspace: [
    "工作區",
    "ワークスペース",
    "작업 공간",
    "Arbeitsbereich",
    "Espace de travail"
  ],
  Window: [
    "視窗",
    "ウィンドウ",
    "창",
    "Fenster",
    "Fenêtre"
  ],
  Windows: [
    "視窗",
    "ウィンドウ",
    "창",
    "Fenster",
    "Fenêtres"
  ],
  Session: [
    "工作階段",
    "セッション",
    "세션",
    "Sitzung",
    "Session"
  ],
  Sessions: [
    "工作階段",
    "セッション",
    "세션",
    "Sitzungen",
    "Sessions"
  ],
  Goals: [
    "目標",
    "目標",
    "목표",
    "Ziele",
    "Objectifs"
  ],
  Refresh: [
    "重新整理",
    "更新",
    "새로 고침",
    "Aktualisieren",
    "Actualiser"
  ],
  "All projects": [
    "全部專案",
    "すべてのプロジェクト",
    "모든 프로젝트",
    "Alle Projekte",
    "Tous les projets"
  ],
  "Search projects": [
    "搜尋專案",
    "プロジェクトを検索",
    "프로젝트 검색",
    "Projekte suchen",
    "Rechercher des projets"
  ],
  "No matching projects": [
    "沒有符合的專案",
    "該当するプロジェクトはありません",
    "일치하는 프로젝트 없음",
    "Keine passenden Projekte",
    "Aucun projet correspondant"
  ],
  "Search Windows": [
    "搜尋視窗",
    "ウィンドウを検索",
    "창 검색",
    "Fenster suchen",
    "Rechercher des fenêtres"
  ],
  "Search windows or projects…": [
    "搜尋視窗或專案…",
    "ウィンドウやプロジェクトを検索…",
    "창 또는 프로젝트 검색…",
    "Fenster oder Projekte suchen…",
    "Rechercher une fenêtre ou un projet…"
  ],
  "No matching Windows": [
    "沒有符合的視窗",
    "該当するウィンドウはありません",
    "일치하는 창 없음",
    "Keine passenden Fenster",
    "Aucune fenêtre correspondante"
  ],
  "No Window activity": [
    "沒有視窗活動",
    "ウィンドウの活動はありません",
    "창 활동 없음",
    "Keine Fensteraktivität",
    "Aucune activité de fenêtre"
  ],
  "Current Window": [
    "目前視窗",
    "現在のウィンドウ",
    "현재 창",
    "Aktuelles Fenster",
    "Fenêtre actuelle"
  ],
  "Select a window": [
    "選擇視窗",
    "ウィンドウを選択",
    "창 선택",
    "Fenster auswählen",
    "Choisir une fenêtre"
  ],
  "Choose a window to see its tool calls.": [
    "選擇視窗以查看工具呼叫。",
    "ウィンドウを選択してツール呼び出しを表示します。",
    "도구 호출을 보려면 창을 선택하세요.",
    "Wählen Sie ein Fenster, um seine Werkzeugaufrufe zu sehen.",
    "Choisissez une fenêtre pour voir ses appels d’outils."
  ],
  "Window views": [
    "視窗檢視",
    "ウィンドウ表示",
    "창 보기",
    "Fensteransichten",
    "Vues de fenêtre"
  ],
  "Window details": [
    "視窗詳情",
    "ウィンドウの詳細",
    "창 세부 정보",
    "Fensterdetails",
    "Détails de la fenêtre"
  ],
  "Window activity": [
    "視窗活動",
    "ウィンドウの活動",
    "창 활동",
    "Fensteraktivität",
    "Activité de la fenêtre"
  ],
  Machine: [
    "機器",
    "マシン",
    "머신",
    "Rechner",
    "Machine"
  ],
  Directory: [
    "目錄",
    "ディレクトリ",
    "디렉터리",
    "Verzeichnis",
    "Dossier"
  ],
  "Project address": [
    "專案位址",
    "プロジェクトのアドレス",
    "프로젝트 주소",
    "Projektadresse",
    "Adresse du projet"
  ],
  "First active": [
    "首次活動",
    "最初の活動",
    "첫 활동",
    "Erstmals aktiv",
    "Première activité"
  ],
  "Latest activity": [
    "最近活動",
    "最新の活動",
    "최근 활동",
    "Letzte Aktivität",
    "Dernière activité"
  ],
  Idle: [
    "閒置",
    "待機中",
    "대기 중",
    "Inaktiv",
    "Inactif"
  ],
  active: [
    "活動中",
    "実行中",
    "활성",
    "aktiv",
    "actif"
  ],
  "Tool calls": [
    "工具呼叫",
    "ツール呼び出し",
    "도구 호출",
    "Werkzeugaufrufe",
    "Appels d’outils"
  ],
  "Activity order": [
    "活動排序",
    "活動の並び順",
    "활동 정렬",
    "Aktivitätsreihenfolge",
    "Ordre des activités"
  ],
  "Newest first": [
    "最新在前",
    "新しい順",
    "최신순",
    "Neueste zuerst",
    "Plus récents d’abord"
  ],
  "Oldest first": [
    "最早在前",
    "古い順",
    "오래된순",
    "Älteste zuerst",
    "Plus anciens d’abord"
  ],
  "Session filter": [
    "篩選工作階段",
    "セッションの絞り込み",
    "세션 필터",
    "Sitzungsfilter",
    "Filtrer les sessions"
  ],
  "All calls": [
    "全部呼叫",
    "すべての呼び出し",
    "모든 호출",
    "Alle Aufrufe",
    "Tous les appels"
  ],
  "Work Session": [
    "工作階段",
    "作業セッション",
    "작업 세션",
    "Arbeitssitzung",
    "Session de travail"
  ],
  "View Session record": [
    "查看工作階段記錄",
    "セッション記録を表示",
    "세션 기록 보기",
    "Sitzungsverlauf anzeigen",
    "Voir l’historique de session"
  ],
  Collaboration: [
    "協作",
    "共同作業",
    "협업",
    "Zusammenarbeit",
    "Collaboration"
  ],
  Acknowledged: [
    "已確認",
    "確認済み",
    "확인됨",
    "Bestätigt",
    "Accusé de réception reçu"
  ],
  "Included in tool result": [
    "已附入工具結果",
    "ツール結果に添付済み",
    "도구 결과에 포함됨",
    "Im Werkzeugergebnis enthalten",
    "Inclus dans le résultat de l’outil"
  ],
  Saved: [
    "已儲存",
    "保存済み",
    "저장됨",
    "Gespeichert",
    "Enregistré"
  ],
  You: [
    "你",
    "あなた",
    "나",
    "Sie",
    "Vous"
  ],
  "This Window": [
    "此視窗",
    "このウィンドウ",
    "이 창",
    "Dieses Fenster",
    "Cette fenêtre"
  ],
  "This Window → Peer Window": [
    "此視窗 → 其他視窗",
    "このウィンドウ → 別のウィンドウ",
    "이 창 → 다른 창",
    "Dieses Fenster → Anderes Fenster",
    "Cette fenêtre → Autre fenêtre"
  ],
  "Peer Window": [
    "其他視窗",
    "別のウィンドウ",
    "다른 창",
    "Anderes Fenster",
    "Autre fenêtre"
  ],
  Note: [
    "備註",
    "メモ",
    "메모",
    "Notiz",
    "Note"
  ],
  Proposal: [
    "建議",
    "提案",
    "제안",
    "Vorschlag",
    "Proposition"
  ],
  Question: [
    "問題",
    "質問",
    "질문",
    "Frage",
    "Question"
  ],
  Answer: [
    "回答",
    "回答",
    "답변",
    "Antwort",
    "Réponse"
  ],
  Decision: [
    "決定",
    "決定",
    "결정",
    "Entscheidung",
    "Décision"
  ],
  Risk: [
    "風險",
    "リスク",
    "위험",
    "Risiko",
    "Risque"
  ],
  Progress: [
    "進展",
    "進捗",
    "진행 상황",
    "Fortschritt",
    "Avancement"
  ],
  Guidance: [
    "指令",
    "指示",
    "지시",
    "Anweisung",
    "Consigne"
  ],
  Todo: [
    "待辦",
    "やること",
    "할 일",
    "Aufgabe",
    "À faire"
  ],
  "High priority": [
    "高優先順序",
    "高優先度",
    "높은 우선순위",
    "Hohe Priorität",
    "Priorité élevée"
  ],
  "Low priority": [
    "低優先順序",
    "低優先度",
    "낮은 우선순위",
    "Niedrige Priorität",
    "Priorité basse"
  ],
  Normal: [
    "一般",
    "通常",
    "보통",
    "Normal",
    "Normale"
  ],
  High: [
    "高",
    "高",
    "높음",
    "Hoch",
    "Élevée"
  ],
  Low: [
    "低",
    "低",
    "낮음",
    "Niedrig",
    "Basse"
  ],
  Type: [
    "類型",
    "種類",
    "유형",
    "Typ",
    "Type"
  ],
  Priority: [
    "優先順序",
    "優先度",
    "우선순위",
    "Priorität",
    "Priorité"
  ],
  "Message type": [
    "訊息類型",
    "メッセージの種類",
    "메시지 유형",
    "Nachrichtentyp",
    "Type de message"
  ],
  "Message priority": [
    "訊息優先順序",
    "メッセージの優先度",
    "메시지 우선순위",
    "Nachrichtenpriorität",
    "Priorité du message"
  ],
  "Require ACK": [
    "要求確認",
    "確認を要求",
    "확인 요청",
    "Bestätigung anfordern",
    "Demander un accusé de réception"
  ],
  "ACK requested": [
    "已要求確認",
    "確認要求あり",
    "확인 요청됨",
    "Bestätigung angefordert",
    "Accusé de réception demandé"
  ],
  Context: [
    "上下文",
    "コンテキスト",
    "컨텍스트",
    "Kontext",
    "Contexte"
  ],
  "Current Session": [
    "目前工作階段",
    "現在のセッション",
    "현재 세션",
    "Aktuelle Sitzung",
    "Session actuelle"
  ],
  "Messages: {count}": [
    "訊息：{count}",
    "メッセージ：{count}件",
    "메시지: {count}개",
    "Nachrichten: {count}",
    "Messages : {count}"
  ],
  "Leave a message or instruction for this Window": [
    "為此視窗留下訊息或指令",
    "このウィンドウにメッセージや指示を残す",
    "이 창에 메시지나 지시를 남기세요",
    "Nachricht oder Anweisung für dieses Fenster hinterlassen",
    "Laisser un message ou une consigne pour cette fenêtre"
  ],
  "View new messages": [
    "查看新訊息",
    "新しいメッセージを表示",
    "새 메시지 보기",
    "Neue Nachrichten anzeigen",
    "Voir les nouveaux messages"
  ],
  "No messages yet": [
    "尚無訊息",
    "メッセージはまだありません",
    "아직 메시지가 없습니다",
    "Noch keine Nachrichten",
    "Aucun message pour le moment"
  ],
  "Send a note or instruction to this Window.": [
    "向此視窗傳送備註或指令。",
    "このウィンドウにメモや指示を送信します。",
    "이 창에 메모나 지시를 보내세요.",
    "Senden Sie diesem Fenster eine Notiz oder Anweisung.",
    "Envoyez une note ou une consigne à cette fenêtre."
  ],
  "Showing recent messages": [
    "目前顯示最近的訊息",
    "最近のメッセージを表示中",
    "최근 메시지 표시 중",
    "Letzte Nachrichten werden angezeigt",
    "Affichage des messages récents"
  ],
  "Message this Window": [
    "向此視窗傳送訊息",
    "このウィンドウへのメッセージ",
    "이 창에 메시지 보내기",
    "Nachricht an dieses Fenster",
    "Écrire à cette fenêtre"
  ],
  "Send a message to this Window…": [
    "向此視窗傳送訊息…",
    "このウィンドウにメッセージを送信…",
    "이 창에 메시지 보내기…",
    "Nachricht an dieses Fenster senden…",
    "Envoyer un message à cette fenêtre…"
  ],
  "⌘/Ctrl + Enter to send": [
    "⌘/Ctrl + Enter 傳送",
    "⌘/Ctrl + Enter で送信",
    "⌘/Ctrl + Enter로 보내기",
    "⌘/Strg + Enter zum Senden",
    "⌘/Ctrl + Entrée pour envoyer"
  ],
  "Sending…": [
    "傳送中…",
    "送信中…",
    "보내는 중…",
    "Wird gesendet…",
    "Envoi en cours…"
  ],
  Retry: [
    "重試",
    "再試行",
    "다시 시도",
    "Erneut versuchen",
    "Réessayer"
  ],
  Send: [
    "傳送",
    "送信",
    "보내기",
    "Senden",
    "Envoyer"
  ],
  "Send status unknown. Retry this message.": [
    "傳送狀態未知，請重試此訊息。",
    "送信状態が不明です。このメッセージを再試行してください。",
    "전송 상태를 알 수 없습니다. 이 메시지를 다시 시도하세요.",
    "Sendestatus unbekannt. Versuchen Sie diese Nachricht erneut zu senden.",
    "État d’envoi inconnu. Réessayez d’envoyer ce message."
  ],
  "Message could not be sent. Send it again.": [
    "無法傳送訊息，請重新傳送。",
    "メッセージを送信できませんでした。もう一度送信してください。",
    "메시지를 보내지 못했습니다. 다시 보내세요.",
    "Nachricht konnte nicht gesendet werden. Senden Sie sie erneut.",
    "Impossible d’envoyer le message. Envoyez-le à nouveau."
  ],
  "Context is no longer available. Choose a Session or All calls, then send again.": [
    "上下文已不可用。請選擇工作階段或全部呼叫後再傳送。",
    "コンテキストを利用できません。セッションまたはすべての呼び出しを選択して再送信してください。",
    "컨텍스트를 더 이상 사용할 수 없습니다. 세션 또는 모든 호출을 선택한 후 다시 보내세요.",
    "Kontext nicht mehr verfügbar. Wählen Sie eine Sitzung oder alle Aufrufe und senden Sie erneut.",
    "Le contexte n’est plus disponible. Choisissez une session ou tous les appels, puis renvoyez le message."
  ],
  "Collaboration is unavailable for this Window.": [
    "此視窗目前無法協作。",
    "このウィンドウでは共同作業を利用できません。",
    "이 창에서는 협업을 사용할 수 없습니다.",
    "Zusammenarbeit ist für dieses Fenster nicht verfügbar.",
    "La collaboration n’est pas disponible pour cette fenêtre."
  ],
  "Message could not be sent.": [
    "無法傳送訊息。",
    "メッセージを送信できませんでした。",
    "메시지를 보내지 못했습니다.",
    "Nachricht konnte nicht gesendet werden.",
    "Impossible d’envoyer le message."
  ],
  "The current access key cannot collaborate (session:collaborate is required). Reconnect with a collaboration-enabled key.": [
    "目前的存取金鑰沒有協作權限（需要 session:collaborate）。請使用支援協作的金鑰重新連線。",
    "現在のアクセスキーには共同作業権限がありません（session:collaborate が必要）。対応するキーで再接続してください。",
    "현재 액세스 키에는 협업 권한이 없습니다(session:collaborate 필요). 협업이 가능한 키로 다시 연결하세요.",
    "Dem aktuellen Zugriffsschlüssel fehlt session:collaborate. Verbinden Sie sich mit einem Schlüssel mit Zusammenarbeitsberechtigung erneut.",
    "La clé actuelle ne permet pas la collaboration (session:collaborate requis). Reconnectez-vous avec une clé autorisant la collaboration."
  ],
  "This Window is not available to the current access key.": [
    "目前的存取金鑰無法使用此視窗。",
    "現在のアクセスキーではこのウィンドウを利用できません。",
    "현재 액세스 키로는 이 창에 접근할 수 없습니다.",
    "Dieses Fenster ist mit dem aktuellen Zugriffsschlüssel nicht verfügbar.",
    "Cette fenêtre n’est pas accessible avec la clé actuelle."
  ],
  "Messages could not be refreshed.": [
    "暫時無法重新整理訊息。",
    "メッセージを更新できませんでした。",
    "메시지를 새로 고치지 못했습니다.",
    "Nachrichten konnten nicht aktualisiert werden.",
    "Impossible d’actualiser les messages."
  ]
};
function qN(a, o) {
  const i = BN.findIndex((l) => l === o);
  return i < 0 ? void 0 : UN[a]?.[i];
}
var sn = {
  "First observed": "首次记录",
  "Window ID": "窗口 ID",
  "Runner ID": "机器 ID",
  "Project ID": "项目 ID",
  "Loading Agents…": "正在加载 Agent…",
  "Agents could not be loaded. Refresh to retry.": "Agent 加载失败，请刷新重试。",
  "Durable communication refresh failed; previous data retained.": "通信数据刷新失败，已保留上次的数据。",
  "Goal refresh failed; previous data retained.": "Goal 刷新失败，已保留上次的数据。",
  "Goals could not be loaded. Refresh to retry.": "Goal 加载失败，请刷新重试。",
  "Goal details are not available with this access key.": "当前访问凭据无权查看 Goal 详情。",
  "Goal details could not be loaded.": "Goal 详情加载失败。",
  "Message refresh failed; previous messages retained.": "消息刷新失败，已保留上次的消息。",
  "Session messages could not be loaded.": "Session 消息加载失败。",
  "Load earlier messages": "加载更早的消息",
  "Return to latest messages": "回到最新消息",
  "Reply to": "回复",
  "Earlier message": "更早的消息",
  "Reply received": "已收到回复",
  "Delivery states": "消息状态说明",
  "Reading saved history. New messages do not replace this page.": "正在阅读历史记录，新消息不会覆盖当前页面。",
  "Saved messages remain in history. ACK confirms model context, not acceptance or completion. A reply is shown separately.": "消息保存后会保留在历史记录中。ACK 仅表示模型上下文已确认，不代表接受任务或完成工作；实际回复会单独展示。",
  "Expected result": "符合预期",
  "Expectation not met": "不符合预期",
  Version: "版本",
  Enabled: "已启用",
  Disabled: "未启用",
  "Host profile and configured waits for tool requests.": "工具请求使用的主机配置及等待时长。",
  "Requests and waits": "请求与等待",
  "Sign-in methods accepted by this server.": "此服务器接受的登录与认证方式。",
  Authentication: "访问认证",
  "Concurrency limit": "并发上限",
  "Queued jobs": "排队任务",
  "Execution machines and their reported workload. Unavailable machines appear first.": "查看执行机器及其上报的工作负载，不可用的机器优先展示。",
  "Inventory loaded": "清单已加载",
  "Project inventory unavailable": "项目清单暂不可用",
  "Workspaces visible with your current access": "当前权限下可见的工作区",
  "Windows with work in progress": "正在执行工作的窗口",
  "Partial inventory": "部分清单",
  "Session summary is loading…": "正在加载会话汇总…",
  "Jobs currently tracked by the Runtime": "运行时当前跟踪的任务",
  "Machines visible with your current access": "当前权限下可见的执行机器",
  "Not synced yet": "尚未同步",
  "Monitor connected machines, current work, and server settings.": "查看已连接的机器、当前工作与服务器配置。",
  "Capture health (process-wide)": "捕获状态（本进程累计，不代表单次调用完整性）",
  "Inspect call diagnostics": "查看调用诊断",
  "Hide call diagnostics": "收起调用诊断",
  "Call diagnostics": "调用诊断",
  Trace: "追踪标识",
  "Observed Server evidence only; not proof of delivery or model reading.": "仅表示 Server 观察到的事实，不证明客户端收到或模型已阅读。",
  "Refresh diagnostics": "刷新诊断",
  "Loading diagnostics…": "正在加载诊断…",
  "Administrator diagnostic access required": "需要管理员诊断权限",
  "Sign in to inspect diagnostics": "请登录后查看诊断",
  "Diagnostics unavailable": "诊断暂不可用",
  "Capture is not retained; it may be disabled, dropped, expired or evicted.": "未保留捕获记录：可能未启用、写入丢弃、过期或被淘汰。",
  "Captured mode": "捕获模式",
  "Current capture": "当前捕获配置",
  "Read retained full payload": "读取已保留的完整载荷",
  "Retained full payload": "已保留的完整载荷",
  "More trace events": "更多追踪事件",
  "Diagnostic view limit reached. Use the exact trace reader for more.": "已达到页面显示上限，可通过精确追踪读取工具继续查看。",
  "Find calls by time or Project": "按时间或项目查找调用",
  "Administrator diagnostics. No Window hash is required. Queries run only on request.": "管理员诊断，无需事先知道窗口哈希；仅点击时查询。",
  "Exact Project ID": "精确项目 ID",
  "Exact tool name": "精确工具名称",
  From: "起始时间",
  Until: "截止时间",
  "Include passive calls": "包含被动刷新与辅助调用",
  "Search retained calls": "查询已保留调用",
  "Choose an ordered time range of at most 31 days.": "请选择顺序正确且不超过 31 天的时间范围。",
  "Showing retained calls in this page, not a complete Window history.": "这里只展示本页保留的调用，不是整个窗口的完整历史。",
  "Open Window": "打开窗口",
  "Window identity unavailable": "未观察到窗口身份",
  "No retained calls match these filters.": "没有符合条件的保留调用。",
  "Next call page": "下一页调用",
  "Load more": "加载更多",
  "Show less": "收起更多",
  "Some linked Sessions are not available in this view.": "此视图仅展示部分已关联的 Session。",
  "Copy unavailable; select the text to copy.": "无法自动复制，请选中文字复制。",
  "This Session is linked to the Window but has no retained calls.": "此 Session 已关联到窗口，但没有保留的调用记录。",
  "Last synced": "上次同步",
  "Server configuration": "服务器配置",
  "Effective server parameters. Credentials are never displayed.": "服务器当前生效的配置参数，不展示凭据。",
  "Configuration is unavailable from this server version.": "此服务器版本未提供配置信息。",
  "Request tracing": "请求跟踪",
  seconds: "秒",
  "Shared key authentication": "共享密钥认证",
  "Anonymous access": "匿名访问",
  "OAuth2 authentication": "OAuth2 认证",
  "OAuth2 shared key bridge": "OAuth2 共享密钥桥接",
  "MCP host profile": "MCP 主机配置",
  "Host request budget": "主机请求预算",
  "Legacy handoff hint (unused)": "旧版交接提示值（未参与执行）",
  "Maximum synchronous wait": "同步等待上限",
  "Continuation wait": "后续等待时长",
  "Some running calls are not shown.": "运行中调用仅显示部分记录。",
  "Conversation refresh failed; previous messages retained.": "对话刷新失败，保留上次加载的消息。",
  "Messages unavailable. Refresh to retry.": "消息暂不可用，请刷新重试。",
  "Connected in this browser": "已在此浏览器连接",
  "Not connected in this browser": "未在此浏览器连接",
  "Open conversation": "打开对话",
  "Connect as this Agent to open its inbox.": "连接此 Agent 后查看收件箱。",
  Acknowledge: "确认收到",
  "Send as": "发送身份",
  "Write a message…": "输入消息…",
  "Select or create a conversation.": "选择或创建一个对话。",
  "Recipients (optional)": "收件人（可选）",
  Participants: "参与者",
  "Shared conversations visible to your account.": "当前账号可见的共享对话。",
  "Select or create an Agent to get started.": "选择或创建一个 Agent 开始使用。",
  "Edit profile": "编辑资料",
  "Connect as this Agent": "连接此 Agent",
  "Connect to read and acknowledge messages or send as this Agent. This does not start a model.": "连接后可查看、确认消息，或以此 Agent 身份发送消息；连接不会启动模型。",
  "Browser connection": "浏览器连接",
  connections: "个连接",
  Connections: "连接数",
  "pending messages": "条待处理消息",
  "Pending messages": "待处理消息",
  Profile: "资料",
  "All conversations": "全部对话",
  Inbox: "收件箱",
  "Agent workspace": "Agent 工作区",
  "Current Window": "当前窗口",
  "Session activity": "会话活动",
  "Finding linked Windows…": "正在查找关联窗口…",
  "Could not load Session activity.": "无法加载会话活动。",
  "Choose a Window for this Session": "选择要查看的关联窗口",
  "View Session record": "查看会话记录",
  "Check branch": "查看分支",
  "Git status unavailable": "无法读取 Git 状态",
  "Detached HEAD": "分离的 HEAD",
  "Active Windows": "活跃窗口",
  "View activity": "查看活动",
  "Build diagnostics": "构建诊断",
  "No Runners connected": "暂无已连接的运行器",
  "Observation scope": "观测范围",
  "Window activity refresh failed; showing previous observations.": "窗口活动刷新失败，正在显示之前的观测记录。",
  "Last Project": "最近项目",
  "Outside WebCodex": "WebCodex 外部间隔",
  "Technical details": "技术详情",
  Elapsed: "已运行",
  "No explicit Session link": "未明确关联工作会话",
  "No Project evidence": "未观察到项目归属",
  "All Projects in this Window": "此窗口的所有项目",
  "Newest first. Project, Session and timing stay visible.": "最新调用在前，项目、会话和时间直接可见。",
  "Tool activity": "工具调用",
  "Protocol compatibility": "协议兼容性",
  "Build alignment": "构建一致性",
  "Build matches": "构建一致",
  "Different version": "版本不同",
  "Different revision": "源码修订不同",
  "Local development build": "本地开发构建",
  "Build revisions are diagnostic identity, not compatibility gates.": "构建修订仅用于诊断，不决定功能兼容性。",
  compatible: "兼容",
  incompatible: "不兼容",
  "Session list unavailable. Check access to this Project.": "会话列表不可用，请检查此项目的访问权限。",
  Source: "来源",
  "Current Runtime": "当前运行时",
  Diagnostics: "诊断",
  Window: "窗口",
  "Active Sessions": "活动会话",
  "Running Sessions": "进行中的会话",
  "Runners online": "在线运行器",
  "Search Sessions": "搜索会话",
  "Filter Sessions by Runner": "按运行器筛选会话",
  "Filter Sessions by Project": "按项目筛选会话",
  "Project filter": "项目筛选",
  "Loading Sessions…": "正在加载会话…",
  "Locating Session…": "正在定位会话…",
  "Exact Session lookup failed · showing previous data": "精确会话查询失败 · 正在显示之前的数据",
  "Open Session": "打开会话",
  "No matching Sessions": "没有匹配的会话",
  "No active or recent Workflow Sessions.": "暂无活动中或最近的工作会话。",
  "Runtime-wide Sessions require runtime:read. Open an authorized Project to inspect its Sessions.": "查看运行时会话总览需要 runtime:read 权限。仍可从有权访问的项目查看其会话。",
  "The Runtime inventory is incomplete; some retained Sessions may not be shown.": "运行时清单不完整，部分已保留会话可能暂未显示。",
  "Select an active or recent Session from the list. Runner and Project are filters, not prerequisites.": "从列表选择活动中或最近的会话。运行器和项目仅用于筛选，无需先打开项目。",
  "No Window activity observed yet.": "尚未观察到窗口活动",
  "Window activity unavailable": "窗口活动不可用",
  "Observing the connected Runtime.": "正在读取已连接运行时的活动。",
  "Check runtime:read and access to the selected Project.": "请检查 runtime:read 权限以及所选项目的访问权限。",
  "This Window is no longer visible to the current credential. Refresh to check available activity.": "当前凭证已无法查看此窗口。请刷新以检查可用活动。",
  "No observed activity matches this Project filter.": "当前项目筛选范围内尚未观察到窗口活动。",
  "This project-scoped credential can only observe Windows within its own Project authority. Use a Runtime Console management credential for the authorized management view.": "当前项目范围凭证只能观察其项目权限内的窗口。请使用运行时控制台管理凭证查看已授权的管理视图。",
  "Global Runtime scope. Only observed WebCodex requests appear here; no Project selection is required.": "当前为运行时全局范围。这里仅显示已观察到的 WebCodex 请求，无需先选择项目。",
  "One Server coordinates connected Runners and their Projects.": "一个服务器协调已连接的运行器及其项目。",
  "Runner unavailable": "运行器不可用",
  "Session history": "会话历史",
  "Last seen": "最后观察时间",
  Todos: "待办",
  Questions: "问题",
  Risks: "风险",
  Active: "活动中",
  Closed: "已结束",
  "Updates automatically": "自动更新",
  "Open a Window to see its project and Workflow Sessions.": "打开窗口，查看关联项目与工作会话。",
  "Window Details": "窗口详情",
  "Tool diagnostics": "工具诊断",
  Observed: "已观察到",
  "In progress": "进行中",
  "Last activity": "最近活动",
  "WebCodex — Workspace": "WebCodex — 工作区",
  "Your projects and work, in one place.": "项目与工作，尽在此处。",
  Workspace: "工作区",
  "WebCodex Ready": "WebCodex 已就绪",
  Home: "首页",
  "Access key": "访问密钥",
  "Use your access key to open this workspace.": "输入访问密钥，打开工作区。",
  "Remember for this tab": "在此标签页保持登录",
  Advanced: "高级",
  "The key stays in this tab and is cleared when you lock the workspace or close the tab.": "密钥仅保留在此标签页，锁定工作区或关闭标签页时清除。",
  "Add Project": "添加项目",
  "Open Project": "打开项目",
  "All Projects": "全部项目",
  "Search projects": "搜索项目",
  "Recent Projects": "最近项目",
  "Recent Activity": "最近活动",
  Current: "当前项目",
  "Git branch": "Git 分支",
  "active sessions": "个活跃会话",
  Running: "运行中",
  "Not checked": "尚未检查",
  "No activity observed yet": "尚未观察到活动",
  "No projects yet": "尚无项目",
  "No matching projects": "没有匹配的项目",
  "No Git repository": "非 Git 项目",
  "Loading projects…": "正在加载项目…",
  "Projects unavailable. Refresh to try again.": "暂时无法加载项目，请刷新重试。",
  "Activity unavailable. Refresh to try again.": "暂时无法加载活动，请刷新重试。",
  "Reading project files": "查看项目文件",
  "Editing files": "编辑文件",
  "Reviewing changes": "检查更改",
  "Running checks": "运行检查",
  "Running tasks": "运行任务",
  "Workspace activity": "工作区活动",
  "Project folder": "项目文件夹",
  "Absolute folder path on the selected Runner": "所选 Runner 上的绝对文件夹路径",
  "Adding project…": "正在添加项目…",
  "The result could not be confirmed. Refresh Projects before trying again.": "无法确认操作结果，请刷新项目列表后再重试。",
  "Project could not be added. Check the folder and Runner access.": "未能添加项目，请检查文件夹及 Runner 访问权限。",
  "Could not refresh. Check the connection and try again.": "暂时无法刷新，请检查连接后重试。",
  Extensions: "扩展",
  Instructions: "指令",
  "Global instructions": "全局指令",
  Available: "可用",
  Unavailable: "暂不可用",
  Registered: "已登记",
  "Nothing installed yet": "尚未安装",
  "No instructions configured": "尚未配置指令",
  "Add a project to manage its extensions.": "添加项目后即可管理扩展。",
  "Showing recent results": "显示最近的结果",
  Reload: "重新加载",
  "Reload could not be confirmed. Refresh before trying again.": "无法确认重新加载的结果，请刷新后再重试。",
  tools: "个工具",
  Windows: "窗口活动",
  Open: "打开",
  Close: "关闭",
  "Workspace status": "工作区状态",
  "Enter your access key.": "请输入访问密钥。",
  "Your access key is no longer valid. Connect again.": "访问密钥已失效，请重新连接。",
  "Open a project, then choose a Workflow Session.": "打开项目，然后选择工作会话。",
  "About Session messages": "关于会话消息",
  "Session messages are not available with this access key.": "当前访问密钥无法查看会话消息。",
  "Session activity and associated Windows are available in Details.": "会话活动和关联窗口可在详情中查看。",
  "Session refresh unavailable. Refresh to try again.": "无法刷新会话。请点击刷新重试。",
  "Loading work Sessions…": "正在加载工作会话…",
  "Project overview": "项目概览",
  "Work Sessions": "工作会话",
  "Diagnostics & Agents": "诊断与 Agent",
  "Choose where to work": "选择工作项目",
  "Review observed work, then choose a Session to continue.": "查看已观测的工作，再选择会话继续。",
  "Find a project, review recent work, or inspect client activity.": "查找项目、查看近期工作，或检查客户端活动。",
  "Runner disconnected. Open diagnostics to check the connection.": "运行器已断开。请打开诊断检查连接。",
  "Needs attention": "待处理",
  "No attention requests in loaded Sessions.": "已加载的会话中没有待处理请求。",
  "Working now": "正在工作",
  "No active work observed in loaded Sessions.": "已加载的会话中未观测到正在执行的工作。",
  "Recently closed": "最近关闭",
  "No closed Sessions in this retained view.": "此留存视图中没有已关闭的会话。",
  "Recent work Sessions": "近期工作会话",
  "Choose a project to load its work Sessions.": "选择项目以加载其工作会话。",
  "Untitled Session": "未命名会话",
  "More Sessions are available in the sidebar.": "可在侧边栏查看其他会话。",
  "Loaded evidence only; counts may be bounded.": "仅显示已加载的证据；计数可能受留存范围限制。",
  "Client calls, separate from work Sessions. Observation does not mean the host is online.": "客户端调用，与工作会话分别展示。观测到活动不代表主机在线。",
  "Browse Window activity": "浏览窗口活动",
  "Observed work": "已观测的工作",
  "Running Jobs": "运行中的作业",
  "Files in retained edits": "留存编辑涉及的文件",
  "No file edits in loaded activity.": "已加载的活动中没有文件编辑。",
  "Recent Job evidence": "近期作业证据",
  "No Jobs in loaded activity.": "已加载的活动中没有作业。",
  "Recently completed": "最近完成",
  "No successful completions in loaded activity.": "已加载的活动中没有成功完成的记录。",
  "Work summary": "工作摘要",
  "Retained evidence, not a live Git diff. Open Context for activity and linked Windows.": "留存证据，并非实时 Git 差异。打开上下文查看活动和关联窗口。",
  "Work Sessions in this Project": "此项目中的工作会话",
  "Commands · ⇧⌘ / Ctrl K": "命令 · ⇧⌘ / Ctrl K",
  Commands: "命令",
  "Find a destination": "查找目标",
  Destinations: "导航目标",
  "Close commands": "关闭命令菜单",
  "No matching destinations.": "没有匹配的目标。",
  "partial scan": "扫描不完整",
  "Your workspace": "你的工作空间",
  "Pick up where work happens": "从这里继续工作",
  "Find a project": "查找项目",
  "Find a project…": "查找项目…",
  "Runtime overview": "运行概览",
  "WebCodex — Runtime Console": "WebCodex — 运行控制台",
  "WebCodex Runtime Console": "WebCodex 运行控制台",
  "A local workspace for Projects, Sessions, and collaboration": "用于管理项目、会话与协作的本地工作空间",
  Appearance: "外观",
  "Choose appearance": "选择外观",
  "Color mode": "颜色模式",
  System: "跟随系统",
  Light: "浅色",
  Dark: "深色",
  "Local runtime": "本地运行时",
  "Connect to your workspace": "连接到你的工作空间",
  "Enter an existing runtime Bearer credential. Project and Workflow Session views require their existing scopes; durable Agent Chat separately requires communication:read and communication:manage.": "输入已有的运行时 Bearer 凭证。项目和工作流会话视图需要相应权限；持久 Agent 对话还需要 communication:read 和 communication:manage。",
  "Runtime Bearer credential": "运行时 Bearer 凭证",
  Connect: "连接",
  "Keep me signed in for this tab (survives refresh, clears on Lock or tab close)": "在此标签页保持登录（刷新后仍有效，锁定或关闭标签页时清除）",
  "Project and Session navigation": "项目与会话导航",
  Local: "当前运行时",
  "Close project navigation": "关闭工作区导航",
  "Projects & Sessions": "项目与会话",
  "Workspace views": "工作空间视图",
  Connected: "已连接",
  "Runtime & Agents": "运行时与 Agent",
  "Runtime workspace": "运行时工作区",
  "Inspect infrastructure and manage durable Agents without mixing administration into the current Session.": "检查基础设施并管理持久 Agent，同时避免将管理操作混入当前会话。",
  Overview: "概览",
  Details: "详情",
  "Session context views": "会话上下文视图",
  "Server health and fleet capacity": "服务器健康状态与运行器容量",
  "Runner fleet": "运行器列表",
  "Devices, builds and current load": "运行器、构建与当前负载",
  "Agents, inboxes and conversations": "Agent、收件箱与对话",
  "Local control plane": "运行时诊断",
  "Server health, Runner capacity, durable Agent identity, inboxes, and conversations.": "查看服务器健康状态、运行器容量、持久 Agent 标识、收件箱与对话。",
  "Live updates": "实时更新",
  Infrastructure: "基础设施",
  Devices: "设备",
  "Durable communication": "持久通信",
  "Agents & Conversations": "Agent 与对话",
  "Session conversation": "会话对话",
  "New messages": "新消息",
  "new message": "条新消息",
  "new messages": "条新消息",
  "Show full message": "展开完整消息",
  "Collapse message": "收起消息",
  "Copy code": "复制代码",
  "Code copied": "代码已复制",
  "Unable to copy code": "无法复制代码",
  connected: "已连接",
  Projects: "项目",
  Runner: "运行器",
  "Latest Agent message": "最近的 Agent 留言",
  "Search loaded Sessions": "搜索已加载会话",
  "Title, id, or lifecycle": "标题、ID 或生命周期",
  "Search retained messages": "搜索已保留消息",
  "Message, resolution, or id": "消息内容、处理说明或 ID",
  "This board shows retained Session messages. ACK is not a reply or completion. Host chat replies appear here only when explicitly posted to this Session.": "这里展示会话中保留的协作消息。ACK 不代表回复或完成；宿主聊天中的回复只有明确发布到此会话后才会显示。",
  "All Runners": "全部运行器",
  "Search Runners": "搜索运行器",
  "No matching Runners": "没有匹配的运行器",
  "Filter by Project name, id, Runner, or workspace path": "按项目名称、ID、运行器或工作空间路径筛选",
  "No project selected": "尚未选择项目",
  "No Projects match this filter.": "没有符合当前筛选条件的项目。",
  "Window activity": "窗口活动",
  "Project Window activity": "项目窗口活动",
  "No Window activity recorded for this project.": "此项目没有记录到窗口活动。",
  "Window activity requires runtime:read. Project-scoped Session access remains available.": "查看窗口活动需要 runtime:read 权限；仍可访问项目范围内的会话。",
  Sessions: "会话",
  "Workflow Sessions": "工作会话",
  "No retained Workflow Sessions for this project.": "此项目没有保留的工作流会话。",
  "Working & Recently Updated Sessions": "正在工作与最近更新的会话",
  "Working and recently updated Workflow Sessions": "正在工作与最近更新的工作流会话",
  "No recent Workflow Sessions are visible.": "当前没有可见的最近工作流会话。",
  "Fleet-wide recent Sessions require runtime:read. Project-scoped Session access remains available.": "查看整个设备群的最近会话需要 runtime:read；仍可访问项目范围内的会话。",
  "Local Runtime": "当前运行时",
  "Credential stays in this tab only": "凭证仅保留在此标签页",
  "Open project navigation": "打开工作区导航",
  "Current location": "当前位置",
  Fleet: "运行时",
  "Select a Session": "选择一个会话",
  "Refresh runtime": "刷新运行时",
  Lock: "锁定",
  "Choose a project and Workflow Session from the sidebar to inspect its context and continue the collaboration.": "从侧边栏选择项目和工作流会话，以查看上下文并继续协作。",
  Conversation: "对话",
  "Collaboration messages require runtime:read. Existing project/session observability remains available.": "协作消息需要 runtime:read；现有的项目和会话观察能力仍可使用。",
  "Start this Session conversation": "开始此会话的对话",
  "Messages posted here are retained on the Session collaboration board.": "此处发送的消息会保留在会话协作板中。",
  "Retained board only; this is not a permanent or complete chat history. ACK observed is server-side evidence of an explicit echo, not a delivery or read receipt.": "这里只展示保留的协作板内容，并非永久或完整的聊天记录。已观察到 ACK 仅表示服务端收到明确回显，不代表送达或已读。",
  "Clear reply": "清除回复",
  "Cancel Edit": "取消编辑",
  "Message this Session…": "给此会话发送消息…",
  Options: "选项",
  "Message options": "消息选项",
  "Applied to this message": "应用于本条消息",
  Kind: "类型",
  Note: "备注",
  Guidance: "指导",
  Question: "问题",
  Todo: "待办",
  Priority: "优先级",
  Low: "低",
  Normal: "普通",
  High: "高",
  "Require acknowledgement": "需要确认",
  "Send message": "发送消息",
  "More actions": "更多操作",
  Language: "语言",
  Refresh: "刷新",
  "Runtime details": "运行时详情",
  "Session context": "会话上下文",
  "Close runtime details": "关闭运行时详情",
  "Close session context": "关闭会话上下文",
  Context: "上下文",
  Live: "实时",
  Session: "会话",
  "Selected context": "已选上下文",
  "Workflow Session identity": "工作流会话标识",
  "Session ID": "会话 ID",
  Lifecycle: "生命周期",
  Mode: "模式",
  Created: "创建时间",
  Updated: "更新时间",
  "Workflow Session overview": "工作流会话概览",
  "Details & activity": "详情与活动",
  "IDs, validation, timeline": "标识、验证与时间线",
  Work: "工作",
  Validation: "验证",
  Attention: "待处理",
  "Reported progress": "已报告进度",
  "Model-reported; informational only.": "由模型报告，仅供参考。",
  Activity: "活动",
  "Jump to latest": "跳到最新",
  "No bounded activity is available.": "没有可用的有界活动记录。",
  "Server overview": "服务器概览",
  Server: "服务器",
  Runners: "运行器",
  "Collaboration attention": "协作待处理项",
  "Runtime-wide overview is unavailable to this credential; project-scoped Console access remains available.": "此凭证无法查看运行时全局概览；仍可使用项目范围的控制台访问。",
  "Runner Fleet": "运行器设备群",
  "No caller-visible Runners.": "没有调用方可见的运行器。",
  "Runtime-wide Runner facts require runtime:read.": "运行时全局运行器信息需要 runtime:read。",
  "Durable Agent Chat": "持久 Agent 对话",
  "Durable Conversation transcript, recipient-specific Inbox, and coalesced Wake Intent state. While Runtime & Agents is visible, the Console refreshes communication every 30 seconds; attached Endpoint leases are renewed every 30 seconds even outside that view. Polling, renewal, refresh, or unload cleanup does not invoke or wake a model.": "展示持久对话记录、收件人专属收件箱与合并后的唤醒意图状态。显示“运行时与 Agent”时，控制台每 30 秒刷新通信数据；即使离开该视图，已附加端点的租约仍每 30 秒续期。轮询、续期、刷新或卸载清理都不会调用或唤醒模型。",
  "Choose “Continue as this Agent” to bind this browser window to one durable Agent. The Console can poll and renew that bounded Endpoint lease, but it has no production model-resume adapter: pending Wake Intents remain durable until an explicit Host/model activation.": "选择“以此 Agent 继续”可将当前浏览器窗口绑定到一个持久 Agent。控制台可以轮询并续期该有界端点租约，但没有生产模型恢复适配器；待处理的唤醒意图会一直持久保留，直到主机或模型被明确激活。",
  "Durable Agent Chat requires communication:read. Project and Workflow Session access remain independent.": "持久 Agent 对话需要 communication:read；项目与工作流会话访问彼此独立。",
  Agents: "Agent",
  Handle: "标识名",
  "Display name": "显示名称",
  Description: "描述",
  "What this Agent mainly does": "此 Agent 的主要职责",
  "Specialty labels": "专长标签",
  "Create Agent": "创建 Agent",
  "Durable Agents": "持久 Agent",
  "No durable Agents are owned by this communication principal.": "此通信主体尚未拥有持久 Agent。",
  "Agent Card": "Agent 卡片",
  "Update Agent Card": "更新 Agent 卡片",
  "No browser Endpoint attached.": "尚未附加浏览器端点。",
  "Attach this browser": "附加此浏览器",
  "Continue as this Agent": "以此 Agent 继续",
  Detach: "分离",
  "Selected Agent Inbox": "所选 Agent 收件箱",
  "Consume visible": "消费可见项",
  "Select and attach an Agent to inspect recipient-specific queued deliveries.": "选择并附加一个 Agent，以查看收件人专属的排队投递。",
  Conversations: "对话",
  Title: "标题",
  "Agent IDs": "Agent ID",
  "Select an Agent or enter comma-separated wc_dagent_* ids": "选择 Agent，或输入以逗号分隔的 wc_dagent_* ID",
  "Create Conversation": "创建对话",
  "Durable Conversations": "持久对话",
  "No Conversations are visible to this Human principal.": "此人工主体目前没有可见对话。",
  "No messages yet.": "暂无消息。",
  "Inbox recipients": "收件箱接收方",
  "Blank = all Agent participants; empty delivery can be sent with [] through the API": "留空表示所有 Agent 参与者；可通过 API 使用 [] 发送不投递到收件箱的消息",
  "Send a Human-authored durable message…": "发送一条由人工撰写的持久消息…",
  "Send as the selected Agent through its exact attached Endpoint": "通过精确附加的端点，以所选 Agent 身份发送",
  "Send a durable message…": "发送一条持久消息…",
  "Send durable message": "发送持久消息",
  "Select or create a Conversation.": "选择或创建一个对话。",
  "Show more": "展开更多",
  "Recent Sessions": "最近会话",
  "Switch to Chinese": "切换到中文",
  "System appearance": "跟随系统外观",
  "Light appearance": "浅色外观",
  "Dark appearance": "深色外观",
  "No retained pending attention": "没有保留的待处理项",
  "No visible Projects": "没有可见项目",
  "Conversation access unavailable": "对话访问不可用",
  "This credential can inspect the Project and Session, but retained messages require runtime:read.": "此凭证可以查看项目和会话，但查看保留消息需要 runtime:read。",
  "Conversation access requires runtime:read": "对话访问需要 runtime:read",
  "Replace message": "替换消息",
  Reply: "回复",
  "Replying to": "回复",
  "Original message unavailable": "原消息不可用",
  You: "你",
  Agent: "Agent",
  "Retained message": "保留消息",
  "Author provenance unavailable": "作者来源不可用",
  Edit: "编辑",
  Delete: "删除",
  Consume: "消费",
  "Untitled Conversation": "未命名对话",
  "No description.": "暂无描述。",
  "time unavailable": "时间不可用",
  working: "工作中",
  "recently active": "最近活跃",
  "idle · pending attention": "空闲 · 有待处理项",
  idle: "空闲",
  "WebCodex activity only; host/model state is unknown.": "仅反映 WebCodex 活动；主机与模型状态未知。",
  Now: "当前",
  Last: "上次",
  Reconnecting: "正在重连",
  Paused: "已暂停",
  Idle: "空闲",
  OFFLINE: "离线",
  online: "在线",
  offline: "离线",
  stale: "状态过期",
  unknown: "未知",
  note: "备注",
  guidance: "指导",
  question: "问题",
  todo: "待办",
  low: "低",
  normal: "普通",
  high: "高",
  open: "开放",
  resolved: "已解决",
  "Acknowledgement required": "需要确认",
  Acknowledged: "已确认",
  Withdrawn: "已撤回",
  Replaced: "已替换",
  Resolved: "已解决",
  active: "活跃",
  completed: "已完成",
  none: "无",
  attached: "已附加",
  detached: "已分离",
  expired: "已过期",
  queued: "排队中",
  consumed: "已消费",
  passed: "已通过",
  failed: "失败",
  "runtime:read unavailable": "runtime:read 不可用",
  "refresh unavailable": "刷新不可用",
  "project:read unavailable": "project:read 不可用",
  "build unavailable": "构建信息不可用",
  "Credential rejected.": "凭证已被拒绝。",
  "Credential does not have Runtime Console project access.": "此凭证没有运行控制台的项目访问权限。",
  "Runtime Console is unavailable.": "运行控制台当前不可用。",
  "Could not refresh projects.": "无法刷新项目。",
  "Selected project is no longer available.": "所选项目已不可用。",
  "Could not refresh Workflow Sessions.": "无法刷新工作流会话。",
  "Could not refresh Workflow Session detail.": "无法刷新工作流会话详情。",
  "Enter a runtime Bearer credential.": "请输入运行时 Bearer 凭证。",
  "Searching…": "正在搜索…",
  "Refreshing…": "刷新中…",
  Refreshed: "已刷新",
  "Refresh failed · showing previous data": "刷新失败 · 正在显示之前的数据",
  "Refreshing runtime": "正在刷新运行时",
  "Restoring this tab…": "正在恢复此标签页…",
  "Reply target cleared.": "已清除回复目标。",
  "Edit cancelled.": "已取消编辑。",
  "Enter a message.": "请输入消息。",
  "Sending…": "正在发送…",
  "Sent.": "已发送。",
  "Send failed.": "发送失败。",
  "Delete failed.": "删除失败。",
  "Replace failed.": "替换失败。",
  "Withdrawing retained message…": "正在撤回保留消息…",
  "Message changed before Delete. Refresh retained messages before retrying.": "删除前消息已发生变化。请刷新保留消息后再重试。",
  "Retained message withdrawn.": "保留消息已撤回。",
  "Replacing retained message…": "正在替换保留消息…",
  "Message changed before Replace. Refresh retained messages before retrying.": "替换前消息已发生变化。请刷新保留消息后再重试。",
  "Send outcome unknown. Refresh and review retained messages before retrying.": "发送结果未知。请先刷新并检查保留消息，再决定是否重试。",
  "Cancel reply": "取消回复",
  "Message mutation outcome unknown. Refresh retained messages before retrying.": "消息修改结果未知。请先刷新保留消息，再决定是否重试。",
  "Session collaboration access required.": "需要会话协作权限。",
  "Message replacement failed.": "消息替换失败。",
  "Message withdrawal failed.": "消息撤回失败。",
  "Refreshing durable communication…": "正在刷新持久通信…",
  "Handle and display name are required.": "标识名和显示名称不能为空。",
  "Creating durable Agent…": "正在创建持久 Agent…",
  "Updating Agent Card…": "正在更新 Agent 卡片…",
  "Outcome uncertain. Refresh the Card before deciding whether to retry.": "操作结果不确定。请刷新 Agent 卡片后再决定是否重试。",
  "Agent Card update failed; refresh before retrying a stale revision.": "Agent 卡片更新失败；请刷新后再重试，避免使用过期版本。",
  "Agent Card updated.": "Agent 卡片已更新。",
  "Releasing this window’s previous Agent Endpoint…": "正在释放此窗口之前的 Agent 端点…",
  "Previous Endpoint detach is uncertain. Refresh before switching this window to another Agent.": "之前端点的分离结果不确定。请刷新后再将此窗口切换到其他 Agent。",
  "Could not release the previous Agent Endpoint.": "无法释放之前的 Agent 端点。",
  "The exact Attach replay was already replaced. Choose “Continue as this Agent” again to create a fresh Endpoint generation.": "这次精确附加重放已被替代。请再次选择“以此 Agent 继续”，创建新的端点代数。",
  "communication:manage required.": "需要 communication:manage 权限。",
  "Outcome uncertain. Keep inputs unchanged and retry to replay the same idempotency key, or refresh before deciding.": "操作结果不确定。请保持输入不变并重试以复用同一幂等键，或先刷新再决定。",
  "Attaching browser Endpoint…": "正在附加浏览器端点…",
  "Outcome uncertain. Retry Attach to replay the same idempotency key; do not create a new attachment.": "附加结果不确定。请重试附加以复用同一幂等键，不要创建新的附加记录。",
  "Detaching browser Endpoint…": "正在分离浏览器端点…",
  "Detach outcome uncertain. Refresh before retry; the durable Agent and Inbox are unaffected.": "分离结果不确定。请刷新后再重试；持久 Agent 和收件箱不受影响。",
  "At least one Agent id is required.": "至少需要一个 Agent ID。",
  "Creating durable Conversation…": "正在创建持久对话…",
  "Outcome uncertain. Keep inputs unchanged and retry to replay the same idempotency key.": "操作结果不确定。请保持输入不变并重试以复用同一幂等键。",
  "Select a Conversation and enter a message.": "请选择一个对话并输入消息。",
  "Select an Agent and choose “Continue as this Agent” before sending as it.": "请先选择一个 Agent 并点击“以此 Agent 继续”，然后再以其身份发送。",
  "Appending Message and Agent deliveries atomically…": "正在以原子方式写入消息和 Agent 投递…",
  "Outcome uncertain. Keep the message unchanged and retry only to replay the same idempotency key, or refresh the transcript first.": "操作结果不确定。请保持消息不变，仅在复用同一幂等键时重试，或先刷新对话记录。",
  "Consuming recipient state…": "正在消费接收方状态…",
  "communication:manage required to consume deliveries.": "消费投递需要 communication:manage 权限。",
  "Consume outcome uncertain. Refresh before retry; desired-state replay is safe.": "消费结果不确定。请刷新后再重试；目标状态重放是安全的。",
  "Delivery consume failed.": "消费投递失败。",
  "Existing idempotent Agent replayed.": "已重放现有的幂等 Agent。",
  "Agent created.": "Agent 已创建。",
  "Existing idempotent Conversation replayed.": "已重放现有的幂等对话。",
  "Conversation created.": "对话已创建。",
  "Existing Message replayed without duplicate delivery.": "已重放现有消息，未产生重复投递。",
  "Durable Message sent.": "持久消息已发送。",
  "Confirming replacement durability…": "正在确认替换操作的持久性…",
  "Confirming withdrawal durability…": "正在确认撤回操作的持久性…",
  "Replacement already retained.": "替换消息已保留。",
  "Message replaced.": "消息已替换。",
  "Withdraw observed after refresh; exact replay required to confirm durability.": "刷新后已观察到撤回结果；仍需精确重放以确认持久性。",
  "Replacement observed after refresh; exact replay required to confirm durability.": "刷新后已观察到替换结果；仍需精确重放以确认持久性。",
  "Outcome not observed in retained messages; exact replay required before live observation resumes.": "保留消息中未观察到操作结果；恢复实时观察前需要精确重放。",
  "Message changed while editing; current retained state was refreshed.": "编辑期间消息已变化；当前保留状态已刷新。",
  "Outcome unknown; refresh retained messages before retrying.": "操作结果未知；请刷新保留消息后再重试。",
  "Replacement durably confirmed after exact replay.": "精确重放后已确认替换操作持久保存。",
  "Withdraw durably confirmed after exact replay.": "精确重放后已确认撤回操作持久保存。",
  "durability confirmation still uncertain · refresh before retry": "持久性确认仍不确定 · 请刷新后再重试",
  "message changed during durability confirmation · refresh retained state": "持久性确认期间消息已变化 · 请刷新保留状态",
  "durability confirmation failed · refresh before retry": "持久性确认失败 · 请刷新后再重试",
  "establishing retained baseline": "正在建立保留消息基线",
  "Session unavailable": "会话不可用",
  "observation unavailable": "观察接口不可用",
  "retained snapshot failed": "保留消息快照获取失败",
  "bounded long-poll": "有界长轮询",
  "request failed": "请求失败",
  "retention changed · reloading": "保留窗口已变化 · 正在重新加载",
  "delta drain failed": "增量排空失败",
  "withdraw outcome unknown · refresh before retry": "撤回结果未知 · 请刷新后再重试",
  "message changed · refresh retained state": "消息已变化 · 请刷新保留状态",
  "replace outcome unknown · refresh before retry": "替换结果未知 · 请刷新后再重试",
  "send outcome unknown · refresh before retry": "发送结果未知 · 请刷新后再重试",
  RUNNING: "运行中",
  ATTENTION: "待处理",
  STALE: "状态过期",
  "SOURCE DIFFERENT": "源码不一致",
  "BUILD DIFFERENT": "构建不一致",
  DIRTY: "有未提交更改",
  "SESSION SCAN PARTIAL": "会话扫描不完整",
  "WINDOW ACTIVE": "窗口活跃",
  "Active host window request": "活跃的主机窗口请求",
  "Open Window inspector": "打开窗口检查器",
  "runtime:read required": "需要 runtime:read 权限",
  "Window Activity": "窗口活动",
  "Host Window Activity": "主机窗口活动",
  "WebCodex host windows": "WebCodex 主机窗口",
  "WebCodex Windows": "WebCodex 窗口活动",
  "WebCodex windows": "WebCodex 窗口活动",
  "WebCodex Window activity": "WebCodex 窗口活动",
  "WebCodex window activity": "WebCodex 窗口活动",
  "Client Windows": "客户端窗口",
  "Window activity has not been loaded yet.": "尚未加载窗口活动。",
  "No Window activity is visible.": "当前没有可见的窗口活动。",
  "No Window activity is visible to this credential.": "当前凭证范围内没有可见的窗口活动。",
  "No Window activity is visible for this Project to this credential.": "当前凭证范围内，此项目没有可见的窗口活动。",
  "Window activity requires runtime:read.": "查看窗口活动需要 runtime:read 权限。",
  "Window activity could not be refreshed.": "窗口活动无法刷新。",
  "Window activity could not be refreshed; showing previous data.": "窗口活动无法刷新；正在显示之前的数据。",
  "refresh failed, showing previous data": "刷新失败，正在显示之前的数据",
  "No Window activity has been observed for this Project.": "此项目尚未观察到窗口活动。",
  "No Window activity observed for this project.": "此项目尚未观察到窗口活动。",
  "No WebCodex activity is available.": "没有可用的 WebCodex 活动。",
  meaningful: "有效工作",
  "recorder gap": "记录断层",
  "streaming timing unavailable": "流式传输耗时不可用",
  "service unavailable": "服务耗时不可用",
  "next gap unavailable": "下次间隔不可用",
  "overlap from previous": "与前次调用重叠",
  "Active request": "活跃请求",
  "No active request": "无活跃请求",
  "No active requests": "无活跃请求",
  "No WebCodex request is currently active.": "当前没有活跃的 WebCodex 请求。",
  "No authorized Workflow Session links.": "没有已授权的工作流会话关联。",
  "No linked Window evidence.": "没有关联的窗口证据。",
  "No completed tools/call activity": "没有已完成的 tools/call 活动",
  "No meaningful WebCodex work recorded": "未记录到有效 WebCodex 工作",
  "Last WebCodex call": "最后 WebCodex 调用",
  "Last WebCodex call ": "最后 WebCodex 调用 ",
  "Last WebCodex activity": "最后 WebCodex 活动",
  "Last WebCodex activity ": "最后 WebCodex 活动 ",
  "Last meaningful work": "最后有效工作",
  "Last meaningful work ": "最后有效工作 ",
  "Open Window Activity inspector": "打开窗口活动检查器",
  "Copy trace id": "复制 Trace ID",
  "Copy hashed key": "复制哈希键",
  "Could not refresh Window activity.": "无法刷新窗口活动。",
  "Hashed identity": "哈希标识",
  "Select a Window": "选择一个窗口",
  "Window axis": "窗口维度",
  "Choose a hashed Window identity from the sidebar to inspect active requests, linked Workflow Sessions, and retained activity.": "从侧边栏选择哈希窗口标识，以检查活跃请求、关联的工作流会话及已保留活动。",
  "Shows WebCodex calls and correlations only. It cannot observe model reasoning or determine whether the ChatGPT frontend is frozen.": "仅反映 WebCodex 调用与关联关系。它无法观察模型推理，也无法判断 ChatGPT 前端是否卡顿。",
  "3s activity refresh": "3秒活动刷新",
  "3s window refresh": "3秒窗口刷新",
  "Host Window liveness and correlation evidence. Window identity never grants execution or Session authority.": "主机窗口活跃度与关联证据。窗口标识绝不授予执行或会话权限。",
  "Recording was not continued for ": "记录未继续于会话 ",
  "service ": "服务耗时 ",
  "next gap ": "下次间隔 ",
  "cycle ": "周期 ",
  "process exit ": "进程退出码 ",
  "exit ": "退出码 ",
  bounded: "有界",
  Inspect: "检查",
  "Active calls": "活跃调用",
  "Linked sessions": "关联会话",
  Timeline: "时间线",
  "RECORDER GAP": "记录断层",
  "Loading Window activity…": "正在加载窗口活动…"
};
Object.assign(sn, {
  Runtime: "运行时",
  "Repository workspace": "仓库工作区",
  "Find a repository, then inspect the work Sessions currently active inside it.": "查找仓库，并查看其中当前活动的工作会话。",
  "A Project may host multiple Sessions. Window counts are bounded, independently authorized evidence.": "一个项目可以包含多个会话；窗口数量是有界且独立授权的观察证据。",
  "Inspect active Sessions": "查看活动会话",
  "Open project": "打开项目",
  "View Sessions": "查看会话",
  "No Workflow Sessions retained for this Project.": "此项目没有保留的工作流会话。",
  "Current work": "当前工作",
  "Activity signals": "活动信号",
  "Independent evidence layers; sparse Session links never imply Window idleness.": "这些是彼此独立的证据层；会话关联稀疏并不代表窗口或模型空闲。",
  "Window / Model": "窗口 / 模型",
  "Workflow Session": "工作流会话",
  "Last WebCodex call": "最近 WebCodex 调用",
  "Not observed": "未观察到",
  "Sparse activity": "活动关联稀疏",
  "Last linked activity": "最近关联活动",
  "Last action": "最近动作",
  Blocked: "阻塞中",
  Waiting: "等待中",
  Queued: "排队中",
  Terminal: "已结束",
  "Window activity is not available to this credential.": "当前凭证无法读取窗口活动。",
  "WebCodex request currently in flight.": "当前有 WebCodex 请求正在执行。",
  "Window activity continues beyond the latest Session-linked record.": "窗口中的 WebCodex 活动晚于最近的会话关联记录。",
  "Observed from Window-scoped WebCodex activity.": "来自窗口范围的 WebCodex 活动证据。",
  "No Window-scoped WebCodex activity is loaded.": "当前未加载窗口范围的 WebCodex 活动。",
  "Window activity is newer than explicit Session-linked work; this is provenance sparsity, not model idleness.": "窗口活动晚于显式的会话关联工作；这是 provenance 稀疏，并非模型空闲。",
  "Exact retained Session progress / collaboration evidence.": "精确保留的会话进度 / 协作证据。",
  "No explicit Session-linked activity is loaded.": "当前未加载显式的会话关联活动。",
  "Workspace activity projection is not available.": "工作区活动投影不可用。",
  "No workspace ledger action is loaded for this Project.": "当前项目没有加载到工作区 ledger 动作。",
  "Job lifecycle projection is not available.": "Job 生命周期投影不可用。",
  "No Job lifecycle exists for this Session.": "当前会话没有观察到 Job 生命周期。",
  "Activity timeline": "活动时间线",
  "Unified Session, Window, Workspace, and Job evidence": "统一展示会话、窗口、工作区与 Job 证据",
  "Session activity history is bounded by the retained ledger.": "会话活动历史受保留 ledger 的上限约束。",
  "Window activity reached the server history bound; older Window evidence may be omitted.": "窗口活动已达到 Server 历史上限，更早的窗口证据可能未加载。",
  "Window last WebCodex activity": "窗口最近 WebCodex 活动",
  "Session relation last linked": "会话关系最近关联",
  "Workspace action": "工作区动作",
  "Workspace action completed": "工作区动作已完成",
  "Workspace action failed": "工作区动作失败",
  "exact Session ledger": "精确会话 ledger",
  "Window observation": "窗口观察",
  "Project workspace ledger": "项目工作区 ledger",
  "Jobs running": "Job 运行中",
  Branch: "分支",
  Jobs: "任务",
  "What matters now": "当前重点",
  "Raw evidence": "原始证据",
  Evidence: "证据",
  "Session identity": "会话标识",
  "Linked Windows": "关联窗口",
  "No linked Windows in retained evidence.": "保留证据中没有关联窗口。",
  "No blocking attention in the loaded Session evidence.": "当前加载的会话证据中没有阻塞性待处理项。",
  "No current validation evidence": "没有当前验证证据",
  "Not run": "未运行",
  Task: "任务",
  Working: "工作中",
  "Progress from retained evidence": "基于保留证据的进度",
  Explored: "已探索",
  Edited: "已编辑",
  Ran: "已运行",
  Tested: "已测试",
  Reviewed: "已审查",
  "Current execution": "当前执行",
  "Session execution evidence": "会话执行证据",
  running: "运行中",
  live: "实时",
  "Recent progress": "最近进展",
  "Low-level calls grouped by intent": "按意图聚合低层调用",
  "Loading work evidence…": "正在加载工作证据…",
  "No retained activity in this Session.": "此会话中没有保留的活动记录。",
  "Agent progress report": "Agent 进展报告",
  "Session communication": "会话通信",
  "Work view": "工作视图",
  Workflow: "工作流",
  Collaboration: "协作",
  "retained messages": "条保留消息",
  "Loading Session messages…": "正在加载会话消息…",
  "ACK observed": "已 ACK",
  "Awaiting ACK": "等待 ACK",
  "ACK first observed": "首次 ACK",
  "Agent resolution": "处理回复",
  "Reply to": "回复",
  "Open · editable": "开放 · 可编辑/撤回",
  Collaborate: "协作",
  "Collaborate with this Session": "与此会话协作",
  "Leave retained guidance, questions, todos, or notes for the next turn.": "为下一轮留下可保留的指导、问题、待办或备注。",
  "Message kind": "消息类型",
  Progress: "进展",
  Risk: "风险",
  "Runner-owned Job execution": "Runner 托管的任务执行",
  "Agent / Session": "Agent / 会话",
  "No retained Session messages.": "没有保留的会话消息。",
  "Editing retained message": "正在编辑保留消息",
  "Cancel edit": "取消编辑",
  "Requires acknowledgement": "需要确认",
  Send: "发送",
  Save: "保存",
  Withdraw: "撤回",
  "Send a message to this work session…": "向此工作会话发送消息…",
  "Search work or paste a Session ID…": "搜索工作或粘贴会话 ID…",
  "Select a work Session": "选择一个工作会话",
  "Running work and attention requests appear first. Raw evidence stays one level deeper.": "正在运行的工作和待处理请求优先显示；原始证据保留在下一层。",
  "Exact Session lookup failed": "精确会话查询失败",
  "System evidence": "系统证据",
  "Infrastructure, Window observation and low-level evidence stay below task-oriented Work.": "基础设施、窗口观察和低层证据都位于任务导向的工作视图之下。",
  "Active jobs": "活动任务",
  "Observed windows": "已观察窗口",
  "Durable agents": "持久 Agent",
  "many-to-many Session evidence": "会话多对多观察证据",
  "runtime inventory": "运行时清单",
  "communication:read required": "需要 communication:read",
  "Runner fleet": "Runner 集群",
  "Execution capacity and source/build alignment.": "执行容量以及源码/构建对齐状态。",
  "Runner online": "Runner 在线",
  "jobs running": "个运行中任务",
  "Meaningful runtime status": "关键运行时状态",
  "Only evidence available from the current Runtime projection is shown.": "这里只显示当前运行时投影中有证据支持的状态。",
  "Open Window activity": "打开窗口活动",
  "Observed workflow": "观察到的工作流",
  "Each observed action is collapsed by default. Project and status stay visible; expand for bounded low-level evidence.": "每个观察动作默认折叠；项目与状态保持可见，展开后查看有界的低层证据。",
  Started: "开始时间",
  Duration: "耗时",
  "Service time": "服务耗时",
  Cycle: "调用周期",
  "builds observed": "已观察构建",
  "Source alignment": "源码对齐",
  "mismatched runners": "个不匹配 Runner",
  "mixed builds": "混合构建",
  "Window evidence": "窗口证据",
  "Observed Windows": "已观察窗口",
  "Observation evidence; Windows do not own Sessions.": "窗口只是观察证据，不拥有会话。",
  "Runner not observed": "未观察到 Runner",
  "No current Project evidence": "没有当前项目证据",
  "last observed": "最近观察",
  "active requests": "活动请求",
  "This Window is observation evidence. Linked Sessions remain Project-scoped resources and may be observed by other Windows too.": "此窗口只是观察证据。关联会话仍是项目范围资源，也可能被其他窗口观察。",
  "Linked Sessions": "关联会话",
  "Relations describe how this Window observed each Session; they are not ownership.": "关系描述此窗口如何观察每个会话，并不表示所有权。",
  "Workspace activity is shown on the exact Work / Project context, not inferred from Window calls.": "工作区活动只在精确的 Work / Project 上下文中展示，不从窗口调用推断。",
  "Job lifecycle is independent; observe_jobs calls do not imply Job state.": "Job 生命周期是独立真值；observe_jobs 调用本身不代表 Job 状态。",
  "Project not exposed in relation": "关系中未暴露项目",
  linked: "已关联",
  "Window with no current Session": "窗口当前没有关联会话",
  "Recent Window Activity": "最近窗口活动",
  "Raw tool evidence is disclosed here, below the Session relationships.": "原始工具证据在此处展开，位于会话关系之下。",
  "No Project": "无项目",
  "Session relations": "会话关系",
  "Select an observed Window": "选择一个已观察窗口",
  "Window Activity": "窗口活动",
  "Durable Agent diagnostics require communication:read.": "持久 Agent 诊断需要 communication:read。",
  "Runtime and Project views remain available under their independent authority scopes.": "运行时和项目视图仍按各自独立权限范围提供。",
  "Agent identity": "Agent 标识",
  "Agent identity, endpoint readiness and durable inbox state.": "Agent 标识、端点就绪状态和持久收件箱状态。",
  "No durable Agents are visible.": "没有可见的持久 Agent。",
  Create: "创建",
  "Profile revision": "配置版本",
  "Controller generation": "控制器代数",
  "Unresolved Wakes": "未解决唤醒",
  "Queued deliveries": "排队投递",
  "Browser Endpoint": "浏览器端点",
  "Browser Endpoint attached": "浏览器端点已附加",
  "No browser Endpoint": "未附加浏览器端点",
  "Endpoint binding is window-local control state; durable Agent identity remains server-owned.": "端点绑定是当前窗口的本地控制状态；持久 Agent 标识仍由服务器持有。",
  generation: "代数",
  lease: "租约",
  "No Endpoint is attached from this browser tab.": "此浏览器标签页尚未附加端点。",
  "Edit Agent Card": "编辑 Agent 卡片",
  "Transcript and Agent Inbox delivery are separate durable facts.": "对话记录与 Agent 收件箱投递是彼此独立的持久事实。",
  "New Conversation": "新建对话",
  "No durable Conversations.": "没有持久对话。",
  Human: "人工",
  Deliveries: "投递",
  "No retained messages in this Conversation.": "此对话中没有保留消息。",
  "Append a durable message…": "追加一条持久消息…",
  "Recipient Agent IDs (optional)": "接收 Agent ID（可选）",
  "Send as selected Agent": "以所选 Agent 身份发送",
  "Agent Inbox": "Agent 收件箱",
  "Inbox consumption requires the exact attached Endpoint generation.": "消费收件箱需要精确匹配当前附加端点代数。",
  "Attach this browser as the selected Agent to read its endpoint-scoped Inbox.": "将此浏览器附加为所选 Agent 后可读取其端点范围收件箱。",
  "No queued Inbox deliveries.": "没有排队中的收件箱投递。",
  "communication:manage is unavailable; diagnostics remain read-only.": "communication:manage 不可用；诊断保持只读。",
  "Select an Agent to inspect durable identity and endpoint readiness.": "选择 Agent 以查看持久标识和端点就绪状态。",
  endpoints: "端点",
  queued: "排队中",
  messages: "消息",
  Projects: "项目",
  projects: "项目",
  "All Runners": "全部 Runner",
  Project: "项目",
  Runner: "Runner",
  Path: "路径",
  "Adding project…": "正在添加项目…",
  Cancel: "取消",
  "Runtime overview unavailable": "运行时概览不可用",
  "No authorized Runners yet": "暂无获授权的 Runner",
  "GUI session available": "GUI 会话可用",
  "GUI session unavailable": "GUI 会话不可用",
  "This credential sees only its observation principal's Windows within currently authorized Projects. Global Window observation requires an administrator Runtime credential.": "当前凭证只能查看其观察主体在当前已授权项目内的窗口。全局窗口观察需要管理员运行时凭证。",
  "Window inventory is bounded; not all observed Windows are loaded.": "窗口清单受返回范围限制，未加载全部已观察窗口。",
  "Linked Session inventory is bounded; additional relations are not loaded.": "关联会话清单受返回范围限制，更多关系尚未加载。",
  "Server activity history is bounded; older Window activity is not loaded.": "服务器活动历史受返回范围限制，更早的窗口活动尚未加载。",
  "Show more activity": "显示更多活动",
  remaining: "剩余",
  "Project inventory is bounded. Narrow the search to find omitted Projects.": "项目清单受返回范围限制。请缩小搜索范围以查找未显示的项目。",
  "Project Session inventory is bounded; older retained Sessions are not loaded here.": "项目会话清单受返回范围限制，更早的已保留会话未在此加载。",
  "Recent Session inventory is bounded. Paste an exact Session ID to locate omitted work.": "近期会话清单受返回范围限制。可粘贴精确的 Session ID 定位未显示的工作。",
  "This Session is no longer visible to the current credential.": "当前凭证已无法查看此会话。",
  "Loading Window activity…": "正在加载窗口活动…",
  "Loading…": "正在加载…",
  "Refresh failed · showing previous data": "刷新失败 · 正在显示之前的数据",
  "open attention items": "个待处理项",
  "running Sessions": "个运行中会话",
  "Runtime workspace": "运行时工作区",
  "Connect to your workspace": "连接到工作区",
  "Runtime Bearer credential": "运行时 Bearer 凭证",
  Connect: "连接",
  "Project, Session, Window, communication and Runtime views remain constrained by the existing server authority checks.": "项目、会话、窗口、通信和运行时视图继续受现有服务器权限检查约束。",
  "Workspace views": "工作区视图",
  Appearance: "外观",
  System: "跟随系统",
  Light: "浅色",
  Dark: "深色",
  Lock: "锁定",
  "Collapse sidebar": "收起侧栏",
  "Expand sidebar": "展开侧栏",
  Preferences: "偏好设置",
  "Theme color": "主题色",
  "Accent color": "主题色",
  "Custom color": "自定义颜色"
});
Object.assign(sn, {
  "Durable work": "持久工作",
  "Work level": "工作层级",
  Goals: "目标",
  Sessions: "会话",
  "Search Goals": "搜索目标",
  "Search Goals…": "搜索目标…",
  "Filter Goals by Project": "按项目筛选目标",
  "All Projects": "全部项目",
  "Active Goals": "活动目标",
  "Goal history": "目标历史",
  "Goal inventory is bounded by the durable store.": "目标清单受持久存储上限约束。",
  "Loading Goals…": "正在加载目标…",
  "Goals require communication and Project read access.": "查看目标需要 communication 与 Project 读取权限。",
  "No matching Goals": "没有匹配的目标",
  "Loading Goal…": "正在加载目标…",
  "Select a Goal": "选择一个目标",
  "Goals are durable work truth above Sessions, workers, waits and Window evidence.": "Goal 是位于会话、Worker、Wait 和窗口证据之上的持久工作真值。",
  "Goal context": "目标上下文",
  "No Goal selected": "未选择目标",
  Goal: "目标",
  Plan: "计划",
  "steps completed": "步已完成",
  Controller: "控制 Agent",
  "Controller identity": "控制 Agent 标识",
  "Auto-resume": "自动续轮",
  "Continuation conditions": "续接条件",
  "Ready · not a guarantee": "已就绪 · 不保证自动开始",
  "Not ready · continue manually": "未就绪 · 可手动继续",
  "The chat application may require confirmation or delay continuation. Only a confirmed fresh turn proves this continuation ran.": "聊天应用可能需要确认或延迟续接。只有已确认的新回合才证明本次已继续。",
  Ready: "就绪",
  "Not ready": "未就绪",
  Continuity: "连续性",
  "Host delivery": "Host 投递",
  "Fresh turn": "新轮次",
  "Last resume": "最近续轮",
  "Goal activity": "目标活动",
  "observed Windows": "个已观察窗口",
  "linked Sessions": "个关联会话",
  Observed: "已观察",
  Workers: "Workers",
  "Join / fan-in": "汇合 / fan-in",
  "No correlated Sessions": "没有关联会话",
  "No correlated AgentTasks": "没有关联 AgentTask",
  "No Goal-scoped AgentWait": "没有 Goal 范围 AgentWait",
  "Goal Wait inventory is bounded.": "Goal Wait 清单受上限约束。",
  "No linked Window evidence": "没有关联窗口证据",
  "No execution binding": "没有执行绑定",
  "Task ID": "任务 ID",
  Execution: "执行",
  Recovery: "恢复策略",
  "Open worker Agent": "打开 Worker Agent",
  "Goal identity": "目标标识",
  Revision: "修订",
  Checkpoint: "检查点",
  Updated: "更新时间",
  "Completion conditions": "完成条件",
  "No authorized Project correlation": "没有已授权的项目关联",
  "No controller configured": "未配置控制 Agent",
  "Auto-resume ready": "自动续轮已就绪",
  "Auto-resume not ready": "自动续轮未就绪",
  active: "活动中",
  completed: "已完成",
  cancelled: "已取消",
  pending: "待处理",
  in_progress: "进行中",
  ready: "就绪",
  stalled: "停滞待处理",
  wake_queued: "Wake 已排队",
  dispatching: "正在投递",
  host_accepted: "Host 已接受",
  host_unknown: "Host 结果未知",
  resume_confirmed: "续轮已确认",
  not_configured: "未配置",
  not_applicable: "不适用",
  unavailable: "不可用",
  not_started: "未开始",
  accepted: "已接受",
  unknown: "未知",
  not_confirmed: "未确认",
  confirmed: "已确认",
  any: "ANY",
  all: "ALL",
  waiting: "等待中",
  triggered: "已触发",
  resumed: "已恢复"
});
Object.assign(sn, {
  Activity: "活动",
  "Live work": "实时工作",
  "Project filter": "项目筛选",
  "All project workspaces": "全部项目",
  "Search Windows": "搜索窗口",
  "Search active tool, Project, Runner, or Window ID…": "搜索活动工具、项目、Runner 或窗口标识…",
  Windows: "窗口",
  "Observed activity": "已观察活动",
  "No Project evidence": "暂无项目证据",
  "Runner not observed": "未观察到 Runner",
  observe: "观察",
  "Window activity refresh failed; showing previous observations.": "窗口活动刷新失败，正在显示上一次观察结果。",
  "Window activity unavailable": "窗口活动不可用",
  "No matching Windows": "没有匹配的窗口",
  "No matching work Sessions": "没有匹配的工作会话",
  "Session filter": "会话筛选",
  "All calls": "全部调用",
  "No calls in this Session": "此会话没有可显示的调用",
  "Window inventory is bounded; not all observed Windows are loaded.": "窗口清单受返回范围限制，部分已观察窗口尚未加载。",
  "Observed Window": "已观察窗口",
  "WebCodex request active now": "当前有 WebCodex 请求正在执行",
  "Inactive for": "距离上次活动",
  "last observed": "最后观察",
  Idle: "空闲",
  "Window summary": "窗口概览",
  "Primary workspace": "主工作区",
  "Not observed": "未观察到",
  "Linked Session evidence": "关联会话证据",
  "Project not exposed in relation": "关联关系未暴露项目",
  linked: "已关联",
  "No explicit Session link": "没有显式会话关联",
  "Select an observed Window": "选择一个已观察窗口",
  "Window activity is shown even when no Workflow Session exists.": "即使不存在 Workflow Session，也会显示该窗口的真实活动。",
  "Window context": "窗口上下文",
  ACTIVE: "活动中",
  IDLE: "空闲",
  "A WebCodex request is currently executing in this Window.": "当前有 WebCodex 请求正在此窗口中执行。",
  "No WebCodex request for": "已无 WebCodex 请求",
  "Current work": "当前工作",
  Peer: "协作窗口",
  Workspace: "工作区",
  "Last activity": "最近活动",
  Relations: "关联",
  Source: "来源",
  "Session links are optional evidence. Window activity remains visible without them.": "会话关联只是可选证据；即使没有会话关联，窗口活动仍然保持可见。",
  "Every observed WebCodex request is shown, including observe and diagnostic actions.": "显示该窗口观察到的每一次 WebCodex 请求，包括观察与诊断动作。",
  Observe: "观察",
  "Filter by Project name, Runner, or workspace path": "按项目名称、Runner 或工作区路径筛选",
  "workspace path unavailable": "工作区路径不可用",
  workspaces: "个工作区",
  worktrees: "个工作树",
  "Session links": "会话关联",
  "View workspaces and activity": "查看工作区与活动",
  "Recent Windows whose latest Project evidence belongs to this project.": "显示最近一次项目证据属于此项目的窗口。",
  "Workspace not observed": "未观察到工作区",
  "No Window activity observed for this project.": "尚未观察到此项目的窗口活动。",
  Workspaces: "工作区",
  "The primary checkout and its managed worktrees belong to one human project.": "主 checkout 与 managed worktree 归属于同一个人类可理解的项目。",
  "Sessions are optional relations for this exact workspace, not the project identity.": "会话只是这个精确工作区的可选关联，不是项目身份。",
  "No Workflow Sessions retained for this workspace.": "此工作区没有保留的 Workflow Session。",
  "Window collaboration": "窗口协作",
  "Peer identity": "协作身份",
  "Peer identity belongs to this Window directly and does not require a Workflow Session.": "协作身份直接属于这个窗口，不依赖 Workflow Session。",
  "Session list unavailable. Check access to this Project.": "会话列表不可用，请检查此项目的访问权限。"
});
Object.assign(sn, {
  "Project information unavailable": "暂无项目信息",
  Completed: "已完成",
  "Runner unavailable": "执行端信息暂不可用",
  "Search windows or projects…": "搜索窗口或项目…",
  "Select a window": "选择一个窗口"
});
Object.assign(sn, {
  "Tool calls": "工具调用",
  "Each call is shown separately, from first to last.": "按执行顺序逐条展示，从第一条到最近一条。",
  "Earlier calls are not available in this view. Only retained activity is shown.": "更早的调用已不在当前展示范围内，仅展示保留的记录。",
  "Activity order": "活动排序",
  "Newest first": "最新在前",
  "Oldest first": "最早在前",
  Succeeded: "成功",
  Failed: "失败",
  "No tool calls yet": "暂无工具调用",
  "Choose a window to see its tool calls.": "选择左侧窗口，查看逐条工具调用。"
});
Object.assign(sn, {
  "Window views": "窗口视图",
  "Work Sessions": "工作会话",
  "Sessions in this Window": "此窗口中的工作会话",
  "Work Session": "工作会话",
  "No linked work Sessions": "没有关联工作会话",
  "This Window has not recorded an explicit Workflow Session relation yet.": "这个窗口尚未记录明确的 Workflow Session 关联。",
  "Session relations are bounded; older linked Sessions may be omitted.": "会话关联记录受范围上限约束，更早的关联会话可能未展示。",
  "The selected Session project is not available to this workspace.": "当前工作区无法访问所选会话对应的项目。",
  "Window relation": "窗口关联",
  "Window link": "窗口关联",
  "Recorded in this Window": "记录于此窗口",
  "Last linked": "最近关联",
  "Session activity": "会话活动",
  "Complete retained evidence for the selected Workflow Session.": "展示所选 Workflow Session 的完整保留活动证据。",
  "Loading Session activity…": "正在加载会话活动…",
  "Session activity unavailable": "会话活动不可用",
  "Linked Windows": "关联窗口",
  Collaboration: "协作",
  "Reserved for the next Window-level collaboration design.": "此位置保留给下一步的窗口级协作设计。"
});
Object.assign(sn, {
  "Background job": "后台任务",
  "Background running": "后台运行",
  Observing: "观察",
  completed: "已完成",
  failed: "失败",
  stopped: "已停止",
  lost: "已丢失",
  timeout: "超时",
  timed_out: "超时",
  cancelled: "已取消",
  recovering: "恢复中",
  queued: "排队中",
  running: "运行中"
});
Object.assign(sn, {
  Projects: "项目",
  "All projects": "全部项目",
  "No Window activity": "暂无窗口活动"
});
Object.assign(sn, {
  Machine: "机器",
  Directory: "目录",
  "Project address": "项目地址",
  "Latest activity": "最近活动"
});
Object.assign(sn, {
  "Loading recent activity…": "正在加载最近活动…",
  "Loading history…": "正在加载历史记录…"
});
Object.assign(sn, { "First active": "首次活跃" });
Object.assign(sn, { Duration: "耗时" });
Object.assign(sn, {
  Acknowledged: "已确认",
  "Included in tool result": "已附入工具结果",
  Saved: "已保存",
  You: "你",
  "This Window": "此窗口",
  "This Window → Peer Window": "此窗口 → 其他窗口",
  "Peer Window": "其他窗口",
  "High priority": "高优先级",
  "Low priority": "低优先级",
  Normal: "普通",
  "Message could not be sent. Send it again.": "消息未能发送，请重新发送。",
  "Context is no longer available. Choose a Session or All calls, then send again.": "上下文已不可用。请重新选择 Session 或全部调用后再发送。",
  "Collaboration is unavailable for this Window.": "此窗口当前无法协作。",
  "Message could not be sent.": "消息未能发送。",
  Collaboration: "协作",
  "Leave a message or instruction for this Window": "给这个窗口留下消息或指令",
  "View new messages": "查看新消息",
  Context: "上下文",
  "The current access key cannot collaborate (session:collaborate is required). Reconnect with a collaboration-enabled key.": "当前访问密钥没有协作权限（需要 session:collaborate）。请使用支持协作的访问密钥重新连接。",
  "This Window is not available to the current access key.": "此窗口对当前访问密钥不可用。",
  "Messages could not be refreshed.": "暂时无法刷新消息。",
  "ACK requested": "要求确认",
  "No messages yet": "暂无消息",
  "Send a note or instruction to this Window.": "在这里给这个窗口留下消息或指令。",
  "Showing recent messages": "当前显示最近的消息",
  Type: "类型",
  "Message type": "消息类型",
  Guidance: "指令",
  Note: "备注",
  Question: "问题",
  Todo: "待办",
  Priority: "优先级",
  "Message priority": "消息优先级",
  High: "高",
  Low: "低",
  "Require ACK": "要求确认",
  "Current Session": "关联当前 Session",
  "Message this Window": "给这个窗口发消息",
  "Send a message to this Window…": "给这个窗口发消息…",
  "⌘/Ctrl + Enter to send": "⌘/Ctrl + Enter 发送",
  "Sending…": "发送中…",
  Retry: "重试",
  Send: "发送",
  "Send status unknown. Retry this message.": "发送状态未知，请重试此消息。",
  Proposal: "建议",
  Answer: "回答",
  Decision: "决定",
  Risk: "风险",
  Progress: "进展",
  "Messages: {count}": "消息：{count}",
  "Window details": "窗口详情"
});
function VN(a, o = "en") {
  return o === "zh-CN" ? sn[a] || a : qN(a, o) || a;
}
function $N({ color: a, onChange: o, language: i }) {
  const l = (c) => VN(c, i);
  return /* @__PURE__ */ (0, g.jsx)(HN, {
    color: a,
    onChange: o,
    label: l("Accent color"),
    customLabel: l("Custom color"),
    colorLabel: l
  });
}
var YN = new URL("data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%2064%2064'%20fill='none'%3e%3crect%20x='2'%20y='2'%20width='60'%20height='60'%20rx='17'%20fill='%23202329'/%3e%3crect%20x='2.75'%20y='2.75'%20width='58.5'%20height='58.5'%20rx='16.25'%20stroke='%23FFFFFF'%20stroke-opacity='.18'%20stroke-width='1.5'/%3e%3cpath%20d='M18%2016.5h27.5a5%205%200%200%201%205%205V38'%20stroke='%23FFFFFF'%20stroke-opacity='.42'%20stroke-width='2.5'%20stroke-linecap='round'/%3e%3crect%20x='12.5'%20y='22.5'%20width='38'%20height='29'%20rx='7'%20fill='%23F7F8FA'/%3e%3cpath%20d='m22.5%2032%206.5%205.5-6.5%205.5'%20stroke='%23202329'%20stroke-width='3.5'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3cpath%20d='M34%2043h8.5'%20stroke='%23202329'%20stroke-width='3.5'%20stroke-linecap='round'/%3e%3c/svg%3e", "" + import.meta.url).href;
function GN() {
  return /* @__PURE__ */ (0, g.jsx)("img", {
    className: "brand-mark",
    src: YN,
    alt: "",
    "aria-hidden": "true"
  });
}
var Py = {
  overview: {},
  diagnostics: {},
  devices: [],
  projects: [],
  activity: [],
  errors: {
    overview: "",
    devices: "",
    projects: "",
    activity: ""
  }
};
function Da(a) {
  return a && typeof a == "object" && !Array.isArray(a) ? a : {};
}
function im(a) {
  return Array.isArray(a) ? a.map(Da) : [];
}
function We(a) {
  if (a == null || a === "") return "—";
  if (typeof a == "object") try {
    return JSON.stringify(a);
  } catch {
    return "—";
  }
  return String(a);
}
function WN(a) {
  return Array.isArray(a) ? a.filter((o) => typeof o == "string") : a && typeof a == "object" ? Object.entries(a).filter(([, o]) => o === !0).map(([o]) => o).sort() : [];
}
function PN(a) {
  const o = We(a).toLowerCase();
  return /(error|failed|offline|incompatible|mismatch|disabled|blocked|unavailable)/.test(o) ? o.includes("disabled") ? "warning" : "error" : /(warning|unknown|pending|degraded|limited)/.test(o) ? "warning" : /(ok|ready|online|compatible|enabled|healthy|available|true)/.test(o) ? "good" : "info";
}
function IN(a, o) {
  const i = Da(o), l = Da(i.section_status), c = { ...a.errors }, d = (x) => {
    const b = Da(l[x]);
    return c[x] = b.status === "error" ? We(b.error || `${x} unavailable`) : "", !!c[x];
  }, f = d("overview"), m = d("devices"), v = d("projects"), y = d("activity");
  return {
    overview: f ? a.overview : Da(i.overview),
    diagnostics: f ? a.diagnostics : Da(i.diagnostics),
    devices: m ? a.devices : im(i.devices),
    projects: v ? a.projects : im(i.projects),
    activity: y ? a.activity : im(i.activity),
    errors: c
  };
}
var XN = "/api/admin/", Iy = 1e4, iw = "webcodex.admin.appearance.v1", Sc = {
  client_id: "",
  project_id: "",
  name: "",
  description: "",
  path: "",
  allow_patch: !0,
  git_init: !1,
  template: "",
  adopt_existing_empty: !1,
  confirm_project: ""
}, QN = {
  invalid_request: "The request is invalid. Review the fields and try again.",
  revision_conflict: "Project state changed. The dashboard was refreshed; confirm again using the latest revision.",
  active_jobs_conflict: "The project has active jobs. No jobs were stopped; refresh and retry after they finish.",
  idempotency_conflict: "This retry no longer matches its original operation. Start a new operation.",
  unsupported_runner_version: "The Agent does not support project lifecycle operations.",
  agent_unavailable: "The Agent is unavailable. Current dashboard data is preserved; retry this same operation later.",
  operation_indeterminate: "The Agent may have completed the operation. Refresh state first, then retry this same operation context rather than creating a new mutation.",
  operation_failed: "The operation failed safely. Internal details were not displayed.",
  network_error: "Network failure. Current data is preserved; retry this same operation.",
  unauthorized: "Administrator authentication required."
};
function KN() {
  try {
    const a = localStorage.getItem(iw);
    if (a === "light" || a === "dark") return a;
  } catch {
  }
  return "system";
}
async function lw(a) {
  try {
    return await a.json();
  } catch {
    return null;
  }
}
async function ZN(a, o) {
  const i = await fetch("/api/admin/dashboard", {
    method: "POST",
    headers: {
      Authorization: "Bearer " + a,
      "Content-Type": "application/json"
    },
    body: "{}",
    signal: o
  }), l = await lw(i);
  if (!i.ok) throw new rw(i.status, "dashboard_failed");
  return l;
}
async function FN(a, o, i, l) {
  const c = await fetch(`${XN}projects/${a}`, {
    method: "POST",
    headers: {
      Authorization: "Bearer " + o,
      "Content-Type": "application/json"
    },
    body: JSON.stringify(i),
    signal: l
  }), d = Da(await lw(c));
  if (c.ok) return d;
  if (c.status === 401 || c.status === 403) throw new zc(c.status, "unauthorized");
  const f = Da(d.error).code, m = /* @__PURE__ */ new Set([
    "invalid_request",
    "revision_conflict",
    "active_jobs_conflict",
    "idempotency_conflict",
    "unsupported_runner_version",
    "agent_unavailable",
    "operation_indeterminate",
    "operation_failed"
  ]);
  throw new zc(c.status, typeof f == "string" && m.has(f) ? f : "operation_failed", typeof d.active_jobs == "number" ? d.active_jobs : void 0);
}
function er({ value: a }) {
  const o = PN(a);
  return /* @__PURE__ */ (0, g.jsx)(Ml, {
    className: "admin-status-badge",
    size: "sm",
    radius: "xl",
    variant: "light",
    "data-tone": o,
    color: o === "warning" ? "yellow" : o === "error" ? "red" : "gray",
    children: We(a)
  });
}
function vl({ id: a, eyebrow: o, title: i, error: l, actions: c, children: d }) {
  return /* @__PURE__ */ (0, g.jsxs)("section", {
    id: a,
    className: "admin-section",
    "aria-labelledby": `${a}-title`,
    children: [
      /* @__PURE__ */ (0, g.jsxs)("div", {
        className: "section-heading",
        children: [/* @__PURE__ */ (0, g.jsxs)("div", { children: [/* @__PURE__ */ (0, g.jsx)("span", {
          className: "eyebrow",
          children: o
        }), /* @__PURE__ */ (0, g.jsx)("h2", {
          id: `${a}-title`,
          children: i
        })] }), c]
      }),
      l && /* @__PURE__ */ (0, g.jsx)(bo, {
        color: "red",
        role: "alert",
        className: "section-error",
        children: l
      }),
      d
    ]
  });
}
function Xy({ label: a, headings: o, rows: i, empty: l }) {
  return i.length ? /* @__PURE__ */ (0, g.jsx)(pt.ScrollContainer, {
    className: "table-wrap",
    type: "native",
    minWidth: 960,
    role: "region",
    "aria-label": `${a} table. Scroll horizontally to view all fields.`,
    tabIndex: 0,
    children: /* @__PURE__ */ (0, g.jsxs)(pt, {
      stickyHeader: !0,
      className: "admin-data-table",
      children: [/* @__PURE__ */ (0, g.jsx)(pt.Thead, { children: /* @__PURE__ */ (0, g.jsx)(pt.Tr, { children: o.map((c) => /* @__PURE__ */ (0, g.jsx)(pt.Th, { children: c }, c)) }) }), /* @__PURE__ */ (0, g.jsx)(pt.Tbody, { children: i.map((c, d) => /* @__PURE__ */ (0, g.jsx)(pt.Tr, { children: c.map((f, m) => /* @__PURE__ */ (0, g.jsx)(pt.Td, { children: f }, m)) }, d)) })]
    })
  }) : /* @__PURE__ */ (0, g.jsx)("div", {
    className: "empty-state",
    children: l
  });
}
function JN({ project: a, onAction: o }) {
  const i = (0, S.useRef)(null), l = We(a.name || a.id);
  return /* @__PURE__ */ (0, g.jsxs)(St, {
    position: "bottom-end",
    shadow: "md",
    width: 176,
    children: [/* @__PURE__ */ (0, g.jsx)(St.Target, { children: /* @__PURE__ */ (0, g.jsx)(It, {
      ref: i,
      variant: "subtle",
      color: "gray",
      size: "xs",
      rightSection: /* @__PURE__ */ (0, g.jsx)(xN, { size: 16 }),
      "aria-label": `Actions for ${l}`,
      children: "Actions"
    }) }), /* @__PURE__ */ (0, g.jsx)(St.Dropdown, { children: [
      "enable",
      "disable",
      "unregister"
    ].map((c) => /* @__PURE__ */ (0, g.jsx)(St.Item, {
      color: c === "unregister" ? "red" : void 0,
      disabled: Da(a.actions)[c] !== !0,
      onClick: () => {
        i.current && o(c, a, i.current);
      },
      children: c[0].toUpperCase() + c.slice(1)
    }, c)) })]
  });
}
function e3() {
  const [a, o] = (0, S.useState)(KN), [i, l] = (0, S.useState)(IS), [c, d] = (0, S.useState)(""), [f, m] = (0, S.useState)(!1), [v, y] = (0, S.useState)(!1), x = (0, S.useRef)(0), b = (0, S.useRef)(!1), [p, w] = (0, S.useState)(""), [A, C] = (0, S.useState)(Py), [T, R] = (0, S.useState)("Locked"), [O, _] = (0, S.useState)(""), [j, L] = (0, S.useState)(!0), [z, $] = (0, S.useState)("overview-section"), [k, Q] = (0, S.useState)(null), [X, oe] = (0, S.useState)(Sc), [re, ne] = (0, S.useState)(""), [F, me] = (0, S.useState)(!1), H = (0, S.useRef)(!1), I = (0, S.useRef)(null), W = (0, S.useRef)(null), Z = (0, S.useRef)(null), ae = (0, S.useRef)(null), be = () => {
    H.current = !1, Q(null);
  }, de = (V = "Locked.") => {
    x.current += 1, b.current = !1, y(!1), ae.current?.closeForSessionEnd(), Z.current?.lock(), W.current?.lock(V), C(Py), d(""), me(!1), ne(""), _("");
  };
  W.current || (W.current = new zN({
    request: ZN,
    render: (V) => C((pe) => IN(pe, V)),
    showAuthenticated: () => {
      m(!0), w("");
    },
    showLocked: (V) => {
      m(!1), w(V), R("Locked");
    },
    setStatus: R,
    showError: _,
    clearError: () => _(""),
    onUnauthorized: () => de("Administrator authentication required.")
  })), Z.current || (Z.current = new kN({
    request: FN,
    keyFactory: () => crypto.randomUUID(),
    refresh: () => W.current.invalidateAndRefresh(),
    outcome: (V) => {
      R(V), ae.current?.cancel();
    },
    error: (V) => ne(QN[V]),
    pending: (V, pe) => me(pe),
    lock: (V) => de(V)
  })), ae.current || (ae.current = new LN(Z.current, {
    close: be,
    isOpen: () => H.current,
    clearSensitive: () => oe(Sc),
    restoreFocus: () => {
      const V = I.current;
      I.current = null, window.setTimeout(() => {
        V?.isConnected && V.focus();
      }, 0);
    }
  })), (0, S.useEffect)(() => {
    const V = window.matchMedia?.("(prefers-color-scheme: dark)"), pe = () => {
      const Te = a === "system" ? V?.matches ? "dark" : "light" : a;
      document.documentElement.dataset.theme = a, document.documentElement.dataset.resolvedTheme = Te, lN(i, Te), document.querySelector('meta[name="theme-color"]')?.setAttribute("content", Te === "dark" ? "#0b0b0c" : "#f5f5f5");
    };
    pe();
    try {
      localStorage.setItem(iw, a);
    } catch {
    }
    return V?.addEventListener?.("change", pe), () => V?.removeEventListener?.("change", pe);
  }, [a, i]), (0, S.useEffect)(() => {
    const V = (pe) => {
      const Te = pe instanceof StorageEvent ? pe.key === "webcodex.ui.accent.v1" ? ma(pe.newValue) : null : ma(pe.detail);
      Te && l(Te);
    };
    return window.addEventListener(El, V), window.addEventListener("storage", V), () => {
      window.removeEventListener(El, V), window.removeEventListener("storage", V);
    };
  }, []), (0, S.useEffect)(() => {
    const V = () => de();
    return window.addEventListener("pagehide", V), () => {
      window.removeEventListener("pagehide", V), ae.current?.closeForSessionEnd(), Z.current?.dispose(), W.current?.dispose();
    };
  }, []), (0, S.useEffect)(() => {
    if (!k || k.kind === "register" || k.kind === "create" || !re.startsWith("Project state changed")) return;
    const V = A.projects.find((pe) => String(pe.id || "") === k.target);
    V && V.revision !== k.project?.revision && Q((pe) => pe?.target === k.target ? {
      ...pe,
      project: V
    } : pe);
  }, [
    A.projects,
    k,
    re
  ]), (0, S.useEffect)(() => {
    if (!f) return;
    let V = 0;
    const pe = () => {
      V = 0;
      const je = [
        "overview-section",
        "devices-section",
        "projects-section",
        "diagnostics-section"
      ].map((dt) => document.getElementById(dt)).filter((dt) => !!dt), Be = document.querySelector(".workspace-toolbar")?.getBoundingClientRect(), Oe = Math.max(110, (Be?.bottom || 0) + 24), rt = window.scrollY > 0 && window.scrollY + window.innerHeight >= document.documentElement.scrollHeight - 2 ? je.at(-1) : je.filter((dt) => dt.getBoundingClientRect().top <= Oe).at(-1) || je[0];
      rt && $(rt.id);
    }, Te = () => {
      V || (V = window.requestAnimationFrame(pe));
    };
    return window.addEventListener("scroll", Te, { passive: !0 }), window.addEventListener("resize", Te), () => {
      window.removeEventListener("scroll", Te), window.removeEventListener("resize", Te), window.cancelAnimationFrame(V);
    };
  }, [f]);
  const we = async (V) => {
    if (V.preventDefault(), b.current) return;
    const pe = c.trim();
    if (d(""), !pe) return;
    const Te = ++x.current;
    b.current = !0, y(!0), w(""), ae.current.closeForSessionEnd(), Z.current.beginSession(pe);
    try {
      await W.current.beginSession(pe), Te === x.current && j && W.current.startAutoRefresh(Iy);
    } finally {
      Te === x.current && (b.current = !1, y(!1));
    }
  }, Ae = (V) => {
    L(V), V ? W.current.startAutoRefresh(Iy) : W.current.stopAutoRefresh();
  }, M = (V) => {
    l(V), rN(V);
  }, K = () => o((V) => V === "system" ? "light" : V === "light" ? "dark" : "system"), se = (V, pe) => {
    const Te = `${V}:${crypto.randomUUID()}`;
    ae.current.open(Te), I.current = pe, oe(Sc), ne(""), H.current = !0, Q({
      kind: V,
      target: Te
    });
  }, le = (V, pe, Te) => {
    const je = String(pe.id || ""), Be = {
      project: je,
      expected_revision: String(pe.revision || ""),
      confirm: !0
    }, Oe = Z.current.start(V, je, Be);
    ae.current.open(je, Oe, Be), I.current = Te, oe(Sc), ne(""), H.current = !0, Q({
      kind: V,
      target: je,
      project: pe
    });
  }, he = (V) => {
    if (V.preventDefault(), !k || F) return;
    const { kind: pe, target: Te } = k;
    let je;
    if (pe === "register" || pe === "create" ? (je = {
      client_id: X.client_id.trim(),
      project_id: X.project_id.trim(),
      name: X.name.trim(),
      description: X.description.trim() || null,
      path: X.path.trim(),
      allow_patch: X.allow_patch
    }, pe === "create" && Object.assign(je, {
      git_init: X.git_init,
      template: X.template.trim() || null,
      adopt_existing_empty: X.adopt_existing_empty
    })) : je = {
      project: Te,
      expected_revision: String(k.project?.revision || ""),
      confirm: !0
    }, pe === "unregister" && X.confirm_project !== Te) {
      ne("Type the full runtime project ID to confirm.");
      return;
    }
    ne(""), ae.current.submit(pe, je);
  }, ie = (V, pe) => oe((Te) => ({
    ...Te,
    [V]: pe
  })), ye = (V) => A.errors[V], ce = A.overview, ve = [
    [
      "Server",
      We(ce.version),
      `${We(ce.build_commit)} · ${We(ce.authority_mode)}`
    ],
    [
      "Runners",
      `${We(ce.runners_online || 0)} / ${We(ce.runners_total || 0)}`,
      "online now"
    ],
    [
      "Projects",
      `${We(ce.projects_online || 0)} / ${We(ce.projects_total || 0)}`,
      "ready for work"
    ],
    [
      "Jobs",
      We(ce.active_jobs || 0),
      We(ce.version_compatibility || "compatibility unknown")
    ]
  ];
  return /* @__PURE__ */ (0, g.jsxs)("div", {
    className: "admin-shell ui-canvas",
    children: [
      /* @__PURE__ */ (0, g.jsxs)("aside", {
        className: "admin-rail ui-surface",
        "aria-label": "WebCodex Admin navigation",
        children: [
          /* @__PURE__ */ (0, g.jsxs)("div", {
            className: "product-identity",
            children: [/* @__PURE__ */ (0, g.jsx)(GN, {}), /* @__PURE__ */ (0, g.jsxs)("div", { children: [/* @__PURE__ */ (0, g.jsx)("strong", { children: "WebCodex" }), /* @__PURE__ */ (0, g.jsx)("span", { children: "Admin console" })] })]
          }),
          /* @__PURE__ */ (0, g.jsx)("nav", {
            className: "section-nav",
            "aria-label": "Dashboard sections",
            children: [
              [
                "overview-section",
                "Overview",
                EN
              ],
              [
                "devices-section",
                "Runners",
                ON
              ],
              [
                "projects-section",
                "Projects",
                CN
              ],
              [
                "diagnostics-section",
                "Diagnostics",
                jN
              ]
            ].map(([V, pe, Te]) => /* @__PURE__ */ (0, g.jsxs)("a", {
              href: `#${V}`,
              "aria-current": z === V ? "location" : void 0,
              "aria-label": pe,
              title: pe,
              onClick: () => $(V),
              children: [/* @__PURE__ */ (0, g.jsx)(Te, {
                size: 18,
                "aria-hidden": "true"
              }), /* @__PURE__ */ (0, g.jsx)("span", { children: pe })]
            }, V))
          }),
          /* @__PURE__ */ (0, g.jsxs)("div", {
            className: "rail-footer",
            children: [
              /* @__PURE__ */ (0, g.jsxs)("p", {
                className: "rail-status",
                children: [/* @__PURE__ */ (0, g.jsx)("span", { "aria-hidden": "true" }), " Control plane"]
              }),
              /* @__PURE__ */ (0, g.jsxs)(It, {
                variant: "subtle",
                color: "gray",
                onClick: K,
                title: `Appearance: ${a}`,
                "aria-label": `Appearance: ${a}`,
                className: "appearance-button",
                leftSection: a === "dark" ? /* @__PURE__ */ (0, g.jsx)(TN, { size: 16 }) : /* @__PURE__ */ (0, g.jsx)(NN, { size: 16 }),
                children: ["Appearance · ", a]
              }),
              /* @__PURE__ */ (0, g.jsx)($N, {
                color: i,
                onChange: M,
                language: "en"
              })
            ]
          })
        ]
      }),
      /* @__PURE__ */ (0, g.jsx)("main", {
        className: "admin-workspace",
        children: f ? /* @__PURE__ */ (0, g.jsxs)(g.Fragment, { children: [
          /* @__PURE__ */ (0, g.jsxs)("header", {
            className: "workspace-toolbar ui-surface",
            children: [/* @__PURE__ */ (0, g.jsxs)("div", {
              className: "page-context",
              children: [/* @__PURE__ */ (0, g.jsx)("span", {
                className: "eyebrow",
                children: "Control plane"
              }), /* @__PURE__ */ (0, g.jsx)("h1", { children: "Operations" })]
            }), /* @__PURE__ */ (0, g.jsxs)("div", {
              className: "toolbar-actions",
              children: [
                /* @__PURE__ */ (0, g.jsx)(Ml, {
                  color: "gray",
                  variant: "light",
                  className: "status",
                  role: "status",
                  children: T
                }),
                /* @__PURE__ */ (0, g.jsx)(kl, {
                  label: "Live",
                  checked: j,
                  onChange: (V) => Ae(V.currentTarget.checked),
                  size: "sm"
                }),
                /* @__PURE__ */ (0, g.jsx)(It, {
                  variant: "default",
                  leftSection: /* @__PURE__ */ (0, g.jsx)(_N, { size: 15 }),
                  onClick: () => {
                    W.current.refresh();
                  },
                  children: "Refresh"
                }),
                /* @__PURE__ */ (0, g.jsx)(It, {
                  variant: "subtle",
                  color: "gray",
                  onClick: () => de(),
                  children: "Lock"
                })
              ]
            })]
          }),
          O && /* @__PURE__ */ (0, g.jsx)(bo, {
            color: "red",
            role: "alert",
            className: "workspace-error",
            children: O
          }),
          /* @__PURE__ */ (0, g.jsx)(vl, {
            id: "overview-section",
            eyebrow: "At a glance",
            title: "System flow",
            error: ye("overview"),
            children: /* @__PURE__ */ (0, g.jsx)("div", {
              className: "overview-strip",
              children: ve.map(([V, pe, Te], je) => /* @__PURE__ */ (0, g.jsxs)("div", {
                className: "overview-item",
                children: [
                  /* @__PURE__ */ (0, g.jsx)("span", { children: V }),
                  /* @__PURE__ */ (0, g.jsx)("strong", {
                    className: je ? "metric" : "",
                    children: pe
                  }),
                  /* @__PURE__ */ (0, g.jsx)("small", { children: Te })
                ]
              }, V))
            })
          }),
          /* @__PURE__ */ (0, g.jsx)(vl, {
            id: "devices-section",
            eyebrow: "Connected fleet",
            title: "Runners",
            error: ye("devices"),
            children: /* @__PURE__ */ (0, g.jsx)(Xy, {
              label: "Connected Runners",
              empty: "No Runners observed.",
              headings: [
                "Name",
                "Client",
                "Status",
                "Transport",
                "Host",
                "Last seen",
                "Capabilities",
                "Projects",
                "Jobs",
                "Protocol",
                "Build alignment"
              ],
              rows: A.devices.map((V) => [
                We(V.display_name),
                /* @__PURE__ */ (0, g.jsx)("code", { children: We(V.client_id) }),
                /* @__PURE__ */ (0, g.jsx)(er, { value: V.status }),
                We(V.transport),
                We(V.hostname),
                /* @__PURE__ */ (0, g.jsx)("code", { children: We(V.last_seen) }),
                We(WN(V.capabilities).join(", ")),
                We(V.project_count),
                We(V.active_jobs),
                /* @__PURE__ */ (0, g.jsx)(er, { value: V.protocol_compatibility || V.compatibility }),
                /* @__PURE__ */ (0, g.jsx)("span", {
                  title: "Build identity is diagnostic, not functional compatibility",
                  children: We(V.build_alignment)
                })
              ])
            })
          }),
          /* @__PURE__ */ (0, g.jsx)(vl, {
            id: "projects-section",
            eyebrow: "Runtime registry",
            title: "Projects",
            error: ye("projects"),
            actions: /* @__PURE__ */ (0, g.jsxs)("div", {
              className: "section-actions",
              children: [/* @__PURE__ */ (0, g.jsx)(It, {
                variant: "default",
                onClick: (V) => se("register", V.currentTarget),
                children: "Register"
              }), /* @__PURE__ */ (0, g.jsx)(It, {
                className: "admin-primary",
                leftSection: /* @__PURE__ */ (0, g.jsx)(RN, { size: 15 }),
                onClick: (V) => se("create", V.currentTarget),
                children: "Create project"
              })]
            }),
            children: /* @__PURE__ */ (0, g.jsx)(Xy, {
              label: "Projects",
              empty: "No projects registered.",
              headings: [
                "Runtime project",
                "Name",
                "Client",
                "Path",
                "Lifecycle",
                "Jobs",
                "Git",
                "Patch",
                "Shell profile",
                "Protocol",
                "Build alignment",
                "Console",
                "Actions"
              ],
              rows: A.projects.map((V) => [
                /* @__PURE__ */ (0, g.jsx)("code", { children: We(V.id) }),
                uN({
                  name: String(V.name || ""),
                  path: String(V.path || ""),
                  id: String(V.id || "")
                }),
                We(V.client_id),
                /* @__PURE__ */ (0, g.jsx)("code", {
                  title: Tm(String(V.path || "")),
                  children: We(Tm(String(V.path || "")))
                }),
                /* @__PURE__ */ (0, g.jsx)(er, { value: V.lifecycle_status || V.readiness }),
                We(V.active_jobs),
                /* @__PURE__ */ (0, g.jsx)(er, { value: V.git_available }),
                /* @__PURE__ */ (0, g.jsx)(er, { value: V.allow_patch }),
                /* @__PURE__ */ (0, g.jsx)(er, { value: V.shell_profile_status }),
                /* @__PURE__ */ (0, g.jsx)(er, { value: V.protocol_compatibility || V.compatibility }),
                /* @__PURE__ */ (0, g.jsx)("span", {
                  title: "Build identity is diagnostic, not functional compatibility",
                  children: We(V.build_alignment)
                }),
                We(V.console_hint),
                /* @__PURE__ */ (0, g.jsx)(JN, {
                  project: V,
                  onAction: le
                })
              ])
            })
          }),
          /* @__PURE__ */ (0, g.jsxs)("div", {
            className: "details-grid",
            children: [/* @__PURE__ */ (0, g.jsxs)(vl, {
              id: "diagnostics-section",
              eyebrow: "System evidence",
              title: "Diagnostics",
              children: [/* @__PURE__ */ (0, g.jsx)("dl", { children: Object.entries(A.diagnostics).map(([V, pe]) => /* @__PURE__ */ (0, g.jsxs)("div", { children: [/* @__PURE__ */ (0, g.jsx)("dt", { children: V.replace(/_/g, " ") }), /* @__PURE__ */ (0, g.jsx)("dd", { children: We(pe) })] }, V)) }), !Object.keys(A.diagnostics).length && /* @__PURE__ */ (0, g.jsx)("div", {
                className: "empty-state",
                children: "No diagnostics available."
              })]
            }), /* @__PURE__ */ (0, g.jsx)(vl, {
              id: "activity-section",
              eyebrow: "Recent events",
              title: "Recent activity",
              error: ye("activity"),
              children: A.activity.length ? /* @__PURE__ */ (0, g.jsx)("ol", {
                className: "activity-list",
                children: A.activity.map((V, pe) => /* @__PURE__ */ (0, g.jsxs)("li", { children: [/* @__PURE__ */ (0, g.jsx)(wN, {
                  size: 15,
                  "aria-hidden": "true"
                }), /* @__PURE__ */ (0, g.jsx)("span", { children: [
                  V.created_at,
                  V.kind,
                  V.project_id,
                  V.status
                ].filter(Boolean).map(String).join(" · ") })] }, pe))
              }) : /* @__PURE__ */ (0, g.jsx)("div", {
                className: "empty-state",
                children: "No recent bounded activity."
              })
            })]
          })
        ] }) : /* @__PURE__ */ (0, g.jsxs)("section", {
          className: "gate ui-workbench-surface",
          "aria-labelledby": "gate-title",
          children: [
            /* @__PURE__ */ (0, g.jsx)("div", {
              className: "gate-icon",
              children: /* @__PURE__ */ (0, g.jsx)(AN, { size: 22 })
            }),
            /* @__PURE__ */ (0, g.jsx)("span", {
              className: "eyebrow",
              children: "Secure control plane"
            }),
            /* @__PURE__ */ (0, g.jsx)("h1", {
              id: "gate-title",
              children: "Administrator access"
            }),
            /* @__PURE__ */ (0, g.jsx)("p", { children: "Use a bootstrap token or admin-scoped PAT. The token stays only in this page’s memory." }),
            /* @__PURE__ */ (0, g.jsxs)("form", {
              onSubmit: (V) => {
                we(V);
              },
              autoComplete: "off",
              className: "gate-form",
              children: [/* @__PURE__ */ (0, g.jsx)(Dl, {
                label: "Admin token",
                "aria-label": "Admin token",
                autoComplete: "off",
                value: c,
                disabled: v,
                onChange: (V) => d(V.currentTarget.value),
                placeholder: "Enter admin token"
              }), /* @__PURE__ */ (0, g.jsx)(It, {
                type: "submit",
                className: "admin-primary",
                loading: v,
                "aria-busy": v,
                children: "Unlock console"
              })]
            }),
            (p || O) && /* @__PURE__ */ (0, g.jsx)(bo, {
              color: "red",
              role: "alert",
              mt: "md",
              children: p || O
            })
          ]
        })
      }),
      /* @__PURE__ */ (0, g.jsx)(Ln, {
        opened: k !== null,
        onClose: () => ae.current?.handleCancel({ preventDefault() {
        } }),
        returnFocus: !1,
        closeOnEscape: !F,
        closeOnClickOutside: !F,
        withCloseButton: !F,
        closeButtonProps: { "aria-label": "Close dialog" },
        title: k ? `${k.kind[0].toUpperCase()}${k.kind.slice(1)} project` : "Project operation",
        centered: !0,
        size: "lg",
        classNames: {
          content: "admin-modal-content",
          header: "admin-modal-header",
          title: "admin-modal-title",
          body: "admin-modal-body"
        },
        children: k && /* @__PURE__ */ (0, g.jsxs)("form", {
          onSubmit: he,
          autoComplete: "off",
          className: "dialog-form",
          children: [
            k.kind === "register" || k.kind === "create" ? /* @__PURE__ */ (0, g.jsxs)(g.Fragment, { children: [/* @__PURE__ */ (0, g.jsx)("p", { children: k.kind === "create" ? "Create may create a directory and Git repository. An existing empty directory is used only when explicitly adopted; non-empty directories are never overwritten." : "Register an existing directory. The path remains only in this form and page memory." }), /* @__PURE__ */ (0, g.jsxs)("div", {
              className: "dialog-fields",
              children: [
                /* @__PURE__ */ (0, g.jsx)(la, {
                  required: !0,
                  label: "Client ID",
                  value: X.client_id,
                  onChange: (V) => ie("client_id", V.currentTarget.value)
                }),
                /* @__PURE__ */ (0, g.jsx)(la, {
                  required: !0,
                  label: "Project ID",
                  value: X.project_id,
                  onChange: (V) => ie("project_id", V.currentTarget.value)
                }),
                /* @__PURE__ */ (0, g.jsx)(la, {
                  required: !0,
                  label: "Name",
                  value: X.name,
                  onChange: (V) => ie("name", V.currentTarget.value)
                }),
                /* @__PURE__ */ (0, g.jsx)(la, {
                  label: "Description",
                  value: X.description,
                  onChange: (V) => ie("description", V.currentTarget.value)
                }),
                /* @__PURE__ */ (0, g.jsx)(la, {
                  required: !0,
                  label: "Path",
                  value: X.path,
                  onChange: (V) => ie("path", V.currentTarget.value)
                }),
                /* @__PURE__ */ (0, g.jsx)(La, {
                  label: "Allow patch",
                  checked: X.allow_patch,
                  onChange: (V) => ie("allow_patch", V.currentTarget.checked)
                }),
                k.kind === "create" && /* @__PURE__ */ (0, g.jsxs)(g.Fragment, { children: [
                  /* @__PURE__ */ (0, g.jsx)(La, {
                    label: "Initialize Git repository",
                    checked: X.git_init,
                    onChange: (V) => ie("git_init", V.currentTarget.checked)
                  }),
                  /* @__PURE__ */ (0, g.jsx)(la, {
                    label: "Template",
                    value: X.template,
                    onChange: (V) => ie("template", V.currentTarget.value)
                  }),
                  /* @__PURE__ */ (0, g.jsx)(La, {
                    label: "Adopt existing empty directory",
                    checked: X.adopt_existing_empty,
                    onChange: (V) => ie("adopt_existing_empty", V.currentTarget.checked)
                  })
                ] })
              ]
            })] }) : /* @__PURE__ */ (0, g.jsxs)("div", {
              className: "action-confirmation",
              children: [
                /* @__PURE__ */ (0, g.jsxs)("p", { children: [/* @__PURE__ */ (0, g.jsx)("strong", { children: "Project" }), /* @__PURE__ */ (0, g.jsx)("code", { children: k.target })] }),
                /* @__PURE__ */ (0, g.jsxs)("p", { children: [/* @__PURE__ */ (0, g.jsx)("strong", { children: "Revision" }), /* @__PURE__ */ (0, g.jsx)("code", { children: We(k.project?.revision) })] }),
                /* @__PURE__ */ (0, g.jsxs)("p", { children: [/* @__PURE__ */ (0, g.jsx)("strong", { children: "Active jobs" }), /* @__PURE__ */ (0, g.jsx)("span", { children: We(k.project?.active_jobs ?? 0) })] }),
                k.kind === "disable" && /* @__PURE__ */ (0, g.jsx)("small", { children: "Already-started jobs will not be stopped. Project configuration and source directory are retained." }),
                k.kind === "enable" && /* @__PURE__ */ (0, g.jsx)("small", { children: "This only re-enables a registered project. The Agent revalidates path policy." }),
                k.kind === "unregister" && /* @__PURE__ */ (0, g.jsxs)(g.Fragment, { children: [/* @__PURE__ */ (0, g.jsx)("small", { children: "Only the Agent registry record is removed. The source directory and .git are not deleted. Active jobs cause rejection." }), /* @__PURE__ */ (0, g.jsx)(la, {
                  required: !0,
                  label: "Type the full runtime project ID to confirm",
                  value: X.confirm_project,
                  onChange: (V) => ie("confirm_project", V.currentTarget.value)
                })] })
              ]
            }),
            re && /* @__PURE__ */ (0, g.jsx)(bo, {
              color: "red",
              role: "alert",
              children: re
            }),
            /* @__PURE__ */ (0, g.jsxs)("div", {
              className: "dialog-actions",
              children: [/* @__PURE__ */ (0, g.jsx)(It, {
                variant: "default",
                type: "button",
                disabled: F,
                onClick: () => ae.current?.cancel(),
                children: "Cancel"
              }), /* @__PURE__ */ (0, g.jsx)(It, {
                type: "submit",
                className: "admin-primary",
                loading: F,
                "aria-busy": F,
                children: "Continue"
              })]
            })
          ]
        })
      })
    ]
  });
}
document.documentElement.dataset.uiRenderer = "admin";
var sw = document.getElementById("root");
if (!sw) throw new Error("Admin root element is missing");
(0, nN.createRoot)(sw).render(/* @__PURE__ */ (0, g.jsx)(S.StrictMode, { children: /* @__PURE__ */ (0, g.jsx)(cN, { children: /* @__PURE__ */ (0, g.jsx)(e3, {}) }) }));
