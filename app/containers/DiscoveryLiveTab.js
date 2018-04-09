import React, {Component} from 'react';
import {InteractionManager} from 'react-native';
import RefreshFlatList from '../components/RefreshFlatList';
import * as discoveryActions from '../actions/DiscoveryActions';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import DiscoveryLiveCell from '../scenes/discovery/DiscoveryLiveCell';

export class DiscoveryLiveTab extends Component {

    render() {
        return <RefreshFlatList
            data={this.props.liveList}
            horizontal={false}
            refreshState={this.props.liveRefreshState}
            renderItem={this.renderItemComponent}
            ItemSeparatorComponent={this.renderItemSeparatorComponent}
            onHeaderRefresh={this.onRefresh}
            onFooterRefresh={this.onLoadMore}
            footerRefreshingText={''}/>;
    }

    renderItemComponent = ({item, index}) => {
        return <DiscoveryLiveCell
            item={item}
            isFirst={index === 0}
            isLast={index === this.props.liveList.length - 1}/>;
    };

    onRefresh = () => {
        let {loadLiveRefresh} = this.props;
        loadLiveRefresh();
    };

    onLoadMore = () => {
        let {loadLiveMore} = this.props;
        loadLiveMore(this.props.liveCurrentPage + 1);
    };

    componentDidMount() {
        InteractionManager.runAfterInteractions(() => {
            let {loadLiveRefresh} = this.props;
            loadLiveRefresh();
        });
    }
}

const mapStateToProps = (state) => {
    return {
        liveList: state.discovery.liveList,
        liveRefreshState: state.discovery.liveRefreshState,
        liveCurrentPage: state.discovery.liveCurrentPage
    };
};

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators(discoveryActions, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(DiscoveryLiveTab);