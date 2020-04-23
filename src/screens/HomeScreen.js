import React from "react";
import { Text, StyleSheet, View, Button, TouchableOpacity } from "react-native";

const HomeScreen = (props) => {
  console.log(props)
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Mobile Apps Here</Text>
      <Button 
      title="Built by..." 
      onPress={() => props.navigation.navigate("Components")}
      />

      <TouchableOpacity onPress={() => props.navigation.navigate("List")} >
        <Text style={styles.buttonText} >Get some rockStars</Text>
      </TouchableOpacity>

    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    justifyContent:"space-around"
  },
  text: {
    fontSize: 40,
    textAlign:"center"
  },
  buttonText: {
    paddingVertical: 8,
    borderWidth: 4,
    borderColor: "#20232a",
    borderRadius: 6,
    backgroundColor: "#61dafb",
    color: "#20232a",
    textAlign: "center",
    // fontSize: 25,
    fontWeight: "bold"   
  }
});

export default HomeScreen;
