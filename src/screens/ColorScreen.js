import React, {useState} from 'react';
import {View, Text, Button, StyleSheet, FlatList } from "react-native"

const colorScreen = () => {

    const [colors, setColors] = useState([])
    console.log(colors)
 
    const randomRGB = () => {
        const red       = Math.floor(Math.random() * 256);
        const green     = Math.floor(Math.random() * 256);
        const blue      = Math.floor(Math.random() * 256);

        return `rgb(${red},${green},${blue})`
    }
            
    return (

        <View style={styles.container}>
         
            <Button 
                title   ="Add Color"
                onPress = {() => {
                    setColors([...colors, randomRGB()])
                }}
            />
           

            <FlatList
                keyExtractor    = {item => item }
                // This is just to deal with the warning
                data            = {colors}
                // Both data and renderItem are required props
                renderItem      = {({ item }) => {
                    // We only use desctroturing here to loop through each color/item
                    return <View style={{height: 100, width: 100, backgroundColor: item}} />
                }}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container:{
        paddingTop:50,
        alignItems:"center"
    }
})

export default colorScreen;