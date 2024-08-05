import { createRouter, createWebHistory } from 'vue-router'

import signRouter from '@/router/modules/signRouter'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
			path: '/',
			name: 'index',
			redirect: '/sign'
		},
    signRouter,
  ]
})

export default router
