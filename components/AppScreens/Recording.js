import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, Alert, Image, ScrollView, Keyboard, SafeAreaView, TextInput } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import * as firebase from 'firebase';
import { loggingOut } from '../../firebase/firebaseMethods';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { Audio } from 'expo-av';
import { loadClips, upload, getClips } from '../../firebase/firebaseMethods';

var recordOption = 0
export default function RecordingScreen({ navigation }) {
  const [recording, setRecording] = React.useState();
  const [view, setView] = React.useState(0);

  useEffect(() => {
    recordOption = view;
  });


  // Start recording
  async function startRecording() {
    try {
      console.log('Requesting permissions..');
      await Audio.requestPermissionsAsync();
      await Audio.setAudioModeAsync({
        allowsRecordingIOS: true,
        playsInSilentModeIOS: true,
      });
      console.log('Starting recording..');
      const recording = new Audio.Recording();
      await recording.prepareToRecordAsync(Audio.RECORDING_OPTIONS_PRESET_HIGH_QUALITY);
      await recording.startAsync();
      setRecording(recording);
      console.log('Recording started');

    } catch (err) {
      console.error('Failed to start recording', err);
    }

  }


  // Stop recording
  async function stopRecording() {
    console.log('Stopping recording..');
    setRecording(undefined);
    await recording.stopAndUnloadAsync();

    const uri = recording.getURI();
    console.log('Recording stopped and stored at', uri);
    upload(uri, "Name Test");
    //}
  }
  function renderRecord(recordOption) {

    if (recordOption == 0) {
      console.log(recordOption)
      return <TouchableOpacity onPress={() => setView(1)}>
        <Ionicons name={'play'} size={200} color={'#ed931c'} style={{ justifyContent: 'center' }} onPress={() => startRecording()}></Ionicons>
      </TouchableOpacity>

    }
    if (recordOption == 1) {
      console.log("stop button")
      return <TouchableOpacity onPress={() => setView(2)}>
        <Ionicons name={'stop'} size={200} color={'#ed931c'} style={{ justifyContent: 'center' }} onPress={() => stopRecording()}></Ionicons>
      </TouchableOpacity>
    }
    if (recordOption == 2) {
      return <SafeAreaView>
        <View style={styles.containerRecord}>
          <Text style={styles.text}></Text>

          <ScrollView onBlur={Keyboard.dismiss}>
            <TextInput
              style={styles.textInput}
              placeholder="Name of Track"

            />
            <TextInput
              style={styles.textInput}
              placeholder="Description"

            />

            <TouchableOpacity style={styles.button}>
              <Text style={styles.buttonText}>Confirm</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.button}>
              <Text style={styles.buttonText}>Cancel</Text>
            </TouchableOpacity>

          </ScrollView>
        </View>
      </SafeAreaView>
    }
    console.log("End render function")
  }


  return (
    <View style={styles.container}>
      <View style={styles.containerRecord}>
        {console.log("Console: " + recordOption)}
        {renderRecord(recordOption)}
        {/*  */}
      </View>
    </View>
  )
}

const styles = StyleSheet.create({


  container: {
    height: '100%',
    width: '100%',
    backgroundColor: '#e6e3e3',
    alignItems: 'center',
    justifyContent: 'center',
  },

  containerRecord: {
    height: '97%',
    width: '95%',
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10
  },
  waveform: {
    marginBottom: '90%',
    height: '10%',
    width: '100%',

  },
  textInput: {
    width: 300,
    fontSize: 18,
    borderWidth: 1,
    borderColor: '#a4eddf',
    padding: 10,
    margin: 5,
  },

  button: {
    width: 100,
    padding: 5,
    backgroundColor: '#ed931c',
    borderWidth: 5,
    borderColor: 'white',
    borderRadius: 20,
    marginLeft: '20%',
    marginTop: '25%'
  },

  button2: {
    width: 50,
    padding: 5,
    backgroundColor: '#ed931c',
    borderWidth: 5,
    borderColor: 'white',
    borderRadius: 20,
    marginLeft: '20%',
  },
});