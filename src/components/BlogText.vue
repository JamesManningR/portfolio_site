<template>
  <section class="project__text">
    <h1>{{ project.title }}</h1>
    <vue-simple-markdown :source="project.body"></vue-simple-markdown>
  </section>
</template>

<script>
export default {
  props: {
    project: Object
  }
}
</script>

<style>

</style>