<template>
  <main class="project">
    <blog-text :project="project.project" />
  </main>
</template>

<script>
import BlogText from "@/components/BlogText.vue";
import { mapState } from 'vuex'

export default {
  components: {
    BlogText
  },
  computed: {
    ...mapState(['project'])
  }
};
</script>

<style></style>
