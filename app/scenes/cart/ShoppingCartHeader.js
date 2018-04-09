import React, {Component} from 'react';
import {Image, View, StyleSheet, Platform, PixelRatio, Text, TouchableOpacity} from 'react-native';
import Styles from '../../constants/Styles';
import Colors from '../../constants/Colors';

export default class ShoppingCartHeader extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return <View style={[Styles.titleBarStyle, {
            height: 65,
            flexDirection: 'row',
            justifyContent: 'center',
            paddingTop: Platform.OS === 'ios' ? 20 : 0,
        }]}>
            <View style={styles.centerContainer}>
                <Text style={styles.title}>{'购物车'}</Text>
                <Image
                    style={{marginLeft: 5}}
                    resizeMode={'center'}
                    source={require('../../images/order_address_suggestion_icon.png')}/>
            </View>
            <View style={styles.rightContainer}>
                <TouchableOpacity>
                    <Text style={styles.edit}>{'编辑'}</Text>
                </TouchableOpacity>
                <TouchableOpacity>
                    <Image
                        style={styles.message}
                        source={require('../../images/category_message_btn_n.png')}/>
                </TouchableOpacity>
            </View>
        </View>;
    }
}

const styles = StyleSheet.create({
    centerContainer: {
        alignSelf: 'center',
        flexDirection: 'row',
        alignItems: 'center'
    },
    title: {
        fontSize: 18,
        color: Colors.text_gray_dark
    },
    rightContainer: {
        position: 'absolute',
        top: Platform.OS === 'ios' ? 20 : 0,
        right: 0,
        bottom: 0,
        alignSelf: 'stretch',
        flexDirection: 'row',
        alignItems: 'center',
    },
    edit: {
        marginRight: 15,
        fontSize: 14,
        color: Colors.text_gray
    },
    message: {
        marginRight: 15,
    }
});