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
      // TODO: Add Signin change into the vuex instance

};
</script>

<style></style>
