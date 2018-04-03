import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {Image, StyleSheet, View} from 'react-native';

export default class CategoryPromotionCell extends Component {

    static propTypes: {
        item: PropTypes.object.isRequired,
        onPromotionClick: PropTypes.func.isRequired
    };

    render() {
        console.log(this.props.item.imageUrl);
        return <View>
            <Image
                style={styles.promotion}
                resizeMode={'cover'}
                source={{uri: 'https://m.360buyimg.com/mobilecms/s530x180_jfs/t5803/108/2354279071/106333/90538df2/592fbeefN2adb55ce.JPG'}}/>
        </View>;
    }
}

const styles = StyleSheet.create({
    promotion: {
        alignItems: 'stretch',
        height: 120,
        marginLeft: 10,
        marginRight: 10,
        marginTop: 15,
        marginBottom: 10,
        backgroundColor: '#FF0000'
    }
});