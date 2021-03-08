
import 'react-native-gesture-handler';
import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from '../components/Home';

const HomeStack = createStackNavigator();

export default function HomeViewScreen() {
  return (
    <HomeStack.Navigator>
      <HomeStack.Screen name="Home"
        component={HomeScreen}
        options={{
          title: 'Home',
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


