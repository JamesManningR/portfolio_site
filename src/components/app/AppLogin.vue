<template>
  <form class="login" @submit.prevent="submitLogin" action="">
    <input
      placeholder="Username"
      aria-label="username"
      class="login__username login__input"
      type="text"
      v-model="user.username"
    />
    <input
      placeholder="Password"
      aria-label="password"
      class="login__password login__input"
      type="password"
      v-model="user.password"
    />
    <button class="login__submit btn btn--dark" type="submit">log in</button>
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

<style lang="scss">
.login {
  display: flex;
  margin: 1rem 1rem;
  flex-direction: column;
  font-size: 0.4em;
  @include bp(desktop) {
    background-color: col(bg, light);
    padding: 1.2rem;
    position: absolute;
    top: 6rem;
    right: 0;
    font-size: 0.6em;
    width: max-content;
    align-items: flex-end;
    border-radius: 1rem;
  }
  &__input {
    max-width: 16em;
    @include bp(desktop) {
      max-width: unset;
      margin-bottom: 1rem;
    }
  }
  &__submit {
    min-width: max-content;
    @include bp(desktop) {
      width: max-content;
    }
  }
}
</style>
