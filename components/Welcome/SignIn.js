import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, Alert } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { signIn } from '../../firebase/firebaseMethods';
import Ionicons from 'react-native-vector-icons/Ionicons';

export default function SignIn({ navigation }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handlePress = () => {
    if (!email) {
      Alert.alert('Email field is required.');
    }

    if (!password) {
      Alert.alert('Password field is required.');
    }
    navigation.replace('Loading');
    signIn(email, password);
    setEmail('');
    setPassword('');
  };

  return (
    <View style={styles.container}>
      <Ionicons name={'disc'} size={200} color={'white'} style={{ marginTop: -200 }} />
      <Text style={styles.text}>Sign in to your account:</Text>

      <TextInput
        style={styles.formInput}
        placeholder="Enter your email"
        value={email}
        onChangeText={(email) => setEmail(email)}
        autoCapitalize="none"
      />
      <TextInput
        style={styles.formInput}
        placeholder="Enter your password"
        value={password}
        onChangeText={(password) => setPassword(password)}
        secureTextEntry={true}
      />

      <TouchableOpacity style={styles.button} onPress={handlePress}>
        <Text style={styles.buttonText}>Submit</Text>
      </TouchableOpacity>

    </View>
  );
}

const styles = StyleSheet.create({
  button: {
    width: 200,
    borderWidth: 2,
    borderColor: 'white',
    backgroundColor: '#4D2973',
    padding: 14,
    margin: '8%'
  },

  buttonText: {
    fontSize:20,
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  container: {
    height: '100%',
    width: '100%',
    backgroundColor: '#ed931c',
    alignItems: 'center',
    justifyContent: 'center',
  },
  formInput: {
    width: 300,
    fontSize:18,
    borderWidth: 1,
    borderColor:'#fff',
    padding: 10,
    margin: 5,
  },
  text: {
    textAlign: 'center',
    fontSize: 20,
    margin: 10,
    fontWeight: 'bold',
    color: '#fff',
  }
});