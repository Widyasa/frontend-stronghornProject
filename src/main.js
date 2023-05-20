import './assets/main.css'
import './assets/js/popper.min'
import './assets/js/bootstrap'
import './assets/js/config'


import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

const app = createApp(App)

app.use(router)

app.mount('#app')
