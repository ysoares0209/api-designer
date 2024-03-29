<script setup lang="ts">
  /* External */
  import { computed, ref } from 'vue';
  import { useRouter } from 'vue-router';
  /* Assets */
  import XIcon from '../../assets/Icons/XIcon.vue';
  /* Atoms */
  import Title from '../atoms/Title.vue';
  import Typography from '../atoms/Typography.vue';
  /* Molecules */
  import Modal from '../molecules/Modal.vue';
  import InputConfirmationCode from '../molecules/InputConfirmationCode.vue';
  import TextWithLink from '../molecules/TextWithLink.vue';
  import ClickableIcon from '../molecules/ClickableIcon.vue';
  import ButtonWithLoading from '../molecules/ButtonWithLoading.vue';
  /* Services */
  import { verifyUserCode } from '../../services/auth';
  /* Stores */
  import { useNotificationsStore } from '../../stores/notifications';

  const props = defineProps(['userEmail', 'isModalOpen', 'closeModal']);
  const router = useRouter();
  const store = useNotificationsStore();
  const VALID_CONFIRMATION_CODE_LENGTH = 6;

  // Reactive values
  const isSubmitting = ref(false);
  const confirmationCode = ref('');
  const isValidCode = computed(() => {
    const onlyHasNumbers = new RegExp(/^[0-9]+$/).test(confirmationCode.value);
    const confirmationCodeLength = confirmationCode.value.toString().length;
    if (!onlyHasNumbers || confirmationCodeLength !== VALID_CONFIRMATION_CODE_LENGTH) {
      return false;
    }
    return true;
  });

  // Functions
  async function onVerifyClick() {
    try {
      if (!isValidCode.value) return;
      isSubmitting.value = true;
      const data = await verifyUserCode({
        email: props.userEmail,
        verificationCode: confirmationCode.value
      });
      if (!data.success) throw new Error('Code validation failed');
      store.showNotification('Successfully validated code!', 'success');
      router.push('/sign-in');
    } catch (error) {
      console.error('error', error);
      store.showNotification('Code could not be validated. Try again later!', 'error');
    } finally {
      isSubmitting.value = false;
    }
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
      <InputConfirmationCode :value="confirmationCode" @update:value="confirmationCode = $event" />
      <ButtonWithLoading
        class="VerifyButton"
        text="Verify"
        :is-loading="isSubmitting"
        :class="{ active: isValidCode }"
        :onClick="onVerifyClick"
      />
      <TextWithLink
        text="Can not get access to your email?"
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
    .VerifyButton {
      background-color: #9095a1;
      height: 3rem;
      font-size: 1.125rem;
      cursor: not-allowed;
    }

    .active {
      background-color: #181626;
      cursor: pointer;
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
