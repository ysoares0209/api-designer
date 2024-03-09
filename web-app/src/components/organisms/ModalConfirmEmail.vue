<script setup lang="ts">
  /* External */
  import { ref } from 'vue';
  /* Assets */
  import XIcon from '../../assets/Icons/XIcon.vue';
  /* Atoms */
  import Title from '../atoms/Title.vue';
  import Typography from '../atoms/Typography.vue';
  import Button from '../atoms/Button.vue';
  /* Molecules */
  import Modal from '../molecules/Modal.vue';
  import InputConfirmationCode from '../molecules/InputConfirmationCode.vue';
  import TextWithLink from '../molecules/TextWithLink.vue';
  import ClickableIcon from '../molecules/ClickableIcon.vue';

  defineProps(['isModalOpen', 'closeModal']);

  const confirmationCode = ref('');
  function onConfirmationCodeChange(e) {
    console.log('confirmationCode', confirmationCode.value);
    console.log('event', e.target.value);
  }
</script>

<template>
  <Modal v-if="isModalOpen" @onOverlayClick="closeModal">
    <div class="ConfirmEmailModal">
      <ClickableIcon class="CloseIcon" :onClick="closeModal">
        <XIcon />
      </ClickableIcon>
      <div class="TitleWrapper">
        <Title text="Almost done" />
        <Typography text="Please type the code we sent you in your email" />
      </div>
      <InputConfirmationCode
        v-model:inputModel="confirmationCode"
        :onInputChange="onConfirmationCodeChange"
      />
      <Button class="VerifyButton" text="Verify" />
      <TextWithLink
        text="Can't access to your email?"
        linkText="Get in contact"
        linkUrl="mailto:yansoaressilva@outlook.com"
        :isExternalLink="true"
      />
    </div>
  </Modal>
</template>

<style>
  .ConfirmEmailModal {
    height: 100%;
    width: 100%;
    display: flex;
    flex-direction: column;
    padding: 4rem 4rem 2rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 3rem;

    /* Customisations */
    .TextWithLinkWrapper {
      width: 17rem;
    }

    .VerifyButton {
      background-color: #9095a1;
      height: 3rem;
      font-size: 1.125rem;
    }
  }
  .CloseIcon {
    position: absolute;
    right: 3rem;
    top: 2rem;
  }

  .TitleWrapper {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
</style>
