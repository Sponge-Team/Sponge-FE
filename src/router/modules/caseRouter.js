export default {
    path: '/case',
    name: 'case-index',
    redirect: '/case',
    children: [
        {
            path: '/case',
            name: 'caseIndex',
            component: () => import('@/views/case/caseView.vue')
        },
    ]
}
