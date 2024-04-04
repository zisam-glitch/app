import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import React from "react";
import Colors from "@/src/constants/Colors";
import { Ionicons } from "@expo/vector-icons";

export default function Welcome() {
  return (
    <View style={styles.welcome}>
      <View >
        <View style={styles.welcomeText}>
          <Text style={styles.welcomeTxt}>Hello </Text>
          <Text style={styles.userName}>Bhogal, </Text>
        </View>
        <Text style={styles.Appoinments}>Want to speak to a dentist?</Text>
      </View>
      <View>
        <TouchableOpacity style={styles.bookingButton}>
          <Ionicons
            style={styles.bookingIcon}
            name="calendar-outline"
            size={20}
          />
          <Text style={styles.bookingText}>Book An Appointment</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  welcome:{
    backgroundColor: Colors.primary,
    // borderBottomEndRadius: 8,
    // borderBottomStartRadius: 8,
  },
  welcomeTxt: {
    fontFamily: "GTWalsheimProMedium",
    fontSize: 30,
    marginTop: 25,
    color: Colors.onPrimary,
  },
  userName:{
    fontFamily: "GTWalsheimProMedium",
    fontSize: 30,
    marginTop: 25,
    color: Colors.white,
  },
  welcomeText: {
    flexDirection: "row",
    marginHorizontal: 20,

  },
  Appoinments:{
    fontFamily: "GTWalsheimProMedium",
    fontSize: 20,
    marginTop: 8,
    marginHorizontal: 20,
    color: Colors.onPrimary,
  },
  bookingButton: {
    backgroundColor: Colors.onPrimary,
    padding: 12,
    borderRadius: 5,
    marginTop: 20,
    marginHorizontal: 20,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    gap: 10,
    marginBottom: 30,
  },
  bookingText: {
    color: Colors.primary,
    fontSize: 16,
    fontFamily: "GTWalsheimPro",
  },
  bookingIcon: {
    color: Colors.primary,
  },
});
