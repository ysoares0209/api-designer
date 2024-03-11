<script setup lang="ts">
  import { ref } from 'vue';
  import AuthPagesTemplate from '../Templates/AuthPages.vue';
  import AuthPagesSignUpForm from '../organisms/AuthPagesSignUpForm.vue';
  import ModalConfirmEmail from '../organisms/ModalConfirmEmail.vue';

  // reactive
  const isModalOpen = ref(false);

  // functions
  function openModal() {
    isModalOpen.value = true;
  }

  function closeModal() {
    isModalOpen.value = false;
  }
</script>

<template>
  <AuthPagesTemplate text="Already have an account?" linkText="Sign In" linkUrl="/sign-in">
    <AuthPagesSignUpForm :openModal="openModal" />
  </AuthPagesTemplate>
  <ModalConfirmEmail :isModalOpen="isModalOpen" :closeModal="closeModal" />
</template>
