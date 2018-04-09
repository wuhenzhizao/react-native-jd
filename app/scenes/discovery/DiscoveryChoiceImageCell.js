import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {Image, StyleSheet, Text, View} from 'react-native';
import Colors from '../../constants/Colors';
import LoadingImage from '../../components/LoadingImage';
import {parseWebp} from '../../utils/DataParser';

export default class DiscoveryChoiceImageCell extends Component {

    static propTypes: {
        item: PropTypes.object.isRequired,
    };

    render() {
        let {item} = this.props;
        return <View style={styles.container}>
            <View style={styles.infoContainer}>
                <Text style={styles.title} ellipsizeMode={'tail'}>{item.title}</Text>
                <View style={styles.bottomContainer}>
                    <Image
                        style={styles.avatar}
                        resizeMode={'cover'}
                        source={{uri: parseWebp(item.authorPic)}}/>
                    <Text style={styles.bottomInfo}>{
                        `${item.authorName} · ${item.pageViewStr}`
                    }</Text>
                </View>
            </View>
            <View style={styles.imageContainer}>
                <LoadingImage
                    style={styles.image}
                    source={{uri: item.indexImage}}
                />
                <Text style={styles.sku}>{item.skuNumStr}</Text>
            </View>
        </View>;
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        height: 100,
        flexDirection: 'row',
        alignItems: 'stretch',
        paddingLeft: 15,
        paddingRight: 15,
        paddingTop: 10,
        paddingBottom: 10,
        backgroundColor: Colors.white
    },
    imageContainer: {
        width: 120
    },
    image: {
        flex: 1,
        alignSelf: 'stretch'
    },
    sku: {
        position: 'absolute',
        right: 0,
        bottom: 0,
        height: 18,
        textAlign: 'center',
        fontSize: 12,
        color: '#e0ddd7',
        backgroundColor: '#00000033',
        paddingLeft: 5,
        paddingRight: 5
    },
    infoContainer: {
        flex: 1,
        flexDirection: 'column',
        alignItems: 'stretch',
        marginRight: 10
    },
    title: {
        flex: 1,
        fontSize: 16,
        color: Colors.text_gray_dark,
        lineHeight: 25,
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
        fontSize: 12,
        color: '#a2a2a2',
        marginLeft: 5,
    }
});
