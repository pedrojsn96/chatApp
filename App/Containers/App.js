import React, {Component} from 'react';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
// import {Platform, StyleSheet, Text, View} from 'react-native';

// import FormLogin from '../Components/Common/FormLogin';
// import FormSignUp from '../Components/Common/FormSignUp';

import Routes from './Routes';
import reducers from './Redux/Reducers';
// import firebase from 'firebase'; dar erro no android
import firebase from '@firebase/app';
import '@firebase/auth';
import '@firebase/database';

export default class App extends Component {

  componentDidMount(){
    this._onInitializeApp();
  }

  _onInitializeApp = () => {
		// Initialize Firebase
		return firebase.initializeApp({
			apiKey: "AIzaSyBvDCVOhXPq8eWDHvaj2Iw6TiYJT0PVvDA",
      authDomain: "app-mensagem-6b000.firebaseapp.com",
      databaseURL: "https://app-mensagem-6b000.firebaseio.com",
      projectId: "app-mensagem-6b000",
      storageBucket: "app-mensagem-6b000.appspot.com",
      messagingSenderId: "282147069718"
		});
	};

  render() {
    return (
      <Provider store={createStore(reducers)}>
        <Routes />
      </Provider>
    );
  }
}
