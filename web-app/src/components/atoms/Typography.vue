<script setup lang="ts">
  defineProps(['text']);
</script>

<template>
  <p>{{ text }}</p>
</template>

<style scoped>
  p {
    font-size: 1rem;
    color: #323743ff;
  }
</style>
