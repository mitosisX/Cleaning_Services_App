import { View, Text, Image, StyleSheet } from "react-native";
import React from "react";
import Colors from "../../utils/Colors";

export default function BusinessListItemSmall({ business }) {
  return (
    <View style={styles.container}>
      <Image style={styles.image} source={business.image} />
      <View style={styles.infoContainer}>
        <Text style={{ fontSize: 17, fontFamily: "outfit-medium" }}>
          {business?.name}
        </Text>
        <Text
          style={{
            fontSize: 13,
            fontFamily: "outfit",
            color: Colors.GRAY,
          }}
        >
          {business?.contactPerson}
        </Text>
        <Text
          style={{
            fontSize: 10,
            fontFamily: "outfit",
            color: Colors.PRIMARY,
            borderRadius: 3,
            backgroundColor: Colors.PRIMARY_LIGHT,
            padding: 3,
            alignSelf: "flex-start",
            paddingHorizontal: 7,
          }}
        >
          {business?.category}
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 10,
    backgroundColor: Colors.WHITE,
    borderRadius: 10,
  },
  infoContainer: {
    padding: 7,
    display: "flex",
    gap: 3,
  },
  image: {
    width: 160,
    height: 100,
    borderRadius: 10,
  },
});
