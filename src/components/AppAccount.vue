<template>
  <div class="account">
    <router-link v-if="!isAuthenticated" :to="{ name: 'login' }"
      >Log in</router-link
    >
    <router-link v-if="!isAuthenticated" :to="{ name: 'register' }"
      >Register</router-link
    >
    <button v-if="isAuthenticated" @click="onLogout">Log out</button>
  </div>
</template>

<script>
import auth from "@/services/firebaseAuth.service";

export default {
  methods: {
    onLogout() {
      auth.logOutUser();
    }
  },
  computed: {
    isAuthenticated() {
      return this.$store.getters["auth/isAuthenticated"];
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
