<template>
  <section class="project__text">
    <div class="project__title">
      <h1>{{ project.title }}</h1>
      <a v-if="project.link" class="project__link" href="#">Link</a>
    </div>
    <vue-simple-markdown :source="project.body"></vue-simple-markdown>
  </section>
</template>

<script>
export default {
  props: {
    project: Object
  }
};
</script>

<style lang="scss">
.project {
  &__title {
    display: flex;
    align-items: baseline;

    h1 {
      display: inline-block;
      margin-right: 2rem;
    }
  }
  &__link {
    text-align: right;
  }
}
</style>
