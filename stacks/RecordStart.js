
import 'react-native-gesture-handler';
import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import RecordingStartScreen from '../components/AppScreens/RecordingStart';

const RecordingStartPage = createStackNavigator();

export default function RecordingStartStack() {
  return (
    <RecordingStartPage.Navigator>
      <RecordingStartPage.Screen name='Record'
        component={RecordingStartScreen}
        options={{
          title: 'RecordStart',
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
    </RecordingStartPage.Navigator>
  );
}
