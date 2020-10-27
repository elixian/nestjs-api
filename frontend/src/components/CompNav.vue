<template>
  <div id="header-bar-nav">
    <div class="b-img">
      <router-link to="/"
        ><img class="img" src="@/assets/logo.png" alt="" srcset=""
      /></router-link>
    </div>

    <div class="ml(auto) d(flex)">
      <ul class="b-link">
        <template v-if="!login">
          <li><router-link to="/register">S'enregistrer</router-link></li>
          <li><router-link to="/signin">Se connecter</router-link></li>
        </template>
        <template v-else>
          <li @click="signOut">LogOut</li>
          <router-link class="b-link" to="/admin">Admin</router-link>
          <div v-if="login">
            {{ user.username }}
          </div>
        </template>
      </ul>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
import { authComputed } from "@/store/helpers/helpers";
export default {
  data() {
    return {};
  },
  computed: {
    ...mapGetters("auth", ["user"]),
    ...authComputed,
  },
  methods: {
    ...mapActions("auth", ["logOut"]),
    signOut() {
      this.logOut().then(() => this.$router.push({ name: "home" }));
    },
  },
};
</script>

<style lang="scss" scoped>
$height-nav: 60px;
$a-tags: "a, a:active, a:hover, a:visited";
$a-tags-hover: "a:active, a:hover";
#header-bar-nav {
  display: flex;
  align-items: center;
  height: $height-nav;
  box-shadow: 1px 0px 3px 2px #d3d3d3;

  .b-img {
    .img {
      height: $height-nav - 10;
      margin: 5px 10px;
    }
  }

  .b-link {
    li {
      margin: 0 5px;
    }
    #{$a-tags} {
      text-decoration: none;
      color: crimson;
    }
    #{$a-tags-hover} {
      text-decoration: none;
      color: lighten(crimson, 10%);
    }
  }
  ul {
    list-style: none;
    display: flex;
    margin-left: auto;
  }
}
</style>
