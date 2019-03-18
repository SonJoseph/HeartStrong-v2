import EStyleSheet from 'react-native-extended-stylesheet';

export default EStyleSheet.create({
    container: {
        alignItems: 'center'
    },
    buttoncontainer: {
        height: 48,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '$white',
        borderTopLeftRadius: 4,
        borderBottomLeftRadius: 4,
        borderTopRightRadius: 4,
        borderBottomRightRadius: 4,
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
    buttontext: {
        color: '#e28383',
        fontSize: 20,
        fontWeight: '300',
        padding: 10,
    },
});