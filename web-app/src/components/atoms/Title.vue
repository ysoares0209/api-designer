<script setup lang="ts">
defineProps(['text']);
</script>

<template>
  <h1>{{ text }}</h1>
</template>

<style scoped>
h1 {
  font-size: 2rem;
  font-weight: bold;
}
</style>