<template>
    <div
        class="fixed inset-x-0 top-4 px-4 container mx-auto flex justify-end gap-2"
    >
        <LangSwitcher>
            <Select v-model="$i18n.locale" :options="$i18n.availableLocales" />
        </LangSwitcher>
        <ThemeSwitcher />
    </div>
</template>

<script lang="ts" setup>
import Select from 'primevue/select'
import LangSwitcher from '../../components/LangSwitcher.vue'
import ThemeSwitcher from '../../components/ThemeSwitcher.vue'
</script>

<style></style>
