import React from "react"
import {Text, StyleSheet, FlatList, View} from "react-native"

const ListScreen = () => {

    const friends = [
    {name:"Mick Jager"},
    {name:"Gene Simmons"},
    {name:"Bon Jovi"},
    {name:"Bruce Springsteen"},
    {name:"David Bowie"},
    {name:"Fred Mercury"},
    {name:"Dave Grohl"},
    {name:"Steve Vai"}
    ]

    return ( 
        
        // {/* <FlatList data={friends} renderItem={(element) => {
            //     Element === {item: {name:"Friend#1", index:0}}
        // }}/> */}
        // {/* <Text>List Screen</Text> */}
            <FlatList 
                data={friends} 
                renderItem={({item}) => {
                    // This uses desctrocturing to get the item
                    return <Text>{item.name}</Text> 
            }}/>
    )
    
}

const styles = StyleSheet.create({});

export default ListScreen;