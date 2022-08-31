import {useState} from "react";
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';

const Home = () => {
  return <View styles={styles.container}>
    <Text>This is the home screen</Text>
  </View>
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default Home;