import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default  new Vuex.Store({
  state: {
    user: JSON.parse(localStorage.getItem('user')) || null,
    token: localStorage.getItem('token') || null,
    roles: localStorage.getItem('roles') || null,
    permissions: localStorage.getItem('permissions') || null,
    cart_log: JSON.parse(localStorage.getItem('cart_log')),
    cart_reg: JSON.parse(localStorage.getItem('cart_reg')),
    cart_tr: JSON.parse(localStorage.getItem('cart_tr'))
  },

});
