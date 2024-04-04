import { StyleSheet, Image, Text, View, TouchableOpacity } from "react-native";
import React from "react";
import { Ionicons } from "@expo/vector-icons";
import Colors from "@/src/constants/Colors";
import { useNavigation } from "@react-navigation/native";

export default function Profile() {
  const navigation = useNavigation();
  return (
    <View style={styles.View}>
      <TouchableOpacity 
       onPress={() => navigation.navigate("Appoinments")} >
        <View style={styles.list}>
          <View style={styles.listItem}>
            <Ionicons name="calendar-outline" style={styles.icon} />
            <View>
              <Text style={styles.listItemTxt}>Appoinments</Text>
              <Text style={styles.listItemDesc}>0 upcoming</Text>
            </View>
          </View>
          <Image
            source={require("../../assets/images/arrow.png")}
            style={styles.fromticon}
          />
        </View>
      </TouchableOpacity>
      <TouchableOpacity  onPress={() => navigation.navigate("History")} >
        <View style={styles.list}>
          <View style={styles.listItem}>
            <Ionicons name="time-outline" style={styles.icon} />
            <View>
              <Text style={styles.listItemTxt}>History</Text>
              <Text style={styles.listItemDesc}>0 appoinments</Text>
            </View>
          </View>
          <Image
            source={require("../../assets/images/arrow.png")}
            style={styles.fromticon}
          />
        </View>
      </TouchableOpacity>
      <TouchableOpacity  onPress={() => navigation.navigate("Reports")} >
        <View style={styles.list}>
          <View style={styles.listItem}>
            <Ionicons name="clipboard-outline" style={styles.icon} />
            <View>
              <Text style={styles.listItemTxt}>Reports</Text>
              <Text style={styles.listItemDesc}>0 reports</Text>
            </View>
          </View>
          <Image
            source={require("../../assets/images/arrow.png")}
            style={styles.fromticon}
          />
        </View>
      </TouchableOpacity>
      <TouchableOpacity  onPress={() => navigation.navigate("Cart")} >
        <View style={styles.list}>
          <View style={styles.listItem}>
            <Ionicons name="bag-remove-outline" style={styles.icon} />
            <View>
              <Text style={styles.listItemTxt}>Cart</Text>
              <Text style={styles.listItemDesc}>0 items</Text>
            </View>
          </View>
          <Image
            source={require("../../assets/images/arrow.png")}
            style={styles.fromticon}
          />
        </View>
      </TouchableOpacity>
      <TouchableOpacity  onPress={() => navigation.navigate("Orders")} >
        <View style={styles.list}>
          <View style={styles.listItem}>
            <Ionicons name="card-outline" style={styles.icon} />
            <View>
              <Text style={styles.listItemTxt}>Orders</Text>
              <Text style={styles.listItemDesc}>0 orders</Text>
            </View>
          </View>
          <Image
            source={require("../../assets/images/arrow.png")}
            style={styles.fromticon}
          />
        </View>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  View: {
    flex: 1,
    paddingVertical :14,
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
    gap: 15,
  },
  listItemTxt: {
    fontSize: 18,
    color: Colors.text,
    fontFamily: "GTWalsheimProMedium",
    paddingBottom: 2,
  },
  listItemDesc: {
    fontSize: 13,
    color: Colors.background,
    fontFamily: "GTWalsheimPro",
  },
  fromticon: {
    width: 26,
  },
  icon: {
    fontSize: 22,
    color: Colors.background,
    paddingTop: 2,
  },
});
