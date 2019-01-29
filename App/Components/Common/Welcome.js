import React, {Component} from 'react';
import {StyleSheet, Text, View, Button, Image, ImageBackground} from 'react-native';
import { Actions } from 'react-native-router-flux';

//styles
import styles from './Styles/WelcomeStyle';

export default class Welcome extends Component {
  render() {
    return (  
        <ImageBackground source={require('../../Images/bg.png')} style={{ flex: 1, width: null }}>
            <View style={styles.container}> 
                <View style={styles.containerHeader}>
                    <Text style={styles.titleHeader}>Welcome!</Text>
                    <Image source={require('../../Images/logo.png')} />
                </View>
                <View style={styles.containerButton}>
                    <Button title="Login" color="#115E54" onPress={() => Actions.formLogin()} />
                </View>
            </View>
        </ImageBackground>
    );
  }
}