<script setup lang="ts">
defineProps(['text'])
</script>

<template>
  <p>{{ text }}</p>
</template>

<style>
p {
  margin: 0;
  font-size: 1rem;
}
</style>