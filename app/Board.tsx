import Button from "./Button";

import { StyleSheet, View } from 'react-native';


const styles = StyleSheet.create({
    Board: {
        flex: 1,
        borderColor: "black",
        borderWidth: 2,
        flexDirection: 'row',
        flexWrap: 'wrap'
    }
})

export default function Board({ onPress }: { onPress: () => void}){
    return (
        <View style={styles.Board}>
        <Button onPress={onPress} color="red" id={1}/>
        <Button onPress={onPress} color="red" id={2}/>
        <Button onPress={onPress} color="red" id={3}/>
        <Button onPress={onPress} color="red" id={4}/>
        </View>
    );
}