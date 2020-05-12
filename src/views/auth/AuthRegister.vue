<template>
  <div class="signup">
    <h1>Sign Up</h1>

    <form @submit.prevent="submitSignUp" action="">
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
  </div>
</template>

<script>
export default {
  methods: {
    submitSignUp() {
      this.$store.dispatch("auth/register", this.user);
      return;
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
