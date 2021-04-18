import * as firebase from 'firebase/app'
import { Alert } from 'react-native';
import React, { useEffect, useState } from 'react';
// Firebase packages
import 'firebase/firestore';
import 'firebase/storage';
import { firstNameUpload, lastNameUpload } from '../components/Welcome/LoadingScreen';

export var soundClips = [];
export var noteClips = [];

export async function registration(email, password, lastName, firstName) {
  try {
    await firebase.auth().createUserWithEmailAndPassword(email, password);
    const currentUser = firebase.auth().currentUser;
    currentUser.updateProfile({
      displayName: firstName + " " + lastName
    })
    const db = firebase.firestore();
    db.collection('users')
      .doc(currentUser.uid)
      .set({
        email: currentUser.email,
        lastName: lastName,
        firstName: firstName,
      });
  } catch (err) {
    Alert.alert('There is something wrong!', err.message);
  }
}

export async function signIn(email, password) {
  try {
    await firebase
      .auth()
      .signInWithEmailAndPassword(email, password);
  } catch (err) {
    Alert.alert('There is something wrong!', err.message);
  }
}

export async function loggingOut() {
  try {
    await firebase.auth().signOut();
  } catch (err) {
    Alert.alert('There is something wrong!', err.message);
  }
}

//
// SoundHub
//

// Uploads an image to firebase storage
export async function upload(uri, desc, firstName, lastName, clipName) {
  try {
    const response = await fetch(uri);
    const blob = await response.blob();
    // Create a root reference
    var storageRef = firebase.storage().ref();
    // Create a reference to clip
    var reference = storageRef.child('Clips/' + clipName);

    var metadata = {
      customMetadata: {
        firstName: firstName,
        lastName: lastName,
        desc: desc
      }
    };

    await reference.put(blob, metadata);
    console.log("Upload Success");
  } catch (err) {
    console.log("Failed file upload");
    console.log(err);
  }
}

export async function loadClips() {
  var obj;
  var clipName;
  var clipLink;
  var clipDesc;
  var tempFirstName;
  var tempLastName;
  var storageRef = firebase.storage().ref();
  var listRef = storageRef.child('Clips/');

  var tempArray = [];

  listRef.listAll().then(function (result) {
    result.items.forEach(function (clipRef) {
      clipRef.getDownloadURL().then(function (url) {
        clipRef.getMetadata().then(function (metadata) {
          clipName = metadata.name;
          clipLink = url;
          clipDesc = metadata.customMetadata.desc;
          tempFirstName = metadata.customMetadata.firstName;
          tempLastName = metadata.customMetadata.lastName;
          obj = { link: clipLink, name: clipName, firstName: tempFirstName, lastName: tempLastName, desc: clipDesc}
          if (tempFirstName == firstNameUpload && tempLastName == lastNameUpload) {
            tempArray.push(obj);
            soundClips = tempArray;
            console.log(tempArray.length)
          }       
        })
      });
    })
  }).catch(function (error) {
    console.log(error);
  });

}

export function getClips() {
  loadClips();
  // Sort clips alphabetically before returning
  soundClips.sort(function (a, b) {
    if (a.name < b.name) { return -1; }
    if (a.name > b.name) { return 1; }
    return 0;
  })

  return soundClips;
}

//
// Tuner
//

export async function loadNotes() {
  var obj;
  var noteName;
  var noteUri;
  var storageRef = firebase.storage().ref();
  var listRef = storageRef.child('Notes/');

  var tempArray = [];

  listRef.listAll().then(function (result) {
    result.items.forEach(function (clipRef) {
      clipRef.getDownloadURL().then(function (url) {
        clipRef.getMetadata().then(function (metadata) {
          noteName = metadata.name;
          noteUri = url;
          obj = { note: noteName, uri: noteUri}
          tempArray.push(obj);
          setArray(tempArray);
        });
      });
    })
  }).catch(function (error) {
    console.log(error);
  });
}

function setArray(temp) {
  noteClips = temp;
  
}

export function getNotes() {
  loadNotes();
  // Sort notes alphabetically before returning
  noteClips.sort(function (a, b) {
    if (a.note < b.note) { return -1; }
    if (a.note > b.note) { return 1; }
    return 0;
  })

  return noteClips;
}