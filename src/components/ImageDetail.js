import React from "react"
import {Text, StyleSheet, Image , View} from "react-native"

const ImageDetail = (props) => {
    console.log(props)
    return (
        <View style={styles.container}>
            <Text>{props.title}</Text>
            <Image 
                style={styles.movieImage}
                source={props.imageSource} 
            />
        </View>    
    )
}

const styles  = StyleSheet.create({
        container: {
            paddingTop:50,
            textAlign: "center",
            // flex: 1,
            // flexDirection: 'row',
            // justifyContent:"center"
        },
        movieImage: {
            width: 250,
            height: 250,
            paddingTop: 10
        }
})

export default ImageDetail;

