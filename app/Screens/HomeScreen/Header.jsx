import {
  View,
  Text,
  StyleSheet,
  Image,
  TextInput,
  TouchableOpacity,
} from "react-native";
import React from "react";
import Colors from "../../utils/Colors";
import { FontAwesome } from "@expo/vector-icons";

export default function Header() {
  return (
    <View style={styles.container}>
      {/* Profile Section */}
      <View style={styles.profileMainContainer}>
        <View style={styles.profileContainer}>
          <Image
            source={require("../../../assets/images/account.png")}
            style={styles.imageHeader}
          />
          <View>
            <Text style={{ color: Colors.WHITE, fontFamily: "outfit" }}>
              Welcome
            </Text>
            <Text
              style={{
                color: Colors.WHITE,
                fontSize: 20,
                fontFamily: "outfit-bold",
              }}
            >
              John Doe
            </Text>
          </View>
        </View>
        <FontAwesome name="bookmark-o" size={27} color={"white"} />
      </View>
      {/* Search Bar Section */}
      <View style={styles.searchBarContainer}>
        <TextInput placeholder="Search..." style={styles.textInput} />
        <TouchableOpacity>
          <FontAwesome
            name="search"
            size={27}
            color={"purple"}
            style={styles.searchBtn}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    paddingTop: 40,
    backgroundColor: Colors.PRIMARY,
    borderBottomLeftRadius: 45,
    borderBottomRightRadius: 45,
  },
  profileMainContainer: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  profileContainer: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
  },
  textInput: {
    backgroundColor: Colors.WHITE,
    color: "black",
    borderRadius: 15,
    padding: 7,
    paddingHorizontal: 16,
    width: "85%",
    fontSize: 16,
    fontFamily: "outfit",
  },
  searchBtn: {
    backgroundColor: Colors.WHITE,
    padding: 10,
    borderRadius: 50,
  },
  searchBarContainer: {
    marginTop: 15,
    display: "flex",
    flexDirection: "row",
    gap: 10,
    paddingBottom: 10,
  },
  imageHeader: {
    width: 60,
    height: 60,
  },
});
