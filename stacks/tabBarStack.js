import 'react-native-gesture-handler';
import * as React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeStack from './homeStack';
import SoundHubStack from './soundHubStack'

const Tab = createBottomTabNavigator();

import Ionicons from 'react-native-vector-icons/Ionicons';
import TunerStack from './tunerStack';

export default function MyTabsBar() {
  return (
    <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;

            // This is just so the icons change colour and appearance when pressed
            if (route.name === 'Home') {
              iconName = focused
                ? 'home'
                : 'home-outline';
            } else if (route.name == 'SoundHub'){
                iconName = focused
                ? 'disc'
                : 'disc-outline'
            } else if (route.name == 'Tuner'){
                iconName = focused
                ? 'musical-note'
                : 'musical-note-outline'
            }
            
            return <Ionicons name={iconName} size={size} color={color} />;
          },
        })}

        tabBarOptions={{
          activeBackgroundColor: '#ed931c',
          activeTintColor: '#fff',
          inactiveTintColor: 'gray',
        }}>
            
      
      <Tab.Screen name="SoundHub" component={SoundHubStack} />
      <Tab.Screen name="Tuner" component={TunerStack}/>
    </Tab.Navigator>
  );
}