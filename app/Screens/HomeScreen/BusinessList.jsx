import { View, Text, FlatList, Image, StyleSheet } from "react-native";
import Heading from "../../Components/Heading";
import { useEffect, useState } from "react";
import BusinessListItemSmall from "./BusinessListItemSmall";

export default function BusinessList() {
  const [businesses, setBusiness] = useState([]);

  useEffect(() => {
    setBusiness([
      {
        id: 1,
        name: "House Cleaning",
        image: require("../../../assets/images/buss1.jpg"),
        contactPerson: "Jenny William",
        category: "Cleaning",
      },
      {
        id: 2,
        name: "Grocery Shopping",
        image: require("../../../assets/images/buss2.jpg"),
        contactPerson: "Emma Potter",
        category: "Cleaning",
      },
      {
        id: 2,
        name: "Floor Mopping",
        image: require("../../../assets/images/buss3.jpg"),
        contactPerson: "Alexa Amazon",
        category: "Cleaning",
      },
    ]);
  }, []);

  return (
    <View style={{ marginTop: 20 }}>
      <Heading text={"Latest Business"} isViewAll={true} />
      <FlatList
        data={businesses}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        renderItem={({ item, index }) => {
          return (
            <View style={{ marginRight: 10 }}>
              <BusinessListItemSmall business={item} />
            </View>
          );
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {},
});
