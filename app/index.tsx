import { Image } from 'expo-image';
import { Platform, StyleSheet } from 'react-native';

import Board from './Board';

const order = new Array(10);

for (let i=0; i<10; i++){
  order[i] = Math.floor(Math.random() * (3)) + 1;
}

const level = 0;

const posInLevel = 0;

const onPress = () => {

  //if (//button being pressed == order[posInLevel])
}

export default function HomeScreen() {
  return (
    <Board onPress={onPress} />
  );
}

const styles = StyleSheet.create({
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  stepContainer: {
    gap: 8,
    marginBottom: 8,
  },
  reactLogo: {
    height: 178,
    width: "100%",
    bottom: 0,
    left: 0,
    position: 'absolute',
  },
});
