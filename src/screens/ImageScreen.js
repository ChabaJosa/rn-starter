import React from "react"
import {Text, StyleSheet, FlatList, View} from "react-native"
import ImageDetail from "../components/ImageDetail"

const ImageScreen = () => {
    return (
    
    <View>
        <ImageDetail   title="Forest Gump"              />
        <ImageDetail   title="Shawshank Redemption"     />
        <ImageDetail   title="Fight Club"               />
        <ImageDetail   title="Basic Instinct"           />
    </View>
   
    )
}
 
const styles  = StyleSheet.create({
    fontSize: 30
})

export default ImageScreen;

