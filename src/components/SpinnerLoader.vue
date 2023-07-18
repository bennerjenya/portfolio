<template>
  <div class="lds-ring">
    <div></div>
    <div></div>
    <div></div>
    <div></div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue';

export interface Props {
  size: number;
}

const mainSize = ref<string>('0px');
const innerSize = ref<string>('0px');
const otherSize = ref<string>('0px');

const props = defineProps<Props>();

onMounted(() => {
  mainSize.value = `${props.size}px`;
  innerSize.value = `${props.size * 0.8}px`;
  otherSize.value = `${props.size * 0.1}px`;
});
</script>

<style scoped lang="scss">
.lds-ring {
  display: flex;
  align-items: center;
  position: relative;
  max-width: 1080px;
  margin: 0 auto;
  width: v-bind(mainSize);
  height: v-bind(mainSize);

  @media (min-width: 1024px) {
    flex: 1;
  }

  & div {
    box-sizing: border-box;
    display: block;
    position: absolute;
    width: v-bind(innerSize);
    height: v-bind(innerSize);
    margin: v-bind(otherSize);
    border: v-bind(otherSize) solid;
    border-radius: 50%;
    animation: lds-ring 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite;
    border-color: #fff transparent transparent transparent;

    &:nth-child(1) {
      animation-delay: -0.45s;
    }

    &:nth-child(2) {
      animation-delay: -0.3s;
    }

    &:nth-child(3) {
      animation-delay: -0.15s;
    }
  }
}

@keyframes lds-ring {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
</style>
