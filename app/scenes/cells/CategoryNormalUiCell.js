import React, {Component} from 'react';
import {Dimensions, StyleSheet, Text, View} from 'react-native';
import PropTypes from 'prop-types';
import Colors from '../../constants/Colors';
import LoadingImage from '../../components/LoadingImage';

const width = Dimensions.get('window').width;
const containerWidth = width * 3 / 4 - 20;

export default class CategoryNormalUiCell extends Component {

    static propTypes: {
        items: PropTypes.array.isRequired,
        onCategoryClick: PropTypes.func.isRequired
    };

    render() {
        return <View style={styles.container}>
            {
                this.props.items.filter((item) => {
                    return item !== undefined;
                }).map((item, index) => {
                    return this.renderItem(item, index);
                })
            }
        </View>;
    }

    renderItem = (item, index) => {
        return <View
            key={`key${index}`}
            style={[styles.innerContainer, {marginLeft: index > 0 ? 10 : 0}]}>
            <LoadingImage
                onPress={this.props.onCategoryClick(item)}
                style={styles.image}
                resizeMode={'contain'}
                source={{uri: item.icon}}
                placeholderSource={require('../../images/img_placeholder.png')}/>
            <Text
                style={styles.name}
                textAlign={'center'}
                numberOfLines={1}
                ellipsizeMode={'tail'}
            >{item.name}</Text>
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
        padding: 10,
        backgroundColor: Colors.white
    },
    innerContainer: {
        width: (containerWidth - 40) / 3,
        flexDirection: 'column',
        justifyContent: 'flex-start',
        alignItems: 'center',
        marginTop: 5,
        marginBottom: 5,
    },
    image: {
        width: (containerWidth - 40) / 3 - 20,
        height: (containerWidth - 40) / 3 - 20,
    },
    name: {
        marginTop: 10,
        fontSize: 13,
        color: '#7f7f7f'
    }
});