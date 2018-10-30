import EStyleSheet from 'react-native-extended-stylesheet';

export default EStyleSheet.create({
    container: {
        alignItems: 'center'
    },
    wrapper: { 
        //items are vertically aligned and side by side
        flexDirection: 'row',
        alignItems: 'center'
    },
    icon: {

    },
    text: {
        color: '$white',
        fontSize: 20,
        fontWeight: '300',
        padding: 20,
    },
});