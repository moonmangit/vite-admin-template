<template>
    <nav
        class="bg-white dark:bg-black h-[4rem] p-2 px-3 flex items-center justify-between border-b border-transparent dark:border-white/20"
    >
        <!-- Desktop -->
        <template v-if="md">
            <section>
                <label for="" class="flex items-center gap-x-3">
                    <InputText placeholder="Action search ..." size="small" />
                    <Icon icon="bi:search" />
                </label>
            </section>
            <section>
                <!-- profile -->
                <div class="flex gap-x-2 items-center">
                    <Avatar
                        image="https://picsum.photos/200/300"
                        style="background-color: #ece9fc; color: #2a1261"
                        shape="circle"
                    />
                    <Divider layout="vertical" class="!mx-1 !h-[25px]" />
                    <section>
                        <h1 class="text-sm flex gap-x-1 items-center">
                            Default Admin
                        </h1>
                        <p class="text-xs text-gray-500 dark:text-gray-400">
                            admin@mail.com
                        </p>
                    </section>
                    <Button
                        type="button"
                        icon="pi pi-ellipsis-v"
                        @click="toggle"
                        aria-haspopup="true"
                        aria-controls="overlay_menu"
                        severity="secondary"
                        class="aspect-square"
                        rounded
                        text
                    >
                        <Icon icon="bi:three-dots-vertical" />
                    </Button>
                    <Menu
                        ref="menu"
                        id="overlay_menu"
                        :model="items"
                        :popup="true"
                    />
                </div>
            </section>
        </template>
        <!-- mobile -->
        <template v-else>
            <section class="flex items-center gap-x-2">
                <Icon
                    icon="solar:box-bold-duotone"
                    class="text-4xl dark:text-primary-500"
                />
                <div class="whitespace-nowrap">
                    <h1 class="text-lg font-bold leading-4">Foo Company</h1>
                    <p class="text-xs">management system</p>
                </div>
            </section>
            <Button rounded text @click.prevent="layoutStore.toggleMobileNav()">
                <template #icon>
                    <Icon icon="mdi:menu" class="text-2xl" />
                </template>
            </Button>
        </template>
    </nav>
</template>

<script lang="ts" setup>
import { Icon } from '@iconify/vue'
import { NAV_PROFILE_MENUS } from '../../../assets/constant'
import { ref } from 'vue'
import { useBreakpoints, breakpointsTailwind } from '@vueuse/core'
import { useLayoutStore } from '../../../stores/layout'
import Avatar from 'primevue/avatar'
import Button from 'primevue/button'
import Divider from 'primevue/divider'
import InputText from 'primevue/inputtext'
import Menu from 'primevue/menu'

const layoutStore = useLayoutStore()

// Responsive
const { md } = useBreakpoints(breakpointsTailwind)

// Menu
const menu = ref()
const items = NAV_PROFILE_MENUS
const toggle = (event: any) => {
    menu.value.toggle(event)
}
</script>

<style></style>
