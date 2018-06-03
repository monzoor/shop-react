import React, { Component } from 'react';
import { connect } from 'react-redux';
import {withRouter} from 'react-router-dom';

import Helmet from 'react-helmet';

import loginValidate from './LoginValidation';


// import { fetchPosts } from '../../../actions/postActions'

// import Slider from '../../Common/Slider';

class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            formData: {
                emailPhone: null,
                password: null,
            },
            errors: {},
            isLoading: false
        }
        this.onSubmit = this.onSubmit.bind(this);
        this.onChange = this.onChange.bind(this);
        this.onClick = this.onFocus.bind(this);
    }
    componentDidMount() {
        // this.props.dispatch(fetchPosts())
    }

    onFocus = (e) => {
        const newState = Object.assign({}, this.state);
        delete newState.errors[e.target.name];
        this.setState({...newState})
    }

    isValid = () => {
        const { errors, isValid } = loginValidate(this.state);
        if (!isValid) {
            this.setState({ errors })
        }
        return isValid;
    }

    onSubmit = (e) => {
        e.preventDefault();
        if(this.isValid()) {
            console.log('ppppppp');
        }
    }
    onChange = (e)  => {
        this.setState({
            formData: {
                ...this.state.formData,[e.target.name] : e.target.value
            }
        });
    }
    render() {
        const {errors, formData, isLoading } = this.state;
        
        return (
            <div className="content-wrapper">
                <Helmet>
                    <title>Shoparu - Login</title>
                    <meta name="description" content="Nested component" />
                </Helmet>
                <div className="container my-lg-5 mb-5">
                    <div className="row justify-content-center">
                        <div className="col col-lg-4">
                            <h3 className="text-center mb-5"> <i className="icon-user"></i> Login</h3>
                            <form id="logIn" onSubmit={this.onSubmit}>
                                <input type="hidden" name="ci_csrf_token" value=""/>
                                <div className="form-group"> <label htmlFor="emailPhone">
                                    <strong>Email/Phone</strong></label>

                                    <input onChange={this.onChange} value={formData.emailPhone || ''} onClick={this.onFocus} type="text" className={`form-control ${(errors.emailPhone ? 'is-invalid' : '')}`} name="emailPhone" id="emailPhone" aria-describedby="emailHelp" placeholder="Enter email or phone number"/>
                                    <div className="invalid-feedback text-first-cap">{errors.emailPhone}</div>
                                </div>
                                <div className="form-group"> <label htmlFor="password">
                                    <strong>Password</strong></label>
                                    <input onChange={this.onChange} value={formData.password || ''} onClick={this.onFocus} type="password" name="password" className={`form-control ${(errors.password ? 'is-invalid' : '')}`} id="password" placeholder="Password"/>
                                    <div className="invalid-feedback text-first-cap">{errors.password}</div>
                                </div>
                                <div className="form-check mb-3">
                                    <label className="form-check-label">
                                        <input type="checkbox" name="rememberMe" className="form-check-input"/>
                                        <small className="d-block text-lh-s">Remember me</small>
                                    </label>
                                    <a href="/forgot-password-request" className="text- base-text float-right">
                                        <small>Forgot Password?</small>
                                    </a>
                                </div>
                                <button type="submit" className="btn btn-shoparu-fill btn-lg btn-block" disabled={isLoading}>Login</button>
                                <small className="text-center my-3 d-block">OR</small>
                                <a href="/login/facebook" className="btn btn-lg btn-block bg-facebook text-white btn-link">
                                    <i className="icon-facebook"></i> Facebook
                                </a>
                                <a href="/login/google" className="btn btn-lg btn-block bg-google text-white">
                                    <i className="icon-gplus mr-3"></i>Google
                                </a>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}



// const mapStateToProps = (state) => {
//     console.log('login',state);
//     return {
//         posts: state.allCategories.categories
//     };
// };


// export default withRouter(connect(mapStateToProps)(Login))
export default Login;
