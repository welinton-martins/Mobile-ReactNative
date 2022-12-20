import React, { Component } from 'react';
import { View, Text, StyleSheet, Pressable, TextInput } from 'react-native';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      n1: 0,
      n2: 0,
      result: '___',
    };

    this.multiplicar = this.multiplicar.bind(this);
  }

  multiplicar() {
    // if (this.state.n1 )
    this.setState({ result: this.state.n1 * this.state.n2 });
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>Multiplicador de Numeros</Text>
        <TextInput
          style={styles.input}
          placeholder="Digite o primeiro n"
          onChangeText={(n) => this.setState({ n1: n })}
        />

        <TextInput
          style={styles.input}
          placeholder="Digite o segundo n"
          onChangeText={(n) => this.setState({ n2: n })}
        />

        <Pressable style={styles.botao} onPress={() => this.multiplicar()}>
          <Text style={styles.textoBotao}>Calcular</Text>
        </Pressable>

        <Text style={styles.resultado}>Resultado: {this.state.result}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  input: {
    height: 45,
    borderWitdth: 1,
    borderColor: 'black',
    fontSize: 20,
    margin: 10,
  },
  title: {
    color: 'orange',
    fontSize: 30,
    margin: 15,
    textAlign: 'center',
  },
  resultado: {
    fontSize: 30,
    textAlign: 'center',
    color: 'green',
    paddingTop: 20,
  },
  container: {
    flex: 1,
    paddingTop: 80,
    borderColor: 'black',
    borderWidth: 3,
  },
  botao: {
    width: 350,
    height: 50,
    marginTop: 20,
    marginLeft: 20,
    backgroundColor: '#6076db',
  },
  textoBotao: {
    textAlign: 'center',
    textAlignVertical: 'center',
    fontSize: 30,
  },
});

export default App;