import Vue from 'vue'
import App from './App.vue'
import { Quasar } from 'quasar'
import 'quasar/dist/quasar.css'

Vue.config.productionTip = false

Vue.use(Quasar)

new Vue({
  render: h => h(App)
}).$mount('#app')
