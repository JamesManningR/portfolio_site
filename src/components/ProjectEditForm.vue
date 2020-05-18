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
    <div class="projectForm__formGroup projectForm__formGroup--body">
      <textarea
        aria-label="project body"
        id="ProjectFormBody"
        placeholder="Body"
        class="projectForm__input projectForm__input--body"
        v-model="value.body"
      />
    </div>
    <project-skill-picker class="projectForm__formGroup projectForm__formGroup--skills" @skillsChanged="value.skills = $event" />
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
    <figure class="thumbnail__preview" :style="thumbnailStyling">
      <h2 class="thumbnail__title">{{ value.title }}</h2>
    </figure>
  </form>
</template>

<script>
import fileUploader from "@/components/FileUploader.vue";
import projectSkillPicker from "@/components/ProjectSkillPicker.vue";

export default {
  props: { value: Object },
  methods: {
    featuredSelected(evt) {
      console.log(evt);
      this.value.featuredImage = evt.id;
      this.thumbnailSrc = evt.src;
    },
  },
  data() {
    return {
      thumbnailSrc: "",
    };
  },
  watch: {
    value: {
      deep: true,
      handler() {
        this.$emit("input", this.value);
      },
    },
  },
  computed: {
    thumbnailStyling() {
      const backgroundImage = `url(${this.thumbnailSrc})`;
      const backgroundColor = this.value.color ? this.value.color : "";
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
  display: grid;
  grid-template-areas: "title title title color" "body body body body" "link link link link" "skills skills images images" "submit submit submit submit";
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
    &--skills {
      grid-area: skills;
    }
    &--images{
      grid-area: images;
    }
    &--submit {
      grid-area: submit;
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
</style>
