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
  }
}
