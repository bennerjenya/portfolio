<script setup lang="ts">
import { ref } from 'vue';
import { onClickOutside } from '@vueuse/core';
import { useButtonPress } from '@/hooks/useButtonPress';

export interface ImageModalProps {
  isShown: boolean;
  hide: Function;
  image: string;
}

const modalRef = ref(null);
const props = defineProps<ImageModalProps>();

onClickOutside(modalRef, () => props.hide());
useButtonPress(() => props.hide(), 'Escape');
</script>

<template>
  <Teleport to="body" v-if="props.isShown">
    <div class="modal">
      <div class="modal__content" ref="modalRef">
        <button class="modal__button" @click="props.hide">Close</button>
        <div class="modal__image">
          <img :src="props.image" alt="" />
        </div>
      </div>
    </div>
  </Teleport>
</template>

<style scoped lang="scss">
.modal {
  z-index: 2;
  position: fixed;
  left: 0;
  top: 0;
  width: 100vw;
  height: 100vh;
  background: rgba(0, 0, 0, 0.7);
  display: flex;
  align-items: center;
  justify-content: center;

  &__image {
    position: absolute;
    width: 100%;
    height: 45%;

    @media (min-width: 1024px) {
      height: 100%;
    }

    & img {
      width: 100%;
      height: 100%;
      object-position: top center;
      object-fit: cover;
      border-radius: 10px;
    }
  }

  &__content,
  &__button {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  &__content {
    position: relative;
    width: calc(100% - 50px);
    height: calc(100% - 100px);

    @media (min-width: 1024px) {
      max-width: 1080px;
      height: calc(100% - 200px);
    }
  }

  &__button {
    z-index: 1;
    position: absolute;
    right: 10px;
    top: 10px;
    border-radius: 4px;
    height: 35px;
    width: 70px;
    background: #6cace4;
    color: #f0f0f0;
  }
}
</style>
