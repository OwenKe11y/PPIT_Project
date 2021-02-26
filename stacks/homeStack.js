
import 'react-native-gesture-handler';

import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Dashboard from '../components/Dashboard'

//icons
import Ionicons from 'react-native-vector-icons/Ionicons';

const HomeStack = createStackNavigator();

export default function HomeViewScreen() {
  return (
    <HomeStack.Navigator>
      <HomeStack.Screen name="Dashboard"
        component={Dashboard}
        options={{
          title: 'Dashboard Screen',
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
    </HomeStack.Navigator>
  );
}


