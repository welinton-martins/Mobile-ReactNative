import React, { Component } from 'react';
import { StyleSheet, Text, TextInput, View, Dimensions, Pressable } from 'react-native';

import {Picker} from '@react-native-picker/picker';

class App extends Component {
  constructor(props) {
    super(props); 
    this.state = {
      result: 'Resultado\n______'
    }
  }
  render() {
    return( 
      <View style={styles.container}>
        <Text style={styles.header}>Conversor de Moedas Dolar, Real e Euro</Text>
        <Text style={styles.text}>
          Valor: 
          <TextInput
            onChangeText={(valor) => this.setState({ valor: valor })}
            style={styles.input}
          />
        </Text>
        
        <Text style={styles.text}>
          De:
          <Picker style={styles.tipo}>
            <Picker.Item Key={1} value={1} label="Dolar" />
            <Picker.Item Key={2} value={2} label="Real" />
            <Picker.Item Key={3} value={3} label="Euro" />
          </Picker>
        </Text>
        
        <Text style={styles.text}>
          Para:        
          <Picker style={styles.tipo}>
            <Picker.Item Key={1} value={1} label="Dolar" />
            <Picker.Item Key={2} value={2} label="Real" />
            <Picker.Item Key={3} value={3} label="Euro" />
          </Picker>
        </Text>
       
       <Pressable>
          <Text style={styles.botao}>Converter</Text>
        </Pressable>
        <Text style={styles.result}>
          {this.state.result}
        </Text>
      </View>
    );
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
  text: {
    fontSize: 20,
  },
  botao: {
    fontSize: 20,
    padding: 5,
    width: Dimensions.get('window').width * .8,
    textAlign: 'center',
    backgroundColor: 'blue'
  },
  tipo: {
    width: Dimensions.get('window').width * .7,
    padding: 3,
  },
  result: {
    color: '#0f0',
    fontSize: 20,
    marginTop: '5%',
    textAlign: 'center'
  },
  profissao: {
    fontSize: 35,
    color: 'purple',
  },
  header: {
    fontSize: 35,
    color: '#f80',
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