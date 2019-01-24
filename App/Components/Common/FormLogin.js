import React, {Component} from 'react';
import {StyleSheet, Text, View, Button, TextInput, TouchableHighlight, ImageBackground} from 'react-native';
import { Actions } from 'react-native-router-flux';
import { connect } from 'react-redux';
import { setEmail, setPassword } from '../../Containers/Redux/Actions/AuthActions'; 

//styles
import styles from './Styles/FormLoginStyle';

class FormLogin extends Component {
  render() {
    return (
      <ImageBackground source={require('../../Images/bg.png')} style={{ flex: 1, width: null }}>
        <View style={styles.container}> 
          <View style={styles.containerHeader}>
              <Text style={styles.titleHeader}> App de Mensagem</Text>
          </View>
          <View style={styles.containerInput}>
              <TextInput value={this.props.email} style={styles.textInput} placeholder="Email" placeholderTextColor="#fff" onChangeText={(text) => this.props.setEmail(text)} />
              <TextInput secureTextEntry value={this.props.password} style={styles.textInput} placeholder="Senha" placeholderTextColor="#fff" onChangeText={(password) => this.props.setPassword(password)} />
              <TouchableHighlight onPress={ () => Actions.formSignUp() }>
                <Text style={styles.textSignUp}>Ainda não tem cadastro? Cadastre-se</Text>
              </TouchableHighlight>
          </View>
          <View style={styles.containerButton}>
              <Button title="Acessar" color="#115E54" onPress={() => false} />
          </View>
        </View>
      </ImageBackground>
    );
  }
}

const mapStateToProps = state => ({
  email: state.AuthReducer.email,
  password: state.AuthReducer.password
})

export default connect(mapStateToProps, { setEmail, setPassword })(FormLogin);