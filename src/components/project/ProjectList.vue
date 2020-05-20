<template>
  <ul class="projects">
    <ProjectPost
      class="projects__post"
      v-for="project in projects"
      :key="project._id"
      :project="project"
    />
    <h2>More Projects</h2>
  </ul>
</template>

<script>
import ProjectPost from "@/components/project/ProjectPost.vue";

export default {
  props: ["projects"],
  components: {
    ProjectPost
  }
};
</script>

<style></style>
