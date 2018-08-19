// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import Vuetify from 'vuetify'
import 'vuetify/dist/vuetify.min.css'
import firebase from 'firebase'
import VueFire from 'vuefire'
import { sync } from 'vuex-router-sync'
import store from './store/store'
import Axios from 'axios'
// import './../node_modules/bulma/css/bulma.css'

Vue.use(Vuetify)
Vue.use(VueFire)
Vue.use(Axios)
// require('./assets/main.scss')

Vue.config.productionTip = false

var config = require('./modules/firebase.js') // Cria um modulo e importa aqui

firebase.initializeApp(config)

sync(store, router)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: {
    App
  },
  template: '<App/>'
})
