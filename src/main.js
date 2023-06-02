import { createApp } from 'vue'
import App from '@/App.vue'
import router from './router'
import store from './store'
import './style.css'
import Unicon from 'vue-unicons'
import { uniHeartSign } from 'vue-unicons/dist/icons'

Unicon.add([uniHeartSign])

createApp(App).use(router).use(store).use(Unicon).mount('#app')

