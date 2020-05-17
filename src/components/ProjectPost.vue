<template>
  <li class="projectPost">
    <button v-if="isAuthenticated" @click="deletePost">X</button>
    <router-link
      class="projectPost__link"
      :to="{ name: 'project-show', params: { id: this.$vnode.key } }"
    >
      <figure class="projectPost__post" :style="blockStyling">
        <h2 class="projectPost__title">{{ project.title }}</h2>
      </figure>
    </router-link>
  </li>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  props: {
    project: Object
  },
  methods: {
    deletePost() {
      this.$store.dispatch("project/deleteProject", this.project);
    }
  },
  computed: {
    ...mapGetters({ isAuthenticated: "auth/isAuthenticated" }),
    blockStyling() {
      const backgroundImage = this.project.featuredImage
        ? `url(${this.project.featuredImage.src})`
        : "";
      const backgroundColor = this.project.color ? this.project.color : "";
      return {
        backgroundColor,
        backgroundImage
      };
    }
  }
};
</script>

<style lang="scss">
.projectPost {
  &__post {
    display: flex;
    height: 100%;
    align-items: center;
    justify-content: center;
    color: #ffffff;
    background-size: cover;

    &:hover {
      h2 {
        transform: scale(1.2);
      }
    }
    h2 {
      text-decoration: none;
      transition: transform 0.55s ease-out;
      &:visited {
        color: currentColor;
      }
    }
  }
  &__title {
    text-shadow: 2px 1px 12px #000000ee;
  }
}
</style>
