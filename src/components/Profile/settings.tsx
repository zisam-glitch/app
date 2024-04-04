import {
  StyleSheet,
  Image,
  Text,
  View,
  TouchableOpacity,
  Alert,
} from "react-native";
import React from "react";
import { Ionicons } from "@expo/vector-icons";
import Colors from "@/src/constants/Colors";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { router } from "expo-router";

export default function Settings() {

  const userLogout = async () => {
    
    const id = await AsyncStorage.getItem("id");
    const useId = `user${JSON.parse(id)}`;
    try{
      await AsyncStorage.multiRemove([useId, 'id']);
      router.replace("/login");
    }catch(error){
      console.log("error logging out user", error);
    }
  };

  const logout = () => {
    Alert.alert("Log out", "Are you sure you want to Log out?", [
      {
        text: "Cancel",
        onPress: () => console.log("Cancel Pressed"),
        style: "cancel",
      },
      {
        text: "Logout",
        onPress: () => userLogout(),
        style: "destructive",
      },
    ]);
  };
  const DeleteAccount = () => {
    Alert.alert("Delete Account", "Are you sure you want to delete account?", [
      {
        text: "Cancel",
        onPress: () => console.log("Cancel Pressed"),
        style: "cancel",
      },
      {
        text: "Delete",
        onPress: () => console.log("Delete Pressed"),
        style: "destructive",
      },
    ]);
  };
  const ClearCache = () => {
    Alert.alert("Clear Cache", "Are you sure you want to clear all cache? ", [
      {
        text: "Cancel",
        onPress: () => console.log("Cancel Pressed"),
        style: "cancel",
      },
      {
        text: "Clear",
        onPress: () => console.log("Clear Pressed"),
        style: "destructive",
      },
    ]);
  };
  return (
    <View style={styles.View}>
      <TouchableOpacity onPress={() => ClearCache()}>
        <View style={styles.list}>
          <View style={styles.listItem}>
            <Ionicons
              name="sync-outline"
              style={{
                fontSize: 22,
                color: Colors.primary,
              }}
            />
            <View>
              <Text
                style={{
                  fontSize: 20,
                  color: Colors.primary,
                  fontFamily: "GTWalsheimProMedium",
                  paddingBottom: 2,
                }}
              >
                Clear cache
              </Text>
            </View>
          </View>
        </View>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => DeleteAccount()}>
        <View style={styles.list}>
          <View style={styles.listItem}>
            <Ionicons
              name="trash-bin-outline"
              style={{
                fontSize: 22,
                color: Colors.primary,
              }}
            />
            <View>
              <Text
                style={{
                  fontSize: 20,
                  color: Colors.primary,
                  fontFamily: "GTWalsheimProMedium",
                  paddingBottom: 2,
                }}
              >
                Delete account
              </Text>
            </View>
          </View>
        </View>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => logout()}>
        <View style={styles.list}>
          <View style={styles.listItem}>
            <Ionicons name="log-out-outline" style={styles.icon} />
            <View>
              <Text style={styles.listItemTxt}>Log out</Text>
            </View>
          </View>
        </View>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  View: {
    flex: 1,
    paddingVertical: 14,
  },

  list: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginHorizontal: 20,
    marginVertical: 16,
  },
  listItem: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    gap: 15,
  },
  listItemTxt: {
    fontSize: 20,
    color: Colors.red,
    fontFamily: "GTWalsheimProMedium",
    paddingBottom: 2,
  },
  icon: {
    fontSize: 22,
    color: Colors.red,
  },
});
