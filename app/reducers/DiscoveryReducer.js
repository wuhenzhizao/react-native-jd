import {RefreshState} from '../components/RefreshFlatList';
import ActionTypes from '../constants/ActionTypes';

const initialState = {
    attentionList: [],
    attentionCurrentPage: 1,
    attentionRefreshState: RefreshState.Idle,
    attentionHasMore: true,

    choiceList: [],
    choiceCurrentPage: 1,
    choiceRefreshState: RefreshState.Idle,
    choiceHasMore: true,

    videoList: [],
    videoCurrentPage: 1,
    videoRefreshState: RefreshState.Idle,
    videoHasMore: true,

    liveList: [],
    liveCurrentPage: 1,
    liveRefreshState: RefreshState.Idle,
    liveHasMore: true,
};

export default discovery = (state = initialState, action) => {
    let type = action.type;
    console.log(`DiscoveryReducer: ${type}`);
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

        case ActionTypes.GET_DISCOVERY_CHOICE_REFRESH_START:
            return handleLoadChoiceRefreshStart(state, action);
        case ActionTypes.GET_DISCOVERY_CHOICE_REFRESH_Failed:
            return handleLoadChoiceRefreshFailed(state, action);
        case ActionTypes.GET_DISCOVERY_CHOICE_REFRESH_SUCCEED:
            return handleLoadChoiceRefreshSucceed(state, action);
        case ActionTypes.GET_DISCOVERY_CHOICE_MORE_START:
            return handleLoadChoiceMoreStart(state, action);
        case ActionTypes.GET_DISCOVERY_CHOICE_MORE_Failed:
            return handleLoadChoiceMoreFailed(state, action);
        case ActionTypes.GET_DISCOVERY_CHOICE_MORE_SUCCEED:
            return handleLoadChoiceMoreSucceed(state, action);

        case ActionTypes.GET_DISCOVERY_VIDEO_REFRESH_START:
            return handleLoadVideoRefreshStart(state, action);
        case ActionTypes.GET_DISCOVERY_VIDEO_REFRESH_Failed:
            return handleLoadVideoRefreshFailed(state, action);
        case ActionTypes.GET_DISCOVERY_VIDEO_REFRESH_SUCCEED:
            return handleLoadVideoRefreshSucceed(state, action);
        case ActionTypes.GET_DISCOVERY_VIDEO_MORE_START:
            return handleLoadVideoMoreStart(state, action);
        case ActionTypes.GET_DISCOVERY_VIDEO_MORE_Failed:
            return handleLoadVideoMoreFailed(state, action);
        case ActionTypes.GET_DISCOVERY_VIDEO_MORE_SUCCEED:
            return handleLoadVideoMoreSucceed(state, action);

        case ActionTypes.GET_DISCOVERY_LIVE_REFRESH_START:
            return handleLoadLiveRefreshStart(state, action);
        case ActionTypes.GET_DISCOVERY_LIVE_REFRESH_Failed:
            return handleLoadLiveRefreshFailed(state, action);
        case ActionTypes.GET_DISCOVERY_LIVE_REFRESH_SUCCEED:
            return handleLoadLiveRefreshSucceed(state, action);
        case ActionTypes.GET_DISCOVERY_LIVE_MORE_START:
            return handleLoadLiveMoreStart(state, action);
        case ActionTypes.GET_DISCOVERY_LIVE_MORE_Failed:
            return handleLoadLiveMoreFailed(state, action);
        case ActionTypes.GET_DISCOVERY_LIVE_MORE_SUCCEED:
            return handleLoadLiveMoreSucceed(state, action);
        default:
            return state;
    }
};


/**
 * 关注
 * @param state
 * @param action
 * @returns {*}
 */

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

/**
 * 精选
 * @param state
 * @param action
 * @returns {*}
 */
const handleLoadChoiceRefreshStart = (state, action) => {
    return Object.assign({}, state, {choiceRefreshState: RefreshState.HeaderRefreshing});
};

const handleLoadChoiceRefreshFailed = (state, action) => {
    return Object.assign({}, state, {choiceRefreshState: RefreshState.Idle});
};

