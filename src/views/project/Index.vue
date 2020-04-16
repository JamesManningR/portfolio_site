<template>
  <main class="projectsPage">
    <h1>Projects</h1>
    <ul class="projects">
      <ProjectPost
        class="projects__post"
        v-for="project in projects"
        :key="project.id"
        :project="project"
      />
    </ul>
  </main>
</template>

<script>
import ProjectPost from "@/components/ProjectPost.vue";
import { mapState } from "vuex";

export default {
  components: {
    ProjectPost
  },
  created() {
    this.$store.dispatch("project/fetchProjects");
  },
  computed: {
    ...mapState("project", ["projects"])
  }
};
</script>

<style lang="scss">
.projects {
  display: grid;
  grid-auto-flow: column;
  grid-row: 1;
  &__post {
    display: block;
    height: 100%;
  }
}
</style>
