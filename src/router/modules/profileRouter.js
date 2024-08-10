export default {
    path: '/profile',
    name: 'profile-index',
    redirect: '/profile',
    children: [
        {
            path: '/profile',
            name: 'profileIndex',
            component: () => import('@/views/profile/profileView.vue')
        },
        {
            path: '/profile/info',
            name: 'info',
            component: () => import('@/views/profile/profileInfo.vue')
        },
        {
            path: '/profile/career',
            name: 'career',
            component: () => import('@/views/profile/profileCareer.vue')
        },
        {
            path: '/profile/region',
            name: 'region',
            component: () => import('@/views/profile/profileRegion.vue')
        },
    ]
}