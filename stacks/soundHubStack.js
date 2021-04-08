import 'react-native-gesture-handler';
import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import SoundHubScreen from '../components/AppScreens/SoundHub';

const SoundHubPage = createStackNavigator();

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
          
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        }}
      />
    </SoundHubPage.Navigator>
  );
}

