<script setup lang="ts">
  import { computed } from 'vue';
  const props = defineProps(['text', 'type', 'onClick']);
  const buttonType = computed(() => {
    return props.type || 'button';
  });
</script>

<template>
  <button @click.prevent="onClick" :type="buttonType">{{ text }}</button>
</template>

<style scoped>
  button {
    background-color: #181626;
    color: #ffff;
    border: none;
    padding: 0;
    margin: 0;
    width: 22.5rem;
    height: 2.5rem;
    border-radius: 6px;
    cursor: pointer;
    font-size: 1rem;
  }
</style>
