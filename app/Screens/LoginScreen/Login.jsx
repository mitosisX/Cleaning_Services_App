import React from "react";
import { Text, View, Image, StyleSheet, TouchableOpacity } from "react-native";
import Colors from "../../utils/Colors";
import * as WebBrowser from "expo-web-browser";
import { useWarmUpBrowser } from "../../hooks/warmUpBrowser";
import { useOAuth } from "@clerk/clerk-expo";
import Home from "../HomeScreen/HomeScreen";
import { Link, router } from "expo-router";

WebBrowser.maybeCompleteAuthSession();

const Login = () => {
  useWarmUpBrowser();
  const { startOAuthFlow } = useOAuth({ strategy: "oauth_google" });

  const onPress = React.useCallback(async () => {
    try {
      const { createdSessionId, signIn, signUp, setActive } =
        await startOAuthFlow();

      if (createdSessionId) {
        setActive({ session: createdSessionId });
      } else {
        // Use signIn or signUp for next steps such as MFA
      }
    } catch (err) {
      console.error("OAuth error", err);
    }
  }, []);

  return (
    <View style={{ alignItems: "center" }}>
      <Image
        source={require("../../../assets/images/login.png")}
        style={styles.loginImage}
      />
      <View style={styles.subContainer}>
        <Text
          style={{
            fontSize: 25,
            color: Colors.WHITE,
            textAlign: "center",
          }}
        >
          Lets Find
          <Text style={{ fontWeight: "bold" }}>
            {" "}
            Professional Cleaning and Repair
          </Text>{" "}
          Services
        </Text>
        <Text
          style={{
            textAlign: "center",
            marginTop: 20,
            fontSize: 18,
            color: Colors.WHITE,
          }}
        >
          Best app to find services near you which deliver you a professional
          service
        </Text>
        <TouchableOpacity style={styles.button} onPress={() => 2}>
          <Text style={{ textAlign: "center", color: Colors.PRIMARY }}>
            Let's Get Started
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  loginImage: {
    width: 230,
    height: 450,
    marginTop: 70,
    borderWidth: 4,
    borderColor: Colors.BLACK,
    borderRadius: 15,
  },
  subContainer: {
    width: "100%",
    backgroundColor: Colors.PRIMARY,
    height: "70%",
    marginTop: -20,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    padding: 20,
  },
  button: {
    padding: 15,
    backgroundColor: Colors.WHITE,
    borderRadius: 99,
    marginTop: 40,
  },
});

export default Login;
