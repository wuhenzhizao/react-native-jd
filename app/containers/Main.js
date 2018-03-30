import React, {Component} from 'react';
import {StatusBar, StyleSheet, View} from 'react-native';

export default class Main extends Component<Props> {

    render() {
        return <View style={styles.container}>
            <StatusBar
                translucent={false}
                barStyle={'light-content'}
                networkActivityIndicatorVisible={true}/>
        </View>
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    }
});
