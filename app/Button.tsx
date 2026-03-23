import { Pressable, StyleSheet} from 'react-native';

type Props = {
    onPress: () => void;
    color: string;
    id: number;
}

const styles = StyleSheet.create({
    Button: {
        borderWidth: 2
    }
})


export default function Button({onPress, color, id}: Props){
    return (
        <Pressable onPress={onPress} style={color} id={id}/>
    )
}