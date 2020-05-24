<template>
  <div class="account">
    <button v-if="isAuthenticated" @click="onLogout">Log out</button>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  computed: {
    ...mapGetters({ isAuthenticated: "auth/isAuthenticated" })
  },
  methods: {
    onLogout() {
      this.$store.dispatch("auth/logout");
      return;
    }
  }
};
</script>

<style>
.account {
  position: absolute;
  top: 0;
  right: 0;
}
</style>
