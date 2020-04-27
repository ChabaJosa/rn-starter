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
                onIncrease={ () => setRed(red + 1)}
                onDecrease={ () => setRed(red - 1)}                 
                color="Red"
            />
            <ColorCounter 
                onIncrease={ () => setBlue(blue + 1)}
                onDecrease={ () => setBlue(blue - 1)}                
                color="Blue"
            />
            <ColorCounter 
                onIncrease={ () => setGreen(green + 1)}
                onDecrease={ () => setGreen(green - 1)}               
                color="Green"
            />
       
        </View>
    );
};

const styles = StyleSheet.create({
    container:{
        paddingTop:50
    }
})

export default SquareScreen;