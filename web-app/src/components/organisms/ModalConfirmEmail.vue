<script setup lang="ts">
import xIcon from '../../assets/Icons/XIcon.vue';
import Title from '../atoms/Title.vue';
import Typography from '../atoms/Typography.vue';
import CodeInput from '../atoms/CodeInput.vue';
import Button from '../atoms/Button.vue';
import Modal from '../molecules/Modal.vue';
import TextWithLink from '../molecules/TextWithLink.vue';
import ClickableIcon from '../molecules/ClickableIcon.vue';
</script>

<template>
  <Modal v-if="true">
      <div class="ConfirmEmailModal">
        <ClickableIcon class="CloseIcon">
          <xIcon />
        </ClickableIcon>
        <div class="TitleWrapper">
          <Title text="Almost done" />
          <Typography text="Please type the code we sent you in your email" />
        </div>
        <div class="CodeInputWrapper">
          <template v-for="n in 6">
            <CodeInput />
          </template>
        </div>
        <Button class="VerifyButton" text="Verify" />
        <TextWithLink text="Can't access to your email?" linkText="Get in contact" linkUrl="mailto:yansoaressilva@outlook.com" :isExternalLink="true" />
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
      background-color: #9095A1;
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

  .CodeInputWrapper {
    display: flex;
    gap: 1rem;
  }
</style>