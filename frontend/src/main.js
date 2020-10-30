import Vue from 'vue'
import App from './App.vue'
import axios from 'axios'
import store from './store/index'
import router from './router/index'
import ConsoleLogPluggin from './helpers/clog'

Vue.prototype.$DEBUG = process.env.NODE_ENV !== "production";
Vue.config.productionTip = false
axios.defaults.baseURL = process.env.VUE_APP_ROOT_API



Vue.use(ConsoleLogPluggin);

new Vue({
  store,
  router,
  created() {
    
    const userString = localStorage.getItem('user');
    if (userString) {
      const userData = JSON.parse(userString);
      if (this.$DEBUG) console.log('Created() main.js', userData)
      this.$store.commit('auth/SET_USER',userData);

      axios.interceptors.response.use(
        response => response,
        error=>{
          if(error.response.status === 401){
            this.$DEBUG ??console.log( "Bim  la main dans le sac");
          }
          return Promise.reject(error);
        }
      )
  }
},
render: h => h(App),
}).$mount('#app')