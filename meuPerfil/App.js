import React, { Component } from 'react';
import { View, Text, Image} from 'react-native';

class App extends Component{
  render(){
    return(
      <View>
        <Image
          source={{ uri: 'https://scontent-gru2-2.xx.fbcdn.net/v/t1.6435-9/102314262_686046902232284_5697973708186976256_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=WN7nrth1p6sAX-c2aH4&_nc_ht=scontent-gru2-2.xx&oh=00_AT_-lb7sW3ZEx4FRv3vI1n2DlcAzB60frU3odCq6L7XFnA&oe=63386C97'}}
          style={{ width: 200, height: 200, margin: 100 }}
          />
        <Text>Dados pessoais:</Text>
        <Text>Formacao:</Text>
        <Text>Tecnico em Desenvolvimento de Sistemas</Text>
        <Text>Experiencia:</Text>
        <Text>Estagio em Analise e Programacao de Sistemas</Text>
        <Text>Projetos:</Text>
        <Text>Projeto Imobiliaria</Text>
      </View>
    )
  }
}
 
export default App;