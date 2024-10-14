import { onMounted, ref } from 'vue'

export function useTheme() {
    const isDark = ref(false)

    onMounted(() => {
        const theme = localStorage.getItem('theme')
        if (theme) {
            document.documentElement.classList.add(theme)
            if (theme === 'dark') {
                isDark.value = true
            }
        }
    })

    const toggleTheme = () => {
        const theme = localStorage.getItem('theme')
        if (theme === 'dark') {
            document.documentElement.classList.remove('dark')
            localStorage.setItem('theme', 'light')
            isDark.value = false
        } else {
            document.documentElement.classList.add('dark')
            localStorage.setItem('theme', 'dark')
            isDark.value = true
        }
    }

    return { isDark, toggleTheme }
}
