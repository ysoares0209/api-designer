<script setup lang="ts"></script>

<template>
  <input type="number" maxlength="1" min="0" max="9" />
</template>

<style scoped>
  input {
    height: 3rem;
    width: 3rem;
    border: 1px solid #9095a1;
    border-radius: 6px;
    font-size: 1.5rem;
    font-weight: 700;
    color: #171a1f;
    text-align: center;
  }

  input:focus {
    outline: none;
  }

  /* Chrome, Safari, Edge, Opera */
  input::-webkit-outer-spin-button,
  input::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }

  /* Firefox */
  input[type='number'] {
    -moz-appearance: textfield;
    appearance: textfield;
  }
</style>
