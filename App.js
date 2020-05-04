import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import Greeting from './komponen/greeting';
import Header from './komponen/Header';
import TextBody from './komponen/Texbox';
import TextSubBody from './komponen/texsubbody.js';
import Global from './komponen/global';
import DataIndonesia from './komponen/indonsia';
import CovidIndonesia from './komponen/coronaindo';
const App = () => {
  return (
    <View style={styles.container}>
        <View style={styles.boxHeader}>
          <Header/>
        </View>
        <View style={styles.boxSub}>
            <greeting/>
            <global/>
        </View>
        <View style={styles.boxSubBody}>
        <textboxt/>
        <Ccoronaindo/>
        </View>
        <View style={styles.boxBody}>
          <textsubbody/>
          <coronaindo/>
        </View>
    </View>
)
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
      flex: 1,
      flexDirection: 'column',
      backgroundColor:'#EBEBEB',
      alignItems: 'stretch',
      justifyContent: 'center'
  },
  boxHeader: {
      flex: 2,
      alignItems: 'center',
      backgroundColor: 'white'
  },
});
  textbox {
      flex: 4,
      alignItems: 'center',
      backgroundColor: 'white'
  },
  textsubbody: {
    flex: 4,
    alignItems: 'center',
    backgroundColor: 'white'
},
  boxBody: {
      flex: 10
  }
})

export default App; 
