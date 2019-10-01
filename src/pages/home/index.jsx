import React, { Component } from 'react';
import Carousel from '../../components/Carousel';
import AdsBannerLeft from '../../components/AdsBannerLeft';
import TopNoiBat from '../../components/TopNoiBat';
import TopTagBlog from '../../components/TopTagBlog';
import AdsBannerRight from '../../components/AdsBannerRight';
import TopXemNhieu from '../../components/TopXemNhieu';
import YoutubeVideo from '../../components/YoutubeVideo';
import {connect} from 'react-redux';
import getData from '../../actions/home_action';
import BlogDKModuleTwo from '../../components/modules/BlogDKModuleTwo';
import BlogDKModuleOne from '../../components/modules/BlogDKModuleOne';
import BlogDKModuleThree from '../../components/modules/BlogDKModuleThree';
import LoadingLayout from '../../layouts/LoadingLayout';
import NhaHangNgon from '../../components/NhaHangNgon';
import BlogDKModuleFour from '../../components/modules/BlogDKModuleFour';

class Home extends Component {
    UNSAFE_componentWillMount(){
        this.props.getData();
        import ('../../css/common.desktop.min.css');
        import ('../../css/chat.client.desktop.css');
        import ('../../css/swiper.min.css');
        import('../../css/blog.update.index.desktop.min.css');
    }
    render() {
        const data = this.props.data; 
        return ( 
        <div className="wapper-content">
            <section className="wapper mb-5">
                <div className="container">
                    <div className="wapcontent">
                        <div className="col-md-12 px-0">
                            {
                                data?<Carousel data={data.Slides}/>:<LoadingLayout/>
                            }
                        </div>
                    </div>
                </div>
            </section> 
            <div className="container wapperblogpost pt-4">
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
                            <div className="wapcategory">
                                {
                                    data?data.Categorys.map(
                                        (item,i)=>{
                                            if(i%4 == 0){
                                                return <BlogDKModuleTwo data={item}/>
                                            }else if(i%4 == 1){
                                                return <BlogDKModuleOne data={item}/>
                                            }else if(i%4 == 2){
                                                return <BlogDKModuleThree data={item}/>
                                            }else{
                                                return <BlogDKModuleFour data={item}/>
                                            }
                                        }
                                    ):''
                                }
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
                                        <TopXemNhieu data = {data.BlogNews} type = {1}/>
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
        </div> );
    }
}
const mapStateToProps = state=>({
    type:state.home.type,
    data: state.home.data,
    message: state.home.message
});
export default connect(mapStateToProps,{getData})(Home);