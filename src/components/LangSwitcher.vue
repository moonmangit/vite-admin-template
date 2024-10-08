<template>
    <slot
        v-bind="{ locales: $i18n.availableLocales, localeValue: $i18n.locale }"
    >
        <select v-model="$i18n.locale">
            <option v-for="lc in $i18n.availableLocales" :value="lc">
                {{ lc }}
            </option>
        </select>
    </slot>
</template>

<script lang="ts" setup>
import { watch } from 'vue'
import { useI18n } from 'vue-i18n'

const { locale } = useI18n()
watch(locale, (locale) => {
    document.documentElement.lang = locale
    localStorage.setItem('locale', locale)
})
</script>

<style></style>
