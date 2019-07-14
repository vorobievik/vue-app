import Vue from 'vue'
import './plugins/vuetify'
import App from './App.vue'
import router from './router/index.js'
import Vuetify from 'vuetify'


Vue.use(Vuetify)

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  router
}).$mount('#app')