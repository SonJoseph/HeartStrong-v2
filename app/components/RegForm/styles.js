import EStylesheet from 'react-native-extended-stylesheet';

export default EStylesheet.create({
    regform: {
        alignSelf: 'stretch',
    },
    text : {
        fontSize: 24,
        color: '#fff',
        paddingBottom:10,
        marginBottom: 10,
    },
    textinput: {
        alignSelf: 'stretch',
        height: 40,
        color: '#fff',
        marginBottom: 30,
        borderBottomColor:'#ffffff',
        borderBottomWidth: 1,
    },
    button : {
        alignSelf: 'stretch',
        alignItems: 'center',
        padding: 20,
        backgroundColor: '#59cbbd',
        marginTop: 30,
        borderRadius: 20,
    },
    btntext : {
        color: '#fff',
        fontWeight: 'bold',
    },
    view2: {
        borderBottomColor: '#59cbbd',
        borderBottomWidth: 1,
        marginBottom: 30,
    }
});