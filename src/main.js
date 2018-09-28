import Vue from 'vue'
import App from './App'
import router from './router'
import Vuetify from 'vuetify'
import store from './store'
import * as fb from 'firebase/app'
import 'vuetify/dist/vuetify.min.css'

Vue.use(Vuetify)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({

  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>',
  created () {
    // Initialize Firebase
    var config = {
      apiKey: 'AIzaSyBuKGpAFljLXuKc5__xH_qWDjoCMWnvbM0',
      authDomain: 'onlinestore-11409.firebaseapp.com',
      databaseURL: 'https://onlinestore-11409.firebaseio.com',
      projectId: 'onlinestore-11409',
      storageBucket: 'onlinestore-11409.appspot.com',
      messagingSenderId: '168041396756'
    }
    fb.initializeApp(config)
  }
})
