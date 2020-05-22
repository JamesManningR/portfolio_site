<template>
  <div id="app">
    <app-header />
    <transition name="fade" mode="out-in">
      <router-view />
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
  }
};
</script>

<style lang="scss">
@import './scss/main.scss';

#app {
  display: grid;
  max-width: 100vw;
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
    transform-origin: bottom;
    opacity: 0;
  }
  &-enter {
    transform: scaleY(0.98);
  }
  &-leave-to {
    transform: scaleY(0.98);
  }
}
</style>
