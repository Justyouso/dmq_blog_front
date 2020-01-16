// 'use strict'

// const path = require('path')

// function resolve (dir) {
//     return path.join(__dirname, dir)
// }

// const CompressionPlugin = require('compression-webpack-plugin')
// const UglifyPlugin = require('uglifyjs-webpack-plugin')

// const name = '深眸舆情大数据平台'

// const isprod = process.env.NODE_ENV === 'production'
// const isdev = process.env.NODE_ENV === 'development'

const proxy = ['/article'].reduce((proxyModule, module, index) => {
    proxyModule[module] = {
        target: `http://119.2.230.228:9999`,
        changeOrigin: true,
        pathRewrite: {
            ['^' + module]: ''
        }
    }
    return proxyModule
}, {})

module.exports = {
    // 项目部署的基础路径
    // baseUrl: '/',
    // 输出文件
    outputDir: 'dist',
    // 配置 webpack-dev-server
    // 三方插件的选项
    pluginOptions: {},
    // server
    devServer:{
        host: '0.0.0.0',
        port: 8090,
        proxy,
        before: app => {}
    },
    // CSS 相关选项
    css: {
    // 为预处理器的 loader 传递自定义选项。比如传递给
    // sass-loader 时，使用 `{ sass: { ... } }`。
        loaderOptions: {
            sass: {
                // 设置css中引用文件的路径，引入通用使用的scss文件（如包含的@mixin）
                prependData: `
				@import '@/style/global.scss';
				`
            }
        }
    }
}
