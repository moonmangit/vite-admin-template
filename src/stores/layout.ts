import { defineStore } from 'pinia'
import { ref } from 'vue'
import { RouteNames } from '../router.config'

export const useLayoutStore = defineStore('layout', () => {
    // mobile navigator
    const showMobileNav = ref(false)
    const toggleMobileNav = () => {
        showMobileNav.value = !showMobileNav.value
    }

    // minimized
    const minimize = ref(false)
    const toggleMinimize = () => {
        minimize.value = !minimize.value
    }

    return {
        showMobileNav,
        toggleMobileNav,

        minimize,
        toggleMinimize
    }
})
