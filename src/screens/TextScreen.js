import React, {useState}from 'react';
import {View, Text, StyleSheet, TextInput} from "react-native";

const TextScreen = () => {

    const [password, setPassword] = useState("");

    return (
        <View>
            <Text >Enter password: {password}</Text>
            <TextInput 
                style={styles.input} 
                autoCapitalize="none"
                autoCorrect={false}
                value={password}
                onChangeText= {(newText) => {
                        setPassword(newText)
                }}
            />
            < >
                {password.length < 4 ? <Text>Password must be 4 Characters</Text> : null}
            </>

        </View>
    );
};

const styles = StyleSheet.create({
    input: {
        margin: 15,
        borderColor: "black",
        borderWidth: 1
    }
})

export default TextScreen;