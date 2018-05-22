import React, { Component } from 'react';
import { connect } from 'react-redux';
import {withRouter} from 'react-router-dom';

import { fetchPosts } from '../../../actions/postActions'
// import Slider from '../../Common/Slider';

class Login extends Component {
    componentDidMount() {
        // this.props.dispatch(fetchPosts())
    }
    render() {
        return (
            <div className="container-fluid">
                <div className="row">
                    login
                </div>
            </div>
        );
    }
}



const mapStateToProps = (state) => {
    console.log('login',state);
    return {
        posts: state.posts.items
    };
};


export default withRouter(connect(mapStateToProps)(Login))
