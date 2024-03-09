<script setup lang="ts">
import Title from '../atoms/Title.vue';
import Typography from '../atoms/Typography.vue';
import Link from '../atoms/Link.vue';
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
      <h1>Sign Up</h1>
      <div class="form-fields">
        <div class="input">
          <label for="email">Email</label>
          <input id="email" placeholder="email@example.com" />
        </div>
        <div class="input">
          <label for="password">Password</label>
          <input id="password" placeholder="Enter at least 8 characters" />
        </div>
        <div class="input">
          <label for="confirmPassword">Confirm password</label>
          <input id="confirmPassword" placeholder="Enter at least 8 characters" />
        </div>
      </div>
      <button>Sign up</button>
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

  h1 {
    font-size: 2rem;
    font-weight: 700;
    color: #171A1FFF
  }
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

  label {
    font-size: 0.75rem;
    font-weight: 700;
    line-height: 20px;
    color: #323743
  }

  input {
    background-color: inherit;
    border: none;
    color: #323743
  }

  input:focus {
    outline: none;
  }

  input::placeholder {
    color: #8F9197
  }
}

button {
  background-color: #181626;
  color: #FFFF;
  border: none;
  padding: 0;
  margin: 0;
  width: 22.5rem;
  height: 2.5rem;
  border-radius: 6px;
  cursor: pointer;
  font-size: 1rem;
}
</style>
