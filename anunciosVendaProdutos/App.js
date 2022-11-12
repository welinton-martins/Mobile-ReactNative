import React, { Component } from 'react';
import { View, Text, Image, StyleSheet, ScrollView, Dimensions } from 'react-native';

class App extends Component {
  render() {
    return(
      <View style={styles.container}>
        <Text style={styles.header}>Anuncios</Text>
        <ScrollView style={styles.scroll}
          scrollEnabled={true} horizontal={true}
          showsVerticalScrollIndicator={true}>
          <View style={styles.box1}>
            <Image
            style={styles.image}
            source={{ uri: 'https://picsum.photos/200/200?random' }}
            />
            <Text style={styles.text}>Velit duis dolor est cupidatat. Aliquip commodo est consequat amet veniam ex. Exercitation mollit voluptate mollit adipisicing irure. Deserunt reprehenderit labore consequat deserunt consequat duis ea et dolor aute labore nisi voluptate commodo. Excepteur mollit voluptate labore aute laborum dolore reprehenderit. Ullamco Lorem esse enim tempor reprehenderit tempor laboris.</Text>
          </View>
          <View style={styles.box2}>
            <Image
            style={styles.image}
            source={{ uri: 'https://picsum.photos/200/200?random' }}
            />
            <Text style={styles.text}>Irure pariatur aliqua nostrud mollit enim ea ipsum do voluptate proident. Laboris non adipisicing ullamco eiusmod laboris. Ut cillum labore nisi labore laboris mollit. Fugiat in labore ut amet culpa voluptate fugiat dolore voluptate commodo labore nostrud exercitation eiusmod.</Text>
          </View>
          <View style={styles.box3}>
            <Image
            style={styles.image}
            source={{ uri: 'https://picsum.photos/200/200?random' }}
            />
            <Text style={styles.text}>Cillum magna quis irure aliquip esse ea ipsum. Voluptate veniam ut esse adipisicing exercitation aliquip cillum veniam in ullamco laborum. Veniam irure incididunt duis in non adipisicing excepteur. Enim irure elit fugiat quis nisi et amet sunt esse dolor.</Text>
          </View>
          <View style={styles.box4}>
            <Image
            style={styles.image}
            source={{ uri: 'https://picsum.photos/200/200?random' }}
            />
            <Text style={styles.text}>Dolore ipsum ea eiusmod elit dolor fugiat. Nostrud exercitation sunt aliquip occaecat esse cupidatat. Adipisicing consequat aute laborum voluptate nisi anim ad labore. Esse quis ad cupidatat pariatur qui quis mollit magna officia Lorem culpa labore laboris sint.</Text>
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
  header: {
    fontSize: 50,
    marginTop: '5%',
    marginBottom: '5%'
  },
  image: {
    margin: '3%',
    width: '94%',
    height: '50%',
  },
  text: {
    padding: '5%',
    color: '#fff',
    fontSize: 20,
    fontWeight: 'bold',
  },
  box1:{
    backgroundColor: 'red',
    height: 500,
    width: Dimensions.get('window').width * 1/3,
    margin: 2,
  },
  box2:{
    backgroundColor: 'green',
    height: 500,
    width: Dimensions.get('window').width * 1/3,
    margin: 2,
  },
  box3:{
    backgroundColor: 'yellow',
    height: 500,
    width: Dimensions.get('window').width * 1/3,
    margin: 2,
  },
  box4:{
    backgroundColor: 'blue',
    height: 500,
    width: Dimensions.get('window').width * 1/3,
    margin: 2,
  }
})

export default App;
