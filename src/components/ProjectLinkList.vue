<template>
  <ul>
    <li v-for="(link, index) in links" :key="index">
      <a :href="link.url">
        <svg-path set="links" :name="link.type" />
        <span>
          {{ link.handle }}
        </span>
      </a>
    </li>
  </ul>
</template>

<script>
import svgPath from "@/components/SVGPath.vue";

export default {
  props: {
    links: Array
  },
  components: {
    svgPath
  }
};
</script>

<style></style>
