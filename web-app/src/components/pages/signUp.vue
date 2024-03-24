<script setup lang="ts">
  import { ref } from 'vue';
  /* Components */
  import AuthPagesTemplate from '../Templates/AuthPages.vue';
  import AuthPagesSignUpForm from '../organisms/AuthPagesSignUpForm.vue';
  import ModalConfirmEmail from '../organisms/ModalConfirmEmail.vue';
  import Toaster from '../organisms/NotificationsSnackbar.vue';
  /* services & utils */
  import validateSignUpForm from '../../utils/validateSignUpForm';
  import { signUpUser } from '../../services/auth';

  // reactive
  const isModalOpen = ref(false);
  const isSubmitting = ref(false);

  const email = ref('');
  const password = ref('');
  const confirmPassword = ref('');

  // functions
  function openModal() {
    isModalOpen.value = true;
  }

  function closeModal() {
    isModalOpen.value = false;
  }

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

      openModal();
    } catch (error) {
      console.log('error', error);
    } finally {
      isSubmitting.value = false;
    }
  }
</script>

<template>
  <AuthPagesTemplate
    formTitle="Sign Up"
    formButtonText="Sign Up"
    :onFormSubmit="onSubmit"
    headerText="Already have an account?"
    headerLinkText="Sign In"
    headerLinkUrl="/sign-in"
  >
    <AuthPagesSignUpForm
      :email="email"
      :password="password"
      :confirmPassword="confirmPassword"
      @update:email="email = $event"
      @update:password="password = $event"
      @update:confirm-password="confirmPassword = $event"
    />
  </AuthPagesTemplate>
  <ModalConfirmEmail :userEmail="email" :isModalOpen="isModalOpen" :closeModal="closeModal" />
  <Toaster />
</template>
