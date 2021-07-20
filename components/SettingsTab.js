import React, { useContext, useEffect, useState } from "react";
import { Text, TouchableOpacity, StyleSheet, View } from "react-native";
import { ListItem, Avatar } from "react-native-elements";
import { UserContext } from "../App";
import * as firebase from "firebase";
import "firebase/auth";
//import "firebase/database";
import "firebase/firestore";
//import "firebase/functions";
//import "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyBg4rB-q8is-I7HsK3egLVdjnytC_kkkdY",
  authDomain: "blackandbeertiful-555ab.firebaseapp.com",
  projectId: "blackandbeertiful-555ab",
  storageBucket: "blackandbeertiful-555ab.appspot.com",
  messagingSenderId: "891232814969",
  appId: "1:891232814969:web:d799becfc13cdb9e9c91a8",
  measurementId: "G-BEGKZNKN4Q",
};

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

function SettingsTab({ navigation }) {
  const userContext = useContext(UserContext);
  const [user, setUser] = useState(null);

  useEffect(() => {
    firebase
      .firestore()
      .collection("users")
      .doc(`${userContext.userState.user.user.uid}`)
      .get()
      .then((doc) => {
        if (doc.exists) {
          setUser(doc.data());
        }
      })
      .catch((error) => {
        console.log("Error getting document: ", error);
      });
  }, []);
  console.log(user);

  const logout = async () => {
    await userContext.userDispatch({
      type: "logout",
      payload: { user: null, isLogged: false },
    });
    navigation.navigate("Login", { name: "Login" });
  };
  return (
    <View style={styles.container}>
      <ListItem bottomDivider style={{ width: "100%" }}>
        <ListItem.Content>
          <ListItem.Title style={styles.title}>First Name</ListItem.Title>
          <ListItem.Subtitle>{user ? user.firstName : "..."}</ListItem.Subtitle>
        </ListItem.Content>
        <ListItem.Chevron />
      </ListItem>
      <ListItem bottomDivider style={{ width: "100%" }}>
        <ListItem.Content>
          <ListItem.Title style={styles.title}>Last Name</ListItem.Title>
          <ListItem.Subtitle>{user ? user.lastName : "..."}</ListItem.Subtitle>
        </ListItem.Content>
        <ListItem.Chevron />
      </ListItem>
      <ListItem bottomDivider style={{ width: "100%" }}>
        <ListItem.Content>
          <ListItem.Title style={styles.title}>Email</ListItem.Title>
          <ListItem.Subtitle>{user ? user.email : "..."}</ListItem.Subtitle>
        </ListItem.Content>
        <ListItem.Chevron />
      </ListItem>

      <TouchableOpacity style={styles.button} onPress={logout}>
        <Text style={styles.buttonText}>Logout</Text>
      </TouchableOpacity>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    // justifyContent: "center",
  },
  input: {
    height: 65,
    width: 200,
    color: "#fff",
    borderColor: "#fff",
  },
  button: {
    backgroundColor: "#7AA998",
    height: 65,
    width: 300,
    margin: 5,
    borderRadius: 15,
  },
  buttonText: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 25,
    textAlign: "center",
    alignItems: "center",
    padding: 5,
    margin: 10,
  },
  title: {
    fontWeight: "bold",
  },
});
export default SettingsTab;
