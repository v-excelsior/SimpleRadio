import Vue from 'vue'
import App from './App.vue'

import '@/style/style.scss'
import '@babel/polyfill'
import vuetify from './plugins/vuetify'

import firebaseConfig from './config/firebase'
import firebase from 'firebase/app'
import 'firebase/database'
import store from './store'

firebase.initializeApp(firebaseConfig)

Vue.config.productionTip = false

const database = firebase.database();
database

new Vue({
    vuetify,
    store,
    render: h => h(App),
}).$mount('#app')
