//导航滚动
$(window).scroll(function(){
    if($(window).scrollTop() >= 30){
        $('.header').addClass('fixed');
    }else{
        $('.heder').removeClass('fixed');
    }
});
/*导航栏响应式*/
function addListener(element, type, callback) {
    if (element.addEventListener) {
        element.addEventListener(type, callback);
    } else if (element.attachEvent) {
        element.attachEvent('on' + type, callback);
    }
}

addListener(document, 'DOMContentLoaded', function () {

    var mq = window.matchMedia("(max-width: 760px)");
    if (mq.matches) {
        document.getElementById("menu_list").classList.add("hidden");
    }

    addListener(document.getElementById("menu_button"), 'click', function () {
        document.getElementById("menu_list").classList.toggle("hidden");
    });

    //导航条下拉
    addListener(window, 'resize', function () {
        var width = window.innerWidth ||
            document.documentElement.clientWidth ||
            document.body.clientWidth;

        if (width > 760) {
            document.getElementById("menu_list").classList.remove("hidden");
        } else {
            document.getElementById("menu_list").classList.add("hidden");
        }
    });
});
//导航下拉
$(document).ready(function () {
    $('#menu_list li').hover(function () {
        $(this).find('.sub-menu').css('display', 'block');
    }, function () {
        $(this).find('.sub-menu').css('display', 'none');
    });
});


