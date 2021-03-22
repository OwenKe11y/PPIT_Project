import { ImageBackground, StyleSheet, View, Text, Pressable } from 'react-native';
import React from 'react';
import { TouchableOpacity } from 'react-native-gesture-handler';
import * as firebase from 'firebase';



export default function WelcomeScreen({ navigation }) {
  return (
    <ImageBackground
      style={styles.background}
      source={require('../../assets/background.jpg')}>
      <View style={styles.titleContainer}>
        <Text style={styles.title}>Welcome to your Music App</Text>
      </View>
      {/* Button for uploading test */}
      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Sign Up')} >
        <Text style={styles.buttonText}>Sign Up</Text>
      </TouchableOpacity>
      <Text style={styles.inlineText}>Already have an account?</Text>
      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Sign In')}>
        <Text style={styles.buttonText}>Sign In</Text>
      </TouchableOpacity>

    </ImageBackground>
  )
}



const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: {
    width: 200,

    borderWidth: 2,
    borderColor: 'white',
    backgroundColor: '#4D2973',
    padding: 14,
    margin: '8%'
  },

  buttonText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'white',
    textAlign: 'center'
  },
  inlineText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'white',
    textAlign: 'center',
    marginTop: '2%',
  },
  title: {
    fontSize: 35,
    fontWeight: 'bold',
    color: 'white',
    textAlign: 'center'
  },
  titleContainer: {
    position: 'absolute',
    top: 170,
  },
});