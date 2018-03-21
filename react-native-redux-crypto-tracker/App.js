import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Header } from './src/components';

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
      <Header />
        <Text>On wednesdays we wear pink.</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'pink',
    alignItems: 'center',
    justifyContent: 'center',

  },
});
