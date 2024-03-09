<script setup lang="ts">
import Title from '../atoms/Title.vue';
import Button from '../atoms/Button.vue';
import InputWithLabel from '../molecules/InputWithLabel.vue';
import TextWithLink from '../molecules/TextWithLink.vue';

function onSubmit() {
  console.log('123')
}

</script>

<template>
  <main class="page-container">
    <header>
      <span>Logo placeholder</span>
      <TextWithLink text="Already have an account?" linkText="Sign In" linkUrl="/" />
    </header>
    <section class="sign-up-form">
      <Title text="Sign up" />
      <div class="form-fields">
        <InputWithLabel id="email" type="email" label="Email" placeholder="email@example.com" />
        <InputWithLabel id="password" type="password" label="Password" placeholder="Enter at least 8 characters" />
        <InputWithLabel id="confirmPassword" type="password" label="Confirm password" placeholder="Enter at least 8 characters" />
      </div>
      <Button text="Sign Up" :onClick="onSubmit" />
    </section>
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

header {
  display: flex;
  justify-content: space-between;
}

section {
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.sign-up-form {
  display: flex;
  flex-direction: column;
  gap: 2rem;
}

.form-fields {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
}

</style>
