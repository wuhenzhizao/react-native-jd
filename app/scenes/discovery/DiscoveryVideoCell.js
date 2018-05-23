import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {Image, PixelRatio, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import Colors from '../../constants/Colors';
import LoadingImage from '../../components/LoadingImage';

export default class DiscoveryVideoCell extends Component {

    static propTypes: {
        item: PropTypes.object.isRequired,
    };

    render() {
        let item = this.props.item;
        return <View style={styles.container}>
            <View style={styles.liveContainer}>
                <LoadingImage
                    style={styles.live}
                    source={{uri: item.indexImage}}/>
                <View style={styles.infoContainer}>
                    <Text style={styles.title}>{item.title}</Text>
                    <Text style={styles.playTimes}>{item.pageViewStr}</Text>
                </View>
                <Text style={styles.duration}>{item.videoInfo.vd}</Text>
                <View style={styles.videoOverlayContainer}>
                    <TouchableOpacity>
                        < Image source={require('../../images/pd_commentVideoPlay.png')}/>
                    </TouchableOpacity>
                </View>
            </View>
            <View style={styles.bottomContainer}>
                <Image
                    style={styles.authorAvatar}
                    resizeMode={'cover'}
                    source={{uri: item.authorPic}}/>
                <Text
                    style={styles.authorName}
                    numberOfLines={1}
                    ellipsizeMode={'tail'}>{item.authorName}</Text>
                <Image
                    style={styles.smallIcon}
                    resizeMode={'contain'}
                    source={require('../../images/rankhome-dresser-bag.png')}/>
                <Text style={styles.comment}>{item.skuNumStr}</Text>
                <Image
                    style={styles.smallIcon}
                    resizeMode={'contain'}
                    source={require('../../images/shop_dynamic_detail_comment.png')}/>
                <Text style={styles.comment}>{item.commentNum}</Text>
                <Image
                    style={styles.smallIcon}
                    resizeMode={'cover'}
                    source={item.hasLiked ?
                        require('../../images/jshop_dynamic_liked.png') :
                        require('../../images/jshop_dynamic_like.png')}/>
                <Text style={styles.comment}>{item.likeNumStr}</Text>
            </View>
        </View>;
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        alignItems: 'stretch',
        backgroundColor: Colors.white
    },
    liveContainer: {
        height: 200,
        flexDirection: 'row'
    },
    live: {
        height: 200,
        flex: 1,
    },
    videoOverlayContainer: {
        position: 'absolute',
        top: 0,
        bottom: 0,
        left: 0,
        right: 0,
        justifyContent: 'center',
        alignItems: 'center',
    },
    infoContainer: {
        position: 'absolute',
        flexDirection: 'column',
        top: 0,
        bottom: 0,
        left: 0,
        right: 0,
        padding: 15,
    },
    title: {
        fontSize: 17,
        color: Colors.white,
        fontWeight: 'bold',
        lineHeight: 25,
    },
    playTimes: {
        fontSize: 14,
        color: '#dbd5d4',
    },
    duration: {
        position: 'absolute',
        bottom: 10,
        right: 10,
        fontSize: 15,
        color: Colors.white
    },
    authorContainer: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    authorAvatar: {
        width: 36,
        height: 36,
        borderRadius: 18,
        borderWidth: 1 / PixelRatio.get(),
        borderColor: '#e5e5e5',
    },
    authorName: {
        flex: 1,
        fontSize: 15,
        marginLeft: 10,
        color: Colors.text_gray_dark,
        textAlign: 'left'
    },
    bottomContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginTop: 10,
        marginLeft: 15,
        marginRight: 15,
        marginBottom: 10
    },
    viewTimes: {
        fontSize: 14,
        color: Colors.text_gray_light,
    },
    smallIcon: {
        width: 13,
        height: 13,
        marginLeft: 15,
    },
    comment: {
        fontSize: 13,
        marginLeft: 5,
        color: Colors.text_gray_light
    }
});
