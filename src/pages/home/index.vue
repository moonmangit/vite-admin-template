<template>
    <div>
        home page
        {{ count }}
        <button
            class="p-2 px-3 bg-red-500 text-white"
            type="button"
            @click.prevent="inc"
        >
            +
        </button>
        <button
            class="p-2 px-3 bg-red-500 text-white"
            type="button"
            @click.prevent="dec"
        >
            -
        </button>
    </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'

const count = ref(1)
function inc() {
    count.value++
}
function dec() {
    count.value--
}
</script>

<style></style>
