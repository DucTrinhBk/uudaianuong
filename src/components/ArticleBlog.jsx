import React, { Component } from 'react';
import { getUrl } from '../utils/DataConfig';
import ReactHtmlParser from 'react-html-parser';
class ArticleBlog extends Component {
    render() {
        const data = this.props.data; 
        return (
            <div className="row wapcategory">
                        {
                            data.map(
                                (item,i)=>(
                                    i==0?(
                                    <div key={'ArticleBlog-'+0} class="col-md-12 border-bottom mt-2">
                                        <div class="col-md-6 pl-0 mb-2">
                                            <a href={getUrl(item.TieuDeAlias + "-" + item.Id)} target="_blank">
                                                <img src={getUrl(item.PhotoUrl)} class="img-responsive" alt={item.TieuDe}/>
                                            </a>
                                        </div>
                                        <div class="col-md-6 item">
                                            <a href={getUrl(item.TieuDeAlias + "-" + item.Id)} target="_blank">
                                                <h3 class="m-0 normal">{item.TieuDe}</h3>
                                                <span class="glyphicon glyphicon-time text-small text-gray dp-flex"><span class="pl-1 dp-inline">{item.NgayDang}</span></span>
                                            </a>
                                            <div class="description text-overflow-5"><a href={getUrl(item.TieuDeAlias + "-" + item.Id)} target="_blank">{ReactHtmlParser(item.MoTa)}</a>
                                            <a href={getUrl(item.TieuDeAlias + "-" + item.Id)} target="_blank"></a></div>
                            
                                        </div>
                                    </div>
                                    ):(
                                        <div key={'ArticleBlog-'+i} class="col-md-12 border-bottom mt-2">
                                        <div class="col-md-4 pl-0 mb-2">
                                            <a href={getUrl(item.TieuDeAlias + "-" + item.Id)} target="_blank">
                                                <img src={getUrl(item.PhotoUrl)} class="img-responsive" alt={item.TieuDe}/>
                                            </a>
                                        </div>
                                        <div class="col-md-8 item">
                                            <a href={getUrl(item.TieuDeAlias + "-" + item.Id)} target="_blank">
                                                <h3 class="m-0 normal">{item.TieuDe}</h3>
                                                <span class="glyphicon glyphicon-time text-small text-gray dp-flex"><span class="pl-1 dp-inline">{item.NgayDang}</span></span>
                                            </a><div class="description text-overflow-3"><a href={getUrl(item.TieuDeAlias + "-" + item.Id)} target="_blank">{ReactHtmlParser(item.MoTa)}</a><a href={getUrl(item.TieuDeAlias + "-" + item.Id)} target="_blank"></a></div>
                            
                                        </div>
                                    </div>
                                    )
                                )
                            )
                        }
                        <div className="col-md-12 navigation">
                            {this.props.children}
                        </div>
            </div>  );
    }
}
 
export default ArticleBlog;