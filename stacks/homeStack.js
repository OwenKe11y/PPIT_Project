//React Imports
import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import { View, StyleSheet, TouchableOpacity } from 'react-native';

//Component Imports
import HomeScreen from '../components/home';
import LoginScreen from '../components/login';

//Ionicons
import Ionicons from 'react-native-vector-icons/Ionicons';

//Stacks
const HomeStack = createStackNavigator();
const LoginStack = createStackNavigator();
const Login = createStackNavigator();

//The Login Icon on the top right of the header
const LoginIcon = ({ navigation }) => (
  <TouchableOpacity
    //use navigation from Navigation Stack to switch to Grid
    onPress={() => navigation.navigate('Login')}>
    <Ionicons name="log-in-sharp" size={32} color="white" />
  </TouchableOpacity>
)

//The header for the login screen 
function LoginStackScreen({ navigation }) {
  return (
    <LoginStack.Navigator>
      <LoginStack.Screen
        name="Login"
        component={LoginScreen}
        options={{

          title: 'Login',
          headerTitleAlign: 'center',
          headerStyle: {
            backgroundColor: '#9deb98',
          },

          headerLeft: () => (
            <View style={styles.container}>
              <TouchableOpacity
                //use navigation from Navigation Stack to switch to Grid
                onPress={() => navigation.goBack()}>
                <Ionicons name="arrow-back" size={32} color="white" />


              </TouchableOpacity>
            </View>
          ),
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        }}
      >

      </LoginStack.Screen>
    </LoginStack.Navigator>
  );
}

//Home Screen Page with custom header 
function HomeStackScreen({ navigation }) {
  return (

    <HomeStack.Navigator >
      <HomeStack.Screen

        name="HomeScreen"
        component={HomeScreen}
        options={{
          headerLeft: () => (
            <View style={styles.container}>
              <LoginIcon navigation={navigation}></LoginIcon>
            </View>
          ),

          title: 'Home',
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

//Navigator between the home and Login Page
function MyHome() {
  return (
    <Login.Navigator screenOptions={{ headerShown: false }}>
      <Login.Screen name="HomeStack" component={HomeStackScreen} />
      <Login.Screen name="Login" component={LoginStackScreen} />

    </Login.Navigator>
  );
}

//Export the Navigator
export default function HomeLoginStack() {
  return (
    <NavigationContainer independent={true}>
      <MyHome />
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({

  container: {
    margin: 10

  },
})

