import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify'


import '@/style/style.scss'
import '@babel/polyfill'

Vue.config.productionTip = false

new Vue({
    vuetify,
    render: h => h(App)
}).$mount('#app')
