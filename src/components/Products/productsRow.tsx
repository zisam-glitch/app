import {
  StyleSheet,
  Text,  View,
  ActivityIndicator,
} from "react-native";
import React from "react";
import Colors from "@/src/constants/Colors";
import useFetch from "../../hooks/useFetch";
import Size from "@/src/constants/Size";
import RenderProducts from "./renderProducts"


export default function ProductsRow() {
  const { loading, error, refresh } = useFetch();

  return (
      <View style={styles.container}>
        {loading ? (
          <ActivityIndicator style={{ marginVertical: Size.xxLarge }} size={Size.xxLarge} color={Colors.primary} />
        ) : error ? (
          <Text style={styles.errorText}>{error.message}</Text>
        ) : <RenderProducts />}
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
