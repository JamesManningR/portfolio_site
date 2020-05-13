<template>
  <ul class="projects">
    <ProjectPost
      class="projects__post"
      v-for="(project, key) in projects"
      :key="`key-${key}`"
      :project="project"
    />
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
