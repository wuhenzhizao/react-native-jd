import {PixelRatio,Dimensions} from 'react-native';
import Colors from './Colors';

export default {
    screen: {
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').height,
        scale: Dimensions.get('window').scale
    },
    titleBarStyle: {
        backgroundColor: Colors.white,
        height: 45,
        elevation: 0,
        borderBottomColor: '#cbcbcb',
        borderBottomWidth: 1 / PixelRatio.get()
    },
    titleStyle: {
        color: Colors.text_gray_dark,
        fontSize: 16,
        alignSelf: 'center',
        textAlign: 'center',
        flex: 1,
    },
    titleBackStyle: {
        color: Colors.white,
        fontSize: 14,
    }
};
