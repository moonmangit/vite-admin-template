<template>
    <div
        class="w-screen h-screen overflow-hidden flex items-center justify-center to-primary-700"
    >
        <LoginForm />
        <LoginTopActions />
        <LoginFooter />
    </div>
</template>

<script lang="ts" setup>
import LoginFooter from './LoginFooter.vue'
import LoginForm from './LoginForm.vue'
import LoginTopActions from './LoginTopActions.vue'
</script>

<style></style>
