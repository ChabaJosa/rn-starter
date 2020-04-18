import React from "react";
import { Text, StyleSheet } from "react-native";

const HomeScreen = () => {
  return (
  <Text style={styles.text}>Mobile Apps Here</Text>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 20,
    // backgroundColor: black
  }
});

export default HomeScreen;
