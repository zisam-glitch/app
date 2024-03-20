import React from 'react'; // Don't forget to import React
import { View, StyleSheet } from 'react-native';
import OnboardingScreen from '../components/Onbording/OnboardingScreen';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { StatusBar } from 'expo-status-bar';


export default function index() { 
  
  return (
    <View style={styles.container}> 
    <StatusBar style='inverted' />
      <OnboardingScreen />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  }
});
