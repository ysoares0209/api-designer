<script setup lang="ts">
import Overlay from '../atoms/Overlay.vue';
import xIcon from '../../assets/Icons/XIcon.vue';
import Title from '../atoms/Title.vue';
import Typography from '../atoms/Typography.vue';
</script>

<template>
  <Overlay />
  <div class="ModalWrapper">
    <div class="ConfirmEmailModal">
      <div class="ModalHeader">
        <xIcon />
        <Title text="Almost done" />
      </div>
      <Typography text="Please type the code we sent you in your email" />
      <div class="CodeInputWrapper">
        <input />
        <input />
        <input />
        <input />
        <input />
        <input />
      </div>
      <button>Verify</button>
      <p>Can't access to your email? <a href="mailto:yansoaressilva@outlook.com">Get In contact</a></p>
    </div>
  </div>
</template>

<style>
  .ModalWrapper {
    width: 35%;
    height: 45%;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%,-50%);
    background-color: #FFFFFF; /* Black background with opacity */
    z-index: 2;
    border-radius: 12px;
  }

  .ConfirmEmailModal {
    height: 100%;
    width: 100%;
    display: flex;
    flex-direction: column;
    padding: 4rem 4rem 2rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 2rem;
  }

  .ModalHeader {
    svg {
      position: absolute;
      right: 3rem;
      top: 2rem;
    }
  }

  .CodeInputWrapper {
    display: flex;
    gap: 1rem;

    input {
      height: 3rem;
      width: 3rem;
      border-color: #9095A1;
      border-radius: 6px;
      font-size: 1.5rem;
      font-weight: 700;
      color: #171A1F;
      text-align: center;
    }

    input:focus {
      outline: none;
    }
  }
</style>