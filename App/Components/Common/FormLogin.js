import React, {Component} from 'react';
import {StyleSheet, Text, View, Button, TextInput, TouchableHighlight} from 'react-native';
import { Actions } from 'react-native-router-flux';
import { connect } from 'react-redux';

//styles
import styles from './Styles/FormLoginStyle';

class FormLogin extends Component {
  render() {
    console.log(this.props);
    return (
      <View style={styles.container}> 
        <View style={styles.containerHeader}>
            <Text style={styles.titleHeader}> App de Mensagem</Text>
        </View>
        <View style={styles.containerInput}>
            <TextInput style={styles.textInput} placeholder="Email" />
            <TextInput style={styles.textInput} placeholder="Senha" />
            <TouchableHighlight onPress={ () => Actions.formSignUp() }>
              <Text style={styles.textSignUp}>Ainda não tem cadastro? Cadastre-se</Text>
            </TouchableHighlight>
        </View>
        <View style={styles.containerButton}>
            <Button title="Acessar" color="#115E54" onPress={() => false} />
        </View>
      </View>
    );
  }
}

const mapStateToProps = state => ({
  email: state.AuthReducer.email,
  password: state.AuthReducer.password
})

export default connect(mapStateToProps, null)(FormLogin);