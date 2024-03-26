<script setup lang="ts">
  import Title from '../atoms/Title.vue';
</script>

<template>
  <main>
    <Title text="API Designer" />
    <div class="container">
      <div class="left-side">
        <span title="Home" class="active">Home</span>
        <span title="Projects">Projects</span>
        <span title="Endpoints">Endpoints</span>
      </div>
      <div class="right-side">
        <span>Sign out</span>
      </div>
    </div>
  </main>
</template>

<style scoped>
  main {
    height: 100vh;
    width: 100vw;
    overflow: hidden;
    margin: auto;
    padding: 1rem 2rem;
    background-color: #f3f4f6;
    display: flex;
    flex-direction: column;
    gap: 2rem;
  }

  .container {
    height: 4.5rem;
    padding: 0 3rem;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    background-color: #ffffff;
    border-radius: 6px;
  }

  .left-side {
    display: flex;
    flex-direction: row;
    gap: 2.5rem;

    span {
      color: #565d6d;
      font-size: 0.875rem;
      cursor: pointer;
    }

    span::before {
      display: block;
      content: attr(title);
      font-weight: bold;
      height: 0;
      overflow: hidden;
      visibility: hidden;
    }

    span:hover,
    .active {
      color: #181626;
      font-weight: bold;
    }
  }

  .right-side {
    span {
      color: #9095a1;
      font-weight: bold;
      font-size: 1.25rem;
      cursor: pointer;
    }
  }
</style>
