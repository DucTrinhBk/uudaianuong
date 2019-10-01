import React, { Component } from 'react';
import { getUrl } from '../../utils/DataConfig';
class BlogDKModuleThree extends Component {
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
        <div className="col-md-12 border-bottom pb-2">
            <div className="pasgo-blog">
                <h1 className="mb-0"><a href={getUrl("chuyen-muc-" + data.TenAlias + "-" + data.Id)}><span className="text-capitalize">{data.Ten}</span></a><a className="pb-0 pt-4 mt-1 view-more" href={getUrl("chuyen-muc-" + data.TenAlias + "-" + data.Id)} target="_blank">Xem thêm <i className="glyphicon glyphicon-menu-right"></i></a></h1>
                <div className="row wapcategory">
                {
                    (()=>{
                        if(data.TopBlogs.length <= 0){
                            return '';
                        }
                        const item = data.TopBlogs[0];
                        const detailUrl = getUrl(item.TieuDeAlias + "-" + item.Id);
                        return (<div className="col-md-12 mt-2 mb-2">
                        <div className="row">
                            <a href={detailUrl} target="_blank">
                                <div className="col-md-6">
                                    <img src={getUrl(item.PhotoUrl)} className="img-responsive" alt={item.TieuDe}/>
                                </div>
                                <div className="col-md-6">
                                    <h3 className="mt-0 mb-1">{item.TieuDe}</h3>
                                    <div className="description text-overflow-4">{item.MoTa}</div>
                                    <span className="glyphicon glyphicon-time text-small text-gray dp-flex"><span className="pl-1 dp-inline">{item.NgayDang}</span></span>
                                </div>
                            </a>
                        </div>
                    </div>)
                    })()
                }
                {
                    minorGroups.map(
                        group=>(
                            <div className="col-md-12 pt-2 p-0">
                                {
                                    group.map(
                                        item=>(
                                            <div className="col-md-6 mb-2">
                                                <div className="col-md-12 p-2 border">
                                                    <a href={getUrl(item.TieuDeAlias + "-" + item.Id)} target="_blank">
                                                        <img src={getUrl(item.PhotoUrl)} className="img-responsive" alt={item.TieuDe}/>
                                                    </a>
                                                    <div className="col-md-12 p-0">
                                                        <a href={getUrl(item.TieuDeAlias + "-" + item.Id)} target="_blank" title={item.TieuDe}>
                                                            <h4 className="mt-1 mb-0 header-overflow-2 h45">{item.TieuDe}</h4>
                                                        </a>
                                                        <span className="glyphicon glyphicon-time text-small text-gray dp-flex"><span className="pl-1 dp-inline">{item.NgayDang}</span></span>
                                                    </div>
                                                </div>
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
 
export default BlogDKModuleThree;