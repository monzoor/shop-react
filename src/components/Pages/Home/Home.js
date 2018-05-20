import React, { Component } from 'react';
import Slider from '../../Common/Slider';

class Home extends Component {
  render() {
    return (
        <div className="container-fluid">
            <div className="row">
                <Slider/>
            </div>
        </div>
    );
  }
}

export default Home;
