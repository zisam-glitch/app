import React from "react";
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  TouchableOpacity,
} from "react-native";
import Colors from "@/src/constants/Colors";
import data from "@/src/data/services";
import ServicesCard from "../../common/cards/ServicesCard";

export default function Services() {
  const handleCardPress = (item: any) => {
    console.log("Card pressed:", item);
  };

  return (
    <View style={styles.container}>
      <View >
        <FlatList
          data={data}
          renderItem={({ item }) => (
            <ServicesCard item={item} handleCardPress={handleCardPress} />
          )}
          keyExtractor={(item) => item.id.toString()}
          contentContainerStyle={{ columnGap: 20 }}
          horizontal
          showsHorizontalScrollIndicator={false}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 30,
    marginHorizontal:6

  },
});
