$(function () {
    loadTimeoutPartial('Home/MenuLeftMobile', { returnUrl: $("#mobile-return-url").val() }, 'menuleft');
    $(document).on('scroll', function () {
        if ($(window).scrollTop() > 200) {
            $('.smoothscroll-top').addClass('show');
            $('.croll-dropdown').removeClass('show');
        } else {
            $('.smoothscroll-top').removeClass('show');
            $('.croll-dropdown').addClass('show');
        }
    });
    //$('.smoothscroll-top').on('click', scrollToTop);
    $('.smoothscroll-top, .scroll-top-inner').on('click', function () {
        document.body.scrollTop = 0;
        document.documentElement.scrollTop = 0;
    });
    // load hiệu ứng kích menu

    $(".menuleft-blocker").on("click", function () {
        document.getElementById("menuleft").style.display = "none";
        document.body.style.overflowY = "auto";
        $(".menuleft-blocker").css({ "margin-left": "0", "display": "none" });
    });
    
    //** Bỏ thu phóng màn hình iphone
    document.documentElement.addEventListener('touchstart', function (event) {
        if (event.touches.length > 1) {
            event.preventDefault();
        }
    }, false);
});

function openMenu() {
    document.getElementById("menuleft").style.display = "block";
    document.body.style.overflowY = "hidden";
    $(".menuleft-blocker").css({ "margin-left": "240px", "display": "block" });
}
function closeMenu() {
    document.getElementById("menuleft").style.display = "none";
    document.body.style.overflowY = "auto";
    $(".menuleft-blocker").css({ "margin-left": "0", "display": "none" });
}
// Mở popup search
function openNav() {
    document.getElementById("myNav").style.height = "100%";
    $('body').css('overflow', 'hidden');
    // scrll to top
    scrollToTop();
    searchWebsite();
}
function scrollToTop() {
    verticalOffset = typeof (verticalOffset) != 'undefined' ? verticalOffset : 0;
    element = $('body');
    offset = element.offset();
    offsetTop = offset.top;
    $('html, body').animate({ scrollTop: offsetTop }, 600, 'linear').animate({ scrollTop: 25 }, 200).animate({ scrollTop: 0 }, 150).animate({ scrollTop: 0 }, 50);
}
// Đóng popup search
function closeNav() {
    document.getElementById("myNav").style.height = "0%";
    $('body').css('overflow', 'auto');
}

// Tìm kiếm nhanh ở mobile
function searchWebsite() {
   
    $(".img-search").show();
    $("#result-mobile").removeClass("custom-khampha");
    var keySearch = $("#textSearch").val();
    
    $("#result-mobile").addClass("custom-khampha");
    linkUrl = getHost() + "Search/SearchBlogMobileHeader";
    $.ajax({
        url: linkUrl,
        data: { keySearch: keySearch},
        dataType: 'html',
        traditional: true,
        type: 'POST',
        success: function (content) {
            document.getElementById("result-mobile").innerHTML = content;
            $("#result-mobile").show();
        }
    });
}

// Khi click nút tìm kiếm
function searchClick() {
    var keySearch = $("#textSearch").val();
    var linkUrl = getHost() + "tim-kiem?search=" + keySearch;
    window.location.href = linkUrl
}
function typeSearchSelected() {
    searchWebsite();
}
// Load partial với khoảng thời gian timeout
function loadTimeoutPartial(url, params, element) {
    var linkUrl = getHost() + url;
    setTimeout(function () {
        $.ajax({
            url: linkUrl,
            data: params,
            dataType: 'html',
            traditional: true,
            type: 'POST',
            success: function (content) {
                if (document.getElementById(element)) {
                    document.getElementById(element).innerHTML = content;
                    loadLeftMenu(url);
                }
            }
        });
    }, 10);
}

// Lấy host hiện tại của website
function getHost() {
    var host = window.location.protocol + '//' + window.location.hostname + (window.location.port ? ':' + window.location.port : '') + '/';
    return host;
}

// Các thuộc tính của lazy load.
function option() {
    var op = {
        load: load,
        threshold: 278,
        inverval: 50
    };
    return op
}
// Fadein khi load ảnh nếu cần
function load(img) {
    img.fadeOut(0, function () {
        img.fadeIn(1000);
    });
}

//Load thu vien facebook
function loadTimeoutFacebook(isDeveloper) {
    setTimeout(function () {
        var linkUrl = getHost() + "Assets/js/fb-sdk.js";
        window.fbAsyncInit = function () {
            FB.init({
                appId: '562311624270167',
                autoLogAppEvents: true,
                xfbml: true,
                version: 'v3.2'
            });
        };
        (function (d, s, id) {
            var js, fjs = d.getElementsByTagName(s)[0];
            if (d.getElementById(id)) { return; }
            js = d.createElement(s); js.id = id;
            js.src = linkUrl;
            fjs.parentNode.insertBefore(js, fjs);
        }(document, 'script', 'facebook-jssdk'));
    }, 50);
}

function loadLeftMenu(url) {
    if (url == "Home/MenuLeftMobile") {
        var navsub = $(".custom-list-group");
        var i;

        for (i = 0; i < navsub.length; i++) {
            navsub[i].addEventListener("click", function () {

                this.classList.toggle("active");
                var panel = this.nextElementSibling;
                if (panel.style.display === "block") {
                    panel.style.display = "none";
                } else {
                    panel.style.display = "block";
                }
            });
        }
    }
}

// Auto scroll đến menu hiện tại
$(document).ready(function () {
    var position = $(".active").index("li");
    var scrollWidth = 0;
    $(".pos").each(function (index) {
        if (index < position && position < $(".pos").length) {
            scrollWidth += $(this).outerWidth(true);
        }
    });
    $('.ul-scroll').animate({ scrollLeft: scrollWidth }, 800);
});

// Slide show
$(document).ready(function () {
    var sw = document.getElementsByClassName('swiper-container');
    if (sw != null && sw.length > 0) {
        var swiper = new Swiper('.swiper-container', {
            pagination: {
                el: '.swiper-pagination',
            },
        });
    }
});

// Menu top menu
$(document).ready(function () {
    var prevScrollpos = window.pageYOffset;
    window.onscroll = function () {
        var currentScrollPos = window.pageYOffset;
        if (prevScrollpos > currentScrollPos) {
            $("#navfixtop").slideDown(200);
        } else if (currentScrollPos > 70) {
            $("#navfixtop").slideUp(200);
        }
        prevScrollpos = currentScrollPos;
    }
});
