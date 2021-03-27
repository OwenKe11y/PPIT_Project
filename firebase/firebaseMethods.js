import * as firebase from 'firebase/app'
import { Alert } from 'react-native';

// Firebase packages
import 'firebase/firestore';
import 'firebase/storage';

const firebaseUri = [];

export const clipArray = [];

export async function registration(email, password, lastName, firstName) {
  try {
    await firebase.auth().createUserWithEmailAndPassword(email, password);
    const currentUser = firebase.auth().currentUser;

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

// Uploads an image to firebase storage
export async function upload(uri) {
  try {
    const response = await fetch(uri);
    const blob = await response.blob();
    // Create a root reference
    var storageRef = firebase.storage().ref();
    // Create a reference to 'images/mountains.jpg'
    var reference = storageRef.child('Clips/test1.mp3');
    await reference.put(blob);
    console.log("Upload Success");
    //getDownloadURI(uri);
  } catch (err) {
    console.log("Failed file upload");
    console.log(err);
  }
}

export async function getDownloadURI(uri) {
  try {
    var storageRef = firebase.storage().ref();
    var reference = storageRef.child('Clips/test1.mp3');
    var downloadUri = await reference.getDownloadURL();
    firebaseUri.push(downloadUri);
    console.log(firebaseUri[0]);
  } catch (err) {
    console.log("Failed file download uri");
    console.log(err);
  }
}

export async function loadClips() {
    var img_index = 1;
    var tempArray = [];
    var obj;
    
    var storageRef = firebase.storage().ref();
    var listRef = storageRef.child('Clips/');
    listRef.listAll().then(function (result) {
      result.items.forEach(function (imgRef) {
        imgRef.getDownloadURL().then(function (url) {
          obj = {link: url}
          clipArray.push(obj);         
        });
      })
    }).catch(function (error) {
      console.log(error);
    });
}