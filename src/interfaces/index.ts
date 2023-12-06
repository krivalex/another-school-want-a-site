export interface Course {
  id: string
  author: User | string
  image: string
  created: Date
  title: string
  description: string
  duration: string
  teachers: []
  teachearsDesc: string
  age: number[] | string
}

export interface User {
  uid: string
  email: string
  displayName: string
  photoURL: string
  favourites: []
  status: 'client' | 'admin'
}
