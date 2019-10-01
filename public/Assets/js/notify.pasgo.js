var key_storage_popupTangChuyenDoi = 'Key_Storage_Popup_TangChuyenDoi_';
var time_delay_popupMobile = isDeveloper ? 200 : 20000;
var time_delay_popupDesktop = isDeveloper ? 300 : 30000;

// Detail mobile

function notifyLoadmore() {
        // popup tăng chuyển đổi  
        var currentDate = new Date();
        var currentYear = currentDate.getFullYear();
        var currentMonth = currentDate.getMonth();
        var currentDay = currentDate.getDate();
        var tinhId = $('#footer').data('provinceId'); //lấy tỉnh hiện tại maclick

        key_storage_popupTangChuyenDoi = key_storage_popupTangChuyenDoi + tinhId;

        if (typeof (Storage) !== "undefined") {
            var getItem = getStorageItem(key_storage_popupTangChuyenDoi);
            // nếu không tồn tại những url bỏ qua, thì mới hiện thị popup
            if (!checkUrlExist()) {
                var ngayBatDau = $('#data-notify').data('ngaybatdau');
                var ngayKetThuc = $('#data-notify').data('ngayketthuc');

                var gioBatDauSang = $('#data-notify').data('giobatdausang');
                var gioKetThucSang = $('#data-notify').data('gioketthucsang');
                var gioBatDauChieu = $('#data-notify').data('giobatdauchieu');
                var gioKetThucChieu = $('#data-notify').data('gioketthucchieu');
               
                //tạo mới lại date
                var ngayHienTai = new Date(currentYear, currentMonth, currentDay, 00, 00, 00);

                ngayBatDau = compareDate(ngayBatDau);
                ngayKetThuc = compareDate(ngayKetThuc);
                gioBatDauSang = compareDate(gioBatDauSang);
                gioKetThucSang = compareDate(gioKetThucSang);
                gioBatDauChieu = compareDate(gioBatDauChieu);
                gioKetThucChieu = compareDate(gioKetThucChieu);

                //hiển thị popup theo ngày và thời gian.

                if ((ngayHienTai >= ngayBatDau && ngayHienTai <= ngayKetThuc) || isDeveloper === true) {
                    if ((currentDate >= gioBatDauSang && currentDate <= gioKetThucSang) || (currentDate >= gioBatDauChieu && currentDate <= gioKetThucChieu)) {
                        //display
                        console.log("ok");
                        displayAdvertising(getItem, ngayHienTai.toString());
                    }
                }
            }
        }
}
var isMobile = {
    Android: function () {
        return navigator.userAgent.match(/Android/i);
    },
    BlackBerry: function () {
        return navigator.userAgent.match(/BlackBerry/i);
    },
    iOS: function () {
        return navigator.userAgent.match(/iPhone|iPad|iPod/i);
    },
    Opera: function () {
        return navigator.userAgent.match(/Opera Mini/i);
    },
    Windows: function () {
        return navigator.userAgent.match(/IEMobile/i) || navigator.userAgent.match(/WPDesktop/i);
    },
    any: function () {
        return (isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Opera() || isMobile.Windows());
    },
    anyMobile: function () {
        return (isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS());
    }
};

function checkUrlExist() {
    var strBoQua1 = "nha-hang";
    var strBoQua2 = "giam-gia-nhieu-nhat";
    var strBoQua3 = "dat-cho-nhieu-nhat";
    var strBoQua4 = "Account/Login";
    var strBoQua5 = "dang-nhap";
    var strBoQua6 = "dang-ky";

    var pathName = window.location.pathname;
    if (pathName.indexOf(strBoQua1) > -1
        || pathName.indexOf(strBoQua2) > -1
        || pathName.indexOf(strBoQua3) > -1
        || pathName.indexOf(strBoQua4) > -1
        || pathName.indexOf(strBoQua5) > -1
        || pathName.indexOf(strBoQua6) > -1) {
        //console.log('tồn tại1->bỏ qua')
        return true;
    }
    return false;
}

//Display advertising
function displayAdvertising(getItem, strDate) {
    // nếu mà ngày hôm nay chưa hiện thị popup thì cho nó hiện thị lên
    if ((getItem !== strDate) || isDeveloper) {
        // show popup  
        //var maclick = $('#data-notify').data('maclick') + '[Display]';

        setTimeout(function () {
            $("#notifypasgo").modal("show");
            setStorageItem(key_storage_popupTangChuyenDoi, strDate);
           
            //ga("send", "event", "Popup-Tracking", maclick); 
        }, isMobile.anyMobile() ? time_delay_popupMobile : time_delay_popupDesktop);

    } else {
        setStorageItem(key_storage_popupTangChuyenDoi, strDate);
    }
}

// storage
function setStorageItem(key, arr) {
    if (typeof (Storage) !== "undefined") {
        window.localStorage.setItem(key, arr);
    }
}
function getStorageItem(key) {
    var result = '';
    if (typeof (Storage) !== "undefined") {
        result = window.localStorage.getItem(key);
    }
    return result;
}
function removeStorageItem(key) {
    window.localStorage.removeItem(key);
}
function myArrObject(id, time) {
    this.id = id;
    this.time = time;
}
// end storage
// console.log('giờ: ' + yyyy + '|' + mm + '|' + dd + '|' + hh + '|' + phut + '|' + ss);
// khởi tạo datetime từ số nguyên
function compareDate(str){
    // str format  dd/mm/yyyy. 
    if (!str) {
        return 0;
    }
    var yyyy   = parseInt(str.substring(0,4));
    var mm  = parseInt(str.substring(5,7));
    var dd = parseInt(str.substring(8, 10));
    var hh = parseInt(str.substring(11, 13));
    var phut = parseInt(str.substring(14, 16));
    var ss = parseInt(str.substring(17, 19));
    var date = new Date(yyyy, mm-1, dd, hh, phut, ss);
    return date;
}