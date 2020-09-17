<template>
  <section class="postText">
    <vue-simple-markdown :source="project.body" />
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
