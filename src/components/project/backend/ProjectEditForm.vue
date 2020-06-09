<template>
  <form class="projectForm">
    <section class="featured">
      <input
        id="project_featured_input"
        type="checkbox"
        class="featured__input"
        v-model="value.featured"
      />
      <label for="project_featured_input">
        <svg-path class="featured__icon" set="icoMoon" name="star" />
      </label>
    </section>

    <section class="images">
      <file-uploader
        aria-label="project image"
        id="ProjectFormImages"
        @fileUploaded="value.images = $event"
        @featuredSelected="featuredSelected($event)"
      />
    </section>

    <section class="title">
      <input
        class="title__input"
        aria-label="project title"
        id="ProjectFormTitle"
        placeholder="Title"
        type="text"
        v-model="value.title"
      />
    </section>

    <project-link-input class="links" v-model="value.links" />

    <project-skill-picker class="skills" v-model="value.skills" />

    <section class="color">
      <input
        class="color__input"
        aria-label="project color"
        id="ProjectFormcolor"
        type="color"
        v-model="value.color"
      />
    </section>

    <section class="body">
      <textarea
        class="body__input"
        aria-label="project body"
        id="ProjectFormBody"
        placeholder="Body"
        v-model="value.body"
      />
    </section>

    <div class="submit">
      <slot name="submit"></slot>
    </div>
  </form>
</template>

<script>
import fileUploader from "@/components/general/FileUploader.vue";
import projectSkillPicker from "@/components/project/backend/ProjectSkillPicker.vue";
import ProjectLinkInput from "@/components/project/backend/ProjectLinkInput";

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
.projectForm {
  display: grid;
  height: 100%;
  flex-direction: column;
  grid-auto-columns: 1fr;

  gap: 0.75em;

  .featured {
    &__input {
      width: 0;
      height: 0;
      overflow: hidden;
      opacity: 0;
      &:checked ~ .featured__label {
        background-color: red;
      }
    }
  }
}
</style>
