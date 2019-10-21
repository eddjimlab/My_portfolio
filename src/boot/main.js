import Vue from 'vue'
import Axios from 'axios'

Vue.use(Axios)
Vue.http.options.root = 'http://localhost:3000/'
