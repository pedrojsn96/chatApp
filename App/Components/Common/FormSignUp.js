import React, {Component} from 'react';
import {StyleSheet, Text, View, Button, TextInput, ImageBackground} from 'react-native';
import { connect } from 'react-redux';
import { setEmail, setPassword, setName, createUser } from '../../Containers/Redux/Actions/AuthActions'; 
//styles
import styles from './Styles/FormLoginStyle';

class FormSignUp extends Component {

  _createUser() {
    const { name, email, password } = this.props; 

    this.props.createUser({
      name, 
      email, 
      password
    })
  }

  render() {
    return (
      <ImageBackground source={require('../../Images/bg.png')} style={{ flex: 1, width: null }}>
        <View style={styles.container}> 
          <View style={styles.containerInput}>
              <TextInput value={this.props.name} style={styles.textInput} placeholder="Nome" placeholderTextColor="#fff" onChangeText={(name) => this.props.setName(name)} />
              <TextInput value={this.props.email} style={styles.textInput} placeholder="Email" placeholderTextColor="#fff" onChangeText={(text) => this.props.setEmail(text)} />
              <TextInput secureTextEntry value={this.props.password} style={styles.textInput} placeholder="Senha" placeholderTextColor="#fff" onChangeText={(password) => this.props.setEmail(password)} />
          </View>
          <View style={styles.containerButton}>
              <Button title="Cadastrar" color="#115E54" onPress={this._createUser()} />
          </View>
        </View>
      </ImageBackground>
    );
  }
}


const mapStateToProps = state => ({
  name: state.AuthReducer.name,
  email: state.AuthReducer.email,
  password: state.AuthReducer.password
})

export default connect(mapStateToProps, { setEmail, setPassword, setName, createUser })(FormSignUp);
