import React, {Component} from 'react';
import {InteractionManager, View} from 'react-native';
import RefreshFlatList from '../components/RefreshFlatList';
import * as discoveryActions from '../actions/DiscoveryActions';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import DiscoveryVideoCell from '../scenes/cells/DiscoveryVideoCell';

export class DiscoveryVideoTab extends Component {

    render() {
        return <RefreshFlatList
            data={this.props.videoList}
            horizontal={false}
            refreshState={this.props.videoRefreshState}
            renderItem={this.renderItemComponent}
            ItemSeparatorComponent={this.renderItemSeparatorComponent}
            onHeaderRefresh={this.onRefresh}
            onFooterRefresh={this.onLoadMore}
            footerRefreshingText={''}/>;
    }

    renderItemComponent = ({item, index}) => {
        return <DiscoveryVideoCell item={item}/>;
    };

    renderItemSeparatorComponent = ({item, index}) => {
        return <View style={{
            flex: 1,
            height: 10,
            backgroundColor: '#f3f3f3'
        }}/>;
    };

    onRefresh = () => {
        let {loadVideoRefresh} = this.props;
        loadVideoRefresh();
    };

    onLoadMore = () => {
        let {loadVideoMore} = this.props;
        loadVideoMore(this.props.videoCurrentPage + 1);
    };

    componentDidMount() {
        InteractionManager.runAfterInteractions(() => {
            let {loadVideoRefresh} = this.props;
            loadVideoRefresh();
        });
    }
}

const mapStateToProps = (state) => {
    return {
        videoList: state.discovery.videoList,
        videoRefreshState: state.discovery.videoRefreshState,
        videoCurrentPage: state.discovery.videoCurrentPage
    };
};

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators(discoveryActions, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(DiscoveryVideoTab);