<template>
  <form class="projectForm">
    <section class="meta">
      <h2>Meta</h2>
      <section class="images">
        <file-uploader
          aria-label="project image"
          id="ProjectFormImages"
          @fileUploaded="value.images = $event"
          @featuredSelected="featuredSelected($event)"
        />
      </section>

      <section class="featured">
        <input
          id="project_featured_input"
          type="checkbox"
          class="featured__input"
          v-model="value.featured"
        />
        <label class="featured__label" for="project_featured_input">
          <svg-path class="featured__icon" set="icoMoon" name="star" />
          Featured
        </label>
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
    </section>

    <project-link-input class="links" v-model="value.links" />

    <section class="skills">
      <h2>Skills</h2>
      <project-skill-picker v-model="value.skills" />
    </section>

    <section class="body">
      <h2>Body</h2>
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
  display: flex;
  height: 100%;
  flex-direction: column;
  grid-auto-columns: 1fr;

  gap: 0.75em;

  > section {
    padding: 1em;
    border: 1px solid col(fg);
  }

  .meta {
    display: grid;
    grid-template-areas: "images images" "featured title";

    gap: 0.75em;

    .images {
      grid-area: images;
    }

    .featured {
      display: flex;
      grid-area: featured;
      &__input {
        width: 0;
        height: 0;
        overflow: hidden;
        opacity: 0;
        &:checked ~ .featured__label {
          svg {
            color: col(success);
          }
        }
      }
      &__label {
        display: flex;
        align-items: center;
        flex-basis: 100%;
        justify-content: center;
        border: 1px solid col(fg);
      }
    }

    .title {
      grid-area: title;
    }
  }
}
</style>
