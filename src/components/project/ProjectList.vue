<template>
  <ul class="projects">
    <ProjectPost
      class="projects__post"
      v-for="project in projects"
      :key="project._id"
      :project="project"
    />
  </ul>
</template>

<script>
import ProjectPost from "@/components/project/ProjectPost.vue";

export default {
  components: {
    ProjectPost
  },
  props: ["projects"]
};
</script>

<style></style>
