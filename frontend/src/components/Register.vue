<template>
  <div>
    <form id="form-register" @submit.prevent="register">
      <h2>Ajouter un utilisateur</h2>
      <div class="W-inputs">
        <label class="mb(30px) mt(10px)" for="username">
          Nom utilisateur
          <input type="text" name="username" v-model="user.username"
        /></label>

        <label class="mb(30px)" for="password">
          Mot de passe
          <input type="password" name="password" v-model="user.password"
        /></label>

        <label class="mb(30px)" for="password">
          role
          <select name="role" id="" v-model="user.role">
            <option value="" selected disabled>Choisissez</option>
            <option
              v-for="(key, value, index) in listRoles"
              :key="index"
              :value="key"
              >{{ value }}</option
            >
          </select>
        </label>

        <div>
          <button type="submit">Register</button>
        </div>
      </div>
    </form>
    <ul>
      <li v-for="(error, index) in errors" :key="index">{{ error }}</li>
    </ul>
    <hr>
    <ul>
      <li v-for="user in listUsers" :key="user.username">{{`user: ${user.username} | role : ${user.role}`  }}</li>
    </ul>
  </div>
</template>

<script>
import { mapActions } from "vuex";
import { Roles } from "@/store/enum/roles";
export default {

  data() {
    return {
      user: {

      },
      listUsers:[],

      errors: null,
    };
  },
  computed: {
    listRoles: function() {
      console.log(Roles);
      return Roles;
    },
  },
  methods: {
    ...mapActions("auth", ["registerUser"]),
    register() {
      this.registerUser(this.user)
        .then((data) =>{
          this.listUsers.push(data);
           this.user = {}
          //  this.$router.push({ path: "/" })
        })
        .catch((err) =>{
          console.log(err);
          this.errors = err;
          if(err.status === 409) this.errors =['Utilisateur déjà existant'];
          if(err.status === 400) this.errors = err.data.message; 
          this.user = {}
        });
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

.W-inputs {
  flex: 1 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
</style>
