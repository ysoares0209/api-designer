<script setup lang="ts">
defineProps(['onClick'])
</script>

<template>
  <button @click="onClick">
    <slot />
  </button>
</template>

<style scoped>
 button {
  padding: 0;
  margin: 0;
  border: none;
  background-color: transparent;
  cursor: pointer;
 }
</style>