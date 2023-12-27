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
import { ref, reactive } from 'vue'
import { useUser } from './useUser'
import * as firebase from 'firebase/storage'
import { getStorage, uploadBytes } from 'firebase/storage'
import type { Course } from '@/interfaces'
import { initNewCourse } from '@/logics'

const course = ref<Course | DocumentData>()
const selectedCourse = ref<Course>()
const courseList = ref<Course[]>([])
const visibleAddModal = ref(false)

const newCourse = ref<Course>(initNewCourse)

const loading = reactive({
  course: false,
  courseList: false,
  newCourse: false
})

export const useCourse = () => {
  const yourDatabase = 'courses'

  async function getAllContent() {
    loading.courseList = true
    courseList.value = []
    try {
      const querySnapshot = await getDocs(collection(db, yourDatabase))
      querySnapshot.forEach((doc) => {
        const compressive = {
          firebaseId: doc.id,
          ...doc.data()
        }
        courseList.value.push(compressive as Course)
      })
      loading.courseList = false
    } catch (error) {
      console.error(error)
    }
  }

  async function getContentById(id: string) {
    loading.course = true
    try {
      const querySnapshot = await getDocs(collection(db, yourDatabase))
      course.value = querySnapshot.docs.map((doc) => doc.data()).find((item: any) => item.id === id)
      loading.course = false
    } catch (error) {
      console.error(error)
    }
  }

  async function addContent() {
    // const { userToObject } = useUser()
    loading.newCourse = true
    try {
      if (newCourse.value) {
        newCourse.value.id = Date.now().toString()
        await addDoc(collection(db, yourDatabase), newCourse.value)
        loading.newCourse = false
      }
    } catch (error) {
      console.error(error)
    }
  }

  async function deleteDocById(firebaseId: string) {
    loading.course = true
    try {
      await deleteDoc(doc(db, yourDatabase, firebaseId))
      loading.course = false
    } catch (error) {
      console.error(error)
    }
  }

  async function uploadImage(file: any) {
    const storage = getStorage()
    const storageRef = firebase.ref(storage, 'courses/' + file.name)

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

  function clearContent() {
    newCourse.value = initNewCourse
    visibleAddModal.value = false
  }

  const toggleVisibleAddCourse = () => {
    visibleAddModal.value = !visibleAddModal.value
  }

  return {
    course,
    courseList,
    loading,
    newCourse,
    visibleAddModal,
    toggleVisibleAddCourse,
    getAllContent,
    getContentById,
    addContent,
    deleteDocById,
    load,
    uploadImage,
    clearContent
  }
}
