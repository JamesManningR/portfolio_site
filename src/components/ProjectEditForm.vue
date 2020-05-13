<template>
  <form class="projectForm">
    <div class="projectForm__formGroup projectForm__formGroup--title">
      <input
        aria-label="project title"
        id="ProjectFormTitle"
        placeholder="Title"
        class="projectForm__input projectForm__input--title"
        type="text"
        v-model="project.title"
      />
      <input type="url" placeholder="link" />
    </div>
    <div class="projectForm__formGroup projectForm__formGroup--body">
      <textarea
        aria-label="project body"
        id="ProjectFormBody"
        placeholder="Body"
        class="projectForm__input projectForm__input--body"
        v-model="project.body"
      />
    </div>
    <div class="projectForm__formGroup projectForm__formGroup--color">
      <input
        aria-label="project color"
        id="ProjectFormColor"
        class="projectForm__input projectForm__input--color"
        type="color"
        v-model="project.color"
      />
    </div>
    <div class="projectForm__formGroup projectForm__formGroup--featured">
      <file-uploader
        aria-label="project image"
        id="ProjectFormFeatured"
        class="projectForm__input projectForm__input--featured"
        @fileUploaded="project.images = $event"
        @featuredSelected="project.featuredImage = $event"
      />
    </div>
    <project-skill-picker @skillsChanged="project.skills = $event" />
    <div class="projectForm__formGroup projectForm__formGroup--submit">
      <slot name="submit"></slot>
    </div>
    <figure class="thumbnail__preview" :style="thumbnailStyling">
      <h2 class="thumbnail__title">{{ project.title }}</h2>
    </figure>
  </form>
</template>

<script>
import fileUploader from "@/components/FileUploader.vue";
import projectSkillPicker from "@/components/ProjectSkillPicker.vue";

export default {
  data() {
    return {
      project: {
        title: "title",
        body: "body",
        images: [],
        featuredImage: null,
        color: "",
        skills: [],
      },
    };
  },
  watch: {
    project: {
      deep: true,

      handler() {
        this.$emit("change", this.project);
      },
    },
  },
  computed: {
    thumbnailStyling() {
      const backgroundImage = this.project.featuredImage
        ? this.project.images.find(
            (image) => image._id === this.project.featuredImage
          ).src
        : "";
      const backgroundColor = this.project.color ? this.project.color : "";
      return {
        backgroundColor,
        backgroundImage,
      };
    },
  },
  components: {
    fileUploader,
    projectSkillPicker,
  },
};
</script>

<style lang="scss">
.projectForm {
	display: flex;
	flex-direction: column;
	&__input {
		width: 100%;
		min-width: 2rem;
		&--title {
			margin-right: 1rem;
			font-family: Muli;
			font-size: 1.6em;
			font-weight: 700;
		}
		&--body {
			flex-grow: 1;
			font-family: inherit;
		}
		&--color {
			height: 4rem;
			padding: 0;
			border: 0;
		}
	}
	&__formGroup {
		width: 100%;
		margin-bottom: 1rem;
		&--title {
			display: flex;
			margin-bottom: 1.5rem;
		}
		&--body {
			display: flex;
			flex-direction: column;
			flex-grow: 1;
		}
	}
}
.thumbnail {
	&__preview {
		display: flex;
		width: 280px;
		height: 200px;
		position: absolute;
		right: 1em;
		bottom: 1em;
		align-items: center;
		justify-content: center;
		color: #FFFFFF;
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
		text-shadow: 2px 1px 12px #000000EE;
	}
}

</style>
