<template>
  <form class="blogPostForm">
    <section class="meta">
      <h2 class="blogPostForm__subtitle">Meta</h2>
      <section class="images">
        <file-uploader
          aria-label="project image"
          id="blogPostFormImages"
          @fileUploaded="value.images = $event"
          @featuredSelected="featuredSelected($event)"
        />
      </section>

      <section class="title">
        <input
          class="title__input"
          aria-label="project title"
          id="blogPostFormTitle"
          placeholder="Title"
          type="text"
          v-model="value.title"
        />
      </section>
    </section>

    <section class="body">
      <h2 class="blogPostForm__subtitle">Body</h2>
      <textarea
        class="body__input"
        aria-label="project body"
        id="blogPostFormBody"
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
import fileUploader from "@/components/general/ImageUploader.vue";

export default {
  components: {
    fileUploader
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
.blogPostForm {
  display: flex;
  height: 100%;
  flex-direction: column;
  grid-auto-columns: 1fr;

  gap: 0.75em;

  &__subtitle {
    grid-area: header;
  }

  > section {
    padding: 1em;
    border: 1px solid col(fg);
  }

  .meta {
    display: grid;
    grid-template-areas: "header header" "featured title" "images images";

    gap: 0.75em;

    .images {
      grid-area: images;
    }

    .title {
      grid-area: title;
    }
  }
}
</style>
