import { Pressable, StyleSheet } from 'react-native';

type Props = {
    onPress: () => void;
    color: string;
    id: number;
}

const styles = StyleSheet.create({
    Button: {
        borderWidth: 2,
        flex: 1,
        minHeight: 100,
        margin: 5
    }
})


export default function Button({onPress, color, id}: Props){
    return (
        <Pressable onPress={onPress} style={[styles.Button, {backgroundColor: color}]} key={id}/>
    )
}