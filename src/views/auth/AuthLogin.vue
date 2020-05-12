<template>
  <form @submit.prevent="submitLogin" action="">
    <h1>Sign In</h1>
    <label
      >Username
      <input type="text" v-model="user.username" />
    </label>
    <label
      >Password
      <input type="password" v-model="user.password" />
    </label>
    <button type="submit">Post</button>
  </form>
</template>

<script>
export default {
  methods: {
    submitLogin() {
      this.$store.dispatch("auth/login", this.user);
    }
  },
  data() {
    return {
      user: {
        username: "",
        password: ""
      }
    };
  }
};
</script>

<style></style>
