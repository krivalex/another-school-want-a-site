import type { Teacher } from '@/interfaces'

export const createTeacherLabel = (teacher: Teacher) => {
  return `${teacher.name[0]}${teacher.surname[0]}`
}
