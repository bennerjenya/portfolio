<template>
  <div class="tab__content">
    <div class="tab__top">
      <div class="tab__position">
        {{ props.tab.position }}
      </div>
      <div class="tab__period">{{ props.tab.period }}</div>
    </div>
    <div class="tab__location">{{ props.tab.location }}</div>
    <ul class="tab__list">
      <li v-for="(item, index) in props.tab.responsibilities" :key="index" class="tab__item">
        {{ item }}
      </li>
    </ul>
    <p class="tab__salary">Salary: {{ props.tab.salary }}</p>
  </div>
</template>

<script setup lang="ts">
import type { TabProps } from '@/types/tab';

const props = defineProps({
  tab: {
    type: Object as () => TabProps,
  },
});
</script>
