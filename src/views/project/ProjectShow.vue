<template>
  <main class="project">
    <project-post :project="project.project"></project-post>
  </main>
</template>

<script>
import ProjectPost from "@/components/project/ProjectPost";
import { mapState } from "vuex";

export default {
  components: {
    ProjectPost
  },
  computed: {
    ...mapState(["project"])
  }
};
</script>

<style></style>
