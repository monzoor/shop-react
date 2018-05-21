import React, { Component } from 'react';
import { connect } from 'react-redux';

import { fetchPosts } from '../../../actions/postActions'
// import Slider from '../../Common/Slider';

class Home extends Component {
    componentWillMount() {
        console.log('=====',this.props.fetchPosts);
        this.props.fetchPosts();
    }
    render() {
        const postItems = this.props.posts.map(post => (
            <div key={post.id}>
                <h3>{post.title}</h3>
                <p>{post.body}</p>
            </div>
        ))
        return (
            <div className="container-fluid">
                <div className="row">
                    {postItems}
                </div>
            </div>
        );
    }
}

const mapStateToProps = state => ({
    posts: state.posts.items
})


export default connect(mapStateToProps, { fetchPosts })(Home);
