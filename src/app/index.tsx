import React, { useEffect, useState } from 'react'; // Don't forget to import React
import { View, StyleSheet } from 'react-native';
import OnboardingScreen from '../components/Onbording/OnboardingScreen';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { StatusBar } from 'expo-status-bar';
import Home from "./home";

export default function Index() { 
  
  const [userData, setUserData] = useState(null);
  const [userLogin, setUserLogin] = useState(false); 

  useEffect(() => {
    checkExistingUser();
  }, []);

  const checkExistingUser = async () => {
    const id = await AsyncStorage.getItem("id");
    const useId = `user${JSON.parse(id)}`;
  
    try {
      const currentUser = await AsyncStorage.getItem(useId);
  
      if (currentUser !== null) {
        const parsedData = JSON.parse(currentUser);
        setUserData(parsedData); 
        setUserLogin(true); 
      } else {
        setUserLogin(false);
      }
    } catch (error) {
      console.log("error retrving data", error);
    }
  };

  return (
    <View style={styles.container}> 
      {userLogin ? <Home /> : <OnboardingScreen />}
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  }
});
