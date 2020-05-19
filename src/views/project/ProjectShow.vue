<template>
  <main class="project">
    <project-image-banner :images="project.project.images" />
    <skill-display :skills="project.project.skills" />
    <project-link-list :links="project.project.links" />
    <blog-text :project="project.project" />
  </main>
</template>

<script>
import ProjectImageBanner from "@/components/project/ProjectImageBanner.vue";
import SkillDisplay from "@/components/project/ProjectSkillsDisplay.vue";
import ProjectLinkList from "@/components/project/ProjectLinkList.vue";
import BlogText from "@/components/general/BlogText.vue";

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
