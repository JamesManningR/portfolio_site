<template>
  <div class="signup">
    <h1>Sign Up</h1>

    <form @submit.prevent="submitSignUp" action="">
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
  </div>
</template>

<script>
export default {
  methods: {
    submitSignUp() {
      const userData = {
        email: this.user.email,
        password: this.user.password
      };
      console.log(userData);
      this.$store.dispatch("auth/signup", userData);
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
