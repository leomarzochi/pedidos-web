// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import Vuetify from 'vuetify'
import 'vuetify/dist/vuetify.min.css'
import firebase from 'firebase'

Vue.use(Vuetify)

Vue.config.productionTip = false

var config = {
  apiKey: 'AIzaSyDVZm0B-6K4TlVbTPKX75dXBHZgLoWqfPs',
  authDomain: 'pedidos-web-a7288.firebaseapp.com',
  databaseURL: 'https://pedidos-web-a7288.firebaseio.com',
  projectId: 'pedidos-web-a7288',
  storageBucket: 'pedidos-web-a7288.appspot.com',
  messagingSenderId: '473217494434'
}
firebase.initializeApp(config)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: {
    App
  },
  template: '<App/>'
})
