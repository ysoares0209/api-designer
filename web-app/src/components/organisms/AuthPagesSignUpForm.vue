<script setup lang="ts">
  import { ref } from 'vue';
  import Title from '../atoms/Title.vue';
  import Button from '../atoms/Button.vue';
  import InputWithLabel from '../molecules/InputWithLabel.vue';

  // props
  const props = defineProps(['openModal']);

  // reactive state
  const email = ref('');
  const password = ref('');
  const confirmPassword = ref('');

  // function
  function onSubmit() {
    console.log('123');
    props.openModal();
    console.log('email', email);
    console.log('password', password);
    console.log('confirmPassword', password);
  }
</script>

<template>
  <section class="AuthPagesSignUpForm-wrapper">
    <Title text="Sign up" />
    <div class="form-fields">
      <InputWithLabel
        :value="email"
        @update:value="email = $event"
        id="email"
        type="email"
        label="Email"
        placeholder="email@example.com"
      />
      <InputWithLabel
        :value="password"
        @update:value="password = $event"
        id="password"
        type="password"
        label="Password"
        placeholder="Enter at least 8 characters"
      />
      <InputWithLabel
        :value="confirmPassword"
        @update:value="confirmPassword = $event"
        id="confirmPassword"
        type="password"
        label="Confirm password"
        placeholder="Enter at least 8 characters"
      />
    </div>
    <Button text="Sign Up" :onClick="onSubmit" />
  </section>
</template>

<style scoped>
  .AuthPagesSignUpForm-wrapper {
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 2rem;

    .form-fields {
      display: flex;
      flex-direction: column;
      gap: 1.5rem;
    }
  }
</style>
