import React, {Component} from 'react';
import {TabBarBottom, TabNavigator} from 'react-navigation';
import MainHome from '../containers/MainHome';
import MainCategory from '../containers/MainCategory';
import TabBarItem from '../components/TabBarItem';
import MainDiscovery from '../containers/MainDiscovery';
import MainShoppingCart from '../containers/MainShoppingCart';
import MainMine from '../containers/MainMine';

export default tabNavigator = TabNavigator({
        Home: {
            screen: MainHome,
            path: 'home/home',
            navigationOptions: ({navigation}) => ({
                tabBarIcon: ({focused, tintColor}) => (
                    <TabBarItem
                        tintColor={tintColor}
                        focused={focused}
                        normalImage={require('../images/tabBar_home_normal.png')}
                        selectedImage={require('../images/tabBar_home_press.png')}
                    />
                )
            })
        },
        MainCategory: {
            screen: MainCategory,
            path: 'home/category',
            navigationOptions: ({navigation}) => ({
                tabBarIcon: ({focused, tintColor}) => (
                    <TabBarItem
                        tintColor={tintColor}
                        focused={focused}
                        normalImage={require('../images/tabBar_category_normal.png')}
                        selectedImage={require('../images/tabBar_category_press.png')}
                    />
                )
            })
        },
        MainDiscovery: {
            screen: MainDiscovery,
            path: 'home/discovery',
            navigationOptions: ({navigation}) => ({
                tabBarIcon: ({focused, tintColor}) => (
                    <TabBarItem
                        tintColor={tintColor}
                        focused={focused}
                        normalImage={require('../images/tabBar_me_normal.png')}
                        selectedImage={require('../images/tabBar_me_press.png')}
                    />
                )
            })
        },
        MainShoppingCart: {
            screen: MainShoppingCart,
            path: 'home/shoppingCart',
            navigationOptions: ({navigation}) => ({
                tabBarIcon: ({focused, tintColor}) => (
                    <TabBarItem
                        tintColor={tintColor}
                        focused={focused}
                        normalImage={require('../images/tabBar_cart_normal.png')}
                        selectedImage={require('../images/tabBar_cart_press.png')}
                    />
                )
            })
        },
        MainMine: {
            screen: MainMine,
            path: 'home/mine',
            navigationOptions: ({navigation}) => ({
                tabBarIcon: ({focused, tintColor}) => (
                    <TabBarItem
                        tintColor={tintColor}
                        focused={focused}
                        normalImage={require('../images/tabBar_myJD_normal.png')}
                        selectedImage={require('../images/tabBar_myJD_press.png')}
                    />
                )
            })
        }
    }, {
        tabBarComponent: TabBarBottom,
        tabBarPosition: 'bottom',
        swipeEnabled: false,
        animationEnabled: false,
        lazy: false,
        tabBarOptions: {
            activeTintColor: '#f22f33',
            inactiveTintColor: '#605f65',
            showIcon: true,
            showLabel: false,
            indicatorStyle: {
                height: 0
            },
            labelStyle: {
                fontSize: 11,
                marginBottom: 4
            },
            style: {
                backgroundColor: '#ffffff',
                height: 46
            }
        }
    }
);