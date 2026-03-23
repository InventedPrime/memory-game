import { Pressable, StyleSheet} from 'react-native';

type Props = {
    onPress: () => void;
    color: string;
}

const styles = StyleSheet.create({
    Button: {
        borderWidth: 2
    }
})


export default function Button({onPress, color}: Props){
    return (
        <Pressable onPress={onPress}>

        </Pressable>
    );
}