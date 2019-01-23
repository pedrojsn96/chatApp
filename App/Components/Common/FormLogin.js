import React, {Component} from 'react';
import {StyleSheet, Text, View, Button, TextInput, TouchableHighlight} from 'react-native';
import { Actions } from 'react-native-router-flux';

//styles
import styles from './Styles/FormLoginStyle';

export default class App extends Component {
  render() {
    return (
      <View style={styles.container}> 
        <View style={styles.containerHeader}>
            <Text style={styles.titleHeader}> App de Mensagem</Text>
        </View>
        <View style={styles.containerInput}>
            <TextInput style={styles.textInput} placeholder="Email" />
            <TextInput style={styles.textInput} placeholder="Senha" />
            <TouchableHighLight onPress={ () => Actions.formSignUp() }>
              <Text style={styles.textSignUp}>Ainda não tem cadastro? Cadastre-se</Text>
            </TouchableHighLight>
        </View>
        <View style={styles.containerButton}>
            <Button title="Acessar" color="#115E54" onPress={() => false} />
        </View>
      </View>
    );
  }
}
