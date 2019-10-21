<template>
  <q-layout view="hHh lpR fFf">
    <app-header />
    <div class="q-pa-md">
      <div
        class="q-gutter-y-md column"
        style="max-width: 600px"
      >
        <q-toggle
          v-model="dense"
          label="Dense QInput"
        />

        <q-input
          v-model="title"
          id="title"
          type="text"
          label="title"
          :dense="dense"
        />
        <q-input
          v-model="url"
          id="url"
          type="text"
          label="url"
          :dense="dense"
        />

        <q-input
          v-model="img"
          id="img"
          type="text"
          label="img"
          :dense="dense"
        />
        <q-input
          v-model="background"
          id="background"
          type="text"
          label="background"
          :dense="dense"
        />
        <q-input
          v-model="color"
          id="color"
          type="text"
          label="color"
          :dense="dense"
        />
        <q-input
          v-model="desc1"
          id="desc1"
          type="text"
          label="desc1"
          :dense="dense"
        />
        <q-input
          v-model="desc2"
          id="title"
          type="desc2"
          label="desc1"
          :dense="dense"
        />

        <q-input
          v-model="desc3"
          id="desc3"
          type="text"
          label="desc3"
          :dense="dense"
        />
        <q-input
          v-model="desc4"
          id="desc4"
          type="text"
          label="desc4"
          :dense="dense"
        />

      </div>

      <q-btn
        color="purple"
        label="Create item"
        @click="createItem"
      />
    </div>
  </q-layout>
</template>
<script>
export default {
  data () {
    return {
      title: '',
      url: '',
      img: '',
      background: '',
      color: '',
      desc1: '',
      desc2: '',
      desc3: '',
      desc4: '',
      dense: false,
      resource: null
    }
  },
  methods: {
    createItem () {
      const item = {
        title: this.title,
        url: this.url,
        img: this.img,
        background: this.background,
        color: this.color,
        desc1: this.desc1,
        desc2: this.desc2,
        desc3: this.desc3,
        desc4: this.desc4
      }
      const headers = {
        'Content-Type': 'application/json'
      }
      return fetch(this.$urlReq, {
        method: 'POST',
        body: JSON.stringify(item),
        headers: headers
      }).then(response => {
        if (response.ok) {
          this.$router.push('port')
          return response.json()
        } else {
          return response.json().then(error => {
            const e = new Error('Что то пошло не так, ошибка: ' + response.status)
            e.data = error
            throw e
          })
        }
      })
    }
  }
}
</script>
