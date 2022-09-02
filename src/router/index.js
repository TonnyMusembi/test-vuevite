import { createRouter, createWebHistory } from 'vue-router'
import Home from '/src/components/Home.vue'
import Login from "/src/views/login.vue";
import Watchexample from '/src/components/watchexample.vue';

const routes = [{
        path: '/',
        name: 'Home',
        component: Home,
    },
    { path: '/login', name: 'login', component: Login },
    { path: '/watchexample', name: 'watchexample', component: Watchexample },




]
const router = createRouter({
    history: createWebHistory(),
    routes,
})
export default router