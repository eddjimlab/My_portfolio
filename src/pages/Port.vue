<template>
  <q-layout view="hHh lpR fFf">
    <app-header />
    <q-page-container>
      <div
        v-for="(item,i) in items"
        :key="i"
        class="row item"
        :style="{background: item.background}"
      >
        <div class="col-8 item_wrap">
          <q-img
            :src="item.img"
            spinner-color="white"
            class="item_wrap_image"
          />
        </div>
        <div class="col-4 wrap">
          <q-card
            bordered
            class="wrap_my-card"
          >
            <q-card-section>
              <div class="text-h4">{{item.title}}</div>
              <q-card-section>{{ item.desc1 }}</q-card-section>
              <q-card-section>{{ item.desc2 }}</q-card-section>
              <q-card-section>{{ item.desc3 }}</q-card-section>
              <q-card-section>{{ item.desc4 }}</q-card-section>

              <q-separator inset />
              <q-item
              v-if="item.url!=='#'"
                clickable
                tag="a"
                target="_blank"
                :href="item.url"
              >{{item.url}} </q-item>
            </q-card-section>

          </q-card>
        </div>
      </div>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
export default {
  data () {
    return {
      url: 'statics/item1.png',
      lorem: 'Lorem lorem lorem lorem lorem',
      items: [
        {
          title: 'Твой Новый Дом',
          url: 'https://myhome.spb.ru',
          img: 'statics/item1.png',
          background: '#ac3b66',
          color: 'white',
          desc1:
            'Сайт риэлтора, листинг объектов, блог, автопубликация в соц.сетях',
          desc2: 'Word Press',
          desc3: 'Scss, Gulp, PHP',
          desc4: 'Разработка шаблона, адапитная верстка.'
        },
        {
          title: 'MyHome',
          url: '#',
          img: 'statics/item2.png',
          color: 'White',
          background: 'rgb(73, 170, 244)',
          desc1: 'Сайт риэлтора',
          desc2: 'Node js, express, MongoDb, ejs',
          desc3: 'Passport, nodemailer',
          desc4: 'Фронт и бэк энд разработка сайта, адаптивная верстка'
        },
        {
          title: 'O-ZONE',
          url: '#',
          img: 'statics/item3.png',
          color: 'White',
          background: '#005bff',
          desc1: 'Проект интернет магазина',
          desc2: 'Js, Fetch API',
          desc3: 'Webpack',
          desc4: 'Фронт и бэк энд разработка сайта'
        }
      ]
    }
  }
}
</script>
<style lang="scss" scoped>
.item {
  // background: grey;
  display: flex;
  flex-direction: row;
  min-height: 100vh;
  &_wrap {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    &_image {
      max-width: 90%;
      height: 70vh;
      border-radius: 5px;
    }
  }
}

.wrap {
  display: flex;
  flex-direction: column;
  justify-content: center;
  &_my-card {
    width: 100%;
    max-width: 30vw;
    height: 70vh;
  }
}
</style>
