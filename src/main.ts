import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import { initializeApp } from 'firebase/app'

import PrimeVue from 'primevue/config'
import 'primevue/resources/themes/mdc-light-deeppurple/theme.css'
import 'primevue/resources/primevue.min.css'
import 'primeicons/primeicons.css'

import {
  required,
  min,
  max,
  email,
  url,
  numeric,
  length,
  digits,
  between,
  integer,
  is,
  is_not as isNot
} from '@vee-validate/rules'
import { defineRule, configure } from 'vee-validate'
import { localize } from '@vee-validate/i18n'

import App from './App.vue'
import router from './router'

defineRule('required', required)
defineRule('min', min)
defineRule('max', max)
defineRule('numeric', numeric)
defineRule('email', email)
defineRule('url', url)
defineRule('length', length)
defineRule('digits', digits)
defineRule('between', between)
defineRule('integer', integer)
defineRule('is', is)
defineRule('is_not', isNot)
defineRule('digitsBetween', digits)

configure({
  generateMessage: localize('ru', {
    messages: {
      required: 'Поле обязательно для заполнения',
      min: 'Минимальное значение {length}',
      max: 'Максимальное значение {length}',
      numeric: 'Должно быть числом',
      email: 'Некорректный email',
      url: 'Некорректный URL',
      length: 'Длина должна быть {length} символов',
      digits: 'Длина должна быть {length} символов и содержать только цифры',
      between: 'Должно быть между {min} и {max}',
      integer: 'Должно быть целым числом',
      is: 'Должно быть {value}',
      is_not: 'Не должно быть {value}',
      digitsBetween: 'Должно быть {params} цифр или пустое'
    }
  })
})

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
