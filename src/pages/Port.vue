<template>
  <q-layout view="hHh lpR fFf">
    <app-header />
    <q-page-container>
      <div
        v-for="item in items"
        :key="item.id"
        class="row item"
        :style="{background: item.background}"
      >
        <div class="col-8 item_wrap">
          <q-img
            :src="`/statics/${item.img}`"
            spinner-color="white"
            class="item_wrap_image"
          />
        </div>
        <div class="col-4 wrap">
          <q-card
            bordered
            class="wrap_my-card"
          >
            <q-card-section id="card">
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
        <!-- <q-btn
          id="btnU"
          flat
          size="xs"
          color="warning"
          label="Update"
          @click="updateItem"
        /> -->
        <q-btn
          id="btnD"
          size="sm"
          color="deep-orange"
          label="Delete"
          @click="deleteItem(item)"
        />
      </div>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
export default {
  data () {
    return {
      items: []
    }
  },
  methods: {
    getItems () {
      this.resource.get().then(response => response.json())
        .then(items => {
          this.items = items
        })
    },
    deleteItem (item) {
      this.$http.delete('items' + '/' + item.id).then(res => {
        this.$router.go()
      })
    }
  },
  created () {
    this.resource = this.$resource('items/')
    this.getItems()
  }
  // mounted () {
  //   this.getItems()
  // }
}
</script>
<style lang="scss" scoped>
.item {
  // background: grey;
  display: flex;
  flex-direction: row;
  min-height: 100vh;
  position: relative;
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
#btnU {
  position: absolute;
  bottom: 0;
}
#btnD {
  position: absolute;
  bottom: 0;
  right: rem;
}
</style>
