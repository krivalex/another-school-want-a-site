import { getFirestore } from 'firebase/firestore'
import { getStorage } from 'firebase/storage'

import { initializeApp } from 'firebase/app'

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyC570THufQDYcdWL9vKZNj_E752WrjajKI',
  authDomain: 'flagmanschool-e1a60.firebaseapp.com',
  projectId: 'flagmanschool-e1a60',
  storageBucket: 'flagmanschool-e1a60.appspot.com',
  messagingSenderId: '899500885978',
  appId: '1:899500885978:web:e9f2d7745d24387d7c22e3'
}

const app = initializeApp(firebaseConfig)

const db = getFirestore(app)
const storage = getStorage(app)

export { db, storage }
