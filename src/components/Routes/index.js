import React from 'react';
import { Route, Switch} from 'react-router-dom';
import {MainLayout} from './../Layout'

import Home from './../Pages/Home/Home';

import Login from './../Pages/Auth/Login';
import SignUp from './../Pages/Auth/Signup';

import Categories from './../Pages/Product/Categories';

import Product from './../Pages/Auth/Signup';
import Shopping from './../Pages/Auth/Signup';

import Search from './../Pages/Auth/Signup';
import User from './../Pages/Auth/Signup';


import FourOFour from './../404'

const AppRoute = ({ component: Component, layout: Layout, ...rest }) => (
  <Route {...rest} render={props => (
    <Layout>
      <Component {...props} />
    </Layout>
  )} />
)

export default () => (
    <Switch>
        <AppRoute path="/" exact layout={MainLayout} component={Home} />
        <AppRoute path="/login" exact layout={MainLayout} component={Login} />
        <AppRoute path="/create" exact layout={MainLayout} component={SignUp} />
        <AppRoute path="/categories" exact layout={MainLayout} component={Categories} />
        <AppRoute path="/product" exact layout={MainLayout} component={Home} />
        // <AppRoute path="/product/category/:categoryName" exact layout={MainLayout} component={Home} />
        // <AppRoute path="/product/category/listing/:categoryName" exact layout={MainLayout} component={Home} />
        // <AppRoute path="/product/:productName" exact layout={MainLayout} component={Home} />
        <AppRoute path="/shopping" exact layout={MainLayout} component={Home} />
        // <AppRoute path="/shopping/checkout" exact layout={MainLayout} component={Home} />
        // <AppRoute path="/shopping/checkout/:type" layout={MainLayout} exact component={Home} />
        <AppRoute path="/search" exact layout={MainLayout} component={Home} />
        <AppRoute path="/user" exact layout={MainLayout} component={Home} />
        // <AppRoute path="/user/profile" exact layout={MainLayout} component={Home} />
        // <AppRoute path="/user/orders" exact layout={MainLayout} component={Home} />
        // <AppRoute path="/user/address/manage" exact layout={MainLayout} component={Home} />
        // <AppRoute path="/user/change/password" exact layout={MainLayout} component={Home} />

        <AppRoute path="*" exact layout={MainLayout} component={FourOFour} />
    </Switch>
);