//轮播图
! function (a) {
    var b = function () {
        var b = this,
            c = 0,
            d = !1,
            e = 0,
            f = 0,
            g = !1;
        b.settings = {
            arrows: !0,
            arrows_constraint: !1,
            auto_flick: !0,
            auto_flick_delay: 10,
            block_text: !0,
            dot_navigation: !0,
            dot_alignment: "center",
            flick_animation: "transition-slide",
            flick_position: 1,
            inner_width: !1,
            theme: "light"
        }, b.init = function (f, h) {
            b.settings = a.extend(b.settings, h), d = f, d.addClass("flickerplate"), d.find("ul:first").addClass("flicks"), d.find("li:first").addClass("first-flick"), c = b.settings.flick_position - 1, $data_flick_position = d.data("flick-position"), void 0 != $data_flick_position && (c = $data_flick_position - 1), d.attr("data-flick-position", c);
            var i = d.data("flick-animation");
            b.settings.flick_animation = b.settings.flick_animation || i, d.addClass("animate-" + b.settings.flick_animation);
            var j = d.data("theme"),
                k = d.find(".first-flick").data("theme");
            j && j.length > 0 ? (b.settings.theme = j, d.addClass(k && k.length > 0 ? "flicker-theme-" + k : "flicker-theme-" + j)) : d.addClass("flicker-theme-" + b.settings.theme);
            var l = d.data("block-text");
            if (void 0 != l && 0 == l && (b.settings.block_text = !1), d.find("ul.flicks > li").each(function () {
                e++ , a(this).wrapInner('<div class="flick-inner"><div class="flick-content"></div></div>'), $flick_block_text = a(this).data("block-text"), void 0 != $flick_block_text ? 1 == $flick_block_text && (a(this).find(".flick-title").wrapInner('<span class="flick-block-text"></span>'), a(this).find(".flick-sub-text").wrapInner('<span class="flick-block-text"></span>')) : 1 == b.settings.block_text && (a(this).find(".flick-title").wrapInner('<span class="flick-block-text"></span>'), a(this).find(".flick-sub-text").wrapInner('<span class="flick-block-text"></span>'));
                var c = a(this).data("background");
                c && c.length > 0 && a(this).css("background-image", "url(" + c + ")"), $flick_theme = a(this).data("theme"), $flick_theme && $flick_theme.length > 0 && a(this).addClass("flick-theme-" + $flick_theme)
            }), "scroller-slide" != b.settings.flick_animation) {
                $data_arrow_navigation = d.data("arrows"), void 0 != $data_arrow_navigation ? 0 != $data_arrow_navigation && b.create_arrow_navigation() : 1 == b.settings.arrows && b.create_arrow_navigation(), $data_dot_navigation = d.data("dot-navigation"), $data_dot_alignment = d.data("dot-alignment");
                var m = b.settings.dot_alignment;
                void 0 != $data_dot_alignment && ("left" == $data_dot_alignment || "right" == $data_dot_alignment) && (m = $data_dot_alignment), void 0 != $data_dot_navigation ? 0 != $data_dot_navigation && b.create_dot_navigation(m) : 1 == b.settings.dot_navigation && b.create_dot_navigation(m), $flick_delay = 1e3 * b.settings.auto_flick_delay, $data_auto_flick = d.data("auto-flick"), $data_auto_flick_delay = d.data("auto-flick-delay"), $data_auto_flick_delay && ($flick_delay = 1e3 * $data_auto_flick_delay), void 0 != $data_auto_flick && (b.settings.auto_flick = 0 != $data_auto_flick), b.auto_flick_start(), b.flick_flicker(), "jquery-slide" != b.settings.flick_animation && d.find("ul.flicks").bind("transitionend MSTransitionEnd webkitTransitionEnd oTransitionEnd", function () {
                    g = !1
                })
            }
            b.move_flicker(c)
        }, b.flick_flicker = function () {
            Modernizr.touch && d.on("drag", function (a) {
                0 == g && "horizontal" == a.orientation && (a.preventDefault(), 1 == a.direction ? --c < 0 ? c = 0 : (g = !0, b.move_flicker(c)) : ++c == e ? c = e - 1 : (g = !0, b.move_flicker(c)))
            })
        }, b.create_arrow_navigation = function () {
            $arrow_nav_html = '<div class="arrow-navigation left"><div class="arrow"></div></div>', $arrow_nav_html += '<div class="arrow-navigation right"><div class="arrow"></div></div>', d.prepend($arrow_nav_html), a(".arrow-navigation").mouseover(function () {
                a(this).toggleClass("hover")
            }), a(".arrow-navigation").mouseout(function () {
                a(this).toggleClass("hover")
            }), $data_arrows_constraint = d.data("arrows-constraint"), void 0 != $data_arrows_constraint && (b.settings.arrows_constraint = $data_arrows_constraint), d.find(".arrow-navigation").on("click", function () {
                a(this).hasClass("right") ? ++c == e && (c = b.settings.arrows_constraint ? e - 1 : 0) : --c < 0 && (c = b.settings.arrows_constraint ? 0 : e - 1), b.move_flicker(c)
            })
        }, b.create_dot_navigation = function (c) {
            for ($dot_nav_html = '<div class="dot-navigation ' + c + '"><ul>'; e > f;) f++ , $dot_nav_html += 1 == f ? '<li><div class="dot active"></div></li>' : '<li><div class="dot"></div></li>';
            $dot_nav_html += "</ul></div>", d.prepend($dot_nav_html), d.find(".dot-navigation li").on("click", function () {
                b.move_flicker(a(this).index())
            })
        }, b.auto_flick_start = function () {
            1 == b.settings.auto_flick && (b.flicker_auto = setInterval(b.auto_flick, $flick_delay))
        }, b.auto_flick = function () {
            ++c == e && (c = 0), b.move_flicker(c)
        }, b.auto_flick_stop = function () {
            b.flicker_auto = clearInterval(b.flicker_auto)
        }, b.auto_flick_reset = function () {
            b.auto_flick_stop(), b.auto_flick_start()
        }, b.move_flicker = function (a) {
            c = a, "transform-slide" == b.settings.flick_animation ? d.find("ul.flicks").attr({
                style: "-webkit-transform:translate3d(-" + c + "%, 0, 0);-o-transform:translate3d(-" + c + "%, 0, 0);-moz-transform:translate3d(-" + c + "%, 0, 0);transform:translate3d(-" + c + "%, 0, 0)"
            }) : "transition-slide" == b.settings.flick_animation ? d.find("ul.flicks").attr({
                style: "left:-" + c + "00%;"
            }) : "jquery-slide" == b.settings.flick_animation && d.find("ul.flicks").animate({
                left: "-" + c + "00%"
            }, function () {
                g = !1
            }), $crt_flick = d.find("ul.flicks li:eq(" + c + ")"), d.removeClass("flicker-theme-light").removeClass("flicker-theme-dark"), d.addClass($crt_flick.hasClass("flick-theme-dark") ? "flicker-theme-dark" : $crt_flick.hasClass("flick-theme-light") ? "flicker-theme-light" : "flicker-theme-" + b.settings.theme), d.find(".dot-navigation .dot.active").removeClass("active"), d.find(".dot:eq(" + c + ")").addClass("active"), d.attr("data-flick-position", c), b.auto_flick_reset()
        }
    };
    a.fn.flicker = function (c) {
        var d = this.length;
        return this.each(function (e) {
            var f = a(this),
                g = "flickerplate" + (d > 1 ? "-" + ++e : ""),
                h = (new b).init(f, c);
            f.data(g, h).data("key", g)
        })
    }
}(jQuery);

$(document).ready(function(){
    $(".menu li").click(function(){
      


    });
});

/* 二级页滑动展示 */
$(function(){
    //隐藏p
    $(".menu p").hide();
    $(".menu li").click(function(){
        //给dd标签移除class，点击回去
        $(this).parent().find('p').removeClass(".sub-menu");
        //点击返回被选元素的属性值
        $(".menu li img").attr("src","img/select_x101.png");
        $(this).parent().find('img').attr("src","img/select_xl.png");
        //滑动方式隐藏
        $(".sub-menu").slideUp();
        //滑动效果展示
        $(this).parent().find('p').slideToggle();
        $(this).parent().find('p').addClass(".sub-menu"); 
        
    });
});

/*二级页*/
$(document).ready(function(){
$(".click").click(function(){
    $(".click-p").slideToggle("slow");
  });
});