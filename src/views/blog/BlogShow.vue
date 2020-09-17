<template>
  <main class="blog">
    <icon-button-link
      routeName="blogs"
      icon="left-arrow"
      iconSet="icoMoon"
      variation="primary"
      class="blog__back"
    >
      Back to blogs
    </icon-button-link>
    <blog-post :blog="blog.blog"></blog-post>
  </main>
</template>

<script>
import blogPost from "@/components/blog/frontend/BlogPost";
import IconButtonLink from "@/components/general/IconButtonLink";
import { mapState } from "vuex";

export default {
  components: {
    blogPost,
    IconButtonLink
  },
  computed: {
    ...mapState(["blog"])
  }
};
</script>

<style lang="scss">
.blog {
  position: relative;
  &__back {
    @include bp(desktop) {
      border-top-left-radius: 0;
      border-bottom-left-radius: 0;
    }
  }
}
</style>
