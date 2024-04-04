

import { NativeStackScreenProps } from "@react-navigation/native-stack";
import BottomTabNavigation from './navigation/bottomTabNavigation';

declare global {
  namespace ReactNavigation {
    interface RootParamList extends RootStackParamList {}
  }
}

export type RootStackParamList = {
  Welcome: undefined;
  Login: undefined;
  Register: undefined;
  Home: undefined;
  BottomNavigation: undefined;
  ProductDetails: { item: any };
  Product: undefined
  Appoinments: undefined;
  History: undefined;
  Reports: undefined;
  Orders: undefined;
  Cart: undefined;
};

export type RootStackScreenProps<Screen extends keyof RootStackParamList> =
  NativeStackScreenProps<RootStackParamList, Screen>;
