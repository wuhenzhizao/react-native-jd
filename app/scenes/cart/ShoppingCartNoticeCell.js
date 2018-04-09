import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {Image, StyleSheet, Text, View} from 'react-native';
import Colors from '../../constants/Colors';

export default class ShoppingCartNoticeCell extends Component {

    static propTypes: {
        item: PropTypes.object.isRequired,
    };

    render() {
        return <View style={styles.container}>
            <Image
                style={{width: 15, height: 15}}
                source={{uri: 'https://m.360buyimg.com/mobilecms/jfs/t3109/58/7616258500/454/41016427/58b7d4ecN66d287e8.png'}}/>
            <Text style={styles.notice} ellipsizeMode={'tail'}>{'购物车中有3件商品已降价，快去看看'}</Text>
            <Image
                style={{width: 15, height: 15}}
                resizeMode={'center'}
                source={require('../../images/syn_cart_closeBtn.png')}/>
        </View>;
    }
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        padding: 15,
        backgroundColor: '#f77f7a'
    },
    notice: {
        fontSize: 13,
        color: Colors.white,
        flex: 1,
        marginLeft: 10,
        marginRight: 10
    }
});