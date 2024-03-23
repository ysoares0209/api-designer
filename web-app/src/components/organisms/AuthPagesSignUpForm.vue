<script setup lang="ts">
  import { ref } from 'vue';
  /* components */
  import Title from '../atoms/Title.vue';
  import Button from '../atoms/Button.vue';
  import InputWithLabel from '../molecules/InputWithLabel.vue';
  /* utils */
  import validateSignUpForm from '../../utils/validateSignUpForm';

  // props
  const props = defineProps(['openModal']);

  // reactive state
  const email = ref('');
  const password = ref('');
  const confirmPassword = ref('');

  // function
  function onSubmit() {
    console.log('123');

    const localEmail = email.value;
    const localPassword = password.value;
    const localConfirmPassword = confirmPassword.value;

    const { success, message } = validateSignUpForm({
      email: localEmail,
      password: localPassword,
      confirmPassword: localConfirmPassword
    });

    if (!success) {
      alert(message);
      return;
    }

    props.openModal();
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
