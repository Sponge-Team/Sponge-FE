import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import moment from 'moment'
import vClickOutside from "click-outside-vue3"
import vueCookies from "vue-cookies"

import 'virtual:uno.css'
import '@/lib/assets/css/__globals.scss'
import '@/lib/assets/css/__fonts.scss'
import '@/lib/assets/css/__colors.scss'
import '@/lib/assets/css/__variables.scss'
import '@/lib/assets/css/__typos.scss'
import '@vuepic/vue-datepicker/dist/main.css'

const app = createApp(App)

app.use(router)
app.use(moment)
app.use(vClickOutside)
app.use(vueCookies)
app.mount('#app')
