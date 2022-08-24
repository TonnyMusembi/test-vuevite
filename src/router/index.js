import { createRouter, createWebHistory } from 'vue-router'
import Home from '/src/components/Home.vue'
import Login from "/src/views/login.vue";
const routes = [{
        path: '/',
        name: 'Home',
        component: Home,
    },
    { path: '/login', name: 'login', component: Login },



]
const router = createRouter({
    history: createWebHistory(),
    routes,
})
export default router