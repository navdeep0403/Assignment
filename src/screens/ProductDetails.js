import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet, FlatList, Image } from "react-native";
import yelp from "../api/ApiRequest";
import Header from "../components/Header"

const testDetails = ({ navigation }) => {
  const [result, setResult] = useState(null);
  

  

  useEffect(() => {
   
  }, []);



  return (
    <View style={styles.container}>
    <Header  text={"Testing"}/>
      <Text>{"Hello"}</Text>
     
    </View>
  );
};

const styles = StyleSheet.create({
 container:{
    flex:1
 }
});

export default testDetails;
