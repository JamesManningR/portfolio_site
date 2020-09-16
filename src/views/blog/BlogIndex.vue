<template>
  <main class="blog">
    <h1>Blog</h1>
    <p>Find out more about what I'm working on at the moment!</p>
    <icon-button-link
      iconSet="icoMoon"
      icon="add"
      routeName="blog-new"
      variation="success"
      v-if="isAuthed"
    >
      New Post
    </icon-button-link>
  </main>
</template>

<script>
import IconButtonLink from "@/components/general/IconButtonLink";

export default {
  components: {
    IconButtonLink
  },
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

<style lang="scss"></style>
