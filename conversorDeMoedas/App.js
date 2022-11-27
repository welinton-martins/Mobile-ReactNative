import React, { Component } from 'react';
import { View, Text, TextInput, Image, StyleSheet, ScrollView, Dimensions } from 'react-native';

class App extends Component {
  render() {
    return(
      <View style={styles.container}>
        <Text style={styles.header}>Conversor de Moedas Dolar, Real e Euro</Text>
        <TextInput style={styles.textInput}
          onChangeText={(nome) => this.setState({ nome: nome})}
        />
        <ScrollView style={styles.scroll}
          scrollEnabled={true} horizontal={false}
          showsVerticalScrollIndicator={true}>
          <View style={styles.card}>
            <Text style={styles.profissao}>Desenvolvedor Backend</Text>
            <Text style={styles.salario}>Salario: R$ 3000,00</Text>
            <Text style={styles.descricao}>Descricao: Mollit esse sint est quis esse qui anim ipsum sunt ea Lorem exercitation.</Text>
            <Text style={styles.contato}>Contato:  sit sit cupidatat ullamco enim aute.</Text>
          </View>
        </ScrollView>
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
  profissao: {
    fontSize: 35,
    color: 'purple',
  },
  header: {
    fontSize: 50,
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
