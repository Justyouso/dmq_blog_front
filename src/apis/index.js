import Vue from 'vue'
import request from '@/utils/request'
import {
    filterNull
} from '@/utils'

// a1=>自媒体  a2=>平台  a3=>文章  a4=>报告  a5=>方案  a6=>事件  a7=>用户权限

const modulesFiles = require.context('./modules', false, /\.js$/)
export const apis = modulesFiles.keys().reduce((modules, modulePath) => {
    // './a1.js' => 'a1'
    const moduleName = modulePath.replace(/^\.(.*)\.\w+$/, '$1')
    const moduleValue = modulesFiles(modulePath).default
    moduleValue.forEach(item => {
        const {
            name,
            ...formData
        } = item
        formData.baseURL = moduleName
        // 这里有个坑==》之前正则下来moduleName弄成了‘a1’,导致代理路径出问题，有应该是'/a1'
        modules[name] = (obj = {}) => {
            obj.params && (obj.params = filterNull({ ...obj.params }))
            obj.data && (obj.data = filterNull({ ...obj.data }))
            return request(Object.assign({}, formData, obj))
        }
    })
    return modules
}, {})

Object.defineProperty(Vue.prototype, '$api', {
    value: apis
})
