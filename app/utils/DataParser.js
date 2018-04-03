import React from 'react';

export const categoryMap = new Map();

const categoryDetails = [
    require('../../data/category_detail_推荐分类.json'),
    require('../../data/category_detail_京东超市.json'),
    require('../../data/category_detail_国际名牌.json'),
    require('../../data/category_detail_奢侈品.json'),
    require('../../data/category_detail_全球购.json'),
    require('../../data/category_detail_男装.json'),
    require('../../data/category_detail_女装.json'),
    require('../../data/category_detail_男鞋.json'),
    require('../../data/category_detail_女鞋.json'),
    require('../../data/category_detail_内衣配饰.json'),
    require('../../data/category_detail_箱包手袋.json'),
    require('../../data/category_detail_美妆个护.json'),
    require('../../data/category_detail_钟表珠宝.json'),
    require('../../data/category_detail_手机数码.json'),
    require('../../data/category_detail_电脑办公.json'),
    require('../../data/category_detail_家用电器.json')
];

export const parseCategory = (index) => {
    const detail = categoryDetails[index];
    categoryMap.set(index, detail);
    return detail;
};