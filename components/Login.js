import React, { useState, useContext } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { Input, Button } from "react-native-elements";
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
function Login({ navigation }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const userContext = useContext(UserContext);
  console.log(userContext.userState);
  const logIn = () => {
    firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then((user) => {
        // Signed in
        // ...

        userContext.userDispatch({
          type: "login",
          payload: { user: user, isLogged: true },
        });

        setTimeout(() => {
          setLoading(false);
          navigation.navigate("Dashboard", { name: "Dashboard" });
        }, 1000);
      })
      .catch((error) => {
        var errorCode = error.code;
        var errorMessage = error.message;
        alert(errorMessage);
        setLoading(false);
      });
  };

  return (
    <View style={styles.container}>
      <View style={{ width: 300 }}>
        <Text
          style={{
            textAlign: "center",
            color: "#fff",
            fontSize: 50,
            // fontStyle: "italic",
            fontWeight: "bold",
            marginBottom: 10,
          }}
        >
          One Pour All
        </Text>
        <Input
          inputStyle={styles.input}
          placeholder="Email"
          keyboardType="email-address"
          textContentType="emailAddress"
          inputContainerStyle={{ borderColor: "#fff" }}
          placeholderTextColor="#fff"
          onChangeText={(text) => setEmail(text)}
        />
        <Input
          inputStyle={styles.input}
          placeholder="Password"
          textContentType="password"
          inputContainerStyle={{ borderColor: "#fff" }}
          placeholderTextColor="#fff"
          onChangeText={(text) => setPassword(text)}
          secureTextEntry
        />
        <TouchableOpacity style={styles.button} onPress={logIn}>
          <Text style={styles.buttonText}>Login</Text>
        </TouchableOpacity>
        {/* <Button
          buttonStyle={styles.button}
          title="Login"
          type="solid"
          onPress={logIn}
          loading={loading}
        /> */}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    backgroundColor: "#7AA998",
    justifyContent: "center",
  },
  input: {
    height: 65,
    width: 200,
    color: "#fff",
    borderColor: "#fff",
    marginTop: 20,
  },
  button: {
    backgroundColor: "#fff",
    height: 65,
    width: 300,
    margin: 5,
    borderRadius: 15,
  },
  buttonText: {
    color: "#7AA998",
    fontWeight: "bold",
    fontSize: 25,
    textAlign: "center",
    alignItems: "center",
    padding: 5,
    margin: 10,
  },
});

export default Login;
