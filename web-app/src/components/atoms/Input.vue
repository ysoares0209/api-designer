<script setup lang="ts">
  import { ref, computed, watch } from 'vue';

  const emit = defineEmits(['update:value']);
  const props = defineProps(['value', 'id', 'type', 'placeholder']);

  //reactive states
  const localValue = ref(props.value);
  const computedType = computed(() => {
    return props.type || 'text';
  });

  //side effects
  watch(localValue, (newValue) => {
    emit('update:value', newValue);
  });
</script>

<template>
  <input v-model="localValue" :id="id" :type="computedType" :placeholder="placeholder" />
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
