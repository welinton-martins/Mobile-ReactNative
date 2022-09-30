import React, { Component } from 'react';
import { View, Text, StyleSheet, Pressable, TextInput } from 'react-native';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      pes: 0,
      alt: 0,
      imc: 'Classificacao',
    };

    this.calcular = this.calcular.bind(this);
  }

  calcular() {
    this.setState({ imc: this.state.pes / (this.state.alt * 2) });
 
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>Calculo do IMC</Text>
        {/* <Image>

        </Image> */}
        <TextInput
          style={styles.input}
          placeholder="Peso"
          onChangeText={(pes) => this.setState({ pes: pes })}
        />

        <TextInput
          style={styles.input}
          placeholder="Altura"
          onChangeText={(alt) => this.setState({ alt: alt })}
        />

        <Pressable style={styles.botao} onPress={() => this.calcular()}>
          <Text style={styles.textoBotao}>Verificar</Text>
        </Pressable>

        <Text style={styles.resultado}>{this.state.imc}</Text>
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