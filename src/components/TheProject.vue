<script setup lang="ts">
import ImageModal from '@/components/ImageModal.vue';
import { useModal } from '@/hooks/useModal';
import type { ProjectProps } from '@/types/project';

defineProps({
  project: {
    type: Object as () => ProjectProps,
  },
});

const { isShown, openModal, closeModal } = useModal();
</script>

<template>
  <div class="project">
    <div class="project__image">
      <img :src="`/images/${project.image}`" alt="" />
      <div class="project__overlay" @click="openModal">
        <div class="project__overlayText">Click to zoom image</div>
      </div>
    </div>
    <div class="project__content">
      <div class="project__top">
        <div class="project__name">{{ project.name }}</div>
        <div class="project__links">
          <a :href="project.links[0]" target="_blank" rel="noopener">
            <svg
              width="24"
              height="25"
              viewBox="0 0 24 25"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M12 2.5C6.475 2.5 2 6.975 2 12.5C1.99887 14.5993 2.65882 16.6456 3.88622 18.3487C5.11362 20.0517 6.84615 21.3251 8.838 21.988C9.338 22.075 9.525 21.775 9.525 21.512C9.525 21.275 9.512 20.488 9.512 19.65C7 20.113 6.35 19.038 6.15 18.475C6.037 18.187 5.55 17.3 5.125 17.062C4.775 16.875 4.275 16.412 5.112 16.4C5.9 16.387 6.462 17.125 6.65 17.425C7.55 18.937 8.988 18.512 9.562 18.25C9.65 17.6 9.912 17.163 10.2 16.913C7.975 16.663 5.65 15.8 5.65 11.975C5.65 10.887 6.037 9.988 6.675 9.287C6.575 9.037 6.225 8.012 6.775 6.637C6.775 6.637 7.612 6.375 9.525 7.663C10.3391 7.43706 11.1802 7.32334 12.025 7.325C12.875 7.325 13.725 7.437 14.525 7.662C16.437 6.362 17.275 6.638 17.275 6.638C17.825 8.013 17.475 9.038 17.375 9.288C18.012 9.988 18.4 10.875 18.4 11.975C18.4 15.813 16.063 16.663 13.838 16.913C14.2 17.225 14.513 17.825 14.513 18.763C14.513 20.1 14.5 21.175 14.5 21.513C14.5 21.775 14.688 22.087 15.188 21.987C17.173 21.3168 18.8979 20.041 20.1199 18.3392C21.3419 16.6373 21.9994 14.5951 22 12.5C22 6.975 17.525 2.5 12 2.5Z"
                fill="white"
              />
            </svg>
          </a>
          <a :href="project.links[1]" target="_blank" rel="noopener">
            <svg
              width="24"
              height="25"
              viewBox="0 0 24 25"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M17.6568 15.328L16.2428 13.914L17.6568 12.5C18.0282 12.1286 18.3229 11.6876 18.5239 11.2023C18.7249 10.717 18.8284 10.1968 18.8284 9.6715C18.8284 9.1462 18.7249 8.62605 18.5239 8.14073C18.3229 7.65542 18.0282 7.21445 17.6568 6.843C17.2853 6.47156 16.8444 6.17691 16.359 5.97589C15.8737 5.77487 15.3536 5.6714 14.8283 5.6714C14.303 5.6714 13.7828 5.77487 13.2975 5.97589C12.8122 6.17691 12.3712 6.47156 11.9998 6.843L10.5858 8.257L9.17177 6.843L10.5858 5.429C11.7141 4.31892 13.2353 3.69966 14.8181 3.7061C16.401 3.71255 17.9171 4.34418 19.0364 5.46341C20.1556 6.58265 20.7872 8.0988 20.7937 9.68162C20.8001 11.2644 20.1808 12.7857 19.0708 13.914L17.6568 15.328ZM14.8278 18.157L13.4138 19.571C12.8583 20.1356 12.1965 20.5846 11.4666 20.8922C10.7367 21.1998 9.95319 21.3598 9.16115 21.363C8.36911 21.3662 7.58428 21.2126 6.85191 20.911C6.11954 20.6094 5.45414 20.1658 4.89408 19.6057C4.33402 19.0456 3.89039 18.3802 3.58878 17.6479C3.28717 16.9155 3.13354 16.1307 3.13677 15.3386C3.13999 14.5466 3.3 13.763 3.60757 13.0331C3.91513 12.3033 4.36417 11.6415 4.92877 11.086L6.34277 9.672L7.75677 11.086L6.34277 12.5C5.97133 12.8714 5.67668 13.3124 5.47566 13.7977C5.27463 14.283 5.17117 14.8032 5.17117 15.3285C5.17117 15.8538 5.27463 16.374 5.47566 16.8593C5.67668 17.3446 5.97133 17.7856 6.34277 18.157C6.71421 18.5284 7.15518 18.8231 7.6405 19.0241C8.12581 19.2251 8.64597 19.3286 9.17127 19.3286C9.69657 19.3286 10.2167 19.2251 10.702 19.0241C11.1874 18.8231 11.6283 18.5284 11.9998 18.157L13.4138 16.743L14.8278 18.157ZM14.8278 8.257L16.2428 9.672L9.17177 16.742L7.75677 15.328L14.8278 8.258V8.257Z"
                fill="white"
              />
            </svg>
          </a>
        </div>
      </div>
      <div class="project__text">{{ project.text }}</div>
      <div class="project__stack">{{ project.stack }}</div>
    </div>
    <ImageModal :isShown="isShown" :hide="closeModal" :image="`/images/${project.image}`" />
  </div>
</template>

<style scoped lang="scss">
.project {
  color: var(--text-white);
  height: fit-content;

  @media (min-width: 1024px) {
    flex: 0 0 calc(50% - 16px);
  }

  &__image {
    position: relative;
    margin-bottom: 32px;
    max-height: 338px;
    height: 100%;
    cursor: pointer;

    &:hover {
      & .project__overlay {
        opacity: 1;
      }
    }

    & img {
      border-radius: 4px;
      -o-object-fit: cover;
      object-fit: cover;
      aspect-ratio: 16/9;
      width: 100%;
      max-height: 338px;
    }
  }

  &__overlay {
    transition: all 0.2s linear;
    opacity: 0;
    position: absolute;
    display: flex;
    align-items: center;
    justify-content: center;
    inset: 0;
    background: rgba(0, 0, 0, 0.7);
    border-radius: 4px;
  }

  &__overlayText {
    color: #ffffff;
    text-align: center;
  }

  &__content {
    display: flex;
    flex-direction: column;
    gap: 12px;
  }

  &__top,
  &__links,
  &__stack {
    display: flex;
    align-items: center;
  }

  &__top {
    justify-content: space-between;
  }

  &__links {
    gap: 10px;
  }

  &__name {
    font-size: 16px;
  }

  &__stack {
    gap: 8px;
    color: var(--text-blue);
  }
}
</style>
