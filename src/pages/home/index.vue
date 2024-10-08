<template>
    <LayoutDefault>
        home page {{ $t('home.welcome') }}
        <Button label="hello"></Button>
    </LayoutDefault>
</template>

<script lang="ts" setup>
import Button from 'primevue/button'
import LayoutDefault from '../../components/layouts/LayoutDefault.vue'
</script>

<style></style>
