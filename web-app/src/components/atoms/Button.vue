<script setup lang="ts">
  import type { PropType } from 'vue';
  defineProps({
    text: { type: String, required: true },
    buttonType: { type: String as PropType<'button' | 'submit' | 'reset'>, default: 'button' },
    onClick: { type: Function as PropType<(event: MouseEvent) => void>, required: true }
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
