import React, { Component } from 'react';
import { View, Text, StyleSheet, Pressable, TextInput, TouchableNativeFeedbackBase } from 'react-native';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      result: '____________'
    };

    this.gerar = this.gerar.bind(this);
  }

  gerar() {
    this.setState({ result: Math.floor(Math.random() * 10) });
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>Jogo do N Aleatorio</Text>
        {/* <Image>

        </Image> */}
        <Text style={styles.heading}>Pense um um n de 0 a 10</Text>
      
        <Text style={styles.resultado}>{this.state.result}</Text>
        
        <Pressable style={styles.botao} onPress={() => this.gerar()}>
          <Text style={styles.textoBotao}>Descobrir</Text>
        </Pressable>
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
  heading: {
    color: 'red',
    fontSize: 25,
    margin: 5,
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