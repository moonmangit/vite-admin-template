<template>
    <div>
        <RouterView />
        <Toast />
        <ConfirmDialog />
    </div>
</template>

<script lang="ts" setup>
import ConfirmDialog from 'primevue/confirmdialog'
import Toast from 'primevue/toast'
</script>

<style></style>
