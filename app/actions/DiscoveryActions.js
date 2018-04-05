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