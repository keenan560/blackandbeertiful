import React from "react";
import { View, StyleSheet } from "react-native";
import { Text, Button } from "react-native-elements";

function Home({ navigation }) {
  return (
    <View style={styles.container}>
      <Text h1>Belp!</Text>
      <Button title="Sign Up" />
      <Button title="Login" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignContent: "center",
    justifyContent: "center",
  },
});

export default Home;
