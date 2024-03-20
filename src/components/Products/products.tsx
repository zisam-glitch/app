import {
    StyleSheet,
    Text,  View,
    ActivityIndicator,
  } from "react-native";
  import React from "react";
  import Colors from "@/src/constants/Colors";
  import useFetch from "../../hooks/useFetch";
  import Size from "@/src/constants/Size";
  import RenderAllProducts from "./renderAllProducts"
  
  
  export default function Products() {
    const { loading, error, refresh } = useFetch();
  
    return (
        <View style={styles.container}>
          {loading ? (
            <ActivityIndicator size={Size.large} color={Colors.primary} />
          ) : error ? (
            <Text style={styles.errorText}>{error.message}</Text>
          ) : <RenderAllProducts />}
        </View>
    );
  }
  
  const styles = StyleSheet.create({
   
    container: {
      marginTop: 15,
      marginHorizontal: 20,
    },
    columnWrapper: {
      justifyContent: "space-between",
    },
    errorText: {
      fontFamily: "GTWalsheimProMedium",
    },
  });
  