import 'react-native-gesture-handler';
import * as React from 'react';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import RecordingStack from './RecordingStack';
import SoundHubStack from './soundHubStack';
import TunerStack from './tunerStack';

const Tab = createMaterialTopTabNavigator();

import Ionicons from 'react-native-vector-icons/Ionicons';


export default function MyTabsBar() {
  return (
    <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;
            size = 20;
            // This is just so the icons change colour and appearance when pressed
            if (route.name === 'Recording') {
              iconName = focused
                ? 'mic'
                : 'mic-outline';
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
          keyboardHidesTabBar: true,
          indicatorStyle: {
            backgroundColor: '#ed931c',
            height: '80%',
            borderRadius: 15,
            marginBottom: 8,
            marginLeft: 12,
            width: '27%'
        },
        
        }}>
      
      <Tab.Screen name="SoundHub" component={SoundHubStack} />
      <Tab.Screen name="Recording" component={RecordingStack} />
      <Tab.Screen name="Tuner" component={TunerStack}/>
    </Tab.Navigator>
  );
}