import React, {Component} from 'react';
import {StatusBar, StyleSheet, View, Image, Text, ImageBackground} from 'react-native';
import Styles from '../constants/Styles';

export default class MainMine extends Component<Props> {

    static navigationOptions = ({navigation}) => ({
        headerTitleStyle: Styles.titleStyle,
        headerStyle: Styles.titleBarStyle,
        gesturesEnabled: true
    });

    render() {
        return <View style={styles.container}>
            <StatusBar
                translucent={false}
                barStyle={'dark-content'}
                networkActivityIndicatorVisible={true}/>
            <ImageBackground style={styles.header}
                             source={{uri: 'https://m.360buyimg.com/mobilecms/jfs/t8911/241/2013760918/26346/ae0d7afb/59c21e2bNf90f3513.png'}}>
                <Image style={styles.plusCard}
                       source={{uri: 'https://m.360buyimg.com/mobilecms/jfs/t9982/276/1442654456/13873/2a119f4e/59e08bc6N00b0fbda.png'}}/>

                <View style={styles.viewContainer}>
                    {/*头像*/}
                    <Image style={styles.headerImg}
                           source={{uri: 'https://mmbiz.qpic.cn/mmbiz_jpg/06OLyn7rg82J9PicA9vmicyPAlLrrJUdN9DwOeMWj5oWZHmsP6gKcNe2M4boNe6G2QRb0LlZEgM8wtaYJzDUew6A/640?wx_fmt=jpeg&wxfrom=5&wx_lazy=1'}}/>
                    <View style={styles.account}>
                        {/*昵称*/}
                        <View style={styles.name_container}>
                            <Text style={styles.name}>
                                {'啃骨头的绅士'}
                            </Text>
                            <View style={styles.goldView}>
                                <Text style={styles.goldText}>
                                    {'钻石'}
                                </Text>
                            </View>
                        </View>
                        {/*福利*/}
                        <View style={styles.tipsView}>
                            <View style={styles.goldView}>
                                <Text style={styles.tipsText}>
                                    {'京享值'}
                                </Text>
                            </View>
                            <View style={styles.goldView}>
                                <Text style={styles.tipsText}>
                                    {'小白信用'}
                                </Text>
                            </View>
                        </View>
                    </View>
                </View>
                <Image style={styles.bottomImg}
                       source={{uri: 'https://m.360buyimg.com/mobilecms/jfs/t3205/83/9435694529/1616/5a3105de/58d3b5adN343d5031.png'}}/>

            </ImageBackground>

            <View style={styles.orderContainer}>
                <View>
                    <Image/>
                    <Text>{'待付款'}</Text>
                </View>
                <View>
                    <Image/>
                    <Text>{'待收货'}</Text>
                </View>

                <View>
                    <Image/>
                    <Text>{'待评价'}</Text>
                </View>

                <View>
                    <Image/>
                    <Text>{'退换/售后'}</Text>
                </View>
                <View>
                    <Image/>
                    <Text>{'我的订单'}</Text>
                </View>

            </View>

        </View>;
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    // 头像的样式
    headerImg: {
        width: 75,
        height: 75,
        borderRadius: 37
    },
    name_container: {
        justifyContent: 'flex-start',
        flexWrap: 'nowrap',
        flexDirection: 'row',
    },
    viewContainer: {
        flexDirection: 'row',
        marginTop: 40,
        marginLeft: 20,
    },
    goldView: {
        marginLeft: 8,
        backgroundColor: '#C49C61',
        borderRadius: 7,
        paddingLeft: 3,
        paddingRight: 3
    },
    goldText: {
        margin: 2,
        color: '#FFF'
    },
    header: {
        justifyContent: 'space-between',
        flexDirection: 'column',
        height: 200,
        width: Styles.screen.width,
    },
    name: {
        color: '#FFF',
    },
    tipsView: {
        justifyContent: 'space-between',
        flexDirection: 'row',
    },
    tipsText: {
        color: '#FFF'
    },
    account: {
        marginLeft: 8,
        flexDirection: 'column',
        justifyContent: 'space-around'
    },
    bottomImg: {
        alignSelf: 'flex-end',
        width: Styles.screen.width,
        height: 20,
    },
    plusCard: {
        position: 'absolute',
        width: 110,
        alignSelf: 'flex-end',
        flex: 1,
        height: 80,
        top: 120,

    },
    orderContainer:{
        backgroundColor:'#FFF',
        flexDirection:'row',
        flex:1,
        justifyContent:'space-around',
    }

});