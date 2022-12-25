import React, { Component } from 'react';
import { View, Text, StyleSheet, Pressable, TextInput } from 'react-native';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      alc: 0,
      gas: 0,
      res: 'Resultado',
    };

    this.calcular = this.calcular.bind(this);
  }

  calcular() {
    this.setState({ res: (this.state.alc / this.state.gas) > 0.7 ? 'O derivado da cana-de-açúcar é o melhor para abastecer' : 'A gasolina é melhor para abastecer' });
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>Alcool ou Gasolina</Text>
        {/* <Image>

        </Image> */}
        <TextInput
          style={styles.input}
          placeholder="Preco do Alcool"
          onChangeText={(alc) => this.setState({ alc: alc })}
        />

        <TextInput
          style={styles.input}
          placeholder="Preco da Gasolina"
          onChangeText={(gas) => this.setState({ gas: gas })}
        />

        <Pressable style={styles.botao} onPress={() => this.calcular()}>
          <Text style={styles.textoBotao}>Verificar</Text>
        </Pressable>

        <Text style={styles.resultado}>{this.state.res}</Text>
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
    color: 'red',
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
    backgroundColor: 'green',
  },
  textoBotao: {
    textAlign: 'center',
    textAlignVertical: 'center',
    fontSize: 30,
  },
});

export default App;