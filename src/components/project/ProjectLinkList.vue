<template>
  <ul class="projectLinks">
    <li class="projectLinks__item" v-for="(link, index) in links" :key="index">
      <a class="projectLink" :href="link.url">
        <svg-path class="projectLink__icon" set="links" :name="link.type" />
        <span class="projectLink__text">
          {{ link.handle }}
        </span>
      </a>
    </li>
  </ul>
</template>

<script>
export default {
  props: {
    links: Array
  }
};
</script>

<style lang="scss">
@import "@/scss/abstracts/_mixins.scss";
@import "@/scss/abstracts/_functions.scss";
@import "@/scss/abstracts/_variables";

.projectLinks {
  display: flex;
}

.projectLink {
  display: inline-flex;
  padding: 0.5em 0.4em;
  margin-right: 0.5em;
  align-items: center;
  color: col(dark, light);
  border: 2px solid col(dark, light);
  border-radius: 0.3em;
  &:hover {
    color: col(light);
    background-color: col(dark, light);
  }
  &__icon {
    margin-right: 0.5em;

    @include square(1.4em, false);
  }
}
</style>
