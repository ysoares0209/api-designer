<script setup lang="ts">
import Title from '../atoms/Title.vue';
import Typography from '../atoms/Typography.vue';
import Link from '../atoms/Link.vue';
import Input from '../atoms/Input.vue';
import InputLabel from '../atoms/InputLabel.vue';
import Button from '../atoms/Button.vue';

function onSubmit() {
  console.log('123')
}

</script>

<template>
  <main class="page-container">
    <header>
      <span>Logo placeholder</span>
      <div class="link-container">
        <Typography text="Already have an account?" />
        <Link :link="'/'" text="Sign in" />
      </div>
    </header>
    <section class="sign-up-form">
      <Title text="Sign up" />
      <div class="form-fields">
        <div class="input">
          <InputLabel inputId="email" text="Email" />
          <Input id="email" placeholder="email@example.com" />
        </div>
        <div class="input">
          <InputLabel inputId="password" text="Password" />
          <Input id="password" type="password" placeholder="Enter at least 8 characters" />
        </div>
        <div class="input">
          <InputLabel inputId="confirmPassword" text="Confirm password" />
          <Input id="confirmPassword" type="password" placeholder="Enter at least 8 characters" />
        </div>
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

.link-container {
  display: flex;
  width: 14em;
  justify-content: space-around;
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

.input {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background-color: #F3F4F6;
  width: 22.5rem;
  height: 3.625rem;
  font-size: 0.875rem;
  padding: 0.5rem 0.75rem;
  border-radius: 6px;

  
}

</style>
