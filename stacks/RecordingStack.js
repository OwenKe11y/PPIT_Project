
import 'react-native-gesture-handler';
import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import RecordingScreen from '../components/AppScreens/Recording';

const RecordingPage = createStackNavigator();

export default function RecordingStack() {
  return (
    <RecordingPage.Navigator>
      <RecordingPage.Screen name="Recording"
        component={RecordingScreen}
        options={{
          title: 'Recording',
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
    </RecordingPage.Navigator>
  );
}


