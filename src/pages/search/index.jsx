import React, { Component } from 'react';
import LoadingLayout from '../../layouts/LoadingLayout';
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
import YoutubeVideo from '../../components/YoutubeVideo';
import { getUrl } from '../../utils/DataConfig';
import getSearch from '../../actions/search_action';
class Search extends Component {
    state={
        search:'',
        page: 1
    }
    UNSAFE_componentWillMount(){
        const queryString = require('query-string');
        const params = queryString.parse(this.props.location.search);
        this.setState(params)
        if(params){
            this.props.getSearch(params.search,params.page?params.page:1);
        }
        import ('../../css/common.desktop.min.css');
        import ('../../css/chat.client.desktop.css');
        import('../../css/blog.search.desktop.min.css');
    }
    render() { 
        const data = this.props.data;
        return ( 
        <div className="wrapper-content">
            <section class="wap-bloghead">
                <div class="container">
                    <div class="wapcontent">
                        {
                            data?(data.AdsBannerTop?<AdsCategoryTop data = {data.AdsBannerTop}/>:''):''
                        }
                        <div class="row">
                            <div class="col-md-12">
                                <ul class="breadcrumb">
                                    <li>
                                        <a href="/">Trang chủ</a> <span>/</span>
                                    </li>
                                    <li><span>Tìm kiếm</span></li>
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
                <h1><a href="#"><span>Từ khóa:</span>"{this.state.search}"</a></h1>
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
                                        window.location.href = getUrl('tim-kiem?search='+this.state.search+"&page="+e);
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
            data?<YoutubeVideo data={data.AdsVideos}/>:<LoadingLayout/>
        }
    </div>
</div>
        </div> );
    }
}
 
const mapStateToProps = state =>({
    type:state.search.type,
    data: state.search.data,
    message: state.search.message
});
export default connect(mapStateToProps,{getSearch})(Search);