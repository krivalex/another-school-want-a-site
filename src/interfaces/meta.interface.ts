export interface DataTableField<T> {
  header: string
  field: keyof T
}

export interface CardDescription {
  header: string
  description: string
  imageLink: string
  color: string
  position: {
    left: string
    top: string
    rotate?: string
  }
}

export interface EducationProccessBlock {
  header: string
  desc: string
}

export type EducationProccess = Record<string, EducationProccessBlock>
