<script setup lang="ts">
  const props = defineProps(['id', 'type', 'placeholder']);
  const inputModel = defineModel('inputModel');
  const computedType = props.type || 'text';
</script>

<template>
  <input v-model="inputModel" :id="id" :type="computedType" :placeholder="placeholder" />
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

  /* Chrome, Safari, Edge, Opera */
  input::-webkit-outer-spin-button,
  input::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }

  /* Firefox */
  input[type='number'] {
    -moz-appearance: textfield;
    appearance: textfield;
  }
</style>
