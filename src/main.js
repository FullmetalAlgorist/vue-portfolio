import Vue from 'vue'
import './plugins/base'
import './plugins/vuetify'
import App from './App.vue'
import router from './router'
import store from './store'
import Lightbox from 'vue-my-photos'
// import axios from 'axios'
Vue.component('lightbox', Lightbox);
// import KsVueScrollmagic from 'ks-vue-scrollmagic'
// Vue.prototype.$http = axios
// Vue.use(KsVueScrollmagic)
Vue.config.productionTip = false
 
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
