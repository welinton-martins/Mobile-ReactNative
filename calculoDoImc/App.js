import React, { Component } from 'react';
import { View, Text, StyleSheet, Pressable, TextInput, TouchableNativeFeedbackBase } from 'react-native';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      pes: 0,
      alt: 0,
      imc: 0,
      result: 'Classificacao'
    };

    this.calcular = this.calcular.bind(this);
  }

  calcular() {
    this.setState({ imc: this.state.pes / (this.state.alt * 2) });
    
    let imc = this.state.imc;

    if (imc < 18.5)
      this.setState({ result: "Abaixo do Peso" });
    else if (imc >= 18.5 && imc <= 24.9)
      this.setState({ result: "Peso Normal" });
    else if (imc >= 25 && imc <= 29.9)
      this.setState({ result: "Sobrepeso" });
    else if (imc >= 30 && imc <= 34.9)
      this.setState({ result: "Obesidade Grau I" });
    else if (imc >= 35 && imc <= 39.9)
      this.setState({ result: "Obesidade Grau II" });
    else if (imc >= 40)
      this.setState({ result: "Obesidade Grau III ou Morbida" });
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

        <Text style={styles.resultado}>{this.state.result}</Text>
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