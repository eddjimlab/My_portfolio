import Vue from 'vue'
import VueResource from 'vue-resource'

Vue.use(VueResource)
Vue.http.options.root = 'http://localhost:3000/'
Vue.prototype.$urlReq = 'http://localhost:3000/items/'
