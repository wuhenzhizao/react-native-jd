import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {Image, Text, View, StyleSheet} from 'react-native';

export default class CategoryRankingHeaderCell extends Component {

    static propTypes: {
        item: PropTypes.object.isRequired,
        onRankingClick: PropTypes.func.isRequired
    };

    render() {
        return <View style={styles.container}>
            <Text style={styles.title}>{this.props.item}</Text>
            <Image source={require('../../images/category_ranking.png')}/>
        </View>;
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginLeft: 10,
        marginRight: 10,
        marginTop: 15,
        marginBottom: 10,
    },
    title: {
        fontWeight: 'bold',
        fontSize: 15
    }
});
