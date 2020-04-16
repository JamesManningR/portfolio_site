<template>
  <main class="project">
    <ImageBanner :images="images" />
    <h1 class="project__title">{{ project.title }}</h1>
    <p class="project__body"></p>
  </main>
</template>

<script>
import ImageBanner from "@/components/ProjectImageBanner.vue";

export default {
  components: {
    ImageBanner
  },
  props: {
    project: {
      type: Object,
      require: true
    }
  }
};
</script>

<style></style>
