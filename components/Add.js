import React from "react";
import { Text, View, StyleSheet, TouchableOpacity } from "react-native";
import { FontAwesome } from "@expo/vector-icons";

function Add() {
  return (
    <View style={styles.container}>
      <View style={{ flexDirection: "column", alignItems: "center" }}>
        <TouchableOpacity style={{ alignItems: "center" }}>
          <FontAwesome
            name="star-half-o"
            size={100}
            color="#fff"
            style={{ margin: 10 }}
          />
          <Text style={styles.text}>Post a review</Text>
        </TouchableOpacity>
        <TouchableOpacity style={{ alignItems: "center" }}>
          <FontAwesome
            name="exclamation-circle"
            size={100}
            color="#fff"
            style={{ margin: 10 }}
          />
          <Text style={styles.text}>Escalate an issue</Text>
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
  text: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 25,
    marginBottom: 85,
  },
});

export default Add;
