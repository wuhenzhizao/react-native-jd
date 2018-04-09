import React, {Component} from 'react';
import {InteractionManager, View} from 'react-native';
import RefreshFlatList from '../components/RefreshFlatList';
import * as discoveryActions from '../actions/DiscoveryActions';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import DiscoveryChoiceBannerCell from '../scenes/discovery/DiscoveryChoiceBannerCell';
import DiscoveryChoiceImageCell from '../scenes/discovery/DiscoveryChoiceImageCell';
import DiscoveryChoiceMultiImageCell from '../scenes/discovery/DiscoveryChoiceMultiImageCell';
import DiscoveryChoiceVideoCell from '../scenes/discovery/DiscoveryChoiceVideoCell';

export class DiscoveryChoiceTab extends Component {

    render() {
        return <RefreshFlatList
            data={this.props.choiceList}
            horizontal={false}
            refreshState={this.props.choiceRefreshState}
            renderItem={this.renderItemComponent}
            ItemSeparatorComponent={this.renderItemSeparatorComponent}
            onHeaderRefresh={this.onRefresh}
            onFooterRefresh={this.onLoadMore}
            footerRefreshingText={''}/>;
    }

    renderItemComponent = ({item, index}) => {
        switch (item.type) {
            case 'banner':
                return <DiscoveryChoiceBannerCell item={item.item}/>;
            case 'image':
                return <DiscoveryChoiceImageCell item={item.item}/>;
            case 'multiImage':
                return <DiscoveryChoiceMultiImageCell item={item.item}/>;
            case 'video':
                return <DiscoveryChoiceVideoCell item={item.item}/>;
        }
    };

    renderItemSeparatorComponent = ({item, index}) => {
        return <View style={{
            flex: 1,
            height: 10,
            backgroundColor: '#f3f3f3'
        }}/>;
    };

    onRefresh = () => {
        let {loadChoiceRefresh} = this.props;
        loadChoiceRefresh();
    };

    onLoadMore = () => {
        let {loadChoiceMore} = this.props;
        loadChoiceMore(this.props.choiceCurrentPage + 1);
    };

    componentDidMount() {
        InteractionManager.runAfterInteractions(() => {
            let {loadChoiceRefresh} = this.props;
            loadChoiceRefresh();
        });
    }
}

const mapStateToProps = (state) => {
    return {
        choiceList: state.discovery.choiceList,
        choiceRefreshState: state.discovery.choiceRefreshState,
        choiceCurrentPage: state.discovery.choiceCurrentPage
    };
};

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators(discoveryActions, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(DiscoveryChoiceTab);