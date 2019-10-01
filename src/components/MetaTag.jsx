import React, { Component } from 'react';
import { Helmet } from "react-helmet";
import {connect} from 'react-redux';
import ReactHtmlParser from 'react-html-parser';
class MetaTag extends Component {
    render() {
        if(!this.props.data){
            return '';
        }
        return ( 
            <Helmet>
                <title>{ReactHtmlParser(this.props.data.TieuDeSeo)}</title>
                <meta name="description" content={ReactHtmlParser(this.props.data.MoTaSeo)} />
                <meta name="keywords" content="react,seo,helmet" />
                <meta name="DC.title" content={ReactHtmlParser(this.props.data.TieuDeSeo)} />
                <meta name="twitter:title" content={ReactHtmlParser(this.props.data.TieuDeSeo)} />
                <meta name="twitter:description" content={ReactHtmlParser(this.props.data.MoTaSeo)} />
                <meta property="og:title" content={ReactHtmlParser(this.props.data.TieuDeSeo)} />
                <meta property="og:description" content={ReactHtmlParser(this.props.data.MoTaSeo)} />
                <meta property="og:image" content={ReactHtmlParser(this.props.data.AnhUrl)} />
                <meta name="robots" content="follow,index" />
          </Helmet>
         );
    }
}
const mapStateToProps = state=>({
    type:state.metaTags.type,
    data: state.metaTags.data,
    message: state.metaTags.message
});
export default connect(mapStateToProps,null)(MetaTag);