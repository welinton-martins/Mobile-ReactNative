import React, { Component } from 'react';
import { View, Text, StyleSheet,  Pressable } from 'react-native';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      numero: 0,
    };

    this.mais = this.mais.bind(this);
    this.menos = this.menos.bind(this);
  }

  mais() {
    this.setState({ numero: this.state.numero + 1 });
  }

  menos() {
    this.setState({ numero: this.state.numero - 1 });
  }

  render() {
    return (
      <View style={styles.container}>
        <Text
          style={{
            color: 'orange',
            fontSize: 25,
            margin: 15,
            textAlign: 'center',
          }}>
          Contador de Pessoas
        </Text>
        <View style={styles.caixa}>
          <Text style={styles.textoCaixa}>{this.state.numero}</Text>
        </View>
        <Pressable style={styles.botaoMais} onPress={this.mais}>
          <Text style={styles.textoBotao}>+</Text>
        </Pressable>
        <Pressable style={styles.botaoMenos} onPress={() => this.menos()}>
          <Text style={styles.textoBotao}>-</Text>
        </Pressable>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 80,
    borderColor: 'black',
    borderWidth: 3
  },
  botaoMais: {
    width: 300,
    height: 50,
    marginTop: 20,
    marginLeft: 10,
    backgroundColor: 'green',
  },
  botaoMenos: {
    width: 300,
    height: 50,
    marginTop: 20,
    marginLeft: 10,
    backgroundColor: 'red',
  },
  textoBotao: {
    textAlign: 'center',
    textAlignVertical: 'center',
    fontSize: 30,
  },
  caixa: {
    borderColor: 'black',
    borderWidth: 2,
    width: 100,
    marginLeft: 120,
  },
  textoCaixa: {
    color: 'red',
    fontSize: 60,
    textAlign: 'center',
  },
});

export default App;