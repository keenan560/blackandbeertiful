import React, { useState } from "react";
import {
  Text,
  StyleSheet,
  View,
  ScrollView,
  TouchableOpacity,
  Alert,
} from "react-native";
import { Input, CheckBox } from "react-native-elements";
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

function Register({ navigation }) {
  const [checked, setChecked] = useState(false);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password1, setPassword1] = useState("");
  const [password2, setPassword2] = useState("");

  const toggleCheck = () => {
    setChecked(!checked);
  };

  const signUp = () => {
    if (!checked) {
      alert("Please check the box!");
    }
    if (password1 !== password2) {
      alert("Passwords must match!");
    }

    if (!password1 || !password2) {
      alert("Please enter a password!");
    }

    setFirstName("");
    setLastName("");
    setEmail("");
    setPassword1("");
    setPassword2("");
    setChecked(false);
  };

  return (
    <View style={styles.container}>
      <Text style={{ margin: 10, fontSize: 25 }}>
        Fill in the details below.
      </Text>
      <ScrollView style={{ width: 300 }}>
        <Input
          inputStyle={styles.input}
          value={firstName}
          onChangeText={(text) => setFirstName(text)}
          placeholder="First Name"
        />
        <Input
          inputStyle={styles.input}
          value={lastName}
          onChangeText={(text) => setLastName(text)}
          placeholder="Last Name"
        />
        <Input
          inputStyle={styles.input}
          value={email}
          onChangeText={(text) => setEmail(text)}
          placeholder="Email"
        />
        <Input
          inputStyle={styles.input}
          value={password1}
          onChangeText={(text) => setPassword1(text)}
          placeholder="Password"
        />
        <Input
          inputStyle={styles.input}
          value={password2}
          onChangeText={(text) => setPassword2(text)}
          placeholder="Re-enter Password"
        />
        <CheckBox
          title="Click here to agree to the Terms & Conditions"
          checked={checked}
          onPress={toggleCheck}
          textStyle={{ fontSize: 10 }}
        />
        <TouchableOpacity style={styles.button} onPress={signUp}>
          <Text style={styles.buttonText}>Sign Up</Text>
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
}

export default Register;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    backgroundColor: "#fff",
    justifyContent: "center",
  },
  button: {
    backgroundColor: "#7AA998",
    height: 65,
    width: 300,
    marginBottom: 50,
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
  input: {
    height: 65,
    width: 200,
  },
});
