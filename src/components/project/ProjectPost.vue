<template>
  <article class="project">
    <project-image-banner
      class="project__imageBanner"
      :images="project.images"
    />
    <h1 class="project__title">{{ project.title }}</h1>
    <project-link-list class="project__linkList" :links="project.links" />
    <skill-display class="project__skills" :skills="project.skills" />
    <blog-text class="project__body" :project="project" />
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
