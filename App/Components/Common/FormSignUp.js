import React, {Component} from 'react';
import {StyleSheet, Text, View, Button, TextInput} from 'react-native';

//styles
import styles from './Styles/FormLoginStyle';

export default class App extends Component {
  render() {
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
