<script setup lang="ts">
import { ref } from 'vue';
import { useTabsStore } from '@/stores/tabs';
import TheTab from '@/components/TheTab.vue';

const selectedIndex = ref(0);
const store = useTabsStore();
const setIndex = (num: number) => (selectedIndex.value = num);
</script>

<template>
  <div class="tabs">
    <ul class="tabs__buttonsList">
      <li v-for="(tab, index) in store.tabs" :key="index">
        <button
          @click="setIndex(index)"
          class="tab__button"
          :class="{
            active: index === selectedIndex,
          }"
        >
          {{ tab.name }}
        </button>
      </li>
    </ul>

    <TheTab :tab="store.tabs[selectedIndex]" />
  </div>
</template>
