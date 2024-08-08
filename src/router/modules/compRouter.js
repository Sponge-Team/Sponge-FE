// 컴포넌트가 화면에 어떻게 나오는지 보기위한 router 로 곧 삭제할 예정
export default {
    path: '/comp',
    name: 'comp-index',
    component: () => import('@/views/components/componentsView.vue')
}
