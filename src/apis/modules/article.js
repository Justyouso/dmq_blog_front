/** ****文章模块*******/

export default [
    // 文章列表
    {
        name: 'articleList',
        url: '/v1/articles',
        method: 'get'
    },
    // 文章详情
    {
        name: 'articleDetail',
        method: 'get'
    },
    // 相似文章列表
    {
        name: 'similarList',
        url: '/v1/articles/related',
        method: 'get'
    }
]
