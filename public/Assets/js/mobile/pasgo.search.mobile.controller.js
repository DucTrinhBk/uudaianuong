$(document).ready(function () {
    if (document.getElementById("mobile-nhahangdaxem-scroll")) {
        var count = $("#mobile-nhahangdaxem-total").val();
        document.getElementById("mobile-nhahangdaxem-scroll").style.width = count * 176 + "px";
        loadRestaurantRating();
    }
});