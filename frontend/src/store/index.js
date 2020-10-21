import Vue from 'vue'
import Vuex from 'vuex'
import axios from './module/axios';
Vue.use(Vuex)

export default new Vuex.Store({
    modules:{
        axios
    },
  state: {},
  mutations: {},
  actions: {
  }
})
