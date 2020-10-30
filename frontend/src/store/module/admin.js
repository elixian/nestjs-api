import axios from 'axios';

export default {
    namespaced: true,
    state: {
       
    },
    getters: {

    },
    mutations: {

    },
    actions: {
        uploadFile( {commit,rootState},credentials) {  // eslint-disable-line no-unused-vars

            return new Promise((resolve, reject) => {
                console.log(credentials);
                axios.post('user/upload', 
                credentials,
                {
                    headers: {
                        'Content-Type': 'multipart/form-data'
                    }
                  }
                ).then(
                    ({data}) => console.log(data)
                ).catch(err => {
                    reject(err)
                })
            })
        },
    }
}