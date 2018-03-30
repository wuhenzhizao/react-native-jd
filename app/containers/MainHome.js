import React, {Component} from 'react';
import {StatusBar, StyleSheet, View} from 'react-native';
import Styles from '../constants/Styles';

export default class MainHome extends Component {

    static navigationOptions = ({navigation}) => ({
        headerTitle: '首页',
        headerTitleStyle: Styles.titleStyle,
        headerStyle: [Styles.titleBarStyle, {borderBottomWidth: 0}],
        gesturesEnabled: true
    });

    render() {
        return <View style={styles.container}>
            <StatusBar
                translucent={false}
                barStyle={'dark-content'}
                networkActivityIndicatorVisible={true}/>
        </View>;
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    }
});