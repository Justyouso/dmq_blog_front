import axios from 'axios'
import {
    Message,
    MessageBox
} from 'element-ui'
// import store from '@/store'
import router from '@/router'
// import {
//     getToken
// } from '@/utils/authorization'

const service = axios.create({
    withCredentials: true,
    timeout: 150000
})

service.interceptors.request.use(
    config => {
        store.getters.token && (config.headers['Authorization'] = `Bearer 111`)
        return config
    },
    error => {
        console.log(error) // for debug
        return Promise.reject(error)
    }
)
service.interceptors.response.use(
    response => {
        const { data, config } = response
        if (data.errcode !== 0) {
            Message({
                message: data.errmsg || 'error',
                type: 'error',
                duration: 5 * 1000
            })
            return Promise.reject(data.errmsg || 'error')
        } else {
            if (config.method === 'post' && !config.url.includes('login')) {
                Message({
                    message: '新增成功!',
                    type: 'success',
                    duration: 5 * 1000
                })
            } else if (config.method === 'put') {
                Message({
                    message: '更新成功!',
                    type: 'success',
                    duration: 5 * 1000
                })
            } else if (config.method === 'delete') {
                Message({
                    message: '删除成功!',
                    type: 'success',
                    duration: 5 * 1000
                })
            }
            return data
        }
    },
    error => {
        const { status, data } = error.response
        if (status === 401) {
            if (data) {
                Message({
                    message: data.errmsg,
                    type: 'error',
                    duration: 5 * 1000
                })
            } else {
                MessageBox.alert('当前登录信息已过期, 为保证您的信息安全请重新登录!', '登录已失效', {
                    confirmButtonText: '确定',
                    showClose: false,
                    callback: async _ => {
                        await store.dispatch('user/Logout')
                        router.push({
                            path: '/login'
                        })
                    }
                })
            }
            return Promise.reject(data)
        } else if (status === 403) {
            Message({
                message: '无权限!',
                type: 'error',
                duration: 5 * 1000
            })
            return Promise.resolve([])
        } else {
            Message({
                message: data.errmsg || '网络出现障碍，请刷新页面!',
                type: 'error',
                duration: 5 * 1000
            })
            return Promise.reject(data)
        }
    }
)

export default service
