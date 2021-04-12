import 'react-native-gesture-handler';
import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import SoundHubScreen from '../components/AppScreens/SoundHub';
import { loggingOut } from '../firebase/firebaseMethods';
import { StyleSheet, View, TouchableOpacity } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

const SoundHubPage = createStackNavigator();

const Logout = () => (
  <TouchableOpacity
    //use navigation from Navigation Stack to switch to Grid
    onPress={() => {
      loggingOut()
    }}>
    <Ionicons name={"log-out"} size={32} color="white" />


  </TouchableOpacity>
)



export default function SoundHubStack() {
  return (
    <SoundHubPage.Navigator>
      <SoundHubPage.Screen name="SoundHub"
        component={SoundHubScreen}
        options={{
          title: 'Sound Hub',
          headerTitleAlign: 'center',
          headerLeft: null,
          headerStyle: {
            backgroundColor: '#ed931c',

          },

          headerRight: () => (
            <View style={styles.iconStyle}>
              <Logout />
            </View>
          ),


          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        }}
      />
    </SoundHubPage.Navigator>
  );
}

const styles = StyleSheet.create({

  iconStyle: {
    padding: 10,
  },

})

