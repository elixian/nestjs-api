<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <h1>Welcome to Your Vue.js App</h1>
  <app-register/>
  </div>
</template>


<script>
import RegisterVue from './components/Register.vue'
export default {
  components:{
    appRegister : RegisterVue
  }
}
</script>