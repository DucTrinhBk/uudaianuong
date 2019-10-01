import React, { Component } from 'react';
import getMenus from '../../actions/menu_action';
import {connect} from 'react-redux';
import {getUrl} from '../../utils/DataConfig';
class MainFooter extends Component {
    render() { 
        return ( 
            <footer id="footer" className="lazyload lazypreload">
            <div className="container">
                <div className="row">
                    <div className="col-md-6">
                        <h2 className="col-md-12 text-left">Tham gia với chúng tôi</h2>
                        <div className="pasgo-social col-md-10">
                            <a className="col-md-2" href="https://www.facebook.com/uudaianuong" rel="nofollow" target="_blank">
                                <span className="pasgo-icondesktop-facebook"></span>
                            </a>
                            <a className="col-md-2" href="https://plus.google.com/u/0/112798479023850096413" rel="nofollow" target="_blank">
                                <span className="pasgo-icondesktop-googleplus"></span>
                            </a>
                            <a className="col-md-2" href="https://www.youtube.com/channel/UCRLzLEiMiWN9iZEqLgEAKlQ" rel="nofollow" target="_blank">
                                <span className="pasgo-icondesktop-youtube"></span>
                            </a>
                        </div>
                        <div className="col-md-12 mt-2">
                            <h4 className="p-0 m-0 text"><a className="text-primary" href="#">Giới thiệu</a></h4>
                            <h4 className="p-0 m-0 text text-primary">Liên hệ</h4>
                            <h4 className="p-0 m-0 text"><a className="text-primary" href="#">Uudaianuong.com</a></h4>
                            <h4 className="p-0 m-0 text text-primary">uudaianuong@gmail.com</h4>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <h2 className="text-left text">Danh mục</h2>
                        {
                            this.props.data?this.props.data.map(item=>(
                                <div key={'footer-category-'+item.Alias}><a className="text-dark" href={getUrl('chuyen-muc-'+item.Alias+'-'+item.Id)}><h4 className="m-0 mb-1 text">{item.Ten}</h4></a></div>
                            )):''
                        }
                    </div>
                    <div className="col-md-12 mt-2">
                        <h4 className="p-0 m-0">Liên kết Pasgo.vn | Du lịch</h4>
                    </div>
                </div>
            </div>
        </footer> );
    }
}
const mapStateToProps = state=>({
    type:state.menu.type,
    data: state.menu.data,
    message: state.menu.message
});
export default connect(mapStateToProps,{getMenus})(MainFooter);