import React, {Component} from 'react';
import {Image, View, StyleSheet, Platform, PixelRatio} from 'react-native';
import Styles from '../../constants/Styles';

export default class DiscoveryHeader extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return <View style={[Styles.titleBarStyle, {
            height: 65,
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
            paddingTop: Platform.OS === 'ios' ? 20 : 0,
            borderBottomWidth: 0
        }]}>
            <View style={styles.leftContainer}>
                <Image
                    style={styles.scan}
                    resizeMode={'center'}
                    source={require('../../images/category_camera_7_gray.png')}/>
            </View>
            <Image
                style={styles.title}
                source={{uri: 'https://m.360buyimg.com/mobilecms/jfs/t11074/192/74501093/8161/38645eed/59e71a0eNae637450.png'}}/>
            <View style={styles.rightContainer}>
                <Image
                    style={styles.search}
                    source={require('../../images/QuickActions_productList.png')}/>
                <Image
                    style={styles.message}
                    source={require('../../images/category_message_btn_n.png')}/>
            </View>
        </View>;
    }
}

const styles = StyleSheet.create({
    scan: {
        marginLeft: 15,
    },
    leftContainer: {
        width: 100
    },
    rightContainer: {
        justifyContent: 'flex-end',
        flexDirection: 'row',
        alignItems: 'center',
        width: 100
    },
    search: {
        marginRight: 15,
        width: 31,
        height: 31,
    },
    message: {
        marginRight: 15,
    },
    title: {
        alignSelf: 'center',
        width: 80,
        height: 27
    }
});