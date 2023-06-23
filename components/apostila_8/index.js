import React,{useState} from 'react';
import {Text, View, StyleSheet, TextInput, TouchableOpacity} from 'react-native';
// import Styles from './style';

export default function Apostila_8 () {
  return (
    <View tyle={Styles.container}>
        <Text style={Styles.paragraph}>
                Exemplo 8
        </Text>
    </View>
  );
};
const Styles = StyleSheet.create ({
    container: {
        flex: 1,
        justifyContent: 'center',
        backgroundColor: '#E1F5FE',
        padding: 8,        
    },
    paragraph: {
        margin: 6,
        fontSize: 18,
        fontWeight: 'bold',
        textAlign: 'center',
        color: '#03A9F4',
    },
});


