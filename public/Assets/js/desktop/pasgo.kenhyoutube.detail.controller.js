$(document).ready(function () {
    $('#checkin-date-desktop').datetimepicker({
        language: 'vn',
        weekStart: 1,
        todayBtn: 1,
        autoclose: 1,
        todayHighlight: 1,
        startView: 'month',
        minView: 'month',
        forceParse: 0,
        startDate: new Date()
    });
    // Set giá trị mặc định cho ngày đặt chỗ
    setNgayDenDesktop(new Date());
    setGioDenDesktop(new Date());
    
});

