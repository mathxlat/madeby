import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.textoMenu}>madeby</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#6C72D9',
    alignItems: 'center',
    justifyContent: 'center'
  },
  textoMenu: {
    fontSize: 24,
    fontWeight: "700",
    color: '#fff',
    borderRadius: 5
  },
});
