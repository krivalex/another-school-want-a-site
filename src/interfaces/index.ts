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
  favourites: []
  status: 'client' | 'admin'
}
