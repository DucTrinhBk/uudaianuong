import React, { Component } from 'react';
import {getUrl} from '../utils/DataConfig';
class AdsBannerLeft extends Component {
    render() {
        if(!this.props.data){
            return '';
        } 
        return ( 
        <div className="item">
            <a href={this.props.data.Lienket} target="_blank" title={this.props.data.TieuDe}>
                <img data-src={getUrl(this.props.data.PhotoUrl)} src={getUrl(this.props.data.PhotoHolder)} className="img-responsive lazyload" alt={this.props.data.TieuDe} />
            </a>
        </div> );
    }
}
 
export default AdsBannerLeft;