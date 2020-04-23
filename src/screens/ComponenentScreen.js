import React from "react"
import {Text, StyleSheet, View} from "react-native"

const ComponentsScreen = () => {

    const name = "Chaba"

    return  <View style={styles.container}>
                <Text style={styles.textStyle}>Who am I?</Text>
                <Text>My name is {name} and I'm a Software Engineer</Text>
            </View>
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 24
      },
    textStyle: {
        fontSize:30,
        marginVertical:10
    }
})

export default ComponentsScreen