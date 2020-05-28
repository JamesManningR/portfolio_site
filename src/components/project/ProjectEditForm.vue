<template>
  <form class="projectForm">
    <section class="projectForm__formGroup projectForm__formGroup--images">
      <file-uploader
        aria-label="project image"
        id="ProjectFormImages"
        class="projectForm__input projectForm__input--images"
        @fileUploaded="value.images = $event"
        @featuredSelected="featuredSelected($event)"
      />
    </section>

    <section class="projectForm__formGroup projectForm__formGroup--title">
      <input
        aria-label="project title"
        id="ProjectFormTitle"
        placeholder="Title"
        class="projectForm__input projectForm__input--title"
        type="text"
        v-model="value.title"
      />
    </section>

    <project-link-input
      class="projectForm__formGroup projectForm__formGroup--links"
      v-model="value.links"
    />

    <project-skill-picker
      class="projectForm__formGroup projectForm__formGroup--skills"
      v-model="value.skills"
    />

    <section class="projectForm__formGroup projectForm__formGroup--color">
      <input
        aria-label="project color"
        id="ProjectFormcolor"
        class="projectForm__input projectForm__input--color"
        type="color"
        v-model="value.color"
      />
    </section>

    <section class="projectForm__formGroup projectForm__formGroup--body">
      <textarea
        aria-label="project body"
        id="ProjectFormBody"
        placeholder="Body"
        class="projectForm__input projectForm__input--body"
        v-model="value.body"
      />
    </section>

    <div class="projectForm__formGroup projectForm__formGroup--submit">
      <slot
        class="projectForm__input projectForm__input--submit"
        name="submit"
      ></slot>
    </div>
  </form>
</template>

<script>
import fileUploader from "@/components/general/FileUploader.vue";
import projectSkillPicker from "@/components/project/ProjectSkillPicker.vue";
import ProjectLinkInput from "@/components/project/ProjectLinkInput";

export default {
  components: {
    fileUploader,
    projectSkillPicker,
    ProjectLinkInput
  },
  props: { value: Object },
  methods: {
    featuredSelected(evt) {
      this.value.featuredImage = evt.id;
    }
  },
  watch: {
    value: {
      deep: true,
      handler() {
        this.$emit("input", this.value);
      }
    }
  }
};
</script>

<style lang="scss">
@import "@/scss/abstracts/_mixins.scss";
@import "@/scss/abstracts/_functions.scss";
@import "@/scss/abstracts/_variables";

.projectForm {
  display: grid;
  height: 100%;
  flex-direction: column;
  grid-auto-columns: 1fr;
  grid-template-areas: "images images images images" "title title title color" "link link skills skills" "body body body body" "submit submit submit submit";
  grid-template-rows: 1fr 1fr 3fr 4fr 1fr;

  gap: 0.75em;

  &__input {
    width: 100%;
    min-width: 2rem;
    &--title {
      font-family: Muli;
      font-size: 1.6em;
      font-weight: 700;
    }
    &--color {
      height: 100%;
      padding: 0;
      border: 0;
    }
    &--body {
      flex-grow: 1;
      font-family: inherit;
    }
  }
  &__formGroup {
    width: 100%;
    &--title {
      display: flex;
      grid-area: title;
    }
    &--color {
      grid-area: color;
    }
    &--body {
      display: flex;
      flex-direction: column;
      flex-grow: 1;
      grid-area: body;
    }
    &--preview {
      grid-area: preview;
    }
    &--links {
      grid-area: link;
    }
    &--skills {
      grid-area: skills;
    }
    &--images {
      grid-area: images;
    }
    &--submit {
      grid-area: submit;
      button {
        width: 100%;
        padding: 1em;
        padding: 0.5em;
        color: col(success, light);
        background-color: col(success);
        border: none;
        border-radius: 0.5em;
        &:hover {
          background-color: darken(col(success), 5%);
        }
      }
    }
  }
}
</style>
