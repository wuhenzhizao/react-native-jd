import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import Colors from '../../constants/Colors';
import LoadingImage from '../../components/LoadingImage';
import {parseWebp} from '../../utils/DataParser';

export default class DiscoveryChoiceVideoCell extends Component {

    static propTypes: {
        item: PropTypes.object.isRequired,
    };

    render() {
        let {item} = this.props;
        return <View style={styles.container}>
            <Text style={styles.title} ellipsizeMode={'tail'}>{item.title}</Text>
            <View style={styles.videoContainer}>
                <LoadingImage
                    style={styles.video}
                    source={{uri: item.indexImage}}/>
                <View style={styles.videoOverlayContainer}>
                    <TouchableOpacity>
                        <Image source={require('../../images/pd_commentVideoPlay.png')}/>
                    </TouchableOpacity>
                    <Text style={styles.duration}>{item.videoInfo.vd}</Text>
                </View>
            </View>
            <View style={styles.bottomContainer}>
                <Image
                    style={styles.avatar}
                    resizeMode={'cover'}
                    source={{uri: parseWebp(item.authorPic)}}/>
                <Text style={styles.bottomInfo}>{
                    `${item.authorName} · ${item.pageViewStr}`
                }</Text>
                <Text style={styles.sku}>{`${item.skuNumStr}`}</Text>
            </View>
        </View>;
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        alignItems: 'stretch',
        paddingLeft: 15,
        paddingRight: 15,
        paddingTop: 15,
        paddingBottom: 10,
        backgroundColor: Colors.white
    },
    title: {
        fontSize: 16,
        color: Colors.text_gray_dark,
        lineHeight: 20,
    },
    videoContainer: {
        marginTop: 10,
        height: 200,
        flexDirection: 'row',
    },
    video: {
        height: 200,
        flex: 1,
    },
    videoOverlayContainer: {
        position: 'absolute',
        top: 0,
        bottom: 0,
        left: 0,
        right: 0,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
    },
    duration: {
        fontSize: 13,
        color: Colors.white,
        marginTop: 10
    },
    bottomContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 10,
    },
    avatar: {
        width: 12,
        height: 12,
        borderRadius: 6,
    },
    bottomInfo: {
        flex: 1,
        fontSize: 12,
        color: '#a2a2a2',
        marginLeft: 5,
    },
    sku: {
        marginLeft: 10,
        textAlign: 'center',
        fontSize: 12,
        color: '#a2a2a2',
    },
});
