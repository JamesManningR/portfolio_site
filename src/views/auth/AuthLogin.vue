<template>
  <div class="signin auth">
    <h1 class="auth__title">Sign in</h1>

    <form class="auth__form" @submit.prevent="submitLogin" action="">
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
