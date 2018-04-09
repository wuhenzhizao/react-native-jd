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
        height: 55,
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
        fontSize: 18,
        color: Colors.white
    },
    skuNum: {
        fontSize: 14,
        color: Colors.white
    }
});