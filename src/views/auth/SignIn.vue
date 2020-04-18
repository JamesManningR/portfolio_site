<template>
  <form @submit.prevent="submitSignIn" action="">
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
    submitSignup(){
      const formData = {
        email: this.user.email,
        password: this.user.password,
        returnSecureToken: true
      }
      this.$store.dispatch('auth/signin', formData)
    }
  },
  data() {
    return {
      user: {
        email: '',
        password: ''
      }
    }
  }
};
</script>

<style></style>
