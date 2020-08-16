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

  @include bp(150em) {
    font-size: 3em;
  }
  @include bp(200em) {
    font-size: 4em;
  }
}

#app {
  display: flex;
  min-height: 100vh;
  flex-direction: column;
}
main {
  padding: 1rem;
  flex-grow: 1;
}
</style>
