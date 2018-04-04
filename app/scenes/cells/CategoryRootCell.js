import React, {Component} from 'react';
import {StyleSheet, Text, TouchableOpacity, PixelRatio} from 'react-native';
import PropTypes from 'prop-types';
import Colors from '../../constants/Colors';

export default class CategoryRootCell extends Component {

    static propTypes: {
        item: PropTypes.object.isRequired,
        onRootCategoryClick: PropTypes.func.isRequired
    };

    render() {
        let {item, index, onRootCategoryClick, loadCategoryDetail, clearCategoryDetail} = this.props;
        return <TouchableOpacity
            activeOpacity={1.0}
            style={[styles.container, {
                backgroundColor: item.isSelected ? '#f3f5f7' : Colors.white,
                borderRightWidth: item.isSelected ? 0 : 1 / PixelRatio.get()
            }]}
            onPress={() => {
                onRootCategoryClick(index);
                clearCategoryDetail();
                setTimeout(() => {
                    loadCategoryDetail(index);
                }, 200);
            }}>
            <Text
                style={[styles.categoryName, {
                    color: item.isSelected ? '#f23030' : Colors.text_gray
                }]}>{item.name}</Text>
        </TouchableOpacity>
            ;
    }
}

const styles = StyleSheet.create({
    container: {
        alignSelf: 'stretch',
        justifyContent: 'center',
        alignItems: 'center',
        borderRightColor: Colors.divider,
        backgroundColor: Colors.white
    },
    categoryName: {
        marginTop: 20,
        marginBottom: 20,
        fontSize: 15
    }
});