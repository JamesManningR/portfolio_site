<template>
  <li class="projectPost">
    <template v-if="isAuthenticated">
      <router-link
        class="projectPost__button projectPost__edit"
        :to="{ name: 'project-edit', params: { id: this.$vnode.key } }"
      >
        Edit
      </router-link>
      <button
        class="projectPost__button projectPost__delete"
        @click="deletePost"
      >
        <svg-path
          className="projectPost__deleteIcon"
          set="iconMoon"
          name="bin"
          label="bin"
        />
      </button>
    </template>
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
import svgPath from "@/components/SVGPath.vue";

export default {
  components: {
    svgPath
  },
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
  position: relative;
  &:hover,
  &:active {
    .projectPost__button {
      display: block;
    }
  }
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
  &__button {
    display: none;
    font-size: 1em;
    border-radius: 0.5em;
    color: #ffffff;
    position: absolute;
    padding: 0.4em 1em;
    border: none;
    appearance: none;
    top: 0.5em;
    &:hover {
      cursor: pointer;
    }
  }
  &__delete {
    right: 0.5em;
    background-color: #de5843;
    &Icon {
      height: 1em;
      width: 1em;
      fill: currentColor;
    }
  }
  &__edit {
    left: 0.5em;
    background-color: #edaf42;
  }
}
</style>
