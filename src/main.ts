import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import { initializeApp } from 'firebase/app'

import PrimeVue from 'primevue/config'
import 'primevue/resources/themes/lara-dark-indigo/theme.css'
import 'primevue/resources/primevue.min.css'
import 'primeicons/primeicons.css'

import App from './App.vue'
import router from './router'

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyC570THufQDYcdWL9vKZNj_E752WrjajKI',
  authDomain: 'flagmanschool-e1a60.firebaseapp.com',
  projectId: 'flagmanschool-e1a60',
  storageBucket: 'flagmanschool-e1a60.appspot.com',
  messagingSenderId: '899500885978',
  appId: '1:899500885978:web:e9f2d7745d24387d7c22e3'
}

initializeApp(firebaseConfig)
const app = createApp(App)

app.use(PrimeVue)
app.use(createPinia())
app.use(router)

app.mount('#app')
