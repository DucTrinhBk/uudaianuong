$(document).ready(function () {
    //document.getElementById("mobile-blogcategory-scroll").style.width = "456px";
    if (document.getElementById("mobile-adsyoutube-scroll")) {
        var count = $("#mobile-adsyoutube-total").val();
        document.getElementById("mobile-adsyoutube-scroll").style.width = count * 208 + "px";
    }
});