const handleLoadChoiceRefreshSucceed = (state, action) => {
    let {bannerConfig, list} = action.payload;
    let choiceList = [];
    choiceList.push({
        type: 'banner',
        item: bannerConfig
    });
    list.forEach((item) => {
        let type;
        if (item.appearance === 0) {
            type = 'image';
        } else if (item.appearance === 1) {
            type = 'multiImage';
        } else {
            type = 'video';
        }
        choiceList.push({type, item});
    });
    return Object.assign({}, state, {
        choiceCurrentPage: 1,
        choiceRefreshState: RefreshState.Idle,
        choiceList
    });
};

const handleLoadChoiceMoreStart = (state, action) => {
    return Object.assign({}, state, {choiceRefreshState: RefreshState.FooterRefreshing});
};

const handleLoadChoiceMoreFailed = (state, action) => {
    return Object.assign({}, state, {choiceRefreshState: RefreshState.Idle});
};

const handleLoadChoiceMoreSucceed = (state, action) => {
    let {choiceCurrentPage, list} = action.payload;
    let choiceList = [];
    list.forEach((item) => {
        let type;
        if (item.appearance === 0) {
            type = 'image';
        } else if (item.appearance === 1) {
            type = 'multiImage';
        } else {
            type = 'video';
        }
        choiceList.push({type, item});
    });
    return Object.assign({}, state, {
        choiceCurrentPage,
        choiceRefreshState: choiceCurrentPage === 3 ? RefreshState.NoMoreData : RefreshState.Idle,
        choiceList: [...state.choiceList, ...choiceList]
    });
};


/**
 * 视频
 * @param state
 * @param action
 * @returns {*}
 */
const handleLoadVideoRefreshStart = (state, action) => {
    return Object.assign({}, state, {videoRefreshState: RefreshState.HeaderRefreshing});
};

const handleLoadVideoRefreshFailed = (state, action) => {
    return Object.assign({}, state, {videoRefreshState: RefreshState.Idle});
};

const handleLoadVideoRefreshSucceed = (state, action) => {
    let {list} = action.payload;
    return Object.assign({}, state, {
        videoCurrentPage: 1,
        videoRefreshState: RefreshState.Idle,
        videoList: [...list]
    });
};

const handleLoadVideoMoreStart = (state, action) => {
    return Object.assign({}, state, {videoRefreshState: RefreshState.FooterRefreshing});
};

const handleLoadVideoMoreFailed = (state, action) => {
    return Object.assign({}, state, {videoRefreshState: RefreshState.Idle});
};

const handleLoadVideoMoreSucceed = (state, action) => {
    let {list, videoCurrentPage} = action.payload;
    return Object.assign({}, state, {
        videoCurrentPage,
        videoRefreshState: videoCurrentPage === 3 ? RefreshState.NoMoreData : RefreshState.Idle,
        videoList: [...state.videoList, ...list]
    });
};


/**
 * 直播
 * @param state
 * @param action
 * @returns {*}
 */
const handleLoadLiveRefreshStart = (state, action) => {
    return Object.assign({}, state, {liveRefreshState: RefreshState.HeaderRefreshing});
};

const handleLoadLiveRefreshFailed = (state, action) => {
    return Object.assign({}, state, {liveRefreshState: RefreshState.Idle});
};

const handleLoadLiveRefreshSucceed = (state, action) => {
    let {list} = action.payload;
    return Object.assign({}, state, {
        liveCurrentPage: 1,
        liveRefreshState: RefreshState.Idle,
        liveList: [...list]
    });
};

const handleLoadLiveMoreStart = (state, action) => {
    return Object.assign({}, state, {liveRefreshState: RefreshState.FooterRefreshing});
};

const handleLoadLiveMoreFailed = (state, action) => {
    return Object.assign({}, state, {liveRefreshState: RefreshState.Idle});
};

const handleLoadLiveMoreSucceed = (state, action) => {
    let {list, liveCurrentPage} = action.payload;
    return Object.assign({}, state, {
        liveCurrentPage,
        liveRefreshState: liveCurrentPage === 3 ? RefreshState.NoMoreData : RefreshState.Idle,
        liveList: [...state.liveList, ...list]
    });
};