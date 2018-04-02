import React, {Component} from 'react';
import {FlatList, Image, PixelRatio, Platform, StatusBar, StyleSheet, View} from 'react-native';
import Styles from '../constants/Styles';
import CategoryRootCell from '../components/CategoryRootCell';
import Colors from '../constants/Colors';
import {changeCategory, loadRootCategoryList} from '../actions/CategoryActions';
import {connect} from 'react-redux';

class MainCategory extends Component {

    static navigationOptions = ({navigation}) => ({
        headerStyle: Styles.titleBarStyle,
        header: <View style={[Styles.titleBarStyle, {
            height: 65,
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
            paddingTop: Platform.OS === 'ios' ? 20 : 0
        }]}>
            <Image
                style={styles.titleLeft}
                source={require('../images/category_camera_7_gray.png')}/>
            <View style={styles.titleSearchContainer}>
                <Image
                    style={{marginLeft: 10, marginRight: 10}}
                    source={require('../images/category_search_bar_icon.png')}/>
                <Image
                    style={{marginLeft: 10, marginRight: 10, width: 17, height: 17}}
                    source={{uri: 'https://m.360buyimg.com/mobilecms/jfs/t5410/348/1865705786/7246/2c7b98cf/59152012Na4a00f6d.png'}}/>
            </View>
            <Image
                style={styles.titleRight}
                source={require('../images/category_message_btn_n.png')}/>
        </View>,
        gesturesEnabled: true
    });

    render() {
        return <View style={styles.container}>
            <StatusBar
                translucent={false}
                barStyle={'dark-content'}
                networkActivityIndicatorVisible={true}/>
            <View style={styles.categoryContainer}>
                <FlatList
                    style={styles.rootCategoryList}
                    data={this.props.categoryList}
                    horizontal={false}
                    keyExtractor={(item: any, index: number) => `key${index}`}
                    renderItem={this.renderRootCategoryItem}
                    ItemSeparatorComponent={this.renderRootCategoryDivider}/>
                <View style={styles.secondCategoryList}>
                </View>
            </View>
        </View>;
    }

    renderRootCategoryItem = ({item, index}) => {
        return <CategoryRootCell
            item={item}
            onItemClicked={() => {
                this.props.dispatch(changeCategory(index));
            }}/>;
    };

    renderRootCategoryDivider = () => {
        return <View style={styles.rootCategoryListDivider}/>;
    };

    componentDidMount() {
        this.props.dispatch(loadRootCategoryList());
    }
}

const mapStateToProps = (state) => {
    return {
        categoryList: state.category.categoryList
    };
};

export default connect(mapStateToProps)(MainCategory);

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f3f5f7'
    },
    titleLeft: {
        marginLeft: 15,
    },
    titleRight: {
        marginRight: 15,
    },
    titleSearchContainer: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        height: 30,
        marginLeft: 15,
        marginRight: 15,
        backgroundColor: '#f0f2f5',
        borderRadius: 20,
    },
    titleSearch: {},
    categoryContainer: {
        flexDirection: 'row',
        alignItems: 'stretch'
    },
    rootCategoryList: {
        flex: 1
    },
    rootCategoryListDivider: {
        height: 1 / PixelRatio.get(),
        backgroundColor: Colors.divider
    },
    secondCategoryList: {
        flex: 3
    }
});