import React, {useState, useReducer} from 'react';
import {Text, Button , View} from "react-native"

const CounterScreen = () => {

    // const [counter, setCounter] = useState(0)
    
    const  reducer = (state, action) => {

        switch (action.type){
            case "change_increase":
                return {...state, count: state.count + action.payload};

            case "change_decrease":
                return {...state, count: state.count - action.payload};

            default:
                return state;   // State is always require to be returned with a reducer
        }
    }

    const [state, dispatch] = useReducer(reducer, {count: 0})

    const {count} = state;
    
    return (
        <View>

            <Button
                title="Increase"
                onPress={() => {
                    dispatch({type:"change_increase"   ,payload: 1})
                }} 
            />

            <Button
                title="Decrease"
                onPress={() => {
                    dispatch({type:"change_decrease"   ,payload: 1})
                }} 
            />
            <Text>Num: {state.count}</Text>
            
        </View>
    );
};

export default CounterScreen;



