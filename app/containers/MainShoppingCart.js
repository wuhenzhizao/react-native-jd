import React, {Component} from 'react';
import {StatusBar, StyleSheet, View, PixelRatio} from 'react-native';
import ShoppingCartHeader from '../scenes/cart/ShoppingCartHeader';
import ShoppingCartNoticeCell from '../scenes/cart/ShoppingCartNoticeCell';
import ShoppingCartShopCell from '../scenes/cart/ShoppingCartShopCell';
import ShoppingCartBottom from '../scenes/cart/ShoppingCartBottom';
import ShoppingCartSkuCell from '../scenes/cart/ShoppingCartSkuCell';

export default class MainShoppingCart extends Component<Props> {

    static navigationOptions = ({navigation}) => ({
        header: <ShoppingCartHeader/>,
        gesturesEnabled: true
    });

    render() {
        return <View style={styles.container}>
            <StatusBar
                translucent={false}
                barStyle={'dark-content'}
                networkActivityIndicatorVisible={true}/>
            <ShoppingCartNoticeCell item={{}}/>
            <ShoppingCartShopCell item={{}}/>
            <ShoppingCartSkuCell item={{}}/>
            <View style={{flex: 1}}/>
            <View style={styles.bottomLine}/>
            <ShoppingCartBottom item={{}}/>
        </View>;
    }

    renderItemSeparatorComponent = ({item, index}) => {
        return <View style={{
            flex: 1,
            height: 10,
            backgroundColor: '#f0f2f5'
        }}/>;
    };
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
    },
    bottomLine: {
        height: 1 / PixelRatio.get(),
        backgroundColor: '#dedede'
    }
});