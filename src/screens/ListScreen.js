import React from "react"
import {Text, StyleSheet, FlatList, View} from "react-native"

const ListScreen = () => {

    const friends = [
    {name:"Mick Jager", age:"Old"},
    {name:"Gene Simmons", age:"Old"},
    {name:"Bon Jovi", age:"Old"},
    {name:"Bruce Springsteen", age:"Old"},
    {name:"David Bowie", age:"Old"},
    {name:"Fred Mercury", age:"Old"},
    {name:"Dave Grohl", age:"Old"},
    {name:"Steve Vai", age:"Old"}
    ]

    return ( 
        
        // {/* <FlatList data={friends} renderItem={(element) => {
            //     Element === {item: {name:"Friend#1", index:0}}
        // }}/> */}
        // Flatlist is kind of like for mapping through an array
            <FlatList 
                horizontal = {false}
                // This makes everything scrollable horizontally instead of the default vertical order
                showsHorizontalScrollIndicator = {false}
                // Takes care of the horizontal scrollbar
                keyExtractor={(friend) => friend.name}
                // Takes care of the key warning
                data={friends} 
                // Both data and renderItem are required props for FlatList
                renderItem={({item}) => {
                    // This uses desctrocturing to get the item
                return <Text style={styles.coolTextStyle}>{item.name} - Age:{item.age}</Text> 
            }}/>
    )
    
}

const styles = StyleSheet.create({
    // This could be named anything
    coolTextStyle: {
        marginVertical: 10,
        paddingVertical: 8,
        borderWidth: 4,
        borderColor: "#20232a",
        borderRadius: 6,
        backgroundColor: "#ed1d24",
        color: "#20232a",
        textAlign: "center",
        // fontSize: 25,
        fontWeight: "bold"    
    }
});

export default ListScreen;