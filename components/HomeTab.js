import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";
import {
  Input,
  Avatar,
  Card,
  Image,
  ListItem,
  Button,
} from "react-native-elements";
import { MaterialIcons } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";
import { Entypo } from "@expo/vector-icons";
import { FontAwesome5 } from "@expo/vector-icons";

function HomeTab() {
  return (
    <View style={styles.container}>
      {/* <View
        style={{
          flexDirection: "row",
          marginTop: 20,
          marginBottom: 15,
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
      </View> */}
      {/* <Text style={{ color: "#7AA998", fontWeight: "bold" }}>
        492,781 reviews
      </Text> */}
      <Image
        source={{
          uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ4z2zkJhfIEd0xGOzE9DQYteqwthKBjEimsA&usqp=CAU",
        }}
        resizeMode={"cover"}
        containerStyle={{ width: "100%" }}
        style={{ height: 250, width: "100%" }}
      >
        <View
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Text
            style={{
              color: "#7AA998",
              fontWeight: "900",
              fontSize: 28,
              opacity: 0.95,
              backgroundColor: "#fff",
              padding: 5,
            }}
          >
            Brewery of the month
          </Text>
        </View>
      </Image>

      <Button
        icon={<Icon name="star" color="#ffffff" />}
        containerStyle={{ width: "100%" }}
        buttonStyle={{
          borderRadius: 0,
          marginLeft: 0,
          marginRight: 0,
          marginBottom: 0,
          backgroundColor: "#7AA998",
          width: "100%",
        }}
        title="Read More"
      />

      <Input
        placeholder="search content"
        rightIcon={{ type: "font-awesome", name: "search" }}
      />

      <ScrollView
        horizontal
        snapToInterval={3}
        snapToAlignment={"center"}
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{ marginBottom: 100 }}
      >
        <View
          style={{
            alignItems: "center",
            justifyContent: "center",
            marginRight: 50,
            marginLeft: 40,
          }}
        >
          <MaterialIcons name="corporate-fare" size={125} color="#7AA998" />
          <Text style={styles.iconText}>Best Places for Women</Text>
        </View>
        <View
          style={{
            alignItems: "center",
            justifyContent: "center",
            marginRight: 50,
            marginLeft: 40,
          }}
        >
          <Ionicons name="beer-sharp" size={125} color="#7AA998" />
          <Text style={styles.iconText}>Top 10 Breweries</Text>
        </View>
        <View
          style={{
            alignItems: "center",
            justifyContent: "center",
            marginRight: 50,
            marginLeft: 40,
          }}
        >
          <Entypo name="emoji-sad" size={125} color="#7AA998" />
          <Text style={styles.iconText}>10 Worst Breweries</Text>
        </View>
        <View
          style={{
            alignItems: "center",
            justifyContent: "center",
            marginRight: 50,
            marginLeft: 40,
          }}
        >
          <MaterialIcons name="record-voice-over" size={125} color="#7AA998" />
          <Text style={styles.iconText}>Brewery Voices</Text>
        </View>
        <View
          style={{
            alignItems: "center",
            justifyContent: "center",
            marginRight: 50,
            marginLeft: 40,
          }}
        >
          <MaterialIcons name="stars" size={125} color="#7AA998" />
          <Text style={styles.iconText}>Reviews</Text>
        </View>
        <View
          style={{
            alignItems: "center",
            justifyContent: "center",
            marginRight: 50,
            marginLeft: 40,
          }}
        >
          <MaterialIcons name="not-interested" size={125} color="#7AA998" />
          <Text style={styles.iconText}>Harassment</Text>
        </View>
        <View
          style={{
            alignItems: "center",
            justifyContent: "center",
            marginRight: 50,
            marginLeft: 40,
          }}
        >
          <FontAwesome5 name="people-arrows" size={125} color="#7AA998" />
          <Text style={styles.iconText}>Community</Text>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    backgroundColor: "#fff",
  },
  button: {
    backgroundColor: "#7AA998",
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
  iconText: {
    fontSize: 14,
    fontWeight: "bold",
  },
});

export default HomeTab;
