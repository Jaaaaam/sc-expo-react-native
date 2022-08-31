import {useState} from "react";
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';
import { login } from "../api/AuthService";
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const SignIn = ({setToken, setAccount, navigation}) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    console.log(email, 'email')
    console.log(password, 'password')
    login({email, password, role:'customer'}).then((res) => {
      console.log(res, 'success')
      navigation.navigate('Home')
    }).catch(err => {
      console.log(err, 'err1232');
    });
  }
  return (
    <View style={styles.container}>
      <Text>Sign in</Text>
      <TextInput
        value={email}
        name='email'
        placeholder='User name'
        onChangeText={(value) => {
          setEmail(value)
        }}
      />
      <TextInput
        value={password}
        name='password'
        placeholder='password'
        type='password'
        onChangeText={(value) => {
          setPassword(value)
        }}
      />
      <Button
        onPress={handleLogin}
        title="Submit"
        color="#841584"
        accessibilityLabel="Learn more about this purple button"
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default SignIn;