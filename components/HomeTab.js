import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";
import { Input, Avatar } from "react-native-elements";

function HomeTab() {
  return (
    <View style={styles.container}>
      <View
        style={{
          flexDirection: "row",
          marginTop: 20,
          marginBottom: 40,
        }}
      >
        <Avatar
          rounded
          size={"small"}
          source={{ uri: "kl" }}
          title={"KM"}
          containerStyle={{ left: -130 }}
        />
        <Text style={{ fontSize: 20, right: -100 }}>Hi Keenan</Text>
      </View>
      <Text style={{ color: "#B266B2", fontWeight: "bold" }}>
        492,781 reviews
      </Text>

      <Input
        placeholder="search content"
        rightIcon={{ type: "font-awesome", name: "search" }}
      />
      <ScrollView>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>
            Top 10 Brewery Companies for Women
          </Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Worst Brewery Companies</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Brewery Voices</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Beer Reviews</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Harassment</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Community</Text>
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    // backgroundColor: "#fff",
  },
  button: {
    backgroundColor: "#B266B2",
    height: 100,
    width: 300,
    margin: 20,
    borderRadius: 15,
    justifyContent: "center",
  },
  buttonText: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 25,
    textAlign: "center",
    alignItems: "flex-end",
    padding: 10,
  },
});

export default HomeTab;
