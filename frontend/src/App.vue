<template>
  <div id="app">
    <app-header-nav />

    <div id="main">
      <router-view />
    </div>

  </div>
</template>

<script>
import NavVue from "./components/Nav.vue";
import authComputed from "@/store/helpers/helpers";

export default {
  components: {
    appHeaderNav: NavVue,
  },
  computed: {
    ...authComputed,
  },
};
</script>
<style lang="scss">
@import url("https://fonts.googleapis.com/css2?family=Raleway:ital,wght@0,400;0,500;0,900;1,600&display=swap");

html {
  font-size: 62.5%;
  font-family: "Raleway", sans-serif;
}
body {
  font-size: 1.6rem;
}
#app {
  display: flex;
  flex-direction: column;
  height:100%;
}
#main {
  width: 80%;
  align-self: center;
  margin-top:5rem;
}
</style>
