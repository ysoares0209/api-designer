<script setup lang="ts">
  import { ref } from 'vue';
  /* Components */
  import AuthPagesTemplate from '../Templates/AuthPages.vue';
  import AuthPagesSignUpForm from '../organisms/AuthPagesSignUpForm.vue';
  import ModalConfirmEmail from '../organisms/ModalConfirmEmail.vue';
  /* Services & utils */
  import validateSignUpForm from '../../utils/validateSignUpForm';
  import { signUpUser } from '../../services/auth';
  /* Stores */
  import { useNotificationsStore } from '../../stores/notifications';

  // stores
  const store = useNotificationsStore();

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
    /* Prevents double clicking */
    if (isSubmitting.value) return;
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
        store.showNotification(message as string, 'error');
        return;
      }

      isSubmitting.value = true;
      const signUpUserResult = await signUpUser({ email: localEmail, password: localPassword });
      if (!signUpUserResult.success) {
        store.showNotification(signUpUserResult.data.message as string, 'error');
        return;
      }

      store.showNotification('User successfully created!', 'success');
      openModal();
    } catch (error) {
      console.error('error', error);
      store.showNotification('User failed to be created! Try again later', 'error');
    } finally {
      isSubmitting.value = false;
    }
  }
</script>

<template>
  <AuthPagesTemplate
    form-title="Sign Up"
    form-button-text="Sign Up"
    :on-form-submit="onSubmit"
    header-text="Already have an account?"
    header-link-text="Sign In"
    header-link-url="/sign-in"
    :is-loading="isSubmitting"
  >
    <AuthPagesSignUpForm
      :email="email"
      :password="password"
      :confirm-password="confirmPassword"
      @update:email="email = $event"
      @update:password="password = $event"
      @update:confirm-password="confirmPassword = $event"
    />
  </AuthPagesTemplate>
  <ModalConfirmEmail :user-email="email" :is-modal-open="isModalOpen" :close-modal="closeModal" />
</template>
