import React, { Component } from "react";

import { Provider } from "react-redux";
// import { store as reduxStore } from "../redux/store";
import Routes from './../Routes'

import reduxStore from './../store';


class App extends Component {
    render () {
        return (
            <Routes />
        )
    }
}

const ReduxApp = () => (
  <Provider store={reduxStore}>
    <App />
  </Provider>
);

export default ReduxApp;
