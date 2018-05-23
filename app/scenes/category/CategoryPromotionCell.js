import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {StyleSheet, TouchableOpacity} from 'react-native';
import LoadingImage from '../../components/LoadingImage';

export default class CategoryPromotionCell extends Component {

    render() {
        return <TouchableOpacity>
            <LoadingImage
                onPress={this.props.onPromotionClick}
                style={styles.promotion}
                source={{uri: this.props.item.imageUrl}}
                placeholderSource={require('../../images/img_placeholder.png')}/>
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
    }
});