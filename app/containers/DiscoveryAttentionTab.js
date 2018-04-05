import React, {Component} from 'react';
import {InteractionManager, View} from 'react-native';
import RefreshFlatList from '../components/RefreshFlatList';
import * as discoveryActions from '../actions/DiscoveryActions';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import DiscoveryMineFollowCell from '../scenes/cells/DiscoveryMineFollowCell';
import DiscoveryVideoDynamicCell from '../scenes/cells/DiscoveryVideoDynamicCell';
import DiscoveryImageDynamicCell from '../scenes/cells/DiscoveryImageDynamicCell';

export class DiscoveryAttentionTab extends Component {

    render() {
        return <RefreshFlatList
            data={this.props.attentionList}
            horizontal={false}
            refreshState={this.props.attentionRefreshState}
            renderItem={this.renderItemComponent}
            ItemSeparatorComponent={this.renderItemSeparatorComponent}
            onHeaderRefresh={this.onRefresh}
            onFooterRefresh={this.onLoadMore}
            footerRefreshingText={''}/>;
    }

    renderItemComponent = ({item, index}) => {
        switch (item.type) {
            case 'follow':
                return <DiscoveryMineFollowCell item={item.item}/>;
            case 'videoDynamic':
                return <DiscoveryVideoDynamicCell item={item.item}/>;
            case 'imageDynamic':
                return <DiscoveryImageDynamicCell item={item.item}/>;
        }
    };

    renderItemSeparatorComponent = ({item, index}) => {
        return <View style={{
            flex: 1,
            height: 8,
            backgroundColor: '#ecedf4'
        }}/>;
    };

    onRefresh = () => {
        let {loadAttentionDynamicRefresh} = this.props;
        loadAttentionDynamicRefresh();
    };

    onLoadMore = () => {
        let {loadAttentionDynamicMore} = this.props;
        loadAttentionDynamicMore(this.props.attentionCurrentPage + 1);
    };

    componentDidMount() {
        InteractionManager.runAfterInteractions(() => {
            let {loadAttentionDynamicRefresh} = this.props;
            loadAttentionDynamicRefresh();
        });
    }
}

const mapStateToProps = (state) => {
    return {
        attentionList: state.discovery.attentionList,
        attentionRefreshState: state.discovery.attentionRefreshState,
        attentionCurrentPage: state.discovery.attentionCurrentPage
    };
};

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators(discoveryActions, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(DiscoveryAttentionTab);