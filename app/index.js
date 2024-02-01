import { useState } from "react";
import { View, Text, ScrollView, SafeAreaView } from "react-native";
import { Stack, useRouter } from "expo-router";
import Login from "./Screens/LoginScreen/Login";

const Home = () => {
  return (
    <View>
      <Login />
    </View>
  );
};

export default Home;
