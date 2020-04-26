<template>
  <ul>
    <li v-for="(brand, key) in brands" :key="key">
      <svg-path set="brands" :name="key" :label="key" />
      <span>{{ key }}</span>
    </li>
  </ul>
</template>

<script>
import symbols from "@/assets/symbols";
import svgPath from "@/components/SVGPath.vue";

export default {
  data() {
    return {
      brands: symbols.brands
    };
  },
  components: {
    svgPath
  }
};
</script>

<style></style>
