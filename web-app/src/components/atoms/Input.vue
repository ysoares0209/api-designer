<script setup lang="ts">
  const props = defineProps(['id', 'type', 'placeholder']);
  const computedType = props.type || 'text';
</script>

<template>
  <input :id="id" :type="computedType" :placeholder="placeholder" />
</template>

<style scoped>
  input {
    background-color: inherit;
    border: none;
    color: #323743;
  }

  input:focus {
    outline: none;
  }

  input::placeholder {
    color: #8f9197;
  }
</style>
