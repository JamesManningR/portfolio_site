<template>
  <form class="projectForm">
    <div class="projectForm__formGroup projectForm__formGroup--title">
      <input
        aria-label="project title"
        id="ProjectFormTitle"
        placeholder="Title"
        class="projectForm__input projectForm__input--title"
        type="text"
        v-model="value.title"
      />
    </div>

    <div class="projectForm__formGroup projectForm__formGroup--color">
      <input
        aria-label="project color"
        id="ProjectFormcolor"
        class="projectForm__input projectForm__input--color"
        type="color"
        v-model="value.color"
      />
    </div>

    <div class="projectForm__formGroup projectForm__formGroup--body">
      <textarea
        aria-label="project body"
        id="ProjectFormBody"
        placeholder="Body"
        class="projectForm__input projectForm__input--body"
        v-model="value.body"
      />
    </div>

    <project-link-input
      class="projectForm__formGroup projectForm__formGroup--links"
      v-model="value.links"
    />

    <project-skill-picker
      class="projectForm__formGroup projectForm__formGroup--skills"
      @skillsChanged="value.skills = $event"
    />

    <div class="projectForm__formGroup projectForm__formGroup--images">
      <file-uploader
        aria-label="project image"
        id="ProjectFormImages"
        class="projectForm__input projectForm__input--images"
        @fileUploaded="value.images = $event"
        @featuredSelected="featuredSelected($event)"
      />
    </div>

    <div class="projectForm__formGroup projectForm__formGroup--submit">
      <slot name="submit"></slot>
    </div>
  </form>
</template>

<script>
import fileUploader from "@/components/FileUploader.vue";
import projectSkillPicker from "@/components/ProjectSkillPicker.vue";
import ProjectLinkInput from "@/components/ProjectLinkInput";

export default {
  props: { value: Object },
  methods: {
    featuredSelected(evt) {
      console.log(evt);
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
  },
  components: {
    fileUploader,
    projectSkillPicker,
    ProjectLinkInput
  }
};
</script>

<style lang="scss">
.projectForm {
  display: grid;
  height: 100vh;
  grid-template-rows: 1fr 8fr 3fr 1fr;
  grid-template-areas: "title title title color" "body body body body" "link link images images" "skills skills skills skills" "submit submit submit submit";
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
    &--color {
      height: 4rem;
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
    margin-bottom: 1rem;
    &--title {
      grid-area: title;
      display: flex;
      margin-bottom: 1.5rem;
    }
    &--color {
      grid-area: color;
    }
    &--body {
      grid-area: body;
      display: flex;
      flex-direction: column;
      flex-grow: 1;
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
    }
  }
}
</style>
