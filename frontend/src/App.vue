<template>
  <div>
    <img alt="Vue logo" src="./assets/logo.png" />
    <HelloWorld msg="Welcome to Your Vue.js App" />
    <button @click="postUser">Send request</button>
    <code>
      {{ info }}
    </code>
  </div>
</template>

<script>
import HelloWorld from "./components/HelloWorld.vue";
import axios from "axios";

export default {
  name: "App",
  components: {
    HelloWorld,
  },
  data() {
    return {
      info: null,
    };
  },
  methods: {
    postUser() {
      axios
        .post("http://localhost:3000/auth/signup", {
          username: "francky",
          password: "12345",
        })
        .then((response) => (this.info = response));
    },
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
