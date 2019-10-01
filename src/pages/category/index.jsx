import React, { Component } from 'react';
import getData from '../../actions/category_action';
import { getUrl} from '../../utils/DataConfig';
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
class Category extends Component {
    UNSAFE_componentWillMount(){
        const queryString = require('query-string');
        var params = this.props.match.params;
        const pageNum = queryString.parse(this.props.location.search).page;
        if(params){
            this.props.getData(params.id,pageNum?pageNum:1,false);
        }
        import ('../../css/common.desktop.min.css');
        import ('../../css/chat.client.desktop.css');
        import('../../css/blog.update.category.desktop.min.css');
    }
    render() {
        const data = this.props.data;
        return ( 
            <div className="wapper-content">
                <section className="wap-bloghead">
                    <div className="container">
                        <div className="wapcontent">
                            {
                                data?(data.AdsBannerTop?<AdsCategoryTop data = {data.AdsBannerTop}/>:''):''
                            }
                            <div className="row">
                                <div className="col-md-12">
                                    <ul className="breadcrumb">
                                        <li>
                                            <a href="/">Trang chủ</a> <span>/</span>
                                        </li>
                                        <li><span className="text-capitalize">{data?data.Category.Ten:''}</span></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
    <div className="container wapperblogpost">
        <div className="wapcontent">
            <div className="row wap">
                <div className="col-md-2 wap-left">
                    <div className="wapcover">
                    {
                        data?(<div>
                                    {
                                        data.AdsBannerLeft?<AdsBannerLeft data = {data.AdsBannerLeft}/>:''
                                    }
                                    <TopNoiBat data = {data.NoiBats}/>
                                    <TopTagBlog data = {data.Tags}/>
                                </div>):<LoadingLayout/>   
                    }
                    </div>
                </div>
                <div className="col-md-7 wap-blogcontent">
                    <h1 className="mb-0"><a href={data?getUrl('chuyen-muc-'+data.Category.TenAlias+"-"+ data.Category.Id):''}><span className="text-capitalize">{data?data.Category.Ten:''}</span></a></h1>
                    {
                        data?<ArticleBlog data={data.BlogPage.Items}>
                            <Pagination
                                hideDisabled
                                activePage={data.BlogPage.Pager.CurrentPage}
                                itemsCountPerPage={data.BlogPage.Pager.PageSize}
                                totalItemsCount={data.BlogPage.Pager.TotalItems}
                                onChange={(e)=>{
                                    window.location.href = getUrl('chuyen-muc-'+data.Category.TenAlias+"-"+ data.Category.Id+'?page='+e);
                                }}
                            />
                        </ArticleBlog>:<LoadingLayout/>
                    }
                    {
                        data?(data.AdsBannerBottom?<AdsCategoryBottom data={data.AdsBannerBottom}/>:''):''
                    }
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
                data?(data.AdsNhaHangs.length > 0?<NhaHangNgon data={data.AdsNhaHangs}/>:''):<LoadingLayout/>
            }
        </div>
    </div>
            </div> );
    }
}
 
const mapStateToProps = state=>({
    type:state.category.type,
    data: state.category.data,
    message: state.category.message
});
export default connect(mapStateToProps,{getData})(Category);