<template>
  <div>
    <form id="form-register" @submit.prevent="register">
      <h2>Ajouter un utilisateur</h2>
      <div class="W-inputs">
        <label for="username">
          Nom utilisateur
          <input type="text" name="username" v-model="user.username" />
          <p class="error" v-if="user.username === ''">
            Le nom utilisateur ne peut être vide
          </p>
        </label>

        <label for="password">
          Mot de passe
          <input type="password" name="password" v-model="user.password"
        /></label>

        <label for="password">
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

        <div class="W-btn">
          <button class="btn-post" type="submit">Register</button>
        </div>
      </div>
    </form>
    <ul>
      <li v-for="(error, index) in errors" :key="index">{{ error }}</li>
    </ul>
    <hr />
    <h2>Utilisateurs</h2>
    <ul>
      <li v-for="user in listUsers" :key="user.username">
        {{ `user: ${user.username} | role : ${user.role}` }}
      </li>
    </ul>
  </div>
</template>

<script>
import { mapActions } from "vuex";
import { Roles } from "@/store/enum/roles";
import axios from 'axios'
export default {
 async mounted() {

  const { accessToken } = JSON.parse(localStorage.getItem('user') )
     axios.get('/user/all',{
      headers: {
        'Authorization': `Bearer ${accessToken}`
      }
    })
      .then(({data})=> this.listUsers = data )
  },
  data() {
    return {
      user: {},
      listUsers: [],

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
      if (Object.keys(this.user).length === 3) {
        this.registerUser(this.user)
          .then((data) => {
            this.listUsers.push(data);
            this.user = {};
            //  this.$router.push({ path: "/" })
          })
          .catch((err) => {
            console.log(err);
            console.error("Une erreure est survenue", err.data.message);
            this.user = {};
          });
      }
    },
  },
};
</script>

<style lang="scss" scoped>
#form-register {
  display: flex;
  margin: 0 auto;

  padding: 10px;
  border: 1px solid #dedede;
  border-radius: 5px;
  flex-direction: column;
}

.W-inputs {
  position: relative;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
  margin-top: 20px;
  margin-bottom: 20px;

  label {
    display: flex;
    flex-direction: column;
  }

  input,
  select {
    height: 30px;
    border-radius: 3px;
    outline: none;
    margin-top: 5px;
    border: 1px solid #919191;
  }

  .W-btn {
    align-self: flex-end;
  }

  .btn-post {
    height: 30px;
    background: rgb(84, 141, 226);
    border: 1px solid #d5d5d5;
    padding: 10px;
    line-height: 10px;
    outline: none;
    cursor: pointer;
  }
  .error {
    position: absolute;
    display: block;
    width: max-content;
    font-size: 1.2rem;
    bottom: -16px;
  }
}
</style>
