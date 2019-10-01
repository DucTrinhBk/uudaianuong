$(document).ready(function () {
    $('.mb-slide').owlCarousel({
        items: 1,
        nav: true,
        autoHeight: true,
        lazyLoad: true,
    });
    //document.getElementById("mobile-blogcategory-scroll").style.width = "456px";
    if (document.getElementById("mobile-ads-benle-scroll")) {
        var count = $("#mobile-ads-benle-total").val();
        document.getElementById("mobile-ads-benle-scroll").style.width = count * 176 + "px";
    }
    if (document.getElementById("mobile-adsyoutube-scroll")) {
        var count = $("#mobile-adsyoutube-total").val();
        document.getElementById("mobile-adsyoutube-scroll").style.width = count * 208 + "px";
    }
});