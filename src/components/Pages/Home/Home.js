import React, { Component } from 'react';
import { connect } from 'react-redux';
import {withRouter} from 'react-router-dom';

// import { fetchPosts } from '../../../actions/postActions'
// import Slider from '../../Common/Slider';

class Home extends Component {
    componentDidMount() {
        // this.props.dispatch(fetchPosts())
    }
    render() {
        // const postItems = this.props.posts.map(post => (
        //     <div key={post.id}>
        //         <h3>{post.title}</h3>
        //         <p>{post.body}</p>
        //     </div>
        // ))
        return (
            <div className="container-fluid">
                <div className="row">
                    postItems
                </div>
            </div>
        );
    }
}



const mapStateToProps = (state) => {
    // console.log('====1====',state);
    return {
        posts: null
    };
};


export default withRouter(connect(mapStateToProps)(Home))
