import React, { Component } from 'react';
import {getUrl} from '../utils/DataConfig';
class AdsBannerRight extends Component {
    render() {
        if(!this.props.data){
            return '';
        }  
        return (
            <a href={this.props.data.Lienket} target="_blank" title={this.props.data.TieuDe}>
                <img data-src={getUrl(this.props.data.PhotoUrl)} src={getUrl(this.props.data.PhotoHolder)} className="img-responsive lazyload" alt={this.props.data.TieuDe} />
            </a>
         );
    }
}
 
export default AdsBannerRight;