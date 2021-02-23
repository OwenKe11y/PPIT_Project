import 'react-native-gesture-handler';

//react imports and libraries
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
 
//component imports 
import HomeScreen  from './components/home';
import MusicScreen from './components/musicView';

//icons
import Ionicons from 'react-native-vector-icons/Ionicons';


//declare a new instance of a navbar
const Tab = createBottomTabNavigator();

//main app
export default function App() {
  return (
    <NavigationContainer>
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
        <Tab.Screen name="Home" component={HomeScreen} />
        <Tab.Screen name="Music" component={MusicScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

