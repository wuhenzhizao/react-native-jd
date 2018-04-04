import ActionTypes from '../constants/ActionTypes';

const initialState = {
    categoryList: []
};

export default category = (state = initialState, action) => {
    switch (action.type) {
        case ActionTypes.GET_CATEGORY_LIST:
            return handleGetCategoryList(state, action);
        case ActionTypes.UPDATE_CATEGORY:
            return handleChangeCategory(state, action);
        case ActionTypes.REMOVE_CATEGORY:
            return handleRemoveCategory(state, action);
        case ActionTypes.GET_CATEGORY_DETAIL:
            return handleGetCategoryDetail(state, action);
        default:
            return state;
    }
};

const handleGetCategoryList = (state, action) => {
    return Object.assign({}, state, {categoryList: action.payload.categoryList});
};

const handleChangeCategory = (state, action) => {
    let index = action.payload.index;
    let categoryList = [...state.categoryList];
    categoryList.forEach((item, i) => {
        item.isSelected = index === i;
    });
    return Object.assign({}, state, {categoryList: categoryList});
};

const handleGetCategoryDetail = (state, action) => {
    let detail = action.payload.detail;
    let items = [];
    items.push({
        type: 'promotion',
        item: detail.promotions.cmsPromotionsList[0]
    });
    detail.data.forEach((value) => {
        let rankingFlag = value.rankingFlag;
        if (rankingFlag) {
            items.push({
                type: 'headerWithRanking',
                name: value.name
            });
        } else {
            items.push({
                type: 'header',
                name: value.name
            });
        }
        let categoryList = value.categoryList;
        let divide = parseInt(categoryList.length / 3);
        let size = parseInt(categoryList.length % 3) === 0 ? divide : divide + 1;
        for (let i = 0; i < size; i++) {
            let tempItems = [];
            for (let j = 0; j < 3; j++) {
                let index = i * 3 + j;
                if (index < categoryList.length) {
                    tempItems.push(categoryList[index]);
                }
            }
            if (value.special_ui) {
                items.push({
                    type: 'specialUI',
                    rowIndex: i,
                    items: tempItems
                });
            } else
                items.push({
                    type: 'normalUI',
                    items: tempItems
                });
        }
    });
    return Object.assign({}, state, {items});
};

const handleRemoveCategory = (state, action) => {
    return Object.assign({}, state, {items: []});
};
