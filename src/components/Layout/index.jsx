import React from 'react';
import Header from '../Common/Header';
import Footer from '../Common/Footer'
export const MainLayout = props => (
  <div>
    <Header/>
    <div className="container">
        <div className="row">
            <div className="col-12">
                {props.children}
            </div>
        </div>
    </div>
    <Footer/>
  </div>
)
