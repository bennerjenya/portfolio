<script setup lang="ts">
import { onMounted } from 'vue';
import TheTop from '@/components/TheTop.vue';
import TheProject from '@/components/TheProject.vue';
import TheFooter from '@/components/TheFooter.vue';
import TheTabs from '@/components/TheTabs.vue';
import SpinnerLoader from '@/components/SpinnerLoader.vue';
import { useProjectsStore } from '@/stores/projects';
import { useTabsStore } from '@/stores/tabs';
import { wait } from '@/hooks/wait';

const projectsStore = useProjectsStore();
const tabsStore = useTabsStore();

onMounted(async () => {
  const [projectsRes, tabsRes] = await Promise.all([
    fetch('/data/projects.json'),
    fetch('/data/tabs.json'),
  ]);

  const projects = await projectsRes.json();
  const tabs = await tabsRes.json();

  wait(() => {
    projectsStore.setProjects(projects);
    tabsStore.setTabs(tabs);
  }, 2000);
});
</script>

<template>
  <main>
    <TheTop />
    <SpinnerLoader :size="200" v-if="!tabsStore.tabs.length && !projectsStore.projects.length" />
    <div class="experience" v-if="tabsStore.tabs.length">
      <div class="title">Experience</div>
      <TheTabs />
    </div>
    <div class="container" id="projects" v-if="projectsStore.projects.length">
      <div class="title">Featured projects</div>
      <ul class="projectsList">
        <TheProject v-for="(item, index) in projectsStore.projects" :key="index" :project="item" />
      </ul>
    </div>
    <TheFooter id="contacts" />
  </main>
</template>

<style scoped lang="scss">
main {
  min-height: 100%;
  display: flex;
  flex-direction: column;
  flex: 1;
}

.projectsList {
  display: flex;
  flex-direction: column;
  gap: 32px;
  @media (min-width: 1024px) {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
  }
}
</style>
