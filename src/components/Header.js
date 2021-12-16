import React from "react";
import { View, Image, Text, StyleSheet } from "react-native";

const Header = (props) => {
    const {text} = props
  return (
    <View style={styles.container}>
     <Text style={{color:'black',  fontSize:19, padding:20}}>{text}</Text>
     <Text style={{color:'black',  fontSize:19}}>{text}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height:80,
    backgroundColor:'red',
    flexDirection:'row',
    alignItems:'center',
    paddingHorizontal:20,
    paddingTop:20
    
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

export default Header;
