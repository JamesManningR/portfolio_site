<template>
  <main class="project">
    <project-image-banner :images="project.project.images" />
    <blog-text :project="project.project" />
  </main>
</template>

<script>
import ProjectImageBanner from "@/components/ProjectImageBanner.vue";
import BlogText from "@/components/BlogText.vue";
import { mapState } from "vuex";

export default {
  components: {
    ProjectImageBanner,
    BlogText
  },
  computed: {
    ...mapState(["project"])
  }
};
</script>

<style></style>
