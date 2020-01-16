import Layout from '@/layout'

export default [{
    path: '/monitorCenter',
    component: Layout,
    children: [{
        path: '',
        // 主页下面逻辑
        component: () =>
            import('@/views/monitorCenter/index.vue'),
        name: 'MonitorCenter',
        meta: {
            nav: 'dashboard',
            title: '总览'
        }
    }]
}]
