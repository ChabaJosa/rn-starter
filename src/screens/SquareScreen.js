import React, {useState} from 'react';
import {View, Text, Button, StyleSheet, ScrollView} from "react-native"
import ColorCounter from "../components/ColorCounter"

const SquareScreen = () => {

    const COLOR_INCREMENT = 15
    // All caps is used to let other engineers know that it's a configuration varible within the component
    
    const [red, setRed ]        = useState(0)
    const [blue, setBlue ]      = useState(0)
    const [green, setGreen ]    = useState(0)

    const setColor = (color, change) => {

        switch (color){
            case "red":
                red + change    > 255 || red    + change < 0 ? null : setRed(red + change)
                return;
            case "green":
                green + change  > 255 || green  + change < 0 ? null : setGreen(green + change)
                return;
            case "blue":
                blue + change   > 255 || blue   + change < 0 ? null : setBlue(blue + change)
                return;
        }

    }

    console.log(`Current Red:${red} \nCurrent Blue:${blue} \nCurrent Green:${green} `)


    return (
        // <ScrollView>

        <View style={styles.container}>

            <ColorCounter 
                // Btw the functions below can be named anything because they are props,
                // They are only here tu be used in a child component
                // Unlike onPress() which is a built in method
                onIncrease={ () => setColor("red" ,COLOR_INCREMENT)}
                onDecrease={ () => setColor("red" , -1 * COLOR_INCREMENT)}              
                color="Red"
            />
            <ColorCounter 
                onIncrease={ () => setColor("green" ,COLOR_INCREMENT)}
                onDecrease={ () => setColor("green" , -1 * COLOR_INCREMENT)}                   
                color="Green"
            />
            <ColorCounter 
                onIncrease={ () => setColor("blue" ,COLOR_INCREMENT)}
                onDecrease={ () => setColor("blue" , -1 * COLOR_INCREMENT)}                 
                color="Blue"
            />
            <View style={styles.box}>
                <View style={{ height: 150, width: 150, backgroundColor: `rgb(${red}, ${green}, ${blue})`}}/>
            </View>
            <Text>Current RGB Combo: {`\nCurrent Red:${red} \nCurrent Blue:${blue} \nCurrent Green:${green} `}</Text>
       
        </View>

        // {/* </ScrollView> */}

    );
};

const styles = StyleSheet.create({
    container:{
        padding:7.5,
    },
    box: {
        alignItems:"center",
        marginTop: 50,
        marginBottom: 50
    }
})

export default SquareScreen;