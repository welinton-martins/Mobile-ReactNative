import React, { Component } from 'react';
import { View, Text, StyleSheet, Pressable, TextInput, Switch } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import Slider from '@react-native-community/slider'

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      nome: '__________',
      idade: '__________',
      sexo: '__________',
      escol: '__________',
      limite: 0,
      brasil: '__________',
      dados: {
        nome: '__________',
        idade: '__________',
        sexo: '__________',
        escol: '__________',
        limite: '__________',
        brasil: '__________',
      }
    };

    this.getDados = this.getDados.bind(this);
  }

  getDados() {
    let dados = {
      ...this.state.dados, 
      nome: this.state.nome, 
      idade: this.state.idade,
      sexo: this.state.sexo ? 'Masculino' : 'Feminino',
      escol: this.state.escol ? 'Ensino Medio' : 'Superior',
      limite: Math.floor(this.state.limite),
      brasil: this.state.brasil ? 'Sim' : 'Nao',
    }

      this.setState({ dados: dados });
    }

    render() {
      return (
        <View style={styles.container}>
          <Text style={styles.title}>Abertura de Conta</Text>
          <View style={styles.inputContainer}>
            <Text style={styles.heading}>Nome:</Text>
            <TextInput style={styles.textInput}
              onChangeText={(nome) => this.setState({ nome: nome })}
            />
          </View>

          <View style={styles.inputContainer}>
            <Text style={styles.heading}>Idade:</Text>
            <TextInput style={styles.textInput1}
              onChangeText={(idade) => this.setState({ idade: idade })}
            />
          </View>

          <View style={styles.inputContainer}>
            <Text style={styles.heading}>Sexo</Text>
            <Picker
              style={styles.picker}
              selectedValue={this.state.sexo}
              onValueChange={(sexo) => this.setState({ sexo: sexo })}>
              <Picker.Item key={1} value={1} label="Masculino" />
              <Picker.Item key={2} value={2} label="Feminino" />
            </Picker>
          </View>

          <View style={styles.inputContainer} >
            <Text style={styles.heading}>Escolaridade</Text>
            <Picker
              style={styles.picker1}
              selectedValue={this.state.escol}
              onValueChange={(escol) => this.setState({ escol: escol })}>
              <Picker.Item key={1} value={1} label="Ensino Medio" />
              <Picker.Item key={1} value={2} label="Superor" />
            </Picker>
          </View>

          <View style={styles.inputContainer} >
            <Text style={styles.heading}>Limite</Text>
            <Slider style={styles.slider}
              minimumValue={0}
              maximumValue={1000}
              onValueChange={(limite) => this.setState({ limite: limite })}
              value={this.state.limite}
            />
          </View>
          <Text style={styles.limite}>{Math.floor(this.state.limite)}</Text>

          <View style={styles.inputContainer} >
            <Text style={styles.heading}>Brasileiro</Text>
            <Switch
              value={this.state.brasil}
              onValueChange={(brasil) => this.setState({ brasil: brasil })}
            />
          </View>

          <Pressable style={styles.botao} onPress={() => this.getDados()}>
            <Text style={styles.textoBotao}>Confirmar</Text>
          </Pressable>

          <Text style={styles.title1}>Dados informados!:</Text>
          <Text style={styles.heading}>Nome: {this.state.dados.nome}</Text>
          <Text style={styles.heading}>Idade: {this.state.dados.idade}</Text>
          <Text style={styles.heading}>Sexo: {this.state.dados.sexo}</Text>
          <Text style={styles.heading}>Escolaridade: {this.state.dados.escol}</Text>
          <Text style={styles.heading}>Limite: {this.state.dados.limite}</Text>
          <Text style={styles.heading}>Brasileiro: {this.state.dados.brasil}</Text>
        </View>
      );
    }
  }

  const styles = StyleSheet.create({
    inputContainer: {
      display: 'flex',
      flexDirection: 'row',
    },
    input: {
      display: 'flex',
      height: 45,
      borderWitdth: 1,
      borderColor: 'black',
      fontSize: 20,
    },
    title: {
      color: 'red',
      fontSize: 30,
      margin: 15,
      textAlign: 'center',
    },
    title1: {
      color: 'blue',
      fontSize: 30,
      margin: 15,
      textAlign: 'center',
    },
    heading: {
      fontSize: 25,
      margin: 5,
      marginLeft: 15,
    },
    limite: {
      textAlign: 'center',
      fontSize: 15,
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
      width: '90%',
      height: '5%',
      margin: '5%',
      backgroundColor: 'green',
    },
    textoBotao: {
      textAlign: 'center',
      textAlignVertical: 'center',
      fontSize: 30,
    },
    slider: {
      width: '70%',
      margin: '3%',
    },
    textInput: {
      backgroundColor: '#eeeeee',
      width: '70%',
      margin: '1%',
    },
    textInput1: {
      backgroundColor: '#eeeeee',
      width: '20%',
      margin: '1%',
    },
    picker: {
      width: '30%'
    }
    ,
    picker1: {
      width: '40%'
    }
  });

export default App;