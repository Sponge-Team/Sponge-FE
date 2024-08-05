import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import moment from 'moment'
import vClickOutside from "click-outside-vue3"
import vueCookies from "vue-cookies"

import '@/assets/css/default.scss'
import '@/assets/css/font.scss'
import '@/assets/css/reset.scss'

const app = createApp(App)

app.use(router)
app.use(moment)
app.use(vClickOutside)
app.use(vueCookies)
app.mount('#app')
