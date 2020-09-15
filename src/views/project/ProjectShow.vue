<template>
  <main class="project">
    <icon-button-link
      routeName="projects"
      icon="left-arrow"
      iconSet="icoMoon"
      variation="primary"
      class="project__back"
    >
      Back to Projects
    </icon-button-link>
    <project-post :project="project.project"></project-post>
  </main>
</template>

<script>
import ProjectPost from "@/components/project/frontend/ProjectPost";
import IconButtonLink from "@/components/general/IconButtonLink";
import { mapState } from "vuex";

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
    @include bp(desktop) {
    border-top-left-radius: 0;
    border-bottom-left-radius: 0;
    }
  }
}
</style>
