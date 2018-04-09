import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {StyleSheet, View} from 'react-native';
import Swiper from 'react-native-swiper';
import Colors from '../../constants/Colors';
import LoadingImage from '../../components/LoadingImage';

export default class DiscoveryChoiceBannerCell extends Component {

    static propTypes: {
        item: PropTypes.object.isRequired,
    };

    render() {
        let {item} = this.props;
        return <Swiper
            style={styles.container}
            height={200}
            autoplay={true}
            dot={<View style={styles.dot}/>}
            activeDot={<View style={styles.activeDot}/>}
            paginationStyle={styles.pagination}
            loop={true}>
            {
                item.map((item, index) => {
                    return this.renderItem(item, index);
                })
            }
        </Swiper>;
    }

    renderItem = (item, index) => {
        return <View
            key={`key${index}`}
            style={styles.imageContainer}>
            <LoadingImage
                style={styles.image}
                source={{uri: item.indexImage}}
                resizeMode={'cover'}
            />
        </View>;
    };
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        height: 200,
        backgroundColor: '#000000'
    },
    pagination: {
        bottom: 10
    },
    dot: {
        backgroundColor: '#ffffff66',
        width: 6,
        height: 2,
        borderRadius: 1,
        marginLeft: 3,
        marginRight: 3,
        marginTop: 3,
        marginBottom: 3
    },
    activeDot: {
        backgroundColor: Colors.transparent,
        width: 8,
        height: 8,
        borderRadius: 4,
        borderColor: Colors.white,
        borderWidth: 2,
        marginLeft: 3,
        marginRight: 3,
        marginTop: 3,
        marginBottom: 3
    },
    imageContainer: {
        flex: 1,
        alignSelf: 'stretch',
    },
    image: {
        flex: 1,
        alignSelf: 'stretch',
    }
});
