import React from "react"
import {Text, StyleSheet, View} from "react-native"
import ImageDetail from "../components/ImageDetail"

const ImageScreen = () => {
    return (
    
    <View>
        <ImageDetail   title="Forest Gump"           imageSource={require("../../assets/forrest_gump.jpg")}             />
        <ImageDetail   title="Shawshank Redemption"  imageSource={require("../../assets/shawshank-redemption.jpg")}     />
        <ImageDetail   title="Fight Club"            imageSource={require("../../assets/fight_club.jpg")}               />
        <ImageDetail   title="Basic Instinct"        imageSource={require("../../assets/basic_instinct.jpg")}           />
    </View>
   
    )
}
 
const styles  = StyleSheet.create({
    fontSize: 30
})

export default ImageScreen;

