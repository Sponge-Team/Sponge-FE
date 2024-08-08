import { createRouter, createWebHistory } from 'vue-router'

import indexRouter from '@/router/modules/indexRouter.js'
import compRouter from "@/router/modules/compRouter.js";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
			path: '/',
			name: 'index',
			redirect: '/'
		},
    indexRouter,
    compRouter
  ]
})

export default router
