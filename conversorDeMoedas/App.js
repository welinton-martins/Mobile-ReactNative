import React, { Component } from 'react';
import { Picker } from '@react-native-picker/picker';
import { StyleSheet, Text, TextInput, View } from 'react-native';

class App extends Component {
  constructor(props) {
    super(props); 
  }
  return() {
    return( 
      <View style={styles.container}>
        <Text>Conversor de Moedas Dolar, Real e Euro</Text>
        <Text>De:</Text>
        <TextInput
          value='oi'
          onChangeText={(valor) => this.setState({ valor: valor })}
          style={styles.input}
        />
        <Text>Para:</Text>
        <TextInput
          value='oi'
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
});

export default App;