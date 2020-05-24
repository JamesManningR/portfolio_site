<template>
  <main class="projectsPage">
    <h1>Projects</h1>
    <router-link v-if="isAuthed" :to="{ name: 'project-new' }"
      >New post</router-link
    >
    <projectList :projects="projects" />
  </main>
</template>

<script>
import projectList from "@/components/project/ProjectList.vue";

import { mapState } from "vuex";

export default {
  components: {
    projectList
  },
  created() {
    if (!this.$store.state.project.projects) {
      this.$store.dispatch("project/fetchProjects");
    }
  },
  computed: {
    isAuthed() {
      return this.$store.getters["auth/isAuthenticated"];
    },
    ...mapState("project", ["projects"])
  }
};
</script>

<style lang="scss">
.projectsPage {
  display: flex;
  align-content: stretch;
  flex-direction: column;
}
.projects {
  display: grid;
  flex-grow: 1;
  grid-auto-flow: row;
  grid-template-rows: repeat(3, 1fr);
  grid-template-columns: repeat(4, 1fr);
  list-style: none;
}
</style>
