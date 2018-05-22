import Header from '../Common/Header';
import Footer from '../Common/Footer';

import React, { Component } from 'react';
import { connect } from 'react-redux';
import {withRouter} from 'react-router-dom';

import { fetchPosts } from '../../actions/postActions'
// import Slider from '../../Common/Slider';

class MainLayout extends Component {
    constructor(props){
        super(props);
    }
    componentDidMount() {
        this.props.dispatch(fetchPosts())
    }
    render() {
        return (
            <div>
              <Header/>
                  <div>
                      {this.props.children}
                  </div>
              <Footer/>
            </div>
        );
    }
}



const mapStateToProps = (state) => {
    return {
        posts: state.posts.items
    };
};


export default withRouter(connect(mapStateToProps)(MainLayout))
