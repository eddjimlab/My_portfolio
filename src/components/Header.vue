<template>
  <div class="header">
    <q-header elevated class="bg-primary text-white">
      <q-toolbar>
        <q-btn dense flat round icon="menu" @click="left = !left" />
          <q-avatar></q-avatar>
          <q-btn to="/" stretch flat size="18px" tag="span" label="Batsev Art"/>
        <q-space/>
        <q-tabs class="q-px-lg" v-model="tab" shrink>
          <!-- <q-route-tab name="Home" label="Главная" to="/" /> -->
          <q-route-tab name="Port" label="Портфолио" to="port" />
          <q-route-tab name="About" label="Обо мне" to="about" />
          <q-route-tab name="Contacts" label="Котнакты" to="contacts" />
          <q-route-tab name="Form" label="Form" to="form" />
        </q-tabs>
      </q-toolbar>
    </q-header>
    <q-drawer  v-model="left" side="left" bordered content-class="bg-grey-2">
      <q-list>
        <q-item-label header>Что то в заголовке</q-item-label>
        <q-item clickable tag="a" target="_blank" href="/">
          <q-item-section avatar>
            <q-icon name="school" />
          </q-item-section>
          <q-item-section>
            <q-item-label>Docs</q-item-label>
            <q-item-label caption>quasar.dev</q-item-label>
          </q-item-section>
        </q-item>
        <q-item clickable tag="a" target="_blank" href="https://github.quasar.dev">
          <q-item-section avatar>
            <q-icon name="code" />
          </q-item-section>
          <q-item-section>
            <q-item-label>Github</q-item-label>
            <q-item-label caption>github.com/quasarframework</q-item-label>
          </q-item-section>
        </q-item>
        <q-item clickable tag="a" target="_blank" href="https://chat.quasar.dev">
          <q-item-section avatar>
            <q-icon name="chat" />
          </q-item-section>
          <q-item-section>
            <q-item-label>Discord Chat Channel</q-item-label>
            <q-item-label caption>chat.quasar.dev</q-item-label>
          </q-item-section>
        </q-item>
        <q-item clickable tag="a" target="_blank" href="https://forum.quasar.dev">
          <q-item-section avatar>
            <q-icon name="record_voice_over" />
          </q-item-section>
          <q-item-section>
            <q-item-label>Forum</q-item-label>
            <q-item-label caption>forum.quasar.dev</q-item-label>
          </q-item-section>
        </q-item>
        <q-item clickable tag="a" target="_blank" href="https://twitter.quasar.dev">
          <q-item-section avatar>
            <q-icon name="rss_feed" />
          </q-item-section>
          <q-item-section>
            <q-item-label>Twitter</q-item-label>
            <q-item-label caption>@quasarframework</q-item-label>
          </q-item-section>
        </q-item>
        <q-item clickable tag="a" target="_blank" href="https://facebook.quasar.dev">
          <q-item-section avatar>
            <q-icon name="public" />
          </q-item-section>
          <q-item-section>
            <q-item-label>Facebook</q-item-label>
            <q-item-label caption>@QuasarFramework</q-item-label>
          </q-item-section>
        </q-item>
      </q-list>
    </q-drawer>
  </div>
</template>

<script>
export default {
  data () {
    return {
      left: false,
      tab: ''
    }
  }
}
</script>
