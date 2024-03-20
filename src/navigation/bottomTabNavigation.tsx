import React from "react";
import {
  createBottomTabNavigator,
  BottomTabNavigationOptions,
} from "@react-navigation/bottom-tabs";
import home from "../Screens/Home";
import about from "../Screens/About";
import appoinments from "../Screens/Appoinments";
import { Ionicons } from "@expo/vector-icons";
import Colors from "../constants/Colors";
import Profile from "../Screens/Profile";
import { View, Text } from "react-native";
const Tab = createBottomTabNavigator();

const screenOptions: BottomTabNavigationOptions = {
  tabBarShowLabel: false,
  tabBarHideOnKeyboard: true,
  headerShown: false,
  tabBarStyle: {
    position: "absolute",
    right: 0,
    bottom: 0,
    left: 0,
    elevation: 0,
    height: 60,
    backgroundColor: "#043763",
  },
};

export default function BottomTabNavigation() {
  return (
    <Tab.Navigator screenOptions={screenOptions}>
      <Tab.Screen
        name="Home"
        component={home}
        options={{
          tabBarIcon: ({ focused }) => {
            return (
              <View style={{ alignItems: "center", justifyContent: "center" }}>
                <Ionicons
                  name={focused ? "home-outline" : "home-outline"}
                  size={22}
                  color={focused ? Colors.white : Colors.complementary}
                />
                <Text
                  style={{
                    color: focused ? Colors.white : Colors.complementary,
                    fontFamily: "GTWalsheimPro",
                    fontSize: 12,
                  }}
                >
                  Home
                </Text>
              </View>
            );
          },
        }}
      />
      <Tab.Screen
        name="About"
        component={about}
        options={{
          tabBarIcon: ({ focused }) => {
            return (
              <View style={{ alignItems: "center", justifyContent: "center" }}>
                <Ionicons
                  name={"calendar-outline"}
                  size={22}
                  color={focused ? Colors.white : Colors.complementary}
                />
                <Text
                  style={{
                    color: focused ? Colors.white : Colors.complementary,
                    fontFamily: "GTWalsheimPro",
                    fontSize: 12,
                  }}
                >
                  Appoinments
                </Text>
              </View>
            );
          },
        }}
      />
      <Tab.Screen
        name="Profile"
        component={Profile}
        options={{
          tabBarIcon: ({ focused }) => {
            return (
            
              <View style={{ alignItems: "center", justifyContent: "center" }}>
               <Ionicons
                name={"time-outline"}
                size={22}
                color={focused ? Colors.white : Colors.complementary}
              />
               <Text
                 style={{
                   color: focused ? Colors.white : Colors.complementary,
                   fontFamily: "GTWalsheimPro",
                   fontSize: 12,
                 }}
               >
                 History
               </Text>
             </View>
            );
          },
        }}
      />
      <Tab.Screen
        name="Appointments"
        component={appoinments}
        options={{
          tabBarIcon: ({ focused }) => {
            return (
              <View style={{ alignItems: "center", justifyContent: "center" }}>
             <Ionicons
                name={focused ? "person-outline" : "person-outline"}
                size={22}
                color={focused ? Colors.white : Colors.complementary}
              />
              <Text
                style={{
                  color: focused ? Colors.white : Colors.complementary,
                  fontFamily: "GTWalsheimPro",
                  fontSize: 12,
                }}
              >
                Profile
              </Text>
            </View>
              
            );
          },
        }}
      />
    </Tab.Navigator>
  );
}
