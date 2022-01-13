import Vue from 'vue'
import App from './App.vue'
import router from './router'
import VueRouter from 'vue-router'

import Default from "./layouts/default.vue";
import Auth from "./layouts/auth.vue";


Vue.component('Default',Default);
Vue.component('Auth',Auth);

Vue.use(VueRouter)
Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
