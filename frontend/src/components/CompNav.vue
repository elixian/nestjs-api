<template>
  <div id="header-bar-nav" class="d(flex)">
    <div class="b-img">
      <router-link to="/"
        ><img class="img" src="@/assets/logo.png" alt="" srcset=""
      /></router-link>
    </div>
    <div class="nav-site" v-if="login">
       <router-link class="b-link" to="/admin">Admin</router-link>
    </div>
    <div class="ml(auto) d(flex)">
      <ul class="b-link">
        <template v-if="!login">
          <li><router-link to="/register">S'enregistrer</router-link></li>
          <li><router-link to="/signin">Se connecter</router-link></li>
        </template>
        <template v-else>
          <div v-if="login">
            Bonjour {{ user.username }}
          </div>
          <li @click="signOut"><a @mouseup.prevent>Se déconnecter</a></li>
          
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

  .nav-site{
    $color-link-nav: #076807;
    flex:1 0 auto;
    text-align: center;
    align-self: auto;
    font-size: 1.8rem;
    #{$a-tags}{
      text-decoration: none;
      color: $color-link-nav;
    }
    #{$a-tags-hover}{
      color: lighten($color-link-nav,15%)
    }
  }

  .b-link {
    li {
      margin: 0 10px;
    }
    #{$a-tags} {
      text-decoration: none;
      color: crimson;
      cursor:pointer;
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
