import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import { initializeApp } from 'firebase/app'

import PrimeVue from 'primevue/config'
import 'primevue/resources/themes/mdc-light-deeppurple/theme.css'
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

app.use(createPinia())
app.use(router)

app.use(PrimeVue, {
  locale: {
    dayNames: ['Воскресенье', 'Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота'],
    dayNamesShort: ['Вс', 'Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб'],
    dayNamesMin: ['Вс', 'Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб'],
    monthNames: [
      'Январь',
      'Февраль',
      'Март',
      'Апрель',
      'Май',
      'Июнь',
      'Июль',
      'Август',
      'Сентябрь',
      'Октябрь',
      'Ноябрь',
      'Декабрь'
    ],
    monthNamesShort: [
      'Янв',
      'Февр',
      'Март',
      'Апр',
      'Май',
      'Июнь',
      'Июль',
      'Авг',
      'Сент',
      'Окт',
      'Нояб',
      'Дек'
    ],
    today: 'Сегодня',
    firstDayOfWeek: 1,
    dateFormat: 'dd.mm.yy',
    clear: 'Очистить'
  }
})

app.mount('#app')
