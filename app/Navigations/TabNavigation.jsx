import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import HomeScreen from "../Screens/HomeScreen/HomeScreen";
import BookingScreen from "../Screens/BookingScreen/BookingScreen";
import ProfileScreen from "../Screens/ProfileScreen/ProfileScreen";
import { FontAwesome } from "@expo/vector-icons";
import Colors from "../utils/Colors";

const Tab = createMaterialBottomTabNavigator();

export const TabNavigation = () => {
  return (
    <Tab.Navigator activeColor={Colors.PRIMARY}>
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarIcon: (color, size) => (
            <FontAwesome name="home" size={24} color={"black"} />
          ),
        }}
      ></Tab.Screen>
      <Tab.Screen
        name="Booking"
        component={BookingScreen}
        options={{
          tabBarIcon: (color, size) => (
            <FontAwesome name="bookmark" size={24} color={"black"} />
          ),
        }}
      ></Tab.Screen>
      <Tab.Screen
        name="Profile"
        component={ProfileScreen}
        options={{
          tabBarIcon: (color, size) => (
            <FontAwesome name="user" size={24} color={"black"} />
          ),
        }}
      ></Tab.Screen>
    </Tab.Navigator>
  );
};
