import React from 'react';
import Header from '../Common/Header';
import Footer from '../Common/Footer'
export const MainLayout = props => (
  <div>
    <Header/>
    <div>
        {props.children}
    </div>
    <Footer/>
  </div>
)
