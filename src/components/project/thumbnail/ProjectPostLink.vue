<template>
  <li class="projectThumb">
    <post-link-actions
      class="projectThumb__actions"
      @delete="deletePost"
      :postId="project._id"
      v-if="isAuthenticated"
    />

    <router-link
      class="projectThumb__link"
      :to="{ name: 'project-show', params: { id: project._id } }"
    >
      <figure class="projectThumb__post">
        <img
          class="projectThumb__img"
          :src="project.featuredImage.src"
          alt=""
        />
        <div class="projectThumb__body">
          <span class="projectThumb__subtitle"
            ><span v-if="project.featured">Featured </span>Project</span
          >
          <h2 class="projectThumb__title">{{ project.title }}</h2>
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
    project: Object
  },
  computed: {
    ...mapGetters({ isAuthenticated: "auth/isAuthenticated" })
  },
  methods: {
    deletePost() {
      this.$store.dispatch("project/deleteProject", this.project);
    }
  }
};
</script>

<style lang="scss">
.projectThumb {
  position: relative;
  &:hover,
  &:active {
    .projectThumb__actions {
      display: flex;
    }
    .projectPost {
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
