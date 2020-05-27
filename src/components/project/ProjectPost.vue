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
      @next="console.log('next')"
      @previous="console.log('previous')"
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
import ProjectEnlargedImage from '@/components/project/ProjectEnlargedImage';

export default {
  components: {
    ProjectImageBanner,
    BlogText,
    SkillDisplay,
    ProjectLinkList,
    ProjectEnlargedImage
  },
  data() {
    return {
      enlargedImage: ""
    }
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
