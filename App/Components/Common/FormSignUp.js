import React, {Component} from 'react';
import {StyleSheet, Text, View, Button, TextInput} from 'react-native';
import { connect } from 'react-redux';

//styles
import styles from './Styles/FormLoginStyle';

class FormSignUp extends Component {
  render() {
    console.log("SIGN UP: ", this.props);
    return (
      <View style={styles.container}> 
        <View style={styles.containerInput}>
            <TextInput style={styles.textInput} placeholder="Nome" />
            <TextInput style={styles.textInput} placeholder="Email" />
            <TextInput style={styles.textInput} placeholder="Senha" />
        </View>
        <View style={styles.containerButton}>
            <Button title="Cadastrar" color="#115E54" onPress={() => false} />
        </View>
      </View>
    );
  }
}


const mapStateToProps = state => ({
  name: state.AuthReducer.name,
  email: state.AuthReducer.email,
  password: state.AuthReducer.password
})

export default connect(mapStateToProps, null)(FormSignUp);
