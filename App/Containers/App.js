import React, {Component} from 'react';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
// import {Platform, StyleSheet, Text, View} from 'react-native';

// import FormLogin from '../Components/Common/FormLogin';
// import FormSignUp from '../Components/Common/FormSignUp';

import Routes from './Routes';
import reducers from './Redux/Reducers';

export default class App extends Component {
  render() {
    return (
      <Provider store={createStore(reducers)}>
        <Routes />
      </Provider>
    );
  }
}
