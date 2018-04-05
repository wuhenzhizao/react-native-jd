import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';

export default class DiscoveryTabBar extends React.Component {
    tabs = [];

    constructor(props) {
        super(props);
        this.tabs = [];
    }

    render() {
        return <View style={[styles.tabs, this.props.style]}>
            {this.props.tabs.map((tab, i) => {
                return <TouchableOpacity
                    key={tab}
                    activeOpacity={1.0}
                    onPress={() => this.props.goToPage(i)}
                    style={[styles.tab, {
                        borderBottomColor: this.props.activeTab === i ? '#f02b2b' : '#00000000',
                        marginLeft: i > 0 ? 25 : 0,
                    }]}>
                    <Text
                        ref={(tab) => {
                            this.tabs[i] = tab;
                        }}
                        style={{
                            fontSize: 15,
                            width: 40,
                            textAlign: 'center',
                            color: this.props.activeTab === i ? '#f02b2b' : '#727272'
                        }}
                    >{tab}</Text>
                </TouchableOpacity>;
            })}
        </View>;
    }
}

const styles = StyleSheet.create({
    tabs: {
        height: 46,
        flexDirection: 'row',
        alignItems: 'stretch',
        justifyContent: 'center',
        borderWidth: 1,
        borderTopWidth: 0,
        borderLeftWidth: 0,
        borderRightWidth: 0,
        borderBottomColor: '#e5e5e5',
        backgroundColor: '#ffffff',
    },
    tab: {
        alignItems: 'center',
        justifyContent: 'center',
        height: 45,
        width: 30,
        borderBottomWidth: 2,
    }
});
