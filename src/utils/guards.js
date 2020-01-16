import router from '@/router'
import store from '@/store'
import {
    getToken
} from '@/utils/authorization'

const whiteList = ['/login', '/']

router.beforeEach(async (to, from, next) => {
    const hasToken = getToken()
    // has token
    if (hasToken) {
        if (to.path === '/login') {
            next()
        } else {
            if (!store.getters.username) {
                await store.dispatch('user/userInfo')
            }
            const hasPlans = !!store.getters.plans && store.getters.plans.length > 0
            if (hasPlans) {
                next()
            } else {
                try {
                    await store.dispatch('plan/Getplans')
                    next()
                } catch (error) {
                    await store.dispatch('user/resetToken')
                    next('/login')
                }
            }
        }
    } else {
    // no token
        if (whiteList.indexOf(to.path) !== -1) {
            next()
        } else {
            next('/login')
        }
    }
})
