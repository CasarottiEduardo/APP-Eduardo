import React from "react";
import {Text, View, StyleSheet } from 'react-native';

export default function Header(){

    return(
        <View style={styles.header}>
            <Text style={styles.text}>
                Lista de Compras
            </Text>
        </View>
    );

}

const styles = StyleSheet.create ({
    header: {
        height: 60,
        padding: 15,
        backgroundColor: '#01579b',
    },
    text: {
        color: '#e1f5fe',
        fontSize: 23,
        textAling: 'center',
    },
});
