import React from "react";
import { Text, View, StyleSheet, TouchableOpacity } from "react-native";
import { FontAwesome } from "@expo/vector-icons";

// First thing to see is the Add page

function Add() {
  return (
    <View style={styles.container}>
      <View style={{ flexDirection: "column", alignItems: "center" }}>
        <TouchableOpacity style={{ alignItems: "center" }}>
          <FontAwesome
            name="star-half-o"
            size={92}
            color="#7AA998"
            style={{ margin: 5 }}
          />
          <Text style={styles.text}>Post a review</Text>
        </TouchableOpacity>
        <TouchableOpacity style={{ alignItems: "center" }}>
          <FontAwesome
            name="exclamation-circle"
            size={92}
            color="#7AA998"
            style={{ margin: 5 }}
          />
          <Text style={styles.text}>Escalate an issue</Text>
        </TouchableOpacity>
        {/* Resource page has helpful links like counseling or report groups/legal/BBB */}
        <TouchableOpacity style={{ alignItems: "center" }}>
          <FontAwesome
            name="group"
            size={92}
            color="#7AA998"
            style={{ margin: 5 }}
          />
          <Text style={styles.text}>Resources</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    backgroundColor: "#fff",
    justifyContent: "center",
  },
  text: {
    color: "#7AA998",
    fontWeight: "bold",
    fontSize: 25,
    marginBottom: 85,
  },
});

export default Add;
