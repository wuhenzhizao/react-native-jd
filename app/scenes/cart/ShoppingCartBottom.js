import React, {Component} from 'react';
import {Image, Platform, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import Styles from '../../constants/Styles';
import Colors from '../../constants/Colors';

export default class ShoppingCartBottom extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return <View
            style={styles.container}>
            <TouchableOpacity
                activeOpacity={1.0}>
                <Image
                    style={styles.check}
                    source={require('../../images/flight_check_box_unselected.png')}/>
            </TouchableOpacity>
            <Text style={styles.selectAllLabel}>全选</Text>
            <View style={styles.amountContainer}>
                <View style={styles.totalAmountContainer}>
                    <Text style={styles.totalAmountLabel}>合计:</Text>
                    <Text style={styles.totalAmount}>{'¥68,710.00'}</Text>
                </View>
                <Text style={styles.totalAmountExtra}>{'总额:¥ 69503.60 立减:¥ 793.60'}</Text>
            </View>
            <TouchableOpacity style={styles.submitContainer}>
                <View style={styles.submitInnerContainer}>
                    <Text style={styles.submit}>{'去结算'}</Text>
                    <Text style={styles.skuNum}>{'(7)'}</Text>
                </View>
            </TouchableOpacity>
        </View>;
    }
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        height: 50,
        alignItems: 'center',
        backgroundColor: Colors.white
    },
    check: {
        marginLeft: 10
    },
    submitContainer: {
        alignSelf: 'stretch',
        alignItems: 'center',
        justifyContent: 'center',
        paddingLeft: 20,
        paddingRight: 20,
        backgroundColor: '#f23030'
    },
    submitInnerContainer: {
        flexDirection: 'row',
        alignItems: 'flex-end'
    },
    submit: {
        fontSize: 17,
        color: Colors.white
    },
    skuNum: {
        fontSize: 14,
        color: Colors.white
    },
    selectAllLabel: {
        fontSize: 12,
        color: Colors.text_gray_dark,
        marginLeft: 5
    },
    amountContainer: {
        flex: 1,
        marginLeft: 10,
        marginRight: 10,
        flexDirection: 'column',
    },
    totalAmountContainer: {
        flexDirection: 'row',
        alignItems: 'flex-end'
    },
    totalAmountLabel: {
        fontSize: 14,
        color: Colors.text_gray_dark
    },
    totalAmount: {
        fontSize: 13,
        color: Colors.text_gray_dark
    },
    totalAmountExtra: {
        marginTop: 2,
        fontSize: 10,
        color: Colors.text_gray_dark
    }
});