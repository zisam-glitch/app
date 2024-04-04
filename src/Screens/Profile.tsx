import { StyleSheet } from "react-native";
import React from "react";
import { StatusBar } from "expo-status-bar";
import Colors from "../constants/Colors";
import { SafeAreaView } from "react-native-safe-area-context";
import Header from "./../components/Profile/header";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import Profile from "../components/Profile/profile";
import Settings from "../components/Profile/settings";

const Tab = createMaterialTopTabNavigator();

export default function Home() {
  return (
    <SafeAreaView style={styles.view}>
      <StatusBar style="light" backgroundColor={Colors.primary} />
      <Header />
      <Tab.Navigator
        screenOptions={{
          tabBarLabelStyle: {
            fontSize: 16, 
            fontFamily: "GTWalsheimProBold",
            color: Colors.primary,
            textTransform: "capitalize",
          },
          tabBarIndicatorStyle: {
            backgroundColor: Colors.primary,
            height: 4,
          },
          tabBarPressColor: Colors.white,
          tabBarStyle: {
            elevation: .5, 
            shadowOpacity: .5, 
          },
        }}
      >
        <Tab.Screen
          name="user"
          options={{ tabBarLabel: "Profile" }}
          component={Profile}
        />
        <Tab.Screen
          name="Settings"
          options={{ tabBarLabel: "Settings" }}
          component={Settings}
        />
      </Tab.Navigator>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  view: {
    backgroundColor: Colors.white,
    flex: 1,
  },
});
