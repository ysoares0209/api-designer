<script setup lang="ts">
  defineProps(['inputId', 'text'])
</script>

<template>
  <label :for="inputId">{{ text }}</label>
</template>

<style scoped>
  label {
    font-size: 0.75rem;
    font-weight: 700;
    line-height: 20px;
    color: #323743
  }
</style>