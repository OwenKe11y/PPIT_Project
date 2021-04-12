import * as React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Audio } from 'expo-av';
import { getNotes } from '../../firebase/firebaseMethods';

const soundObject = new Audio.Sound();


export default function TunerScreen({ navigation }) {
  var noteClips = getNotes();

  async function playSound(uri) {
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
      <TouchableOpacity style={styles.button} onPress={() => playSound(noteClips[5].uri)}>
        <Text style={styles.buttonText}>E</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={() => playSound(noteClips[0].uri)}>
        <Text style={styles.buttonText}>A</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={() => playSound(noteClips[2].uri)}>
        <Text style={styles.buttonText}>D</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={() => playSound(noteClips[3].uri)}>
        <Text style={styles.buttonText}>G</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={() => playSound(noteClips[1].uri)}>
        <Text style={styles.buttonText}>B</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={() => playSound(noteClips[4].uri)}>
        <Text style={styles.buttonText}>E</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={() => playSound("stop")}>
        <Text style={styles.buttonText}>Stop</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={() => getNotes()}>
        <Text style={styles.buttonText}>load</Text>
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  button: {
    width: 150,
    padding: 5,
    backgroundColor: '#ff9999',
    borderWidth: 2,
    borderColor: 'white',
    borderRadius: 15,
    alignSelf: 'center',
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