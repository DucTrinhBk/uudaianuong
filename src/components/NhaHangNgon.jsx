import React, { Component } from 'react';
import {NHAHANGNGON_PAGESIZE, getUrl} from '../utils/DataConfig';
class NhaHangNgon extends Component {
    nhaHangNgonPagesRender = function(data){
        const pageNum = Math.ceil(data.length / NHAHANGNGON_PAGESIZE);
        let pages = [];
        for(let i = 0;i<pageNum;i++){
            let page = [];
            for(let j = i*NHAHANGNGON_PAGESIZE;j<Math.min((i+1)*NHAHANGNGON_PAGESIZE,data.length);j++){
                page.push(j)
            }
            pages.push(page);
        }
        return pages;
    }
    render() {
        const pages = this.nhaHangNgonPagesRender(this.props.data); 
        return ( 
            <div class="row">
        <div class="col-md-12">
            <div class="wapadv">
                <h2><a href="#" target="_blank" title="Top nhà hàng ăn ngon">Top nhà hàng ăn ngon</a></h2>
                <div id="carousel-advlisttop" class="carousel slide" data-ride="carousel" data-interval="false">
                    <div class="carousel-inner" role="listbox">
                        {
                            pages.map(
                                (page,i)=>(
                                    <div key={'nhahangngon-'+i} className={"item "+((i == 0)?'active':'')}>
                                        {
                                            page.map(
                                                j=>{
                                                    const item = this.props.data[j];
                                                    return (
                                                        <div class="col-md-3">
                                                            <a href={item.LienKet} target="_blank">
                                                                <img data-src={getUrl(item.PhotoUrl)} src={getUrl(item.PhotoHolder)} class="img-responsive lazyload" alt={item.TieuDe} />
                                                                <h3>{item.TieuDe}</h3>
                                                            </a>
                                                        </div>
                                                    )
                                                }
                                            )
                                        }
                                    </div>
                                )
                            )
                        }
                        
                    </div>
                    <a class="left carousel-control" href="#carousel-advlisttop" role="button" data-slide="prev">
                        <span class="pasgo-icondesktop-prev"></span>
                    </a>
                    <a class="right carousel-control" href="#carousel-advlisttop" role="button" data-slide="next">
                        <span class="pasgo-icondesktop-next"></span>
                    </a>
                </div>
            </div>
        </div>
    </div>
         );
    }
}
 
export default NhaHangNgon;