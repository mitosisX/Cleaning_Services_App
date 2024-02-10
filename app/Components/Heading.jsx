import { StyleSheet, Text, View } from "react-native";

const Heading = ({ text, isViewAll = false }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.heading}>{text}</Text>

      {isViewAll && <Text style={{ fontFamily: "outfit" }}>View All</Text>}
    </View>
  );
};

export default Heading;

const styles = StyleSheet.create({
  heading: {
    fontSize: 20,
    fontFamily: "outfit-bold",
    marginBottom: 10,
  },
  container: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
  },
});
