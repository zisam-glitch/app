import { View, Text, TouchableOpacity, Image, StyleSheet } from "react-native";
import Colors from "@/src/constants/Colors";
import Services from "../../components/Home/services";

interface ServicesCardProps {
  item: {
    id: number;
    title: string;
    desc: string;
    url: string;
  };
  handleCardPress: (item: any) => void;
}

const ServicesCard: React.FC<ServicesCardProps> = ({
  item,
  handleCardPress,
}) => {
  return (
    <TouchableOpacity
      style={styles.container}
      onPress={() => handleCardPress(item)}
    >
      <View style={styles.Services}>
        <TouchableOpacity style={styles.logoContainer}>
          <Image
            source={{ uri: item.url }}
            resizeMode="contain"
            style={styles.logoImage}
          />
        </TouchableOpacity>
        <View>
          <Text style={styles.jobName}>{item.title}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingLeft: 20,
    paddingRight: 30,
    paddingVertical: 15,
    backgroundColor: "#f5fdff",
    borderRadius: 15,
    justifyContent: "space-between",
  },
  Services: {
    flexDirection: "row",
    gap: 8,
    alignItems: "center",
  },
  logoContainer: {
    width: 50,
    height: 50,
    padding: 4,
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
  },
  logoImage: {
    width: "100%",
    height: "100%",
    borderRadius: 5,
  },

  jobName: {
    fontSize: 18,
    fontFamily: "GTWalsheimProMedium",
    color: Colors.primary,
  },
});

export default ServicesCard;
