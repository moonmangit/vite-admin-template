<template>
    <div>
        <Transition name="content">
            <div
                v-if="layoutStore.$state.showMobileNav"
                class="fixed inset-y-0 right-0 w-[min(400px,calc(100dvw-4rem))] bg-white dark:bg-black border-l border-transparent dark:border-primary-500 duration-300 z-30 p-3 flex flex-col gap-y-3"
            >
                <header class="flex justify-between items-center">
                    <Button
                        text
                        rounded
                        @click.prevent="layoutStore.toggleMobileNav()"
                    >
                        <template #icon>
                            <Icon icon="ph:x" />
                        </template>
                    </Button>
                    <section class="flex justify-between items-center gap-x-2">
                        <div>
                            <h1 class="text-sm flex gap-x-1 items-center">
                                Default Admin
                            </h1>
                            <p class="text-xs text-gray-500 dark:text-gray-400">
                                admin@mail.com
                            </p>
                        </div>
                        <Divider layout="vertical" class="!mx-1 !h-[25px]" />
                        <Avatar
                            image="https://picsum.photos/200/300"
                            style="background-color: #ece9fc; color: #2a1261"
                            shape="circle"
                        />
                    </section>
                </header>
                <main class="flex flex-col gap-y-2 flex-1">
                    <section
                        v-for="(group, gIdx) in NAV_LINKS"
                        :key="gIdx"
                        class="flex flex-col gap-y-2"
                    >
                        <header
                            v-if="group.groupLabel !== 'default'"
                            class="capitalize text-xs p-2 px-3"
                        >
                            {{ group.groupLabel }}
                        </header>
                        <ul class="flex flex-col gap-y-2">
                            <li
                                v-for="(link, lIdx) in group.items"
                                :key="lIdx"
                                class="flex items-center gap-x-3 p-2 px-3 rounded-lg"
                            >
                                <Icon
                                    :icon="routerConfig[link].app.icon"
                                    class="text-primary-500"
                                />
                                {{ link }}
                            </li>
                        </ul>
                    </section>
                </main>
                <footer class="flex items-center justify-between">
                    <section @click.prevent="theme.toggleTheme()">
                        {{ theme.isDark.value ? 'to Light' : 'to Dark' }}
                    </section>
                    <Button
                        label="Logout"
                        size="small"
                        class="!px-4"
                        outlined
                    />
                    <section>EN/TH</section>
                </footer>
            </div>
        </Transition>
        <Transition name="backdrop">
            <div
                v-if="layoutStore.$state.showMobileNav"
                class="bg-black/20 dark:bg-black/80 fixed inset-0 z-[29]"
                @click.prevent="layoutStore.toggleMobileNav()"
            />
        </Transition>
    </div>
</template>

<script lang="ts" setup>
import Button from 'primevue/button'
import Avatar from 'primevue/avatar'
import Divider from 'primevue/divider'
import { Icon } from '@iconify/vue'
import { useLayoutStore } from '../../../stores/layout'
import { NAV_LINKS } from '../../../assets/constant'
import { routerConfig } from '../../../router.config'
import { useTheme } from '../../../composables/useTheme'

const layoutStore = useLayoutStore()

// Theme
const theme = useTheme()
</script>

<style scoped>
.content-enter-active,
.content-leave-active {
    @apply duration-300;
}
.content-enter-from,
.content-leave-to {
    @apply translate-x-full;
}

.backdrop-enter-active,
.backdrop-leave-active {
    @apply duration-300;
}
.backdrop-enter-from,
.backdrop-leave-to {
    @apply opacity-0;
}
</style>
