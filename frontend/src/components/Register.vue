<template>
    <div>
        <form @submit.prevent="register">
            <label for="username">
            Username    
            <input type="text" name="username" v-model="username"></label>
            <label for="password">
            password    
            <input type="text" name="password" v-model="password"></label>
            <button type="submit" >Register</button>
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
            ...mapActions("axios",["registerUser"]),
            register(){
                console.log('in register')
                this.registerUser({
                    username:this.username,
                    password:this.password
                })
            }
        }
    }
</script>

<style lang="scss" scoped>

</style>