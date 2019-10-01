import React, { Component } from 'react';
import Menu from '../Menu';
class MainHeader extends Component {
    UNSAFE_componentWillMount(){
        import ('../../css/common.desktop.min.css');
    }
    render() {
        return ( 
        <header>
            <nav id="navfixtop">
                <div className="container">
                    <Menu/>
                    <div className="search-fixed">
                        <form action="/tim-kiem" method="get" className="navbar-form navbar-right bar-bottom">
                            <div className="input-group">
                                <input name="search" type="text" className="form-control" placeholder="Tìm bài viết..." autoComplete="off"/>
                                <div className="input-group-btn">
                                    <button type="submit" className="btn btn-default"><span className="glyphicon glyphicon-search" aria-hidden="true"></span></button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </nav>

            <section className="pasgo-search">
                <div className="container">
                    <div className="col-md-12 pr-0 pl-2">
                        <form action="/tim-kiem" method="get" className="navbar-form navbar-right bar-bottom">
                            <div className="input-group col-md-12 p-0">
                                <input id="textSearch" type="text" name="search"  className="form-control no-border ml-3" placeholder="Tìm bài viết..." onClick=
                                {window.searchWebsite} 
                                    
                                onInput={window.searchWebsite} 
                                autoComplete="off"/>
                                <img src="Assets/Images/gif/load-page.gif" className="img-search" alt="Tìm bài viết..." />
                                <span className="input-group-addon frm-search no-border">
                                    <button type="submit" className="btn"><span className="pasgo-icondesktop-search"></span> Tìm kiếm</button>
                                </span>
                                    
                                <div id="result">
                                
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </section>
        </header> );
    }
}
export default MainHeader;