import { useEffect, useState } from "react";
import {
  View,
  Text,
  FlatList,
  Image,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import Heading from "../../Components/Heading";
import Colors from "../../utils/Colors";
import { useNavigation } from "@react-navigation/native";

const Categories = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    setCategories([
      {
        id: 1,
        name: "Cleaning",
        image: require("../../../assets/images/mop.png"),
      },
      {
        id: 2,
        name: "Painting",
        image: require("../../../assets/images/paintbrush.png"),
      },
      {
        id: 2,
        name: "Shifting",
        image: require("../../../assets/images/cargo-truck.png"),
      },
      {
        id: 2,
        name: "Reparing",
        image: require("../../../assets/images/support.png"),
      },
    ]);
  }, []);

  const navigation = useNavigation();

  return (
    <View style={{ marginTop: 10 }}>
      <Heading text={"Categories"} isViewAll={true} />
      <FlatList
        // horizontal={true}
        numColumns={4}
        // showsHorizontalScrollIndicator={false}
        data={categories}
        renderItem={({ item, index }) => {
          return (
            <TouchableOpacity
              style={styles.container}
              onPress={() => navigation.push("business-list")}
            >
              <View style={styles.iconContainer}>
                <Image
                  source={item.image}
                  style={{
                    width: 30,
                    height: 30,
                  }}
                />
              </View>
              <Text style={{ fontFamily: "outfit-medium", marginTop: 5 }}>
                {item.name}
              </Text>
            </TouchableOpacity>
          );
        }}
      />
    </View>
  );
};

export default Categories;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
  },
  iconContainer: {
    backgroundColor: Colors.LIGHT_GRAY,
    borderRadius: 99,
    padding: 17,
  },
});
