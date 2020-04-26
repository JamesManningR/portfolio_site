<template>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 1025 1025"
    height="32"
    width="32"
    :aria-label="label"
  >
    <path :fill="color" :d="path" />
  </svg>
</template>

<script>
import icons from "@/assets/symbols";

export default {
  props: {
    set: String,
    name: String,
    label: String,
    class: String
  },
  computed: {
    path() {
      return icons[this.set][this.name].path;
    },
    color() {
      return icons[this.set][this.name].color;
    }
  }
};
</script>
