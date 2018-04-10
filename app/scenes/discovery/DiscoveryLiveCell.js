import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {Image, PixelRatio, StyleSheet, Text, View} from 'react-native';
import Colors from '../../constants/Colors';
import LoadingImage from '../../components/LoadingImage';
import Icon from 'react-native-vector-icons/Ionicons';

export default class DiscoveryLiveCell extends Component {

    static propTypes: {
        item: PropTypes.object.isRequired,
        isFirst: PropTypes.boolean.isRequired,
        isLast: PropTypes.boolean.isRequired,
    };

    render() {
        let {item, isFirst, isLast} = this.props;
        return <View style={[styles.container, {paddingTop: isFirst ? 10 : 5, paddingBottom: isLast ? 10 : 5}]}>
            <View style={styles.liveContainer}>
                <LoadingImage
                    style={styles.live}
                    source={{uri: item.indexImage}}/>
                <View style={styles.videoOverlayContainer}>
                    <View style={styles.pvContainer}>
                        <Text
                            style={styles.pv}
                            numberOfLines={1}>{item.pV > 10000 ? `${(item.pV / 10000).toFixed(1)}万人` : `${item.pV}人`}</Text>
                    </View>
                    <View style={[styles.statusContainer, {
                        backgroundColor: item.status === 1 ? '#fd446d' : '#88000000'
                    }]}>
                        <Text
                            style={styles.status}
                            numberOfLines={1}>{
                            item.status === 1 ? '直播中' : '已结束'
                        }</Text>
                    </View>
                </View>
                <View style={styles.infoContainer}>
                    <Image
                        style={styles.authorAvatar}
                        resizeMode={'cover'}
                        source={{uri: item.userPic}}/>
                    <Text
                        style={styles.authorName}
                        numberOfLines={1}
                        ellipsizeMode={'tail'}>{item.userName}</Text>
                    <View style={{height: 16, width: 1, backgroundColor: Colors.white, marginLeft: 10}}/>
                    <Icon
                        style={{marginLeft: 10}}
                        size={15}
                        color={Colors.white}
                        name={'ios-pin'}/>
                    <Text
                        style={styles.location}
                        numberOfLines={1}
                        ellipsizeMode={'tail'}>{item.location}</Text>
                </View>
            </View>
            <Text style={styles.title} numberOfLines={1}>{item.title}</Text>
        </View>;
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        alignItems: 'stretch',
        paddingLeft: 10,
        paddingRight: 10,
    },
    liveContainer: {
        height: 200,
        flexDirection: 'row',
        backgroundColor: Colors.white,
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
        right: 0
    },
    statusContainer: {
        width: 50,
        height: 18,
        marginLeft: 5,
        marginTop: 5,
        borderRadius: 9,
        alignItems: 'center',
        justifyContent: 'center'
    },
    status: {
        fontSize: 11,
        color: Colors.white,
        textAlign: 'center'
    },
    pvContainer: {
        position: 'absolute',
        height: 18,
        paddingLeft: 20,
        paddingRight: 10,
        top: 5,
        left: 40,
        borderRadius: 9,
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#00000066'
    },
    pv: {
        fontSize: 12,
        color: Colors.white,
        textAlign: 'center'
    },
    infoContainer: {
        position: 'absolute',
        flexDirection: 'row',
        bottom: 5,
        left: 5,
        alignItems: 'center'
    },
    title: {
        fontSize: 16,
        color: '#4a4a4a',
        paddingLeft: 10,
        paddingRight: 10,
        paddingTop: 10,
        paddingBottom: 10,
        backgroundColor: Colors.white
    },
    authorAvatar: {
        width: 36,
        height: 36,
        borderRadius: 18,
        borderWidth: 1 / PixelRatio.get(),
        borderColor: '#e5e5e5',
    },
    authorName: {
        fontSize: 16,
        width: 100,
        marginLeft: 10,
        color: Colors.white
    },
    location: {
        fontSize: 14,
        marginLeft: 5,
        color: Colors.white
    }
});
