<template>
  <article class="project">
    <post-image-banner
      class="project__imageBanner"
      :images="project.images"
      @imageSelected="enlargedImage = $event"
    />
    <post-enlarged-image
      v-if="enlargedImage"
      :image="enlargedImage"
      @close="enlargedImage = false"
    />
    <div class="project__content">
      <h1 class="project__title">{{ project.title }}</h1>
      <project-link-list class="project__links" :links="project.links" />
      <skills-display class="project__skills" :skills="project.skills" />
      <post-text class="project__body" :project="project" />
    </div>
  </article>
</template>

<script>
import PostImageBanner from "@/components/post/PostImageBanner.vue";
import SkillsDisplay from "@/components/general/SkillsDisplay.vue";
import ProjectLinkList from "@/components/project/frontend/ProjectLinkList.vue";
import PostText from "@/components/post/PostText.vue";
import PostEnlargedImage from "@/components/post/PostEnlargedImage";

export default {
  components: {
    PostImageBanner,
    PostText,
    SkillsDisplay,
    ProjectLinkList,
    PostEnlargedImage
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
