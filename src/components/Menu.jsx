import React, { Component } from 'react';
import getMenus from '../actions/menu_action';
import {connect} from 'react-redux';
import {getUrl} from '../utils/DataConfig';
class Menu extends Component {
    UNSAFE_componentWillMount(){
        this.props.getMenus();
    }
    render() { 
        if(!this.props.data){
            return ''
        }
        return (
        <ul id="menu">
            <li className="pr-0">
                <a href="/"><span className="pasgo-icondesktop-logo"></span></a>
            </li>
            {
                this.props.data.map(item=>(
                    <li key={'menu-'+item.Alias}>
                        <a href={getUrl('chuyen-muc-'+item.Alias+'-'+item.Id)}>{item.Ten}</a>
                    </li>))
            }
        </ul>);
    }
}
 
const mapStateToProps = state=>({
    type:state.menu.type,
    data: state.menu.data,
    message: state.menu.message
});
export default connect(mapStateToProps,{getMenus})(Menu);