import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Home from "./components/Home";
import Register from "./components/Register";
import Login from "./components/Login";
import Dashboard from "./components/Dashboard";
import Chat from "./components/Chat";

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={Home}
          options={{ title: "Welcome" }}
        />
        <Stack.Screen
          name="Register"
          component={Register}
          options={{ title: "Sign Up" }}
        />
        <Stack.Screen
          name="Login"
          component={Login}
          options={{ title: "Login" }}
        />
        <Stack.Screen
          name="Dashboard"
          component={Dashboard}
          options={{ title: "Dashboard" }}
        />
        <Stack.Screen
          name="Chat"
          component={Chat}
          options={{ title: "Chat" }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
