
import 'react-native-gesture-handler';

import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Dashboard from '../screens/Dashboard'

//icons
import Ionicons from 'react-native-vector-icons/Ionicons';

const HomeStack = createStackNavigator();

function HomeViewScreen() {
  return (
    <HomeStack.Navigator>
      <HomeStack.Screen name="Music"
        component={Dashboard}
        options={{
          title: 'Dashboard Screen',
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

//declare a new instance of a navbar
const Tab = createBottomTabNavigator();

//main app
export default function TabBarHome() {
  return (
    <NavigationContainer independent={true}>
      {/* Navbar style and functionality */}
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;

            // This is just so the icons change colour and appearance when pressed
            if (route.name === 'Home') {
              iconName = focused
                ? 'home'
                : 'home-outline';
            } else if (route.name === 'Music') {
              iconName = focused
                ? 'musical-notes-sharp'
                : 'musical-notes-outline';
            }
            return <Ionicons name={iconName} size={size} color={color} />;
          },
        })}

        tabBarOptions={{
          activeBackgroundColor: '#9deb98',
          activeTintColor: '#298c23',
          inactiveTintColor: 'gray',
        }}>

        {/* rendering the components on the navbar */}
        <Tab.Screen name="Home" component={HomeViewScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}