import 'react-native-gesture-handler';
import * as React from 'react';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import HomeStack from './homeStack';
import SoundHubStack from './soundHubStack'

const Tab = createMaterialTopTabNavigator();

import Ionicons from 'react-native-vector-icons/Ionicons';
import TunerStack from './tunerStack';

export default function MyTabsBar() {
  return (
    <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;
            size = 20;
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
        tabBarPosition={'bottom'}
        tabBarOptions={{
          activeTintColor: '#fff',
          inactiveTintColor: 'gray',
          showIcon:'true',
          indicatorStyle: {
            backgroundColor: '#ed931c',
            height: '80%',
            borderRadius: 15,
            marginBottom: 8,
            marginLeft: 12,
            width: '45%'
        },
        }}>
            
      <Tab.Screen name="SoundHub" component={SoundHubStack} />
      <Tab.Screen name="Tuner" component={TunerStack}/>
    </Tab.Navigator>
  );
}