<template>
  <div>
    <nav>
      <RouterLink
        v-for="(route, idx) in $router.options.routes"
        :key="idx"
        :to="route.path"
      >
        {{ route.name }}
      </RouterLink>
    </nav>

    <main>
      <RouterView />
    </main>
  </div>
</template>

<script lang="ts" setup></script>

<style></style>
