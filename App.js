import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import * as firebase from 'firebase';
import firebaseConfig from './firebase/keys';
import WelcomeScreen from './components/Welcome/WelcomeScreen';
import SignUp from './components/Welcome/SignUp';
import SignIn from './components/Welcome/SignIn';
import LoadingScreen from './components/Welcome/LoadingScreen';

import { LogBox } from 'react-native';
import MyTabsBar from './stacks/tabBarStack';

LogBox.ignoreLogs(['Setting a timer for a long period of time'])

const Stack = createStackNavigator();

export default function App() {
  if (!firebase.apps.length) {
    console.log('Connected with Firebase')
    firebase.initializeApp(firebaseConfig);
  }

  return (
    <NavigationContainer>
      <Stack.Navigator>
      <Stack.Screen name={'Loading'} component={LoadingScreen} options={{ headerShown: false }}/>
      <Stack.Screen name='Welcome' component={WelcomeScreen} options={{ headerShown: false }}/>
      <Stack.Screen name='Sign Up' component={SignUp}/>
      <Stack.Screen name='Sign In' component={SignIn}/>
      <Stack.Screen name={'Home'} component={MyTabsBar} options={{ headerShown: false }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}