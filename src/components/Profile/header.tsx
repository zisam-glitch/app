import { StyleSheet, Text, View, TouchableOpacity, Image } from "react-native";
import React, { useEffect, useState } from "react";
import Colors from "@/src/constants/Colors";
import { Ionicons } from "@expo/vector-icons";
import Appoinments from "../../Screens/Appoinments";
import AsyncStorage from "@react-native-async-storage/async-storage";

export default function Header() {

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
    <View style={styles.header}>
      <View style={styles.head}>
        <Image
          style={styles.profile}
          source={require("../../assets/images/profile.png")}
        />
        <Text style={styles.name}>{userData? userData.username : "name" }</Text>
        <View style={styles.heading}>
          <Text style={styles.headingName}>{userData? userData.email : "hello" }</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    backgroundColor: Colors.primary,
    paddingTop: 45,
    paddingBottom: 40,
    fontFamily: "GTWalsheimPro",
  },
  head: {
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    alignContent: "center",
  },
  profile: {
    width: 80,
    height: 80,
    borderRadius: 50,
  },
  name: {
    color: Colors.white,
    fontFamily: "GTWalsheimProMedium",
    fontSize: 19,
    paddingTop: 10,
  },
  heading: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    alignContent: "center",
    gap: 6,
  },
  headingName: {
    color: Colors.white,
    fontFamily: "GTWalsheimProMedium",
    fontSize: 15,
    paddingTop: 12,
  },
});
