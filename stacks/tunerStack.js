import 'react-native-gesture-handler';
import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import TunerScreen from '../components/AppScreens/Tuner';
import { StyleSheet, View, TouchableOpacity } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

const TunerPage = createStackNavigator();

const Logout = () => (
  <TouchableOpacity
    //use navigation from Navigation Stack to switch to Grid
    onPress={() => {
      
    }}>
    

  </TouchableOpacity>
)

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
            backgroundColor: '#ed931c',
          },
          
          headerRight: () => (
            <View style={styles.iconStyle}>
              <Logout />
            </View>
          ),

          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        }}
      />
    </TunerPage.Navigator>
  );
}

const styles = StyleSheet.create({

  iconStyle: {
    padding: 10,
  },

})
