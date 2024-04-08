import type { Teacher } from '@/interfaces'
import { initNewTeacher } from '@/logics'
import { db } from '@/firebase-config'
import { addDoc, collection, getDocs, type DocumentData } from 'firebase/firestore'
import { reactive, ref } from 'vue'
import { getStorage, uploadBytes } from 'firebase/storage'
import * as firebase from 'firebase/storage'

const teacher = ref<Teacher | DocumentData>()
const teacherList = ref([] as DocumentData)
const newTeacher = ref<Teacher>(initNewTeacher)
const visibleAddTeacherModal = ref(false)

const loading = reactive({
  allTeacher: false,
  teacher: false,
  newTeacher: false
})

export const useTeacher = () => {
  const yourDatabase = 'teachers'

  async function getAllTeacher() {
    loading.allTeacher = true
    teacherList.value = []
    try {
      const querySnapshot = await getDocs(collection(db, yourDatabase))
      querySnapshot.forEach((doc) => {
        const compressive = {
          firebaseId: doc.id,
          ...doc.data()
        }
        teacherList.value.push(compressive as Teacher)
      })
      loading.allTeacher = false
    } catch (error) {
      console.error(error)
    }
  }

  async function getTeacherById(id: string) {
    loading.teacher = true
    try {
      const querySnapshot = await getDocs(collection(db, yourDatabase))
      teacher.value = querySnapshot.docs
        .map((doc) => doc.data())
        .find((item: any) => item.id === id)
      loading.teacher = false
    } catch (error) {
      console.error(error)
    }
  }

  async function addTeacher() {
    loading.newTeacher = true
    try {
      await addDoc(collection(db, yourDatabase), newTeacher.value)
      loading.newTeacher = false
    } catch (error) {
      console.error(error)
    }
  }

  function clearTeacher() {
    newTeacher.value = initNewTeacher
  }

  const toggleVisibleAddTeacher = () => {
    visibleAddTeacherModal.value = !visibleAddTeacherModal.value
  }

  async function uploadImage(file: any) {
    const storage = getStorage()
    const storageRef = firebase.ref(storage, 'teachers/' + file.name)

    uploadBytes(storageRef, file)
      .then(() => {
        console.log('Файл успешно загружен!')

        firebase
          .getDownloadURL(storageRef)
          .then((downloadURL) => {
            newTeacher.value.image = downloadURL
          })
          .catch((error) => {
            console.error('Ошибка получения ссылки на загруженный файл:', error)
          })
      })
      .catch((error) => {
        console.error('Ошибка загрузки файла:', error)
      })
  }

  return {
    teacher,
    teacherList,
    newTeacher,
    visibleAddTeacherModal,
    loading,
    getAllTeacher,
    getTeacherById,
    addTeacher,
    clearTeacher,
    toggleVisibleAddTeacher,
    uploadImage
  }
}
