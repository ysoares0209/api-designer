<script setup lang="ts">
  import { ref, watch } from 'vue';
  /* components */
  import Title from '../atoms/Title.vue';
  import Button from '../atoms/Button.vue';
  import InputWithLabel from '../molecules/InputWithLabel.vue';
  /* utils */
  import validateSignUpForm from '../../utils/validateSignUpForm';
  /* services */
  import { signUpUser } from '../../services/auth';

  // props & emitters
  const props = defineProps(['openModal']);
  const emit = defineEmits(['update:email']);

  // reactive state
  const isSubmitting = ref(false);
  const email = ref('');
  const password = ref('');
  const confirmPassword = ref('');

  // function
  async function onSubmit() {
    try {
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

      isSubmitting.value = true;
      const data = await signUpUser({ email: localEmail, password: localPassword });
      console.log(data);

      props.openModal();
    } catch (error) {
      console.log('error', error);
    } finally {
      isSubmitting.value = false;
    }
  }

  // watchers
  watch(email, (newValue) => emit('update:email', newValue));
</script>

<template>
  <section class="AuthPagesSignUpForm-wrapper">
    <Title text="Sign up" />
    <form class="form-fields">
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
    </form>
    <Button text="Sign Up" type="submit" :onClick="onSubmit" />
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
