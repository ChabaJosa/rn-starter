import React, {useReducer} from 'react';
import {View, Text, Button, StyleSheet, ScrollView} from "react-native"
import ColorCounter from "../components/ColorCounter"

const COLOR_INCREMENT = 15
// All caps is used to let other engineers know that it's a configuration varible within the component

const SquareScreen = () => {

    // Usually this defined outside of the component because this state argument 
    // isn't the same as the one in the const after it, so there's definetly room for confusion
    // Therefore, it usually goes outside the component like COLOR_INCREMENT

    const  reducer = (state, action) => {
        // state === {"red": 0 , "green":0, "blue": 0}
        // action === {colorToChange: "red" || "green" || "blue", amount: 15 || -15}

        switch (action.colorToChange){

            case "red":
                return state.red + action.amount > 255 || state.red + action.amount < 0 
                    ? state     // State is always require to be returned with a reducer
                    : {...state, red: state.red + action.amount};

            case "green":
                return state.green + action.amount > 255 || state.green + action.amount < 0 
                    ? state     // State is always require to be returned with a reducer
                    : {...state, green: state.green + action.amount};

            case "blue":
                return state.blue + action.amount > 255 || state.blue + action.amount < 0 
                    ? state     // State is always require to be returned with a reducer
                    : {...state, blue: state.blue + action.amount};

            default:
                return state;   // State is always require to be returned with a reducer

        }
    }

    const [state, dispatch] = useReducer(reducer, {red: 0, blue: 0, green: 0})
    // Every time we use useReducer the whole component will re-render kind of like setState or useState
    // UseReducer gives us our current state 
    // Dispatch is used to run useReducer with the action that you want to be executed

    const {red, green, blue } = state;

    console.log(`Current Red:${red} \nCurrent Blue:${blue} \nCurrent Green:${green} `)


    return (

        <View style={styles.container}>

            <ColorCounter 
                // Btw the functions below can be named anything because they are props,
                // They are only here tu be used in a child component
                // Unlike onPress() which is a built in method
                onIncrease={ () =>  dispatch({colorToChange:"red"   ,amount: COLOR_INCREMENT    })}
                onDecrease={ () =>  dispatch({colorToChange:"red"   ,amount: -1*COLOR_INCREMENT })}            
                color="Red"
            />
            <ColorCounter 
                onIncrease={ () =>  dispatch({colorToChange:"green"  ,amount: COLOR_INCREMENT    })}
                onDecrease={ () =>  dispatch({colorToChange:"green"  ,amount: -1*COLOR_INCREMENT })}  
                color="Green"
            />
            <ColorCounter 
                onIncrease={ () =>  dispatch({colorToChange:"blue"   ,amount: COLOR_INCREMENT    })}
                onDecrease={ () =>  dispatch({colorToChange:"blue"   ,amount: -1*COLOR_INCREMENT })}  
                color="Blue"
            />
            <View style={styles.box}>
                <View style={{ height: 150, width: 150, backgroundColor: `rgb(${red}, ${green}, ${blue})`}}/>
            </View>
            <Text>Current RGB Combo: {`\nCurrent Red:${red} \nCurrent Blue:${blue} \nCurrent Green:${green} `}</Text>
       
        </View>


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