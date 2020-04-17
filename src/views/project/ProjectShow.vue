<template>
  <main class="project">
    <blog-text :project="project" />
  </main>
</template>

<script>
import BlogText from "@/components/BlogText.vue";

export default {
  components: {
    BlogText,
  },
  props: {
    project: {
      type: Object,
      require: true,
    },
  },
};
</script>

<style></style>
