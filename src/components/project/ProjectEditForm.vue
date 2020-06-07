<template>
  <form class="projectForm">
    <input type="checkbox" v-model="value.featured" id="">

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
.projectForm {
  display: grid;
  height: 100%;
  flex-direction: column;
  grid-auto-columns: 1fr;

  gap: 0.75em;
}
</style>
