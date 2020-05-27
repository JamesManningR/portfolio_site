<template>
  <main class="project">
    <icon-button-link
      pathName="projects"
      icon="left-arrow"
      iconSet="iconMoon"
      variation="primary"
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

<style></style>
