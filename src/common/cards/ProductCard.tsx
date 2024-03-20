import React from "react";
import { StyleSheet, Text, Image, TouchableOpacity, View } from "react-native";
import { useNavigation } from "@react-navigation/native";
import Colors from "@/src/constants/Colors";

interface Product {
  _id: string;
  title: string;
  description: string;
  price: number;
  imageUrl: string;
  category: string;
}
interface ProductCardProps {
  item: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ item }) => {
  const navigation = useNavigation();

  return (
    <TouchableOpacity
    onPress={() => navigation.navigate("ProductDetails", { item: item })}
    style={styles.container}
    >
      <View style={styles.imageContainer}>
        <Image
          source={{
            uri: item.imageUrl,
          }}
          style={styles.image}
          resizeMode="cover"
        />
      </View>
      <View style={styles.details}>
        <Text style={styles.title} numberOfLines={1}>
          {item.title.length > 15
            ? item.title.slice(0, 15) + "..."
            : item.title}
        </Text>
        <Text style={styles.price}>£{item.price}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "column",
    borderRadius: 8,
    marginVertical: 8,
    backgroundColor: "#f5fdff",

   
  },
  imageContainer: {
    width: "100%",
    height:  150,
    borderRadius: 8,
    overflow: "hidden",
    alignItems: "center",
    justifyContent: "center",
  },
  image: {
    width: "90%",
    height: "90%",
  },
  details: {
    flexDirection: "column",
    paddingTop: 4,
    paddingBottom: 14,
    paddingHorizontal: 4,
    alignItems: "center",
    justifyContent: "space-between",
  },
  title: {
    fontSize: 16,
    fontFamily: "GTWalsheimProMedium",
    marginBottom: 4,
  },
  price: {
    fontSize: 14,
    color: "gray",
    fontFamily: "GTWalsheimProMedium",
  },
});

export default ProductCard;
