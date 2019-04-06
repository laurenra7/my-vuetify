import Vue from 'vue'
// import './plugins/vuetify'
// import Vuetify from 'vuetify/lib'
import App from './App.vue'

// Vue.use(Vuetify, {
//   iconfont: 'md'
// })

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
