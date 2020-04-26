<template>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 32 32"
    width="32"
    height="32"
  >
    <path :fill="color" :d="path" />
  </svg>
</template>

<script>
import icons from "@/assets/symbols";

export default {
  props: {
    name: String
  },
  computed: {
    path() {
      return icons[this.name].path;
    },
    color() {
      return icons[this.name].color;
    }
  }
};
</script>
