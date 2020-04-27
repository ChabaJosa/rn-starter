import React from "react"
import {Text, StyleSheet, View, Image} from "react-native"
import Pic from "../../assets/chaba.jpg"
// import Pic from "../../assets/biopic.png"


const ComponentsScreen = () => {

    const name = "Chaba"

    return  (
            <View style={styles.container}>
                <Text style={styles.textStyle}>Who am I?</Text>
                <Text>My name is {name} and I'm a Software Engineer</Text>

                {/* <Image 
                    title="BioPic"
                    style={styles.bioImage}
                    source={Pic} 
                /> */}
            </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 24
      },
    textStyle: {
        fontSize:30,
        marginVertical:10
    },
    bioImage:{
        // height: auto,
        width: 100,
        alignSelf:"center",
        marginTop: 50
    }
})

export default ComponentsScreen