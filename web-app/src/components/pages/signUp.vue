<script setup lang="ts">
import AuthPagesHeader from '../organisms/AuthPagesHeader.vue';
import AuthPagesSignUpForm from '../organisms/AuthPagesSignUpForm.vue';
</script>

<template>
  <main class="page-container">
    <AuthPagesHeader text="Already have an account?" linkText="Sign In" linkUrl="/" />
    <AuthPagesSignUpForm />
  </main>
</template>

<style scoped>
.page-container {
  max-width: 1480px;
  height: 100vh;
  margin: 0 auto;
  padding: 4rem 2rem;
  font-weight: normal;
}

</style>
