import React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Home from './src/pages/Home';
import Sobre from './src/pages/Sobre';
import Contato from './src/pages/Contato';

const Stack = createStackNavigator();

import {View, Text, StyleSheet} from 'react-native';
 
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Feather from 'react-native-vector-icons/Feather';
 
export default function App(){
  return(
    <View style={styles.container}>
      <Text>Aula de React Native</Text>
 
      <FontAwesome name='home' size={35} color='#11118c' />
      <Feather name='activity' size={35} color='#54a300' />

      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen 
          name="Home"
          component={Home}
          options={{
            title:'Início',
            headerStyle:{
              backgroundColor: 'orange'
            },
            headerTintColor: '#FFF',
            //headerShown: false,
          }} 

          />
          <Stack.Screen 
          name="Sobre" 
          component={Sobre} 
          />

          <Stack.Screen
          name="Contato"
          component={Contato}
          />

        </Stack.Navigator>
      </NavigationContainer>
    </View>
  );
}
 
const styles = StyleSheet.create({
  container:{
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  btnYoutube:{
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 5,
    backgroundColor: '#FF0000',
    borderRadius: 5,
  },
  btnText:{
    paddingLeft: 10,
    color: '#FFF'
  }
})
