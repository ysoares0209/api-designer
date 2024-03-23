<!-- This component is essentially just applying styles to input & passing the data up -->
<!-- which is kinda stupid - I'd prefer to not have this intermediate component -->
<!-- since I don't want to keep drilling the props but this seems to be down side of Atomic Design -->
<!-- I'll keep looking into vue to see if there is a better way of doing this (maybe slots) -->
<script setup lang="ts">
  import Input from '../atoms/Input.vue';
  defineProps(['value']);
  defineEmits(['update:value']);
</script>
<template>
  <Input
    :value="value"
    @update:value="$emit('update:value', $event)"
    id="InputConfirmationCode"
    type="number"
    placeholder="Type in your code"
  />
</template>

<style scoped>
  input {
    height: 3rem;
    width: 16rem;
    border: 1px solid #9095a1;
    border-radius: 6px;
    padding: 1rem;
    letter-spacing: 12px;
    text-align: center;
    font-size: 1.5rem;
    font-weight: 600;
  }

  input::placeholder {
    letter-spacing: normal;
    font-size: 0.875rem;
    font-weight: 400;
  }
</style>
