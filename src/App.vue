<template>
    <div>
        <nav>
            <RouterLink
                v-for="(route, idx) in $router.options.routes"
                :key="idx"
                :to="route.path"
            >
                {{ route.name }}
            </RouterLink>
            <LangSwitcher />
        </nav>
        <main>
            <RouterView />
        </main>
    </div>
</template>

<script lang="ts" setup>
import LangSwitcher from './components/LangSwitcher.vue'
</script>

<style></style>
