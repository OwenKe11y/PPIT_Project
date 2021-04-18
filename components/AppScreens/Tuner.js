import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image, ImageBackground} from 'react-native';
import { Audio } from 'expo-av';
import { getNotes } from '../../firebase/firebaseMethods';

const soundObject = new Audio.Sound();

export default function TunerScreen({ navigation }) {
  var noteClips = getNotes();
  
  useEffect(() => {  console.log("Loaded Clips")
  getNotes();
  });

  async function playSound(uri) {
    await soundObject.unloadAsync();
    if (uri != "stop") {
      try {
        await soundObject.loadAsync({ uri });
        await soundObject.playAsync();
      } catch (error) {
        console.log("error:", error);
      }
    } else if (uri == "stop") {
      console.log("stop")
      await soundObject.unloadAsync();
    }
  }

  return (
    <View style={styles.container} >
      <ImageBackground source={require("../../assets/Guitarhead.png")} style={{width:'100%', height:'110%'}}>
     
      <TouchableOpacity style={styles.button1} onPress={() => playSound(noteClips[5].uri)}>
        <Text style={styles.buttonText}>E</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button2} onPress={() => playSound(noteClips[0].uri)}>
        <Text style={styles.buttonText}>A</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button3} onPress={() => playSound(noteClips[2].uri)}>
        <Text style={styles.buttonText}>D</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button4} onPress={() => playSound(noteClips[3].uri)}>
        <Text style={styles.buttonText}>G</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button5} onPress={() => playSound(noteClips[1].uri)}>
        <Text style={styles.buttonText}>B</Text>
      </TouchableOpacity>
      <Text style={{fontSize: 20, color: 'white', fontWeight: 'bold', marginLeft:'59%'}}>Tuner v1.0</Text>
      <TouchableOpacity style={styles.button6} onPress={() => playSound(noteClips[4].uri)}>
        <Text style={styles.buttonText}>E</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.buttonFunc} onPress={() => playSound("stop")}>
        <Text style={styles.buttonText}>Stop</Text>
      </TouchableOpacity>
      </ImageBackground>
    </View>
  )
}

const styles = StyleSheet.create({
  button1: {
    width: 50,
    padding: 5,
    backgroundColor: '#ed931c',
    borderWidth: 5,
    borderColor: 'white',
    borderRadius: 20,
    marginLeft:'51%',
    marginTop:'25%'
  },
  button2: {
    width: 50,
    padding: 5,
    backgroundColor: '#ed931c',
    borderWidth: 5,
    borderColor: 'white',
    borderRadius: 20,
    marginLeft:'45%',
    marginTop:'6%'
  },
  button3: {
    width: 50,
    padding: 5,
    backgroundColor: '#ed931c',
    borderWidth: 5,
    borderColor: 'white',
    borderRadius: 20,
    marginLeft:'40%',
    marginTop:'5%'
  },
  button4: {
    width: 50,
    padding: 5,
    backgroundColor: '#ed931c',
    borderWidth: 5,
    borderColor: 'white',
    borderRadius: 20,
    marginLeft:'34%',
    marginTop:'5%'
  },
  button5: {
    width: 50,
    padding: 5,
    backgroundColor: '#ed931c',
    borderWidth: 5,
    borderColor: 'white',
    borderRadius: 20,
    marginLeft:'28%',
    marginTop:'5%'
  },
  button6: {
    width: 50,
    padding: 5,
    backgroundColor: '#ed931c',
    borderWidth: 5,
    borderColor: 'white',
    borderRadius: 20,
    marginLeft:'22%',
  },
  buttonFunc: {
    width: 120,
    padding: 5,
    backgroundColor: '#ed931c',
    borderWidth: 5,
    borderColor: 'white',
    borderRadius: 20,
    marginLeft:'68%',
    marginTop:'10%'
  },
  buttonText: {
    fontSize: 20,
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  container: {
    height: '100%',
    width: '100%',
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    textAlign: 'center',
    fontSize: 20,
    fontStyle: 'italic',
    marginTop: '2%',
    marginBottom: '10%',
    fontWeight: 'bold',
    color: 'black',
  },
  titleText: {
    textAlign: 'center',
    fontSize: 30,
    fontWeight: 'bold',
    color: '#2E6194',
  },
});