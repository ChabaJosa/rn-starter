import React, {useState} from 'react';
import {View, Text, Button, StyleSheet} from "react-native"
import ColorCounter from "../components/ColorCounter"

const SquareScreen = () => {
    
    const [red, setRed ] = useState(0)
    const [blue, setBlue ] = useState(0)
    const [green, setGreen ] = useState(0)

    console.log(`Current Red:${red} \nCurrent Blue:${blue} \nCurrent Green:${green} `)


    return (

        <View style={styles.container}>

            <ColorCounter 
                // Btw the functions below can be named anything because they are props,
                // They are only here tu be used in a child component
                // Unlike onPress() which is a built in method
                onIncrease={ () => setRed(red + 15)}
                onDecrease={ () => setRed(red - 15)}                 
                color="Red"
            />
            <ColorCounter 
                onIncrease={ () => setBlue(blue + 15)}
                onDecrease={ () => setBlue(blue - 15)}                
                color="Blue"
            />
            <ColorCounter 
                onIncrease={ () => setGreen(green + 15)}
                onDecrease={ () => setGreen(green - 15)}               
                color="Green"
            />
            <View style={{ height: 150, width: 150, backgroundColor: `rgb(${red}, ${green}, ${blue})`}}/>
       
        </View>
    );
};

const styles = StyleSheet.create({
    container:{
        paddingTop:50
    }
})

export default SquareScreen;