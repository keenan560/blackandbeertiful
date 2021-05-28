import React, { useState } from "react";
import {
  Text,
  StyleSheet,
  View,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import { Input, CheckBox } from "react-native-elements";

function Register({ navigation }) {
  const [checked, setChecked] = useState(false);

  const toggleCheck = () => {
    setChecked(!checked);
  };

  return (
    <View style={styles.container}>
      <Text style={{ margin: 10, fontSize: 25 }}>
        Fill in the details below.
      </Text>
      <ScrollView style={{ width: 300 }}>
        <Input inputStyle={styles.input} placeholder="First Name" />
        <Input inputStyle={styles.input} placeholder="Last Name" />
        <Input inputStyle={styles.input} placeholder="Email" />
        <Input inputStyle={styles.input} placeholder="Password" />
        <CheckBox
          title="Click here to agree to the Terms & Conditions"
          checked={checked}
          onPress={toggleCheck}
          textStyle={{ fontSize: 10 }}
        />
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate("Login", { name: "Login" })}
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
    backgroundColor: "#B266B2",
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
