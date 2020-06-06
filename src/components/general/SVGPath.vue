<template>
  <svg
    class="svgPath"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 1025 1025"
    :alt="label"
    :class="className"
  >
    <path v-for="(path, index) in paths" :key="index" :fill="color" :d="path" />
  </svg>
</template>

<script>
import icons from "@/assets/symbols";

export default {
  props: {
    set: String,
    name: String,
    label: String,
    className: String
  },
  computed: {
    paths() {
      return icons[this.set][this.name].paths;
    },
    color() {
      return icons[this.set][this.name].color;
    }
  }
};
</script>

<style lang="scss">
.svgPath {
  @include square(1em);
}
</style>
