import { createRouter, createWebHistory } from 'vue-router'

export function createAppRouter() {
    return createRouter({
        routes: [
            {
                path: '/',
                name: 'home',
                component: () => import('./pages/home/index.vue')
            },
            {
                path: '/about',
                name: 'about',
                component: () => import('./pages/about/index.vue')
            },
            {
                path: '/login',
                name: 'login',
                component: () => import('./pages/login/index.vue')
            }
        ],
        history: createWebHistory()
    })
}
