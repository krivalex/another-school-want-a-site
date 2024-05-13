import { addDoc, collection, getDocs, type DocumentData } from 'firebase/firestore'
import { db } from '../firebase-config'
import { ref, computed, reactive } from 'vue'
import { GoogleAuthProvider, getAuth, signInWithPopup } from 'firebase/auth'
import type { User } from '../interfaces'
import { useRouter } from 'vue-router'

const user = ref<User | DocumentData | null>()
const userList = ref([] as DocumentData)

const loading = reactive({
  user: false,
  userList: false
})

const userToObject = computed((): User | null => {
  if (user.value) {
    return {
      uid: user.value.uid,
      email: user.value.email,
      displayName: user.value.displayName,
      photoURL: user.value.photoURL,
      status: user.value.status
    }
  }
  return null
})

export const useUser = () => {
  const router = useRouter()
  const auth = getAuth()
  const yourDatabase = 'users'

  const isAdmin = computed(() => {
    return user.value?.status === 'admin'
  })

  async function userChecker() {
    const result = await calculateLoginRegister()
    console.log(result)

    if (result === 'new user') {
      await addDoc(collection(db, yourDatabase), userToObject.value)
    } else {
      await getFromMainDatabase()
    }
    addToLocalStorage()
    router.push('/')
  }

  async function googleRegister() {
    const auth = getAuth()
    const provider = new GoogleAuthProvider()
    try {
      const result = await signInWithPopup(auth, provider)
      const resultUser = result.user
      user.value = {
        uid: resultUser.uid,
        email: resultUser.email,
        displayName: resultUser.displayName,
        photoURL: resultUser.photoURL
      }
      await userChecker()
    } catch (error) {
      console.error(error)
    }
  }

  async function calculateLoginRegister() {
    loading.user = true
    try {
      if (userToObject.value) {
        if (!checkUserInDatabase()) {
          return 'new user'
        } else {
          return 'already exist'
        }
      }
      loading.user = false
    } catch (error) {
      console.error(error)
    }
  }

  // получить всех юзеров
  async function getAllUsers() {
    loading.userList = true
    try {
      const querySnapshot = await getDocs(collection(db, yourDatabase))
      querySnapshot.forEach((doc) => {
        userList.value.push(doc.data())
      })
      loading.userList = false
    } catch (error) {
      console.error(error)
    }
  }

  // проверка есть ли юзер в базе данных
  function checkUserInDatabase() {
    return userList.value.some((item: any) => item.uid === userToObject.value?.uid)
  }

  // получить данные из базы данных
  async function getFromMainDatabase() {
    if (userList.value.length === 0) return
    user.value = userList.value.find((item: any) => item.uid === user.value?.uid)
  }

  function addToLocalStorage() {
    if (user.value) {
      localStorage.setItem('user', JSON.stringify(user.value))
    }
  }

  function getUserFromLocalStorage() {
    const userFromLocalStorage = localStorage.getItem('user')
    if (userFromLocalStorage) {
      user.value = JSON.parse(userFromLocalStorage)
    }
  }

  function removeFromLocalStorage() {
    localStorage.removeItem('user')
  }

  // выйти из гугла
  function googleLogout() {
    auth.signOut()
    user.value = null

    // удаляем из локал сторадж
    removeFromLocalStorage()
  }

  return {
    user,
    userList,
    loading,
    googleRegister,
    googleLogout,
    getAllUsers,
    userToObject,
    addToLocalStorage,
    getUserFromLocalStorage,
    removeFromLocalStorage,
    isAdmin
  }
}
