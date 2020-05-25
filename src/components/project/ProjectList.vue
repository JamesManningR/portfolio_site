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

<style>
.projects {
  display: grid;
  flex-grow: 1;
  grid-auto-flow: row;
  grid-template-rows: repeat(3, 1fr);
  grid-template-columns: repeat(4, 1fr);
  list-style: none;

  gap: 1em;
}
</style>
