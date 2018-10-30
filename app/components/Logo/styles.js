import {Dimensions} from 'react-native';
import EStylesheet from 'react-native-extended-stylesheet';

const imageWidth = Dimensions.get('window').width / 10;
export default EStylesheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'center'
    },
    containerImage: {
        alignItems: 'center',
        justifyContent: 'center',
        width: imageWidth,
        height: imageWidth,
    },
    text:{
        fontWeight: '600',
        fontSize: 28,
        letterSpacing: -0.5,
        color: 'white',
    }
});