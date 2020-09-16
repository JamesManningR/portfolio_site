<template>
  <div class="account">
    <svg-path class="sidebar__icon" set="icoMoon" name="user" />
    <button
      class="sidebar__navText account__button account__logout"
      v-if="isAuthenticated"
      @click="onLogout"
    >
      Log out
    </button>
    <button
      @click="toggled = !toggled"
      v-else
      class="sidebar__navText account__toggle"
      :aria-active="toggled"
    >
      Log In
    </button>
    <app-login v-if="toggled && !isAuthenticated" />
  </div>
</template>

<script>
import { mapGetters } from "vuex";

import appLogin from "@/components/app/AppLogin.vue";

export default {
  components: {
    appLogin
  },
  computed: {
    ...mapGetters({ isAuthenticated: "auth/isAuthenticated" })
  },
  data() {
    return {
      toggled: false
    };
  },
  methods: {
    onLogout() {
      this.$store.dispatch("auth/logout");
      return;
    }
  }
};
</script>

<style lang="scss">
.account {
  @include bp(desktop) {
    display: flex;
    align-items: center;
  }
  &__toggle {
    padding: 0;
    color: col(fg);
    font: inherit;
    text-transform: uppercase;
    background: none;
    border: none;
    cursor: pointer;
    &[aria-active="true"] {
      opacity: 0.5;
      filter: drop-shadow(0px 0px 3px #ffffff55);
    }
  }
  &__logout {
    font-size: 1em;
    text-transform: uppercase;
  }
}
</style>
