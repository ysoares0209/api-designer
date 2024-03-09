<script setup lang="ts">
  import AuthPagesTemplate from '../Templates/AuthPages.vue';
  import AuthPagesSignUpForm from '../organisms/AuthPagesSignUpForm.vue';
</script>

<template>
  <AuthPagesTemplate text="Already have an account?" linkText="Sign In" linkUrl="/sign-in">
    <AuthPagesSignUpForm />
  </AuthPagesTemplate>
</template>

<style scoped></style>
