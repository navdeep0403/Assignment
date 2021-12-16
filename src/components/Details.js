import React from "react";
import { View, Image, Text, StyleSheet } from "react-native";

const Details = ({ result }) => {
  return (
    <View style={styles.container}>
      <Image style={styles.image} source={{ uri: result.image_url }} />
      <Text>{result.name}</Text>
      <Text>
        {/* {result.rating} Stars, {result.review_count} Reviews */}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginLeft: 15,
  },
  image: {
    width: 250,
    height: 120,
    borderRadius: 4,
    marginBottom: 5,
  },
  name: {
    fontWeight: "bold",
  },
});

export default Details;
