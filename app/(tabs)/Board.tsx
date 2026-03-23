import Button from "./Button";

import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    Board: {
        flex: 1,
        borderColor: "black",
        borderWidth: 2px
    }
})

export default function Board(){
    return (
        <Button onPress={onPress} color="red"/>
        <Button onPress={onPress} color="red"/>
        <Button onPress={onPress} color="red"/>
        <Button onPress={onPress} color="red"/>
        
    )
}