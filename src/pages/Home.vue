<template >
  <div id="app">
    <q-layout view="hHh lpR fFf">
      <q-page-container>
        <h1 class="main_header">Сайт-Портфолио Разработчика</h1>
        <p class="main_content">Разработка сайтов с нуля/ Доработка готовых сайтов / Адаптация под Word Press /SEO оптимизация сайтов / Продвижение сайтов</p>
      </q-page-container>
      <q-btn
        class="main_btn"
        label="вход"
        stack
        glossy
        color="purple-9"
        size="lg"
        to="/port"
      />
    </q-layout>
  </div>
</template>

<script>
export default {}
</script>
<style lang="scss" scoped>
* {
  margin-top: 0;
}
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: silver;
  background: rgba(15, 6, 28, 0.8) url("../statics/front1.jpg");
  background-blend-mode: soft-light;
  min-height: 100vh;
  background-size: cover;
  background-position: center;
}
.main {
  &_header {
    padding-top: 25vh;
    text-transform: uppercase;
    font-size: 4vw;
  }
  &_content {
    padding: 1rem 15rem 1rem 15rem;
    color: white;
    font-size: 1.1vw;
    letter-spacing: 1vh;
  }
}
</style>
