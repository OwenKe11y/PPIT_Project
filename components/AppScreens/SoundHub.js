import React, { Component, useEffect, useState } from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';
import { Audio } from 'expo-av';
import { FloatingAction } from "react-native-floating-action";
import Ionicons from 'react-native-vector-icons/Ionicons';
import { upload, loadClips, sendArray, clipArray } from '../../firebase/firebaseMethods';
import * as firebase from 'firebase/app';

const actions = [
  {
    text: "Record",
    name: "bt_rec",
    position: 1,
    color: "#9deb98",
    icon: <Ionicons name="mic-circle-outline" color="white" size={26} ></Ionicons>
  },
  {
    text: "Stop",
    name: "bt_stop",
    position: 2,
    color: "#9deb98",
    visible: false,
    icon: <Ionicons name="stop-circle-outline" color="white" size={26}></Ionicons>
  },
  {
    text: "Play",
    name: "bt_sound",
    position: 3,
    color: "#9deb98",
    icon: <Ionicons name="volume-high-outline" color="white" size={26}></Ionicons>
  },
  {
    text: "Load Clips",
    name: "bt_loadClips",
    position: 4,
    color: "#9deb98",
    icon: <Ionicons name="volume-high-outline" color="white" size={26}></Ionicons>
  }
];

const clips = clipArray;


export default function SoundHubScreen({ navigation }) {
  const [recording, setRecording] = React.useState();
  const [sound, setSound] = React.useState();

  // https://dev.to/cirlorm_io/how-to-create-a-music-streaming-app-expo-rn-1724
  // Resource here for loading clips
  loadClips();
  // start recording
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

  // stop recording
  async function stopRecording() {
    console.log('Stopping recording..');
    setRecording(undefined);
    await recording.stopAndUnloadAsync();

    // var option = window.prompt("Enter name of clip or 'Cancel' to delete")
    // if (option == 'Cancel' || option == null){
    //   Alert.alert("Clip deleted")
    // } else {
    const uri = recording.getURI();
    console.log('Recording stopped and stored at', uri);
    upload(uri);
    //}
  }

  async function playSound() {
    console.log('Loading Sound');
    const { sound } = await Audio.Sound.createAsync(
      require('../../assets/sample3.mp3')
    );
    setSound(sound);

    console.log('Playing Sound');
    await sound.playAsync();
  }

  React.useEffect(() => {
    return sound
      ? () => {
        console.log('Unloading Sound');
        sound.unloadAsync();
      }
      : undefined;
  }, [sound]);

  return (
    <View style={styles.container}>

      <View style={styles.container}>
        <FlatList
          data={clips}
          renderItem={({ item }) => <Text>{item.link}</Text> }
        />
      </View>

      <FloatingAction
        color='#9deb98'
        actions={actions}
        onPressItem={name => {
          if (name == "bt_rec") {
            startRecording();
            actions[1].visible = true;
          }
          if (name == "bt_stop") {
            stopRecording();
          }
          if (name == "bt_sound") {
            playSound();
          }
          if (name == "bt_loadClips") {
          }
          
          console.log(`selected button: ${name}`);
        }}
      />
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