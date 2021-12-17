! function (t) {
    "use strict";

    function e(t, e) {
        return t(e = {
            exports: {}
        }, e.exports), e.exports
    }
    var n = e((function (t) {
            var e = t.exports = "undefined" != typeof window && window.Math == Math ? window : "undefined" != typeof self && self.Math == Math ? self : Function("return this")();
            "number" == typeof __g && (__g = e)
        })),
        a = e((function (t) {
            var e = t.exports = {
                version: "2.6.11"
            };
            "number" == typeof __e && (__e = e)
        })),
        o = (a.version, function (t) {
            return "object" == typeof t ? null !== t : "function" == typeof t
        }),
        r = function (t) {
            if (!o(t)) throw TypeError(t + " is not an object!");
            return t
        },
        s = function (t) {
            try {
                return !!t()
            } catch (t) {
                return !0
            }
        },
        c = !s((function () {
            return 7 != Object.defineProperty({}, "a", {
                get: function () {
                    return 7
                }
            }).a
        })),
        l = n.document,
        u = o(l) && o(l.createElement),
        h = function (t) {
            return u ? l.createElement(t) : {}
        },
        f = !c && !s((function () {
            return 7 != Object.defineProperty(h("div"), "a", {
                get: function () {
                    return 7
                }
            }).a
        })),
        d = function (t, e) {
            if (!o(t)) return t;
            var n, i;
            if (e && "function" == typeof (n = t.toString) && !o(i = n.call(t))) return i;
            if ("function" == typeof (n = t.valueOf) && !o(i = n.call(t))) return i;
            if (!e && "function" == typeof (n = t.toString) && !o(i = n.call(t))) return i;
            throw TypeError("Can't convert object to primitive value")
        },
        p = Object.defineProperty,
        g = {
            f: c ? Object.defineProperty : function (t, e, n) {
                if (r(t), e = d(e, !0), r(n), f) try {
                    return p(t, e, n)
                } catch (t) {}
                if ("get" in n || "set" in n) throw TypeError("Accessors not supported!");
                return "value" in n && (t[e] = n.value), t
            }
        },
        m = function (t, e) {
            return {
                enumerable: !(1 & t),
                configurable: !(2 & t),
                writable: !(4 & t),
                value: e
            }
        },
        v = c ? function (t, e, n) {
            return g.f(t, e, m(1, n))
        } : function (t, e, n) {
            return t[e] = n, t
        },
        y = {}.hasOwnProperty,
        w = function (t, e) {
            return y.call(t, e)
        },
        b = 0,
        _ = Math.random(),
        I = function (t) {
            return "Symbol(".concat(void 0 === t ? "" : t, ")_", (++b + _).toString(36))
        },
        x = e((function (t) {
            var e = n["__core-js_shared__"] || (n["__core-js_shared__"] = {});
            (t.exports = function (t, n) {
                return e[t] || (e[t] = void 0 !== n ? n : {})
            })("versions", []).push({
                version: a.version,
                mode: "global",
                copyright: "\xa9 2019 Denis Pushkarev (zloirock.ru)"
            })
        })),
        k = x("native-function-to-string", Function.toString),
        C = e((function (t) {
            var e = I("src"),
                i = ("" + k).split("toString");
            a.inspectSource = function (t) {
                return k.call(t)
            }, (t.exports = function (t, a, o, r) {
                var s = "function" == typeof o;
                s && (w(o, "name") || v(o, "name", a)), t[a] !== o && (s && (w(o, e) || v(o, e, t[a] ? "" + t[a] : i.join(String(a)))), t === n ? t[a] = o : r ? t[a] ? t[a] = o : v(t, a, o) : (delete t[a], v(t, a, o)))
            })(Function.prototype, "toString", (function () {
                return "function" == typeof this && this[e] || k.call(this)
            }))
        })),
        j = function (t) {
            if ("function" != typeof t) throw TypeError(t + " is not a function!");
            return t
        },
        S = function (t, e, n) {
            if (j(t), void 0 === e) return t;
            switch (n) {
                case 1:
                    return function (n) {
                        return t.call(e, n)
                    };
                case 2:
                    return function (n, i) {
                        return t.call(e, n, i)
                    };
                case 3:
                    return function (n, i, a) {
                        return t.call(e, n, i, a)
                    }
            }
            return function () {
                return t.apply(e, arguments)
            }
        },
        E = function (t, e, i) {
            var o, r, s, c, l = t & E.F,
                u = t & E.G,
                h = t & E.S,
                f = t & E.P,
                d = t & E.B,
                p = u ? n : h ? n[e] || (n[e] = {}) : (n[e] || {}).prototype,
                g = u ? a : a[e] || (a[e] = {}),
                m = g.prototype || (g.prototype = {});
            for (o in u && (i = e), i) s = ((r = !l && p && void 0 !== p[o]) ? p : i)[o], c = d && r ? S(s, n) : f && "function" == typeof s ? S(Function.call, s) : s, p && C(p, o, s, t & E.U), g[o] != s && v(g, o, c), f && m[o] != s && (m[o] = s)
        };
    n.core = a, E.F = 1, E.G = 2, E.S = 4, E.P = 8, E.B = 16, E.W = 32, E.U = 64, E.R = 128;
    var T = E,
        z = function (t) {
            if (null == t) throw TypeError("Can't call method on  " + t);
            return t
        },
        A = /"/g,
        O = function (t, e, n, i) {
            var a = String(z(t)),
                o = "<" + e;
            return "" !== n && (o += " " + n + '="' + String(i).replace(A, "&quot;") + '"'), o + ">" + a + "</" + e + ">"
        };
    ! function (t, e) {
        var n = {};
        n[t] = e(O), T(T.P + T.F * s((function () {
            var e = "" [t]('"');
            return e !== e.toLowerCase() || e.split('"').length > 3
        })), "String", n)
    }("link", (function (t) {
        return function (e) {
            return t(this, "a", "href", e)
        }
    }));
    var P = {}.toString,
        M = function (t) {
            return P.call(t).slice(8, -1)
        },
        N = Object("z").propertyIsEnumerable(0) ? Object : function (t) {
            return "String" == M(t) ? t.split("") : Object(t)
        },
        q = function (t) {
            return Object(z(t))
        },
        D = Math.ceil,
        L = Math.floor,
        R = function (t) {
            return isNaN(t = +t) ? 0 : (t > 0 ? L : D)(t)
        },
        B = Math.min,
        F = function (t) {
            return t > 0 ? B(R(t), 9007199254740991) : 0
        },
        V = Array.isArray || function (t) {
            return "Array" == M(t)
        },
        H = e((function (t) {
            var e = x("wks"),
                i = n.Symbol,
                a = "function" == typeof i;
            (t.exports = function (t) {
                return e[t] || (e[t] = a && i[t] || (a ? i : I)("Symbol." + t))
            }).store = e
        })),
        U = H("species"),
        Z = function (t, e) {
            return new(function (t) {
                var e;
                return V(t) && ("function" != typeof (e = t.constructor) || e !== Array && !V(e.prototype) || (e = void 0), o(e) && null === (e = e[U]) && (e = void 0)), void 0 === e ? Array : e
            }(t))(e)
        },
        W = H("unscopables"),
        G = Array.prototype;
    null == G[W] && v(G, W, {});
    var X, J, K, Y, Q, tt, et, nt, it, at = function (t) {
            G[W][t] = !0
        },
        ot = (K = 1 == (X = 5), Y = 2 == X, Q = 3 == X, tt = 4 == X, et = 6 == X, nt = 5 == X || et, it = J || Z, function (t, e, n) {
            for (var i, a, o = q(t), r = N(o), s = S(e, n, 3), c = F(r.length), l = 0, u = K ? it(t, c) : Y ? it(t, 0) : void 0; c > l; l++)
                if ((nt || l in r) && (a = s(i = r[l], l, o), X))
                    if (K) u[l] = a;
                    else if (a) switch (X) {
                case 3:
                    return !0;
                case 5:
                    return i;
                case 6:
                    return l;
                case 2:
                    u.push(i)
            } else if (tt) return !1;
            return et ? -1 : Q || tt ? tt : u
        }),
        rt = !0;
    "find" in [] && Array(1).find((function () {
        rt = !1
    })), T(T.P + T.F * rt, "Array", {
        find: function (t) {
            return ot(this, t, arguments.length > 1 ? arguments[1] : void 0)
        }
    }), at("find");
    var st = {
        init: function () {
            $(".EC_result .c-tools .c-icon").click((function (t) {
                t.preventDefault(), t.stopPropagation()
            })), $(".EC_result .c-icon-air").click((function (t) {
                t.preventDefault()
            }));
            var t = $('<div class="ec-d20-recomm-wrap-nobg c-gap-top" style="font-size"><i class="c-icon ec-d20-search-icon">&#xe608;</i><span class="c-font-normal">\u4e3a\u60a8\u63a8\u8350\uff1a</span></div>');
            $(".EC_result a").on("click", (function () {
                if (!$(this).hasClass("ec_d20_recomm_link")) {
                    $(".ec_d20_recomm_link").hide(), $(".ec-d20-recomm-wrap-nobg").hide();
                    var e = $(this).closest(".EC_result");
                    t.find(".ec_d20_recomm_link").remove();
                    var n = e.next(".c-recomm-wrap").find(".ec_d20_recomm_link").clone();
                    if (n.length > 0) {
                        e.append(t), t.append(n.css("display", "inline-block")), t.show();
                        for (var i = n, a = 0, o = 0, r = i.length; o < r; o++) {
                            var s = i.eq(o),
                                c = 0 === o ? s.width() + 6 : s.width() + 23;
                            (a += c) >= 469 && (i.eq(o).css("margin-left", "85px").before('<span class="ec_d20_recomm_link" style="height:0;width:0;display:block;"></span>'), a = c)
                        }
                        t.find("a").off("mousedown").on("mousedown", (function (n) {
                            var i = e.data("rank"),
                                a = t.find("a").index(this);
                            $(this).attr("href", function t(e, n, i) {
                                var a = "";
                                try {
                                    a = window.bds.se.link.getSearchUrl(e, {
                                        pos: "ad_" + n + "_crs_" + i
                                    })
                                } catch (o) {
                                    a = t(e, {
                                        pos: "ad_" + n + "_crs_" + i
                                    })
                                }
                                return a
                            }($(this).text(), i, a))
                        }))
                    }
                }
            }))
        }
    };

    function ct(t, e) {
        if (t) {
            var n = (new Date).getTime(),
                i = new Image;
            t += "&rand=" + (n + Math.random()), window.ecomLogImage || (window.ecomLogImage = {}), window.ecomLogImage["--IMAGE" + n] = i, e = e || {};
            var a = !1;
            i.onload = i.onerror = i.onabort = function (o) {
                if (!e.charge)
                    if (o && "load" !== o.type) {
                        if (!a) return i.src = t, void(a = !0);
                        "error" in e && e.error()
                    } else "load" in e && e.load();
                i.onload = i.onerror = i.onabort = null, window.ecomLogImage["--IMAGE" + n] = null, i = null
            }, i.src = t
        }
    }
    var lt, ut = function (t) {
            return N(z(t))
        },
        ht = Math.max,
        ft = Math.min,
        dt = function (t, e) {
            return (t = R(t)) < 0 ? ht(t + e, 0) : ft(t, e)
        },
        pt = x("keys"),
        gt = function (t) {
            return pt[t] || (pt[t] = I(t))
        },
        mt = (lt = !1, function (t, e, n) {
            var i, a = ut(t),
                o = F(a.length),
                r = dt(n, o);
            if (lt && e != e) {
                for (; o > r;)
                    if ((i = a[r++]) != i) return !0
            } else
                for (; o > r; r++)
                    if ((lt || r in a) && a[r] === e) return lt || r || 0;
            return !lt && -1
        }),
        vt = gt("IE_PROTO"),
        yt = function (t, e) {
            var n, i = ut(t),
                a = 0,
                o = [];
            for (n in i) n != vt && w(i, n) && o.push(n);
            for (; e.length > a;) w(i, n = e[a++]) && (~mt(o, n) || o.push(n));
            return o
        },
        wt = "constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf".split(","),
        bt = Object.keys || function (t) {
            return yt(t, wt)
        },
        _t = {
            f: Object.getOwnPropertySymbols
        },
        It = {
            f: {}.propertyIsEnumerable
        },
        xt = Object.assign,
        kt = !xt || s((function () {
            var t = {},
                e = {},
                n = Symbol(),
                i = "abcdefghijklmnopqrst";
            return t[n] = 7, i.split("").forEach((function (t) {
                e[t] = t
            })), 7 != xt({}, t)[n] || Object.keys(xt({}, e)).join("") != i
        })) ? function (t, e) {
            for (var n = q(t), i = arguments.length, a = 1, o = _t.f, r = It.f; i > a;)
                for (var s, l = N(arguments[a++]), u = o ? bt(l).concat(o(l)) : bt(l), h = u.length, f = 0; h > f;) s = u[f++], c && !r.call(l, s) || (n[s] = l[s]);
            return n
        } : xt;
    T(T.S + T.F, "Object", {
        assign: kt
    });
    var $t = H("match"),
        Ct = function (t) {
            var e;
            return o(t) && (void 0 !== (e = t[$t]) ? !!e : "RegExp" == M(t))
        },
        jt = H("species"),
        St = function (t) {
            return function (e, n) {
                var i, a, o = String(z(e)),
                    r = R(n),
                    s = o.length;
                return r < 0 || r >= s ? t ? "" : void 0 : (i = o.charCodeAt(r)) < 55296 || i > 56319 || r + 1 === s || (a = o.charCodeAt(r + 1)) < 56320 || a > 57343 ? t ? o.charAt(r) : i : t ? o.slice(r, r + 2) : a - 56320 + (i - 55296 << 10) + 65536
            }
        }(!0),
        Et = function (t, e, n) {
            return e + (n ? St(t, e).length : 1)
        },
        Tt = H("toStringTag"),
        zt = "Arguments" == M(function () {
            return arguments
        }()),
        At = function (t) {
            var e, n, i;
            return void 0 === t ? "Undefined" : null === t ? "Null" : "string" == typeof (n = function (t, e) {
                try {
                    return t[e]
                } catch (t) {}
            }(e = Object(t), Tt)) ? n : zt ? M(e) : "Object" == (i = M(e)) && "function" == typeof e.callee ? "Arguments" : i
        },
        Ot = RegExp.prototype.exec,
        Pt = function (t, e) {
            var n = t.exec;
            if ("function" == typeof n) {
                var i = n.call(t, e);
                if ("object" != typeof i) throw new TypeError("RegExp exec method returned something other than an Object or null");
                return i
            }
            if ("RegExp" !== At(t)) throw new TypeError("RegExp#exec called on incompatible receiver");
            return Ot.call(t, e)
        },
        Mt = function () {
            var t = r(this),
                e = "";
            return t.global && (e += "g"), t.ignoreCase && (e += "i"), t.multiline && (e += "m"), t.unicode && (e += "u"), t.sticky && (e += "y"), e
        },
        Nt = RegExp.prototype.exec,
        qt = String.prototype.replace,
        Dt = Nt,
        Lt = function () {
            var t = /a/,
                e = /b*/g;
            return Nt.call(t, "a"), Nt.call(e, "a"), 0 !== t.lastIndex || 0 !== e.lastIndex
        }(),
        Rt = void 0 !== /()??/.exec("")[1];
    (Lt || Rt) && (Dt = function (t) {
        var e, n, i, a, o = this;
        return Rt && (n = new RegExp("^" + o.source + "$(?!\\s)", Mt.call(o))), Lt && (e = o.lastIndex), i = Nt.call(o, t), Lt && i && (o.lastIndex = o.global ? i.index + i[0].length : e), Rt && i && i.length > 1 && qt.call(i[0], n, (function () {
            for (a = 1; a < arguments.length - 2; a++) void 0 === arguments[a] && (i[a] = void 0)
        })), i
    });
    var Bt = Dt;
    T({
        target: "RegExp",
        proto: !0,
        forced: Bt !== /./.exec
    }, {
        exec: Bt
    });
    var Ft = H("species"),
        Vt = !s((function () {
            var t = /./;
            return t.exec = function () {
                var t = [];
                return t.groups = {
                    a: "7"
                }, t
            }, "7" !== "".replace(t, "$<a>")
        })),
        Ht = function () {
            var t = /(?:)/,
                e = t.exec;
            t.exec = function () {
                return e.apply(this, arguments)
            };
            var n = "ab".split(t);
            return 2 === n.length && "a" === n[0] && "b" === n[1]
        }(),
        Ut = function (t, e, n) {
            var i = H(t),
                a = !s((function () {
                    var e = {};
                    return e[i] = function () {
                        return 7
                    }, 7 != "" [t](e)
                })),
                o = a ? !s((function () {
                    var e = !1,
                        n = /a/;
                    return n.exec = function () {
                        return e = !0, null
                    }, "split" === t && (n.constructor = {}, n.constructor[Ft] = function () {
                        return n
                    }), n[i](""), !e
                })) : void 0;
            if (!a || !o || "replace" === t && !Vt || "split" === t && !Ht) {
                var r = /./ [i],
                    c = n(z, i, "" [t], (function (t, e, n, i, o) {
                        return e.exec === Bt ? a && !o ? {
                            done: !0,
                            value: r.call(e, n, i)
                        } : {
                            done: !0,
                            value: t.call(n, e, i)
                        } : {
                            done: !1
                        }
                    })),
                    l = c[0],
                    u = c[1];
                C(String.prototype, t, l), v(RegExp.prototype, i, 2 == e ? function (t, e) {
                    return u.call(t, this, e)
                } : function (t) {
                    return u.call(t, this)
                })
            }
        },
        Zt = Math.min,
        Wt = [].push,
        Gt = "length",
        Xt = !s((function () {
            RegExp(4294967295, "y")
        }));

    function Jt(t, e) {
        if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
    }

    function Kt(t, e) {
        for (var n = 0; n < e.length; n++) {
            var i = e[n];
            i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(t, i.key, i)
        }
    }

    function Yt(t, e, n) {
        return e && Kt(t.prototype, e), n && Kt(t, n), t
    }

    function Qt(t, e, n) {
        return e in t ? Object.defineProperty(t, e, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : t[e] = n, t
    }

    function te(t, e) {
        var n = Object.keys(t);
        if (Object.getOwnPropertySymbols) {
            var i = Object.getOwnPropertySymbols(t);
            e && (i = i.filter((function (e) {
                return Object.getOwnPropertyDescriptor(t, e).enumerable
            }))), n.push.apply(n, i)
        }
        return n
    }

    function ee(t) {
        for (var e = 1; e < arguments.length; e++) {
            var n = null != arguments[e] ? arguments[e] : {};
            e % 2 ? te(Object(n), !0).forEach((function (e) {
                Qt(t, e, n[e])
            })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : te(Object(n)).forEach((function (e) {
                Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e))
            }))
        }
        return t
    }

    function ne(t) {
        return (ne = Object.setPrototypeOf ? Object.getPrototypeOf : function (t) {
            return t.__proto__ || Object.getPrototypeOf(t)
        })(t)
    }

    function ie(t, e) {
        return (ie = Object.setPrototypeOf || function (t, e) {
            return t.__proto__ = e, t
        })(t, e)
    }

    function ae() {
        if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
        if (Reflect.construct.sham) return !1;
        if ("function" == typeof Proxy) return !0;
        try {
            return Date.prototype.toString.call(Reflect.construct(Date, [], (function () {}))), !0
        } catch (t) {
            return !1
        }
    }

    function oe(t, e) {
        return !e || "object" != typeof e && "function" != typeof e ? function (t) {
            if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return t
        }(t) : e
    }
    Ut("split", 2, (function (t, e, n, i) {
        var a;
        return a = "c" == "abbc".split(/(b)*/)[1] || 4 != "test".split(/(?:)/, -1)[Gt] || 2 != "ab".split(/(?:ab)*/)[Gt] || 4 != ".".split(/(.?)(.?)/)[Gt] || ".".split(/()()/)[Gt] > 1 || "".split(/.?/)[Gt] ? function (t, e) {
            var i = String(this);
            if (void 0 === t && 0 === e) return [];
            if (!Ct(t)) return n.call(i, t, e);
            for (var a, o, r, s = [], c = (t.ignoreCase ? "i" : "") + (t.multiline ? "m" : "") + (t.unicode ? "u" : "") + (t.sticky ? "y" : ""), l = 0, u = void 0 === e ? 4294967295 : e >>> 0, h = new RegExp(t.source, c + "g");
                (a = Bt.call(h, i)) && !((o = h.lastIndex) > l && (s.push(i.slice(l, a.index)), a[Gt] > 1 && a.index < i[Gt] && Wt.apply(s, a.slice(1)), r = a[0][Gt], l = o, s[Gt] >= u));) h.lastIndex === a.index && h.lastIndex++;
            return l === i[Gt] ? !r && h.test("") || s.push("") : s.push(i.slice(l)), s[Gt] > u ? s.slice(0, u) : s
        } : "0".split(void 0, 0)[Gt] ? function (t, e) {
            return void 0 === t && 0 === e ? [] : n.call(this, t, e)
        } : n, [function (n, i) {
            var o = t(this),
                r = null == n ? void 0 : n[e];
            return void 0 !== r ? r.call(n, o, i) : a.call(String(o), n, i)
        }, function (t, e) {
            var o = i(a, t, this, e, a !== n);
            if (o.done) return o.value;
            var s = r(t),
                c = String(this),
                l = function (t, e) {
                    var n, i = r(t).constructor;
                    return void 0 === i || null == (n = r(i)[jt]) ? e : j(n)
                }(s, RegExp),
                u = s.unicode,
                h = (s.ignoreCase ? "i" : "") + (s.multiline ? "m" : "") + (s.unicode ? "u" : "") + (Xt ? "y" : "g"),
                f = new l(Xt ? s : "^(?:" + s.source + ")", h),
                d = void 0 === e ? 4294967295 : e >>> 0;
            if (0 === d) return [];
            if (0 === c.length) return null === Pt(f, c) ? [c] : [];
            for (var p = 0, g = 0, m = []; g < c.length;) {
                f.lastIndex = Xt ? g : 0;
                var v, y = Pt(f, Xt ? c : c.slice(g));
                if (null === y || (v = Zt(F(f.lastIndex + (Xt ? 0 : g)), c.length)) === p) g = Et(c, g, u);
                else {
                    if (m.push(c.slice(p, g)), m.length === d) return m;
                    for (var w = 1; w <= y.length - 1; w++)
                        if (m.push(y[w]), m.length === d) return m;
                    g = p = v
                }
            }
            return m.push(c.slice(p)), m
        }]
    }));
    var re = e((function (t) {
            var e = Object.prototype.hasOwnProperty,
                n = "~";

            function i() {}

            function a(t, e, n) {
                this.fn = t, this.context = e, this.once = n || !1
            }

            function o(t, e, i, o, r) {
                if ("function" != typeof i) throw new TypeError("The listener must be a function");
                var s = new a(i, o || t, r),
                    c = n ? n + e : e;
                return t._events[c] ? t._events[c].fn ? t._events[c] = [t._events[c], s] : t._events[c].push(s) : (t._events[c] = s, t._eventsCount++), t
            }

            function r(t, e) {
                0 == --t._eventsCount ? t._events = new i : delete t._events[e]
            }

            function s() {
                this._events = new i, this._eventsCount = 0
            }
            Object.create && (i.prototype = Object.create(null), (new i).__proto__ || (n = !1)), s.prototype.eventNames = function () {
                var t, i, a = [];
                if (0 === this._eventsCount) return a;
                for (i in t = this._events) e.call(t, i) && a.push(n ? i.slice(1) : i);
                return Object.getOwnPropertySymbols ? a.concat(Object.getOwnPropertySymbols(t)) : a
            }, s.prototype.listeners = function (t) {
                var e = n ? n + t : t,
                    i = this._events[e];
                if (!i) return [];
                if (i.fn) return [i.fn];
                for (var a = 0, o = i.length, r = new Array(o); a < o; a++) r[a] = i[a].fn;
                return r
            }, s.prototype.listenerCount = function (t) {
                var e = n ? n + t : t,
                    i = this._events[e];
                return i ? i.fn ? 1 : i.length : 0
            }, s.prototype.emit = function (t, e, i, a, o, r) {
                var s = n ? n + t : t;
                if (!this._events[s]) return !1;
                var c, l, u = this._events[s],
                    h = arguments.length;
                if (u.fn) {
                    switch (u.once && this.removeListener(t, u.fn, void 0, !0), h) {
                        case 1:
                            return u.fn.call(u.context), !0;
                        case 2:
                            return u.fn.call(u.context, e), !0;
                        case 3:
                            return u.fn.call(u.context, e, i), !0;
                        case 4:
                            return u.fn.call(u.context, e, i, a), !0;
                        case 5:
                            return u.fn.call(u.context, e, i, a, o), !0;
                        case 6:
                            return u.fn.call(u.context, e, i, a, o, r), !0
                    }
                    for (l = 1, c = new Array(h - 1); l < h; l++) c[l - 1] = arguments[l];
                    u.fn.apply(u.context, c)
                } else {
                    var f, d = u.length;
                    for (l = 0; l < d; l++) switch (u[l].once && this.removeListener(t, u[l].fn, void 0, !0), h) {
                        case 1:
                            u[l].fn.call(u[l].context);
                            break;
                        case 2:
                            u[l].fn.call(u[l].context, e);
                            break;
                        case 3:
                            u[l].fn.call(u[l].context, e, i);
                            break;
                        case 4:
                            u[l].fn.call(u[l].context, e, i, a);
                            break;
                        default:
                            if (!c)
                                for (f = 1, c = new Array(h - 1); f < h; f++) c[f - 1] = arguments[f];
                            u[l].fn.apply(u[l].context, c)
                    }
                }
                return !0
            }, s.prototype.on = function (t, e, n) {
                return o(this, t, e, n, !1)
            }, s.prototype.once = function (t, e, n) {
                return o(this, t, e, n, !0)
            }, s.prototype.removeListener = function (t, e, i, a) {
                var o = n ? n + t : t;
                if (!this._events[o]) return this;
                if (!e) return r(this, o), this;
                var s = this._events[o];
                if (s.fn) s.fn !== e || a && !s.once || i && s.context !== i || r(this, o);
                else {
                    for (var c = 0, l = [], u = s.length; c < u; c++)(s[c].fn !== e || a && !s[c].once || i && s[c].context !== i) && l.push(s[c]);
                    l.length ? this._events[o] = 1 === l.length ? l[0] : l : r(this, o)
                }
                return this
            }, s.prototype.removeAllListeners = function (t) {
                var e;
                return t ? (e = n ? n + t : t, this._events[e] && r(this, e)) : (this._events = new i, this._eventsCount = 0), this
            }, s.prototype.off = s.prototype.removeListener, s.prototype.addListener = s.prototype.on, s.prefixed = n, s.EventEmitter = s, t.exports = s
        })),
        se = {},
        ce = {},
        le = function (t) {
            ! function (t, e) {
                if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function");
                t.prototype = Object.create(e && e.prototype, {
                    constructor: {
                        value: t,
                        writable: !0,
                        configurable: !0
                    }
                }), e && ie(t, e)
            }(i, t);
            var e, n = (e = i, function () {
                var t, n = ne(e);
                if (ae()) {
                    var i = ne(this).constructor;
                    t = Reflect.construct(n, arguments, i)
                } else t = n.apply(this, arguments);
                return oe(this, t)
            });

            function i(t) {
                var e;
                return Jt(this, i), e = n.call(this), se = t, ce = t, e
            }
            return Yt(i, [{
                key: "set",
                value: function (t, e) {
                    for (var n = this.get(t), i = t.split("."), a = se, o = 0, r = i.length; o < r; o++) void 0 === a[i[o]] && (a[i[o]] = {}), o === r - 1 && (a[i[o]] = e, this.emit("env:change[".concat(t, "]"), [n, e])), a = a[i[o]]
                }
            }, {
                key: "get",
                value: function (t) {
                    for (var e = t.split("."), n = se, i = 0, a = e.length; i < a; i++) {
                        if (void 0 === n[e[i]]) return n[e[i]];
                        n = n[e[i]]
                    }
                    return n
                }
            }, {
                key: "getValue",
                value: function () {
                    return Object.assign({}, se)
                }
            }, {
                key: "getInitValue",
                value: function () {
                    return Object.assign({}, ce)
                }
            }]), i
        }(re),
        ue = null,
        he = function (t) {
            return ue || (ue = new le(t)), ue
        },
        fe = "https://fclick.baidu.com/w.gif";

    function de(t) {
        var e = he().getValue();
        !t.searchId && e && e.searchid && (t.searchId = e.searchid), "ecom_wise_listen_n" === t.tag && e && (!t.asp_time && e.aspTime && (t.asp_time = e.aspTime), !t.query && e.queryWordEnc && (t.query = e.queryWordEnc), !t.queryUtf8 && e.query && (t.queryUtf8 = e.query));
        var n = [];
        for (var i in t) t.hasOwnProperty(i) && n.push(encodeURIComponent(i) + "=" + encodeURIComponent(t[i]));
        return n.join("&")
    }

    function pe(t) {
        ct([fe, de(t)].join("?"))
    }
    var ge = {
        init: function () {
            pe({
                tag: "pc_9083_autoplay_init"
            });
            var t = $("[data-autoplay] video");
            if (0 === t.length) return !1;
            pe({
                tag: "pc_9083_autoplay_video_len",
                videoLen: t.length
            });
            var e = 1,
                n = t[0];
            if (n.canPlayType) {
                var i = window.navigator.userAgent;
                if (i && i.indexOf("iPad") > 0 && i.indexOf("Intel") < 0 && i.indexOf("Baidu") < 0) return !1;
                $(n).show(), n.volume = 0, n.play(), $(n).siblings(".ec-video-volume-close").show(), $(n).siblings(".ec-video-volume-close").on("click", (function (t) {
                    t.preventDefault(), $(this).hasClass("ec-video-volume-open") ? (n.muted = !0, n.volume = 0) : (n.muted = !1, n.volume = 1), $(this).toggleClass("ec-video-volume-open")
                })), setTimeout((function () {
                    $("[data-autoplay]").each((function (t, e) {
                        $(e).children().last().show()
                    }))
                }), 3e3), setTimeout((function () {
                    $("[data-autoplay]").each((function (t, e) {
                        $(e).children().last().css("backgroundColor", "rgba(78,110,242,1)")
                    }))
                }), 5e3)
            } else e = 0;
            pe({
                tag: "pc_9083_autoplay",
                canAutoPlay: e
            })
        }
    };
    c && "g" != /./g.flags && g.f(RegExp.prototype, "flags", {
        configurable: !0,
        get: Mt
    });
    var me = /./.toString,
        ve = function (t) {
            C(RegExp.prototype, "toString", t, !0)
        };
    s((function () {
        return "/a/b" != me.call({
            source: "a",
            flags: "b"
        })
    })) ? ve((function () {
        var t = r(this);
        return "/".concat(t.source, "/", "flags" in t ? t.flags : !c && t instanceof RegExp ? Mt.call(t) : void 0)
    })) : "toString" != me.name && ve((function () {
        return me.call(this)
    }));
    var ye = {};
    ye[H("toStringTag")] = "z", ye + "" != "[object z]" && C(Object.prototype, "toString", (function () {
        return "[object " + At(this) + "]"
    }), !0);
    var we, be = function (t) {
        this.env = t || {}
    };
    be.prototype = {
        report: function (t) {
            pe(this.extend(this.env, {
                tag: "ps-js-error",
                datetime: (new Date).getTime(),
                message: t.message,
                stack: t.stack
            }))
        },
        support: function (t, e) {
            if ("function" == typeof t) {
                e = t;
                try {
                    e()
                } catch (t) {
                    this.report(t)
                }
            } else {
                var n = t[e];
                t[e] = function () {
                    try {
                        for (var e = arguments.length, i = new Array(e), a = 0; a < e; a++) i[a] = arguments[a];
                        n.apply(t, i)
                    } catch (t) {
                        this.report(t)
                    }
                }
            }
        },
        extend: function () {
            for (var t = {}, e = 0, n = arguments.length; e < n; e++)
                if ("[object Object]" === Object.prototype.toString.call(arguments[e]))
                    for (var i in arguments[e]) t[i] = arguments[e][i];
            return t
        }
    };
    var _e = function (t) {
        return we || (we = new be(t)), we
    };

    function Ie(t, e, n) {
        var i = _e(n || {});
        !0 === e ? i.support(t) : window.addEventListener ? window.addEventListener("load", (function () {
            i.support(t)
        }), !1) : window.attachEvent ? window.attachEvent("onload", (function () {
            i.support(t)
        })) : window.onload ? window.onload = function () {
            i.support(t)
        } : i.support(t)
    }
    var xe = function () {
        $(".EC_result").on("mousedown", (function (t) {
            var e = t.target,
                n = $(e).closest("a");
            if (n.length && !n.attr("data-nolog")) {
                var i, a = function (t, e) {
                        for (var n, i, a, o, r = []; t && t !== e;) n = t.tagName, o = t, a = 0 === (i = $(o).parent().children(o.tagName).index(o)) ? n : n + (i + 1), r.unshift(a.toLowerCase()), t = t.parentNode;
                        return r.join("-")
                    }(n.get(0), this),
                    o = $.parseJSON($(this).attr("data-click") || "{}"),
                    r = "IMG" === e.tagName,
                    s = void 0 !== n.attr("data-is-main-url"),
                    c = $.parseJSON(n.attr("data-click") || "{}");
                s ? a += "(title)" : (a += r ? "(img)" : "(link)", o.mu = (i = $(this).find("a[data-is-main-url]")).length ? i.attr("href") : void 0), o.title = n.html(), o.url = n.attr("href"), o.rsv_xpath = a, o.rsv_height = this.offsetHeight, o.rsv_pstg = bds.comm.seinfo.rsv_pstg, o = $.extend({}, o, c), window.c(o)
            }
        }))
    };
    var ke = {
            init: function (t) {
                $(t + " [data-foldbtn]").on("click", (function () {
                    $(this).parents(t).find(".ec-multiimg-toggle").toggleClass("ec-multiimg-hide"), $(this).children().first().hasClass("ec-multiimg-hide") ? pe({
                        tag: "ec_pc_img_flex",
                        mt: $(this).data("mt"),
                        extends_1: "unfold"
                    }) : pe({
                        tag: "ec_pc_img_flex",
                        mt: $(this).data("mt"),
                        extends_1: "fold"
                    })
                }))
            }
        },
        $e = function (t) {
            var e = $("".concat(t, " .c-tabs"));
            window.A.use("tabs5", (function () {
                $.each(e, (function (t, e) {
                    window.A.ui.tabs5(e, {
                        toggleSep: !1
                    })
                }))
            }))
        },
        Ce = function (t) {
            $("".concat(t, ' [data-action="fly-list-show-more"]')).on("click", (function () {
                var t = $(this).attr("data-hidden-class");
                $(this).hasClass("ec-flight-opened") ? $(this).siblings("a").each((function (e, n) {
                    e > 2 && $(n).addClass(t)
                })) : $(this).siblings(".".concat(t)).removeClass(t), $(this).toggleClass("ec-flight-opened"), $(this).children("span").toggleClass(t)
            }))
        },
        je = Object.getOwnPropertyDescriptor,
        Se = {
            f: c ? je : function (t, e) {
                if (t = ut(t), e = d(e, !0), f) try {
                    return je(t, e)
                } catch (t) {}
                if (w(t, e)) return m(!It.f.call(t, e), t[e])
            }
        },
        Ee = function (t, e) {
            if (r(t), !o(e) && null !== e) throw TypeError(e + ": can't set as prototype!")
        },
        Te = {
            set: Object.setPrototypeOf || ("__proto__" in {} ? function (t, e, n) {
                try {
                    (n = S(Function.call, Se.f(Object.prototype, "__proto__").set, 2))(t, []), e = !(t instanceof Array)
                } catch (t) {
                    e = !0
                }
                return function (t, i) {
                    return Ee(t, i), e ? t.__proto__ = i : n(t, i), t
                }
            }({}, !1) : void 0),
            check: Ee
        }.set,
        ze = function (t, e, n) {
            var i, a = e.constructor;
            return a !== n && "function" == typeof a && (i = a.prototype) !== n.prototype && o(i) && Te && Te(t, i), t
        },
        Ae = wt.concat("length", "prototype"),
        Oe = {
            f: Object.getOwnPropertyNames || function (t) {
                return yt(t, Ae)
            }
        },
        Pe = H("species"),
        Me = g.f,
        Ne = Oe.f,
        qe = n.RegExp,
        De = qe,
        Le = qe.prototype,
        Re = /a/g,
        Be = /a/g,
        Fe = new qe(Re) !== Re;
    if (c && (!Fe || s((function () {
            return Be[H("match")] = !1, qe(Re) != Re || qe(Be) == Be || "/a/i" != qe(Re, "i")
        })))) {
        qe = function (t, e) {
            var n = this instanceof qe,
                i = Ct(t),
                a = void 0 === e;
            return !n && i && t.constructor === qe && a ? t : ze(Fe ? new De(i && !a ? t.source : t, e) : De((i = t instanceof qe) ? t.source : t, i && a ? Mt.call(t) : e), n ? this : Le, qe)
        };
        for (var Ve = function (t) {
                t in qe || Me(qe, t, {
                    configurable: !0,
                    get: function () {
                        return De[t]
                    },
                    set: function (e) {
                        De[t] = e
                    }
                })
            }, He = Ne(De), Ue = 0; He.length > Ue;) Ve(He[Ue++]);
        Le.constructor = qe, qe.prototype = Le, C(n, "RegExp", qe)
    }

    function Ze(t, e) {
        this.resultClass = e.resultClass, this.$box = $(t), this.$form = this.$box.find('[data-formtype="form"]'), this.$widgets = this.$form.find('[data-cf-js-item="1"]'), this.$buttonEle = this.$form.find("button"), this.$buttonEleText = this.$buttonEle.html(), this.$submitBtn = this.$form.find('[data-formtype="submit"]'), this.$resultBox = this.$form.next('[data-formtype="bottomWrap"]'), this.$infoBox = this.$resultBox.children('[data-formtype="info"]'), this.$moreBox = this.$resultBox.children('[data-formtype="resultMore"]'), this.$telInput = this.$form.find('input[data-ctype="phone"]'), this.rcv = this.$submitBtn.attr("data-cklink"), this.searchid = e.searchid, this.cmatch = this.$box.parents(this.resultClass).data("cmatchid"), this.rank = this.$box.parents(this.resultClass).data("rank"), this.sessionCode = null, this.verificationOrdinal = null, this.solutionId = this.$box.data("solutionid"), this.sceneCode = "lpgrjs", this.phone = null, this.time = 61, this.timeout = null, this.serverUrl = "https://leads.baidu.com"
    }! function (t) {
        var e = n[t];
        c && e && !e[Pe] && g.f(e, Pe, {
            configurable: !0,
            get: function () {
                return this
            }
        })
    }("RegExp"), Ze.prototype = {
        constructor: Ze,
        init: function () {
            var t = this;
            this.checkIePlaceholder(this.$box), this.$box.parents(this.resultClass).first().css("overflow", "visible"), this.$widgets.on("focus", (function () {
                t.activeButton()
            })), this.$form.find('[data-formtype="btnCity"]').on("click", (function () {
                t.activeButton()
            })), this.$submitBtn.on("click", (function (e) {
                t.submit(e)
            }))
        },
        activeButton: function () {
            this.$buttonEle.attr("disabled") && this.$buttonEle.removeAttr("disabled").removeClass("c-btn-disable").addClass("c-btn-primary")
        },
        checkIePlaceholder: function () {
            if (!("placeholder" in document.createElement("input"))) {
                var t = this;
                t.$widgets.each((function () {
                    var e = $(this);
                    "city" !== e.data("type") && "select" !== e.data("type") && (t.setPlaceholder(e), e.on("focus", (function () {
                        e.hasClass("c-gray") && (e.val(""), e.removeClass("c-gray"))
                    })), e.on("blur", (function () {
                        t.setPlaceholder(e)
                    })))
                }))
            }
        },
        setPlaceholder: function (t) {
            "" === t.val() ? (t.addClass("c-gray"), t.val(t.attr("placeholder") || "")) : t.removeClass("c-gray")
        },
        validate: function () {
            var t = this,
                e = {
                    clueData: [],
                    isPass: !0
                };
            return this.$widgets.each((function () {
                var n = $(this),
                    i = n.data("ctype") ? n.data("ctype") : n.data("type"),
                    a = $.trim(n.val() ? n.val() : n.text()),
                    o = t.getReg(n, i, a),
                    r = n.data("min"),
                    s = n.data("max");
                if (r && s) switch (i) {
                    case "number":
                        var c = +r,
                            l = +s;
                        break;
                    case "text":
                        var u = +r,
                            h = +s
                }
                var f = o && !o.test(a) || c && a < c || l && a > l || u && a.length < u || h && a.length > h;
                if (n.attr("required") && ("" === a || f) || !n.attr("required") && "" !== a && f) return e.isPass = !1, n.addClass("ec-cf-redbox"), e;
                n.removeClass("ec-cf-redbox"), "phone" === i && (t.phone = a);
                var d = {},
                    p = n.data("code");
                d.code = p, d.value = a, e.clueData.push(d)
            })), e
        },
        getReg: function (t, e, n) {
            return "date" === e ? /\d{4}-\d{2}-\d{2}/ : t.data("reg") && "" !== n ? new RegExp(t.data("reg")) : void 0
        },
        submit: function (t) {
            t.preventDefault();
            var e = this.validate();
            if (!e.isPass) return this.$infoBox.removeClass("ec-cf-new-info").addClass("ec-cf-redtip").text("*\u8bf7\u786e\u8ba4\u8f93\u5165\u4fe1\u606f\u65e0\u8bef"), this.$infoBox.show(), this.$moreBox.hide(), this.$resultBox.show(), !1;
            this.showLoading(), this.sessionCode ? this.postClue(e.clueData) : this.createSession(e.clueData)
        },
        showLoading: function () {
            this.$buttonEle.html('<div class="ec-cf-loading"></div>')
        },
        removeLoading: function () {
            this.$buttonEle.html(this.$buttonEleText)
        },
        createSession: function (t) {
            var e = this,
                n = {
                    input: t,
                    ad_trace: {
                        anti_code: this.rcv,
                        searchid: this.searchid,
                        cmatch: this.cmatch,
                        rank: this.rank
                    },
                    _embedded: {
                        session: {
                            solution_id: this.solutionId,
                            scene_code: this.sceneCode
                        }
                    }
                };
            $.ajax({
                type: "POST",
                url: e.serverUrl + "/rest/form/c/sessions/null/submissions",
                headers: {
                    "X-Fengming-Consumer-Code": "liteua"
                },
                contentType: "application/json",
                data: JSON.stringify(n),
                timeout: 4e3,
                dataType: "json",
                cache: !1,
                success: function (t) {
                    e.removeLoading();
                    var n = t._embedded;
                    n && (e.sessionCode = n.session_code, "succ" === n.submission_check_result && (e.showSuccss(), ct(e.$submitBtn.attr("data-cklink"), {
                        charge: !0
                    })), "reject" === n.submission_check_result && e.showFail("\u7cfb\u7edf\u6b63\u5fd9\uff0c\u8bf7\u7a0d\u540e\u518d\u8bd5"), "verify" === n.submission_check_result && (e.verificationOrdinal = n.verification.verification_ordinal, n.verification && "sms" === n.verification.type && e.showSmsVerification(), n.verification && "picture" === n.verification.type && e.showPicVerification(n.verification.captcha_picture_mime_type, n.verification.captcha_picture_base64)))
                },
                error: function () {
                    e.removeLoading(), e.showFail("\u7cfb\u7edf\u6b63\u5fd9\uff0c\u8bf7\u7a0d\u540e\u518d\u8bd5")
                }
            })
        },
        postClue: function (t) {
            var e = this,
                n = {
                    input: t,
                    ad_trace: {
                        anti_code: this.rcv,
                        searchid: this.searchid,
                        cmatch: this.cmatch,
                        rank: this.rank
                    }
                };
            $.ajax({
                type: "POST",
                url: e.serverUrl + "/rest/form/c/sessions/" + e.sessionCode + "/submissions",
                headers: {
                    "X-Fengming-Consumer-Code": "liteua"
                },
                contentType: "application/json",
                data: JSON.stringify(n),
                timeout: 4e3,
                dataType: "json",
                cache: !1,
                success: function (t) {
                    e.removeLoading();
                    var n = t._embedded;
                    n && ("succ" === n.submission_check_result && (e.showSuccss(), ct(e.$submitBtn.attr("data-cklink"), {
                        charge: !0
                    })), "reject" === n.submission_check_result && e.showFail("\u7cfb\u7edf\u6b63\u5fd9\uff0c\u8bf7\u7a0d\u540e\u518d\u8bd5"), "verify" === n.submission_check_result && (e.verificationOrdinal = n.verification.verification_ordinal, n.verification && "sms" === n.verification.type && e.showSmsVerification(), n.verification && "picture" === n.verification.type && e.showPicVerification(n.verification.captcha_picture_mime_type, n.verification.captcha_picture_base64)))
                },
                error: function () {
                    e.removeLoading(), e.showFail("\u7cfb\u7edf\u6b63\u5fd9\uff0c\u8bf7\u7a0d\u540e\u518d\u8bd5")
                }
            })
        },
        resetVerification: function (t) {
            var e = this;
            $.ajax({
                type: "POST",
                url: e.serverUrl + "/rest/form/c/sessions/" + e.sessionCode + "/verifications",
                headers: {
                    "X-Fengming-Consumer-Code": "liteua"
                },
                contentType: "application/json",
                data: JSON.stringify({}),
                timeout: 4e3,
                dataType: "json",
                cache: !1,
                success: function (n) {
                    var i = n._embedded;
                    i && (e.verificationOrdinal = i.verification.verification_ordinal, i.verification && i.verification.type && t(i.verification))
                },
                error: function () {
                    t(null)
                }
            })
        },
        postVerification: function (t, e) {
            var n = {
                    answer: t
                },
                i = this;
            $.ajax({
                type: "PUT",
                url: i.serverUrl + "/rest/form/c/sessions/" + i.sessionCode + "/verifications/" + i.verificationOrdinal,
                headers: {
                    "X-Fengming-Consumer-Code": "liteua"
                },
                contentType: "application/json",
                data: JSON.stringify(n),
                timeout: 4e3,
                dataType: "json",
                cache: !1,
                success: function (t) {
                    i.verificationOrdinal = t.verification_ordinal, t && !0 === t.pass ? e("success") : e("errorInput")
                },
                error: function () {
                    e("badRequest")
                }
            })
        },
        showSuccss: function () {
            this.$infoBox.addClass("ec-cf-new-info").removeClass("ec-cf-redtip").html('<i class="c-icon ec-cf-succ-img"></i><span>\u63d0\u4ea4\u6210\u529f\uff0c\u5546\u5bb6\u5c06\u5c3d\u5feb\u4e0e\u60a8\u53d6\u5f97\u8054\u7cfb</span>'), this.$moreBox.show(), this.$resultBox.show(), this.$buttonEle.attr("disabled", "disabled").removeClass("c-btn-primary").addClass("c-btn-disable"), pe({
                tag: "pc_post_yxt_success",
                antiCode: this.rcv,
                search_id: this.searchid,
                cmatch: this.cmatch,
                rank: this.rank,
                solutionId: this.solutionId
            })
        },
        showFail: function (t) {
            var e = '<i class="c-icon ec-cf-fail-img"></i><span>' + t + "</span>";
            this.$infoBox.addClass("ec-cf-new-info").removeClass("ec-cf-redtip").html(e), this.$moreBox.hide(), this.$resultBox.show()
        },
        calcToastPosition: function (t) {
            var e = (window.innerWidth - t.width()) / 2,
                n = (window.innerHeight - t.height()) / 2;
            t.css({
                top: n,
                left: e
            })
        },
        showSmsVerification: function () {
            var t = $('<div class="ec-cf-mask"></div>'),
                e = $('<div class="ec-cf-sms-toast"></div>');
            e.append('<i class="c-icon ec-cf-sms-cancel"></i>'), e.append('<div class="ec-cf-sms-text">\u8bf7\u8f93\u5165\u9a8c\u8bc1\u7801</div>');
            var n = '<div class="ec-cf-sms-phone">\u5df2\u53d1\u9001\u9a8c\u8bc1\u7801\u81f3\uff1a' + this.phone + "</div>";
            e.append(n);
            e.append('<div class="ec-cf-verif-container ec-cf-sms-verif-container"><div class="ec-cf-sms-verif-input"><input placeholder="\u8bf7\u8f93\u5165\u9a8c\u8bc1\u7801" autofocus="autofocus"></input></div><div class="ec-cf-sms-line"></div><span class="ec-cf-sms-verif-tip">60s</span></div><div class="ec-cf-sms-verif-error">\u9a8c\u8bc1\u7801\u8f93\u5165\u9519\u8bef</div><div class="ec-cf-sms-submit">\u63d0\u4ea4</div>'), this.$box.append(t), this.$box.append(e), this.calcToastPosition(e);
            var i = this,
                a = function t() {
                    if (i.time--, i.$box.find(".ec-cf-sms-verif-tip").html(i.time + "s"), 0 === i.time) return i.$box.find(".ec-cf-sms-verif-tip").html("\u91cd\u65b0\u83b7\u53d6"), i.$box.find(".ec-cf-sms-verif-tip").css({
                        color: "#388BFF",
                        cursor: "pointer"
                    }), void(i.time = 61);
                    i.timeout = setTimeout(t, 1e3)
                };
            a(), this.$box.find(".ec-cf-sms-cancel").on("click", (function (t) {
                t.preventDefault(), clearTimeout(i.timeout), i.time = 61, i.$box.find(".ec-cf-mask").remove(), i.$box.find(".ec-cf-sms-toast").remove(), i.showFail("\u63d0\u4ea4\u5931\u8d25\uff0c\u60a8\u53ef\u91cd\u65b0\u63d0\u4ea4")
            }));
            var o = this.$box.find(".ec-cf-sms-verif-input input"),
                r = this.$box.find(".ec-cf-sms-verif-tip");
            r.on("click", (function (t) {
                if (t.preventDefault(), "\u91cd\u65b0\u83b7\u53d6" === r.html()) {
                    i.resetVerification((function (t) {
                        t ? (i.$box.find(".ec-cf-sms-verif-tip").css("color", "#999"), i.$box.find(".ec-cf-sms-verif-error").css("visibility", "hidden"), o.val(""), clearTimeout(i.timeout), i.time = 61, a()) : (clearTimeout(i.timeout), i.time = 61, i.$box.find(".ec-cf-mask").remove(), i.$box.find(".ec-cf-sms-toast").remove(), i.showFail("\u7cfb\u7edf\u6b63\u5fd9\uff0c\u8bf7\u7a0d\u540e\u518d\u8bd5"))
                    }))
                }
            })), this.$box.find(".ec-cf-sms-submit").on("click", (function (t) {
                t.preventDefault();
                var e = $.trim(o.val());
                i.postVerification(e, (function (t) {
                    "success" === t && (clearTimeout(i.timeout), i.time = 61, i.$box.find(".ec-cf-mask").remove(), i.$box.find(".ec-cf-sms-toast").remove(), i.showSuccss(), ct(i.$submitBtn.attr("data-cklink"), {
                        charge: !0
                    })), "errorInput" === t && i.$box.find(".ec-cf-sms-verif-error").css("visibility", "visible"), "badRequest" === t && (clearTimeout(i.timeout), i.time = 61, i.$box.find(".ec-cf-mask").remove(), i.$box.find(".ec-cf-sms-toast").remove(), i.showFail("\u7cfb\u7edf\u6b63\u5fd9\uff0c\u8bf7\u7a0d\u540e\u518d\u8bd5"))
                }))
            }))
        },
        showPicVerification: function (t, e) {
            var n = $('<div class="ec-cf-mask"></div>'),
                i = $('<div class="ec-cf-pic-toast"></div>');
            i.append('<i class="c-icon ec-cf-pic-cancel"></i>'), i.append('<div class="ec-cf-pic-text">\u8bf7\u8f93\u5165\u9a8c\u8bc1\u7801</div>');
            i.append('<div class="ec-cf-verif-container ec-cf-pic-verif-container"><div class="ec-cf-pic-verif-input"><input placeholder="\u8f93\u5165\u9a8c\u8bc1\u7801" autofocus="autofocus"></input></div><div class="ec-cf-pic-line"></div></div><div class="ec-cf-pic-verif-error">\u9a8c\u8bc1\u7801\u8f93\u5165\u9519\u8bef</div><div class="ec-cf-pic-submit">\u63d0\u4ea4</div>');
            var a = '<div class="ec-cf-pic-verif-pic"><img src="data:' + t + ";base64," + e + '"></div>';
            i.find(".ec-cf-pic-verif-container").append(a), this.$box.append(n), this.$box.append(i), this.calcToastPosition(i);
            var o = this;
            this.$box.find(".ec-cf-pic-cancel").on("click", (function (t) {
                t.preventDefault(), o.$box.find(".ec-cf-mask").remove(), o.$box.find(".ec-cf-pic-toast").remove(), o.showFail("\u63d0\u4ea4\u5931\u8d25\uff0c\u60a8\u53ef\u91cd\u65b0\u63d0\u4ea4")
            }));
            var r = this.$box.find(".ec-cf-pic-verif-input input"),
                s = this.$box.find(".ec-cf-pic-verif-pic img");
            s.on("click", (function (t) {
                t.preventDefault();
                o.resetVerification((function (t) {
                    t && "picture" === t.type ? (! function (t, e) {
                        var n = "data:" + t + ";base64," + e;
                        s.attr("src", n)
                    }(t.captcha_picture_mime_type, t.captcha_picture_base64), o.$box.find(".ec-cf-sms-verif-error").css("visibility", "hidden"), r.val("")) : (o.$box.find(".ec-cf-mask").remove(), o.$box.find(".ec-cf-pic-toast").remove(), o.showFail("\u7cfb\u7edf\u6b63\u5fd9\uff0c\u8bf7\u7a0d\u540e\u518d\u8bd5"))
                }))
            })), this.$box.find(".ec-cf-pic-submit").on("click", (function (t) {
                t.preventDefault();
                var e = $.trim(r.val());
                o.postVerification(e, (function (t) {
                    "success" === t && (o.$box.find(".ec-cf-mask").remove(), o.$box.find(".ec-cf-pic-toast").remove(), o.showSuccss(), ct(o.$submitBtn.attr("data-cklink"), {
                        charge: !0
                    })), "errorInput" === t && o.$box.find(".ec-cf-pic-verif-error").css("visibility", "visible"), "badRequest" === t && (o.$box.find(".ec-cf-mask").remove(), o.$box.find(".ec-cf-pic-toast").remove(), o.showFail("\u7cfb\u7edf\u6b63\u5fd9\uff0c\u8bf7\u7a0d\u540e\u518d\u8bd5"))
                }))
            }))
        }
    };
    var We, Ge, Xe = {
            init: function (t, e) {
                for (var n = document.querySelectorAll(t), i = 0; i < n.length; i++)
                    for (var a = n[i].querySelectorAll('[data-formtype="wrap"]'), o = 0; o < a.length; o++) {
                        new Ze(a[o], e).init()
                    }
            }
        },
        Je = [].sort,
        Ke = [1, 2, 3];
    T(T.P + T.F * (s((function () {
        Ke.sort(void 0)
    })) || !s((function () {
        Ke.sort(null)
    })) || !((We = Je) && s((function () {
        Ge ? We.call(null, (function () {}), 1) : We.call(null)
    })))), "Array", {
        sort: function (t) {
            return void 0 === t ? Je.call(q(this)) : Je.call(q(this), j(t))
        }
    });
    var Ye = {};
    Ye.allCity = ["\u5317\u4eac|beijing|bj", "\u4e0a\u6d77|shanghai|sh", "\u5e7f\u5dde|guangzhou|gz", "\u6df1\u5733|shenzhen|sz", "\u5929\u6d25|tianjin|tj", "\u6210\u90fd|chengdu|cd", "\u676d\u5dde|hangzhou|gz", "\u6b66\u6c49|wuhan|wh", "\u897f\u5b89|xian|xa", "\u91cd\u5e86|chongqing|cq", "\u9752\u5c9b|qingdao|qd", "\u957f\u6c99|changsha|cs", "\u5357\u4eac|nanjing|nj", "\u53a6\u95e8|xiamen|xm", "\u6606\u660e|kunming|km", "\u5927\u8fde|dalian|dl", "\u4e1c\u57ce|dongcheng|dc", "\u897f\u57ce|xicheng|xc", "\u5ba3\u6b66|xuanwu|xw", "\u671d\u9633|chaoyang|cy", "\u4e30\u53f0|fengtai|ft", "\u77f3\u666f\u5c71|shijingshan|sjs", "\u6d77\u6dc0|haidian|hd", "\u95e8\u5934\u6c9f|mentougou|mtg", "\u623f\u5c71|fangshan|fs", "\u901a\u5dde|tongzhou|tz", "\u987a\u4e49|shunyi|sy", "\u660c\u5e73|changping|cp", "\u5927\u5174|daxing|dx", "\u6000\u67d4|huairou|hr", "\u5e73\u8c37|pinggu|pg", "\u5bc6\u4e91|miyun|my", "\u5ef6\u5e86|yanqing|yq", "\u9ec4\u6d66|huangpu|hp", "\u5362\u6e7e|luwan|lw", "\u5f90\u6c47|xuhui|xu", "\u957f\u5b81|changning|cn", "\u9759\u5b89|jingan|jn", "\u666e\u9640|putuo|pt", "\u95f8\u5317|zhabei|zb", "\u8679\u53e3|hongkou|hk", "\u6768\u6d66|yangpu|yp", "\u95f5\u884c|minhang|mh", "\u5b9d\u5c71|banshan|bs", "\u5609\u5b9a|jiading|jd", "\u6d66\u4e1c|pudong|pd", "\u91d1\u5c71|jinshan|js", "\u677e\u6c5f|songjiang|sj", "\u9752\u6d66|qingpu|qp", "\u5949\u8d24|fengxian|fx", "\u5d07\u660e|chongming|cm", "\u9999\u6e2f|xianggang|xg", "\u548c\u5e73|heping|hp", "\u6cb3\u4e1c|hedong|hd", "\u6cb3\u897f|hexi|hx", "\u5357\u5f00|nankai|nk", "\u6cb3\u5317|hebei|hb", "\u7ea2\u6865|hongqiao|hq", "\u4e1c\u4e3d|dongli|dl", "\u897f\u9752|xiqing|xq", "\u6d25\u5357|jinnan|jn", "\u5317\u8fb0|beichen|bc", "\u6b66\u6e05|wuqing|wq", "\u5b9d\u577b|baodi|bd", "\u5b81\u6cb3|ninghe|nh", "\u9759\u6d77|jinghai|jh", "\u84df\u53bf|jixian|jx", "\u6ee8\u6d77|binhai|bh", "\u6c5f\u95e8|jiangmen|jm", "\u63ed\u9633|jieyang|jy", "\u6f6e\u5dde|chaozhou|cz", "\u8302\u540d|maoming|mm", "\u6885\u5dde|meizhou|mz", "\u6e05\u8fdc|qingyuan|qy", "\u4f5b\u5c71|foshan|fs", "\u6c55\u5934|shantou|st", "\u6c55\u5c3e|shanwei|sw", "\u97f6\u5173|shaoguan|sg", "\u9633\u6c5f|yangjiang|yj", "\u6e5b\u6c5f|zhanjiang|zj", "\u4e91\u6d6e|yunfu|yf", "\u4e2d\u5c71|zhongshan|zs", "\u73e0\u6d77|zhuhai|zh", "\u8087\u5e86|zhaoqing|zq", "\u6cb3\u6e90|heyuan|hy", "\u4e1c\u839e|dongguan|dg", "\u60e0\u5dde|huizhou|hz", "\u8386\u7530|putian|pt", "\u5357\u5e73|nanping|np", "\u9f99\u5ca9|longyan|ly", "\u5b81\u5fb7|ningde|nd", "\u6cc9\u5dde|quanzhou|qz", "\u4e09\u660e|sanming|sm", "\u6f33\u5dde|zhangzhou|zz", "\u798f\u5dde|fuzhou|fz", "\u4e1c\u65b9|dongfang|df", "\u743c\u6d77|qionghai|qh", "\u4e09\u4e9a|sanya|sy", "\u6587\u660c|wenchang|wc", "\u4e94\u6307\u5c71|wuzhishan|wzs", "\u4e07\u5b81|wanning|wn", "\u6d77\u53e3|haikou|hk", "\u510b\u5dde|danzhou|dz", "\u5b9a\u5b89\u53bf|dinganxian|dax", "\u5c6f\u660c\u53bf|tunchangxian|tcx", "\u9675\u6c34|lingshui|ls", "\u6f84\u8fc8\u53bf|chengmaixian|cmx", "\u4fdd\u4ead|baoting|bt", "\u743c\u4e2d|qiongzhong|qz", "\u4e50\u4e1c|ledong|ld", "\u4e34\u9ad8\u53bf|lingaoxian|lgx", "\u660c\u6c5f|changjiang|cj", "\u767d\u6c99|baisha|bs", "\u6dee\u5317|huaibei|hb", "\u5b89\u5e86|anqing|aq", "\u5de2\u6e56|chaohu|ch", "\u6c60\u5dde|chizhou|cz", "\u6ec1\u5dde|chuzhou|cz", "\u9ec4\u5c71|huangshan|hs", "\u6dee\u5357|huainan|hn", "\u9a6c\u978d\u5c71|maanshan|mas", "\u516d\u5b89|liuan|la", "\u5ba3\u57ce|xuancheng|xc", "\u5bbf\u5dde|xiuzhou|xz", "\u94dc\u9675|tongling|tl", "\u829c\u6e56|wuhu|wh", "\u961c\u9633|huyang|hy", "\u868c\u57e0|bangbu|bb", "\u5408\u80a5|hefei|hf", "\u4eb3\u5dde|bozhou|bz", "\u8d35\u9633|guiyang|gy", "\u5b89\u987a|anshun|as", "\u516d\u76d8\u6c34|liupanshui|lps", "\u9ed4\u5357|qiannan|qn", "\u9ed4\u4e1c\u5357|qiandongnan|qdn", "\u9ed4\u897f\u5357|qianxinan|qxn", "\u6bd5\u8282|bijie|bj", "\u94dc\u4ec1|tongren|tr", "\u9075\u4e49|zunyi|zy", "\u9152\u6cc9|jiuquan|jq", "\u91d1\u660c|jinchang|jc", "\u5609\u5cea\u5173|jiayuguan|jyg", "\u5170\u5dde|lanzhou|lz", "\u9647\u5357|longnan|ln", "\u5e73\u51c9|pingliang|pl", "\u4e34\u590f|linxia|lx", "\u5e86\u9633|qingyang|qy", "\u5b9a\u897f|dingxi|dx", "\u6b66\u5a01|wuwei|ww", "\u5929\u6c34|tianshui|ts", "\u5f20\u6396|zhangye|zy", "\u767d\u94f6|baiyin|by", "\u7518\u5357|gannan|gn", "\u6842\u6797|guilin|gl", "\u8d35\u6e2f|guigang|gg", "\u9632\u57ce\u6e2f|fangchenggang|fcg", "\u5357\u5b81|nanning|nn", "\u6765\u5bbe|laibin|lb", "\u67f3\u5dde|liuzhou|lz", "\u94a6\u5dde|qinzhou|qz", "\u68a7\u5dde|wuzhou|wz", "\u5317\u6d77|beihai|bh", "\u7389\u6797|yulin|yl", "\u6cb3\u6c60|hechi|hc", "\u8d3a\u5dde|hezhou|gz", "\u767e\u8272|baise|bs", "\u5d07\u5de6|chongzuo|cz", "\u4fdd\u5b9a|baoding|bd", "\u6ca7\u5dde|cangzhou|cz", "\u627f\u5fb7|chengde|cd", "\u5eca\u574a|langfang|lf", "\u79e6\u7687\u5c9b|qinhuangdao|qhd", "\u90a2\u53f0|xingtai|xt", "\u77f3\u5bb6\u5e84|shijiazhuang|sjz", "\u5510\u5c71|tangshan|ts", "\u90af\u90f8|handan|hd", "\u5f20\u5bb6\u53e3|zhangjiakou|zjk", "\u8861\u6c34|hengshui|hs", "\u7126\u4f5c|jiaozuo|jz", "\u5b89\u9633|anyang|ay", "\u5f00\u5c01|kaifeng|kf", "\u6d1b\u9633|luoyang|ly", "\u6f2f\u6cb3|luohe|lh", "\u5e73\u9876\u5c71|pingdingshan|pds", "\u9a7b\u9a6c\u5e97|zhumadian|zmd", "\u5357\u9633|nanyang|ny", "\u6fee\u9633|puyang|py", "\u65b0\u4e61|xinxiang|xx", "\u4fe1\u9633|xinyang|xy", "\u8bb8\u660c|xuchang|xc", "\u5546\u4e18|shangqiu|sq", "\u4e09\u95e8\u5ce1|sanmenxia|smx", "\u90d1\u5dde|zhengzhou|zz", "\u9e64\u58c1|hebi|hb", "\u5468\u53e3|zhoukou|zk", "\u6d4e\u6e90|jiyuan|jy", "\u9e21\u897f|jixi|jx", "\u4f73\u6728\u65af|jiamusi|jms", "\u54c8\u5c14\u6ee8|haerbin|heb", "\u7261\u4e39\u6c5f|mudanjiang|mdj", "\u9f50\u9f50\u54c8\u5c14|qiqihaer|qqhe", "\u4e03\u53f0\u6cb3|qitaihe|qth", "\u7ee5\u5316|suihua|sh", "\u4f0a\u6625|yichun|yc", "\u5927\u5e86|daqing|dq", "\u5927\u5174\u5b89\u5cad|daxinganling|dxal", "\u9e64\u5c97|hegang|hg", "\u9ed1\u6cb3|heihe|hh", "\u8346\u95e8|16|346", "\u8346\u5dde|jingmen|jm", "\u9ec4\u77f3|huangshi|hs", "\u9ec4\u5188|huanggang|hg", "\u6f5c\u6c5f|qianjiang|qj", "\u5b5d\u611f|xiangan|xg", "\u6069\u65bd|enshi|es", "\u968f\u5dde|suizhou|sz", "\u795e\u519c\u67b6|shennongjia|snj", "\u5341\u5830|shiyan|sy", "\u8944\u9633|xiangyang|xy", "\u4ed9\u6843|xiantao|xt", "\u5929\u95e8|tianmen|tm", "\u54b8\u5b81|xianning|xn", "\u5b9c\u660c|yichang|yc", "\u9102\u5dde|ezhou|ez", "\u6000\u5316|huaihua|hh", "\u5e38\u5fb7|changde|cd", "\u90f4\u5dde|chenzhou|cz", "\u5a04\u5e95|loudi|ld", "\u90b5\u9633|shaoyang|sy", "\u6e58\u6f6d|xiangtan|xt", "\u6e58\u897f|xiangxi|xx", "\u5f20\u5bb6\u754c|zhangjiajie|zjj", "\u76ca\u9633|yiyang|yy", "\u8861\u9633|hengyang|hy", "\u5cb3\u9633|yueyang|yy", "\u6c38\u5dde|yongzhou|yz", "\u682a\u6d32|zhuzhou|zhuzhou", "\u5409\u6797|jilin|jl", "\u767d\u57ce|baicheng|bc", "\u957f\u6625|changchun|cc", "\u8fbd\u6e90|liaoyuan|ly", "\u767d\u5c71|baishan|bs", "\u56db\u5e73|siping|sp", "\u677e\u539f|songyuan|sy", "\u901a\u5316|tonghua|th", "\u5ef6\u5409|yanji|yj", "\u5ef6\u8fb9|yanbian|yb", "\u6dee\u5b89|huaian|ha", "\u5e38\u5dde|changzhou|cz", "\u5357\u901a|nantong|nt", "\u8fde\u4e91\u6e2f|lianyungang|lyg", "\u5f90\u5dde|xuzhou|xz", "\u82cf\u5dde|suzhou|sz", "\u5bbf\u8fc1|suqian|sq", "\u6cf0\u5dde|taizhou|tz", "\u65e0\u9521|wuxi|wx", "\u76d0\u57ce|yancheng|yc", "\u626c\u5dde|yangzhou|yz", "\u9547\u6c5f|zhenjiang|zj", "\u4e5d\u6c5f|jiujiang|jj", "\u5409\u5b89|jian|ja", "\u666f\u5fb7\u9547|jingdezhen|jdz", "\u840d\u4e61|pingxiang|px", "\u5357\u660c|nanchang|nc", "\u65b0\u4f59|xinyu|xy", "\u4e0a\u9976|shangrao|sr", "\u5b9c\u6625|yichun|yc", "\u9e70\u6f6d|yingtan|yt", "\u8d63\u5dde|ganzhou|gz", "\u629a\u5dde|fuzhou|fz", "\u4e39\u4e1c|dandong|dd", "\u672c\u6eaa|benxi|bx", "\u9526\u5dde|jinzhou|jz", "\u671d\u9633|chaoyang|cy", "\u8fbd\u9633|liaoyang|ly", "\u76d8\u9526|panjin|pj", "\u961c\u65b0|fuxin|fx", "\u978d\u5c71|anshan|as", "\u629a\u987a|fushun|fs", "\u6c88\u9633|shenyang|sy", "\u94c1\u5cad|tieling|tl", "\u8425\u53e3|yingkou|yk", "\u846b\u82a6\u5c9b|huludao|hld", "\u8d64\u5cf0|chifeng|cf", "\u963f\u62c9\u5584\u76df|alashanmeng|alsm", "\u5174\u5b89\u76df|xinganmeng|xam", "\u901a\u8fbd|tongliao|tl", "\u5df4\u5f66\u6dd6\u5c14|bayannaoer|byne", "\u4e4c\u5170\u5bdf\u5e03|wulanchabu|wlcb", "\u4e4c\u6d77|wuhai|wh", "\u9521\u6797\u90ed\u52d2|xilinguole|xlgl", "\u547c\u4f26\u8d1d\u5c14|hulunbeier|hlbe", "\u547c\u548c\u6d69\u7279|huhehaote|hhht", "\u9102\u5c14\u591a\u65af|eerduosi|eeds", "\u5305\u5934|baotou|bt", "\u56fa\u539f|guyuan|gy", "\u77f3\u5634\u5c71|shizuishan|szs", "\u5434\u5fe0|wuzhong|wz", "\u4e2d\u536b|zhongwei|zw", "\u94f6\u5ddd|yinchuan|yc", "\u897f\u5b81|xining|xn", "\u6d77\u4e1c|haidong|hd", "\u6d77\u897f|haixi|hx", "\u7389\u6811|yushu|ys", "\u6d77\u5357|hainan|hn", "\u6d77\u5317|haibei|hb", "\u9ec4\u5357|huangnan|hn", "\u679c\u6d1b|guoluo|gl", "\u6d4e\u5357|jinan|jn", "\u6d4e\u5b81|jining|jn", "\u804a\u57ce|liaocheng|lc", "\u5fb7\u5dde|dezhou|dz", "\u4e34\u6c82|linyi|ly", "\u65e5\u7167|rizhao|rz", "\u6f4d\u574a|weifang|wf", "\u6dc4\u535a|zibo|zb", "\u6cf0\u5b89|taian|ta", "\u5a01\u6d77|weihai|wh", "\u70df\u53f0|yantai|yt", "\u4e1c\u8425|dongying|dy", "\u67a3\u5e84|zaozhuang|zz", "\u83cf\u6cfd|heze|hz", "\u6ee8\u5dde|binzhou|gz", "\u664b\u57ce|jincheng|jc", "\u664b\u4e2d|jinzhong|jz", "\u957f\u6cbb|changzhi|cz", "\u5415\u6881|lvliang|ll", "\u4e34\u6c7e|linfen|lf", "\u5ffb\u5dde|xinzhou|xz", "\u6714\u5dde|shuozhou|sz", "\u592a\u539f|taiyuan|ty", "\u9633\u6cc9|yangquan|yq", "\u8fd0\u57ce|yuncheng|yc", "\u5927\u540c|datong|dt", "\u5b9d\u9e21|baoji|bj", "\u5b89\u5eb7|ankang|ck", "\u5546\u6d1b|shangluo|sl", "\u94dc\u5ddd|tongchuan|tc", "\u6e2d\u5357|weinan|wn", "\u54b8\u9633|xianyang|xy", "\u5ef6\u5b89|yanan|ya", "\u6c49\u4e2d|hanzhong|hz", "\u6986\u6797|yulin|yl", "\u5e7f\u5b89|guangan|ga", "\u5e7f\u5143|guangyuan|gy", "\u7709\u5c71|meishan|ms", "\u51c9\u5c71|liangshan|ls", "\u7ef5\u9633|mianyang|my", "\u6500\u679d\u82b1|panzhihua|pzh", "\u5357\u5145|nanchong|nc", "\u5fb7\u9633|deyang|dy", "\u4e50\u5c71|leshan|ls", "\u6cf8\u5dde|luzhou|lz", "\u5185\u6c5f|neijiang|nj", "\u7518\u5b5c|ganzi|gz", "\u9042\u5b81|suining|sn", "\u8d44\u9633|ziyang|zy", "\u5df4\u4e2d|bazhong|bz", "\u8fbe\u5dde|dazhou|dz", "\u96c5\u5b89|yaan|ya", "\u963f\u575d|aba|ab", "\u81ea\u8d21|zigong|zg", "\u5b9c\u5bbe|yibin|yb", "\u90a3\u66f2|naqu|nq", "\u62c9\u8428|lasa|ls", "\u6797\u829d|linzhi|lz", "\u65e5\u5580\u5219|rikaze|rkz", "\u660c\u90fd|changdu|cd", "\u5c71\u5357|shannan|sn", "\u963f\u91cc|ali|al", "\u54c8\u5bc6|hami|hm", "\u535a\u5c14\u5854\u62c9|boertala|betl", "\u660c\u5409|changji|cj", "\u963f\u52d2\u6cf0|aletai|alt", "\u5580\u4ec0|kashi|ks", "\u514b\u62c9\u739b\u4f9d|kelamayi|klmy", "\u963f\u514b\u82cf|akesu|aks", "\u514b\u5b5c\u52d2\u82cf|kezilesu|kzls", "\u77f3\u6cb3\u5b50|shihezi|shz", "\u5854\u57ce|tacheng|tc", "\u4e94\u5bb6\u6e20|wujiaqu|wjq", "\u5410\u9c81\u756a|tulufan|tlf", "\u5df4\u97f3\u90ed\u695e|bayinguoleng|bygl", "\u4e4c\u9c81\u6728\u9f50|wulumuqi|wlmq", "\u4f0a\u7281|yili|yl", "\u548c\u7530|hetian|ht", "\u963f\u62c9\u5c14|alaer|ale", "\u56fe\u6728\u8212\u514b|tumushuke|tmsk", "\u695a\u96c4|chuxiong|cx", "\u4e3d\u6c5f|lijiang|lj", "\u5fb7\u5b8f|dehong|dh", "\u4e34\u6ca7|lincang|lc", "\u66f2\u9756|qujing|qj", "\u4fdd\u5c71|baoshan|bs", "\u666e\u6d31|puer|pe", "\u6587\u5c71|wenshan|ws", "\u5927\u7406|dali|dl", "\u7ea2\u6cb3|honghe|hh", "\u662d\u901a|zhaotong|zt", "\u7389\u6eaa|yuxi|yx", "\u6012\u6c5f|nujiang|nj", "\u8fea\u5e86|diqing|dq", "\u897f\u53cc\u7248\u7eb3|xishuangbanna|xsbn", "\u91d1\u534e|jinhua|jh", "\u8862\u5dde|quzhou|qz", "\u4e3d\u6c34|lishui|ls", "\u5b81\u6ce2|ningbo|nb", "\u7ecd\u5174|shaoxing|sx", "\u6e29\u5dde|wenzhou|wz", "\u53f0\u5dde|taizhou|tz", "\u821f\u5c71|zhoushan|zs", "\u6e56\u5dde|huzhou|hz", "\u6e1d\u4e2d|yuzhong|yz", "\u5927\u6e21\u53e3|dadukou|ddk", "\u6c5f\u5317|jiangbei|jb", "\u6c99\u576a\u575d|shapingba|spb", "\u4e5d\u9f99\u5761|jiulongpo|jlp", "\u5357\u5cb8|nanan|na", "\u5317\u789a|beibei|bb", "\u4e07\u76db|wansheng|ws", "\u53cc\u6865|shuangqiao|sq", "\u6e1d\u5317|yubei|yb", "\u5df4\u5357|banan|bn", "\u4e07\u5dde|wanzhou|wz", "\u6daa\u9675|fuling|fl", "\u9ed4\u6c5f|qianjiang|qj", "\u957f\u5bff|changshou|cs", "\u6c5f\u6d25|jiangjin|jj", "\u5408\u5ddd|hechuan|hc", "\u6c38\u5ddd|yongchuan|yc", "\u5357\u5ddd|nanchuan|nc", "\u7da6\u6c5f|qijiang|qj", "\u6f7c\u5357|tongnan|tn", "\u94dc\u6881|tongliang|tl", "\u5927\u8db3|dazu|dz", "\u8363\u660c|rongchang|rc", "\u74a7\u5c71|bishan|bs", "\u6881\u5e73|liangping|lp", "\u57ce\u53e3|chengkou|ck", "\u4e30\u90fd|fengdu|fd", "\u57ab\u6c5f|dianjiang|dj", "\u6b66\u9686|wulong|wl", "\u5fe0\u53bf|zhongxian|zx", "\u5f00\u53bf|kaixian|kx", "\u4e91\u9633|yunyang|yy", "\u5949\u8282|fengjie|fj", "\u5deb\u5c71|wushan|ws", "\u5deb\u6eaa|wuxi|wx", "\u77f3\u67f1|shizhu|sz", "\u79c0\u5c71|xiushan|xs", "\u9149\u9633|youyang|yy", "\u5f6d\u6c34|pengshui|ps", "\u53f0\u6e7e|taiwan|tw", "\u6fb3\u95e8|aomen|am", "\u6606\u5c71|kunshan|ks"], Ye.regEx = /^([\u4E00-\u9FA5\uf900-\ufa2d]+)\|(\w+)\|(\w)\w*$/i, Ye.regExChiese = /([\u4E00-\u9FA5\uf900-\ufa2d]+)/, Ye._template = ['<p class="ec_fwy_v_tip">\u8bf7\u9009\u62e9\u60a8\u7684\u6240\u5728\u57ce\u5e02(\u652f\u6301\u6c49\u5b57/\u62fc\u97f3)</p>', "<ul>", '<li class="on">\u70ed\u95e8</li>', "<li>ABCDE</li>", "<li>FGHJ</li>", "<li>KLMNP</li>", "<li>QRSTW</li>", "<li>XYZ</li>", "</ul>"], Ye.CitySelector = function () {
        this.initialize.apply(this, arguments)
    }, Ye.CitySelector.prototype = {
        constructor: Ye.CitySelector,
        initialize: function (t) {
            var e = t.input;
            this.input = e, this.inputEvent()
        },
        createWarp: function () {
            var t = $(this.input).offset(),
                e = $(this.input).parents(".ec_fwy_form").offset(),
                n = [t.top, t.left],
                i = n[0],
                a = n[1],
                o = [e.top, e.left],
                r = o[0],
                s = o[1],
                c = this.rootDiv = document.createElement("div");
            c.className = "ec_fwy_v_citySelector", c.style.position = "absolute", c.style.left = a - s + "px", c.style.top = i - r + 24 + "px", c.style.zIndex = 999;
            var l = this;
            $(this.rootDiv).on("click", (function (t) {
                t.stopPropagation()
            }));
            var u = function (t) {
                if (t.target === l.input) return !1;
                l.cityBox && $(l.cityBox).addClass("ec_fwy_v_hide"), l.ul && $(this.ul).addClass("ec_fwy_v_hide"), l.myIframe && $(l.myIframe).addClass("ec_fwy_v_hide")
            };
            $(document).on("click", u), $(".ec_fwy_year").on("click", u);
            var h = !!document.all,
                f = (this.isIE6 = h && !window.XMLHttpRequest, this.cityBox = document.createElement("div"));
            f.className = "ec_fwy_v_cityBox", f.id = "cityBox", f.innerHTML = Ye._template.join("");
            var d = this.hotCity = document.createElement("div");
            d.className = "ec_fwy_v_hotCity", f.appendChild(d), c.appendChild(f), this.createHotCity()
        },
        createHotCity: function () {
            var t, e, n, i, a, o, r, s, c = [],
                l = Ye.oCity;
            for (o in l)
                if (l.hasOwnProperty(o)) {
                    for (r in (t = this[o] = document.createElement("div")).className = o + " ec_fwy_v_cityTab ec_fwy_v_hide", s = [], l[o]) l[o].hasOwnProperty(r) && (s.push(r), s.sort());
                    for (var u = 0, h = s.length; u < h; u++) {
                        e = document.createElement("dl"), n = document.createElement("dt"), i = document.createElement("dd"), n.innerHTML = "hot" === s[u] ? "&nbsp;" : s[u], c = [];
                        for (var f = 0, d = l[o][s[u]].length; f < d; f++) a = '<a href="javascript:">' + l[o][s[u]][f] + "</a>", c.push(a);
                        i.innerHTML = c.join(""), e.appendChild(n), e.appendChild(i), t.appendChild(e)
                    }
                    $(this.hot).removeClass("ec_fwy_v_hide"), this.hotCity.appendChild(t)
                } $(this.input).parents(".ec_fwy_form").append(this.rootDiv), this.changeIframe(), this.tabChange(), this.linkEvent()
        },
        tabChange: function () {
            for (var t = $(this.cityBox).find("li"), e = $(this.hotCity).find("div"), n = this, i = function (i, a) {
                    t[a].index = a, t[a].onclick = function () {
                        for (var a = 0; a < i; a++) $(t[a]).removeClass("on"), $(e[a]).addClass("ec_fwy_v_hide");
                        $(this).addClass("on"), $(e[this.index]).removeClass("ec_fwy_v_hide"), n.changeIframe()
                    }
                }, a = 0, o = t.length; a < o; a++) i(o, a)
        },
        linkEvent: function () {
            for (var t = $(this.hotCity).find("a"), e = this, n = 0, i = t.length; n < i; n++) t[n].onclick = function () {
                $(e.input).find("input").eq(0).val($(this).text()), $(this.input).removeClass("on"), $(e.cityBox).addClass("ec_fwy_v_hide")
            }
        },
        inputEvent: function () {
            var t = this;
            $(this.input).on("click", (function (e) {
                t.cityBox ? t.cityBox && $(t.cityBox).hasClass("ec_fwy_v_hide") && (!t.ul || t.ul && $(t.ul).hasClass("ec_fwy_v_hide")) && ($(t.cityBox).removeClass("ec_fwy_v_hide"), t.checkPos()) : t.createWarp(), e.stopPropagation()
            })), $(this.input).on("keyup", (function (e) {
                var n = e.keyCode;
                $(t.cityBox).addClass("ec_fwy_v_hide"), t.createUl(), !t.ul || $(t.ul).hasClass("ec_fwy_v_hide") || t.isEmpty || t.keyboardEvent(e, n)
            }))
        },
        checkPos: function () {
            var t = $(this.input).offset(),
                e = $(this.input).parents(".ec_fwy_form").offset(),
                n = [t.top, t.left],
                i = n[0],
                a = n[1],
                o = [e.top, e.left],
                r = o[0],
                s = o[1];
            this.rootDiv.style.top = i - r + 24 + "px", this.rootDiv.style.left = a - s + "px"
        },
        createUl: function () {
            var t, e = $.trim($(this.input).val());
            if ("" !== e) {
                for (var n = new RegExp("^" + e + "|\\|" + e, "gi"), i = [], a = 0, o = Ye.allCity.length; a < o; a++)
                    if (n.test(Ye.allCity[a])) {
                        var r = Ye.regEx.exec(Ye.allCity[a]);
                        t = 0 !== i.length ? '<li><b class="ec_fwy_v_cityname">' + r[1] + '</b><b class="ec_fwy_v_cityspell">' + r[2] + "</b></li>" : '<li class="on"><b class="ec_fwy_v_cityname">' + r[1] + '</b><b class="ec_fwy_v_cityspell">' + r[2] + "</b></li>", i.push(t)
                    } if (this.isEmpty = !1, 0 === i.length && (this.isEmpty = !0, t = '<li class="empty">\u5bf9\u4e0d\u8d77\uff0c\u6ca1\u6709\u627e\u5230\u6570\u636e "<em>' + e + '</em>"</li>', i.push(t)), this.ul) this.ul && $(this.ul).hasClass("ec_fwy_v_hide") && (this.count = 0, $(this.ul).removeClass("ec_fwy_v_hide"));
                else {
                    var s = this.ul = document.createElement("ul");
                    s.className = "ec_fwy_v_cityslide", this.rootDiv && this.rootDiv.appendChild(s), this.count = 0
                }
                $(this.ul).html(i.join("")), this.changeIframe(), this.liEvent()
            } else $(this.ul).addClass("ec_fwy_v_hide"), $(this.cityBox).removeClass("ec_fwy_v_hide"), this.changeIframe()
        },
        changeIframe: function () {
            if (!this.isIE6) return null
        },
        keyboardEvent: function (t, e) {
            var n = $(this.ul).find("li"),
                a = n.length;
            switch (e) {
                case 40:
                    this.count++, this.count > a - 1 && (this.count = 0);
                    for (var o = 0; o < a; o++) $(n[o]).removeClass("on");
                    $(n[this.count]).addClass("on");
                    break;
                case 38:
                    for (this.count--, this.count < 0 && (this.count = a - 1), i = 0; i < a; i++) $(n[i]).removeClass("on");
                    $(n[this.count]).addClass("on");
                    break;
                case 13:
                    $(this.input).find("input").get(0).value = Ye.regExChiese.exec(n[this.count].innerHTML)[0], $(this.ul).addClass("ec_fwy_v_hide")
            }
        },
        liEvent: function () {
            for (var t = this, e = $(this.ul).find("li"), n = 0, i = e.length; n < i; n++) $(e[n]).on("click", (function (e) {
                var n = e.target;
                "LI" !== n.nodeName.toUpperCase() && (n = n.parentNode), "LI" === n.nodeName.toUpperCase() && ($(t.input).find("input").get(0).value = Ye.regExChiese.exec(n.innerHTML)[0], $(t.ul).addClass("ec_fwy_v_hide"))
            })), $(e[n]).on("mouseover", (function (t) {
                var e = t.target;
                "LI" !== e.nodeName.toUpperCase() && (e = e.parentNode), "LI" === e.nodeName.toUpperCase() && $(e).addClass("on")
            })), $(e[n]).on("mouseout", (function (t) {
                var e = t.target;
                "LI" !== e.nodeName.toUpperCase() && (e = e.parentNode), "LI" === e.nodeName.toUpperCase() && $(e).removeClass("on")
            }))
        }
    };
    var Qe = {
            init: function (t) {
                ! function () {
                    var t, e, n = Ye.allCity,
                        i = Ye.regEx,
                        a = /^[a-e]$/i,
                        o = /^[f-j]$/i,
                        r = /^[k-p]$/i,
                        s = /^[q-w]$/i,
                        c = /^[x-z]$/i;
                    if (!Ye.oCity) {
                        Ye.oCity = {
                            hot: {},
                            ABCDE: {},
                            FGHJ: {},
                            KLMNP: {},
                            QRSTW: {},
                            XYZ: {}
                        };
                        for (var l = 0, u = n.length; l < u; l++) e = (t = i.exec(n[l]))[3].toUpperCase(), a.test(e) ? (Ye.oCity.ABCDE[e] || (Ye.oCity.ABCDE[e] = []), Ye.oCity.ABCDE[e].push(t[1])) : o.test(e) ? (Ye.oCity.FGHJ[e] || (Ye.oCity.FGHJ[e] = []), Ye.oCity.FGHJ[e].push(t[1])) : r.test(e) ? (Ye.oCity.KLMNP[e] || (Ye.oCity.KLMNP[e] = []), Ye.oCity.KLMNP[e].push(t[1])) : s.test(e) ? (Ye.oCity.QRSTW[e] || (Ye.oCity.QRSTW[e] = []), Ye.oCity.QRSTW[e].push(t[1])) : c.test(e) && (Ye.oCity.XYZ[e] || (Ye.oCity.XYZ[e] = []), Ye.oCity.XYZ[e].push(t[1])), l < 16 && (Ye.oCity.hot.hot || (Ye.oCity.hot.hot = []), Ye.oCity.hot.hot.push(t[1]))
                    }
                }();
                for (var e = $(t).find('[data-formtype="citySelect"]'), n = 0; n < e.length; n++) {
                    var i = e[n];
                    new Ye.CitySelector({
                        input: i
                    })
                }
            }
        },
        tn = Math.max,
        en = Math.min,
        nn = Math.floor,
        an = /\$([$&`']|\d\d?|<[^>]*>)/g,
        on = /\$([$&`']|\d\d?)/g;
    Ut("replace", 2, (function (t, e, n, i) {
        return [function (i, a) {
            var o = t(this),
                r = null == i ? void 0 : i[e];
            return void 0 !== r ? r.call(i, o, a) : n.call(String(o), i, a)
        }, function (t, e) {
            var o = i(n, t, this, e);
            if (o.done) return o.value;
            var s = r(t),
                c = String(this),
                l = "function" == typeof e;
            l || (e = String(e));
            var u = s.global;
            if (u) {
                var h = s.unicode;
                s.lastIndex = 0
            }
            for (var f = [];;) {
                var d = Pt(s, c);
                if (null === d) break;
                if (f.push(d), !u) break;
                "" === String(d[0]) && (s.lastIndex = Et(c, F(s.lastIndex), h))
            }
            for (var p, g = "", m = 0, v = 0; v < f.length; v++) {
                d = f[v];
                for (var y = String(d[0]), w = tn(en(R(d.index), c.length), 0), b = [], _ = 1; _ < d.length; _++) b.push(void 0 === (p = d[_]) ? p : String(p));
                var I = d.groups;
                if (l) {
                    var x = [y].concat(b, w, c);
                    void 0 !== I && x.push(I);
                    var k = String(e.apply(void 0, x))
                } else k = a(y, c, w, b, I, e);
                w >= m && (g += c.slice(m, w) + k, m = w + y.length)
            }
            return g + c.slice(m)
        }];

        function a(t, e, i, a, o, r) {
            var s = i + t.length,
                c = a.length,
                l = on;
            return void 0 !== o && (o = q(o), l = an), n.call(r, l, (function (n, r) {
                var l;
                switch (r.charAt(0)) {
                    case "$":
                        return "$";
                    case "&":
                        return t;
                    case "`":
                        return e.slice(0, i);
                    case "'":
                        return e.slice(s);
                    case "<":
                        l = o[r.slice(1, -1)];
                        break;
                    default:
                        var u = +r;
                        if (0 === u) return n;
                        if (u > c) {
                            var h = nn(u / 10);
                            return 0 === h ? n : h <= c ? void 0 === a[h - 1] ? r.charAt(1) : a[h - 1] + r.charAt(1) : n
                        }
                        l = a[u - 1]
                }
                return void 0 === l ? "" : l
            }))
        }
    }));
    var rn = {
        init: function (t) {
            var e = $(t).find('[data-formtype="date"]'),
                n = new Date,
                i = 1e4 * n.getFullYear() + 100 * (n.getMonth() + 1) + n.getDate();
            window.A.use("calendar", (function () {
                e.each((function () {
                    var t = $(this),
                        e = t.data("start").replace(/-/g, ""),
                        n = t.data("end").replace(/-/g, ""),
                        a = {
                            input: t[0],
                            element: t.next(".ec-cf-calendar-wrap")[0],
                            count: 2,
                            today: i,
                            onSelectDay: function (e, n) {
                                var i = String(e).replace(/(\d{4})(\d{2})(\d{2})/, "$1-$2-$3");
                                t.val(i), t.trigger("blur")
                            }
                        };
                    (e || n) && (n = n || 99999999, a.between = [e, n]), window.A.ui.calendar(a)
                }))
            }))
        }
    };
    var sn = {
            init: function (t) {
                var e = $(t).find('[data-formtype="dropdown-wrap"]');
                window.A.use("dropdown21", (function () {
                    e.each((function () {
                        var t = $(this);
                        window.A.ui.dropdown21(t[0])
                    }))
                }))
            }
        },
        cn = function (t, e) {
            Qe.init(t), rn.init(t), sn.init(t), Xe.init(t, Object.assign({}, e, {
                resultClass: t
            }))
        },
        ln = function (t) {
            $(t).find('[data-listtype="more"]').click((function () {
                var t = $(this);
                t.parent().find(".ec-list-hidden").toggle(), t.hasClass("ec-list-fold") ? t.text("\u66f4\u591a") : t.text("\u6536\u8d77"), t.toggleClass("ec-list-fold")
            }))
        },
        un = function (t, e) {
            return {
                value: e,
                done: !!t
            }
        },
        hn = {},
        fn = c ? Object.defineProperties : function (t, e) {
            r(t);
            for (var n, i = bt(e), a = i.length, o = 0; a > o;) g.f(t, n = i[o++], e[n]);
            return t
        },
        dn = n.document,
        pn = dn && dn.documentElement,
        gn = gt("IE_PROTO"),
        mn = function () {},
        vn = function () {
            var t, e = h("iframe"),
                n = wt.length;
            for (e.style.display = "none", pn.appendChild(e), e.src = "javascript:", (t = e.contentWindow.document).open(), t.write("<script>document.F=Object<\/script>"), t.close(), vn = t.F; n--;) delete vn.prototype[wt[n]];
            return vn()
        },
        yn = Object.create || function (t, e) {
            var n;
            return null !== t ? (mn.prototype = r(t), n = new mn, mn.prototype = null, n[gn] = t) : n = vn(), void 0 === e ? n : fn(n, e)
        },
        wn = g.f,
        bn = H("toStringTag"),
        _n = function (t, e, n) {
            t && !w(t = n ? t : t.prototype, bn) && wn(t, bn, {
                configurable: !0,
                value: e
            })
        },
        In = {};
    v(In, H("iterator"), (function () {
        return this
    }));
    var xn = function (t, e, n) {
            t.prototype = yn(In, {
                next: m(1, n)
            }), _n(t, e + " Iterator")
        },
        kn = gt("IE_PROTO"),
        $n = Object.prototype,
        Cn = Object.getPrototypeOf || function (t) {
            return t = q(t), w(t, kn) ? t[kn] : "function" == typeof t.constructor && t instanceof t.constructor ? t.constructor.prototype : t instanceof Object ? $n : null
        },
        jn = H("iterator"),
        Sn = !([].keys && "next" in [].keys()),
        En = function () {
            return this
        },
        Tn = function (t, e, n, i, a, o, r) {
            xn(n, e, i);
            var s, c, l, u = function (t) {
                    if (!Sn && t in p) return p[t];
                    switch (t) {
                        case "keys":
                        case "values":
                            return function () {
                                return new n(this, t)
                            }
                    }
                    return function () {
                        return new n(this, t)
                    }
                },
                h = e + " Iterator",
                f = "values" == a,
                d = !1,
                p = t.prototype,
                g = p[jn] || p["@@iterator"] || a && p[a],
                m = g || u(a),
                y = a ? f ? u("entries") : m : void 0,
                w = "Array" == e && p.entries || g;
            if (w && (l = Cn(w.call(new t))) !== Object.prototype && l.next && (_n(l, h, !0), "function" != typeof l[jn] && v(l, jn, En)), f && g && "values" !== g.name && (d = !0, m = function () {
                    return g.call(this)
                }), (Sn || d || !p[jn]) && v(p, jn, m), hn[e] = m, hn[h] = En, a)
                if (s = {
                        values: f ? m : u("values"),
                        keys: o ? m : u("keys"),
                        entries: y
                    }, r)
                    for (c in s) c in p || C(p, c, s[c]);
                else T(T.P + T.F * (Sn || d), e, s);
            return s
        }(Array, "Array", (function (t, e) {
            this._t = ut(t), this._i = 0, this._k = e
        }), (function () {
            var t = this._t,
                e = this._k,
                n = this._i++;
            return !t || n >= t.length ? (this._t = void 0, un(1)) : un(0, "keys" == e ? n : "values" == e ? t[n] : [n, t[n]])
        }), "values");
    hn.Arguments = hn.Array, at("keys"), at("values"), at("entries");
    for (var zn = H("iterator"), An = H("toStringTag"), On = hn.Array, Pn = {
            CSSRuleList: !0,
            CSSStyleDeclaration: !1,
            CSSValueList: !1,
            ClientRectList: !1,
            DOMRectList: !1,
            DOMStringList: !1,
            DOMTokenList: !0,
            DataTransferItemList: !1,
            FileList: !1,
            HTMLAllCollection: !1,
            HTMLCollection: !1,
            HTMLFormElement: !1,
            HTMLSelectElement: !1,
            MediaList: !0,
            MimeTypeArray: !1,
            NamedNodeMap: !1,
            NodeList: !0,
            PaintRequestList: !1,
            Plugin: !1,
            PluginArray: !1,
            SVGLengthList: !1,
            SVGNumberList: !1,
            SVGPathSegList: !1,
            SVGPointList: !1,
            SVGStringList: !1,
            SVGTransformList: !1,
            SourceBufferList: !1,
            StyleSheetList: !0,
            TextTrackCueList: !1,
            TextTrackList: !1,
            TouchList: !1
        }, Mn = bt(Pn), Nn = 0; Nn < Mn.length; Nn++) {
        var qn, Dn = Mn[Nn],
            Ln = Pn[Dn],
            Rn = n[Dn],
            Bn = Rn && Rn.prototype;
        if (Bn && (Bn[zn] || v(Bn, zn, On), Bn[An] || v(Bn, An, Dn), hn[Dn] = On, Ln))
            for (qn in Tn) Bn[qn] || C(Bn, qn, Tn[qn], !0)
    }! function (t, e) {
        var n = (a.Object || {})[t] || Object[t],
            i = {};
        i[t] = e(n), T(T.S + T.F * s((function () {
            n(1)
        })), "Object", i)
    }("keys", (function () {
        return function (t) {
            return bt(q(t))
        }
    }));

    function Fn(t, e) {
        if (!t) return "";
        var n = [];
        return Object.keys(t).forEach((function (i) {
            var a = t[i];
            if (function (t) {
                    return Array.isArray ? Array.isArray(t) : "[object Array]" === Object.prototype.toString.call(t)
                }(a))
                for (var o = a.length, r = 0; r < o; r++) n.push("".concat(i, "=").concat(e(a[r])));
            else n.push("".concat(i, "=").concat(e(a)))
        })), n.join("&")
    }
    var Vn = function () {
        var t = window.E,
            e = window.bds;
        t.pl = t.pl || {};
        var n, i = {
                air: {
                    clsList: ["c-icon-air"],
                    attrKey: "data-air",
                    tipTitle: "\u6b63\u89c4\u7f51\u4e0a\u552e\u7968\u7f51\u7ad9\uff1a"
                },
                shangyetuiguang: {
                    clsList: ["ec-tuiguang"],
                    attrKey: "data-tuiguang"
                },
                enterprise: {
                    clsList: ["ec-title-tag span"],
                    attrKey: "data-enterprise"
                }
            },
            a = {
                offset: {
                    air: {
                        x: 10,
                        y: 25
                    },
                    shangyetuiguang: {
                        x: 22,
                        y: 25
                    },
                    enterprise: {
                        x: 0,
                        y: 26
                    }
                },
                arrow: {
                    shangyetuiguang: {
                        has: 1,
                        offset: 25
                    }
                },
                statistics: {
                    air: {
                        url: "http://trustrcv.baidu.com/v.php",
                        query: {
                            tag: "airhover"
                        }
                    }
                }
            },
            o = {
                a: '<span><a target="_blank"  href="#{url}">#{text}</a></span>',
                air: '<div class="c-tip-info"><ul><li class="c-tip-item-i"><img class="c-customicon c-gap-icon-right-small c-tip-item-icon" src="#{img}">#{content}</li></ul></div>',
                shangyetuiguang: '<div class="c-tip-info ec_tuiguang_tipinfo">#{content}</div>',
                enterprise: '<div class="c-tip-info ec-enterprise-style">\n                #{enterprise_text}\n            </div>'
            },
            r = function (t) {
                return encodeURIComponent(t)
            };

        function s(t) {
            window.E.pl.userVariable = window.E.pl.userVariable || {}, window.E.pl.userVariable.tgTips = window.E.pl.userVariable.tgTips || [], window.E.pl.userVariable.tgTips.push(t)
        }

        function c(t, e) {
            if (window.E && window.E.pl && window.E.pl.userVariable && window.E.pl.userVariable.tgTips) {
                var n = window.E.pl.userVariable.tgTips,
                    i = null;
                t && (i = $(t).parents(".c-tip-con"));
                for (var a = 0; a < n.length; a++) try {
                    if ("click" === e && t) {
                        var o = n[a].dom;
                        if (t && i && o[0] === i[0]) continue
                    }
                    n[a].hide()
                } catch (t) {}
            }
        }

        function l(t, e) {
            var n = t.attr(e);
            return n && function (t) {
                var e;
                try {
                    e = new Function("return (" + t + ")")()
                } catch (t) {
                    e = {}
                }
                return e
            }(n)
        }

        function u(t, e) {
            return e = e || {}, $.format(o[t], e)
        }

        function h(t, e, n) {
            "air" === t && function (t) {
                var e = a.statistics;
                if (e && e[t] && e[t].url) {
                    var n, i = window.bds || {},
                        o = "";
                    i && i.comm && i.comm.qid && (o = i.comm.qid);
                    var s = {
                        qid: o,
                        url: window.document.location.href,
                        timestamp: +new Date
                    };
                    n = e[t].url, $.extend(s, e[t].query || {}), ct(n + "?" + Fn(s, r))
                }
            }(t);
            var i, o, s, c = this;
            if ("enterprise" === t && $(c.dom[0]).addClass("ec-d20-tip-enterprise"), !c.alreadyRender) {
                c.op.offset.x = a.offset[t].x, c.op.offset.y = a.offset[t].y, a.arrow[t] && (c.op.arrow = a.arrow[t]);
                var h, f = l($(c.getTarget()), e),
                    d = f.content || "",
                    p = (i = f.a, o = f.linkLabel, s = "", i && (s = u("a", {
                        url: i.url,
                        text: i.text || o
                    })), s);
                f.content = d.replace(/\[linkLabel]/, p), h = u(t, f), n && c.setTitle(n), c.setContent(h), c.alreadyRender = !0
            }
        }
        $(document).click((function (t) {
            c((t = t || window.event).target || t.srcElement, "click")
        })), $(window).resize((function (t) {
            c()
        })), t.pl.checkTipComponent = function () {
            e && e.se && e.se.tip ? (n && clearTimeout(n), setTimeout((function () {
                $.each(i, (function (t, n) {
                    ! function (t, n) {
                        for (var i = $("." + n.clsList.join(",.")), a = n.attrKey, o = n.tipTitle, r = 0, l = i.length; r < l; r++) {
                            var u = $(i[r]),
                                f = {
                                    target: u[0]
                                },
                                d = u.parent();
                            if (u.hasClass("ec-tuiguang")) {
                                var p = new e.se.tip({
                                    target: u[0],
                                    mode: "click"
                                });
                                p.onShow = h.bind(p, t, a, o),
                                    function (t, e) {
                                        s(e), t.click((function (t) {
                                            return t.preventDefault(), t.stopPropagation(), e.visible ? e.hide() : (c(), e.show()), !1
                                        }))
                                    }(u, p)
                            } else if (d.length) {
                                var g = new e.se.tip(f);
                                g.onShow = h.bind(g, t, a, o)
                            }
                        }
                    }(t, n)
                }))
            }), 10)) : n = setTimeout((function () {
                t.pl.checkTipComponent()
            }), 10)
        }, e.ready((function () {
            t.pl.checkTipComponent()
        }))
    };
    var Hn = {
        init: function () {
            var t = /link\?url\=([^\&]+)/,
                e = /\?url\=([^\.]+)\./,
                n = {
                    window: ["open", "print", "promptdf"],
                    document: ["referrer", "domaining", "createTextNode"]
                },
                i = [];
            for (var a in n) "window" === a ? o(window, n[a]) : "document" === a && o(document, n[a]);

            function o(t, e) {
                for (var n = e.length, a = 0; a < n; a++) void 0 === t[e[a]] ? i.push(0) : i.push(1)
            }
            $(".EC_result a").click((function () {
                var n = $(this).attr("href");
                void 0 !== n && ((t.exec(n) || e.exec(n)) && -1 === n.indexOf("&bc=") && (n += "&bc=" + i.join("")), $(this).attr("href", n))
            }))
        }
    };
    Ut("match", 1, (function (t, e, n, i) {
        return [function (n) {
            var i = t(this),
                a = null == n ? void 0 : n[e];
            return void 0 !== a ? a.call(n, i) : new RegExp(n)[e](String(i))
        }, function (t) {
            var e = i(n, t, this);
            if (e.done) return e.value;
            var a = r(t),
                o = String(this);
            if (!a.global) return Pt(a, o);
            var s = a.unicode;
            a.lastIndex = 0;
            for (var c, l = [], u = 0; null !== (c = Pt(a, o));) {
                var h = String(c[0]);
                l[u] = h, "" === h && (a.lastIndex = Et(o, F(a.lastIndex), s)), u++
            }
            return 0 === u ? null : l
        }]
    }));
    var Un = function () {
            var t, e, n, i = 0,
                a = 0,
                o = 0,
                r = 0,
                s = 0,
                c = 0,
                l = 0,
                u = 0,
                h = 0,
                f = /link\?url\=([^\&]+)/,
                d = /\?url\=([^\.]+)\./,
                p = /[?&]tn=([^&]*)/;

            function g(t) {
                if (!t) return !1;
                var e = f.exec(t) || d.exec(t);
                return !!e && (f.exec(t) ? e[1].length < 20 ? e[1] : e[1].substr(0, 20) : e[1])
            }

            function m(n) {
                var r, s, c = (r = h.href, s = h.getAttribute("data-cklink"), g(r) || g(s));
                !1 !== c && function (n) {
                    var r = "&ck=" + [n, o, u, Math.round(i), Math.round(a), Math.round(t), Math.round(e), l].join("."),
                        s = h.href,
                        c = h.getAttribute("data-cklink");
                    s && g(s) && (h.href = y(s, r) + v(s));
                    c && g(c) && h.setAttribute("data-cklink", y(c, r) + v(c))
                }(function (t, e) {
                    for (var n = 0, i = 0; i < o * e % 99 + 9; i++) n += t.charCodeAt(u * i % t.length);
                    return n
                }(c, n))
            }

            function v(t) {
                var e = "";
                if (-1 === t.indexOf("&shh=") && -1 === t.indexOf("?shh=") && (e = "&shh=" + location.hostname), -1 === t.indexOf("&sht=") && -1 === t.indexOf("?sht=")) {
                    var n = location.href.match(p);
                    n && (e += "&sht=" + n[1])
                }
                return e
            }

            function y(t, e) {
                return g(t) && (-1 === t.indexOf("&ck=") ? t += e : t = t.replace(/&ck=[\d.]*/, e)), t
            }

            function w(t, e, n) {
                for (var i, a, o = e.length, r = 0; r < o; r++) i = e[r], a = n[r], window.attachEvent ? t.attachEvent("on" + i, a) : t.addEventListener(i, a, !1)
            }

            function b(n) {
                return [function (s) {
                    ! function (n, s) {
                        n = n || window.event, h = n.target || n.srcElement, o++, void 0 === t && (t = n.clientX), void 0 === e && (e = n.clientY), i = 0, a = 0, u = 0, l = 0, r = (new Date).getTime(), m(s)
                    }(s, n)
                }, function (t) {
                    ! function (t, e) {
                        for (t = t || window.event, h = t.target || t.srcElement; h && "A" !== h.tagName;) h = h.parentNode;
                        s = (new Date).getTime(), u = 9999, i = t.clientX, a = t.clientY, l = 0 === r ? 0 : s - r, m(e)
                    }(t, n)
                }, function (t) {
                    ! function (t, e) {
                        c = (new Date).getTime(), u = c - s, m(e)
                    }(0, n)
                }]
            }

            function _(t) {
                var e = t.href;
                if (g(e)) {
                    var n = "&ck=" + [0, o, u, Math.round(i), Math.round(a), 0, 0, l].join("."),
                        r = t.getAttribute("data-cklink");
                    e && (t.href = y(e, n) + v(e)), r && t.setAttribute("data-cklink", y(r, n) + v(r))
                }
            }

            function I(t, e, n) {
                void 0 === t.length && (t = [t]);
                for (var i = t.length, a = 0, o = b(e); a < i; a++) n || _(t[a]), w(t[a], ["mouseover", "mousedown", "mouseup"], o)
            }
            return {
                getInstance: function (t) {
                    return n || (n = {
                        addAdsCk: I
                    }), n
                }
            }
        },
        Zn = function (t, e, n) {
            var i = Un().getInstance(t);
            i;
            for (var a = document.querySelectorAll(t), o = 0; o < a.length; o++) {
                var r = a[o],
                    s = r.getAttribute("data-ecimtimesign") || r.getAttribute("data-pz-sign"),
                    c = s || e,
                    l = r.getElementsByTagName("A");
                i.addAdsCk(l, c, n)
            }
            return i
        };
    var Wn = {
        init: function () {
            for (var t = $(".EC_result a"), e = function (t) {
                    var e = t || window.event,
                        n = e.target || e.srcElement,
                        i = $(n).closest("a").attr("href");
                    if (i && -1 !== i.indexOf("baidu.php?url=")) {
                        var a = i;
                        a = -1 !== i.indexOf("&wd=") ? i.replace(/&wd=[^&]*/, "&wd=") : i + "&wd=", -1 !== i.indexOf("&word=") && (a = a.replace(/&word=[^&]*/, "&word=")), -1 !== i.indexOf("&oq=") && (a = a.replace(/&oq=[^&]*/, "")), a !== i && $(n).closest("a").attr("href", a)
                    }
                }, n = 0; n < t.length; n++) window.attachEvent ? t[n].attachEvent("onmouseup", e) : t[n].addEventListener("mouseup", e, !1)
        }
    };

    function Gn(t, e) {
        for (var n = 0; n < t.length; n++) {
            var i = t[n],
                a = i.getAttribute("style");
            i.setAttribute("style", a ? "".concat(e).concat(a) : e)
        }
    }
    var Xn = function (t) {
            for (var e = document.querySelectorAll("[data-placeid], " + t), n = "display:block !important;visibility:visible !important;", i = 0, a = e.length; i < a; i++) {
                var o = e[i],
                    r = o.getAttribute("style"),
                    s = $(o).children("div"),
                    c = r ? "".concat(n).concat(r) : n;
                o.setAttribute("style", c), Gn(s, c)
            }
        },
        Jn = function (t) {
            var e = t.find("a");
            e.on("mouseover", (function () {
                $(this).attr("data-landurl") && !$(this).attr("data-cklink") && ($(this).attr("data-cklink", $(this).attr("href")), $(this).attr("href", $(this).attr("data-landurl")))
            })), e.find("a").each((function () {
                "true" !== $(this).attr("data-asyn") && ($(this).attr("data-asyn", "true"), $(this).on("click", (function () {
                    var t = $(this).attr("data-cklink");
                    t && (-1 === (t = t.replace("http://", "//").replace("https://", "//")).indexOf("&wd=") && (t = t + "&wd=" + encodeURIComponent(window.bds.comm.query)), "www.baidu.com" !== window.location.hostname || 0 !== t.indexOf("//www.baidu.com/baidu.php") && 0 !== t.indexOf("//www.baidu.com/link?url=") ? ct(t) : $.get(t))
                })))
            })), e.on("mousedown", (function (t) {
                t.stopPropagation()
            }))
        };

    function Kn(t, e) {
        try {
            null !== t[e] && Object.defineProperty && Object.defineProperty(t, e, {
                configurable: !1,
                get: function () {
                    return null
                },
                set: function (t) {}
            })
        } catch (t) {}
    }

    function Yn(t) {
        var e = t.renderAdShadowDomFlag;
        if (1 !== e && function (t) {
                var e = t.resultClass;
                if ($("#content_left > .".concat(e)).length > 0) return !1;
                var n = $('#content_left > [id="1"]'),
                    i = n.eq(0).height() || n[0].offsetHeight;
                return n.length >= 2 && i > 26
            }() && !($("#css_newi_result").length <= 0)) {
            var n, i = (n = !0, $("#content_left > .c-container").filter((function () {
                var t = $(this);
                return "2" === t.attr("id") && (n = !1), "1" === t.attr("id") && n
            })));
            if (!(i.length < 2)) {
                var a = (i = Array.prototype.slice.call(i)).pop();
                if ("function" == typeof a.createShadowRoot) {
                    for (var o = 0, r = i.length; o < r; o++) i[o].remove();
                    var s = a.createShadowRoot();
                    s.appendChild($("#css_newi_result").clone()[0]);
                    var c = ["<style>", ".result{margin-bottom: 14px;}", "div,h3{display: block !important;visibility: visible !important;}", "font,a,span{display: inline !important;visibility: visible !important;}", ".m{color: #7cabf7;}", "</style>"].join("");
                    s.appendChild($(c)[0]);
                    var l = t.ecomData204,
                        u = t.ecomData213;
                    if (u) {
                        var h = $(u);
                        Jn(h), h.each((function () {
                            $(this).removeClass("ecom-result"), s.appendChild(this)
                        }))
                    }
                    if (l) {
                        var f = $(l);
                        Jn(f), f.each((function () {
                            $(this).removeClass("ecom-result"), s.appendChild(this)
                        }))
                    }
                    var d = document.createElement("content");
                    d.select = "*", s.appendChild(d), Kn(a, "shadowRoot"), Kn(a, "createShadowRoot"), pe({
                        tag: "ecom_msa_tmp_3",
                        action: "adb_ad_shadow_dom",
                        baiduid: t.baiduid,
                        searchid: t.searchid
                    }), e = 1
                }
            }
        }
    }

    function Qn(t) {
        0 === function (t) {
            var e = t.sourceAdNum,
                n = t.resultClass,
                i = 0;
            if (e.ads_204 && (i += parseInt(e.ads_204, 10)), e.ads_213 && (i += parseInt(e.ads_213, 10)), e.ads_217 && (i += parseInt(e.ads_217, 10)), t.adNum = i, $("#content_left .".concat(n)).length < i) return 0;
            var a = 0;
            return $("#content_left .".concat(n)).each((function () {
                return !($(this).height() < 26) || (a = 1, !1)
            })), a ? 0 : 1
        }(t) && function (t) {
            var e = t.resultClass,
                n = t.imTimeSign;
            if (!t.renderAdvLikeResultFlag) {
                var i = t.ecomData204,
                    a = t.ecomData213,
                    o = t.ecomData217;
                $(".".concat(e)).remove(), a && $("#content_left #1").before(a), i && $("#content_left #1").before(i), o && $("#content_left").append(o), Jn($(".ecom-result a")), Zn(".ecom-result", n), $(".ecom-result").removeClass("ecom-result"), pe({
                    tag: "ecom_statistic",
                    action: "renderasnatice",
                    resultnum: $("#content_left .c-container, #content_left .result-op").length,
                    mtinfo: t.mtinfo
                }), pe({
                    tag: "ecom_msa_tmp_3",
                    action: "adb_ad_render",
                    baiduid: t.baiduid,
                    searchid: t.searchid
                }), t.renderAdvLikeResultFlag = !0
            }
        }(t)
    }
    var ti = Object.is || function (t, e) {
        return t === e ? 0 !== t || 1 / t == 1 / e : t != t && e != e
    };
    Ut("search", 1, (function (t, e, n, i) {
        return [function (n) {
            var i = t(this),
                a = null == n ? void 0 : n[e];
            return void 0 !== a ? a.call(n, i) : new RegExp(n)[e](String(i))
        }, function (t) {
            var e = i(n, t, this);
            if (e.done) return e.value;
            var a = r(t),
                o = String(this),
                s = a.lastIndex;
            ti(s, 0) || (a.lastIndex = 0);
            var c = Pt(a, o);
            return ti(a.lastIndex, s) || (a.lastIndex = s), null === c ? -1 : c.index
        }]
    }));
    T(T.P, "Array", {
        fill: function (t) {
            for (var e = q(this), n = F(e.length), i = arguments.length, a = dt(i > 1 ? arguments[1] : void 0, n), o = i > 2 ? arguments[2] : void 0, r = void 0 === o ? n : dt(o, n); r > a;) e[a++] = t;
            return e
        }
    }), at("fill");
    var ei = "page:scroll:init",
        ni = "page:scroll:end";

    function ii(t, e) {
        if (!t.fn.doctor) {
            var n = 1,
                i = 2,
                a = 3;
            t.fn.doctor = function () {
                return this.each((function () {
                    return o(t(this)), this
                }))
            }
        }

        function o(o) {
            var r = Math.random().toString(36).substr(2).replace(/^\d*/g, ""),
                s = "#".concat(r);
            0 === t(s).length && (t('<style class="'.concat(r, '">#').concat(r, "{display: none}</style>")).appendTo(t("head")), t('<div class="'.concat(r, '" id="').concat(r, '"></div>')).appendTo(t("body")));
            var c = t(s);
            c.html(o.prop("outerHTML").replace(/display:\s*block\s*!important;\s*visibility:\s*visible\s*!important;*/g, ""));
            var l = o.find("*"),
                u = c.children().find("*");
            l.each((function (o, r) {
                ! function (t) {
                    for (var e = [{
                            key: "id",
                            type: n
                        }, {
                            key: "href",
                            type: a
                        }, {
                            key: "data-click",
                            type: i
                        }, {
                            key: "data-landurl",
                            type: a
                        }], o = 0, r = e.length; o < r; o++) switch (e[o].type) {
                        case n:
                            t.attr(e[o].key, "");
                            break;
                        case i:
                            t.attr(e[o].key) && t.attr(e[o].key, "");
                            break;
                        case a:
                            t.removeAttr(e[o].key)
                    }
                }(t(u[o]));
                var s = t(u[o]).css("display"),
                    c = t(u[o]).css("visibility"),
                    h = t(l[o]),
                    f = h.attr("style") || "";
                void 0 !== s && h.css("display") !== s && "none" !== s && "hidden" !== c && -1 === f.indexOf("visible !important;") && (void 0 === e.isAdblocked && (pe({
                    tag: "isAdblocked"
                }), pe({
                    tag: "ecom_msa_tmp_3",
                    action: "adb_ad_doctor",
                    baiduid: e.baiduid,
                    searchid: e.searchid
                })), e.isAdblocked = 1, h.attr("style", "display: ".concat(s, " !important; visibility: visible !important; ").concat(f)))
            })), t(".".concat(r)).remove()
        }
    }

    function ai(t) {
        if (e = navigator.appVersion, n = -1 !== e.search(/MSIE 6/i), i = -1 !== e.search(/MSIE 7/i), !n && !i) {
            var e, n, i;
            ii(window.jQuery ? window.jQuery : window.Zepto, t);
            var a = $("#content_left .".concat(t.resultClass));
            a.length > 0 && a.doctor(), t.renderAdvDoctor = !0
        }
    }

    function oi(t) {
        var e = t.resultClass;

        function n(t) {
            return e + t
        }
        $(window).on(n("/ecom/adblock/like/done"), (function () {
            ! function (t) {
                var e = t.renderAdShadowDomFlag,
                    n = t.shadowDomTimer;
                n = setInterval((function () {
                    0 === e ? Yn(t) : clearInterval(n)
                }), 500), $(window).on("swap_begin", (function () {
                    clearInterval(n)
                }))
            }(t), $(window).trigger(n("/ecom/adblock/shadow/done"))
        })), $(window).one(n("/ecom/adblock/resotre/done"), (function () {
            Qn(t), $(window).trigger(n("/ecom/adblock/like/done"))
        }));
        var i = function (t) {
            var e = t.resultClass,
                n = "#content_left .".concat(e),
                i = $(n),
                a = $("#ecomScript"),
                o = $("#content_left .c-container").eq(0),
                r = window.bds && window.bds.comm && window.bds.comm.qid,
                s = [],
                c = [],
                l = $("#content_left .result-op, #content_left .result").eq(1);
            if (l.length <= 0) return function () {};
            var u = l.offset().top;
            return i.sort((function (t, e) {
                    return $(t).offset().top > $(e).offset().top
                })), i.each((function (t, e) {
                    var n = $(this);
                    n.offset().top <= u ? s.push(n.clone(!1)) : c.push(n.clone(!1))
                })),
                function () {
                    if (r === window.bds.comm.qid) {
                        var e = t.renderAdvRestoreFlag,
                            i = t.renderAdvLikeResultFlag;
                        if (!e && !i) {
                            var l = s.length + c.length,
                                u = $(n).length;
                            if ($("#wrapper_wrapper, #content_left").off("DOMNodeInserted"), l > 0 && u < l) {
                                if ($(n).remove(), s.length > 0) {
                                    var h = s.slice();
                                    $(h).each((function () {
                                        $(this).insertBefore(o)
                                    }))
                                }
                                if (c.length > 0) {
                                    var f = c.slice();
                                    $(f).each((function () {
                                        $("#content_left").append($(this))
                                    }))
                                }
                                $("#ecomScript").remove(), $("body").append(a), pe({
                                    tag: "ecom_msa_tmp_3",
                                    action: "adb_ad_restore",
                                    baiduid: t.baiduid,
                                    searchid: t.searchid
                                }), e = !0
                            }
                        }
                    }
                }
        }(t);
        $(window).on(n("/ecom/adblock/doctor/done"), (function () {
            i(), $(window).trigger(n("/ecom/adblock/resotre/done"))
        })), ai(t), $(window).trigger(n("/ecom/adblock/doctor/done"))
    }
    var ri = function (t) {
            var e = t.sourceAdNum,
                n = t.baiduid,
                i = t.searchid,
                a = t.eid,
                o = window.bds;
            o && o.ready((function () {
                var r = o.comm && o.comm.qid,
                    s = setTimeout((function () {
                        if (r === (o.comm && o.comm.qid)) {
                            var s = [],
                                c = [],
                                l = e.ads_204 ? e.ads_204 : 0,
                                u = e.ads_213 ? e.ads_213 : 0,
                                h = e.ads_217 ? e.ads_217 : 0,
                                f = parseInt(l, 10) + parseInt(u, 10) + parseInt(h, 10);
                            $("#content_left .EC_result,.bds-result-lists .EC_result").each((function () {
                                s.push(this)
                            }));
                            for (var d = s.length, p = 0; p < d; p++) c.push(m(s[p]));
                            var g = {
                                n: d,
                                t: f,
                                f: c.join("."),
                                x: parseInt(f, 10) > d ? 0 : 1,
                                num_204: l,
                                num_213: u,
                                num_217: h,
                                tag: "ecom_statistic",
                                bd: n,
                                q: i,
                                eid: a,
                                s: 4
                            };
                            "" !== g.f && -1 === g.f.indexOf("0") && 1 === g.x || (Qn(t), g.result_num = $("#content_left .c-container").length, pe(g))
                        }

                        function m(t) {
                            return t.clientHeight < 26 ? 0 : 1
                        }
                    }), 2e3);
                $(window).on("swap_begin", (function () {
                    clearTimeout(s)
                }))
            }))
        },
        si = "\t\n\v\f\r \xa0\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\u2028\u2029\ufeff",
        ci = "[" + si + "]",
        li = RegExp("^" + ci + ci + "*"),
        ui = RegExp(ci + ci + "*$"),
        hi = function (t, e, n) {
            var i = {},
                a = s((function () {
                    return !!si[t]() || "\u200b\x85" != "\u200b\x85" [t]()
                })),
                o = i[t] = a ? e(fi) : si[t];
            n && (i[n] = o), T(T.P + T.F * a, "String", i)
        },
        fi = hi.trim = function (t, e) {
            return t = String(z(t)), 1 & e && (t = t.replace(li, "")), 2 & e && (t = t.replace(ui, "")), t
        },
        di = hi,
        pi = Oe.f,
        gi = Se.f,
        mi = g.f,
        vi = di.trim,
        yi = n.Number,
        wi = yi,
        bi = yi.prototype,
        _i = "Number" == M(yn(bi)),
        Ii = "trim" in String.prototype,
        xi = function (t) {
            var e = d(t, !1);
            if ("string" == typeof e && e.length > 2) {
                var n, i, a, o = (e = Ii ? e.trim() : vi(e, 3)).charCodeAt(0);
                if (43 === o || 45 === o) {
                    if (88 === (n = e.charCodeAt(2)) || 120 === n) return NaN
                } else if (48 === o) {
                    switch (e.charCodeAt(1)) {
                        case 66:
                        case 98:
                            i = 2, a = 49;
                            break;
                        case 79:
                        case 111:
                            i = 8, a = 55;
                            break;
                        default:
                            return +e
                    }
                    for (var r, s = e.slice(2), c = 0, l = s.length; c < l; c++)
                        if ((r = s.charCodeAt(c)) < 48 || r > a) return NaN;
                    return parseInt(s, i)
                }
            }
            return +e
        };
    if (!yi(" 0o1") || !yi("0b1") || yi("+0x1")) {
        yi = function (t) {
            var e = arguments.length < 1 ? 0 : t,
                n = this;
            return n instanceof yi && (_i ? s((function () {
                bi.valueOf.call(n)
            })) : "Number" != M(n)) ? ze(new wi(xi(e)), n, yi) : xi(e)
        };
        for (var ki, $i = c ? pi(wi) : "MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger".split(","), Ci = 0; $i.length > Ci; Ci++) w(wi, ki = $i[Ci]) && !w(yi, ki) && mi(yi, ki, gi(wi, ki));
        yi.prototype = bi, bi.constructor = yi, C(n, "Number", yi)
    }
    var ji, Si = It.f,
        Ei = (ji = !1, function (t) {
            for (var e, n = ut(t), i = bt(n), a = i.length, o = 0, r = []; a > o;) e = i[o++], c && !Si.call(n, e) || r.push(ji ? [e, n[e]] : n[e]);
            return r
        });
    T(T.S, "Object", {
        values: function (t) {
            return Ei(t)
        }
    });
    var Ti = {
            setCookie: function (t, e, n) {
                document.cookie = [encodeURIComponent(t), "=", encodeURIComponent(e), n.expires ? ";expires=" + new Date(parseInt(n.expires, 10) + (new Date).getTime()).toUTCString() : "", ";path=", n.path ? n.path : "/", n.domain ? ";domain=" + n.domain : "", n.secure ? ";secure" : ""].join("")
            },
            getCookie: function (t) {
                try {
                    var e = document.cookie.match(new RegExp("(^|;)\\s*" + encodeURIComponent(t) + "=([^;]+);?"));
                    return e && e[2] ? decodeURIComponent(e[2]) : ""
                } catch (t) {
                    return ""
                }
            },
            ls: {
                isls: function () {
                    return !!(window.Storage && window.localStorage && window.localStorage instanceof Storage)
                },
                getItem: function (t) {
                    return Ti.ls.isls() ? window.localStorage.getItem(t) : ""
                },
                setItem: function (t, e) {
                    try {
                        Ti.ls.isls() && window.localStorage.setItem(t, e)
                    } catch (t) {}
                },
                removeItem: function (t) {
                    Ti.ls.isls() && window.localStorage.removeItem(t)
                }
            },
            getValues: function (t) {
                if (Object && Object.values) return Object.values(t);
                var e = [];
                for (var n in t)({}).hasOwnProperty.call(t, n) && e.push(t[n]);
                return e
            },
            getDiff: function (t) {
                for (var e = 0, n = 0; n < t.length - 1; n++)
                    if (t[n] - t[n + 1] > 0) return e = t[n] - t[n + 1];
                return !e && t.length > 2 ? Ti.getDiff(t.slice(1)) : e
            }
        },
        zi = function t(e) {
            Jt(this, t), this.searchTimeDiff = e[0], this.clickAdNum = parseInt(e[1], 10)
        },
        Ai = function t(e) {
            Jt(this, t), this.searchTimeDiff = e[0], this.clickAdNum = parseInt(e[1], 10), this.wiseIsWatched = parseInt(e[2], 10), this.isTopRefresh = parseInt(e[3], 10), this.clickWiseNum = parseInt(e[4], 10), this.scrollDownNum = parseInt(e[5], 10), this.isblocked = parseInt(e[6], 10), this.isScrollBottom = parseInt(e[7], 10), this.wiseInitIsWatched = parseInt(e[8], 10), this.isScroll = parseInt(e[9], 10), this.scrollTimeDiff = e[10], this.scrollUpNum = parseInt(e[11], 10), this.wiseClickDiff = parseInt(e[12], 10), this.adClickDiff = parseInt(e[13], 10), this.curWiseClickTime = parseInt(e[14], 10), this.curAdClickTime = parseInt(e[15], 10), this.wiseClickTime = parseInt(e[16], 10), this.adClickTime = parseInt(e[17], 10)
        },
        Oi = "COOKIE_SESSION",
        Pi = "ECOM_PC_SESSION",
        Mi = function (t) {
            return /^(\d+_){18}\d+\|(\d){1}#(\d+_){2}\d+\|(\d){1}$/.test(t) ? t : ""
        },
        Ni = function (t) {
            Ti.ls.setItem(Pi, JSON.stringify({
                showItem: t.showItem,
                clickItem: t.clickItem
            }))
        },
        qi = function (t, e, n) {
            Ti.setCookie(t, e, {
                expires: 31536e6,
                path: "/"
            })
        },
        Di = function (t) {
            return new Ai(t)
        },
        Li = function (t) {
            return new zi(t)
        },
        Ri = function (t, e) {
            var n = t.length,
                i = t[0].split("_"),
                a = "",
                o = 1;
            if ("show" === e && (o = 7), 1 === n) {
                for (var r = 1; r < i.length - o; r++) isNaN(parseInt(i[r], 10)) && (i[r] = 0), a += "_" + i[r];
                return "show" === e ? a.substr(1) + "_" + i[i.length - 7] + "_" + i[i.length - 6] + "_" + i[i.length - 5] + "_" + i[i.length - 4] + "_" + i[i.length - 3] + "_" + i[i.length - 2] : a.substr(1)
            }
            for (var s = t[1].split("_"), c = Math.abs(parseInt(i[i.length - 1], 10) - parseInt(s[s.length - 1], 10)), l = [], u = [], h = parseInt(i[i.length - 7], 10), f = parseInt(i[i.length - 6], 10), d = parseInt(i[i.length - 3], 10), p = parseInt(i[i.length - 2], 10), g = 1; g < t.length; g++)
                for (var m = t[g].split("_"), v = 2; v < i.length - o; v++) isNaN(parseInt(i[v], 10)) && (i[v] = 0), isNaN(parseInt(m[v], 10)) && (m[v] = 0), 7 !== v && 11 !== v && (i[v] = parseInt(i[v], 10) + parseInt(m[v], 10));
            if ("show" === e)
                for (var y = 0; y < t.length; y++) {
                    var w = t[y].split("_");
                    isNaN(parseInt(w[w.length - 3], 10)) && (w[w.length - 3] = 0), isNaN(parseInt(w[w.length - 2], 10)) && (w[w.length - 2] = 0), parseInt(w[w.length - 3], 10) && l.push({
                        value: parseInt(w[w.length - 3], 10),
                        index: y
                    }), parseInt(w[w.length - 2], 10) && u.push({
                        value: parseInt(w[w.length - 2], 10),
                        index: y
                    })
                }
            1 === l.length ? (h = parseInt(t[l[0].index].split("_")[i.length - 7], 10), d = l[0].value) : l.length > 1 && (h = Math.abs(parseInt(l[0].value, 10) - parseInt(l[1].value, 10)), d = l[0].value), 1 === u.length ? (f = parseInt(t[u[0].index].split("_")[i.length - 6], 10), p = u[0].value) : u.length > 1 && (f = Math.abs(parseInt(u[0].value, 10) - parseInt(u[1].value, 10)), p = u[0].value);
            for (var b = 2; b < i.length - o; b++) a += "_" + i[b];
            return "click" === e ? c + a : c + a + "_" + h + "_" + f + "_" + i[i.length - 5] + "_" + i[i.length - 4] + "_" + d + "_" + p
        },
        Bi = function (t, e) {
            var n = {},
                i = Mi(Ti.getCookie(Oi));
            return i && "" !== i || Ti.ls.isls() ? Ti.ls.isls() ? (n = function (t) {
                var e = "",
                    n = "",
                    i = [],
                    a = Ti.ls.getItem(Pi);
                return a && (a = JSON.parse(a)), a && a.showItem && a.showItem.length && (i = a.showItem[0].split("_"), e = Ri(a.showItem, "show") + "_" + i[i.length - 1] + "|" + a.showItem.length, a && a.clickItem && !a.clickItem.length && a.clickItem.push("0_0_0_" + t + "|1")), a && a.clickItem && a.clickItem.length && (i = a.clickItem[0].split("_"), n = Ri(a.clickItem, "click") + "_" + i[i.length - 1] + "|" + a.clickItem.length), a && a.showItem && a.showItem.length && a.clickItem && a.clickItem.length ? {
                    ckie: e + "#" + n,
                    curItems: a.showItem[0].split("_").slice(1).join("_") + "|" + a.showItem.length + "#" + a.clickItem[0].split("_").slice(1).join("_") + "|" + a.clickItem.length
                } : {
                    ckie: "",
                    curItems: ""
                }
            }(e)).ckie || i && "" !== i ? !n.ckie && i && "scroll" === t ? i : !n.ckie && i && "scroll" !== t ? "" : (i && "" !== i || !n.ckie || qi(Oi, n.ckie), n.curItems) : "" : i : ""
        },
        Fi = function (t) {
            return {
                showItem: Di([0, 0, 0, 0, 0, 0, t, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]),
                clickItem: Li([0, 0])
            }
        },
        Vi = function (t, e, n) {
            return "init" === t ? Fi(e) : function (t) {
                if (!t || !t.length) return !1;
                var e = t.split("#"),
                    n = e[0].split("|")[0].split("_");
                n.pop();
                var i = e[1].split("|")[0].split("_");
                return i.pop(), {
                    showItem: Di(n),
                    clickItem: Li(i)
                }
            }(Bi(t, n)) || Fi(e)
        },
        Hi = function () {
            function t(e) {
                Jt(this, t), this.opts = e, this.EC_RESULT = {}, this.LIKE_WISE_RESULT = {}, this.SHADOW_DOM_RESULT = {}, this.RESULT = {}, this.ASPTIME = Math.ceil(Number(e.aspTime) / 1e3), this.SID = e.searchid, this.MAX = 10, this.ad204Num = e.ad204Num ? parseInt(e.ad204Num, 10) : 0, this.ad213Num = e.ad213Num ? parseInt(e.ad213Num, 10) : 0, this.ad217Num = e.ad217Num ? parseInt(e.ad217Num, 10) : 0, this.ISBLOCKED = 0, this.lastCookie = ""
            }
            return Yt(t, [{
                key: "adOnEvent",
                value: function (t, e, n) {
                    var i = this;
                    n.off(t).on(t, (function (t) {
                        e.showItem.clickAdNum = parseInt(e.showItem.clickAdNum, 10) + 1, e.clickItem.clickAdNum = parseInt(e.clickItem.clickAdNum, 10) + 1, e.showItem.adClickTime = Math.ceil(Date.now() / 1e3), e.showItem.curAdClickTime = Math.abs(Math.ceil(Date.now() / 1e3 - i.ASPTIME)), i.addCookieSession(e.showItem, "show", Mi(Ti.getCookie(Oi))), i.addCookieSession(e.clickItem, "click", Mi(Ti.getCookie(Oi)))
                    }))
                }
            }, {
                key: "wiseOnEvent",
                value: function (t, e, n) {
                    var i = this;
                    n.off(t).on(t, (function (t) {
                        e.showItem.clickWiseNum = parseInt(e.showItem.clickWiseNum, 10) + 1, e.showItem.curWiseClickTime = Math.abs(Math.ceil(Date.now() / 1e3 - i.ASPTIME)), e.showItem.wiseClickTime = Math.ceil(Date.now() / 1e3), i.addCookieSession(e.showItem, "show", Mi(Ti.getCookie(Oi)))
                    }))
                }
            }, {
                key: "mergeCookieValue",
                value: function (t, e, n) {
                    var i = [],
                        a = t.split("#"),
                        o = parseInt(a[0].split("|")[0].split("_")[0], 10),
                        r = parseInt(a[1].split("|")[0].split("_")[0], 10),
                        s = parseInt(a[0].split("|")[0].split("_").reverse()[0], 10),
                        c = parseInt(a[1].split("|")[0].split("_").reverse()[0], 10),
                        l = 0,
                        u = 2,
                        h = [],
                        f = 0,
                        d = 0,
                        p = 0,
                        g = 0,
                        m = 0,
                        v = 0,
                        y = s === this.ASPTIME ? o : Math.abs(s - this.ASPTIME),
                        w = c === this.ASPTIME ? r : Math.abs(c - this.ASPTIME);
                    if (s !== this.ASPTIME && (this.lastCookie = t), "show" !== n && "scroll" !== n || (h = a[0].split("_").slice(0, 18), l = 6, u = 18), "click" === n && (h = a[1].split("_").slice(0, 2)), "show" === n || "click" === n)
                        for (var b = 0; b < h.length - l; b++) isNaN(parseInt(h[b], 10)) && (h[b] = 0), isNaN(parseInt(e[b], 10)) && (e[b] = 0), parseInt(s, 10) !== parseInt(this.ASPTIME, 10) ? [6, 10].indexOf(b) >= 0 ? i[b] = parseInt(e[b], 10) : i[b] = parseInt(h[b], 10) + parseInt(e[b], 10) : [6, 10].indexOf(b) < 0 ? i[b] = parseInt(e[b], 10) : i[b] = parseInt(h[b], 10);
                    if ("scroll" === n)
                        for (var _ = 0; _ < h.length - l; _++) isNaN(parseInt(h[_], 10)) && (h[_] = 0), isNaN(parseInt(e[_], 10)) && (e[_] = 0), [5, 11].indexOf(_) >= 0 ? i[_] = parseInt(e[_], 10) : [3, 6, 8, 10].indexOf(_) >= 0 ? parseInt(h[_], 10) ? i[_] = parseInt(h[_], 10) : i[_] = parseInt(e[_], 10) : [2, 7, 9].indexOf(_) >= 0 ? i[_] = Math.min(parseInt(h[_], 10) + parseInt(e[_], 10), this.lastCookie ? parseInt(this.lastCookie.split("_")[_], 10) + 1 : parseInt(e[_], 10) ? parseInt(e[_], 10) : 0) : i[_] = parseInt(h[_], 10);
                    if ("show" === n || "scroll" === n) {
                        if (parseInt(e[16], 10) && parseInt(e[16], 10) !== parseInt(h[16], 10) ? p = Math.abs(parseInt(e[16], 10) - this.ASPTIME) : parseInt(e[16], 10) && parseInt(e[16], 10) === parseInt(h[16], 10) && parseInt(h[14], 10) && (p = parseInt(h[14], 10)), parseInt(e[17], 10) && parseInt(e[17], 10) !== parseInt(h[17], 10) ? g = Math.abs(parseInt(e[17], 10) - this.ASPTIME) : parseInt(e[17], 10) && parseInt(e[17], 10) === parseInt(h[17], 10) && parseInt(h[15], 10) && (g = parseInt(h[15], 10)), parseInt(e[16], 10) && parseInt(h[16], 10)) f = Math.abs(parseInt(e[16], 10) - parseInt(h[16], 10)) || parseInt(h[12], 10);
                        else f = "scroll" === n || s === this.ASPTIME ? parseInt(e[12], 10) : parseInt(h[12], 10);
                        if (parseInt(e[17], 10) && parseInt(h[17], 10)) d = Math.abs(parseInt(e[17], 10) - parseInt(h[17], 10)) || parseInt(h[13], 10);
                        else d = "scroll" === n || s === this.ASPTIME ? parseInt(e[13], 10) : parseInt(h[13], 10);
                        m = parseInt(e[16], 10) ? parseInt(e[16], 10) : parseInt(h[16], 10), v = parseInt(e[17], 10) ? parseInt(e[17], 10) : parseInt(h[17], 10)
                    }
                    return "show" === n || "scroll" === n ? (i.push(f, d, p, g, m, v), y + "_" + i.slice(1, u).join("_") + "_" + this.ASPTIME + "|" + (s === this.ASPTIME ? a[0].split("|")[1] : parseInt(a[0].split("|")[1], 10) + 1 >= this.MAX ? 1 : parseInt(a[0].split("|")[1], 10) + 1)) : w + "_" + i.slice(1, u).join("_") + "_" + this.ASPTIME + "|" + (c === this.ASPTIME ? a[1].split("|")[1] : parseInt(a[1].split("|")[1], 10) + 1 >= this.MAX ? 1 : parseInt(a[1].split("|")[1], 10) + 1)
                }
            }, {
                key: "deleteSameSid",
                value: function (t, e, n) {
                    if (t && t.length) {
                        var i = t[0].split("_"),
                            a = e.split("_");
                        if ("show" === n || "scroll" === n) {
                            if (this.SID === i[0]) return parseInt(i[i.length - 3], 10) && (a[a.length - 7] = Math.abs(parseInt(a[a.length - 3], 10) - parseInt(i[i.length - 3], 10))), parseInt(i[i.length - 3], 10) === parseInt(a[a.length - 3], 10) && (a[a.length - 7] = Math.abs(parseInt(a[a.length - 7], 10) - parseInt(i[i.length - 7], 10))), parseInt(i[i.length - 2], 10) && (a[a.length - 6] = Math.abs(parseInt(a[a.length - 2], 10) - parseInt(i[i.length - 2], 10))), parseInt(i[i.length - 2], 10) === parseInt(a[a.length - 2], 10) && (a[a.length - 6] = Math.abs(parseInt(a[a.length - 6], 10) - parseInt(i[i.length - 6], 10))), "scroll" === n && (a[11] = parseInt(i[11], 10) ? parseInt(i[11], 10) : parseInt(a[11], 10)), void t.splice(0, 1, a.join("_"))
                        } else if (this.SID === i[0]) return void t.splice(0, 1, e)
                    }
                    t.unshift(e)
                }
            }, {
                key: "start",
                value: function (t, e, n, i) {
                    t = this.updateView(e, n, i, t, this.ad204Num + this.ad213Num, this.ad217Num), this.addCookieSession(t.showItem, "init" === i ? "show" : "scroll", Mi(Ti.getCookie(Oi)))
                }
            }, {
                key: "updateView",
                value: function (t, e, n, i, a, o) {
                    var r = JSON.parse(JSON.stringify(i)),
                        s = t && t.initViewZone;
                    "init" !== n && e && e.endViewZone && (s = e.endViewZone);
                    var c = t && t.wise ? parseInt(t.wise, 10) : 0,
                        l = e && e.scrolldirect,
                        u = s.split(":")[1];
                    if (o > 0 && "b_" + o + "_1.00" === u && (r.showItem.isScrollBottom = 1), 0 === o && "w_" + c + "_1.00" === u && (r.showItem.isScrollBottom = 1), "init" === n) {
                        var h = s.split(":")[0];
                        a > 0 && "t_1_0.00" === h && (r.showItem.isTopRefresh = 1), 0 === a && "w_1_0.00" === h && (r.showItem.isTopRefresh = 1), "p_1_0.00" === h && (r.showItem.isTopRefresh = 1)
                    } else "scroll" === n && (r.showItem.isScroll = 1, parseInt(r.showItem.scrollTimeDiff, 10) || (r.showItem.scrollTimeDiff = Math.abs(Math.ceil(e.startTime / 1e3 - this.ASPTIME))), "T" === l && (r.showItem.scrollUpNum = parseInt(r.showItem.scrollUpNum, 10) + 1), "B" === l && (r.showItem.scrollDownNum = parseInt(r.showItem.scrollDownNum, 10) + 1));
                    var f = [],
                        d = [],
                        p = [];
                    s.indexOf("p") > 0 && f.push("p_1");
                    for (var g = 0; g < a; g++) f.push("t_" + (g + 1));
                    for (var m = 0; m < c; m++) d.push("w_" + (m + 1));
                    f = f.concat(d);
                    for (var v = 0; v < o; v++) f.push("b_" + (v + 1));
                    var y = s.split(":")[0],
                        w = y.split("_")[0] + "_" + y.split("_")[1];
                    parseFloat(y.split("_")[2]) >= .2 && p.push(w);
                    var b = s.split(":")[1],
                        _ = b.split("_")[0] + "_" + b.split("_")[1];
                    parseFloat(b.split("_")[2]) <= .2 && p.push(_);
                    for (var I = !1, x = 0; x < f.length; x++) {
                        if (f[x] === w && (I = !0), I && -1 === p.indexOf(f[x])) "w" === f[x].split("_")[0] && ("init" === n && (r.showItem.wiseInitIsWatched = 1), r.showItem.wiseIsWatched = 1);
                        f[x] === _ && (I = !1)
                    }
                    return r
                }
            }, {
                key: "addCookieSession",
                value: function (t, e, n) {
                    var i = "",
                        a = "",
                        o = Ti.getValues(JSON.parse(JSON.stringify(t))),
                        r = Ti.ls.getItem(Pi);
                    r && (r = JSON.parse(r));
                    var s = this.SID + "_" + o.join("_") + "_" + this.ASPTIME;
                    if (r && "" !== r || (r = {
                            showItem: [],
                            clickItem: []
                        }), Ti.ls.isls()) {
                        if (n && r.showItem && r.clickItem && !r.showItem.length && !r.clickItem.length) {
                            var c = n.split("#"),
                                l = c[0].split("|")[1],
                                u = c[1].split("|")[1],
                                h = c[0].split("|")[0].split("_"),
                                f = c[1].split("|")[0].split("_"),
                                d = Fi(this.ISBLOCKED);
                            parseInt(h[h.length - 1], 10) === this.ASPTIME ? r.showItem.push(this.SID + "_" + h.slice(0, 18).join("_") + "_" + (this.ASPTIME - h[0])) : r.showItem.push("0_" + h.slice(0, 18).join("_") + "_" + (this.ASPTIME - h[0])), r.clickItem.push(this.SID + "_" + f.slice(0, 2).join("_") + "_" + (this.ASPTIME - f[0]));
                            for (var p = Math.abs(h[h.length - 1] - h[0]), g = Math.abs(f[f.length - 1] - f[0]), m = l; m > 1; m--) r.showItem.push(this.SID + "_" + Ti.getValues(d.showItem).join("_") + "_" + p);
                            for (var v = u; v > 1; v--) r.clickItem.push(this.SID + "_" + Ti.getValues(d.clickItem).join("_") + "_" + g)
                        }
                        if ("show" === e || "scroll" === e) {
                            var y = !(!r.showItem || !r.showItem.length || "scroll" !== e) && function (t, e) {
                                var n = t[t.length - 1].split("_").slice();
                                return e === n[0] && n
                            }(r.showItem, this.SID);
                            if (y) {
                                var w = o.slice(0, 12);
                                s = this.SID + "_" + w.join("_") + "_" + y[y.length - 7] + "_" + y[y.length - 6] + "_" + y[y.length - 5] + "_" + y[y.length - 4] + "_" + y[y.length - 3] + "_" + y[y.length - 2] + "_" + this.ASPTIME
                            }
                            this.deleteSameSid(r.showItem, s, e), r.showItem.length >= this.MAX && r.showItem.pop(), i = Ri(r.showItem, "show") + "_" + this.ASPTIME + "|" + r.showItem.length, a = r.clickItem.length ? Ri(r.clickItem, "click") + "_" + r.clickItem[0].split("_").pop() + "|" + r.clickItem.length : "0_0_" + this.ASPTIME + "|1"
                        }
                        "click" === e && (this.deleteSameSid(r.clickItem, s, "click"), r.clickItem.length >= this.MAX && r.clickItem.pop(), i = r.showItem.length ? Ri(r.showItem, "show") + "_" + r.showItem[0].split("_").pop() + "|" + r.showItem.length : "0_0_0_0_0_0_0_0_0_0_0_0_0_0_0_0_0_0_" + this.ASPTIME + "|1", a = Ri(r.clickItem, "click") + "_" + this.ASPTIME + "|" + r.clickItem.length)
                    } else n && "" !== n ? ("show" !== e && "scroll" !== e || (i = this.mergeCookieValue(n, o, e), a = n.split("#")[1]), "click" === e && (i = n.split("#")[0], a = this.mergeCookieValue(n, o, e))) : ("show" !== e && "scroll" !== e || (i = o.join("_") + "_" + this.ASPTIME + "|1", a = "0_0_" + this.ASPTIME + "|1"), "click" === e && (i = "0_0_0_0_0_0_0_0_0_0_0_0_0_0_0_0_0_0_" + this.ASPTIME + "|1", a = o.join("_") + "_" + this.ASPTIME + "|1"));
                    qi(Oi, i + "#" + a), Ni(r)
                }
            }, {
                key: "init",
                value: function (t) {
                    var e = this,
                        n = ee({}, t),
                        i = n.initItem,
                        a = n.scrollItem,
                        o = n.type;
                    window.bds && window.bds.ready((function () {
                        try {
                            var t = Vi(o, e.ISBLOCKED, e.ASPTIME),
                                n = $(".EC_result"),
                                r = $(".result").not(".ecom-result");
                            setTimeout((function () {
                                var n = $(".result.ecom-result[id=1]");
                                e.adOnEvent("click", t, n);
                                try {
                                    if ("createShadowRoot" in document.body) {
                                        var i = $(".c-container /deep/ .c-container");
                                        e.adOnEvent("click", t, i)
                                    }
                                } catch (t) {}
                                e.ISBLOCKED = e.opts.isAdblocked || e.opts.renderAdvLikeResultFlag ? 1 : 0,
                                    function (t) {
                                        if (t) {
                                            var e = Ti.ls.getItem(Pi);
                                            e && (e = JSON.parse(e));
                                            var n = Mi(Ti.getCookie(Oi));
                                            if (e && e.showItem && e.showItem.length) {
                                                var i = e.showItem[0].split("_");
                                                i[7] = t, e.showItem[0] = i.join("_"), Ni(e)
                                            }
                                            if (n) {
                                                var a = n.split("_");
                                                a[6] = t, qi(Oi, a.join("_"))
                                            }
                                        }
                                    }(e.ISBLOCKED)
                            }), 2300), e.adOnEvent("click", t, n), e.wiseOnEvent("click", t, r), e.ad204Num + e.ad213Num + e.ad217Num > 0 && e.start(t, i, a, o)
                        } catch (t) {}
                    }))
                }
            }]), t
        }(),
        Ui = "";

    function Zi() {
        try {
            var t = he(),
                e = t.getValue(),
                n = function (t) {
                    var n;
                    (n = e, Ui || (Ui = new Hi(n)), Ui).init(t)
                };
            t.on(ei, n), t.on(ni, n)
        } catch (t) {}
    }
    var Wi = function t() {
            Jt(this, t), this.adt = 0, this.adb = 0, this.top = 0, this.wise = 0, this.bottom = 0, this.mid = 0, this.initViewZone = "", this.adsHeight = "", this.availHeight = screen.availHeight, this.availWidth = screen.availWidth, this.winHeight = $(window).height(), this.winWidth = $(window).width(), this.action = "init", this.adsCmatch = ""
        },
        Gi = function t() {
            Jt(this, t), this.isAD = !1, this.top = 0, this.bottom = 0, this.height = 0, this.index = 0, this.isTop = !0, this.isBtm = !1, this.title = "", this.adTitleHeight = "", this.cmatchId = ""
        },
        Xi = function t() {
            Jt(this, t), this.startHeight = 0, this.startTime = 0, this.endHeight = 0, this.endTime = 0, this.scrollTime = 0, this.scrollLen = 0, this.scrollInter = 0, this.scrolldirect = 0, this.stayTime = 0, this.startViewZone = "", this.endViewZone = "", this.action = "scroll"
        };
    t.global = {}, t.PARAMS = {};
    t.init = function (e) {
        t.PARAMS = e, t.global = he(e);
        var n = "." + t.PARAMS.resultClass;
        Ie((function () {
            Zn(n, t.PARAMS.imTimeSign)
        }), !0), Ie((function () {
            xe(), st.init(), $(".ec-vcion").click((function (t) {
                t.preventDefault()
            })), $(".ec-vcion").hover((function (t) {
                t.preventDefault();
                var e = this;
                require(["plugins/bzPopper"], (function (t) {
                    var n = t.preset,
                        i = $(e).attr("data-baodata"),
                        a = {
                            target: e,
                            from: n.FCAD,
                            contentData: i,
                            isLogin: !1,
                            baseZIndex: 101,
                            extra: {}
                        },
                        o = window.bds && window.bds.comm && window.bds.comm.isUserLogin;
                    o && "1" === o && (a.isLogin = !0), a.extra.expStage = n.EXP_STAGE_1, t.showUp(a)
                }))
            })), Vn(), Hn.init()
        }), !0), Ie((function () {
            ke.init(n), ge.init(n), $e(n), Ce(n), ln(n), cn(n, t.PARAMS)
        }), !0), Ie((function () {
            Wn.init()
        }), !0), Ie((function () {
            Xn(n), ri(t.PARAMS), oi(t.PARAMS)
        }), !0), Ie((function () {
            var e, n, i, a, o, r, s, c, l, u, h, f, d, p;
            Zi(), e = t.PARAMS, n = {}, i = new RegExp("^m.*_canvas$"), a = !1, o = [], r = new Wi, s = new Xi, c = !1, l = 0, u = 0, h = 0, f = 0, d = 1, p = {
                baiduId: e.baiduid,
                searchId: e.searchid
            }, n.getImItem = function (t, e, n, i, a, o) {
                e ? n ? r.top++ : i ? r.bottom++ : r.mid++ : r.wise++;
                var s = new Gi,
                    c = $(t);
                s.isAD = e, s.isTop = n, s.isBtm = i, s.isPZ = o, s.top = parseInt(c.offset().top, 10), s.height = parseInt(c.height(), 10), s.bottom = s.top + s.height, s.isAD && (s.cmatchId = c.attr("data-cmatchid") ? c.attr("data-cmatchid") : "", c.find(".ec_title").length > 0 && (s.adTitleHeight = c.find(".ec_title").height())), s.index = a;
                var l = ee({}, p, {
                    action: "click",
                    position: a,
                    type: "wise",
                    tag: "ecom_msa_tmp_4"
                });
                return e ? (l = o ? $.extend(l, {
                    type: "pz"
                }) : $.extend(l, {
                    type: "ad",
                    cmatchId: s.cmatchId
                }), $(t).on("mousedown", (function () {
                    pe(l)
                }))) : $(t).on("mousedown", (function () {
                    pe(l)
                })), s
            }, n.setAdsHeight = function () {
                for (var t = o.length, e = 0; e < t; e++) {
                    var n = o[e];
                    n.isPZ ? r.adsHeight += "_p" : n.isAD ? n.isTop ? r.adsHeight += "_t" : n.isBtm ? r.adsHeight += "_b" : r.adsHeight += "_m" : r.adsHeight += "_w", r.adsHeight += n.index + ":" + n.height
                }
            }, n.setAdsCmatch = function () {
                var t = o.length;
                r.adsCmatch = "";
                for (var e = 0; e < t; e++) {
                    var n = o[e];
                    n.isAD && "" !== n.cmatchId && (n.isAD && n.isTop ? r.adsCmatch += "_t" : n.isAD && n.isBtm ? r.adsCmatch += "_b" : r.adsCmatch += "_m", r.adsCmatch += n.index + ":" + n.height + ":" + n.adTitleHeight + ":" + n.cmatchId)
                }
                return r.adsCmatch
            }, n.computerObj = function (t, e) {
                var n = {};
                for (var i in t)({}).hasOwnProperty.call(t, i) && (n[i] = t[i]);
                for (var a in e)({}).hasOwnProperty.call(e, a) && (n[a] = e[a]);
                return n
            }, n.setSearchItem = function () {
                o = [], r = new Wi, c = !1, l = 0, u = 0, h = 0, f = 0, d = 1;
                for (var t = $("#content_left").children(), e = t.length, i = 0; i < e; i++) {
                    var a = t.get(i);
                    if (!a.id || isNaN(a.id)) {
                        for (var s = $(a).find(".EC_result"), p = 0; p < s.length; p++) n.setLeftArray(s[p]);
                        for (var g = $(a).find("div[id$=_canvas]"), m = 0; m < g.length; m++) n.setLeftArray(g[m])
                    } else n.setLeftArray(a)
                }
                r.top > 0 ? (r.adt = o[0].top, r.adb = o[r.top - 1].bottom) : r.bottom > 0 && (r.adt = o[r.top + r.wise].top, r.adb = o[r.top + r.wise + r.bottom - 1].bottom), n.setAdsHeight(), n.setAdsCmatch()
            }, n.setLeftArray = function (t) {
                $(t).attr("srcid") || parseInt(t.id, 10) < 500 ? (c = !0, u++, o = o.concat(n.getImItem(t, !1, !0, !1, u, !1))) : i.test(t.id) ? o = o.concat(n.getImItem(t, !1, !0, !1, d, !0)) : c ? "227" === $(t).attr("cmatchid") ? (h++, o = o.concat(n.getImItem(t, !0, !1, !0, h, !1))) : (f++, o = o.concat(n.getImItem(t, !0, !1, !1, f, !1))) : (l++, o = o.concat(n.getImItem(t, !0, !0, !1, l, !1)))
            }, n.calViewZone = function (t, e) {
                for (var n = o.length, i = n - 1, a = n - 1, r = 0; r < n; r++)
                    if (t < o[r].top) {
                        i = 0 === r ? 0 : r - 1;
                        break
                    } var s = t - o[i].top,
                    c = ((s = s < 0 ? 0 : s) / o[i].height).toFixed(2);
                c = c > 1 ? "1.00" : c;
                for (var l = (o[i].isAD ? o[i].isTop ? "t" : o[i].isBtm ? "b" : "m" : o[i].isPZ ? "p" : "w") + "_" + o[i].index + "_" + c, u = 0; u < n; u++)
                    if (e < o[u].top) {
                        a = u - 1 < 0 ? 0 : u - 1;
                        break
                    } return c = (c = ((s = (s = e - o[a].top) < 0 ? 0 : s) / o[a].height).toFixed(2)) > 1 ? "1.00" : c, l + ":" + (o[a].isAD ? o[a].isTop ? "t" : o[a].isBtm ? "b" : "m" : o[a].isPZ ? "p" : "w") + "_" + o[a].index + "_" + c
            }, n.moveScroll = function () {
                a || (a = !0, s.startHeight = s.endHeight, s.startTime = (new Date).getTime(), s.stayTime = s.startTime - s.endTime, s.startViewZone = s.endViewZone), clearTimeout(n.scrollId), n.scrollId = setTimeout((function () {
                    s.endHeight = $(window).height() + $(window).scrollTop(), s.endTime = (new Date).getTime(), s.scrollInter += 1, s.scrollTime = s.endTime - s.startTime, s.scrollLen = s.endHeight - s.startHeight, s.scrolldirect = s.scrollLen >= 0 ? "B" : "T", s.endViewZone = n.calViewZone($(window).scrollTop() + 1 * $("#head").height(), s.endHeight), pe(Object.assign({}, p, {
                        tag: "ecom_msa_tmp_4"
                    }, n.computerObj(s, {
                        adsCmatch: n.setAdsCmatch(),
                        top: r.top,
                        wise: r.wise,
                        bottom: r.bottom,
                        mid: r.mid
                    }))), he().emit(ni, {
                        initItem: r,
                        scrollItem: s,
                        type: "scroll"
                    }), a = !1
                }), 300)
            }, n.delayInit = function () {
                s.startTime = (new Date).getTime(), s.endTime = (new Date).getTime();
                var t = $(window).height() + $(window).scrollTop();
                s.endHeight = t, s.startHeight = t, $(window).scrollTop(), r.initViewZone = n.calViewZone($(window).scrollTop() + 1 * $("#head").height(), t), s.startViewZone = r.initViewZone, s.endViewZone = r.initViewZone, pe(Object.assign({}, p, {
                    tag: "ecom_msa_tmp_4"
                }, r)), he().emit(ei, {
                    initItem: r,
                    scrollItem: s,
                    type: "init"
                })
            }, window.bds && window.bds.ready((function () {
                n.setSearchItem(), n.delayInit(), $(window).on("scroll", n.moveScroll)
            })), $(window).on("swap_begin", (function () {
                $(window).unbind("scroll", n.moveScroll)
            }))
        }), !0)
    }
}(this.ecomSearchPcGlobal = this.ecomSearchPcGlobal || {});

(function (variable) {
    window.ecomSearchPcGlobal.init(variable);
})({
    "searchid": "9539d75a0001bf5d",
    "eid": "35474_26350_35322_34873_35532_35490_34584_35435_34967_35240_31660_35105_34440_4869008",
    "bwsid": 0,
    "osid": 0,
    "pageid": "ps_us",
    "baiduid": "2E29F0AC1032406E3EFF39B713EF91DA",
    "ovlid": "",
    "wpt": 0,
    "netType": 0,
    "cuid": "",
    "query": "%E5%A4%B4%E7%96%BC",
    "imTimeSign": 50,
    "asynMode": 0,
    "asynUrl": "",
    "isWiseDropDown": false,
    "asynsid": "",
    "aspTime": 1639739421274,
    "sourceAdNum": {
        "ads_2": 1,
        "ads_213": 1,
        "ads_219": 0,
        "ads_665": 0
    },
    "asynQuery": "",
    "jFieldLinkMap": {
        "": "http://e.baidu.com/?refer=103",
        "7D_NR2Ar5Od66u8utovTyKDDUlam5mqh2oK4TaTovm8AGhFDZwCCqLlTH7Lu8uE_vpvUVMuEi1u_oE3dePhzeIuIE8vgqTUn1r-W9l2Zy7YyVSGWO6T5dLOCxz5OKSG6u9CsOk5dr5LuSE_lLLTEYmhcELe5dOhOx98hzvTuELO-khOxdtnyyZ9BzO-lcEv3UVNxWYwxEvwJN9h9mlUP-hqf": "https://ada.baidu.com/site/qianhu.wejianzhan.com/xyl?imid=d45ab08fad849ea081b31888d50d9d8b&param=zxt&config=XzF9TZKGuaclcMG3IaFq&bd_vid=nH0LPHcdrj03rHD3rHfznjcznjNxnWcdg17xnH0s",
        "DR_NR2Ar5Od66u8utovTyKDDUlam5mqh2oK4TaTovm8AGhFDZwCCqLlTH7Lu8uE_vpvUVMuEi1u_oE3dePhzeIuIE8vgOqaOQxfCTIvX1xu8enMudE84xCknwxEvxoOPSOjIP-_31xEOQWPSOo3m__5j7-OQYwxVsLpJOZCBOx_WRojPak8LU2ql60": "https://ada.baidu.com/site/qianhu.wejianzhan.com/xyl?imid=d45ab08fad849ea081b31888d50d9d8b#bjbtt35-0905424&bd_vid=nH0LPHcdrj03rHD3rHfznjcznjNxnWcdg17xnH0s"
    },
    "upAdNum": 0,
    "middleAdNum": 0,
    "downAdNum": 0,
    "flags": {
        "wiseVideoWebp": true,
        "app_style_update": true,
        "update_11030": true,
        "update_dpa_columns_change": true,
        "search_ad_feedback_show_shield": true,
        "rs_add_cmatch": true,
        "wise_video_downloadsame": true,
        "video_android_prefetch": true,
        "form_update_check_rule": true,
        "wise_video_change_link": true,
        "vertical_video_autoplay": true,
        "optimizeLpKeyborad": true,
        "sixButtonChangeExp6563": true,
        "feedbackDirectRun": true,
        "video_max_deeplink": true,
        "optimizeLpTelKeyboard": true,
        "wise_vdieo_ios_download": true,
        "video_prefetch_to_prerender": true,
        "addComponentClickToUs": true,
        "guessAddCommon": true,
        "downloadStarNewRule": true,
        "rsTextGapUpdate": true,
        "video_max_pop": true,
        "formKeyOptimize": true,
        "video_deeplink": true,
        "fixAppNamePlusSignEncode": true,
        "pushInfoToClient": true,
        "IosAdroidLpTelKeyboard": true,
        "mendian_style_update": true,
        "video_middlepage_download": true,
        "closeIosLowAsynCharge": true,
        "change_result_class_to_place_class": true,
        "disable_ad_render_like": true
    },
    "variable": {},
    "rsContent": [],
    "ecomData204": "",
    "ecomData213": "<div class=\"result c-container new-pmd ecom-result\" id=\"1\" srcid=\"1599\" tpl=\"se_com_default\" data-click=\"{\"rsv_bdr\":\"0\",\"p5\":1}\"><h3 class=\"t\"><a data-click='{\"F\":\"F78717EA\",\"F1\":\"9D73F1E4\",\"F2\":\"4CA6DE6B\",\"F3\":\"54E5243F\",\"T\":\"1613964772\",\"y\":\"EDFEFFF3\"}' href=\"http://www.baidu.com/baidu.php?url=000000j0xnZgmfstWiZlKDWPUPviaGatsBgC7YPjRQbOxawk07TQ-Tfa1jGr_468u7MZZKE157CNqM05jx6ECMu9dkPwaq-zIr77Y3_GABwpS6Y06v5kplyZ7HVrrbVZLyuao7RWD-MDuBipX0i7NbrzxyIdCXsosL7XepLXMIaoffhNmnncppZ_30r7vSVV668eVSTBKXnwGU0yWvyJC4kd2ZHj.DR_NR2Ar5Od66u8utovTyKDDUlam5mqh2oK4TaTovm8AGhFDZwCCqLlTH7Lu8uE_vpvUVMuEi1u_oE3dePhzeIuIE8vgOqaOQxfCTIvX1xu8enMudE84xCknwxEvxoOPSOjIP-_31xEOQWPSOo3m__5j7-OQYwxVsLpJOZCBOx_WRojPak8LU2ql60.U1Yk0ZDq1UxnvsKspynqnfKY5TvL1UHHYQz3dVURoIQzYELAtQgD0A-V5HczPfKM5yq-TZnk0ZNG5yF9pywd0ZKGujYk0APGujY1rj60UgfqnH0kPdtknjD4g1csPH7xrjR1n-t1PW0k0AVG5H00TMfqPjf10AFG5HDdr7tznjwxPH010AdW5HD4nHfzP1D3PjuxnH0krNtznjRkg1n1nj63rHcYn19xn0KkTA-b5H00TyPGujYs0ZFMIA7M5H00mycqn7ts0ANzu1Ys0ZKs5H00UMus5H08nj0snj0snj00Ugws5H00uAwETjYs0ZFJ5H00uANv5gKW0AuY5H00TA6qn0KET1Ys0AFL5HDs0A4Y5H00TLCq0A71gv-bm1dsTzdWUfKGuAnqiDFK0ZKCIZbq0Zw9ThI-IjY1nNt1nHNxnWR0IZN15HRkPWRznWf1PH0LPHnsrHDdnHT0ThNkIjYkPWn4P1n4PjcknWTY0ZPGujY4PHn3ujTdmH0snj7BuWNb0AP1UHdKfYNaPWf4wWcLPjDswHcL0A7W5HD0TA3qn0KkUgfqn0KkUgnqn0KlIjYk0AdWgvuzUvYqn7tsg1Kxn7ts0Aw9UMNBuNqsUA78pyw15HKxn7tsg1Kxn0Ksmgwxuhk9u1Ys0AwWpyfqnH0Ln1TYnH6zP6K-IA-b5HmY0A71TAPW5H00IgKGUhPW5H00Tydh5H00uhPdIjYs0A-1mvsqn0K9uAu_myTqnfK_uhnqn0KbmvPb5fKYTh7buHYs0AFbpyfqnbRzrRmsfRnknjnzPj0vwHP7wbm1rRcLnHP7wWbkwDD0mMfqn0KEmgwL5H00ULfqn0KETMKY5H0WnanWnansc10Wna3snj0snj0Wnansc10WQinsQW0snj0snankQW0snjDsn0K3TLwd5HnsrH6znWfs0Z7xIWYsQWmsg108njKxna3sn7tsQW0zg108nj9xna34P7tsQW03g100mMPxTZFEuA-b5H00ThqGuhk9u1Ys0APv5fKGTdqWTADqn0KWTjYs0AN1IjYs0APzm1Ykrjckn0\" data-landurl=\"https%3A%2F%2Fada.baidu.com%2Fsite%2Fqianhu.wejianzhan.com%2Fxyl%3Fimid%3Dd45ab08fad849ea081b31888d50d9d8b%23bjbtt35-0905424%26bd_vid%3DnH0LPHcdrj03rHD3rHfznjcznjNxnWcdg17xnH0s\" target=\"_blank\"><font color=#CC0000>头痛</font>有几种引起的?<font color=#CC0000>头痛</font>的原因有哪些?</a></h3><div class=\"c-abstract\"><font color=#CC0000>头痛</font>有几种原因引起的,怎样才能治疗<font color=#CC0000>头痛</font>,到晚上就头痛,脸瘫后遗症,神经瘫,各种瘫疼痛,受损瘫,治疗各种疾病,服务安心之选,各种后遗神经疼痛,神经受损</div><div class=\"f13 c-gap-top-xsmall se_st_footer\"><a target=\"_blank\" href=\"http://www.baidu.com/baidu.php?url=000000j0xnZgmfstWiZlKDWPUPviaGatsBgC7YPjRQbOxawk07TQ-Tfa1jGr_468u7MZZKE157CNqM05jx6ECMu9dkPwaq-zIr77Y3_GABwpS6Y06v5kplyZ7HVrrbVZLyuao7RWD-MDuBipX0i7NbrzxyIdCXsosL7XepLXMIaoffhNmnncppZ_30r7vSVV668eVSTBKXnwGU0yWvyJC4kd2ZHj.DR_NR2Ar5Od66u8utovTyKDDUlam5mqh2oK4TaTovm8AGhFDZwCCqLlTH7Lu8uE_vpvUVMuEi1u_oE3dePhzeIuIE8vgOqaOQxfCTIvX1xu8enMudE84xCknwxEvxoOPSOjIP-_31xEOQWPSOo3m__5j7-OQYwxVsLpJOZCBOx_WRojPak8LU2ql60.U1Yk0ZDq1UxnvsKspynqnfKY5TvL1UHHYQz3dVURoIQzYELAtQgD0A-V5HczPfKM5yq-TZnk0ZNG5yF9pywd0ZKGujYk0APGujY1rj60UgfqnH0kPdtknjD4g1csPH7xrjR1n-t1PW0k0AVG5H00TMfqPjf10AFG5HDdr7tznjwxPH010AdW5HD4nHfzP1D3PjuxnH0krNtznjRkg1n1nj63rHcYn19xn0KkTA-b5H00TyPGujYs0ZFMIA7M5H00mycqn7ts0ANzu1Ys0ZKs5H00UMus5H08nj0snj0snj00Ugws5H00uAwETjYs0ZFJ5H00uANv5gKW0AuY5H00TA6qn0KET1Ys0AFL5HDs0A4Y5H00TLCq0A71gv-bm1dsTzdWUfKGuAnqiDFK0ZKCIZbq0Zw9ThI-IjY1nNt1nHNxnWR0IZN15HRkPWRznWf1PH0LPHnsrHDdnHT0ThNkIjYkPWn4P1n4PjcknWTY0ZPGujY4PHn3ujTdmH0snj7BuWNb0AP1UHdKfYNaPWf4wWcLPjDswHcL0A7W5HD0TA3qn0KkUgfqn0KkUgnqn0KlIjYk0AdWgvuzUvYqn7tsg1Kxn7ts0Aw9UMNBuNqsUA78pyw15HKxn7tsg1Kxn0Ksmgwxuhk9u1Ys0AwWpyfqnH0Ln1TYnH6zP6K-IA-b5HmY0A71TAPW5H00IgKGUhPW5H00Tydh5H00uhPdIjYs0A-1mvsqn0K9uAu_myTqnfK_uhnqn0KbmvPb5fKYTh7buHYs0AFbpyfqnbRzrRmsfRnknjnzPj0vwHP7wbm1rRcLnHP7wWbkwDD0mMfqn0KEmgwL5H00ULfqn0KETMKY5H0WnanWnansc10Wna3snj0snj0Wnansc10WQinsQW0snj0snankQW0snjDsn0K3TLwd5HnsrH6znWfs0Z7xIWYsQWmsg108njKxna3sn7tsQW0zg108nj9xna34P7tsQW03g100mMPxTZFEuA-b5H00ThqGuhk9u1Ys0APv5fKGTdqWTADqn0KWTjYs0AN1IjYs0APzm1Ykrjckn0\" data-landurl=\"https%3A%2F%2Fada.baidu.com%2Fsite%2Fqianhu.wejianzhan.com%2Fxyl%3Fimid%3Dd45ab08fad849ea081b31888d50d9d8b%23bjbtt35-0905424%26bd_vid%3DnH0LPHcdrj03rHD3rHfznjcznjNxnWcdg17xnH0s\" class=\"c-showurl c-color-gray\" style=\"text-decoration:none;position:relative;\">qianhu.wejianzhan.com</a><div class=\"c-tools c-gap-left\" id=\"tools_9566877086837443694_1\" data-tools='{\"title\":\"<font color=#CC0000>头痛</font>有几种引起的?<font color=#CC0000>头痛</font>的原因有哪些?\",\"url\":\"http://www.baidu.com/baidu.php?url=000000j0xnZgmfstWiZlKDWPUPviaGatsBgC7YPjRQbOxawk07TQ-Tfa1jGr_468u7MZZKE157CNqM05jx6ECMu9dkPwaq-zIr77Y3_GABwpS6Y06v5kplyZ7HVrrbVZLyuao7RWD-MDuBipX0i7NbrzxyIdCXsosL7XepLXMIaoffhNmnncppZ_30r7vSVV668eVSTBKXnwGU0yWvyJC4kd2ZHj.DR_NR2Ar5Od66u8utovTyKDDUlam5mqh2oK4TaTovm8AGhFDZwCCqLlTH7Lu8uE_vpvUVMuEi1u_oE3dePhzeIuIE8vgOqaOQxfCTIvX1xu8enMudE84xCknwxEvxoOPSOjIP-_31xEOQWPSOo3m__5j7-OQYwxVsLpJOZCBOx_WRojPak8LU2ql60.U1Yk0ZDq1UxnvsKspynqnfKY5TvL1UHHYQz3dVURoIQzYELAtQgD0A-V5HczPfKM5yq-TZnk0ZNG5yF9pywd0ZKGujYk0APGujY1rj60UgfqnH0kPdtknjD4g1csPH7xrjR1n-t1PW0k0AVG5H00TMfqPjf10AFG5HDdr7tznjwxPH010AdW5HD4nHfzP1D3PjuxnH0krNtznjRkg1n1nj63rHcYn19xn0KkTA-b5H00TyPGujYs0ZFMIA7M5H00mycqn7ts0ANzu1Ys0ZKs5H00UMus5H08nj0snj0snj00Ugws5H00uAwETjYs0ZFJ5H00uANv5gKW0AuY5H00TA6qn0KET1Ys0AFL5HDs0A4Y5H00TLCq0A71gv-bm1dsTzdWUfKGuAnqiDFK0ZKCIZbq0Zw9ThI-IjY1nNt1nHNxnWR0IZN15HRkPWRznWf1PH0LPHnsrHDdnHT0ThNkIjYkPWn4P1n4PjcknWTY0ZPGujY4PHn3ujTdmH0snj7BuWNb0AP1UHdKfYNaPWf4wWcLPjDswHcL0A7W5HD0TA3qn0KkUgfqn0KkUgnqn0KlIjYk0AdWgvuzUvYqn7tsg1Kxn7ts0Aw9UMNBuNqsUA78pyw15HKxn7tsg1Kxn0Ksmgwxuhk9u1Ys0AwWpyfqnH0Ln1TYnH6zP6K-IA-b5HmY0A71TAPW5H00IgKGUhPW5H00Tydh5H00uhPdIjYs0A-1mvsqn0K9uAu_myTqnfK_uhnqn0KbmvPb5fKYTh7buHYs0AFbpyfqnbRzrRmsfRnknjnzPj0vwHP7wbm1rRcLnHP7wWbkwDD0mMfqn0KEmgwL5H00ULfqn0KETMKY5H0WnanWnansc10Wna3snj0snj0Wnansc10WQinsQW0snj0snankQW0snjDsn0K3TLwd5HnsrH6znWfs0Z7xIWYsQWmsg108njKxna3sn7tsQW0zg108nj9xna34P7tsQW03g100mMPxTZFEuA-b5H00ThqGuhk9u1Ys0APv5fKGTdqWTADqn0KWTjYs0AN1IjYs0APzm1Ykrjckn0\"}'><i class=\"c-icon f13\"></i></div><span class=\"c-icons-outer\"><span class=\"c-icons-inner\"></span></span><a data-click='{\"rsv_snapshot\":\"1\"}' href=\"http://www.baidu.com/baidu.php?url=000000j0xnZgmfstWiZlKDWPUPviaGatsBgC7YPjRQbOxawk07TQ-Tfa1jGr_468u7MZZKE157CNqM05jx6ECMu9dkPwaq-zIr77Y3_GABwpS6Y06v5kplyZ7HVrrbVZLyuao7RWD-MDuBipX0i7NbrzxyIdCXsosL7XepLXMIaoffhNmnncppZ_30r7vSVV668eVSTBKXnwGU0yWvyJC4kd2ZHj.DR_NR2Ar5Od66u8utovTyKDDUlam5mqh2oK4TaTovm8AGhFDZwCCqLlTH7Lu8uE_vpvUVMuEi1u_oE3dePhzeIuIE8vgOqaOQxfCTIvX1xu8enMudE84xCknwxEvxoOPSOjIP-_31xEOQWPSOo3m__5j7-OQYwxVsLpJOZCBOx_WRojPak8LU2ql60.U1Yk0ZDq1UxnvsKspynqnfKY5TvL1UHHYQz3dVURoIQzYELAtQgD0A-V5HczPfKM5yq-TZnk0ZNG5yF9pywd0ZKGujYk0APGujY1rj60UgfqnH0kPdtknjD4g1csPH7xrjR1n-t1PW0k0AVG5H00TMfqPjf10AFG5HDdr7tznjwxPH010AdW5HD4nHfzP1D3PjuxnH0krNtznjRkg1n1nj63rHcYn19xn0KkTA-b5H00TyPGujYs0ZFMIA7M5H00mycqn7ts0ANzu1Ys0ZKs5H00UMus5H08nj0snj0snj00Ugws5H00uAwETjYs0ZFJ5H00uANv5gKW0AuY5H00TA6qn0KET1Ys0AFL5HDs0A4Y5H00TLCq0A71gv-bm1dsTzdWUfKGuAnqiDFK0ZKCIZbq0Zw9ThI-IjY1nNt1nHNxnWR0IZN15HRkPWRznWf1PH0LPHnsrHDdnHT0ThNkIjYkPWn4P1n4PjcknWTY0ZPGujY4PHn3ujTdmH0snj7BuWNb0AP1UHdKfYNaPWf4wWcLPjDswHcL0A7W5HD0TA3qn0KkUgfqn0KkUgnqn0KlIjYk0AdWgvuzUvYqn7tsg1Kxn7ts0Aw9UMNBuNqsUA78pyw15HKxn7tsg1Kxn0Ksmgwxuhk9u1Ys0AwWpyfqnH0Ln1TYnH6zP6K-IA-b5HmY0A71TAPW5H00IgKGUhPW5H00Tydh5H00uhPdIjYs0A-1mvsqn0K9uAu_myTqnfK_uhnqn0KbmvPb5fKYTh7buHYs0AFbpyfqnbRzrRmsfRnknjnzPj0vwHP7wbm1rRcLnHP7wWbkwDD0mMfqn0KEmgwL5H00ULfqn0KETMKY5H0WnanWnansc10Wna3snj0snj0Wnansc10WQinsQW0snj0snankQW0snjDsn0K3TLwd5HnsrH6znWfs0Z7xIWYsQWmsg108njKxna3sn7tsQW0zg108nj9xna34P7tsQW03g100mMPxTZFEuA-b5H00ThqGuhk9u1Ys0APv5fKGTdqWTADqn0KWTjYs0AN1IjYs0APzm1Ykrjckn0\" data-landurl=\"https%3A%2F%2Fada.baidu.com%2Fsite%2Fqianhu.wejianzhan.com%2Fxyl%3Fimid%3Dd45ab08fad849ea081b31888d50d9d8b%23bjbtt35-0905424%26bd_vid%3DnH0LPHcdrj03rHD3rHfznjcznjNxnWcdg17xnH0s\" target=\"_blank\" class=\"m c-gap-left\" style=\"color: #9eb0f8;\">广告</a></div></div>",
    "ecomData217": "",
    "ad204Num": 0,
    "ad213Num": 1,
    "ad217Num": 0,
    "isHasImlp": true,
    "adsInfo": {
        "9538d75a0001bf5d_0_0": {
            "ideaId": 0,
            "docId": "",
            "mts": []
        },
        "9538d75a0001bf5d_225_0": {
            "ideaId": 50133602786,
            "docId": "",
            "mts": [1017, 1019, 2051, 8532, 3601]
        }
    },
    "bdCid": 388,
    "bdPid": 1,
    "queryWordEnc": "%CD%B7%CC%DB",
    "wiseSt": "",
    "requestIpV4": 1448397569,
    "fnizebrab": "",
    "nsVerticalKdomainList": [],
    "is_rm_asyn": false,
    "mod": "",
    "app_verison": "",
    "os_version": "",
    "passportId": 0,
    "resultClass": "fc-9538d75a0001bf5d"
});