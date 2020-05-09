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
export default {
  methods: {
    onLogout() {
      // TODO - Logout
      return;
    }
  },
  computed: {
    isAuthenticated() {
      // TODO - Check auth status
      return true;
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
