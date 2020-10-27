import Vue from 'vue'
import Vuex from 'vuex'
import auth from './module/auth';
import admin from './module/admin';
Vue.use(Vuex)

export default new Vuex.Store({
    modules:{
        auth,
        admin
    },
  state: {
    URI_API : process.env.VUE_APP_ROOT_API,
    test:'Hello'
  },
  mutations: {},
  actions: {
  }
})
