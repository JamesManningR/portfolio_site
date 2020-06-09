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
  }
};
</script>

<style lang="scss">
@import "./scss/main.scss";

body {
  width: 100vw;
  min-height: 100vh;
  color: col(fg);
  background-color: col(bg, dark);
}

#app {
  display: flex;
  min-height: 100vh;
  flex-direction: column;

  @include bp(tablet) {
    display: grid;
    grid-template-columns: max-content 1fr;
  }
}
main {
  padding: 1rem;
  flex-grow: 1;
}
</style>
