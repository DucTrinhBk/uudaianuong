$(function () {
    var maQuocGia = "+84";
    $(".m-setday").text($("#txtNgayDen").find(':selected').data("setday"));
    $("#txtNgayDen").change(function () {
        $(".m-setday").text($(this).find(':selected').data("setday"));
    });
    setGioDenMobile(new Date());

    // Validate thông tin người dùng
    $("#btn-booking-mobile").click(function (e) {
        var linkUrl = getHost() + "Booking/ValidateReserve";
        var isLogin = $("#txtIsLogin").val();
        if (!isValidPhoneNumber($("#txtUserPhone").val())) {
            setMessageOnCheckin("Số điện thoại không hợp lệ!"), $("#txt-validate").show();
            return;
        }
        var p = {
            articleId: $("#txtArticleId").val(),
            soNguoiDen: $("#txtSoNguoiLon").val(),
            soTreEm: $("#txtSoTreEm").val(),
            ngayDen: $("#txtNgayDen").val(),
            gioDen: $("#txtGioDen").val(),
            currentUrl: window.location.href.toString(),
            maQuocGia: maQuocGia,
            sdt: $("#txtUserPhone").val(),
            email: $("#txtUserEmail").val(),
            name: $("#txtUserName").val()
        };
        $.ajax({
            type: "POST",
            url: linkUrl,
            data: JSON.stringify(p),
            dataType: "json",
            contentType: "application/json; charset=utf-8",
            success: function (e) {
                switch (e.Type) {
                    case 1:
                        showAlertPopup(e.TieuDe, e.Message);
                        break;
                    case 2:
                        setMessageOnCheckin(e.Message), $("#txt-validate").show();
                        break;
                    case 3:
                        showComfirmPopup(e.Message, p), $("#txt-validate").hide();
                }
            }, error: function () {
                showAlertPopup("Đặt chỗ không thành công", "Rất tiếc bạn đã đặt chỗ không thành công.")
            }
        });
    });

    //check phone number
    function isValidPhoneNumber(phone) {
        var phoneRe = /(03|05|07|09|08|01[2|6|8|9])+([0-9]{8})\b/;
        var SDT = phone.replace('+84', '0');
        var digits = SDT.replace(/\D/g, "");
        if (phoneRe.test(digits)) {
            return true;
        }
        else {
            return false;
        }
    }
    
    $("#btn-confirm-ok").click(function (e) {
        $("#m-confirmmodal").modal("hide");
        var linkUrl = getHost() + "Booking/AddCheckIn";
        var p = {
            articleId: $("#txtArticleId").val(),
            soNguoiDen: $("#txtSoNguoiLon").val(),
            soTreEm: $("#txtSoTreEm").val(),
            ngayDen: $("#txtNgayDen").val(),
            gioDen: $("#txtGioDen").val(),
            ghiChu: $("#c-ghichu").val(),
            loaiCheckin: $("#txtLoaiDatChoMB").val(),//-- 1 là đặt chỗ bài BR -- 6 đặt chỗ qua video
            maQuocGia: maQuocGia,
            sdt: $("#txtUserPhone").val(),
            email: $("#txtUserEmail").val(),
            name: $("#txtUserName").val()
        };
        $.ajax({
            type: "POST",
            url: linkUrl,
            data: JSON.stringify(p),
            dataType: "json",
            contentType: "application/json; charset=utf-8",
            success: function (e) {
                showAlertPopup(e.TieuDe, e.Message)
            },
            error: function () {
                showAlertPopup("Đặt chỗ không thành công", "Rất tiếc bạn đã đặt chỗ không thành công.")
            }
        })
    });
});
function showAlertPopup(tieuDe, messsage) {
    if (tieuDe.length == 0) {
        tieuDe = "THÔNG BÁO";
    }
    $("#tvTitle").html(tieuDe);
    $("#tvBody").html(messsage);
    $("#m-alert-booking").modal("show");
}
function setMessageOnCheckin(e) {
    $("#txt-validate").html(e)
}
function showComfirmPopup() {
    $("#c-tenchinhanh").html($("#txtTenChiNhanh").val());
    $("#c-tenkhachhang").html($("#txtUserName").val());
    $("#c-ngayden").val($("#txtNgayDen").val());
    $("#c-gioden").val($("#txtGioDen").val());
    $("#c-songuoilon").val($("#txtSoNguoiLon").val());
    $("#c-sotreem").val($("#txtSoTreEm").val());
    $("#c-ghichu").val($("#txtGhiChu").val());
    $("#c-sodienthoai").val($("#txtUserPhone").val());
    $("#c-email").val($("#txtUserEmail").val());
    $("#m-confirmmodal").modal("show");
}
// Set giá trị cho giờ đến
function setGioDenMobile(date) {
    var hour = date.getHours();
    var minute = date.getMinutes();
    if (minute < 30) {
        minute = 30;
    } else {
        minute = 0;
        hour = hour + 1;
    }
    var strTime = (hour < 10 ? "0" : "") + hour + ":" + (minute < 10 ? "0" : "") + minute;
    $("#txtGioDen").val(strTime);
}
// Lấy host hiện tại của website
function getHost() {
    var host = window.location.protocol + '//' + window.location.hostname + (window.location.port ? ':' + window.location.port : '') + '/';
    return host;
}
