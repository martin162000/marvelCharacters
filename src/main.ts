import { createApp } from 'vue'
import './assets/scss/normalize.scss'
import './assets/scss/app.scss'
import App from './App.vue'
import router from './router'
import store from './store'

createApp(App).use(store).use(router).mount('#app')
