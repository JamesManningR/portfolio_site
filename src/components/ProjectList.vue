<template>
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
</template>

<script>
import ProjectPost from "@/components/ProjectPost.vue";

export default {
  props: {
    projects: Array
  },
  components: {
    ProjectPost
  }
};
</script>

<style></style>
