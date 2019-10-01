import React, { Component } from 'react';
import {getUrl} from '../utils/DataConfig';
import {BlogNew,BlogTopXemNhieu} from '../utils/AppSetting';
class TopXemNhieu extends Component {
    render() {
        return ( 
        <div>
            <h2 className="mb-0"><a className="text-capitalize">
                {
                    this.props.type == 0?BlogTopXemNhieu:BlogNew
                }
            </a></h2>
            {
                this.props.data.map(item=>(
                    <div key={(this.props.type == 0?BlogTopXemNhieu:BlogNew)+"-"+item.Id} className="item border-bottom py-2">
                        <a href={getUrl(item.TieuDeAlias + "-" + item.Id)} target="_blank" title={item}>
                            <img src={getUrl(item.PhotoUrl)} className="img-responsive" alt={item.TieuDe} />
                            <h3 className="text-overflow-2">{item.TieuDe}</h3>
                            <span><i className="glyphicon glyphicon-time"></i>{item.NgayDang}</span>
                        </a>
                    </div>
                ))
            }
        </div> );
    }
}
 
export default TopXemNhieu;