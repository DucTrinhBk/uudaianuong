import React, { Component } from 'react';
import { getUrl } from '../../utils/DataConfig';
class BlogDKModuleOne extends Component {
    render() {
        const data = this.props.data;
        return ( 
            <div className="col-md-12 border-bottom pb-2">
                <div className="pasgo-blog">
                    <h1 className="mb-2"><a href={getUrl("chuyen-muc-" + data.TenAlias + "-" + data.Id)}><span className="text-capitalize">{data.Ten}</span></a><a className="pb-0 pt-4 mt-1 view-more" href={getUrl("chuyen-muc-" + data.TenAlias + "-" + data.Id)} target="_blank">Xem thêm <i className="glyphicon glyphicon-menu-right"></i></a></h1>
                    <div className="col-md-12">
                        <div className="row wapcategory">
                            {
                                (()=>{
                                    if(data.TopBlogs.length <= 0){
                                        return '';
                                    }
                                    const item = data.TopBlogs[0];
                                    const detailUrl = getUrl(item.TieuDeAlias + "-" + item.Id);
                                    return (
                                        <div key={'BlogDKModuleOne-'+0} className="col-md-6">
                                            <div className="col-md-12 p-0 border">
                                                <a href={detailUrl} target="_blank">
                                                    <img src={item.PhotoUrl} className="img-responsive" alt={item.TieuDe}/>
                                                </a>
                                            <div className="item col-md-12">
                                                <a href= {detailUrl} target="_blank">
                                                    <h3 className="mt-1 mb-1">{item.TieuDe}</h3>
                                                </a>
                                                <div className="description text-overflow-2 h35">{item.MoTa}</div>
                                                <span className="glyphicon glyphicon-time text-small text-gray dp-flex"><span className="pl-1 dp-inline">{item.NgayDang}</span></span>
                                            </div>
                                            </div>
                                        </div>
                                    )
                                })()
                            }
                            <div className="col-md-6">
                                {
                                    data.TopBlogs.length <= 1?'':data.TopBlogs.map(
                                        (item,i)=>{
                                            if (i == 0) return '';
                                            const detailUrl = getUrl(item.TieuDeAlias + "-" + item.Id);
                                            return (
                                                <div key={'BlogDKModuleOne-'+i} className="item mt-0 mb-2">
                                                    <a href={detailUrl} target="_blank">
                                                        <img src={getUrl(item.PhotoUrl)} className="img-responsive" alt={item.TieuDe}/>
                                                        <h3>{item.TieuDe}</h3>
                                                        <span className="glyphicon glyphicon-time text-small text-gray dp-flex"><span className="pl-1 dp-inline">{item.NgayDang}</span></span>
                                                    </a>
                                                </div>
                                            )
                                        }
                                    )
                                }
                            </div>
                        </div>
                    </div>
                </div>
            </div>)
    }
}
 
export default BlogDKModuleOne;