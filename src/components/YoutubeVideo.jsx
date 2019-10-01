import React, { Component } from 'react';
import {VIDEO_PAGESIZE, getUrl} from '../utils/DataConfig';
class YoutubeVideo extends Component {
    videoPagesRender = function(data){
        const pageNum = Math.ceil(data.length / VIDEO_PAGESIZE);
        let pages = [];
        for(let i = 0;i<pageNum;i++){
            let page = [];
            for(let j = i*VIDEO_PAGESIZE;j<Math.min((i+1)*VIDEO_PAGESIZE,data.length);j++){
                page.push(j)
            }
            pages.push(page);
        }
        return pages;
    }
    render() {
        const pages = this.videoPagesRender(this.props.data);
        return ( <div className="row">
        <div className="col-md-12">
            <div className="wapadv">
                <h2><a href="https://www.youtube.com/channel/UCZVrGI9UypsJxa-U_-DC2qg" target="_blank" title="Kênh YouTube PasGo" rel="nofollow">Kênh YouTube</a> </h2>
                <div id="carousel-advlistvideo" className="carousel slide" data-ride="carousel" data-interval="false">
                    <div className="carousel-inner" role="listbox">
                        {
                            pages.map(
                                (page,i)=>{
                                    return (
                                    <div key={'adsvideo '+i} className={"item "+((i == 0)?'active':'')}>
                                        <div className="row">
                                        {
                                            page.map(j=>{
                                                const item = this.props.data[j];
                                                return (
                                                <div key={'adsvideo '+i+'-'+j} className="col-md-3">
                                                    <a href={item.LienKet} target="_blank">
                                                        <span className="pasgo-icondesktop-video"></span>
                                                        <img data-src={getUrl(item.PhotoUrl)} src={getUrl(item.PhotoHolder)} className="img-responsive lazyload" alt={item.TieuDe} />
                                                        <h3>{item.TieuDe}</h3>
                                                    </a>
                                                </div>
                                            )})
                                        }
                                        </div>
                                    </div>)}
                            )
                        }
                    </div>
                    <a className="left carousel-control" href="#carousel-advlistvideo" role="button" data-slide="prev">
                        <span className="pasgo-icondesktop-prev"></span>
                    </a>
                    <a className="right carousel-control" href="#carousel-advlistvideo" role="button" data-slide="next">
                        <span className="pasgo-icondesktop-next"></span>
                    </a>
                </div>
            </div>
        </div>
    </div> );
    }
}
 
export default YoutubeVideo;