import { Dimensions } from 'react-native';

const small: number = 14;
const medium: number = 16;
const large: number = 20;
const xLarge: number = 30;
const xxLarge: number = 35;

const { width, height } = Dimensions.get('window');

export default {
  small,
  medium,
  large,
  xLarge,
  xxLarge,
  screenWidth: width,
  screenHeight: height,
};
