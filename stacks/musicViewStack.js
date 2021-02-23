import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import MusicScreen from '../components/musicView';

const MusicStack = createStackNavigator();

export default function MusicViewScreen() {
  return (
    <MusicStack.Navigator>
      <MusicStack.Screen name="Music"
        component={MusicScreen}
        options={{
          title: 'Music Screen',
          headerTitleAlign: 'center',

          headerStyle: {
            backgroundColor: '#9deb98',
          },
          
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        }}
      />
    </MusicStack.Navigator>
  );
}

