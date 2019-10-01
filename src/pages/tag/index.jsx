import React, { Component } from 'react';
import ReactHtmlParser from 'react-html-parser';
import LoadingLayout from '../../layouts/LoadingLayout';
import NhaHangNgon from '../../components/NhaHangNgon';
import AdsBannerLeft from '../../components/AdsBannerLeft';
import TopNoiBat from '../../components/TopNoiBat';
import TopTagBlog from '../../components/TopTagBlog';
import AdsBannerRight from '../../components/AdsBannerRight';
import TopXemNhieu from '../../components/TopXemNhieu';
import {connect} from 'react-redux';
import AdsCategoryTop from '../../components/AdsCategoryTop';
import AdsCategoryBottom from '../../components/AdsCategoryBottom';
import ArticleBlog from '../../components/ArticleBlog';
import Pagination from 'react-js-pagination';
import getTagPage from '../../actions/tag_action';
import YoutubeVideo from '../../components/YoutubeVideo';
import { getUrl } from '../../utils/DataConfig';
class Tag extends Component {
    UNSAFE_componentWillMount(){
        const queryString = require('query-string');
        const {match} = this.props;
        const pageNum = queryString.parse(this.props.location.search).page;
        if(match){
            this.props.getTagPage(match.params.id,pageNum?pageNum:1);
        }
        import ('../../css/common.desktop.min.css');
        import ('../../css/chat.client.desktop.css');
        import('../../css/blog.tag.desktop.min.css');
    }
    render() { 
        const data = this.props.data;
        return (
            <div className="wrapper-content">
                <section class="wap-bloghead">
                    <div class="container">
                        <div class="wapcontent">
                        {
                            data?(data.AdsBannerTop?<AdsCategoryTop data = {data.Banner}/>:''):''
                        }
                            <div class="row">
                                <div class="col-md-12">
                                    <ul class="breadcrumb">
                                        <li>
                                            <a href="/">Trang chủ</a> <span>/</span>
                                        </li>
                                    <li><span>{data?ReactHtmlParser(data.Tag.Ten):''}</span></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
<div class="container wapperblogpost">
    <div class="wapcontent">
        <div class="row wap">
            <div class="col-md-2 wap-left">
                <div class="wapcover">
                {
                        data?(<div>
                                    {
                                        data.AdsBannerLeft?<AdsBannerLeft data = {data.AdsBannerLeft}/>:''
                                    }
                                    <TopTagBlog data = {data.Tags}/>
                                    <TopNoiBat data = {data.NoiBats}/>
                                </div>):<LoadingLayout/>   
                }
                </div>
            </div>
            <div class="col-md-7 wap-blogcontent">
                <h1 class="mb-0"><a href="/"><span>Gợi ý tìm kiếm: {data?ReactHtmlParser(data.Tag.Ten):''}</span></a></h1>
                <div class="row wapcategory">
                    {
                        data?<ArticleBlog data={data.BlogPage.Items}>
                            <div class="col-md-12 navigation">
                                <Pagination
                                    hideDisabled
                                    activePage={data.BlogPage.Pager.CurrentPage}
                                    itemsCountPerPage={data.BlogPage.Pager.PageSize}
                                    totalItemsCount={data.BlogPage.Pager.TotalItems}
                                    onChange={(e)=>{
                                        window.location.href = getUrl('the-'+data.Tag.TenAlias+"-"+ data.Tag.Id+'?page='+e);
                                    }}
                                />
                            </div>
                        </ArticleBlog>:<LoadingLayout/>
                    }
                </div>
                {
                        data?(data.AdsBannerBottom?<AdsCategoryBottom data={data.AdsBannerBottom}/>:''):''
                }
            </div>
            <div class="col-md-3 wap-right">
                <div class="wapcover">
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
            data?(data.AdsNhaHangs.length > 0?<NhaHangNgon data={data.AdsNhaHangs}/>:''):<LoadingLayout/>
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
 
const mapStateToProps = state =>({
    type:state.tag.type,
    data: state.tag.data,
    message: state.tag.message
});
export default connect(mapStateToProps,{getTagPage})(Tag);