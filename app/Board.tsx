import Button from "./Button";

import { StyleSheet } from 'react-native';


const styles = StyleSheet.create({
    Board: {
        flex: 1,
        borderColor: "black",
        borderWidth: 2
    }
})

export default function Board({onPress}: ){
    return (
        <Button onPress={onPress} color="red"/>
        <Button onPress={onPress} color="red"/>
        <Button onPress={onPress} color="red"/>
        <Button onPress={onPress} color="red"/>
        
    )
}