import React from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";
import { Image } from "react-native";
import { Card, ListItem, Button, Input } from "react-native-elements";

function Feed() {
  const users = [
    {
      name: "jane123",
      avatar:
        "https://untappd.akamaized.net/site/beer_logos_hd/beer-3839_ca8da_hd.jpeg",
    },
    {
      name: "leon456",
      avatar:
        "https://cdn.craftbeer.com/wp-content/uploads/20191008122644/fPfriem-Taproom-1_photo-by-Michelle-Humphrey_1200x600.jpg",
    },
    {
      name: "stacy456",
      avatar:
        "https://i2.wp.com/www.craftbeerjoe.com/wp-content/uploads/2018/03/Women-In-Craft-Beer-1-Of-3-1.png?fit=870%2C350&ssl=1",
    },
    {
      name: "lucy8",
      avatar:
        "https://i.pinimg.com/originals/80/90/88/809088b5283ebbde7cafe9f8a3d3ef68.jpg",
    },
  ];

  return (
    <View style={styles.container}>
      <ScrollView
        contentContainerStyle={{ alignItems: "center" }}
        style={{ width: "100%" }}
      >
        {users.map((u, i) => {
          return (
            <View key={i} style={styles.user}>
              <Card containerStyle={{}} title="CARD WITH DIVIDER">
                <Text style={styles.name}>{u.name}</Text>
                <Text style={{ fontSize: 18 }}>This company is awesome!</Text>
                <Image
                  style={styles.image}
                  resizeMode="cover"
                  source={{ uri: u.avatar }}
                />

                <Input
                  placeholder="Comment..."
                  inputContainerStyle={{
                    borderWidth: 0,
                    backgroundColor: "#fff",
                  }}
                  leftIcon={{ type: "font-awesome", name: "comment-o" }}
                />

                <Button
                  title="Post"
                  buttonStyle={{ backgroundColor: "#7AA998" }}
                />
              </Card>
            </View>
          );
        })}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
  },
  user: {
    marginBottom: 215,
    width: "100%",
    height: 300,
  },
  name: {
    fontWeight: "bold",
  },
  image: {
    width: "100%",
    height: "auto",
    minHeight: 300,
    maxHeight: 400,
  },
});

export default Feed;
