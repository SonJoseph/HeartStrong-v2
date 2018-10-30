import EStyleSheet from 'react-native-extended-stylesheet';

const INPUT_HEIGHT = 48;
const BORDER_RADIUS = 4;

export default EStyleSheet.create({
    container: {
        backgroundColor: '$white',
        width: 300,
        height: INPUT_HEIGHT,
        borderRadius: BORDER_RADIUS,
        marginVertical: 11,
    },
    input: {
        height: INPUT_HEIGHT,
        fontSize: 20,
        paddingHorizontal: 8,
        color: '$inputText',
    }
});