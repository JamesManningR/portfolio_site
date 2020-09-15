<template>
  <div id="app" :class="{ '--expandedSidebar': header.headerToggled }">
    <app-header class="app__header" />
    <app-sidebar class="app__sidebar" />
    <div class="section app__main">
      <transition name="fade" mode="out-in">
        <router-view class="app__page" :key="$route.fullPath" />
      </transition>
    </div>
    <notification-list />
  </div>
</template>

<script>
import appHeader from "@/components/app/header/Header.vue";
import appSidebar from "@/components/app/sidebar/Sidebar.vue";
import notificationList from "@/components/app/notification/NofiticationList.vue";

import { mapState } from "vuex";

export default {
  components: {
    appHeader,
    appSidebar,
    notificationList
  },
  created() {
    this.$store.dispatch("auth/autoLogin");
  },
  computed: mapState(["header"])
};
</script>

<style lang="scss">
@import "./scss/main.scss";

body {
  width: 100vw;
  min-height: calc(100vh - 2rem);
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
  display: grid;
  max-width: 100vw;
  min-height: 100vh;
  height: 100%;
  padding: 1rem;
  grid-template-areas: "header" "main";
  grid-template-rows: auto 1fr;
  gap: 1rem;
  @include bp(desktop) {
    grid-template-areas: "header sidebar" "main main";
  }
}
.app {
  &__header {
    grid-area: header;
  }
  &__sidebar {
    display: none;
    @include bp(desktop) {
      display: flex;
    }
    grid-area: sidebar;
  }
  &__main {
    height: 100%;
    grid-area: main;
    overflow: hidden;
  }
}

#app.--expandedSidebar {
  grid-template-areas: "header header" "main sidebar";
  grid-template-columns: 1fr max-content;
  .app__sidebar {
    display: initial;
    @include bp(desktop) {
      display: flex;
    }
  }

  @include bp(desktop) {
    grid-template-areas: "header sidebar" "main main";
  }
}

main {
  padding: 1rem;
  flex-grow: 1;
}
</style>
