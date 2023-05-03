import * as React from 'react';
import {View, StyleSheet, } from 'react-native';
import Constants from 'expo-constants';

import Index from './components/apostila_03';

export default function app () {
  return (
    <Index style={StyleSheet.container}>
      <Index/>
    </Index>
  );

}

const styles = StyleSheet.create ({
  container :{
    flex: 1,
    justifyContent: 'center',
    paddingTop: Constants.statusBarHeight,
    backgroundColor: '#9e9e9e',
    padding: 8,
  },
});