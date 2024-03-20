import React from "react";
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  Image,
  ScrollView,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { SafeAreaView } from "react-native-safe-area-context";
import { useNavigation, useRoute, RouteProp } from "@react-navigation/native"; // Import RouteProp
import Colors from "../constants/Colors";
import Size from "../constants/Size";
import AppBar from "../components/Global/AppBar";

interface Product {
  _id: string;
  title: string;
  description: string;
  price: number;
  imageUrl: string;
  category: string;
}

type ParamList = {
  ProductDetails: { item: Product };
};

type ProductDetailsRouteProp = RouteProp<ParamList, "ProductDetails">;

export default function ProductDetails() {
  const navigation = useNavigation();
  const route = useRoute<ProductDetailsRouteProp>();

  const { item } = route.params;

  const goBack = () => {
    navigation.goBack();
  };

  return (
    <View style={styles.top}>
       <View style={{ paddingBottom: 10 }}>
          <AppBar />
        </View>
      <ScrollView>
       
        <Image
          source={{
            uri: item.imageUrl,
          }}
          style={styles.image}
        />
        <View style={styles.details}>
          <View style={styles.titleRow}>
            <View style={styles.catagoryView}>
              <Text style={styles.catagory}>Category: </Text>
              <Text style={styles.catagoryName}>{item.category}</Text>
            </View>
            <Text style={styles.title}>{item.title}</Text>

            <Text style={styles.desc}>{item.description}</Text>

            <View style={{ paddingBottom: 60 }}></View>
          </View>
        </View>
      </ScrollView>
      <View style={styles.bottomRaw}>
        <Text style={styles.price}>£ {item.price}</Text>
        <TouchableOpacity style={styles.Cart}>
          <Text style={styles.Text}>Add to Cart</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  top: {
    flex: 1,
    backgroundColor: Colors.white,
  },

  image: {
    height: Size.screenHeight * 0.4,
    paddingTop: 10,
    resizeMode: "cover",
  },
  details: {
    backgroundColor: Colors.white,
    width: Size.screenWidth,
  },
  titleRow: {
    marginHorizontal: Size.large,
    paddingTop: 20,
    width: Size.screenWidth - 40,
  },
  title: {
    fontFamily: "GTWalsheimProMedium",
    fontSize: 23,
    marginBottom: 8,
    marginTop: 4,
  },
  catagoryView: {
    flexDirection: "row",
  },
  catagory: {
    fontFamily: "GTWalsheimProMedium",
    marginBottom: 8,
  },
  catagoryName: {
    fontFamily: "GTWalsheimPro",
    marginBottom: 8,
    color: Colors.lightText,
  },
  desc: {
    fontFamily: "GTWalsheimPro",
    color: Colors.lightText,
    fontSize: Size.medium,
  },
  bottomRaw: {
    paddingHorizontal: Size.large,
    paddingVertical: Size.small,
    width: Size.screenWidth,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    position: "absolute",
    bottom: 0,
    backgroundColor: Colors.white,
  },
  price: {
    fontSize: 26,
    fontFamily: "GTWalsheimProMedium",
    color: Colors.primary,
  },
  Text: {
    color: Colors.white,
    fontFamily: "GTWalsheimProMedium",
    fontSize: Size.small,
  },
  Cart: {
    backgroundColor: Colors.primary,
    paddingHorizontal: Size.xxLarge * 1.5,
    paddingVertical: Size.medium,
    borderRadius: 8,
    color: Colors.white,
  },
});
