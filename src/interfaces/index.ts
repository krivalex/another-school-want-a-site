export interface Course {
  id: string
  author: User | string
  image: string
  created: Date
  title: string
  longDescription: string
  shortDescription: string
  duration: string
  teachers: []
  firebaseId: string
  teachearsDesc: string
  age: {
    start: number
    end: number
  }
}

export interface User {
  uid: string
  email: string
  displayName: string
  photoURL: string
  status: 'client' | 'admin'
}

export interface Request {
  firebaseId?: string
  id: string
  author: User | string
  date: Date
  parentName: string
  childrenName: string
  phone: string
  age: string
  class: string
  course: string
  status: 'created' | 'in-work' | 'rejected' | 'completed'
}

export interface DataTableField<T> {
  header: string
  field: keyof T
}
