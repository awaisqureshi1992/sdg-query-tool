! function(t) { var n = {};

    function e(r) { if (n[r]) return n[r].exports; var o = n[r] = { i: r, l: !1, exports: {} }; return t[r].call(o.exports, o, o.exports, e), o.l = !0, o.exports } e.m = t, e.c = n, e.d = function(t, n, r) { e.o(t, n) || Object.defineProperty(t, n, { enumerable: !0, get: r }) }, e.r = function(t) { "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(t, Symbol.toStringTag, { value: "Module" }), Object.defineProperty(t, "__esModule", { value: !0 }) }, e.t = function(t, n) { if (1 & n && (t = e(t)), 8 & n) return t; if (4 & n && "object" == typeof t && t && t.__esModule) return t; var r = Object.create(null); if (e.r(r), Object.defineProperty(r, "default", { enumerable: !0, value: t }), 2 & n && "string" != typeof t)
            for (var o in t) e.d(r, o, function(n) { return t[n] }.bind(null, o)); return r }, e.n = function(t) { var n = t && t.__esModule ? function() { return t.default } : function() { return t }; return e.d(n, "a", n), n }, e.o = function(t, n) { return Object.prototype.hasOwnProperty.call(t, n) }, e.p = "", e(e.s = 311) }([, function(t, n, e) { var r = e(35)("wks"),
        o = e(29),
        i = e(3).Symbol,
        c = "function" == typeof i;
    (t.exports = function(t) { return r[t] || (r[t] = c && i[t] || (c ? i : o)("Symbol." + t)) }).store = r }, , function(t, n) { var e = t.exports = "undefined" != typeof window && window.Math == Math ? window : "undefined" != typeof self && self.Math == Math ? self : Function("return this")(); "number" == typeof __g && (__g = e) }, , , function(t, n, e) { var r = e(22);
    t.exports = function(t) { if (!r(t)) throw TypeError(t + " is not an object!"); return t } }, , , function(t, n, e) { var r = e(11),
        o = e(28);
    t.exports = e(14) ? function(t, n, e) { return r.f(t, n, o(1, e)) } : function(t, n, e) { return t[n] = e, t } }, function(t, n) { var e;
    e = function() { return this }(); try { e = e || new Function("return this")() } catch (t) { "object" == typeof window && (e = window) } t.exports = e }, function(t, n, e) { var r = e(6),
        o = e(73),
        i = e(50),
        c = Object.defineProperty;
    n.f = e(14) ? Object.defineProperty : function(t, n, e) { if (r(t), n = i(n, !0), r(e), o) try { return c(t, n, e) } catch (t) {}
        if ("get" in e || "set" in e) throw TypeError("Accessors not supported!"); return "value" in e && (t[n] = e.value), t } }, , function(t, n, e) { var r = e(3),
        o = e(24),
        i = e(9),
        c = e(19),
        a = e(87),
        s = function(t, n, e) { var u, l, f, p, h = t & s.F,
                d = t & s.G,
                v = t & s.S,
                g = t & s.P,
                y = t & s.B,
                b = d ? r : v ? r[n] || (r[n] = {}) : (r[n] || {}).prototype,
                m = d ? o : o[n] || (o[n] = {}),
                x = m.prototype || (m.prototype = {}); for (u in d && (e = n), e) f = ((l = !h && b && void 0 !== b[u]) ? b : e)[u], p = y && l ? a(f, r) : g && "function" == typeof f ? a(Function.call, f) : f, b && c(b, u, f, t & s.U), m[u] != f && i(m, u, p), g && x[u] != f && (x[u] = f) };
    r.core = o, s.F = 1, s.G = 2, s.S = 4, s.P = 8, s.B = 16, s.W = 32, s.U = 64, s.R = 128, t.exports = s }, function(t, n, e) { t.exports = !e(15)((function() { return 7 != Object.defineProperty({}, "a", { get: function() { return 7 } }).a })) }, function(t, n) { t.exports = function(t) { try { return !!t() } catch (t) { return !0 } } }, function(t, n) { var e = {}.hasOwnProperty;
    t.exports = function(t, n) { return e.call(t, n) } }, function(t, n, e) { var r = e(118),
        o = e(33);
    t.exports = function(t) { return r(o(t)) } }, , function(t, n, e) { var r = e(3),
        o = e(9),
        i = e(16),
        c = e(29)("src"),
        a = e(117),
        s = "toString",
        u = ("" + a).split(s);
    e(24).inspectSource = function(t) { return a.call(t) }, (t.exports = function(t, n, e, a) { var s = "function" == typeof e;
        s && (i(e, "name") || o(e, "name", n)), t[n] !== e && (s && (i(e, c) || o(e, c, t[n] ? "" + t[n] : u.join(String(n)))), t === r ? t[n] = e : a ? t[n] ? t[n] = e : o(t, n, e) : (delete t[n], o(t, n, e))) })(Function.prototype, s, (function() { return "function" == typeof this && this[c] || a.call(this) })) }, , , function(t, n) { t.exports = function(t) { return "object" == typeof t ? null !== t : "function" == typeof t } }, , function(t, n) { var e = t.exports = { version: "2.6.5" }; "number" == typeof __e && (__e = e) }, function(t, n, e) { var r = e(75),
        o = e(52);
    t.exports = Object.keys || function(t) { return r(t, o) } }, , , function(t, n) { t.exports = function(t, n) { return { enumerable: !(1 & t), configurable: !(2 & t), writable: !(4 & t), value: n } } }, function(t, n) { var e = 0,
        r = Math.random();
    t.exports = function(t) { return "Symbol(".concat(void 0 === t ? "" : t, ")_", (++e + r).toString(36)) } }, , , , function(t, n) { t.exports = function(t) { if (null == t) throw TypeError("Can't call method on  " + t); return t } }, , function(t, n, e) { var r = e(24),
        o = e(3),
        i = "__core-js_shared__",
        c = o[i] || (o[i] = {});
    (t.exports = function(t, n) { return c[t] || (c[t] = void 0 !== n ? n : {}) })("versions", []).push({ version: r.version, mode: e(36) ? "pure" : "global", copyright: "© 2019 Denis Pushkarev (zloirock.ru)" }) }, function(t, n) { t.exports = !1 }, function(t, n) { var e = {}.toString;
    t.exports = function(t) { return e.call(t).slice(8, -1) } }, function(t, n) { var e = Math.ceil,
        r = Math.floor;
    t.exports = function(t) { return isNaN(t = +t) ? 0 : (t > 0 ? r : e)(t) } }, function(t, n) { t.exports = {} }, function(t, n, e) { var r = e(33);
    t.exports = function(t) { return Object(r(t)) } }, , , , , function(t, n, e) { var r = e(38),
        o = Math.min;
    t.exports = function(t) { return t > 0 ? o(r(t), 9007199254740991) : 0 } }, function(t, n) { n.f = {}.propertyIsEnumerable }, , , , function(t, n, e) { var r = e(22);
    t.exports = function(t, n) { if (!r(t)) return t; var e, o; if (n && "function" == typeof(e = t.toString) && !r(o = e.call(t))) return o; if ("function" == typeof(e = t.valueOf) && !r(o = e.call(t))) return o; if (!n && "function" == typeof(e = t.toString) && !r(o = e.call(t))) return o; throw TypeError("Can't convert object to primitive value") } }, function(t, n, e) { var r = e(35)("keys"),
        o = e(29);
    t.exports = function(t) { return r[t] || (r[t] = o(t)) } }, function(t, n) { t.exports = "constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf".split(",") }, function(t, n, e) { var r = e(11).f,
        o = e(16),
        i = e(1)("toStringTag");
    t.exports = function(t, n, e) { t && !o(t = e ? t : t.prototype, i) && r(t, i, { configurable: !0, value: n }) } }, , function(t, n, e) { var r = e(75),
        o = e(52).concat("length", "prototype");
    n.f = Object.getOwnPropertyNames || function(t) { return r(t, o) } }, function(t, n) { n.f = Object.getOwnPropertySymbols }, function(t, n, e) { var r = e(37),
        o = e(1)("toStringTag"),
        i = "Arguments" == r(function() { return arguments }());
    t.exports = function(t) { var n, e, c; return void 0 === t ? "Undefined" : null === t ? "Null" : "string" == typeof(e = function(t, n) { try { return t[n] } catch (t) {} }(n = Object(t), o)) ? e : i ? r(n) : "Object" == (c = r(n)) && "function" == typeof n.callee ? "Arguments" : c } }, function(t, n, e) { "use strict"; var r, o, i = e(80),
        c = RegExp.prototype.exec,
        a = String.prototype.replace,
        s = c,
        u = (r = /a/, o = /b*/g, c.call(r, "a"), c.call(o, "a"), 0 !== r.lastIndex || 0 !== o.lastIndex),
        l = void 0 !== /()??/.exec("")[1];
    (u || l) && (s = function(t) { var n, e, r, o, s = this; return l && (e = new RegExp("^" + s.source + "$(?!\\s)", i.call(s))), u && (n = s.lastIndex), r = c.call(s, t), u && r && (s.lastIndex = s.global ? r.index + r[0].length : n), l && r && r.length > 1 && a.call(r[0], e, (function() { for (o = 1; o < arguments.length - 2; o++) void 0 === arguments[o] && (r[o] = void 0) })), r }), t.exports = s }, , , , , , , , , , , , , , , function(t, n, e) { t.exports = !e(14) && !e(15)((function() { return 7 != Object.defineProperty(e(74)("div"), "a", { get: function() { return 7 } }).a })) }, function(t, n, e) { var r = e(22),
        o = e(3).document,
        i = r(o) && r(o.createElement);
    t.exports = function(t) { return i ? o.createElement(t) : {} } }, function(t, n, e) { var r = e(16),
        o = e(17),
        i = e(89)(!1),
        c = e(51)("IE_PROTO");
    t.exports = function(t, n) { var e, a = o(t),
            s = 0,
            u = []; for (e in a) e != c && r(a, e) && u.push(e); for (; n.length > s;) r(a, e = n[s++]) && (~i(u, e) || u.push(e)); return u } }, function(t, n, e) { n.f = e(1) }, function(t, n, e) { var r = e(6),
        o = e(124),
        i = e(52),
        c = e(51)("IE_PROTO"),
        a = function() {},
        s = function() { var t, n = e(74)("iframe"),
                r = i.length; for (n.style.display = "none", e(125).appendChild(n), n.src = "javascript:", (t = n.contentWindow.document).open(), t.write("<script>document.F=Object<\/script>"), t.close(), s = t.F; r--;) delete s.prototype[i[r]]; return s() };
    t.exports = Object.create || function(t, n) { var e; return null !== t ? (a.prototype = r(t), e = new a, a.prototype = null, e[c] = t) : e = s(), void 0 === n ? e : o(e, n) } }, function(t, n, e) { "use strict"; var r = e(79),
        o = e(128),
        i = e(39),
        c = e(17);
    t.exports = e(93)(Array, "Array", (function(t, n) { this._t = c(t), this._i = 0, this._k = n }), (function() { var t = this._t,
            n = this._k,
            e = this._i++; return !t || e >= t.length ? (this._t = void 0, o(1)) : o(0, "keys" == n ? e : "values" == n ? t[e] : [e, t[e]]) }), "values"), i.Arguments = i.Array, r("keys"), r("values"), r("entries") }, function(t, n, e) { var r = e(1)("unscopables"),
        o = Array.prototype;
    null == o[r] && e(9)(o, r, {}), t.exports = function(t) { o[r][t] = !0 } }, function(t, n, e) { "use strict"; var r = e(6);
    t.exports = function() { var t = r(this),
            n = ""; return t.global && (n += "g"), t.ignoreCase && (n += "i"), t.multiline && (n += "m"), t.unicode && (n += "u"), t.sticky && (n += "y"), n } }, , , , , , , function(t, n, e) { var r = e(88);
    t.exports = function(t, n, e) { if (r(t), void 0 === n) return t; switch (e) {
            case 1:
                return function(e) { return t.call(n, e) };
            case 2:
                return function(e, r) { return t.call(n, e, r) };
            case 3:
                return function(e, r, o) { return t.call(n, e, r, o) } } return function() { return t.apply(n, arguments) } } }, function(t, n) { t.exports = function(t) { if ("function" != typeof t) throw TypeError(t + " is not a function!"); return t } }, function(t, n, e) { var r = e(17),
        o = e(45),
        i = e(90);
    t.exports = function(t) { return function(n, e, c) { var a, s = r(n),
                u = o(s.length),
                l = i(c, u); if (t && e != e) { for (; u > l;)
                    if ((a = s[l++]) != a) return !0 } else
                for (; u > l; l++)
                    if ((t || l in s) && s[l] === e) return t || l || 0; return !t && -1 } } }, function(t, n, e) { var r = e(38),
        o = Math.max,
        i = Math.min;
    t.exports = function(t, n) { return (t = r(t)) < 0 ? o(t + n, 0) : i(t, n) } }, function(t, n, e) { var r = e(46),
        o = e(28),
        i = e(17),
        c = e(50),
        a = e(16),
        s = e(73),
        u = Object.getOwnPropertyDescriptor;
    n.f = e(14) ? u : function(t, n) { if (t = i(t), n = c(n, !0), s) try { return u(t, n) } catch (t) {}
        if (a(t, n)) return o(!r.f.call(t, n), t[n]) } }, function(t, n, e) { var r = e(3),
        o = e(24),
        i = e(36),
        c = e(76),
        a = e(11).f;
    t.exports = function(t) { var n = o.Symbol || (o.Symbol = i ? {} : r.Symbol || {}); "_" == t.charAt(0) || t in n || a(n, t, { value: c.f(t) }) } }, function(t, n, e) { "use strict"; var r = e(36),
        o = e(13),
        i = e(19),
        c = e(9),
        a = e(39),
        s = e(129),
        u = e(53),
        l = e(130),
        f = e(1)("iterator"),
        p = !([].keys && "next" in [].keys()),
        h = "keys",
        d = "values",
        v = function() { return this };
    t.exports = function(t, n, e, g, y, b, m) { s(e, n, g); var x, S, w, O = function(t) { if (!p && t in T) return T[t]; switch (t) {
                    case h:
                    case d:
                        return function() { return new e(this, t) } } return function() { return new e(this, t) } },
            j = n + " Iterator",
            k = y == d,
            E = !1,
            T = t.prototype,
            P = T[f] || T["@@iterator"] || y && T[y],
            A = P || O(y),
            L = y ? k ? O("entries") : A : void 0,
            _ = "Array" == n && T.entries || P; if (_ && (w = l(_.call(new t))) !== Object.prototype && w.next && (u(w, j, !0), r || "function" == typeof w[f] || c(w, f, v)), k && P && P.name !== d && (E = !0, A = function() { return P.call(this) }), r && !m || !p && !E && T[f] || c(T, f, A), a[n] = A, a[j] = v, y)
            if (x = { values: k ? A : O(d), keys: b ? A : O(h), entries: L }, m)
                for (S in x) S in T || i(T, S, x[S]);
            else o(o.P + o.F * (p || E), n, x); return x } }, function(t, n, e) { "use strict"; var r = e(95)(!0);
    t.exports = function(t, n, e) { return n + (e ? r(t, n).length : 1) } }, function(t, n, e) { var r = e(38),
        o = e(33);
    t.exports = function(t) { return function(n, e) { var i, c, a = String(o(n)),
                s = r(e),
                u = a.length; return s < 0 || s >= u ? t ? "" : void 0 : (i = a.charCodeAt(s)) < 55296 || i > 56319 || s + 1 === u || (c = a.charCodeAt(s + 1)) < 56320 || c > 57343 ? t ? a.charAt(s) : i : t ? a.slice(s, s + 2) : c - 56320 + (i - 55296 << 10) + 65536 } } }, function(t, n, e) { "use strict"; var r = e(57),
        o = RegExp.prototype.exec;
    t.exports = function(t, n) { var e = t.exec; if ("function" == typeof e) { var i = e.call(t, n); if ("object" != typeof i) throw new TypeError("RegExp exec method returned something other than an Object or null"); return i } if ("RegExp" !== r(t)) throw new TypeError("RegExp#exec called on incompatible receiver"); return o.call(t, n) } }, function(t, n, e) { "use strict";
    e(135); var r = e(19),
        o = e(9),
        i = e(15),
        c = e(33),
        a = e(1),
        s = e(58),
        u = a("species"),
        l = !i((function() { var t = /./; return t.exec = function() { var t = []; return t.groups = { a: "7" }, t }, "7" !== "".replace(t, "$<a>") })),
        f = function() { var t = /(?:)/,
                n = t.exec;
            t.exec = function() { return n.apply(this, arguments) }; var e = "ab".split(t); return 2 === e.length && "a" === e[0] && "b" === e[1] }();
    t.exports = function(t, n, e) { var p = a(t),
            h = !i((function() { var n = {}; return n[p] = function() { return 7 }, 7 != "" [t](n) })),
            d = h ? !i((function() { var n = !1,
                    e = /a/; return e.exec = function() { return n = !0, null }, "split" === t && (e.constructor = {}, e.constructor[u] = function() { return e }), e[p](""), !n })) : void 0; if (!h || !d || "replace" === t && !l || "split" === t && !f) { var v = /./ [p],
                g = e(c, p, "" [t], (function(t, n, e, r, o) { return n.exec === s ? h && !o ? { done: !0, value: v.call(n, e, r) } : { done: !0, value: t.call(e, n, r) } : { done: !1 } })),
                y = g[0],
                b = g[1];
            r(String.prototype, t, y), o(RegExp.prototype, p, 2 == n ? function(t, n) { return b.call(t, this, n) } : function(t) { return b.call(t, this) }) } } }, , , , , , , , , , , , , , , , , , , , function(t, n, e) { t.exports = e(35)("native-function-to-string", Function.toString) }, function(t, n, e) { var r = e(37);
    t.exports = Object("z").propertyIsEnumerable(0) ? Object : function(t) { return "String" == r(t) ? t.split("") : Object(t) } }, function(t, n, e) { "use strict"; var r = e(11),
        o = e(28);
    t.exports = function(t, n, e) { n in t ? r.f(t, n, o(0, e)) : t[n] = e } }, function(t, n, e) { "use strict"; var r = e(3),
        o = e(16),
        i = e(14),
        c = e(13),
        a = e(19),
        s = e(121).KEY,
        u = e(15),
        l = e(35),
        f = e(53),
        p = e(29),
        h = e(1),
        d = e(76),
        v = e(92),
        g = e(122),
        y = e(123),
        b = e(6),
        m = e(22),
        x = e(17),
        S = e(50),
        w = e(28),
        O = e(77),
        j = e(126),
        k = e(91),
        E = e(11),
        T = e(25),
        P = k.f,
        A = E.f,
        L = j.f,
        _ = r.Symbol,
        I = r.JSON,
        M = I && I.stringify,
        C = h("_hidden"),
        F = h("toPrimitive"),
        q = {}.propertyIsEnumerable,
        R = l("symbol-registry"),
        N = l("symbols"),
        B = l("op-symbols"),
        D = Object.prototype,
        z = "function" == typeof _,
        $ = r.QObject,
        G = !$ || !$.prototype || !$.prototype.findChild,
        U = i && u((function() { return 7 != O(A({}, "a", { get: function() { return A(this, "a", { value: 7 }).a } })).a })) ? function(t, n, e) { var r = P(D, n);
            r && delete D[n], A(t, n, e), r && t !== D && A(D, n, r) } : A,
        V = function(t) { var n = N[t] = O(_.prototype); return n._k = t, n },
        H = z && "symbol" == typeof _.iterator ? function(t) { return "symbol" == typeof t } : function(t) { return t instanceof _ },
        W = function(t, n, e) { return t === D && W(B, n, e), b(t), n = S(n, !0), b(e), o(N, n) ? (e.enumerable ? (o(t, C) && t[C][n] && (t[C][n] = !1), e = O(e, { enumerable: w(0, !1) })) : (o(t, C) || A(t, C, w(1, {})), t[C][n] = !0), U(t, n, e)) : A(t, n, e) },
        J = function(t, n) { b(t); for (var e, r = g(n = x(n)), o = 0, i = r.length; i > o;) W(t, e = r[o++], n[e]); return t },
        K = function(t) { var n = q.call(this, t = S(t, !0)); return !(this === D && o(N, t) && !o(B, t)) && (!(n || !o(this, t) || !o(N, t) || o(this, C) && this[C][t]) || n) },
        Q = function(t, n) { if (t = x(t), n = S(n, !0), t !== D || !o(N, n) || o(B, n)) { var e = P(t, n); return !e || !o(N, n) || o(t, C) && t[C][n] || (e.enumerable = !0), e } },
        Y = function(t) { for (var n, e = L(x(t)), r = [], i = 0; e.length > i;) o(N, n = e[i++]) || n == C || n == s || r.push(n); return r },
        X = function(t) { for (var n, e = t === D, r = L(e ? B : x(t)), i = [], c = 0; r.length > c;) !o(N, n = r[c++]) || e && !o(D, n) || i.push(N[n]); return i };
    z || (a((_ = function() { if (this instanceof _) throw TypeError("Symbol is not a constructor!"); var t = p(arguments.length > 0 ? arguments[0] : void 0),
            n = function(e) { this === D && n.call(B, e), o(this, C) && o(this[C], t) && (this[C][t] = !1), U(this, t, w(1, e)) }; return i && G && U(D, t, { configurable: !0, set: n }), V(t) }).prototype, "toString", (function() { return this._k })), k.f = Q, E.f = W, e(55).f = j.f = Y, e(46).f = K, e(56).f = X, i && !e(36) && a(D, "propertyIsEnumerable", K, !0), d.f = function(t) { return V(h(t)) }), c(c.G + c.W + c.F * !z, { Symbol: _ }); for (var Z = "hasInstance,isConcatSpreadable,iterator,match,replace,search,species,split,toPrimitive,toStringTag,unscopables".split(","), tt = 0; Z.length > tt;) h(Z[tt++]); for (var nt = T(h.store), et = 0; nt.length > et;) v(nt[et++]);
    c(c.S + c.F * !z, "Symbol", { for: function(t) { return o(R, t += "") ? R[t] : R[t] = _(t) }, keyFor: function(t) { if (!H(t)) throw TypeError(t + " is not a symbol!"); for (var n in R)
                if (R[n] === t) return n }, useSetter: function() { G = !0 }, useSimple: function() { G = !1 } }), c(c.S + c.F * !z, "Object", { create: function(t, n) { return void 0 === n ? O(t) : J(O(t), n) }, defineProperty: W, defineProperties: J, getOwnPropertyDescriptor: Q, getOwnPropertyNames: Y, getOwnPropertySymbols: X }), I && c(c.S + c.F * (!z || u((function() { var t = _(); return "[null]" != M([t]) || "{}" != M({ a: t }) || "{}" != M(Object(t)) }))), "JSON", { stringify: function(t) { for (var n, e, r = [t], o = 1; arguments.length > o;) r.push(arguments[o++]); if (e = n = r[1], (m(n) || void 0 !== t) && !H(t)) return y(n) || (n = function(t, n) { if ("function" == typeof e && (n = e.call(this, t, n)), !H(n)) return n }), r[1] = n, M.apply(I, r) } }), _.prototype[F] || e(9)(_.prototype, F, _.prototype.valueOf), f(_, "Symbol"), f(Math, "Math", !0), f(r.JSON, "JSON", !0) }, function(t, n, e) { var r = e(29)("meta"),
        o = e(22),
        i = e(16),
        c = e(11).f,
        a = 0,
        s = Object.isExtensible || function() { return !0 },
        u = !e(15)((function() { return s(Object.preventExtensions({})) })),
        l = function(t) { c(t, r, { value: { i: "O" + ++a, w: {} } }) },
        f = t.exports = { KEY: r, NEED: !1, fastKey: function(t, n) { if (!o(t)) return "symbol" == typeof t ? t : ("string" == typeof t ? "S" : "P") + t; if (!i(t, r)) { if (!s(t)) return "F"; if (!n) return "E";
                    l(t) } return t[r].i }, getWeak: function(t, n) { if (!i(t, r)) { if (!s(t)) return !0; if (!n) return !1;
                    l(t) } return t[r].w }, onFreeze: function(t) { return u && f.NEED && s(t) && !i(t, r) && l(t), t } } }, function(t, n, e) { var r = e(25),
        o = e(56),
        i = e(46);
    t.exports = function(t) { var n = r(t),
            e = o.f; if (e)
            for (var c, a = e(t), s = i.f, u = 0; a.length > u;) s.call(t, c = a[u++]) && n.push(c); return n } }, function(t, n, e) { var r = e(37);
    t.exports = Array.isArray || function(t) { return "Array" == r(t) } }, function(t, n, e) { var r = e(11),
        o = e(6),
        i = e(25);
    t.exports = e(14) ? Object.defineProperties : function(t, n) { o(t); for (var e, c = i(n), a = c.length, s = 0; a > s;) r.f(t, e = c[s++], n[e]); return t } }, function(t, n, e) { var r = e(3).document;
    t.exports = r && r.documentElement }, function(t, n, e) { var r = e(17),
        o = e(55).f,
        i = {}.toString,
        c = "object" == typeof window && window && Object.getOwnPropertyNames ? Object.getOwnPropertyNames(window) : [];
    t.exports.f = function(t) { return c && "[object Window]" == i.call(t) ? function(t) { try { return o(t) } catch (t) { return c.slice() } }(t) : o(r(t)) } }, function(t, n, e) { for (var r = e(78), o = e(25), i = e(19), c = e(3), a = e(9), s = e(39), u = e(1), l = u("iterator"), f = u("toStringTag"), p = s.Array, h = { CSSRuleList: !0, CSSStyleDeclaration: !1, CSSValueList: !1, ClientRectList: !1, DOMRectList: !1, DOMStringList: !1, DOMTokenList: !0, DataTransferItemList: !1, FileList: !1, HTMLAllCollection: !1, HTMLCollection: !1, HTMLFormElement: !1, HTMLSelectElement: !1, MediaList: !0, MimeTypeArray: !1, NamedNodeMap: !1, NodeList: !0, PaintRequestList: !1, Plugin: !1, PluginArray: !1, SVGLengthList: !1, SVGNumberList: !1, SVGPathSegList: !1, SVGPointList: !1, SVGStringList: !1, SVGTransformList: !1, SourceBufferList: !1, StyleSheetList: !0, TextTrackCueList: !1, TextTrackList: !1, TouchList: !1 }, d = o(h), v = 0; v < d.length; v++) { var g, y = d[v],
            b = h[y],
            m = c[y],
            x = m && m.prototype; if (x && (x[l] || a(x, l, p), x[f] || a(x, f, y), s[y] = p, b))
            for (g in r) x[g] || i(x, g, r[g], !0) } }, function(t, n) { t.exports = function(t, n) { return { value: n, done: !!t } } }, function(t, n, e) { "use strict"; var r = e(77),
        o = e(28),
        i = e(53),
        c = {};
    e(9)(c, e(1)("iterator"), (function() { return this })), t.exports = function(t, n, e) { t.prototype = r(c, { next: o(1, e) }), i(t, n + " Iterator") } }, function(t, n, e) { var r = e(16),
        o = e(40),
        i = e(51)("IE_PROTO"),
        c = Object.prototype;
    t.exports = Object.getPrototypeOf || function(t) { return t = o(t), r(t, i) ? t[i] : "function" == typeof t.constructor && t instanceof t.constructor ? t.constructor.prototype : t instanceof Object ? c : null } }, function(t, n, e) { "use strict"; var r = e(57),
        o = {};
    o[e(1)("toStringTag")] = "z", o + "" != "[object z]" && e(19)(Object.prototype, "toString", (function() { return "[object " + r(this) + "]" }), !0) }, function(t, n, e) { var r = e(40),
        o = e(25);
    e(133)("keys", (function() { return function(t) { return o(r(t)) } })) }, function(t, n, e) { var r = e(13),
        o = e(24),
        i = e(15);
    t.exports = function(t, n) { var e = (o.Object || {})[t] || Object[t],
            c = {};
        c[t] = n(e), r(r.S + r.F * i((function() { e(1) })), "Object", c) } }, function(t, n, e) { var r = e(22),
        o = e(37),
        i = e(1)("match");
    t.exports = function(t) { var n; return r(t) && (void 0 !== (n = t[i]) ? !!n : "RegExp" == o(t)) } }, function(t, n, e) { "use strict"; var r = e(58);
    e(13)({ target: "RegExp", proto: !0, forced: r !== /./.exec }, { exec: r }) }, function(t, n) { var e, r, o = t.exports = {};

    function i() { throw new Error("setTimeout has not been defined") }

    function c() { throw new Error("clearTimeout has not been defined") }

    function a(t) { if (e === setTimeout) return setTimeout(t, 0); if ((e === i || !e) && setTimeout) return e = setTimeout, setTimeout(t, 0); try { return e(t, 0) } catch (n) { try { return e.call(null, t, 0) } catch (n) { return e.call(this, t, 0) } } }! function() { try { e = "function" == typeof setTimeout ? setTimeout : i } catch (t) { e = i } try { r = "function" == typeof clearTimeout ? clearTimeout : c } catch (t) { r = c } }(); var s, u = [],
        l = !1,
        f = -1;

    function p() { l && s && (l = !1, s.length ? u = s.concat(u) : f = -1, u.length && h()) }

    function h() { if (!l) { var t = a(p);
            l = !0; for (var n = u.length; n;) { for (s = u, u = []; ++f < n;) s && s[f].run();
                f = -1, n = u.length } s = null, l = !1,
                function(t) { if (r === clearTimeout) return clearTimeout(t); if ((r === c || !r) && clearTimeout) return r = clearTimeout, clearTimeout(t); try { r(t) } catch (n) { try { return r.call(null, t) } catch (n) { return r.call(this, t) } } }(t) } }

    function d(t, n) { this.fun = t, this.array = n }

    function v() {} o.nextTick = function(t) { var n = new Array(arguments.length - 1); if (arguments.length > 1)
            for (var e = 1; e < arguments.length; e++) n[e - 1] = arguments[e];
        u.push(new d(t, n)), 1 !== u.length || l || a(h) }, d.prototype.run = function() { this.fun.apply(null, this.array) }, o.title = "browser", o.browser = !0, o.env = {}, o.argv = [], o.version = "", o.versions = {}, o.on = v, o.addListener = v, o.once = v, o.off = v, o.removeListener = v, o.removeAllListeners = v, o.emit = v, o.prependListener = v, o.prependOnceListener = v, o.listeners = function(t) { return [] }, o.binding = function(t) { throw new Error("process.binding is not supported") }, o.cwd = function() { return "/" }, o.chdir = function(t) { throw new Error("process.chdir is not supported") }, o.umask = function() { return 0 } }, function(t, n, e) { "use strict"; var r = e(6),
        o = e(40),
        i = e(45),
        c = e(38),
        a = e(94),
        s = e(96),
        u = Math.max,
        l = Math.min,
        f = Math.floor,
        p = /\$([$&`']|\d\d?|<[^>]*>)/g,
        h = /\$([$&`']|\d\d?)/g;
    e(97)("replace", 2, (function(t, n, e, d) { return [function(r, o) { var i = t(this),
                c = null == r ? void 0 : r[n]; return void 0 !== c ? c.call(r, i, o) : e.call(String(i), r, o) }, function(t, n) { var o = d(e, t, this, n); if (o.done) return o.value; var f = r(t),
                p = String(this),
                h = "function" == typeof n;
            h || (n = String(n)); var g = f.global; if (g) { var y = f.unicode;
                f.lastIndex = 0 } for (var b = [];;) { var m = s(f, p); if (null === m) break; if (b.push(m), !g) break; "" === String(m[0]) && (f.lastIndex = a(p, i(f.lastIndex), y)) } for (var x, S = "", w = 0, O = 0; O < b.length; O++) { m = b[O]; for (var j = String(m[0]), k = u(l(c(m.index), p.length), 0), E = [], T = 1; T < m.length; T++) E.push(void 0 === (x = m[T]) ? x : String(x)); var P = m.groups; if (h) { var A = [j].concat(E, k, p);
                    void 0 !== P && A.push(P); var L = String(n.apply(void 0, A)) } else L = v(j, p, k, E, P, n);
                k >= w && (S += p.slice(w, k) + L, w = k + j.length) } return S + p.slice(w) }];

        function v(t, n, r, i, c, a) { var s = r + t.length,
                u = i.length,
                l = h; return void 0 !== c && (c = o(c), l = p), e.call(a, l, (function(e, o) { var a; switch (o.charAt(0)) {
                    case "$":
                        return "$";
                    case "&":
                        return t;
                    case "`":
                        return n.slice(0, r);
                    case "'":
                        return n.slice(s);
                    case "<":
                        a = c[o.slice(1, -1)]; break;
                    default:
                        var l = +o; if (0 === l) return e; if (l > u) { var p = f(l / 10); return 0 === p ? e : p <= u ? void 0 === i[p - 1] ? o.charAt(1) : i[p - 1] + o.charAt(1) : e } a = i[l - 1] } return void 0 === a ? "" : a })) } })) }, function(t, n) { t.exports = function(t) { return t.webpackPolyfill || (t.deprecate = function() {}, t.paths = [], t.children || (t.children = []), Object.defineProperty(t, "loaded", { enumerable: !0, get: function() { return t.l } }), Object.defineProperty(t, "id", { enumerable: !0, get: function() { return t.i } }), t.webpackPolyfill = 1), t } }, , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , function(t, n, e) {
    (function(t, n, e) {! function(t) { "use strict"; var r, o = /^[a-z]+:/,
                i = /[-a-z0-9]+(\.[-a-z0-9])*:\d+/i,
                c = /\/\/(.*?)(?::(.*?))?@/,
                a = /^win/i,
                s = /:$/,
                u = /^\?/,
                l = /^#/,
                f = /(.*\/)/,
                p = /^\/{2,}/,
                h = /(^\/?)/,
                d = /'/g,
                v = /%([ef][0-9a-f])%([89ab][0-9a-f])%([89ab][0-9a-f])/gi,
                g = /%([cd][0-9a-f])%([89ab][0-9a-f])/gi,
                y = /%([0-7][0-9a-f])/gi,
                b = /\+/g,
                m = /^\w:$/,
                x = /[^/#?]/,
                S = "undefined" == typeof window && void 0 !== n && !0,
                w = !S && t.navigator && t.navigator.userAgent && ~t.navigator.userAgent.indexOf("MSIE"),
                O = S ? t.require : null,
                j = { protocol: "protocol", host: "hostname", port: "port", path: "pathname", query: "search", hash: "hash" },
                k = { ftp: 21, gopher: 70, http: 80, https: 443, ws: 80, wss: 443 };

            function E() { return S ? r = r || "file://" + (e.platform.match(a) ? "/" : "") + O("fs").realpathSync(".") : "about:srcdoc" === document.location.href ? self.parent.document.location.href : document.location.href }

            function T(t) { return encodeURIComponent(t).replace(d, "%27") }

            function P(t) { return (t = (t = (t = t.replace(b, " ")).replace(v, (function(t, n, e, r) { var o = parseInt(n, 16) - 224,
                        i = parseInt(e, 16) - 128; if (0 == o && i < 32) return t; var c = (o << 12) + (i << 6) + (parseInt(r, 16) - 128); return 65535 < c ? t : String.fromCharCode(c) }))).replace(g, (function(t, n, e) { var r = parseInt(n, 16) - 192; if (r < 2) return t; var o = parseInt(e, 16) - 128; return String.fromCharCode((r << 6) + o) }))).replace(y, (function(t, n) { return String.fromCharCode(parseInt(n, 16)) })) }

            function A(t) { for (var n = t.split("&"), e = 0, r = n.length; e < r; e++) { var o = n[e].split("="),
                        i = decodeURIComponent(o[0].replace(b, " ")); if (i) { var c = void 0 !== o[1] ? P(o[1]) : null;
                        void 0 === this[i] ? this[i] = c : (this[i] instanceof Array || (this[i] = [this[i]]), this[i].push(c)) } } }

            function L(t, n) {! function(t, n, e) { var r, a, d;
                    n = n || E(), S ? r = O("url").parse(n) : (r = document.createElement("a")).href = n; var v, g, y = (g = { path: !0, query: !0, hash: !0 }, (v = n) && o.test(v) && (g.protocol = !0, g.host = !0, i.test(v) && (g.port = !0), c.test(v) && (g.user = !0, g.pass = !0)), g); for (a in d = n.match(c) || [], j) y[a] ? t[a] = r[j[a]] || "" : t[a] = ""; if (t.protocol = t.protocol.replace(s, ""), t.query = t.query.replace(u, ""), t.hash = P(t.hash.replace(l, "")), t.user = P(d[1] || ""), t.pass = P(d[2] || ""), t.port = k[t.protocol] == t.port || 0 == t.port ? "" : t.port, !y.protocol && x.test(n.charAt(0)) && (t.path = n.split("?")[0].split("#")[0]), !y.protocol && e) { var b = new L(E().match(f)[0]),
                            m = b.path.split("/"),
                            T = t.path.split("/"),
                            _ = ["protocol", "user", "pass", "host", "port"],
                            I = _.length; for (m.pop(), a = 0; a < I; a++) t[_[a]] = b[_[a]]; for (;
                            ".." === T[0];) m.pop(), T.shift();
                        t.path = ("/" !== n.charAt(0) ? m.join("/") : "") + "/" + T.join("/") } t.path = t.path.replace(p, "/"), w && (t.path = t.path.replace(h, "/")), t.paths(t.paths()), t.query = new A(t.query) }(this, t, !n) } A.prototype.toString = function() { var t, n, e = "",
                    r = T; for (t in this) { var o = this[t]; if (!(o instanceof Function || void 0 === o))
                        if (o instanceof Array) { var i = o.length; if (!i) { e += (e ? "&" : "") + r(t) + "="; continue } for (n = 0; n < i; n++) { var c = o[n];
                                void 0 !== c && (e += e ? "&" : "", e += r(t) + (null === c ? "" : "=" + r(c))) } } else e += e ? "&" : "", e += r(t) + (null === o ? "" : "=" + r(o)) } return e }, L.prototype.clearQuery = function() { for (var t in this.query) this.query[t] instanceof Function || delete this.query[t]; return this }, L.prototype.queryLength = function() { var t = 0; for (var n in this.query) this.query[n] instanceof Function || t++; return t }, L.prototype.isEmptyQuery = function() { return 0 === this.queryLength() }, L.prototype.paths = function(t) { var n, e = "",
                    r = 0; if (t && t.length && t + "" !== t) { for (this.isAbsolute() && (e = "/"), n = t.length; r < n; r++) t[r] = !r && m.test(t[r]) ? t[r] : T(t[r]);
                    this.path = e + t.join("/") } for (r = 0, n = (t = ("/" === this.path.charAt(0) ? this.path.slice(1) : this.path).split("/")).length; r < n; r++) t[r] = P(t[r]); return t }, L.prototype.encode = T, L.prototype.decode = P, L.prototype.isAbsolute = function() { return this.protocol || "/" === this.path.charAt(0) }, L.prototype.toString = function() { return (this.protocol && this.protocol + "://") + (this.user && T(this.user) + (this.pass && ":" + T(this.pass)) + "@") + (this.host && this.host) + (this.port && ":" + this.port) + (this.path && this.path) + (this.query.toString() && "?" + this.query) + (this.hash && "#" + T(this.hash)) }, t[t.exports ? "exports" : "Url"] = L }(t.exports ? t : window) }).call(this, e(138)(t), e(10), e(136)) }, , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , function(t, n, e) { "use strict"; var r = e(95)(!0);
    e(93)(String, "String", (function(t) { this._t = String(t), this._i = 0 }), (function() { var t, n = this._t,
            e = this._i; return e >= n.length ? { value: void 0, done: !0 } : (t = r(n, e), this._i += t.length, { value: t, done: !1 }) })) }, function(t, n, e) { "use strict"; var r = e(87),
        o = e(13),
        i = e(40),
        c = e(295),
        a = e(296),
        s = e(45),
        u = e(119),
        l = e(297);
    o(o.S + o.F * !e(298)((function(t) { Array.from(t) })), "Array", { from: function(t) { var n, e, o, f, p = i(t),
                h = "function" == typeof this ? this : Array,
                d = arguments.length,
                v = d > 1 ? arguments[1] : void 0,
                g = void 0 !== v,
                y = 0,
                b = l(p); if (g && (v = r(v, d > 2 ? arguments[2] : void 0, 2)), null == b || h == Array && a(b))
                for (e = new h(n = s(p.length)); n > y; y++) u(e, y, g ? v(p[y], y) : p[y]);
            else
                for (f = b.call(p), e = new h; !(o = f.next()).done; y++) u(e, y, g ? c(f, v, [o.value, y], !0) : o.value); return e.length = y, e } }) }, function(t, n, e) { var r = e(6);
    t.exports = function(t, n, e, o) { try { return o ? n(r(e)[0], e[1]) : n(e) } catch (n) { var i = t.return; throw void 0 !== i && r(i.call(t)), n } } }, function(t, n, e) { var r = e(39),
        o = e(1)("iterator"),
        i = Array.prototype;
    t.exports = function(t) { return void 0 !== t && (r.Array === t || i[o] === t) } }, function(t, n, e) { var r = e(57),
        o = e(1)("iterator"),
        i = e(39);
    t.exports = e(24).getIteratorMethod = function(t) { if (null != t) return t[o] || t["@@iterator"] || i[r(t)] } }, function(t, n, e) { var r = e(1)("iterator"),
        o = !1; try { var i = [7][r]();
        i.return = function() { o = !0 }, Array.from(i, (function() { throw 2 })) } catch (t) {} t.exports = function(t, n) { if (!n && !o) return !1; var e = !1; try { var i = [7],
                c = i[r]();
            c.next = function() { return { done: e = !0 } }, i[r] = function() { return c }, t(i) } catch (t) {} return e } }, function(t, n, e) { "use strict";
    e(300); var r = e(6),
        o = e(80),
        i = e(14),
        c = "toString",
        a = /./.toString,
        s = function(t) { e(19)(RegExp.prototype, c, t, !0) };
    e(15)((function() { return "/a/b" != a.call({ source: "a", flags: "b" }) })) ? s((function() { var t = r(this); return "/".concat(t.source, "/", "flags" in t ? t.flags : !i && t instanceof RegExp ? o.call(t) : void 0) })) : a.name != c && s((function() { return a.call(this) })) }, function(t, n, e) { e(14) && "g" != /./g.flags && e(11).f(RegExp.prototype, "flags", { configurable: !0, get: e(80) }) }, function(t, n, e) { e(92)("asyncIterator") }, function(t, n, e) { "use strict"; var r = e(13),
        o = e(89)(!0);
    r(r.P, "Array", { includes: function(t) { return o(this, t, arguments.length > 1 ? arguments[1] : void 0) } }), e(79)("includes") }, function(t, n, e) { "use strict"; var r = e(13),
        o = e(304),
        i = "includes";
    r(r.P + r.F * e(305)(i), "String", { includes: function(t) { return !!~o(this, t, i).indexOf(t, arguments.length > 1 ? arguments[1] : void 0) } }) }, function(t, n, e) { var r = e(134),
        o = e(33);
    t.exports = function(t, n, e) { if (r(n)) throw TypeError("String#" + e + " doesn't accept regex!"); return String(o(t)) } }, function(t, n, e) { var r = e(1)("match");
    t.exports = function(t) { var n = /./; try { "/./" [t](n) } catch (e) { try { return n[r] = !1, !"/./" [t](n) } catch (t) {} } return !0 } }, function(t, n, e) { var r = e(13),
        o = e(307)(!0);
    r(r.S, "Object", { entries: function(t) { return o(t) } }) }, function(t, n, e) { var r = e(25),
        o = e(17),
        i = e(46).f;
    t.exports = function(t) { return function(n) { for (var e, c = o(n), a = r(c), s = a.length, u = 0, l = []; s > u;) i.call(c, e = a[u++]) && l.push(t ? [e, c[e]] : c[e]); return l } } }, , , , function(t, n, e) { "use strict";
    e.r(n);
    e(293), e(294), e(299), e(301), e(120), e(137), e(302), e(303), e(306), e(127), e(78), e(131), e(132); var r = e(196);

    function o(t, n) { return function(t) { if (Array.isArray(t)) return t }(t) || function(t, n) { if ("undefined" == typeof Symbol || !(Symbol.iterator in Object(t))) return; var e = [],
                r = !0,
                o = !1,
                i = void 0; try { for (var c, a = t[Symbol.iterator](); !(r = (c = a.next()).done) && (e.push(c.value), !n || e.length !== n); r = !0); } catch (t) { o = !0, i = t } finally { try { r || null == a.return || a.return() } finally { if (o) throw i } } return e }(t, n) || function(t, n) { if (!t) return; if ("string" == typeof t) return i(t, n); var e = Object.prototype.toString.call(t).slice(8, -1); "Object" === e && t.constructor && (e = t.constructor.name); if ("Map" === e || "Set" === e) return Array.from(t); if ("Arguments" === e || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e)) return i(t, n) }(t, n) || function() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.") }() }

    function i(t, n) {
        (null == n || n > t.length) && (n = t.length); for (var e = 0, r = new Array(n); e < n; e++) r[e] = t[e]; return r } var c = new(e.n(r).a),
        a = "appstack-config-",
        s = ".js-settings",
        u = { theme: "default", layout: "fluid", sidebarPosition: "left", sidebarBehavior: "sticky" },
        l = { theme: ["default", "colored", "dark", "light"], layout: ["fluid", "boxed"], sidebarPosition: ["left", "right"], sidebarBehavior: ["sticky", "fixed", "compact"] },
        f = void 0,
        p = function() { document.body.appendChild(function(t) { var n = document.createElement("template"); return n.innerHTML = t, n.content.firstChild }('<div class="settings js-settings">\n  <div class="settings-toggle">\n    <div class="settings-toggle-option settings-toggle-option-text js-settings-toggle" title="Theme Builder">\n      <i class="align-middle" data-feather="sliders"></i>\n      Builder\n    </div>\n    <a class="settings-toggle-option" title="Documentation" href="docs-introduction.html" target="_blank">\n      <i class="align-middle" data-feather="book-open"></i>\n    </a>\n  </div>\n\n  <div class="settings-panel">\n    <div class="settings-content">\n      <div class="settings-title d-flex align-items-center">\n        <button type="button" class="btn-close float-right js-settings-toggle" aria-label="Close"></button>\n\n        <h4 class="mb-0 ms-2 d-inline-block">Theme Builder</h4>\n      </div>\n\n      <div class="settings-body">\n\n      <div class="alert alert-primary" role="alert">\n        <div class="alert-message">\n          <strong>Hey there!</strong> Set your own customized style below. Choose the ones that best fits your needs.\n        </div>\n      </div>\n\n        <div class="mb-3">\n          <span class="d-block font-size-lg font-weight-bold">Color scheme</span>\n          <span class="d-block text-muted mb-2">The perfect color mode for your app.</span>\n\n          <div class="row g-0 text-center mx-n1 mb-2">\n            <div class="col">\n              <label class="mx-1 d-block mb-1">\n                <input class="settings-scheme-label" type="radio" name="theme" value="default">\n                <div class="settings-scheme">\n                  <div class="settings-scheme-theme settings-scheme-theme-default"></div>\n                </div>\n              </label>\n              Default\n            </div>\n            <div class="col">\n              <label class="mx-1 d-block mb-1">\n                <input class="settings-scheme-label" type="radio" name="theme" value="colored">\n                <div class="settings-scheme">\n                  <div class="settings-scheme-theme settings-scheme-theme-colored"></div>\n                </div>\n              </label>\n              Colored\n            </div>\n          </div>\n          <div class="row g-0 text-center mx-n1">\n            <div class="col">\n              <label class="mx-1 d-block mb-1">\n                <input class="settings-scheme-label" type="radio" name="theme" value="dark">\n                <div class="settings-scheme">\n                  <div class="settings-scheme-theme settings-scheme-theme-dark"></div>\n                </div>\n              </label>\n              Dark\n            </div>\n            <div class="col">\n              <label class="mx-1 d-block mb-1">\n                <input class="settings-scheme-label" type="radio" name="theme" value="light">\n                <div class="settings-scheme">\n                  <div class="settings-scheme-theme settings-scheme-theme-light"></div>\n                </div>\n              </label>\n              Light\n            </div>\n          </div>\n        </div>\n        \n        <hr />\n\n        <div class="mb-3">\n          <span class="d-block font-size-lg font-weight-bold">Sidebar position</span>\n          <span class="d-block text-muted mb-2">Toggle the position of the sidebar.</span>\n\n          <div>\n            <label>\n              <input class="settings-button-label" type="radio" name="sidebarPosition" value="left">\n              <div class="settings-button">\n                Left\n              </div>\n            </label>\n            <label>\n              <input class="settings-button-label" type="radio" name="sidebarPosition" value="right">\n              <div class="settings-button">\n                Right\n              </div>\n            </label>\n          </div>\n        </div>\n\n        <hr />\n\n        <div class="mb-3">\n          <span class="d-block font-size-lg font-weight-bold">Sidebar behavior</span>\n          <span class="d-block text-muted mb-2">Change the behavior of the sidebar.</span>\n\n          <div>\n            <label>\n              <input class="settings-button-label" type="radio" name="sidebarBehavior" value="sticky">\n              <div class="settings-button">\n                Sticky\n              </div>\n            </label>\n            <label>\n              <input class="settings-button-label" type="radio" name="sidebarBehavior" value="fixed">\n              <div class="settings-button">\n                Fixed\n              </div>\n            </label>\n            <label>\n              <input class="settings-button-label" type="radio" name="sidebarBehavior" value="compact">\n              <div class="settings-button">\n                Compact\n              </div>\n            </label>\n          </div>\n        </div>\n\n        <hr />\n\n        <div class="mb-3">\n          <span class="d-block font-size-lg font-weight-bold">Layout</span>\n          <span class="d-block text-muted mb-2">Toggle container layout system.</span>\n\n          <div>\n            <label>\n              <input class="settings-button-label" type="radio" name="layout" value="fluid">\n              <div class="settings-button">\n                Fluid\n              </div>\n            </label>\n            <label>\n              <input class="settings-button-label" type="radio" name="layout" value="boxed">\n              <div class="settings-button">\n                Boxed\n              </div>\n            </label>\n          </div>\n        </div>\n\n      </div>\n\n      <div class="settings-footer">\n        <div class="d-grid">\n          <a class="btn btn-primary btn-lg btn-block" href="https://themes.getbootstrap.com/product/appstack-responsive-admin-template/" target="_blank">Purchase</a>\n        </div>\n      </div>\n\n    </div>\n  </div>\n</div>')), h(), d(), v(), g() },
        h = function() { var t = document.querySelector(s);
            document.querySelectorAll(".js-settings-toggle").forEach((function(n) { n.onclick = function(n) { n.preventDefault(), t.classList.toggle("open") } })), document.body.onclick = function(n) { t.contains(n.target) || t.classList.remove("open") } },
        d = function() { document.querySelector(s).querySelectorAll("input[type=radio]").forEach((function(t) { t.addEventListener("change", (function(t) { b(t.target.name, t.target.value), w(t.target.name, t.target.value) })) })) },
        v = function() { for (var t = 0, n = Object.entries(m()); t < n.length; t++) { var e = o(n[t], 2),
                    r = e[0],
                    i = e[1],
                    c = i || u[r];
                document.querySelector('input[name="'.concat(r, '"][value="').concat(c, '"]')).checked = !0 } },
        g = function() { setTimeout((function() { S("visited") || (document.querySelector(s).classList.toggle("open"), w("visited", !0)) }), 1e3) },
        y = function() { for (var t = 0, n = Object.entries(m()); t < n.length; t++) { var e = o(n[t], 2),
                    r = e[0],
                    i = e[1];
                b(r, i || u[r]) } },
        b = function(t, n) { if ("theme" === t) { var e = "dark" === n ? "dark" : "light";
                document.querySelector(".js-stylesheet").setAttribute("href", "css/".concat(e, ".css")), f && f !== e && window.location.replace(window.location.pathname), f = e } document.body.dataset[t] = n },
        m = function() { return { theme: S("theme"), layout: S("layout"), sidebarPosition: S("sidebarPosition"), sidebarBehavior: S("sidebarBehavior") } },
        x = function() { O("theme"), O("layout"), O("sidebarPosition"), O("sidebarBehavior") },
        S = function(t) { return localStorage.getItem("".concat(a).concat(t)) },
        w = function(t, n) { localStorage.setItem("".concat(a).concat(t), n) },
        O = function(t) { localStorage.removeItem("".concat(a).concat(t)) };
    document.addEventListener("DOMContentLoaded", (function() { return p() })); var j = new MutationObserver((function() { document.body && (Object.keys(c.query).length > 0 ? (x(), Object.entries(c.query).forEach((function(t) { var n = o(t, 2),
                e = n[0],
                r = n[1];
            l[e] && l[e].includes(r) && (b(e, r), w(e, r)) }))) : y(), j.disconnect()) }));
    j.observe(document.documentElement, { childList: !0 }) }]);