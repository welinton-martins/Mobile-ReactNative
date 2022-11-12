import React, { Component } from 'react';
import { View, Text, Image, StyleSheet, ScrollView, Dimensions } from 'react-native';

class App extends Component {
  render() {
    return(
      <View style={styles.container}>
        <Text style={styles.header}>Vagas</Text>
        <ScrollView style={styles.scroll}
          scrollEnabled={true} horizontal={false}
          showsVerticalScrollIndicator={true}>
          <View style={styles.card}>
            <Text style={styles.profissao}>Desenvolvedor Backend</Text>
            <Text style={styles.salario}>Salario: R$ 3000,00</Text>
            <Text style={styles.descricao}>Descricao: Mollit esse sint est quis esse qui anim ipsum sunt ea Lorem exercitation.</Text>
            <Text style={styles.contato}>Contato:  sit sit cupidatat ullamco enim aute.</Text>
          </View>
          <View style={styles.card}>
            <Text style={styles.profissao}>Engenheiro de dados</Text>
            <Text style={styles.salario}>Salario: R$ 4000,00</Text>
            <Text style={styles.descricao}>Descricao: Proident aliquip minim aliquip excepteur.</Text>
            <Text style={styles.contato}>Contato:  aliquip.</Text>
          </View>
          <View style={styles.card}>
            <Text style={styles.profissao}>Desenvolvedor Backend</Text>
            <Text style={styles.salario}>Salario: R$ 4000,00</Text>
            <Text style={styles.descricao}>Descricao: Fugiat anim ad tempor ex adipisicing cupidatat ex laboris.</Text>
            <Text style={styles.contato}>Contato: .</Text>
          </View>
          <View style={styles.card}>
            <Text style={styles.profissao}>Desenvolvedor Backend</Text>
            <Text style={styles.salario}>Salario: R$ 4000,00</Text>
            <Text style={styles.descricao}>Descricao: Quis eiusmod pariatur do velit pariatur nostrud ex sunt veniam non ullamco id consequat magna.</Text>
            <Text style={styles.contato}>Contato:  voluptate reprehenderit.</Text>
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
