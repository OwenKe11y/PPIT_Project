import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, Alert, Image } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import * as firebase from 'firebase';
import { loggingOut } from '../../firebase/firebaseMethods';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { Audio } from 'expo-av';









export default function RecordingScreen({ navigation }) {

  const  [recording, setRecording] = React.useState();


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

  return (
    <View style={styles.container}>
      <View style={styles.containerRecord}>
        <TouchableOpacity onPress={() => navigation.navigate('Record')}>
          <Ionicons name={'play'} size={200} color={'#ed931c'} style={{ justifyContent: 'center' }} onPress={() => startRecording()}></Ionicons>
        
        </TouchableOpacity>
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

  }
});