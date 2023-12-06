import type { Course } from '@/interfaces'

export const initNewCourse: Course = {
  id: Date.now().toString(),
  author: '',
  image: '',
  created: new Date(),
  title: '',
  shortDescription: '',
  longDescription: '',
  duration: '',
  teachers: [],
  teachearsDesc: '',
  age: {
    start: 0,
    end: 0
  }
}
