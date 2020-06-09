<template>
  <transition-group class="projects" tag="ul" name="slide">
    <project-post-link
      class="projects__post"
      v-for="project in projects"
      :key="project._id"
      :project="project"
    />
  </transition-group>
</template>

<script>
import ProjectPostLink from "@/components/project/thumbnail/ProjectPostLink";

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
  list-style: none;

  gap: 1em;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(15em, 1fr));
  grid-auto-rows: auto;
  width: 100%;
}
</style>
