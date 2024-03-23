<script setup lang="ts">
  /* Components */
  import Title from '../atoms/Title.vue';
  import Button from '../atoms/Button.vue';
  import AuthPagesHeader from '../organisms/AuthPagesHeader.vue';

  /* Props */
  defineProps([
    'formTitle',
    'formButtonText',
    'onFormSubmit',
    'headerText',
    'headerLinkText',
    'headerLinkUrl'
  ]);
</script>

<template>
  <main class="AuthPagesWrapper">
    <AuthPagesHeader :text="headerText" :linkText="headerLinkText" :linkUrl="headerLinkUrl" />
    <form>
      <Title :text="formTitle" />
      <div class="form-fields">
        <slot></slot>
      </div>
      <Button :text="formButtonText" type="submit" :onClick="onFormSubmit" />
    </form>
  </main>
</template>

<style scoped>
  .AuthPagesWrapper {
    max-width: 1480px;
    height: 100vh;
    margin: 0 auto;
    padding: 4rem 2rem;
    font-weight: normal;

    form {
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
  }
</style>
