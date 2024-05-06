import { createApp } from 'vue'
import './style.css'
import App from './App.vue'

//fontawesome
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { far } from '@fortawesome/free-regular-svg-icons'
import { fas } from '@fortawesome/free-solid-svg-icons'
library.add(fab)
library.add(far)
library.add(fas)
const Capp = createApp(App)
Capp.component('font-awesome-icon', FontAwesomeIcon)
Capp.mount('#app')
