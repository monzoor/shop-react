import Header from './Header';
import Footer from './Footer';

import React, { Component } from 'react';
import { connect } from 'react-redux';
import {withRouter} from 'react-router-dom';
import PropTypes from 'prop-types';

import { fetchPosts } from '../../actions/postActions';
import { getCategories } from '../../actions/categoryActions';
// import Slider from '../../Common/Slider';

class MainLayout extends Component {
    constructor(props){
        super(props);
    }
    componentDidMount() {
        // this.props.dispatch(fetchPosts())
        this.props.dispatch(getCategories());
    }
    render() {
        // console.log(this.props);
        return (
            <div>
              <Header {...this.props}/>
                  <div>
                      {this.props.children}
                  </div>
              <Footer/>
            </div>
        );
    }
}


const mapStateToProps = (state) => {
    // console.log(state);
    return {
        allCategories: state.allCategories.categories
    };
};

// TODO
// MainLayout.propTypes = {
//     getCategories: PropTypes.func,
//     allCategories: PropTypes.object
// }



export default withRouter(connect(mapStateToProps)(MainLayout))
