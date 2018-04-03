import React, {Component} from 'react';
import {FlatList, PixelRatio, StatusBar, StyleSheet, View} from 'react-native';
import Styles from '../constants/Styles';
import CategoryRootCell from '../scenes/cells/CategoryRootCell';
import Colors from '../constants/Colors';
import * as categoryActions from '../actions/CategoryActions';
import {connect} from 'react-redux';
import CategoryHeader from '../scenes/CategoryHeader';
import {bindActionCreators} from 'redux';
import CategoryPromotionCell from '../scenes/cells/CategoryPromotionCell';

class MainCategory extends Component {

    static navigationOptions = ({navigation}) => ({
        headerStyle: Styles.titleBarStyle,
        header: <CategoryHeader/>,
        gesturesEnabled: true
    });

    render() {
        console.log(this.props);
        return <View style={styles.container}>
            <StatusBar
                translucent={false}
                barStyle={'dark-content'}
                networkActivityIndicatorVisible={true}/>
            <View style={styles.categoryContainer}>
                <View style={styles.rootCategoryList}>
                    <FlatList
                        style={styles.rootCategoryList}
                        data={this.props.categoryList}
                        horizontal={false}
                        keyExtractor={(item: any, index: number) => `key${index}`}
                        renderItem={this.renderRootCategoryItem}
                        ItemSeparatorComponent={this.renderRootCategoryDivider}/>
                </View>
                <View style={styles.secondCategoryList}>
                    <FlatList
                        data={this.props.items}
                        horizontal={false}
                        keyExtractor={(item: any, index: number) => `key${index}`}
                        renderItem={this.renderSecondCategoryItem}/>
                </View>
            </View>
        </View>;
    }

    renderRootCategoryItem = ({item, index}) => {
        return <CategoryRootCell
            item={item}
            index={index}
            {...this.props} />;
    };

    renderSecondCategoryItem = ({item, index}) => {
        let type = item.type;
        switch (type) {
            case 'promotion':
                return <CategoryPromotionCell
                    item={item.item}
                    {...this.props}/>;
            case 'header':
            case 'headerWithRanking':
            case 'normalUI':
            case 'specialUI':
        }
        return <CategoryRootCell
            item={item}
            index={index}
            {...this.props} />;
    };

    renderRootCategoryDivider = () => {
        return <View style={styles.rootCategoryListDivider}/>;
    };

    componentDidMount() {
        let {loadRootCategoryList, loadCategoryDetail} = this.props;
        loadRootCategoryList();
        loadCategoryDetail(0);
    }
}

const mapStateToProps = (state) => {
    return {
        categoryList: state.category.categoryList,
        items: state.category.items,
    };
};

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators(categoryActions, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(MainCategory);

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f3f5f7'
    },
    categoryContainer: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'stretch'
    },
    rootCategoryList: {
        flex: 1,
        flexDirection: 'column',
    },
    rootCategoryListDivider: {
        height: 1 / PixelRatio.get(),
        backgroundColor: Colors.divider
    },
    secondCategoryList: {
        flex: 3,
        flexDirection: 'column',
    }
});