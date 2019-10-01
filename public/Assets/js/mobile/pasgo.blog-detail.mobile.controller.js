$(document).ready(function () {
    loadTimeoutFacebook(isDeveloper);
    //document.getElementById("mobile-blogcategory-scroll").style.width = "456px";
    if (document.getElementById("mobile-blogrelated-scroll")) {
        var count = $("#mobile-blogrelated-total").val();
        document.getElementById("mobile-blogrelated-scroll").style.width = count * 208 + "px";
    }
    if (document.getElementById("mobile-adsyoutube-scroll")) {
        var count = $("#mobile-adsyoutube-total").val();
        document.getElementById("mobile-adsyoutube-scroll").style.width = count * 208 + "px";
    }
});