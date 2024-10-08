<template>
    <form
        class="p-4 border bg-white dark:bg-black rounded-lg w-[min(350px,80dvw)] space-y-4 shadow-xl dark:shadow-primary-400 border-primary-500"
    >
        <header>
            <h1 class="text-xl text-primary-500 font-bold">Admin App</h1>
            <p class="font-light text-sm">
                welcome back, please login to your account
            </p>
        </header>
        <main class="grid grid-cols-1 gap-2">
            <span>Username</span>
            <InputText placeholder="example@mail.com" />
            <span>Password</span>
            <InputText type="password" placeholder="********" />
        </main>
        <footer class="flex justify-between">
            <Button label="Forget Password ?" link />
            <Button label="Login" class="flex-row-reverse">
                <template #icon>
                    <Icon icon="ph:check" />
                </template>
            </Button>
        </footer>
    </form>
</template>

<script lang="ts" setup>
import Button from 'primevue/button'
import InputText from 'primevue/inputtext'
import { Icon } from '@iconify/vue'
</script>

<style></style>
