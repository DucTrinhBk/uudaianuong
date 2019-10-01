import React, { Component } from 'react';
import { getUrl } from '../../utils/DataConfig';
class BlogDKModuleTwo extends Component {
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
            <h1 className="mb-2"><a href={getUrl("chuyen-muc-" + data.TenAlias + "-" + data.Id)}><span className="text-capitalize">{data.Ten}</span></a><a className="pb-0 pt-4 mt-1 view-more" href={getUrl("chuyen-muc-" + data.TenAlias + "-" + data.Id)} target="_blank">Xem thêm <i className="glyphicon glyphicon-menu-right"></i></a></h1>
            <div className="row wapcategory">
            {
                (()=>{
                    if(data.TopBlogs.length <= 0){
                        return '';
                    }
                    const item = data.TopBlogs[0];
                    const detailUrl = getUrl(item.TieuDeAlias + "-" + item.Id);
                    return (<div className="col-md-12 pb-2 border-bottom">
                        <div className="col-md-5">
                            <a href={detailUrl} target="_blank">
                                <img src={getUrl(item.PhotoUrl)} className="img-responsive" alt={item.TieuDe}/>
                            </a>
                        </div>
                        <div className="col-md-7 pr-0 item">
                            <a href={detailUrl} target="_blank">
                                <h3 className="mt-0">{item.TieuDe}</h3>
                                <span className="glyphicon glyphicon-time text-small text-gray dp-flex"><span className="pl-1 dp-inline">{item.NgayDang}</span></span>
                                <div className="description text-overflow-3">{item.MoTa}</div>
                            </a>
                        </div>
                </div>)
                })()
            }
                {
                    minorGroups.map(
                        (group,i)=>(
                            <div key={'BlogDKModuleTwo-'+i} className="col-md-12">
                                {
                                    group.map(
                                        item=>(
                                            <div className="col-md-6">
                                                <div className="item border p-2 mb-0">
                                                    <a href={getUrl(item.TieuDeAlias + "-" + item.Id)} target="_blank">
                                                        <img src={getUrl(item.PhotoUrl)} className="img-responsive" alt={item.TieuDe}/>
                                                        <h3>{item.TieuDe}</h3>
                                                        <span className="glyphicon glyphicon-time text-small text-gray dp-flex"><span className="pl-1 dp-inline">{item.NgayDang}</span></span>
                                                    </a>
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
    </div> );
    }
}
 
export default BlogDKModuleTwo;