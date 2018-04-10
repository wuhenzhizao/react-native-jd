import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {Dimensions, Image, StyleSheet, Text, View} from 'react-native';
import Colors from '../../constants/Colors';
import LoadingImage from '../../components/LoadingImage';

let screenWidth = Dimensions.get('window').width;

export default class DiscoveryChoiceMultiImageCell extends Component {

    static propTypes: {
        item: PropTypes.object.isRequired,
    };

    render() {
        let {item} = this.props;
        return <View style={styles.container}>
            <Text style={styles.title} ellipsizeMode={'tail'}>{item.title}</Text>
            <View style={styles.imageContainer}>
                {
                    this.renderImage(item)
                }
            </View>
            <View style={styles.bottomContainer}>
                <Image
                    style={styles.avatar}
                    resizeMode={'cover'}
                    source={{uri: item.authorPic}}/>
                <Text style={styles.bottomInfo}>{
                    `${item.authorName} · ${item.pageViewStr}`
                }</Text>
                <Text style={styles.sku}>{`${item.skuNumStr}`}</Text>
            </View>
        </View>;
    }

    renderImage = (item) => {
        let views = [];
        let imageWidth = (screenWidth - 34) / 3;
        let imageHeight = (screenWidth - 34) / 3;
        for (let i = 0; i < 3; i++) {
            if (i >= item.skuImgs.length) break;
            views.push(<LoadingImage
                key={`key${i}`}
                style={{
                    width: imageWidth,
                    height: imageHeight,
                    marginLeft: i > 0 ? 7 : 0
                }}
                source={{uri: item.skuImgs[i]}}
            />);
        }
        return views;
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
        paddingBottom: 10,
        backgroundColor: Colors.white
    },
    title: {
        fontSize: 16,
        color: Colors.text_gray_dark,
        lineHeight: 20,
    },
    imageContainer: {
        marginTop: 15,
        flexDirection: 'row'
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
