import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, Keyboard, Image, ScrollView, TextInput, Alert } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { Audio } from 'expo-av';
import { loadClips, upload } from '../../firebase/firebaseMethods';
import { firstNameUpload, lastNameUpload } from '../Welcome/LoadingScreen';

var recordOption = 0
var recordingUri;

export default function RecordingScreen({ navigation }) {
  const [recording, setRecording] = useState();
  const [view, setView] = useState(0);
  const [sound, setSound] = useState();
  const [name, setName] = useState('');
  const [desc, setDesc] = useState('');

  useEffect(() => {
    recordOption = view;
  });

  const handlePress = () => {
    if (!name || !desc) {
      Alert.alert('All fields are required.');
    } else {
      setView(0);
      upload(recordingUri, desc, firstNameUpload, lastNameUpload, name).then(function (load) {
        loadClips();
      });
      DelayUpload();
    }
  }

  function DelayUpload() {
    setView(0);
    navigation.navigate('SoundHub')  
    setTimeout(() => {
        Alert.alert('Clip Uploaded, please refresh');
        
        playSound();
      }, 5000)    
  }

  // Play Audio
  async function playNope() {
    console.log('Loading Sound');
    const { sound } = await Audio.Sound.createAsync(
      require('../../assets/CancelClip.mp3')
    );
    setSound(sound);

    console.log('Playing Sound');
    setView(0);
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

  // Play Audio
  async function playSound() {
    console.log('Loading Sound');
    const { sound } = await Audio.Sound.createAsync(
      require('../../assets/loadClip.mp3')
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

    recordingUri = recording.getURI();
    console.log('Recording stopped and stored at', recordingUri);
  }

  function renderRecord(recordOption) {

    if (recordOption == 0) {
      return <TouchableOpacity onPress={() => setView(1)}>
        <Ionicons name={'play'} size={200} color={'#ed931c'} style={{ justifyContent: 'center' }} onPress={() => startRecording()}></Ionicons>
      </TouchableOpacity>

    }
    if (recordOption == 1) {
      return <TouchableOpacity onPress={() => setView(2)}>
        <Image source={require('../../assets/waveform.gif')} style={styles.waveform}></Image>
        <Ionicons name={'stop'} size={200} color={'#ed931c'} style={{ justifyContent: 'center' }} onPress={() => stopRecording()}></Ionicons>
      </TouchableOpacity>
    }
    if (recordOption == 2) {
      return <View style={styles.containerRecord}>
        <Text style={styles.textTitle}>New Recording</Text>
        <ScrollView onBlur={Keyboard.dismiss}>
          <Text style={styles.text}>Recording Name</Text>
          <TextInput
            style={styles.textInput}
            placeholder="Name of Track"
            value={name}
            onChangeText={(name) => setName(name)}
            autoCapitalize="none"
          />
          <Text style={styles.text}>Recording Description</Text>
          <TextInput
            style={styles.textInput}
            placeholder="Description"
            value={desc}
            onChangeText={(desc) => setDesc(desc)}
            autoCapitalize="none"
          />
          <View style={styles.containerButtons}>
            <TouchableOpacity style={styles.button2}>
              <Text style={styles.buttonText} onPress={() => handlePress()}>Confirm</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.button2}>
              <Text style={styles.buttonText} onPress={() => playNope()}>Cancel</Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </View>

    }
    console.log("End render function")
  }


  return (
    <View style={styles.container}>
      <View style={styles.containerRecord}>
        {renderRecord(recordOption)}
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

  containerButtons: {
    flexDirection: "row",
    justifyContent: 'center',
    marginTop: '20%'
  },

  button: {
    width: 130,
    padding: 5,
    backgroundColor: '#e6e3e3',
    borderWidth: 5,
    borderColor: 'white',
    borderRadius: 20,

  },

  button2: {
    width: 130,
    padding: 5,
    backgroundColor: '#ed931c',
    borderWidth: 5,
    borderColor: 'white',
    borderRadius: 20,
  },

  buttonText: {
    fontSize: 20,
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',

  },

  textTitle: {
    color: '#ed931c',
    marginTop: 5,
    marginBottom: '20%',
    fontSize: 40
  },

  text: {
    color: '#ed931c',
    fontSize: 20
  },

  textInput: {
    width: 300,
    fontSize: 18,
    borderWidth: 1,
    borderColor: '#ed931c',
    padding: 10,
    margin: 5,

  },

  waveform: {
    marginBottom: '90%',
    height: '10%',
    width: '100%',

  },
});