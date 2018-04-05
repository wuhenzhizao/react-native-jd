import {RefreshState} from '../components/RefreshFlatList';
import ActionTypes from '../constants/ActionTypes';

const initialState = {
    attentionList: [],

    attentionCurrentPage: 1,
    attentionRefreshState: RefreshState.Idle,
    attentionHasMore: true
};

export default discovery = (state = initialState, action) => {
    let type = action.type;
    switch (type) {
        case ActionTypes.GET_DISCOVERY_ATTENTION_REFRESH_START:
            return handleLoadAttentionRefreshStart(state, action);
        case ActionTypes.GET_DISCOVERY_ATTENTION_REFRESH_Failed:
            return handleLoadAttentionRefreshFailed(state, action);
        case ActionTypes.GET_DISCOVERY_ATTENTION_REFRESH_SUCCEED:
            return handleLoadAttentionRefreshSucceed(state, action);
        case ActionTypes.GET_DISCOVERY_ATTENTION_MORE_START:
            return handleLoadAttentionMoreStart(state, action);
        case ActionTypes.GET_DISCOVERY_ATTENTION_MORE_Failed:
            return handleLoadAttentionMoreFailed(state, action);
        case ActionTypes.GET_DISCOVERY_ATTENTION_MORE_SUCCEED:
            return handleLoadAttentionMoreSucceed(state, action);
        default:
            return state;
    }
};

const handleLoadAttentionRefreshStart = (state, action) => {
    return Object.assign({}, state, {attentionRefreshState: RefreshState.HeaderRefreshing});
};

const handleLoadAttentionRefreshFailed = (state, action) => {
    return Object.assign({}, state, {attentionRefreshState: RefreshState.Idle});
};

const handleLoadAttentionRefreshSucceed = (state, action) => {
    let {followList, contentList} = action.payload;
    let attentionList = [];
    attentionList.push({
        type: 'follow',
        item: followList
    });
    contentList.forEach((item) => {
        attentionList.push({
            type: item.videoFlag === 1 ? 'videoDynamic' : 'imageDynamic',
            item
        });
    });
    return Object.assign({}, state, {
        attentionCurrentPage: 1,
        attentionRefreshState: RefreshState.Idle,
        attentionHasMore: true,    // 根据实际情况处理
        attentionList
    });
};

const handleLoadAttentionMoreStart = (state, action) => {
    return Object.assign({}, state, {attentionRefreshState: RefreshState.FooterRefreshing});
};

const handleLoadAttentionMoreFailed = (state, action) => {
    return Object.assign({}, state, {attentionRefreshState: RefreshState.Idle});
};

const handleLoadAttentionMoreSucceed = (state, action) => {
    let {attentionCurrentPage, contentList} = action.payload;
    let attentionList = [];
    contentList.forEach((item) => {
        attentionList.push({
            type: item.videoFlag === 1 ? 'videoDynamic' : 'imageDynamic',
            item
        });
    });
    return Object.assign({}, state, {
        attentionCurrentPage,
        // 这里假设第三页之后无更多数据，实际开发中，需要根据数据判断是否需要加载更多
        attentionRefreshState: attentionCurrentPage === 3 ? RefreshState.NoMoreData : RefreshState.Idle,
        attentionList: [...state.attentionList, ...attentionList]
    });
};