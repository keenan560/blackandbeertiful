import React, { useEffect, useState } from "react";
import { View, StyleSheet, Text, ScrollView } from "react-native";
import { Input, Button, PricingCard, Rating } from "react-native-elements";

function PostReview() {
  const [search, setSearch] = useState("");
  const [searchResults, setSearchResults] = useState([]);

  const query = () => {
    if (search) {
      fetch(
        `https://api.openbrewerydb.org/breweries?by_name=${search.trimEnd()}&per_page=50`
      )
        .then((response) => response.json())
        .then((data) => {
          return setSearchResults(data);
        });
    }
    if (search.length === 0) {
      setSearchResults([]);
    }
  };

  function formatPhoneNumber(phoneNumberString) {
    var cleaned = ("" + phoneNumberString).replace(/\D/g, "");
    var match = cleaned.match(/^(\d{3})(\d{3})(\d{4})$/);
    if (match) {
      return "(" + match[1] + ") " + match[2] + "-" + match[3];
    }
    return null;
  }

  const randomNum = () => {
    return parseInt(Math.floor(Math.random() * 5));
  };

  return (
    <View style={styles.container}>
      <Input
        style={{ marginTop: 25 }}
        placeholder="Search for a brewery"
        rightIcon={{ type: "font-awesome", name: "search" }}
        value={search}
        onChangeText={(text) => setSearch(text)}
        onSubmitEditing={query}
      />
      <ScrollView style={{ marginBottom: 10, width: "100%" }}>
        {searchResults.map((result, index) => (
          <PricingCard
            key={index}
            containerStyle={{ textAlign: "center" }}
            color="#7AA998"
            title={result.name}
            price={
              <Rating
                type="star"
                ratingCount={5}
                imageSize={60}
                showRating
                defaultRating={5}
                startingValue={Math.floor(Math.random() * 5)}
              />
            }
            pricingStyle={{ textAlign: "center" }}
            info={[
              `Type: ${
                result.brewery_type ? result.brewery_type.toUpperCase() : "---"
              }`,
              `Address: ${result.street ? result.street : "---"}`,
              `City: ${result.city}`,
              `State: ${result.state}`,
              `Phone: ${
                result.phone ? formatPhoneNumber(result.phone) : "---"
              }`,
              `url: ${result.website_url ? result.website_url : "---"}`,
            ]}
            button={{ title: "Add a review", icon: "star" }}
          />
        ))}
      </ScrollView>
      <View style={{ marginBottom: 100 }}>
        <Button
          buttonStyle={{ backgroundColor: "#7AA998" }}
          icon={{
            name: "add",
            size: 20,
            color: "white",
          }}
          title="Add a Brewery"
        />
      </View>
    </View>
  );
}

export default PostReview;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    backgroundColor: "#fff",
  },
});
