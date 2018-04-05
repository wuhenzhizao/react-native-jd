import ActionTypes from '../constants/ActionTypes';

export const loadAttentionDynamicRefresh = () => {
    return dispatch => {

        dispatch({type: ActionTypes.GET_DISCOVERY_ATTENTION_REFRESH_START,});

        setTimeout(() => {
            let followList = require('../../data/discovery_attention_mine.json').itemList.itemList;
            let contentList = require('../../data/discovery_attention_1.json').contents;
            dispatch({
                type: ActionTypes.GET_DISCOVERY_ATTENTION_REFRESH_SUCCEED,
                payload: {
                    followList,
                    contentList
                }
            });
        }, 1000);
    };
};

export const loadAttentionDynamicMore = (attentionCurrentPage) => {
    return dispatch => {

        dispatch({type: ActionTypes.GET_DISCOVERY_ATTENTION_MORE_START});

        setTimeout(() => {
            let contentList;
            if (attentionCurrentPage === 2) {
                contentList = require('../../data/discovery_attention_2.json').contents;
            } else {
                contentList = require('../../data/discovery_attention_3.json').contents;
            }
            dispatch({
                type: ActionTypes.GET_DISCOVERY_ATTENTION_MORE_SUCCEED,
                payload: {
                    attentionCurrentPage,
                    contentList
                }
            });
        }, 1000);
    };
};

export const loadChoiceRefresh = () => {
    return dispatch => {

        dispatch({type: ActionTypes.GET_DISCOVERY_CHOICE_REFRESH_START,});

        setTimeout(() => {
            let data = require('../../data/discovery_choice_1.json');
            let bannerConfig = data.bannerConfig;
            let list = data.list;
            dispatch({
                type: ActionTypes.GET_DISCOVERY_CHOICE_REFRESH_SUCCEED,
                payload: {
                    bannerConfig,
                    list
                }
            });
        }, 1000);
    };
};

export const loadChoiceMore = (choiceCurrentPage) => {
    return dispatch => {

        dispatch({type: ActionTypes.GET_DISCOVERY_CHOICE_MORE_START});

        setTimeout(() => {
            let list;
            if (choiceCurrentPage === 2) {
                list = require('../../data/discovery_choice_2.json').list;
            } else {
                list = require('../../data/discovery_choice_3.json').list;
            }
            dispatch({
                type: ActionTypes.GET_DISCOVERY_CHOICE_MORE_SUCCEED,
                payload: {
                    choiceCurrentPage,
                    list
                }
            });
        }, 1000);
    };

};

export const loadVideoRefresh = () => {
    return dispatch => {

        dispatch({type: ActionTypes.GET_DISCOVERY_VIDEO_REFRESH_START,});

        setTimeout(() => {
            let list = require('../../data/discovery_video_1.json').list;
            dispatch({
                type: ActionTypes.GET_DISCOVERY_VIDEO_REFRESH_SUCCEED,
                payload: {
                    list
                }
            });
        }, 1000);
    };
};

export const loadVideoMore = (videoCurrentPage) => {
    return dispatch => {

        dispatch({type: ActionTypes.GET_DISCOVERY_VIDEO_MORE_START});

        setTimeout(() => {
            let list;
            if (videoCurrentPage === 2) {
                list = require('../../data/discovery_video_2.json').list;
            } else {
                list = require('../../data/discovery_video_3.json').list;
            }
            dispatch({
                type: ActionTypes.GET_DISCOVERY_VIDEO_MORE_SUCCEED,
                payload: {
                    videoCurrentPage,
                    list
                }
            });
        }, 1000);
    };
};

export const loadLiveRefresh = () => {
    return dispatch => {

        dispatch({type: ActionTypes.GET_DISCOVERY_LIVE_REFRESH_START,});

        setTimeout(() => {
            let list = require('../../data/discovery_live_1.json').list;
            dispatch({
                type: ActionTypes.GET_DISCOVERY_LIVE_REFRESH_SUCCEED,
                payload: {
                    list,
                }
            });
        }, 1000);
    };
};

export const loadLiveMore = (liveCurrentPage) => {
    return dispatch => {

        dispatch({type: ActionTypes.GET_DISCOVERY_LIVE_MORE_START});

        setTimeout(() => {
            let list;
            if (liveCurrentPage === 2) {
                list = require('../../data/discovery_live_2.json').list;
            } else {
                list = require('../../data/discovery_live_3.json').list;
            }
            dispatch({
                type: ActionTypes.GET_DISCOVERY_LIVE_MORE_SUCCEED,
                payload: {
                    liveCurrentPage,
                    contentList: list
                }
            });
        }, 1000);
    };

};