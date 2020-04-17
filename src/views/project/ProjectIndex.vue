<template>
  <main class="projectsPage">
    <h1>Projects</h1>
    <router-link :to="{ name: 'project-new' }">New post</router-link>

    <ul class="projects">
      <ProjectPost
        class="projects__post"
        v-for="(project, index) in projects"
        :key="index"  
        :project="project"
      />
      <li class="projects__post">
        <h2>More Projects</h2>
      </li>
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
