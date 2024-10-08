import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useUserStore = defineStore('user', () => {
    const profile = ref(null)

    return {
        profile
    }
})
