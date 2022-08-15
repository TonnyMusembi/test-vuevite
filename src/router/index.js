import { createRouter, createWebHistory } from 'vue-router'
import Home from '/src/components/Home.vue'
const routes = [{
        path: '/',
        name: 'Home',
        component: Home,
    },
    {
        path: '/',
        name: '',
        component: ''

    },


]
const router = createRouter({
    history: createWebHistory(),
    routes,
})
export default router