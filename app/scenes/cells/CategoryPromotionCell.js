import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {Image, StyleSheet, TouchableOpacity} from 'react-native';
import {parseWebp} from '../../utils/DataParser';

export default class CategoryPromotionCell extends Component {

    static propTypes: {
        item: PropTypes.object.isRequired,
        onPromotionClick: PropTypes.func.isRequired
    };

    render() {
        return <TouchableOpacity>
            <Image
                onPress={this.props.onPromotionClick}
                style={styles.promotion}
                source={{uri: parseWebp(this.props.item.imageUrl)}}/>
        </TouchableOpacity>;
    }
}

const styles = StyleSheet.create({
    promotion: {
        alignItems: 'stretch',
        height: 120,
        marginLeft: 10,
        marginRight: 10,
        marginTop: 15,
        marginBottom: 10
    }
});