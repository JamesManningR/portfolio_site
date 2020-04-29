<template>
  <ul>
    <li v-for="skill in skills" :key="skill">
      <svg-path set="skills" :name="skill" :label="skill" />
    </li>
  </ul>
</template>

<script>
import svgPath from "@/components/SVGPath.vue";

export default {
  props: {
    skills: Array
  },
  components: {
    svgPath
  }
};
</script>

<style></style>
