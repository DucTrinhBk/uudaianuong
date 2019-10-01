import React, { Component } from 'react';
import {getUrl} from '../utils/DataConfig';
import {BlogNenXem} from '../utils/AppSetting';
class TopNoiBat extends Component {
    render() { 
        return ( 
        <div>
            <h2 className="mb-0"><a className="text-capitalize">{BlogNenXem}</a></h2>
            {
                this.props.data.map(item=>(
                    <div key={'topnoibat-'+item.Id} className="item border-bottom py-2">
                        <a href={getUrl(item.TieuDeAlias + "-" + item.Id)} target="_blank" title={item.TieuDe}>
                            <img src={getUrl(item.PhotoUrl)} className="img-responsive" alt={item.TieuDe} />
                            <h4 className="text-overflow-2 mt-2 mb-0">{item.TieuDe}</h4>
                        </a>
                    </div>
                ))
            }
        </div> );
    }
}
 
export default TopNoiBat;