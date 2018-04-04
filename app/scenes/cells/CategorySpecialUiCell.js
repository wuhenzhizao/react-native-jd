import React, {Component} from 'react';
import {Dimensions, Image, PixelRatio, StyleSheet, View} from 'react-native';
import PropTypes from 'prop-types';
import Colors from '../../constants/Colors';
import {parseWebp} from '../../utils/DataParser';

const width = Dimensions.get('window').width;
const containerWidth = width * 3 / 4 - 20;
console.log('containerWidth' + containerWidth);

export default class CategorySpecialUiCell extends Component {

    static propTypes: {
        items: PropTypes.array.isRequired,
        onCategoryClick: PropTypes.func.isRequired
    };

    render() {
        let rowIndex = this.props.rowIndex;
        return <View style={styles.container}>
            {
                this.props.item.map((item, index) => {
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
            <Image
                onPress={this.props.onCategoryClick(item)}
                style={styles.image}
                resizeMode={'contain'}
                source={{uri: parseWebp(item.icon)}}/>
        </View>;
    };
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        width: containerWidth,
        marginLeft: 10,
        marginRight: 10,
        backgroundColor: Colors.white
    },
    innerContainer: {
        width: containerWidth / 3,
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