import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';
import FormLogin from '../Components/Common/FormLogin';
import FormSignUp from '../Components/Common/FormSignUp';


export default class App extends Component {
  render() {
    return (
      <FormLogin />
    );
  }
}
