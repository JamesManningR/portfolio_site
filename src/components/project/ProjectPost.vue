<template>
  <article class="project">
    <project-image-banner :images="project.project.images" />
    <skill-display :skills="project.project.skills" />
    <project-link-list :links="project.project.links" />
    <blog-text :project="project.project" />
  </article>
</template>

<script>
import ProjectImageBanner from "@/components/project/ProjectImageBanner.vue";
import SkillDisplay from "@/components/project/ProjectSkillsDisplay.vue";
import ProjectLinkList from "@/components/project/ProjectLinkList.vue";
import BlogText from "@/components/general/BlogText.vue";

export default {
  components: {
    ProjectImageBanner,
    BlogText,
    SkillDisplay,
    ProjectLinkList
  },
  props: {
    project: Object
  }
};
</script>

<style>
.project {
  padding: 0;
}
</style>
