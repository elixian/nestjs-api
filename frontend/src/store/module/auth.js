import axios from 'axios';

export default {
    namespaced: true,
    state: {
        user: null
    },
    getters: {
        user: state => {
            return state.user;
        },
        login: state => {
            return !!state.user;
        }
    },
    mutations: {
        SET_USER(state, credential) {
            state.user = credential;
            localStorage.setItem('user', JSON.stringify(state.user));
            axios.defaults.headers.common['Authorization'] = `Bearer ${state.user.token}`;
        },
        RESET_USER(state){
            state.user = null;
            axios.defaults.headers.common['Authorization'] = ``;
        }
    },
    actions: {
        registerUser({
            commit
        }, credentials) {
            return new Promise((resolve, reject) => {
                axios.post('auth/signup', credentials).then(
                    ({data}) => resolve(commit('SET_USER', data))
                ).catch(err => {
                    reject(err)
                })
            })
        },
        signIn({
            commit
        }, credentials) {
            return new Promise((resolve, reject) => {
                axios.post('auth/signin', credentials).then(
                    ({data}) => resolve(commit('SET_USER', data))
                ).catch(err => reject(err))
            })
        },
        logOut({commit}){
           return   Promise.resolve(commit('RESET_USER'));
        }
    }
}