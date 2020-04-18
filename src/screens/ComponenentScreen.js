import React from "react"
import {Text, StyleSheet, View} from "react-native"

const ComponentsScreen = () => {

    const name = "Chaba"

    return  <View>
                <Text style={styles.textStyle}>Getting started with React Native!</Text>
                <Text>My name is {name}</Text>
            </View>
}

const styles = StyleSheet.create({
    textStyle: {
        fontSize:30
    }
})

export default ComponentsScreen