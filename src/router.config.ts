import { createRouter, createWebHistory, RouterOptions } from 'vue-router'

export type RouteNames = 'home' | 'about' | 'contact' | 'login'

export const routerConfig: RouteConfig<RouteNames> = {
    home: {
        router: {
            path: '/',
            name: 'home',
            component: () => import('./pages/home/index.vue')
        },
        app: {
            icon: 'ph:house-fill'
        }
    },
    about: {
        router: {
            path: '/about',
            name: 'about',
            component: () => import('./pages/about/index.vue')
        },
        app: {
            icon: 'ph:info-fill'
        }
    },
    contact: {
        router: {
            path: '/contact',
            name: 'contact',
            component: () => import('./pages/about/index.vue')
        },
        app: {
            icon: 'ph:phone-fill'
        }
    },
    login: {
        router: {
            path: '/login',
            name: 'login',
            component: () => import('./pages/login/index.vue')
        },
        app: {
            icon: 'ph:lock-fill'
        }
    }
}

export function createAppRouter() {
    return createRouter({
        routes: [
            routerConfig['home'].router,
            routerConfig['about'].router,
            routerConfig['login'].router
        ],
        history: createWebHistory()
    })
}

type RouteConfig<T extends string> = Record<
    T,
    {
        router: RouterOptions['routes'][0]
        app: {
            icon: string
        }
    }
>
