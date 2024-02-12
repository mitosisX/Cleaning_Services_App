import { ScrollView, Text, View } from "react-native";
import Header from "./Header";
import Slider from "./Slider";
import Categories from "./Categories";
import BusinessList from "./BusinessList";

const HomeScreen = () => {
  return (
    <ScrollView>
      <View>
        <Header />
        <View style={{ padding: 10 }}>
          <Slider />
          <Categories />
          <BusinessList />
        </View>
      </View>
    </ScrollView>
  );
};

export default HomeScreen;
