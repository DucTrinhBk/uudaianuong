import React, { Component } from 'react';
class AdsCategoryBottom extends Component {
    render() {
        const data = this.props.data; 
        return ( 
            <div class="row  wap-advertisement">
                <div class="col-md-12 wapadvbanner">
                    <a href={data.LienKet} target="_blank" title={data.TieuDe}>
                        <img data-src={data.PhotoUrl} src={data.PhotoHolder} class="img-responsive lazyload" alt={data.TieuDe} />
                    </a>
                </div>
            </div>
         );
    }
}
 
export default AdsCategoryBottom;