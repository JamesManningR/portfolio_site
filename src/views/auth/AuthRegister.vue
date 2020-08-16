<template>
  <div class="signup auth">
    <h1 class="auth__title">Sign Up</h1>

    <form class="auth__form" @submit.prevent="submitSignUp" action="">
      <label class="auth__label"
        >Username
        <input
          class="auth__username auth__input"
          type="text"
          v-model="user.username"
        />
      </label>
      <label class="auth__label"
        >Password
        <input
          class="auth__password auth__input"
          type="password"
          v-model="user.password"
        />
      </label>
      <button class="auth__submit" type="submit">Post</button>
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

<style>
.authPage {
  display: flex;
  align-content: center;
  justify-content: center;
}
</style>
