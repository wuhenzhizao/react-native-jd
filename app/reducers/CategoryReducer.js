import ActionTypes from '../constants/ActionTypes';

const initialState = {
    categoryList: []
};

export default category = (state = initialState, action) => {
    switch (action.type) {
        case ActionTypes.GET_CATEGORY_LIST:
            return handleGetCategoryList(state, action);
        case ActionTypes.CHANGE_CATEGORY:
            return handleChangeCategory(state, action);
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

};
