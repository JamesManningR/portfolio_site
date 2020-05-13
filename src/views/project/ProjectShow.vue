<template>
  <main class="project">
    <project-image-banner :images="project.project.images" />
    <skill-display :skills="project.project.skills" />
    <blog-text :project="project.project" />
  </main>
</template>

<script>
import ProjectImageBanner from "@/components/ProjectImageBanner.vue";
import BlogText from "@/components/BlogText.vue";
import SkillDisplay from "@/components/ProjectShowSkills.vue";

import { mapState } from "vuex";

export default {
  components: {
    ProjectImageBanner,
    BlogText,
    SkillDisplay
  },
  computed: {
    ...mapState(["project"])
  }
};
</script>

<style>
.project {
  padding: 0;
}
</style>
