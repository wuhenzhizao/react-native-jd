import React, {Component} from 'react';
import {Dimensions, Image, PixelRatio, StyleSheet, View} from 'react-native';
import PropTypes from 'prop-types';
import Colors from '../../constants/Colors';
import {parseWebp} from '../../utils/DataParser';
import LoadingImage from '../../components/LoadingImage';

const width = Dimensions.get('window').width;
const containerWidth = width * 3 / 4 - 20;

export default class CategorySpecialUiCell extends Component {

    static propTypes: {
        items: PropTypes.array.isRequired,
        onCategoryClick: PropTypes.func.isRequired
    };

    render() {
        let rowIndex = this.props.rowIndex;
        return <View style={styles.container}>
            {
                this.props.items.map((item, index) => {
                    return this.renderItem(item, index, rowIndex);
                })
            }
        </View>;
    }

    renderItem = (item, index, rowIndex) => {
        return <View
            key={`key${index}`}
            style={[styles.innerContainer, {
                borderColor: Colors.divider,
                borderTopWidth: rowIndex > 0 ? 1 / PixelRatio.get() : 0,
                borderLeftWidth: index > 0 ? 1 / PixelRatio.get() : 0,
            }]}>
            {this.renderImage(item)}
        </View>;
    };

    renderImage = (item) => {
        if (item !== undefined) {
            return <LoadingImage
                onPress={this.props.onCategoryClick(item)}
                style={styles.image}
                resizeMode={'contain'}
                source={{uri: item.icon}}
                placeholderSource={require('../../images/img_placeholder.png')}/>;
        }
    };
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
        width: containerWidth,
        marginLeft: 10,
        marginRight: 10,
        backgroundColor: Colors.white
    },
    innerContainer: {
        width: (containerWidth) / 3,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
    },
    image: {
        width: 50,
        height: 50,
        marginTop: 5,
        marginBottom: 5
    }
});