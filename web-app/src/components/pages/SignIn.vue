<script setup lang="ts">
import Title from '../atoms/Title.vue';
import Typography from '../atoms/Typography.vue';
import Link from '../atoms/Link.vue';
</script>

<template>
  <main class="page-container">
    <header>
      <span>Logo placeholder</span>
      <p>Already have an account? <a>Sign In</a></p>
    </header>
    <section>
      <h1>Sign Up</h1>
      <div class="input">
        <label for="email">Email</label>
        <input id="email" />
      </div>
      <div class="input">
        <label for="password">Password</label>
        <input id="password" />
      </div>
      <div class="input">
        <label for="confirmPassword">Confirm password</label>
        <input id="confirmPassword" />
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

.input {
  display: flex;
  flex-direction: column;
}
</style>
