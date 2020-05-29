<template>
  <main class="project">
    <icon-button-link
      routeName="projects"
      icon="left-arrow"
      iconSet="iconMoon"
      variation="primary"
      class="project__back"
    >
      Back to Projects
    </icon-button-link>
    <project-post :project="project.project"></project-post>
  </main>
</template>

<script>
import ProjectPost from "@/components/project/ProjectPost";
import { mapState } from "vuex";
import IconButtonLink from "@/components/general/IconButtonLink";

export default {
  components: {
    ProjectPost,
    IconButtonLink
  },
  computed: {
    ...mapState(["project"])
  }
};
</script>

<style lang="scss">
.project {
  position: relative;
  &__back {
    position: absolute;
    top: 0;
    left: 0;
    z-index: 20;
    border-top-right-radius: 0;
    border-bottom-left-radius: 0;
    border-top-left-radius: 0;
  }
}
</style>
