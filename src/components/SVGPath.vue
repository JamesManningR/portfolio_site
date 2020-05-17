<template>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 1025 1025"
    height="32"
    width="32"
    :aria-label="label"
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
