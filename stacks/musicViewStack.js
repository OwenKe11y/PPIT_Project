import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import MusicScreen from '../components/musicView';

const HomeStack = createStackNavigator();

export default function MusicViewScreen() {
  return (
    <HomeStack.Navigator>
      <HomeStack.Screen name="Music"
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
    </HomeStack.Navigator>
  );
}

