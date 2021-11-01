"use strict";
! function(e) {
    function t() {
        var e = {
            Android: function() {
                return navigator.userAgent.match(/Android/i)
            },
            BlackBerry: function() {
                return navigator.userAgent.match(/BlackBerry/i)
            },
            iOS: function() {
                return navigator.userAgent.match(/iPhone|iPad|iPod/i)
            },
            Opera: function() {
                return navigator.userAgent.match(/Opera Mini/i)
            },
            Windows: function() {
                return navigator.userAgent.match(/IEMobile/i)
            },
            any: function() {
                return e.Android() || e.BlackBerry() || e.iOS() || e.Opera() || e.Windows()
            }
        };
        if (null == e.any()) {
            var t = new Scrollax;
            t.reload(), t.init()
        }
    }
    e.fn.myOwl = function(t) {
        var i = e.extend({
            items: 1,
            dots: !1,
            loop: !0,
            mouseDrag: !0,
            touchDrag: !0,
            nav: !1,
            autoplay: !0,
            navText: ["", ""],
            margin: 0,
            stagePadding: 0,
            autoplayTimeout: 5e3,
            autoplayHoverPause: !0,
            navRewind: !1,
            responsive: {},
            animateOut: "",
            animateIn: "",
            center: "",
            merge: "",
            autoWidth: ""
        }, t);
        return this.owlCarousel({
            items: i.items,
            loop: i.loop,
            mouseDrag: i.mouseDrag,
            touchDrag: i.touchDrag,
            nav: i.nav,
            navText: i.navText,
            dots: i.dots,
            margin: i.margin,
            stagePadding: i.stagePadding,
            autoplay: i.autoplay,
            autoplayTimeout: i.autoplayTimeout,
            autoplayHoverPause: i.autoplayHoverPause,
            animateOut: i.animateOut,
            animateIn: i.animateIn,
            responsive: i.responsive,
            navRewind: i.navRewind,
            center: i.center,
            merge: i.merge,
            autoWidth: i.autoWidth
        })
    }, e.fn.instaFeed = function(t) {
        var i = e.extend({
            token: "",
            $this: e(this),
            photos: 0
        }, t);
        e.ajax({
            url: "https://api.instagram.com/v1/users/self/media/recent",
            dataType: "jsonp",
            type: "GET",
            data: {
                access_token: i.token,
                count: i.photos
            },
            success: function(e) {
                for (var t in e.data) i.$this.append('<li><a href="' + e.data[t].link + '" ><img src="' + e.data[t].images.standard_resolution.url + '"></a></li>')
            },
            error: function(e) {
                console.log(e)
            }
        })
    }, e.fn.myGradientChart = function(t) {
        var i = e.extend({
            barColor: "",
            barColor1: "",
            barColor2: "",
            scaleColor: "transparent",
            trackColor: "#f7f7f7",
            lineCap: "square",
            size: 140,
            lineWidth: 8
        }, t);
        return this.easyPieChart({
            barColor: function(e) {
                var t = this.renderer.getCtx(),
                    a = this.renderer.getCanvas(),
                    o = t.createLinearGradient(0, 0, a.width, 0);
                return o.addColorStop(0, i.barColor1), o.addColorStop(1, i.barColor2), o
            },
            scaleColor: i.scaleColor,
            trackColor: i.trackColor,
            lineCap: i.lineCap,
            size: i.size,
            lineWidth: i.lineWidth
        })
    };
    var i = function() {
        var t = e(".xs-header");
        e(".xs-inner-banner .inner-banner").css("marginTop", t.outerHeight() / 2)
    };

    function a() {
        var t = e(".nav-sticky"),
            i = t.outerHeight(),
            a = e(document).scrollTop();
        e(window).on("load", function() {
            e(document).scrollTop() > i && (t.hasClass("sticky-header") ? t.removeClass("sticky-header") : t.addClass("sticky-header"))
        }), e(window).on("scroll", function() {
            var i = e(document).scrollTop(),
                o = e(".sticky-header");
            i > a ? o.addClass("sticky") : o.removeClass("sticky"), "top" === o.attr("data-scroll-to") && (i < a ? o.addClass("sticky") : o.removeClass("sticky")), 0 === i ? (t.removeClass("sticky-header"), o.removeClass("sticky")) : t.addClass("sticky-header"), a = e(document).scrollTop()
        })
    }

    function o() {
        e(".xs-logo").each(function() {
            var t = e(this).children().clone(),
                i = e(".nav-brand");
            e(window).width() > 991 ? i.children().length > 0 && i.children().remove() : 0 === i.children().length && i.append(t)
        })
    }

    function n() {
        var t = e(".bouble-slider-privew").outerHeight(!0),
            i = e(".bouble-slider-thumb .owl-stage-outer"),
            a = e(".bouble-slider-thumb .owl-stage-outer").outerWidth(!0),
            o = e(".bouble-slider-thumb .owl-stage");
        e(window).width() > 991 && (i.css("height", t), o.css("width", a), o.css("height", t))
    }
    if (e.fn.scrollView = function() {
            return this.each(function() {
                e("html, body").animate({
                    scrollTop: e(this).offset().top
                }, 1e3)
            })
        }, e.fn.goCurrentSection = function() {
            return this.on("click", function(t) {
                if ("" !== this.hash) {
                    t.preventDefault();
                    var i = this.hash;
                    e("html, body").animate({
                        scrollTop: e(i).offset().top
                    }, 1e3, function() {
                        window.location.hash = i
                    })
                }
            })
        }, e.fn.mySelect = function(t) {
            var i = e(this),
                a = e(this).children("option");
            i.addClass("select-hidden"), i.wrap('<div class="select"></div>'), i.after('<div class="select-styled"></div>');
            var o = i.next(".select-styled");
            o.text(i.children("option").eq(0).text());
            for (var n = e("<ul />", {
                    class: "select-options"
                }).insertAfter(o), s = 0; s < a.length; s++) e("<li />", {
                text: i.children("option").eq(s).text(),
                rel: i.children("option").eq(s).val()
            }).appendTo(n);
            var r = n.children("li");
            o.on("click", function(t) {
                t.stopPropagation(), e(".select-styled.active").not(this).each(function() {
                    e(this).removeClass("active").next(".select-options").fadeIn()
                }), e(this).toggleClass("active").next(".select-options").toggle(), e(this).parent().toggleClass("focus")
            }), r.on("click", function(t) {
                t.stopPropagation(), o.text(e(this).text()).removeClass("active"), i.val(e(this).attr("rel")), n.hide(), e(this).parent().parent().hasClass("focus") && e(this).parent().parent().removeClass("focus")
            }), e(document).on("click", function() {
                o.removeClass("active"), n.hide()
            })
        }, e.fn.customNumber = function(t) {
            var i = e.extend({
                plusIcon: "",
                minusIcon: ""
            }, t);
            return this.append('<span class="add">' + i.plusIcon + "</span>"), this.append('<span class="sub">' + i.minusIcon + "</span>"), this.each(function() {
                var t = e(this),
                    i = t.find('input[type="number"]');
                t.find(".add"), t.find(".sub");
                i.parent().on("click", ".sub", function(e) {
                    e.preventDefault(), i.val() > parseInt(i.attr("min"), 10) && i.val(function(e, t) {
                        return --t
                    })
                }), i.parent().on("click", ".add", function(e) {
                    e.preventDefault(), i.val() < parseInt(i.attr("max"), 10) && i.val(function(e, t) {
                        return ++t
                    })
                })
            })
        }, e.fn.onScreen = function() {
            var t = this.offset(),
                i = (e(window), {
                    top: e(window).scrollTop(),
                    left: e(window).scrollLeft()
                });
            return i.right = i.left + e(window).width(), i.bottom = i.top + e(window).height(), t.right = t.left + this.outerWidth(), t.bottom = t.top + this.outerHeight(), !(i.right < t.left || i.left > t.right || i.bottom < t.top || i.top > t.bottom)
        }, e(window).on("load", function() {
            skrollr.init({
                forceHeight: !1,
                easings: {
                    easeOutBack: function(e, t) {
                        return (e -= 1) * e * (((t = 1.70158) + 1) * e + t) + 1
                    }
                },
                mobileCheck: function() {
                    return !1
                }
            });
            if (t(), i(), a(), o(), n(), e(".cases-grid, .blog-grid").length > 0) {
                var s = e(".cases-grid , .blog-grid"),
                    r = function() {
                        var t, i = s.width(),
                            a = 1;
                        return i > 1200 ? a = 4 : i > 600 ? a = 3 : i > 450 ? a = 1 : i > 385 && (a = 1), t = Math.floor(i / a), s.find(".grid-item").each(function() {
                            var i = e(this),
                                a = i.attr("class").match(/grid-item-w(\d)/),
                                o = i.attr("class").match(/grid-item-h(\d)/),
                                n = a ? t * a[1] : t;
                            o && o[1];
                            i.css({
                                width: n
                            })
                        }), t
                    };
                (f = function() {
                    s.isotope({
                        resizable: !1,
                        itemSelector: ".grid-item",
                        masonry: {
                            columnWidth: r(),
                            gutterWidth: 3
                        }
                    })
                })(), e(window).on("resize", f), e(".filter-button-wraper .option-set").find("a").on("click", function() {
                    var t = e(this),
                        i = t.parents(".option-set");
                    i.find(".selected").removeClass("selected"), t.addClass("selected");
                    var a = {},
                        o = i.attr("data-option-key"),
                        n = t.attr("data-option-value");
                    return n = "false" !== n && n, a[o] = n, "layoutMode" === o && "function" == typeof changeLayoutMode ? changeLayoutMode(t, a) : s.isotope(a), !1
                })
            }
            if (e(".portfolio-grid").length > 0) {
                var l = e(".portfolio-grid");
                r = function() {
                    var t, i = l.width(),
                        a = 1;
                    return i > 1200 ? a = 4 : i > 900 ? a = 4 : i > 600 ? a = 2 : i > 450 ? a = 2 : i > 385 && (a = 1), t = Math.floor(i / a), l.find(".portfolio-grid-item").each(function() {
                        var i = e(this),
                            a = i.attr("class").match(/portfolio-grid-item-w(\d)/),
                            o = i.attr("class").match(/portfolio-grid-item-h(\d)/),
                            n = a ? t * a[1] : t;
                        o && o[1];
                        i.css({
                            width: n
                        })
                    }), t
                };
                (f = function() {
                    l.isotope({
                        resizable: !1,
                        itemSelector: ".portfolio-grid-item",
                        masonry: {
                            columnWidth: r(),
                            gutterWidth: 3
                        }
                    })
                })(), e(window).on("resize", f)
            }
            
            if (e(".blog-grid-2").length > 0) {
                s = e(".blog-grid-2"), r = function() {
                    var t, i = s.width(),
                        a = 1;
                    return i > 1200 ? a = 2 : i > 900 ? a = 2 : i > 600 ? a = 2 : i > 450 ? a = 1 : i > 385 && (a = 1), t = Math.floor(i / a), s.find(".grid-item").each(function() {
                        var i = e(this),
                            a = i.attr("class").match(/grid-item-w(\d)/),
                            o = i.attr("class").match(/grid-item-h(\d)/),
                            n = a ? t * a[1] : t;
                        o && o[1];
                        i.css({
                            width: n
                        })
                    }), t
                };
                (f = function() {
                    s.isotope({
                        resizable: !1,
                        itemSelector: ".grid-item",
                        masonry: {
                            columnWidth: r(),
                            gutterWidth: 3
                        }
                    })
                })(), e(window).on("resize", f), e(".filter-button-wraper .option-set").find("a").on("click", function() {
                    var t = e(this),
                        i = t.parents(".option-set");
                    i.find(".selected").removeClass("selected"), t.addClass("selected");
                    var a = {},
                        o = i.attr("data-option-key"),
                        n = t.attr("data-option-value");
                    return n = "false" !== n && n, a[o] = n, "layoutMode" === o && "function" == typeof changeLayoutMode ? changeLayoutMode(t, a) : s.isotope(a), !1
                })
            }
            
            e(".agency-portfolio-slider").length > 0 && e(".agency-portfolio-slider").myOwl({
                items: 5,
                nav: !1,
                responsive: {
                    0: {
                        items: 1,
                        autoWidth: !1
                    },
                    480: {
                        items: 1,
                        autoWidth: !1
                    },
                    768: {
                        items: 2,
                        autoWidth: !1
                    },
                    1024: {
                        items: 5,
                        autoWidth: !0
                    }
                }
            })
        }), e(document).ready(function() {
            var s, r;
            t(), i(), s = e(".timeline").children(), r = (s.length - 1) * s.outerHeight(), e(".timeline").append("<style>.timeline::before{height: " + r + "px}</style>"), s.last().css("paddingBottom", "0"), a(), o(), n(), e(".xs-menus").length > 0 && e(".xs-menus").xs_nav({
                    mobileBreakpoint: 992
                }), e(".xs-hidden-menus").length > 0 && (e(".xs-hidden-menus").xs_nav({
                    hidden: !0,
                    offCanvasSide: "right"
                }), e(".offsetmenu-btn").on("click", function() {
                    e(".xs-hidden-menus").data("xs_nav").toggleOffcanvas()
                })), e(document).on("submit", "#xs-contact-form", function(t) {
                    t.preventDefault();
                    var i, a = e("#xs_contact_name"),
                        o = e("#xs_contact_last_name"),
                        n = e("#xs_contact_number"),
                        s = e("#xs_contact_email"),
                        r = e("#xs_contact_subject"),
                        l = e("#x_contact_massage"),
                        d = e("#xs_contact_submit"),
                        c = !1;
                    if (e(".xpeedStudio_success_message").remove(), a.length > 0) {
                        if ("" === a.val().trim()) return a.addClass("invaild"), c = !0, a.focus(), !1;
                        a.removeClass("invaild")
                    }
                    if (o.length > 0) {
                        if ("" === o.val().trim()) return o.addClass("invaild"), c = !0, o.focus(), !1;
                        o.removeClass("invaild")
                    }
                    if (n.length > 0) {
                        if ("" === n.val().trim()) return n.addClass("invaild"), c = !0, n.focus(), !1;
                        n.removeClass("invaild")
                    }
                    if (s.length > 0) {
                        if ("" === s.val().trim()) return s.addClass("invaild"), c = !0, s.focus(), !1;
                        if (i = s.val().toLowerCase(), !/^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/.test(i)) return s.addClass("invaild"), c = !0, s.focus(), !1;
                        s.removeClass("invaild")
                    }
                    if (r.length > 0) {
                        if ("" === r.val().trim()) return r.addClass("invaild"), c = !0, r.focus(), !1;
                        r.removeClass("invaild")
                    }
                    if (l.length > 0) {
                        if ("" === l.val().trim()) return l.addClass("invaild"), c = !0, l.focus(), !1;
                        l.removeClass("invaild")
                    }!1 === c && (d.before().hide().fadeIn(), e.ajax({
                        type: "POST",
                        url: "assets/php/contact-form.php",
                        data: {
                            xs_contact_name: a.val(),
                            xs_contact_last_name: o.val(),
                            xs_contact_number: n.val(),
                            xs_contact_email: s.val(),
                            xs_contact_subject: r.val(),
                            x_contact_massage: l.val()
                        },
                        success: function(t) {
                            d.after('<p class="xpeedStudio_success_message">' + t + "</p>").hide().fadeIn(), setTimeout(function() {
                                e(".xpeedStudio_success_message").fadeOut(1e3, function() {
                                    e(this).remove()
                                })
                            }, 5e3), e("#xs-contact-form")[0].reset()
                        }
                    }))
                }), e(".xs-video-popup").length > 0 && e(".xs-video-popup").magnificPopup({
                    disableOn: 700,
                    type: "iframe",
                    mainClass: "mfp-fade",
                    removalDelay: 160,
                    preloader: !1,
                    fixedContentPos: !1
                }), e(".offset-side-bar").length > 0 && e(".offset-side-bar").on("click", function(t) {
                    t.preventDefault(), t.stopPropagation(), e(".cart-group").addClass("isActive")
                }), e(".close-side-widget").length > 0 && e(".close-side-widget").on("click", function(t) {
                    t.preventDefault(), e(".cart-group").removeClass("isActive")
                }), e(".navSidebar-button").length > 0 && e(".navSidebar-button").on("click", function(t) {
                    t.preventDefault(), t.stopPropagation(), e(".info-group").addClass("isActive")
                }), e(".close-side-widget").length > 0 && e(".close-side-widget").on("click", function(t) {
                    t.preventDefault(), e(".info-group").removeClass("isActive")
                }), e("body").on("click", function(t) {
                    e(".info-group").removeClass("isActive"), e(".cart-group").removeClass("isActive")
                }), e(".xs-sidebar-widget").on("click", function(e) {
                    e.stopPropagation()
                }), e(".insta-feed").length > 0 && e(".insta-feed").instaFeed({
                    token: "2367672995.1677ed0.dea7a14501d04cd9982c7a0d23c716dd",
                    photos: 6
                }), e(".insta-feed2").length > 0 && e(".insta-feed2").instaFeed({
                    token: "2367672995.1677ed0.dea7a14501d04cd9982c7a0d23c716dd",
                    photos: 8
                }), e(".xs-modal-popup").length > 0 && e(".xs-modal-popup").magnificPopup({
                    type: "inline",
                    fixedContentPos: !1,
                    fixedBgPos: !0,
                    overflowY: "auto",
                    closeBtnInside: !1,
                    callbacks: {
                        beforeOpen: function() {
                            this.st.mainClass = "my-mfp-slide-bottom xs-promo-popup"
                        }
                    }
                }), e("img").length > 0 && e("img").each(function() {
                    e(this).attr("draggable", "false"), e(this).on("mousedown", function(e) {
                        e.preventDefault && e.preventDefault()
                    })
                }), e(".agency-office-slider").length > 0 && e(".agency-office-slider").myOwl({
                    items: 3,
                    autoWidth: !0,
                    margin: 30,
                    nav: !0,
                    navText: ['<i class="icon icon-arrow-left" />', '<i class="icon icon-arrow-right" />'],
                    responsive: {
                        0: {
                            items: 1,
                            autoWidth: !1,
                            nav: !1,
                            margin: 0
                        },
                        480: {
                            items: 1,
                            autoWidth: !1,
                            nav: !1,
                            margin: 0
                        },
                        768: {
                            items: 2,
                            autoWidth: !1,
                            nav: !1
                        },
                        1024: {
                            items: 3,
                            autoWidth: !0,
                            nav: !0
                        }
                    }
                }), e(".review-slider").length > 0 && e(".review-slider").myOwl({
                    nav: !0,
                    navText: ['<i class="icon icon-left-arrows"></i>', '<i class="icon icon-right-arrow"></i>'],
                    dots: !0,
                    responsive: {
                        0: {
                            nav: !1
                        },
                        480: {
                            nav: !1
                        },
                        768: {
                            nav: !1
                        },
                        1024: {
                            nav: !0
                        }
                    }
                }), e(".client-slider").length > 0 && e(".client-slider").myOwl({
                    items: 5,
                    responsive: {
                        0: {
                            items: 1
                        },
                        480: {
                            items: 2
                        },
                        768: {
                            items: 3
                        },
                        1024: {
                            items: 5
                        }
                    }
                }), e(".subscribe-form, .my-newsletter").length > 0 && e(".subscribe-form, .my-newsletter").ajaxChimp({
                    url: "https://facebook.us8.list-manage.com/subscribe/post?u=85f515a08b87483d03fee7755&amp;id=66389dc38b"
                }), e(".agency-team-slider").length > 0 && e(".agency-team-slider").myOwl({
                    items: 4,
                    autoplay: !1,
                    responsive: {
                        0: {
                            items: 1
                        },
                        480: {
                            items: 1
                        },
                        768: {
                            items: 2
                        },
                        1024: {
                            items: 4
                        }
                    }
                }), e(".agency-single-team").hover(function() {
                    e(this).parent().hasClass("hover") ? e(this).parent().removeClass("hover") : e(this).parent().addClass("hover")
                }),
                function() {
                    for (var t = ["#b224ef", "#0369d1", "#ff4eb6"], i = ["#5055fa", "#00ecbc", "#ffcb6d"], a = e(".chart"), o = e(".chart-content"), n = 0; n < e(".single-piechart").length; n++) {
                        e(a[n]).myGradientChart({
                            barColor1: t[n],
                            barColor2: i[n]
                        });
                        var s = e(a[n]).attr("data-percent");
                        e(o[n]).append('<span class="gradient-title" style="background: linear-gradient(90deg, ' + t[n] + " 0%, " + i[n] + " 84%); color: " + t[n] + ';     -webkit-background-clip: text;">' + s + "%</span>")
                    }
                }();
            var l = e(".number-percentage");
            if (e(".waypoint-tigger").length > 0) new Waypoint({
                element: document.getElementsByClassName("waypoint-tigger"),
                handler: function(t) {
                    l.each(function() {
                        e(this).animateNumbers(e(this).attr("data-value"), !0, parseInt(e(this).attr("data-animation-duration"), 10));
                        var t = e(this).attr("data-value");
                        e(this).closest(".single-skill-bar").find(".skill-track").animate({
                            width: t + "%"
                        }, 3500)
                    })
                },
                offset: "50%"
            });
            e.fn.animateNumbers = function(t, i, a, o) {
                return this.each(function() {
                    var n = e(this),
                        s = parseInt(n.text().replace(/,/g, ""), 10);
                    i = void 0 === i || i, e({
                        value: s
                    }).animate({
                        value: t
                    }, {
                        duration: null == a ? 500 : a,
                        easing: null == o ? "swing" : o,
                        step: function() {
                            n.text(Math.floor(this.value)), i && n.text(n.text().replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,"))
                        },
                        complete: function() {
                            parseInt(n.text(), 10) !== t && (n.text(t), i && n.text(n.text().replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,")))
                        }
                    })
                })
            }, e(function() {
                new WOW({
                    boxClass: "wow",
                    animateClass: "animated",
                    offset: 0,
                    mobile: !1,
                    live: !0,
                    scrollContainer: null
                }).init()
            });
            var d = window.location.pathname,
                c = d.substr(d.lastIndexOf("/") + 1);
            if (e(".nav-menu li a").each(function(t, i) {
                    var a = this.href.substr(this.href.lastIndexOf("/") + 1);
                    c == a && (e([i]).addClass("active"), e([i]).parents().closest(".nav-submenu").parent("li") && e([i]).parents().closest(".nav-submenu").parent("li").addClass("active"), e([i]).parent().addClass("active"))
                }), e(".xs-image-popup").length > 0 && e(".xs-image-popup").magnificPopup({
                    type: "image",
                    removalDelay: 500,
                    callbacks: {
                        beforeOpen: function() {
                            this.st.image.markup = this.st.image.markup.replace("mfp-figure", "mfp-figure mfp-with-anim"), this.st.mainClass = "mfp-zoom-in"
                        }
                    },
                    closeOnContentClick: !0,
                    midClick: !0,
                    gallery: {
                        enabled: !0
                    }
                }), e(".post-gallery-slider").length > 0 && e(".post-gallery-slider").myOwl({
                    nav: !0,
                    navText: ['<i class="icon icon-left-arrows" />', '<i class="icon icon-right-arrow" />']
                }), e(".comment-reply-link").on("click", function(t) {
                    t.preventDefault(), e("#comment-form").scrollView()
                }), e(".parallax-service").length > 0) new Swiper(".parallax-service", {
                direction: "vertical",
                slidesPerView: 1,
                mousewheel: {
                    invert: !0,
                    releaseOnEdges: !0,
                    forceToAxis: !0
                },
                pagination: {
                    el: ".swiper-pagination",
                    clickable: !0
                }
            });
            (e(".xs-select").length > 0 && e(".xs-select").mySelect(), e(".product-slider, .about-slider").length > 0 && e(".product-slider, .about-slider").myOwl({
                dots: !0,
                responsive: {
                    0: {
                        dots: !1
                    },
                    768: {
                        dots: !0
                    }
                }
            }), e(".custom_number").length > 0 && e(".custom_number").customNumber({
                plusIcon: '<i class="icon icon-up-arrow2"></i>',
                minusIcon: '<i class="icon icon-down-arrow2"></i>'
            }), e(".btn-floating").length > 0) && (e(".floating-icons-list").addClass("hidden"), e(".btn-floating").each(function() {
                e(this).on("click", function(t) {
                    t.preventDefault(), e(this).next().toggleClass("open"), e(this).next().toggleClass("hidden"), e(this).hasClass("active") ? e(this).removeClass("active") : e(this).addClass("active")
                })
            }));
            if (e(".rate-graph").length > 0 && e(".rate-graph").each(function() {
                    e(this).find(".rate-graph-bar").attr("data-percent") <= 100 ? e(this).find(".rate-graph-bar").css({
                        width: e(this).find(".rate-graph-bar").attr("data-percent") + "%"
                    }) : e(this).find(".rate-graph-bar").css({
                        width: "100%"
                    })
                }), e(".banner-slider, .quote-slider").length > 0 && e(".banner-slider, .quote-slider").myOwl({
                    nav: !0,
                    navText: ['<i class="icon icon-arrow-left"></i>', '<i class="icon icon-arrow-right"></i>'],
                    responsive: {
                        0: {
                            nav: !1
                        },
                        768: {
                            nav: !0
                        }
                    }
                }), e(".scrollto-button").length > 0 && e(".scrollto-button").goCurrentSection(), e(".review-slider-preview").length > 0 && e(".review-slider-thumb").length > 0) {
                var u = e(".review-slider-preview"),
                    f = e(".review-slider-thumb"),
                    p = 5,
                    h = !0;
                u.owlCarousel({
                    items: 1,
                    slideSpeed: 2e3,
                    nav: !1,
                    autoplay: !0,
                    dots: !1,
                    loop: !0,
                    responsiveRefreshRate: 200
                }).on("changed.owl.carousel", function(e) {
                    var t = e.item.count - 1,
                        i = Math.round(e.item.index - e.item.count / 2 - .5);
                    i < 0 && (i = t), i > t && (i = 0), f.find(".owl-item").removeClass("current").eq(i).addClass("current");
                    var a = f.find(".owl-item.active").length - 1,
                        o = f.find(".owl-item.active").first().index();
                    i > f.find(".owl-item.active").last().index() && f.data("owl.carousel").to(i, 100, !0), i < o && f.data("owl.carousel").to(i - a, 100, !0)
                }), f.on("initialized.owl.carousel", function() {
                    f.find(".owl-item").eq(0).addClass("current")
                }).owlCarousel({
                    items: p,
                    dots: !1,
                    nav: !1,
                    smartSpeed: 200,
                    slideSpeed: 500,
                    slideBy: p,
                    responsiveRefreshRate: 100,
                    responsive: {
                        0: {
                            items: 1
                        },
                        480: {
                            items: 1
                        },
                        768: {
                            items: 3
                        },
                        1024: {
                            items: p
                        }
                    }
                }).on("changed.owl.carousel", function(e) {
                    if (h) {
                        var t = e.item.index;
                        u.data("owl.carousel").to(t, 100, !0)
                    }
                }), f.on("click", ".owl-item", function(t) {
                    t.preventDefault();
                    var i = e(this).index();
                    u.data("owl.carousel").to(i, 300, !0)
                })
            }
            if (e(".bouble-slider-privew").length > 0 && e(".bouble-slider-thumb").length > 0) {
                u = e(".bouble-slider-privew"), f = e(".bouble-slider-thumb"), p = 5, h = !0;
                u.owlCarousel({
                    items: 1,
                    slideSpeed: 2e3,
                    nav: !0,
                    autoplay: !0,
                    dots: !1,
                    loop: !0,
                    mouseDrag: !1,
                    touchDrag: !1,
                    responsiveRefreshRate: 200,
                    responsive: {
                        0: {
                            touchDrag: !0
                        },
                        768: {
                            touchDrag: !0
                        },
                        1024: {
                            touchDrag: !1
                        }
                    },
                    navText: ['<i class="icon icon-arrow-left"></i>', '<i class="icon icon-arrow-right"></i>']
                }).on("changed.owl.carousel", function(e) {
                    var t = e.item.count - 1,
                        i = Math.round(e.item.index - e.item.count / 2 - .5);
                    i < 0 && (i = t), i > t && (i = 0), f.find(".owl-item").removeClass("current").eq(i).addClass("current");
                    var a = f.find(".owl-item.active").length - 1,
                        o = f.find(".owl-item.active").first().index();
                    i > f.find(".owl-item.active").last().index() && f.data("owl.carousel").to(i, 100, !0), i < o && f.data("owl.carousel").to(i - a, 100, !0)
                }), f.on("initialized.owl.carousel", function() {
                    f.find(".owl-item").eq(0).addClass("current")
                }).owlCarousel({
                    items: p,
                    dots: !1,
                    nav: !1,
                    smartSpeed: 200,
                    slideSpeed: 500,
                    autoWidth: !0,
                    mouseDrag: !1,
                    touchDrag: !1,
                    slideBy: p,
                    responsiveRefreshRate: 100
                }).on("changed.owl.carousel", function(e) {
                    if (h) {
                        var t = e.item.index;
                        u.data("owl.carousel").to(t, 100, !0)
                    }
                }), f.on("click", ".owl-item", function(t) {
                    t.preventDefault();
                    var i = e(this).index();
                    u.data("owl.carousel").to(i, 300, !0)
                })
            }
            if (e(".single-page-menu li a").length > 0 && (e(".single-page-menu li a").on("click", function() {
                    if (location.pathname.replace(/^\//, "") == this.pathname.replace(/^\//, "") || location.hostname == this.hostname) {
                        var t = e(this.hash);
                        if ((t = t.length ? t : e("[name=" + this.hash.slice(1) + "]")).length) return e("html,body").animate({
                            scrollTop: t.offset().top
                        }, 1e3), !1
                    }
                }), e(".single-page-menu li a").on("click", function() {
                    var t = e(".nav-overlay-panel"),
                        i = e(".nav-menus-wrapper");
                    i.hasClass("nav-menus-wrapper-open") && i.removeClass("nav-menus-wrapper-open"), "block" === t.css("display") && t.css("display", "none"), e(".offcanvas-menu-wraper").hasClass("active") && e(".offcanvas-menu-wraper").removeClass("active"), e(".fullscreen_menu_tigger").hasClass("open") && e(".fullscreen_menu_tigger").removeClass("open"), e(".off-canvas-menu-area").hasClass("nav-is-open") && e(".off-canvas-menu-area").removeClass("nav-is-open")
                })), e(".typed").length > 0) new Typed(".typed", {
                strings: ["busy", "laziness"],
                typeSpeed: 40,
                loop: !0,
                backSpeed: 40,
                backDelay: 500,
                startDelay: 1e3
            });
            if (e(".input-material").length > 0) {
                for (var m = e(".input-material .form-control"), v = 0; v < m.length; v++) e(m[v]).wrap('<div class="form-group"></div>'), e(m[v]).after('<span class="bar"></span>');
                e(m).each(function(t, i) {
                    var a = e(i).attr("placeholder");
                    e(i).after('<span class="placeholder-title">' + a + "</span>"), e(i).removeAttr("placeholder")
                }), e(m).on("blur", function(t) {
                    e(this).val() ? e(this).addClass("active") : e(this).removeClass("active")
                })
            }
            e("#cal_to_action_animation").length > 0 && e("#cal_to_action_animation").parallax(), e(".xs-map-popup").length > 0 && e(".xs-map-popup").magnificPopup({
                disableOn: 700,
                type: "iframe",
                mainClass: "mfp-fade",
                removalDelay: 160,
                preloader: !1,
                fixedContentPos: !1
            });
            var g;
            new Swiper(".vertical-slider", {
                direction: "vertical",
                loop: !1,
                mousewheel: !1,
                pagination: {
                    el: ".swiper-pagination",
                    clickable: !0
                }
            });
            if (e("body").on("click", ".fullscreen_menu_tigger", function(t) {
                    t.preventDefault(), e(this).toggleClass("open"), e(".offcanvas-menu-wraper").toggleClass("active"), e(".off-canvas-menu-area").toggleClass("nav-is-open")
                }), e(".off-canvas-menu-area").append('<div class="menu-overlay"></div>'), e(".offcanvas-menu .inner-submenu").prev("a").hasClass("tigger") ? e(".offcanvas-menu .inner-submenu").prev().removeClass("tigger") : e(".offcanvas-menu .inner-submenu").prev().addClass("tigger"), e(".offcanvas-menu li .tigger").on("click", function(t) {
                    t.preventDefault(), e(this).next().hasClass("show") ? (e(this).next().removeClass("show"), e(this).next().slideUp(500), e(this).removeClass("active")) : (e(this).next().addClass("show"), e(this).parent().parent().find(".offcanvas-menu li ul").removeClass("show"), e(this).parent().parent().find(".offcanvas-menu li ul").slideUp(400), e(this).next().slideToggle(500), e(this).addClass("active"))
                }), function() {
                    function e() {
                        void 0 === g && (g = jQuery), null == g("#rev_slider_8_1").revolution ? revslider_showDoubleJqueryError("#rev_slider_8_1") : g("#rev_slider_8_1").show().revolution({
                            sliderType: "hero",
                            jsFileLocation: "",
                            sliderLayout: "fullwidth",
                            dottedOverlay: "none",
                            delay: 9e3,
                            navigation: {},
                            viewPort: {
                                enable: !0,
                                outof: "wait",
                                visible_area: "100%",
                                presize: !1
                            },
                            responsiveLevels: [1240, 1024, 778, 480],
                            visibilityLevels: [1240, 1024, 778, 480],
                            gridwidth: [1240, 1024, 778, 480],
                            gridheight: [868, 768, 960, 720],
                            lazyType: "none",
                            parallax: {
                                type: "mouse",
                                origo: "enterpoint",
                                speed: 400,
                                speedbg: 0,
                                speedls: 0,
                                levels: [5, 10, 15, 20, 25, 30, 35, 40, 45, 46, 47, 48, 49, 50, 51, 55],
                                disable_onmobile: "on"
                            },
                            shadow: 0,
                            spinner: "spinner0",
                            autoHeight: "off",
                            disableProgressBar: "on",
                            hideThumbsOnMobile: "off",
                            hideSliderAtLimit: 0,
                            hideCaptionAtLimit: 0,
                            hideAllCaptionAtLilmit: 0,
                            debugMode: !1,
                            fallbacks: {
                                simplifyAll: "off",
                                disableFocusListener: !1
                            }
                        })
                    }
                    /loaded|interactive|complete/.test(document.readyState) ? e() : document.addEventListener("DOMContentLoaded", e)
                }(), function() {
                    function e() {
                        void 0 === g && (g = jQuery), null == g("#rev_slider_15_1").revolution ? revslider_showDoubleJqueryError("#rev_slider_15_1") : g("#rev_slider_15_1").show().revolution({
                            sliderType: "hero",
                            jsFileLocation: "",
                            sliderLayout: "fullwidth",
                            dottedOverlay: "none",
                            delay: 9e3,
                            navigation: {},
                            viewPort: {
                                enable: !0,
                                outof: "wait",
                                visible_area: "100%",
                                presize: !1
                            },
                            responsiveLevels: [1240, 1024, 778, 480],
                            visibilityLevels: [1240, 1024, 778, 480],
                            gridwidth: [1240, 1024, 778, 480],
                            gridheight: [868, 768, 960, 720],
                            lazyType: "none",
                            parallax: {
                                type: "mouse",
                                origo: "enterpoint",
                                speed: 400,
                                speedbg: 0,
                                speedls: 0,
                                levels: [5, 10, 15, 20, 25, 30, 35, 40, 45, 46, 47, 48, 49, 50, 51, 55],
                                disable_onmobile: "on"
                            },
                            shadow: 0,
                            spinner: "spinner0",
                            autoHeight: "off",
                            disableProgressBar: "on",
                            hideThumbsOnMobile: "off",
                            hideSliderAtLimit: 0,
                            hideCaptionAtLimit: 0,
                            hideAllCaptionAtLilmit: 0,
                            debugMode: !1,
                            fallbacks: {
                                simplifyAll: "off",
                                disableFocusListener: !1
                            }
                        })
                    }
                    /loaded|interactive|complete/.test(document.readyState) ? e() : document.addEventListener("DOMContentLoaded", e)
                }(), function() {
                    function e() {
                        void 0 === g && (g = jQuery), null == g("#rev_slider_16_1").revolution ? revslider_showDoubleJqueryError("#rev_slider_16_1") : g("#rev_slider_16_1").show().revolution({
                            sliderType: "hero",
                            jsFileLocation: "",
                            sliderLayout: "fullwidth",
                            dottedOverlay: "none",
                            delay: 9e3,
                            navigation: {},
                            responsiveLevels: [1240, 1024, 778, 480],
                            visibilityLevels: [1240, 1024, 778, 480],
                            gridwidth: [1240, 1024, 778, 480],
                            gridheight: [868, 768, 960, 720],
                            lazyType: "none",
                            parallax: {
                                type: "mouse",
                                origo: "enterpoint",
                                speed: 400,
                                speedbg: 0,
                                speedls: 0,
                                levels: [5, 10, 15, 20, 25, 30, 35, 40, 45, 46, 47, 48, 49, 50, 51, 55],
                                disable_onmobile: "on"
                            },
                            shadow: 0,
                            spinner: "spinner0",
                            autoHeight: "off",
                            disableProgressBar: "on",
                            hideThumbsOnMobile: "off",
                            hideSliderAtLimit: 0,
                            hideCaptionAtLimit: 0,
                            hideAllCaptionAtLilmit: 0,
                            debugMode: !1,
                            fallbacks: {
                                simplifyAll: "off",
                                disableFocusListener: !1
                            }
                        })
                    }
                    /loaded|interactive|complete/.test(document.readyState) ? e() : document.addEventListener("DOMContentLoaded", e)
                }(), e(".service-boxed").length > 0 && (e(".service-boxed").on("mouseenter", function() {
                    e(this).hasClass("active") || e(this).addClass("active")
                }), e(".service-boxed").on("mouseleave", function(t) {
                    e(this).hasClass("active") && e(this).removeClass("active")
                })), e(".portfolio-testimonial-slider").length > 0) {
                var w = e(".portfolio-testimonial-slider");
                w.myOwl({
                    loop: !1,
                    dots: !0,
                    animateIn: "fadeIn",
                    animateOut: "fadeOut"
                }), w.on("mousewheel", ".owl-stage", function(e) {
                    e.deltaY > 0 ? w.trigger("next.owl") : w.trigger("prev.owl"), e.preventDefault()
                })
            }
            e(document).on("click", ".backtotop", function(t) {
                t.preventDefault(), e("body, html").stop().animate({
                    scrollTop: 0
                }, 1e3)
            })
        }), e(window).on("scroll", function() {
            e(".shuffle-letter-title-wraper").length > 0 && e(".shuffle-letter-title-wraper").each(function(t) {
                e(this).onScreen() && !e(this).hasClass("shuffle-title") && setTimeout(function() {
                    e(this).find(".shuufle-letter-title").shuffleLetters(), e(this).addClass("shuffle-title")
                }.bind(this), 400)
            })
        }), e(window).on("resize", function() {
            i(), o(), n()
        }), e("#xs-map").length > 0) {
        google.maps.event.addDomListener(window, "load", function() {
            var e = {
                    zoom: 11,
                    center: new google.maps.LatLng(40.67, -73.94),
                    styles: [{
                        featureType: "water",
                        elementType: "geometry",
                        stylers: [{
                            color: "#e9e9e9"
                        }, {
                            lightness: 17
                        }]
                    }, {
                        featureType: "landscape",
                        elementType: "geometry",
                        stylers: [{
                            color: "#f5f5f5"
                        }, {
                            lightness: 20
                        }]
                    }, {
                        featureType: "road.highway",
                        elementType: "geometry.fill",
                        stylers: [{
                            color: "#ffffff"
                        }, {
                            lightness: 17
                        }]
                    }, {
                        featureType: "road.highway",
                        elementType: "geometry.stroke",
                        stylers: [{
                            color: "#ffffff"
                        }, {
                            lightness: 29
                        }, {
                            weight: .2
                        }]
                    }, {
                        featureType: "road.arterial",
                        elementType: "geometry",
                        stylers: [{
                            color: "#ffffff"
                        }, {
                            lightness: 18
                        }]
                    }, {
                        featureType: "road.local",
                        elementType: "geometry",
                        stylers: [{
                            color: "#ffffff"
                        }, {
                            lightness: 16
                        }]
                    }, {
                        featureType: "poi",
                        elementType: "geometry",
                        stylers: [{
                            color: "#f5f5f5"
                        }, {
                            lightness: 21
                        }]
                    }, {
                        featureType: "poi.park",
                        elementType: "geometry",
                        stylers: [{
                            color: "#dedede"
                        }, {
                            lightness: 21
                        }]
                    }, {
                        elementType: "labels.text.stroke",
                        stylers: [{
                            visibility: "on"
                        }, {
                            color: "#ffffff"
                        }, {
                            lightness: 16
                        }]
                    }, {
                        elementType: "labels.text.fill",
                        stylers: [{
                            saturation: 36
                        }, {
                            color: "#333333"
                        }, {
                            lightness: 40
                        }]
                    }, {
                        elementType: "labels.icon",
                        stylers: [{
                            visibility: "off"
                        }]
                    }, {
                        featureType: "transit",
                        elementType: "geometry",
                        stylers: [{
                            color: "#f2f2f2"
                        }, {
                            lightness: 19
                        }]
                    }, {
                        featureType: "administrative",
                        elementType: "geometry.fill",
                        stylers: [{
                            color: "#fefefe"
                        }, {
                            lightness: 20
                        }]
                    }, {
                        featureType: "administrative",
                        elementType: "geometry.stroke",
                        stylers: [{
                            color: "#fefefe"
                        }, {
                            lightness: 17
                        }, {
                            weight: 1.2
                        }]
                    }]
                },
                t = document.getElementById("xs-map"),
                i = new google.maps.Map(t, e);
            new google.maps.Marker({
                position: new google.maps.LatLng(40.67, -73.94),
                icon: "assets/images/map-marker.png",
                map: i,
                title: "Agencyfi!"
            })
        })
    }
}(jQuery);