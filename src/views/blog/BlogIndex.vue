<template>
  <main class="blog">
    <h1>Blog</h1>
    <p>Find out more about what I'm working on at the moment!</p>
  </main>
</template>

<script>
export default {
  computed: {
    isAuthed() {
      return this.$store.getters["auth/isAuthenticated"];
    }
  },
  created() {
    // If the the are no projects loaded
    this.$store.dispatch("blog/fetchBlogPosts");
  }
};
</script>

<style lang="scss">
</style>

