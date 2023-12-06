import type { Course } from '@/interfaces'

export const initNewCourse: Course = {
  id: Date.now().toString(),
  author: '',
  image: '',
  created: new Date(),
  title: '',
  description: '',
  duration: '',
  teachers: [],
  teachearsDesc: '',
  age: ''
}
