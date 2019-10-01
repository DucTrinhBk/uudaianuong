import React, { Component } from 'react';
import MainHeader from '../components/headers/MainHeader';
import MainFooter from '../components/footers/MainFooter';
import Home from '../pages/home';
import {BrowserRouter as HashRouter,Router,Route,Switch} from 'react-router-dom';
import Category from '../pages/category';
import Detail from '../pages/detail';
import Tag from '../pages/tag';
import Search from '../pages/search';
import NotFound from '../pages/notfound';
import MetaTag from '../components/MetaTag';
import {js} from '../utils/desktop-config.json';
class MasterLayout extends Component {
    renderJs = ()=>{
        let doc = new DOMParser();
        js.forEach(item=>{
            var node = doc.parseFromString(item, 'text/html').head.childNodes[0];
            document.getElementsByTagName('body')[0].appendChild(node);
        })
    }
    UNSAFE_componentWillMount(){
       // this.renderJs();
    }
    render() { 
        return ( 
            <div data-spy="scroll" style={{height: '100%'}}>
                <MetaTag/>
                <MainHeader/>
                <HashRouter>
                    <Switch>    
                        <Route exact path="/tim-kiem" component={Search}/>
                        <Route exact path="/the-:name-:id(\d+)" component={Tag}/>
                        <Route exact path="/chuyen-muc-:category-:id(\d+)" component={Category}/>
                        <Route exact path="/:name-:id(\d+)" component={Detail}/>
                        <Route exact path="/" component = {Home}/>
                        <Route component={NotFound}/>
                    </Switch>
                </HashRouter>
                <div className="smoothscroll-top">
                    <span className="scroll-top-inner">
                        <span>&uarr;</span>
                    </span>
                </div>
                
                <article id="home-notify-pasgo"></article>
                <MainFooter/>
            </div>);
    }
}
 
export default MasterLayout;