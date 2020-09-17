<template>
  <form class="postForm">
    <section class="meta">
      <h2>Meta</h2>
      <section class="images">
        <file-uploader
          aria-label="post image"
          id="PostFormImages"
          @fileUploaded="value.images = $event"
          @featuredSelected="featuredSelected($event)"
        />
      </section>

      <section class="title">
        <input
          class="title__input"
          aria-label="post title"
          id="PostFormTitle"
          placeholder="Title"
          type="text"
          v-model="value.title"
        />
      </section>
    </section>

    <section class="body">
      <h2>Body</h2>
      <textarea
        class="body__input"
        aria-label="post body"
        id="PostFormBody"
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
.postForm {
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
    grid-template-areas: "images" "title";

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
