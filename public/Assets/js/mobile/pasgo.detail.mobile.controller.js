$(document).ready(function () {
    loadTimeoutFacebook(isDeveloper);
    $("#custom-submenu").affix({
        offset: {
            top: 480
        }
    });
    if (document.getElementById("mobile-menu-scroll")) {
        var count2 = $("#mobile-menu-total").val();
        document.getElementById("mobile-menu-scroll").style.width = count2 * 328 + "px";
    }
    if (document.getElementById("mobile-detailrelated-scroll")) {
        var count = $("#mobile-detailrelated-total").val();
        document.getElementById("mobile-detailrelated-scroll").style.width = count * 176 + "px";
        loadRestaurantRating();
    }
    if (document.getElementById("mobile-detailuytin-scroll")) {
        var count1 = $("#mobile-detailuytin-total").val();
        document.getElementById("mobile-detailuytin-scroll").style.width = count1 * 176 + "px";
        loadRestaurantRating();
    }
    if (document.getElementById("mobile-nhahangdaxem-scroll")) {
        var count = $("#mobile-nhahangdaxem-total").val();
        document.getElementById("mobile-nhahangdaxem-scroll").style.width = count * 176 + "px";
        loadRestaurantRating();
    }
    var boxxemthem = $(".btn-xemthem");
    var boxthugon = $(".btn-thugon");
    boxxemthem.click(function () {
        boxxemthem.hide();
        boxthugon.show();
    });
    boxthugon.click(function () {
        boxthugon.hide();
        boxxemthem.show();
    });
})