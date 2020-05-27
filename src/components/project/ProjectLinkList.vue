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
export default {
  props: {
    links: Array
  }
};
</script>

<style></style>
