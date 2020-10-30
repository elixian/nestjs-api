import Vue from 'vue'
import VueRouter from 'vue-router'
// import {mapGetters} from 'vuex'
import store from '@/store'; // <-- aliased path

// const dev = process.env.NODE_ENV !== 'production';
Vue.use(VueRouter)

const routes = [
    {
        path: '/',
        name: 'home',
        component: () => import( /* webpackChunkName: "NotFound" */ '../views/Home.vue')
    },
    {
        path: '/register',
        name: 'Register',
        component: () => import( /* webpackChunkName: "NotFound" */ '../views/Register.vue'),
        meta: {
            requiresAuth: true
        }
    },
    {
        path: '/signin',
        name: 'signin',
        component: () => import( /* webpackChunkName: "NotFound" */ '../components/SignIn.vue')
    },
    {
        path: '/admin',
        name: 'admin',
        component: () => import( /* webpackChunkName: "NotFound" */ '../views/Admin.vue'),
        meta: {
            requiresAuth: true
        }
    },

]

const router = new VueRouter({
    mode: 'history',
    routes
})

 router.beforeEach((to, from, next) => {
    if (to.matched.some(record => record.meta.requiresAuth) && !store.getters['auth/user']) {
        next('/')
    }

    next();
})

export default router