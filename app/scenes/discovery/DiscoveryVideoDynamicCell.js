import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {Image, PixelRatio, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import Colors from '../../constants/Colors';
import LoadingImage from '../../components/LoadingImage';

export default class DiscoveryVideoDynamicCell extends Component {

    static propTypes: {
        item: PropTypes.object.isRequired,
    };

    render() {
        let item = this.props.item;
        return <View style={styles.container}>
            <View style={styles.authorContainer}>
                <Image
                    style={styles.authorAvatar}
                    resizeMode={'cover'}
                    source={{uri: item.authorPic}}/>
                <View style={styles.authorInfoContainer}>
                    <Text
                        style={styles.authorName}
                        numberOfLines={1}
                        ellipsizeMode={'tail'}
                    >{item.authorName}</Text>
                    <Text
                        style={styles.showTime}
                        numberOfLines={1}
                        ellipsizeMode={'tail'}
                    >{item.showTime}</Text>
                </View>
            </View>
            <Text style={styles.title}>{this.renderTopics(item)}{item.summary}</Text>
            <View style={styles.liveContainer}>
                <LoadingImage
                    style={styles.live}
                    source={{uri: item.indexImage}}/>
                <View style={styles.videoOverlayContainer}>
                    < TouchableOpacity>
                        < Image source={require('../../images/pd_commentVideoPlay.png')}/>
                    </TouchableOpacity>
                </View>
            </View>
            <View style={styles.bottomContainer}>
                <Text style={styles.viewTimes}>{item.pageViewStr}</Text>
                <View style={{flexDirection: 'row', alignItems: 'center'}}>
                    {this.renderComment(item)}
                    {this.renderLike(item)}
                </View>
            </View>
        </View>;
    }

    renderTopics = (item) => {
        return item.topicList.map((value, index) => {
            return <Text
                key={`key${index}`}
                style={styles.topic}>
                {`#${value.name}#`}
            </Text>;
        });
    };

    renderComment = (item) => {
        if (item.showComment) {
            return <View style={{flexDirection: 'row', alignItems: 'center'}}>
                <Image
                    style={{width: 13, height: 13}}
                    resizeMode={'contain'}
                    source={require('../../images/shop_dynamic_detail_comment.png')}/>}
                <Text style={styles.comment}>{item.commentNumStr}</Text>
            </View>;
        }
    };

    renderLike = (item) => {
        if (item.showLike) {
            return <View style={{flexDirection: 'row', alignItems: 'center', marginLeft: 10}}>
                <Image
                    style={{width: 13, height: 13}}
                    source={item.hasLiked ?
                        require('../../images/jshop_dynamic_liked.png') :
                        require('../../images/jshop_dynamic_like.png')}/>
                <Text style={{
                    fontSize: 13,
                    marginLeft: 3,
                    color: item.hasLiked ? '#fd9d2e' : Colors.text_gray_light
                }}>{item.likeNumStr}</Text>
            </View>;
        }
    };
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        alignItems: 'stretch',
        paddingLeft: 15,
        paddingRight: 15,
        paddingTop: 15,
        paddingBottom: 15,
        backgroundColor: Colors.white
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
    authorInfoContainer: {
        flex: 1,
        flexDirection: 'column',
        marginLeft: 10,
    },
    authorName: {
        fontSize: 15,
        color: Colors.text_gray,
        marginLeft: 10,
    },
    showTime: {
        flex: 1,
        fontSize: 13,
        color: Colors.text_gray_light,
        marginTop: 5
    },
    title: {
        fontSize: 17,
        color: Colors.text_gray_dark,
        marginTop: 15,
    },
    topic: {
        fontSize: 17,
        color: '#dc0124',
    },
    liveContainer: {
        height: 180,
        marginTop: 15,
        flexDirection: 'row'
    },
    live: {
        height: 180,
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
    bottomContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginTop: 15
    },
    viewTimes: {
        fontSize: 14,
        color: Colors.text_gray_light,
    },
    comment: {
        fontSize: 13,
        marginLeft: 3,
        color: Colors.text_gray_light
    }
});
