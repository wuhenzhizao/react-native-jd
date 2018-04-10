import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {Dimensions, Image, StyleSheet, Text, View} from 'react-native';
import Colors from '../../constants/Colors';
import LoadingImage from '../../components/LoadingImage';

let screenWidth = Dimensions.get('window').width;

export default class DiscoveryImageDynamicCell extends Component {

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
            <View style={styles.imageContainer}>
                {this.renderImages(item)}
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

    renderImages = (item) => {
        if (item.listImages.length === 0) {
            return this.renderBigImage(item);
        } else if (item.listImages.length === 4) {
            return this.renderImageLine2(item);
        } else {
            return this.renderImageLine3(item);
        }
    };

    renderBigImage = (item) => {
        return <LoadingImage
            style={styles.bigImage}
            source={{uri: item.indexImage}}/>;
    };

    renderImageLine2 = (item) => {
        let length = item.listImages.length;
        let line = length % 2 === 0 ? parseInt(length / 2) : parseInt(length / 2) + 1;
        let views = [];
        for (let i = 0; i < line; i++) {
            views.push(<View
                key={`key${i}`}
                style={{flex: 1, flexDirection: 'row'}}>{
                this.renderImageLine2Unit(item, length, i)
            }</View>);
        }
        return views;
    };

    renderImageLine2Unit = (item, length, i) => {
        let innerViews = [];
        let imageWidth = (screenWidth - 34) / 3;
        let imageHeight = (screenWidth - 34) / 3;
        for (let j = 0; j < 2; j++) {
            if (i * 2 + j >= length) break;
            innerViews.push(<LoadingImage
                key={`key${i}${j}`}
                style={{
                    width: imageWidth,
                    height: imageHeight,
                    marginTop: i > 0 ? 2 : 0,
                    marginLeft: j > 0 ? 2 : 0
                }}
                source={{uri: item.listImages[i * 2 + j].img}}
            />);
        }
        return innerViews;
    };

    renderImageLine3 = (item) => {
        let length = item.listImages.length;
        let line = length % 3 === 0 ? parseInt(length / 3) : parseInt(length / 3) + 1;
        let views = [];
        for (let i = 0; i < line; i++) {
            views.push(<View
                key={`key${i}`}
                style={{flex: 1, flexDirection: 'row'}}>{
                this.renderImageLine3Unit(item, length, i)
            }</View>);
        }
        return views;
    };

    renderImageLine3Unit = (item, length, i) => {
        let innerViews = [];
        let imageWidth = (screenWidth - 34) / 3;
        let imageHeight = (screenWidth - 34) / 3;
        for (let j = 0; j < 3; j++) {
            if (i * 3 + j >= length) break;
            innerViews.push(<LoadingImage
                key={`key${i}${j}`}
                style={{
                    width: imageWidth,
                    height: imageHeight,
                    marginTop: i > 0 ? 2 : 0,
                    marginLeft: j > 0 ? 2 : 0
                }}
                source={{uri: item.listImages[i * 2 + j].img}}
            />);
        }
        return innerViews;
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
        width: 30,
        height: 30,
        borderRadius: 15,
        borderWidth: 0
    },
    authorInfoContainer: {
        flex: 1,
        flexDirection: 'column',
        marginLeft: 10,
    },
    authorName: {
        fontSize: 15,
        color: Colors.text_gray_dark
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
        paddingRight: 3,
    },
    bigImage: {
        height: 180,
        flex: 1,
    },
    imageContainer: {
        marginTop: 15,
        flexDirection: 'column'
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