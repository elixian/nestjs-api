<template>
  <div>
    <form id="form-register" @submit.prevent="register">
      <h2>Enregistrement</h2>
      <div class="W-inputs">
        <label class="mb(30px) mt(10px)" for="username">
          Nom utilisateur
          <input type="text" name="username" v-model="username"
        /></label>

        <label class="mb(30px)" for="password">
          Mot de passe
          <input type="password" name="password" v-model="password"
        /></label>

        <div>
          <button type="submit">Register</button>
        </div>
      </div>
    </form>
    <ul>
      <li v-for="(error, index) in errors" :key="index">{{ error }}</li>
    </ul>
  </div>
</template>

<script>
import { mapActions } from "vuex";
export default {
  data() {
    return {
      username: "",
      password: "",
      errors: null,
    };
  },
  methods: {
    ...mapActions("auth", ["registerUser"]),
    register() {
      console.log("in register");
      this.registerUser({
        username: this.username,
        password: this.password,
      })
        .then(() => this.$router.push({ path: "/" }))
        .catch((err) => (this.errors = err.response.data.message));
    },
  },
};
</script>

<style lang="scss" scoped>
#form-register {
  display: flex;
  width: 350px;
  margin: 0 auto;
  height: 400px;
  padding: 10px;
  border: 1px solid #dedede;
  border-radius: 5px;
  flex-direction: column;
  align-items: center;
}

.W-inputs{
    flex: 1 0 auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
}
</style>
