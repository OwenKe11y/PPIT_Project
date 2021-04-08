
import 'react-native-gesture-handler';
import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from '../components/AppScreens/Home';

const HomePage = createStackNavigator();

export default function HomeStack() {
  return (
    <HomePage.Navigator>
      <HomePage.Screen name="Home"
        component={HomeScreen}
        options={{
          title: 'Home',
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
    </HomePage.Navigator>
  );
}


