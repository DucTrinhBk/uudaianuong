import React, { Component } from 'react';
import { getUrl } from '../../utils/DataConfig';
class BlogDKModuleFour extends Component {
    getMinorPageGroups = (items)=>{
        let group; 
        let groups = [];
        for(let i = 1;i<items.length;i++){
            if(i%2 == 1){
                group = [];
                group.push(items[i]);
            }else{
                group.push(items[i]);
                groups.push(group);
            }
        }
        return groups;
    }
    render() {
        const data = this.props.data;
        const minorGroups = this.getMinorPageGroups(data.TopBlogs);
        return ( 
            <div className="col-md-12">
    <div className="pasgo-blog">
        <h1 className="mb-2"><a href={getUrl("chuyen-muc-" + data.TenAlias + "-" + data.Id)}><span className="text-capitalize">{data.Ten}</span></a><a className="pb-0 pt-4 mt-1 view-more" href={getUrl("chuyen-muc-" + data.TenAlias + "-" + data.Id)} target="_blank">Xem thêm <i className="glyphicon glyphicon-menu-right"></i></a></h1>
        <div className="row wapcategory">
            {
                minorGroups.map(
                    (group,i)=>(
                        <div key={'BlogDKModuleFour-group'+i} className="col-md-12 mb-3">
                            {
                                group.map(
                                    item=>(
                                        <div key={'BlogDKModuleFour-item'+item.Id} className="col-md-6 p-2 border">
                                            <a href={getUrl(item.TieuDeAlias + "-" + item.Id)} target="_blank">
                                                <img src={getUrl(item.PhotoUrl)} className="img-responsive" alt={item.TieuDe}/>
                                            </a>
                                            <a href={getUrl(item.TieuDeAlias + "-" + item.Id)}><h4 className="mt-2 mb-1 text-overflow-2 h45">{item.TieuDe}</h4></a>
                                            <div className="description mb-1 text-overflow-2 h35">{item.MoTa}</div>
                                            <span className="glyphicon glyphicon-time text-small text-gray dp-flex"><span className="pl-1 dp-inline">{item.NgayDang}</span></span>
                                        </div>
                                    )
                                )
                            }
                        </div>
                    )
                )
            }
        </div>
    </div>
</div>);
    }
}
 
export default BlogDKModuleFour;