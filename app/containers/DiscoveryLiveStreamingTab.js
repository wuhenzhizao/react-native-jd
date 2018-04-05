import React, {Component} from 'react';
import {Text, View} from 'react-native';

export default class DiscoveryLiveStreamingTab extends Component {

    render() {
        return <View>
            <Text>{this.props.tabLabel}</Text>
        </View>
    }
}