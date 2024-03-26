<script setup lang="ts">
  import AuthPagesTemplate from '../Templates/AuthPages.vue';
</script>

<template>
  <AuthPagesTemplate
    formTitle="Sign In"
    formButtonText="Sign In"
    :onFormSubmit="() => {}"
    headerText="Don't have an account yet?"
    headerLinkText="Sign Up"
    headerLinkUrl="/sign-up"
  >
    <div>Hello world</div>
  </AuthPagesTemplate>
</template>

<style></style>
