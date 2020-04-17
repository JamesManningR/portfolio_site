<template>
  <form class="projectForm">
    <div class="projectForm__formGroup projectForm__formGroup--title">
      <input
        aria-label="project title"
        id="ProjectFormTitle"
        class="projectForm__input projectForm__input--title"
        type="text"
        v-model="project.title"
        @input="update()"
      />
    </div>
    <div class="projectForm__formGroup projectForm__formGroup--body">
      <textarea
        aria-label="project body"
        id="ProjectFormBody"
        class="projectForm__input projectForm__input--body"
        v-model="project.body"
        @input="update()"
      />
    </div>
    <div class="projectForm__formGroup projectForm__formGroup--color">
      <input
        aria-label="project color"
        id="ProjectFormColor"
        class="projectForm__input projectForm__input--color"
        type="color"
        v-model="project.color"
        @input="update()"
      />
    </div>
    <div class="projectForm__formGroup projectForm__formGroup--featured">
      <input
        aria-label="project featured image"
        id="ProjectFormFeatured"
        class="projectForm__input projectForm__input--featured"
        type="file"
        @input="update()"
      />
    </div>
    <div class="projectForm__formGroup projectForm__formGroup--submit">
      <slot name="submit"></slot>
    </div>
  </form>
</template>

<script>
export default {
  data() {
    return {
      project: {
        title: "title",
        body: "body",
        images: [],
        featuredImage: "",
        color: "",
        skills: [],
      },
    };
  },
  methods: {
    update() {
      this.$emit("change", this.project);
    },
  },
};
</script>

<style lang="scss">
.projectForm {
	display: flex;
	flex-direction: column;
	&__input {
		width: 100%;
		&--title {
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
			margin-bottom: 1.5rem;
		}
		&--body {
			display: flex;
			flex-direction: column;
			flex-grow: 1;
		}
	}
}

</style>
