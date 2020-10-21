import axios from 'axios';

export default {
    namespaced: true,
    state:{
        user:{
            register:false,
            token:null,
            username:null,
            roles:new Array,
        }
    },
    getters:{
        user: state =>{
            return state.user;
        }
    },
    mutations:{
        SET_USER(state, credential){
            state.user.username = credential.username;
            state.user.token = credential.accessToken;
            state.user.register = !state.user.register;
        }
    },
    actions:{      
    registerUser({commit},credentials){
        
        axios.post('auth/signup',credentials).then(
            ({data})=>  commit('SET_USER',data)
        ).catch( err=> console.log(err.response.data.message.join('')))
       
    }
    }
}