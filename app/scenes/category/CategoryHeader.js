import React, {Component} from 'react';
import {Image, Platform, StyleSheet, View} from 'react-native';
import Styles from '../../constants/Styles';

export default class CategoryHeader extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return <View style={[Styles.titleBarStyle, {
            height: 65,
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
            paddingTop: Platform.OS === 'ios' ? 20 : 0
        }]}>
            <Image
                style={styles.titleLeft}
                source={require('../../images/category_camera_7_gray.png')}/>
            <View style={styles.titleSearchContainer}>
                <Image
                    style={{marginLeft: 10, marginRight: 10}}
                    source={require('../../images/category_search_bar_icon.png')}/>
                <Image
                    style={{marginLeft: 10, marginRight: 10, width: 17, height: 17}}
                    source={{uri: 'https://m.360buyimg.com/mobilecms/jfs/t5410/348/1865705786/7246/2c7b98cf/59152012Na4a00f6d.png'}}/>
            </View>
            <Image
                style={styles.titleRight}
                source={require('../../images/category_message_btn_n.png')}/>
        </View>;
    }
}

const styles = StyleSheet.create({
    titleLeft: {
        marginLeft: 15,
    },
    titleRight: {
        marginRight: 15,
    },
    titleSearchContainer: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        height: 30,
        marginLeft: 15,
        marginRight: 15,
        backgroundColor: '#f0f2f5',
        borderRadius: 20,
    },
    titleSearch: {},
});