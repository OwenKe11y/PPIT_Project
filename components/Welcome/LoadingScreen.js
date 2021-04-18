import React, { useEffect, useState } from 'react';
import { ActivityIndicator, StyleSheet, TouchableOpacity, View, Text, Alert, Image, ImageBackground } from 'react-native';
import * as firebase from 'firebase';
import { Audio } from 'expo-av';
import { getClips, getNotes, loadClips } from '../../firebase/firebaseMethods';

export var firstNameUpload;
export var lastNameUpload;
export var clips;
var loadCheck;

export default function LoadingScreen({ navigation }) {

  let currentUserUID;
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [name, setName] = useState('');
  const [sound, setSound] = useState();
  const [appear, setAppear] = useState(0);
  const [hide, setHide] = useState(100);

  useEffect(
    () => {
      firebase.auth().onAuthStateChanged((user) => {
        if (user) {
          currentUserUID = firebase.auth().currentUser.uid;
          setName(user.displayName)

        } else {
          navigation.replace('Welcome');
        }
        getUserInfo();
      });

      async function getUserInfo() {
        try {
          let doc = await firebase
            .firestore()
            .collection('users')
            .doc(currentUserUID)
            .get();
          if (!doc.exists) {
            Alert.alert('No user data found!')
          } else {
            let dataObj = doc.data();
            setFirstName(dataObj.firstName)
            setLastName(dataObj.lastName)
            firstNameUpload = dataObj.firstName;
            lastNameUpload = dataObj.lastName;
            getNotes();
          }
        } catch (err) {
          console.log(err)
        }
      }
      // Make sure user is loaded
      if (firstNameUpload) {
        if (loadCheck != 1)
          try {
            loadClips()
          } catch (error) {
            console.log(error)
          }
        loadcheck = 1;
      }
    }
  );

  function renderWelcome() {
    setTimeout(() => {
      setHide(0)
      setAppear(100)
    }, 5000)
    return (
      <View style={styles.container}>
        <View style={styles.titleContainer}>
          <Text style={styles.title}>Welcome {name}!</Text>
          <View style={{ opacity: hide, height: hide }}>
            <Image source={require('../../assets/waveform.gif')} style={styles.waveform}></Image>
            <TouchableOpacity>
              <Text style={styles.buttonText}>loading</Text>
            </TouchableOpacity>
          </View>
        </View>

        <View style={{ opacity: appear, height: appear }}>
          <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('SoundHub')} >
            <Text style={styles.buttonText}>Continue</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Sign In')}>
            <Text style={styles.buttonText}>Sign in again</Text>
          </TouchableOpacity>
        </View>

      </View>
    );
  }

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

  const handlePress = () => {
    navigation.replace('SoundHub');
  }

  return (
    <View style={styles.container}>
      {renderWelcome()}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: '100%',
    width: '100%',
    backgroundColor: '#3FC5AB',
    alignItems: 'center',
    justifyContent: 'center',
  },

  button2: {
    width: 130,
    padding: 5,
    backgroundColor: '#ed931c',
    borderWidth: 5,
    borderColor: 'white',
    borderRadius: 20,
  },

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
    textAlign: 'center',
    margin: 10
  },
  titleContainer: {
    position: 'absolute',
    top: 170,
  },

  waveform: {
    marginTop: '85%',
    height: '10%',
    width: '100%',

  }
});