$(function () {
    $(document).click(function (e) {
        var container = $("#result-search-blog");
        if (!container.is(e.target) && container.has(e.target).length === 0) {
            container.hide();
        }
    });
})
function searchBlog() {
    var keySearch = $("#key-result-blog").val();
    var linkUrl = getHost() + "Blog/SearchBlog";
    $.ajax({
        url: linkUrl,
        data: { keySearch: keySearch },
        dataType: 'html',
        traditional: true,
        type: 'POST',
        success: function (content) {
            document.getElementById("result-search-blog").innerHTML = content;
            $("#result-search-blog").show()
        }
    });
}

