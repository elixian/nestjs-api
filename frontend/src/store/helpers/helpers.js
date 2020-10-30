import {mapGetters} from 'vuex';

export const authComputed = {
    ...mapGetters('auth',['login'])
}

export const isAdmin = {
    ...mapGetters('auth',['isAdmin'])
}