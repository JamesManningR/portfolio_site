<template>
  <ul class="projectSkills">
    <li class="projectSkills__item" v-for="skill in skills" :key="skill">
      <svg-path
        className="projectSkills__icon"
        set="skills"
        :name="skill"
        :label="skill"
      />
    </li>
  </ul>
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
.projectSkills {
  display: flex;
  margin: 1em 0;
  flex-wrap: wrap;
  list-style: none;
  &__item {
    margin: 0 0.4em;
  }
}
</style>
