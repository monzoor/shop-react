import React, { Component } from 'react';

class Footer extends Component {
  render() {
    return (
        <footer>
           <div className="container-fluid bg-green">
              <div className="container pt-3 pb-3">
                 <div className="row justify-content-md-center p-2">
                    <div className="col-lg-auto">
                       <nav className="nav flex-column flex-lg-row text-center d-flex footer">
                          <li className="nav-item"><a className="nav-link text-s base-text white-text" href="/page/AboutUs">About us</a></li>
                          <li className="nav-item"><a className="nav-link text-s base-text white-text" href="/page/TermsConditions">Terms &amp; Conditions</a></li>
                          <li className="nav-item"><a className="nav-link text-s base-text white-text" href="/page/PrivacyPolicy">Privacy Policy</a></li>
                          <li className="nav-item"><a className="nav-link text-s base-text white-text" href="/page/ReturnPolicy">Return &amp; Refund Policy</a></li>
                          <li className="nav-item"><a className="nav-link text-s base-text white-text" href="tel:+8801707111222">Customer Service: +8801707111222</a></li>
                          <li className="nav-item"><a className="nav-link text-s base-text white-text" href="mailto:support@shoparu.com">support@shoparu.com</a></li>
                       </nav>
                    </div>
                 </div>
              </div>
           </div>
           <div className="container py-3">
              <div className="row">
                 <div className="col-lg-3"> <img className="mt-1 m-auto m-lg-0" src="/build/img/shoparu.73a9a9fc.svg" width="120" alt=""/> </div>
                 <div className="col-lg-6 order-lg-2 my-3"> <img src="/build/img/bank-logo.ca6bb83a.png" className="img-fluid" alt="Bank Logo"/> </div>
                 <div className="col-lg-3 order-lg-1 my-3">
                    <p className="text-s text-center text-lg-right mb-0 align-middle mt-1">© 2017, Shoparu.com </p>
                 </div>
              </div>
           </div>
        </footer>
    );
  }
}

export default Footer;
