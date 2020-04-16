<template>
  <div id="app">
    <app-header />
    <router-view />
  </div>
</template>

<script>
import appHeader from "@/components/AppHeader.vue";

export default {
  components: {
    appHeader
  }
};
</script>

<style lang="scss">
#app {
  display: grid;
  grid-template-columns: 33rem 1fr;
}
</style>
