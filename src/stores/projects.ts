import { defineStore } from 'pinia';
import type { ProjectProps } from '@/types/project';

export const useProjectsStore = defineStore('projects', {
  state: () => ({
    projects: [] as ProjectProps[],
  }),
  actions: {
    setProjects(data: ProjectProps[]) {
      this.projects = data;
    },
  },
});
