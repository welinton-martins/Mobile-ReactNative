import React, { Component } from 'react';
import { Picker } from '@react-native-picker/picker';
import {  Dimensions, Image, StyleSheet, Text, TextInput, View } from 'react-native';

class App extends Component {
  constructor(props) {
    super(props); 
  }
  render() {
    return( 
      <View style={styles.container}>
        <Text style={styles.header}>Conversor de Moedas Dolar, Real e Euro</Text>
        <Text>De:</Text>
        
        <TextInput style={styles.textInput}
          onChangeText={(nome) => this.setState({ nome: nome})}
        />
        <TextInput
          onChangeText={(valor) => this.setState({ valor: valor })}
          style={styles.input}
        />
        <Text>Para:</Text>
        <Picker>
          <Picker.Item key={1} value={1} label=""/>
          <Picker.Item key={1} value={1} label=""/>
          <Picker.Item key={1} value={1} label=""/>
          <Picker.Item key={1} value={1} label=""/>
        </Picker>
        <TextInput
          onChangeText={(valor) => this.setState({ valor: valor })}
          style={styles.input}
        />      
        <Text style={styles.resultado}>Resultado</Text>
      </View>
     )

    }
  }

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  input: {
    height: 40,
    width: 300,
    fontSize: 30
  },
  resultado: {
    color: '#fff',
    fontSize: 20,
  },
  profissao: {
    fontSize: 35,
    color: 'purple',
  },
  header: {
    fontSize: 25,
    marginTop: '5%',
    marginBottom: '5%'
  },
  salario: {
    fontSize: 30,
  },
  descricao: {
    fontSize: 30,
  },
  contato: {
    fontSize: 30,
  },
  card:{
    borderWidth: 5,
    borderColor: '#000',
    height: 500,
    width: Dimensions.get('window').width * .95,
    margin: '2%',
    paddingLeft: '3%',
    paddingTop: '5%',
  }
});

export default App;