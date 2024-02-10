import { View, Text, StyleSheet, FlatList, Image } from "react-native";
import React, { useEffect, useState } from "react";
import { getData } from "../../utils/Data";
import Colors from "../../utils/Colors";
import Heading from "../../Components/Heading";

const Slider = () => {
  const [offers, setOffers] = useState([]);

  useEffect(() => {
    setOffers([
      { id: 1, image: require("../../../assets/images/Slider1.png") },
      { id: 2, image: require("../../../assets/images/Slider2.png") },
    ]);
  }, []);

  return (
    <View>
      <Heading text={"Offers For You"} />
      <FlatList
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        data={offers}
        renderItem={({ item, index }) => {
          // const img = require(item.image);
          return (
            <View
              style={{
                marginRight: 20,
              }}
            >
              <Image source={item.image} style={styles.sliderImage} />
            </View>
          );
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  offers: {
    backgroundColor: Colors.PRIMARY,
    display: "flex",
    flexDirection: "row",
  },
  sliderImage: {
    width: 270,
    height: 150,
    borderRadius: 20,
  },
});

export default Slider;
