import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import React, { useEffect, useState } from "react";
import { StatusBar } from "expo-status-bar";
import Colors from "../constants/Colors";
import { SafeAreaView } from "react-native-safe-area-context";
import { Ionicons } from "@expo/vector-icons";
import Welcome from "./../components/Home/welcome";
import Services from "../components/Home/services";
import ProductsRow from "../components/Products/productsRow";
import ProductHeader from "../components/Products/header";
import AsyncStorage from "@react-native-async-storage/async-storage";

export default function Home() {
  const [userData, setUserData] = useState(null);
  const [userLogin, setUserLogin] = useState(true);

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
      }
    } catch (error) {
      console.log("error retrving data",error);
    }
  };

  return (
    <SafeAreaView style={styles.view}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <StatusBar style="light" backgroundColor={Colors.primary} />
        <View style={styles.appBarWraper}>
          <View style={styles.appBar}>
            <Ionicons
              name="location-outline"
              size={22}
              color={Colors.onPrimary}
            />
            <Text style={styles.location}>{userData? userData.location : "sss"}</Text>
            <View style={{ alignItems: "flex-end" }}>
              <View style={styles.cartCount}>
                <Text style={styles.cartNumber}>8</Text>
              </View>
              <TouchableOpacity>
                <Ionicons
                  name="bag-remove-outline"
                  color={Colors.onPrimary}
                  size={22}
                />
              </TouchableOpacity>
            </View>
          </View>
        </View>
        <Welcome />
        <Services />
        <ProductHeader />
        <ProductsRow />
      </ScrollView>
      <View style={{ paddingBottom: 60 }}></View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  view: {
    backgroundColor: Colors.white,
    flex: 1,
  },
  appBarWraper: {
    paddingHorizontal: 20,
    paddingTop: 20,
    backgroundColor: Colors.primary,
  },
  appBar: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  location: {
    fontFamily: "GTWalsheimPro",
    fontSize: 16,
    color: Colors.onPrimary,
  },
  cartCount: {
    position: "absolute",
    bottom: 15,
    width: 15,
    height: 15,
    borderRadius: 8,
    alignItems: "center",
    backgroundColor: Colors.white,
    justifyContent: "center",
    zIndex: 999,
  },
  cartNumber: {
    fontFamily: "GTWalsheimPro",
    fontSize: 10,
    color: Colors.primary,
  },
});
