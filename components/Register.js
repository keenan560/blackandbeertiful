import React, { useState } from "react";
import { useForm, Controller } from "react-hook-form";
import {
  Text,
  StyleSheet,
  View,
  ScrollView,
  TextInput,
  TouchableOpacity,
  Button,
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

  const toggleCheck = () => {
    setChecked(!checked);
  };
  const {
    control,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const onSubmit = (data, event) => {
    event.preventDefault();
    firebase
      .auth()
      .createUserWithEmailAndPassword(data.email, data.password)
      .then((authUser) => {
        authUser.user.updateProfile({
          email: authUser.user.email,
          firstName: authUser.user.firstName,
          lastName: authUser.user.lastName,
        });
        console.log(authUser);

        firebase
          .firestore()
          .collection("users")
          .doc(`${authUser.user.uid}`)
          .set({
            id: authUser.user.uid,
            email: authUser.user.email,
            firstName: data.firstName,
            lastName: data.lastName,
          })
          .catch((error) => alert(error.message));
        alert("Please login " + data.firstName);
        navigation.navigate("Login");
      })
      .catch((error) => alert(error.message));

    reset({
      firstName: "",
      lastName: "",
      email: "",
      password: "",
    });
  };
  return (
    <View style={styles.container}>
      <Text style={{ margin: 10, fontSize: 25 }}>
        Fill in the details below.
      </Text>
      <ScrollView style={{ width: 300 }}>
        <Controller
          control={control}
          rules={{
            required: true,
          }}
          render={({ field: { onChange, onBlur, value } }) => (
            <TextInput
              style={styles.input}
              onBlur={onBlur}
              onChangeText={onChange}
              value={value}
              placeholder={"First Name"}
            />
          )}
          name="firstName"
          defaultValue=""
        />
        {errors.firstName && (
          <Text style={styles.error}>This is required.</Text>
        )}

        <Controller
          control={control}
          rules={{
            maxLength: 100,
            required: true,
          }}
          render={({ field: { onChange, onBlur, value } }) => (
            <TextInput
              style={styles.input}
              onBlur={onBlur}
              onChangeText={onChange}
              value={value}
              placeholder={"Last Name"}
            />
          )}
          name="lastName"
          defaultValue=""
        />
        {errors.lastName && <Text style={styles.error}>This is required.</Text>}
        <Controller
          control={control}
          rules={{
            maxLength: 100,
            required: true,
            pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
          }}
          render={({ field: { onChange, onBlur, value } }) => (
            <TextInput
              style={styles.input}
              onBlur={onBlur}
              onChangeText={onChange}
              value={value}
              placeholder={"Email"}
            />
          )}
          name="email"
          defaultValue=""
        />
        {errors.email && (
          <Text style={styles.error}>Please enter a valid email address.</Text>
        )}
        <Controller
          control={control}
          rules={{
            maxLength: 100,
            required: true,
            minLength: 6,
          }}
          render={({ field: { onChange, onBlur, value } }) => (
            <TextInput
              style={styles.input}
              onBlur={onBlur}
              onChangeText={onChange}
              value={value}
              placeholder={"Password"}
              secureTextEntry
            />
          )}
          name="password"
          defaultValue=""
        />
        {errors.password && (
          <Text style={styles.error}>Minimum of six characters.</Text>
        )}

        <CheckBox
          title="Click here to agree to the Terms & Conditions"
          checked={checked}
          onPress={toggleCheck}
          textStyle={{ fontSize: 12, marginTop: 10 }}
        />
        {!checked && <Text style={styles.error}>Please check the box.</Text>}
        <TouchableOpacity
          style={styles.button}
          onPress={handleSubmit(onSubmit)}
          type="button"
        >
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
    marginTop: 50,
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
    width: "100%",
    fontSize: 18,
    marginBottom: 20,
    borderBottomWidth: 1,
    borderBottomColor: "gray",
  },
  error: {
    color: "#FF3366",
    fontSize: 14,
  },
});
