/**
 * Created by Liu Jinyong on 17/4/5.
 */
import React, {PureComponent} from 'react'
import {ActivityIndicator, FlatList, StyleSheet, Text, TouchableOpacity, View} from 'react-native'

export const RefreshState = {
    Idle: 0,
    HeaderRefreshing: 1,
    FooterRefreshing: 2,
    NoMoreData: 3,
    Failure: 4,
};

const DEBUG = false;
const log = (text: string) => {
    DEBUG && console.log(text)
};

type Props = {
    refreshState: number,
    onHeaderRefresh: (refreshState: number) => void,
    onFooterRefresh?: (refreshState: number) => void,
    data: Array<any>,

    footerContainerStyle?: any,
    footerTextStyle?: any,

    listRef?: any,

    footerRefreshingText?: string,
    footerFailureText?: string,
    footerNoMoreDataText?: string,
}

class RefreshFlatList extends PureComponent {
    props: Props;

    static defaultProps = {
        footerRefreshingText: '数据加载中…',
        footerFailureText: '点击重新加载',
        footerNoMoreDataText: '已加载全部数据',
    };

    componentWillReceiveProps(nextProps: Props) {
        log('[RefreshFlatList]  RefreshFlatList componentWillReceiveProps ' + nextProps.refreshState)
    }

    componentDidUpdate(prevProps: Props, prevState: State) {
        log('[RefreshFlatList]  RefreshFlatList componentDidUpdate ' + prevProps.refreshState)
    }

    onHeaderRefresh = () => {
        log('[RefreshFlatList]  onHeaderRefresh');

        if (this.shouldStartHeaderRefreshing()) {
            log('[RefreshFlatList]  onHeaderRefresh');
            this.props.onHeaderRefresh(RefreshState.HeaderRefreshing)
        }
    };

    onEndReached = (info: any) => {
        let {distanceFromEnd} = info;
        log('[RefreshFlatList]  onEndReached   ' + distanceFromEnd);

        if (this.shouldStartFooterRefreshing()) {
            log('[RefreshFlatList]  onFooterRefresh');
            this.props.onFooterRefresh && this.props.onFooterRefresh(RefreshState.FooterRefreshing)
        }
    };

    shouldStartHeaderRefreshing = () => {
        log('[RefreshFlatList]  shouldStartHeaderRefreshing');

        return !(this.props.refreshState === RefreshState.HeaderRefreshing ||
            this.props.refreshState === RefreshState.FooterRefreshing);


    };

    shouldStartFooterRefreshing = () => {
        log('[RefreshFlatList]  shouldStartFooterRefreshing');

        let {refreshState, data} = this.props;
        return refreshState === RefreshState.Idle && data.length > 3;
    };

    render() {
        log('[RefreshFlatList]  render');

        return (
            <FlatList
                ref={this.props.listRef}
                {...this.props}
                onEndReached={this.onEndReached}
                onRefresh={this.onHeaderRefresh}
                refreshing={this.props.refreshState === RefreshState.HeaderRefreshing}
                ListFooterComponent={this.renderFooter}
                onEndReachedThreshold={0.1}
                keyExtractor={(item: any, index: number) => index}
                tintColor={'#0BB5A5'}
            />
        )
    }

    renderFooter = () => {
        let footer = null;

        let footerContainerStyle = [styles.footerContainer, this.props.footerContainerStyle];
        let footerTextStyle = [styles.footerText, this.props.footerTextStyle];
        let {footerRefreshingText, footerFailureText, footerNoMoreDataText} = this.props;

        switch (this.props.refreshState) {
            case RefreshState.Idle:
                footer = (<View style={footerContainerStyle}/>);
                break;
            case RefreshState.Failure: {
                footer = (
                    <TouchableOpacity
                        style={footerContainerStyle}
                        onPress={() => {
                            this.props.onFooterRefresh && this.props.onFooterRefresh(RefreshState.FooterRefreshing)
                        }}
                    >
                        <Text style={footerTextStyle}>{footerFailureText}</Text>
                    </TouchableOpacity>
                );
                break;
            }
            case RefreshState.FooterRefreshing: {
                footer = (
                    <View style={footerContainerStyle}>
                        <ActivityIndicator size="small" color="#888888"/>
                        <Text style={[footerTextStyle, {marginLeft: 7}]}>{footerRefreshingText}</Text>
                    </View>
                );
                break;
            }
            case RefreshState.NoMoreData: {
                if (this.props.data.length > 0){
                    footer = (
                        <View style={footerContainerStyle}>
                            <Text style={footerTextStyle}>{footerNoMoreDataText}</Text>
                        </View>
                    );
                }
                break;
            }
        }
        return footer;
    }
}

const styles = StyleSheet.create({
    footerContainer: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        padding: 10,
        height: 44,
    },
    footerText: {
        fontSize: 14,
        color: '#555555'
    }
});

export default RefreshFlatList
