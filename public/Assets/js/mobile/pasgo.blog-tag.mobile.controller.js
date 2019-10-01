$(document).ready(function () {
    if (document.getElementById("mobile-adsyoutube-scroll")) {
        var count = $("#mobile-adsyoutube-total").val();
        document.getElementById("mobile-adsyoutube-scroll").style.width = count * 208 + "px";
    }
});