import React from "react"
import {Text, StyleSheet, FlatList, View} from "react-native"

const ImageDetail = (props) => {
    console.log(props)
    return <Text>{props.title}</Text>
}

const styles  = StyleSheet.create({
    fontSize: 30
})

export default ImageDetail;

