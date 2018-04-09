import React, {Component} from 'react';
import {StatusBar, StyleSheet, View, PixelRatio} from 'react-native';
import DiscoveryHeader from '../scenes/discovery/DiscoveryHeader';
import ScrollableTabView, {ScrollableTabBar} from 'react-native-scrollable-tab-view';
import Colors from '../constants/Colors';
import DiscoveryAttentionTab from './DiscoveryAttentionTab';
import DiscoveryChoiceTab from './DiscoveryChoiceTab';
import DiscoveryVideoTab from './DiscoveryVideoTab';
import DiscoveryLiveStreamingTab from './DiscoveryLiveTab';
import CustomTabBar from '../components/DiscoveryTabBar';

export default class MainDiscovery extends Component<Props> {

    static navigationOptions = ({navigation}) => ({
        header: <DiscoveryHeader/>,
        gesturesEnabled: true
    });

    render() {
        return <View style={styles.container}>
            <StatusBar
                translucent={false}
                barStyle={'dark-content'}
                networkActivityIndicatorVisible={true}/>
            <ScrollableTabView
                tabBarPosition='top'
                initialPage={0}
                renderTabBar={() => <CustomTabBar />}>
                <DiscoveryAttentionTab tabLabel={'关注'}/>
                <DiscoveryChoiceTab tabLabel={'精选'}/>
                <DiscoveryVideoTab tabLabel={'视频'}/>
                <DiscoveryLiveStreamingTab tabLabel={'直播'}/>
            </ScrollableTabView>
        </View>;
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column'
    },
    tabBarStyle: {
        height: 45,
        width: 300,
        borderWidth: 1 / PixelRatio.get(),
        backgroundColor: Colors.white,
        paddingLeft: 50,
        paddingRight: 50
    },
    underlineStyle: {
        height: 2,
        width: 30,
        marginBottom: 0,
        backgroundColor: Colors.colorPrimary
    },
    textStyle: {
        fontSize: 15,
        width: 40,
        paddingLeft: 0,
        paddingRight: 0
    }
});