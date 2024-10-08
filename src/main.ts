import './style.css'
import { createApp } from 'vue'

import App from './App.vue'
import { definePrimevue } from './libs/primevue'
import { createPinia } from 'pinia'
import { createAppRouter } from './router.config'
import { createAppI18n } from './i18n.config'

const app = createApp(App)
// i18n
const i18n = createAppI18n()
// router
const router = createAppRouter()
// pinia
const pinia = createPinia()
// primevue
const { Primevue, config } = definePrimevue(app)

app.use(pinia)
app.use(Primevue, config)
app.use(router)
app.use(i18n)
app.mount('#app')
