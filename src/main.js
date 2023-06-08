import './assets/main.css'
import './assets/js/popper.min'
import './assets/js/bootstrap'
import './assets/js/config'
import './assets/vendor/jquery/jquery.min'
import './assets/vendor/bootstrap/js/bootstrap.bundle.min'
import './assets/vendor/jquery-easing/jquery.easing.min'
import './assets/js/sb-admin-2.min'
import './assets/vendor/datatables/jquery.dataTables.min'
import './assets/vendor/datatables/dataTables.bootstrap4.min'
import './assets/js/demo/datatables-demo'


import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

const app = createApp(App)

app.use(router)

app.mount('#app')
