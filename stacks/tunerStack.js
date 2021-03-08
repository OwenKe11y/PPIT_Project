import 'react-native-gesture-handler';
import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import TunerScreen from '../components/AppScreens/Tuner';

const TunerPage = createStackNavigator();

export default function TunerStack() {
  return (
    <TunerPage.Navigator>
      <TunerPage.Screen name="Tuner"
        component={TunerScreen}
        options={{
          title: 'Tuner',
          headerTitleAlign: 'center',
          headerLeft: null,
          headerStyle: {
            backgroundColor: '#9deb98',
          },
          
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        }}
      />
    </TunerPage.Navigator>
  );
}

