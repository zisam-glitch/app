import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React, { useEffect } from "react";
import { useFonts } from "expo-font";
import * as SplashScreen from "expo-splash-screen";
import BottomTabNavigation from "../navigation/bottomTabNavigation";
import ProductDetails from "../Screens/productDetails";
import Product from "../Screens/Product";


const Stack = createNativeStackNavigator();

export default function Index() {
  const [fontsLoaded, fontError] = useFonts({
    GTWalsheimPro: require("../assets/fonts/GTWalsheimPro-Regular.ttf"),
    GTWalsheimProMedium: require("../assets/fonts/GTWalsheimPro-Medium.ttf"),
    GTWalsheimProBold: require("../assets/fonts/GTWalsheimPro-Bold.ttf"),
  });

  useEffect(() => {
    const hideSplash = async () => {
      if (fontsLoaded || fontError) {
        await SplashScreen.hideAsync();
      }
    };

    hideSplash();
  }, [fontsLoaded, fontError]);

  if (!fontsLoaded && !fontError) {
    return null;
  }

  return (
    <Stack.Navigator>
        
      <Stack.Screen
        name="Bottom Navigation"
        component={BottomTabNavigation}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="ProductDetails"
        component={ProductDetails}
        options={{headerShown: false}}
      />
        <Stack.Screen
        name="Product"
        component={Product}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
}
