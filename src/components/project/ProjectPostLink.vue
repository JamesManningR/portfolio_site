<template>
  <li class="projectPost">
    <template v-if="isAuthenticated">
      <router-link
        class="btn projectPost__action projectPost__action--edit projectPost__button projectPost__button--edit"
        :to="{ name: 'project-edit', params: { id: this.$vnode.key } }"
      >
        Edit
      </router-link>

      <confirm-button
        @confirm="deletePost"
				class="projectPost__action projectPost__action--delete"
				buttonClass="projectPost__button projectPost__button--delete"
      >
        <svg-path
          className="projectPost__deleteIcon"
          set="icoMoon"
          name="bin"
          label="bin"
        />
      </confirm-button>
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
    .projectPost__action {
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
	&__action {
		display: none;
		position: absolute;
		top: .5em;
		&--edit {
			left: .5em;
		}
		&--delete {
			right: .5em;
		}
	}
	&__button {
		font-size: 1em;
		background-color: col(primary);
		color: col(fg);
		padding: .75em 1em;
		&--edit {
			background-color: col(caution);
		}
		&--delete {
			background-color: col(failure);
			line-height: 0;
			padding-left: 1.5em;
			padding-right: 1.5em;
		}
	}
}
</style>
