import React from "react";
import { View, StyleSheet, TouchableOpacity } from "react-native";
import { Text } from "react-native-elements";

function Home({ navigation }) {
  return (
    <View style={styles.container}>
      <Text
        style={{
          textAlign: "center",
          fontSize: "60vh",
          // fontStyle: "italic",
          fontWeight: "bold",
        }}
      >
        One Pour All
      </Text>
      <Text
        style={{
          color: "#7AA998",
          fontWeight: "bold",
          fontSize: 18,
          marginBottom: 5,
        }}
      >
        Tagline
      </Text>
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate("Register", { name: "Register" })}
      >
        <Text style={styles.buttonText}>Sign Up</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate("Login", { name: "Login" })}
      >
        <Text style={styles.buttonText}>Login</Text>
      </TouchableOpacity>
      <Text style={{ fontSize: 16, fontWeight: "bold" }}>
        Created by #BlackandBeertiful
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  button: {
    backgroundColor: "#7AA998",
    height: 65,
    width: 300,
    margin: 5,
    borderRadius: 15,
    justifyContent: "center",
    marginBottom: 10,
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
});

export default Home;
