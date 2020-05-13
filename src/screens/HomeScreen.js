import React from "react";
import { Text, StyleSheet, View, Button } from "react-native";

const HomeScreen = ({ navigation }) => {
  // console.log(props)
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Mobile Apps Here</Text>
      <Button 
        title="Built by..." 
        onPress={() => navigation.navigate("Components")}
      />

      <Button 
      // style={styles.buttonText} // This doesn't work
        title="Rockstars"
        onPress={() => navigation.navigate("List")} 
      />

      <Button 
        title="90's Film Images"
        onPress={() => navigation.navigate("Image")} 
      />

      <Button 
        title="Counter with Hooks"
        onPress={() => navigation.navigate("Counter")} 
      />

      <Button 
        title="Infinite Color Column"
        onPress={() => navigation.navigate("Color")} 
      />

      <Button  
        title="RGB Square"
        onPress={() => navigation.navigate("Square")} 
      />

      <Button  
        title="Text Demo"
        onPress={() => navigation.navigate("Text")} 
      />

      <Button  
        title="Layout Box"
        onPress={() => navigation.navigate("Box")} 
      />

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
