<template>
  <div id="app">
    <app-header />
    <transition name="fade" mode="out-in">
      <router-view />
    </transition>
  </div>
</template>

<script>
import appHeader from "@/components/AppHeader.vue";
import "./assets/symbol-defs.svg";

export default {
  components: {
    appHeader
  },
  created() {
    this.$store.dispatch("auth/autoSignin");
  }
};
</script>

<style lang="scss">
#app {
  display: grid;
  grid-template-columns: 33rem 1fr;
}
main {
  padding: 1rem;
}

.fade {
  &-enter-active,
  &-leave-active {
    transition: all 0.15s ease;
  }

  &-enter,
  &-leave-to {
    opacity: 0;
  }
  &-enter {
    transform: translateY(-10px);
  }
  &-leave-to {
    transform: translateY(10px);
  }
}
</style>
