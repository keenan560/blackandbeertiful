import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Ionicons from "react-native-vector-icons/Ionicons";
import HomeTab from "./HomeTab";
import FeedTab from "./Feed";
import AddTab from "./Add";
import ChatTab from "./ChatTab";
import SettingsTab from "./SettingsTab";
import Chat from "./Chat";

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

function Dashboard({ navigation }) {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === "Home") {
            iconName = focused ? "home" : "home-outline";
            color = "#B266B2";
          }
          if (route.name === "Feed") {
            iconName = focused ? "list-circle" : "list-outline";
            color = "#B266B2";
          }

          if (route.name === "Add") {
            iconName = focused ? "add-circle" : "add";
            color = "#B266B2";
          }
          if (route.name === "Chat") {
            iconName = focused ? "chatbox" : "chatbox-outline";
            color = "#B266B2";
          }
          if (route.name === "Settings") {
            iconName = focused ? "settings" : "settings-outline";
            color = "#B266B2";
          }
          // You can return any component that you like here!
          return <Ionicons name={iconName} size={size} color={color} />;
        },
      })}
      tabBarOptions={{
        activeTintColor: "black",
        inactiveTintColor: "gray",
      }}
    >
      <Tab.Screen name="Home" component={HomeTab} />
      <Tab.Screen name="Feed" component={FeedTab} />
      <Tab.Screen name="Add" component={AddTab} />
      <Tab.Screen name="Chat" component={ChatTab} />
      <Tab.Screen name="Settings" component={SettingsTab} />
    </Tab.Navigator>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    backgroundColor: "#fff",
  },
});

export default Dashboard;
