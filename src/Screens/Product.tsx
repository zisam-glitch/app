import {
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React from "react";
import Colors from "@/src/constants/Colors";
import Product from "../components/Products/products";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import AppBar from "../components/Global/AppBar";


export default function Products() {

  const navigation = useNavigation();
 
  const goBack = () => {
    navigation.goBack();
  };

  return (
    <SafeAreaView style={styles.top}>
      <ScrollView>
        <AppBar />
        <Text style={styles.text}>All Products</Text>
        <Product />
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  top: {
    flex: 1,
    backgroundColor: Colors.white,
  },
  
  text: {
    fontFamily: "GTWalsheimProMedium",
    fontSize: 23,
    color: Colors.primary,
    marginHorizontal: 20,
    marginTop: 20,
    marginBottom: 10,
  },
});
