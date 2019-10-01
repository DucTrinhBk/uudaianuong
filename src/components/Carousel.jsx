import React, { Component } from 'react';
import { getUrl } from '../utils/DataConfig';
class Carousel extends Component {
    
    render() { 
        return ( 
        <div className="wapadv">
            <div id="carousel-adv-slide" className="carousel slide" data-ride="carousel" data-interval="false">
                <div className="carousel-inner" role="listbox">
                        { 
                            this.props.data.map(
                                (item,i)=>(
                                    i==0?(
                                        <div key={'anh-slide-'+item.SlideId} className="item active">
                                            <a href={item.Link} target="_blank" title={item.TieuDe}>
                                                <img src={getUrl(item.PhotoUrl)}
                                                    alt={item.TieuDe} style={{width: '100%',maxHeight: 300}}/>
                                            </a>
                                        </div>
                                    ):(<div key={'anh-slide-'+item.SlideId} className="item">
                                    <a href={item.Link} target="_blank" title={item.TieuDe}>
                                        <img src={getUrl(item.PhotoUrl)}
                                            alt={item.TieuDe} style={{width: '100%',maxHeight: 300}}/>
                                    </a>
                                </div>)
                                )
                            )
                        }
                    </div>
                    <a className="left carousel-control" href="#carousel-adv-slide" role="button" data-slide="prev">
                        <span className="pasgo-icondesktop-prev"></span>
                    </a>
                    <a className="right carousel-control" href="#carousel-adv-slide" role="button" data-slide="next">
                        <span className="pasgo-icondesktop-next"></span>
                    </a>
                </div>
            </div>);
    }
}
 
export default Carousel;