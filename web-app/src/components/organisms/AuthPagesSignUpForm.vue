<script setup lang="ts">
import Title from '../atoms/Title.vue';
import Button from '../atoms/Button.vue';
import InputWithLabel from '../molecules/InputWithLabel.vue';

function onSubmit() {
  console.log('123')
}

</script>

<template>
  <section class="AuthPagesSignUpForm-wrapper">
      <Title text="Sign up" />
      <div class="form-fields">
        <InputWithLabel id="email" type="email" label="Email" placeholder="email@example.com" />
        <InputWithLabel id="password" type="password" label="Password" placeholder="Enter at least 8 characters" />
        <InputWithLabel id="confirmPassword" type="password" label="Confirm password" placeholder="Enter at least 8 characters" />
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