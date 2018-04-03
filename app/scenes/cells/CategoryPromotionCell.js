import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {View, StyleSheet} from 'react-native';
import LoadingImage from '../../components/LoadingImage';

export default class CategoryPromotionCell extends Component {

    static propTypes: {
        item: PropTypes.object.isRequired,
        onPromotionClick: PropTypes.func.isRequired
    };

    render() {
        return <View>
            <LoadingImage
                style={styles.promotion}
                placeholder={require('../../images/banner_default.png')}
                resizeMode={'cover'}
                source={{uri: this.props.item.imageUrl}}/>
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
        marginBottom: 10
    }
});