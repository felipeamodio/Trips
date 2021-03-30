import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Home from './src/components/Home/index';
import 'react-native-gesture-handler';



export default function App() {
  return (
    <View style={styles.container}>
      <Home />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F0FFFF',
  },
});
