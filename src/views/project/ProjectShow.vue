<template>
  <main class="project">
    <project-image-banner :images="project.project.images" />
    <skill-display :skills="project.project.skills" />
    <project-link-list :links="project.project.links" />
    <blog-text :project="project.project" />
  </main>
</template>

<script>
import ProjectImageBanner from "@/components/ProjectImageBanner.vue";
import BlogText from "@/components/BlogText.vue";
import SkillDisplay from "@/components/ProjectSkillsDisplay.vue";
import ProjectLinkList from "@/components/ProjectLinkList.vue";

import { mapState } from "vuex";

export default {
  components: {
    ProjectImageBanner,
    BlogText,
    SkillDisplay,
    ProjectLinkList
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
