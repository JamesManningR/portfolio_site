<template>
  <section class="skillsDisplay">
    <h2>Skills Used</h2>
    <ul class="skillsDisplay__list">
      <li class="skillsDisplay__item" v-for="skill in skills" :key="skill">
        <svg-path
          class="skillsDisplay__item"
          set="skills"
          :name="skill"
          :label="skill"
        />
      </li>
    </ul>
  </section>
</template>

<script>
import svgPath from "@/components/general/SVGPath.vue";

export default {
  components: {
    svgPath
  },
  props: {
    skills: Array
  }
};
</script>

<style lang="scss">
.skillsDisplay {
  &__list {
    display: flex;
    margin: 1em 0;
    flex-wrap: wrap;
    list-style: none;
  }
  &__item {
    margin: 0 0.4em;
  }
}
</style>
