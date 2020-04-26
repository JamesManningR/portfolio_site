<template>
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32">
    <path :d="path" />
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
      return icons[this.name];
    }
  }
};
</script>
