import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import Colors from '../../constants/Colors';

export default class ShoppingCartShopCell extends Component {

    static propTypes: {
        item: PropTypes.object.isRequired,
    };

    render() {
        return <TouchableOpacity
            activeOpacity={1.0}
            style={styles.container}>
            <TouchableOpacity
                activeOpacity={1.0}>
                <Image
                    source={require('../../images/flight_check_box_selected.png')}/>
            </TouchableOpacity>
            <Image
                style={styles.shopAvatar}
                source={{uri: 'https://m.360buyimg.com/mobilecms/s234x234_jfs/t19741/183/488176645/309382/b8405408/5a8b9475N52f10906.jpg!q70.jpg'}}/>
            <Text style={styles.shopName}>{'MO\u0026Co.官方旗舰店'}</Text>
            <Image
                style={styles.arrow}
                source={require('../../images/jdshopsearch_arrow.png')}/>
        </TouchableOpacity>;
    }
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingLeft: 10,
        paddingRight: 10,
        paddingTop: 13,
        paddingBottom: 13,
        backgroundColor: '#fafafa'
    },
    shopAvatar: {
        width: 16,
        height: 16,
        marginLeft: 15
    },
    shopName: {
        marginLeft: 5,
        fontSize: 15,
        color: Colors.text_gray_dark,
    },
    arrow: {
        marginLeft: 5
    }
});