import {AnimationObject} from 'lottie-react-native';

export interface OnboardingData {
  id: number;
  animation: AnimationObject;
  text: string;
  textColor: string;
  backgroundColor: string;
  desc: string;
}

const data: OnboardingData[] = [
  {
    id: 1,
    animation: require('../assets/animations/Lottie2.json'),
    text: 'Wellcome to Parish Dental',
    textColor: '#fff',
    backgroundColor: '#157EB3',
    desc : "This prop only applies the opacity"
  },
  
  {
    id: 2,
    animation: require('../assets/animations/Lottie3.json'),
    text: 'Expert Dental Care Anywhere',
    textColor: '#157EB3',
    backgroundColor: '#fff',
    desc : "element to which it's passed "
  },
];

export default data;
