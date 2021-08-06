import 'primevue/resources/primevue.min.css'
import '@/assets/styles/main.scss'

import { createApp } from 'vue'
import App from './App.vue'
import PrimeVue from 'primevue/config'

createApp(App).use(PrimeVue).mount('#app')
