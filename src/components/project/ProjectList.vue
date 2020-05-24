<template>
  <ul class="projects">
    <project-post-link
      class="projects__post"
      v-for="project in projects"
      :key="project._id"
      :project="project"
    />
  </ul>
</template>

<script>
import ProjectPostLink from "@/components/project/ProjectPostLink.vue";

export default {
  components: {
    ProjectPostLink
  },
  props: ["projects"]
};
</script>

<style></style>
