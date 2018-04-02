import ActionTypes from '../constants/ActionTypes';

/**
 * 请求一级分类数据
 * @returns {function(*)}
 */
export const loadRootCategoryList = () => {
    return dispatch => {
        // 模拟网络请求
        setTimeout(() => {
            let categoryList = require('../../data/category_list.json').categoryList;
            categoryList.forEach((item, index) => {
                item.isSelected = index === 0;
            });
            dispatch({
                type: ActionTypes.GET_CATEGORY_LIST,
                payload: {
                    categoryList
                }
            });
        }, 1000);
    };
};

const categoryMap = new Map();

export const loadCategoryDetail = (categoryName) => {
    if (categoryMap.has(categoryName)) {
        return dispatch => {
            // 模拟网络请求
            dispatch({
                type: ActionTypes.GET_CATEGORY_DETAIL,
                payload: {
                    detail: categoryMap.get(categoryName)
                }
            });
        };
    } else {
        return dispatch => {
            // 模拟网络请求
            setTimeout(() => {
                let detail = require(`../../data/category_detail_${categoryName}.json`);
                dispatch({
                    type: ActionTypes.GET_CATEGORY_DETAIL,
                    payload: {
                        detail
                    }
                });
            }, 1000);
        };
    }
};

export const changeCategory = (index) => {
    return {
        type: ActionTypes.CHANGE_CATEGORY,
        payload: {
            index
        }
    };
};