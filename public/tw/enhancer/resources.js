var TAFFY, exports, T;
(function() {
    var f, q, p, t, d, b, n, m, r, e, c, u, w, v, h, g, j, o, i, l, a, s, k;
    if (!TAFFY) {
        d = "2.7";
        b = 1;
        n = "000000";
        m = 1000;
        r = {};
        e = function(x) {
            if (TAFFY.isArray(x) || TAFFY.isObject(x)) {
                return x
            } else {
                return JSON.parse(x)
            }
        }
        ;
        i = function(y, x) {
            return l(y, function(z) {
                return x.indexOf(z) >= 0
            })
        }
        ;
        l = function(A, z, y) {
            var x = [];
            if (A == null) {
                return x
            }
            if (Array.prototype.filter && A.filter === Array.prototype.filter) {
                return A.filter(z, y)
            }
            c(A, function(D, B, C) {
                if (z.call(y, D, B, C)) {
                    x[x.length] = D
                }
            });
            return x
        }
        ;
        k = function(x) {
            return Object.prototype.toString.call(x) === "[object RegExp]"
        }
        ;
        s = function(z) {
            var x = T.isArray(z) ? [] : T.isObject(z) ? {} : null;
            if (z === null) {
                return z
            }
            for (var y in z) {
                x[y] = k(z[y]) ? z[y].toString() : T.isArray(z[y]) || T.isObject(z[y]) ? s(z[y]) : z[y]
            }
            return x
        }
        ;
        a = function(y) {
            var x = JSON.stringify(y);
            if (x.match(/regex/) === null) {
                return x
            }
            return JSON.stringify(s(y))
        }
        ;
        c = function(B, A, C) {
            var E, D, z, F;
            if (B && ((T.isArray(B) && B.length === 1) || (!T.isArray(B)))) {
                A((T.isArray(B)) ? B[0] : B, 0)
            } else {
                for (E,
                         D,
                         z = 0,
                         B = (T.isArray(B)) ? B : [B],
                         F = B.length; z < F; z++) {
                    D = B[z];
                    if (!T.isUndefined(D) || (C || false)) {
                        E = A(D, z);
                        if (E === T.EXIT) {
                            break
                        }
                    }
                }
            }
        }
        ;
        u = function(C, z) {
            var y = 0, B, A;
            for (A in C) {
                if (C.hasOwnProperty(A)) {
                    B = z(C[A], A, y++);
                    if (B === T.EXIT) {
                        break
                    }
                }
            }
        }
        ;
        r.extend = function(x, y) {
            r[x] = function() {
                return y.apply(this, arguments)
            }
        }
        ;
        w = function(y) {
            var x;
            if (T.isString(y) && /[t][0-9]*[r][0-9]*/i.test(y)) {
                return true
            }
            if (T.isObject(y) && y.___id && y.___s) {
                return true
            }
            if (T.isArray(y)) {
                x = true;
                c(y, function(z) {
                    if (!w(z)) {
                        x = false;
                        return TAFFY.EXIT
                    }
                });
                return x
            }
            return false
        }
        ;
        h = function(z, y) {
            var x = true;
            c(y, function(A) {
                switch (T.typeOf(A)) {
                    case "function":
                        if (!A.apply(z)) {
                            x = false;
                            return TAFFY.EXIT
                        }
                        break;
                    case "array":
                        x = (A.length === 1) ? (h(z, A[0])) : (A.length === 2) ? (h(z, A[0]) || h(z, A[1])) : (A.length === 3) ? (h(z, A[0]) || h(z, A[1]) || h(z, A[2])) : (A.length === 4) ? (h(z, A[0]) || h(z, A[1]) || h(z, A[2]) || h(z, A[3])) : false;
                        if (A.length > 4) {
                            c(A, function(B) {
                                if (h(z, B)) {
                                    x = true
                                }
                            })
                        }
                        break
                }
            });
            return x
        }
        ;
        v = function(y) {
            var x = [];
            if (T.isString(y) && /[t][0-9]*[r][0-9]*/i.test(y)) {
                y = {
                    ___id: y
                }
            }
            if (T.isArray(y)) {
                c(y, function(z) {
                    x.push(v(z))
                });
                y = function() {
                    var A = this
                        , z = false;
                    c(x, function(B) {
                        if (h(A, B)) {
                            z = true
                        }
                    });
                    return z
                }
                ;
                return y
            }
            if (T.isObject(y)) {
                if (T.isObject(y) && y.___id && y.___s) {
                    y = {
                        ___id: y.___id
                    }
                }
                u(y, function(z, A) {
                    if (!T.isObject(z)) {
                        z = {
                            is: z
                        }
                    }
                    u(z, function(B, C) {
                        var E = [], D;
                        D = (C === "hasAll") ? function(F, G) {
                                G(F)
                            }
                            : c;
                        D(B, function(G) {
                            var F = true, H = false, I;
                            I = function() {
                                var N = this[A], M = "==", O = "!=", Q = "===", R = "<", L = ">", S = "<=", P = ">=", K = "!==", J;
                                if (typeof N === "undefined") {
                                    return false
                                }
                                if ((C.indexOf("!") === 0) && C !== O && C !== K) {
                                    F = false;
                                    C = C.substring(1, C.length)
                                }
                                J = ((C === "regex") ? (G.test(N)) : (C === "lt" || C === R) ? (N < G) : (C === "gt" || C === L) ? (N > G) : (C === "lte" || C === S) ? (N <= G) : (C === "gte" || C === P) ? (N >= G) : (C === "left") ? (N.indexOf(G) === 0) : (C === "leftnocase") ? (N.toLowerCase().indexOf(G.toLowerCase()) === 0) : (C === "right") ? (N.substring((N.length - G.length)) === G) : (C === "rightnocase") ? (N.toLowerCase().substring((N.length - G.length)) === G.toLowerCase()) : (C === "like") ? (N.indexOf(G) >= 0) : (C === "likenocase") ? (N.toLowerCase().indexOf(G.toLowerCase()) >= 0) : (C === Q || C === "is") ? (N === G) : (C === M) ? (N == G) : (C === K) ? (N !== G) : (C === O) ? (N != G) : (C === "isnocase") ? (N.toLowerCase ? N.toLowerCase() === G.toLowerCase() : N === G) : (C === "has") ? (T.has(N, G)) : (C === "hasall") ? (T.hasAll(N, G)) : (C === "contains") ? (TAFFY.isArray(N) && N.indexOf(G) > -1) : (C.indexOf("is") === -1 && !TAFFY.isNull(N) && !TAFFY.isUndefined(N) && !TAFFY.isObject(G) && !TAFFY.isArray(G)) ? (G === N[C]) : (T[C] && T.isFunction(T[C]) && C.indexOf("is") === 0) ? T[C](N) === G : (T[C] && T.isFunction(T[C])) ? T[C](N, G) : (false));
                                J = (J && !F) ? false : (!J && !F) ? true : J;
                                return J
                            }
                            ;
                            E.push(I)
                        });
                        if (E.length === 1) {
                            x.push(E[0])
                        } else {
                            x.push(function() {
                                var G = this
                                    , F = false;
                                c(E, function(H) {
                                    if (H.apply(G)) {
                                        F = true
                                    }
                                });
                                return F
                            })
                        }
                    })
                });
                y = function() {
                    var A = this
                        , z = true;
                    z = (x.length === 1 && !x[0].apply(A)) ? false : (x.length === 2 && (!x[0].apply(A) || !x[1].apply(A))) ? false : (x.length === 3 && (!x[0].apply(A) || !x[1].apply(A) || !x[2].apply(A))) ? false : (x.length === 4 && (!x[0].apply(A) || !x[1].apply(A) || !x[2].apply(A) || !x[3].apply(A))) ? false : true;
                    if (x.length > 4) {
                        c(x, function(B) {
                            if (!h(A, B)) {
                                z = false
                            }
                        })
                    }
                    return z
                }
                ;
                return y
            }
            if (T.isFunction(y)) {
                return y
            }
        }
        ;
        j = function(x, y) {
            var z = function(B, A) {
                var C = 0;
                T.each(y, function(F) {
                    var H, E, D, I, G;
                    H = F.split(" ");
                    E = H[0];
                    D = (H.length === 1) ? "logical" : H[1];
                    if (D === "logical") {
                        I = g(B[E]);
                        G = g(A[E]);
                        T.each((I.length <= G.length) ? I : G, function(J, K) {
                            if (I[K] < G[K]) {
                                C = -1;
                                return TAFFY.EXIT
                            } else {
                                if (I[K] > G[K]) {
                                    C = 1;
                                    return TAFFY.EXIT
                                }
                            }
                        })
                    } else {
                        if (D === "logicaldesc") {
                            I = g(B[E]);
                            G = g(A[E]);
                            T.each((I.length <= G.length) ? I : G, function(J, K) {
                                if (I[K] > G[K]) {
                                    C = -1;
                                    return TAFFY.EXIT
                                } else {
                                    if (I[K] < G[K]) {
                                        C = 1;
                                        return TAFFY.EXIT
                                    }
                                }
                            })
                        } else {
                            if (D === "asec" && B[E] < A[E]) {
                                C = -1;
                                return T.EXIT
                            } else {
                                if (D === "asec" && B[E] > A[E]) {
                                    C = 1;
                                    return T.EXIT
                                } else {
                                    if (D === "desc" && B[E] > A[E]) {
                                        C = -1;
                                        return T.EXIT
                                    } else {
                                        if (D === "desc" && B[E] < A[E]) {
                                            C = 1;
                                            return T.EXIT
                                        }
                                    }
                                }
                            }
                        }
                    }
                    if (C === 0 && D === "logical" && I.length < G.length) {
                        C = -1
                    } else {
                        if (C === 0 && D === "logical" && I.length > G.length) {
                            C = 1
                        } else {
                            if (C === 0 && D === "logicaldesc" && I.length > G.length) {
                                C = -1
                            } else {
                                if (C === 0 && D === "logicaldesc" && I.length < G.length) {
                                    C = 1
                                }
                            }
                        }
                    }
                    if (C !== 0) {
                        return T.EXIT
                    }
                });
                return C
            };
            return (x && x.push) ? x.sort(z) : x
        }
        ;
        (function() {
            var x = {}
                , y = 0;
            g = function(z) {
                if (y > m) {
                    x = {};
                    y = 0
                }
                return x["_" + z] || (function() {
                    var D = String(z), C = [], G = "_", B = "", A, E, F;
                    for (A = 0,
                             E = D.length; A < E; A++) {
                        F = D.charCodeAt(A);
                        if ((F >= 48 && F <= 57) || F === 46) {
                            if (B !== "n") {
                                B = "n";
                                C.push(G.toLowerCase());
                                G = ""
                            }
                            G = G + D.charAt(A)
                        } else {
                            if (B !== "s") {
                                B = "s";
                                C.push(parseFloat(G));
                                G = ""
                            }
                            G = G + D.charAt(A)
                        }
                    }
                    C.push((B === "n") ? parseFloat(G) : G.toLowerCase());
                    C.shift();
                    x["_" + z] = C;
                    y++;
                    return C
                }())
            }
        }());
        o = function() {
            this.context({
                results: this.getDBI().query(this.context())
            })
        }
        ;
        r.extend("filter", function() {
            var y = TAFFY.mergeObj(this.context(), {
                run: null
            })
                , x = [];
            c(y.q, function(z) {
                x.push(z)
            });
            y.q = x;
            c(arguments, function(z) {
                y.q.push(v(z));
                y.filterRaw.push(z)
            });
            return this.getroot(y)
        });
        r.extend("order", function(z) {
            z = z.split(",");
            var y = [], A;
            c(z, function(x) {
                y.push(x.replace(/^\s*/, "").replace(/\s*$/, ""))
            });
            A = TAFFY.mergeObj(this.context(), {
                sort: null
            });
            A.order = y;
            return this.getroot(A)
        });
        r.extend("limit", function(z) {
            var y = TAFFY.mergeObj(this.context(), {}), x;
            y.limit = z;
            if (y.run && y.sort) {
                x = [];
                c(y.results, function(B, A) {
                    if ((A + 1) > z) {
                        return TAFFY.EXIT
                    }
                    x.push(B)
                });
                y.results = x
            }
            return this.getroot(y)
        });
        r.extend("start", function(z) {
            var y = TAFFY.mergeObj(this.context(), {}), x;
            y.start = z;
            if (y.run && y.sort && !y.limit) {
                x = [];
                c(y.results, function(B, A) {
                    if ((A + 1) > z) {
                        x.push(B)
                    }
                });
                y.results = x
            } else {
                y = TAFFY.mergeObj(this.context(), {
                    run: null,
                    start: z
                })
            }
            return this.getroot(y)
        });
        r.extend("update", function(A, z, x) {
            var B = true, D = {}, y = arguments, C;
            if (TAFFY.isString(A) && (arguments.length === 2 || arguments.length === 3)) {
                D[A] = z;
                if (arguments.length === 3) {
                    B = x
                }
            } else {
                D = A;
                if (y.length === 2) {
                    B = z
                }
            }
            C = this;
            o.call(this);
            c(this.context().results, function(E) {
                var F = D;
                if (TAFFY.isFunction(F)) {
                    F = F.apply(TAFFY.mergeObj(E, {}))
                } else {
                    if (T.isFunction(F)) {
                        F = F(TAFFY.mergeObj(E, {}))
                    }
                }
                if (TAFFY.isObject(F)) {
                    C.getDBI().update(E.___id, F, B)
                }
            });
            if (this.context().results.length) {
                this.context({
                    run: null
                })
            }
            return this
        });
        r.extend("remove", function(x) {
            var y = this
                , z = 0;
            o.call(this);
            c(this.context().results, function(A) {
                y.getDBI().remove(A.___id);
                z++
            });
            if (this.context().results.length) {
                this.context({
                    run: null
                });
                y.getDBI().removeCommit(x)
            }
            return z
        });
        r.extend("count", function() {
            o.call(this);
            return this.context().results.length
        });
        r.extend("callback", function(z, x) {
            if (z) {
                var y = this;
                setTimeout(function() {
                    o.call(y);
                    z.call(y.getroot(y.context()))
                }, x || 0)
            }
            return null
        });
        r.extend("get", function() {
            o.call(this);
            return this.context().results
        });
        r.extend("stringify", function() {
            return JSON.stringify(this.get())
        });
        r.extend("first", function() {
            o.call(this);
            return this.context().results[0] || false
        });
        r.extend("last", function() {
            o.call(this);
            return this.context().results[this.context().results.length - 1] || false
        });
        r.extend("sum", function() {
            var y = 0
                , x = this;
            o.call(x);
            c(arguments, function(z) {
                c(x.context().results, function(A) {
                    y = y + (A[z] || 0)
                })
            });
            return y
        });
        r.extend("min", function(y) {
            var x = null;
            o.call(this);
            c(this.context().results, function(z) {
                if (x === null || z[y] < x) {
                    x = z[y]
                }
            });
            return x
        });
        (function() {
            var x = (function() {
                var A, y, z;
                A = function(E, G, D) {
                    var C, F, H, B;
                    if (D.length === 2) {
                        C = E[D[0]];
                        H = "===";
                        F = G[D[1]]
                    } else {
                        C = E[D[0]];
                        H = D[1];
                        F = G[D[2]]
                    }
                    switch (H) {
                        case "===":
                            return C === F;
                        case "!==":
                            return C !== F;
                        case "<":
                            return C < F;
                        case ">":
                            return C > F;
                        case "<=":
                            return C <= F;
                        case ">=":
                            return C >= F;
                        case "==":
                            return C == F;
                        case "!=":
                            return C != F;
                        default:
                            throw String(H) + " is not supported"
                    }
                }
                ;
                y = function(C, F) {
                    var B = {}, D, E;
                    for (D in C) {
                        if (C.hasOwnProperty(D)) {
                            B[D] = C[D]
                        }
                    }
                    for (D in F) {
                        if (F.hasOwnProperty(D) && D !== "___id" && D !== "___s") {
                            E = !TAFFY.isUndefined(B[D]) ? "right_" : "";
                            B[E + String(D)] = F[D]
                        }
                    }
                    return B
                }
                ;
                z = function(F) {
                    var B, D, C = arguments, E = C.length, G = [];
                    if (typeof F.filter !== "function") {
                        if (F.TAFFY) {
                            B = F()
                        } else {
                            throw "TAFFY DB or result not supplied"
                        }
                    } else {
                        B = F
                    }
                    this.context({
                        results: this.getDBI().query(this.context())
                    });
                    TAFFY.each(this.context().results, function(H) {
                        B.each(function(K) {
                            var I, J = true;
                            CONDITION: for (D = 1; D < E; D++) {
                                I = C[D];
                                if (typeof I === "function") {
                                    J = I(H, K)
                                } else {
                                    if (typeof I === "object" && I.length) {
                                        J = A(H, K, I)
                                    } else {
                                        J = false
                                    }
                                }
                                if (!J) {
                                    break CONDITION
                                }
                            }
                            if (J) {
                                G.push(y(H, K))
                            }
                        })
                    });
                    return TAFFY(G)()
                }
                ;
                return z
            }());
            r.extend("join", x)
        }());
        r.extend("max", function(y) {
            var x = null;
            o.call(this);
            c(this.context().results, function(z) {
                if (x === null || z[y] > x) {
                    x = z[y]
                }
            });
            return x
        });
        r.extend("select", function() {
            var y = []
                , x = arguments;
            o.call(this);
            if (arguments.length === 1) {
                c(this.context().results, function(z) {
                    y.push(z[x[0]])
                })
            } else {
                c(this.context().results, function(z) {
                    var A = [];
                    c(x, function(B) {
                        A.push(z[B])
                    });
                    y.push(A)
                })
            }
            return y
        });
        r.extend("distinct", function() {
            var y = []
                , x = arguments;
            o.call(this);
            if (arguments.length === 1) {
                c(this.context().results, function(A) {
                    var z = A[x[0]]
                        , B = false;
                    c(y, function(C) {
                        if (z === C) {
                            B = true;
                            return TAFFY.EXIT
                        }
                    });
                    if (!B) {
                        y.push(z)
                    }
                })
            } else {
                c(this.context().results, function(z) {
                    var B = []
                        , A = false;
                    c(x, function(C) {
                        B.push(z[C])
                    });
                    c(y, function(D) {
                        var C = true;
                        c(x, function(F, E) {
                            if (B[E] !== D[E]) {
                                C = false;
                                return TAFFY.EXIT
                            }
                        });
                        if (C) {
                            A = true;
                            return TAFFY.EXIT
                        }
                    });
                    if (!A) {
                        y.push(B)
                    }
                })
            }
            return y
        });
        r.extend("supplant", function(y, x) {
            var z = [];
            o.call(this);
            c(this.context().results, function(A) {
                z.push(y.replace(/\{([^\{\}]*)\}/g, function(C, B) {
                    var D = A[B];
                    return typeof D === "string" || typeof D === "number" ? D : C
                }))
            });
            return (!x) ? z.join("") : z
        });
        r.extend("each", function(x) {
            o.call(this);
            c(this.context().results, x);
            return this
        });
        r.extend("map", function(x) {
            var y = [];
            o.call(this);
            c(this.context().results, function(z) {
                y.push(x(z))
            });
            return y
        });
        T = function(F) {
            var C = [], G = {}, D = 1, z = {
                template: false,
                onInsert: false,
                onUpdate: false,
                onRemove: false,
                onDBChange: false,
                storageName: false,
                forcePropertyCase: null,
                cacheSize: 100,
                name: ""
            }, B = new Date(), A = 0, y = 0, I = {}, E, x, H;
            x = function(L) {
                var K = []
                    , J = false;
                if (L.length === 0) {
                    return C
                }
                c(L, function(M) {
                    if (T.isString(M) && /[t][0-9]*[r][0-9]*/i.test(M) && C[G[M]]) {
                        K.push(C[G[M]]);
                        J = true
                    }
                    if (T.isObject(M) && M.___id && M.___s && C[G[M.___id]]) {
                        K.push(C[G[M.___id]]);
                        J = true
                    }
                    if (T.isArray(M)) {
                        c(M, function(N) {
                            c(x(N), function(O) {
                                K.push(O)
                            })
                        })
                    }
                });
                if (J && K.length > 1) {
                    K = []
                }
                return K
            }
            ;
            E = {
                dm: function(J) {
                    if (J) {
                        B = J;
                        I = {};
                        A = 0;
                        y = 0
                    }
                    if (z.onDBChange) {
                        setTimeout(function() {
                            z.onDBChange.call(C)
                        }, 0)
                    }
                    if (z.storageName) {
                        setTimeout(function() {
                            localStorage.setItem("taffy_" + z.storageName, JSON.stringify(C))
                        })
                    }
                    return B
                },
                insert: function(M, N) {
                    var L = []
                        , K = []
                        , J = e(M);
                    c(J, function(P, Q) {
                        var O, R;
                        if (T.isArray(P) && Q === 0) {
                            c(P, function(S) {
                                L.push((z.forcePropertyCase === "lower") ? S.toLowerCase() : (z.forcePropertyCase === "upper") ? S.toUpperCase() : S)
                            });
                            return true
                        } else {
                            if (T.isArray(P)) {
                                O = {};
                                c(P, function(U, S) {
                                    O[L[S]] = U
                                });
                                P = O
                            } else {
                                if (T.isObject(P) && z.forcePropertyCase) {
                                    R = {};
                                    u(P, function(U, S) {
                                        R[(z.forcePropertyCase === "lower") ? S.toLowerCase() : (z.forcePropertyCase === "upper") ? S.toUpperCase() : S] = P[S]
                                    });
                                    P = R
                                }
                            }
                        }
                        D++;
                        P.___id = "T" + String(n + b).slice(-6) + "R" + String(n + D).slice(-6);
                        P.___s = true;
                        K.push(P.___id);
                        if (z.template) {
                            P = T.mergeObj(z.template, P)
                        }
                        C.push(P);
                        G[P.___id] = C.length - 1;
                        if (z.onInsert && (N || TAFFY.isUndefined(N))) {
                            z.onInsert.call(P)
                        }
                        E.dm(new Date())
                    });
                    return H(K)
                },
                sort: function(J) {
                    C = j(C, J.split(","));
                    G = {};
                    c(C, function(L, K) {
                        G[L.___id] = K
                    });
                    E.dm(new Date());
                    return true
                },
                update: function(Q, M, L) {
                    var P = {}, O, N, J, K;
                    if (z.forcePropertyCase) {
                        u(M, function(R, S) {
                            P[(z.forcePropertyCase === "lower") ? S.toLowerCase() : (z.forcePropertyCase === "upper") ? S.toUpperCase() : S] = R
                        });
                        M = P
                    }
                    O = C[G[Q]];
                    N = T.mergeObj(O, M);
                    J = {};
                    K = false;
                    u(N, function(R, S) {
                        if (TAFFY.isUndefined(O[S]) || O[S] !== R) {
                            J[S] = R;
                            K = true
                        }
                    });
                    if (K) {
                        if (z.onUpdate && (L || TAFFY.isUndefined(L))) {
                            z.onUpdate.call(N, C[G[Q]], J)
                        }
                        C[G[Q]] = N;
                        E.dm(new Date())
                    }
                },
                remove: function(J) {
                    C[G[J]].___s = false
                },
                removeCommit: function(K) {
                    var J;
                    for (J = C.length - 1; J > -1; J--) {
                        if (!C[J].___s) {
                            if (z.onRemove && (K || TAFFY.isUndefined(K))) {
                                z.onRemove.call(C[J])
                            }
                            G[C[J].___id] = undefined;
                            C.splice(J, 1)
                        }
                    }
                    G = {};
                    c(C, function(M, L) {
                        G[M.___id] = L
                    });
                    E.dm(new Date())
                },
                query: function(L) {
                    var O, P, K, N, M, J;
                    if (z.cacheSize) {
                        P = "";
                        c(L.filterRaw, function(Q) {
                            if (T.isFunction(Q)) {
                                P = "nocache";
                                return TAFFY.EXIT
                            }
                        });
                        if (P === "") {
                            P = a(T.mergeObj(L, {
                                q: false,
                                run: false,
                                sort: false
                            }))
                        }
                    }
                    if (!L.results || !L.run || (L.run && E.dm() > L.run)) {
                        K = [];
                        if (z.cacheSize && I[P]) {
                            I[P].i = A++;
                            return I[P].results
                        } else {
                            if (L.q.length === 0 && L.index.length === 0) {
                                c(C, function(Q) {
                                    K.push(Q)
                                });
                                O = K
                            } else {
                                N = x(L.index);
                                c(N, function(Q) {
                                    if (L.q.length === 0 || h(Q, L.q)) {
                                        K.push(Q)
                                    }
                                });
                                O = K
                            }
                        }
                    } else {
                        O = L.results
                    }
                    if (L.order.length > 0 && (!L.run || !L.sort)) {
                        O = j(O, L.order)
                    }
                    if (O.length && ((L.limit && L.limit < O.length) || L.start)) {
                        M = [];
                        c(O, function(R, Q) {
                            if (!L.start || (L.start && (Q + 1) >= L.start)) {
                                if (L.limit) {
                                    J = (L.start) ? (Q + 1) - L.start : Q;
                                    if (J < L.limit) {
                                        M.push(R)
                                    } else {
                                        if (J > L.limit) {
                                            return TAFFY.EXIT
                                        }
                                    }
                                } else {
                                    M.push(R)
                                }
                            }
                        });
                        O = M
                    }
                    if (z.cacheSize && P !== "nocache") {
                        y++;
                        setTimeout(function() {
                            var Q, R;
                            if (y >= z.cacheSize * 2) {
                                y = 0;
                                Q = A - z.cacheSize;
                                R = {};
                                u(function(U, S) {
                                    if (U.i >= Q) {
                                        R[S] = U
                                    }
                                });
                                I = R
                            }
                        }, 0);
                        I[P] = {
                            i: A++,
                            results: O
                        }
                    }
                    return O
                }
            };
            H = function() {
                var K, J;
                K = TAFFY.mergeObj(TAFFY.mergeObj(r, {
                    insert: undefined
                }), {
                    getDBI: function() {
                        return E
                    },
                    getroot: function(L) {
                        return H.call(L)
                    },
                    context: function(L) {
                        if (L) {
                            J = TAFFY.mergeObj(J, L.hasOwnProperty("results") ? TAFFY.mergeObj(L, {
                                run: new Date(),
                                sort: new Date()
                            }) : L)
                        }
                        return J
                    },
                    extend: undefined
                });
                J = (this && this.q) ? this : {
                    limit: false,
                    start: false,
                    q: [],
                    filterRaw: [],
                    index: [],
                    order: [],
                    results: false,
                    run: null,
                    sort: null,
                    settings: z
                };
                c(arguments, function(L) {
                    if (w(L)) {
                        J.index.push(L)
                    } else {
                        J.q.push(v(L))
                    }
                    J.filterRaw.push(L)
                });
                return K
            }
            ;
            b++;
            if (F) {
                E.insert(F)
            }
            H.insert = E.insert;
            H.merge = function(M, L, N) {
                var K = {}
                    , J = []
                    , O = {};
                N = N || false;
                L = L || "id";
                c(M, function(Q) {
                    var P;
                    K[L] = Q[L];
                    J.push(Q[L]);
                    P = H(K).first();
                    if (P) {
                        E.update(P.___id, Q, N)
                    } else {
                        E.insert(Q, N)
                    }
                });
                O[L] = J;
                return H(O)
            }
            ;
            H.TAFFY = true;
            H.sort = E.sort;
            H.settings = function(J) {
                if (J) {
                    z = TAFFY.mergeObj(z, J);
                    if (J.template) {
                        H().update(J.template)
                    }
                }
                return z
            }
            ;
            H.store = function(L) {
                var K = false, J;
                if (localStorage) {
                    if (L) {
                        J = localStorage.getItem("taffy_" + L);
                        if (J && J.length > 0) {
                            H.insert(J);
                            K = true
                        }
                        if (C.length > 0) {
                            setTimeout(function() {
                                localStorage.setItem("taffy_" + z.storageName, JSON.stringify(C))
                            })
                        }
                    }
                    H.settings({
                        storageName: L
                    })
                }
                return H
            }
            ;
            return H
        }
        ;
        TAFFY = T;
        T.each = c;
        T.eachin = u;
        T.extend = r.extend;
        TAFFY.EXIT = "TAFFYEXIT";
        TAFFY.mergeObj = function(z, x) {
            var y = {};
            u(z, function(A, B) {
                y[B] = z[B]
            });
            u(x, function(A, B) {
                y[B] = x[B]
            });
            return y
        }
        ;
        TAFFY.has = function(z, y) {
            var x = false, A;
            if ((z.TAFFY)) {
                x = z(y);
                if (x.length > 0) {
                    return true
                } else {
                    return false
                }
            } else {
                switch (T.typeOf(z)) {
                    case "object":
                        if (T.isObject(y)) {
                            u(y, function(B, C) {
                                if (x === true && !T.isUndefined(z[C]) && z.hasOwnProperty(C)) {
                                    x = T.has(z[C], y[C])
                                } else {
                                    x = false;
                                    return TAFFY.EXIT
                                }
                            })
                        } else {
                            if (T.isArray(y)) {
                                c(y, function(B, C) {
                                    x = T.has(z, y[C]);
                                    if (x) {
                                        return TAFFY.EXIT
                                    }
                                })
                            } else {
                                if (T.isString(y)) {
                                    if (!TAFFY.isUndefined(z[y])) {
                                        return true
                                    } else {
                                        return false
                                    }
                                }
                            }
                        }
                        return x;
                    case "array":
                        if (T.isObject(y)) {
                            c(z, function(B, C) {
                                x = T.has(z[C], y);
                                if (x === true) {
                                    return TAFFY.EXIT
                                }
                            })
                        } else {
                            if (T.isArray(y)) {
                                c(y, function(C, B) {
                                    c(z, function(E, D) {
                                        x = T.has(z[D], y[B]);
                                        if (x === true) {
                                            return TAFFY.EXIT
                                        }
                                    });
                                    if (x === true) {
                                        return TAFFY.EXIT
                                    }
                                })
                            } else {
                                if (T.isString(y) || T.isNumber(y)) {
                                    x = false;
                                    for (A = 0; A < z.length; A++) {
                                        x = T.has(z[A], y);
                                        if (x) {
                                            return true
                                        }
                                    }
                                }
                            }
                        }
                        return x;
                    case "string":
                        if (T.isString(y) && y === z) {
                            return true
                        }
                        break;
                    default:
                        if (T.typeOf(z) === T.typeOf(y) && z === y) {
                            return true
                        }
                        break
                }
            }
            return false
        }
        ;
        TAFFY.hasAll = function(A, z) {
            var y = TAFFY, x;
            if (y.isArray(z)) {
                x = true;
                c(z, function(B) {
                    x = y.has(A, B);
                    if (x === false) {
                        return TAFFY.EXIT
                    }
                });
                return x
            } else {
                return y.has(A, z)
            }
        }
        ;
        TAFFY.typeOf = function(x) {
            var y = typeof x;
            if (y === "object") {
                if (x) {
                    if (typeof x.length === "number" && !(x.propertyIsEnumerable("length"))) {
                        y = "array"
                    }
                } else {
                    y = "null"
                }
            }
            return y
        }
        ;
        TAFFY.getObjectKeys = function(x) {
            var y = [];
            u(x, function(A, z) {
                y.push(z)
            });
            y.sort();
            return y
        }
        ;
        TAFFY.isSameArray = function(y, x) {
            return (TAFFY.isArray(y) && TAFFY.isArray(x) && y.join(",") === x.join(",")) ? true : false
        }
        ;
        TAFFY.isSameObject = function(A, y) {
            var x = TAFFY
                , z = true;
            if (x.isObject(A) && x.isObject(y)) {
                if (x.isSameArray(x.getObjectKeys(A), x.getObjectKeys(y))) {
                    u(A, function(B, C) {
                        if (!((x.isObject(A[C]) && x.isObject(y[C]) && x.isSameObject(A[C], y[C])) || (x.isArray(A[C]) && x.isArray(y[C]) && x.isSameArray(A[C], y[C])) || (A[C] === y[C]))) {
                            z = false;
                            return TAFFY.EXIT
                        }
                    })
                } else {
                    z = false
                }
            } else {
                z = false
            }
            return z
        }
        ;
        f = ["String", "Number", "Object", "Array", "Boolean", "Null", "Function", "Undefined"];
        q = function(x) {
            return function(y) {
                return TAFFY.typeOf(y) === x.toLowerCase() ? true : false
            }
        }
        ;
        for (p = 0; p < f.length; p++) {
            t = f[p];
            TAFFY["is" + t] = q(t)
        }
    }
}());
if (typeof (exports) === "object") {
    exports.taffy = TAFFY
}
;