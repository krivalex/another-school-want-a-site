import type { Course, Request, Teacher } from '@/interfaces'

export const initNewCourse: Course = {
  id: Date.now().toString(),
  firebaseId: '',
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

export const initNewRequest: Request = {
  id: Date.now().toString(),
  author: '',
  date: new Date(),
  parentName: '',
  childrenName: '',
  phone: '',
  age: '' as any,
  class: '',
  course: '',
  status: 'created'
}

export const initNewTeacher: Teacher = {
  id: Date.now().toString(),
  firebaseId: '',
  name: '',
  surname: '',
  image: '',
  dateBorning: '',
  courses: [],
  timeToWork: '',
  phone: '',
  level: 'junior'
}
