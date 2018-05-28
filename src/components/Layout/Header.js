import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import _ from 'lodash';
// import {Helmet} from 'react-helmet';

import mainLogo from './../../assets/images/shoparu.svg';

class Header extends Component {
    constructor(props) {
        super(props);
        this.state = {
            childCategoryLevelOne: '',
            parentCategoryName: '',
            parentCategorySlug: ''
        }
    }

    componentWillReceiveProps(nextProps) {
        // console.log(nextProps, this.props);
        if (nextProps.allCategories !== this.props.allCategories) {
            // this.setState({count:nextProps.value});
            console.log('pkkk');
            this.setState({
                childCategoryLevelOne: _.orderBy(nextProps.allCategories, ['priority', ['asc']])[0].kids,
                parentCategoryName: _.orderBy(nextProps.allCategories, ['priority', ['asc']])[0].name,
                parentCategorySlug: _.orderBy(nextProps.allCategories, ['priority', ['asc']])[0].slug
            })
        }
    }

    createMenuListItems = (obj) => {
        const listItems = _.map(obj.categories, function(category) {
            // console.log(category);
            return (<li key={category.id}>
                <Link className="base-text" to={`/product/category/${category.slug}`}>{category.slug}</Link>
            </li>)
        });
        if (!obj.hasParent) {
            return listItems
        }
        // console.log(obj.categories);
        return {subCategoryTitle: (<Link className="lead text-bold base-text" to={`/product/category/${obj.parentCategorySlug}`}>{obj.parentCategoryName}</Link>), subCategoryListItems: listItems}
    }

    render() {
        // console.log(this.state);

        const allCategory = _.orderBy(this.props.allCategories, ['priority', ['asc']]);
        // console.log(allCategory[0]);

        const parentCategories = this.createMenuListItems({categories: allCategory, hasParent: false});
        const childCategories = this.createMenuListItems({categories: this.state.childCategoryLevelOne, hasParent: true, parentCategoryName: this.state.parentCategoryName, parentCategorySlug: this.state.parentCategorySlug});
        // console.log(childCategories);
        return (<header className="clearfix">
            <nav className="navbar navbar-expand-lg navbar-light header " id="header">
                <a hred="#" className="navbar-toggler border-0 bg-transparent notfication-bubble-wrapper px-0 py-0">
                    <div className="hamburger">
                        <span></span>
                        <span></span>
                        <span></span>
                    </div>
                </a>

                <Link to="/"><img src={mainLogo} width="80" alt=""/></Link>
                <ul className="navbar-nav mr-auto d-none d-lg-flex">
                    <li className="nav-item categories">
                        <Link to="/categories" className="nav-link d-flex">
                            <i className="icon-category-9-box link-text"></i>
                            <span className="float-right ml-2">Categories</span>
                        </Link>
                        <div className="hover-categories-menu bg-white">
                            <div className="col-md-12 p-3">
                                <div className="row">
                                    <div className="col-5" id="parentCat">
                                        <ul>
                                            {parentCategories}
                                        </ul>
                                    </div>
                                    <div className="col-md-6 child-cat">
                                        <div className="row">
                                            <div className="col-md-12">
                                                <p>
                                                    {childCategories.subCategoryTitle}
                                                </p>
                                            </div>
                                        </div>
                                        <ul>
                                            {childCategories.subCategoryListItems}
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </li>
                </ul>
                <div className="col-7 col-lg-7 px-0 py-lg-2 py-0">
                    <div className="row m-0">
                        <form className="form-inline my-lg-0 d-flex justify-content-lg-end pl-lg-5 col-12 p-0" action="http://192.168.0.103:8080/search">
                            <div className="input-group col-12 p-0">
                                <input type="search" className="form-control" name="keyword" placeholder="Search product" value=""/>
                                <span className="input-group-btn">
                                    <button className="btn bg-white link-text border-left-0 border" type="button">
                                        <i className="icon-search"></i>
                                    </button>
                                </span>
                            </div>
                        </form>
                    </div>
                </div>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav ml-auto p-0 p-lg-0">
                        <li className="nav-item px-2 px-lg-0 ">
                            <div className="d-flex auth">
                                <i className="icon-user m-2 mr-2 pt-2 lead link-text pt-lg-0 mr-lg-2"></i>
                                <Link to="/login" className="nav-link p-0 ml-2 mt-3 mt-lg-2">Login</Link>
                                <small className="m-2 pt-1 pt-lg-0">or</small>
                                <Link to="/create" className="nav-link p-0 pt-2 my-2 text-nowrap pt-lg-0 mr-lg-3">Create Account</Link>
                            </div>
                        </li>
                        <li className="nav-item d-lg-none border-top"></li>
                        <li className="nav-item hover-cart d-none d-lg-block">
                            <div className="d-flex notfication-bubble-wrapper">
                                <i className="icon-cart m-2 link-text text-bold lead"></i>
                                <a className="nav-link p-0 m-2 mx-lg-0 mr-lg-2" href="/shopping">Cart</a>
                            </div>
                        </li>
                    </ul>
                </div>
            </nav>
        </header>);
    }
}

export default Header;
