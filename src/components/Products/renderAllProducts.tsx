import { StyleSheet, FlatList, View } from "react-native";
import React from "react";
import ProductCard from "@/src/common/cards/ProductCard";
import useFetch from "../../hooks/useFetch";

interface Product {
  _id: string;
  title: string;
  description: string;
  price: number;
  imageUrl: string;
  category: string;
}

export default function ProductsRow() {
  const { data } = useFetch();

  return (
    <View style={styles.columnWrapper}>
    {data.map((item) => ( 
      <View key={item._id} style={styles.columnItem}>
        <ProductCard item={item} />
      </View>
    ))}
  </View>
  
  );
}

const styles = StyleSheet.create({
  columnWrapper: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
  },
  columnItem: {
    width: "48%", 
  },
});
