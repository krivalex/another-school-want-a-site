export const schema: Record<string, string> = {
  class: '',
  course: 'required',
  childrenName: 'required',
  parentName: 'required',
  phone: 'required',
  age: 'required'
}

export const types: Record<string, string> = {
  parentName: 'input',
  childrenName: 'input',
  phone: 'mask',
  age: 'number',
  class: 'dropdown',
  course: 'dropdown'
}

export const localizition: Record<string, string> = {
  parentName: 'Ваше имя',
  childrenName: 'Имя ребенка',
  phone: 'Номер телефона',
  age: 'Возраст ребенка',
  class: 'В каком классе ребенок?',
  course: 'Выберите курс'
}
