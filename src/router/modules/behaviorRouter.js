export default [
  {
    path: '/behavior/create',
    name: 'behavior-create',
    component: () => import('@/views/behavior/behaviorCreateView.vue')
  },
  {
    path: '/behavior/:id',
    name: 'behavior-detail',
    component: () => import('@/views/behavior/behaviorDetailView.vue')
  }
]