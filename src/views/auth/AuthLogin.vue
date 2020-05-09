<template>
  <form @submit.prevent="submitSignIn" action="">
    <h1>Sign In</h1>
    <label
      >Email
      <input type="text" v-model="user.email" />
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
    submitSignIn() {
      // TODO - Sign In Logic
      return;
    }
  },
  data() {
    return {
      user: {
        email: "",
        password: ""
      }
    };
  }
};
</script>

<style></style>
