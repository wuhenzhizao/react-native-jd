import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {Image, PixelRatio, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import Colors from '../../constants/Colors';

export default class DiscoveryMineFollowCell extends Component {

    static propTypes: {
        item: PropTypes.object.isRequired,
    };

    render() {
        return <TouchableOpacity style={styles.container} activeOpacity={1.0}>
            <Text style={styles.title}>{'我的关注'}</Text>
            <View style={styles.followContainer}>
                {
                    this.props.item.map((item, index) => {
                        return this.renderFollowAvatar(item, index);
                    })
                }
                <Image
                    style={styles.arrow}
                    source={require('../../images/discovery_rightArrow.png')}/>
            </View>
        </TouchableOpacity>;
    }

    renderFollowAvatar = (item, index) => {
        return <Image
            key={`key${index}`}
            style={styles.authorAvatar}
            resizeMode={'contain'}
            source={{uri: item.authorPic}}/>;
    };
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingLeft: 15,
        paddingRight: 15,
        paddingTop: 10,
        paddingBottom: 10,
        backgroundColor: Colors.white
    },
    title: {
        fontSize: 16,
        color: Colors.text_gray_dark
    },
    followContainer: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    arrow: {
        marginLeft: 20,
    },
    authorAvatar: {
        width: 36,
        height: 36,
        marginLeft: 15,
        borderRadius: 18,
        borderWidth: 1 / PixelRatio.get(),
        borderColor: '#e5e5e5',
    }
});