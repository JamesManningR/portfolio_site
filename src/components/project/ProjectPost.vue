<template>
  <article class="project">
    <project-image-banner
      class="project__imageBanner"
      :images="project.images"
      @imageSelected="enlargedImage = $event"
    />
    <project-enlarged-image
      v-if="enlargedImage"
      :image="enlargedImage"
      @close="enlargedImage = false"
    />
    <div class="project__content">
      <h1 class="project__title">{{ project.title }}</h1>
      <project-link-list class="project__links" :links="project.links" />
      <skills-display class="project__skills" :skills="project.skills" />
      <blog-text class="project__body" :project="project" />
    </div>
  </article>
</template>

<script>
import ProjectImageBanner from "@/components/project/ProjectImageBanner.vue";
import SkillsDisplay from "@/components/general/SkillsDisplay.vue";
import ProjectLinkList from "@/components/project/ProjectLinkList.vue";
import BlogText from "@/components/general/BlogText.vue";
import ProjectEnlargedImage from "@/components/project/ProjectEnlargedImage";

export default {
  components: {
    ProjectImageBanner,
    BlogText,
    SkillsDisplay,
    ProjectLinkList,
    ProjectEnlargedImage
  },
  data() {
    return {
      enlargedImage: ""
    };
  },
  props: {
    project: Object
  }
};
</script>

<style lang="scss">
.project {
  height: 100%;
  padding: 0;
  &__imageBanner {
    margin-bottom: 0.5em;
  }
  &__content {
    margin-left: 1.5em;
  }
  &__links {
    margin-bottom: 1em;
  }
}
</style>
