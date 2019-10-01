import React, { Component } from 'react';
class NotFound extends Component {
    UNSAFE_componentWillMount(){
        import ('../../css/common.desktop.min.css');
        import ('../../css/chat.client.desktop.css');
        import ('../../css/swiper.min.css');
        import('../../css/blog.update.index.desktop.min.css');
    }
    render() { 
        return ( 
            <div class="container">
    <section class="wapper mt-5 pt-4">
        <div class="wapcontent">
            <div class="row">
                <div class="error-header">
                    <h1>Rất tiếc, Địa chỉ Url không hợp lệ.</h1>
                    <hr />
                </div>
                {/* <div class="error-content">
                    <div class="error-content-tag">
                        <a href="https://pasgo.vn">Ẩm thực</a>&nbsp;&nbsp;<span style="color: #1577aa;">|</span>&nbsp;&nbsp;
                        <a href="http://taxisanbay.pasgo.vn" target="_blank" rel="nofollow">Taxi sân bay</a>&nbsp;&nbsp;<span style="color: #1577aa;">|</span>&nbsp;&nbsp;
                        <a href="/">Blog</a>&nbsp;&nbsp;<span style="color: #1577aa;">|</span>&nbsp;&nbsp;
                        <a href="https://pasgo.vn/huong-dan">Hướng dẫn</a>&nbsp;&nbsp;<span style="color: #1577aa;">|</span>&nbsp;&nbsp;
                    </div>
                    <hr />
                </div> */}
                <div class="error-footer">
                    {/* @if (Global.IsShowError())
                    {
                        <span>@Model.Exception.ToString()</span>
                        <hr />
                    } */}
                </div>
            </div>
        </div>
    </section>
    <img class="row col-md-12" src="Assets/Images/not_found.jpg" />
</div>
         );
    }
}
 
export default NotFound;