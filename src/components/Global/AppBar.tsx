import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React from 'react'
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import Colors from '@/src/constants/Colors';

export default function AppBar() {
    const navigation = useNavigation();
 
    const goBack = () => {
      navigation.goBack();
    };
  
  return (
    <View style={styles.appBarWraper}>
    <View style={styles.appBar}>
      <Ionicons
        name="arrow-back-outline"
        color={Colors.primary}
        size={22}
        onPress={goBack}
      />
      <Text style={styles.location}>Armley, Leeds</Text>
      <View style={{ alignItems: "flex-end" }}>
        <View style={styles.cartCount}>
          <Text style={styles.cartNumber}>8</Text>
        </View>
        <TouchableOpacity>
          <Ionicons name="bag-remove-outline" size={22} />
        </TouchableOpacity>
      </View>
    </View>
  </View>
  )
}

const styles = StyleSheet.create({
    appBarWraper: {
        marginHorizontal: 20,
        paddingTop: 40,
      },
      appBar: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
      },
      location: {
        fontFamily: "GTWalsheimPro",
        fontSize: 16,
        color: Colors.text,
      },
      cartCount: {
        position: "absolute",
        bottom: 15,
        width: 15,
        height: 15,
        borderRadius: 8,
        alignItems: "center",
        backgroundColor: Colors.primary,
        justifyContent: "center",
        zIndex: 999,
      },
      cartNumber: {
        fontFamily: "GTWalsheimPro",
        fontSize: 10,
        color: Colors.onPrimary,
      },
})