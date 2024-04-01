<template>
  <section class="full-education-process">
    <span class="desc-text">Как мы учим?</span>
    <div class="education-process">
      <div class="row">
        <div class="column">
          <div class="block standart">
            <span class="header"> Индивидуальный план обучения </span>
            <span class="text">
              План обучения составляется с учетом целей ученика, его уровня знаний и preferred
              learning style. План может быть изменен в процессе обучения, если это необходимо.
            </span>
          </div>

          <div class="block standart">
            <span class="header"> Занятия </span>
            <span class="text">
              Занятия проходят в мини-группах (до 15-20 человек). Это позволяет учителю уделить
              внимание каждому ученику. На уроках используются различные методы обучения, такие как:
              Объяснение нового материала Практические упражнения Игры Дискуссии
            </span>
          </div>
        </div>

        <div class="big-vertical-block standart">
          <span class="header"> Диагностика </span>
          <span class="text">
            Перед началом обучения проводится диагностика уровня знаний ученика. Это позволяет
            определить его strengths and weaknesses and develop an individual learning plan.
          </span>
        </div>

        <div class="column">
          <div class="block standart">
            <span class="header"> Контроль знаний </span>
            <span class="text">
              Проводится регулярный контроль знаний, чтобы отслеживать прогресс ученика. Контроль
              знаний может проходить в форме тестов, контрольных работ, устных ответов и т.д.
            </span>
          </div>

          <div class="block standart">
            <span class="header"> Домашняя работа </span>
            <span class="text">
              Домашняя работа дается для закрепления материала, пройденного на уроке. Учитель делает
              домашнюю работу вместе с учениками и дает обратную связь.
            </span>
          </div>
        </div>
      </div>

      <div class="row">
        <div class="big-horizontal-block standart">
          <span class="header"> Обратная связь </span>
          <span class="text">
            Учителя школы "Flagman" всегда готовы дать обратную связь ученикам и их родителям. Это
            позволяет улучшить процесс обучения и сделать его более эффективным. Преимущества
            обучения в школе "Flagman": Индивидуальный подход: К каждому ученику применяется
            индивидуальный подход, что позволяет ему максимально эффективно усваивать материал.
            Современные методы обучения: В школе используются современные методы обучения, которые
            делают процесс обучения интересным и эффективным. Опытные преподаватели: Все учителя
            школы имеют высшее образование и большой опыт работы. Доступные цены: Стоимость обучения
            в школе "Flagman" доступна для всех.
          </span>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts"></script>

<style scoped lang="scss">
.full-education-process {
  background-image: url('https://kalix.club/uploads/posts/2022-12/1671735384_kalix-club-p-svetlii-delovoi-fon-dlya-prezentatsii-vkon-1.jpg');
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  width: 100vw;
  height: 100%;
}

.desc-text {
  font-family: 'Oswald', sans-serif;
  font-optical-sizing: auto;
  font-weight: 600;
  font-style: normal;
  font-size: 8rem;
  text-align: center;
  width: 100%;
  display: block;
}

.standart {
  background-color: rgba(255, 255, 255, 0.8);
  padding: 25px;
  border-radius: 20px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
}

.header {
  font-size: 2rem;
  font-weight: bold;
  margin-bottom: 15px;
  font-family: 'Oswald', sans-serif;
  font-optical-sizing: auto;
  font-weight: 600;
  font-style: normal;
  width: 100%;
  display: block;
  line-height: 1.2;
}

.text {
  font-size: 18px;
}

.big-vertical-block {
  width: 50%;
  height: 100%;
}

.big-horizontal-block {
  width: 100%;
  height: 50%;
}

.block {
  width: 100%;
  height: 50%;
}

.education-process {
  width: 70vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 0 auto;
  gap: 10px;

  .row {
    display: flex;
    flex-direction: row;
    width: 100%;
    height: 50%;
    gap: 10px;
  }

  .column {
    display: flex;
    flex-direction: column;
    width: 50%;
    height: 100%;
    gap: 10px;
  }
}
</style>
