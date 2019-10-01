import React, { Component } from 'react';
class LoadingLayout extends Component {
    state = {  }
    render() { 
        return ( 
        <div className='container center-content'>
            <img src='Assets/Images/gif/load-page.gif' alt='load-data'/>
            <p>Đang tải dữ liệu,xin chờ trong giây lát...</p>
        </div> );
    }
}
 
export default LoadingLayout;