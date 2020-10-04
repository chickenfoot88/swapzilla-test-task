import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify'
import './global-components'
import '@/styles/utility.css'
import '@/styles/animation.css'

Vue.config.productionTip = false

new Vue({
  vuetify,
  render: h => h(App)
}).$mount('#app')
