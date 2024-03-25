<script setup lang="ts">
  /* Components */
  import type { PropType } from 'vue';
  import Title from '../atoms/Title.vue';
  import ButtonWithLoading from '../molecules/ButtonWithLoading.vue';
  import AuthPagesHeader from '../organisms/AuthPagesHeader.vue';

  /* Props */
  defineProps({
    formTitle: { type: String, required: true },
    formButtonText: { type: String, required: true },
    onFormSubmit: { type: Function as PropType<(event: MouseEvent) => void>, required: true },
    headerText: { type: String, required: true },
    headerLinkText: { type: String, required: true },
    headerLinkUrl: { type: String, required: true },
    isLoading: { type: Boolean, default: false }
  });
</script>

<template>
  <main class="AuthPagesWrapper">
    <AuthPagesHeader :text="headerText" :linkText="headerLinkText" :linkUrl="headerLinkUrl" />
    <form>
      <Title :text="formTitle" />
      <div class="form-fields">
        <slot></slot>
      </div>
      <ButtonWithLoading
        :is-loading="isLoading"
        :text="formButtonText"
        button-type="submit"
        :onClick="onFormSubmit"
      />
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
