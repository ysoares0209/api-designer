<script setup lang="ts">
  defineProps(['text', 'onClick'])
</script>

<template>
  <button @click="onClick">{{ text }}</button>
</template>

<style>
  button {
    background-color: #181626;
    color: #FFFF;
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