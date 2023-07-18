import { defineStore } from 'pinia';
import type { TabProps } from '@/types/tab';

export const useTabsStore = defineStore('tabs', {
  state: () => ({
    tabs: [] as TabProps[],
  }),
  actions: {
    setTabs(data: TabProps[]) {
      this.tabs = data;
    },
  },
});
