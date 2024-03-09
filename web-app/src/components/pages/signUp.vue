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
        <p class="typography">Already have an account?</p>
        <router-link class="link" to="/">Sign In</router-link>
      </div>
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

.link-container {
  display: flex;
  width: 14em;
  justify-content: space-around;
}

.typography {
  font-size: 0.875rem;
  color: #323743FF;
}

.link {
  color: #181626FF;
  font-size: 0.875rem;
  font-weight: 500;
  text-decoration: underline;
  line-height: 22px;
}

.input {
  display: flex;
  flex-direction: column;
}
</style>
