$(function () {
    $(document).on("click", function (e) {
        // Đóng thanh search khi click ra ngoài
        if ($(e.target).closest("#textSearch").length <= 0
            && $(e.target).closest("#result").length <= 0) {
            if ($("#result").is(":visible")) {
                toggleSearch();
            }
        }
    });

    //ve top
    $(document).on('scroll', function () {
        if ($(window).scrollTop() > 500) {
            $('.smoothscroll-top').addClass('show');
            $('.croll-dropdown').removeClass('show');
        } else {
            $('.smoothscroll-top').removeClass('show');
            $('.croll-dropdown').addClass('show');
        }
    });
    $('.smoothscroll-top').on('click', scrollToTop);
    //menutop
    $("#navfixtop").affix({
        offset: {
            top: 60
        }
    });
});

function toggleSearch() {
    $("#result").toggle();
}

function searchWebsite() {
    $(".img-search").show();
    $("#result").removeClass("custom-khampha");
    var keySearch = $("#textSearch").val();
    var type = $("#slTypeSearch option:selected").val();
    var typeName = $("#slTypeSearch option:selected").html();
   // var linkUrl = getHost() + "Search/SearchHeader";
    $("#result").addClass("custom-khampha");
    linkUrl = "http://210.211.124.1:5000/Api/QSearch";
    type = 2;
    $.ajax({
        url: linkUrl,
        data: { keySearch: keySearch},
        dataType: 'json',
        traditional: true,
        type: 'GET',
        success: function (content) {
            document.getElementById("result").innerHTML = getSearchBlogHeader(content);
            $("#result").show(), $(".img-search").hide();
        }
    });
}
function getSearchBlogHeader(data){
    if(data.Keys.length == 0 & data.Articles.length == 0){
        return ''
    }
    return $('<div/>')
            .append(
                $('<div/>')
                .addClass("wappersearch")
            .append(
                $('<div/>')
                    .addClass('row')
                    .append(
                        $('<div/>')
                            .addClass('col-md-3')
                            .append(
                                $('<h4/>')
                                .text('Từ khóa')
                            ),
                            $('<div/>')
                            .addClass('col-md-9')
                            .append(
                                $('<div/>')
                                    .attr('id','get-tag-search')
                                    .append(
                                        data.Keys.map(item=>
                                            $('<a/>')
                                                .attr('target','_blank')
                                                .attr('href',getHost()+'tim-kiem?search='+item.Name.replace(" ",'%20'))
                                                .addClass('pasgo-text-search')
                                                .text(item.Name)
                                        
                                        )
                                    )
                            )
                    ),
                    $('<div/>')
                .addClass('row')
                .append(
                    $('<div/>')
                            .addClass('col-md-3')
                            .append(
                                $('<h4/>')
                                .text('Bài viết')
                            ),
                            $('<div/>')
                            .addClass('col-md-9')
                            .append(
                                $('<div/>')
                                    .attr('id','get-name-restaurant')
                                    .append(
                                        data.Articles.map(item=>
                                            $('<a/>')
                                                .attr('target','_blank')
                                                .attr('href',getHost()+item.TieuDeAlias + "-" + item.Id)
                                                .append(
                                                    $('<img>')
                                                        .addClass("img-circle")
                                                        .attr('src',item.PhotoUrl)
                                                        .attr('alt',item.TieuDe)
                                                    ,$('<p/>')
                                                        .addClass('text-name')
                                                        .text(item.TieuDe)
                                                    ,$('<span/>')
                                                        .addClass('text-address')
                                                        .text(item.NgayTao)
                                                )
                                        
                                        )
                                    )
                            )
                )
            )
            )     
            .html();
}
function typeSearchSelected() {
    searchWebsite();
}

function scrollToTop() {
    verticalOffset = typeof (verticalOffset) !== 'undefined' ? verticalOffset : 0;
    element = $('body');
    offset = element.offset();
    offsetTop = offset.top;
    $('html, body').animate({ scrollTop: offsetTop }, 600, 'linear').animate({ scrollTop: 25 }, 200).animate({ scrollTop: 0 }, 150).animate({ scrollTop: 0 }, 50);
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
        //threshold: 278,
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
        console.log(linkUrl);
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
