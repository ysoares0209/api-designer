<script setup lang="ts">
  import InputWithLabel from '../molecules/InputWithLabel.vue';

  // props & emitters
  defineProps(['email', 'password', 'confirmPassword']);
  defineEmits(['update:email', 'update:password', 'update:confirmPassword']);
</script>

<template>
  <InputWithLabel
    :value="email"
    @update:value="$emit('update:email', $event)"
    id="email"
    type="email"
    label="Email"
    placeholder="email@example.com"
  />
  <InputWithLabel
    :value="password"
    @update:value="$emit('update:password', $event)"
    id="password"
    type="password"
    label="Password"
    placeholder="Enter at least 8 characters"
  />
  <InputWithLabel
    :value="confirmPassword"
    @update:value="$emit('update:confirmPassword', $event)"
    id="confirmPassword"
    type="password"
    label="Confirm password"
    placeholder="Enter at least 8 characters"
  />
</template>
