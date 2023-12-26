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
import { ref, reactive, computed } from 'vue'
import { useUser } from './useUser'
import * as firebase from 'firebase/storage'
import { getStorage, uploadBytes } from 'firebase/storage'
import type { Request } from '@/interfaces'
import { initNewRequest } from '@/logics'
import { dateFormmatter } from '@/utils'

const request = ref<Request | DocumentData>()
const requestList = ref([] as DocumentData)
const selectedRequest = ref<Request>()
const newRequest = ref<Request>(initNewRequest)
const visibleAddRequestModal = ref(false)

const loading = reactive({
  allRequest: false,
  request: false,
  newRequest: false
})

const requestComputed = computed(() => {
  if (!requestList.value) return
  const _requestList = requestList.value?.map((item: any) => {
    return {
      date: dateFormmatter(item.date),
      age: `${item.age} лет`,
      class: `${item.class} класс`,
      parentName: item.parentName,
      childrenName: item.childrenName,
      phone: item.phone,
      course: item.course
    }
  })
  return _requestList || []
})

export const useRequest = () => {
  const yourDatabase = 'requests'

  async function getAllRequest() {
    loading.allRequest = true
    requestList.value = []
    try {
      const querySnapshot = await getDocs(collection(db, yourDatabase))
      querySnapshot.forEach((doc) => {
        const compressive = {
          firebaseId: doc.id,
          ...doc.data()
        }
        requestList.value.push(compressive as Request)
      })
      loading.allRequest = false
    } catch (error) {
      console.error(error)
    }
  }

  async function getRequestById(id: string) {
    loading.request = true
    try {
      const querySnapshot = await getDocs(collection(db, yourDatabase))
      request.value = querySnapshot.docs
        .map((doc) => doc.data())
        .find((item: any) => item.id === id)
      loading.request = false
    } catch (error) {
      console.error(error)
    }
  }

  async function addRequest() {
    // const { userToObject } = useUser()
    loading.newRequest = true
    try {
      if (newRequest.value) {
        await addDoc(collection(db, yourDatabase), newRequest.value)
        loading.newRequest = false
      }
    } catch (error) {
      console.error(error)
    }
  }

  function clearRequest() {
    newRequest.value = initNewRequest
    visibleAddRequestModal.value = false
  }

  const toggleVisibleAddRequest = () => {
    visibleAddRequestModal.value = !visibleAddRequestModal.value
  }

  return {
    request,
    requestList,
    newRequest,
    loading,
    visibleAddRequestModal,
    selectedRequest,
    toggleVisibleAddRequest,
    clearRequest,
    getAllRequest,
    getRequestById,
    addRequest,
    requestComputed
  }
}
