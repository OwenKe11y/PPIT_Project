import * as React from 'react';
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Button } from 'react-native';



export default function HomeScreen() {
  return (
    
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <StatusBar style="auto" />
      <Text>Home Page!</Text>
    </View>
    
  );
}

const styles = StyleSheet.create({

})