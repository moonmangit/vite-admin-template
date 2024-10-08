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
            <slot></slot>
        </main>
    </div>
</template>

<script lang="ts" setup>
import LangSwitcher from '../LangSwitcher.vue'
</script>

<style></style>
