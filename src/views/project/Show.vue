<template>
  <main class="project">
    <h1 class="project__title">{{ project.title }}</h1>
    <router-link :to="{name: 'project-new'}"></router-link>
    <p class="project__body">{{project.body}}</p>
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
