import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {
    Image, StyleSheet, Text, TouchableOpacity, View, PixelRatio, TouchableWithoutFeedback,
    TextInput
} from 'react-native';
import Colors from '../../constants/Colors';

export default class ShoppingCartSkuCell extends Component {

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
                    style={styles.check}
                    source={require('../../images/flight_check_box_selected.png')}/>
            </TouchableOpacity>
            <Image
                style={styles.skuAvatar}
                source={{uri: 'https://m.360buyimg.com/mobilecms/s234x234_jfs/t19741/183/488176645/309382/b8405408/5a8b9475N52f10906.jpg!q70.jpg'}}/>
            <View style={styles.rightContainer}>
                <Text
                    style={styles.skuName}
                    ellipsizeMode={'tail'}
                    numberOfLines={2}>{'子牧棉麻2018春季新款长袖长款复古盘扣连衣裙8068 3008蓝黄花 L'}</Text>
                <Text
                    style={styles.skuProperties}
                    ellipsizeMode={'tail'}
                    numberOfLines={1}>{'尺码:L 颜色:3008蓝黄花'}</Text>
                <View style={styles.priceContainer}>
                    <Text style={styles.priceSmall}>¥ </Text>
                    <Text style={styles.priceLarge}>{'219'}</Text>
                    <Text style={styles.priceSmall}>{'.00'}</Text>
                </View>
                <View style={styles.quantityContainer}>
                    <TouchableWithoutFeedback>
                        <Image
                            style={styles.quantityButton}
                            resizeMode={'stretch'}
                            source={require('../../images/syncart_less_btn_enable.png')}/>
                    </TouchableWithoutFeedback>
                    <TextInput
                        style={styles.quantityInput}
                        defaultValue={'1'}
                        keyboardType={'numeric'}
                        returnKeyType={'done'}
                        maxLength={3}
                        numberOfLines={1}
                    />
                    <TouchableWithoutFeedback>
                        <Image
                            style={styles.quantityButton}
                            resizeMode={'stretch'}
                            source={require('../../images/syncart_more_btn_enable.png')}/>
                    </TouchableWithoutFeedback>
                </View>
            </View>
        </TouchableOpacity>;
    }
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        height: 120,
        alignItems: 'center',
        paddingLeft: 10,
        paddingRight: 10,
        backgroundColor: Colors.white
    },
    check: {
        alignSelf: 'center'
    },
    skuAvatar: {
        width: 100,
        height: 100,
        marginLeft: 10,
        marginTop: 10,
        marginBottom: 10,
        borderRadius: 5,
        borderWidth: 1 / PixelRatio.get(),
        borderColor: '#d7d7d7'
    },
    rightContainer: {
        flex: 1,
        flexDirection: 'column',
        height: 100,
        marginLeft: 10,
    },
    skuName: {
        fontSize: 14,
        color: Colors.text_gray_dark,
        lineHeight: 18,
    },
    skuProperties: {
        marginTop: 3,
        fontSize: 12,
        color: '#81838e',
    },
    priceContainer: {
        position: 'absolute',
        left: 0,
        bottom: 0,
        flexDirection: 'row',
        alignItems: 'flex-end'
    },
    priceSmall: {
        fontSize: 13,
        color: '#f23030'
    },
    priceLarge: {
        fontSize: 16,
        color: '#f23030'
    },
    quantityContainer: {
        position: 'absolute',
        right: 0,
        bottom: 0,
        height: 23,
        flexDirection: 'row',
        alignItems: 'stretch',
    },
    quantityButton: {
        width: 25,
        height: 23,
    },
    quantityInput: {
        width: 30,
        height: 23,
        fontSize: 12,
        borderColor: '#686868',
        borderWidth: 1 / PixelRatio.get(),
        textAlign: 'center'
    }
});