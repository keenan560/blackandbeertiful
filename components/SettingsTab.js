import React from "react";
import { Text, TouchableOpacity, StyleSheet } from "react-native";
import { View } from "react-native";

function SettingsTab({ navigation }) {
  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate("Login", { name: "Login" })}
      >
        <Text style={styles.buttonText}>Logout</Text>
      </TouchableOpacity>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  input: {
    height: 65,
    width: 200,
    color: "#fff",
    borderColor: "#fff",
  },
  button: {
    backgroundColor: "#B266B2",
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
});
export default SettingsTab;
