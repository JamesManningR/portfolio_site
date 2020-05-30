<template>
  <div id="app">
    <app-header />
    <transition name="fade" mode="out-in">
      <router-view :key="$route.fullPath" />
    </transition>
    <notification-list />
  </div>
</template>

<script>
import appHeader from "@/components/app/AppHeader.vue";
import notificationList from "@/components/notification/NofiticationList.vue";

export default {
  components: {
    appHeader,
    notificationList
  },
  created() {
    this.$store.dispatch("auth/autoLogin");
    this.$store.dispatch("settings/fetchOptions");
  }
};
</script>

<style lang="scss">
@import "./scss/main.scss";

body {
  color: col(dark, light);
  background-color: col(light, light);
}

#app {
  display: grid;
  max-width: 100vw;
  grid-template-columns: 1fr 4fr;
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
    transform-origin: left;
    opacity: 0;
  }
  &-enter {
    transform: translateX(-2em);
  }
  &-leave-to {
    transform: translateX(2em);
  }
}
</style>
