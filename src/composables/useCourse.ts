import {
  getDocs,
  addDoc,
  doc,
  collection,
  type DocumentData,
  deleteDoc,
  updateDoc
} from 'firebase/firestore'
import { db } from '@/firebase-config'
import { ref, computed } from 'vue'
import { useUser } from './useUser'
import * as firebase from 'firebase/storage'
import { getStorage, uploadBytes } from 'firebase/storage'

const course = ref()
const courseList = ref([] as DocumentData)

const newCourse = ref({
  id: Date.now().toString(),
  author: '' as any,
  image: '' as any
})

export const useContent = () => {
  const yourDatabase = 'courses'

  const loading = ref({
    course: false,
    courseList: false,
    newCourse: false
  })

  async function getAllContent() {
    loading.value.courseList = true
    courseList.value.length = 0
    try {
      const querySnapshot = await getDocs(collection(db, yourDatabase))
      querySnapshot.forEach((doc) => {
        const compressive = {
          firebaseId: doc.id,
          ...doc.data()
        }
        courseList.value.push(compressive)
      })
      loading.value.courseList = false
    } catch (error) {
      console.error(error)
    }
  }

  async function getContentById(id: string) {
    loading.value.course = true
    try {
      const querySnapshot = await getDocs(collection(db, yourDatabase))
      course.value = querySnapshot.docs.map((doc) => doc.data()).find((item: any) => item.id === id)
      loading.value.course = false
    } catch (error) {
      console.error(error)
    }
  }

  async function addContent() {
    const { userToObject } = useUser()
    loading.value.newCourse = true
    try {
      if (newCourse.value && userToObject.value) {
        newCourse.value.author = userToObject.value
        await addDoc(collection(db, yourDatabase), newCourse.value)
        loading.value.newCourse = false
      }
    } catch (error) {
      console.error(error)
    }
  }

  async function deleteDocById(firebaseId: string) {
    loading.value.course = true
    try {
      await deleteDoc(doc(db, yourDatabase, firebaseId))
      loading.value.course = false
    } catch (error) {
      console.error(error)
    }
  }

  async function uploadImage(file: any) {
    console.log(file)
    const storage = getStorage()
    console.log(storage)
    const storageRef = firebase.ref(storage, 'hobbies/' + file.name)
    console.log(storageRef)

    uploadBytes(storageRef, file)
      .then(() => {
        console.log('Файл успешно загружен!')

        firebase
          .getDownloadURL(storageRef)
          .then((downloadURL) => {
            newCourse.value.image = downloadURL
          })
          .catch((error) => {
            console.error('Ошибка получения ссылки на загруженный файл:', error)
          })
      })
      .catch((error) => {
        console.error('Ошибка загрузки файла:', error)
      })
  }

  async function load() {
    await getAllContent()
  }

  return {
    course,
    courseList,
    loading,
    newCourse,
    getAllContent,
    getContentById,
    addContent,
    deleteDocById,
    load
  }
}
