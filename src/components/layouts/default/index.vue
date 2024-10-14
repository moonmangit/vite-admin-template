<template>
    <div
        id="layout-default"
        class="w-screen h-screen overflow-auto grid grid-cols-1 md:grid-cols-[max-content_1fr] grid-rows-[max-content_1fr] bg-gray-300 dark:bg-black text-gray-700 dark:text-gray-300"
    >
        <LayoutDefaultAside v-if="md" />
        <LayoutDefaultNavbar />
        <main>
            <div class="min-h-[calc(100dvh-64px-2rem)] p-4">
                <LayoutDefaultPageHeader />

                <section>
                    <slot></slot>
                </section>
            </div>
            <LayoutDefaultFooter />
        </main>

        <!-- mobile nav -->
        <LayoutDefaultMobileMenu v-if="!md" />
    </div>
</template>

<script lang="ts" setup>
import LayoutDefaultNavbar from './LayoutDefaultNavbar.vue'
import LayoutDefaultAside from './LayoutDefaultAside.vue'
import LayoutDefaultPageHeader from './LayoutDefaultPageHeader.vue'
import LayoutDefaultFooter from './LayoutDefaultFooter.vue'
import { useLayoutStore } from '../../../stores/layout'
import { breakpointsTailwind, useBreakpoints } from '@vueuse/core'
import LayoutDefaultMobileMenu from './LayoutDefaultMobileMenu.vue'

const layoutStore = useLayoutStore()

// Responsive
const { md } = useBreakpoints(breakpointsTailwind)
</script>

<style scoped></style>
