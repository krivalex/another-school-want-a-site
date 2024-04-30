import type { CardDescription, EducationProccess } from '@/interfaces'

export const sectionsPrettify: Record<string, string> = {
  'header-about': 'О нас',
  'all-courses': 'Наши предметы',
  'about-school': 'О школе',
  'full-education-process-section': 'Как мы учим?',
  'advantages-list': 'Процесс обучения',
  'trial-lesson': 'Пробное занятие',
  'all-teachers': 'Наши учителя'
}

export const cardsEvents: CardDescription[] = [
  {
    header: 'ШКОЛА ПОЛНОГО ДНЯ',
    description: 'Ваш ребенок находится в школе в течение полного учебного дня, с 08:00 до 18:00.',
    imageLink:
      'https://img.freepik.com/premium-vector/school-building-design-vector-illustrator_24640-49040.jpg',
    color: '#e575f9',
    position: {
      left: '10%',
      top: '10%',
      rotate: '10deg'
    }
  },
  {
    header: 'ПИТАНИЕ',
    description: 'Вашему ребенку предоставляется сбалансированное 4-разовое питание.',
    imageLink:
      'https://u7.uidownload.com/vector/805/290/vector-healthy-food-illustration-vectors-06-eps.jpg',
    color: '#a996cc',
    position: {
      left: '15%',
      top: '50%',
      rotate: '1deg'
    }
  },
  {
    header: 'ВЫПОЛНЕНИЕ ДОМАШНИХ ЗАДАНИЙ',
    description: 'Ваш ребенок выполняет домашние задания в школе вместе с учителем',
    imageLink: 'https://fsd.multiurok.ru/html/2016/12/16/s_585420ec8fe5b/508433_1.jpeg',
    color: '#FF9800',
    position: {
      left: '65%',
      top: '10%',
      rotate: '-7deg'
    }
  },
  {
    header: 'БЕЗОПАСНОСТЬ + КОМФОРТ',
    description: 'Ваш ребенок находится в безопасной и комфортной среде.',
    imageLink:
      'https://www.fao.org/fileadmin/templates/medium/images/cover/medium_6_990e7343afc299284f29b14a428de93c.jpg',
    color: '#4CAF50',
    position: {
      left: '70%',
      top: '50%',
      rotate: '10deg'
    }
  },
  {
    header: 'НАСЫЩЕННАЯ ЖИЗНЬ',
    description: 'У вашего ребенка интересная и насыщенная школьная жизнь.',
    imageLink:
      'https://img.freepik.com/premium-vector/life-is-life-creative-lettering-for-design-and-creative-design-vector-design_786748-3111.jpg',
    color: '#00BCD4',
    position: {
      left: '35%',
      top: '10%',
      rotate: '-1deg'
    }
  },
  {
    header: 'ФЛАГМАН',
    description:
      'это не просто школа, это место, где ваш ребенок будет наслаждаться каждым моментом своего детства.',
    imageLink:
      'https://img.freepik.com/free-vector/futuristic-classroom-little-children-study-with-high-tech-equipment-smart-spaces-school-ai-education-learning-management-system-concept_335657-812.jpg',
    color: '#F44336',
    position: {
      left: '43%',
      top: '52%',
      rotate: '5deg'
    }
  }
]

export const educationProcessEvents: EducationProccess = {
  plan: {
    header: 'Индивидуальный план обучения',
    desc: `
    План обучения составляется с учетом целей ученика, его уровня знаний и preferred learning style.
     План может быть изменен в процессе обучения, если это необходимо.
    `
  },
  progress: {
    header: 'Занятия',
    desc: `
      Занятия проходят в мини-группах (до 15-20 человек).
      Это позволяет учителю уделитьвнимание каждому ученику.
      На уроках используются различные методы обучения, такие как: 
      Объяснение нового материала Практические упражнения Игры Дискуссии
    `
  },
  diagnostic: {
    header: 'Диагностика',
    desc: `
     Перед началом обучения проводится диагностика уровня знаний ученика.
     Это позволяет определить его strengths and weaknesses and develop an individual learning plan.
    `
  },
  control: {
    header: 'Контроль знаний',
    desc: `
      Проводится регулярный контроль знаний, чтобы отслеживать прогресс ученика.
      Контроль знаний может проходить в форме тестов, контрольных работ, устных ответов и т.д.
    `
  },
  homework: {
    header: 'Домашняя работа',
    desc: `
      Домашняя работа назначается после каждого урока.
      Это позволяет ученику закрепить полученные знания и умения.
      Учитель проверяет домашнюю работу и дает обратную связь.
    `
  },
  feedback: {
    header: 'Обратная связь',
    desc: `
     <span>Учителя школы "Flagman" всегда готовы дать обратную связь ученикам и их родителям.</span>
     <span>Это позволяет улучшить процесс обучения и сделать его более эффективным. Преимущества обучения в школе "Flagman": </span>
     <span><strong>Индивидуальный подход:</strong> К каждому ученику применяется индивидуальный подход, что позволяет ему максимально эффективно усваивать материал. </span>
     <span><strong>Современные методы обучения:</strong> В школе используются современные методы обучения, которые делают процесс обучения интересным и эффективным. </span>
     <span><strong>Опытные преподаватели:</strong> Все учителя школы имеют высшее образование и большой опыт работы.</span>
     <span><strong>Доступные цены:</strong> Стоимость обучения в школе "Flagman" доступна для всех.</span>
    `
  }
}

export const classes = [
  { label: '1', value: '1' },
  { label: '2', value: '2' },
  { label: '3', value: '3' },
  { label: '4', value: '4' },
  { label: '5', value: '5' },
  { label: '6', value: '6' },
  { label: '7', value: '7' },
  { label: '8', value: '8' },
  { label: '9', value: '9' },
  { label: '10', value: '10' },
  { label: '11', value: '11' }
]
