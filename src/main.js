import Vue from 'vue'
import App from './App.vue'

import '@/style/style.scss'
import '@babel/polyfill'
import vuetify from './plugins/vuetify'

import store from './store'
import router from './router'

Vue.config.productionTip = false

new Vue({
    vuetify,
    store,
    router,
    render: h => h(App)
}).$mount('#app')
