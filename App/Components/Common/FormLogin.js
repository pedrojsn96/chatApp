import React, {Component} from 'react';
import {StyleSheet, Text, View, Button, TextInput} from 'react-native';


export default class App extends Component {
  render() {
    return (
      <View> 
        <View>
            <Text> App de Mensagem</Text>
        </View>
        <View>
            <TextInput placeholder="Email" />
            <TextInput placeholder="Senha" />
            <Text>Ainda não tem cadastro? Cadastre-se</Text>
        </View>
        <View>
            <Button title="Acessar" onPress={() => false} />
        </View>
      </View>
    );
  }
}
