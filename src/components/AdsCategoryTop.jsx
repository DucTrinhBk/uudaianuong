import React, { Component } from 'react';
import { getUrl } from '../utils/DataConfig';
class AdsCategoryTop extends Component {
    render() {
        const data = this.props.data; 
        return ( 
        <div class="row">
            <div class="col-md-12">
                <a href={data.LienKet} target="_blank">
                    <img src={getUrl(data.PhotoUrl)} class="img-responsive" alt={data.TieuDe} />
                </a>
            </div>
        </div>);
    }
}
 
export default AdsCategoryTop;