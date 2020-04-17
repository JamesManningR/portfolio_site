<template>
  <div class="signup">
    <form @submit.prevent="submitSignup" action="">
      <label>Email
        <input type="text" v-model="user.email">
      </label>
      <label>Password
        <input type="password" v-model="user.password">
      </label>
      <button type="submit">Post</button>
    </form>
  </div>
</template>

<script>
import firebaseAuthService from '@/services/firebaseAuthApi.service'

export default {
  methods: {
    submitSignup(){
      const formData = {
        email: this.user.email,
        password: this.user.password,
        returnSecureToken: true
      }
      firebaseAuthService.createUser(formData);
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
}
</script>


<style>
</style>