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
      // this.$http.post('items', item)
      //   .then(response => {
      //     console.log(response)
      //     return response.json()
      //   })
      //   .then(newItem => {
      //     console.log(newItem)
      //   })
      this.resource.save({}, item)
      this.$router.push('port')
      this.$router.go()
    }
  },
  created () {
    this.resource = this.$resource('items')
  }
}
</script>
