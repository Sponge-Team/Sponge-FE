export default [
  {
    path: '/myprofile',
    name: 'myprofile',
    component: () => import('@/views/profile/myProfileView.vue')
  },
  {
    path: '/myprofile/create',
    name: 'myprofile-create',
    component: () => import('@/views/profile/myProfileCreateView.vue')
  }
]