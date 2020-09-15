<template>
  <li class="blogLink">
    <post-link-actions
      class="blogLink__actions"
      @delete="deletePost"
      :postId="blogPost._id"
      v-if="isAuthenticated"
    />

    <router-link
      class="blogLink__link"
      :to="{ name: 'blogPost-show', params: { id: blogPost._id } }"
    >
      <figure class="blogLink__post">
        <img
          class="blogLink__img"
          :src="blogPost.featuredImage.src"
          alt=""
        />
        <div class="blogLink__body">
          <h2 class="blogLink__title">{{ blogPost.title }}</h2>
          <p class="blogLink__excerpt">{{ firstNWords(blogPost.body, 10) }}</p>
        </div>
      </figure>
    </router-link>
  </li>
</template>

<script>
import { mapGetters } from "vuex";
import PostLinkActions from "@/components/general/PostLinkActions";

export default {
  components: {
    PostLinkActions
  },
  props: {
    blogPost: Object
  },
  computed: {
    ...mapGetters({ isAuthenticated: "auth/isAuthenticated" })
  },
  methods: {
    deletePost() {
      this.$store.dispatch("blog/deleteProject", this.blogPost);
    },
    firstNWords(string, n) {
      const newString = string
        .split(" ")
        .slice(0, n)
        .splice(" ");
      return newString;
    }
  }
};
</script>

<style lang="scss">
.blogLink {
  position: relative;
  &:hover,
  &:active {
    .blogLink__actions {
      display: flex;
    }
    .blogPostPost {
      &__title {
        opacity: 1;
      }
    }
  }
  &__post {
    display: grid;
    overflow: hidden;
    grid-template-rows: 12em 1fr;
    color: col(fg);
    background-size: cover;
    border-radius: 1em;
  }
  &__img {
    width: 100%;
    height: 100%;
    box-shadow: rgba(0, 0, 0, 0.5) 0 1px 12px;
    border-radius: 0.5em;
    transition: filter 0.25s ease-in;

    object-fit: cover;
  }
  &__body {
    padding: 1em 0.5em;
  }
  &__subtitle {
    display: inline-block;
    margin-bottom: 0.4em;
    opacity: 0.8;
  }
  &__title {
    width: 100%;
    top: 0;
    z-index: 20;
    color: col(fg);
    font-size: 1.2em;
    text-decoration: none;
    transition: opacity 0.25s ease-in;
    transition: transform 0.55s ease-out;
    &:visited {
      color: currentColor;
    }
  }
}
</style>
