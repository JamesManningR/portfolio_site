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
import firebaseAuth from "@/services/firebaseAuth.service";

export default {
  methods: {
    submitSignIn() {
      const formData = {
        email: this.user.email,
        password: this.user.password
      };
      firebaseAuth.logInUser(formData);
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
