<template>
    <slot v-bind="{ toggleTheme, isDark }">
        <Button
            @click.prevent="toggleTheme"
            :label="isDark ? 'Light' : 'Dark'"
        />
    </slot>
</template>

<script lang="ts" setup>
import Button from 'primevue/button'
import { onMounted, ref } from 'vue'

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
</script>

<style></style>
