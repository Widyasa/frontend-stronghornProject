import './assets/main.css'
import './assets/js/popper.min'
import './assets/js/bootstrap'
import './assets/js/config'
import './assets/js/jquery-3.5.1'
import './assets/js/jquery.dataTables.min'
import './assets/js/script'
import './assets/vendor/bootstrap/js/bootstrap.bundle.min'



import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

const app = createApp(App)

app.use(router)

app.mount('#app')
