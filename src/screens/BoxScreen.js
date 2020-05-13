import React from 'react';
import {View, Text, StyleSheet, TextInput} from "react-native";


const BoxScreen = () => {
    return (
        <View style={styles.container} >
            <View style={styles.viewStyle} >
                <Text style={styles.textStyleOne}   >Child #1</Text>
                <Text style={styles.textStyleTwo}   >Child #2</Text>
                <Text style={styles.textStyleThree} >Child #3</Text>
            </View>
        </View>
        
    );
};

const styles = StyleSheet.create({
    viewStyle:{
        borderWidth: 3,
        borderColor: "red",
        height: 200,
        flexDirection: "row",
        justifyContent: "space-around",
        alignItems: "center"
    },
    textStyleOne: {
        borderWidth: 3,
        borderColor: "black",
        backgroundColor: "red",
        height: 50,
        width: 50
        // margin: 20
    },
    textStyleTwo: {
        borderWidth: 3,
        borderColor: "black",
        // flex: 1
        backgroundColor: "green",
        height: 50,
        width: 50,
        position: "absolute",
        bottom: 5,
        left: 155

        // margin: 20
    },
    textStyleThree: {
        borderWidth: 3,
        borderColor: "black",
        backgroundColor: "blue",
        height: 50,
        width: 50
        // margin: 20
    },
    container:{
        margin: 4
    }
})
export default BoxScreen;