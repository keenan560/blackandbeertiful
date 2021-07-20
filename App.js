import React, { useReducer } from "react";
import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Home from "./components/Home";
import Register from "./components/Register";
import Login from "./components/Login";
import Dashboard from "./components/Dashboard";
import Chat from "./components/Chat";
import PostReview from "./components/PostReview";

const Stack = createStackNavigator();

export const UserContext = React.createContext();

const user = { user: null, isLogged: false };

const userReducer = (state, action) => {
  switch (action.type) {
    case "login":
      return action.payload;
    case "logout":
      return { user: null, isLogged: false };
    default:
      return user;
  }
};

export default function App() {
  const [user, userDispatch] = useReducer(userReducer, user);
  return (
    <UserContext.Provider
      value={{ userState: user, userDispatch: userDispatch }}
    >
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
            options={{ title: "One Pour All" }}
          />
          <Stack.Screen
            name="Chat"
            component={Chat}
            options={{ title: "Chat" }}
          />
          <Stack.Screen
            name="Post a Review"
            component={PostReview}
            options={{ title: "Search" }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </UserContext.Provider>
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
