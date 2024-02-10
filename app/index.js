import { View, Text } from "react-native";
import Login from "./Screens/LoginScreen/Login";
import { StatusBar } from "expo-status-bar";
import { ClerkProvider, SignedIn, SignedOut } from "@clerk/clerk-expo";
import HomeScreen from "./Screens/HomeScreen/HomeScreen";
import { NavigationContainer } from "@react-navigation/native";
import { TabNavigation } from "./Navigations/TabNavigation";
import { useFonts } from "expo-font";

const LangingPage = () => {
  const [fontsLoaded] = useFonts({
    outfit: require("../assets/fonts/Outfit-Regular.ttf"),
    "outfit-medium": require("../assets/fonts/Outfit-Medium.ttf"),
    "outfit-bold": require("../assets/fonts/Outfit-Bold.ttf"),
  });
  return <TabNavigation />;
  // return (
  //   <ClerkProvider publishableKey="pk_test_c3Rhci1jcmF5ZmlzaC00OC5jbGVyay5hY2NvdW50cy5kZXYk">
  //     <View>
  //       <SignedIn>
  //         <Text>You are Signed in</Text>
  //       </SignedIn>
  //       <SignedOut>
  //         <Login />
  //       </SignedOut>
  //       <StatusBar style="auto" />
  //     </View>
  //   </ClerkProvider>
  // );
};

export default LangingPage;
