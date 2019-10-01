import React, { Component } from 'react';
import {BlogTag} from '../utils/AppSetting';
import {getUrl} from '../utils/DataConfig';
class TopTagBlog extends Component {
    render() {
        return ( 
        <div>
            <h2><a className="text-capitalize">{BlogTag}</a></h2>
            <div className="item">
                {
                    this.props.data.map(item=>(
                        <a key={'toptag-'+item.Id} href={getUrl("the-"+item.TenAlias+"-"+item.Id)} target="_blank" className="tag" title={item.Ten}>{item.Ten}</a>
                    ))
                }
            </div>
        </div> );
    }
}
 
export default TopTagBlog;