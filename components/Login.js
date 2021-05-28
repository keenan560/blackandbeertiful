import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { Input } from "react-native-elements";

function Login({ navigation }) {
  return (
    <View style={styles.container}>
      <View style={{ width: 300 }}>
        <Text
          style={{
            textAlign: "center",
            color: "#fff",
            fontSize: 72,
            fontStyle: "italic",
            fontWeight: "bold",
          }}
        >
          Belp!
        </Text>
        <Input
          inputStyle={styles.input}
          placeholder="Email"
          keyboardType="email-address"
          textContentType="emailAddress"
          inputContainerStyle={{ borderColor: "#fff" }}
          placeholderTextColor="#fff"
        />
        <Input
          inputStyle={styles.input}
          placeholder="Password"
          textContentType="password"
          inputContainerStyle={{ borderColor: "#fff" }}
          placeholderTextColor="#fff"
        />
        <TouchableOpacity
          style={styles.button}
          onPress={() =>
            navigation.navigate("Dashboard", { name: "Dashboard" })
          }
        >
          <Text style={styles.buttonText}>Login</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    backgroundColor: "#B266B2",
    justifyContent: "center",
  },
  input: {
    height: 65,
    width: 200,
    color: "#fff",
    borderColor: "#fff",
  },
  button: {
    backgroundColor: "#fff",
    height: 65,
    width: 300,
    margin: 5,
    borderRadius: 15,
  },
  buttonText: {
    color: "#B266B2",
    fontWeight: "bold",
    fontSize: 25,
    textAlign: "center",
    alignItems: "center",
    padding: 5,
    margin: 10,
  },
});

export default Login;
