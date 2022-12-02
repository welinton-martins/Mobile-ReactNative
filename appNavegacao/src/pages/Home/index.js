import React from 'react';
import { View, Text, Button } from 'react-native';
import { useNavigation } from '@react-navigation/native';

export default function Home() {
    const navigation = useNavigation();

    function irSobre(){
        navigation.navigate('Sobre', { nome: 'Welinton', email: 'welintonmartins4@outlook.com' });
    }
  
    return (
        <View>
            <Text>Home</Text>
            <Text>Bem vindo a tela Home!</Text>
            <Button
            title="Ir para tela Sobre"
            onPress={irSobre}
            />
        </View>
    );
}
