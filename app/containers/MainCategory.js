import React, {Component} from 'react';
import {FlatList, PixelRatio, StatusBar, StyleSheet, View} from 'react-native';
import Styles from '../constants/Styles';
import CategoryRootCell from '../scenes/category/CategoryRootCell';
import Colors from '../constants/Colors';
import * as categoryActions from '../actions/CategoryActions';
import {connect} from 'react-redux';
import CategoryHeader from '../scenes/category/CategoryHeader';
import {bindActionCreators} from 'redux';
import CategoryPromotionCell from '../scenes/category/CategoryPromotionCell';
import CategoryNormalHeaderCell from '../scenes/category/CategoryNormalHeaderCell';
import CategoryRankingHeaderCell from '../scenes/category/CategoryRankingHeaderCell';
import CategoryNormalUiCell from '../scenes/category/CategoryNormalUiCell';
import CategorySpecialUiCell from '../scenes/category/CategorySpecialUiCell';

class MainCategory extends Component {

    static navigationOptions = ({navigation}) => ({
        header: <CategoryHeader/>,
        gesturesEnabled: true
    });

    render() {
        console.log('MainCategory render');
        return <View style={styles.container}>
            <StatusBar
                translucent={false}
                barStyle={'dark-content'}
                backgroundColor={'#FFFFFF'}
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
                        ref={ref => this.secondCategoryList = ref}
                        data={this.props.secondCategoryList}
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
            onRootCategoryItemClick={this.onRootCategoryItemClick}/>;
    };

    renderSecondCategoryItem = ({item, index}) => {
        console.log(item);
        let type = item.type;
        switch (type) {
            case 'promotion':
                return <CategoryPromotionCell
                    item={item.item}
                    {...this.props}/>;
            case 'header':
                return <CategoryNormalHeaderCell
                    item={item.name}
                    {...this.props}/>;
            case 'headerWithRanking':
                return <CategoryRankingHeaderCell
                    item={item.name}
                    {...this.props}/>;
            case 'normalUI':
                return <CategoryNormalUiCell
                    items={item.items}
                    {...this.props}/>;
            case 'specialUI':
                return <CategorySpecialUiCell
                    items={item.items}
                    rowIndex={item.rowIndex}
                    {...this.props}/>;
        }
    };

    renderRootCategoryDivider = () => {
        return <View style={styles.rootCategoryListDivider}/>;
    };

    componentDidMount() {
        let {loadRootCategoryList, loadCategoryDetail} = this.props;
        loadRootCategoryList();
        loadCategoryDetail(0);
    }

    onRootCategoryItemClick = (index) => {
        let {changeRootCategory, clearCategoryDetail, loadCategoryDetail} = this.props;
        changeRootCategory(index);
        this.secondCategoryList.scrollToIndex({
            animated: true,
            index: 0,
        });
        setTimeout(() => {
            clearCategoryDetail();
            loadCategoryDetail(index);
        }, 100);
    };
}

const mapStateToProps = (state) => {
    return {
        categoryList: state.category.categoryList,
        secondCategoryList: state.category.secondCategoryList,
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