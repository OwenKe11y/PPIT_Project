import * as firebase from 'firebase/app'
import { Alert } from 'react-native';

// Firebase packages
import 'firebase/firestore';
import 'firebase/storage';


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
export async function upload() {
  try {
    // Create file from image
    file = new File(["test"], "../assets/Owen.jpg");
    
    // Create a root reference
    var storageRef = firebase.storage().ref();   
    // Create a reference to 'images/mountains.jpg'
    var reference = storageRef.child('Images/Owen.jpg');
   
    await reference.put(file);
    console.log("Upload Success")

  } catch (err) {
    console.log("Failed file upload")
    console.log(err)
  }
}