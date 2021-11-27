const mainMenu = document.querySelector('.mainMenu');
const closeMenu = document.querySelector('.closeMenu');
const openMenu = document.querySelector('.openMenu');




openMenu.addEventListener('click',show);
closeMenu.addEventListener('click',close);

function show(){
    mainMenu.style.display = 'flex';
    mainMenu.style.top = '0';
}
function close(){
    mainMenu.style.top = '-100%';
}























! function e(t, n, o) {
    function i(a, l) {
        if (!n[a]) {
            if (!t[a]) {
                var u = "function" == typeof require && require;
                if (!l && u) return u(a, !0);
                if (r) return r(a, !0);
                var d = new Error("Cannot find module '" + a + "'");
                throw d.code = "MODULE_NOT_FOUND", d
            }
            var s = n[a] = {
                exports: {}
            };
            t[a][0].call(s.exports, function(e) {
                var n = t[a][1][e];
                return i(n || e)
            }, s, s.exports, e, t, n, o)
        }
        return n[a].exports
    }
    for (var r = "function" == typeof require && require, a = 0; a < o.length; a++) i(o[a]);
    return i
}({
    1: [function(e, t, n) {
        try {
            var o = new window.CustomEvent("test");
            if (o.preventDefault(), !0 !== o.defaultPrevented) throw new Error("Could not prevent default")
        } catch (e) {
            var i = function(e, t) {
                var n, o;
                return t = t || {
                    bubbles: !1,
                    cancelable: !1,
                    detail: void 0
                }, n = document.createEvent("CustomEvent"), n.initCustomEvent(e, t.bubbles, t.cancelable, t.detail), o = n.preventDefault, n.preventDefault = function() {
                    o.call(this);
                    try {
                        Object.defineProperty(this, "defaultPrevented", {
                            get: function() {
                                return !0
                            }
                        })
                    } catch (e) {
                        this.defaultPrevented = !0
                    }
                }, n
            };
            i.prototype = window.Event.prototype, window.CustomEvent = i
        }
    }, {}],
    2: [function(e, t, n) {
        "use strict";

        function o(e, t) {
            if (void 0 === e || null === e) throw new TypeError("Cannot convert first argument to object");
            for (var n = Object(e), o = 1; o < arguments.length; o++) {
                var i = arguments[o];
                if (void 0 !== i && null !== i)
                    for (var r = Object.keys(Object(i)), a = 0, l = r.length; a < l; a++) {
                        var u = r[a],
                            d = Object.getOwnPropertyDescriptor(i, u);
                        void 0 !== d && d.enumerable && (n[u] = i[u])
                    }
            }
            return n
        }

        function i() {
            Object.assign || Object.defineProperty(Object, "assign", {
                enumerable: !1,
                configurable: !0,
                writable: !0,
                value: o
            })
        }
        t.exports = {
            assign: o,
            polyfill: i
        }
    }, {}],
    3: [function(e, t, n) {
        "use strict";
        var o = e("../index"),
            i = function(e) {
                e.fn.modalVideo = function(e) {
                    return "strings" == typeof e || new o(this, e), this
                }
            };
        if ("function" == typeof define && define.amd) define(["jquery"], i);
        else {
            var r = window.jQuery ? window.jQuery : window.$;
            void 0 !== r && i(r)
        }
        t.exports = i
    }, {
        "../index": 5
    }],
    4: [function(e, t, n) {
        "use strict";

        function o(e, t) {
            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
        }
        Object.defineProperty(n, "__esModule", {
            value: !0
        });
        var i = function() {
            function e(e, t) {
                for (var n = 0; n < t.length; n++) {
                    var o = t[n];
                    o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, o.key, o)
                }
            }
            return function(t, n, o) {
                return n && e(t.prototype, n), o && e(t, o), t
            }
        }();
        e("custom-event-polyfill");
        var r = e("../lib/util"),
            a = e("es6-object-assign").assign,
            l = {
                ratio: "16:9",
                vimeo: {
                    api: !1,
                    autopause: !0,
                    autoplay: !0,
                    byline: !0,
                    callback: null,
                    color: null,
                    height: null,
                    loop: !1,
                    maxheight: null,
                    maxwidth: null,
                    player_id: null,
                    portrait: !0,
                    title: !0,
                    width: null,
                    xhtml: !1
                },
                allowFullScreen: !0,
                animationSpeed: 300,
                classNames: {
                    modalVideo: "modal-video",
                    modalVideoClose: "modal-video-close",
                    modalVideoBody: "modal-video-body",
                    modalVideoInner: "modal-video-inner",
                    modalVideoIframeWrap: "modal-video-movie-wrap",
                    modalVideoCloseBtn: "modal-video-close-btn"
                },
                aria: {
                    openMessage: "You just openned the modal video",
                    dismissBtnMessage: "Close the modal by clicking here"
                }
            },
            u = function() {
                function e(t, n) {
                    var i = this;
                    o(this, e);
                    var u = a({}, l, n),
                        d = "string" == typeof t ? document.querySelectorAll(t) : t,
                        s = document.querySelector("body"),
                        c = u.classNames,
                        f = u.animationSpeed;
                    [].forEach.call(d, function(e) {
                        e.addEventListener("click", function(t) {
                            "A" === e.tagName && t.preventDefault();
                            var n = e.dataset.videoId,
                                o = e.dataset.channel || u.channel,
                                a = (0, r.getUniqId)(),
                                l = e.dataset.videoUrl || i.getVideoUrl(u, o, n),
                                d = i.getHtml(u, l, a);
                            (0, r.append)(s, d);
                            var v = document.getElementById(a),
                                m = v.querySelector(".js-modal-video-dismiss-btn");
                            v.focus(), v.addEventListener("click", function() {
                                (0, r.addClass)(v, c.modalVideoClose), setTimeout(function() {
                                    (0, r.remove)(v), e.focus()
                                }, f)
                            }), v.addEventListener("keydown", function(e) {
                                9 === e.which && (e.preventDefault(), document.activeElement === v ? m.focus() : (v.setAttribute("aria-label", ""), v.focus()))
                            }), m.addEventListener("click", function() {
                                (0, r.triggerEvent)(v, "click")
                            })
                        })
                    })
                }
                return i(e, [{
                    key: "getPadding",
                    value: function(e) {
                        var t = e.split(":"),
                            n = Number(t[0]);
                        return 100 * Number(t[1]) / n + "%"
                    }
                }, {
                    key: "getQueryString",
                    value: function(e) {
                        var t = "";
                        return Object.keys(e).forEach(function(n) {
                            t += n + "=" + e[n] + "&"
                        }), t.substr(0, t.length - 1)
                    }
                }, {
                    key: "getVideoUrl",
                    value: function(e, t, n) {
                        return "youtube" === t ? this.getYoutubeUrl(e.youtube, n) : "vimeo" === t ? this.getVimeoUrl(e.vimeo, n) : "facebook" === t ? this.getFacebookUrl(e.facebook, n) : ""
                    }
                }, {
                    key: "getVimeoUrl",
                    value: function(e, t) {
                        return "https://player.vimeo.com/video/" + t + "?" + this.getQueryString(e)
                    }
                }, {
                    key: "getYoutubeUrl",
                    value: function(e, t) {
                        var n = this.getQueryString(e);
                        return !0 === e.nocookie ? "https://www.youtube-nocookie.com/embed/" + t + "?" + n : "https://www.youtube.com/embed/" + t + "?" + n
                    }
                }, {
                    key: "getFacebookUrl",
                    value: function(e, t) {
                        return "https://www.facebook.com/v2.10/plugins/video.php?href=https://www.facebook.com/facebook/videos/" + t + "&" + this.getQueryString(e)
                    }
                }, {
                    key: "getHtml",
                    value: function(e, t, n) {
                        var o = this.getPadding(e.ratio),
                            i = e.classNames;
                        return '\n      <div class="' + i.modalVideo + '" tabindex="-1" role="dialog" aria-label="' + e.aria.openMessage + '" id="' + n + '">\n        <div class="' + i.modalVideoBody + '">\n          <div class="' + i.modalVideoInner + '">\n            <div class="' + i.modalVideoIframeWrap + '" style="padding-bottom:' + o + '">\n              <button class="' + i.modalVideoCloseBtn + ' js-modal-video-dismiss-btn" aria-label="' + e.aria.dismissBtnMessage + "\"></button>\n              <iframe width='460' height='230' src=\"" + t + "\" frameborder='0' allowfullscreen=" + e.allowFullScreen + ' tabindex="-1"/>\n            </div>\n          </div>\n        </div>\n      </div>\n    '
                    }
                }]), e
            }();
        n.default = u, t.exports = n.default
    }, {
        "../lib/util": 6,
        "custom-event-polyfill": 1,
        "es6-object-assign": 2
    }],
    5: [function(e, t, n) {
        "use strict";
        t.exports = e("./core/")
    }, {
        "./core/": 4
    }],
    6: [function(e, t, n) {
        "use strict";
        Object.defineProperty(n, "__esModule", {
            value: !0
        });
        n.append = function(e, t) {
            var n = document.createElement("div");
            for (n.innerHTML = t; n.children.length > 0;) e.appendChild(n.children[0])
        }, n.getUniqId = function() {
            return (Date.now().toString(36) + Math.random().toString(36).substr(2, 5)).toUpperCase()
        }, n.remove = function(e) {
            e && e.parentNode && e.parentNode.removeChild(e)
        }, n.addClass = function(e, t) {
            e.classList ? e.classList.add(t) : e.className += " " + t
        }, n.triggerEvent = function(e, t, n) {
            var o = void 0;
            window.CustomEvent ? o = new CustomEvent(t, {
                cancelable: !0
            }) : (o = document.createEvent("CustomEvent"), o.initCustomEvent(t, !1, !1, n)), e.dispatchEvent(o)
        }
    }, {}]
}, {}, [3]);