import { createRouter, createWebHistory } from 'vue-router'

import indexRouter from '@/router/modules/indexRouter.js'
import compRouter from "@/router/modules/compRouter.js";
import profileRouter from "@/router/modules/profileRouter.js";
import loginRouter from '@/router/modules/loginRouter.js';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    indexRouter,
    compRouter,
    profileRouter,
    loginRouter
  ]
})

export default router
