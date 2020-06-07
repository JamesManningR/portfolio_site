<template>
  <li class="projectPost">
    <template v-if="isAuthenticated">
      <div class="projectPostActions">
        <router-link
          class="btn projectPostActions__edit"
          :to="{ name: 'project-edit', params: { id: this.$vnode.key } }"
        >
          Edit
        </router-link>

        <confirm-button
          @confirm="deletePost"
          buttonClass="projectPostActions__delete"
        >
          <svg-path
            className="projectPost__deleteIcon"
            set="icoMoon"
            name="bin"
            label="bin"
          />
        </confirm-button>
      </div>
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

export default {
  props: {
    project: Object
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
  },
  methods: {
    deletePost() {
      this.$store.dispatch("project/deleteProject", this.project);
    }
  }
};
</script>

<style lang="scss">
.projectPost {
  position: relative;
  &:hover,
  &:active {
    .projectPostActions {
      display: flex;
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
}

.projectPostActions {
  display: none;
  width: 100%;
  position: absolute;
  padding: 0.5em 0.5em;
  justify-content: space-between;
  &__delete {
    font-size: 1em;
    color: col(fg);
    background-color: col(failure);
    padding-left: 1.5em;
    padding-right: 1.5em;
  }
}
</style>
