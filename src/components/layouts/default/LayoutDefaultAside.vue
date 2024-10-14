<template>
    <aside
        class="row-span-2 w-[16rem] bg-white dark:bg-black flex flex-col border-r dark:border-white/20 relative duration-300 group/aside"
        :class="{
            'w-[5rem]': layoutStore.$state.minimize,
            minimized: layoutStore.$state.minimize
        }"
    >
        <header class="flex justify-center items-center h-[4rem]">
            <section class="flex items-center gap-x-2">
                <Icon
                    icon="solar:box-bold-duotone"
                    class="text-4xl dark:text-primary-500"
                />
                <div
                    v-if="!layoutStore.$state.minimize"
                    class="whitespace-nowrap"
                >
                    <h1 class="text-lg font-bold leading-4">Foo Company</h1>
                    <p class="text-xs">management system</p>
                </div>
            </section>
        </header>

        <main
            class="flex-1 overflow-x-hidden overflow-y-auto hidden-scroll flex flex-col duration-200"
            :class="{
                'p-3 ': !layoutStore.$state.minimize
            }"
        >
            <section
                v-for="(group, idx) in links"
                :key="idx"
                class="aside-group"
            >
                <label
                    v-if="group.groupLabel !== 'default'"
                    for=""
                    class="aside-group__label"
                >
                    <span
                        :class="{
                            'mx-auto': layoutStore.$state.minimize
                        }"
                    >
                        {{ group.groupLabel }}
                    </span>
                </label>
                <ul class="aside-group__link-group">
                    <li
                        v-for="(link, ldx) in group.items"
                        :key="ldx"
                        class="aside-group__link"
                    >
                        <Icon
                            :icon="routerConfig[link].app.icon"
                            class="aside-group__link-icon text-lg"
                        />
                        <span class="aside-group__link-label">
                            {{ link }}
                        </span>
                    </li>
                </ul>
            </section>
        </main>

        <button
            type="button"
            class="w-8 h-8 aspect-auto flex items-center justify-center border rounded-full absolute bottom-8 -right-4 bg-white hover:bg-gray-100 dark:bg-black dark:hover:bg-white dark:hover:text-black dark:border-white/20 duration-200"
            @click.prevent="layoutStore.toggleMinimize()"
        >
            <Icon
                icon="ph:caret-left"
                class="text-xl duration-200"
                :class="{
                    'rotate-180': layoutStore.$state.minimize
                }"
            />
        </button>
    </aside>
</template>

<script lang="ts" setup>
import { Icon } from '@iconify/vue'
import { useLayoutStore } from '../../../stores/layout'
import { routerConfig } from '../../../router.config'
import { NAV_LINKS } from '../../../assets/constant'

const layoutStore = useLayoutStore()
const links = NAV_LINKS
</script>

<style scoped>
.aside-group__link,
.aside-group__label {
    @apply flex p-2 px-3;
}

.aside-group__link {
    @apply flex items-center gap-x-2 duration-200 cursor-pointer rounded-lg;
    &:hover {
        @apply bg-gray-100 dark:bg-white dark:text-black;
    }
}

.minimized {
    .aside-group {
        @apply flex flex-col items-stretch text-center;
    }
    .aside-group__link {
        @apply flex-col rounded-none;
    }
    .aside-group__label {
        @apply text-xs text-black/40 dark:text-white/40;
    }
    .aside-group__link-icon {
        @apply text-xl;
    }
    .aside-group__link-label {
        @apply text-xs line-clamp-2;
    }
}
</style>
