import React, { Component } from 'react';
import { getUrl } from '../../utils/DataConfig';
import {connect} from 'react-redux';
import getDetail from '../../actions/detail_action';
import YoutubeVideo from '../../components/YoutubeVideo';
import TopXemNhieu from '../../components/TopXemNhieu';
import LoadingLayout from '../../layouts/LoadingLayout';
import AdsCategoryTop from '../../components/AdsCategoryTop';
import AdsBannerRight from '../../components/AdsBannerRight';
import ReactHtmlParser from 'react-html-parser';
import Relation from '../../components/Relation';
class Detail extends Component {
    UNSAFE_componentWillMount(){
        const {match} = this.props;
        if(match){
            this.props.getDetail(match.params.id);
        }
        import ('../../css/common.desktop.min.css');
        import ('../../css/chat.client.desktop.css');
        import('../../css/blog.update.detail.desktop.min.css');
    }
    render() {
        const data = this.props.data;
        return (
            <div className="wapper-content">
                <section className="wap-bloghead">
    <div className="wapcontent">
    {
        data?(data.AdsBannerTop?<AdsCategoryTop data = {data.Banner}/>:''):''
    }
        <div className="row">
            <div className="col-md-12">
                <ul className="breadcrumb">
                    <li>
                        <a href="/">Trang chủ</a> <span>/</span>
                    </li>
                    <li>
                        <a href={data?getUrl("chuyen-muc-" + data.Info.TenDanhMucAlias + "-" + data.Info.DanhMucId):''}>{data?data.Info.TenDanhMuc:''}</a> <span>/</span>
                    </li>
                    <li><span>{data?data.Info.TieuDe:''}</span></li>
                </ul>
            </div>
        </div>
    </div>
</section>
<div className="container wapperblogpost">
    <div className="wapcontent">
        <div className="row wap">
            <div className="col-md-9 wap-blogcontent">
                {
                    data?(
                        <h1>
                    {data?data.Info.TieuDe:''}
                    <span>
                        <i className="glyphicon glyphicon-time">
                        </i>
                        {data?" "+data.Info.NgayDang:''}
                    </span>
                </h1>
                    ):''
                }
                <div className="row blog-wapcontent">
                    <div className="col-md-12">
                    <b>{data?ReactHtmlParser(data.Info.MoTa):''}</b>
                        <hr />
                        {data?ReactHtmlParser(data.Info.NoiDungLazy):''}
                    </div>
                </div>
                {
                    data && data.Tags && data.Tags.length > 0?(
                        <div className="row">
                        <div className="col-md-12">
                            <ul className="tags">
                                <li><span>Tags:</span></li>
                                {
                                    data.Tags.map(
                                        item=>(
                                            <li key={'detail-tag-'+item.Id}><a href={data?getUrl("the-" + item.TenAlias + "-" + item.Id):''} target="_blank">{item.Ten}</a></li>
                                        )
                                    )
                                }
                            </ul>
                        </div>
                    </div>
                    ):''
                }
                <div className="col-md-12">
                    <div className="col-md-3">
                        <div className="social-like">
                            <div className="fb-like" data-href={data?getUrl(data.Info.TieuDeAlias + "-" + data.Info.Id):''} data-layout="button_count" data-action="like" data-share="true"></div>
                        </div>
                    </div>
                    <div className="col-md-2">
                        <div className="g-plusone" data-href={data?getUrl(data.Info.TieuDeAlias + "-" + data.Info.Id):''}></div>
                    </div>
                    <div className="col-md-7"></div>
                </div>
                <div className="col-xs-12">
                    <div className="content">
                        <hr className="hr-left" />
                        <div className="fb-comments" data-href={data?getUrl(data.Info.TieuDeAlias + "-" + data.Info.Id):''} data-numposts="5" data-width="100%" data-colorscheme="light" data-version="v3.2" data-order-by="reverse_time"></div>
                    </div>
                </div>

            </div>
            <div className="col-md-3 wap-right">
                    <div className="wapcover">
                    {
                                    data?(
                                    <div>
                                        {
                                            data.AdsBannerRight?<AdsBannerRight data = {data.AdsBannerRight}/>:''
                                        }
                                        <TopXemNhieu data = {data.XemNhieus} type = {0}/>
                                    </div>):<LoadingLayout/>
                                }
                    </div>
                </div>
        </div>
        {
            data?<Relation data={data.LienQuans}/>:''
        }
        {
            data?<YoutubeVideo data={data.AdsVideos}/>:<LoadingLayout/>
        }
    </div>
</div>
            </div> 
         );
    }
}
 
const mapStateToProps = state=>({
    type:state.detail.type,
    data: state.detail.data,
    message: state.detail.message
});
export default connect(mapStateToProps,{getDetail})(Detail);