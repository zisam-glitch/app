import {
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
  } from "react-native";
  import React from "react";
  import Colors from "@/src/constants/Colors";
  import { useNavigation } from "@react-navigation/native";

  export default function ProductsRow() {
  
    const navigation = useNavigation();

    return (
      <View>
        <View style={styles.header}>
          <Text style={styles.headerTitle}>Dental Products</Text>
          <TouchableOpacity onPress={() => navigation.navigate("Product")}>
            <Text style={styles.headerBtn}>Show all</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
  
  const styles = StyleSheet.create({
    header: {
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "center",
      paddingHorizontal: 20,
      marginTop: 25,
    },
    headerTitle: {
      fontSize: 22,
      fontFamily: "GTWalsheimProMedium",
      color: Colors.primary,
    },
    headerBtn: {
      fontSize: 16,
      fontFamily: "GTWalsheimPro",
      color: Colors.primary,
    },
  });
  