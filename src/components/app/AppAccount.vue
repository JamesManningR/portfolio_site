<template>
  <div class="account">
    <svg-path class="header__icon" set="icoMoon" name="user" />
    <button class="account__button" v-if="isAuthenticated" @click="onLogout">
      Log out
    </button>
    <button @click="toggled = !toggled" v-else class="account__toggle">
      Log In
    </button>
    <app-login class="account__button" v-if="toggled" />
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
  &__toggle {
    padding: 0;
    color: col(fg);
    font: inherit;
    text-transform: uppercase;
    background: none;
    border: none;
    cursor: pointer;
  }
}
</style>
