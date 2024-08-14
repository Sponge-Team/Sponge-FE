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
    ]
}
