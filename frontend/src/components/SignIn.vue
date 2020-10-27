<template>
    <div>
        <form @submit.prevent="login">
            <label for="username">
            Username    
            <input type="text" name="username" v-model="username"></label>
            <label for="password">
            password    
            <input type="text" name="password" v-model="password"></label>
            <button type="submit" >Se connecter</button>
        </form>
    </div>
</template>

<script>
import {mapActions} from 'vuex';

    export default {
        data(){
            return{
                username:'',
                password:''
            }
        },
        methods:{
            ...mapActions("auth",["signIn"]),
            login(){
                this.signIn({
                    username:this.username,
                    password:this.password
                }).then(() => this.$router.push({path : '/'}))
            }
        }
    }
</script>

<style lang="scss" scoped>

</style>