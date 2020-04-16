<template>
  <main class="project">
    <h1 class="project__title">{{ project.title }}</h1>
    <p class="project__body"></p>
  </main>
</template>

<script>
export default {
  components: {
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
